import { useCounterStore } from "@/stores/counter";

const counterStore = useCounterStore();

class RequestManager {
  // 私有属性和方法
  private currentRequests: number;
  private maxConcurrentRequests: number;
  private requestQueue: Array<any>;
  public static instance: RequestManager;
  /**
   * 构造函数
   * @param maxConcurrentRequests 最大并发请求数，默认为5
   */
  constructor(maxConcurrentRequests = 2) {
    this.maxConcurrentRequests = maxConcurrentRequests;
    this.currentRequests = 0;
    // this.currentRequests = counterStore.count;
    this.requestQueue = [];
  }

  /**
   * 获取RequestManager的实例
   * @returns 返回RequestManager的实例
   */
  public static getInstance() {
    if (!RequestManager.instance) {
      RequestManager.instance = new RequestManager();
    }
    return RequestManager.instance;
  }

  /**
   * 向请求队列中添加一个新的请求函数
   * @param requestFn 请求函数
   * @returns 返回一个Promise对象，用于处理异步请求的结果
   */
  async addRequest(requestFn: any) {
    return new Promise((resolve, reject) => {
      this.requestQueue.push({ requestFn, resolve, reject });
      this.processQueue();
    });
  }

  /**
   * 异步处理请求队列
   * 从请求队列中异步处理请求，直到达到最大并发请求数或请求队列为空。
   */
  async processQueue() {
    if (this.currentRequests >= this.maxConcurrentRequests || this.requestQueue.length === 0) {
      return;
    }

    const { requestFn, resolve, reject } = this.requestQueue.shift();
    this.currentRequests++;
    counterStore.increment();

    try {
      const result = await requestFn();
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.currentRequests--;
      counterStore.decrement();
      this.processQueue();
    }
  }
}

export const requestManager = new RequestManager();
