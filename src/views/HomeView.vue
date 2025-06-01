<template>
  <!-- <div>{{ message }}</div> -->
  <div>
    <p>这里是 HomeView 页面 监听属性和生命</p>
    <div>
      <input type="text" placeholder="请输入名字" v-model="formLabel.name">
    </div>
    <div>
      <input type="number" step="0.1" v-model="formLabel.age">
    </div>
    <div>
      {{ num }} <button @click="numAdd">点击加</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getDatalist, getHomeData } from '@/API';
import { reactive, ref, defineComponent, onMounted, onUpdated, onBeforeUpdate, onBeforeMount, onBeforeUnmount, onUnmounted, watchEffect, watch, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router';
const num = ref(0);
const route = useRoute();
const formLabel = reactive({
  name: 'test',
  age: 20,
})
const state = reactive({ x: 0, y: 0 });
const { proxy } = getCurrentInstance();
watch(() => formLabel, (val, oldVal) => {
  console.log(`new count: ${JSON.stringify(val)}，old count: ${JSON.stringify(oldVal)}`)
});

// watch(() => formLabel, (val, oldVal) => {
//   console.log(`new count: ${JSON.stringify(val)}，old count: ${JSON.stringify(oldVal)}`)
// }, { deep: true });

watchEffect(() => {
  console.log('HomeView 响应式数据变化了', formLabel.name);
  console.log('HomeView 响应式数据变化了', formLabel.age);
})

// 生命周期函数
onBeforeMount(() => {
  let params = route.query;
  console.log('onBeforeMount', 1, params, route);
})
onMounted(() => {
  console.log('onMounted', 2);
  getData();
  getDataList();
})
onBeforeUpdate(() => {
  console.log('onBeforeUpdate', 3);
})
onUpdated(() => {
  console.log('onUpdated', 4);
})
onBeforeUnmount(() => {
  console.log('onBeforeUnmount', 5);
})
onUnmounted(() => {
  console.log('onUnmounted', 6);
})
const numAdd = () => {
  num.value++
}
const getData = () => {
  proxy.$showLoading();
  getHomeData().then(res => {
    console.log('getData ====', res);
    proxy.$hideLoading();
  }).catch(err => {
    console.log('getData err', err);
  })

}
const getDataList = () => {
  proxy.$showLoading();
  getDatalist().then(res => {
    console.log('getDataList ====', res);
    proxy.$hideLoading();
  }).catch(err => {
    console.log('getDataList err', err);
  })

}
</script>
