<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import AppButton from '../components/ui/AppButton.vue'
import { useLocale } from '../composables/useLocale'
import { useSeo } from '../composables/useSeo'

const { t } = useI18n()
const { to } = useLocale()

useSeo(() => ({
  title: t('notFound.seo.title'),
  description: t('notFound.desc'),
}))
</script>

<template>
  <section class="relative flex min-h-[70vh] items-center bg-base">
    <div
      class="blueprint-grid blueprint-grid-mask pointer-events-none absolute inset-0 opacity-40"
      aria-hidden="true"
    ></div>
    <div class="relative mx-auto max-w-xl px-5 py-20 text-center sm:px-8">
      <p class="data text-5xl text-accent">{{ t('notFound.code') }}</p>
      <h1 class="mt-6 text-2xl sm:text-3xl">{{ t('notFound.title') }}</h1>
      <p class="mt-4 text-[15px] leading-relaxed text-fg-secondary">
        {{ t('notFound.desc') }}
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <AppButton variant="primary" :to="to('/')">
          {{ t('notFound.home') }}
        </AppButton>
        <AppButton :to="to('/solutions')">
          {{ t('notFound.products') }}
        </AppButton>
      </div>
    </div>
  </section>
</template>
