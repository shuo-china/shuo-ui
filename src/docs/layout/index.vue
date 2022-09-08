<template>
  <div>
    <div class="doc__title">Layout 布局</div>
    <div class="doc__desc">通过基础的 24 分栏，迅速简便地创建布局</div>
    <demo :code="Demo1_Code" title="基础用法">
      <demo1 />
    </demo>
    <demo :code="Demo2_Code" title="分栏间隔">
      <demo2 />
    </demo>
    <demo :code="Demo3_Code" title="混合布局">
      <demo3 />
    </demo>
    <demo :code="Demo4_Code" title="分栏偏移">
      <demo4 />
    </demo>
    <demo :code="Demo5_Code" title="对齐方式">
      <demo5 />
    </demo>
    <demo :code="Demo6_Code" title="响应式布局">
      <demo6 />
    </demo>
  </div>
</template>

<script setup lang="ts">
import {
  Demo1,
  Demo1_Code,
  Demo2,
  Demo2_Code,
  Demo3,
  Demo3_Code,
  Demo4,
  Demo4_Code,
  Demo5,
  Demo5_Code,
  Demo6,
  Demo6_Code
} from './demo'
</script>
