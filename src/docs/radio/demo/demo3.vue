<template>
  <s-radio-group v-model="hobby">
    <s-radio-button label="sing">唱</s-radio-button>
    <s-radio-button label="jump">跳</s-radio-button>
    <s-radio-button label="rap">rap</s-radio-button>
  </s-radio-group>
</template>

<script lang='ts' setup>
import { ref } from 'vue'

const hobby = ref('sing')
</script>
