<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../components/ui/PageSection.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import StatCard from '../components/ui/StatCard.vue'
import AppButton from '../components/ui/AppButton.vue'
import Icon from '../components/icons/Icon.vue'
import { useLocale } from '../composables/useLocale'
import { useSeo } from '../composables/useSeo'
import {
  useGithubStars,
  formatStars,
} from '../composables/useGithubStars'
import {
  CUSTOMER_GROUPS,
  customersInGroup,
} from '../data/customers'
import {
  BUSINESS_EMAIL,
  productById,
} from '../data/site'

const { t } = useI18n()
const { to } = useLocale()
const { total } = useGithubStars()

useSeo(() => ({
  title: t('customers.seo.title'),
  description: t('customers.seo.desc'),
}))

const groups = CUSTOMER_GROUPS.map((g) => ({
  id: g,
  customers: customersInGroup(g),
}))

/**
 * Scenarios we can discuss publicly. Deliberately framed as use cases rather
 * than named case studies — specific attributions need sign-off per customer.
 */
const scenarios = ['mobile', 'mini', 'security'] as const

const hybridclrCases =
  `${productById('hybridclr').docs}docs/other/businesscase`
</script>

<template>
  <!-- Hero -->
  <section class="relative border-b border-line-faint bg-base">
    <div
      class="blueprint-grid blueprint-grid-mask pointer-events-none absolute inset-0 opacity-50"
      aria-hidden="true"
    ></div>
    <div class="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 lg:py-24">
      <div class="flex items-center gap-3">
        <span class="h-px w-8 bg-line" aria-hidden="true"></span>
        <span class="data text-[11px] tracking-[0.18em] text-fg-muted uppercase">
          {{ t('customers.hero.eyebrow') }}
        </span>
      </div>
      <h1 class="mt-5 text-[clamp(1.9rem,4.5vw,3rem)]">
        {{ t('customers.hero.title') }}
      </h1>
      <p class="mt-5 max-w-2xl text-[15px] leading-relaxed text-fg-secondary">
        {{ t('customers.hero.desc') }}
      </p>

      <dl class="mt-10 grid gap-4 sm:grid-cols-3">
        <StatCard
          :value="t('customers.stats.projects.value')"
          :label="t('customers.stats.projects.label')"
        />
        <StatCard
          :value="t('customers.stats.shipped.value')"
          :label="t('customers.stats.shipped.label')"
        />
        <StatCard
          :value="formatStars(total)"
          :label="t('customers.stats.stars.label')"
        />
      </dl>
    </div>
  </section>

  <!-- Logo wall, grouped by customer type -->
  <PageSection tone="raised" width="wide">
    <SectionHeader
      index="01"
      eyebrow="Partners"
      :title="t('customers.wall.title')"
      :desc="t('customers.wall.note')"
    />

    <div class="mt-12 space-y-10">
      <div v-for="group in groups" :key="group.id" class="reveal">
        <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 border-b border-line pb-3">
          <h3 class="text-[15px]">
            {{ t(`customers.groups.${group.id}.title`) }}
          </h3>
          <p class="text-[13px] text-fg-muted">
            {{ t(`customers.groups.${group.id}.desc`) }}
          </p>
          <span class="data ml-auto text-[11px] text-fg-muted">
            {{ group.customers.length }}
          </span>
        </div>

        <ul
          class="mt-4 grid grid-cols-2 gap-px border border-line bg-line sm:grid-cols-3 lg:grid-cols-6"
        >
          <li
            v-for="c in group.customers"
            :key="c.logo"
            class="group flex h-20 items-center justify-center bg-base p-4 transition-colors duration-200 hover:bg-overlay"
          >
            <img
              :src="c.logo"
              :alt="c.name"
              :title="c.name"
              loading="lazy"
              decoding="async"
              class="max-h-full max-w-full object-contain opacity-70 grayscale transition duration-200 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </li>
        </ul>
      </div>
    </div>
  </PageSection>

  <!-- Public use cases -->
  <PageSection width="wide" grid>
    <SectionHeader
      index="02"
      eyebrow="Use cases"
      :title="t('customers.cases.title')"
      :desc="t('customers.cases.desc')"
    />

    <div class="reveal mt-10 grid gap-4 md:grid-cols-3">
      <article
        v-for="s in scenarios"
        :key="s"
        class="flex flex-col border border-line bg-raised p-6"
      >
        <h3 class="text-base">
          {{ t(`solutions.scenarios.items.${s}.title`) }}
        </h3>
        <p
          class="data mt-3 border border-accent/30 bg-accent-dim/20 px-3 py-2 text-[12px] text-accent"
        >
          {{ t(`solutions.scenarios.items.${s}.stack`) }}
        </p>
        <p class="mt-4 flex-1 text-[13px] leading-relaxed text-fg-secondary">
          {{ t(`solutions.scenarios.items.${s}.desc`) }}
        </p>
      </article>
    </div>

    <AppButton class="reveal mt-8" :href="hybridclrCases">
      {{ t('customers.cases.viewMore') }}
      <Icon name="external" :size="14" />
    </AppButton>
  </PageSection>

  <!-- CTA -->
  <PageSection tone="raised" width="narrow">
    <div class="reveal text-center">
      <h2 class="text-2xl sm:text-3xl">{{ t('customers.cta.title') }}</h2>
      <p class="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fg-secondary">
        {{ t('customers.cta.desc') }}
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <AppButton variant="primary" :href="`mailto:${BUSINESS_EMAIL}`">
          <Icon name="mail" :size="15" />
          {{ t('actions.contact') }}
        </AppButton>
        <AppButton :to="to('/solutions')">{{ t('nav.solutions') }}</AppButton>
      </div>
    </div>
  </PageSection>
</template>
