---
title: 扩展 Shortcode - typeit
date: 2023-02-24T22:59:50+08:00
type: posts
aliases:
  - /zh-cn/extended-shortcode-typeit/
author:
  name: Lruihao
  link: https://lruihao.cn
description: typeit shortcode 基于 TypeIt 提供了打字动画。
resources:
  - name: featured-image
    src: featured-image.png
tags:
  - Shortcodes
  - Content
categories:
  - Documentation
hiddenFromHomePage: true
---

`typeit` shortcode 基于 [TypeIt](https://typeitjs.com/) 提供了打字动画。

<!--more-->

只需将你需要打字动画的内容插入 `typeit` shortcode 中即可。

`typeit` shortcode 有以下命名参数：

* **tag** *[可选]*

    内容容器的 HTML 标签。

* **code** *[可选]*

    指定代码内容语言类型，可以实习语法高亮。

* **code-link** *[可选]*

    是否解析代码内容中的 Markdown 链接，默认：`false`。

* **group** *[可选]*

    内容分组，相同分组的内容将按顺序开始打字动画。

* **loop** *[可选]*

    内容是否会在打字动画完成后继续循环。

## 简单内容 {#simple-content}

允许使用 `Markdown` 格式的简单内容，并且 **不包含** 富文本的块内容，例如图像等等……

一个 `typeit` 示例：

```go-html-template
{{</* typeit */>}}
这一个带有基于 [TypeIt](https://typeitjs.com/) 的 **打字动画** 的 *段落*……
{{</* /typeit */>}}
```

呈现的输出效果如下：

{{< typeit >}}
这一个带有基于 [TypeIt](https://typeitjs.com/) 的 **打字动画** 的 *段落*……
{{< /typeit >}}

另外，你也可以自定义 **HTML 标签**.

一个带有 `h4` 标签的 `typeit` 示例：

```go-html-template
{{</* typeit tag=h4 */>}}
这一个带有基于 [TypeIt](https://typeitjs.com/) 的 **打字动画** 的 *段落*……
{{</* /typeit */>}}
```

呈现的输出效果如下：

{{< typeit tag=h4 >}}
这一个带有基于 [TypeIt](https://typeitjs.com/) 的 **打字动画** 的 *段落*……
{{< /typeit >}}

## 代码内容 {#code-content}

代码内容也是允许的，并且通过使用参数 `code` 指定语言类型可以实习语法高亮。

一个带有 `code` 参数的 `typeit` 示例：

```go-html-template
{{</* typeit code=java */>}}
public class HelloWorld {
    public static void main(String []args) {
        System.out.println("Hello World");
    }
}
{{</* /typeit */>}}
```

呈现的输出效果如下：

{{< typeit code=java >}}
public class HelloWorld {
    public static void main(String []args) {
        System.out.println("Hello World");
    }
}
{{< /typeit >}}

## 分组内容 {#code-content}

默认情况下，所有打字动画都是同时开始的。
但是有时你可能需要按顺序开始一组 `typeit` 内容的打字动画。

一组具有相同 `group` 参数值的 `typeit` 内容将按顺序开始打字动画。

一个带有 `group` 参数的 `typeit` 示例：

```go-html-template
{{</* typeit group=paragraph */>}}
**首先**, 这个段落开始
{{</* /typeit */>}}

{{</* typeit group=paragraph */>}}
**然后**, 这个段落开始
{{</* /typeit */>}}
```

呈现的输出效果如下：

{{< typeit group=paragraph >}}
**首先**, 这个段落开始
{{< /typeit >}}

{{< typeit group=paragraph >}}
**然后**, 这个段落开始
{{< /typeit >}}
