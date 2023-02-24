<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
// 在代码中获取动态id的值
// 第一次获取用户id
const route = useRoute()
console.log(route.params.id)

// 切换后也能在代码中显示的
onBeforeRouteUpdate((to, from) => {
  console.log('from:', from.params.id)
  console.log('to:', to.params.id)
})
</script>

<template>
  <div class="user">
    <!-- 在template中获取动态路由的值 -->
    <!-- $route.params.id -->
    <h2>User: {{ $route.params.id }}</h2>
  </div>
</template>

<style scoped></style>