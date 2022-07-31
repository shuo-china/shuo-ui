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
      return ['primary', 'info', 'success', 'error', 'warning'].includes(value)
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
  `s-button-${props.type}`,
  `s-button-${props.size}`,
  props.loading ? 's-button-loading' : '',
  props.round ? 's-button-round' : ''
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
  border-radius: var(--s-border-radius-base);
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
    padding: 0 8px;
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
    padding: 0 20px;
    font-size: 16px;
  }

  // 颜色
  &-primary {
    color: var(--s-white-text-color);
    background-color: var(--s-primary-color);

    &:hover {
      background-color: var(--s-primary-color-hover);
    }

    &:active {
      background-color: var(--s-primary-color-active);
    }
  }

  &-info {
    color: var(--s-text-color-3);
    background-color: var(--s-info-color);

    &:hover {
      background-color: var(--s-info-color-hover);
    }

    &:active {
      background-color: var(--s-info-color-active);
    }
  }

  &-success {
    color: var(--s-white-text-color);
    background-color: var(--s-success-color);

    &:hover {
      background-color: var(--s-success-color-hover);
    }

    &:active {
      background-color: var(--s-success-color-active);
    }
  }

  &-warning {
    color: var(--s-white-text-color);
    background-color: var(--s-warning-color);

    &:hover {
      background-color: var(--s-warning-color-hover);
    }

    &:active {
      background-color: var(--s-warning-color-active);
    }
  }

  &-error {
    color: var(--s-white-text-color);
    background-color: var(--s-error-color);

    &:hover {
      background-color: var(--s-error-color-hover);
    }

    &:active {
      background-color: var(--s-error-color-active);
    }
  }

  // loading
  &-loading {
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
  &-round {
    border-radius: 50px;
  }

  // disabled
  &[disabled] {
    color: var(--s-text-color-3);
    background: var(--s-normal-color);
    cursor: no-drop;
    opacity: var(--s-disabled-opacity);
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
