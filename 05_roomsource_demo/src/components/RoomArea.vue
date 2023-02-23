<script setup>
// 组件导入
import AreaHeader from './AreaHeader.vue'
import RoomItem from './RoomItem.vue'

defineProps({
  areaData: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <div class="app">
    <!-- 标题区 -->
    <AreaHeader :title="areaData.title" :subtitle="areaData.subtitle" />

    <!-- 房间列表 -->
    <div class="room-list">
      <template v-for="item in areaData.list" :key="item.id">
        <RoomItem :item="item" />
      </template>
    </div>
  </div>
</template>

<style scoped>
.room-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -8px;
}
</style>