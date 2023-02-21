<script>
export default {
  emits: ['update:counter'],
  props: ['counter'],
  data() {
    return {
      
    }
  },
  methods: {
    updateBtnClick() {
      this.$emit('update:counter', 999)
    }
  }
}
</script>

<template>
  <div class="counter">
    <h2>CounterCounter: {{ counter }}</h2>
    <button @click="updateBtnClick">更新modelValue</button>
  </div>
</template>

<style scoped></style>