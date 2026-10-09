<script setup lang="ts">
/**
 * Semantic table that scrolls horizontally on narrow screens rather than
 * collapsing — comparison data loses its meaning when stacked.
 */
defineProps<{
  headers: readonly string[]
  rows: readonly (readonly string[])[]
  caption?: string
}>()
</script>

<template>
  <div class="overflow-x-auto border border-line">
    <table class="min-w-[640px] text-sm">
      <caption v-if="caption" class="sr-only">{{ caption }}</caption>
      <thead>
        <tr class="border-b border-line bg-overlay">
          <th
            v-for="h in headers"
            :key="h"
            scope="col"
            class="px-4 py-3 text-left text-[13px] font-medium text-fg"
          >
            {{ h }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in rows"
          :key="i"
          class="border-b border-line-faint last:border-b-0"
        >
          <td
            v-for="(cell, j) in row"
            :key="j"
            :class="[
              'px-4 py-3 align-top',
              j === 0 ? 'font-medium text-fg' : 'text-fg-secondary',
              j > 0 ? 'data' : '',
            ]"
          >
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
