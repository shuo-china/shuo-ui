<template>
  <label :class="classNames">
    <input
      v-model="currentValue"
      type="radio"
      :value="label"
      :class="[prefixCls + '-input']"
      :disabled="disabled"
      @focus="focused = true"
      @blur="focused = false"
    />
    <span :class="[prefixCls + '-inner']">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts" name="SRadioButton">
import { computed } from 'vue'
import { getPrefixCls } from '@shuo-ui/utils'
import { radioButtonProps, radioButtonEmits } from './radio-button'
import useRadio from './use-radio'

const props = defineProps(radioButtonProps)
const emit = defineEmits(radioButtonEmits)

const { currentValue, size, disabled, isChecked, focused } = useRadio(props, emit)

const prefixCls = getPrefixCls('radio-button')

const classNames = computed(() => [
  `${prefixCls}`,
  `${prefixCls}-${size.value}`,
  {
    [`${prefixCls}-checked`]: isChecked.value,
    [`${prefixCls}-disabled`]: disabled.value
  }
])
</script>
