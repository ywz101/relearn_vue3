<script>
  import eventBus from './utils/event-bus'

  import Home from './components/Home.vue'

  export default {
    components: {
      Home
    },
    data() {
      return {
        name: 'kobe',
        age: '30',
        height: '1.98'
      }
    },
    // 在created生命周期函数中去监听
    // xxxx.on
    created() {
      // 1.fetch

      // 2.eventBus
      eventBus.on('ywzEventbus', (name, age, height) => {
        this.name = name
        this.age = age
        this.height = height
      })
    }
  }
</script>

<template>
  <div class="app">
    <Home />
    <hr>
    <h2>姓名: {{ name }} - 年龄: {{ age }} - 身高: {{ height }}</h2>
  </div>
</template>

<style scoped>

</style>