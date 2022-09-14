<template>
  <s-space direction="vertical" size="large">
    <s-space>
      <s-button @click="size='small'">Small</s-button>
      <s-button @click="size='default'">Default</s-button>
      <s-button @click="size='large'">Large</s-button>
    </s-space>
    <s-radio-group v-model="hobby" :size="size">
      <s-radio label="sing">唱</s-radio>
      <s-radio label="jump">跳</s-radio>
      <s-radio label="rap">rap</s-radio>
    </s-radio-group>
  </s-space>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const size = ref('default')
const hobby = ref('sing')

const handleClick =() => {}
</script>
