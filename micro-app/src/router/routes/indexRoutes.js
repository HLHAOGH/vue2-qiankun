// 首页路由模块

export default [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/index.vue')
  }
]