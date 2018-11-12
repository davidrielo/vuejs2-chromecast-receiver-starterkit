// vue.config.js
module.exports = {
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: {
      rewrites: [
        { from: /\*/, to: '/index.html' }
      ]
    }
  },
}