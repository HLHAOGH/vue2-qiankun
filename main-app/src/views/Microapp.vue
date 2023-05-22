<template>
  <!-- 子微应用容器 -->
  <div id="micro"></div>
</template>

<script>
import { start } from 'qiankun';

export default {
  name: 'Microapp',
  mounted() {
    // 解决微应用加载时容器 DOM 不存在， 调整 start 函数调用时机
    if (!window.qiankunStarted) {
      window.qiankunStarted = true;
      // 启动微应用
      start({
        prefetch: true, // 预加载微应用的静态资源
        sandbox: true, // 默认情况下沙箱可以确保单实例场景子应用之间的样式隔离，但是无法确保主应用跟子应用、或者多实例场景的子应用样式隔离
        singular: true, // 是否为单实例场景，单实例指的是同一时间只会渲染一个微应用
        // 解决拉取微应用 entry 时 cookie 未携带的问题
        fetch(url, ...args) {
          // 给指定的微应用 entry 开启跨域请求
          if (url === 'https://10.0.5.211/index.html') {
            return window.fetch(url, {
              ...args,
              mode: 'cors',
              credentials: 'include',
            });
          }

          return window.fetch(url, ...args);
        },
      });
    }
  },
  destroyed() {
    window.qiankunStarted = false;
  }
};
</script>