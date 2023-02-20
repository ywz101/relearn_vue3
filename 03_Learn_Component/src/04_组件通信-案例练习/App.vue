<script>
  import TabControl from './components/TabControl.vue'

  export default {
    components: {
      TabControl
    },
    data() {
      return {
        currentIndex: 0,
        pageContents: ['衣服页面', '鞋子页面', '裤子页面']       
      }
    },
    methods: {
      // vue底层的边界容忍值怎么样(高)
      tabItemClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<template>
  <div class="app">
    <TabControl :titles="['衣服', '鞋子', '裤子']"
                @tabItemClick="tabItemClick" />
    <h2>{{ pageContents[currentIndex] }}</h2>
  </div>
</template>

<style scoped>

</style>