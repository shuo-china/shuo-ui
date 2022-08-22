<template>
  <div>
    <div>
      <s-button :type="labelPosistion === 'left' ? 'primary' : 'default'" @click="setLabelPosition('left')"
        >Left</s-button
      >
      <s-button :type="labelPosistion === 'right' ? 'primary' : 'default'" @click="setLabelPosition('right')"
        >Right</s-button
      >
      <s-button :type="labelPosistion === 'top' ? 'primary' : 'default'" @click="setLabelPosition('top')">Top</s-button>
      <s-button @click="inline = !inline">{{ inline ? 'uninline' : 'inline' }}</s-button>
    </div>
    <hr />
    <s-form
      ref="formRef"
      :model="data"
      :rules="rules"
      :label-width="80"
      :label-position="labelPosistion"
      :inline="inline"
    >
      <s-form-item prop="hobby" label="爱好">
        <s-input v-model="data.hobby" type="password" clearable model-value="123">
          <template #prepend>prepend</template>
          <template #append>append</template>
          <template #prefix>
            <s-icon name="loading" />
          </template>
          <template #suffix>
            <s-icon name="loading" />
          </template>
        </s-input>
      </s-form-item>
      <s-form-item prop="name" label="姓名">
        <s-input v-model="data.name" clearable type="text" placeholder="请输入姓名" size="small"></s-input>
      </s-form-item>
      <s-form-item prop="age" label="年龄">
        <s-input v-model="data.age" type="text" size="large" clearable> </s-input>
      </s-form-item>
      <s-form-item prop="info" label="简介">
        <s-input v-model="data.info" type="textarea"> </s-input>
      </s-form-item>
      <s-form-item prop="ss" label="ss">
        <s-input v-model="data.ss" type="textarea"> </s-input>
      </s-form-item>
      <s-form-item>
        <s-button @click="formRef.resetFields()">重置</s-button>
      </s-form-item>
    </s-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { SMessage } from '@shuo-ui'

const formRef = ref<any>(null)

const labelPosistion = ref('right')
const setLabelPosition = (direction: string) => {
  labelPosistion.value = direction
}

const inline = ref(false)

const data = ref({
  name: '',
  age: 18,
  hobby: '',
  info: '',
  ss: ''
})

const rules = {
  name: {
    required: true,
    message: '姓名不能为空'
  },
  age: {
    required: true,
    message: '年龄不能为空'
  },
  ss: {
    required: true,
    message: '请填写ss'
  }
}

const submit = () => {
  formRef.value
    ?.validate()
    .then(() => {
      SMessage.success('验证通过')
    })
    .catch(() => {
      SMessage.error('验证失败')
    })
}
</script>
