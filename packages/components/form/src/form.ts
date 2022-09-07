import { definePropType } from '@shuo-ui/utils'
import { FormRules } from './types'

export const FormLabelPosition = ['top', 'left', 'right'] as const

export const formProps = {
  model: Object,
  rules: {
    type: definePropType<FormRules>(Object)
  },
  labelWidth: {
    type: [String, Number],
    default: ''
  },
  labelPosition: {
    type: definePropType<typeof FormLabelPosition[number]>(String),
    default: 'right',
    validator: value => FormLabelPosition.includes(value)
  },
  inline: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
}
