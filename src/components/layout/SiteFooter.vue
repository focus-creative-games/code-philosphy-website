<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import IconGithub from '../icons/IconGithub.vue'
import { useLocale } from '../../composables/useLocale'
import {
  BUSINESS_EMAIL,
  GITHUB_ORG,
  PRODUCTS,
  productById,
} from '../../data/site'

const { t } = useI18n()
const { to } = useLocale()
const year = new Date().getFullYear()

const docLinks = PRODUCTS.filter((p) => p.docs).map((p) => ({
  name: p.name,
  url: p.docs!,
}))

const companyLinks = [
  { key: 'solutions', path: '/solutions' },
  { key: 'customers', path: '/customers' },
  { key: 'about', path: '/about' },
  { key: 'services', path: '/services' },
]

const productEmails = PRODUCTS.filter((p) => p.email).map((p) => ({
  id: p.id,
  name: p.name,
  email: p.email!,
}))

const hybridclrDocs = productById('hybridclr').docs!
</script>

<template>
  <footer class="border-t border-line bg-sunken">
    <div class="mx-auto max-w-[1400px] px-5 py-14 sm:px-8 lg:px-10">
      <div class="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <!-- Brand -->
        <div>
          <span class="brand-wordmark text-base font-semibold tracking-tight">
            Code Philosophy
          </span>
          <p class="mt-2 max-w-xs text-[13px] leading-relaxed text-fg-muted">
            {{ t('brand.positioning') }}
          </p>
          <a
            :href="GITHUB_ORG"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-4 inline-flex items-center gap-2 text-[13px] text-fg-secondary transition-colors duration-200 hover:text-fg"
          >
            <IconGithub :size="15" />
            focus-creative-games
          </a>
        </div>

        <!-- Products -->
        <div>
          <h2 class="data text-[10px] tracking-[0.16em] text-fg-muted uppercase">
            {{ t('footer.products') }}
          </h2>
          <ul class="mt-3 space-y-2">
            <li v-for="p in PRODUCTS" :key="p.id">
              <RouterLink
                :to="to(p.path)"
                class="text-[13px] text-fg-secondary transition-colors duration-200 hover:text-fg"
              >
                {{ p.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Docs -->
        <div>
          <h2 class="data text-[10px] tracking-[0.16em] text-fg-muted uppercase">
            {{ t('footer.resources') }}
          </h2>
          <ul class="mt-3 space-y-2">
            <li v-for="doc in docLinks" :key="doc.url">
              <a
                :href="doc.url"
                target="_blank"
                rel="noopener noreferrer"
                class="text-[13px] text-fg-secondary transition-colors duration-200 hover:text-fg"
              >
                {{ doc.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h2 class="data text-[10px] tracking-[0.16em] text-fg-muted uppercase">
            {{ t('footer.company') }}
          </h2>
          <ul class="mt-3 space-y-2">
            <li v-for="link in companyLinks" :key="link.key">
              <RouterLink
                :to="to(link.path)"
                class="text-[13px] text-fg-secondary transition-colors duration-200 hover:text-fg"
              >
                {{ t(`nav.${link.key}`) }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h2 class="data text-[10px] tracking-[0.16em] text-fg-muted uppercase">
            {{ t('footer.contact') }}
          </h2>
          <ul class="mt-3 space-y-2">
            <li>
              <a
                :href="`mailto:${BUSINESS_EMAIL}`"
                class="data text-[12px] break-all text-fg-secondary transition-colors duration-200 hover:text-fg"
              >
                {{ BUSINESS_EMAIL }}
              </a>
            </li>
            <li v-for="pe in productEmails" :key="pe.id">
              <a
                :href="`mailto:${pe.email}`"
                class="data text-[12px] break-all text-fg-muted transition-colors duration-200 hover:text-fg-secondary"
              >
                {{ pe.email }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="border-t border-line-faint">
      <div
        class="mx-auto flex max-w-[1400px] flex-wrap items-center gap-x-4 gap-y-2 px-5 py-4 sm:px-8 lg:px-10"
      >
        <span class="data text-[11px] text-fg-muted">
          © {{ year }} {{ t('footer.rights') }}
        </span>
        <a
          href="https://beian.miit.gov.cn/#/Integrated/index"
          target="_blank"
          rel="noopener noreferrer"
          class="data text-[11px] text-fg-muted transition-colors duration-200 hover:text-fg-secondary"
        >
          {{ t('footer.icp') }}
        </a>
        <a
          :href="hybridclrDocs"
          target="_blank"
          rel="noopener noreferrer"
          class="data ml-auto text-[11px] text-fg-muted transition-colors duration-200 hover:text-fg-secondary"
        >
          hybridclr.cn
        </a>
      </div>
    </div>
  </footer>
</template>
