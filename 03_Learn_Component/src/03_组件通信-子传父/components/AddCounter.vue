<script>
  export default {
    // 注册, (多人开发时)让开发者之前更好的观察到当前发射出去的事件名称
    // 1.数组语法(开发中常用)
    emits: ['add'],

    // 2.对象语法
    // emits: {
    //   add: function (count) {
    //     if (count <= 0) { // 如果不符合这边的条件, 会在控制台打印柔性警告
    //       return true
    //     }
    //     return false
    //   }
    // },
    data() {
      return {
        
      }
    },
    methods: {
      addClick(count) {
        this.$emit('add', count)
      }
    }
  }
</script>

<template>
  <div class="add">
    <button @click="addClick(1)">+1</button>
    <button @click="addClick(5)">+5</button>
    <button @click="addClick(10)">+10</button>
  </div>
</template>

<style scoped>

</style>