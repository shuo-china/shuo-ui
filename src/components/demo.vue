<template>
  <div class="demo">
    <div class="demo__title">{{ title }}</div>
    <div v-if="desc" class="demo__desc">{{ desc }}</div>
    <div class="demo__example">
      <div class="showcase">
        <slot></slot>
      </div>
      <transition name="slide-fade">
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
.demo {
  margin: 48px 0;

  &__title {
    margin-bottom: 12px;
    color: get-css-var('text-color');
    font-weight: bold;
    font-size: get-css-var('text-color', 'large');
  }

  &__desc {
    margin: 12px 0;
    color: get-css-var('text-color', 'secondary');
    font-size: 14px;
  }

  &__example {
    margin: 12px 0;
    background-color: #fff;
    border: 1px solid get-css-var('border-color');
    border-radius: get-css-var('border-radius');

    .showcase {
      padding: get-css-var('padding');
      overflow-x: auto;
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
      color: get-css-var('text-color', 'secondary');
      font-size: get-css-var('font-size');
      text-align: center;
      background-color: #fff;
      border-top: 1px solid get-css-var('border-color');
      cursor: pointer;
      transition: all 0.25s;
      user-select: none;

      &:hover {
        color: get-css-var('text-color');
        background-color: get-css-var('bg-color');
      }

      .icon {
        margin-right: 12px;
      }
    }
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.1s linear;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: get-css-var('opacity-disabled');
}
</style>
