<template>
  <label :class="wrapperClassNames">
    <span :class="classNames">
      <input
        v-model="currentValue"
        type="radio"
        :value="label"
        :class="[prefixCls + '-input']"
        :disabled="disabled"
        @focus="focused = true"
        @blur="focused = false"
      />
      <span :class="[prefixCls + '-inner']"></span>
    </span>
    <span :class="[prefixCls + '-label']">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts" name="SRadio">
import { computed } from 'vue'
import { radioProps, radioEmits } from './radio'
import useRadio from './use-radio'
import { getPrefixCls } from '@shuo-ui/utils'

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)
const { currentValue, size, disabled, isChecked, focused } = useRadio(props, emit)

const prefixCls = getPrefixCls('radio')

const wrapperClassNames = computed(() => [`${prefixCls}-wrapper`, `${prefixCls}-${size.value}`])

const classNames = computed(() => [
  `${prefixCls}`,
  {
    [`${prefixCls}-checked`]: isChecked.value,
    [`${prefixCls}-focus`]: focused.value,
    [`${prefixCls}-disabled`]: disabled.value
  }
])
</script>
