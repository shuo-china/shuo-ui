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
    default: 'default',
    validator(value: string) {
      return ['default', 'primary', 'info', 'success', 'error', 'warning'].includes(value)
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
  },
  round: {
    type: Boolean,
    default: false
  }
})

const classNames = computed(() => [
  's-button',
  `s-button--${props.type}`,
  `s-button--${props.size}`,
  {
    's-button--loading': !!props.loading,
    's-button--round': !!props.round
  }
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
  border-radius: $border-radius-base;
  outline: none;
  cursor: pointer;
  transition: all 0.1s;
  user-select: none;

  &:active {
    transform: scale(0.96);
  }

  // disabled
  &[disabled] {
    cursor: no-drop;
    opacity: $disabled-opacity;
  }

  // 尺寸
  &--small {
    min-width: 50px;
    height: 24px;
    padding: 0 8px;
    font-size: 12px;
  }

  &--medium {
    min-width: 60px;
    height: 30px;
    padding: 0 14px;
    font-size: 14px;
  }

  &--large {
    min-width: 70px;
    height: 36px;
    padding: 0 20px;
    font-size: 16px;
  }

  // 颜色
  &--default {
    color: $black-text-color;
    background-color: $default-color;

    &:hover {
      background-color: $default-color-hover;
    }

    &:active {
      background-color: $default-color-active;
    }
  }

  &--primary {
    color: $white-text-color;
    background-color: $primary-color;

    &:hover {
      background-color: $primary-color-hover;
    }

    &:active {
      background-color: $primary-color-active;
    }
  }

  &--info {
    color: $white-text-color;
    background-color: $info-color;

    &:hover {
      background-color: $info-color-hover;
    }

    &:active {
      background-color: $info-color-active;
    }
  }

  &--success {
    color: $white-text-color;
    background-color: $success-color;

    &:hover {
      background-color: $success-color-hover;
    }

    &:active {
      background-color: $success-color-active;
    }
  }

  &--warning {
    color: $white-text-color;
    background-color: $warning-color;

    &:hover {
      background-color: $warning-color-hover;
    }

    &:active {
      background-color: $warning-color-active;
    }
  }

  &--error {
    color: $white-text-color;
    background-color: $error-color;

    &:hover {
      background-color: $error-color-hover;
    }

    &:active {
      background-color: $error-color-active;
    }
  }

  // loading
  &--loading {
    font-size: 0;

    &::after {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 11px;
      height: 11px;
      border: 2.5px solid rgb(0 0 0 / 25%);
      border-left-color: rgb(255 255 255 / 85%);
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.15s;
      animation: donut-spin 0.8s linear infinite;
      content: '';
    }
  }

  // round
  &--round {
    border-radius: 50px;
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
