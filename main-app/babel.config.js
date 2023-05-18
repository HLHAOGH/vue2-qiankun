module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset', // 内置引入了@vue/babel-preset-app安装了@babel/preset-env
      {
        modules: false,
        useBuiltIns: 'entry', // 引入浏览器不支持的polyfill，以最低需要兼容的环境为准
        polyfills: ['es.promise', 'es.symbol', 'es.object.assign', 'es.promise.finally']
      }
    ]
  ]
}
