# Fixit-快速开始

{{< admonition >}}
快速上手Hugo-blog指引。
记录常用命令，方便查阅。
{{< /admonition >}}
<!--more-->
> 更多详细内容请参考官方文档：https://fixit.lruihao.cn/zh-cn/documentation/getting-started/

## Hugo快速开始

> 快速开始相关命令，前置条件，Hugo环境， 基于 [hugo-extended](https://github.com/gohugoio/hugo/releases/tag/v0.111.3)
本文基于windows11，dos环境下命令，不过hugo命令，和git命令都是通用没有区别。

```bash
#
hugo new site your_site_name
cd your_site_name/
# 初始化git ，使用git子模块 添加主题
git init
git submodule add https://github.com/hugo-fixit/FixIt.git themes/FixIt
# 更新同步主题版本
git submodule update --remote --merge

```

## Hugo相关命令

```bash
// 新建一个hugo站点
hugo new site yourSiteName

// 新建一篇文章
hugo new posts/notes.md

// 以production 环境运行 hugo 站点
hugo server -e production -D
// 这里注意 serve 是 server 两种写法都可以
hugo serve -e production -D

```

### hugo-modules相关

[hugo-modules](https://gohugo.io/hugo-modules/use-modules/) 官方文档说明

```bash
# 更新模块 Update all modules
hugo mod get -u
# Update all modules recursively
hugo mod get -u ./...
# Update one module
hugo mod get -u github.com/hugo-fixit/FixIt
# Get a specific version (e.g. v0.3.2, @latest, @master, @dev)
hugo mod get github.com/hugo-fixit/FixIt@v0.3.2
```

## git相关命令

> git clone 自动下载子模块

```bash
//在执行 git clone 时加上 --recursive 参数
git clone --recursive https://github.com/example/example.git
```

> 如过忘记下载子模块可以执行下面的语句更新

```bash
git submodule update --init
```


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2023/hugo-guideline/  

