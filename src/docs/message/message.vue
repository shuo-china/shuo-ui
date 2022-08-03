<template>
  <div class="container">
    <s-button type="info" @click="$message.info('这是一个demo信息')">info</s-button>
    <s-button type="success" @click="$message.success('这是一个demo信息')">success</s-button>
    <s-button type="warning" @click="$message.warning('这是一个demo信息')">warning</s-button>
    <s-button type="error" @click="$message.error('这是一个demo信息')">error</s-button>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 24px;
}
</style>
