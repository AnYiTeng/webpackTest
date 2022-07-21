# 分支

## 1.wordNumLibrary: 创建 library
> 该分支使用 esmodule 方式打包并发布, npm 地址：https://www.npmjs.com/package/anyitengfirstpackage

## 2.envVar: 环境变量测试

## 3.requireTest: 依赖管理测试

## 4.hotModuleReplacement: 模块热替换

## 5.treeShaking: 移除未引用代码

## 6.productionTest: 生产环境测试

## 7.codeSplit: 代码分离
> 方式:  
1.`entry` 中将公共依赖部分提取为 `dependOn: 'shared'`，如果我们要在一个 HTML 页面上使用多个入口时，还需设置 `optimization.runtimeChunk: 'single'`
2.SplitChunksPlugin，添加`optimization.splitChunks.chunks = 'all'`
