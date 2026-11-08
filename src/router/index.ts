import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
} from "vue-router";
import Home from "../views/Home.vue";
import { products } from "../data/products";
import { pageMetadata } from "../i18n/metadata";

const routes = (["zh", "en"] as const).flatMap((locale) => {
  const prefix = locale === "en" ? "/en" : "";
  return [
    { path: prefix + "/", name: prefix + "Home", component: Home },
    ...products.map((product) => ({
      path: prefix + "/" + product.id,
      name: prefix + product.name,
      meta: { productId: product.id },
      component: () => import("../views/Product.vue"),
    })),
    {
      path: prefix + "/luatier",
      name: prefix + "LuaTier",
      component: () => import("../views/LuaTier.vue"),
    },
    {
      path: prefix + "/business",
      alias: prefix + "/bussiness",
      name: prefix + "Business",
      component: () => import("../views/Business.vue"),
    },
    { path: prefix + "/:pathMatch(.*)*", redirect: prefix + "/" },
  ];
});

// Preserve bookmarked URLs from the previous hash-based site.
export const migratedLegacyRoute =
  !import.meta.env.SSR && window.location.hash.startsWith("#/");
if (migratedLegacyRoute) {
  const legacyPath = window.location.hash.slice(1).replace(/%23/gi, "#");
  window.history.replaceState(null, "", legacyPath);
}

const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (to.hash)
      return {
        el: to.hash,
        top: 100,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      };
    return { top: 0, behavior: "instant" };
  },
});

router.afterEach((to) => {
  if (import.meta.env.SSR) return;
  const meta = pageMetadata(to.path);
  document.documentElement.lang = meta.lang;
  document.title = meta.title;
  const set = (selector: string, attr: string, value: string) =>
    document.querySelector(selector)?.setAttribute(attr, value);
  set('meta[name="description"]', "content", meta.description);
  set('meta[property="og:title"]', "content", meta.title);
  set('meta[property="og:description"]', "content", meta.description);
  set('meta[property="og:locale"]', "content", meta.ogLocale);
  set('meta[property="og:url"]', "content", meta.url);
  set('link[rel="canonical"]', "href", meta.url);
  set('link[hreflang="zh-Hans"]', "href", meta.zhUrl);
  set('link[hreflang="en"]', "href", meta.enUrl);
  set('link[hreflang="x-default"]', "href", meta.zhUrl);
});

export default router;
