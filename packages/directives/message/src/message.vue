<template>
  <transition name="s-message-fade">
    <div v-show="visible" :class="classNames">{{ content }}</div>
  </transition>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const props = withDefaults(
  defineProps<{
    type?: 'primary' | 'info' | 'success' | 'warning' | 'error'
    duration?: number
    content: string
  }>(),
  {
    type: 'primary',
    duration: 3000,
    content: ''
  }
)

onMounted(() => {
  setTimeout(() => {
    setVisible(false)
  }, props.duration)
})

const classNames = computed(() => ['s-message', `s-message-${props.type}`])

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
  &-primary {
    background-color: skyblue;
  }

  &-success {
    background-color: green;
  }
}

.s-message-fade-enter-from,
.s-message-fade-leave-to {
  opacity: 0;
}

.s-message-fade-enter-active,
.s-message-fade-leave-active {
  transition: opacity 0.25s ease;
}
</style>
