<script>
import Orange from './views/Orange.vue'
import Apple from './views/Apple.vue'
import Banana from './views/Banana.vue'

export default {
  components: {
    Orange,
    Apple,
    Banana
  },
  data() {
    return {
      fruits: ['orange', 'apple', 'banana'],
      currentFruit: 'orange'
    }
  },
  methods: {
    tabItemClick(tab) {
      this.currentFruit = tab
    }
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
  <component :is="currentFruit"></component>
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