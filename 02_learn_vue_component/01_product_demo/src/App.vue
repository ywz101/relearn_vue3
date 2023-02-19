<script>
  import Counter from './Counter.vue'

  export default {
    // 注册局部组件
    components: {
      Counter
    },
    data() {
      return {
        message: 'Hello Vue CLI'
      }
    }
  }
</script>

<template>
  <h2>{{ message }}</h2>

  <hr>

  <!-- 使用组件 -->
  <!-- 建议使用大驼峰的写法: 聚焦我们的视野, 一目也然的就知道此处是组件 -->
  <Counter></Counter>
</template>

<style>

</style>