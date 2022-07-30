import { createApp } from 'vue'
import App from './App.vue'
import shuo from 'shuo-ui'
import router from './router'

const app = createApp(App)
app.use(shuo)
app.use(router).mount('#app')
