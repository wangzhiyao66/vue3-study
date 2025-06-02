// stores/counter.js
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  getters: {
    getCounterValue: (state) => Number(state.count),
  },
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    }
  },
  persist: true, // 启用持久化 See https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/

});
