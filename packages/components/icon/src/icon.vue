<template>
  <i :class="classNames"></i>
</template>

<script setup lang="ts" name="SIcon">
import { computed } from 'vue'

const props = defineProps<{
  name: string
}>()

const classNames = computed(() => [`s-icon-${props.name}`])
</script>

<style lang="scss" scoped></style>
