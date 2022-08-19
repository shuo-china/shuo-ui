<template>
  <div :class="wrapClasses">
    <template v-if="type !== 'textarea'">
      <!-- clearable -->
      <s-icon
        v-if="clearable && currentValue && !itemDisabled"
        name="close-circle-fill"
        :class="[prefixCls + '-icon', prefixCls + '-icon-clear']"
        @click="handleClear"
      />
      <input
        v-bind="$attrs"
        :class="inputClassNames"
        :type="type"
        :value="currentValue"
        :disabled="itemDisabled"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
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

const prefixCls = getPrefixCls('input')

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

const wrapClasses = computed(() => [`${prefixCls}-wrapper`, `${prefixCls}-wrapper-${props.size}`])

const inputClassNames = computed(() => [prefixCls])

const { form, formItem } = useFormItem()

const itemDisabled = computed(() => {
  let state = props.disabled
  if (!state && form) {
    state = form.disabled.value
  }
  return !!state
})

const currentValue = ref(props.modelValue)

const setCurrentValue = value => {
  if (value === currentValue.value) return
  currentValue.value = value
  formItem?.validate('change')
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

const handleClear = () => {
  emit('update:modelValue', '')
  emit('input', '')
  setCurrentValue('')
}

const handleFocus = (event: Event) => {
  emit('focus', event)
}

const handleBlur = (event: Event) => {
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
