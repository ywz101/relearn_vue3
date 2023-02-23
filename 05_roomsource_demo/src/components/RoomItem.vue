<script setup>
import { computed } from 'vue'

const props = defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})

const titleInfo = computed(() => {
  return {
    text: props.item.verify_info.messages.join(' '),
    color: props.item.verify_info.text_color
  }
})

const bottomInfo = computed(() => {
  return {
    content: props.item.bottom_info.content,
    style: {
      color: props.item.bottom_info.content_color,
      fontSize: props.item.bottom_info.font_size + 'px'
    }
  }
})
</script>

<template>
  <div class="room-item">
    <div class="item-inner">
      <div class="cover">
        <img :src="item.picture_url" alt="">
      </div>
      <div class="info">
        <div class="title" :style="{ color: titleInfo.color }">
          {{ titleInfo.text }}
        </div>
        <div class="name">
          {{ item.name }}
        </div>
        <div class="price">
          {{ item.price_format + '/晚' }}
        </div>
        <div class="bottom-info" :style="bottomInfo.style">
          {{ bottomInfo.content }}
        </div>
      </div>
    </div>

  </div>
</template>

<style lang="less" scoped>
.room-item {
  width: 33.33%;

  .item-inner {
    margin: 20px 8px 10px;
    font-weight: 700;

    img {
      width: 100%;
    }

    .title {
      margin: 8px;
      font: 400 12px '';
    }

    .name {
      font-size: 16px;
      line-height: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    .price {
      margin: 3px;
      font: 400 14px '';
    }
  }
}
</style>