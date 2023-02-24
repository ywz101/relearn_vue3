<script setup>

</script>

<template>
  <div class="not-found">
    <h2>您输入的路径{{ $route.params.pathMatch }}不正确, 请输入正确的路径!</h2>
  </div>
</template>

<style scoped>
  h2 {
    color: #f00;
  }
</style>