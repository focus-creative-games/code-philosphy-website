import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/hybridclr', name: 'HybridCLR', component: () => import('../views/HybridCLR.vue') },
  { path: '/leanclr', name: 'LeanCLR', component: () => import('../views/LeanCLR.vue') },
  { path: '/luban', name: 'Luban', component: () => import('../views/Luban.vue') },
  { path: '/zlua', name: 'ZLua', component: () => import('../views/ZLua.vue') },
  { path: '/zents', name: 'ZenTS', component: () => import('../views/ZenTS.vue') },
  { path: '/luatier', name: 'LuaTier', component: () => import('../views/LuaTier.vue') },
  { path: '/obfuz', name: 'Obfuz', component: () => import('../views/Obfuz.vue') },
  { path: '/bussiness', name: 'Business', component: () => import('../views/Business.vue') },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
