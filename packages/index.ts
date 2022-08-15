import { App } from 'vue'
import * as components from './components'
import * as methods from './methods'
import './styles/index.scss'

const install = function (app: App) {
  Object.entries(components).forEach(([, component]) => {
    component.install?.(app)
  })

  Object.entries(methods).forEach(([, method]) => {
    method.install?.(app)
  })
}

export default {
  install
}

export * from './components'
export * from './methods'
