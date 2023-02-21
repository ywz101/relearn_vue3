<script>
  export default {
    data() {
      return {
        message: 'Hello Vue',
        isShowMessage: true
      }
    },
    // 生命周期函数
    // 创建之前
    beforeCreate() {
      console.log('beforeCreate')
    },
    // 创建成功
    created() {
      console.log('created')
      // 1.发送网络请求: ajax/fetch/axios
      // 2.监听事件
      // 3.this.$watch侦听
    },
    // 挂载之前
    beforeMount() {
      console.log('beforeMount')
    },
    // 挂载成功: template => VNode => 真实DOM
    mounted() {
      console.log('mounted')
      // 1.this.$refs获取元素
      // 2.使用元素
    },
    // 更新之前: 更新之前和更新成功, 这些步骤通常会进行多次的循环
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    // 更新成功
    updated() {
      console.log('updated')
    },
    // 卸载之前
    beforeUnmount() {
      console.log('beforeUnmount')
    },
    // 卸载成功
    unmounted() {
      console.log('unmounted')
    }
  }
</script>

<template>
  <div class="home">
    <h2>消息: {{ message }}</h2>
    <button @click="message = 'hello ok'">修改message</button>

    <button @click="isShowMessage = !isShowMessage"
            v-if="isShowMessage">
      显式/隐藏
    </button>
  </div>
</template>

<style scoped>

</style>