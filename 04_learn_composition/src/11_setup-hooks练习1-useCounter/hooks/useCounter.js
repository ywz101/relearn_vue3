import { ref } from 'vue'

export default function useCounter() {
  const counter = ref(0)

  // 用定时器模拟了下网络请求
  setTimeout(() => {
    counter.value = 989
  }, 1000)

  // 计数器的递增
  const increment = () => {
    counter.value++
  }
  // 计数器的递减
  const decrement = () => {
    counter.value--
  }

  return {
    counter,
    increment,
    decrement
  }
}