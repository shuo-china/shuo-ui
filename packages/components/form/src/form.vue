<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts" name="SForm">
import { provide, toRef } from 'vue'
import { castArray } from 'lodash'
import { formContextKey } from '@shuo-ui/constants'
import type { PropType } from 'vue'
import type { ValidateFieldsError } from 'async-validator'
import type { FormRules, FormContext, FormItemContext, FormValidateCallback } from '@shuo-ui/constants'

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

const getFilteredFields = (props: string | string[]): FormItemContext[] => {
  if (fields.length === 0) return []
  const normalized = castArray(props)

  return normalized.length ? fields.filter(field => field.prop.value && normalized.includes(field.prop.value)) : fields
}

const doValidateField = async (props: string | string[]): Promise<true> => {
  const fields = getFilteredFields(props)

  if (fields.length === 0) return true

  let validationErrors: ValidateFieldsError = {}

  for (const field of fields) {
    try {
      await field.validate('')
    } catch (fields) {
      validationErrors = {
        ...validationErrors,
        ...(fields as ValidateFieldsError)
      }
    }
  }

  if (Object.keys(validationErrors).length === 0) return true
  return Promise.reject(validationErrors)
}

const validateField: (props?: string | string[], callback?: FormValidateCallback) => Promise<true> = async (
  props = [],
  callback
) => {
  try {
    await doValidateField(props)
    callback?.(true)
    return true
  } catch (err: ValidateFieldsError) {
    callback?.(false, err)
    return Promise.reject(err)
  }
}

provide(formContextKey, {
  model: toRef(props, 'model'),
  rules: toRef(props, 'rules'),
  addField,
  removeField
})

defineExpose({
  validateField
})
</script>
