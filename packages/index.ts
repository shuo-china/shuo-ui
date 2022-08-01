import { App } from 'vue'
import * as components from './components'
import './styles/normalize.css'
import './styles/var.scss'

const install = function (app: App) {
  Object.entries(components).forEach(([name, component]) => {
    app.component(name, component)
  })
}

export default {
  install
}

export * from './directives'
export * from './components'
