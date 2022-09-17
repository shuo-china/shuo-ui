<template>
  <div ref="root">
    <div :class="[prefixCls + '-container']">
      <slot></slot>
    </div>
    <span>{{ activeIndex }}</span>
    <button @click="prev">prev</button>
    <button @click="next">next</button>
  </div>
</template>

<script setup lang="ts" name="SCarousel">
import { provide, ref, watch } from 'vue'
import { getPrefixCls } from '@shuo-ui/utils'
import { carouselContextKey } from './context'
import type { CarouselContext, CarouselItemContext } from './types'
import type { Ref } from 'vue'

const prefixCls = getPrefixCls('carousel')

const root = ref<HTMLDivElement>() as Ref<HTMLDivElement>

const activeIndex = ref(-1)

const setActiveItem = (index: number) => {
  const itemCount = items.value.length

  if (index < 0) {
    activeIndex.value = 0
  } else if (index >= itemCount) {
    activeIndex.value = itemCount - 1
  } else {
    activeIndex.value = index
  }
}

const resetItemPosition = () => {
  items.value.forEach((item, index) => {
    item.translateItem(index, activeIndex.value)
  })
}

function prev() {
  setActiveItem(activeIndex.value - 1)
}

const next = () => {
  setActiveItem(activeIndex.value + 1)
}

watch(
  () => activeIndex.value,
  () => {
    resetItemPosition()
  }
)

const items = ref<CarouselItemContext[]>([])

const addItem: CarouselContext['addItem'] = item => {
  items.value.push(item)
}

const removeItem: CarouselContext['removeItem'] = item => {
  const findIndex = items.value.indexOf(item)
  if (findIndex !== -1) {
    items.value.splice(findIndex, 1)
  }
}

const context: CarouselContext = {
  root,
  items,
  addItem,
  removeItem
}

provide(carouselContextKey, context)
</script>
