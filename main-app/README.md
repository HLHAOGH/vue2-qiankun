# main-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 注意问题
 - 微应用静态资源一定要支持跨域，由于 qiankun 是通过 fetch 去获取微应用的引入的静态资源的
 - 自动将主应用跟微应用之间的样式隔离
#### qiankun 能兼容 ie
 - 但是 IE 环境下（不支持 Proxy 的浏览器）只能使用单实例模式，qiankun 会自动将 singular 配置为 true；
 - qiankun 依赖的 import-html-entry 通过 window.fetch 来获取微应用的资源，部分不支持 fetch 的浏览器需要在入口处打上相应的polyfill，入口引入补丁：
   ```javascript
    import 'whatwg-fetch';
    import 'custom-event-polyfill';
    import 'core-js/stable/promise';
    import 'core-js/stable/symbol';
    import 'core-js/stable/string/starts-with';
    import 'core-js/web/url';
  ```
  - 建议直接使用 @babel/preset-env 插件完成自动引入 IE 需要的 polyfill 的能力
