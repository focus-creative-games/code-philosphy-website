<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import ProductHero from '../../components/product/ProductHero.vue'
import ProductResources from '../../components/product/ProductResources.vue'
import PageSection from '../../components/ui/PageSection.vue'
import SectionHeader from '../../components/ui/SectionHeader.vue'
import Icon from '../../components/icons/Icon.vue'
import DiagramFrame from '../../components/blueprint/DiagramFrame.vue'
import DiagramSelectiveAot from '../../components/blueprint/DiagramSelectiveAot.vue'
import { useSeo, productJsonLd } from '../../composables/useSeo'
import { useLocale } from '../../composables/useLocale'
import { useGithubStars } from '../../composables/useGithubStars'
import { productById } from '../../data/site'

const { t, tm, rt } = useI18n()
const { absoluteUrl } = useLocale()
const product = productById('leanclr')
const { counts } = useGithubStars()

useSeo(() => ({
  title: t('products.leanclr.seo.title'),
  description: t('products.leanclr.seo.desc'),
  jsonLd: productJsonLd({
    name: product.name,
    description: t('products.leanclr.seo.desc'),
    url: absoluteUrl(product.path),
    repo: `https://github.com/${product.repo}`,
    docs: product.docs,
  }),
}))

function list(key: string): string[] {
  const raw = tm(key) as unknown[]
  return Array.isArray(raw) ? raw.map((i) => rt(i as never)) : []
}

const stats = [
  { value: t('products.leanclr.stats.aot.value'), label: t('products.leanclr.stats.aot.label') },
  { value: t('products.leanclr.stats.memory.value'), label: t('products.leanclr.stats.memory.label') },
  { value: t('products.leanclr.stats.hybrid.value'), label: t('products.leanclr.stats.hybrid.label') },
  { value: t('products.leanclr.stats.target.value'), label: t('products.leanclr.stats.target.label') },
]

const advantages = ['size', 'memory', 'large', 'gc'] as const

const platformKeys = ['unity', 'godot', 'unreal', 'cocos'] as const

const platformRows = computed(() =>
  platformKeys.map((k) => ({
    key: k,
    name: t(`products.leanclr.platforms.rows.${k}.name`),
    status: t(`products.leanclr.platforms.rows.${k}.status`),
    note: t(`products.leanclr.platforms.rows.${k}.note`),
    done: k === 'unity',
  })),
)

const repos = [
  { key: 'leanclr', name: 'leanclr', url: 'https://github.com/focus-creative-games/leanclr' },
  { key: 'unity', name: 'leanclr-unity', url: 'https://github.com/focus-creative-games/leanclr-unity' },
  { key: 'doc', name: 'leanclr-doc', url: 'https://github.com/focus-creative-games/leanclr-doc' },
  { key: 'demo', name: 'leanclr-demo', url: 'https://github.com/focus-creative-games/leanclr-demo' },
  { key: 'hybridclr', name: 'hybridclr', url: 'https://github.com/focus-creative-games/hybridclr' },
]

const extraLinks = [
  { label: 'leanclr-unity', href: 'https://github.com/focus-creative-games/leanclr-unity' },
]

const resourceLinks = [
  { label: 'Unity install guide', href: 'https://doc.leanclr.com/docs/ecosystem/unity/install' },
  { label: 'leanclr-unity-demo', href: 'https://github.com/focus-creative-games/leanclr-unity-demo' },
]
</script>

