import type { App, Plugin } from 'vue'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

const highlight: Plugin = {
  install(app: App) {
    app.directive('highlight', {
      mounted(el) {
        const blocks = el.querySelectorAll('pre code')
        blocks.forEach(block => {
          hljs.highlightElement(block)
        })
      }
    })
  }
}

export default highlight
