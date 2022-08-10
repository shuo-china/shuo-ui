<template>
  <i :class="classNames" :style="styles"></i>
</template>

<script setup lang="ts" name="SIcon">
import type { CSSProperties } from 'vue'
import { addUnit, isUndefined } from '@shuo-ui/utils'
import { computed } from 'vue'

const props = defineProps<{
  name: string
  size?: number | string
  color?: string
  spin?: boolean
}>()

const classNames = computed(() => ['s-icon', `s-icon-${props.name}`, { spin: !!props.spin }])

const styles = computed<CSSProperties>(() => ({
  fontSize: isUndefined(props.size) ? undefined : addUnit(props.size),
  color: props.color
}))
</script>

<style lang="scss" scoped>
.s-icon {
  display: inline-block;
  line-height: 1;
}

.spin {
  animation: spin 1s infinite linear;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
