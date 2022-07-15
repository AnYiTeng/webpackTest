const path = require('path')
const TerserPlugin = require('terser-webpack-plugin')
const toml = require('toml')
const yaml = require('yamljs')
const json5 = require('json5')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'], // 注意顺序，从后往前执行。css-loader 先把 CSS 代码转换为 JS 模块，使用 style-loader 把 css-loader 转换后的结果通过 style 标签追加到页面上
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i, // 处理字体
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            {
                test: /\.toml$/i,
                type: 'json',
                parser: {
                    parse: toml.parse,
                },
              },
              {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
        ]
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
        ]
    }
}