import { computed, type MaybeRefOrGetter, toValue } from 'vue'
import { useHead, type ReactiveHead } from '@unhead/vue'
import { HTML_LANG, LOCALES, SITE_URL } from '../data/site'
import { useLocale } from './useLocale'

export interface SeoInput {
  title: string
  description: string
  /** Absolute or site-relative OG image. Defaults to the site card. */
  image?: string
  /** Structured data appended as application/ld+json. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[]
}

/**
 * OG/Twitter crawlers do not reliably render SVG, so this must be a raster.
 * Regenerate from images/og/default.svg with `node scripts/optimise-images.mjs`.
 */
const DEFAULT_OG_IMAGE = '/images/og/default.png'

/**
 * Per-page title, description, canonical, hreflang alternates, OG/Twitter
 * cards and optional JSON-LD. Call once per view.
 */
export function useSeo(input: MaybeRefOrGetter<SeoInput>) {
  const { locale, barePath, absoluteUrl, htmlLang } = useLocale()

  const resolved = computed(() => toValue(input))

  const canonical = computed(() => absoluteUrl(barePath.value))

  const ogImage = computed(() => {
    const img = resolved.value.image ?? DEFAULT_OG_IMAGE
    return img.startsWith('http') ? img : SITE_URL + img
  })

  useHead(() => {
    const seo = resolved.value
    const jsonLd = seo.jsonLd
      ? Array.isArray(seo.jsonLd)
        ? seo.jsonLd
        : [seo.jsonLd]
      : []

    return {
      title: seo.title,
      htmlAttrs: { lang: htmlLang.value },
      link: [
        { rel: 'canonical', href: canonical.value },
        // hreflang alternates: one per locale plus x-default pointing at zh.
        ...LOCALES.map((l) => ({
          rel: 'alternate' as const,
          hreflang: HTML_LANG[l],
          href: absoluteUrl(barePath.value, l),
        })),
        {
          rel: 'alternate' as const,
          hreflang: 'x-default',
          href: absoluteUrl(barePath.value, 'zh'),
        },
      ] as NonNullable<ReactiveHead['link']>,
      meta: [
        { name: 'description', content: seo.description },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Code Philosophy' },
        { property: 'og:locale', content: locale.value === 'zh' ? 'zh_CN' : 'en_US' },
        { property: 'og:title', content: seo.title },
        { property: 'og:description', content: seo.description },
        { property: 'og:url', content: canonical.value },
        { property: 'og:image', content: ogImage.value },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: seo.title },
        { name: 'twitter:description', content: seo.description },
        { name: 'twitter:image', content: ogImage.value },
      ],
      script: jsonLd.map((data) => ({
        type: 'application/ld+json',
        innerHTML: JSON.stringify(data),
      })),
    }
  })
}

/** Organization JSON-LD for the home page. */
export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Code Philosophy',
    alternateName: '代码哲学',
    url: SITE_URL,
    logo: `${SITE_URL}/images/bg/site-logo.png`,
    description: 'Runtime infrastructure for game engineering.',
    sameAs: ['https://github.com/focus-creative-games'],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'business@code-philosophy.com',
    },
  }
}

/** SoftwareApplication JSON-LD for a product page. */
export function productJsonLd(opts: {
  name: string
  description: string
  url: string
  repo: string
  docs?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Windows, macOS, Linux, iOS, Android, WebGL',
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    author: { '@type': 'Organization', name: 'Code Philosophy', url: SITE_URL },
    codeRepository: opts.repo,
    ...(opts.docs ? { documentation: opts.docs } : {}),
  }
}
