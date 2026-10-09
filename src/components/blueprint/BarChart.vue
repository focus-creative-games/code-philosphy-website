<script setup lang="ts">
import { computed } from 'vue'

export interface Bar {
  label: string
  /** Multiplier relative to the baseline. 1.00 is the baseline itself. */
  value: number
  /** Marks the reference bar (rendered in the accent colour). */
  baseline?: boolean
}

const props = withDefaults(
  defineProps<{
    bars: readonly Bar[]
    /** Appended to each printed value, e.g. '×'. */
    unit?: string
    /** Axis caption, e.g. 'lower is better'. */
    hint?: string
  }>(),
  { unit: '×' },
)

const max = computed(() => Math.max(...props.bars.map((b) => b.value), 1))

function width(value: number): string {
  return `${Math.max((value / max.value) * 100, 1.5)}%`
}
</script>

<template>
  <div>
    <ul class="space-y-3">
      <li v-for="bar in bars" :key="bar.label" class="grid grid-cols-[minmax(4.5rem,7rem)_1fr_auto] items-center gap-3">
        <span
          :class="[
            'data truncate text-[13px]',
            bar.baseline ? 'text-accent' : 'text-fg-secondary',
          ]"
        >
          {{ bar.label }}
        </span>

        <span class="relative h-5 bg-sunken" aria-hidden="true">
          <span
            :class="[
              'absolute inset-y-0 left-0 transition-[width] duration-500 ease-[cubic-bezier(0.2,0,0.2,1)]',
              bar.baseline ? 'bg-accent' : 'bg-line-strong',
            ]"
            :style="{ width: width(bar.value) }"
          ></span>
        </span>

        <span
          :class="[
            'data w-16 text-right text-[13px]',
            bar.baseline ? 'text-accent' : 'text-fg',
          ]"
        >
          {{ bar.value.toFixed(2) }}{{ unit }}
        </span>
      </li>
    </ul>

    <p v-if="hint" class="data mt-4 text-[11px] text-fg-muted">
      {{ hint }}
    </p>
  </div>
</template>
