<script>
  import Counter from './views/CounterAlias.vue'
  
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

    <!-- 取别名后是两个同步的, 例如: props: ['别名']中的参数, 
                      事件       emits: ['update:别名'] 
                                this.$emit('update:别名', 参数)-->
                                
    <Counter v-model:counter="appCounter" />

    <!-- 非v-model但是等价于v-model的普通写法 -->
    <!-- <Counter :modelValue="appCounter"
             @update:modelValue="appCounter = $event"/> -->

    <h2>AppCounter: {{ appCounter }}</h2>
  </div>
</template>

<style scoped>

</style>