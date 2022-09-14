import { computed, unref } from 'vue'
import { useProp, useFormItem } from '@shuo-ui/hooks'
import type { ComponentSize } from '@shuo-ui/constants'
import type { Ref } from 'vue'

export const useSize = (fallback?: Ref<ComponentSize | undefined> | ComponentSize) => {
  const size = useProp<ComponentSize>('size')
  const { form, formItem } = useFormItem()

  return computed<ComponentSize>(
    () => size.value || unref(fallback) || formItem?.size?.value || form?.size?.value || 'default'
  )
}
