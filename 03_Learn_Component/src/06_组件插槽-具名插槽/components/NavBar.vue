<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>

<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">
        left
      </slot>
    </div>

    <div class="center">
      <slot name="center">
        center
      </slot>
    </div>

    <div class="right">
      <slot name="right">
        right
      </slot>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  display: flex;
  margin-top: 10px;
  height: 44px;
  line-height: 44px;
  text-align: center;
}

.left {
  width: 80px;
  background-color: pink;
}

.center {
  flex: 1;
  background-color: yellowgreen;
}

.right {
  width: 80px;
  background-color: skyblue;
}
</style>