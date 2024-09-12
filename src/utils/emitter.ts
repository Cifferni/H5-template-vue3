import mitt from 'mitt';
//调用mitt得到emitter，emitter能:绑定事件，触发事件
const emitter = mitt();
export default emitter;
