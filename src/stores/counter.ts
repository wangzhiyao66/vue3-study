import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// https://pinia.vuejs.org/zh/introduction.html
// export const useCounterStore = defineStore('counter', () => {

//   const count = ref(0)

//   const doubleCount = computed(() => count.value * 2)

//   function increment() {
//     count.value++
//   }

//   return { count, doubleCount, increment }
// })
export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
})
