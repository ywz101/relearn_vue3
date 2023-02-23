import { ref } from "vue"

export default function useScroll() {
  // 监听document的scroll滚动事件
  const myX = ref(0)
  const myY = ref(0)

  document.addEventListener('scroll', () => {
    myX.value = window.scrollX
    myY.value = window.scrollY
  })

  return {
    myX,
    myY
  }
}