module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  css: {
    loaderOptions: {
      sass: {
        prependData: "@import './src/styles/common/common.sass'"
      },
      scss: {
        prependData: "@import './src/styles/common/common.scss';"
      }
    }
  }
}