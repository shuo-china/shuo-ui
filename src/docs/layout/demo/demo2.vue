<template>
  <s-row :gutter="20">
    <s-col :span="6">
      <div class="item">col-6</div>
    </s-col>
    <s-col :span="6">
      <div class="item">col-6</div>
    </s-col>
    <s-col :span="6">
      <div class="item">col-6</div>
    </s-col>
    <s-col :span="6">
      <div class="item">col-6</div>
    </s-col>
  </s-row>
</template>

<style scoped>
.s-row {
  margin-bottom: 20px;
}

.item {
  padding: 10px 0;
  text-align: center;
}

.s-col:nth-child(2n) .item {
  background-color: #d3dce6;
}

.s-col:nth-child(2n + 1) .item {
  background-color: #99a9bf;
}
</style>
