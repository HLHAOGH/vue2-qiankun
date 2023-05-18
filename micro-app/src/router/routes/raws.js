// 路由模块
export default [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/index.vue'),
    children: [
      // 其他路由写在这里
    ]
  }
]