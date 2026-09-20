const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  chainWebpack: config => {
    config.plugins.delete('eslint')
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .type('asset/resource')
  }
})
