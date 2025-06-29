<template>
  <div>
    <p>这里是 SettingView.vue 页面</p>

    <!-- <customComponent v-model="userName"></customComponent> -->
    <!-- <preView v-model="userName"></preView> -->
    <el-button @click="add">自定义pinia ++</el-button>
    <button @click="loadComponentA"> Load Component A </button>
    <button @click="loadComponentB"> Load Component B </button>

    <component :is="currentComponent" v-model="userName"></component>
  </div>
</template>
<script lang="ts" setup>
import { customize } from '@/stores/customize';
import { onMounted, ref, shallowRef, useId, watch } from 'vue';
// import customComponent from './components/customComponent.vue';
// import preView from './components/preView.vue';
defineOptions({ name: "SettingView" });
const userName = ref('前端开发爱好者');
const { count, scope, customAdd } = customize();
// const title = ref('前端开发爱好者_title');
// const subTitle = ref('前端开发爱好者_subTitle');
watch(() => userName.value, (newVal) => {
  console.log('监听到的值：', newVal);
})
onMounted(() => {
  console.log('组件已挂载', useId());
})
const currentComponent: any = shallowRef(null);

const loadComponentA = async () => {
  const component = await import('./components/customComponent.vue');
  console.log('组件已挂载', component.default);
  currentComponent.value = component.default;
};

const loadComponentB = async () => {
  const component = await import('./components/preView.vue');
  console.log('组件已挂载', component.default);
  currentComponent.value = component.default;
};

function userId(): any {
  throw new Error('Function not implemented.');
}

const add = () => {
  console.log('父组件调用的了 ，add =', scope, count.value);
  customAdd()
};
</script>
<style lang="less" scoped></style>
