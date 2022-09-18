<template>
  <div v-show="ready" :class="classNames" :style="styles">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="SCarouselItem">
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue'
import { getPrefixCls } from '@shuo-ui/utils'
import { carouselContextKey } from './context'
import { range } from 'lodash'
import type { CarouselItemContext } from './types'
import type { CSSProperties } from 'vue'

const prefixCls = getPrefixCls('carousel-item')

const classNames = computed(() => [
  prefixCls,
  {
    [`${prefixCls}-animating`]: animating.value
  }
])

const styles = computed<CSSProperties>(() => ({
  transform: `translateX(${translate.value}px)`
}))

const ready = ref(false)

const translate = ref(0)

const animating = ref(false)

const carouselContext = inject(carouselContextKey, undefined)

const isAnimating = (index: number, activeIndex: number, oldActiveIndex: number, itemCount: number) => {
  if (oldActiveIndex !== -1) {
    const halfItemIndex = itemCount / 2
    const isReverse = Math.abs(activeIndex - oldActiveIndex) >= halfItemIndex
    const isGrow = activeIndex - oldActiveIndex > 0

    const rangeData = isGrow ? range(oldActiveIndex, activeIndex + 1) : range(activeIndex, oldActiveIndex + 1)

    if (!isReverse) {
      return rangeData.includes(index)
    } else {
      return [...range(itemCount).filter(item => !rangeData.includes(item)), oldActiveIndex, activeIndex].includes(
        index
      )
    }
  }

  return false
}

const processIndex = (index: number, activeIndex: number, itemCount: number) => {
  const lastItemIndex = itemCount - 1
  const prevItemIndex = activeIndex - 1
  const nextItemIndex = activeIndex + 1
  const halfItemIndex = itemCount / 2

  if (activeIndex === 0 && index === lastItemIndex) {
    return -1
  } else if (activeIndex === lastItemIndex && index === 0) {
    return itemCount
  } else if (index < prevItemIndex && activeIndex - index >= halfItemIndex) {
    return lastItemIndex + index + 1
  } else if (index > nextItemIndex && index - activeIndex >= halfItemIndex) {
    return index - lastItemIndex - 1
  } else {
    return index
  }
}

const calcTranslate = (index: number, activeIndex: number) => {
  const rootEl = carouselContext?.root.value
  if (!rootEl) return 0

  return (rootEl.offsetWidth || 0) * (index - activeIndex)
}

const translateItem = (index: number, activeIndex: number, oldActiveIndex: number) => {
  const itemCount = carouselContext?.items.value.length || 0

  animating.value = isAnimating(index, activeIndex, oldActiveIndex, itemCount)

  const isActive = index === activeIndex

  if (!isActive && itemCount > 2) {
    index = processIndex(index, activeIndex, itemCount)
  }

  translate.value = calcTranslate(index, activeIndex)

  ready.value = true
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
