<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import ScrollToTop from './components/layout/ScrollToTop.vue'
import { useReveal } from './composables/useReveal'

useReveal()
</script>

<template>
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:border focus:border-accent focus:bg-base focus:px-3 focus:py-2 focus:text-sm focus:text-fg"
  >
    Skip to content
  </a>

  <div class="flex min-h-screen flex-col overflow-x-hidden">
    <SiteHeader />
    <main id="main" class="flex-1 pt-16">
      <RouterView />
    </main>
    <SiteFooter />
    <ScrollToTop />
  </div>
</template>
