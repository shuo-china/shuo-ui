<template>
  <div class="demo-wrapper">
    <div class="doc__title">Input</div>
    <div class="doc__desc">通过鼠标或键盘输入字符。</div>
    <demo :code="Demo1_Code" title="基础用法">
      <demo1 />
    </demo>
    <demo :code="Demo2_Code" title="禁用状态">
      <demo2 />
    </demo>
    <demo :code="Demo3_Code" title="一键清空">
      <demo3 />
    </demo>
    <demo :code="Demo4_Code" title="尺寸">
      <demo4 />
    </demo>
    <demo :code="Demo5_Code" title="文本域">
      <demo5 />
    </demo>
  </div>
</template>

<script setup lang="ts">
import { Demo1, Demo1_Code, Demo2, Demo2_Code, Demo3, Demo3_Code, Demo4, Demo4_Code, Demo5, Demo5_Code } from './demo'
</script>
