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
import { useGithubStars, formatStars } from '../../composables/useGithubStars'
import { productById } from '../../data/site'

const { t, tm, rt } = useI18n()
const { absoluteUrl } = useLocale()
const product = productById('luban')
const { counts } = useGithubStars()

useSeo(() => ({
  title: t('products.luban.seo.title'),
  description: t('products.luban.seo.desc'),
  jsonLd: productJsonLd({
    name: product.name,
    description: t('products.luban.seo.desc'),
    url: absoluteUrl(product.path),
    repo: `https://github.com/${product.repo}`,
    docs: product.docs,
  }),
}))

// Star count is itself one of the four headline figures here.
const stats = [
  { value: formatStars(counts.luban, true), label: t('products.luban.stats.stars.label') },
  { value: t('products.luban.stats.langs.value'), label: t('products.luban.stats.langs.label') },
  { value: t('products.luban.stats.license.value'), label: t('products.luban.stats.license.label') },
  { value: t('products.luban.stats.engines.value'), label: t('products.luban.stats.engines.label') },
]

const features: { key: string; icon: IconName }[] = [
  { key: 'sources', icon: 'schema' },
  { key: 'types', icon: 'types' },
  { key: 'validation', icon: 'validation' },
  { key: 'codegen', icon: 'codegen' },
  { key: 'hotfix', icon: 'hotReload' },
  { key: 'obfuscation', icon: 'obfuscation' },
]

const LANGUAGES = [
  'C#', 'Java', 'Go', 'C++', 'Lua', 'Python', 'JavaScript',
  'TypeScript', 'Rust', 'PHP', 'Erlang', 'GDScript', 'Protobuf',
]

function list(key: string): string[] {
  const raw = tm(key) as unknown[]
  return Array.isArray(raw) ? raw.map((i) => rt(i as never)) : []
}

const engines = list('products.luban.engines.items')
const sourceFormats = list('products.luban.formats.source.items')
const exportFormats = list('products.luban.formats.export.items')
const messageFormats = list('products.luban.formats.message.items')

const extraLinks = [
  { label: t('actions.quickstart'), href: 'https://www.datable.cn/docs/beginner/quickstart' },
]

const resourceLinks = [
  { label: 'luban_examples', href: 'https://github.com/focus-creative-games/luban_examples' },
]
</script>

<template>
  <ProductHero
    :product="product"
    :stats="stats"
    :stars="counts.luban"
    :extra-links="extraLinks"
  />

  <ProductFeatures base="products.luban.features" :items="features" index="01" />

  <PageSection width="default">
    <SectionHeader
      index="02"
      eyebrow="Codegen"
      :title="t('products.luban.languages.title')"
      :desc="t('products.luban.languages.desc')"
    />
    <div class="reveal mt-8">
      <TagList :items="LANGUAGES" />
    </div>
  </PageSection>

  <PageSection tone="raised" width="default">
    <SectionHeader
      index="03"
      eyebrow="Engines"
      :title="t('products.luban.engines.title')"
    />
    <div class="reveal mt-8">
      <TagList :items="engines" />
    </div>
  </PageSection>

  <PageSection width="default">
    <SectionHeader
      index="04"
      eyebrow="Formats"
      :title="t('products.luban.formats.title')"
    />
    <div class="reveal mt-10 grid gap-6 md:grid-cols-3">
      <div>
        <h3 class="text-[14px]">{{ t('products.luban.formats.source.title') }}</h3>
        <div class="mt-3"><TagList :items="sourceFormats" /></div>
      </div>
      <div>
        <h3 class="text-[14px]">{{ t('products.luban.formats.export.title') }}</h3>
        <div class="mt-3"><TagList :items="exportFormats" /></div>
      </div>
      <div>
        <h3 class="text-[14px]">{{ t('products.luban.formats.message.title') }}</h3>
        <div class="mt-3"><TagList :items="messageFormats" /></div>
      </div>
    </div>
  </PageSection>

  <ProductResources :product="product" index="05" :links="resourceLinks" />
</template>
