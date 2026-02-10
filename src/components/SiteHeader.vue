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
      <button class="mobile-menu-toggle" @click="mobileMenuOpen = !mobileMenuOpen" :aria-expanded="mobileMenuOpen">
        <span class="hamburger" :class="{ active: mobileMenuOpen }">
          <span></span><span></span><span></span>
        </span>
      </button>
      <nav class="main-nav" :class="{ open: mobileMenuOpen }">
        <ul class="nav-menu">
          <li v-for="item in menuItems" :key="item.path">
            <router-link
              v-if="!item.external"
              :to="item.path"
              class="menu-link"
              :class="{ active: isActive(item.path) }"
              @click="mobileMenuOpen = false"
            >
              {{ item.label }}
            </router-link>
            <a
              v-else
              :href="item.path"
              class="menu-link"
              target="_blank"
              rel="noopener"
              @click="mobileMenuOpen = false"
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
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)
const isScrolled = ref(false)

const menuItems = [
  { label: '首页', path: '/', external: false },
  { label: 'HybridCLR', path: '/hybridclr', external: false },
  { label: 'LeanCLR', path: '/leanclr', external: false },
  { label: 'Luban', path: '/luban', external: false },
  { label: '商业化服务', path: '/bussiness', external: false },
]

function isActive(path: string) {
  return route.path === path
}

function handleScroll() {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
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

.nav-menu li {
  display: flex;
  align-items: center;
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
  padding: 8px 18px;
  border-radius: 8px;
  transition: all 0.3s ease;
  white-space: nowrap;
  position: relative;
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

.external-icon {
  opacity: 0.5;
  margin-left: 2px;
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

@media (max-width: 921px) {
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

  .menu-link {
    color: rgba(255, 255, 255, 0.8);
    padding: 12px 16px;
    font-size: 15px;
    border-radius: 8px;
  }

  .menu-link:hover,
  .menu-link.active {
    color: #ffffff;
    background: rgba(59, 130, 246, 0.15);
  }

  .menu-link.active::after {
    display: none;
  }
}

@media (max-width: 544px) {
  .custom-logo {
    max-width: 140px;
  }
}
</style>
