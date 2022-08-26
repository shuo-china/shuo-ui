<template>
  <s-space>
    <!-- 我是备注 -->
    <span>江河湖海</span>
    我是text
    <div v-for="(item, index) in data" :key="index">
      {{ item }}
    </div>
  </s-space>
  123
</template>

<script setup lang="ts">
import { SSpace, SButton } from '@shuo-ui'

const data = [1, 2, 3]
</script>
