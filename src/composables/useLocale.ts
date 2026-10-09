import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import {
  DEFAULT_LOCALE,
  HTML_LANG,
  LOCALES,
  SITE_URL,
  type Locale,
} from '../data/site'
import { isLocale } from '../i18n'

/** Strips any locale prefix from a path, yielding the canonical bare path. */
export function stripLocale(path: string): string {
  for (const l of LOCALES) {
    if (path === `/${l}`) return '/'
    if (path.startsWith(`/${l}/`)) return path.slice(l.length + 1)
  }
  return path
}

/** Builds the path for `bare` in `locale`. Default locale stays unprefixed. */
export function localizePath(bare: string, locale: Locale): string {
  const clean = bare === '/' ? '' : bare
  return locale === DEFAULT_LOCALE ? clean || '/' : `/${locale}${clean}`
}

export function useLocale() {
  const route = useRoute()
  const router = useRouter()
  const { locale: i18nLocale } = useI18n()

  const locale = computed<Locale>(() =>
    isLocale(i18nLocale.value) ? i18nLocale.value : DEFAULT_LOCALE,
  )

  const htmlLang = computed(() => HTML_LANG[locale.value])

  /** Current page without its locale prefix — the canonical identity. */
  const barePath = computed(() => stripLocale(route.path))

  /** Prefix a route path for the active locale. Use for every internal link. */
  function to(bare: string): string {
    return localizePath(bare, locale.value)
  }

  /** Absolute URL for a bare path in a given locale. */
  function absoluteUrl(bare: string, l: Locale = locale.value): string {
    return SITE_URL + localizePath(bare, l)
  }

  async function switchTo(next: Locale) {
    if (next === locale.value) return
    await router.push({
      path: localizePath(barePath.value, next),
      query: route.query,
      hash: route.hash,
    })
  }

  return { locale, htmlLang, barePath, to, absoluteUrl, switchTo }
}
