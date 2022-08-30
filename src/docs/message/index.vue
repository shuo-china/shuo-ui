<template>
  <div class="demo-wrapper">
    <div class="doc__title">Message</div>
    <div class="doc__desc">全局展示操作反馈信息。</div>
    <demo :code="Demo1_Code" title="基础用法">
      <demo1 />
    </demo>
  </div>
</template>

<script setup lang="ts">
import { Demo1, Demo1_Code } from './demo'
</script>
