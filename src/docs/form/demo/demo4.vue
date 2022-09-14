<template>
  <s-form ref="formRef" :model="form" :rules="rules" :label-width="80">
    <s-form-item label="姓名" prop="name">
      <s-input v-model="form.name" />
    </s-form-item>
    <s-form-item label="性别" prop="gender">
      <s-radio-group v-model="form.gender">
        <s-radio :label="1">男</s-radio>
        <s-radio :label="2">女</s-radio>
      </s-radio-group>
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
  ],
  gender: {
    required: true, message: '请选择性别'
  }
}

const form = reactive({
  name: '',
  gender: ''
})

const onSubmit = () => {
  formRef.value.validate((valid, fields) => {
    if (valid) {
      console.log('submit', form)
    } else {
      console.log('error', fields);
    }
  })
}
</script>
