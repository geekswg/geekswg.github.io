# 飞牛NAS之Docker

最近飞牛NAS发布了正式版系统，经过一段时间的使用，发现飞牛NAS的Docker功能还是很强大的，支持Docker和Docker-compose两种方式来部署应用。本文将分享一些我在飞牛NAS上使用Docker的经验和技巧。
<!--more-->
## 什么是Docker？

Docker是一种开源的应用容器引擎，允许开发者将应用程序及其依赖打包成一个标准化的容器，然后发布到任何流行的Linux机器上，也可以实现虚拟化。Docker容器是完全使用沙箱机制，相互之间不会有任何接口。优点是：

- **便携性**：可以轻松地在不同环境中部署和运行应用程序。
- **隔离性**：每个容器都是独立的，互不干扰。
- **一致性**：确保应用程序在不同环境下的行为一致。
- **资源效率**：容器共享主机内核，资源利用率高。
- **快速启动**：容器启动速度快，适合弹性伸缩。
- **安全性**：容器内置安全机制，避免了系统漏洞。

## 飞牛NAS上的Docker

飞牛NAS支持Docker和Docker-compose两种方式来部署应用。下面将详细介绍如何在飞牛NAS上使用Docker。


## 使用Docker部署应用
飞牛已经内置了Docker，可以直接使用。非常方便。以下是使用Docker部署应用的步骤：

1. **登录飞牛NAS管理界面**：使用管理员账号登录飞牛NAS的Web管理界面。
2. **打开Docker应用**：在应用市场中找到Docker应用并打开。
3. **创建Docker容器**：在Docker应用中创建一个新的容器。填写容器名称、镜像名称、端口映射等信息，然后点击“创建”按钮。
4. **管理Docker容器**：创建完成后，可以在Docker应用中看到已创建的容器。可以启动、停止、删除容器，也可以查看容器的日志和资源使用情况。

## 使用Docker-compose部署应用

分享一些我在飞牛NAS上使用Docker-compose安装的一些好用，好玩，使用的Docker应用。

### HomePage

[homepage](https://github.com/gethomepage/homepage)是一个非常好用的个人主页应用，可以快速搭建一个漂亮的个人主页。使用Docker-compose部署HomePage的步骤如下：

```yml
services:
  homepage:
    image: ghcr.io/gethomepage/homepage:latest
    container_name: homepage
    restart: always
    ports:
      - 4000:4000
    volumes:
      - ./config:/app/config # Make sure your local config directory exists
      - ./icons:/app/public/icons
      - ./images:/app/public/images
      - /var/run/docker.sock:/var/run/docker.sock # (optional) For docker integrations
      # 映射磁盘读权限
      - /vol2:/volume2:ro
      - /vol3:/volume3:ro
    environment:
      PORT: 4000
      HOMEPAGE_ALLOWED_HOSTS: homepage.geekswg.dpdns.org,192.168.129.130:4000 # required, may need port. See gethomepage.dev/installation/#homepage_allowed_hosts
      #PUID: 1000
      #PGID: 1001
      OPENWEATHERMAP_API_KEY: ce254243db8384604ce5a48124ad2ac6
```

### Cloudflare隧道

[cloudflared](https://github.com/cloudflare/cloudflared)Cloudflare隧道，可以将本地服务通过Cloudflare的网络暴露到公网。使用Docker-compose部署Cloudflare隧道的步骤如下：

```yml
version: '3.8'
services:
  cloudflared: 
  image: cloudflare/cloudflared:latest
  container_name: cf-tunnel
  restart: always
  network_mode: host
  command: tunnel --no-autoupdate run --token <your_token_here></your_token_here>
```

### FnDesk

[FnDesk](https://github.com/IMGZCQ/fndesk)是一个第三方的飞牛桌面管理软件,fndesk 飞牛桌面管理工具
实在太强大！我的飞牛我做主,多处自定样式主题美化,桌面图标任君摆布,让飞牛成为你的导航页，收藏夹,Docker应用入口

```yml
services:
  fndesk:                    #Compose项目名称
    container_name: fndesk        #docker容器名称
    image: imgzcq/fndesk:latest    #镜像名称
    restart: always             #容器自动启动应用配置
    ports:
      - 9990:9990              #冒号左边修改自定义端口
      - 9991:9991              # HTTPS端口
    volumes:
      - /usr/trim/www:/fnw        #不能改！
      - /usr/trim/share/.restore:/res #不能改！
      - /usr/local/apps/@appcenter/trim.media:/trim.media
      # ↑ v0.73起开放影视个性化需加入此项
      - ./deskdata:/deskdata       #冒号左边的可以改但不建议     
```
> [!TIP]
> 由于Docker限制，目前Docker版本已经停更，推荐安装fpk飞牛应用版本，功能更强大

### docker-copilot

[docker-copilot](https://github.com/onlyLTY/dockerCopilot)是一个第三方的Docker管理工具，可以通过Web界面管理Docker容器。使用Docker-compose部署docker-copilot的步骤如下：

```yml
services:
  dockercopilot:
    container_name: docker-copilot
    restart: always
    privileged: true
    network_mode: bridge
    ports:
      - 12712:12712
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock
      - ./data:/data
    environment:
      - TZ=Asia/Shanghai
      - DOCKER_HOST=unix:///var/run/docker.sock
      - secretKey=your_password #密码，不少于八位且非纯数字
    image: 0nlylty/dockercopilot:latest-dev
```

### 持续更新中

最近一直在折腾各种Docker应用，发现了很多实用的工具和方法，后续会继续分享更多经验。

<!-- 
> [!NOTE]
> 突出显示用户应考虑的信息，即使只是浏览也应考虑。

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
> URL: https://geekswg.js.cool/posts/2025/fn-docker/  

