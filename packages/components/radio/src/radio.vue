<template>
  <label>
    <span>
      <!-- 单选框 -->
      <span></span>
      <!-- 隐藏输入框 -->
      <input v-model="currentValue" type="radio" :value="label" />
    </span>
    <span>
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>

<script setup lang="ts" name="SRadio">
import { computed } from 'vue'
import { radioProps, radioEmits } from './radio'
import { UPDATE_MODEL_EVENT } from '@shuo-ui/constants'

const props = defineProps(radioProps)
const emit = defineEmits(radioEmits)

const currentValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit(UPDATE_MODEL_EVENT, value)
  }
})
</script>
