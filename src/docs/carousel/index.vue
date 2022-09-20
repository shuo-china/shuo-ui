<template>
  <div>
    <div class="doc__title">Carousel 走马灯</div>
    <div class="doc__desc">旋转木马，一组轮播的区域</div>
    <demo :code="Demo1_Code" title="基础用法">
      <demo1 />
    </demo>
    <demo :code="Demo2_Code" title="垂直布局">
      <demo2 />
    </demo>
  </div>
</template>

<script setup lang="ts">
import { Demo1, Demo1_Code, Demo2, Demo2_Code } from './demo'
</script>
