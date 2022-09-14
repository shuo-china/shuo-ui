import { radioGroupProps } from './radio-group'
import { radioProps, radioEmits } from './radio'
import type { ExtractPropTypes, SetupContext, ToRefs } from 'vue'

export interface RadioGroupContext extends ToRefs<RadioGroupProps> {
  changeEvent: (value: RadioGroupProps['modelValue']) => void
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export type RadioProps = ExtractPropTypes<typeof radioProps>

export type RadioEmits = SetupContext<typeof radioEmits>['emit']
