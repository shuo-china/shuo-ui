<template>
  <div class="wrapper">
    <navbar />
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/layout/navbar.vue'
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  background-color: #fafafa;

  .body {
    min-height: calc(100vh - 60px);
    padding-top: 60px;
  }
}
</style>
