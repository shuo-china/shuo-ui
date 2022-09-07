<template>
  <component :is="tag" :class="classNames" :style="styles">
    <slot></slot>
  </component>
</template>

<script setup lang="ts" name="SRow">
import { computed, provide } from 'vue'
import { rowProps } from './row'
import { rowContextKey } from './context'
import { getPrefixCls } from '@shuo-ui/utils'
import type { CSSProperties } from 'vue'

const props = defineProps(rowProps)

const prefixCls = getPrefixCls('row')

const classNames = computed(() => [prefixCls, `${prefixCls}-${props.align}`, `${prefixCls}-${props.justify}`])

const styles = computed<CSSProperties>(() => {
  if (props.gutter) {
    return {
      marginLeft: `-${props.gutter / 2}px`,
      marginRight: `-${props.gutter / 2}px`
    }
  }
  return {}
})

const gutter = computed(() => props.gutter)

provide(rowContextKey, {
  gutter
})
</script>
