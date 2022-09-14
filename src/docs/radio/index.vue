<template>
  <div class="demo-wrapper">
    <div class="doc__title">Radio 单选框</div>
    <div class="doc__desc">主要用于一组可选项单项选择，或者单独用于切换到选中状态</div>
    <demo :code="Demo1_Code" title="基础用法">
      <demo1 />
    </demo>
    <demo :code="Demo2_Code" title="禁用状态">
      <demo2 />
    </demo>
    <demo :code="Demo3_Code" title="按钮样式">
      <demo3 />
    </demo>
    <demo :code="Demo4_Code" title="尺寸">
      <demo4 />
    </demo>
  </div>
</template>

<script setup lang="ts">
import { Demo1, Demo1_Code, Demo2, Demo2_Code, Demo3, Demo3_Code, Demo4, Demo4_Code } from './demo'
</script>
