<template>
  <div>
    <p>这里是 SettingView.vue 页面</p>
    <customComponent v-model="userName"></customComponent>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';
import customComponent from './components/customComponent.vue';
defineOptions({ name: "SettingView" });
const userName = ref('前端开发爱好者');
const { stop, pause, resume, } = watch(() => userName.value, (newVal) => {
  console.log('监听到的值：', newVal);
})
onMounted(() => {
  console.log('组件已挂载');
})
</script>
<style lang="less" scoped></style>
