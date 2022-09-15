<template>
  <div>
    <prop-option v-model="position" :options="positionOptions" />
    <s-form :model="form" :label-width="80" :label-position="position">
      <s-form-item label="姓名">
        <s-input v-model="form.name" />
      </s-form-item>
      <s-form-item label="性别">
        <s-radio-group v-model="form.gender">
          <s-radio :label="1">男</s-radio>
          <s-radio :label="2">女</s-radio>
        </s-radio-group>
      </s-form-item>
    </s-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  gender: ''
})

const position = ref('right')

const positionOptions = [
  {
    label: '左',
    value: 'left'
  },
  {
    label: '右',
    value: 'right'
  },
  {
    label: '上',
    value: 'top'
  }
]
</script>
