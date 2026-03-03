# Hugo博客添加作者声明


给你的博客添加一个作者声明，类似抖音上，发布作品时添加的一声明类似的功能，告诉读者这是原创作品，转载时需要注明出处，或者声明是AI共创，或者声明内容来源网络。

## 使用方法

在front-matter中添加author-statement字段，值为你想要展示的声明内容。

```yaml
author-statement:
  type: CUSTOM # 声明类型，
  content: "AI共创，Github Copilot实现代码生成"
```

作者声明类型有以下几种：

声明类型 |	英文翻译|	建议缩写
|---|---|---|
原创内容|	Original Content / Creation |	ORIG 或 ORIGINAL
虚构演绎|	Fictional Content / Dramatization |	FIC 或 DRM
内容由AI生成|	AI-Generated Content |	AIGC (行业通用标准缩写)
取材网络|	Content Sourced from the Internet |	SFI 或 WEB
个人观点|	Personal Opinions |	PO 或 OPN
危险提示|	Danger Warning |	DANGER 或 RISK
自定义声明|	Custom Statement |	CUSTOM

## 实现方法

创建作者声明html模板，路径为layouts/partials/custom/author-statement.html，内容如下：

```fromfile
file: layouts/partials/custom/author-statement.html
```

在你自己的博客模板中，引入模板文件即可。

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2026/hugo-add-author-statement/  

