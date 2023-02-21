<script>
  import Counter from './views/Counter.vue'
  
  export default {
    components: {
      Counter
    },
    data() {
      return {
        appCounter: 101
      }
    }
  }
</script>

<template>
  <div class="app">
    <!-- 组件中的v-model -->
    <!-- 1.modelValue 或者 model-value -->
    <!-- 2.update:modelValue -->
    <!-- <Counter v-model="appCounter" /> -->

    <Counter :modelValue="appCounter"
             @update:modelValue="appCounter = $event"/>

    <h2>AppCounter: {{ appCounter }}</h2>
  </div>
</template>

<style scoped>

</style>