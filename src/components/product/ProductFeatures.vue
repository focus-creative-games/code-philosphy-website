<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../ui/PageSection.vue'
import SectionHeader from '../ui/SectionHeader.vue'
import FeatureCard from '../ui/FeatureCard.vue'
import type { IconName } from '../icons/paths'

/**
 * Renders a feature grid from a locale namespace. Each entry pairs a copy key
 * with a concept icon — this is what replaced the emoji literals.
 */
defineProps<{
  /** Locale prefix, e.g. 'products.zlua.features'. */
  base: string
  items: readonly { key: string; icon: IconName }[]
  index: string
  tone?: 'base' | 'raised'
  columns?: 2 | 3
}>()

const { t } = useI18n()
</script>

<template>
  <PageSection :tone="tone ?? 'raised'" width="wide">
    <SectionHeader
      :index="index"
      eyebrow="Features"
      :title="t(`${base}.title`)"
      :desc="t(`${base}.desc`)"
    />

    <div
      :class="[
        'reveal mt-10 grid gap-4 md:grid-cols-2',
        (columns ?? 3) === 3 ? 'xl:grid-cols-3' : '',
      ]"
    >
      <FeatureCard
        v-for="item in items"
        :key="item.key"
        :icon="item.icon"
        :title="t(`${base}.items.${item.key}.title`)"
        :desc="t(`${base}.items.${item.key}.desc`)"
      />
    </div>
  </PageSection>
</template>
