import { UPDATE_MODEL_EVENT } from '@shuo-ui/constants'
import { isBoolean } from '@shuo-ui/utils'
import { placements } from '@popperjs/core'
import { popperProps, popperEmits } from '@shuo-ui/hooks'

export const TooltipPlacement = placements

export const tooltipProps = {
  ...popperProps,
  modelValue: {
    type: Boolean,
    default: false
  },
  content: {
    type: [String, Number],
    default: ''
  }
}

export const tooltipEmits = {
  ...popperEmits,
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value)
}
