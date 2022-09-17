<template>
  <div :class="prefixCls" :style="styles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="SCarouselItem">
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { getPrefixCls } from '@shuo-ui/utils'
import { carouselContextKey } from './context'
import type { CarouselItemContext } from './types'
import type { CSSProperties } from 'vue'

const prefixCls = getPrefixCls('carousel-item')

const translate = ref(0)

const styles = computed<CSSProperties>(() => ({
  transform: `translateX(${translate.value}px)`
}))

const carouselContext = inject(carouselContextKey, undefined)

const processIndex = (index: number, activeIndex: number, itemCount: number) => {
  const lastItemIndex = itemCount - 1
  const prevItemIndex = activeIndex - 1
  const nextItemIndex = activeIndex + 1
  const halfItemIndex = itemCount / 2

  console.log(index, activeIndex)

  if (activeIndex === 0 && index === lastItemIndex) {
    return -1
  } else if (activeIndex === lastItemIndex && index === 0) {
    return itemCount
  }

  return index
}

const calcTranslate = (index: number, activeIndex: number) => {
  const rootEl = carouselContext?.root.value
  if (!rootEl) return 0

  return (rootEl.offsetWidth || 0) * (index - activeIndex)
}

const translateItem = (index: number, activeIndex: number) => {
  const itemCount = carouselContext?.items.value.length || 0

  const isActive = index === activeIndex

  index = processIndex(index, activeIndex, itemCount)

  translate.value = calcTranslate(index, activeIndex)
}

const context: CarouselItemContext = {
  translateItem
}

onMounted(() => {
  carouselContext?.addItem(context)
})

onBeforeUnmount(() => {
  carouselContext?.removeItem(context)
})
</script>
