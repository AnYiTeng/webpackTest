/**
 * @type {import('webpack').Configuration}
*/

const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
		polyfills: './src/polyfills.js',
	},
	devServer: {
		static: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Caching'
		}),
		new webpack.ProvidePlugin({
			// _: 'lodash' // 告诉 webpack 如果遇到了至少一处用到 _ 变量的模块实例，那请你将 lodash package 引入进来，并将其提供给需要用到它的模块。
			join: ['lodash', 'join'] // 可以使用 ProvidePlugin 暴露出某个模块中单个导出，通过配置一个“数组路径”（例如 [module, child, ...children?]）实现此功能，这样就能很好的与 tree shaking 配合，将 lodash library 中的其余没有用到的导出去除
		})
	],
	module: {
		rules: [
			{
				test: require.resolve('./src/index.js'),
				use: 'imports-loader?wrapper=window'
			},
			{
				test: require.resolve('./src/globals.js'),
				use: 'exports-loader?type=commonjs&exports=file,multiple|helper.parse|parse'
			}
		]
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		clean: true,
	},
	resolve: {
		alias: {
			ayt: path.resolve(__dirname, 'src'),
		}
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				extractComments: false, // webpack5 打包后会自动生成.txt文件，此配置不将注释提取到单独的文件中
			})
		],
	}
}