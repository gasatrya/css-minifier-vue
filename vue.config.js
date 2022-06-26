const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = defineConfig({
  transpileDependencies: true,

  chainWebpack: (config) => {
    config.plugin('polyfills').use(NodePolyfillPlugin)
  },

  configureWebpack: {
    resolve: {
      fallback: {
        fs: false,
      },
    },
  },

  pages: {
    index: {
      entry: 'src/main.js',
      title: 'CSS Minifier',
    },
  },
})
