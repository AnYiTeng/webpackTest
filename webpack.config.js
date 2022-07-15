const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                extractComments: false, // webpack5 打包后会自动生成.txt文件，此配置不将注释提取到单独的文件中
            })
        ]
    }
}