<template>
  <component :is="tag" :class="classNames" :style="styles">
    <slot></slot>
  </component>
</template>

<script setup lang="ts" name="SCol">
import { computed, inject } from 'vue'
import { getPrefixCls, isNumber } from '@shuo-ui/utils'
import { rowContextKey } from '@shuo-ui/components/row/src/context'
import type { CSSProperties } from 'vue'
import { isObject } from 'lodash'

const prefixCls = getPrefixCls('col')

const rowContext = inject(rowContextKey, { gutter: computed(() => 0) })

const props = withDefaults(
  defineProps<{
    tag?: string
    span?: number
    offset?: number
    push?: number
    pull?: number
    xs?: any
    sm?: any
    md?: any
    lg?: any
    xl?: any
  }>(),
  {
    tag: 'div',
    span: 24,
    offset: 0,
    push: 0,
    pull: 0,
    xs: () => {},
    sm: () => {},
    md: () => {},
    lg: () => {},
    xl: () => {}
  }
)

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
      classes.push(`${prefixCls}-${screen}-${props.span}`)
    } else if (isObject(props[screen])) {
      Object.entries(props[screen]).forEach(([prop, value]) => {
        if (isNumber(value)) {
          if (prop === 'span') {
            classes.push(`${prefixCls}-${screen}-${props.span}`)
          } else if (value > 0) {
            classes.push(`${prefixCls}-${screen}-${prop}-${props[prop]}`)
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
