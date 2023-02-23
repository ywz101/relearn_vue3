<script>
import { ref } from 'vue'
import Home from './views/Home.vue'
import About from './views/About.vue'

export default {
  components: {
    Home,
    About
  },
  setup() {
    const currentPage = ref('home')

    return {
      currentPage
    }
  }
}
</script>

<template>
  <div class="app">
    <button @click="currentPage = 'home'">Home</button>
    <button @click="currentPage = 'about'">About</button>
    <component :is="currentPage"></component>
  </div>
</template>

<style scoped></style>