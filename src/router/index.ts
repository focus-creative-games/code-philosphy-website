import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router'
import { DEFAULT_LOCALE, LOCALES, type Locale } from '../data/site'
import { detectLocale, isLocale, rememberLocale, setI18nLocale } from '../i18n'

/**
 * Routes are defined once without a locale prefix, then mounted twice:
 * bare (`/hybridclr`) for the default locale and prefixed (`/en/hybridclr`)
 * for every locale. `/zh/...` is also accepted and normalised to bare.
 */
const pages: RouteRecordRaw[] = [
  { path: '', name: 'home', component: () => import('../views/Home.vue') },
  { path: 'solutions', name: 'solutions', component: () => import('../views/Solutions.vue') },
  { path: 'customers', name: 'customers', component: () => import('../views/Customers.vue') },
  { path: 'about', name: 'about', component: () => import('../views/About.vue') },
  { path: 'services', name: 'services', component: () => import('../views/Services.vue') },

  { path: 'hybridclr', name: 'hybridclr', component: () => import('../views/products/HybridCLR.vue') },
  { path: 'leanclr', name: 'leanclr', component: () => import('../views/products/LeanCLR.vue') },
  { path: 'zlua', name: 'zlua', component: () => import('../views/products/ZLua.vue') },
  { path: 'zents', name: 'zents', component: () => import('../views/products/ZenTS.vue') },
  { path: 'luatier', name: 'luatier', component: () => import('../views/products/LuaTier.vue') },
  { path: 'luban', name: 'luban', component: () => import('../views/products/Luban.vue') },
  { path: 'obfuz', name: 'obfuz', component: () => import('../views/products/Obfuz.vue') },
]

/** Clone the page list under a name prefix so route names stay unique. */
function withPrefix(prefix: string, children: RouteRecordRaw[]): RouteRecordRaw[] {
  return children.map((r) => ({
    ...r,
    name: r.name ? `${prefix}-${String(r.name)}` : undefined,
  }))
}

const routes: RouteRecordRaw[] = [
  // Default locale, no prefix: /, /hybridclr …
  {
    path: '/',
    children: pages,
    meta: { locale: DEFAULT_LOCALE },
  },

  // Explicit locale prefixes: /en/hybridclr, /zh/hybridclr …
  ...LOCALES.map((locale) => ({
    path: `/${locale}`,
    children: withPrefix(locale, pages),
    meta: { locale },
  })),

  // Legacy path kept working (it shipped with this typo).
  { path: '/bussiness', redirect: '/services' },
  { path: '/:locale(en|zh)/bussiness', redirect: '/services' },

  { path: '/:pathMatch(.*)*', name: 'not-found', component: () => import('../views/NotFound.vue') },
]

/**
 * The site previously used hash history, so links such as
 * `https://code-philosophy.com/#/hybridclr` exist in docs, chat groups and
 * bookmarks. Rewrite them to a real path *before* createWebHistory() reads
 * window.location — once the history object exists it has already captured the
 * old URL, and a later router.replace() races the initial navigation.
 */
function redirectLegacyHash(): boolean {
  const hash = window.location.hash
  if (!hash.startsWith('#/')) return false

  // '#/hybridclr?a=1' -> path '/hybridclr', search '?a=1'
  const raw = hash.slice(1)
  const q = raw.indexOf('?')
  const path = q === -1 ? raw : raw.slice(0, q)
  const search = q === -1 ? window.location.search : raw.slice(q)

  window.history.replaceState(null, '', path + search)
  return true
}

redirectLegacyHash()

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth', top: 80 }
    return { top: 0 }
  },
})

let isFirstNavigation = true

/** `/zh/foo` is canonicalised to `/foo` since zh is the default locale. */
router.beforeEach((to) => {
  if (to.path === `/${DEFAULT_LOCALE}` || to.path.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const stripped = to.path.slice(DEFAULT_LOCALE.length + 1) || '/'
    return { path: stripped, query: to.query, hash: to.hash, replace: true }
  }
  return true
})

/**
 * Keep i18n in step with the route.
 *
 * On the very first load of the bare root we honour the visitor's preferred
 * locale. This is deliberately limited to `/` — redirecting deep links would
 * bounce crawlers and shared URLs away from the page they asked for.
 */
router.beforeEach((to) => {
  const wasFirst = isFirstNavigation
  isFirstNavigation = false

  const routeLocale = to.matched.find((r) => r.meta?.locale)?.meta.locale
  const locale: Locale = isLocale(routeLocale) ? routeLocale : DEFAULT_LOCALE

  if (wasFirst && to.path === '/') {
    const preferred = detectLocale()
    if (preferred !== DEFAULT_LOCALE) {
      return { path: `/${preferred}`, query: to.query, hash: to.hash, replace: true }
    }
  }

  setI18nLocale(locale)
  rememberLocale(locale)
  return true
})

export default router
