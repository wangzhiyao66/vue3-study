// hasPerm.js
import { useUserStore } from '@/store/modules/user'; // 假设你有一个Vuex模块来管理用户信息

export default {
  mounted(el, binding, vnode) {
    const { value } = binding; // 获取指令的值，即用户需要的权限
    const permissions = useUserStore().permissions; // 获取用户当前的权限列表

    // 检查用户是否有所需的权限
    if (value && value instanceof Array && value.length > 0) {
      const hasPermissions = permissions.some(permission => value.includes(permission));
      if (!hasPermissions) {
        el.parentNode && el.parentNode.removeChild(el); // 如果没有权限，则移除该元素
      }
    } else {
      throw new Error('请设置操作权限标签值'); // 如果没有提供权限值，则抛出错误
    }
  }
};
