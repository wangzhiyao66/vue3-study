// loadingService.js
import { createApp, type App } from 'vue';
import LoadingComponent from './index.vue';
import { ElLoading } from 'element-plus';
let loadingInstance: any = null;
let requestCount = 0;

const LoadingService = {
  install(app: App) {

    // const createLoadingInstance = () => {
    //   const appElement = document.createElement('div');
    //   document.body.appendChild(appElement);
    //   loadingInstance = createApp(LoadingComponent).mount(appElement);
    // };

    // const showLoading = () => {
    //   if (requestCount === 0) {
    //     if (!loadingInstance) {
    //       createLoadingInstance();
    //     }
    //     loadingInstance.show();
    //   }
    //   requestCount++;
    // };

    // const hideLoading = () => {
    //   requestCount--;
    //   if (requestCount === 0) {
    //     loadingInstance.hide();
    //   }
    // };

    // 创建一个全局的 loading 实例
    let loadingInstance: any = null;
    let requestCount = 0;

    const showLoading = () => {
      if (requestCount === 0) {
        loadingInstance = ElLoading.service({ lock: true, text: 'Loading', background: 'rgba(255, 255, 255, 0.7)' });
      }
      requestCount++;
    };

    const hideLoading = () => {
      requestCount--;
      if (requestCount === 0) {
        loadingInstance.close();
      }
    };
    // 将 showLoading 和 hideLoading 挂载到 Vue 的全局属性上
    app.config.globalProperties.$showLoading = showLoading;
    app.config.globalProperties.$hideLoading = hideLoading;
  },
};

export default LoadingService;
