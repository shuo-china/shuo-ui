<template>
  <div>
    <!-- <s-radio-group>1</s-radio-group> -->
    <s-radio v-model="data" label="zjs"></s-radio>
    reslt: {{ data }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref(false)
</script>
