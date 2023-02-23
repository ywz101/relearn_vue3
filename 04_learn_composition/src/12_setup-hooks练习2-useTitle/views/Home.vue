<script>
import useTitle from '../hooks/useTitle'

export default {
  setup() {
    const title = useTitle('首页')

    const homeAAAABtnClick = () => {
      title.value = 'Home-AAAA'
    }
    const homeBBBBBtnClick = () => {
      title.value = 'Home-BBBB'
    }
    const homeCCCCBtnClick = () => {
      title.value = 'Home-CCCC'
    }
    return {
      title,
      homeAAAABtnClick,
      homeBBBBBtnClick,
      homeCCCCBtnClick
    }
  }
}
</script>

<template>
  <div class="home">
    <h2>Home组件</h2>
    <button @click="homeAAAABtnClick">Home-AAAA</button>
    <button @click="homeBBBBBtnClick">Home-BBBB</button>
    <button @click="homeCCCCBtnClick">Home-CCCC</button>
  </div>
</template>

<style scoped></style>