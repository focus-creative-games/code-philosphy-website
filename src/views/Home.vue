<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import PageSection from '../components/ui/PageSection.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import StatCard from '../components/ui/StatCard.vue'
import AppButton from '../components/ui/AppButton.vue'
import Icon from '../components/icons/Icon.vue'
import IconGithub from '../components/icons/IconGithub.vue'
import ProductMap from '../components/blueprint/ProductMap.vue'
import DiagramFrame from '../components/blueprint/DiagramFrame.vue'
import DiagramDhe from '../components/blueprint/DiagramDhe.vue'
import DiagramSelectiveAot from '../components/blueprint/DiagramSelectiveAot.vue'
import DiagramTiered from '../components/blueprint/DiagramTiered.vue'
import BarChart, { type Bar } from '../components/blueprint/BarChart.vue'

import { useLocale } from '../composables/useLocale'
import { useSeo, organizationJsonLd } from '../composables/useSeo'
import {
  useGithubStars,
  formatStars,
} from '../composables/useGithubStars'
import CustomerWall from '../components/CustomerWall.vue'
import {
  GITHUB_ORG,
  PRODUCT_GROUPS,
  productsInGroup,
} from '../data/site'

const { t } = useI18n()
const { to } = useLocale()
const { counts, total } = useGithubStars()

useSeo(() => ({
  title: t('home.seo.title'),
  description: t('home.seo.desc'),
  jsonLd: organizationJsonLd(),
}))

const groups = PRODUCT_GROUPS.map((g) => ({
  id: g,
  products: productsInGroup(g),
}))

/** Numbered 01…07 in display order, matching the blueprint eyebrows. */
const productIndex = computed(() => {
  const map: Record<string, string> = {}
  let i = 1
  for (const g of groups) {
    for (const p of g.products) {
      map[p.id] = String(i++).padStart(2, '0')
    }
  }
  return map
})

// ZLua interop benchmark — ZLua is the 1.00× baseline, lower is better.
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
</script>

