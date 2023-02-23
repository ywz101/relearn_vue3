<script setup>
import { ref, onMounted } from 'vue'
import Home from './views/Home.vue'
// 1.script顶层中的内容可以直接在template模板中使用
const message = ref('Hello setup')

const homeBtnClick = (payload) => {
  message.value = payload
}

// 3.调用Home组件中的foo函数
const homeRef = ref()
onMounted(() => {
  homeRef.value.foo()
  homeRef.value.foo()
})

</script>

<template>
  <div class="app">
    <h2>message: {{ message }}</h2>
    <hr>
    <Home name = 'ywz101'
          :age = 18
          @home-btn-click="homeBtnClick"
          ref="homeRef" />
  </div>
</template>

<style scoped></style>