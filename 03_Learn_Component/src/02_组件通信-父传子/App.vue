<script>
import Infos from './components/Infos.vue'

export default {
  components: {
    Infos
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="app">
    <!-- 父组件通过书写自定义属性的形式传值给子组件 -->
    <!-- kobe -->
    <Infos my-name="kobe" :age="18" :height="1.98" />
    <hr>
    <!-- james -->
    <Infos my-name="james" :age="13" :height="2.06" />
    <hr>
    <!-- 默认的不传任何的 -->
    <Infos :height="1.88" />
    <hr>
    <!-- 传一个对象类型的数据 -->
    <Infos :friend="{ myName: 'nicholas', age: 30, height: 1.98 }" />

    <!-- 非props传递 -->
    <Infos class="active" />
  </div>
</template>

<style scoped></style>