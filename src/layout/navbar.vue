<template>
  <div class="navbar">
    <div class="logo" @click="router.push(`/`)">
      <span>Shuo UI</span>
    </div>
    <div class="menu">
      <div class="menu-item" @click="router.push(`/guide`)">指南</div>
      <div class="menu-item" @click="router.push(`/components`)">组件</div>
      <a target="_blank" href="https://github.com/shuo-china/shuo-ui"><s-icon name="github-fill" :size="24" /></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  height: $navbar-height;
  padding: 0 $padding-lg;
  background-color: #fff;
  border-bottom: 1px solid $border-color;
  user-select: none;

  .logo {
    height: $navbar-height;
    color: $text-color;
    font-size: 22px;
    line-height: $navbar-height;
    cursor: pointer;
  }

  .menu {
    display: flex;

    a,
    .menu-item {
      height: $navbar-height;
      padding: 0 $padding-sm;
      color: $text-color;
      font-size: 14px;
      line-height: $navbar-height;
      text-decoration: none;
      cursor: pointer;
      opacity: 0.7;
      transition: all 0.5s;

      &:hover {
        opacity: 1;
      }
    }

    .menu-item:nth-last-child(2) {
      margin-right: 48px;
    }
  }
}
</style>
