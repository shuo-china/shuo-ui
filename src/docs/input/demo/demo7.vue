<template>
  <s-input v-model="input" placeholder="Please input">
    <template #prepend>
      http://
    </template>
    <template #append>
      .com
    </template>
  </s-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>
