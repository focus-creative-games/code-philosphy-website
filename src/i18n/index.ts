import { createI18n } from 'vue-i18n'
import { DEFAULT_LOCALE, LOCALES, type Locale } from '../data/site'
import zh from '../locales/zh'
import en from '../locales/en'

const STORAGE_KEY = 'cp-locale'

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (LOCALES as readonly string[]).includes(value)
}

/** Remembered choice wins; otherwise infer from the browser. */
export function detectLocale(): Locale {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (isLocale(stored)) return stored
  } catch {
    // private mode / storage disabled
  }

  const candidates = [
    ...(navigator.languages ?? []),
    navigator.language,
  ].filter(Boolean)

  for (const tag of candidates) {
    const base = tag.toLowerCase().split('-')[0]
    if (base === 'zh') return 'zh'
    if (base === 'en') return 'en'
  }

  return DEFAULT_LOCALE
}

export function rememberLocale(locale: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, locale)
  } catch {
    // ignore
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  messages: { zh, en },
  // Copy intentionally contains "{" in code samples; don't warn.
  warnHtmlMessage: false,
  missingWarn: import.meta.env.DEV,
  fallbackWarn: false,
})

export function setI18nLocale(locale: Locale) {
  i18n.global.locale.value = locale
}
