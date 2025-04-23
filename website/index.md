# 站点地图



<!-- When you set data `friends.yml` in `yourProject/data/` directory, it will be automatically loaded here. -->
---
<!-- You can define additional content below for this page. -->
## 示例信息

```yaml
- nickname: 网站名称
  avatar: /avatar.jpg # 头像地址
  url: geekswg.github.io #网址地址
  description: 网站描述
```

## Friendly Reminder

{{< admonition info "Notice" true >}}
1. If you want to exchange link, please leave a comment in the above format. (personal non-commercial blogs / websites only)
2. :(fa-solid fa-exclamation-triangle): Website failure, stop maintenance and improper content may be unlinked!
3. Those websites that do not respect other people's labor achievements, reprint without source, or malicious acts, please do not come to exchange.
{{< /admonition >}}

<style>
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
</style>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const previewBox = document.getElementById("previewBox");
    const previewImage = document.getElementById("previewImage");

    document.querySelectorAll(".preview-link").forEach(link => {
        link.addEventListener("mouseenter", (e) => {
            const imageSrc = link.getAttribute("data-preview");
            previewImage.src = imageSrc;
            previewBox.style.display = "block";
        });

        link.addEventListener("mousemove", (e) => {
            previewBox.style.top = `${e.pageY-150}px`;
            previewBox.style.left = `${e.pageX-150}px`;
        });

        link.addEventListener("mouseleave", () => {
            previewBox.style.display = "none";
        });
    });
});
</script>


---

> 作者: <no value>  
> URL: https://geekswg.js.cool/website/  

