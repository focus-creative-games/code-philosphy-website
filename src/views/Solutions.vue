<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../components/ui/PageSection.vue'
import SectionHeader from '../components/ui/SectionHeader.vue'
import AppButton from '../components/ui/AppButton.vue'
import Icon from '../components/icons/Icon.vue'
import type { IconName } from '../components/icons/paths'
import { useLocale } from '../composables/useLocale'
import { useSeo } from '../composables/useSeo'
import { BUSINESS_EMAIL, productById } from '../data/site'

const { t, tm, rt } = useI18n()
const { to } = useLocale()

useSeo(() => ({
  title: t('solutions.seo.title'),
  description: t('solutions.seo.desc'),
}))

/** `tm` returns raw message objects; `rt` resolves each entry to a string. */
function list(key: string): string[] {
  const raw = tm(key) as unknown[]
  return Array.isArray(raw) ? raw.map((item) => rt(item as never)) : []
}

const runtimeForks = [
  { key: 'hybridclr', productId: 'hybridclr' as const, icon: 'hotReload' as IconName },
  { key: 'leanclr', productId: 'leanclr' as const, icon: 'size' as IconName },
]

const scriptingForks = [
  { key: 'zlua', productId: 'zlua' as const, icon: 'script' as IconName },
  { key: 'zents', productId: 'zents' as const, icon: 'types' as IconName },
  { key: 'luatier', productId: 'luatier' as const, icon: 'tiered' as IconName },
]

const scenarios = [
  'mobile',
  'mini',
  'script',
  'security',
  'embed',
  'config',
] as const

