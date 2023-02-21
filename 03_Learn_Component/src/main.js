import { createApp } from 'vue'

// import App from './01_组件嵌套的使用/App.vue'
// import App from './02_组件通信-父传子/App.vue'
// import App from './03_组件通信-子传父/App.vue'
// import App from './04_组件通信-案例练习/App.vue'
// import App from './05_组件插槽-基本使用/App.vue'
// import App from './06_组件插槽-具名插槽/App.vue'
// import App from './07_组件通信-案例练习-插槽作用域重构/App.vue'
import App from './08_provide和inject/App.vue'

const app = createApp(App)
app.config.unwrapInjectedRef = true
app.mount('#app')
