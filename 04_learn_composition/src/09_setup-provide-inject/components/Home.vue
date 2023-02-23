<script>
import { inject } from 'vue'

export default {
  setup() {
    const info = inject('info')   

    return {
      info
    }
  }
}
</script>

<template>
  <div class="home">
    <h2>{{ info.name }} - {{ info.age }}</h2>
  </div>
</template>

<style scoped></style>