<template>
  <div :class="classNames">
    <template v-if="type !== 'textarea'">
      <!-- prepend -->
      <div v-if="slots.prepend" :class="inputPrefixCls + '-prepend'">
        <slot name="prepend"></slot>
      </div>
      <!-- wrapper -->
      <div :class="inputPrefixCls + '-wrapper'">
        <!-- prefix -->
        <span :class="inputPrefixCls + '-prefix'">
          <slot name="prefix"></slot>
        </span>
        <!-- input -->
        <input
          v-bind="$attrs"
          :class="inputPrefixCls + '-inner'"
          :type="currentType"
          :value="currentValue"
          :disabled="itemDisabled"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <!-- suffix -->
        <span :class="inputPrefixCls + '-suffix'">
          <slot name="suffix"></slot>
          <s-icon
            v-if="type === 'password' && !itemDisabled"
            :name="showPwd ? 'eye' : 'eye-close'"
            :class="[inputPrefixCls + '-icon', inputPrefixCls + '-icon-pwd']"
            @click="toogleShowPwd"
          />

          <s-icon
            v-if="clearable && currentValue && !itemDisabled"
            name="close-circle-fill"
            :class="[inputPrefixCls + '-icon', inputPrefixCls + '-icon-clear']"
            @click="handleClear"
          />
        </span>
      </div>
      <!-- append -->
      <div v-if="slots.append" :class="inputPrefixCls + '-append'">
        <slot name="append"></slot>
      </div>
    </template>
    <template v-else>
      <textarea
        v-bind="$attrs"
        :class="textareaPrefixCls + '-inner'"
        :value="currentValue"
        :disabled="itemDisabled"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      ></textarea>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  name: 'SInput',
  inheritAttrs: false
}
</script>

<script setup lang="ts">
import { ref, watch, computed, useSlots } from 'vue'
import { inputProps, inputEmits } from './input'
import { SIcon } from '@shuo-ui/components'
import { BLUR_EVENT, CHANGE_EVENT, FOCUS_EVENT, INPUT_EVENT, UPDATE_MODEL_EVENT } from '@shuo-ui/constants'
import { useDisabled, useFormItem, useSize } from '@shuo-ui/hooks'
import { getPrefixCls, isNil } from '@shuo-ui/utils'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const inputPrefixCls = getPrefixCls('input')
const textareaPrefixCls = getPrefixCls('textarea')

const props = defineProps(inputProps)

const emit = defineEmits(inputEmits)

const slots = useSlots()

const classNames = computed(() =>
  props.type !== 'textarea'
    ? [
        inputPrefixCls,
        `${inputPrefixCls}-${itemSize.value}`,
        {
          [`${inputPrefixCls}-with-prepend`]: !!slots.prepend,
          [`${inputPrefixCls}-with-append`]: !!slots.append,
          [`${inputPrefixCls}-disabled`]: itemDisabled.value,
          [`${inputPrefixCls}-focus`]: focused.value
        }
      ]
    : [
        textareaPrefixCls,
        {
          [`${textareaPrefixCls}-disabled`]: itemDisabled.value,
          [`${textareaPrefixCls}-focus`]: focused.value
        }
      ]
)

const { formItem } = useFormItem()

const itemSize = useSize()
const itemDisabled = useDisabled()

const focused = ref(false)

const showPwd = ref(false)
const toogleShowPwd = () => {
  showPwd.value = !showPwd.value
}

const currentType = computed(() => {
  let type = props.type
  if (type === 'password' && showPwd.value) {
    type = 'text'
  }
  return type
})

const currentValue = ref(props.modelValue)

const setCurrentValue = value => {
  const inputValue = isNil(value) ? '' : String(value)
  if (inputValue === currentValue.value) return
  currentValue.value = inputValue
  formItem?.validate(CHANGE_EVENT)
}

const handleInput = (event: Event) => {
  const { value } = event.target as TargetElement

  emit(UPDATE_MODEL_EVENT, value)
  emit(INPUT_EVENT, value)
  setCurrentValue(value)
}

const handleChange = (event: Event) => {
  emit(CHANGE_EVENT, (event.target as TargetElement).value)
}

const handleFocus = (event: Event) => {
  focused.value = true
  emit(FOCUS_EVENT, event)
}

const handleBlur = (event: Event) => {
  focused.value = false
  emit(BLUR_EVENT, event)
  formItem?.validate(BLUR_EVENT)
}

const handleClear = () => {
  emit(UPDATE_MODEL_EVENT, '')
  emit(INPUT_EVENT, '')
  setCurrentValue('')
}

watch(
  () => props.modelValue,
  newValue => {
    setCurrentValue(newValue)
  }
)
</script>
