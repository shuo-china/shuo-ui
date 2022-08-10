<template>
  <div class="demo-wrapper">
    <div class="doc__title">Icon</div>
    <div class="doc__desc">提供了一套常用的图标集合。</div>
    <demo :code="Demo1_Code" title="基础">
      <demo1 />
    </demo>
    <div class="icon-list">
      <div v-for="(item, index) in iconList" :key="index" class="icon-item">
        <div class="icon">
          <s-icon :name="item" :size="32"></s-icon>
        </div>
        <div class="icon-info">{{ item }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { iconList } from '@/constants'
import { Demo1, Demo1_Code } from './demo'
</script>

<style lang="scss" scoped>
.icon-list {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, 240px);

  .icon-item {
    display: flex;
    align-items: center;
    height: 64px;
    padding: 0 get-css-var('padding', 'small');
    background-color: #fff;
    border-radius: get-css-var('border-radius');

    .icon {
      color: get-css-var('text-color');
    }

    .icon-info {
      margin-left: 8px;
      color: get-css-var('text-color', 'secondary');
      font-size: get-css-var('font-size', 'small');
    }
  }
}
</style>
