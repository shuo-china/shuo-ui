import { UPDATE_MODEL_EVENT } from '@shuo-ui/constants'
import { definePropType, isBoolean } from '@shuo-ui/utils'
import { placements } from '@popperjs/core'
import type { Placement } from '@popperjs/core'

export const TooltipPlacement = placements

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
    type: definePropType<Placement>(String),
    validator: value => TooltipPlacement.includes(value),
    default: 'top'
  }
}

export const tooltipEmits = {
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value)
}
