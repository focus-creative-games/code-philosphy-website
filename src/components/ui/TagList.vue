<script setup lang="ts">
/** Version numbers, platforms, languages — all monospace. */
defineProps<{ items: readonly string[] }>()
</script>

<template>
  <ul class="flex flex-wrap gap-2">
    <li
      v-for="item in items"
      :key="item"
      class="data border border-line bg-raised px-3 py-1.5 text-[13px] text-fg-secondary"
    >
      {{ item }}
    </li>
  </ul>
</template>
