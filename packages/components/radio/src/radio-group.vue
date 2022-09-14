<template>
  <div :class="prefixCls">
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="SRadioGroup">
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@shuo-ui/constants'
import { getPrefixCls } from '@shuo-ui/utils'
import { provide, toRefs } from 'vue'
import { radioGroupContextKey } from './context'
import { radioGroupProps, radioGroupEmits } from './radio-group'
import type { RadioGroupContext, RadioGroupProps } from './types'

const prefixCls = getPrefixCls('radio-group')

const props = defineProps(radioGroupProps)
const emit = defineEmits(radioGroupEmits)

const changeEvent = (value: RadioGroupProps['modelValue']) => {
  emit(UPDATE_MODEL_EVENT, value)
  emit(CHANGE_EVENT, value)
}

const context: RadioGroupContext = {
  ...toRefs(props),
  changeEvent
}

provide(radioGroupContextKey, context)
</script>
