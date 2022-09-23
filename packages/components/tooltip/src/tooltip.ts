import { UPDATE_MODEL_EVENT } from '@shuo-ui/constants'
import { definePropType, isBoolean } from '@shuo-ui/utils'

export const TooltipPlacement = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end'
] as const

export const tooltipProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  content: {
    type: [String, Number],
    default: ''
  },
  placement: {
    type: definePropType<typeof TooltipPlacement[number]>(String),
    validator: value => TooltipPlacement.includes(value),
    default: 'top'
  }
}

export const tooltipEmits = {
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value)
}
