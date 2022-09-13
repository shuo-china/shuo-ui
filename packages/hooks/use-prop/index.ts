import { computed, getCurrentInstance } from 'vue'
import type { ComputedRef } from 'vue'

export const useProp = <T>(name: string): ComputedRef<T | undefined> => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const vm = getCurrentInstance()!

  return computed(() => vm.proxy?.$props[name] ?? undefined)
}
