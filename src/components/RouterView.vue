<template>
  <div class="routerView">
    <div class="left">
      <SideView></SideView>
    </div>
    <div class="right">
      <ContentView></ContentView>
    </div>
  </div>
</template>
<script lang="ts">
// 你需要使用到什么生命周期，就引出来什么生命周期
import { onMounted, ref, watchEffect } from 'vue'
import SideView from '@/common/SideView.vue'
import ContentView from '@/common/ContentView.vue'
export default {
  name: 'RouterView',
  components: {
    SideView,
    ContentView,
  },
  setup() {
    const count = ref(0)
    onMounted(() => {
      count.value++
      // console.log('onMounted', count.value)
    })
    // 定义一个函数，修改 count 的值。
    const countAdd = () => {
      count.value++
    }
    watchEffect(() => {
      // console.log('RouterView 触发了响应式监听', count.value)
    })
    return {
      count,
      countAdd,
    }
  },
}
</script>
<style lang="less" scoped>
.routerView {
  width: 100%;
  height: 100%;
  background-color: #fff;

  .left {
    float: left;
    width: 200px;
    height: 100%;
  }

  .right {
    float: left;
    width: calc(100% - 200px);
    background-color: #ddd;
    height: 100%;
  }
}

.routerView::after {
  content: '';
  clear: both;
  zoom: 1;
}
</style>
