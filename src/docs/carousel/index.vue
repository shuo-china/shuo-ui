<template>
  <div>
    <prop-option v-model="direction" :options="options" />
    <s-carousel :loop="true" :height="300" :direction="direction" arrow="hover" :initial-index="1">
      <s-carousel-item>
        <div class="demo">1</div>
      </s-carousel-item>
      <s-carousel-item>
        <div class="demo">2</div>
      </s-carousel-item>
      <s-carousel-item>
        <div class="demo">3</div>
      </s-carousel-item>
      <s-carousel-item>
        <div class="demo">4</div>
      </s-carousel-item>
    </s-carousel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const direction = ref('bottom')

const options = [
  {
    label: '上',
    value: 'top'
  },
  {
    label: '右',
    value: 'right'
  },
  {
    label: '下',
    value: 'bottom'
  },
  {
    label: '左',
    value: 'left'
  }
]
</script>

<style lang="scss" scoped>
.demo {
  height: 300px;
  background-color: #364d79;
}
</style>
