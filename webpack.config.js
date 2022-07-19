const path = require('path')

module.exports = {
	entry: './src/index.js',
	experiments: {
    outputModule: true,
  },
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'webpack-numbers.js',
		library: {
			type: 'module'
		},
		clean: true
	},
	// externals: {
	// 	lodash: { // 这意味着你的 library 需要一个名为 lodash 的依赖，这个依赖在 consumer 环境中必须存在且可用。
	// 		commonjs: 'lodash',
	// 		commonjs2: 'lodash',
	// 		amd: 'lodash',
	// 		root: '_'
	// 	}
	// }
}