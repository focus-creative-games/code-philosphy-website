<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { products } from "../data/products";
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
  <a class="skip-link" href="#content">跳转到主要内容</a>
  <header ref="header" class="site-header">
    <div class="container header-inner">
      <router-link to="/" class="brand" aria-label="Code Philosophy 首页"
        ><span class="brand-symbol" aria-hidden="true"
          >c<span>p</span><i></i></span
        ><span class="brand-name"
          >Code Philosophy<span>代码哲学</span></span
        ></router-link
      >
      <button
        class="menu-toggle"
        aria-controls="main-navigation"
        :aria-expanded="menuOpen"
        @click="menuOpen = !menuOpen"
      >
        {{ menuOpen ? "关闭 ×" : "菜单 ☰" }}
      </button>
      <nav
        id="main-navigation"
        aria-label="主导航"
        :class="['main-nav', { 'is-open': menuOpen }]"
      >
        <div class="product-nav">
          <button
            class="nav-link product-trigger"
            :class="{ active: products.some((p) => route.name === p.name) }"
            :aria-expanded="productsOpen"
            aria-controls="product-menu"
            @click="productsOpen = !productsOpen"
          >
            技术产品
            <span class="chevron" :class="{ flipped: productsOpen }">⌄</span>
          </button>
          <div v-if="productsOpen" id="product-menu" class="product-dropdown">
            <span class="eyebrow dropdown-label">OUR PRODUCTS</span
            ><router-link
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
                ><small>{{ p.category }}</small></span
              ><span class="arrow">↗</span></router-link
            >
          </div>
        </div>
        <router-link
          class="nav-link"
          :to="{ path: '/', hash: '#solutions' }"
          @click="close"
          >应用场景</router-link
        >
        <router-link
          class="nav-link"
          :to="{ path: '/', hash: '#developers' }"
          @click="close"
          >开发者资源</router-link
        >
        <router-link
          class="nav-link"
          :to="{ path: '/', hash: '#about' }"
          @click="close"
          >关于我们</router-link
        >
        <a
          class="nav-link github-link"
          href="https://github.com/focus-creative-games"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub <span>↗</span></a
        >
        <router-link
          to="/business"
          class="button button-dark header-contact"
          @click="close"
          >商务咨询 <span>↗</span></router-link
        >
      </nav>
    </div>
  </header>
</template>
