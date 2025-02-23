<template>
  <div>
    <p>这里是 StoryView 页面 插槽的联系使用</p>
    <ChildView>
      <template v-slot:header="scoped">我是插槽头部 {{ scoped.color }}</template>
      <template v-slot:footer="scoped">我是插槽尾部 {{ scoped.name1 }}</template>
    </ChildView>
  </div>
</template>
<style lang="less" scoped></style>
<script setup lang="ts">
import ChildView from '@/components/ChildView.vue'
import { onMounted, provide, ref } from 'vue';

const colorValue = ref<string>('red')
provide('color', colorValue);
onMounted(() => {
  console.log('provide Test');

})
</script>
