<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="SForm">
import { provide, toRef } from 'vue'
import { castArray } from 'lodash'
import { isEmpty } from '@shuo-ui/utils/types'
import { formContextKey } from '@shuo-ui/constants'
import type { PropType } from 'vue'
import type { ValidateFieldsError } from 'async-validator'
import type {
  FormRules,
  FormContext,
  FormItemContext,
  FormValidateCallback,
  FormValidationResult,
  FormItemProp
} from '@shuo-ui/constants'

const props = defineProps({
  model: Object,
  rules: {
    type: Object as PropType<FormRules>
  }
})

const fields: FormItemContext[] = []

const addField: FormContext['addField'] = field => {
  fields.push(field)
}

const removeField: FormContext['removeField'] = field => {
  const findIndex = fields.indexOf(field)
  if (findIndex !== -1) {
    fields.splice(findIndex, 1)
  }
}

/**
 * 根据prop获取对应fields
 * @param props - 为空数组时，获取全部fields
 */
const getFieldsByProps = (props: FormItemProp): FormItemContext[] => {
  if (fields.length === 0) return []
  const propsArr = castArray(props)
  return propsArr.length ? fields.filter(field => field.prop.value && propsArr.includes(field.prop.value)) : fields
}

// 验证具体字段的实现逻辑
const handleValidateField = async (props: FormItemProp): Promise<true> => {
  const fields = getFieldsByProps(props)

  if (fields.length === 0) return true

  let validationErrors: ValidateFieldsError = {}

  for (const field of fields) {
    const result = await field.validate('')
    if (!result.valid) {
      validationErrors = {
        ...validationErrors,
        ...result.fields
      }
    }
  }

  if (isEmpty(validationErrors)) return true
  return Promise.reject(validationErrors)
}

// 验证具体的某些字段
const validateField: (props?: FormItemProp, callback?: FormValidateCallback) => Promise<true> = async (
  props = [],
  callback
) => {
  return handleValidateField(props)
    .then(() => {
      callback?.(true)
      return true as const
    })
    .catch(err => {
      callback?.(false, err)
      return Promise.reject(err)
    })
}

const validate = async (callback?: FormValidateCallback): FormValidationResult => validateField(undefined, callback)

provide(formContextKey, {
  model: toRef(props, 'model'),
  rules: toRef(props, 'rules'),
  addField,
  removeField
})

defineExpose({
  validate,
  validateField
})
</script>
