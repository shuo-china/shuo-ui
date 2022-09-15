<template>
  <div>
    <prop-option v-model="size" />
    <s-radio-group v-model="hobby" :size="size">
      <s-radio label="sing">唱</s-radio>
      <s-radio label="jump">跳</s-radio>
      <s-radio label="rap">rap</s-radio>
    </s-radio-group>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'

const size = ref('default')
const hobby = ref('sing')
</script>
