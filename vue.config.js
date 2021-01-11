module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      sass: {
        prependData: "@import './src/styles/common/common.scss'"
      },
      scss: {
        prependData: "@import './src/styles/common/common.scss';"
      }
    }
  }
}