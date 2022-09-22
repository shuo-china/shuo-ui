import { UPDATE_MODEL_EVENT } from '@shuo-ui/constants'
import { isBoolean } from '@shuo-ui/utils'

export const tooltipProps = {
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
  [UPDATE_MODEL_EVENT]: (value: boolean) => isBoolean(value)
}
