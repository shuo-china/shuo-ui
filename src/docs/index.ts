import type { RouteRecordRaw } from 'vue-router'
import { camelCase, upperFirst } from 'lodash'

const modules = import.meta.glob('./*/index.ts')

const routes: RouteRecordRaw[] = []

Object.entries(modules).forEach(([path, module]) => {
  const name = path.replace(/^\.\/(.+)\/index.ts$/, '$1')

  routes.push({
    name: upperFirst(camelCase(name)),
    path: `/${name}`,
    component: module
  })
})

export default routes
