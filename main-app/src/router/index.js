import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const router = new VueRouter({
  base: '/',
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('@/views/Main.vue'),
      children: [
        // 子应用-通配路由
        {
          path: '/sub_app/*',
          component: () => import('@/views/Microapp.vue')
        },
        {
          path: '/demo',
          component: () => import('@/views/Demo.vue')
        },
        {
          path: '/hello',
          component: () => import('@/components/HelloWorld.vue')
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  next()
})

export default router