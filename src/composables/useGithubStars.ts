import { computed, onMounted, reactive } from 'vue'
import { PRODUCT_REPOS, PRODUCT_STAR_FALLBACKS } from '../data/site'

const CACHE_KEY = 'cp-github-stars'
const CACHE_TTL_MS = 10 * 60 * 1000

interface StarCache {
  ts: number
  counts: Record<string, number>
}

/** 8012 -> "8,012"; 8012 -> "8.0k" when compact. */
export function formatStars(n: number, compact = false): string {
  if (compact && n >= 1000) {
    return `${(n / 1000).toFixed(1).replace(/\.0$/, '')}k`
  }
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
    sessionStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ ts: Date.now(), counts } satisfies StarCache),
    )
  } catch {
    // quota exceeded / private mode
  }
}

/** Module-level so every component instance reads the same counts. */
let sharedCounts: Record<string, number> | null = null
let inFlight: Promise<void> | null = null

async function fetchRepoStars(repo: string): Promise<number | null> {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: { Accept: 'application/vnd.github+json' },
    })
    if (!res.ok) return null
    const data = (await res.json()) as { stargazers_count?: number }
    return typeof data.stargazers_count === 'number'
      ? data.stargazers_count
      : null
  } catch {
    // Offline, rate limited, or blocked — fall back to the static count.
    return null
  }
}

/**
 * Live star counts for every product, keyed by product id and seeded with
 * static fallbacks so the UI never renders an empty slot.
 *
 * State is module-level and deliberately covers all repos regardless of who
 * asks: the header wants the site-wide total while a product page wants one
 * number, and fetching per-caller would multiply requests against GitHub's
 * 60/hour unauthenticated budget. Callers just read the keys they need.
 */
export function useGithubStars() {
  const repos = PRODUCT_REPOS
  const counts =
    sharedCounts ?? (sharedCounts = reactive({ ...PRODUCT_STAR_FALLBACKS }))

  function apply(fetched: Record<string, number>) {
    for (const [id, n] of Object.entries(fetched)) {
      if (id in counts) counts[id] = n
    }
  }

  async function refresh() {
    const results = await Promise.allSettled(
      Object.entries(repos).map(async ([id, repo]) => ({
        id,
        count: await fetchRepoStars(repo),
      })),
    )

    const merged: Record<string, number> = { ...(readCache() ?? {}) }
    let gotAny = false
    for (const r of results) {
      if (r.status !== 'fulfilled' || r.value.count == null) continue
      merged[r.value.id] = r.value.count
      gotAny = true
    }
    if (!gotAny) return
    apply(merged)
    writeCache(merged)
  }

  onMounted(() => {
    const cached = readCache()
    if (cached) {
      apply(cached)
      return
    }
    // Exactly one fetch round per page load. This is never reset: route views
    // are lazy-loaded and mount a tick after the header, so clearing it on
    // settle would let the second mount fire a duplicate round.
    inFlight ??= refresh()
    void inFlight
  })

  const total = computed(() =>
    Object.values(counts).reduce((sum, n) => sum + n, 0),
  )

  return { counts, total }
}
