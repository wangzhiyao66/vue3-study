<template>
  <div>
    <h2>产品列表</h2>
    <div v-for="product in products" :key="product.id" class="product">
      <span>{{ product.name }}</span>
      <span>价格: ￥{{ product.price.toFixed(2) }}</span>
      <button @click="addToCart(product)">添加到购物车</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProduceList',
  setup() {
    const products = ref([
      { id: 1, name: '商品1', price: 100 },
      { id: 2, name: '商品2', price: 200 },
      { id: 3, name: '商品3', price: 300 },
    ]);

    const addToCart = (product) => {
      const event = new CustomEvent('add-to-cart', {
        detail: product,
        bubbles: true,
      });
      window.dispatchEvent(event);
    };

    return { products, addToCart };
  },
});
</script>

<style scoped>
.product {
  margin-bottom: 20px;
}

button {
  margin-left: 10px;
}
</style>
