<script>
import { onMounted, onUpdated } from 'vue'

export default {
  /* 在Composition API中的setup函数中可以直接发起网络请求,
   已经没有了beforeCreate和created生命周期函数 */
  setup() {
    onMounted(() => {
      console.log('111')
    })

    onUpdated(() => {
      console.log('222')
    })
    return {}
  }
}
</script>

<template>
  <div class="app">

  </div>
</template>

<style scoped></style>