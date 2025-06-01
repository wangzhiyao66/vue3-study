import './assets/main.css'
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// vue3 推荐使用
// ElementPlus 插件库   https://element-plus.sxtxhy.com/zh-CN/guide/quickstart.html
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// Element 插件库   https://element.eleme.cn/#/zh-CN/component/quickstart
import 'element-ui/lib/theme-chalk/index.css';
// import ElementUI from 'element-ui';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import { ElLoading } from 'element-plus';

import App from './App.vue'
import router from './router'
import LoadingService from './components/loading/loadingService';

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.use(router)
app.use(ElementPlus)
app.use(LoadingService);
// 创建一个全局的 loading 实例
// let loadingInstance: any = null;
// let requestCount = 0;

// const showLoading = () => {
//   if (requestCount === 0) {
//     loadingInstance = ElLoading.service({ lock: true, text: 'Loading', background: 'rgba(255, 255, 255, 0.7)' });
//   }
//   requestCount++;
// };

// const hideLoading = () => {
//   requestCount--;
//   if (requestCount === 0) {
//     loadingInstance.close();
//   }
// };

// // 将 showLoading 和 hideLoading 挂载到 Vue 的全局属性上
// app.config.globalProperties.$showLoading = showLoading;
// app.config.globalProperties.$hideLoading = hideLoading;


app.mount('#app')
