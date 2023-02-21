<script>
import HomeBanner from './HomeBanner.vue'

export default {
  components: {
    HomeBanner
  },
  data() {
    return {
      info: '我是Home中的信息'
    }
  },
  methods: {
    btnClick() {
      // 获取自己组件中的元素
      console.log('获取h2元素:', this.$refs.info)
      // 获取其它的组件实例
      console.log('获取HomeBanner组件实例:', this.$refs.homeBanner)
      // 调用其它组件实例中的方法
      this.$refs.homeBanner.homeBannerClick()
      // 获取其它组件实例中的元素
      // 如果只有一个根元素获取的就是正常的根元素
      // console.log(this.$refs.homeBanner.$el)
      // 如果有多个根元素获取的就是第一个Node节点: #text
      // console.log(this.$refs.homeBanner.$el)
      // 可以通过nextElementSibling获取正常的元素
      // console.log(this.$refs.homeBanner.$el.nextElementSibling)

      // this.$parent: 获取父组件
      // this.$parent.appClick()

      // this.$root: 获取根组件
      this.$root.appClick()
    }
  }
}
</script>

<template>
  <div class="home">
    <h2 ref="info">{{ info }}</h2>
    <button @click="btnClick()">按钮</button>

    <hr>

    <HomeBanner ref="homeBanner" />
  </div>
</template>

<style scoped></style>