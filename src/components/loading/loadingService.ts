// loadingService.js
import { createApp, type App } from 'vue';
import LoadingComponent from './index.vue';

let loadingInstance: any = null;
let requestCount = 0;

const LoadingService = {
  install(app: App) {

    const createLoadingInstance = () => {
      const appElement = document.createElement('div');
      document.body.appendChild(appElement);
      loadingInstance = createApp(LoadingComponent).mount(appElement);
    };

    const showLoading = () => {
      if (requestCount === 0) {
        if (!loadingInstance) {
          createLoadingInstance();
        }
        loadingInstance.show();
      }
      requestCount++;
    };

    const hideLoading = () => {
      requestCount--;
      if (requestCount === 0) {
        loadingInstance.hide();
      }
    };
    // 将 showLoading 和 hideLoading 挂载到 Vue 的全局属性上
    app.config.globalProperties.$showLoading = showLoading;
    app.config.globalProperties.$hideLoading = hideLoading;
  },
};

export default LoadingService;
