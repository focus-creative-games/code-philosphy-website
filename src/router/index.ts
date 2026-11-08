import {
  createRouter,
  createMemoryHistory,
  createWebHistory,
} from "vue-router";
import Home from "../views/Home.vue";
import { products } from "../data/products";

const routes = [
  { path: "/", name: "Home", component: Home },
  ...products.map((product) => ({
    path: "/" + product.id,
    name: product.name,
    component: () => import("../views/Product.vue"),
  })),
  {
    path: "/luatier",
    name: "LuaTier",
    component: () => import("../views/LuaTier.vue"),
  },
  {
    path: "/business",
    alias: "/bussiness",
    name: "Business",
    component: () => import("../views/Business.vue"),
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

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
  const product = products.find((p) => p.name === to.name);
  document.title = product
    ? `${product.name} · ${product.category} | Code Philosophy`
    : to.name === "Business"
      ? "商务咨询 | Code Philosophy 代码哲学"
      : to.name === "LuaTier"
        ? "LuaTier | Code Philosophy 代码哲学"
        : "Code Philosophy 代码哲学 — 为游戏研发，构建可靠的技术底座";
  const description =
    product?.description ||
    "Code Philosophy（代码哲学）专注游戏行业的深度技术解决方案。探索 HybridCLR、Luban、LeanCLR、Obfuz、zlua 与 ZenTS。";
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", description);
  document
    .querySelector('meta[property="og:title"]')
    ?.setAttribute("content", document.title);
  document
    .querySelector('meta[property="og:description"]')
    ?.setAttribute("content", description);
  const canonicalPath =
    to.name === "Business" ? "/business/" : to.path.replace(/\/?$/, "/");
  const canonical = "https://code-philosophy.com" + canonicalPath;
  document
    .querySelector('link[rel="canonical"]')
    ?.setAttribute("href", canonical);
  document
    .querySelector('meta[property="og:url"]')
    ?.setAttribute("content", canonical);
});

export default router;
