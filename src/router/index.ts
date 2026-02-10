import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/hybridclr', name: 'HybridCLR', component: () => import('../views/HybridCLR.vue') },
  { path: '/leanclr', name: 'LeanCLR', component: () => import('../views/LeanCLR.vue') },
  { path: '/luban', name: 'Luban', component: () => import('../views/Luban.vue') },
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
