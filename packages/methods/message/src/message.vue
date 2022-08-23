<template>
  <transition name="move-down">
    <div v-show="visible" :class="[prefixCls + '-notice']">
      <div :class="[prefixCls + '-content']">
        <div :class="iconClassNames">
          <s-icon :name="iconTypes[type]" :size="20" :spin="props.type === 'loading'" />
        </div>
        <div :class="[prefixCls + '-text']">{{ content }}</div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { SIcon } from '@shuo-ui/components'
import { ref, onMounted, computed } from 'vue'
import { getPrefixCls } from '@shuo-ui/utils'
import type { MessageType } from './types'

const prefixCls = getPrefixCls('message')

const iconTypes: Record<MessageType, string> = {
  info: 'info-circle-fill',
  success: 'check-circle-fill',
  warning: 'warning-circle-fill',
  error: 'close-circle-fill',
  loading: 'loading'
}

const props = withDefaults(
  defineProps<{
    type?: MessageType
    duration?: number
    content: string
  }>(),
  {
    type: 'info',
    duration: 3000,
    content: ''
  }
)

const iconClassNames = computed(() => [`${prefixCls}-icon`, `${prefixCls}-icon-${props.type}`])

const visible = ref(false)

const setVisible = (isVisible: boolean) => {
  visible.value = isVisible
}

onMounted(() => {
  if (props.duration !== 0) {
    setTimeout(() => {
      setVisible(false)
    }, props.duration)
  }
})

defineExpose({
  visible,
  setVisible
})
</script>
