<template>
  <div :class="[prefixCls]" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
    <div ref="referenceEl" :class="[prefixCls + '-reference']">
      <slot></slot>
    </div>
    <teleport to="body">
      <transition name="fade">
        <div v-show="true" ref="popperEl" :class="[prefixCls + '-popper']">
          <div :class="[prefixCls + '-arrow']" data-popper-arrow></div>
          <div :class="[prefixCls + '-content']">
            <slot name="content">{{ content }}</slot>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts" name="STooltip">
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { tooltipProps, tooltipEmits } from './tooltip'
import { createPopper } from '@popperjs/core'
import { getPrefixCls } from '@shuo-ui/utils'

const prefixCls = getPrefixCls('tooltip')

const props = defineProps(tooltipProps)
const emit = defineEmits(tooltipEmits)

// popper instance
let popper: ReturnType<typeof createPopper> | undefined
const referenceEl = ref<HTMLDivElement>()
const popperEl = ref<HTMLDivElement>()

// visible
const visible = ref(false)
const handleShowPopper = () => {
  visible.value = true
}
const handleClosePopper = () => {
  visible.value = false
}

// popper options
const enabledPopperEventListeners = ref(false)
const popperOptions = computed(() => ({
  placement: props.placement,
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 12]
      }
    },
    {
      name: 'arrow',
      options: {
        padding: 8
      }
    },
    {
      name: 'eventListeners',
      enabled: enabledPopperEventListeners.value
    }
  ]
}))
watch(popperOptions, current => {
  popper?.setOptions(current)
})

watch(visible, async current => {
  if (current) {
    await nextTick()
    enabledPopperEventListeners.value = true
    popper ? popper.update() : (popper = createPopper(referenceEl.value!, popperEl.value!, popperOptions.value))
  } else {
    enabledPopperEventListeners.value = false
  }
})

onBeforeUnmount(() => {
  popper?.destroy()
})
</script>
