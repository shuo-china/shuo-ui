import { createRouter, createWebHashHistory } from 'vue-router'
import Sidebar from '@/layout/sidebar.vue'
import Home from '@/pages/home.vue'
import { Install, Start } from '@/pages/guide'
import docs from '../docs'

const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/components',
    name: 'Components',
    component: Sidebar,
    redirect: docs[0].path,
    children: docs
  },
  {
    path: '/guide',
    name: 'Guide',
    component: Sidebar,
    redirect: '/install',
    children: [
      { path: '/install', name: 'Install', component: Install },
      { path: '/start', name: 'Start', component: Start }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
