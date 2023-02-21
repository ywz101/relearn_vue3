<script>
import messageMixin from '../mixins/message-mixin'

export default {
  // 全局组件: component
  // 局部组件: components

  // 全局混入: mixin
  // 局部混入: mixins
  mixins: [messageMixin],
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="home">
    <h2>Home组件</h2>
  </div>
</template>

<style scoped></style>