<template>
  <div style="margin-bottom: 30px">
    <s-space>
      <s-button @click="labelPosition='left'">Left</s-button>
      <s-button @click="labelPosition='right'">Right</s-button>
      <s-button @click="labelPosition='top'">Top</s-button>
    </s-space>
  </div>
  <s-form :model="form" :label-width="80" :label-position="labelPosition">
    <s-form-item label="姓名">
      <s-input v-model="form.name" />
    </s-form-item>
  </s-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const labelPosition = ref('left')

const form = reactive({
  name: ''
})

</script>
