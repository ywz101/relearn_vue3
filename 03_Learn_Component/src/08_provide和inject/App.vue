<script>
  import { computed } from 'vue'
  import Home from './components/Home.vue'

  export default {
    components: {
      Home
    },
    data() {
      return {
        message: 'Hello Vue' 
      }
    },
    provide() {
      return {
        name: 'ywz101',
        age: 18,
        message: computed(() => this.message)
      }
    },
    methods: {
      changeMessage() {
        this.message = '我是data中的message, 被修改了~'
      }
    }
  }
</script>

<template>
  <div class="app">
    <Home />
    <hr>
    <h2>根组件的中message: {{ message }}</h2>
    <button @click="changeMessage()">修改message</button>
  </div>
</template>

<style scoped>

</style>