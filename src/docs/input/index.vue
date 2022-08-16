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
      <s-form-item prop="name" label="姓名">
        <s-input v-model="data.name" type="text"></s-input>
      </s-form-item>
      <s-form-item prop="age" label="年龄">
        <s-input v-model="data.age" type="text"></s-input>
      </s-form-item>

      <s-button type="primary">提交</s-button>
    </s-form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const labelPosistion = ref('right')
const setLabelPosition = (direction: string) => {
  labelPosistion.value = direction
}

const inline = ref(false)

const data = ref({
  name: '',
  age: ''
})

const rules = {
  name: {
    required: true,
    message: '姓名不能为空'
  },
  age: {
    required: true,
    message: '年龄不能为空'
  }
}
</script>
