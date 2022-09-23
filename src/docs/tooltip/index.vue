<template>
  <div class="container">
    <prop-option v-model="placement" :options="options" />
    <s-tooltip content="悬" :placement="placement">
      <div class="box">box</div>
    </s-tooltip>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { TooltipPlacement } from '@shuo-ui/components/tooltip/src/tooltip'

console.log(TooltipPlacement)

const placement = ref('bottom-start')

const options = TooltipPlacement.map(item => ({
  label: item,
  value: item
}))
</script>

<style lang="scss" scoped>
.container {
  margin: 100px 0;
}

.box {
  width: 300px;
  height: 300px;
  background-color: rgb(0 0 0 / 50%);
}
</style>
