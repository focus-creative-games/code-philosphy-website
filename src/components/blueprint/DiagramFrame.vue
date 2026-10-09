<script setup lang="ts">
/**
 * Shared chrome for architecture diagrams: a bordered panel with a
 * monospace caption bar. The diagram itself is supplied as an inline SVG so
 * it costs no extra request and inherits theme colours.
 */
defineProps<{
  title: string
  product?: string
  desc?: string
}>()
</script>

<template>
  <figure class="reveal flex h-full flex-col border border-line bg-raised">
    <figcaption
      class="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5"
    >
      <span class="text-[13px] font-medium text-fg">{{ title }}</span>
      <span
        v-if="product"
        class="data shrink-0 text-[11px] tracking-wide text-fg-muted"
      >
        {{ product }}
      </span>
    </figcaption>

    <div class="bg-sunken p-4">
      <slot />
    </div>

    <p
      v-if="desc"
      class="border-t border-line px-4 py-3.5 text-[13px] leading-relaxed text-fg-secondary"
    >
      {{ desc }}
    </p>
  </figure>
</template>
