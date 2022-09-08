<template>
  <div class="demo">
    <div class="demo-header">
      <div class="title">{{ title }}</div>
      <div class="toolbar">
        <div class="toolbar-item" title="查看源码" @click="isShowCode = !isShowCode">
          <s-icon name="code" :size="18" />
        </div>
      </div>
    </div>
    <div class="demo-content">
      <p v-if="desc" class="desc">{{ desc }}</p>
      <div class="example">
        <slot></slot>
      </div>
    </div>
    <div v-show="isShowCode" class="demo-footer">
      <div v-highlight>
        <pre><code v-text="code"></code></pre>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  code: string
  title: string
  desc?: string
}>()

const isShowCode = ref(false)
</script>

<style lang="scss" scoped>
@import '@shuo-ui/styles/custom.module';

.demo {
  margin-bottom: 24px;
  border: 1px solid $border-color;
  border-radius: $border-radius-base;

  &-header {
    display: flex;
    align-items: center;
    padding: 20px 24px;

    .title {
      flex: 1;
      color: $text-color;
      font-weight: bold;
      font-size: 18px;
    }

    .toolbar {
      display: flex;
      align-items: center;
      color: $text-secondary-color;

      &-item {
        margin-left: 6px;
        cursor: pointer;
      }
    }
  }

  &-content {
    padding: 0 24px 20px;

    .desc {
      margin-top: 0;
      margin-bottom: 16px;
      color: $text-color;
      font-size: 14px;
      line-height: 1.6;
    }

    .example {
      color: $text-color;
      font-size: 14px;
    }
  }

  &-footer {
    margin: 0 -1px;
    overflow: hidden;
    border-bottom-right-radius: $border-radius-base;
    border-bottom-left-radius: $border-radius-base;

    pre {
      margin: 0;
    }
  }
}
</style>
