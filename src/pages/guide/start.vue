<template>
  <div>
    <div class="doc__title--lm">快速开始</div>
    <!-- 完整引入 -->
    <div class="doc__sec_title">完整引入</div>
    <div class="doc__desc">如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便</div>
    <div class="doc__code">
      <pre v-highlight><code v-text="code1"></code></pre>
    </div>
    <!-- Volar支持 -->
    <div class="doc__sec_title space-top">Vloar支持</div>
    <div class="doc__desc">如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型</div>
    <div class="doc__code">
      <pre v-highlight><code v-text="code2"></code></pre>
    </div>
    <!-- 按需导入 -->
    <div class="doc__sec_title space-top">按需导入</div>
    <div class="doc__desc">默认支持基于 ES modules 的 tree shaking，对于 js 部分，直接引入就会有按需加载的效果</div>
    <div class="doc__code">
      <pre v-highlight><code v-text="code3"></code></pre>
    </div>
  </div>
</template>

<script setup lang="ts">
const code1 = `// main.ts
import { createApp } from 'vue'
import shuoUI from 'shuo-ui'
import 'shuo-ui/dist/style.css'
import App from './App.vue'

const app = createApp(App)

app.use(shuoUI)
app.mount('#app')
`

const code2 = `// tsconfig.json
{
  "compilerOptions": {
    "types": ["shuo-ui/dist/types/global"]
  }
}`

const code3 = `<template>
  <s-button>I am Button</s-button>
</template>
<script>
  import { SButton } from 'shuo-ui'
  export default {
    components: { SButton }
  }
<\/script>`
</script>
