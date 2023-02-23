<script>
import { ref, onMounted } from 'vue'

import ShowInfo from './components/ShowInfo.vue'

export default {
  components: {
    ShowInfo
  },
  setup() {
    // 1. 获取元素
    const h2Ref = ref()

    const getH2Element = () => {
      // 此时可以正常获取h2元素
      console.log(h2Ref)
    }



    /* 此时获取到的是undefined,
       因为元素在这个时机点,
       还没有完全被挂载
    */
    console.log(h2Ref) // undefined

    // 2. 获取组件实例
    const showInfoRef = ref()

    onMounted(() => {
      // 此时可以正常获取h2元素
      console.log(h2Ref.value)
      // 获取组件实例
      console.log(showInfoRef.value)
      // 组件实例需要自己手动解包xxx.value
      // 调用组件实例的方法
      showInfoRef.value.printOk()

      // 在template模板中, 有可能会有自动解包的操作, 但是最好在使用的时候, 统一加上.value
    })

    return {
      h2Ref,
      getH2Element,
      showInfoRef
    }
  }
}
</script>

<template>
  <div class="app">
    <h2 ref="h2Ref">App组件</h2>
    <button @click="getH2Element">获取h2元素</button>
    <hr>
    <ShowInfo ref="showInfoRef" />
  </div>
</template>

<style scoped></style>