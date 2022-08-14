<template>
  <div :class="itemClassNames">
    <label v-if="label || slots.label" :style="labelStyles" :class="labelClassNames">
      <slot name="label">{{ label }}</slot>
    </label>
    <div class="s-form-item-content" :style="contentStyles">
      <slot></slot>
      <transition name="error-fade">
        <div v-if="validateState === 'error'" class="s-form-item-content-error">{{ validateMessage }}</div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts" name="SFormItem">
import { computed, inject, nextTick, onBeforeUnmount, onMounted, provide, ref, toRefs, useSlots } from 'vue'
import { castArray, get, set, clone, isEqual } from 'lodash'
import Schema from 'async-validator'
import { addUnit, isArray, isString, isUndefined } from '@shuo-ui/utils'
import { formContextKey, formItemContextKey } from '@shuo-ui/constants'
import type { PropType, CSSProperties } from 'vue'
import type { RuleItem } from 'async-validator'
import type { FormItemContext, FormItemRule, FormItemProp } from '@shuo-ui/constants'
import type { Arrayable } from '@shuo-ui/utils/typescript'

const props = defineProps({
  label: String,
  labelWidth: [Number, String],
  prop: {
    type: [String, Array] as PropType<FormItemProp>
  },
  rules: {
    type: [Object, Array] as PropType<Arrayable<FormItemRule>>
  },
  required: {
    type: Boolean,
    default: undefined
  }
})

const slots = useSlots()

let initialValues = undefined

const validateState = ref<'' | 'error' | 'validating' | 'success'>('')
const validateMessage = ref('')

const formContext = inject(formContextKey, undefined)

const labelStyles = computed<CSSProperties>(() => {
  if (formContext?.labelPosition.value === 'top') {
    return {}
  }
  const labelWidth = addUnit(props.labelWidth || formContext?.labelWidth.value || '')
  if (labelWidth) {
    return {
      width: labelWidth
    }
  }
  return {}
})

const contentStyles = computed<CSSProperties>(() => {
  if (formContext?.labelPosition.value === 'top') {
    return {}
  }
  const labelWidth = addUnit(props.labelWidth || formContext?.labelWidth.value || '')
  if (labelWidth) {
    return {
      marginLeft: labelWidth
    }
  }
  return {}
})

const itemClassNames = computed(() => [
  's-form-item',
  {
    's-form-item-inline': formContext?.inline.value
  }
])

const labelClassNames = computed(() => [
  's-form-item-label',
  `s-form-item-label-${formContext?.labelPosition.value}`,
  {
    's-form-item-label-required': isRequired.value
  }
])

const propString = computed(() => {
  if (!props.prop) return ''
  return isString(props.prop) ? props.prop : props.prop.join('.')
})

const fieldValue = computed(() => {
  const model = formContext?.model.value
  if (!model || !props.prop) {
    return
  }
  return get(model, props.prop)
})

// props.rules + FormContext.rules + required rules
const allRules = computed(() => {
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

const isRequired = computed(() => allRules.value.some(rule => rule.required === true))

const getFilteredRules: (trigger: string) => RuleItem[] = trigger => {
  const rules = allRules.value

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

const validate: FormItemContext['validate'] = (trigger, callback) => {
  const rules = getFilteredRules(trigger)
  if (rules.length === 0) {
    callback?.(true)
    return
  }

  validateState.value = 'validating'

  const modelName = propString.value
  const validator = new Schema({
    [modelName]: rules
  })

  return validator.validate({ [modelName]: fieldValue.value }, { firstFields: true }, (errors, fields) => {
    if (errors) {
      validateState.value = 'error'
      validateMessage.value = errors[0].message as string
      callback?.(false, fields)
    } else {
      validateState.value = 'success'
      validateMessage.value = ''
      callback?.(true)
    }
  })
}

const resetField: FormItemContext['resetField'] = async () => {
  const model = formContext?.model.value
  if (!model || !props.prop) return
  const fieldValue = get(model, props.prop)

  if (!isEqual(fieldValue, initialValues)) {
    set(model, props.prop, clone(initialValues))
  }

  await nextTick()
  validateState.value = ''
  validateMessage.value = ''
}

onMounted(() => {
  if (props.prop) {
    formContext?.addField(context)
    initialValues = clone(fieldValue.value)
  }
})

onBeforeUnmount(() => {
  formContext?.removeField(context)
})

const context: FormItemContext = {
  ...toRefs(props),
  validate,
  resetField
} as FormItemContext

provide(formItemContextKey, context)
</script>

<style lang="scss" scoped>
.s-form-item {
  margin-bottom: 24px;
  vertical-align: top;

  &-label {
    float: left;
    box-sizing: border-box;
    padding: 10px 12px 10px 0;
    color: get-css-var('text-color');
    font-size: get-css-var('font-size');
    line-height: 1;

    &-left {
      text-align: left;
    }

    &-right {
      text-align: right;
    }

    &-top {
      display: block;
      float: none;
      padding: 0 0 10px;
    }

    &-required {
      &::before {
        display: inline-block;
        margin-right: 4px;
        color: get-css-var('color', 'error');
        line-height: 1;
        content: '*';
      }
    }
  }

  &-content {
    position: relative;
    font-size: get-css-var('font-size');
    line-height: 34px;

    &-error {
      position: absolute;
      top: 100%;
      left: 0;
      padding: 4px 0 0 2px;
      color: get-css-var('color', 'error');
      font-size: get-css-var('font-size');
      line-height: 1;
    }
  }

  &-inline {
    display: inline-block;
    margin-right: 16px;
  }
}

.error-fade-enter-from,
.error-fade-leave-to {
  transform: translateY(-4px);
  opacity: 0;
}

.error-fade-enter-active,
.error-fade-leave-active {
  transition: all 0.3s ease;
}
</style>
