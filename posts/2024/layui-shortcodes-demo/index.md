# Layui Shortcodes Demo

{{< admonition >}}
这是介绍一个依赖layui的shortcodes示例，的实现和使用方法
{{< /admonition >}}

## 为什么使用Layui

* 不善前端
* ui组件全
* 符合我的审美

<!--more-->

## tabs-选项卡

{{< layui-tabs name="layui-tabs-demo" >}}

  {{% layui-tab title="示例代码" %}}

```html {title="使用实例代码"}
{{</* layui-tabs name="layui-tabs-2" */>}}
  {{%/* layui-tab title="t1" */%}}
这是t1内容，支持`MD`语法
  {{%/* /layui-tab */%}}
  {{</* layui-tab title="t2" */>}}这是t2的内容{{</* /layui-tab */>}}
{{</* /layui-tabs */>}}
```

  {{% /layui-tab  %}}

  {{% layui-tab title="实现" %}}

> 自定义shortcodes，实现tabs功能，自定义`shortcodes`请参考[官方文档](https://gohugo.io/templates/shortcode-templates/)

在`/lauout/shortcodes/`目录下创建`layui-tabs.html` 和  `layui-tab.html` 文件，内容如下：

```html {title="layui-tabs.html"}
<!-- 引入 layui.css -->
<link href="//unpkg.com/layui@2.9.3/dist/css/layui.css" rel="stylesheet">
<!-- 请勿在项目正式环境中引用该 layui.js 地址 -->
<script src="//unpkg.com/layui@2.9.3/dist/layui.js"></script>

{{- .Page.Scratch.Add "tabset-counter" 1 -}}
{{- $tab_set_id := .Get "name" | default (printf "tabset-%s-%d" (.Page.RelPermalink) (.Page.Scratch.Get "tabset-counter") ) | anchorize -}}
{{- $tabs := .Scratch.Get "layui-tabs" -}}

{{- if .Inner -}}{{- /* We don't use the inner content, but Hugo will complain if we don't reference it. */ -}}{{- end -}}

<div class="layui-tab layui-tab-card" lay-filter="{{ $tab_set_id }}" >
    <ul class="layui-tab-title">
        {{- range $i, $e := $tabs -}}
            {{- if (eq $i 0) -}}
                <li class="layui-this" > {{-  trim .title " " -}} </li>
            {{ else }}
                <li> {{-  trim .title " " -}} </li>
            {{- end -}}

        {{- end -}}
    </ul>
    <div class="layui-tab-content">
        {{- range $i, $e := $tabs -}}

            {{- if (eq $i 0) -}}
                <div class="layui-tab-item layui-show" >
                    {{- .content -}}
                </div>
            {{ else }}
                <div class="layui-tab-item">
                    {{- .content -}}
                </div>
            {{- end -}}
        {{- end -}}
       
    </div>
</div>

```

> 

```html {title="layui-tab.html"}
<!-- 
参考 hugo-stellar
https://github.com/Yharimium/hugo-stellar/blob/main/layouts/shortcodes/mkdocs/tab.html
https://github.com/kubernetes/website/blob/main/layouts/shortcodes/tabs.html
-->

{{- $title :=  cond .IsNamedParams (.Get "title") (.Get 0) | markdownify  -}}
{{- $content := .Inner | safeHTML -}}

{{- if not (.Parent.Scratch.Get "layui-tabs") -}}
    {{- .Parent.Scratch.Set "layui-tabs" slice -}}
{{- end -}}

{{- .Parent.Scratch.Add "layui-tabs" (dict "title" $title "content" $content) -}}

<div class="layui-tab-item">
	{{ .Inner }}
</div>
```

  {{% /layui-tab  %}}

{{< /layui-tabs  >}}

### demo

{{< layui-tabs name="layui-tabs-2" >}}
  {{% layui-tab title="t1" %}}
这是t1内容，支持`MD`语法
  {{% /layui-tab %}}
  {{< layui-tab title="t2" >}}这是t2的内容{{< /layui-tab >}}
{{< /layui-tabs >}}

## timeline-时间轴

{{< layui-tabs name="tabs-timeline" >}}

{{% layui-tab title="使用" %}}

```html {title="示例代码"}
{{</* timeline */>}}
{{%/* tl-event title="2024-01-03" */%}}
支持`MD`语法
{{%/* /tl-event */%}}
{{%/* tl-event title="2023-11-03" */%}}
> hello world
{{%/* /tl-event */%}}
{{</* /timeline */>}}
```
{{% /layui-tab %}}

{{% layui-tab title="效果" %}}

{{< timeline >}}
{{% tl-event title="2024-01-03" %}}
支持`MD`语法
{{% /tl-event %}}
{{% tl-event title="2023-11-03" %}}
> hello world
{{% /tl-event %}}
{{< /timeline >}}

{{% /layui-tab %}}


{{% layui-tab title="实现" %}}
这里是实现方法
{{% /layui-tab %}}

{{< /layui-tabs >}}

{{< timeline >}}
{{% tl-event title="2024-01-03" %}}
支持`MD`语法
{{% /tl-event %}}
{{% tl-event title="2023-11-03" %}}
> hello world
{{% /tl-event %}}
{{< /timeline >}}



---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2024/layui-shortcodes-demo/  

