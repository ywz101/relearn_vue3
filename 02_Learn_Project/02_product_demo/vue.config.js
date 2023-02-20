const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 三层对象
  configureWebpack: {
    resolve: {
      alias: { // src可以直接写成@
        "utils": "@/utils"
      }
    }
  } 
})
