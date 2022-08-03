import { createApp } from 'vue'
import App from './App.vue'
import shuoUI from '@shuo-ui'
import router from './router'

const app = createApp(App)
app.use(shuoUI)
app.use(router).mount('#app')
