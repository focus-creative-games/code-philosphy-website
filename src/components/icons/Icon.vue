<script setup lang="ts">
import { computed } from 'vue'
import { ICON_PATHS, type IconName } from './paths'

const props = withDefaults(
  defineProps<{
    name: IconName
    size?: number | string
    /** Accessible label. Omit for purely decorative icons. */
    label?: string
  }>(),
  { size: 20 },
)

const d = computed(() => ICON_PATHS[props.name])
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.5"
    stroke-linecap="round"
    stroke-linejoin="round"
    :aria-hidden="label ? undefined : true"
    :aria-label="label"
    :role="label ? 'img' : undefined"
    class="shrink-0"
  >
    <path :d="d" />
  </svg>
</template>
