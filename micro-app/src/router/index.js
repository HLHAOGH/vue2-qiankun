import IndexRoutes from './routes/indexRoutes';

// 统一路由模块导出
export const routes = [
  ...IndexRoutes
]

// 全局路由拦截处理钩子
export const routerHooks = router => {
  router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
      document.title = to.meta.title;
    }
    next()
  })
}
