import { createRouter, createWebHistory } from 'vue-router'
import { routerList } from './routes'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routerList,
})

// 添加路由前置守卫
router.beforeEach((to, from, next) => {
  // 在这里可以进行路由守卫逻辑，比如身份验证、权限校验等
  // ...
  console.log('前置守卫', from, to);
  // 必须调用 next() 来 resolve 这个钩子
  //  next(false): 中断当前的导航，不进行任何导航
  //  next('/path'): 跳转到一个不同的地址
  //  next(): 进行正常的导航
  //  next(true): 进行正常的导航（跳过剩余的全局前置守卫）
  next();
});
export default router
