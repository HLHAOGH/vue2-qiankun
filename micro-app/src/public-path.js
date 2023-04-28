// 解决微应用动态载入的 脚本、样式、图片 等地址不正确的问题
if (window.__POWERED_BY_QIANKUN__) {
  console.log(window.__INJECTED_PUBLIC_PATH_BY_QIANKUN)
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}
