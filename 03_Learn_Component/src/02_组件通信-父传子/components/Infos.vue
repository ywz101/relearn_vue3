<script>
export default {
  // props: 来接收父组件通过自定义属性形式传过的参数, 
  // 1.数组语法(无法约束参数类型和设置默认值)
  // props: ['myName', 'age', 'height'],

  // 2.对象语法: 给对象(对象需要写成({}))或者数组设置默认值的时候需要以函数的形式
  // (1) () => ({})
  // (2) () => []

  // 3.非props的参数传递
  props: {
    myName: {
      type: String,
      default: 'ywz101'
    },
    age: {
      type: Number,
      default: 100
    },
    height: {
      type: Number,
      default: 2.00
    },
    friend: {
      type: Object,
      default: () => ({
        myName: 'john',
        age: 33,
        height: 1.98
      })
    }
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <!-- 根元素 -->
  <!-- 当同时出现两个div元素时, 就没有默认根元素了 -->
  <!-- 显式的来接收非props的参数: v-bind="$attrs" -->
  <div class="infos" v-bind="$attrs">
    <h2>姓名: {{ myName }}</h2>
    <h2>年龄: {{ age }}</h2>
    <h2>身高: {{ height }}</h2>
    <h2>我的朋友: {{ friend }}</h2>
  </div>

  <div class="ifnos2"></div>
</template>

<style scoped>
  .active {
    color: red;
  }
</style>