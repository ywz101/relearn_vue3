import { reactive } from "vue"

export default function useScroll() {
  const scrollPosition = reactive({
    x: 0,
    y: 0
  })
  // 监听document的scroll滚动事件
  document.addEventListener('scroll', () => {
    scrollPosition.x = window.scrollX
    scrollPosition.y = window.scrollY
  })

  return {
    scrollPosition
  }
}