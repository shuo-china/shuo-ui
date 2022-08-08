<template>
  <button :class="classNames">
    <slot></slot>
  </button>
</template>

<script setup lang="ts" name="SButton">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    type?: 'default' | 'primary' | 'success' | 'error' | 'warning'
    size?: 'small' | 'medium' | 'large'
    loading?: boolean
    round?: boolean
  }>(),
  {
    type: 'default',
    size: 'medium',
    loading: false,
    round: false
  }
)

const classNames = computed(() => [
  'button',
  `button--${props.type}`,
  `button--${props.size}`,
  {
    'button--loading': !!props.loading,
    'button--round': !!props.round
  }
])
</script>

<style lang="scss" scoped>
.button {
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
  border-radius: get-css-var('border-radius');
  outline: none;
  cursor: pointer;
  transition: all 0.1s;
  user-select: none;

  // disabled
  &[disabled] {
    cursor: no-drop;
    opacity: 0.7;
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
    color: get-css-var('text-color');
    background-color: get-css-var('color', 'white');
    border: 1px solid get-css-var('border-color');

    &:hover {
      color: get-css-var('color', 'primary', 'hover');
      border-color: get-css-var('color', 'primary', 'hover');
    }

    &:active {
      color: get-css-var('color', 'primary', 'active');
      border-color: get-css-var('color', 'primary', 'active');
    }
  }

  &--primary {
    color: get-css-var('color', 'white');
    background-color: get-css-var('color', 'primary');

    &:hover {
      background-color: get-css-var('color', 'primary', 'hover');
    }

    &:active {
      background-color: get-css-var('color', 'primary', 'active');
    }
  }

  &--success {
    color: get-css-var('color', 'white');
    background-color: get-css-var('color', 'success');

    &:hover {
      background-color: get-css-var('color', 'success', 'hover');
    }

    &:active {
      background-color: get-css-var('color', 'success', 'active');
    }
  }

  &--warning {
    color: get-css-var('color', 'white');
    background-color: get-css-var('color', 'warning');

    &:hover {
      background-color: get-css-var('color', 'warning', 'hover');
    }

    &:active {
      background-color: get-css-var('color', 'warning', 'active');
    }
  }

  &--error {
    color: get-css-var('color', 'white');
    background-color: get-css-var('color', 'error');

    &:hover {
      background-color: get-css-var('color', 'error', 'hover');
    }

    &:active {
      background-color: get-css-var('color', 'error', 'active');
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
    border-radius: get-css-var('border-radius', 'circle');
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
