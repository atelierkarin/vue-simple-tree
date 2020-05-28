module.exports = {
  css: {
    extract: false
  },

  chainWebpack: config => {
    config.module.rule('fonts').use('url-loader').tap(options => {
      options.limit = 1
      return options
    })
  }
}