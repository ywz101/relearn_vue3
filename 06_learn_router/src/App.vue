<script setup>
// 1072集
</script>

<template>
  <div class="app">
    <h2>App组件</h2>
    <nav class="nav">
      <!-- 不再记录历史状态, 直接替换 -->
      <!-- 默认的话激活的router-link中有个类名是router-link-active -->
      <!-- active-class: 给激活的router-link类名取别名 -->
      <router-link to="/home" replace active-class="active">首页</router-link>
      <router-link to="/about" replace active-class="active">关于</router-link>
      <router-link to="/user/123" replace active-class="active">用户123</router-link>
      <router-link to="/user/321" replace active-class="active">用户321</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.active {
  color: #f00;
  font-size: 24px;
}
</style>
