import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler
} from 'qiankun';
// 注册微应用
registerMicroApps(
  [
    {
      // 微应用名称
      name: 'micro-app',
      // 入口路径
      entry: '//localhost:9526',
      // 微应用在主应用挂载的容器节点的选择器
      container: '#micro',
      // 微应用的激活规则(当路由与激活规则匹配时就会触发加载相应的子应用)
      activeRule: '/sub_app/',
      // 传递给子应用的参数
      props: {
        routerBase: '/sub_app/',
      }
    }
  ],
  // 微应用生命周期
  {
    beforeLoad: (app) => console.log('before load', app.name),
    beforeMount: [(app) => console.log('before mount', app.name)],
    afterMount: (app) => console.log('after mount', app.name),
    beforeUnmount: (app) => console.log('before unmount', app.name),
    afterUnmount: (app) => console.log('after unmount', app.name),
  }
);

// 添加全局的未捕获异常处理器
addGlobalUncaughtErrorHandler((event) => console.log(event));