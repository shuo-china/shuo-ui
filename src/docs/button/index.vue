<template>
  <div>
    <div class="doc__title">Button 按钮</div>
    <div class="doc__desc">常用的操作按钮</div>
    <demo :code="Demo1_Code" title="基础用法">
      <demo1 />
    </demo>
    <demo :code="Demo2_Code" title="尺寸">
      <demo2 />
    </demo>
    <demo :code="Demo3_Code" title="加载中">
      <demo3 />
    </demo>
    <demo :code="Demo4_Code" title="禁用状态">
      <demo4 />
    </demo>
  </div>
</template>

<script setup lang="ts">
import { Demo1, Demo1_Code, Demo2, Demo2_Code, Demo3, Demo3_Code, Demo4, Demo4_Code } from './demo'
</script>
