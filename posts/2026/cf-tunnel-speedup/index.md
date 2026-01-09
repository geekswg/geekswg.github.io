# Cloudflare隧道加速

记录Cloudflare隧道加速配置过程中的一些细节和注意事项。我们都知道赛博活佛Cloudflare隧道是一个非常好用且操作简单的内外穿透工具，但是由于隧道线路在国内访问速度极慢，Cloudflare隧道加速（国内优选IP）可以帮助我们提高网站的访问速度和稳定性。
<!--more-->

## 先决条件
- 已注册Cloudflare账号，已安装Cloudflare Tunnel客户端
- 要求有两个域名并且已托管在Cloudflare，一个用于加速，一个用于正常访问
- Cloudflare账号开通了自定义`SSL/TLS-自定义主机名`功能，推荐使用[paypal](https://www.paypal.com/)账户激活，实名后绑卡后即可开通，无需付费。
- 一个Cloudflare 国内IP优选服务解析,推荐使用 [SIN](https://saas.sin.fan/)优选IP服务。

## 开始配置
下面就以 `main.com`, `huituiyuan.com`,为例，分别为主域名和回退源域名，配置Cloudflare隧道加回源到国内优选IP，来实现国内加速访问。
主要为三个步骤：

[设置回退源](#设置回退源) 、[配置优选IP服务](#配置优选ip服务)
、[配置主域名](#配置主域名)

### 设置回退源

> `a.main.com` 为主域名的cf隧道服务，`a.huituiyuan.com`为回退源域名，cf隧道服务配置为 http://localhost ,不要填写端口。

1. 登录Cloudflare，选择域名huituiyuan.com，进入"SSL/TLS"设置面。确保已开启"自定义主机名"功能，并配置相应的SSL证书。
2. `自定义主机名`配置页面，选择"添加自定义主机名",填写`a.main.com`其他默认，点击"添加自定义主机名"完成。完成后下方会添加一条自定义主机名记录，`证书状态`和`主机名状态`都为`有效`才表示配置成功,点击记录按照提示要求去`a.main.com`添加txt记录完成验证即可。[配置主域名](#配置主域名)会详细说明
3.  `自定义主机名`配置页面，回退源添加`a.huituiyuan.com`，添加完成。回退源状态为`有效`才表示配置成功。

### 配置优选IP服务

在`huituiyuan.com`域名下，添加`cname`记录，`cdn.huituiyuan.com`，指向优选IP服务提供的域名，例如 `saas.sin.fan`关闭小黄云加速。

### 配置主域名

1. 在`main.com`域名下，按照`设置回退源`中第2步的,`自定义主机名`记录,要求配置，添加相应的`txt`记录完成DNS配置,完成自定义主机名状态验证。按要求配置自定义主机名的 DCV 委派。
自定义主机名的 DCV 委派,在main.com域名下添加cname记录，
 `_acme-challenge.main.com`指向`main.com.yourcode.dcv.cloudflare.com`
（通配符自定义主机名）证书，而无需在每个续订期间手动放置 TXT 令牌。
2. `a.main.com`的DNS记录修改`cname`记录，指向`cdn.huituiyuan.com`,关闭小黄云加速。

## 测试访问

配置完成后，等待DNS解析生效，通常需要几分钟到数即可生效。然后访问`a.main.com`，检查是否能够正常访问，并且速度是否有所提升。
可以使用[ping.cn](https://ping.chinaz.com/)等工具测试访问速度。
测试结果显示，访问速度从原来的几秒提升到了几十毫秒，速度提升了数倍。

> [!NOTE]~
> CF隧道优选加速，只能提高国内访问速度，并不了提高CF隧道自身提供免费的带宽和流量限制！

<!-- 
> [!TIP]
> 可选信息，可帮助用户取得更大的成功。

> [!IMPORTANT]
> 用户成功所需的关键信息。

> [!WARNING]
> 由于存在潜在风险，需要用户立即关注的关键内容。

> [!CAUTION]
> 操作的潜在负面后果。
这里使用MD语法编写你的文章
-->

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2026/cf-tunnel-speedup/  

