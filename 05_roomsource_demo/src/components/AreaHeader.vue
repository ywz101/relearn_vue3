<script setup>
defineProps({
  title: {
    type: String,
    default: '我是主标题'
  },
  subtitle: {
    type: String,
    default: '我是子标题'
  }
})
</script>

<template>
  <div class="area-header">
    <h2>{{ title }}</h2>
    <h3>{{ subtitle }}</h3>
  </div>
</template>

<style lang="less" scoped>
  .area-header {
    height: 84px;

    h2 {
      font: 700 22px '';
      color: #000;
    }

    h3 {
      margin-top: 20px;
      font-size: 14px;
      color: #333;
    }
  }
</style>