<script>
import eventBus from '../utils/event-bus'

export default {
  data() {
    return {

    }
  },
  methods: {
    categoryHidden() {
      this.isShowCategory = false
    },
    myEventbus(name, age, height) {
      this.name = name
      this.age = age
      this.height = height
    }
  },
  created() {
    // 1.fetch
    console.log('created执行')
    // 2.eventBus
    eventBus.on('ywzEventbus', this.myEventbus)
  },
  // 在组件被销毁的时候触发
  unmounted() {
    console.log('unmounted执行')
    eventBus.off('ywzEventbus', this.myEventbus)
  }
}
</script>

<template>
  <div class="category">
    <h2>Category</h2>
  </div>
</template>

<style scoped></style>