<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../components/ui/PageSection.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import AppButton from '../components/ui/AppButton.vue'
import Icon from '../components/icons/Icon.vue'
import type { IconName } from '../components/icons/paths'
import { useLocale } from '../composables/useLocale'
import { useSeo } from '../composables/useSeo'
import { BUSINESS_EMAIL, PRODUCTS, productById } from '../data/site'

const { t, tm, rt } = useI18n()
const { to } = useLocale()

useSeo(() => ({
  title: t('services.seo.title'),
  description: t('services.seo.desc'),
}))

function list(key: string): string[] {
  const raw = tm(key) as unknown[]
  return Array.isArray(raw) ? raw.map((i) => rt(i as never)) : []
}

const offerings: { key: string; icon: IconName }[] = [
  { key: 'license', icon: 'open' },
  { key: 'support', icon: 'support' },
  { key: 'custom', icon: 'codegen' },
  { key: 'consulting', icon: 'benchmark' },
]

const steps = ['evaluate', 'contact', 'trial', 'deploy'] as const

const productEmails = PRODUCTS.filter((p) => p.email || p.qq).map((p) => ({
  id: p.id,
  name: p.name,
  email: p.email,
  qq: p.qq,
}))

const freeTrialDocs =
  `${productById('hybridclr').docs}docs/business/pro/freetrial`
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
          {{ t('services.hero.eyebrow') }}
        </span>
      </div>
      <h1 class="mt-5 text-[clamp(1.9rem,4.5vw,3rem)]">
        {{ t('services.hero.title') }}
      </h1>
      <p class="mt-5 text-[15px] leading-relaxed text-fg-secondary">
        {{ t('services.hero.desc') }}
      </p>
      <AppButton class="mt-8" variant="primary" :href="`mailto:${BUSINESS_EMAIL}`">
        <Icon name="mail" :size="15" />
        {{ t('services.hero.cta') }}
      </AppButton>
    </div>
  </section>

  <!-- Offerings -->
  <PageSection tone="raised" width="wide">
    <SectionHeader
      index="01"
      eyebrow="Offerings"
      :title="t('services.matrix.title')"
    />
    <div class="reveal mt-10 grid gap-4 md:grid-cols-2">
      <article
        v-for="o in offerings"
        :key="o.key"
        class="flex flex-col border border-line bg-base p-6"
      >
        <Icon :name="o.icon" :size="22" class="text-fg-muted" />
        <h3 class="mt-4 text-base">
          {{ t(`services.matrix.items.${o.key}.title`) }}
        </h3>
        <p class="mt-2 text-[13px] leading-relaxed text-fg-secondary">
          {{ t(`services.matrix.items.${o.key}.desc`) }}
        </p>
        <ul class="mt-4 space-y-2 border-t border-line-faint pt-4">
          <li
            v-for="p in list(`services.matrix.items.${o.key}.points`)"
            :key="p"
            class="flex gap-2.5 text-[13px] text-fg-muted"
          >
            <Icon name="check" :size="14" class="mt-1 shrink-0 text-data-pos" />
            <span>{{ p }}</span>
          </li>
        </ul>
      </article>
    </div>
  </PageSection>

  <!-- Hourly support rates -->
  <PageSection width="default">
    <SectionHeader
      index="02"
      eyebrow="Rates"
      :title="t('services.support.title')"
      :desc="t('services.support.desc')"
    />
    <div class="reveal mt-10 grid gap-4 md:grid-cols-2">
      <article
        v-for="tier in (['standard', 'expert'] as const)"
        :key="tier"
        :class="[
          'border bg-raised p-6',
          tier === 'expert' ? 'border-accent/40' : 'border-line',
        ]"
      >
        <h3 class="text-base">{{ t(`services.support.${tier}.title`) }}</h3>
        <p
          :class="[
            'data mt-2 text-xl',
            tier === 'expert' ? 'text-accent' : 'text-fg',
          ]"
        >
          {{ t(`services.support.${tier}.price`) }}
        </p>
        <ul class="mt-5 space-y-2 border-t border-line-faint pt-4">
          <li
            v-for="item in list(`services.support.${tier}.items`)"
            :key="item"
            class="flex gap-2.5 text-[13px] leading-relaxed text-fg-secondary"
          >
            <Icon name="check" :size="14" class="mt-1 shrink-0 text-data-pos" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </article>
    </div>
  </PageSection>

  <!-- Trial terms -->
  <PageSection tone="raised" width="default">
    <SectionHeader
      index="03"
      eyebrow="Trial"
      :title="t('services.trial.title')"
      :desc="t('services.trial.desc')"
    />

    <div class="reveal mt-10 grid gap-4 md:grid-cols-2">
      <article
        v-for="opt in (['free', 'paid'] as const)"
        :key="opt"
        class="flex flex-col border border-line bg-base p-6"
      >
        <div class="flex flex-wrap items-center gap-3">
          <h3 class="text-base">{{ t(`services.trial.${opt}.title`) }}</h3>
          <span
            :class="[
              'data border px-2 py-0.5 text-[11px]',
              opt === 'free'
                ? 'border-data-pos/40 text-data-pos'
                : 'border-data-warn/40 text-data-warn',
            ]"
          >
            {{ t(`services.trial.${opt}.tag`) }}
          </span>
        </div>

        <ul class="mt-5 flex-1 space-y-2.5">
          <li
            v-for="item in list(`services.trial.${opt}.items`)"
            :key="item"
            class="flex gap-2.5 text-[13px] leading-relaxed text-fg-secondary"
          >
            <Icon name="minus" :size="14" class="mt-1 shrink-0 text-line-strong" />
            <span>{{ item }}</span>
          </li>
        </ul>

        <a
          v-if="opt === 'free'"
          :href="freeTrialDocs"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-5 inline-flex items-center gap-1.5 text-[13px] text-accent hover:text-accent-hover"
        >
          {{ t('services.trial.free.link') }}
          <Icon name="external" :size="13" />
        </a>
      </article>
    </div>

    <p
      class="reveal mt-4 border border-line-faint bg-sunken px-5 py-4 text-[13px] text-fg-secondary"
    >
      {{ t('services.trial.note') }}
    </p>
  </PageSection>

  <!-- Process -->
  <PageSection width="wide" grid>
    <SectionHeader
      index="04"
      eyebrow="Process"
      :title="t('services.process.title')"
    />
    <ol class="reveal mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <li
        v-for="(step, i) in steps"
        :key="step"
        class="border border-line bg-raised p-6"
      >
        <span class="data text-[11px] text-accent" aria-hidden="true">
          {{ String(i + 1).padStart(2, '0') }}
        </span>
        <h3 class="mt-3 text-base">
          {{ t(`services.process.steps.${step}.title`) }}
        </h3>
        <p class="mt-2 text-[13px] leading-relaxed text-fg-secondary">
          {{ t(`services.process.steps.${step}.desc`) }}
        </p>
      </li>
    </ol>
  </PageSection>

  <!-- Contact -->
  <PageSection tone="raised" width="default">
    <SectionHeader
      index="05"
      eyebrow="Contact"
      :title="t('services.contact.title')"
      :desc="t('services.contact.desc')"
    />

    <div class="reveal mt-10 grid gap-4 lg:grid-cols-2">
      <!-- Sales -->
      <div class="border border-accent/40 bg-base p-6">
        <span class="data text-[10px] tracking-[0.14em] text-fg-muted uppercase">
          {{ t('services.contact.business.label') }}
        </span>
        <a
          :href="`mailto:${BUSINESS_EMAIL}`"
          class="data mt-3 block text-[15px] break-all text-accent hover:text-accent-hover"
        >
          {{ BUSINESS_EMAIL }}
        </a>
        <p class="mt-2 text-[13px] text-fg-secondary">
          {{ t('services.contact.business.note') }}
        </p>
        <p class="data mt-4 border border-data-warn/40 px-3 py-2 text-[12px] text-data-warn">
          {{ t('services.contact.emailRequirement') }}
        </p>
      </div>

      <!-- Per-product channels -->
      <div class="border border-line bg-base p-6">
        <span class="data text-[10px] tracking-[0.14em] text-fg-muted uppercase">
          {{ t('services.contact.product.label') }}
        </span>
        <p class="mt-2 text-[13px] text-fg-secondary">
          {{ t('services.contact.product.note') }}
        </p>
        <ul class="mt-4 space-y-2.5 border-t border-line-faint pt-4">
          <li
            v-for="pe in productEmails"
            :key="pe.id"
            class="flex flex-wrap items-baseline gap-x-3 gap-y-1"
          >
            <span class="w-20 text-[13px] text-fg">{{ pe.name }}</span>
            <a
              v-if="pe.email"
              :href="`mailto:${pe.email}`"
              class="data text-[12px] break-all text-fg-secondary hover:text-accent"
            >
              {{ pe.email }}
            </a>
            <span v-if="pe.qq" class="data text-[12px] text-fg-muted">
              QQ {{ pe.qq }}
            </span>
          </li>
        </ul>
      </div>
    </div>

    <div class="reveal mt-8 flex flex-wrap gap-3">
      <AppButton :to="to('/solutions')">
        {{ t('nav.solutions') }}
        <Icon name="arrowRight" :size="14" />
      </AppButton>
      <AppButton :to="to('/hybridclr')">HybridCLR</AppButton>
      <AppButton :to="to('/leanclr')">LeanCLR</AppButton>
    </div>
  </PageSection>
</template>
