<template>
  <div>
    <div class="doc__title">Icon 图标</div>
    <div class="doc__desc">提供了一套常用的图标集合</div>
    <demo :code="Demo1_Code" title="基础用法">
      <demo1 />
    </demo>
    <s-row :gutter="16" justify="space-between">
      <s-col v-for="(item, index) in iconList" :key="index" :xs="12" :sm="12" :md="6" :lg="4">
        <div class="icon-item">
          <div class="icon">
            <s-icon :name="item" :size="32"></s-icon>
          </div>
          <div class="icon-info">{{ item }}</div>
        </div>
      </s-col>
    </s-row>
  </div>
</template>

<script setup lang="ts">
import { iconList } from '@/constants'
import { Demo1, Demo1_Code } from './demo'
</script>

<style lang="scss" scoped>
@import '@shuo-ui/styles/custom.module';

.icon-item {
  display: flex;
  align-items: center;
  height: 64px;
  margin-bottom: 16px;
  padding: 0 $padding-small;
  background-color: #fff;
  border: 1px solid $border-color;
  border-radius: $border-radius-base;

  .icon {
    color: $text-color;
  }

  .icon-info {
    margin-left: 8px;
    color: $text-secondary-color;
    font-size: $font-size-small;
  }
}
</style>
