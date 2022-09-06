<template>
  <component :is="tag" :class="classNames" :style="styles">
    <slot></slot>
  </component>
</template>

<script setup lang="ts" name="SRow">
import { computed, provide } from 'vue'
import { rowContextKey } from './context'
import { getPrefixCls } from '@shuo-ui/utils'
import type { CSSProperties } from 'vue'

const props = withDefaults(
  defineProps<{
    tag?: string
    gutter?: number
    align?: 'top' | 'middle' | 'bottom'
    justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
  }>(),
  {
    tag: 'div',
    gutter: 0,
    align: 'top',
    justify: 'start'
  }
)

const prefixCls = getPrefixCls('row')

const classNames = computed(() => [prefixCls, `${prefixCls}-${props.align}`, `${prefixCls}-${props.justify}`])

const styles = computed<CSSProperties>(() => {
  if (!props.gutter) {
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
