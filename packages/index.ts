import { App } from 'vue'
import * as components from './components'
import * as functions from './functions'
import './styles/normalize.css'

const install = function (app: App) {
  Object.entries(components).forEach(([, component]) => {
    component.install?.(app)
  })

  Object.entries(functions).forEach(([, fn]) => {
    fn.install?.(app)
  })
}

export default {
  install
}

export * from './components'
export * from './functions'
