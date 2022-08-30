<template>
  <s-input v-model="textarea" type="textarea" placeholder="Please input" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const textarea = ref('')
</script>
