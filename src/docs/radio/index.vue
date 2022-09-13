<template>
  <div>
    {{ data }}
    <!-- <s-radio-group>1</s-radio-group> -->
    <s-radio v-model="data" label="zjs"></s-radio>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const data = ref(1)
</script>
