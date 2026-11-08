<script setup lang="ts">
import { useLocale } from "../i18n";
import LocaleLink from "../components/LocaleLink.vue";
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { localizedPath } from "../i18n";
import { products } from "../data/products";
const { t, locale } = useLocale();

const route = useRoute();
const menuOpen = ref(false);
const productsOpen = ref(false);
const header = ref<HTMLElement | null>(null);
function close() {
  menuOpen.value = false;
  productsOpen.value = false;
}
watch(() => route.fullPath, close);
function outside(event: PointerEvent) {
  if (!header.value?.contains(event.target as Node)) close();
}
function escape(event: KeyboardEvent) {
  if (event.key === "Escape") {
    const focusTarget = menuOpen.value ? ".menu-toggle" : ".product-trigger";
    close();
    header.value?.querySelector<HTMLButtonElement>(focusTarget)?.focus();
  }
}
onMounted(() => {
  document.addEventListener("pointerdown", outside);
  document.addEventListener("keydown", escape);
});
onUnmounted(() => {
  document.removeEventListener("pointerdown", outside);
  document.removeEventListener("keydown", escape);
});
</script>
<template>
  <a class="skip-link" href="#content">{{ t("跳转到主要内容") }}</a>
  <header ref="header" class="site-header">
    <div class="container header-inner">
      <LocaleLink to="/" class="brand" :aria-label="t('Code Philosophy 首页')"
        ><span class="brand-symbol" aria-hidden="true"
          >c<span>p</span><i></i></span
        ><span class="brand-name"
          >Code Philosophy<span>{{ t("代码哲学") }}</span></span
        ></LocaleLink
      >
      <RouterLink
        class="language-switch"
        :to="{
          path: localizedPath(route.path, locale === 'en' ? 'zh' : 'en'),
          query: route.query,
          hash: route.hash,
        }"
        :lang="locale === 'en' ? 'zh-Hans' : 'en'"
        :hreflang="locale === 'en' ? 'zh-Hans' : 'en'"
        :aria-label="locale === 'en' ? '切换到中文' : 'Switch to English'"
        >{{ locale === "en" ? "中文" : "EN" }}</RouterLink
      >
      <button
        class="menu-toggle"
        aria-controls="main-navigation"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? t("关闭 ×") : t("菜单 ☰") }}
      </button>
      <nav
        id="main-navigation"
        :aria-label="t('主导航')"
        :class="['main-nav', { 'is-open': menuOpen }]"
      >
        <div class="product-nav">
          <button
            class="nav-link product-trigger"
            :class="{
              active: products.some((p) => route.meta.productId === p.id),
            }"
            :aria-expanded="productsOpen"
            aria-controls="product-menu"
            @click="productsOpen = !productsOpen"
          >
            {{ t("技术产品")
            }}<span class="chevron" :class="{ flipped: productsOpen }">⌄</span>
          </button>
          <div v-if="productsOpen" id="product-menu" class="product-dropdown">
            <span class="eyebrow dropdown-label">OUR PRODUCTS</span
            ><LocaleLink
              v-for="p in products"
              :key="p.id"
              :to="'/' + p.id"
              class="dropdown-item"
              @click="close"
              ><span
                class="product-mark small"
                :style="{ '--product-color': p.color }"
                >{{ p.mark }}</span
              ><span
                ><strong>{{ p.name }}</strong
                ><small>{{ t(p.category) }}</small></span
              ><span class="arrow">↗</span></LocaleLink
            >
          </div>
        </div>
        <LocaleLink
          class="nav-link"
          :to="{ path: '/', hash: '#solutions' }"
          @click="close"
          >{{ t("应用场景") }}</LocaleLink
        >
        <LocaleLink
          class="nav-link"
          :to="{ path: '/', hash: '#developers' }"
          @click="close"
          >{{ t("开发者资源") }}</LocaleLink
        >
        <LocaleLink
          class="nav-link"
          :to="{ path: '/', hash: '#about' }"
          @click="close"
          >{{ t("关于我们") }}</LocaleLink
        >
        <a
          class="nav-link github-link"
          href="https://github.com/focus-creative-games"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub <span>↗</span></a
        >
        <LocaleLink
          to="/business"
          class="button button-dark header-contact"
          @click="close"
          >{{ t("商务咨询") }}<span>↗</span></LocaleLink
        >
      </nav>
    </div>
  </header>
</template>
