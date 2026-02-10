<template>
  <button
    v-show="visible"
    class="scroll-to-top"
    @click="scrollToTop"
    aria-label="回到顶部"
  >
    <svg width="20" height="12" viewBox="57 35.171 26 16.043" fill="currentColor">
      <path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z" transform="rotate(180, 70, 43.192)" />
    </svg>
  </button>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function handleScroll() {
  visible.value = window.scrollY > 300
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #046bd2;
  color: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  transition: background 0.3s, opacity 0.3s;
  opacity: 0.8;
}

.scroll-to-top:hover {
  background: #045cb4;
  opacity: 1;
}
</style>
