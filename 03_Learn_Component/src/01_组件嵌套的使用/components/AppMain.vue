<script>
import AppBanner from './AppBanner.vue'
import ProductList from './ProductList.vue'

export default {
  components: {
    AppBanner,
    ProductList
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <main class="main">
    <!-- AppBanner -->
    <AppBanner />
    <!-- ProductList -->
    <ProductList />
  </main>
</template>

<style scoped>
  .main {
    background-color: orange;
  }
</style>