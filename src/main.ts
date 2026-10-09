import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
// Importing the router also rewrites any legacy `/#/hybridclr` URL to a real
// path; that has to happen before createWebHistory() reads window.location.
import router from './router'
import { i18n } from './i18n'
import './styles/tailwind.css'

createApp(App).use(createHead()).use(i18n).use(router).mount('#app')
