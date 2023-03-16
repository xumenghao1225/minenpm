const { resolve } = require('path')
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
module.exports = {
  pages: {
    index: {
      // 修改项目入口文件
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  productionSourceMap: false,
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
    .rule('js')
    .include.add(resolve(__dirname, 'packages')).end()
    .use('babel')
    .loader('babel-loader')
    .tap(options => {
        return options
    })
  },
  configureWebpack: {
    optimization: {
      usedExports: true,
      minimize: true
    },
    plugins: [
      new WebpackDeepScopeAnalysisPlugin()
    ]
   }
}