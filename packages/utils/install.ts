import { App, Plugin, AppContext } from 'vue'

type SFCWithInstall<T> = T & Plugin

type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export function withInstall<T extends { name: string }>(component: T) {
  ;(component as SFCWithInstall<T>).install = (app: App) => {
    app.component(component.name, component)
  }

  return component as SFCWithInstall<T>
}

export const withInstallFunction = <T>(fn: T, name: string) => {
  ;(fn as SFCWithInstall<T>).install = (app: App) => {
    app.config.globalProperties[name] = fn
  }

  return fn as SFCInstallWithContext<T>
}