/** Which products each product is verified to work alongside. */
const compatRows = [
  ['HybridCLR', 'Luban · Obfuz · ZLua · ZenTS', 'xLua · ILRuntime'],
  ['LeanCLR', 'Luban · Obfuz', 'IL2CPP (replaces)'],
  ['ZLua', 'HybridCLR · Luban · Obfuz', 'Lua 5.1–5.5 · LuaJIT 2.x'],
  ['ZenTS', 'HybridCLR · Luban · Obfuz', 'QuickJS · TypeScript'],
  ['Luban', 'All products', 'xLua · puerts · ILRuntime · Obfuscator'],
  ['Obfuz', 'All products', 'xLua · HybridCLR · DOTS'],
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
          {{ t('solutions.hero.eyebrow') }}
        </span>
      </div>
      <h1 class="mt-5 text-[clamp(1.9rem,4.5vw,3rem)]">
        {{ t('solutions.hero.title') }}
      </h1>
      <p class="mt-5 text-[15px] leading-relaxed text-fg-secondary">
        {{ t('solutions.hero.desc') }}
      </p>
    </div>
  </section>

  <!-- Two key decisions -->
  <PageSection tone="raised" width="wide">
    <SectionHeader
      index="01"
      :eyebrow="t('solutions.hero.eyebrow')"
      :title="t('solutions.decisions.title')"
      :desc="t('solutions.decisions.desc')"
    />

    <!-- Decision 1: runtime -->
    <div class="reveal mt-12">
      <h3 class="text-lg">{{ t('solutions.decisions.runtime.title') }}</h3>
      <p class="mt-2 max-w-3xl text-[14px] leading-relaxed text-fg-secondary">
        {{ t('solutions.decisions.runtime.desc') }}
      </p>

      <div class="mt-6 grid gap-5 lg:grid-cols-2">
        <div
          v-for="fork in runtimeForks"
          :key="fork.key"
          class="flex flex-col border border-line bg-base p-6"
        >
          <div class="flex items-center gap-3">
            <span
              class="h-0.5 w-10"
              :style="{ background: `var(${productById(fork.productId).colorVar})` }"
              aria-hidden="true"
            ></span>
            <Icon :name="fork.icon" :size="18" class="text-fg-muted" />
          </div>
          <h4 class="mt-4 text-base">
            {{ t(`solutions.decisions.runtime.${fork.key}.title`) }}
          </h4>
          <p class="data mt-1 text-[12px] text-accent">
            {{ t(`solutions.decisions.runtime.${fork.key}.when`) }}
          </p>
          <ul class="mt-4 flex-1 space-y-2">
            <li
              v-for="item in list(`solutions.decisions.runtime.${fork.key}.items`)"
              :key="item"
              class="flex gap-2.5 text-[13px] leading-relaxed text-fg-secondary"
            >
              <Icon name="check" :size="14" class="mt-1 text-data-pos" />
              <span>{{ item }}</span>
            </li>
          </ul>
          <AppButton class="mt-5 self-start" :to="to(productById(fork.productId).path)">
            {{ productById(fork.productId).name }}
            <Icon name="arrowRight" :size="14" />
          </AppButton>
        </div>
      </div>

      <p
        class="mt-4 border border-line-faint bg-sunken px-5 py-4 text-[13px] leading-relaxed text-fg-secondary"
      >
        {{ t('solutions.decisions.runtime.both') }}
      </p>
    </div>

    <!-- Decision 2: scripting -->
    <div class="reveal mt-14">
      <h3 class="text-lg">{{ t('solutions.decisions.scripting.title') }}</h3>
      <p class="mt-2 max-w-3xl text-[14px] leading-relaxed text-fg-secondary">
        {{ t('solutions.decisions.scripting.desc') }}
      </p>

      <div class="mt-6 grid gap-5 lg:grid-cols-3">
        <div
          v-for="fork in scriptingForks"
          :key="fork.key"
          class="flex flex-col border border-line bg-base p-6"
        >
          <div class="flex items-center gap-3">
            <span
              class="h-0.5 w-10"
              :style="{ background: `var(${productById(fork.productId).colorVar})` }"
              aria-hidden="true"
            ></span>
            <Icon :name="fork.icon" :size="18" class="text-fg-muted" />
          </div>
          <h4 class="mt-4 text-base">
            {{ t(`solutions.decisions.scripting.${fork.key}.title`) }}
          </h4>
          <p class="data mt-1 text-[12px] text-accent">
            {{ t(`solutions.decisions.scripting.${fork.key}.when`) }}
          </p>
          <ul class="mt-4 flex-1 space-y-2">
            <li
              v-for="item in list(`solutions.decisions.scripting.${fork.key}.items`)"
              :key="item"
              class="flex gap-2.5 text-[13px] leading-relaxed text-fg-secondary"
            >
              <Icon name="check" :size="14" class="mt-1 text-data-pos" />
              <span>{{ item }}</span>
            </li>
          </ul>
          <AppButton class="mt-5 self-start" :to="to(productById(fork.productId).path)">
            {{ productById(fork.productId).name }}
            <Icon name="arrowRight" :size="14" />
          </AppButton>
        </div>
      </div>
    </div>
  </PageSection>

  <!-- Scenarios -->
  <PageSection width="wide" grid>
    <SectionHeader
      index="02"
      eyebrow="Stacks"
      :title="t('solutions.scenarios.title')"
      :desc="t('solutions.scenarios.desc')"
    />

    <div class="reveal mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="s in scenarios"
        :key="s"
        class="flex flex-col border border-line bg-raised p-6"
      >
        <h3 class="text-base">{{ t(`solutions.scenarios.items.${s}.title`) }}</h3>
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
  </PageSection>

  <!-- Compatibility -->
  <PageSection tone="raised" width="default">
    <SectionHeader
      index="03"
      eyebrow="Compatibility"
      :title="t('solutions.compat.title')"
      :desc="t('solutions.compat.desc')"
    />

    <div class="reveal mt-10 overflow-x-auto border border-line">
      <table class="min-w-[640px] text-sm">
        <thead>
          <tr class="border-b border-line bg-overlay">
            <th scope="col" class="px-4 py-3 text-left text-[13px] font-medium text-fg">
              {{ t('labels.feature') }}
            </th>
            <th scope="col" class="px-4 py-3 text-left text-[13px] font-medium text-fg">
              Code Philosophy
            </th>
            <th scope="col" class="px-4 py-3 text-left text-[13px] font-medium text-fg">
              Third-party
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in compatRows"
            :key="row[0]"
            class="border-b border-line-faint last:border-b-0"
          >
            <td class="px-4 py-3 font-medium text-fg">{{ row[0] }}</td>
            <td class="data px-4 py-3 text-[13px] text-fg-secondary">{{ row[1] }}</td>
            <td class="data px-4 py-3 text-[13px] text-fg-muted">{{ row[2] }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p
      class="reveal mt-4 border border-line-faint bg-sunken px-5 py-4 text-[13px] leading-relaxed text-fg-secondary"
    >
      {{ t('solutions.compat.note') }}
    </p>
  </PageSection>

  <!-- CTA -->
  <PageSection width="narrow">
    <div class="reveal text-center">
      <h2 class="text-2xl sm:text-3xl">{{ t('solutions.cta.title') }}</h2>
      <p class="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-fg-secondary">
        {{ t('solutions.cta.desc') }}
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <AppButton variant="primary" :href="`mailto:${BUSINESS_EMAIL}`">
          <Icon name="mail" :size="15" />
          {{ t('actions.contact') }}
        </AppButton>
        <AppButton :to="to('/services')">
          {{ t('nav.services') }}
        </AppButton>
      </div>
    </div>
  </PageSection>
</template>
