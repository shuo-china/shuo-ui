<template>
  <button :class="classNames">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
    validator(value: string) {
      return ['primary', 'normal', 'success', 'error', 'warning'].includes(value)
    }
  },
  size: {
    type: String,
    default: 'medium',
    validator(value: string) {
      return ['small', 'medium', 'large'].includes(value)
    }
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const classNames = computed(() => [
  's-button',
  `s-button-${props.type}`,
  `s-button-${props.size}`,
  props.loading ? 's-button-loading' : ''
])
</script>

<style lang="scss" scoped>
.s-button {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: auto;
  white-space: nowrap;
  text-align: center;
  border: none;
  border-radius: $s-border-radius-base;
  cursor: pointer;
  transition: all 0.1s;
  user-select: none;

  &:active {
    transform: scale(0.96);
  }

  // 尺寸
  &-small {
    min-width: 50px;
    height: 24px;
    padding: 0px 8px;
    font-size: 12px;
  }

  &-medium {
    min-width: 60px;
    height: 30px;
    padding: 0 14px;
    font-style: 14px;
  }

  &-large {
    min-width: 70px;
    height: 36px;
    padding: 0px 20px;
    font-size: 16px;
  }

  // 颜色
  &-primary {
    background-color: $s-primary-color;
    color: $s-white-text-color;

    &:hover {
      background-color: $s-primary-color-hover;
    }

    &:active {
      background-color: $s-primary-color-active;
    }
  }

  &-normal {
    background-color: $s-normal-color;
    color: $s-text-color-3;

    &:hover {
      background-color: $s-normal-color-hover;
    }

    &:active {
      background-color: $s-normal-color-active;
    }
  }

  &-success {
    background-color: $s-success-color;
    color: $s-white-text-color;

    &:hover {
      background-color: $s-success-color-hover;
    }

    &:active {
      background-color: $s-success-color-active;
    }
  }

  &-warning {
    background-color: $s-warning-color;
    color: $s-white-text-color;

    &:hover {
      background-color: $s-warning-color-hover;
    }

    &:active {
      background-color: $s-warning-color-active;
    }
  }

  &-error {
    background-color: $s-error-color;
    color: $s-white-text-color;

    &:hover {
      background-color: $s-error-color-hover;
    }

    &:active {
      background-color: $s-error-color-active;
    }
  }

  // loading
  &-loading {
    font-size: 0;

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      content: '';
      border: 2.5px solid rgba(0, 0, 0, 0.25);
      border-left-color: rgba(255, 255, 255, 0.85);
      border-radius: 50%;
      width: 11px;
      height: 11px;
      animation: donut-spin 0.8s linear infinite;
      transition: all 0.15s;
      transform: translate(-50%, -50%);
    }
  }
}

@keyframes donut-spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
</style>
