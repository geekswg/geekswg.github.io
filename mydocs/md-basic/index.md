# Markdown基本语法


这篇文章提供了可以在 Hugo 的文章中使用的基本 Markdown 语法示例。

&lt;!--more--&gt;
&lt;!-- markdownlint-disable-file --&gt;

{{&lt; admonition &gt;}}
这篇文章借鉴了一篇很棒的 [来自 Grav 的文章](http://learn.getgrav.org/content/markdown)。

如果你想了解 **FixIt** 主题的扩展 Markdown 语法，请阅读 [扩展 Markdown 语法页面]。
{{&lt; /admonition &gt;}}

事实上，编写 Web 内容很麻烦。[WYSIWYG]^(所见即所得) 编辑器帮助减轻了这一任务。但通常会导致代码太糟，或更糟糕的是，网页也会很丑。

没有通常伴随的所有复杂和丑陋的问题，**Markdown** 是一种更好的生成 **HTML** 内容的方式。

一些主要好处是：

1. Markdown 简单易学，几乎没有多余的字符，因此编写内容也更快。
2. 用 Markdown 书写时出错的机会更少。
3. 可以产生有效的 XHTML 输出。
4. 将内容和视觉显示保持分开，这样就不会打乱网站的外观。
5. 可以在你喜欢的任何文本编辑器或 Markdown 应用程序中编写内容。
6. Markdown 使用起来很有趣！

John Gruber, Markdown 的作者如是说：

&gt; Markdown 格式的首要设计目标是更具可读性。
&gt; 最初的想法是 Markdown 格式的文档应当以纯文本形式发布，
&gt; 而不会看起来像被标签或格式说明所标记。
&gt; 虽然 Markdown 的语法受到几种现有的文本到 HTML 转换工具的影响，
&gt; 但 Markdown 语法的最大灵感来源是纯文本电子邮件的格式。
&gt;
&gt; {{&lt; style &#34;text-align: right;&#34; &gt;}}-- _John Gruber_{{&lt; /style &gt;}}

话不多说，我们来回顾一下 Markdown 的主要语法以及生成的 HTML 样式！

{{&lt; admonition tip &gt;}}
:(fa-regular fa-bookmark fa-fw): 将此页保存为书签，以备将来参考！
{{&lt; /admonition &gt;}}

## 标题

从 `h2` 到 `h6` 的标题在每个级别上都加上一个 `＃`:

```markdown
## h2 标题
### h3 标题
#### h4 标题
##### h5 标题
###### h6 标题
```

输出的 HTML 看起来像这样：

```html
&lt;h2&gt;h2 标题&lt;/h2&gt;
&lt;h3&gt;h3 标题&lt;/h3&gt;
&lt;h4&gt;h4 标题&lt;/h4&gt;
&lt;h5&gt;h5 标题&lt;/h5&gt;
&lt;h6&gt;h6 标题&lt;/h6&gt;
```

{{&lt; admonition note &#34;标题 ID&#34; &gt;}}
要添加自定义标题 ID, 请在与标题相同的行中将自定义 ID 放在花括号中：

```markdown
### 一个很棒的标题 {#custom-id}
```

输出的 HTML 看起来像这样：

```html
&lt;h3 id=&#34;custom-id&#34;&gt;一个很棒的标题&lt;/h3&gt;
```

{{&lt; /admonition &gt;}}

## 注释

注释是和 HTML 兼容的：

```html
&lt;!-- 这是一段注释 --&gt;
```

**不能**看到以下的注释：

&lt;!-- 这是一段注释 --&gt;

## 水平线

HTML 中的 `&lt;hr&gt;` 标签是用来在段落元素之间创建一个 &#34;专题间隔&#34; 的。
使用 Markdown, 你可以用以下方式创建一个 `&lt;hr&gt;` 标签：

- `___`: 三个连续的下划线
- `---`: 三个连续的破折号
- `***`: 三个连续的星号

呈现的输出效果如下：

___
---
***

## 段落

按照纯文本的方式书写段落，纯文本在呈现的 HTML 中将用 `&lt;p&gt;`/`&lt;/p&gt;` 标签包裹。

如下段落：

```markdown
Lorem ipsum dolor sit amet, graecis denique ei vel, at duo primis mandamus. Et legere ocurreret pri,
animal tacimates complectitur ad cum. Cu eum inermis inimicus efficiendi. Labore officiis his ex,
soluta officiis concludaturque ei qui, vide sensibus vim ad.
```

输出的 HTML 看起来像这样：

```html
&lt;p&gt;Lorem ipsum dolor sit amet, graecis denique ei vel, at duo primis mandamus. Et legere ocurreret pri, animal tacimates complectitur ad cum. Cu eum inermis inimicus efficiendi. Labore officiis his ex, soluta officiis concludaturque ei qui, vide sensibus vim ad.&lt;/p&gt;
```

可以使用一个空白行进行**换行**。

## 内联 HTML 元素

如果你需要某个 HTML 标签（带有一个类）, 则可以简单地像这样使用：

```html
Markdown 格式的段落。

&lt;div class=&#34;class&#34;&gt;
    这是 &lt;b&gt;HTML&lt;/b&gt;
&lt;/div&gt;

Markdown 格式的段落。
```

## 强调

### 加粗

用于强调带有较粗字体的文本片段。

以下文本片段会被 **渲染为粗体**。

```markdown
**渲染为粗体**
__渲染为粗体__
```

输出的 HTML 看起来像这样：

```html
&lt;strong&gt;渲染为粗体&lt;/strong&gt;
```

### 斜体

用于强调带有斜体的文本片段。

以下文本片段被 _渲染为斜体_。

```markdown
*渲染为斜体*
_渲染为斜体_
```

输出的 HTML 看起来像这样：

```html
&lt;em&gt;渲染为斜体&lt;/em&gt;
```

### 删除线

按照 [[GFM]^(GitHub flavored Markdown)](https://github.github.com/gfm/) 你可以使用删除线。

```markdown
~~这段文本带有删除线。~~
```

呈现的输出效果如下：

~~这段文本带有删除线。~~

输出的 HTML 看起来像这样：

```html
&lt;del&gt;这段文本带有删除线。&lt;/del&gt;
```

### 组合

加粗，斜体，和删除线可以 组合使用。

```markdown
_**加粗和斜体**_
~~**删除线和加粗**~~
~~_删除线和斜体_~~
~~_**加粗，斜体和删除线**_~~
```

呈现的输出效果如下：

_**加粗和斜体**_

~~**删除线和加粗**~~

~~_删除线和斜体_~~

~~_**加粗，斜体和删除线**_~~

输出的 HTML 看起来像这样：

```html
&lt;em&gt;&lt;strong&gt;加粗和斜体&lt;/strong&gt;&lt;/em&gt;
&lt;del&gt;&lt;strong&gt;删除线和加粗&lt;/strong&gt;&lt;/del&gt;
&lt;del&gt;&lt;em&gt;删除线和斜体&lt;/em&gt;&lt;/del&gt;
&lt;del&gt;&lt;em&gt;&lt;strong&gt;加粗，斜体和删除线&lt;/strong&gt;&lt;/em&gt;&lt;/del&gt;
```

## 引用

用于在文档中引用其他来源的内容块。

在要引用的任何文本之前添加 `&gt;`:

```markdown
&gt; **Fusion Drive** combines a hard drive with a flash storage (solid-state drive) and presents it as a single logical volume with the space of both drives combined.
```

呈现的输出效果如下：

&gt; **Fusion Drive** combines a hard drive with a flash storage (solid-state drive) and presents it as a single logical volume with the space of both drives combined.

输出的 HTML 看起来像这样：

```html
&lt;blockquote&gt;
  &lt;p&gt;
    &lt;strong&gt;Fusion Drive&lt;/strong&gt; combines a hard drive with a flash storage (solid-state drive) and presents it as a single logical volume with the space of both drives combined.
  &lt;/p&gt;
&lt;/blockquote&gt;
```

引用也可以嵌套：

```markdown
&gt; Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue.
Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi.
&gt;&gt; Sed adipiscing elit vitae augue consectetur a gravida nunc vehicula. Donec auctor
odio non est accumsan facilisis. Aliquam id turpis in dolor tincidunt mollis ac eu diam.
```

呈现的输出效果如下：

&gt; Donec massa lacus, ultricies a ullamcorper in, fermentum sed augue.
Nunc augue augue, aliquam non hendrerit ac, commodo vel nisi.
&gt;&gt; Sed adipiscing elit vitae augue consectetur a gravida nunc vehicula. Donec auctor
odio non est accumsan facilisis. Aliquam id turpis in dolor tincidunt mollis ac eu diam.

## 列表

### 无序列表

一系列项的列表，其中项的顺序没有明显关系。

你可以使用以下任何符号来表示无序列表中的项：

```markdown
* 一项内容
- 一项内容
&#43; 一项内容
```

例如：

```markdown
* Lorem ipsum dolor sit amet
* Consectetur adipiscing elit
* Integer molestie lorem at massa
* Facilisis in pretium nisl aliquet
* Nulla volutpat aliquam velit
  * Phasellus iaculis neque
  * Purus sodales ultricies
  * Vestibulum laoreet porttitor sem
  * Ac tristique libero volutpat at
* Faucibus porta lacus fringilla vel
* Aenean sit amet erat nunc
* Eget porttitor lorem
```

呈现的输出效果如下：

- Lorem ipsum dolor sit amet
- Consectetur adipiscing elit
- Integer molestie lorem at massa
- Facilisis in pretium nisl aliquet
- Nulla volutpat aliquam velit
  - Phasellus iaculis neque
  - Purus sodales ultricies
  - Vestibulum laoreet porttitor sem
  - Ac tristique libero volutpat at
- Faucibus porta lacus fringilla vel
- Aenean sit amet erat nunc
- Eget porttitor lorem

输出的 HTML 看起来像这样：

```html
&lt;ul&gt;
  &lt;li&gt;Lorem ipsum dolor sit amet&lt;/li&gt;
  &lt;li&gt;Consectetur adipiscing elit&lt;/li&gt;
  &lt;li&gt;Integer molestie lorem at massa&lt;/li&gt;
  &lt;li&gt;Facilisis in pretium nisl aliquet&lt;/li&gt;
  &lt;li&gt;Nulla volutpat aliquam velit
    &lt;ul&gt;
      &lt;li&gt;Phasellus iaculis neque&lt;/li&gt;
      &lt;li&gt;Purus sodales ultricies&lt;/li&gt;
      &lt;li&gt;Vestibulum laoreet porttitor sem&lt;/li&gt;
      &lt;li&gt;Ac tristique libero volutpat at&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;Faucibus porta lacus fringilla vel&lt;/li&gt;
  &lt;li&gt;Aenean sit amet erat nunc&lt;/li&gt;
  &lt;li&gt;Eget porttitor lorem&lt;/li&gt;
&lt;/ul&gt;
```

### 有序列表

一系列项的列表，其中项的顺序确实很重要。

```markdown
1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem
```

呈现的输出效果如下：

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem

输出的 HTML 看起来像这样：

```html
&lt;ol&gt;
  &lt;li&gt;Lorem ipsum dolor sit amet&lt;/li&gt;
  &lt;li&gt;Consectetur adipiscing elit&lt;/li&gt;
  &lt;li&gt;Integer molestie lorem at massa&lt;/li&gt;
  &lt;li&gt;Facilisis in pretium nisl aliquet&lt;/li&gt;
  &lt;li&gt;Nulla volutpat aliquam velit&lt;/li&gt;
  &lt;li&gt;Faucibus porta lacus fringilla vel&lt;/li&gt;
  &lt;li&gt;Aenean sit amet erat nunc&lt;/li&gt;
  &lt;li&gt;Eget porttitor lorem&lt;/li&gt;
&lt;/ol&gt;
```

{{&lt; admonition tip &gt;}}
如果你对每一项使用 `1.`, Markdown 将自动为每一项编号。例如：

```markdown
1. Lorem ipsum dolor sit amet
1. Consectetur adipiscing elit
1. Integer molestie lorem at massa
1. Facilisis in pretium nisl aliquet
1. Nulla volutpat aliquam velit
1. Faucibus porta lacus fringilla vel
1. Aenean sit amet erat nunc
1. Eget porttitor lorem
```

呈现的输出效果如下：

1. Lorem ipsum dolor sit amet
1. Consectetur adipiscing elit
1. Integer molestie lorem at massa
1. Facilisis in pretium nisl aliquet
1. Nulla volutpat aliquam velit
1. Faucibus porta lacus fringilla vel
1. Aenean sit amet erat nunc
1. Eget porttitor lorem
{{&lt; /admonition &gt;}}

## 代码

### 行内代码

用 &lt;code&gt;`&lt;/code&gt; 包装行内代码段。

```markdown
在这个例子中，`&lt;section&gt;&lt;/section&gt;` 会被包裹成 **代码**。
```

呈现的输出效果如下：

在这个例子中，`&lt;section&gt;&lt;/section&gt;` 会被包裹成 **代码**。

输出的 HTML 看起来像这样：

```html
&lt;p&gt;
  在这个例子中，&lt;code&gt;&amp;lt;section&amp;gt;&amp;lt;/section&amp;gt;&lt;/code&gt; 会被包裹成 &lt;strong&gt;代码&lt;/strong&gt;。
&lt;/p&gt;
```

### 缩进代码

&gt; ❌ 不推荐使用。

将几行代码缩进至少四个空格，例如：

```markdown
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
```

呈现的输出效果如下：

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code

输出的 HTML 看起来像这样：

```html
&lt;pre&gt;
  &lt;code&gt;
    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code
  &lt;/code&gt;
&lt;/pre&gt;
```

### 围栏代码块

&gt; ✅ 推荐使用。

使用 &#34;围栏&#34; &lt;code&gt;```&lt;/code&gt; 来生成一段带有语言属性的代码块。

````markdown
```markdown
Sample text here...
```
````

输出的 HTML 看起来像这样：

```html
&lt;pre language-html&gt;
  &lt;code&gt;Sample text here...&lt;/code&gt;
&lt;/pre&gt;
```

### 语法高亮

- [Chroma 语言高亮列表 - Hugo](https://gohugo.io/content-management/syntax-highlighting/#list-of-chroma-highlighting-languages)
- [Chroma 支持语言 - Chroma](https://github.com/alecthomas/chroma#supported-languages)

[GFM]^(GitHub Flavored Markdown) 也支持语法高亮。

要激活它，只需在第一个代码 &#34;围栏&#34; 之后直接添加你要使用的语言的文件扩展名，
&lt;code&gt;```js&lt;/code&gt;, 语法高亮显示将自动应用于渲染的 HTML 中。

例如，在以下 JavaScript 代码中应用语法高亮：

````markdown
```js
grunt.initConfig({
  assemble: {
    options: {
      assets: &#39;docs/assets&#39;,
      data: &#39;src/data/*.{json,yml}&#39;,
      helpers: &#39;src/custom-helpers.js&#39;,
      partials: [&#39;src/partials/**/*.{hbs,md}&#39;]
    },
    pages: {
      options: {
        layout: &#39;default.hbs&#39;
      },
      files: {
        &#39;./&#39;: [&#39;src/templates/pages/index.hbs&#39;]
      }
    }
  }
};
```
````

呈现的输出效果如下：

```js
grunt.initConfig({
  assemble: {
    options: {
      assets: &#39;docs/assets&#39;,
      data: &#39;src/data/*.{json,yml}&#39;,
      helpers: &#39;src/custom-helpers.js&#39;,
      partials: [&#39;src/partials/**/*.{hbs,md}&#39;]
    },
    pages: {
      options: {
        layout: &#39;default.hbs&#39;
      },
      files: {
        &#39;./&#39;: [&#39;src/templates/pages/index.hbs&#39;]
      }
    }
  }
};
```

{{&lt; admonition &gt;}}
**Hugo** 文档中的 [语法高亮页面](https://gohugo.io/content-management/syntax-highlighting/) 介绍了有关语法高亮的更多信息，
包括语法高亮的 shortcode。
{{&lt; /admonition &gt;}}

## 表格

通过在每个单元格之间添加竖线作为分隔线，并在标题下添加一行破折号（也由竖线分隔）来创建表格。注意，竖线不需要垂直对齐。

```markdown
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

呈现的输出效果如下：

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

输出的 HTML 看起来像这样：

```html
&lt;table&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Option&lt;/th&gt;
      &lt;th&gt;Description&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;data&lt;/td&gt;
      &lt;td&gt;path to data files to supply the data that will be passed into templates.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;engine&lt;/td&gt;
      &lt;td&gt;engine to be used for processing templates. Handlebars is the default.&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;ext&lt;/td&gt;
      &lt;td&gt;extension to be used for dest files.&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;
```

{{&lt; admonition note &#34;文本右对齐或居中对齐&#34; false &gt;}}
在任何标题下方的破折号右侧添加冒号将使该列的文本右对齐，在任何标题下方的破折号两边添加冒号将使该列的对齐文本居中。

```markdown
| Option | Description |
|:------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
```

呈现的输出效果如下：

| Option | Description |
|:------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
{{&lt; /admonition &gt;}}

## 链接 {#links}

### 基本链接

```markdown
&lt;https://assemble.io&gt;
&lt;contact@revolunet.com&gt;
[Assemble](https://assemble.io)
```

呈现的输出效果如下（将鼠标悬停在链接上，没有提示）:

&lt;https://assemble.io&gt;

&lt;contact@revolunet.com&gt;

[Assemble](https://assemble.io)

输出的 HTML 看起来像这样：

```html
&lt;a href=&#34;https://assemble.io&#34;&gt;https://assemble.io&lt;/a&gt;
&lt;a href=&#34;mailto:contact@revolunet.com&#34;&gt;contact@revolunet.com&lt;/a&gt;
&lt;a href=&#34;https://assemble.io&#34;&gt;Assemble&lt;/a&gt;
```

### 添加一个标题

```markdown
[Upstage](https://github.com/upstage/ &#34;Visit Upstage!&#34;)
```

呈现的输出效果如下（将鼠标悬停在链接上，会有一行提示）:

[Upstage](https://github.com/upstage/ &#34;Visit Upstage!&#34;)

输出的 HTML 看起来像这样：

```html
&lt;a href=&#34;https://github.com/upstage/&#34; title=&#34;Visit Upstage!&#34;&gt;Upstage&lt;/a&gt;
```

### 引用式链接

引用式链接是一种特殊的链接，它使 URL 在 Markdown 中更易于显示和阅读。

引用式链接分为两部分：与文本保持内联的部分以及存储在文件中其他位置的部分，以使文本易于阅读。

```markdown
[text][id]
⋮
[id]: http://example.org/ &#34;title&#34;
```

例如：

```markdown
[FixIt][fixit-repo]

[fixit-repo]: https://github.com/hugo-fixit/FixIt &#34;A clean, elegant but advanced blog theme for Hugo&#34;
```

呈现的输出效果如下：

[FixIt][fixit-repo]

[fixit-repo]: https://github.com/hugo-fixit/FixIt &#34;A clean, elegant but advanced blog theme for Hugo&#34;

### 定位标记

定位标记使你可以跳至同一页面上的指定锚点。例如，每个章节：

```markdown
## Table of Contents
  * [Chapter 1](#chapter-1)
  * [Chapter 2](#chapter-2)
  * [Chapter 3](#chapter-3)
```

将跳转到这些部分：

```markdown
## Chapter 1 &lt;a id=&#34;chapter-1&#34;&gt;&lt;/a&gt;
Content for chapter one.

## Chapter 2 &lt;a id=&#34;chapter-2&#34;&gt;&lt;/a&gt;
Content for chapter one.

## Chapter 3 &lt;a id=&#34;chapter-3&#34;&gt;&lt;/a&gt;
Content for chapter one.
```

{{&lt; admonition &gt;}}
定位标记的位置几乎是任意的。因为它们并不引人注目，所以它们通常被放在同一行了。
{{&lt; /admonition &gt;}}

## 脚注

脚注使你可以添加注释和参考，而不会使文档正文混乱。
当你创建脚注时，会在添加脚注引用的位置出现带有链接的上标编号。
读者可以单击链接以跳至页面底部的脚注内容。

要创建脚注引用，请在方括号中添加插入符号和标识符 (`[^1]`)。
标识符可以是数字或单词，但不能包含空格或制表符。
标识符仅将脚注引用与脚注本身相关联 - 在脚注输出中，脚注按顺序编号。

在中括号内使用插入符号和数字以及用冒号和文本来添加脚注内容 (`[^1]：这是一段脚注`)。
你不一定要在文档末尾添加脚注。可以将它们放在除列表，引用和表格等元素之外的任何位置。

```markdown
这是一个数字脚注 [^1]
这是一个带标签的脚注 [^label]

[^1]: 这是一个数字脚注
[^label]: 这是一个带标签的脚注
```

这是一个数字脚注 [^1]

这是一个带标签的脚注 [^label]

[^1]: 这是一个数字脚注
[^label]: 这是一个带标签的脚注

## 图片

图片的语法与链接相似，但包含一个在前面的感叹号。

```markdown
![Minion](https://octodex.github.com/images/minion.png)
```

![Minion](https://octodex.github.com/images/minion.png)

或者：

```markdown
![Alt text](https://octodex.github.com/images/stormtroopocat.jpg &#34;The Stormtroopocat&#34;)
```

![Alt text](https://octodex.github.com/images/stormtroopocat.jpg &#34;The Stormtroopocat&#34;)

像链接一样，图片也具有引用式的语法：

```markdown
![Alt text][id]
```

![Alt text][id]

稍后在文档中提供参考内容，用来定义 URL 的位置：

```markdown
[id]: https://octodex.github.com/images/dojocat.jpg  &#34;The Dojocat&#34;
```

[id]: https://octodex.github.com/images/dojocat.jpg &#34;The Dojocat&#34;



---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/mydocs/md-basic/  

