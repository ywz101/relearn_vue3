import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

export const router = createRouter({
  // 采用历史模式: html5模式
  history: createWebHistory(),
  // 配置映射关系
  routes: [
    { path: '/home', component: Home },
    { path: '/about', component: About },
  ]
})