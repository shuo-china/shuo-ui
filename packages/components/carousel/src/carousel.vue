<template>
  <div ref="root" :class="prefixCls">
    <div :class="[prefixCls + '-container']">
      <button :class="[prefixCls + '-arrow', prefixCls + '-arrow-left']" @click.stop="prev">
        <s-icon name="left" :size="12" />
      </button>
      <button :class="[prefixCls + '-arrow', prefixCls + '-arrow-right']" @click.stop="next">
        <s-icon name="right" :size="12" />
      </button>
      <slot></slot>
    </div>
    <ul :class="[prefixCls + '-indicators']">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[
          prefixCls + '-indicator',
          {
            [prefixCls + '-indicator-active']: index === activeIndex
          }
        ]"
        @click.stop="handleIndicatorClick(index)"
      >
        <button></button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="SCarousel">
import { onMounted, provide, ref, toRefs, watch } from 'vue'
import { carouselProps } from './carousel'
import { getPrefixCls } from '@shuo-ui/utils'
import { carouselContextKey } from './context'
import { SIcon } from '@shuo-ui/components'
import { throttle } from 'lodash'
import type { CarouselContext, CarouselItemContext } from './types'
import type { Ref } from 'vue'

const prefixCls = getPrefixCls('carousel')

const props = defineProps(carouselProps)

const root = ref<HTMLDivElement>() as Ref<HTMLDivElement>

const activeIndex = ref(-1)

const setActiveItem = throttle(
  (index: number) => {
    const itemCount = items.value.length

    if (index < 0) {
      activeIndex.value = props.loop ? itemCount - 1 : 0
    } else if (index >= itemCount) {
      activeIndex.value = props.loop ? 0 : itemCount - 1
    } else {
      activeIndex.value = index
    }
  },
  400,
  {
    trailing: false
  }
)

function prev() {
  setActiveItem(activeIndex.value - 1)
}

const next = () => {
  setActiveItem(activeIndex.value + 1)
}

const handleIndicatorClick = (index: number) => {
  setActiveItem(index)
}

const resetItemPosition = (oldActiveIndex: number) => {
  items.value.forEach((item, index) => {
    item.translateItem(index, activeIndex.value, oldActiveIndex)
  })
}

watch(
  () => activeIndex.value,
  (current, prev) => {
    resetItemPosition(prev)
  }
)

onMounted(() => {
  activeIndex.value = 0
})

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
  ...toRefs(props),
  root,
  items,
  addItem,
  removeItem
}

provide(carouselContextKey, context)
</script>
