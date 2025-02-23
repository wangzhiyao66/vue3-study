<template>
  <div>
    <h2>购物车</h2>
    <div v-if="cart.length === 0">购物车为空</div>
    <div v-else>
      <div v-for="(item, index) in cart" :key="index" class="cart-item">
        <span>{{ item.name }}</span>
        <span>价格: ￥{{ item.price.toFixed(2) }}</span>
        <button @click="removeFromCart(index)">删除</button>
      </div>
      <h3>总价格: ￥{{ totalPrice.toFixed(2) }}</h3>
      <button @click="goToCheckout">去结算</button>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'CartView',
  setup() {
    const cart = ref([]);

    const addToCart = (product) => {
      cart.value.push(product);
    };

    const removeFromCart = (index) => {
      cart.value.splice(index, 1);
    };

    const totalPrice = computed(() => {
      return cart.value.reduce((sum, item) => sum + item.price, 0);
    });

    // 监听“添加到购物车”事件
    window.addEventListener('add-to-cart', (event) => {
      addToCart(event.detail);
    });

    const goToCheckout = () => {
      // 这里可以跳转到结算页面，例如使用vue-router
      console.log('跳转到结算页面');
    };

    return {
      cart,
      removeFromCart,
      totalPrice,
      goToCheckout,
    };
  },
};
</script>

<style scoped>
.cart-item {
  margin-bottom: 10px;
}

button {
  margin-left: 10px;
}
</style>
