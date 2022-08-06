<template>
  <div class="wrapper">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="logo" />
    </div>
    <div class="title">极简设计，创造高效愉悦的工作体验</div>
    <div class="desc">完美支持vite+vue3版本</div>
    <div class="btns">
      <s-button type="primary" round class="btns__start" @click="router.push(`/components`)">立即开始</s-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
.wrapper {
  box-sizing: border-box;
  min-height: calc(100vh - $navbar-height);
  padding: 0 24px;
  background-color: $bg-color;

  .logo {
    width: 180px;
    height: 180px;
    margin: 0 auto;
    padding-top: 60px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    margin-top: 32px;
    color: #4a5264;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
  }

  .desc {
    margin-top: 16px;
    color: #636e86;
    font-size: 14px;
    text-align: center;
  }

  .btns {
    margin-top: 32px;
    text-align: center;

    &__start {
      width: 170px;
      height: 50px;
      font-size: 16px;
      background-color: #0b95dc;
    }
  }
}
</style>
