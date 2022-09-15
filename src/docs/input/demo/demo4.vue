<template>
  <div>
    <prop-option v-model="size" />
    <s-input v-model="input" placeholder="Please input" :size="size"></s-input>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const input = ref('')
const size = ref('default')
</script>
