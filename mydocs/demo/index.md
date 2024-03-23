# Fixit-常用示例

&lt;!--more--&gt;
## 主题文档

{{&lt; link &#34;https://github.com/dillonzq/LoveIt&#34; &#34;LoveIt 主题源码&#34; &#34;&#34; true &gt;}}
{{&lt; link &#34;https://hugoloveit.com/zh-cn/categories/documentation/&#34; &#34;LoveIt 主题文档&#34; &#34;&#34; true &gt;}}
{{&lt; link &#34;https://github.com/hugo-fixit/FixIt&#34; &#34;FixIt 主题源码&#34; &#34;&#34; true &gt;}}
{{&lt; link &#34;https://fixit.lruihao.cn/zh-cn/categories/documentation/&#34; &#34;FixIt 主题文档&#34; &#34;&#34; true &gt;}}

## Shortcode语法

Shortcode语法

### link添加链接

&gt; 参数说明

link添加链接，link示例代码

```html
{{&lt;/* link &#34;https://github.com/hugo-fixit/FixIt&#34; &#34;FixIt 主题源码&#34; &#34;&#34; true */&gt;}}
```

&gt; link效果

{{&lt; link &#34;https://github.com/hugo-fixit/FixIt&#34; &#34;FixIt 主题源码&#34; &#34;&#34; true &gt;}}

{{&lt; admonition tip &#34;技巧&#34;&gt;}}
link添加下载链接
{{&lt; /admonition &gt;}}
{{&lt; link href=&#34;/logo.png&#34; content=&#34;:(far fa-star fa-fw): 下载图片&#34; download=&#34;网站logo&#34; card=true &gt;}}
{{&lt; link href=&#34;/logo.png&#34; content=&#34;:(far fa-star fa-fw): 下载图片&#34; download=&#34;下载后的名称&#34; card=false &gt;}}

```html
{{&lt;/* link href=&#34;/logo.png&#34; content=&#34;:(far fa-star fa-fw): 下载图片&#34; download=&#34;网站logo&#34; card=true */&gt;}}
或者
{{&lt;/* link href=&#34;/logo.png&#34; content=&#34;:(far fa-star fa-fw): 下载图片&#34; download=&#34;下载后的名称&#34; card=false */&gt;}}
```

### music添加音乐

music添加音乐，music示例代码

```markdown
{{&lt;/* music url=&#34;/music/Take-Me-To-Your-Heart.mp3&#34;  name=&#34;Take-Me-To-Your-Heart&#34; artist=&#34;Michael Learns To Rock&#34; cover=&#34;/logo.png&#34; volume=&#34;0.2&#34; autoplay=true loop=all */&gt;}}
```

{{&lt; admonition bug music效果 &gt;}}
添加音乐部分效果后，页面导航就有问题了
{{&lt; /admonition &gt;}}

### admonition语法

使用admonition，会使得博客页面更加好看。
`admonition` shortcode 支持 **12** 种 帮助你在页面中插入提示的横幅.

*支持 Markdown 或者 HTML 格式.*

{{&lt; admonition &gt;}}
一个 **注意** 横幅
{{&lt; /admonition &gt;}}

{{&lt; admonition abstract &gt;}}
一个 **摘要** 横幅
{{&lt; /admonition &gt;}}

{{&lt; admonition info &gt;}}
一个 **信息** 横幅
{{&lt; /admonition &gt;}}

{{&lt; admonition tip &gt;}}
一个 **技巧** 横幅
{{&lt; /admonition &gt;}}

{{&lt; admonition success &gt;}}
一个 **成功** 横幅
{{&lt; /admonition &gt;}}

{{&lt; admonition question &gt;}}
一个 **问题** 横幅
{{&lt; /admonition &gt;}}

{{&lt; admonition warning &gt;}}
一个 **警告** 横幅
{{&lt; /admonition &gt;}}

{{&lt; admonition failure &gt;}}
一个 **失败** 横幅
{{&lt; /admonition &gt;}}

{{&lt; admonition danger &gt;}}
一个 **危险** 横幅
{{&lt; /admonition &gt;}}

{{&lt; admonition bug &gt;}}
一个 **Bug** 横幅
{{&lt; /admonition &gt;}}

{{&lt; admonition example &gt;}}
一个 **示例** 横幅
{{&lt; /admonition &gt;}}

{{&lt; admonition quote &gt;}}
一个 **引用** 横幅
{{&lt; /admonition &gt;}}

```markdown
{{&lt;/* admonition */&gt;}}
一个 **注意** 横幅
{{&lt;/* /admonition */&gt;}}

{{&lt;/* admonition abstract */&gt;}}
一个 **摘要** 横幅
{{&lt;/* /admonition */&gt;}}

{{&lt;/* admonition info */&gt;}}
一个 **信息** 横幅
{{&lt;/* /admonition */&gt;}}

{{&lt;/* admonition tip */&gt;}}
一个 **技巧** 横幅
{{&lt;/* /admonition */&gt;}}

{{&lt;/* admonition success */&gt;}}
一个 **成功** 横幅
{{&lt;/* /admonition */&gt;}}

{{&lt;/* admonition question */&gt;}}
一个 **问题** 横幅
{{&lt;/* /admonition */&gt;}}

{{&lt;/* admonition warning */&gt;}}
一个 **警告** 横幅
{{&lt;/* /admonition */&gt;}}

{{&lt;/* admonition failure */&gt;}}
一个 **失败** 横幅
{{&lt;/* /admonition */&gt;}}

{{&lt;/* admonition danger */&gt;}}
一个 **危险** 横幅
{{&lt;/* /admonition */&gt;}}

{{&lt;/* admonition bug */&gt;}}
一个 **Bug** 横幅
{{&lt;/* /admonition */&gt;}}

{{&lt;/* admonition example */&gt;}}
一个 **示例** 横幅
{{&lt;/* /admonition */&gt;}}

{{&lt;/* admonition quote */&gt;}}
一个 **引用** 横幅
{{&lt;/* /admonition */&gt;}}
```

`admonition` shortcode 有以下命名参数:

* **type** *[可选]* (**第一个**位置参数)

    `admonition` 横幅的类型, 默认值是 `note`.

* **title** *[可选]* (**第二个**位置参数)

    `admonition` 横幅的标题, 默认值是 **type** 参数的值.

* **open** *[可选]* (**第三个**位置参数) {{&lt; version 0.2.0 changed &gt;}}

    横幅内容是否默认展开, 默认值是 `true`.

一个 `admonition` 示例:

```markdown
{{&lt;/* admonition type=tip title=&#34;This is a tip&#34; open=false */&gt;}}
一个 **技巧** 横幅
{{&lt;/* /admonition */&gt;}}
或者
{{&lt;/* admonition tip &#34;This is a tip&#34; false */&gt;}}
一个 **技巧** 横幅
{{&lt;/* /admonition */&gt;}}
```

呈现的输出效果如下:

{{&lt; admonition tip &#34;This is a tip&#34; false &gt;}}
一个 **技巧** 横幅
{{&lt; /admonition &gt;}}

### typeit打字动画

[TypeIt](https://typeitjs.com/)
&gt; 示例效果

{{&lt; typeit loop=true &gt;}}
&lt;center&gt;
&lt;font face=&#34;楷体&#34; size=4.6 color=#009966 &gt;
莫笑少年江湖梦，谁不少年梦江湖。曾经年少立志三千里，如今踌躇百步无寸功。

懵懂半生，庸碌尘世中，转眼高堂皆白发，儿女蹒跚学堂中。碎银几两催人老。

心仍少，皱纹却上眉目中，浮生醉酒回梦里。青春人依旧，只叹时光太匆匆！
&lt;/font&gt;
&lt;/center&gt;
{{&lt; /typeit &gt;}}

&gt; 示例代码

```markdown
{{&lt;/* typeit */&gt;}}
&lt;center&gt;
&lt;font face=&#34;楷体&#34; size=4.6 color=#009966 &gt;
莫笑少年江湖梦，谁不少年梦江湖。曾经年少立志三千里，如今踌躇百步无寸功。

懵懂半生，庸碌尘世中，转眼高堂皆白发，儿女蹒跚学堂中。碎银几两催人老。

心仍少，皱纹却上眉目中，浮生醉酒回梦里。青春人依旧，只叹时光太匆匆！
&lt;/font&gt;
&lt;/center&gt;
{{&lt;/* /typeit */&gt;}}
```

### figure插入图片

&gt; 示例效果

{{&lt; figure src=&#34;/images/posts/featured-image-preview.jpg&#34; title=&#34;Gavin Wells 欢迎你的留言&#34; &gt;}}

&gt; 示例代码

```markdown
{{&lt;/* figure src=&#34;/images/posts/featured-image-preview.jpg&#34; title=&#34;Gavin Wells 欢迎你的留言&#34; */&gt;}}
```

![markdown语法添加](/images/posts/featured-image-preview.jpg &#34;markdown语法添加-title&#34;)

### 功能描述

&gt; 示例效果

&gt; 示例代码

```markdown
```

## markdown语法

Markdown 官方教程访问：&lt;https://markdown.com.cn/&gt;
&gt; 可快速学习查看markdown语法。

## 目录4

呈现的输出效果如下：



---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/mydocs/demo/  

