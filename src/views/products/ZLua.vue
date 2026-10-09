<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProductHero from '../../components/product/ProductHero.vue'
import ProductFeatures from '../../components/product/ProductFeatures.vue'
import ProductResources from '../../components/product/ProductResources.vue'
import PageSection from '../../components/ui/PageSection.vue'
import SectionHeader from '../../components/ui/SectionHeader.vue'
import TagList from '../../components/ui/TagList.vue'
import BarChart, { type Bar } from '../../components/blueprint/BarChart.vue'
import type { IconName } from '../../components/icons/paths'
import { useSeo, productJsonLd } from '../../composables/useSeo'
import { useLocale } from '../../composables/useLocale'
import { useGithubStars } from '../../composables/useGithubStars'
import { productById } from '../../data/site'

const { t, tm, rt } = useI18n()
const { absoluteUrl } = useLocale()
const product = productById('zlua')
const { counts } = useGithubStars()

useSeo(() => ({
  title: t('products.zlua.seo.title'),
  description: t('products.zlua.seo.desc'),
  jsonLd: productJsonLd({
    name: product.name,
    description: t('products.zlua.seo.desc'),
    url: absoluteUrl(product.path),
    repo: `https://github.com/${product.repo}`,
    docs: product.docs,
  }),
}))

const stats = [
  { value: t('products.zlua.stats.config.value'), label: t('products.zlua.stats.config.label') },
  { value: t('products.zlua.stats.gc.value'), label: t('products.zlua.stats.gc.label') },
  { value: t('products.zlua.stats.perf.value'), label: t('products.zlua.stats.perf.label') },
  { value: t('products.zlua.stats.license.value'), label: t('products.zlua.stats.license.label') },
]

const features: { key: string; icon: IconName }[] = [
  { key: 'usable', icon: 'usability' },
  { key: 'complete', icon: 'types' },
  { key: 'fast', icon: 'speed' },
  { key: 'gc', icon: 'gc' },
  { key: 'small', icon: 'package' },
  { key: 'versions', icon: 'platform' },
]

// ZLua is the 1.00× baseline; lower is better. Source: zlua-benchmark.
const csToLua: Bar[] = [
  { label: 'ZLua', value: 1.0, baseline: true },
  { label: 'xLua', value: 1.59 },
  { label: 'toLua', value: 3.27 },
  { label: 'SLua', value: 14.9 },
]

const luaToCs: Bar[] = [
  { label: 'ZLua', value: 1.0, baseline: true },
  { label: 'xLua', value: 2.57 },
  { label: 'toLua', value: 3.52 },
  { label: 'SLua', value: 7.68 },
]

const platforms = (tm('products.zlua.platforms.items') as unknown[]).map((i) =>
  rt(i as never),
)

const extraLinks = [
  { label: t('actions.demo'), href: 'https://github.com/focus-creative-games/zlua-demo' },
]

const resourceLinks = [
  { label: 'zlua-demo', href: 'https://github.com/focus-creative-games/zlua-demo' },
  { label: 'zlua-benchmark', href: 'https://github.com/focus-creative-games/zlua-benchmark' },
]
</script>

<template>
  <ProductHero
    :product="product"
    :stats="stats"
    :stars="counts.zlua"
    :extra-links="extraLinks"
  />

  <ProductFeatures base="products.zlua.features" :items="features" index="01" />

  <!-- Benchmarks: the strongest evidence this product has, so it gets a
       chart rather than a buried table row. -->
  <PageSection width="default">
    <SectionHeader
      index="02"
      eyebrow="Benchmark"
      :title="t('products.zlua.benchmark.title')"
      :desc="t('products.zlua.benchmark.desc')"
    />

    <div class="reveal mt-10 grid gap-5 lg:grid-cols-2">
      <div class="border border-line bg-raised p-6">
        <h3 class="data text-[13px] text-fg">C# → Lua</h3>
        <p class="data mt-1 text-[11px] text-fg-muted">
          {{ t('home.perf.cases', { n: 54 }) }}
        </p>
        <div class="mt-5">
          <BarChart :bars="csToLua" :hint="t('labels.lowerIsBetter')" />
        </div>
      </div>
      <div class="border border-line bg-raised p-6">
        <h3 class="data text-[13px] text-fg">Lua → C#</h3>
        <p class="data mt-1 text-[11px] text-fg-muted">
          {{ t('home.perf.cases', { n: 231 }) }}
        </p>
        <div class="mt-5">
          <BarChart :bars="luaToCs" :hint="t('labels.lowerIsBetter')" />
        </div>
      </div>
    </div>

    <dl
      class="reveal mt-6 flex flex-wrap items-center gap-x-8 gap-y-2 border border-line-faint bg-sunken px-5 py-4"
    >
      <div class="flex items-baseline gap-2">
        <dt class="data text-[10px] tracking-[0.14em] text-fg-muted uppercase">
          {{ t('labels.environment') }}
        </dt>
        <dd class="data text-[12px] text-fg-secondary">
          {{ t('products.zlua.benchmark.environment') }}
        </dd>
      </div>
      <div class="flex items-baseline gap-2">
        <dt class="data text-[10px] tracking-[0.14em] text-fg-muted uppercase">
          {{ t('labels.source') }}
        </dt>
        <dd>
          <a
            href="https://github.com/focus-creative-games/zlua-benchmark"
            target="_blank"
            rel="noopener noreferrer"
            class="data text-[12px] text-accent hover:text-accent-hover"
          >
            zlua-benchmark
          </a>
        </dd>
      </div>
    </dl>
  </PageSection>

  <PageSection tone="raised" width="default">
    <SectionHeader
      index="03"
      eyebrow="Platforms"
      :title="t('products.zlua.platforms.title')"
      :desc="t('products.zlua.platforms.desc')"
    />
    <div class="reveal mt-8">
      <TagList :items="platforms" />
    </div>
  </PageSection>

  <ProductResources :product="product" index="04" :links="resourceLinks" />
</template>
