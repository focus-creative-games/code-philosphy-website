<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Icon from '../icons/Icon.vue'

export interface Edition {
  key: string
  /** Free vs quote-based. */
  free?: boolean
  recommended?: boolean
}

export interface MatrixRow {
  key: string
  /** One entry per edition, in the same order. */
  included: boolean[]
  /** Renders the row with emphasis — used for DHE. */
  highlight?: boolean
  docUrl?: string
}

defineProps<{
  base: string
  editions: readonly Edition[]
  rows: readonly MatrixRow[]
}>()

const { t } = useI18n()
</script>

<template>
  <!-- A matrix rather than four parallel cards: the four editions share most
       features, so the only readable comparison is row-by-row. Scrolls
       horizontally on narrow screens with the feature column pinned. -->
  <div class="overflow-x-auto border border-line">
    <table class="w-full min-w-[720px] text-sm">
      <caption class="sr-only">{{ t(`${base}.title`) }}</caption>
      <thead>
        <tr class="border-b border-line bg-overlay">
          <th
            scope="col"
            class="sticky left-0 z-10 bg-overlay px-4 py-3 text-left text-[13px] font-medium text-fg"
          >
            {{ t('labels.feature') }}
          </th>
          <th
            v-for="ed in editions"
            :key="ed.key"
            scope="col"
            class="px-3 py-3 text-center align-top"
          >
            <span
              v-if="ed.recommended"
              class="data mb-1.5 inline-block border border-accent/40 px-1.5 py-0.5 text-[9px] tracking-wide text-accent uppercase"
            >
              {{ t('labels.recommended') }}
            </span>
            <span class="block text-[13px] font-medium text-fg">
              {{ t(`${base}.names.${ed.key}`) }}
            </span>
            <span
              :class="[
                'data mt-1 block text-[11px]',
                ed.free ? 'text-data-pos' : 'text-fg-muted',
              ]"
            >
              {{ ed.free ? t(`${base}.prices.community`) : t(`${base}.prices.commercial`) }}
            </span>
          </th>
        </tr>
      </thead>

      <tbody>
        <!-- Edition blurbs, so each column still explains itself -->
        <tr class="border-b border-line bg-base">
          <td class="sticky left-0 z-10 bg-base px-4 py-3"></td>
          <td
            v-for="ed in editions"
            :key="ed.key"
            class="px-3 py-3 text-center align-top text-[11px] leading-snug text-fg-muted"
          >
            {{ t(`${base}.descs.${ed.key}`) }}
          </td>
        </tr>

        <tr
          v-for="row in rows"
          :key="row.key"
          :class="[
            'border-b border-line-faint last:border-b-0',
            row.highlight ? 'bg-accent-dim/15' : '',
          ]"
        >
          <th
            scope="row"
            :class="[
              'sticky left-0 z-10 px-4 py-2.5 text-left font-normal',
              row.highlight
                ? 'bg-[color-mix(in_oklab,var(--color-accent-dim)_15%,var(--color-base))] text-accent'
                : 'bg-raised text-fg-secondary',
            ]"
          >
            <a
              v-if="row.docUrl"
              :href="row.docUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[13px] underline decoration-line-strong underline-offset-2 hover:text-fg"
            >
              {{ t(`${base}.rows.${row.key}`) }}
            </a>
            <span v-else class="text-[13px]">
              {{ t(`${base}.rows.${row.key}`) }}
            </span>
          </th>

          <td
            v-for="(yes, i) in row.included"
            :key="i"
            class="px-3 py-2.5 text-center"
          >
            <Icon
              v-if="yes"
              name="check"
              :size="15"
              :class="['mx-auto', row.highlight ? 'text-accent' : 'text-data-pos']"
              :label="t('labels.done')"
            />
            <Icon
              v-else
              name="minus"
              :size="15"
              class="mx-auto text-line-strong"
              aria-hidden="true"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
