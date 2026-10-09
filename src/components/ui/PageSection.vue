<script setup lang="ts">
withDefaults(
  defineProps<{
    /** `raised` darkens slightly to separate adjacent sections. */
    tone?: 'base' | 'raised'
    /** Draws the blueprint grid behind the content. */
    grid?: boolean
    width?: 'narrow' | 'default' | 'wide'
    id?: string
  }>(),
  { tone: 'base', grid: false, width: 'default' },
)
</script>

<template>
  <section
    :id="id"
    :class="[
      'relative border-t border-line-faint',
      tone === 'raised' ? 'bg-raised' : 'bg-base',
    ]"
  >
    <div
      v-if="grid"
      class="blueprint-grid blueprint-grid-mask pointer-events-none absolute inset-0 opacity-40"
      aria-hidden="true"
    ></div>

    <div
      :class="[
        'relative mx-auto px-5 py-20 sm:px-8 lg:px-10 lg:py-24',
        {
          narrow: 'max-w-3xl',
          default: 'max-w-6xl',
          wide: 'max-w-[1400px]',
        }[width],
      ]"
    >
      <slot />
    </div>
  </section>
</template>
