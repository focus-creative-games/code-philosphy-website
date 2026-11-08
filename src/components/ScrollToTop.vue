<template>
  <Transition name="scroll-btn">
    <button
      v-show="visible"
      class="scroll-to-top"
      @click="scrollToTop"
      :aria-label="t('回到顶部')"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  </Transition>
</template>

<script setup lang="ts">
import { useLocale } from "../i18n";
import { ref, onMounted, onUnmounted } from "vue";
const { t } = useLocale();

const visible = ref(false);

function handleScroll() {
  visible.value = window.scrollY > 300;
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "instant"
      : "smooth",
  });
}

onMounted(() => window.addEventListener("scroll", handleScroll));
onUnmounted(() => window.removeEventListener("scroll", handleScroll));
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  right: 28px;
  bottom: 28px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  color: #ffffff;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
  transition: all 0.3s ease;
}

.scroll-to-top:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(59, 130, 246, 0.5);
}

.scroll-btn-enter-active,
.scroll-btn-leave-active {
  transition:
    opacity 0.3s,
    transform 0.3s;
}

.scroll-btn-enter-from,
.scroll-btn-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
