<template>
  <div>
    <s-form></s-form>
    <s-form-item prop="name" :rules="rules">
      <s-input v-model="data" type="text" @input="onInput" @change="onChange" @blur="onBlur" @focus="onFoucs"></s-input>
    </s-form-item>

    <div>{{ data }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref('data')
const rules = {
  required: true,
  message: '姓名不能为空',
  trigger: 'blur'
}

const onInput = () => {
  // console.log('input')
}

const onChange = () => {
  // console.log('change')
}

const onBlur = () => {
  // console.log('blur')
}

const onFoucs = () => {
  // console.log('focus');
}
</script>
