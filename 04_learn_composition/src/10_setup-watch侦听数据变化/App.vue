<script>
import { reactive, watch, watchEffect, ref } from 'vue'

export default {
  setup() {
    const info = reactive({
      name: 'ywz101',
      age: 18,
      friend: {
        name: 'james'
      }
    })

    // 此时info其实是Proxy代理的
    // 默认对于reactive这种响应式的数据是有做深度侦听的
    // watch(info, (newValue, oldValue) => {
    //   console.log(newValue, oldValue)
    // })

    // 1.watch
    // 侦听info原始对象, 默认不会深度侦听
    watch(() => ({ ...info }), (newValue, oldValue) => {
      console.log(newValue, oldValue)
    }, {
      deep: true
    })

    const changeInfoName = () => {
      info.name = 'kobe'
    }

    const changeInfoFriendName = () => {
      info.friend.name = 'nicholas'
    }

    // 计数器案例
    const counter = ref(0)
    const increment = () => {
      counter.value++
    }
    // 2.watchEffect: 
    // (0) 不需要再像watch侦听一样, 写好侦听源了
    // (1) watchEffect函数自动执行一次 
    // (2) 可以自动收集依赖
    // (3) 停止watchEffect, 它会接收返回值, 当调用返回的时候就会停止
    const stopWatchEffect = watchEffect(() => {
      console.log('-----------', counter.value)
      if (counter.value >= 10) {
        stopWatchEffect()
      }
    })

    return {
      info,
      changeInfoName,
      changeInfoFriendName,
      counter,
      increment
    }
  }
}
</script>

<template>
  <div class="app">
    <h2>InfoName: {{ info.name }}</h2>
    <h2>InfoFriendName: {{ info.friend.name }}</h2>
    <button @click="changeInfoName">修改info.name</button>
    <button @click="changeInfoFriendName">修改info.name</button>
    <hr>
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<style scoped></style>