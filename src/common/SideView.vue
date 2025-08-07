<template>
  <div class="menu-box">
    <p class="loginout" @click="loginOut"> <i class="el-icon-location"></i> 退出登录</p>
    <el-row>
      <el-col :span="24">
        <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
          background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <div class="menu-item" v-for="(item, index) in list.menus">
            <el-menu-item @click="goto(item)">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </el-menu-item>

          </div>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="less" scoped>
.menu-box {
  height: 100%;
  overflow-y: auto;
}

.menu-item {
  padding-left: 20px;
}

.loginout {
  padding-left: 40px;
  color: #361e1e;
  cursor: pointer;
}
</style>
<script lang="ts">
import { routerList } from '@/router/routes';
import { UserInfoStore } from '@/stores/UserInfo';
import { defineComponent, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SideView',
  setup() {
    // 从路由里筛选左侧菜单栏数据
    const menuslist = routerList.find((item: { name: string; }) => item.name == 'RouterView');
    const list: any = reactive({
      menus: []
    });
    // 获取当前用户权限
    const userStore = UserInfoStore();
    const router = useRouter();
    // console.log('list', list.menus);
    onMounted(() => {
      const permisnsion: Array<string> = userStore.userInfo.permission;
      // console.log("🚀 ~ setup ~ permisnsion:", permisnsion)
      console.log("%c🚀 ~ submitForm ~ UserPermission:", 'color:red;font-size:16px;', permisnsion)
      // console.log('permisnsion', userStore.userInfo.permission);
      // 当前用户没有任何权限时，需要重新登陆获取权限
      if (userStore.userInfo.permission.length == 0) {
        // this.$router.push("/home");
        router.push("/login");
      }
      // 根据权限筛选菜单
      list.menus = menuslist?.children.filter((item: { name: string; }) => {
        if (permisnsion.includes(item.name)) {
          return item
        }
      })
      // console.log(',', list.menus);


    })
    function handleOpen(key: string, keyPath: string) {
      console.log(key, keyPath);
    }

    function handleClose(key: string, keyPath: string) {
      console.log(key, keyPath);
    }

    function goto(param: any) {
      // console.log('param', param);
      this.$router.push(param.path);
    }

    const loginOut = () => {
      userStore.$reset();
      router.push("/login");
    }

    return {
      list,
      handleOpen,
      handleClose,
      goto,
      loginOut
    }
  }
})
</script>
