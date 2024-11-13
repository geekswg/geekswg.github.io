# 站点地图



&lt;!-- When you set data `friends.yml` in `yourProject/data/` directory, it will be automatically loaded here. --&gt;
---
&lt;!-- You can define additional content below for this page. --&gt;
## 示例信息

```yaml
- nickname: 网站名称
  avatar: /avatar.jpg # 头像地址
  url: geekswg.github.io #网址地址
  description: 网站描述
```

## Friendly Reminder

{{&lt; admonition info &#34;Notice&#34; true &gt;}}
1. If you want to exchange link, please leave a comment in the above format. (personal non-commercial blogs / websites only)
2. :(fa-solid fa-exclamation-triangle): Website failure, stop maintenance and improper content may be unlinked!
3. Those websites that do not respect other people&#39;s labor achievements, reprint without source, or malicious acts, please do not come to exchange.
{{&lt; /admonition &gt;}}

&lt;style&gt;
  .preview-link {
    position: relative;
    text-decoration: none;
    color: #3498db;
}

.preview-box {
    display: none; /* 默认隐藏 */
    position: absolute;
    width: 200px;
    height: 150px;
    border: 1px solid #ddd;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    z-index: 10;
}

.preview-box img {
    width: 100%;
    height: 100%;
}
&lt;/style&gt;
&lt;script&gt;
  document.addEventListener(&#34;DOMContentLoaded&#34;, function () {
    const previewBox = document.getElementById(&#34;previewBox&#34;);
    const previewImage = document.getElementById(&#34;previewImage&#34;);

    document.querySelectorAll(&#34;.preview-link&#34;).forEach(link =&gt; {
        link.addEventListener(&#34;mouseenter&#34;, (e) =&gt; {
            const imageSrc = link.getAttribute(&#34;data-preview&#34;);
            previewImage.src = imageSrc;
            previewBox.style.display = &#34;block&#34;;
        });

        link.addEventListener(&#34;mousemove&#34;, (e) =&gt; {
            previewBox.style.top = `${e.pageY-150}px`;
            previewBox.style.left = `${e.pageX-150}px`;
        });

        link.addEventListener(&#34;mouseleave&#34;, () =&gt; {
            previewBox.style.display = &#34;none&#34;;
        });
    });
});
&lt;/script&gt;


---

> 作者:   
> URL: https://geekswg.js.cool/website/  

