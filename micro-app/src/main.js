// qiankun应用注入publicPath，在入口最顶层引入
import './public-path'; 
import VueRouter from 'vue-router';
import { routes, routerHooks } from '@/router'
import store from '@/store'
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;
Vue.use(VueRouter);

let router = null;
let instance = null;
function render(props = {}) {
  const { container, routerBase } = props;
  console.log(window.__POWERED_BY_QIANKUN__)
  router = new VueRouter({
    base: routerBase ? routerBase : '/', // 微应用base值需和activeRule是一样的
    mode: 'history',
    routes,
  });
  routerHooks(router);
  console.log(routes)
  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#micro-app') : '#micro-app');
}

// 微应用独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}

