import { createRouter, createWebHashHistory } from 'vue-router'
import docs from '../docs'

import Layout from '@/layout/index.vue'

const routes = [
  { path: '/', component: () => import('@/views/home.vue') },
  {
    path: '/components',
    component: Layout,
    children: docs
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
