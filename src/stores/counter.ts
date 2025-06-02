import { defineStore } from "pinia"
// request-count store to track the number of requests ，记录并发请求数量
export const useRequestCountStore = defineStore('request-count', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state: { count: number }) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
    reset() {
      this.count = 0
      localStorage
    }
  },
  persist: true, // 启用持久化 See https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/
})