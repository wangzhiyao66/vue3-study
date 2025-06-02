// eventBus.ts
export class EventBus {
  private static instance: EventBus;
  private events: { [key: string]: Array<Function> } = {};

  private constructor() { }

  public static getInstance(): EventBus {
    if (!EventBus.instance) {
      EventBus.instance = new EventBus();
    }
    return EventBus.instance;
  }

  // 订阅
  public on(eventName: string, callback: Function): void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  // 发布
  public emit(eventName: string, data?: any): void {
    if (this.events[eventName]) {
      this.events[eventName].forEach((callback: Function) => {
        callback(data);
      });
    }
  }

  // 取消订阅
  public off(eventName: string, callback: Function): void {
    if (this.events[eventName]) {
      this.events[eventName] = this.events[eventName].filter((cb: Function) => cb !== callback);
    }
  }
}

// 导出EventBus实例
export const eventBus = EventBus.getInstance();

// <template>
//   <button @click="sendEvent" > Send Event </button>
//     </template>

//     < script lang = "ts" >
// import { defineComponent } from 'vue';
// import { eventBus } from '@/utils/eventBus'; // 假设eventBus.ts文件在utils目录下

// export default defineComponent({
//   name: 'SenderComponent',
//   methods: {
//     sendEvent(): void {
//       eventBus.emit('custom-event', { message: 'Hello from SenderComponent!' });
//     }
//   }
// });
// </script>

// <template>
//   <div>Received Message: { { message } } </div>
//     </template>
//
//     < script lang = "ts" >
// import { defineComponent, onMounted, onUnmounted, ref } from 'vue';
// import { eventBus } from '@/utils/eventBus'; // 假设eventBus.ts文件在utils目录下
//
// export default defineComponent({
//   name: 'ReceiverComponent',
//   setup() {
//     const message = ref('');
//
//     onMounted(() => {
//       eventBus.on('custom-event', (data: { message: string }) => {
//         message.value = data.message;
//       });
//     });
//
//     onUnmounted(() => {
//       eventBus.off('custom-event', (data: { message: string }) => {
//         // 这里不需要具体的回调函数，因为Vue 3的onUnmounted通常是在组件销毁时调用，
//         // 所以我们可以直接移除所有该事件名的监听器，或者保留这个参数以匹配on时的回调函数（如果有的话）。
//         // 但为了简洁，这里直接省略具体的回调函数参数。
//         eventBus.off('custom-event'); // 移除所有'custom-event'事件的监听器
//       });
//       // 注意：上面的调用方式会移除所有'custom-event'的监听器，
//       // 如果你只想移除特定的监听器，你需要保存on时返回的回调函数引用，并在off时使用它。
//       // 但在这个例子中，为了简化，我们直接移除所有监听器。
//     });

//     return {
//       message
//     };
//   }
// });
// </script>


