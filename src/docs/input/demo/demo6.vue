<template>
  <s-input v-model="input" placeholder="Please input">
    <template #prefix>
      <s-icon name="user"/>
    </template>
    <template #suffix>
      <s-icon name="search"/>
    </template>
  </s-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
