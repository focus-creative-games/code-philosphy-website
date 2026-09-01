<template>
  <header class="site-header" :class="{ scrolled: isScrolled }" id="masthead">
    <div class="header-inner">
      <div class="site-branding">
        <router-link to="/" class="logo-link">
          <img
            src="/images/bg/site-logo.png"
            class="custom-logo"
            alt="代码哲学官网"
          />
        </router-link>
      </div>
      <button class="mobile-menu-toggle" @click="toggleMobileMenu" :aria-expanded="mobileMenuOpen">
        <span class="hamburger" :class="{ active: mobileMenuOpen }">
          <span></span><span></span><span></span>
        </span>
      </button>
      <nav class="main-nav" :class="{ open: mobileMenuOpen }">
        <ul class="nav-menu">
          <li v-for="item in menuItems" :key="item.label" :class="{ 'has-children': item.children }">
            <template v-if="item.children">
              <button
                class="menu-link dropdown-trigger"
                :class="{ active: isMoreSection, open: moreOpen }"
                :aria-expanded="moreOpen"
                @click="toggleMore"
              >
                {{ item.label }}
                <svg class="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </button>
              <ul class="dropdown-menu" :class="{ open: moreOpen }">
                <li v-for="child in item.children" :key="child.label">
                  <router-link
                    :to="child.path"
                    class="dropdown-link"
                    :class="{ active: isActive(child.path) }"
                    @click="closeAllMenus"
                  >
                    <span class="dropdown-name">{{ child.label }}</span>
                    <span v-if="child.desc" class="dropdown-desc">{{ child.desc }}</span>
                  </router-link>
                </li>
              </ul>
            </template>
            <router-link
              v-else-if="!item.external"
              :to="item.path"
              class="menu-link"
              :class="{ active: isActive(item.path) }"
              @click="closeAllMenus"
            >
              {{ item.label }}
            </router-link>
            <a
              v-else
              :href="item.path"
              class="menu-link"
              target="_blank"
              rel="noopener"
              @click="closeAllMenus"
            >
              {{ item.label }}
              <svg class="external-icon" width="12" height="12" viewBox="0 0 12 12" fill="currentColor"><path d="M3.5 1.5v1h4.793L1.146 9.646l.708.708L9 3.207V8h1V1.5z"/></svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

interface NavChild {
  label: string
  path: string
  desc?: string
}

interface NavItem {
  label: string
  path: string
  external?: boolean
  children?: NavChild[]
}

const route = useRoute()
const mobileMenuOpen = ref(false)
const moreOpen = ref(false)
const isScrolled = ref(false)

const menuItems: NavItem[] = [
  { label: '首页', path: '/', external: false },
  { label: 'HybridCLR', path: '/hybridclr', external: false },
  { label: 'LeanCLR', path: '/leanclr', external: false },
  { label: 'ZLua', path: '/zlua', external: false },
  {
    label: '更多产品',
    path: '#more-products',
    children: [
      { label: 'Luban', path: '/luban', desc: '游戏配置解决方案' },
      { label: 'ZenTS', path: '/zents', desc: 'Unity TypeScript 方案' },
      { label: 'LuaTier', path: '/luatier', desc: '现代 Lua 运行时' },
      { label: 'Obfuz', path: '/obfuz', desc: '代码混淆与加固' },
    ],
  },
  { label: '商业化服务', path: '/bussiness', external: false },
]

const morePaths = ['/luban', '/zents', '/luatier', '/obfuz']
const isMoreSection = computed(() => morePaths.includes(route.path))

function isActive(path: string) {
  return route.path === path
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) moreOpen.value = false
}

function toggleMore() {
  moreOpen.value = !moreOpen.value
}

function closeAllMenus() {
  mobileMenuOpen.value = false
  moreOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

function handlePointerDown(e: PointerEvent) {
  const header = document.getElementById('masthead')
  if (header && !header.contains(e.target as Node)) {
    moreOpen.value = false
  }
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeAllMenus()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('pointerdown', handlePointerDown)
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('pointerdown', handlePointerDown)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 15, 30, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  transition: all 0.3s ease;
}

.site-header.scrolled {
  background: rgba(10, 15, 30, 0.85);
  border-bottom-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
}

.header-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  height: 70px;
}

.site-branding .logo-link {
  display: flex;
  align-items: center;
}

.custom-logo {
  max-width: 240px;
  height: auto;
  transition: all 0.2s linear;
}

.main-nav {
  display: flex;
}

.nav-menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  gap: 4px;
}

.nav-menu > li {
  display: flex;
  align-items: center;
  position: relative;
}

.menu-link {
  display: flex;
  align-items: center;
  gap: 4px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-family: var(--font-body);
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 0.5px;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;
}

.menu-link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
}

.menu-link.active {
  color: #ffffff;
  background: rgba(59, 130, 246, 0.12);
}

.menu-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #8b5cf6);
  border-radius: 1px;
}

.dropdown-trigger.open .chevron,
.has-children:hover .chevron {
  transform: rotate(180deg);
}

.external-icon {
  opacity: 0.5;
  margin-left: 2px;
  flex-shrink: 0;
}

.chevron {
  opacity: 0.55;
  margin-left: 2px;
  transition: transform 0.2s ease;
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  min-width: 240px;
  padding: 8px;
  list-style: none;
  background: rgba(15, 23, 42, 0.96);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
  opacity: 0;
  visibility: hidden;
  transform: translateY(6px);
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  z-index: 20;
}

.has-children:hover .dropdown-menu,
.dropdown-menu.open {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-link {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 12px;
  border-radius: 8px;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.85);
  transition: background 0.2s ease;
}

.dropdown-link:hover,
.dropdown-link.active {
  background: rgba(59, 130, 246, 0.15);
  color: #ffffff;
}

.dropdown-name {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
}

.dropdown-desc {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.4);
  font-weight: 400;
}

.mobile-menu-toggle {
  display: none;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 22px;
}

.hamburger span {
  display: block;
  height: 2px;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease;
  border-radius: 1px;
}

.hamburger.active span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

@media (max-width: 1100px) {
  .custom-logo {
    max-width: 180px;
  }

  .header-inner {
    padding: 0 20px;
    height: 60px;
  }

  .mobile-menu-toggle {
    display: block;
  }

  .main-nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(10, 15, 30, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
  }

  .main-nav.open {
    display: block;
  }

  .nav-menu {
    flex-direction: column;
    padding: 8px;
    gap: 2px;
  }

  .nav-menu > li {
    display: block;
  }

  .menu-link {
    color: rgba(255, 255, 255, 0.8);
    padding: 12px 16px;
    font-size: 15px;
    border-radius: 8px;
    width: 100%;
  }

  .menu-link:hover,
  .menu-link.active {
    color: #ffffff;
    background: rgba(59, 130, 246, 0.15);
  }

  .menu-link.active::after {
    display: none;
  }

  .has-children:hover .dropdown-menu {
    opacity: 0;
    visibility: hidden;
    transform: none;
  }

  .dropdown-menu {
    position: static;
    min-width: 0;
    margin: 0 8px 8px;
    padding: 4px;
    background: rgba(255, 255, 255, 0.03);
    border-color: rgba(255, 255, 255, 0.06);
    box-shadow: none;
    transform: none;
    display: none;
  }

  .dropdown-menu.open {
    display: block;
    opacity: 1;
    visibility: visible;
  }

  .has-children:hover .chevron {
    transform: none;
  }

  .dropdown-trigger.open .chevron {
    transform: rotate(180deg);
  }
}

@media (max-width: 544px) {
  .custom-logo {
    max-width: 140px;
  }
}
</style>
