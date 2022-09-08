<template>
  <div>
    <div class="doc__title">Divider 分割线</div>
    <div class="doc__desc">区隔内容的分割线</div>
    <demo :code="Demo1_Code" title="水平分割线">
      <demo1 />
    </demo>
    <demo :code="Demo2_Code" title="设置文案">
      <demo2 />
    </demo>
    <demo :code="Demo3_Code" title="垂直分割线">
      <demo3 />
    </demo>
  </div>
</template>

<script setup lang="ts">
import { Demo1, Demo1_Code, Demo2, Demo2_Code, Demo3, Demo3_Code } from './demo'
</script>
