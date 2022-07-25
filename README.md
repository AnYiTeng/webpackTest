# 分支
```bash
// 删除本地分支
git branch -d localBranchName
//删除远程分支
git push origin --delete remoteBranchName
```
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

## 13.resourceModule: 资源模块
>自定义输出文件名与指定输出目录：  
方式1：配置 `output.assetModuleFilename`  
方式2：
```js
module: {
  rules: [
    {
      test: /\.html/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext][query]'
      }
    }
  ]
},
```

