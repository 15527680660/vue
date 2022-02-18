module.exports = {
  css: {
    // 全局配置utils.scss,详细配置参考vue-cli官网
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/styles/utils.scss";'
      }
    }
  }
}
