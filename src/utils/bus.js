// 安装：npm install--save mitt
// 在bus.js中
import mitt from 'mitt';
const bus = {};
const emitter = mitt();
bus.$on = emitter.on;
bus.$off = emitter.off;
bus.$emit = emitter.emit;
export default bus;

// 在需要用的页面引入bus.js
// import bus from './bus.js';
// bus.$on('someEvent', (data) => {
//   console.log(data);
// });
// bus.$emit('someEvent', { message: 'Hello, Vue 3!' });
