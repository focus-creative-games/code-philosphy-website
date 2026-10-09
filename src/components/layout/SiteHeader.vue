<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Icon from '../icons/Icon.vue'
import IconGithub from '../icons/IconGithub.vue'
import LangSwitch from './LangSwitch.vue'
import { useLocale } from '../../composables/useLocale'
import { useGithubStars, formatStars } from '../../composables/useGithubStars'
import {
  GITHUB_ORG,
  PRODUCT_GROUPS,
  productsInGroup,
} from '../../data/site'

const { t } = useI18n()
const route = useRoute()
const { to, barePath } = useLocale()
const { total } = useGithubStars()

const mobileOpen = ref(false)
const productsOpen = ref(false)
const scrolled = ref(false)

const groups = PRODUCT_GROUPS.map((g) => ({
  id: g,
  products: productsInGroup(g),
}))

const productPaths = computed(() =>
  groups.flatMap((g) => g.products.map((p) => p.path)),
)

const inProducts = computed(() => productPaths.value.includes(barePath.value))

const links = [
  { key: 'solutions', path: '/solutions' },
  { key: 'customers', path: '/customers' },
  { key: 'about', path: '/about' },
  { key: 'services', path: '/services' },
]

function isActive(path: string) {
  return barePath.value === path
}

function closeAll() {
  mobileOpen.value = false
  productsOpen.value = false
}

function onPointerDown(e: PointerEvent) {
  const header = document.getElementById('site-header')
  if (header && !header.contains(e.target as Node)) productsOpen.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeAll()
}

function onScroll() {
  scrolled.value = window.scrollY > 16
}

