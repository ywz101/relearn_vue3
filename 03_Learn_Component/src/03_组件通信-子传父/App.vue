<script>
import AddCounter from './components/AddCounter.vue'
import SubCounter from './components/SubCounter.vue'

export default {
  components: {
    AddCounter,
    SubCounter
  },
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    addBtnClick(count) {
      this.counter += count
    },
    subBtnClick(count) {
      this.counter -= count
    }
  }
}
</script>

<template>
  <h2>当前计数: {{ counter }}</h2>
  <!-- add -->
  <AddCounter @add=addBtnClick />
  <!-- sub -->
  <SubCounter @sub="subBtnClick"/>
</template>

<style scoped></style>