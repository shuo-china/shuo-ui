import { createApp } from 'vue'
import App from './App.vue'
import shuo from 'shuo-ui'

const app = createApp(App)
app.use(shuo)
app.mount('#app')
