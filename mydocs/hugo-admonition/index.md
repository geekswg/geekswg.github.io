# Fixit-Admonition

`admonition` shortcode 支持 **12** 种 帮助你在页面中插入提示的横幅.
*支持 Markdown 或者 HTML 格式.*
&lt;!--more--&gt;
## 参数说明

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

---

## 所有示例

### 注意

{{&lt; admonition &gt;}}
一个 **注意** 横幅
{{&lt; /admonition &gt;}}

```html
{{&lt;/* admonition */&gt;}}
一个 **注意** 横幅
{{&lt;/* /admonition */&gt;}}
```

### 摘要

{{&lt; admonition abstract &gt;}}
一个 **摘要** 横幅
{{&lt; /admonition &gt;}}

```html
{{&lt;/* admonition abstract */&gt;}}
一个 **摘要** 横幅
{{&lt;/* /admonition */&gt;}}
```

### 信息

{{&lt; admonition info &gt;}}
一个 **信息** 横幅
{{&lt; /admonition &gt;}}

```html
{{&lt;/* admonition info */&gt;}}
一个 **信息** 横幅
{{&lt;/* /admonition */&gt;}}
```

### 技巧

{{&lt; admonition tip &gt;}}
一个 **技巧** 横幅
{{&lt; /admonition &gt;}}

```html
{{&lt;/* admonition tip */&gt;}}
一个 **技巧** 横幅
{{&lt;/* /admonition */&gt;}}
```

### 成功

{{&lt; admonition success &gt;}}
一个 **成功** 横幅
{{&lt; /admonition &gt;}}

```html
{{&lt;/* admonition success */&gt;}}
一个 **成功** 横幅
{{&lt;/* /admonition */&gt;}}
```

### 问题

{{&lt; admonition question &gt;}}
一个 **问题** 横幅
{{&lt; /admonition &gt;}}

```html
{{&lt;/* admonition question */&gt;}}
一个 **问题** 横幅
{{&lt;/* /admonition */&gt;}}
```

### 警告

{{&lt; admonition warning &gt;}}
一个 **警告** 横幅
{{&lt; /admonition &gt;}}

```html
{{&lt;/* admonition warning */&gt;}}
一个 **警告** 横幅
{{&lt;/* /admonition */&gt;}}
```

### 失败

{{&lt; admonition failure &gt;}}
一个 **失败** 横幅
{{&lt; /admonition &gt;}}

```html
{{&lt;/* admonition failure */&gt;}}
一个 **失败** 横幅
{{&lt;/* /admonition */&gt;}}
```

### 危险

{{&lt; admonition danger &gt;}}
一个 **危险** 横幅
{{&lt; /admonition &gt;}}

```html
{{&lt;/* admonition danger */&gt;}}
一个 **危险** 横幅
{{&lt;/* /admonition */&gt;}}
```

### Bug

{{&lt; admonition bug &gt;}}
一个 **Bug** 横幅
{{&lt; /admonition &gt;}}

```html
{{&lt;/* admonition bug */&gt;}}
一个 **Bug** 横幅
{{&lt;/* /admonition */&gt;}}
```

### 示例

{{&lt; admonition example &gt;}}
一个 **示例** 横幅
{{&lt; /admonition &gt;}}

```html
{{&lt;/* admonition example */&gt;}}
一个 **示例** 横幅
{{&lt;/* /admonition */&gt;}}
```

### 引用

{{&lt; admonition quote &gt;}}
一个 **引用** 横幅
{{&lt; /admonition &gt;}}

```html
{{&lt;/* admonition quote */&gt;}}
一个 **引用** 横幅
{{&lt;/* /admonition */&gt;}}
```

---

## 总结如下

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

---


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.github.io/mydocs/hugo-admonition/  
> 转载 URL: https://fixit.lruihao.cn/zh-cn/theme-documentation-built-in-shortcodes/
