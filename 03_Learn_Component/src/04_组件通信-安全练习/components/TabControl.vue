<script>
  export default {
    props: {
      product: {
        type: Array,
        default: () => ['1', '2', 3]
      }
    },
    data() {
      return {
        
      }
    }
  }
</script>

<template>
  <div class="tab-control">
    <template v-for="item in product">
      <div class="tab-control-item">{{ item }}</div>
    </template> 
  </div>
</template>

<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
  }
  .tab-control-item {
    flex: 1;
  }
</style>