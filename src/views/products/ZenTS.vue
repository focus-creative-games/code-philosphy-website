<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ProductHero from '../../components/product/ProductHero.vue'
import ProductFeatures from '../../components/product/ProductFeatures.vue'
import ProductResources from '../../components/product/ProductResources.vue'
import PageSection from '../../components/ui/PageSection.vue'
import SectionHeader from '../../components/ui/SectionHeader.vue'
import DataTable from '../../components/ui/DataTable.vue'
import TagList from '../../components/ui/TagList.vue'
import type { IconName } from '../../components/icons/paths'
import { useSeo, productJsonLd } from '../../composables/useSeo'
import { useLocale } from '../../composables/useLocale'
import { useGithubStars } from '../../composables/useGithubStars'
import { productById } from '../../data/site'

const { t, tm, rt } = useI18n()
const { absoluteUrl } = useLocale()
const product = productById('zents')
const { counts } = useGithubStars()

useSeo(() => ({
  title: t('products.zents.seo.title'),
  description: t('products.zents.seo.desc'),
  jsonLd: productJsonLd({
    name: product.name,
    description: t('products.zents.seo.desc'),
    url: absoluteUrl(product.path),
    repo: `https://github.com/${product.repo}`,
    docs: product.docs,
  }),
}))

const stats = [
  { value: t('products.zents.stats.vm.value'), label: t('products.zents.stats.vm.label') },
  { value: t('products.zents.stats.config.value'), label: t('products.zents.stats.config.label') },
  { value: t('products.zents.stats.ts.value'), label: t('products.zents.stats.ts.label') },
  { value: t('products.zents.stats.license.value'), label: t('products.zents.stats.license.label') },
]

const features: { key: string; icon: IconName }[] = [
  { key: 'usable', icon: 'usability' },
  { key: 'complete', icon: 'types' },
  { key: 'unified', icon: 'layers' },
  { key: 'fast', icon: 'speed' },
  { key: 'gc', icon: 'gc' },
  { key: 'ts', icon: 'module' },
]

const comparisonKeys = ['script', 'facade', 'entry', 'stdlib', 'attrs'] as const

const comparisonRows = computed(() =>
  comparisonKeys.map((k) => [
    t(`products.zents.comparison.rows.${k}.cap`),
    t(`products.zents.comparison.rows.${k}.zlua`),
    t(`products.zents.comparison.rows.${k}.zents`),
  ]),
)

const platforms = (tm('products.zents.platforms.items') as unknown[]).map((i) =>
  rt(i as never),
)
</script>

<template>
  <ProductHero :product="product" :stats="stats" :stars="counts.zents" />

  <ProductFeatures base="products.zents.features" :items="features" index="01" />

  <PageSection width="default">
    <SectionHeader
      index="02"
      eyebrow="Parity"
      :title="t('products.zents.comparison.title')"
      :desc="t('products.zents.comparison.desc')"
    />
    <div class="reveal mt-10">
      <DataTable
        :headers="[t('products.zents.comparison.capability'), 'ZLua', 'ZenTS']"
        :rows="comparisonRows"
        :caption="t('products.zents.comparison.title')"
      />
    </div>
  </PageSection>

  <PageSection tone="raised" width="default">
    <SectionHeader
      index="03"
      eyebrow="Platforms"
      :title="t('products.zents.platforms.title')"
      :desc="t('products.zents.platforms.desc')"
    />
    <div class="reveal mt-8">
      <TagList :items="platforms" />
    </div>
  </PageSection>

  <ProductResources :product="product" index="04" />
</template>
