# Notes

{{< admonition quote "quote" false >}}
note abstract info tip success question warning failure danger bug example quote
{{< /admonition >}}
    记录常用命令，方便查阅。
<!--more-->

## Hugo相关命令

```
// 新建一个hugo站点
hugo new site yourSiteName

// 新建一篇文章
hugo new posts/notes.md

// 以production 环境运行 hugo 站点
hugo server -e production -D
// 这里注意 serve 是 server 两种写法都可以
hugo serve -e production -D

```

## git相关命令

> git clone 自动下载子模块

```
//在执行 git clone 时加上 --recursive 参数
git clone --recursive https://github.com/example/example.git
```

---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/notes/  

