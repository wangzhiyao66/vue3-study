import { ref } from "vue";


export function useResetForm<T>(value: () => T) {
  // const { resetFields } = form;
  const state = ref(value())
  const reset = () => {
    state.value = value()
  };

  return {
    state,
    reset,
  };
}
export function defaultClone(data: any) {
  return JSON.parse(JSON.stringify(data));
}
export function useResetFormClone<T>(value: T) {
  const initData = defaultClone(value);
  const state = ref(value)
  const reset = () => {
    state.value = defaultClone(initData())
  };

  return {
    state,
    reset,
  };
}
// export function useResetFormRef<T>(value: T) {
//   const initData = () => value;
//   const state = ref(value)
//   const reset = () => {
//     state.value = initData
//   };

//   return {
//     state,
//     reset,
//   };
// }