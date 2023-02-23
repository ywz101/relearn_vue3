<script>
import { provide, ref, reactive } from 'vue'

import Home from './components/Home.vue'

export default {
  components: {
    Home
  },
  setup() {
    // 恢复响应式数据
    // const name = ref('ywz101')

    const info = reactive({
      name: 'ywz101',
      age: 18
    })

    // provide('name', name)   
    // provide('age', 18)   

    provide('info', info)

    // 修改姓名函数
    const changeName = () => {
      info.name = 'kobe'
    }

    return {
      info,
      changeName
    }
  }
}
</script>

<template>
  <div class="app">
    <h2>App组件: {{ info.name }}</h2>
    <button @click="changeName">修改name</button>
    <Home />
  </div>
</template>

<style scoped></style>