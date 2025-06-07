<template>
  <div class="cuntom">
    <div>
      我是编辑子组件 编辑值：{{ value }}
      <el-input v-model="value" placeholder="请输入内容"></el-input>
    </div>
    <!-- <div>
      {{ title }}
      <el-input v-model="title" placeholder="请输入内容"></el-input>
    </div>
    <div>
      {{ subTitle }}
      <el-input v-model="subTitle" placeholder="请输入内容"></el-input>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = defineModel()
// const title = defineModel('title');
// const subTitle = defineModel('subTitle');
</script>
<style lang="less" scoped>
.cuntom {
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  border: 1px solid #ccc;
}
</style>