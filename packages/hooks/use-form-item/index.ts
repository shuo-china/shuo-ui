import { inject } from 'vue'
import { formItemContextKey } from '@shuo-ui/constants'

export const useFormItem = () => {
  const formItem = inject(formItemContextKey, undefined)
  return {
    formItem
  }
}
