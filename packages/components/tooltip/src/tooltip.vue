<template>
  <div :class="[prefixCls]" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
    <div ref="popcorn" :class="[prefixCls + '-popcorn']">
      <slot></slot>
    </div>
    <teleport to="body">
      <transition name="fade">
        <div v-show="true" ref="tooltip" :class="[prefixCls + '-popper']">
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
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { tooltipProps, tooltipEmits } from './tooltip'
import { createPopper } from '@popperjs/core'
import { getPrefixCls } from '@shuo-ui/utils'
import type { OptionsGeneric, Modifier } from '@popperjs/core'

const prefixCls = getPrefixCls('tooltip')

const props = defineProps(tooltipProps)
const emit = defineEmits(tooltipEmits)

let popper: ReturnType<typeof createPopper> | undefined

const popcorn = ref<HTMLDivElement>()
const tooltip = ref<HTMLDivElement>()
const visible = ref(false)

const handleShowPopper = () => {
  visible.value = true
}

const handleClosePopper = () => {
  visible.value = false
}

const setPopperEventListeners = enabled => {
  popper?.setOptions(options => ({
    ...options,
    modifiers: [...(options.modifiers || []), { name: 'eventListeners', enabled }]
  }))
}
const enablePopperEventListeners = () => setPopperEventListeners(true)
const disablePopperEventListeners = () => setPopperEventListeners(false)

watch(visible, current => {
  if (current) {
    popper?.update()
    enablePopperEventListeners()
  } else {
    disablePopperEventListeners()
  }
})

watch(
  () => props.placement,
  current => {
    popper?.setOptions(options => ({
      ...options,
      placement: current
    }))
  }
)

onMounted(() => {
  const options: Partial<OptionsGeneric<Partial<Modifier<any, any>>>> = {
    placement: props.placement,
    modifiers: [
      {
        name: 'arrow',
        options: {
          padding: ({ popper, reference, placement }) => popper.width / reference.width
        }
      },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  }

  popper = createPopper(popcorn.value!, tooltip.value!, options)
})

onBeforeUnmount(() => {
  popper?.destroy()
})
</script>
