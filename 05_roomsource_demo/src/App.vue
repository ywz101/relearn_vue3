<script setup>
import { ref } from 'vue'
// RoomArea组件导入
import RoomArea from './components/RoomArea.vue'

const highScore = ref({})

// 模拟网络请求, 1s后响应
setTimeout(() => {
  // josn导入
  import('./data/high_score.json').then(res => {
    highScore.value = res.default
  })
}, 1000)
</script>

<template>
  <div class="app">
    <RoomArea :areaData="highScore" />
  </div>
</template>

<style lang="less" scoped>
.app {
  margin: 0 auto;
  padding: 40px;
  width: 1032px;


}
</style>