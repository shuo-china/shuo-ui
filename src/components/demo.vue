<template>
  <div class="demo">
    <div class="demo__title">{{ title }}</div>
    <div v-if="desc" class="demo__desc">{{ desc }}</div>
    <div class="demo__example">
      <div class="showcase">
        <slot></slot>
      </div>
      <transition name="fade">
        <div v-show="isShowCode" v-highlight class="showcode">
          <pre><code v-text="code"></code></pre>
        </div>
      </transition>
      <div class="showbar" @click="isShowCode = !isShowCode">
        <div class="icon">
          <s-icon v-if="isShowCode" name="up" :size="14" />
          <s-icon v-else name="down" :size="14" />
        </div>
        <span>
          {{ isShowCode ? '收起代码' : '显示代码' }}
        </span>
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
  margin: 48px 0;

  &__title {
    margin-bottom: 12px;
    color: $text-color;
    font-weight: bold;
    font-size: $font-size-large;
  }

  &__desc {
    margin: 12px 0;
    color: $text-secondary-color;
    font-size: 14px;
  }

  &__example {
    margin: 12px 0;
    overflow: hidden;
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: $border-radius-large;

    .showcase {
      padding: 30px;
      overflow-x: auto;
      color: $text-color;
    }

    .showcode {
      pre {
        margin: 0;
      }
    }

    .showbar {
      display: flex;
      justify-content: center;
      padding: 8px 0;
      color: #999;
      font-size: $font-size-small;
      line-height: 1;
      text-align: center;
      background-color: #fff;
      border-top: 1px solid #ebebeb;
      cursor: pointer;
      transition: all $transition-duration;
      user-select: none;

      &:hover {
        color: $text-color;
        background-color: #ebebeb;
      }

      .icon {
        margin-right: 12px;
      }
    }
  }
}
</style>
