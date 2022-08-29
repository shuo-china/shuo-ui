<template>
  <s-space>
    <s-input v-model="input1" placeholder="Please input" size="small"></s-input>
    <s-input v-model="input2" placeholder="Please input"></s-input>
    <s-input v-model="input3" placeholder="Please input" size="large"></s-input>
  </s-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
</script>
