<script>
  import TabControl from './components/TabControl.vue'

  export default {
    components: {
      TabControl
    },
    data() {
      return {
        
      }
    }
  }
</script>

<template>
  <div class="app">
    <TabControl :product="['衣服', '裤子', '鞋子']" />
  </div>
</template>

<style scoped>

</style>