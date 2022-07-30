<template>
  <button class="s-button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts"></script>

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
  border-radius: $border-radius;
  cursor: pointer;
  transition: all 0.1s;
  user-select: none;

  &:active {
    transform: scale(0.96);
  }
}
</style>
