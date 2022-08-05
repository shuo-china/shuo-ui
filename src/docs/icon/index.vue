<template>
  <div class="container">
    <div v-for="(item, index) in iconList" :key="index" class="icon-item">
      <s-icon :name="item" :size="22"></s-icon>
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { iconList } from '@/constants'
</script>

<style lang="scss" scoped>
$column: 8;
$border-color: #dcdfe6;

.container {
  display: grid;
  grid-template-columns: repeat($column, 1fr);
  width: 100%;

  .icon-item {
    display: flex;
    flex-direction: column;
    gap: 8px 0;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    color: #606266;
    font-size: 13px;
    border-top: 1px solid $border-color;
    border-left: 1px solid $border-color;

    &:nth-child(#{$column}n),
    &:last-child {
      border-right: 1px solid $border-color;
    }

    &:nth-last-child(-n + #{$column}) {
      border-bottom: 1px solid $border-color;
    }
  }
}
</style>
