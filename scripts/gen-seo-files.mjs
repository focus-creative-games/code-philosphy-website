/**
 * Emits sitemap.xml and robots.txt into dist/ after the Vite build.
 * Routes are mirrored from src/router/index.ts — keep both in step.
 */
import { writeFile } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const DIST = resolve(ROOT, 'dist')
const SITE_URL = 'https://code-philosophy.com'

const LOCALES = [
  { code: 'zh', hreflang: 'zh-Hans', prefix: '' },
  { code: 'en', hreflang: 'en', prefix: '/en' },
]

// Bare paths with their relative priority.
const PAGES = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/hybridclr', priority: '0.9', changefreq: 'weekly' },
  { path: '/leanclr', priority: '0.9', changefreq: 'weekly' },
  { path: '/zlua', priority: '0.8', changefreq: 'weekly' },
  { path: '/zents', priority: '0.8', changefreq: 'weekly' },
  { path: '/luatier', priority: '0.7', changefreq: 'monthly' },
  { path: '/luban', priority: '0.8', changefreq: 'weekly' },
  { path: '/obfuz', priority: '0.8', changefreq: 'weekly' },
  { path: '/solutions', priority: '0.8', changefreq: 'monthly' },
  { path: '/customers', priority: '0.6', changefreq: 'monthly' },
  { path: '/about', priority: '0.6', changefreq: 'monthly' },
  { path: '/services', priority: '0.7', changefreq: 'monthly' },
]

const today = new Date().toISOString().slice(0, 10)

function url(locale, path) {
  const p = path === '/' ? '' : path
  const built = `${SITE_URL}${locale.prefix}${p}`
  // The bare origin needs an explicit root slash to be a valid <loc>.
  return built === SITE_URL ? `${SITE_URL}/` : built
}

const entries = LOCALES.flatMap((locale) =>
  PAGES.map((page) => {
    // Every URL advertises all language variants of the same page.
    const alternates = LOCALES.map(
      (alt) =>
        `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${url(alt, page.path)}"/>`,
    )
      .concat(
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(LOCALES[0], page.path)}"/>`,
      )
      .join('\n')

    return [
      '  <url>',
      `    <loc>${url(locale, page.path)}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${page.changefreq}</changefreq>`,
      `    <priority>${page.priority}</priority>`,
      alternates,
      '  </url>',
    ].join('\n')
  }),
).join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}
</urlset>
`

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`

await writeFile(resolve(DIST, 'sitemap.xml'), sitemap, 'utf8')
await writeFile(resolve(DIST, 'robots.txt'), robots, 'utf8')

console.log(
  `[seo] sitemap.xml (${LOCALES.length * PAGES.length} urls) + robots.txt written`,
)
