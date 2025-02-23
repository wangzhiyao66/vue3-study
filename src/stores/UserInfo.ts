import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface userType {
  userName: string
  passWord: string
  permission: Array<any>
}

export const UserInfoStore = defineStore('UserInfo', {

  state: () => ({
    pageId: 12,
    permissionList: ['All', 'Home', 'Over', 'Story', 'Task', 'Problem', ' Version', 'Setting', 'UserCenter'],
    userInfo: {
      userName: '',  // 用户名
      passWord: '',  // 密码
      permission: [] // 权限
    }
  }),
  getters: {
    doubleID: (state: { pageId: number }) => state.pageId * 2,
  },
  actions: {
    setPageId(num: number) {
      this.pageId = num;
    },
    setUser(obj: userType): void {
      this.userInfo = obj;
      // console.log('obj', this.userInfo);
    }
  },
  persist: true, // 启用持久化 See https://prazdevs.github.io/pinia-plugin-persistedstate/zh/guide/
})
