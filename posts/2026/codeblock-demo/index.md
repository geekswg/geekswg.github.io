# 代码块功能增强


测试 codeblock 代码块增强功能。参考主题的 render-codeblock-timeline，编写一个 render-codeblock-fromfile 功能，支持从文件中加载代码片段并高亮显示，自动检测语言类型。

## 基本语法

在 Markdown 中插入 fromfile 代码块（推荐格式）：

用法 1（属性列表写法yml格式）：
````
```fromfile
file: "/js/flyfish.js"
lines: "1-12"
lang: "javascript"
```
````
<!--more-->
用法 2（短代码参数写法）：
````markdown
```fromfile{file="/js/flyfish.js" lines="2-6" lang="javascript"}
xxx
```
````

- `file` 为必填，指向要展示的文件路径。
- `lines` 为可选，格式为 `起始-结束`（含首尾行）。未提供时默认展示整个文件。
- `lang` 为可选，指定代码块的语言类型。未提供时自动检测。

## 参数说明

| 参数  | 是否必填 | 说明 |
| --- | --- | --- |
| file | 是 | 文件路径支持站点目录下所有文件 /xxx/xxx.xx |
| lines | 否 | 要展示的行区间，格式 `start-end`，包含起止行。留空则展示全部。 |
| lang | 否 | 代码语言类型，未提供则自动检测。 |

fromfile 路径支持说明：
理论上支持站点目录下的所有文件路径，包括但不限于：
- /static/
- /layouts/
- /content/
- /assets/
- /config/

## 示例

- 读取 static 目录下的 JS 文件并截取 1-20 行：
	```fromfile {file="/js/flyfish.js" lines="1-20" lang="javascript"}
	```

- 读取站点/layouts/下的模板文件：
	```fromfile {file="/layouts/stats.html"}
	```
- 读取站点/content/下的文件：
	```fromfile {file="/content/stats/stats.css"}
	```

- 读取站点/assets/目录下的文件：
	```fromfile {file="/assets/data/social.yml"}
	```

- 读取站点/config/目录下的配置文件：
	```fromfile {file="/config/_default/hugo.yml"}
	```


## 实现方法

使用自定义的 render-codeblock-fromfile.html 模板文件，结合 [Hugo](https://hugo.opendocs.io/zh-cn) 的 partial 和 [render-hooks](https://hugo.opendocs.io/zh-cn/templates/render-hooks/) 功能实现。

layouts/_markup/render-codeblock-fromfile.html 内容如下：

```fromfile
file: "/layouts/_markup/render-codeblock-fromfile.html"
```

layouts/_markup/render-codeblock.xml 内容如下：
```fromfile
file: "/layouts/_markup/render-codeblock.xml"
```

layouts/partials/plugin/code-fromfile.html 内容如下：
```fromfile
file: "/layouts/partials/plugin/code-fromfile.html"
```

/layouts/partials/plugin/code-block-wrapper-fromfile.html 内容如下：
```fromfile
file: "/layouts/partials/plugin/code-block-wrapper-fromfile.html"
```


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2026/codeblock-demo/  

