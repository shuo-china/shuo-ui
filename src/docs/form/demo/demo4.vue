<template>
  <s-form ref="formRef" :model="form" :rules="rules" :label-width="80">
    <s-form-item label="姓名" prop="name">
      <s-input v-model="form.name" />
    </s-form-item>
    <s-form-item>
      <s-button type="primary" @click="onSubmit">Submit</s-button>
    </s-form-item>
  </s-form>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'

const formRef = ref<any>(null)

const rules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'change' },
    { min: 3, max: 5, message: '长度应为3到5位', trigger: 'change' },
  ]
}

const form = reactive({
  name: ''
})

const onSubmit = () => {
  formRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit')
    } else {
      console.log('error', fields);

    }
  })
}
</script>
