<template>
  <div style="display: flex; gap: 12px">
    <s-button @click="open('info')">信息</s-button>
    <s-button type="success" @click="open('success')">成功</s-button>
    <s-button type="warning" @click="open('warning')">警告</s-button>
    <s-button type="error" @click="open('error')">错误</s-button>
    <s-button @click="open('loading')">加载中</s-button>
  </div>
</template>

<script setup lang="ts">
import { SMessage } from '@shuo-ui/functions'

const open = (type: string) => {
  SMessage[type]('This is a message')
}
</script>
