<template>
  <div class="sidebar">
    <div v-for="(list, i) in group" :key="`group${i}`" class="group">
      <div class="title">{{ list.title }}</div>
      <div
        v-for="(item, j) in list.items"
        :key="`items${j}`"
        class="item"
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

const router = useRouter()
const toPath = (item: Item) => {
  router.push(item.path)
}

const group = ref<MenuGroup>([])
const route = useRoute()
watch(
  route,
  newRoute => {
    const componentName = newRoute.matched[0]?.name as string | undefined
    if (componentName && Object.keys(menuGroups).includes(componentName)) {
      group.value = menuGroups[componentName]
    }
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: $navbar-height;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  width: $sidebar-width;
  padding: $padding-base;
  overflow-y: auto;
  font-size: 14px;
  background-color: #fff;
  border-right: 1px solid $border-color;
  user-select: none;

  &::-webkit-scrollbar {
    width: 0;
  }

  &:hover {
    &::-webkit-scrollbar {
      width: $scroll-width;
    }
  }

  .group {
    padding-top: $padding-base;

    &:first-of-type {
      padding-top: 0;
    }

    .title {
      margin-bottom: 12px;
    }

    .item {
      padding: 10px $padding-sm;
      color: $text-color;
      border-radius: $border-base;
      cursor: pointer;
      opacity: 0.7;

      &:hover {
        color: $text-color;
        background-color: #f5f5f5;
        opacity: 1;
      }

      &.active {
        color: #fff;
        background-color: #3b79d0;
        opacity: 1;
      }
    }
  }
}

.app-main {
  box-sizing: border-box;
  min-height: calc(100vh - $navbar-height);
  margin-left: $sidebar-width;
  padding: 48px;
  background-color: $bg-color;
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
</style>
