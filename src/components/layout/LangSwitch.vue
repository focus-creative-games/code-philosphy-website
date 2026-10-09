<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { LOCALES, type Locale } from '../../data/site'
import { useLocale } from '../../composables/useLocale'

const { t } = useI18n()
const { locale, switchTo } = useLocale()

const LABELS: Record<Locale, string> = { zh: '中', en: 'EN' }
</script>

<template>
  <div
    class="flex items-center border border-line"
    role="group"
    :aria-label="t('nav.switchLang')"
  >
    <button
      v-for="l in LOCALES"
      :key="l"
      type="button"
      :data-test="`lang-${l}`"
      :aria-current="locale === l ? 'true' : undefined"
      :class="[
        'data px-2.5 py-1 text-[11px] transition-colors duration-200',
        locale === l
          ? 'bg-overlay text-fg'
          : 'text-fg-muted hover:text-fg-secondary',
      ]"
      @click="switchTo(l)"
    >
      {{ LABELS[l] }}
    </button>
  </div>
</template>
