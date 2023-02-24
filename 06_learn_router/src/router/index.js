import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

export const router = createRouter({
  // 采用历史模式: hash模式
  history: createWebHistory(),
  // 配置映射关系
  routes: [
    // 重定向
    {
      path: '/',
      redirect: '/home'
    },
    {
      name: 'home',
      path: '/home',
      // 路由懒加载: 可以提升用户首屏渲染速度
      /* 魔法注释: 可以给分包后的js文件取别名 */
      component: () => import(/* webpackChunkName: 'Home-Chunk' */'../views/Home.vue')
    },
    {
      name: 'about',
      path: '/about',
      component: () => import(/* webpackChunkName: 'About-Chuank' */'../views/About.vue')
    },
    {
      name: 'user',
      // 动态路由: '/xxx/:id' 
      path: '/user/:id',
      component: () => import(/* webpackChunkName: 'User-Chuank' */'../views/User.vue')
    },
    {
      name: 'not-found',
      // 动态路由: '/xxx/:id' 
      // '/:pathMatch(.*)': 当上述的映射关系通通不配合的时候, 执行此处的逻辑
      // 如果要对不配合的路径做一些数组上的操作, 可以在后面继续加*
      // path: '/:pathMatch(.*)',
      path: '/:pathMatch(.*)*',
      component: () => import(/* webpackChunkName: 'NotFound-Chuank' */'../views/NotFound.vue')
    }
  ]
})