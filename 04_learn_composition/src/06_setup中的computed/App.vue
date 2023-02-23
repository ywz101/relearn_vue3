<script>
import { reactive, computed, ref } from 'vue'

export default {
  setup() {
    // 定义names
    const names = reactive({
      firstName: 'ywz',
      lastName: '101'
    })

    // 定义fullname
    // const fullname = computed(() => {
    //   return names.firstName + ' ' + names.lastName
    // })

    // 定义score
    const score = ref(89)
    const scoreLevel = computed(() => {
      return score.value >= 60 ? '及格' : '不及格'
    })

    // computed的setter和getter
    const fullname = computed({
      set(newValue) {
        const tempNames = newValue.split(' ')
        names.firstName = tempNames[0]
        names.lastName = tempNames[1]
      },
      get() {
        return names.firstName + ' ' + names.lastName
      }
    })


    // 设置姓名setFullname
    const setFullname = () => {
      console.log(fullname)
       fullname.value = 'kobe bryant'
    }


    return {
      names,
      fullname,
      score,
      scoreLevel,
      setFullname
    }
  }
}
</script>

<template>
  <div class="app">
    <h2>姓名: {{ fullname }}</h2>
    <button @click="setFullname">设置姓名</button>
    <h2>分数评级: {{ scoreLevel }}</h2>
  </div>
</template>

<style scoped></style>