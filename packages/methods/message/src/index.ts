import { createApp, watch } from 'vue'
import { getPrefixCls, isString } from '@shuo-ui/utils'
import MessageComponent from './message.vue'
import type { App, ComponentPublicInstance } from 'vue'
import type { Options, Message } from './types'

const prefixCls = getPrefixCls('message')

const types = ['info', 'success', 'warning', 'error', 'loading'] as const

const message = (options => {
  const messageApp = createApp(MessageComponent, handleOptions(options))
  const vm = showMessage(messageApp)

  function hideMessage() {
    vm.setVisible(false)
  }

  return hideMessage
}) as Message

types.forEach(type => {
  message[type] = options => message({ ...handleOptions(options), type })
})

function handleOptions(options: Options) {
  if (isString(options)) {
    return {
      content: options
    }
  }

  return options
}

function createRootDom() {
  const div = document.createElement('div')
  div.setAttribute('id', prefixCls)
  return document.body.appendChild(div)
}

function showMessage(app: App) {
  let rootDom = document.getElementById(prefixCls)
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
        }, 300)
      }
    }
  )

  return vm
}

export default message
