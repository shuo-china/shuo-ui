<template>
  <div>
    form-item
    <slot></slot>
    <p>{{ errMsg }}</p>
  </div>
</template>

<script setup lang="ts" name="SFormItem">
import { provide, ref } from 'vue'
import { formItemContextKey } from '@shuo-ui/constants'
import Schema from 'async-validator'

const props = defineProps<{
  prop: string
  rules: any
}>()

const errMsg = ref('')

const getRules = () => {
  return props.rules
}

const validate = (value: string | number, trigger: 'change' | 'blur') => {
  const rules = getRules()
  const validator = new Schema({ [props.prop]: rules })
  validator.validate({ [props.prop]: value }, (errors, fields) => {
    if (errors) {
      // validation failed, errors is an array of all errors
      // fields is an object keyed by field name with an array of
      // errors per field
      errMsg.value = errors[0].message as string
      return false
    }
    errMsg.value = ''
    return true
    // validation passed
  })
}

const onFieldChange = value => {
  validate(value, 'change')
}

const onFieldBlur = value => {
  // console.log('form-item-blur', value)
}

provide(formItemContextKey, {
  onFieldChange,
  onFieldBlur
})
</script>

<style lang="scss" scoped></style>
