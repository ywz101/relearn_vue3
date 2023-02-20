<script>
import ShowMessage from './components/ShowMessage.vue'

export default {
  components: {
    ShowMessage
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="app">
    <ShowMessage title="我是父组件标题">

    </ShowMessage>

    <ShowMessage>
      <!-- 传递了真实的元素, 会将插槽默认值替换掉, 显示父组件传递的真实元素 -->
      <a href="#">哈哈</a>
    </ShowMessage>

    <ShowMessage>
      <!-- 没有任何嵌套内容, 插槽的默认值就会生效 -->
    </ShowMessage>

    <ShowMessage>
      <h2>我是h2元素</h2>
    </ShowMessage>
  </div>
</template>

<style scoped></style>