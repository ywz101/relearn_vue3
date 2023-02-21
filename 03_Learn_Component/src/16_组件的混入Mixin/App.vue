<script>
import messageMixin from './mixins/message-mixin'
import Home from './views/Home.vue'
import Banner from './views/Banner.vue'
import Category from './views/Category.vue'

export default {
  mixins: [messageMixin],

  components: {
    Home,
    Banner,
    Category
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="app">
    <Home />
    <Banner />
    <Category />
  </div>
</template>

<style scoped></style>