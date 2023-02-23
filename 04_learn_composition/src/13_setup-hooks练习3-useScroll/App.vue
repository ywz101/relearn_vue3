<script setup>
import useScroll from './hooks/useScroll'

const { scrollPosition } = useScroll()
</script>

<template>
  <div class="app">
    <h2>App组件</h2>
    <h2>X: {{ scrollPosition.x }}</h2>
    <h2>Y: {{ scrollPosition.y }}</h2>
  </div>
</template>

<style>
body {
  width: 2000px;
  height: 2000px;
}
</style>