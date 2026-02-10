<template>
  <div id="page">
    <SiteHeader />
    <div id="content" class="site-content">
      <router-view />
    </div>
    <SiteFooter />
    <ScrollToTop />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import ScrollToTop from './components/ScrollToTop.vue'
</script>
