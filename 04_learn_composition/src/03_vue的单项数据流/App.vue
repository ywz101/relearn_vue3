<script>
import { reactive } from 'vue'

import Home from './components/Home.vue'

export default {
  components: {
    Home
  },
  setup() {
    const info = reactive({
      name: 'ywz101',
      age: 18
    })

    const changeInfoName = (payload) => {
      info.name = payload
    }

    return {
      info,
      changeInfoName
    }
  }
}
</script>

<template>
  <div class="app">
    <Home :info="info" @changeInfoName="changeInfoName" />
  </div>
</template>

<style scoped></style>