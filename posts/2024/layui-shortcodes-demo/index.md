# Layui Shortcodes Demo

{{&lt; admonition &gt;}}
这是介绍一个依赖layui的shortcodes示例，的实现和使用方法
{{&lt; /admonition &gt;}}

## 为什么使用Layui

* 不善前端
* ui组件全
* 符合我的审美

&lt;!--more--&gt;

## tabs-选项卡

{{&lt; layui-tabs name=&#34;layui-tabs-demo&#34; &gt;}}

  {{% layui-tab title=&#34;示例代码&#34; %}}

```html {title=&#34;使用实例代码&#34;}
{{&lt;/* layui-tabs name=&#34;layui-tabs-2&#34; */&gt;}}
  {{%/* layui-tab title=&#34;t1&#34; */%}}
这是t1内容，支持`MD`语法
  {{%/* /layui-tab */%}}
  {{&lt;/* layui-tab title=&#34;t2&#34; */&gt;}}这是t2的内容{{&lt;/* /layui-tab */&gt;}}
{{&lt;/* /layui-tabs */&gt;}}
```

  {{% /layui-tab  %}}

  {{% layui-tab title=&#34;实现&#34; %}}

&gt; 自定义shortcodes，实现tabs功能，自定义`shortcodes`请参考[官方文档](https://gohugo.io/templates/shortcode-templates/)

在`/lauout/shortcodes/`目录下创建`layui-tabs.html` 和  `layui-tab.html` 文件，内容如下：

```html {title=&#34;layui-tabs.html&#34;}
&lt;!-- 引入 layui.css --&gt;
&lt;link href=&#34;//unpkg.com/layui@2.9.3/dist/css/layui.css&#34; rel=&#34;stylesheet&#34;&gt;
&lt;!-- 请勿在项目正式环境中引用该 layui.js 地址 --&gt;
&lt;script src=&#34;//unpkg.com/layui@2.9.3/dist/layui.js&#34;&gt;&lt;/script&gt;

{{- .Page.Scratch.Add &#34;tabset-counter&#34; 1 -}}
{{- $tab_set_id := .Get &#34;name&#34; | default (printf &#34;tabset-%s-%d&#34; (.Page.RelPermalink) (.Page.Scratch.Get &#34;tabset-counter&#34;) ) | anchorize -}}
{{- $tabs := .Scratch.Get &#34;layui-tabs&#34; -}}

{{- if .Inner -}}{{- /* We don&#39;t use the inner content, but Hugo will complain if we don&#39;t reference it. */ -}}{{- end -}}

&lt;div class=&#34;layui-tab layui-tab-card&#34; lay-filter=&#34;{{ $tab_set_id }}&#34; &gt;
    &lt;ul class=&#34;layui-tab-title&#34;&gt;
        {{- range $i, $e := $tabs -}}
            {{- if (eq $i 0) -}}
                &lt;li class=&#34;layui-this&#34; &gt; {{-  trim .title &#34; &#34; -}} &lt;/li&gt;
            {{ else }}
                &lt;li&gt; {{-  trim .title &#34; &#34; -}} &lt;/li&gt;
            {{- end -}}

        {{- end -}}
    &lt;/ul&gt;
    &lt;div class=&#34;layui-tab-content&#34;&gt;
        {{- range $i, $e := $tabs -}}

            {{- if (eq $i 0) -}}
                &lt;div class=&#34;layui-tab-item layui-show&#34; &gt;
                    {{- .content -}}
                &lt;/div&gt;
            {{ else }}
                &lt;div class=&#34;layui-tab-item&#34;&gt;
                    {{- .content -}}
                &lt;/div&gt;
            {{- end -}}
        {{- end -}}
       
    &lt;/div&gt;
&lt;/div&gt;

```

&gt; 

```html {title=&#34;layui-tab.html&#34;}
&lt;!-- 
参考 hugo-stellar
https://github.com/Yharimium/hugo-stellar/blob/main/layouts/shortcodes/mkdocs/tab.html
https://github.com/kubernetes/website/blob/main/layouts/shortcodes/tabs.html
--&gt;

{{- $title :=  cond .IsNamedParams (.Get &#34;title&#34;) (.Get 0) | markdownify  -}}
{{- $content := .Inner | safeHTML -}}

{{- if not (.Parent.Scratch.Get &#34;layui-tabs&#34;) -}}
    {{- .Parent.Scratch.Set &#34;layui-tabs&#34; slice -}}
{{- end -}}

{{- .Parent.Scratch.Add &#34;layui-tabs&#34; (dict &#34;title&#34; $title &#34;content&#34; $content) -}}

&lt;div class=&#34;layui-tab-item&#34;&gt;
	{{ .Inner }}
&lt;/div&gt;
```

  {{% /layui-tab  %}}

{{&lt; /layui-tabs  &gt;}}

### demo

{{&lt; layui-tabs name=&#34;layui-tabs-2&#34; &gt;}}
  {{% layui-tab title=&#34;t1&#34; %}}
这是t1内容，支持`MD`语法
  {{% /layui-tab %}}
  {{&lt; layui-tab title=&#34;t2&#34; &gt;}}这是t2的内容{{&lt; /layui-tab &gt;}}
{{&lt; /layui-tabs &gt;}}

## timeline-时间轴

{{&lt; layui-tabs name=&#34;tabs-timeline&#34; &gt;}}

{{% layui-tab title=&#34;使用&#34; %}}

```html {title=&#34;示例代码&#34;}
{{&lt;/* timeline */&gt;}}
{{%/* tl-event title=&#34;2024-01-03&#34; */%}}
支持`MD`语法
{{%/* /tl-event */%}}
{{%/* tl-event title=&#34;2023-11-03&#34; */%}}
&gt; hello world
{{%/* /tl-event */%}}
{{&lt;/* /timeline */&gt;}}
```
{{% /layui-tab %}}

{{% layui-tab title=&#34;效果&#34; %}}

{{&lt; timeline &gt;}}
{{% tl-event title=&#34;2024-01-03&#34; %}}
支持`MD`语法
{{% /tl-event %}}
{{% tl-event title=&#34;2023-11-03&#34; %}}
&gt; hello world
{{% /tl-event %}}
{{&lt; /timeline &gt;}}

{{% /layui-tab %}}


{{% layui-tab title=&#34;实现&#34; %}}
这里是实现方法
{{% /layui-tab %}}

{{&lt; /layui-tabs &gt;}}

{{&lt; timeline &gt;}}
{{% tl-event title=&#34;2024-01-03&#34; %}}
支持`MD`语法
{{% /tl-event %}}
{{% tl-event title=&#34;2023-11-03&#34; %}}
&gt; hello world
{{% /tl-event %}}
{{&lt; /timeline &gt;}}



---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.github.io/posts/2024/layui-shortcodes-demo/  

