<script setup>
// 1.参数
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  age: {
    type: Number,
    default: 0
  }
})

// 2.发出事件
const emit = defineEmits(['homeBtnClick'])
const homeBtnClick = () => {
  emit('homeBtnClick', 'ok')
}

// 3.暴露内容
const foo = () => {
  console.log('foo function')
}
defineExpose({
  foo
})
</script>

<template>
  <div class="home">
    <h2>Home组件: {{ name }} - {{ age }}</h2>
    <button @click="homeBtnClick">发射事件</button>
    <button @click="name = 'kobe'">修改name</button>
    <button @click="age++">修改age</button>
  </div>
</template>

<style scoped></style>