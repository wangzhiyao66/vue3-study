<template>
  <div class="cuntom">
    <el-input v-model="value" placeholder="请输入内容"></el-input>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = defineModel()
</script>
<style lang="less" scoped>
.cuntom {
  width: 100%;
  height: 100%;
  padding: 10px 15px;
  border: 1px solid #ccc;
}
</style>