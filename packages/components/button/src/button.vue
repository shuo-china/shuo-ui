<template>
  <button :class="classNames">
    <span v-if="loading" class="s-button-icon">
      <s-icon name="loading" :spin="true"></s-icon>
    </span>

    <span><slot></slot></span>
  </button>
</template>

<script setup lang="ts" name="SButton">
import { computed } from 'vue'
import { SIcon } from '@shuo-ui/components'

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
  border-radius: get-css-var('border-radius');
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  user-select: none;

  // size
  &--small {
    height: 28px;
    padding: 0 10px;
    font-size: 13px;
  }

  &--medium {
    height: 34px;
    padding: 0 14px;
    font-size: 14px;
  }

  &--large {
    height: 40px;
    padding: 0 18px;
    font-size: 15px;
  }

  // colors
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
    opacity: get-css-var('opacity-disabled');
    pointer-events: none;
  }

  // disabled
  &[disabled] {
    color: get-css-var('text-color', 'disabled');
    background-color: get-css-var('bg-color');
    border: 1px solid get-css-var('border-color');
    cursor: no-drop;
  }

  // round
  &--round {
    border-radius: get-css-var('border-radius', 'round');
  }

  // icon
  &-icon {
    margin-right: 6px;
  }
}
</style>
