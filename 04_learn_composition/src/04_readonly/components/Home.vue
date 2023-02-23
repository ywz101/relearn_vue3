<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => ({})
    },
    roInfo: {
      type: Object,
      default: () => ({})
    }
  },
  emits: ['changeInfoName', 'changeRoInfoName'],
  setup(props, context) {
    const showInfoBtnClick = () => {
      context.emit('changeInfoName', 'kobe')
    }

    const roInfoBtnClick = () => {
      context.emit('changeRoInfoName', 'james')
    }

    return {
      showInfoBtnClick,
      roInfoBtnClick
    }
  }
}
</script>

<template>
  <div class="home">
    <h2>Home组件: {{ info }}</h2>
    <button @click="showInfoBtnClick">修改info.name</button>
    <hr>
    <h2>Home组件: {{ roInfo }}</h2>
    <button @click="roInfoBtnClick">修改roInfo.name</button>
  </div>
</template>

<style scoped></style>