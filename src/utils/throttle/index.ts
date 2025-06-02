// 帮我用TS写一个函数，这个节流函数可以限制某个函数的执行频率。
export function throttle(func: Function, limit: number = 800) {
  let lastFunc: ReturnType<typeof setTimeout> | null = null;
  let lastRan: number = 0;
  return function (this: any) {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc!);
      lastFunc = setTimeout(() => {
        if ((Date.now() - lastRan) >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}