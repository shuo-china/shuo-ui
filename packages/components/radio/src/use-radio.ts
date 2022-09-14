import { computed, inject, ref } from 'vue'
import { radioGroupContextKey } from './context'
import { CHANGE_EVENT, UPDATE_MODEL_EVENT } from '@shuo-ui/constants'
import { useDisabled, useSize, useFormItem } from '@shuo-ui/hooks'
import type { RadioEmits, RadioProps } from './types'
export default (props: RadioProps, emit: RadioEmits) => {
  const { formItem } = useFormItem()

  const radioGroup = inject(radioGroupContextKey, undefined)

  const isGroup = computed(() => !!radioGroup)

  const isChecked = computed(() => currentValue.value === props.label)

  const currentValue = computed({
    get() {
      return isGroup.value ? radioGroup?.modelValue.value : props.modelValue
    },
    set(value) {
      value = value || ''
      if (isGroup.value) {
        radioGroup?.changeEvent(value)
      } else {
        emit(UPDATE_MODEL_EVENT, value)
        emit(CHANGE_EVENT, value)
      }
      formItem?.validate(CHANGE_EVENT)
    }
  })

  const disabled = useDisabled(computed(() => radioGroup?.disabled?.value))
  const size = useSize(computed(() => radioGroup?.size?.value))

  const focused = ref(false)

  return {
    isGroup,
    isChecked,
    currentValue,
    disabled,
    size,
    focused
  }
}
