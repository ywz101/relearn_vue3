<script>
import { reactive, ref } from 'vue'

export default {
  setup() {
    // 定义普通的数据, 可以正常被使用
    // 缺点: 数据不是响应式的  
    let message = 'Hello World'

    const changeMessage = () => {
      message = '123'
      console.log(message) // 值可以被修改, 但是无法被响应式渲染显示
    }

    // 定义响应式数据
    // reactive函数: 用于定义复杂类型(对象、数组)的数据(并且多个数据之前有关系的)
    const account = reactive({
      username: 'ywz101',
      password: '123456'
    })
    // 修改账号
    const changeAccount = () => {
      account.username = 'kobe'
      account.password = '123abc'
    }

    // ref函数: 用于定义简单类型的数据(也可以定义复杂类型数据)
    const counter = ref(0)
    // 修改counter
    const increment = () => {
      counter.value++
    }
    return {
      message,
      changeMessage,
      account,
      changeAccount,
      counter,
      increment
    }
  }
}
</script>

<template>
  <div class="app">
    <!-- message: 非响应式的普通数据 -->
    <h2>message: {{ message }}</h2>
    <button @click="changeMessage">修改message</button>
    <hr>
    <!-- account: reactive响应式数据 -->
    <h2>账号: {{ account.username }}</h2>
    <h2>密码: {{ account.password }}</h2>
    <button @click="changeAccount">修改account</button>
    <hr>
    <!-- counter: ref响应式数据 -->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<style scoped></style>