<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {
      subBtnClick(count) {
        this.$emit('sub', count)
      }
    }
  }
</script>

<template>
  <div class="sub">
    <button @click="subBtnClick(1)">-1</button>
    <button @click="subBtnClick(5)">-5</button>
    <button @click="subBtnClick(10)">-10</button>
  </div>
</template>

<style scoped>

</style>