watch(() => route.fullPath, closeAll)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  document.addEventListener('pointerdown', onPointerDown)
  document.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  document.removeEventListener('pointerdown', onPointerDown)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <header
    id="site-header"
    :class="[
      'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
      scrolled || mobileOpen
        ? 'border-line bg-base/95 backdrop-blur'
        : 'border-transparent bg-base/70 backdrop-blur-sm',
    ]"
  >
    <div class="mx-auto flex h-16 max-w-[1400px] items-center gap-6 px-5 sm:px-8 lg:px-10">
      <!-- Wordmark: the one place a gradient is allowed -->
      <RouterLink
        :to="to('/')"
        class="flex shrink-0 items-baseline gap-2"
        @click="closeAll"
      >
        <span class="brand-wordmark text-[17px] font-semibold tracking-tight">
          Code Philosophy
        </span>
      </RouterLink>

      <!-- Desktop nav -->
      <nav class="ml-auto hidden items-center gap-1 lg:flex" :aria-label="t('nav.products')">
        <div class="relative">
          <button
            type="button"
            :aria-expanded="productsOpen"
            aria-haspopup="true"
            :class="[
              'flex items-center gap-1.5 px-3 py-2 text-sm transition-colors duration-200',
              inProducts || productsOpen
                ? 'text-fg'
                : 'text-fg-secondary hover:text-fg',
            ]"
            @click="productsOpen = !productsOpen"
          >
            {{ t('nav.products') }}
            <Icon
              name="chevronDown"
              :size="14"
              :class="[
                'transition-transform duration-200',
                productsOpen ? 'rotate-180' : '',
              ]"
            />
          </button>

          <!-- Grouped mega panel -->
          <div
            v-show="productsOpen"
            class="absolute right-0 top-[calc(100%+0.5rem)] w-[min(44rem,calc(100vw-4rem))] border border-line bg-overlay p-4 shadow-2xl shadow-black/50"
          >
            <div class="grid grid-cols-2 gap-x-6 gap-y-5">
              <div v-for="group in groups" :key="group.id">
                <div class="flex items-baseline gap-2 border-b border-line-faint pb-2">
                  <span class="text-[13px] font-medium text-fg">
                    {{ t(`groups.${group.id}.label`) }}
                  </span>
                </div>
                <ul class="mt-2 space-y-0.5">
                  <li v-for="p in group.products" :key="p.id">
                    <RouterLink
                      :to="to(p.path)"
                      :class="[
                        'flex items-start gap-2.5 px-2 py-1.5 transition-colors duration-200',
                        isActive(p.path) ? 'bg-raised' : 'hover:bg-raised',
                      ]"
                      @click="closeAll"
                    >
                      <span
                        class="mt-[7px] h-2.5 w-0.5 shrink-0"
                        :style="{ background: `var(${p.colorVar})` }"
                        aria-hidden="true"
                      ></span>
                      <span class="min-w-0">
                        <span class="block text-[13px] font-medium text-fg">
                          {{ p.name }}
                        </span>
                        <span class="block truncate text-[11px] text-fg-muted">
                          {{ t(`products.${p.id}.short`) }}
                        </span>
                      </span>
                    </RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <RouterLink
          v-for="link in links"
          :key="link.key"
          :to="to(link.path)"
          :class="[
            'px-3 py-2 text-sm transition-colors duration-200',
            isActive(link.path) ? 'text-fg' : 'text-fg-secondary hover:text-fg',
          ]"
          @click="closeAll"
        >
          {{ t(`nav.${link.key}`) }}
        </RouterLink>

        <span class="mx-2 h-5 w-px bg-line" aria-hidden="true"></span>

        <LangSwitch />

        <a
          :href="GITHUB_ORG"
          target="_blank"
          rel="noopener noreferrer"
          class="ml-1 flex items-center gap-1.5 px-2 py-2 text-fg-secondary transition-colors duration-200 hover:text-fg"
          :aria-label="`${t('nav.github')} — ${formatStars(total, true)} ${t('labels.stars')}`"
        >
          <IconGithub :size="16" />
          <span class="data text-[12px]">{{ formatStars(total, true) }}</span>
        </a>
      </nav>

      <!-- Mobile toggle -->
      <div class="ml-auto flex items-center gap-2 lg:hidden">
        <LangSwitch />
        <button
          type="button"
          class="p-2 text-fg-secondary"
          data-test="mobile-menu-toggle"
          :aria-expanded="mobileOpen"
          :aria-label="mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')"
          @click="mobileOpen = !mobileOpen"
        >
          <Icon :name="mobileOpen ? 'cross' : 'grid'" :size="20" />
        </button>
      </div>
    </div>

    <!-- Mobile panel -->
    <nav
      v-show="mobileOpen"
      class="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-line bg-base px-5 pb-6 lg:hidden"
      :aria-label="t('nav.products')"
    >
      <div v-for="group in groups" :key="group.id" class="pt-4">
        <span class="data text-[10px] tracking-[0.16em] text-fg-muted uppercase">
          {{ t(`groups.${group.id}.label`) }}
        </span>
        <ul class="mt-1.5">
          <li v-for="p in group.products" :key="p.id">
            <RouterLink
              :to="to(p.path)"
              class="flex items-center gap-2.5 border-b border-line-faint py-2.5"
              @click="closeAll"
            >
              <span
                class="h-3 w-0.5 shrink-0"
                :style="{ background: `var(${p.colorVar})` }"
                aria-hidden="true"
              ></span>
              <span class="text-sm text-fg">{{ p.name }}</span>
              <span class="ml-auto truncate text-[11px] text-fg-muted">
                {{ t(`products.${p.id}.metric`) }}
              </span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <ul class="mt-6 border-t border-line pt-2">
        <li v-for="link in links" :key="link.key">
          <RouterLink
            :to="to(link.path)"
            class="block border-b border-line-faint py-3 text-sm text-fg"
            @click="closeAll"
          >
            {{ t(`nav.${link.key}`) }}
          </RouterLink>
        </li>
        <li>
          <a
            :href="GITHUB_ORG"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 py-3 text-sm text-fg"
          >
            <IconGithub :size="16" />
            {{ t('nav.github') }}
            <span class="data ml-auto text-[12px] text-fg-muted">
              {{ formatStars(total, true) }}
            </span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
