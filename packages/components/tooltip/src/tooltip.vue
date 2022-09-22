<template>
  <div :class="[prefixCls]" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
    <div ref="popcorn" :class="[prefixCls + '-popcorn']">
      <slot></slot>
    </div>
    <teleport to="body">
      <transition name="fade">
        <div v-show="visible" ref="tooltip">
          <div>
            <slot name="content">{{ content }}</slot>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup lang="ts" name="STooltip">
import { nextTick, onBeforeUnmount, onMounted, onUpdated, ref, watch } from 'vue'
import { tooltipProps, tooltipEmits } from './tooltip'
import { createPopper } from '@popperjs/core'
import { UPDATE_MODEL_EVENT } from '@shuo-ui/constants'
import { getPrefixCls } from '@shuo-ui/utils'
import type { OptionsGeneric, Modifier } from '@popperjs/core'

const prefixCls = getPrefixCls('tooltip')

const props = defineProps(tooltipProps)

const emit = defineEmits(tooltipEmits)

const popcorn = ref<HTMLDivElement>()
const tooltip = ref<HTMLDivElement>()

const visible = ref(props.modelValue)

let popper: ReturnType<typeof createPopper>

const handleShowPopper = () => {
  visible.value = true
}

const handleClosePopper = () => {
  visible.value = false
}

watch(
  () => props.modelValue,
  current => {
    visible.value = current
  }
)

watch(visible, current => {
  popper.update()
  emit(UPDATE_MODEL_EVENT, current)
})

onMounted(() => {
  const options: Partial<OptionsGeneric<Partial<Modifier<any, any>>>> = { placement: 'top' }

  popper = createPopper(popcorn.value!, tooltip.value!, options)
})

onBeforeUnmount(() => {
  popper.destroy()
})
</script>
