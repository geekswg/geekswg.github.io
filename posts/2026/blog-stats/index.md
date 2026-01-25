# Hugo博客添加数据统计页面


给你的博客添加统计页面，展示你的博客数据统计信息。[点击这里](https://geekswg.js.cool/stats/)预览效果。

> [!IMPORTANT]
> 理论上该方法适用于所有hugo博客，但由于每个博客的配置和主题结构不同，可能会存在兼容性问题，请自己适配！已在[Fixit主题](https://fixit.lruihao.cn/zh-cn/)下测试通过。
<!--more-->
## 思路

利用[hugo](https://gohugo.io/functions/)内置的功能函数，结合一些js代码实现博客数据的统计展示，包括：文章，页面、分类，标签，友情链接，字数等数据。文章条形图，分类饼图等图表使用svg+js绘制而成。

## 代码

### 创建统计页面layout文件

在博客根目录下创建`layouts/stats.html`文件，内容如下：
```fromfile
file: layouts/stats.html
```

### 创建css文件
在博客根目录下创建`content/stats/stats.css`文件，内容如下：

```fromfile
file: /content/stats/stats.css
```

### 创建md文件

在博客根目录下创建`content/stats/index.md`文件，内容如下：

```markdown
---
title: "博客统计"
date: 2026-01-24T15:22:51+08:00
layout: stats
---
your content goes here.
```

## 参考

[1] 主要参考 [https://www.eallion.com/blog-heatmap/](https://www.eallion.com/blog-heatmap/)，感谢 eallion 的无私分享！



---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2026/blog-stats/  

