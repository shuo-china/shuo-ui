<template>
  <div
    class="sidebar-switch"
    :class="{ 'sidebar-switch--open': isShowSidebar }"
    @click="isShowSidebar = !isShowSidebar"
  >
    <s-icon name="menu" :size="18" />
  </div>
  <div class="sidebar" :class="{ 'sidebar--open': isShowSidebar }">
    <div v-for="(list, i) in group" :key="`group${i}`" class="sidebar__group">
      <div class="title">{{ list.title }}</div>
      <div
        v-for="(item, j) in list.items"
        :key="`items${j}`"
        class="sidebar__group__item"
        :class="{ active: route.path === item.path }"
        @click="toPath(item)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="app-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script setup lang="ts">
import type { MenuGroup, Item } from '@/constants'
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { menuGroups } from '@/constants'

const isShowSidebar = ref(false)

const router = useRouter()
const toPath = (item: Item) => {
  router.push(item.path)
}

const group = ref<MenuGroup>([])
const route = useRoute()
watch(
  route,
  newRoute => {
    const menuGroupsKeys = Object.keys(menuGroups)
    const matched = newRoute.matched.find(r => menuGroupsKeys.includes(r.name as string))
    if (matched) {
      group.value = menuGroups[matched.name as string]
    } else {
      group.value = []
    }

    isShowSidebar.value = false
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
@import '@shuo-ui/styles/custom.module';

.sidebar {
  position: fixed;
  top: $navbar-height;
  bottom: 0;
  left: 0;
  z-index: 999;
  box-sizing: border-box;
  width: $sidebar-width;
  padding: $padding-base;
  overflow-y: auto;
  font-size: $font-size-base;
  background-color: #fff;
  border-right: 1px solid #ebebeb;
  user-select: none;

  &::-webkit-scrollbar {
    width: 0;
  }

  &:hover {
    &::-webkit-scrollbar {
      width: $scroll-width;
    }
  }

  &__group {
    padding-top: $padding-base;

    &:first-of-type {
      padding-top: 0;
    }

    .title {
      margin-bottom: 12px;
    }

    &__item {
      padding: 10px $padding-small;
      color: $text-secondary-color;
      border-radius: $border-radius-base;
      cursor: pointer;

      &:hover {
        color: $text-color;
        background-color: $bg-color;
      }

      &.active {
        color: $white;
        background-color: $primary-color;
      }
    }
  }
}

.app-main {
  box-sizing: border-box;
  min-height: calc(100vh - $navbar-height);
  margin-left: $sidebar-width;
  padding: 48px;
  overflow-x: auto;
  background-color: #fff;
}

.app-fade-enter-active,
.app-fade-leave-active {
  transition: all 0.2s ease-out;
}

.app-fade-enter-from {
  transform: translateX(-24px);
  opacity: 0;
}

.app-fade-leave-to {
  transform: translateX(24px);
  opacity: 0;
}

.sidebar-switch {
  display: none;
}

@media (max-width: 768px) {
  .sidebar-switch {
    position: fixed;
    top: $navbar-height;
    left: 0;
    z-index: 999;
    display: inline-flex;
    justify-content: center;
    padding: 6px 10px;
    color: #fff;
    background-color: $primary-color;
    transition: all 0.4s;
    user-select: none;

    &--open {
      transform: translateX($sidebar-width);
    }
  }

  .sidebar {
    transform: translateX(-100%);
    transition: all 0.4s;

    &--open {
      transform: translateX(0%);
    }
  }

  .app-main {
    margin-left: 0;
    padding: 48px $padding-base;
  }
}
</style>
