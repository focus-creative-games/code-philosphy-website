<script setup lang="ts">
import { computed } from 'vue'
import { CUSTOMERS } from '../data/customers'

const props = defineProps<{
  /** Show only the first N logos (home page teaser). */
  limit?: number
}>()

const shown = computed(() =>
  props.limit ? CUSTOMERS.slice(0, props.limit) : CUSTOMERS,
)
</script>

<template>
  <ul
    class="grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-6"
  >
    <li
      v-for="c in shown"
      :key="c.logo"
      class="group flex h-20 items-center justify-center bg-raised p-4 transition-colors duration-200 hover:bg-overlay"
    >
      <img
        :src="c.logo"
        :alt="c.name"
        :title="c.name"
        loading="lazy"
        decoding="async"
        class="max-h-full max-w-full object-contain opacity-70 grayscale transition duration-200 group-hover:opacity-100 group-hover:grayscale-0"
      />
    </li>
  </ul>
</template>
