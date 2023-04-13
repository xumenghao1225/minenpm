const TerserPluginOption = {
	terserOptions: {
		ecma: 2020,
		warnings: false,
		parse: {
			bare_returns: false,
			html5_comments: false,
		},
		compress: {
			drop_console: true,
			drop_debugger: true,
			pure_funcs: ["console.log"], // 移除console
		},
		dead_code: false,
		side_effects: false,
		mangle: true,
		module: false,
		toplevel: false,
		nameCache: null,
		ie8: false,
		keep_fnames: false,
		safari10: false,
		output: {
			comments: false,
		},
	},
};
const externals = {
	Vue: "Vue",
	"vue-router": "VueRouter",
	"highlight.js": "hljs",
	lodash: "lodash",
	"element-ui": "ElementUI",
};
module.exports = {
	TerserPluginOption,
	externals,
};
