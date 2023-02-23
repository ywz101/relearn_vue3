<script>
import useCounter from './hooks/useCounter'

import Home from './views/Home.vue'

export default {
  components: {
    Home
  },
  setup() {
    return {
      ...useCounter()
    }
  }
}
</script>

<template>
  <div class="app">
    <h2>App组件Counter: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <hr>
    <Home />
  </div>
</template>

<style scoped></style>