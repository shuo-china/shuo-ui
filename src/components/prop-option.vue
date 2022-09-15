<template>
  <div class="m-b-22">
    <s-radio-group v-model="currentValue">
      <s-radio-button v-for="(item, key) in options" :key="key" :label="item.value">{{ item.label }}</s-radio-button>
    </s-radio-group>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    modelValue: string
    options?: Record<'label' | 'value', any>[]
  }>(),
  {
    options: () => [
      {
        label: '小',
        value: 'small'
      },
      {
        label: '中',
        value: 'default'
      },
      {
        label: '大',
        value: 'large'
      }
    ]
  }
)

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const currentValue = computed({
  get: () => props.modelValue,
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<style lang="scss" scoped>
:deep(.s-radio-button-inner) {
  height: 30px;
  line-height: 30px;
}
</style>
