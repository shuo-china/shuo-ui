<template>
  <div class="container">
    <s-button type="primary" loading>primary</s-button>
    <s-button type="success">success</s-button>
    <s-button type="warning">warning</s-button>
    <s-button type="error">error</s-button>
    <s-button type="normal">normal</s-button>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue'
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}
</style>
