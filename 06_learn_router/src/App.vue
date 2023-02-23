<script setup>
// 1072集
</script>

<template>
  <div class="app">
    <h2>App组件</h2>
    <nav class="nav">
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>
