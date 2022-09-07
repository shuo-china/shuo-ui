<template>
  <s-row>
    <s-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="item"></div>
    </s-col>
    <s-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="item"></div>
    </s-col>
    <s-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="item"></div>
    </s-col>
    <s-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="item"></div>
    </s-col>
  </s-row>
</template>

<style scoped>
  .s-row {
    margin-bottom: 20px;
  }

  .item {
    height: 36px;
    text-align: center;
  }

  .s-col:nth-child(2n) .item {
    background-color: #d3dce6;
  }

  .s-col:nth-child(2n + 1) .item {
    background-color: #99a9bf;
  }
  </style>
