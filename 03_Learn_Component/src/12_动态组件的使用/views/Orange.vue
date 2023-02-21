<script>
export default {
  emits: ['orangeClick'],
  props: {
    name: {
      type: String,
      default: 'kobe'
    },
    age: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {

    }
  },
  methods: {
    orangeClick() {
      this.$emit('orangeClick', '我是orange')
    }
  }
}
</script>

<template>
  <div class="orange">
    <h2>Orange组件</h2>
    <h2>name: {{ name }} - age: {{ age }}</h2>
    <button @click="orangeClick">发射orangeClick事件</button>
  </div>
</template>

<style scoped></style>