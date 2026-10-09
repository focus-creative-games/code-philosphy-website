/**
 * Site-wide constants. Single source of truth for domain, locales and
 * product identity. Copy lives in src/locales — nothing here is translated.
 */

export const SITE_URL = 'https://code-philosophy.com'
export const GITHUB_ORG = 'https://github.com/focus-creative-games'
export const BUSINESS_EMAIL = 'business@code-philosophy.com'

export const LOCALES = ['zh', 'en'] as const
export type Locale = (typeof LOCALES)[number]
export const DEFAULT_LOCALE: Locale = 'zh'

/** <html lang> + hreflang values */
export const HTML_LANG: Record<Locale, string> = {
  zh: 'zh-Hans',
  en: 'en',
}

export type ProductId =
  | 'hybridclr'
  | 'leanclr'
  | 'zlua'
  | 'zents'
  | 'luatier'
  | 'luban'
  | 'obfuz'

export type ProductGroupId = 'runtime' | 'scripting' | 'data' | 'security'

export interface Product {
  id: ProductId
  /** Display name — a proper noun, never translated. */
  name: string
  group: ProductGroupId
  /** Route path without locale prefix. */
  path: string
  /** owner/repo for live star counts. */
  repo: string
  /** Fallback star count shown before the API responds. */
  starsFallback: number
  /** CSS custom property holding this product's identity colour. */
  colorVar: string
  docs?: string
  email?: string
  qq?: string
  /** Extra repos surfaced in the resources section. */
  relatedRepos?: { name: string; url: string; descKey: string }[]
  /** The flagship gets double width on the home grid. */
  flagship?: boolean
}

export const PRODUCTS: Product[] = [
  {
    id: 'hybridclr',
    name: 'HybridCLR',
    group: 'runtime',
    path: '/hybridclr',
    repo: 'focus-creative-games/hybridclr',
    starsFallback: 8000,
    colorVar: '--color-p-hybridclr',
    docs: 'https://www.hybridclr.cn/',
    flagship: true,
  },
  {
    id: 'leanclr',
    name: 'LeanCLR',
    group: 'runtime',
    path: '/leanclr',
    repo: 'focus-creative-games/leanclr',
    starsFallback: 663,
    colorVar: '--color-p-leanclr',
    docs: 'https://doc.leanclr.com/',
    email: 'leanclr@code-philosophy.com',
    qq: '1047250380',
  },
  {
    id: 'zlua',
    name: 'ZLua',
    group: 'scripting',
    path: '/zlua',
    repo: 'focus-creative-games/zlua',
    starsFallback: 226,
    colorVar: '--color-p-zlua',
    docs: 'https://doc.zlua.cn',
    email: 'zlua@code-philosophy.com',
    qq: '824793773',
  },
  {
    id: 'zents',
    name: 'ZenTS',
    group: 'scripting',
    path: '/zents',
    repo: 'focus-creative-games/zen-ts',
    starsFallback: 4,
    colorVar: '--color-p-zents',
    docs: 'https://zents.code-philosophy.com/',
    email: 'zen-ts@code-philosophy.com',
    qq: '1095435513',
  },
  {
    id: 'luatier',
    name: 'LuaTier',
    group: 'scripting',
    path: '/luatier',
    repo: 'focus-creative-games/luatier',
    starsFallback: 12,
    colorVar: '--color-p-luatier',
  },
  {
    id: 'luban',
    name: 'Luban',
    group: 'data',
    path: '/luban',
    repo: 'focus-creative-games/luban',
    starsFallback: 4500,
    colorVar: '--color-p-luban',
    docs: 'https://www.datable.cn/',
  },
  {
    id: 'obfuz',
    name: 'Obfuz',
    group: 'security',
    path: '/obfuz',
    repo: 'focus-creative-games/obfuz',
    starsFallback: 800,
    colorVar: '--color-p-obfuz',
    docs: 'https://www.obfuz.com/',
    email: 'obfuz@code-philosophy.com',
    qq: '1048396510',
  },
]

export const PRODUCT_GROUPS: ProductGroupId[] = [
  'runtime',
  'scripting',
  'data',
  'security',
]

export function productById(id: ProductId): Product {
  const p = PRODUCTS.find((x) => x.id === id)
  if (!p) throw new Error(`Unknown product: ${id}`)
  return p
}

export function productsInGroup(group: ProductGroupId): Product[] {
  return PRODUCTS.filter((p) => p.group === group)
}

/** Repo map consumed by useGithubStars. */
export const PRODUCT_REPOS: Record<string, string> = Object.fromEntries(
  PRODUCTS.map((p) => [p.id, p.repo]),
)

export const PRODUCT_STAR_FALLBACKS: Record<string, number> =
  Object.fromEntries(PRODUCTS.map((p) => [p.id, p.starsFallback]))
