<template>
  <div class="sidebar">
    <div v-for="(list, i) in group" :key="`group${i}`" class="group">
      <div class="title">{{ list.title }}</div>
      <div v-for="(item, j) in list.items" :key="`items${j}`" class="item" @click="toPath(item)">
        {{ item.name }}
      </div>
    </div>
  </div>
  <div class="app-main">
    <router-view></router-view>
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
      console.log('reset menu data')

      group.value = menuGroups[componentName]
    }
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
$sidebar-width: 230px;

.sidebar {
  position: fixed;
  top: 60px;
  bottom: 0;
  left: 0;
  width: $sidebar-width;
  overflow-y: auto;
  background-color: #fff;
  border-right: 1px solid #ebebeb;
}

.app-main {
  height: 100%;
  margin-left: $sidebar-width;
  padding: 36px;
}
</style>
