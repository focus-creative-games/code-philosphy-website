<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../components/ui/PageSection.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import FeatureCard from '../components/ui/FeatureCard.vue'
import AppButton from '../components/ui/AppButton.vue'
import Icon from '../components/icons/Icon.vue'
import type { IconName } from '../components/icons/paths'
import { useLocale } from '../composables/useLocale'
import { useSeo, organizationJsonLd } from '../composables/useSeo'
import { BUSINESS_EMAIL, PRODUCTS, productById } from '../data/site'

const { t } = useI18n()
const { to } = useLocale()

useSeo(() => ({
  title: t('about.seo.title'),
  description: t('about.seo.desc'),
  jsonLd: organizationJsonLd(),
}))

const stance: { key: string; icon: IconName }[] = [
  { key: 'depth', icon: 'layers' },
  { key: 'rewrite', icon: 'module' },
  { key: 'open', icon: 'open' },
  { key: 'evidence', icon: 'benchmark' },
  { key: 'production', icon: 'test' },
  { key: 'longTerm', icon: 'clock' },
]

const capability: { key: string; icon: IconName }[] = [
  { key: 'runtime', icon: 'runtime' },
  { key: 'compiler', icon: 'codegen' },
  { key: 'vm', icon: 'interpreter' },
  { key: 'il2cpp', icon: 'engine' },
  { key: 'security', icon: 'shield' },
  { key: 'platform', icon: 'platform' },
]

/**
 * Product-line entries, ordered as the lines were built out. Each maps to a
 * product so the colour tick and link stay consistent with the rest of the site.
 */
const timeline = [
  { key: 'hybridclr', productIds: ['hybridclr'] as const },
  { key: 'luban', productIds: ['luban'] as const },
  { key: 'obfuz', productIds: ['obfuz'] as const },
  { key: 'scripting', productIds: ['zlua', 'zents'] as const },
  { key: 'leanclr', productIds: ['leanclr'] as const },
  { key: 'luatier', productIds: ['luatier'] as const },
]
</script>

<template>
  <!-- Hero -->
  <section class="relative border-b border-line-faint bg-base">
    <div
      class="blueprint-grid blueprint-grid-mask pointer-events-none absolute inset-0 opacity-50"
      aria-hidden="true"
    ></div>
    <div class="relative mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-24">
      <div class="flex items-center gap-3">
        <span class="h-px w-8 bg-line" aria-hidden="true"></span>
        <span class="data text-[11px] tracking-[0.18em] text-fg-muted uppercase">
          {{ t('about.hero.eyebrow') }}
        </span>
      </div>
      <h1 class="mt-5 text-[clamp(1.9rem,4.5vw,3rem)]">
        {{ t('about.hero.title') }}
      </h1>
      <p class="mt-5 text-[15px] leading-relaxed text-fg-secondary">
        {{ t('about.hero.desc') }}
      </p>
    </div>
  </section>

  <!-- Engineering stance -->
  <PageSection tone="raised" width="wide">
    <SectionHeader
      index="01"
      eyebrow="Principles"
      :title="t('about.stance.title')"
    />
    <div class="reveal mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <FeatureCard
        v-for="item in stance"
        :key="item.key"
        :icon="item.icon"
        :title="t(`about.stance.items.${item.key}.title`)"
        :desc="t(`about.stance.items.${item.key}.desc`)"
      />
    </div>
  </PageSection>

  <!-- Technical capability -->
  <PageSection width="wide" grid>
    <SectionHeader
      index="02"
      eyebrow="Capabilities"
      :title="t('about.capability.title')"
      :desc="t('about.capability.desc')"
    />
    <div class="reveal mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <FeatureCard
        v-for="item in capability"
        :key="item.key"
        :icon="item.icon"
        :title="t(`about.capability.items.${item.key}.title`)"
        :desc="t(`about.capability.items.${item.key}.desc`)"
      />
    </div>
  </PageSection>

  <!-- Product-line evolution -->
  <PageSection tone="raised" width="default">
    <SectionHeader
      index="03"
      eyebrow="Timeline"
      :title="t('about.timeline.title')"
    />

    <ol class="reveal mt-10 border-l border-line pl-6">
      <li v-for="(item, i) in timeline" :key="item.key" class="relative pb-8 last:pb-0">
        <!-- Node sits on the spine -->
        <span
          class="absolute top-1.5 -left-[1.6875rem] h-2.5 w-2.5 border border-line-strong bg-base"
          :style="{ borderColor: `var(${productById(item.productIds[0]).colorVar})` }"
          aria-hidden="true"
        ></span>

        <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 class="text-base">{{ t(`about.timeline.items.${item.key}.title`) }}</h3>
          <span class="data text-[11px] text-fg-muted" aria-hidden="true">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
        </div>
        <p class="mt-1.5 max-w-2xl text-[13px] leading-relaxed text-fg-secondary">
          {{ t(`about.timeline.items.${item.key}.desc`) }}
        </p>
        <div class="mt-3 flex flex-wrap gap-2">
          <AppButton
            v-for="pid in item.productIds"
            :key="pid"
            size="sm"
            :to="to(productById(pid).path)"
          >
            {{ productById(pid).name }}
            <Icon name="arrowRight" :size="13" />
          </AppButton>
        </div>
      </li>
    </ol>
  </PageSection>

  <!-- CTA -->
  <PageSection width="narrow">
    <div class="reveal text-center">
      <h2 class="text-2xl sm:text-3xl">{{ t('about.cta.title') }}</h2>
      <p class="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fg-secondary">
        {{ t('about.cta.desc') }}
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <AppButton variant="primary" :href="`mailto:${BUSINESS_EMAIL}`">
          <Icon name="mail" :size="15" />
          {{ t('actions.contact') }}
        </AppButton>
        <AppButton :to="to('/services')">{{ t('nav.services') }}</AppButton>
        <AppButton :to="to('/customers')">{{ t('nav.customers') }}</AppButton>
      </div>
      <p class="data mt-6 text-[12px] text-fg-muted">
        {{ PRODUCTS.length }} products · focus-creative-games
      </p>
    </div>
  </PageSection>
</template>
