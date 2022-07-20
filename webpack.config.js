const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: {
		index: './src/index.js',
	},
	devServer: {
		static: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Tree Shaking'
		}),
	],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	resolve: {
		alias: {
			ayt: path.resolve(__dirname, 'src'),
		}
	},
	// optimization: {
	// 	usedExports: true // 告知 webpack 去决定每个模块使用的导出内容
	// }
}