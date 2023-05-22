// 统一路由模块导出
import routes from './routes/raws';
export default routes;

// qiankun应用处理路由前缀
export const transverseRoutes = (routes = [], base = '') => {
  routes.forEach(route => {
    if (route.children && route.children.length) {
      transverseRoutes(route)
    } else {
      route.path = route.path.indexOf(base) > -1 ? route.path : (base || '') + route.path;
    }
  })
  return routes
};

// 全局路由拦截处理钩子
export const routerHooks = (router) => {
  router.beforeEach((to, from, next) => {
    if (to.meta && to.meta.title) {
      document.title = to.meta.title;
    }
    next()
  })
};