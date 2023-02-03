# Hugo-Admonition

`admonition` shortcode 支持 **12** 种 帮助你在页面中插入提示的横幅.
*支持 Markdown 或者 HTML 格式.*
<!--more-->
## 参数说明

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

---

## 所有示例

### 注意

{{< admonition >}}
一个 **注意** 横幅
{{< /admonition >}}

```html
{{</* admonition */>}}
一个 **注意** 横幅
{{</* /admonition */>}}
```

### 摘要

{{< admonition abstract >}}
一个 **摘要** 横幅
{{< /admonition >}}

```html
{{</* admonition abstract */>}}
一个 **摘要** 横幅
{{</* /admonition */>}}
```

### 信息

{{< admonition info >}}
一个 **信息** 横幅
{{< /admonition >}}

```html
{{</* admonition info */>}}
一个 **信息** 横幅
{{</* /admonition */>}}
```

### 技巧

{{< admonition tip >}}
一个 **技巧** 横幅
{{< /admonition >}}

```html
{{</* admonition tip */>}}
一个 **技巧** 横幅
{{</* /admonition */>}}
```

### 成功

{{< admonition success >}}
一个 **成功** 横幅
{{< /admonition >}}

```html
{{</* admonition success */>}}
一个 **成功** 横幅
{{</* /admonition */>}}
```

### 问题

{{< admonition question >}}
一个 **问题** 横幅
{{< /admonition >}}

```html
{{</* admonition question */>}}
一个 **问题** 横幅
{{</* /admonition */>}}
```

### 警告

{{< admonition warning >}}
一个 **警告** 横幅
{{< /admonition >}}

```html
{{</* admonition warning */>}}
一个 **警告** 横幅
{{</* /admonition */>}}
```

### 失败

{{< admonition failure >}}
一个 **失败** 横幅
{{< /admonition >}}

```html
{{</* admonition failure */>}}
一个 **失败** 横幅
{{</* /admonition */>}}
```

### 危险

{{< admonition danger >}}
一个 **危险** 横幅
{{< /admonition >}}

```html
{{</* admonition danger */>}}
一个 **危险** 横幅
{{</* /admonition */>}}
```

### Bug

{{< admonition bug >}}
一个 **Bug** 横幅
{{< /admonition >}}

```html
{{</* admonition bug */>}}
一个 **Bug** 横幅
{{</* /admonition */>}}
```

### 示例

{{< admonition example >}}
一个 **示例** 横幅
{{< /admonition >}}

```html
{{</* admonition example */>}}
一个 **示例** 横幅
{{</* /admonition */>}}
```

### 引用

{{< admonition quote >}}
一个 **引用** 横幅
{{< /admonition >}}

```html
{{</* admonition quote */>}}
一个 **引用** 横幅
{{</* /admonition */>}}
```

---

## 总结如下

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

---


---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/code/hugo-admonition/  
> 转载 URL: https://geekswg.github.io/
