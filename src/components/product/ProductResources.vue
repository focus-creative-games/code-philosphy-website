<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PageSection from '../ui/PageSection.vue'
import SectionHeader from '../ui/SectionHeader.vue'
import AppButton from '../ui/AppButton.vue'
import Icon from '../icons/Icon.vue'
import IconGithub from '../icons/IconGithub.vue'
import { BUSINESS_EMAIL, type Product } from '../../data/site'

const props = defineProps<{
  product: Product
  index: string
  /** Extra repos/examples to surface alongside the main links. */
  links?: readonly { label: string; href: string }[]
}>()

const { t } = useI18n()

const contactLines = [
  props.product.qq ? `QQ ${props.product.qq}` : null,
  props.product.email ?? BUSINESS_EMAIL,
].filter(Boolean) as string[]
</script>

<template>
  <PageSection tone="raised" width="default">
    <SectionHeader
      :index="index"
      eyebrow="Resources"
      :title="t(`products.${product.id}.resources.title`)"
    />

    <div class="reveal mt-8 flex flex-wrap gap-3">
      <AppButton v-if="product.docs" variant="primary" :href="product.docs">
        <Icon name="docs" :size="15" />
        {{ t('actions.docs') }}
      </AppButton>
      <AppButton :href="`https://github.com/${product.repo}`">
        <IconGithub :size="15" />
        {{ t('actions.repo') }}
      </AppButton>
      <AppButton v-for="link in links" :key="link.href" :href="link.href">
        {{ link.label }}
        <Icon name="external" :size="14" />
      </AppButton>
      <AppButton :href="`mailto:${product.email ?? BUSINESS_EMAIL}`">
        <Icon name="mail" :size="15" />
        {{ t('actions.contact') }}
      </AppButton>
    </div>

    <p class="data reveal mt-6 text-[12px] text-fg-muted">
      {{ contactLines.join(' · ') }}
    </p>
  </PageSection>
</template>
