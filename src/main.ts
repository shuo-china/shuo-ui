import { createApp } from 'vue'
import App from './App.vue'
import shuoUI from '@shuo-ui'
import router from './router'
import highlight from './directives/highlight'

const app = createApp(App)
app.use(shuoUI)
app.use(highlight).use(router).mount('#app')
