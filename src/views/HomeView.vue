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
import { getDatalist, getHomeData, getSearchData } from '@/API';
import { requestManager } from '@/utils/RequestManager';
import { reactive, ref, defineComponent, onMounted, onUpdated, onBeforeUpdate, onBeforeMount, onBeforeUnmount, onUnmounted, watchEffect, watch, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router';
const num = ref(1);
let time: any = null;
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
onMounted(async () => {
  console.log('onMounted', 2);
  time = setInterval(() => {
    console.log(num.value, '秒，定时器执行中...');
    num.value++;
    if (num.value > 12) {
      clearInterval(time);
    }
  }, 1000);
  getData();
  getDataList();
  serachData();
})
// onBeforeUpdate(() => {
//   console.log('onBeforeUpdate', 3);
// })
// onUpdated(() => {
//   console.log('onUpdated', 4);
// })
// onBeforeUnmount(() => {
//   console.log('onBeforeUnmount', 5);
// })
// onUnmounted(() => {
//   console.log('onUnmounted', 6);
// })
const numAdd = () => {
  num.value++
}
const getData = async () => {
  proxy.$showLoading();
  requestManager.addRequest(async () => {
    // // 并发请求异步处理不了
    // getHomeData().then(res => {
    //   console.log('getData ====', res);
    // }).catch(err => {
    //   console.log('getData err', err);
    // }).finally(() => {
    //   proxy.$hideLoading();
    // })
    // 同步请求并发限制
    const response = await getHomeData()
    if (response) {
      console.log('getData ====', response);
      proxy.$hideLoading();
    }
  });
}
const getDataList = async () => {
  proxy.$showLoading();
  requestManager.addRequest(async () => {
    // getDatalist().then(res => {
    //   console.log('getDataList ====', res);
    // }).catch(err => {
    //   console.log('getDataList err', err);
    // }).finally(() => {
    //   proxy.$hideLoading();
    // })
    // // 同步请求并发限制
    const response = await getDatalist()
    if (response) {
      console.log('getDataList ====', response);
      proxy.$hideLoading();
    }
  });
}

const serachData = async () => {
  // console.log('serachData', formLabel);
  requestManager.addRequest(async () => {
    // proxy.$showLoading();
    // getSearchData().then(res => {
    //   console.log('serachData ====', res);
    // }).catch(err => {
    //   console.log('serachData err', err);
    // }).finally(() => {
    //   proxy.$hideLoading();
    // })
    // // 同步请求并发限制
    const response = await getSearchData()
    if (response) {
      console.log('serachData ====', response);
      proxy.$hideLoading();
    }
  });
}
</script>
