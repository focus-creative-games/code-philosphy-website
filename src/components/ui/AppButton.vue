<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = withDefaults(
  defineProps<{
    /** Internal route path (already localized by the caller). */
    to?: string
    /** External URL. Opens in a new tab. */
    href?: string
    variant?: 'primary' | 'outline' | 'ghost'
    size?: 'sm' | 'md'
  }>(),
  { variant: 'outline', size: 'md' },
)

const classes = computed(() => [
  'inline-flex items-center gap-2 border font-medium whitespace-nowrap',
  'transition-colors duration-200 ease-[cubic-bezier(0.2,0,0.2,1)]',
  props.size === 'sm' ? 'px-3 py-1.5 text-[13px]' : 'px-4 py-2.5 text-sm',
  {
    primary:
      'border-accent bg-accent text-base hover:bg-accent-hover hover:border-accent-hover',
    outline:
      'border-line text-fg hover:border-line-strong hover:bg-raised',
    ghost:
      'border-transparent text-fg-secondary hover:text-fg hover:bg-raised',
  }[props.variant],
])

const isExternal = computed(() => Boolean(props.href))
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="classes">
    <slot />
  </RouterLink>
  <a
    v-else-if="isExternal"
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :class="classes"
  >
    <slot />
  </a>
  <button v-else type="button" :class="classes">
    <slot />
  </button>
</template>
