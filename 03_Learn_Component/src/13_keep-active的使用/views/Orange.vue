<script>
import { removeProperties } from '@babel/types'

export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    orangeClick() {
      this.$emit('orangeClick', '我是orange')
    },
    increment() {
      this.counter++
    }
  },
  unmounted() {
    console.log('orange unmounted~')
  },
  created() {
    console.log('orange created~')
  },
  // 针对于keep-alive的两个生命函数:
  activated() {
    console.log('1111')
  },
  deactivated() {
    console.log('2222')
  }
}
</script>

<template>
  <div class="orange">
    <h2>Orange组件</h2>
    <hr>
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<style scoped></style>