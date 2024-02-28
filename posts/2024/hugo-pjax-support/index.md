# Hugo添加Pjax功能支持

{{&lt; admonition &gt;}}
Hugo是一个使用Go语言构建的静态网站生成器，它的速度非常快，并且具有强大的主题支持和灵活的定制选项。通过Hugo，你可以轻松地构建和管理博客网站，并且添加PJAX功能也非常简单。
{{&lt; /admonition &gt;}}
当你希望你的博客网站加载更快、更平滑，同时又想要保持简洁的用户体验时，`PJAX`（PushState &#43; Ajax）就是一个很好的选择。Hugo是一个快速、灵活的静态网站生成器，它提供了添加PJAX功能的简便方法。在这篇博客中，我将向你介绍如何使用Hugo为你的博客网站添加PJAX功能。
&lt;!--more--&gt;
## 什么是PJAX？
PJAX是一种通过`Ajax`和HTML5 History API来实现无刷新页面加载的技术。当用户点击链接时，PJAX会使用Ajax从服务器加载页面的一部分，然后使用History API来更新浏览器的URL，使其看起来像是完整加载了一个新页面。这种方式可以显著提高网站的加载速度，并提升用户体验。
`Pjax` = `Ajax` &#43; `pushState`。当用户进行超链请求时，Pjax 会拦截请求，然后触发 Ajax 请求和 pushState。其中，Ajax 使你的页面局部刷新，pushState 用于修改 URL 而不跳转页面，从而实现不跳转页面局部刷新的功能。
## PJAX在Hugo中的使用
&gt; PJAX实现有两大版本，一种是基于`JavaScript`的版本，另一种是基于`jQuery`的版本。

- [MoOx/pjax](https://github.com/MoOx/pjax) 基于`JavaScript`的版本，推荐使用！
- [defunkt/jquery-pjax](https://github.com/defunkt/jquery-pjax)、[welefen/pjax](https://github.com/welefen/pjax)。依赖`jQuery`，不推荐使用。

### 安装PJAX

本文以 [MoOx/pjax](https://github.com/MoOx/pjax) 为例，介绍如何在Hugo中添加PJAX功能。
首先，在你的Hugo项目中安装`pjax`，使用cdn方式安装：

```html
&lt;script src=&#34;https://cdn.jsdelivr.net/npm/pjax/pjax.js&#34;&gt;&lt;/script&gt;
```

### 配置PJAX页面demo

```html
&lt;!DOCTYPE html&gt;
&lt;html lang=&#34;en&#34;&gt;
  &lt;head&gt;
    &lt;meta charset=&#34;UTF-8&#34; /&gt;
    &lt;title&gt;Liuyib&#39;s Blog&lt;/title&gt;
    &lt;meta name=&#34;description&#34; content=&#34;Liuyib&#39;s Blog&#34; /&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;header id=&#34;header&#34; class=&#34;header&#34;&gt;
      顶部栏...
    &lt;/header&gt;
    &lt;main id=&#34;main&#34; class=&#34;main&#34;&gt;
      主体部分...
    &lt;/main&gt;
    &lt;footer id=&#34;footer&#34; class=&#34;footer&#34;&gt;
      底部栏...
    &lt;/footer&gt;
  &lt;/body&gt;
&lt;/html&gt;
```

每次切换页面时，title 会随之改变，header 和 footer 一般不变，而 main 是网站的主体部分，也会改变。因此，我们可以这样来使用 Pjax：

```html
var pjax = new Pjax({
  // 这里填写页面中改变的部分（和 CSS 选择器用法一样）
  selectors: [&#34;head title&#34;, &#34;#main&#34;],
});
```

### 重载JS

如果页面中引入了JS文件，那么切换页面时，这些JS文件也会被重新加载。因此，我们需要在切换页面时，重新加载这些JS文件。

```html
&lt;script&gt;
  var pjax = new Pjax({
    // 这里填写页面中改变的部分（和 CSS 选择器用法一样）
    selectors: [&#34;head title&#34;,&#34;.desktop .animate__faster&#34;, &#34;.container&#34;],
  });

  // Pjax 开始时执行的函数
document.addEventListener(&#34;pjax:send&#34;, function () {
  console.log(&#34;pjax:send&#34;);
});

// Pjax 完成之后执行的函数
document.addEventListener(&#34;pjax:complete&#34;, function () {
  console.log(&#34;pjax:complete&#34;);

  pjax_reload();
});

function pjax_reload() {
  pjax_js_reload(&#34;/js/theme.min.js&#34;);
  initCustomALink();
}

function pjax_js_reload(js_url, callback) {
  var bp = document.createElement(&#39;script&#39;);
  var curProtocol = window.location.protocol.split(&#39;:&#39;)[0];
  bp.src = js_url;
  var s = document.getElementsByTagName(&#39;script&#39;)[0];
  s.parentNode.insertBefore(bp, s);
}

&lt;/script&gt;
```

## PJAX使用的注意事项

- 注意整个页面的划分和布局，PAJX 只能加载页面中改变的部分，不能加载整个页面，一般的静态的部分不需要重复加载。
- 注意页面中的 JS 文件，切换页面时，需要重新加载 JS 文件，否则可能出现页面不完整和功能缺失的情况，需要在`pjax:complete`事件中重载JS。

## PJAX的使用场景
- 在网站运行过程，需要频繁切换页面时。
- 需要加载大量静态资源时。
- 需要加载大量动态资源时。

&gt; 例如：网站页面贴边的音乐播放器，我在切换页面时，不需要重新加载音乐播放器，只需要重新加载页面中改变的部分即可。

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.github.io/posts/2024/hugo-pjax-support/  

