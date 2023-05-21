# Build Cloud Disk - CloudReve

{{< admonition quote "quote" >}}
今天介绍一下非常好用的私有云网盘系统。
以 跨平|的方式组织你的文件。Cloudreve 可助你即刻构建出兼备自用或公用的网盘服务，通过多种存储策略的支持、虚拟文件系统等特性实现灵活的文件管理体验。
note abstract info tip success question warning failure danger bug example quote
{{< /admonition >}}
这里使用MD语法编写你的文章
<!--more-->
[CloudReve官网地址](https://cloudreve.org/)

现在的网盘吧，动不动就限速，内容还得需要审核，NAS把又太笨重了，自己搭一个私有云网盘，所有的权限都在自己手中放心，要是想其他人也可能访问，一个公网ip+【自定义域名】就ok了。
Cloudreve 可以让您快速搭建起公私兼备的网盘系统。Cloudreve 在底层支持不同的云存储平台，用户在实际使用时无须关心物理存储方式。你可以使用 Cloudreve 搭建个人用网盘、文件分享系统，亦或是针对大小团体的公有云系统。

## 为什么推荐CloudReve

* 国产，功能完善，中文文档齐全，其他的就不比较了。
* 社区版完全免费开源，比较纯粹，没有套路。
* 支持windows和linux，扩展性强。
* Go语言重构了，作者666。

## 快速开始

> 本来想写个教程的，但是把官网写的太好，太详细。[官方教程](https://docs.cloudreve.org/getting-started/install)

记录点注意事项：

* 部署成功后，管理用户和密码都在控制台显示了，请自行保存。
* windows部署超级简单就一个单文件，当时如果你的管理员密码不记得了，把程序根目录的 .db ，删掉，就可以重新部署程序了，重新生成了用户名和密码，相当于重置了整个系统，所以还是建议大家，一开始妥善保管，以免不必要麻烦。
* 该网盘默认使用sqlite数据库。

## 遇到的问题

> 文档预览，内网预览 docs，无法使用

解决方案：
1. 使用 [kkFileView](https://kkview.cn/) ,文档预览来替换。
当时需要改造预览方法。由于cloudreve文件地址是不带后缀名的。而kkfileView预览地址是要带后缀名的。

2. 使用Web Application Open Platform Interface (WOPI) 协议是一种用于集成 Web 文档编辑器的协议，你可以在 微软的文档 中阅读详细的协议定义。Cloudreve 可以对接实现了 WOPI 协议的文档处理服务，用于扩展已有的文档预览和编辑能力。




---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/build-cloud-disk/  

