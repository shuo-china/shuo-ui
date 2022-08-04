import { createApp } from 'vue'
import App from './App.vue'
import shuoUI from '@shuo-ui'
import router from './router'
import highlight from './directives/highlight'
import '@/assets/styles/main.scss'

const app = createApp(App)
app.use(shuoUI)
app.use(highlight).use(router).mount('#app')
