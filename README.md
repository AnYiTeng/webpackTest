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

## 10.typeScript: ts 配置

## 11.webWorker: webWorker 使用

## 12.pwaTest: 渐进式网络应用程序
>1.使用 `npm install http-server --save-dev` 搭建一个拥有更多基础特性的 `server`，`package.json` 的 `script` 添加 `"start": "http-server dist"`，然后运行 `start`，`webpack` 应用程序被 `serve` 到 `dist` 目录，可以通过 `http://localhost:8080` 访问

>2.添加 `workbox-webpack-plugin` 插件，`npm install workbox-webpack-plugin --save-dev`，在 `webpack.config.js` 中加入该配置，重新 `build` 可以看到生成 `service-worker.js` 和 另一个 `js` 冗长文件，`service-worker.js` 是 `Service Worker` 文件，另一个文件是 `service-worker.js` 文件的引用文件，现在已经创建出一个 `Service Worker`

>3.注册 `Service Worker`
```js
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/service-worker.js')
			.then(registration => console.log('SW registered: ', registration))
			.catch(registrationError => console.log('SW registration failed: ', registrationError))
	})
}
```
>重新 build 并 start 后，重新访问 `http://localhost:8080`，停止 `server` 并刷新页面，如果浏览器能够支持 `Service Worker`，应该可以看到你的应用程序还在正常运行。然而，`server` 已经停止 `serve` 整个 `dist` 文件夹，此刻是 `Service Worker` 在进行 `serve`
