<template>
  <div>
    <p>这里是 OverView 页面</p>
    <Cart></Cart>
    <Checkout></Checkout>
    <ProduceList></ProduceList>
  </div>
</template>
<style lang="less" scoped></style>
<script lang="ts">
import Cart from '@/components/Cart.vue';
import Checkout from '@/components/Checkout.vue';
import ProduceList from '@/components/ProduceList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OverView',
  components: {
    Cart,
    ProduceList,
    Checkout
  },
  setup() {

  }
})
</script>
