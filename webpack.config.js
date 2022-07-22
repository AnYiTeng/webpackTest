/**
 * @type {import('webpack').Configuration}
*/

const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: {
		index: './src/index.js',
	},
	devServer: {
		static: './dist'
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Progressive Web Application'
		}),
		new WorkboxPlugin.GenerateSW({
			// 这些选项帮助快速启用 ServiceWorkers
			// 不允许遗留任何旧的 ServiceWorkers
			clientsClaim: true,
			skipWaiting: true
		})
	],
	output: {
		filename: '[name].[contenthash].js',
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