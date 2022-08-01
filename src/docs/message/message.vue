<template>
  <div class="container">
    <s-button type="primary" @click="Message.primary('这是一个demo信息')">primary</s-button>
    <s-button type="success" @click="Message.success('这是一个demo信息')">success</s-button>
    <s-button type="warning" @click="Message.warning('这是一个demo信息')">warning</s-button>
    <s-button type="error" @click="Message.error('这是一个demo信息')">error</s-button>
    <s-button type="info" @click="Message.info('这是一个demo信息')">info</s-button>
  </div>
</template>

<script setup lang="ts">
import { Message } from 'shuo-ui'
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 24px;
}
</style>
