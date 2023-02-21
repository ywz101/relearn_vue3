<script>
  import eventBus from './utils/event-bus'

  import Home from './components/Home.vue'
  import Category from './components/Category.vue'

  export default {
    components: {
      Home,
      Category
    },
    data() {
      return {
        name: 'kobe',
        age: '30',
        height: '1.98',
        isShowCategory: true
      }
    },
    methods: {
      categoryHidden() {
        this.isShowCategory = false
      },
      myEventbus(name, age, height) {
        this.name = name
        this.age = age
        this.height = height
      }
    },
    // 在created生命周期函数中去监听
    // xxxx.on
    created() {
      // 1.fetch
      // 2.eventBus
      eventBus.on('ywzEventbus', this.myEventbus)
    },
  }
</script>

<template>
  <div class="app">
    <Home />
    <hr>
    <h2>姓名: {{ name }} - 年龄: {{ age }} - 身高: {{ height }}</h2>
    <hr>
    <Category v-if="isShowCategory"/>
    <button @click="categoryHidden()">隐藏Category</button>
  </div>
</template>

<style scoped>

</style>