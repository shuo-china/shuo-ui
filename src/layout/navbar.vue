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
  padding: 0 get-css-var('padding', 'large');
  background-color: #fff;
  border-bottom: 1px solid get-css-var('border-color');
  user-select: none;

  &__left {
    display: flex;
    align-items: center;
    color: get-css-var('text-color');
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
        padding: 0 get-css-var('padding', 'small');
        color: get-css-var('text-color', 'secondary');
        font-size: get-css-var('font-size');
        cursor: pointer;
        transition: all 0.5s;

        &:hover {
          color: get-css-var('text-color');
        }
      }
    }

    &__links {
      display: flex;

      a {
        display: flex;
        align-items: center;
        padding: 0 get-css-var('padding', 'small');
        color: get-css-var('text-color', 'secondary');
        transition: all 0.5s;

        &:hover {
          color: get-css-var('text-color');
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 get-css-var('padding');

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
