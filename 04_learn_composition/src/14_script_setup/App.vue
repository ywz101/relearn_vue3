<script setup>
/* script_setup语法的特性: 每次使用组件实例的时候都会执行一次setup函数,
   和原来的只在组件被创建的时候执行一次setup函数是不同的
*/
import Home from './views/Home.vue'

const message = 'Hello setup'
</script>

<template>
  <div class="app">
    <Home />
    <Home />
    <h2>{{ message }}</h2>
  </div>
</template>

<style scoped></style>