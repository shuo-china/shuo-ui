<template>
  <div class="navbar">
    <div class="navbar__left" @click="router.push(`/`)">
      <img class="logo" src="@/assets/images/logo.png" alt="logo" />
      <span class="name">Shuo UI</span>
    </div>
    <div class="navbar__right">
      <div class="navbar__right__menus">
        <div class="menu-item" @click="router.push(`/guide`)">指南</div>
        <div class="menu-item" @click="router.push(`/components`)">组件</div>
      </div>
      <div class="navbar__right__links">
        <a target="_blank" href="https://github.com/shuo-china/shuo-ui"><s-icon name="github-fill" :size="22" /></a>
      </div>
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

  &__left {
    display: flex;
    align-items: center;
    color: $text-color;
    font-size: 22px;
    cursor: pointer;

    .logo {
      width: 25px;
      height: 25px;
    }

    .name {
      margin-left: 12px;
    }
  }

  &__right {
    display: flex;

    &__menus {
      display: flex;
      margin-right: 48px;

      .menu-item {
        display: flex;
        align-items: center;
        padding: 0 $padding-sm;
        color: $text-color;
        font-size: 14px;
        cursor: pointer;
        opacity: 0.7;
        transition: all 0.5s;

        &:hover {
          opacity: 1;
        }
      }
    }

    &__links {
      display: flex;
      margin-right: -12px;

      a {
        display: flex;
        align-items: center;
        padding: 0 $padding-sm;
        color: $text-color;
        text-decoration: none;
        opacity: 0.7;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 24px;

    &__left {
      .name {
        display: none;
      }
    }

    &__right {
      &__menus {
        margin-right: 0;
      }
    }
  }
}
</style>
