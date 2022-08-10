<template>
  <transition name="message-fade">
    <div v-show="visible" class="message-wrapper">
      <div class="message-notice">
        <div :class="iconClassNames"><s-icon :name="iconTypes[type]" :spin="props.type === 'loading'" /></div>
        <div class="message-notice-content">{{ content }}</div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import type { MessageType } from './index'
import { SIcon } from '@shuo-ui/components'
import { ref, onMounted, computed } from 'vue'
const iconTypes = {
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

const iconClassNames = computed(() => ['message-notice-icon', `message-notice-icon--${props.type}`])

onMounted(() => {
  if (props.duration !== 0) {
    setTimeout(() => {
      setVisible(false)
    }, props.duration)
  }
})

const visible = ref(false)

const setVisible = (isVisible: boolean) => {
  visible.value = isVisible
}

defineExpose({
  visible,
  setVisible
})
</script>

<style scoped lang="scss">
.message-wrapper {
  margin-bottom: 16px;
  text-align: center;

  .message-notice {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    color: get-css-var('text-color');
    background-color: get-css-var('color', 'white');
    border-radius: get-css-var('border-radius');
    box-shadow: get-css-var('shadow');

    &-icon {
      margin-right: 8px;

      :deep([class*='s-icon-']) {
        font-size: 20px;
      }

      &--loading,
      &--info {
        color: get-css-var('color', 'primary');
      }

      &--success {
        color: get-css-var('color', 'success');
      }

      &--warning {
        color: get-css-var('color', 'warning');
      }

      &--error {
        color: get-css-var('color', 'error');
      }
    }

    &-content {
      max-width: 720px;
      overflow: hidden;
      font-size: get-css-var('font-size');
      line-height: 1.6;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}

.message-fade-enter-from,
.message-fade-leave-to {
  transform: translateY(-16px);
  opacity: 0;
}

.message-fade-enter-active,
.message-fade-leave-active {
  transition: all 0.25s ease;
}
</style>
