<script>
export default {
  props: {
    title: {
      type: String,
      default: '我是默认标题'
    }
  },
  data() {
    return {

    }
  }
}
</script>

<template>
  <div class="show-message">
    <!-- 插槽写在子组件, 父组件传入真实的元素 -->
    <slot>
      <!-- 插槽默认值 -->
      <!-- @只代表src -->
      <img src="@/img/Snipaste_2023-02-20_21-30-51.png" alt="">
    </slot>
  </div>
</template>

<style scoped>
.show-message {
  margin-top: 10px;
  width: 300px;
  height: 200px;
  border: 10px solid #f00;
}

img {
  width: 100%;
}
</style>