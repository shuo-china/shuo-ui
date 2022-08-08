<template>
  <div class="container">
    <s-button type="info" @click="$sMessage.info('这是一个demo信息')">info</s-button>
    <s-button type="success" @click="$sMessage.success('这是一个demo信息')">success</s-button>
    <s-button type="warning" @click="$sMessage.warning('这是一个demo信息')">warning</s-button>
    <s-button type="error" @click="$sMessage.error('这是一个demo信息')">error</s-button>
    <s-button type="success" @click="$sMessage.loading('Loading...')">loading</s-button>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 24px;
}
</style>
