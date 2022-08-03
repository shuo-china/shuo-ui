<template>
  <transition name="s-message-fade">
    <div v-show="visible" :class="classNames">
      <div></div>
      <div class="s-message__content">{{ content }}</div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import type { MessageType } from './index'
import { ref, computed, onMounted } from 'vue'

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

onMounted(() => {
  if (props.duration !== 0) {
    setTimeout(() => {
      setVisible(false)
    }, props.duration)
  }
})

const classNames = computed(() => ['s-message', `s-message--${props.type}`])

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
.s-message {
  display: flex;
  align-items: center;
  height: 35px;
  margin-top: 16px;
  padding: 0 24px;
  font-size: 14px;
  background-color: rgb(255 255 255 / 90%);
  border-radius: 4px;
  box-shadow: 0 2px 4px rgb(0 0 0 / 20%);

  &--info {
    color: $info-color-dark;
  }

  &--success {
    color: $success-color-dark;
  }

  &--warning {
    color: $warning-color-dark;
  }

  &--error {
    color: $error-color-dark;
  }

  &__content {
    max-width: 500px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.s-message-fade-enter-from,
.s-message-fade-leave-to {
  transform: translateY(-16px);
  opacity: 0;
}

.s-message-fade-enter-active,
.s-message-fade-leave-active {
  transition: all 0.25s ease;
}
</style>
