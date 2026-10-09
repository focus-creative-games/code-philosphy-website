<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import ProductHero from '../../components/product/ProductHero.vue'
import ProductFeatures from '../../components/product/ProductFeatures.vue'
import ProductResources from '../../components/product/ProductResources.vue'
import EditionMatrix, {
  type Edition,
  type MatrixRow,
} from '../../components/product/EditionMatrix.vue'
import PageSection from '../../components/ui/PageSection.vue'
import SectionHeader from '../../components/ui/SectionHeader.vue'
import AppButton from '../../components/ui/AppButton.vue'
import Icon from '../../components/icons/Icon.vue'
import DiagramFrame from '../../components/blueprint/DiagramFrame.vue'
import DiagramDhe from '../../components/blueprint/DiagramDhe.vue'
import type { IconName } from '../../components/icons/paths'
import { useSeo, productJsonLd } from '../../composables/useSeo'
import { useLocale } from '../../composables/useLocale'
import { useGithubStars } from '../../composables/useGithubStars'
import { productById } from '../../data/site'

const { t } = useI18n()
const { absoluteUrl, to } = useLocale()
const product = productById('hybridclr')
const { counts } = useGithubStars()

useSeo(() => ({
  title: t('products.hybridclr.seo.title'),
  description: t('products.hybridclr.seo.desc'),
  jsonLd: productJsonLd({
    name: product.name,
    description: t('products.hybridclr.seo.desc'),
    url: absoluteUrl(product.path),
    repo: `https://github.com/${product.repo}`,
    docs: product.docs,
  }),
}))

const stats = [
  { value: t('products.hybridclr.stats.companies.value'), label: t('products.hybridclr.stats.companies.label') },
  { value: t('products.hybridclr.stats.projects.value'), label: t('products.hybridclr.stats.projects.label') },
  { value: t('products.hybridclr.stats.tests.value'), label: t('products.hybridclr.stats.tests.label') },
  { value: t('products.hybridclr.stats.dhe.value'), label: t('products.hybridclr.stats.dhe.label') },
]

const features: { key: string; icon: IconName }[] = [
  { key: 'complete', icon: 'csharp' },
  { key: 'zeroCost', icon: 'usability' },
  { key: 'performance', icon: 'speed' },
  { key: 'memory', icon: 'memory' },
  { key: 'platform', icon: 'platform' },
  { key: 'proven', icon: 'test' },
]

const DOC = 'https://www.hybridclr.cn/docs'

// Columns: community, professional, flagship, hot reload.
const editions: Edition[] = [
  { key: 'community', free: true },
  { key: 'professional' },
  { key: 'flagship', recommended: true },
  { key: 'hotreload' },
]

const matrixRows: MatrixRow[] = [
  { key: 'interp', included: [true, true, true, true] },
  { key: 'monobehaviour', included: [true, true, true, true] },
  { key: 'metadata', included: [true, true, true, true] },
  { key: 'gc', included: [true, true, true, true] },
  { key: 'unityLts', included: [true, true, true, true] },
  { key: 'dots', included: [true, true, true, true], docUrl: `${DOC}/basic/dots` },
  { key: 'genericSharing', included: [false, true, true, true], docUrl: `${DOC}/business/fullgenericsharing` },
  { key: 'metadataOpt', included: [false, true, true, true], docUrl: `${DOC}/business/metadataoptimization` },
  { key: 'basicOpt', included: [false, true, true, true], docUrl: `${DOC}/business/basicoptimization` },
  { key: 'advancedOpt', included: [false, true, true, true], docUrl: `${DOC}/business/advancedoptimization` },
  { key: 'encryption', included: [false, true, true, true], docUrl: `${DOC}/business/basicencryption` },
  {
    key: 'dhe',
    included: [false, false, true, false],
    highlight: true,
    docUrl: `${DOC}/business/differentialhybridexecution`,
  },
  { key: 'hotReload', included: [false, false, false, true], docUrl: `${DOC}/business/reload/hotreloadassembly` },
  { key: 'accessPolicy', included: [false, false, false, true], docUrl: `${DOC}/business/accesspolicy` },
  { key: 'support', included: [false, true, true, true] },
  { key: 'sourceCode', included: [false, true, true, true] },
]

const extraLinks = [
  { label: t('products.hybridclr.editions.viewFeatures'), href: `${DOC}/business` },
  { label: t('products.hybridclr.editions.viewCases'), href: `${DOC}/other/businesscase` },
]
</script>

<template>
  <ProductHero
    :product="product"
    :stats="stats"
    :stars="counts.hybridclr"
    :extra-links="extraLinks"
  />

  <!-- Architecture: this is the differentiator, so it leads. -->
  <PageSection tone="raised" width="default">
    <SectionHeader
      index="01"
      eyebrow="Architecture"
      :title="t('products.hybridclr.arch.title')"
      :desc="t('products.hybridclr.arch.desc')"
    />
    <div class="reveal mt-10 max-w-2xl">
      <DiagramFrame
        :title="t('home.depth.dhe.title')"
        :product="t('home.depth.dhe.product')"
      >
        <DiagramDhe />
      </DiagramFrame>
    </div>
  </PageSection>

  <ProductFeatures
    base="products.hybridclr.features"
    :items="features"
    index="02"
    tone="base"
  />

  <!-- Editions as a matrix -->
  <PageSection tone="raised" width="wide">
    <SectionHeader
      index="03"
      eyebrow="Editions"
      :title="t('products.hybridclr.editions.title')"
      :desc="t('products.hybridclr.editions.desc')"
    />

    <div class="reveal mt-10">
      <EditionMatrix
        base="products.hybridclr.editions"
        :editions="editions"
        :rows="matrixRows"
      />
    </div>

    <p
      class="reveal mt-4 border border-accent/25 bg-accent-dim/15 px-5 py-4 text-[13px] leading-relaxed text-fg-secondary"
    >
      {{ t('products.hybridclr.editions.dheNote') }}
    </p>

    <div class="reveal mt-6 flex flex-wrap gap-3">
      <AppButton variant="primary" :href="`https://github.com/${product.repo}`">
        {{ t('products.hybridclr.editions.useCommunity') }}
      </AppButton>
      <AppButton :href="`${DOC}/business`">
        {{ t('products.hybridclr.editions.viewFeatures') }}
        <Icon name="external" :size="14" />
      </AppButton>
      <AppButton :to="to('/services')">
        {{ t('nav.services') }}
        <Icon name="arrowRight" :size="14" />
      </AppButton>
    </div>
  </PageSection>

  <ProductResources :product="product" index="04" />
</template>
