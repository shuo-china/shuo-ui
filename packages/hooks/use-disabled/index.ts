import { computed } from 'vue'
import { useProp, useFormItem } from '@shuo-ui/hooks'

export const useDisabled = () => {
  const disabled = useProp<boolean>('disabled')
  const { form } = useFormItem()

  return computed(() => !!disabled.value || !!form?.disabled.value || false)
}
