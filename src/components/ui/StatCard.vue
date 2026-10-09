<script setup lang="ts">
/** A single figure. The value is always monospace — data reads as data. */
defineProps<{
  value: string
  label: string
  note?: string
}>()
</script>

<template>
  <div class="border border-line bg-raised p-5">
    <div class="data text-xl text-fg sm:text-2xl">{{ value }}</div>
    <div class="mt-2 text-[13px] leading-snug text-fg-secondary">
      {{ label }}
    </div>
    <div v-if="note" class="mt-1 text-xs leading-snug text-fg-muted">
      {{ note }}
    </div>
  </div>
</template>
