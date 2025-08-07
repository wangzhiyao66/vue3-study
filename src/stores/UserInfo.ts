import { defineStore } from 'pinia'

interface userType {
  userName: string
  passWord: string
  permission: Array<String> | unknown
}

export const UserInfoStore = defineStore('UserInfo', {

  state: () => ({
    isLogin: false,
    permissionList: ['All', 'Home', 'Over', 'Story', 'Task', 'Problem', ' Version', 'Setting', 'UserCenter', 'About', 'SlotDemo'],
    userInfo: {
      userName: '',  // 用户名
      passWord: '',  // 密码
      permission: [] // 权限
    }
  }),
  getters: {
    // doubleID: (state: { pageId: number }) => state.pageId * 2,
  },
  actions: {
    login(userInfo: userType) {
      this.isLogin = true;
      this.userInfo = userInfo;
    },
    logout() {
      this.isLogin = false;
      this.userInfo = { userName: null, userRole: null };
    },
  },
  persist: true, // 启用持久化 See https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/
})
