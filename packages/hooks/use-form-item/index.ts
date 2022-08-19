import { inject } from 'vue'
import { formContextKey, formItemContextKey } from '@shuo-ui/constants'

export const useFormItem = () => {
  const form = inject(formContextKey, undefined)
  const formItem = inject(formItemContextKey, undefined)
  return {
    form,
    formItem
  }
}