<template>
  <!-- ══ 01 Positioning ══ -->
  <section class="relative border-b border-line-faint bg-base">
    <div
      class="blueprint-grid blueprint-grid-mask pointer-events-none absolute inset-0 opacity-50"
      aria-hidden="true"
    ></div>

    <div
      class="relative mx-auto grid max-w-[1400px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:px-10 lg:py-28"
    >
      <div class="reveal is-visible">
        <div class="flex items-center gap-3">
          <span class="data text-xs text-accent" aria-hidden="true">00</span>
          <span class="h-px w-8 bg-line" aria-hidden="true"></span>
          <span class="data text-[11px] tracking-[0.18em] text-fg-muted uppercase">
            {{ t('home.hero.eyebrow') }}
          </span>
        </div>

        <h1 class="mt-6 text-[clamp(2rem,5.2vw,3.5rem)] leading-[1.1]">
          <span class="block">{{ t('home.hero.titleLine1') }}</span>
          <span class="block text-fg-secondary">
            {{ t('home.hero.titleLine2') }}
          </span>
        </h1>

        <p class="mt-6 text-lg text-fg">{{ t('home.hero.subtitle') }}</p>
        <p class="mt-3 max-w-xl text-[15px] leading-relaxed text-fg-secondary">
          {{ t('home.hero.desc') }}
        </p>

        <div class="mt-8 flex flex-wrap gap-3">
          <a
            href="#products"
            class="inline-flex items-center gap-2 border border-accent bg-accent px-4 py-2.5 text-sm font-medium text-base transition-colors duration-200 hover:border-accent-hover hover:bg-accent-hover"
          >
            {{ t('home.hero.ctaPrimary') }}
            <Icon name="arrowRight" :size="16" />
          </a>
          <AppButton :to="to('/solutions')">
            {{ t('home.hero.ctaSecondary') }}
          </AppButton>
          <AppButton :href="GITHUB_ORG">
            <IconGithub :size="16" />
            <span class="data">{{ formatStars(total, true) }}</span>
          </AppButton>
        </div>
      </div>

      <div class="reveal is-visible lg:pl-4">
        <ProductMap />
      </div>
    </div>
  </section>

  <!-- ══ 02 Scale ══ -->
  <PageSection tone="raised" width="wide">
    <SectionHeader
      index="01"
      :eyebrow="t('home.scale.eyebrow')"
      :title="t('home.scale.title')"
      :desc="t('home.scale.desc')"
    />
    <div class="reveal mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <StatCard
        :value="formatStars(total)"
        :label="t('home.scale.stars.label')"
        :note="t('home.scale.stars.note')"
      />
      <StatCard
        :value="t('home.scale.projects.value')"
        :label="t('home.scale.projects.label')"
        :note="t('home.scale.projects.note')"
      />
      <StatCard
        :value="t('home.scale.tests.value')"
        :label="t('home.scale.tests.label')"
        :note="t('home.scale.tests.note')"
      />
      <StatCard
        :value="t('home.scale.unity.value')"
        :label="t('home.scale.unity.label')"
        :note="t('home.scale.unity.note')"
      />
    </div>
  </PageSection>

  <!-- ══ 03 Product matrix ══ -->
  <PageSection id="products" width="wide" grid>
    <SectionHeader
      index="02"
      :eyebrow="t('home.products.eyebrow')"
      :title="t('home.products.title')"
      :desc="t('home.products.desc')"
    />

    <div class="mt-12 space-y-10">
      <div v-for="group in groups" :key="group.id" class="reveal">
        <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line pb-3">
          <h3 class="text-[15px]">{{ t(`groups.${group.id}.label`) }}</h3>
          <p class="text-[13px] text-fg-muted">
            {{ t(`groups.${group.id}.desc`) }}
          </p>
        </div>

        <div class="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          <RouterLink
            v-for="p in group.products"
            :key="p.id"
            :to="to(p.path)"
            :class="[
              'group flex flex-col border border-line bg-raised p-6 transition-colors duration-200 hover:border-line-strong',
              p.flagship ? 'xl:col-span-2' : '',
            ]"
          >
            <div class="flex items-center gap-3">
              <span
                class="data text-[11px] text-fg-muted"
                aria-hidden="true"
              >
                {{ productIndex[p.id] }}
              </span>
              <span
                class="h-0.5 w-10"
                :style="{ background: `var(${p.colorVar})` }"
                aria-hidden="true"
              ></span>
              <span
                v-if="p.flagship"
                class="data ml-auto border border-accent/40 px-2 py-0.5 text-[10px] tracking-wide text-accent uppercase"
              >
                {{ t('labels.flagship') }}
              </span>
              <span
                class="data flex items-center gap-1 text-[11px] text-fg-muted"
                :class="p.flagship ? '' : 'ml-auto'"
              >
                <Icon name="star" :size="12" />
                {{ formatStars(counts[p.id], true) }}
              </span>
            </div>

            <h4 class="mt-4 text-xl">{{ p.name }}</h4>
            <p class="mt-1.5 text-sm text-fg-secondary">
              {{ t(`products.${p.id}.tagline`) }}
            </p>
            <p class="mt-3 flex-1 text-[13px] leading-relaxed text-fg-muted">
              {{ t(`products.${p.id}.card`) }}
            </p>

            <div class="mt-5 flex items-center justify-between gap-3 border-t border-line-faint pt-4">
              <span class="data text-[11px] text-fg-secondary">
                {{ t(`products.${p.id}.metric`) }}
              </span>
              <span
                class="flex items-center gap-1.5 text-[13px] text-fg-secondary transition-colors duration-200 group-hover:text-accent"
              >
                {{ t('actions.learnMore') }}
                <Icon name="arrowRight" :size="14" />
              </span>
            </div>
          </RouterLink>
        </div>
      </div>
    </div>

    <a
      :href="GITHUB_ORG"
      target="_blank"
      rel="noopener noreferrer"
      class="reveal mt-10 inline-flex items-center gap-2 text-[13px] text-fg-secondary transition-colors duration-200 hover:text-accent"
    >
      <IconGithub :size="15" />
      {{ t('actions.allProjects') }}
      <Icon name="arrowRight" :size="14" />
    </a>
  </PageSection>

  <!-- ══ 04 Technical depth ══ -->
  <PageSection tone="raised" width="wide">
    <SectionHeader
      index="03"
      :eyebrow="t('home.depth.eyebrow')"
      :title="t('home.depth.title')"
      :desc="t('home.depth.desc')"
    />

    <div class="mt-12 grid gap-5 lg:grid-cols-3">
      <DiagramFrame
        :title="t('home.depth.dhe.title')"
        :product="t('home.depth.dhe.product')"
        :desc="t('home.depth.dhe.desc')"
      >
        <DiagramDhe />
      </DiagramFrame>

      <DiagramFrame
        :title="t('home.depth.hybrid.title')"
        :product="t('home.depth.hybrid.product')"
        :desc="t('home.depth.hybrid.desc')"
      >
        <DiagramSelectiveAot />
      </DiagramFrame>

      <DiagramFrame
        :title="t('home.depth.tiered.title')"
        :product="t('home.depth.tiered.product')"
        :desc="t('home.depth.tiered.desc')"
      >
        <DiagramTiered />
      </DiagramFrame>
    </div>
  </PageSection>

  <!-- ══ 05 Performance evidence ══ -->
  <PageSection width="default">
    <SectionHeader
      index="04"
      :eyebrow="t('home.perf.eyebrow')"
      :title="t('home.perf.title')"
      :desc="t('home.perf.desc')"
    />

    <div class="reveal mt-10 grid gap-5 lg:grid-cols-2">
      <div class="border border-line bg-raised p-6">
        <h3 class="data text-[13px] text-fg">
          {{ t('home.perf.directionCs2Lua') }}
        </h3>
        <p class="data mt-1 text-[11px] text-fg-muted">
          {{ t('home.perf.cases', { n: 54 }) }}
        </p>
        <div class="mt-5">
          <BarChart :bars="csToLua" :hint="t('labels.lowerIsBetter')" />
        </div>
      </div>

      <div class="border border-line bg-raised p-6">
        <h3 class="data text-[13px] text-fg">
          {{ t('home.perf.directionLua2Cs') }}
        </h3>
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
          {{ t('home.perf.environment') }}
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
            {{ t('home.perf.sourceLabel') }}
          </a>
        </dd>
      </div>
    </dl>
  </PageSection>

  <!-- ══ 06 Customers ══ -->
  <PageSection tone="raised" width="wide">
    <SectionHeader
      index="05"
      :eyebrow="t('home.customers.eyebrow')"
      :title="t('home.customers.title')"
      :desc="t('home.customers.desc')"
    />
    <div class="reveal mt-10">
      <CustomerWall :limit="18" />
    </div>
    <AppButton class="reveal mt-8" :to="to('/customers')">
      {{ t('home.customers.cta') }}
      <Icon name="arrowRight" :size="15" />
    </AppButton>
  </PageSection>

  <!-- ══ Closing ══ -->
  <PageSection width="narrow">
    <div class="reveal text-center">
      <h2 class="text-2xl sm:text-3xl">{{ t('home.closing.title') }}</h2>
      <p class="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fg-secondary">
        {{ t('home.closing.desc') }}
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <AppButton variant="primary" :to="to('/services')">
          {{ t('home.closing.ctaPrimary') }}
        </AppButton>
        <AppButton :to="to('/solutions')">
          {{ t('home.closing.ctaSecondary') }}
        </AppButton>
      </div>
    </div>
  </PageSection>
</template>
