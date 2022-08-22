<template>
  <div class="wrapper">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="logo" />
    </div>
    <div class="title">一个极简的Vue3组件库</div>
    <div class="desc">简约，但不简单</div>
    <div class="btns">
      <s-button type="primary" class="btns__start" @click="router.push(`/components`)">立即开始</s-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
@import '@shuo-ui/styles/custom.module';

.wrapper {
  box-sizing: border-box;
  min-height: calc(100vh - $navbar-height);
  padding: 0 $padding-base;
  background-color: $white;

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
    color: $text-color;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
  }

  .desc {
    margin-top: 16px;
    color: $text-secondary-color;
    font-size: $font-size-base;
    text-align: center;
  }

  .btns {
    margin-top: 32px;
    text-align: center;

    &__start {
      width: 170px;
      height: 50px;
      font-size: $font-size-large;
      border-radius: 30px;
    }
  }
}
</style>
