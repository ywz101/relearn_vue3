<script>
import NavBar from './components/NavBar.vue'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      position: '',
    }
  }
}
</script>

<template>
  <div class="app">
    <NavBar>
      <!-- 在父组件使用具名插槽时, 需要包裹template元素 -->
      <!-- 具名插槽语法格式是: v-slot:(slotName) -->
      <!-- 语法糖: v-slot: => # -->
      <template #left>
        <a href="#">AAAA</a>
      </template>
      <template #center>
        <a href="#">KKKK</a>
      </template>
      <template #right>
        <a href="#">QQQQ</a>
      </template>
    </NavBar>

    <!-- 动态插槽名, 也是支持#语法糖的 -->
    <NavBar>
      <template #[position]>
        <a href="#">哈哈哈哈</a>
      </template>
    </NavBar>

    <button @click=" position = 'left' ">左边</button>
    <button @click=" position = 'center' ">中间</button>
    <button @click=" position = 'right' ">右边</button>
  </div>
</template>

<style scoped></style>