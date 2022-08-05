import { createApp } from 'vue'
import App from './App.vue'
import shuoUI from '@shuo-ui'
import router from './router'
import highlight from './directives/highlight'
import Preview from '@/components/preview.vue'
import '@/assets/styles/main.scss'

const app = createApp(App)
app.use(shuoUI)
app.use(highlight)
app.component('Preview', Preview)
app.use(router).mount('#app')
