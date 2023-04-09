const { resolve } = require('path')
const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const TerserPlugin = require("terser-webpack-plugin");
const isProduction = process.env.NODE_ENV === 'production';
const { TerserPluginOption } = require("./plugins")
const MinimizerPlugin = isProduction ? [new TerserPlugin(TerserPluginOption)] : []
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
      minimizer: [ ...MinimizerPlugin]
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './packages/'), // 路径别名
        '~': resolve(__dirname, './examples/') // 路径别名
      },
      extensions: ['.js', '.json', '.ts', '.vue'] // 使用路径别名时想要省略的后缀名，可以自己 增减
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
        //   test: /\.vue/,
        //   loader: 'vue-loader',
        //   options: {
        //     // compilerOptions: {
        //     //   preserveWhitespace: false
        //     // }
        //   }
        // },
        // {
        //   test: /\.(scss)$/,
        //   use: [
        //     'style-loader',
        //     'css-loader',
        //     'sass-loader'
        //   ]
        // },
      ]
    },
    plugins: [
      new WebpackDeepScopeAnalysisPlugin()
    ]
   }
}