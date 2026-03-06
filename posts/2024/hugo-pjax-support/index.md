# Hugo添加Pjax功能支持

{{< admonition >}}
Hugo是一个使用Go语言构建的静态网站生成器，它的速度非常快，并且具有强大的主题支持和灵活的定制选项。通过Hugo，你可以轻松地构建和管理博客网站，并且添加PJAX功能也非常简单。
{{< /admonition >}}
当你希望你的博客网站加载更快、更平滑，同时又想要保持简洁的用户体验时，`PJAX`（PushState + Ajax）就是一个很好的选择。Hugo是一个快速、灵活的静态网站生成器，它提供了添加PJAX功能的简便方法。在这篇博客中，我将向你介绍如何使用Hugo为你的博客网站添加PJAX功能。
<!--more-->
## 什么是PJAX？
PJAX是一种通过`Ajax`和HTML5 History API来实现无刷新页面加载的技术。当用户点击链接时，PJAX会使用Ajax从服务器加载页面的一部分，然后使用History API来更新浏览器的URL，使其看起来像是完整加载了一个新页面。这种方式可以显著提高网站的加载速度，并提升用户体验。
`Pjax` = `Ajax` + `pushState`。当用户进行超链请求时，Pjax 会拦截请求，然后触发 Ajax 请求和 pushState。其中，Ajax 使你的页面局部刷新，pushState 用于修改 URL 而不跳转页面，从而实现不跳转页面局部刷新的功能。
## PJAX在Hugo中的使用
> PJAX实现有两大版本，一种是基于`JavaScript`的版本，另一种是基于`jQuery`的版本。

- [MoOx/pjax](https://github.com/MoOx/pjax) 基于`JavaScript`的版本，推荐使用！
- [defunkt/jquery-pjax](https://github.com/defunkt/jquery-pjax)、[welefen/pjax](https://github.com/welefen/pjax)。依赖`jQuery`，不推荐使用。

### 安装PJAX

本文以 [MoOx/pjax](https://github.com/MoOx/pjax) 为例，介绍如何在Hugo中添加PJAX功能。
首先，在你的Hugo项目中安装`pjax`，使用cdn方式安装：

```html
<script src="https://cdn.jsdelivr.net/npm/pjax/pjax.js"></script>
```

### 配置PJAX页面demo

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Liuyib's Blog</title>
    <meta name="description" content="Liuyib's Blog" />
  </head>
  <body>
    <header id="header" class="header">
      顶部栏...
    </header>
    <main id="main" class="main">
      主体部分...
    </main>
    <footer id="footer" class="footer">
      底部栏...
    </footer>
  </body>
</html>
```

每次切换页面时，title 会随之改变，header 和 footer 一般不变，而 main 是网站的主体部分，也会改变。因此，我们可以这样来使用 Pjax：

```html
var pjax = new Pjax({
  // 这里填写页面中改变的部分（和 CSS 选择器用法一样）
  selectors: ["head title", "#main"],
});
```

### 重载JS

如果页面中引入了JS文件，那么切换页面时，这些JS文件也会被重新加载。因此，我们需要在切换页面时，重新加载这些JS文件。

```html
<script>
  var pjax = new Pjax({
    // 这里填写页面中改变的部分（和 CSS 选择器用法一样）
    selectors: ["head title",".desktop .animate__faster", ".container"],
  });

  // Pjax 开始时执行的函数
document.addEventListener("pjax:send", function () {
  console.log("pjax:send");
});

// Pjax 完成之后执行的函数
document.addEventListener("pjax:complete", function () {
  console.log("pjax:complete");

  pjax_reload();
});

function pjax_reload() {
  pjax_js_reload("/js/theme.min.js");
  initCustomALink();
}

function pjax_js_reload(js_url, callback) {
  var bp = document.createElement('script');
  var curProtocol = window.location.protocol.split(':')[0];
  bp.src = js_url;
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(bp, s);
}

</script>
```

## PJAX使用的注意事项

- 注意整个页面的划分和布局，PAJX 只能加载页面中改变的部分，不能加载整个页面，一般的静态的部分不需要重复加载。
- 注意页面中的 JS 文件，切换页面时，需要重新加载 JS 文件，否则可能出现页面不完整和功能缺失的情况，需要在`pjax:complete`事件中重载JS。

## PJAX的使用场景
- 在网站运行过程，需要频繁切换页面时。
- 需要加载大量静态资源时。
- 需要加载大量动态资源时。

> 例如：网站页面贴边的音乐播放器，我在切换页面时，不需要重新加载音乐播放器，只需要重新加载页面中改变的部分即可。


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2024/hugo-pjax-support/  

