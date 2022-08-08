<template>
  <div class="demo">
    <div class="demo__title">{{ title }}</div>
    <div v-if="!!desc" class="doc__desc">{{ desc }}</div>
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
          <s-icon v-if="isShowCode" name="up" />
          <s-icon v-else name="down" />
        </div>
        <span>
          {{ isShowCode ? '收起' : '显示代码' }}
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
  margin: 36px 0;

  &__title {
    margin-bottom: 12px;
    color: $text-color-primary;
    font-weight: bold;
    font-size: 16px;
  }

  &__desc {
    margin: 12px 0 24px;
    color: adjust_color($text-color-primary, $lightness: 20%);
    font-size: 14px;
  }

  &__example {
    margin: 12px 0;
    background-color: #fff;
    border: 1px solid $border-color-primary;
    border-radius: $border-radius-base;

    .showcase {
      padding: $padding-lg;
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
      height: 30px;
      color: #999;
      font-size: 14px;
      line-height: 30px;
      text-align: center;
      background-color: #fff;
      border-top: 1px solid $border-color-primary;
      cursor: pointer;
      transition: all 0.25s;
      user-select: none;

      &:hover {
        color: $text-color-primary;
        background-color: #ebebeb;
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
  opacity: 0.5;
}
</style>
