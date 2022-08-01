import type { App, ComponentPublicInstance } from 'vue'
import { createApp, watch } from 'vue'
import MessageComponent from './message.vue'
import '../styles/index.scss'

type Options =
  | string
  | {
      type?: typeof types[number]
      duration?: number
      content: string
    }

const rootDomId = 's-message'

const types = ['primary', 'info', 'success', 'warning', 'error'] as const

types.forEach(type => {
  message[type] = options => message({ ...handleOptions(options), type })
})

function message(options: Options) {
  const messageApp = createApp(MessageComponent, handleOptions(options))
  const vm = showMessage(messageApp)

  function hideMessage() {
    vm.setVisible(false)
  }

  return hideMessage
}

function handleOptions(options: Options) {
  if (typeof options === 'string') {
    return {
      content: options
    }
  }

  return options
}

function createRootDom() {
  const div = document.createElement('div')
  div.setAttribute('id', rootDomId)
  return document.body.appendChild(div)
}

function showMessage(app: App) {
  let rootDom = document.getElementById(rootDomId)
  if (!rootDom) {
    rootDom = createRootDom()
  }

  const fragment = document.createDocumentFragment()
  const vm: ComponentPublicInstance<any> = app.mount(fragment)

  rootDom.appendChild(fragment)
  vm.setVisible(true)

  watch(
    () => vm.visible,
    visible => {
      if (!visible) {
        // 等待动画结束后卸载
        setTimeout(() => {
          app.unmount()
        }, 250)
      }
    }
  )

  return vm
}

export default message
