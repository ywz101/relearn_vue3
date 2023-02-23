<script>
import { onMounted } from 'vue'
import useScroll from './hooks/useScroll'

export default {
  setup() {
    onMounted(() => {
      console.log(myY.value)
    })

    const { myY } = useScroll()

    return {
      myY
    }
  }
}
</script>

<template>
  <div class="app">
    <h2>App组件</h2>
  </div>
</template>

<style>
body {
  height: 2000px;
}
</style>