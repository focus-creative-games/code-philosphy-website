<script setup lang="ts">
/**
 * Section eyebrow in blueprint style: `01 ──── EYEBROW`, then the heading.
 * The number is decorative ordering, not content, so it is aria-hidden.
 */
withDefaults(
  defineProps<{
    index?: string
    eyebrow?: string
    title: string
    desc?: string
    align?: 'left' | 'center'
  }>(),
  { align: 'left' },
)
</script>

<template>
  <div :class="['reveal', align === 'center' ? 'text-center' : '']">
    <div
      v-if="index || eyebrow"
      :class="[
        'flex items-center gap-3',
        align === 'center' ? 'justify-center' : '',
      ]"
    >
      <span v-if="index" class="data text-xs text-accent" aria-hidden="true">
        {{ index }}
      </span>
      <span class="h-px w-8 bg-line" aria-hidden="true"></span>
      <span
        v-if="eyebrow"
        class="data text-[11px] tracking-[0.18em] text-fg-muted uppercase"
      >
        {{ eyebrow }}
      </span>
    </div>

    <h2 class="mt-4 text-2xl sm:text-3xl lg:text-[34px]">{{ title }}</h2>

    <p
      v-if="desc"
      :class="[
        'mt-3 max-w-2xl text-[15px] leading-relaxed text-fg-secondary',
        align === 'center' ? 'mx-auto' : '',
      ]"
    >
      {{ desc }}
    </p>
  </div>
</template>
