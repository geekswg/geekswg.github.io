# 示例代码使用

<!--more-->
## 主题文档

{{< link "https://github.com/dillonzq/LoveIt" "LoveIt 主题源码" "" true >}}
{{< link "https://hugoloveit.com/zh-cn/categories/documentation/" "LoveIt 主题文档" "" true >}}
{{< link "https://github.com/hugo-fixit/FixIt" "FixIt 主题源码" "" true >}}
{{< link "https://fixit.lruihao.cn/zh-cn/categories/documentation/" "FixIt 主题文档" "" true >}}

## Shortcode语法

Shortcode语法

### link添加链接

link添加链接，link示例代码

```html
{{</* link "https://github.com/hugo-fixit/FixIt" "FixIt 主题源码" "" true */>}}
```

> link效果

{{< link "https://github.com/hugo-fixit/FixIt" "FixIt 主题源码" "" true >}}

{{< admonition tip "技巧">}}
link添加下载链接
{{< /admonition >}}
{{< link href="/logo.png" content=":(far fa-star fa-fw): 下载图片" download="网站logo" card=true >}}
{{< link href="/logo.png" content=":(far fa-star fa-fw): 下载图片" download="下载后的名称" card=false >}}

```html
{{</* link href="/logo.png" content=":(far fa-star fa-fw): 下载图片" download="网站logo" card=true */>}}
或者
{{</* link href="/logo.png" content=":(far fa-star fa-fw): 下载图片" download="下载后的名称" card=false */>}}
```

### music添加音乐

music添加音乐，music示例代码

```markdown
{{</* music url="/music/Take-Me-To-Your-Heart.mp3"  name="Take-Me-To-Your-Heart" artist="Michael Learns To Rock" cover="/logo.png" volume="0.2" autoplay=true loop=all */>}}
```

{{< admonition bug music效果 >}}
添加音乐部分效果后，页面导航就有问题了
{{< /admonition >}}

### admonition语法

使用admonition，会使得博客页面更加好看。
`admonition` shortcode 支持 **12** 种 帮助你在页面中插入提示的横幅.

*支持 Markdown 或者 HTML 格式.*

{{< admonition >}}
一个 **注意** 横幅
{{< /admonition >}}

{{< admonition abstract >}}
一个 **摘要** 横幅
{{< /admonition >}}

{{< admonition info >}}
一个 **信息** 横幅
{{< /admonition >}}

{{< admonition tip >}}
一个 **技巧** 横幅
{{< /admonition >}}

{{< admonition success >}}
一个 **成功** 横幅
{{< /admonition >}}

{{< admonition question >}}
一个 **问题** 横幅
{{< /admonition >}}

{{< admonition warning >}}
一个 **警告** 横幅
{{< /admonition >}}

{{< admonition failure >}}
一个 **失败** 横幅
{{< /admonition >}}

{{< admonition danger >}}
一个 **危险** 横幅
{{< /admonition >}}

{{< admonition bug >}}
一个 **Bug** 横幅
{{< /admonition >}}

{{< admonition example >}}
一个 **示例** 横幅
{{< /admonition >}}

{{< admonition quote >}}
一个 **引用** 横幅
{{< /admonition >}}

```markdown
{{</* admonition */>}}
一个 **注意** 横幅
{{</* /admonition */>}}

{{</* admonition abstract */>}}
一个 **摘要** 横幅
{{</* /admonition */>}}

{{</* admonition info */>}}
一个 **信息** 横幅
{{</* /admonition */>}}

{{</* admonition tip */>}}
一个 **技巧** 横幅
{{</* /admonition */>}}

{{</* admonition success */>}}
一个 **成功** 横幅
{{</* /admonition */>}}

{{</* admonition question */>}}
一个 **问题** 横幅
{{</* /admonition */>}}

{{</* admonition warning */>}}
一个 **警告** 横幅
{{</* /admonition */>}}

{{</* admonition failure */>}}
一个 **失败** 横幅
{{</* /admonition */>}}

{{</* admonition danger */>}}
一个 **危险** 横幅
{{</* /admonition */>}}

{{</* admonition bug */>}}
一个 **Bug** 横幅
{{</* /admonition */>}}

{{</* admonition example */>}}
一个 **示例** 横幅
{{</* /admonition */>}}

{{</* admonition quote */>}}
一个 **引用** 横幅
{{</* /admonition */>}}
```

`admonition` shortcode 有以下命名参数:

* **type** *[可选]* (**第一个**位置参数)

    `admonition` 横幅的类型, 默认值是 `note`.

* **title** *[可选]* (**第二个**位置参数)

    `admonition` 横幅的标题, 默认值是 **type** 参数的值.

* **open** *[可选]* (**第三个**位置参数) {{< version 0.2.0 changed >}}

    横幅内容是否默认展开, 默认值是 `true`.

一个 `admonition` 示例:

```markdown
{{</* admonition type=tip title="This is a tip" open=false */>}}
一个 **技巧** 横幅
{{</* /admonition */>}}
或者
{{</* admonition tip "This is a tip" false */>}}
一个 **技巧** 横幅
{{</* /admonition */>}}
```

呈现的输出效果如下:

{{< admonition tip "This is a tip" false >}}
一个 **技巧** 横幅
{{< /admonition >}}

### typeit打字动画

[TypeIt](https://typeitjs.com/)
> 示例效果

{{< typeit loop=true >}}
<center>
<font face="楷体" size=4.6 color=#009966 >
莫笑少年江湖梦，谁不少年梦江湖。曾经年少立志三千里，如今踌躇百步无寸功。

懵懂半生，庸碌尘世中，转眼高堂皆白发，儿女蹒跚学堂中。碎银几两催人老。

心仍少，皱纹却上眉目中，浮生醉酒回梦里。青春人依旧，只叹时光太匆匆！
</font>
</center>
{{< /typeit >}}

> 示例代码

```markdown
{{</* typeit */>}}
<center>
<font face="楷体" size=4.6 color=#009966 >
莫笑少年江湖梦，谁不少年梦江湖。曾经年少立志三千里，如今踌躇百步无寸功。

懵懂半生，庸碌尘世中，转眼高堂皆白发，儿女蹒跚学堂中。碎银几两催人老。

心仍少，皱纹却上眉目中，浮生醉酒回梦里。青春人依旧，只叹时光太匆匆！
</font>
</center>
{{</* /typeit */>}}
```

### figure插入图片

> 示例效果

{{< figure src="/images/posts/featured-image-preview.jpg" title="Gavin Wells 欢迎你的留言" >}}

> 示例代码

```markdown
{{</* figure src="/images/posts/featured-image-preview.jpg" title="Gavin Wells 欢迎你的留言" */>}}
```

![markdown语法添加](/images/posts/featured-image-preview.jpg "markdown语法添加-title")

### 功能描述

> 示例效果

> 示例代码

```markdown
```

## markdown语法

Markdown 官方教程访问：<https://markdown.com.cn/>
> 可快速学习查看markdown语法。

## 目录4

呈现的输出效果如下：



---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/code/demo/  
> 转载 URL: https://geekswg.github.io/
