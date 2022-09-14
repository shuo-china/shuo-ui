<template>
  <s-radio-group v-model="hobby">
    <s-space>
      <s-radio label="sing">唱</s-radio>
      <s-radio label="jump">跳</s-radio>
      <s-radio label="rap">rap</s-radio>
    </s-space>
  </s-radio-group>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

const hobby = ref('sing')
</script>
