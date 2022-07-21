# 分支

## 1.wordNumLibrary: 创建 library
> 该分支使用 esmodule 方式打包并发布, npm 地址：https://www.npmjs.com/package/anyitengfirstpackage

## 2.envVar: 环境变量测试

## 3.requireTest: 依赖管理测试

## 4.hotModuleReplacement: 模块热替换

## 5.treeShaking: 移除未引用代码

## 6.productionTest: 生产环境测试

## 7.codeSplit: 代码分离

## 8.lazyLoad: 懒加载

## 9.shimmingTest: shimming 预置依赖
>使用 `webpack.ProvidePlugin` 预置全局变量
```js
plugins: [
		new webpack.ProvidePlugin({
			_: 'lodash' // 告诉 webpack 如果遇到了至少一处用到 _ 变量的模块实例，那请你将 lodash package 引入进来，并将其提供给需要用到它的模块。
			join: ['lodash', 'join'] // 可以使用 ProvidePlugin 暴露出某个模块中单个导出，通过配置一个“数组路径”（例如 [module, child, ...children?]）实现此功能，这样就能很好的与 tree shaking 配合，将 lodash library 中的其余没有用到的导出去除
		})
	],
```
>全局 `export`
```js
module: {
		rules: [
			{
				test: require.resolve('./src/globals.js'),
				use: 'exports-loader?type=commonjs&exports=file,multiple|helper.parse|parse' // 这样就可以使用 const { file, parse } = require('./globals.js');，可以保证一切将顺利运行
			}
		]
	}
```