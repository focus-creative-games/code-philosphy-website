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
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import ScrollToTop from './components/ScrollToTop.vue'

// IntersectionObserver for fade-in-up animations
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll('.fade-in-up').forEach((el) => {
    observer.observe(el)
  })
}

const router = useRouter()

onMounted(() => {
  initScrollAnimations()
})

// Re-run after each navigation
router.afterEach(() => {
  setTimeout(() => {
    initScrollAnimations()
  }, 100)
})
</script>
