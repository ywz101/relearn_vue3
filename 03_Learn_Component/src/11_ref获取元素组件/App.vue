<script>
  import Home from './components/Home.vue'

  export default {
    components: {
      Home
    },
    data() {
      return {
        
      }
    },
    methods: {
      appClick() {
        console.log('App组件被点击了~')
      }
    }
  }
</script>

<template>
  <div class="app">
    <Home />
  </div>
</template>

<style scoped>

</style>