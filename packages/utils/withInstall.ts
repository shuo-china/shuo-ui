import { App, Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin

export function withInstall<T extends { name: string }>(component: T) {
  ;(component as SFCWithInstall<T>).install = (app: App) => {
    app.component(component.name, component)
  }

  return component as SFCWithInstall<T>
}
