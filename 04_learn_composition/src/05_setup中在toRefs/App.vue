<script>
import { reactive, toRefs, toRef } from 'vue'

export default {
  setup() {
    const info = reactive({
      name: 'ywz101',
      age: 18,
      height: 1.88
    })

    // 解构info
    // 解构后的数据会失去响应式
    // 多个参数恢复响应式使用toRefs()
    const { name, age } = toRefs(info)

    // 单个参数恢复响应式使用toRef()
    const height = toRef(info, 'height')

    return {
      info,
      name,
      age,
      height
    }
  }
}
</script>

<template>
  <div class="app">
    <h2>App-info: {{ name }} - {{ age }} - {{ height }}</h2>
    <button @click="age++">增加年龄</button>
    <button @click="height += 0.01">增加身高</button>
  </div>
</template>

<style scoped></style>