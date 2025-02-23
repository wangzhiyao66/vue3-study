<template>
  <div>
    <h2>结算页面</h2>
    <div v-if="cart.length === 0">购物车为空</div>
    <div v-else>
      <div v-for="(item, index) in cart" :key="index" class="checkout-item">
        <span>{{ item.name }}</span>
        <span>价格: ￥{{ item.price.toFixed(2) }}</span>
        <span>数量: {{ item.quantity || 1 }}</span> <!-- 这里可以添加数量选择功能 -->
        <span>小计: ￥{{ (item.price * (item.quantity || 1)).toFixed(2) }}</span>
      </div>
      <h3>总价格: ￥{{ totalPrice.toFixed(2) }}</h3>
      <button @click="submitOrder">提交订单</button>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Checkout',
  setup() {
    const router = useRouter();
    const cart = ref([]);

    // 假设我们从某个地方获取了购物车数据，例如从Vuex或localStorage
    // 这里为了简化，我们直接在onMounted中模拟获取数据
    onMounted(() => {
      // 从某个地方获取购物车数据
      // cart.value = ...;

      // 由于我们是从Cart.vue跳转过来的，可以假设cart数据已经通过某种方式传递过来了
      // 这里为了演示，我们直接模拟一些数据
      cart.value = [
        { id: 1, name: '商品1', price: 100, quantity: 2 },
        { id: 2, name: '商品2', price: 200, quantity: 1 },
      ];
    });

    const totalPrice = computed(() => {
      return cart.value.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
    });

    const submitOrder = () => {
      // 调用接口生成订单并跳转到支付页面
      console.log('提交订单', cart.value);
      // 假设订单生成成功，并跳转到支付页面
      // router.push('/payment');
    };

    return {
      cart,
      totalPrice,
      submitOrder,
    };
  },
})
</script>

<style scoped>
.checkout-item {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button {
  margin-top: 20px;
}
</style>
