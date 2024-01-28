const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  transpileDependencies: true,
  // assetsDir: "",
  outputDir: "../src/main/resources/static",
  indexPath: "../templates/index.html",
  devServer: {
    proxy: {
      "/": {
        target: "http://localhost:8081",
        changeOrigin: true
      }
    }
  }
  // proxy:{
  //   '/api/*': {
  //     //api request from backend
  //     target: 'http://localhost:8080'
  //   }
  // }
})
