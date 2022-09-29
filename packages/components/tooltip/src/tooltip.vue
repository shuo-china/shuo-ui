<template>
  <div :class="[prefixCls]" @mouseenter="handleShowPopper" @mouseleave="handleClosePopper">
    <div ref="reference" :class="[prefixCls + '-reference']">
      <slot></slot>
    </div>
    <teleport to="body">
      <transition name="fade">
        <div v-show="visible" ref="popper" :class="[prefixCls + '-popper']">
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
import { ref } from 'vue'
import { usePopper } from '@shuo-ui/hooks'
import { tooltipProps, tooltipEmits } from './tooltip'
import { getPrefixCls } from '@shuo-ui/utils'

const prefixCls = getPrefixCls('tooltip')

const props = defineProps(tooltipProps)
const emit = defineEmits(tooltipEmits)

const reference = ref(null)
const popper = ref(null)

const { visible } = usePopper(reference, popper, props, emit)

const handleShowPopper = () => {
  visible.value = true
}

const handleClosePopper = () => {
  visible.value = false
}
</script>
