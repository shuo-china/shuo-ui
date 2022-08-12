<template>
  <div>
    <s-form ref="formRef" :model="data" :rules="rules">
      <s-form-item prop="name">
        <s-input v-model="data.name" type="text"></s-input>
      </s-form-item>
    </s-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const formRef = ref(null) as any

setTimeout(() => {
  formRef.value
    .validateField('name')
    .then(res => {
      console.log('res', res)
    })
    .catch(err => {
      console.log('err', err)
    })
})

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
</script>
