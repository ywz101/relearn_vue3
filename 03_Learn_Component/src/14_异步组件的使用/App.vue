<script>
import { defineAsyncComponent } from 'vue'

const asyncOrange = defineAsyncComponent(() => import('./views/Orange.vue'))
import Apple from './views/Apple.vue'
import Banana from './views/Banana.vue'

export default {
  components: {
    Orange: asyncOrange,
    Apple,
    Banana
  },
  data() {
    return {
      fruits: ['orange', 'apple', 'banana'],
      currentFruit: 'orange',
      message: '我是App',
    }
  },
  methods: {
    tabItemClick(tab) {
      this.currentFruit = tab
    },
    componentClick(payload) {
      this.message = payload
      console.log('oarnge组件中的事件监听成功:', payload)
    },
  }
}
</script>

<template>
  <div class="app">
    <div class="fruits">
      <template v-for="(item, index) in fruits" :key="index">
        <h2 :class="{ active: currentFruit === item }" @click="tabItemClick(item)">
          {{ item }}
        </h2>
      </template>
    </div>
  </div>
  <!-- 动态组件 -->
  <!-- 1.传递参数 -->
  <!-- 2.监听事件 -->
  <keep-alive include="orange,apple">
    <component :is="currentFruit" @orangeClick="componentClick">
    </component>
  </keep-alive>
</template>

<style scoped>
.fruits {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.fruits h2 {
  flex: 1;
}

.active {
  color: rgb(255, 0, 0);
}
</style>