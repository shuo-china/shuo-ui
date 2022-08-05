<template>
  <div class="preview">
    <slot></slot>
    <div v-show="isShowCode" v-highlight>
      <pre><code v-text="code"></code></pre>
    </div>
    <div class="showbar" @click="isShowCode = !isShowCode">
      {{ isShowCode ? '显示代码' : '收起代码' }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  code: string
}>()

const isShowCode = ref(false)
</script>

<style lang="scss" scoped>
.preview {
  .showbar {
    color: #999;
    background-color: #fff;
  }
}
</style>
