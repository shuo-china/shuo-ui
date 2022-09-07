<template>
  <component :is="tag" :class="classNames" :style="styles">
    <slot></slot>
  </component>
</template>

<script setup lang="ts" name="SCol">
import { computed, inject } from 'vue'
import { colProps } from './col'
import { getPrefixCls, isNumber } from '@shuo-ui/utils'
import { rowContextKey } from '@shuo-ui/components/row/src/context'
import type { CSSProperties } from 'vue'
import { isObject } from 'lodash'

const prefixCls = getPrefixCls('col')

const rowContext = inject(rowContextKey, { gutter: computed(() => 0) })

const props = defineProps(colProps)

const classNames = computed(() => {
  const classes: string[] = [prefixCls]

  const pos = ['span', 'offset', 'pull', 'push'] as const
  pos.forEach(p => {
    const size = props[p]
    if (isNumber(size)) {
      if (p === 'span') {
        classes.push(`${prefixCls}-${props.span}`)
      } else if (size > 0) {
        classes.push(`${prefixCls}-${p}-${props[p]}`)
      }
    }
  })

  const screens = ['xs', 'sm', 'md', 'lg', 'xl'] as const
  screens.forEach(screen => {
    if (isNumber(props[screen])) {
      classes.push(`${prefixCls}-${screen}-${props[screen]}`)
    } else if (isObject(props[screen])) {
      Object.entries(props[screen]).forEach(([p, size]) => {
        if (isNumber(size)) {
          if (p === 'span') {
            classes.push(`${prefixCls}-${screen}-${size}`)
          } else if (size > 0) {
            classes.push(`${prefixCls}-${screen}-${p}-${size}`)
          }
        }
      })
    }
  })

  return classes
})

const styles = computed<CSSProperties>(() => {
  if (rowContext.gutter.value) {
    return {
      paddingLeft: `${rowContext.gutter.value / 2}px`,
      paddingRight: `${rowContext.gutter.value / 2}px`
    }
  }
  return {}
})
</script>
