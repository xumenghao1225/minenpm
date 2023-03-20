const TerserPluginOption = {
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
}

module.exports = {
  TerserPluginOption
}