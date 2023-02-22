<script>
import useCounter from '../hooks/counter'

export default {
  setup() {
    return { ...useCounter() }
  }
}
</script>

<template>
  <div class="app">
    <!-- ref在template模板中, 会有自动的解包的操作, 无需xxx.value -->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<style scoped></style>