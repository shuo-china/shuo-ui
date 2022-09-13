<template>
  <div>
    <input v-model="currentValue" type="radio" :value="label" @change="handleChange" />
  </div>
</template>

<script setup lang="ts" name="SRadio">
import { ref, watch } from 'vue'
import { radioProps, radioEmits } from './radio'
import { UPDATE_MODEL_EVENT } from '@shuo-ui/constants'

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const handleChange = (event: Event) => {
  const { value } = event.target as HTMLInputElement

  emit(UPDATE_MODEL_EVENT, value)
}

const currentValue = ref(props.modelValue)

const setCurrentValue = value => {
  currentValue.value = value
}

watch(
  () => props.modelValue,
  newValue => {
    setCurrentValue(newValue)
  }
)
</script>
