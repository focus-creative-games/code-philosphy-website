import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Business from '../views/Business.vue'
import HybridCLR from '../views/HybridCLR.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/bussiness', name: 'Business', component: Business },
  { path: '/hybridclr', name: 'HybridCLR', component: HybridCLR },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
