import { createRouter, createWebHashHistory } from 'vue-router'
import Sidebar from '@/layout/sidebar.vue'
import Home from '@/pages/home.vue'
import Install from '@/pages/guide/install.vue'
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
    children: [{ path: '/install', name: 'Install', component: Install }]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
