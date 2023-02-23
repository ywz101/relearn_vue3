<script>
export default {
  setup() {
    const printOk = () => {
      console.log('ok')
    }

    return {
      printOk
    }
  }
}
</script>

<template>
  <div class="show-info">
    <h2>ShowInfo组件</h2>
    <button @click="printOk">printOk</button>
  </div>
</template>

<style scoped></style>