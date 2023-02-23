<script>
import useTitle from '../hooks/useTitle'

export default {
  setup() {
    useTitle('关于')   

    return {}
  }
}
</script>

<template>
  <div class="about">
    <h2>About组件</h2>
  </div>
</template>

<style scoped></style>