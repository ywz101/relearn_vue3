<script>
export default {
  data() {
    return {
      message: 'HomeBanner'
    }
  },
  methods: {
    homeBannerClick() {
      console.log('homeBanner被点击了~')
    }
  }
}
</script>

<template>
  <div class="home-banner">
    <h2>{{ message }}</h2>
  </div>

  <div class="abc"></div>
</template>

<style scoped></style>