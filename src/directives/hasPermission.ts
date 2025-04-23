// directives/permission.ts
import { type App, type DirectiveBinding } from 'vue';
// import store from '@/store'; // 假设你使用Vuex来管理状态

// 判断用户是否有指定权限
const hasPermission = (value: Array<string>, el: Element) => {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`v-permission 需要配置权限, 例如 v-permission="['xxx']"`);
  }

  const userPermissions = store.getters['user/permissions'] || []; // 从Vuex中获取用户权限

  if (!Array.isArray(userPermissions)) {
    console.warn('权限数据格式不正确, 请检查Vuex store配置');
    return false;
  }

  const hasAuth = value.some((permission) => userPermissions.includes(permission));

  if (!hasAuth && el.parentNode) {
    el.parentNode.removeChild(el); // 如果用户没有权限，则移除元素
  }

  return hasAuth;
};

export default {
  install(app: App) {
    app.directive('permission', {
      mounted(el: Element, binding: DirectiveBinding) {
        hasPermission(binding.value, el); // 元素挂载时检查权限
      },
      updated(el: Element, binding: DirectiveBinding) {
        hasPermission(binding.value, el); // 元素或绑定值更新时重新检查权限
      },
    });
  },
};
