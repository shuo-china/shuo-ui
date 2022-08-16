<template>
  <form :class="classNames" autocomplete="off">
    <slot></slot>
  </form>
</template>

<script setup lang="ts" name="SForm">
import { computed, provide, toRefs } from 'vue'
import { castArray, isEqual } from 'lodash'
import { getPrefixCls } from '@shuo-ui/utils'
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

const prefixCls = getPrefixCls('form')

const props = defineProps({
  model: Object,
  rules: {
    type: Object as PropType<FormRules>
  },
  labelWidth: [Number, String],
  labelPosition: {
    type: String,
    default: 'right',
    validator: (value: string) => {
      return ['top', 'left', 'right'].includes(value)
    }
  },
  inline: {
    type: Boolean,
    default: false
  }
})

const classNames = computed(() => [
  prefixCls,
  `${prefixCls}-label-${props.labelPosition}`,
  {
    [`${prefixCls}-inline`]: props.inline
  }
])

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
  return propsArr.length
    ? fields.filter(field => field.prop.value && propsArr.some(prop => isEqual(field.prop.value, prop)))
    : fields
}

// 验证具体的某些字段
const validateField: (props: FormItemProp, callback?: FormValidateCallback) => Promise<void> = (
  props = [],
  callback
) => {
  return new Promise((resolve, reject) => {
    let valid = true
    let count = 0
    let validationErrors: ValidateFieldsError = {}

    const fields = getFieldsByProps(props)
    if (fields.length === 0) {
      callback?.(valid)
      resolve()
    }

    fields.forEach(field => {
      field.validate('', (isValid, invalidFields) => {
        if (!isValid) {
          validationErrors = {
            ...validationErrors,
            ...invalidFields
          }
          valid = false
        }

        if (++count === fields.length) {
          if (valid) {
            callback?.(true)
            resolve()
          } else {
            callback?.(false, validationErrors)
            reject(validationErrors)
          }
        }
      })
    })
  })
}

const validate = async (callback?: FormValidateCallback): FormValidationResult => validateField([], callback)

const resetFields = (properties: FormItemProp = []) => {
  if (!props.model) {
    return
  }

  const fields = getFieldsByProps(properties)
  fields.forEach(field => field.resetField())
}

const context: FormContext = {
  ...toRefs(props),
  addField,
  removeField
} as FormContext

provide(formContextKey, context)

defineExpose({
  validate,
  validateField,
  resetFields
})
</script>
