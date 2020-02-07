module.exports = {
  lintOnSave: false,
  publicPath: '',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://daw.institutmontilivi.cat/hooktravel/api',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  publicPath: './'
}