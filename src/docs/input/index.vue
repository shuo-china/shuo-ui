<template>
  <div>
    <s-form ref="formRef" :model="data" :rules="rules">
      <s-form-item prop="name">
        <s-input v-model="data.name" type="text"></s-input>
      </s-form-item>
      <s-button @click="submit">提交</s-button>
    </s-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SMessage } from '@shuo-ui'

const formRef = ref(null) as any

const data = ref({
  name: ''
})

const rules = {
  name: {
    required: true,
    message: '姓名不能为空',
    trigger: 'change'
  }
}

const submit = () => {
  formRef.value.validate().then(() => {
    const hide = SMessage.loading('提交中')
    setTimeout(() => {
      hide()
      SMessage.success('提交成功')
    }, 1000)
  })
}
</script>
