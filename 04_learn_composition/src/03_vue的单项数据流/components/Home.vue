<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['changeInfoName'],
  setup(props, context) {
    const showInfoBtnClick = () => {
      context.emit('changeInfoName', 'kobe')
    }

    return {
      showInfoBtnClick
    }
  }
}
</script>

<template>
  <div class="home">
    <h2>{{ info }}</h2>
    <button @click="showInfoBtnClick">修改info.name</button>
  </div>
</template>

<style scoped></style>