<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Icon from '../icons/Icon.vue'

const { t } = useI18n()
const visible = ref(false)

function onScroll() {
  visible.value = window.scrollY > 600
}

function toTop() {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <button
    v-show="visible"
    type="button"
    class="fixed right-5 bottom-5 z-40 border border-line bg-overlay p-2.5 text-fg-secondary transition-colors duration-200 hover:border-line-strong hover:text-fg"
    :aria-label="t('actions.backToTop')"
    @click="toTop"
  >
    <Icon name="chevronUp" :size="18" />
  </button>
</template>
