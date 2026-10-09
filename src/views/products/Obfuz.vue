<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProductHero from '../../components/product/ProductHero.vue'
import ProductFeatures from '../../components/product/ProductFeatures.vue'
import ProductResources from '../../components/product/ProductResources.vue'
import PageSection from '../../components/ui/PageSection.vue'
import SectionHeader from '../../components/ui/SectionHeader.vue'
import TagList from '../../components/ui/TagList.vue'
import type { IconName } from '../../components/icons/paths'
import { useSeo, productJsonLd } from '../../composables/useSeo'
import { useLocale } from '../../composables/useLocale'
import { useGithubStars } from '../../composables/useGithubStars'
import { productById } from '../../data/site'

const { t, tm, rt } = useI18n()
const { absoluteUrl } = useLocale()
const product = productById('obfuz')
const { counts } = useGithubStars()

useSeo(() => ({
  title: t('products.obfuz.seo.title'),
  description: t('products.obfuz.seo.desc'),
  jsonLd: productJsonLd({
    name: product.name,
    description: t('products.obfuz.seo.desc'),
    url: absoluteUrl(product.path),
    repo: `https://github.com/${product.repo}`,
    docs: product.docs,
  }),
}))

const stats = [
  { value: t('products.obfuz.stats.setup.value'), label: t('products.obfuz.stats.setup.label') },
  { value: t('products.obfuz.stats.tests.value'), label: t('products.obfuz.stats.tests.label') },
  { value: t('products.obfuz.stats.unity.value'), label: t('products.obfuz.stats.unity.label') },
  { value: t('products.obfuz.stats.license.value'), label: t('products.obfuz.stats.license.label') },
]

const reasons: { key: string; icon: IconName }[] = [
  { key: 'powerful', icon: 'shield' },
  { key: 'unity', icon: 'engine' },
  { key: 'quick', icon: 'clock' },
  { key: 'stable', icon: 'test' },
  { key: 'hotfix', icon: 'hotReload' },
  { key: 'free', icon: 'open' },
]

const capabilities: { key: string; icon: IconName }[] = [
  { key: 'polymorphicDll', icon: 'package' },
  { key: 'symbols', icon: 'obfuscation' },
  { key: 'memory', icon: 'memory' },
  { key: 'expressions', icon: 'codegen' },
  { key: 'controlFlow', icon: 'controlFlow' },
  { key: 'vm', icon: 'encryption' },
  { key: 'garbage', icon: 'watermark' },
  { key: 'dots', icon: 'layers' },
  { key: 'polymorphic', icon: 'grid' },
]

const platforms = (tm('products.obfuz.platforms.items') as unknown[]).map((i) =>
  rt(i as never),
)
</script>

<template>
  <ProductHero :product="product" :stats="stats" :stars="counts.obfuz" />

  <ProductFeatures
    base="products.obfuz.features"
    :items="reasons"
    index="01"
  />

  <ProductFeatures
    base="products.obfuz.capabilities"
    :items="capabilities"
    index="02"
    tone="base"
  />

  <PageSection width="default">
    <SectionHeader
      index="03"
      eyebrow="Support"
      :title="t('products.obfuz.platforms.title')"
    />
    <div class="reveal mt-8">
      <TagList :items="platforms" />
    </div>
  </PageSection>

  <ProductResources :product="product" index="04" />
</template>
