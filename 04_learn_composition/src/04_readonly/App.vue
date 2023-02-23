<script>
import { reactive, readonly } from 'vue'

import Home from './components/Home.vue'

export default {
  components: {
    Home
  },
  setup() {
    // 普通的info
    const info = reactive({
      name: 'ywz101',
      age: 18
    })
    const changeInfoName = (payload) => {
      info.name = payload
    }

    // 只读的info
    const roInfo = readonly(info)
    const changeRoInfoName = (payload) => {
      info.name = payload
    }

    return {
      info,
      changeInfoName,
      roInfo,
      changeRoInfoName
    }
  }
}
</script>

<template>
  <div class="app">
    <Home :info="info" 
          @changeInfoName="changeInfoName"
          :roInfo="roInfo"
          @changeRoInfoName="changeRoInfoName" />
  </div>
</template>

<style scoped></style>