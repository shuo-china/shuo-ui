import { computed, unref } from 'vue'
import { useProp, useFormItem } from '@shuo-ui/hooks'
import type { Ref } from 'vue'

export const useDisabled = (fallback?: Ref<boolean | undefined> | boolean) => {
  const disabled = useProp<boolean>('disabled')
  const { form } = useFormItem()

  return computed(() => disabled.value || unref(fallback) || form?.disabled.value || false)
}
