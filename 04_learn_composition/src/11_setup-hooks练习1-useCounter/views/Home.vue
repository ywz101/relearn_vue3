<script>
import useCounter from '../hooks/useCounter'

export default {
  setup() {

    return {
      ...useCounter()
    }
  }
}
</script>

<template>
  <div class="home">
    <h2>Home中的计数器: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<style scoped></style>