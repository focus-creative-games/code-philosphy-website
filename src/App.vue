<script setup lang="ts">
import SiteHeader from "./components/SiteHeader.vue";
import SiteFooter from "./components/SiteFooter.vue";
import ScrollToTop from "./components/ScrollToTop.vue";
</script>
<template>
  <div id="page">
    <SiteHeader />
    <main id="content" tabindex="-1"><router-view /></main>
    <SiteFooter /><ScrollToTop />
  </div>
</template>