<template>
  <ProductHero
    :product="product"
    :stats="stats"
    :stars="counts.leanclr"
    :extra-links="extraLinks"
  />

  <!-- Architecture: selective AOT is where the size win comes from. -->
  <PageSection tone="raised" width="default">
    <SectionHeader
      index="01"
      eyebrow="Architecture"
      :title="t('products.leanclr.arch.title')"
      :desc="t('products.leanclr.arch.desc')"
    />
    <div class="reveal mt-10 max-w-2xl">
      <DiagramFrame
        :title="t('products.leanclr.arch.title')"
        :product="product.name"
      >
        <DiagramSelectiveAot />
      </DiagramFrame>
    </div>
  </PageSection>

  <!-- vs IL2CPP -->
  <PageSection width="wide">
    <SectionHeader
      index="02"
      eyebrow="Gains"
      :title="t('products.leanclr.advantages.title')"
      :desc="t('products.leanclr.advantages.desc')"
    />
    <div class="reveal mt-10 grid gap-4 md:grid-cols-2">
      <article
        v-for="a in advantages"
        :key="a"
        class="border border-line bg-raised p-6"
      >
        <h3 class="text-base">
          {{ t(`products.leanclr.advantages.items.${a}.title`) }}
        </h3>
        <p class="mt-2 text-[13px] leading-relaxed text-fg-secondary">
          {{ t(`products.leanclr.advantages.items.${a}.desc`) }}
        </p>
      </article>
    </div>
  </PageSection>

  <!-- Why: three-way comparison -->
  <PageSection tone="raised" width="wide">
    <SectionHeader
      index="03"
      eyebrow="Comparison"
      :title="t('products.leanclr.why.title')"
      :desc="t('products.leanclr.why.desc')"
    />

    <div class="reveal mt-10 grid gap-4 lg:grid-cols-3">
      <!-- The two alternatives, with their limits -->
      <div
        v-for="alt in (['coreclr', 'il2cpp'] as const)"
        :key="alt"
        class="border border-line bg-base p-6"
      >
        <h3 class="data text-[14px] text-fg-secondary">
          {{ t(`products.leanclr.why.${alt}.title`) }}
        </h3>
        <ul class="mt-4 space-y-2.5">
          <li
            v-for="item in list(`products.leanclr.why.${alt}.items`)"
            :key="item"
            class="flex gap-2.5 text-[13px] leading-relaxed text-fg-muted"
          >
            <Icon name="minus" :size="14" class="mt-1 shrink-0 text-line-strong" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>

      <!-- LeanCLR -->
      <div class="border border-accent/40 bg-base p-6">
        <div class="flex items-center gap-3">
          <span
            class="h-0.5 w-10"
            :style="{ background: `var(${product.colorVar})` }"
            aria-hidden="true"
          ></span>
          <h3 class="data text-[14px] text-fg">
            {{ t('products.leanclr.why.leanclr.title') }}
          </h3>
        </div>
        <ul class="mt-4 space-y-2.5">
          <li
            v-for="item in list('products.leanclr.why.leanclr.items')"
            :key="item"
            class="flex gap-2.5 text-[13px] leading-relaxed text-fg-secondary"
          >
            <Icon name="check" :size="14" class="mt-1 shrink-0 text-data-pos" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </PageSection>

  <!-- Editions -->
  <PageSection width="default">
    <SectionHeader
      index="04"
      eyebrow="Roadmap"
      :title="t('products.leanclr.versions.title')"
    />
    <div class="reveal mt-10 grid gap-4 md:grid-cols-2">
      <article
        v-for="v in (['standard', 'core'] as const)"
        :key="v"
        class="border border-line bg-raised p-6"
      >
        <span
          :class="[
            'data inline-block border px-2 py-0.5 text-[10px] tracking-wide uppercase',
            v === 'standard'
              ? 'border-data-pos/40 text-data-pos'
              : 'border-line text-fg-muted',
          ]"
        >
          {{ t(`products.leanclr.versions.${v}.status`) }}
        </span>
        <h3 class="mt-3 text-base">
          {{ t(`products.leanclr.versions.${v}.title`) }}
        </h3>
        <p class="mt-2 text-[13px] leading-relaxed text-fg-secondary">
          {{ t(`products.leanclr.versions.${v}.desc`) }}
        </p>
        <ul class="mt-4 space-y-2">
          <li
            v-for="item in list(`products.leanclr.versions.${v}.items`)"
            :key="item"
            class="flex gap-2.5 text-[13px] text-fg-muted"
          >
            <Icon name="check" :size="14" class="mt-1 shrink-0 text-line-strong" />
            <span>{{ item }}</span>
          </li>
        </ul>
      </article>
    </div>
  </PageSection>

  <!-- Platform status -->
  <PageSection tone="raised" width="default">
    <SectionHeader
      index="05"
      eyebrow="Platforms"
      :title="t('products.leanclr.platforms.title')"
    />
    <div class="reveal mt-10 overflow-x-auto border border-line">
      <table class="min-w-[620px] text-sm">
        <thead>
          <tr class="border-b border-line bg-overlay">
            <th scope="col" class="px-4 py-3 text-left text-[13px] font-medium text-fg">
              {{ t('labels.platform') }}
            </th>
            <th scope="col" class="px-4 py-3 text-left text-[13px] font-medium text-fg">
              {{ t('labels.status') }}
            </th>
            <th scope="col" class="px-4 py-3 text-left text-[13px] font-medium text-fg">
              {{ t('labels.notes') }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="row in platformRows"
            :key="row.key"
            class="border-b border-line-faint last:border-b-0"
          >
            <td class="px-4 py-3 font-medium text-fg">{{ row.name }}</td>
            <td class="px-4 py-3">
              <span
                :class="[
                  'data border px-2 py-0.5 text-[11px]',
                  row.done
                    ? 'border-data-pos/40 text-data-pos'
                    : 'border-data-warn/40 text-data-warn',
                ]"
              >
                {{ row.status }}
              </span>
            </td>
            <td class="data px-4 py-3 text-[12px] text-fg-muted">{{ row.note }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </PageSection>

  <!-- Related repos -->
  <PageSection width="default">
    <SectionHeader
      index="06"
      eyebrow="Repositories"
      :title="t('products.leanclr.repos.title')"
    />
    <div class="reveal mt-10 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
      <a
        v-for="repo in repos"
        :key="repo.key"
        :href="repo.url"
        target="_blank"
        rel="noopener noreferrer"
        class="group border border-line bg-raised p-5 transition-colors duration-200 hover:border-line-strong"
      >
        <div class="flex items-center justify-between gap-2">
          <h3 class="data text-[13px] text-fg">{{ repo.name }}</h3>
          <Icon
            name="external"
            :size="14"
            class="text-fg-muted transition-colors duration-200 group-hover:text-accent"
          />
        </div>
        <p class="mt-2 text-[12px] leading-relaxed text-fg-muted">
          {{ t(`products.leanclr.repos.${repo.key}`) }}
        </p>
      </a>
    </div>
  </PageSection>

  <ProductResources :product="product" index="07" :links="resourceLinks" />
</template>
