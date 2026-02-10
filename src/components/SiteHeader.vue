<template>
  <header class="site-header" id="masthead">
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
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const menuItems = [
  { label: '首页', path: '/', external: false },
  { label: '商业化服务', path: '/bussiness', external: false },
  { label: 'HybridCLR', path: '/hybridclr', external: false },
  { label: 'LUBAN', path: 'https://www.datable.cn/docs/intro', external: true },
]

function isActive(path: string) {
  return route.path === path
}
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.3);
  min-height: 60px;
}

.header-inner {
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 35px;
}

.site-branding .logo-link {
  display: flex;
  align-items: center;
}

.custom-logo {
  max-width: 280px;
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
  gap: 0;
}

.nav-menu li {
  display: flex;
  align-items: center;
}

.menu-link {
  display: flex;
  align-items: center;
  color: #fafcfd;
  text-decoration: none;
  font-family: inherit;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 3px;
  padding: 25px 25px;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.menu-link:hover,
.menu-link.active {
  color: #6a41a6;
  transform: scale(1.1);
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
  width: 24px;
}

.hamburger span {
  display: block;
  height: 2px;
  background: #046bd2;
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
    padding: 10px 20px;
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
    background: #ffffff;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  }

  .main-nav.open {
    display: block;
  }

  .nav-menu {
    flex-direction: column;
  }

  .menu-link {
    color: #334155;
    padding: 15px 20px;
    letter-spacing: 1px;
    font-size: 16px;
  }

  .menu-link:hover,
  .menu-link.active {
    color: #045cb4;
    background: #f9fafb;
    transform: none;
  }
}

@media (max-width: 544px) {
  .custom-logo {
    max-width: 140px;
  }
}
</style>
