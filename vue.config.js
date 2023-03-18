const { resolve } = require('path')
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const TerserPlugin = require("terser-webpack-plugin")
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
      usedExports: false,
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            ecma: 2020,
            warnings: false,
            parse: {
              bare_returns: true,
              html5_comments: false
            },
            compress: {
              drop_console: false,
              drop_debugger: false,
              pure_funcs: ['console.log'], // 移除console
            },
            dead_code: false,
            side_effects: false,
            mangle: true,
            module: false,
            toplevel: false,
            nameCache: null,
            ie8: false,
            keep_fnames: false,
            safari10: false
          }
        })
      ]
    },
    performance: {
      hints: false
    },
    stats: {
      children: false
    },
    module: {
      rules: [
        {
          test: /\.(jsx?|babel|es6)$/,
          include: process.cwd(),
          exclude: /node_modules|utils\/popper\.js|utils\/date\.js|utils\/lodash\.js/,
          loader: 'babel-loader'
        },
        // {
        //   test: /\.vue$/,
        //   loader: 'vue-loader',
        //   options: {
        //     compilerOptions: {
        //       preserveWhitespace: false
        //     }
        //   }
        // }
      ]
    },
    plugins: [
      new WebpackDeepScopeAnalysisPlugin()
    ]
   }
}