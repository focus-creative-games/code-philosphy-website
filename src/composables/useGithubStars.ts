import { onMounted, reactive } from 'vue'

const CACHE_KEY = 'cp-github-stars'
const CACHE_TTL_MS = 10 * 60 * 1000

interface StarCache {
  ts: number
  counts: Record<string, number>
}

function formatStarCount(n: number): string {
  return n.toLocaleString('en-US')
}

function readCache(): Record<string, number> | null {
  try {
    const raw = sessionStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as StarCache
    if (!parsed?.counts || Date.now() - parsed.ts > CACHE_TTL_MS) return null
    return parsed.counts
  } catch {
    return null
  }
}

function writeCache(counts: Record<string, number>) {
  try {
    const payload: StarCache = { ts: Date.now(), counts }
    sessionStorage.setItem(CACHE_KEY, JSON.stringify(payload))
  } catch {
    // ignore quota / private mode
  }
}

async function fetchRepoStars(repo: string): Promise<number | null> {
  const res = await fetch(`https://api.github.com/repos/${repo}`, {
    headers: { Accept: 'application/vnd.github+json' },
  })
  if (!res.ok) return null
  const data = (await res.json()) as { stargazers_count?: number }
  return typeof data.stargazers_count === 'number' ? data.stargazers_count : null
}

export function useGithubStars(
  repos: Record<string, string>,
  fallbacks: Record<string, string>,
) {
  const stars = reactive<Record<string, string>>({ ...fallbacks })

  onMounted(() => {
    const cached = readCache()
    if (cached) {
      applyCounts(cached)
      return
    }
    void refresh(repos)
  })

  function applyCounts(counts: Record<string, number>) {
    for (const [id, n] of Object.entries(counts)) {
      if (id in stars) stars[id] = formatStarCount(n)
    }
  }

  async function refresh(repoMap: Record<string, string>) {
    const entries = Object.entries(repoMap)
    const results = await Promise.allSettled(
      entries.map(async ([id, repo]) => {
        const count = await fetchRepoStars(repo)
        return { id, count }
      }),
    )

    const counts: Record<string, number> = { ...(readCache() ?? {}) }
    for (const result of results) {
      if (result.status !== 'fulfilled' || result.value.count == null) continue
      counts[result.value.id] = result.value.count
    }
    applyCounts(counts)
    writeCache(counts)
  }

  return { stars }
}
