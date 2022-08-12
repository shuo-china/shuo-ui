<template>
  <div>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <p>{{ validateMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts" name="SFormItem">
import { computed, inject, onBeforeUnmount, onMounted, provide, ref, toRef } from 'vue'
import { castArray } from 'lodash'
import Schema from 'async-validator'
import { isArray, isUndefined } from '@shuo-ui/utils/types'
import { formContextKey, formItemContextKey } from '@shuo-ui/constants'
import type { PropType } from 'vue'
import type { RuleItem } from 'async-validator'
import type { FormItemContext, FormItemRule } from '@shuo-ui/constants'

const props = defineProps({
  label: String,
  prop: String,
  rules: {
    type: [Object, Array] as PropType<FormItemRule | FormItemRule[]>
  },
  required: {
    type: Boolean,
    default: undefined
  }
})

const validateMessage = ref('')
const validateState = ref<'' | 'error' | 'validating' | 'success'>('')

const formContext = inject(formContextKey, undefined)

const fieldValue = computed(() => {
  const model = formContext?.model.value
  if (!model || !props.prop) {
    return
  }
  return model[props.prop]
})

const _rules = computed(() => {
  const rules: FormItemRule[] = props.rules ? castArray(props.rules) : []

  const formRules = formContext?.rules.value
  if (formRules && props.prop) {
    const _rules = formRules[props.prop]
    if (_rules) {
      rules.push(...castArray(_rules))
    }
  }

  if (!isUndefined(props.required)) {
    rules.push({ required: !!props.required })
  }

  return rules
})

const getFilteredRule = (trigger: string): RuleItem[] => {
  const rules = _rules.value

  return (
    rules
      .filter(rule => {
        if (!rule.trigger || !trigger) return true
        if (isArray(rule.trigger)) {
          return rule.trigger.includes(trigger)
        } else {
          return rule.trigger === trigger
        }
      })
      // eslint-disable-next-line
      .map(({ trigger, ...rule }) => rule)
  )
}

const doValidate = async (rules: RuleItem[]): Promise<true> => {
  // TODO: prop为空时，不应该去验证
  const modelName = props.prop ? props.prop : ''
  const validator = new Schema({
    [modelName]: rules
  })
  return validator
    .validate({ [modelName]: fieldValue.value }, { firstFields: true })
    .then(() => {
      validateMessage.value = ''
      validateState.value = 'success'
      return true as const
    })
    .catch(err => {
      const { errors } = err
      validateState.value = 'error'
      validateMessage.value = errors ? errors?.[0]?.message : ''
      return Promise.reject(err)
    })
}

const validate: FormItemContext['validate'] = async (trigger, callback) => {
  const rules = getFilteredRule(trigger)
  if (rules.length === 0) {
    callback?.(true)
    return true
  }

  validateState.value = 'validating'

  return doValidate(rules)
    .then(() => {
      callback?.(true)
      return true as const
    })
    .catch(err => {
      const { fields } = err
      callback?.(false, fields)
      return Promise.reject(fields)
    })
}

const context: FormItemContext = {
  prop: toRef(props, 'prop'),
  validate
}

provide(formItemContextKey, context)

onMounted(() => {
  if (props.prop) {
    formContext?.addField(context)
  }
})

onBeforeUnmount(() => {
  formContext?.removeField(context)
})
</script>
