<template>
  <div class="main">
    <div class="banner">
      <h1>Shuo UI</h1>
      <p>一个轻量的 Vue3 组件库</p>
      <s-button type="primary" size="large" @click="router.push(`/components`)">开始使用</s-button>
    </div>

    <div class="editor">
      <div class="editor-wrapper">
        <div class="editor-body"><span id="typed"></span></div>
      </div>
    </div>

    <div class="footer">
      <p>Released under the <a href="https://opensource.org/licenses/MIT" target="_blank">MIT License.</a></p>
      <p>Made with ❤️ <a href="https://github.com/shuo-china" target="_blank">by Shuo</a></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Typed from 'typed.js'

const router = useRouter()

let typed

onMounted(() => {
  const options = {
    strings: ['Shuo UI is a component library for Vue3.\nWritten in TypeScript.\nTry it out!'],
    typeSpeed: 30
  }

  typed = new Typed('#typed', options)
})

onBeforeUnmount(() => {
  typed?.destroy()
})
</script>

<style lang="scss" scoped>
@import '@shuo-ui/styles/custom.module';

.main {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  min-height: calc(100vh - $navbar-height);
  padding: 60px $padding-large 0;
  background-color: $white;

  .banner {
    text-align: center;

    h1 {
      margin: 0;
      color: $text-color;
      font-size: 36px;
    }

    p {
      margin: 24px 0;
      color: $text-secondary-color;
      font-size: 18px;
    }
  }

  .editor {
    flex: 1;

    .editor-wrapper {
      max-width: 550px;
      margin: 38px auto 0;
      overflow: hidden;
      border-radius: 10px;

      .editor-body {
        padding: 24px;
        color: #f0f0f0;
        font-size: 22px;
        font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
        line-height: 1.6;
        white-space: pre-wrap;
        text-align: left;
        background-color: rgb(0 0 0 / 85%);
        box-shadow: $shadow-base;
      }
    }
  }

  .footer {
    padding: 24px 0;
    color: $text-secondary-color;
    font-size: 12px;
    text-align: center;

    a {
      color: $primary-color;
    }
  }
}
</style>
