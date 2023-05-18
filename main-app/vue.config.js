const path = require('path');

const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  // 默认根目录
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'assets',
  lintOnSave: false,
  devServer: {
    host: '0.0.0.0',
    port: 9527,
    // 跨域代理
    // proxy: {
    //   '/api': {
    //     target: 'https://10.0.5.205',
    //     pathRewrite: {
    //      '^/api': ''
    //     },
    //     changeOrigin: true
    //   }
    // }
  },

  // 生成环境source map，加快构建速度
  productionSourceMap: false,

  // webpack配置(webpack-merge合并)
  configureWebpack: {
    // 分离polyfill和业务代码打包chunk(兼容IE)
    entry: {
      polyfill: [
        'core-js/stable',
        'regenerator-runtime',
        'whatwg-fetch', // 兼容到ie 10+, 提供IE浏览器不支持Fetch能力的polyfill
        'core-js/web/url',
        'custom-event-polyfill' // 兼容到ie 9+，支持创建自定义事件方法
      ],
      main: './src/main.js',
    },
    resolve: {
      alias: {
        '@': resolve('./src'),
        '@~': resolve('./static')
      }
    },
    optimization: {
      // 提取分离公共代码
      splitChunks: {
        name: false, // 拆分 chunk 的名称。设为 false 将保持 chunk 的相同名称
        cacheGroups: {
          elementui: {
            name: 'chunk-elementui',
            test: /[\\/]node_modules[\\/]elementui[\\/]/,
            priority: 20,
            chunks: 'initial', // 提取同步和异步加载的模块
          },
          frame: {
            name: 'chunk-frame',
            test: /[\\/]node_modules[\\/](vue|vuex|vue-router)[\\/]/,
            priority: 10,
            chunks: 'initial',
          }
        },
        chunks(chunk) {
          return chunk.name !== 'polyfill';
        },
      }
    },
    plugins: []
  },
  chainWebpack: (config) => { return config },
}
