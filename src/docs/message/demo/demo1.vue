<template>
  <s-space wrap>
    <s-button @click="open('info')">信息</s-button>
    <s-button type="success" @click="open('success')">成功</s-button>
    <s-button type="warning" @click="open('warning')">警告</s-button>
    <s-button type="error" @click="open('error')">错误</s-button>
    <s-button type="primary" @click="open('loading')">加载中</s-button>
  </s-space>
</template>

<script setup lang="ts">
import { SMessage } from '@shuo-ui'

const open = (type: string) => {
  SMessage[type]('This is a message')
}
</script>
