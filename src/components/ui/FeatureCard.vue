<script setup lang="ts">
import Icon from '../icons/Icon.vue'
import type { IconName } from '../icons/paths'

defineProps<{
  icon: IconName
  title: string
  desc: string
}>()
</script>

<template>
  <div
    class="group border border-line bg-raised p-6 transition-colors duration-200 hover:border-line-strong"
  >
    <Icon
      :name="icon"
      :size="22"
      class="text-fg-muted transition-colors duration-200 group-hover:text-accent"
    />
    <h3 class="mt-4 text-base">{{ title }}</h3>
    <p class="mt-2 text-sm leading-relaxed text-fg-secondary">{{ desc }}</p>
  </div>
</template>
