<template>
  <div ref="root" :class="prefixCls" @mouseenter.stop="handleMouseEnter" @mouseleave.stop="handleMouseLeave">
    <div :class="[prefixCls + '-container']" :style="{ height: addUnit(height) }">
      <!-- prev -->
      <transition v-if="arrowDisplay" name="fade">
        <button
          v-show="(arrow === 'always' || hover) && (props.loop || activeIndex > 0)"
          :class="[prefixCls + '-arrow', prefixCls + '-arrow-left']"
          @click.stop="prev"
        >
          <s-icon name="left" :size="12" />
        </button>
      </transition>
      <!-- next -->
      <transition v-if="arrowDisplay" name="fade">
        <button
          v-show="(arrow === 'always' || hover) && (props.loop || activeIndex < items.length - 1)"
          :class="[prefixCls + '-arrow', prefixCls + '-arrow-right']"
          @click.stop="next"
        >
          <s-icon name="right" :size="12" />
        </button>
      </transition>

      <slot></slot>
    </div>
    <!-- indicator -->
    <ul :class="indicatorsClassNames">
      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[
          prefixCls + '-indicator',
          {
            [prefixCls + '-indicator-active']: index === activeIndex
          }
        ]"
        @mouseenter="handleIndicatorHover(index)"
        @click.stop="handleIndicatorClick(index)"
      >
        <button></button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="SCarousel">
import { computed, onBeforeUnmount, onMounted, provide, ref, toRefs, watch } from 'vue'
import { carouselProps } from './carousel'
import { getPrefixCls, addUnit } from '@shuo-ui/utils'
import { carouselContextKey } from './context'
import { SIcon } from '@shuo-ui/components'
import { throttle } from 'lodash'
import type { CarouselContext, CarouselItemContext } from './types'
import type { Ref } from 'vue'

const THROTTLE_TIME = 500

const prefixCls = getPrefixCls('carousel')

const indicatorsClassNames = computed(() => [`${prefixCls}-indicators`, `${prefixCls}-indicators-${props.direction}`])

const props = defineProps(carouselProps)

const root = ref<HTMLDivElement>() as Ref<HTMLDivElement>

const timer = ref<ReturnType<typeof setInterval> | null>(null)

const hover = ref(false)

const isVertical = computed(() => props.direction === 'left' || props.direction === 'right')

const arrowDisplay = computed(() => props.arrow !== 'never' && isVertical.value === false)

const activeIndex = ref(-1)

const _setActiveItem = (index: number) => {
  const itemCount = items.value.length

  if (index < 0) {
    activeIndex.value = props.loop ? itemCount - 1 : 0
  } else if (index >= itemCount) {
    activeIndex.value = props.loop ? 0 : itemCount - 1
  } else {
    activeIndex.value = index
  }
}

const setActiveItem = throttle(_setActiveItem, THROTTLE_TIME, {
  trailing: false
})

const setActiveItemTrailing = throttle(_setActiveItem, THROTTLE_TIME, {
  trailing: true
})

function prev() {
  setActiveItem(activeIndex.value - 1)
}

const next = () => {
  setActiveItem(activeIndex.value + 1)
}

const handleIndicatorClick = (index: number) => {
  setActiveItemTrailing(index)
}

const handleIndicatorHover = (index: number) => {
  if (props.trigger === 'hover' && index !== activeIndex.value) {
    setActiveItemTrailing(index)
  }
}

const playSlides = () => {
  if (activeIndex.value < items.value.length - 1) {
    activeIndex.value = activeIndex.value + 1
  } else if (props.loop) {
    activeIndex.value = 0
  }
}

function startTimer() {
  if (props.interval <= 0 || !props.autoplay || timer.value) return
  timer.value = setInterval(() => playSlides(), props.interval)
}

function pauseTimer() {
  if (timer.value) {
    clearInterval(timer.value)
    timer.value = null
  }
}

const resetItemPosition = (oldActiveIndex: number) => {
  items.value.forEach((item, index) => {
    item.translateItem(index, activeIndex.value, oldActiveIndex)
  })
}

const handleMouseEnter = () => {
  hover.value = true
  if (props.pauseOnHover) {
    pauseTimer()
  }
}

const handleMouseLeave = () => {
  hover.value = false
  startTimer()
}

watch(
  () => activeIndex.value,
  (_, prev) => {
    resetItemPosition(prev)
  }
)

watch(
  () => props.loop,
  () => {
    resetItemPosition(activeIndex.value)
  }
)

watch(
  () => props.direction,
  () => {
    resetItemPosition(activeIndex.value)
  }
)

watch(
  () => props.autoplay,
  current => {
    current ? startTimer() : pauseTimer()
  },
  {
    immediate: true
  }
)

onMounted(() => {
  if (props.initialIndex < items.value.length && props.initialIndex >= 0) {
    activeIndex.value = props.initialIndex
  }
})

onBeforeUnmount(() => {
  pauseTimer()
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
  isVertical,
  root,
  items,
  addItem,
  removeItem
}

provide(carouselContextKey, context)
</script>
