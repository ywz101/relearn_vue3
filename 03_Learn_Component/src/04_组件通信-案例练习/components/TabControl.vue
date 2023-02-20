<script>
export default {
  emits: ['tabItemClick'],
  props: {
    titles: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tabItemClick(index) {
      this.currentIndex = index
      this.$emit('tabItemClick', index)
    }
  }
}
</script>

<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="index">
      <div class="tab-control-item"
           :class="{ active: index === currentIndex }"
           @click="tabItemClick(index)">
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<style scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item.active {
  font-weight: 700;
  color: rgb(255, 0, 0);
}

.tab-control-item span {
  padding: 8px;
  border-bottom: 3px solid transparent;
}
.tab-control-item.active span {
  padding: 8px;
  border-bottom: 3px solid rgb(255, 0, 0);
}
</style>