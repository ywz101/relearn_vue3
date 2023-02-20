<script>
import TabControl from './components/TabControl.vue'

export default {
  components: {
    TabControl
  },
  data() {
    return {
      currentIndex: 0,
      pageContents: ['衣服页面', '鞋子页面', '裤子页面']
    }
  },
  methods: {
    // vue底层的边界容忍值怎么样(高)
    tabItemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<template>
  <div class="app">
    <!-- 没有具名的插槽本质上名字是default -->
    <!-- 插槽作用域是反向的, 并且需要传到一个类似对象的集合中, 再通过打点为来访问(使用) -->
    <TabControl :titles="['衣服', '鞋子', '裤子']" @tabItemClick="tabItemClick">
      <template #default="props">
        <a href="#">{{ props.item }}</a>
      </template>
    </TabControl>
    <h2>{{ pageContents[currentIndex] }}</h2>

    <hr>

    <TabControl :titles="['衣服', '鞋子', '裤子']" @tabItemClick="tabItemClick">
      <template #default="props">
        <button href="#">{{ props.item }}</button>
      </template>
    </TabControl>
    <h2>{{ pageContents[currentIndex] }}</h2>

    <hr>

    <TabControl :titles="['衣服', '鞋子', '裤子']" @tabItemClick="tabItemClick">
      <template #default="props">
        <p href="#">{{ props.abc }}</p>
      </template>
    </TabControl>
    <h2>{{ pageContents[currentIndex] }}</h2>

  </div>
</template>

<style scoped></style>

<!-- vue-loader => template => createVNode -->