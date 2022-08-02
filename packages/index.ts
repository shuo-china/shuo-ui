import { App } from 'vue'
import * as components from './components'
import './styles/normalize.css'

const install = function (app: App) {
  Object.entries(components).forEach(([, component]) => {
    app.component(component.name, component)
  })
}

export default {
  install
}

export * from './directives'
export * from './components'
