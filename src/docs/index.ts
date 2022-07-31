import type { RouteRecordRaw } from 'vue-router'

const modules = import.meta.glob('./*/index.ts')

const routes: RouteRecordRaw[] = []

Object.entries(modules).forEach(([path, module]) => {
  const name = path.replace(/^\.\/(.+)\/index.ts$/, '$1')

  routes.push({
    path: `/${name}`,
    component: module
  })
})

export default routes
