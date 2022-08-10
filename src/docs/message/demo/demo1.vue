<template>
  <div style="display: flex; gap: 12px">
    <s-button @click="$sMessage.info('This is a message')">信息</s-button>
    <s-button type="success" @click="$sMessage.success('This is a message')">成功</s-button>
    <s-button type="warning" @click="$sMessage.warning('This is a message')">警告</s-button>
    <s-button type="error" @click="$sMessage.error('This is a message')">错误</s-button>
    <s-button @click="$sMessage.loading('Loading...')">加载中</s-button>
  </div>
</template>
