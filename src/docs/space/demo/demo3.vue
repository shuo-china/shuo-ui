<template>
  <div>
    <prop-option v-model="size" />
    <s-space :size="size">
      <s-button>Button</s-button>
      <s-button>Button</s-button>
      <s-button>Button</s-button>
    </s-space>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const size = ref('default')
</script>
