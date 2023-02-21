# New Bing 申请教程

    最近除了有很红的ChatGPT AI 聊天机器人之外，还有很多人跃跃欲试新版Bing（New Bing），因为微软将新版Bing 结合了比ChatGPT 更强大的新一代OpenAI 语言模型，不仅能询问复杂问题、提供建议与解决方法，Bing 也会查看网路搜寻结果，迅速为我们提供摘要。
记录申请过程中遇到各种问题以及解决办法。
<!--more-->

## 申请New Bing
> 申请地址 ： https://bing.com/new

由于某些原因，国内无法直接访问 new bing 。
1. 通过科学上网方式直接访问
2. 使用 HeaderEditor 插件 下载链接：[点击下载](https://microsoftedge.microsoft.com/addons/detail/header-editor/afopnekiinpekooejpchnkgfffaeceko)
   启用插件
   配置插件
   ![配置截图](newbing-header-editor.png "配置截图")
   配置参数
```
// 匹配规则
^http(s?)://(.*).bing\.com/(.*)

// 头名称
x-forwarded-for

// 头内容
8.8.8.8   或者  4.2.2.2
```

## 老账户无法加入waitlist
{{< admonition failure "错误提示"  >}}
老的微软账户是不是提示
![new bing 申请waitlist错误](newbing.png "new bing 申请waitlist错误")
{{< /admonition >}}

1. 使用科学上网地址非国内地址，申请一个新的微软账户加入 new bing [waitlist](https://www.bing.com/new)
2. 继续使用老账户申请
> 如果在申请 new bing waitlist 等候名单遇到 错误提示信息
{{< admonition bug "错误提示"  >}}
1. 出错了，请重试
2. Something went wrong, please try again later.
{{< /admonition >}}
原因就是 Microsoft rewards 已经在国内使用过了，账户被禁用了。

解决方案如下：
1. 退出Bing Rewards计划: https://rewards.bing.com/optout ,请注意退出计划会清除积分
2. 重新加入Bing Rewards计划: https://rewards.bing.com
3. 清除cookie后，再次申请加入新版必应( https://www.bing.com/new )，即可正常加入候补列表


## New Bing 上手体验

> 使用体验非常好，尤其是上下文语境做的让人非常舒服，总之是一个合格而且优秀的助手
推荐下载 [Edge-Dev](https://www.microsoftedgeinsider.com/zh-cn/download/dev) 体验效果非常好

![Edge-Dev new bing 使用预览](newbing.gif "Edge-Dev new bing 使用预览")

> 网页中使用bing-chat

https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx

![web new bing 使用预览](newbing.png "web new bing 使用预览")


---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/new-bing/  

