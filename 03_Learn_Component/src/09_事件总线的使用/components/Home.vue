<script>
import eventBus from '@/09_事件总线的使用/utils/event-bus'
import HomeBanner from './HomeBanner.vue'

export default {
  components: {
    HomeBanner
  },
  data() {
    return {
      name: 'james',
      age: 20,
      height: 2.06
    }
  },
  // mitt
  created() {
    eventBus.on('ywzEventbus', (name, age, height) => {
      this.name = name
      this.age = age
      this.height = height
    })
  }
}
</script>

<template>
  <div class="home">
    <HomeBanner />
    <h2>Home中的信息: {{ name }} - {{ age }} - {{ height }}</h2>
  </div>
</template>

<style scoped></style>