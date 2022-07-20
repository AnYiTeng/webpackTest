/**
 * @type {import('webpack').Configuration}
*/

const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


/**
 * 经测试：模块热替换只需要设置 devServer{ hot: true } 或 webpack.HotModuleReplacementPlugin 之一即可
 */
module.exports = {
	mode: 'development',
	entry: {
		app: './src/index.js',
	},
	devtool: 'inline-source-map',
	devServer: {
		static: './dist',
		// hot: false,
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Hot Module Replacement'
		}),
		// Plugin for hot module replacement
		new webpack.HotModuleReplacementPlugin()
	],
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