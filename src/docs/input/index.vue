<template>
  <div>
    <div class="doc__title">Input 输入框</div>
    <div class="doc__desc">通过鼠标或键盘输入字符</div>
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
    <demo :code="Demo5_Code" title="密码框">
      <demo5 />
    </demo>
    <demo :code="Demo6_Code" title="前缀和后缀">
      <demo6 />
    </demo>
    <demo :code="Demo7_Code" title="前置/后置标签">
      <demo7 />
    </demo>
    <demo :code="Demo8_Code" title="文本域">
      <demo8 />
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
  Demo6_Code,
  Demo7,
  Demo7_Code,
  Demo8,
  Demo8_Code
} from './demo'
</script>
