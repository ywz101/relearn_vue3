<script>
import { reactive, watch } from 'vue'

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

    return {
      info,
      changeInfoName,
      changeInfoFriendName
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
  </div>
</template>

<style scoped></style>