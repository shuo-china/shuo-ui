<template>
  <div class="s-input-wrapper">
    <template v-if="type !== 'textarea'">
      <div>
        <input
          :type="type"
          :value="currentValue"
          @input="handleInput"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
      </div>
    </template>
    <template v-else>
      <textarea></textarea>
    </template>
  </div>
</template>

<script setup lang="ts" name="SInput">
import { ref, watch } from 'vue'
import { useFormItem } from '@shuo-ui/hooks'

type TargetElement = HTMLInputElement | HTMLTextAreaElement

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

<style lang="scss" scoped>
.s-input-wrapper {
  border: 1px solid pink;
}
</style>
