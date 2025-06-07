// import Code404 from '@/common/Code404.vue'
import LoginVue from '@/common/Login.vue'
import RouterView from '@/components/RouterView.vue'


export const routerList: any = [
  {
    path: '/login',
    name: 'Login',
    title: '登录',
    component: LoginVue
  },
  {
    path: '/',
    name: 'RouterView',
    component: RouterView,
    title: '主页',
    children: [
      {
        path: '',
        redirect: 'home'
      },
      {
        path: 'home',
        name: 'Home',
        icon: 'el-icon-s-home',
        title: '首页',
        component: () => import('@/views/HomeView.vue'),
        children: []
      },
      {
        path: 'overview',
        name: 'Over',
        icon: 'el-icon-picture-outline',
        title: '概览',
        component: () => import('@/views/OverView.vue')
      },
      {
        path: 'story',
        name: 'Story',
        icon: 'el-icon-s-marketing',
        title: '故事',
        component: () => import('@/views/StoryView.vue')
      },
      {
        path: 'task',
        name: 'Task',
        icon: 'el-icon-suitcase',
        title: '任务',
        component: () => import('@/views/TaskView.vue')
      },
      {
        path: 'problem',
        name: 'Problem',
        icon: "el-icon-location",
        title: '问题',
        component: () => import('@/views/ProblemView.vue')
      },
      {
        path: 'version',
        name: 'Version',
        icon: "el-icon-document",
        title: '版本',
        component: () => import('@/views/VersionView.vue')
      },
      {
        path: 'setting',
        name: 'Setting',
        icon: "el-icon-setting",
        title: '设置',
        component: () => import('@/views/settingView/SettingView.vue')
      },
      {
        path: 'usercenter',
        name: 'UserCenter',
        icon: "el-icon-collection",
        title: '用户中心',
        component: () => import('@/views/UserCenterView.vue')
      },
      // {
      //   path: 'checkout',
      //   name: 'Checkout',
      //   title: '购物车结算',
      //   component: ProduceList,
      // },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/common/AboutView.vue'),
  },
  {
    path: '/:pathMatch(.*)', // 捕获所有未匹配的路径
    name: 'Code404',
    title: '404页面',
    component: () => import('@/common/Code404.vue'),
  }
]

