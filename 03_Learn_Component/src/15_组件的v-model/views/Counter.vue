<script>
export default {
  emits: ['update:modelValue'],
  props: ['modelValue'],
  data() {
    return {
      
    }
  },
  methods: {
    updateBtnClick() {
      this.$emit('update:modelValue', 999)
    }
  }
}
</script>

<template>
  <div class="counter">
    <h2>CounterCounter: {{ modelValue }}</h2>
    <button @click="updateBtnClick">更新modelValue</button>
  </div>
</template>

<style scoped></style>