import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const routes = [
  { path: '/', component: () => import('@/views/home.vue') },
  {
    path: '/components',
    component: Layout,
    children: [
      {
        path: '/button',
        component: () => import('@/docs/button/button.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
