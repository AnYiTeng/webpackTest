# 分支

## 1.wordNumLibrary: 创建 library
> 该分支使用 `esmodule` 方式打包并发布, `npm` 地址：https://www.npmjs.com/package/anyitengfirstpackage

## 2.envVar: 环境变量测试

## 3.requireTest: 依赖管理测试

## 4.hotModuleReplacement: 模块热替换

## 5.treeShaking: 移除未引用代码
> `package.json` 中 `sideEffects` 属性设置为 `false`,告知 `webpack` 它可以安全地删除未用到的 `export`

>`side effect(副作用)` 的定义是，在导入时会执行特殊行为的代码，而不是仅仅暴露一个 `export` 或多个 `export`。举例说明，例如 `polyfill`，它影响全局作用域，并且通常不提供 `export`。

>如果你的代码确实有一些副作用，可以改为提供一个数组：
```
{
  "name": "your-project",
  "sideEffects": ["./src/some-side-effectful-file.js"]
}
```
>注意，所有导入文件都会受到 tree shaking 的影响。这意味着，如果在项目中使用类似 css-loader 并 import 一个 CSS 文件，则需要将其添加到 side effect 列表中，以免在生产模式中无意中将它删除:
```
{
  "name": "your-project",
  "sideEffects": ["./src/some-side-effectful-file.js", "*.css"]
}
```
