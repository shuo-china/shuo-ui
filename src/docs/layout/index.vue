<template>
  <div class="box">
    <s-row :gutter="24">
      <s-col :span="8">
        <div class="item"></div>
      </s-col>
      <s-col :span="8">
        <div class="item"></div>
      </s-col>
      <s-col :span="8">
        <div class="item"></div>
      </s-col>
      <s-col :span="8">
        <div class="item"></div>
      </s-col>
    </s-row>
  </div>
</template>

<style lang="scss" scoped>
.box {
  background-color: pink;

  .item {
    height: 20px;
    background-color: skyblue;
  }
}
</style>
