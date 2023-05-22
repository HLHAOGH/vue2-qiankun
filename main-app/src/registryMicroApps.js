// 注册微应用配置文件
import {
  registerMicroApps,
  addGlobalUncaughtErrorHandler,
  initGlobalState,
} from 'qiankun';

let IS_DEV = process.env.NODE_ENV === 'development'; // 判断是否开发环境

// 主应用使用location.hash区分微应用，activeRule写法：
const getActiveRule = (hash) => (location) => location.hash.startsWith(hash);

// 注册微应用
registerMicroApps(
  [
    {
      // 微应用名称
      name: 'micro-app',
      // 入口路径，如果部署使用Nginx代理的话，entry值为微应用打包配置的publicPath路径，同时需部署在同名publicPath目录下
      entry: IS_DEV ? '//localhost:9526/app1/' : '/app1/',
      // 微应用在主应用挂载的容器节点的选择器
      container: '#micro',
      /*
       * 微应用的激活规则(当路由与激活规则匹配时就会触发加载相应的子应用)
       * 1、主应用使用location.pathname区分微应用，微应用可以是hash和history模式；history模式设置路由base即可。
       * 2、主应用使用location.hash区分微应用，则微应用都是hash模式区分，主应用路由模式不限
       */
      activeRule: getActiveRule('#/sub_app'),
      // 传递给子应用的参数
      props: {
        routerBase: '/sub_app',
      }
    },
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

// 初始化 state
let state = null;
const actions = initGlobalState(state);

actions.onGlobalStateChange((state, prev) => {
  // state: 变更后的状态; prev 变更前的状态
  console.log(state, prev);
});
actions.setGlobalState(state);
actions.offGlobalStateChange();