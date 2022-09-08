<template>
  <div>
    <div class="doc__title">Form 表单</div>
    <div class="doc__desc">具有数据收集、校验和提交功能的表单</div>
    <demo :code="Demo1_Code" title="基础用法">
      <demo1 />
    </demo>
    <demo :code="Demo2_Code" title="行内表单">
      <demo2 />
    </demo>
    <demo :code="Demo3_Code" title="对齐方式">
      <demo3 />
    </demo>
    <demo :code="Demo4_Code" title="表单校验">
      <demo4 />
    </demo>
  </div>
</template>

<script setup lang="ts">
import { Demo1, Demo1_Code, Demo2, Demo2_Code, Demo3, Demo3_Code, Demo4, Demo4_Code } from './demo'
</script>
