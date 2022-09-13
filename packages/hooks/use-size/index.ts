import { computed } from 'vue'
import { useProp, useFormItem } from '@shuo-ui/hooks'
import type { ComponentSize } from '@shuo-ui/constants'

export const useSize = () => {
  const size = useProp<ComponentSize>('size')
  const { form, formItem } = useFormItem()

  return computed<ComponentSize>(() => size.value || formItem?.size.value || form?.size.value || 'default')
}
