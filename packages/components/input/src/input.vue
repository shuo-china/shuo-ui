<template>
  <div :class="classNames">
    <template v-if="type !== 'textarea'">
      <!-- prepend -->
      <!-- wrapper -->
      <div :class="wrapperClassNames">
        <!-- prefix -->
        <span :class="inputPrefixCls + '-prefix'">
          <slot name="prefix"></slot>
        </span>
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
    </template>
    <template v-else>
      <textarea></textarea>
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
import { ref, watch, computed } from 'vue'
import { SIcon } from '@shuo-ui/components'
import { useFormItem } from '@shuo-ui/hooks'
import { getPrefixCls } from '@shuo-ui/utils'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const inputPrefixCls = getPrefixCls('input')
const textareaPrefixCls = getPrefixCls('textarea')

const props = withDefaults(
  defineProps<{
    type?: string
    modelValue?: string | number
    size?: 'small' | 'medium' | 'large'
    clearable?: boolean
    disabled?: boolean
  }>(),
  {
    type: 'text',
    size: 'medium',
    clearable: false,
    disabled: false
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'input', value: string): void
  (e: 'change', value: string): void
  (e: 'focus', value: Event): void
  (e: 'blur', value: Event): void
}>()

const classNames = computed(() =>
  props.type !== 'textarea' ? [inputPrefixCls, `${inputPrefixCls}-${props.size}`] : textareaPrefixCls
)

const wrapperClassNames = computed(() => [
  `${inputPrefixCls}-wrapper`,
  {
    [`${inputPrefixCls}-wrapper-focus`]: focused.value,
    [`${inputPrefixCls}-wrapper-disabled`]: itemDisabled.value
  }
])

const { form, formItem } = useFormItem()

const itemDisabled = computed(() => {
  let state = props.disabled
  if (!state && form) {
    state = form.disabled.value
  }

  return !!state
})

const focused = ref(false)
const showPwd = ref(false)

const currentType = computed(() => {
  let type = props.type
  if (type === 'password' && showPwd.value) {
    type = 'text'
  }
  return type
})

const currentValue = ref(props.modelValue)

const setCurrentValue = value => {
  if (value === currentValue.value) return
  currentValue.value = value
  formItem?.validate('change')
}

const toogleShowPwd = () => {
  showPwd.value = !showPwd.value
}

const handleClear = () => {
  emit('update:modelValue', '')
  emit('input', '')
  setCurrentValue('')
}

const handleInput = async (event: Event) => {
  const { value } = event.target as TargetElement
  emit('update:modelValue', value)
  emit('input', value)
  setCurrentValue(value)
}

const handleChange = (event: Event) => {
  emit('change', (event.target as TargetElement).value)
}

const handleFocus = (event: Event) => {
  focused.value = true
  emit('focus', event)
}

const handleBlur = (event: Event) => {
  focused.value = false
  emit('blur', event)
  formItem?.validate('blur')
}

watch(
  () => props.modelValue,
  newValue => {
    setCurrentValue(newValue)
  }
)
</script>
