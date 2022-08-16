<template>
  <div>
    <template v-if="type !== 'textarea'">
      <input
        :class="inputClassNames"
        :type="type"
        :value="currentValue"
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

<script setup lang="ts" name="SInput">
import { ref, watch, computed } from 'vue'
import { useFormItem } from '@shuo-ui/hooks'
import { getPrefixCls } from '@shuo-ui/utils'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

const prefixCls = getPrefixCls('input')

const props = withDefaults(
  defineProps<{
    type?: string
    modelValue?: string | number
  }>(),
  {
    type: 'text',
    modelValue: ''
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'input', value: string): void
  (e: 'change', value: string): void
  (e: 'focus', value: Event): void
  (e: 'blur', value: Event): void
}>()

const inputClassNames = computed(() => [prefixCls])

const { formItem } = useFormItem()

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
