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
import { castArray, get } from 'lodash'
import Schema from 'async-validator'
import { isArray, isString, isUndefined } from '@shuo-ui/utils/types'
import { formContextKey, formItemContextKey } from '@shuo-ui/constants'
import type { PropType } from 'vue'
import type { RuleItem } from 'async-validator'
import type { FormItemContext, FormItemRule, FormItemProp } from '@shuo-ui/constants'

const props = defineProps({
  label: String,
  prop: {
    type: [String, Array] as PropType<FormItemProp>
  },
  rules: {
    type: [Object, Array] as PropType<FormItemRule | FormItemRule[]>
  },
  required: {
    type: Boolean,
    default: undefined
  }
})

const validateMessage = ref('')

const formContext = inject(formContextKey, undefined)

// ['a', 'b', 'c'] => 'a.b.c'
const propString = computed(() => {
  if (!props.prop) return ''
  return isString(props.prop) ? props.prop : props.prop.join('.')
})

// 当前字段的值
const fieldValue = computed(() => {
  const model = formContext?.model.value
  if (!model || !props.prop) {
    return
  }
  return get(model, props.prop)
})

// props.rules + FormContext.rules + required生成的规则
const _rules = computed(() => {
  const rules: FormItemRule[] = props.rules ? castArray(props.rules) : []

  const formRules = formContext?.rules.value
  if (formRules && props.prop) {
    const _rules = get(formRules, props.prop)
    if (_rules) {
      rules.push(...castArray(_rules))
    }
  }

  if (!isUndefined(props.required)) {
    rules.push({ required: !!props.required })
  }

  return rules
})

// 根据触发条件获取规则(去除trigger属性)
const getRulesByTrigger = (trigger: string): RuleItem[] => {
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

// 处理验证逻辑
const handleValidate = async (rules: RuleItem[]): Promise<true> => {
  const modelName = propString.value
  const validator = new Schema({
    [modelName]: rules
  })
  return validator
    .validate({ [modelName]: fieldValue.value }, { firstFields: true })
    .then(() => {
      validateMessage.value = ''
      return true as const
    })
    .catch(err => {
      const { errors } = err
      validateMessage.value = errors ? errors?.[0]?.message : ''
      return Promise.reject(err)
    })
}

/**
 * 验证
 * @param trigger - 为空字符串时，触发全部规则
 */
const validate: FormItemContext['validate'] = async (trigger, callback) => {
  const rules = getRulesByTrigger(trigger)
  if (rules.length === 0) {
    callback?.(true)
    return {
      valid: true
    }
  }

  return handleValidate(rules)
    .then(() => {
      callback?.(true)
      return {
        valid: true
      }
    })
    .catch(err => {
      const { fields } = err
      callback?.(false, fields)
      return {
        valid: false,
        fields
      }
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
