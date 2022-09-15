import { createApp } from 'vue'
import App from './App.vue'
import shuoUI from '@shuo-ui'
import router from './router'
import highlight from './directives/highlight'
import Demo from '@/components/demo.vue'
import PropOption from '@/components/prop-option.vue'
import '@/assets/styles/main.scss'

const app = createApp(App)
app.use(shuoUI)
app.use(highlight)
app.component('Demo', Demo)
app.component('PropOption', PropOption)
app.use(router).mount('#app')
