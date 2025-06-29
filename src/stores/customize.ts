import { effectScope, getCurrentScope, ref } from "vue";

export const customize = defineStore(() => {
  // 定义状态变量
  const count = ref(0)
  // 获取当前作用域
  const scope = getCurrentScope();
  // 改变方法
  function customAdd() {
    count.value++;
    console.log('add', count.value);
  }
  // 删除方法
  function customDel() {
    // 输出日志信息 'del'
    console.log('del');
  }
  // 返回对象
  return {
    count,
    scope,
    customAdd,
    customDel
  }
})

function defineStore(fn: () => Function | any) {
  let store: Function | any;
  return () => {
    if (store) return store;
    // 创建新的作用域并执行函数
    const scope = effectScope(true);
    return (store = scope.run(fn));
  }
} ``