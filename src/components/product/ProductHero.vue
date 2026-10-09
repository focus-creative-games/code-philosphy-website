<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import StatCard from '../ui/StatCard.vue'
import Icon from '../icons/Icon.vue'
import IconGithub from '../icons/IconGithub.vue'
import AppButton from '../ui/AppButton.vue'
import { formatStars } from '../../composables/useGithubStars'
import type { Product } from '../../data/site'

export interface HeroStat {
  value: string
  label: string
}

defineProps<{
  product: Product
  /** Four figures shown under the headline. */
  stats: readonly HeroStat[]
  stars: number
  /** Extra links beside Docs and GitHub. */
  extraLinks?: readonly { label: string; href: string }[]
}>()

const { t } = useI18n()
</script>

<template>
  <section class="relative border-b border-line-faint bg-base">
    <div
      class="blueprint-grid blueprint-grid-mask pointer-events-none absolute inset-0 opacity-50"
      aria-hidden="true"
    ></div>

    <div class="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-24">
      <!-- Product identity colour appears only as this tick -->
      <div class="flex items-center gap-3">
        <span
          class="h-0.5 w-12"
          :style="{ background: `var(${product.colorVar})` }"
          aria-hidden="true"
        ></span>
        <span class="data text-[11px] tracking-[0.18em] text-fg-muted uppercase">
          {{ t(`products.${product.id}.badge`) }}
        </span>
      </div>

      <h1 class="mt-5 text-[clamp(2.2rem,6vw,3.5rem)] leading-none">
        {{ product.name }}
      </h1>
      <p class="mt-4 text-lg text-fg sm:text-xl">
        {{ t(`products.${product.id}.tagline`) }}
      </p>
      <p class="mt-3 max-w-2xl text-[15px] leading-relaxed text-fg-secondary">
        {{ t(`products.${product.id}.hero.desc`) }}
      </p>

      <dl class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          v-for="stat in stats"
          :key="stat.label"
          :value="stat.value"
          :label="stat.label"
        />
      </dl>

      <div class="mt-8 flex flex-wrap gap-3">
        <AppButton v-if="product.docs" variant="primary" :href="product.docs">
          <Icon name="docs" :size="15" />
          {{ t('actions.docs') }}
        </AppButton>
        <AppButton
          v-for="link in extraLinks"
          :key="link.href"
          :href="link.href"
        >
          {{ link.label }}
        </AppButton>
        <AppButton :href="`https://github.com/${product.repo}`">
          <IconGithub :size="15" />
          <span class="data">{{ formatStars(stars, true) }}</span>
        </AppButton>
      </div>
    </div>
  </section>
</template>
