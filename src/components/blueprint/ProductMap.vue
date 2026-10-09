<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useLocale } from '../../composables/useLocale'
import { PRODUCTS } from '../../data/site'

const { t } = useI18n()
const { to } = useLocale()

/** Layout rows of the map, top (host) to bottom (tooling). */
const layers = [
  { key: 'host', hosts: ['Unity', 'Tuanjie', 'Godot', 'UE', 'Cocos'] },
  { key: 'runtime', ids: ['hybridclr', 'leanclr'] as const },
  { key: 'scripting', ids: ['zlua', 'zents', 'luatier'] as const },
  { key: 'tooling', ids: ['luban', 'obfuz'] as const },
]

function product(id: string) {
  return PRODUCTS.find((p) => p.id === id)!
}
</script>

<template>
  <figure class="border border-line bg-raised">
    <!-- Host engines: context, not our products -->
    <div class="border-b border-line-faint px-4 py-3">
      <span class="data text-[10px] tracking-[0.16em] text-fg-muted uppercase">
        host
      </span>
      <ul class="mt-2 flex flex-wrap gap-1.5">
        <li
          v-for="host in layers[0].hosts"
          :key="host"
          class="data border border-line-faint px-2 py-1 text-[11px] text-fg-secondary"
        >
          {{ host }}
        </li>
      </ul>
    </div>

    <!-- Our three layers -->
    <div
      v-for="layer in layers.slice(1)"
      :key="layer.key"
      class="border-b border-line-faint px-4 py-3 last:border-b-0"
    >
      <span class="data text-[10px] tracking-[0.16em] text-fg-muted uppercase">
        {{ t(`groups.${layer.key === 'tooling' ? 'data' : layer.key}.label`) }}
      </span>

      <ul class="mt-2 grid gap-1.5" :style="{ gridTemplateColumns: `repeat(${layer.ids!.length}, minmax(0, 1fr))` }">
        <li v-for="id in layer.ids" :key="id">
          <RouterLink
            :to="to(product(id).path)"
            class="group flex h-full flex-col gap-0.5 border border-line bg-overlay px-2.5 py-2 transition-colors duration-200 hover:border-line-strong"
          >
            <span
              class="h-0.5 w-6"
              :style="{ background: `var(${product(id).colorVar})` }"
              aria-hidden="true"
            ></span>
            <span class="mt-1 text-[13px] font-medium text-fg">
              {{ product(id).name }}
            </span>
            <span class="text-[11px] leading-tight text-fg-muted">
              {{ t(`products.${id}.metric`) }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>

    <figcaption class="data border-t border-line px-4 py-2.5 text-[11px] text-fg-muted">
      {{ t('home.hero.diagramCaption') }}
    </figcaption>
  </figure>
</template>
