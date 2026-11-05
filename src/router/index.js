import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/receptes', name: 'receptes', component: () => import('../views/Receptes.vue') },
    { path: '/receptes/:id', name: 'detalls-recepts', component: () => import('../views/DetallsRecepta.vue') }
    ]
})

export default router