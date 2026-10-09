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
import DiagramFrame from '../../components/blueprint/DiagramFrame.vue'
import DiagramTiered from '../../components/blueprint/DiagramTiered.vue'
import type { IconName } from '../../components/icons/paths'
import { useSeo, productJsonLd } from '../../composables/useSeo'
import { useLocale } from '../../composables/useLocale'
import { useGithubStars } from '../../composables/useGithubStars'
import { productById } from '../../data/site'

const { t, tm, rt } = useI18n()
const { absoluteUrl } = useLocale()
const product = productById('luatier')
const { counts } = useGithubStars()

useSeo(() => ({
  title: t('products.luatier.seo.title'),
  description: t('products.luatier.seo.desc'),
  jsonLd: productJsonLd({
    name: product.name,
    description: t('products.luatier.seo.desc'),
    url: absoluteUrl(product.path),
    repo: `https://github.com/${product.repo}`,
  }),
}))

const stats = [
  { value: t('products.luatier.stats.lang.value'), label: t('products.luatier.stats.lang.label') },
  { value: t('products.luatier.stats.impl.value'), label: t('products.luatier.stats.impl.label') },
  { value: t('products.luatier.stats.tiers.value'), label: t('products.luatier.stats.tiers.label') },
  { value: t('products.luatier.stats.license.value'), label: t('products.luatier.stats.license.label') },
]

const features: { key: string; icon: IconName }[] = [
  { key: 'interp', icon: 'interpreter' },
  { key: 'aot', icon: 'aot' },
  { key: 'jit', icon: 'jit' },
  { key: 'diff', icon: 'test' },
  { key: 'runtime', icon: 'gc' },
  { key: 'origin', icon: 'module' },
]

const layoutRows = computed(() => {
  const paths: Record<string, string> = {
    frontend: 'src/frontend/',
    vm: 'src/vm/',
    runtime: 'src/runtime/',
    gc: 'src/gc/',
    jit: 'src/jit/',
    api: 'src/api/',
  }
  return Object.entries(paths).map(([key, path]) => [
    path,
    t(`products.luatier.layout.rows.${key}.mod`),
    t(`products.luatier.layout.rows.${key}.note`),
  ])
})

const statusTags = (tm('products.luatier.status.items') as unknown[]).map((i) =>
  rt(i as never),
)

const extraLinks = [{ label: 'luatier.com', href: 'https://luatier.com' }]
</script>

<template>
  <ProductHero
    :product="product"
    :stats="stats"
    :stars="counts.luatier"
    :extra-links="extraLinks"
  />

  <!-- Architecture first: tiered execution is the whole premise. -->
  <PageSection tone="raised" width="default">
    <SectionHeader
      index="01"
      eyebrow="Architecture"
      :title="t('products.luatier.arch.title')"
      :desc="t('products.luatier.arch.desc')"
    />
    <div class="reveal mt-10 max-w-2xl">
      <DiagramFrame
        :title="t('products.luatier.arch.title')"
        :product="product.name"
      >
        <DiagramTiered />
      </DiagramFrame>
    </div>
  </PageSection>

  <ProductFeatures
    base="products.luatier.features"
    :items="features"
    index="02"
    tone="base"
  />

  <PageSection tone="raised" width="default">
    <SectionHeader
      index="03"
      eyebrow="Layout"
      :title="t('products.luatier.layout.title')"
      :desc="t('products.luatier.layout.desc')"
    />
    <div class="reveal mt-10">
      <DataTable
        :headers="[
          t('products.luatier.layout.path'),
          t('products.luatier.layout.module'),
          t('labels.notes'),
        ]"
        :rows="layoutRows"
        :caption="t('products.luatier.layout.title')"
      />
    </div>
  </PageSection>

  <PageSection width="default">
    <SectionHeader
      index="04"
      eyebrow="Status"
      :title="t('products.luatier.status.title')"
      :desc="t('products.luatier.status.desc')"
    />
    <div class="reveal mt-8">
      <TagList :items="statusTags" />
    </div>
  </PageSection>

  <ProductResources :product="product" index="05" />
</template>
