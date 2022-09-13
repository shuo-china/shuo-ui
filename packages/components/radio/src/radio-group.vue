<template>
  <div>radio-group</div>
</template>

<script setup lang="ts" name="SRadioGroup">
import { provide, toRefs } from 'vue'
import { radioGroupContextKey } from './context'
import { radioGroupProps } from './radio-group'
import type { RadioGroupContext } from './types'

const props = defineProps(radioGroupProps)

const context: RadioGroupContext = {
  ...toRefs(props)
}

provide(radioGroupContextKey, context)
</script>
