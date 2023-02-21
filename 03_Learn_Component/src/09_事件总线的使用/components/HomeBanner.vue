<script>
  import eventBus from '../utils/event-bus'

  export default {
    emits: ['ywzEventbus'],
    data() {
      return {
        
      }
    },
    methods: {
      eventBusbtnClick() {
        eventBus.emit('ywzEventbus', 'ywz101', 18, 1.88)       
      }
    }
  }
</script>

<template>
  <div class="home-banner">
    <button @click="eventBusbtnClick()">事件总线开关</button>
  </div>
</template>

<style scoped>

</style>