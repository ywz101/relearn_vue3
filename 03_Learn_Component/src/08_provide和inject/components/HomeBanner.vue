<script>
  export default {
    data() {
      return {
        
      }
    },
    inject: ['name', 'age', 'message']
  }
</script>

<template>
  <div class="home-banner">
    <h2>姓名: {{ name }} - 年龄: {{ age }} - 消息: {{ message }}</h2>
  </div>
</template>

<style scoped>

</style>