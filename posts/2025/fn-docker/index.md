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

## Docker-Compose.yml配置说明

Docker-compose.yml配置文件是Docker Compose的核心配置文件，用于定义Docker容器的运行环境。下面是Docker-compose.yml配置文件的基本结构：
```yml
version: '3'  # 指定Docker Compose文件的版本
services:  # 定义服务
  service_name:  # 服务名称
    image: image_name:tag  # 指定使用的Docker镜像和标签
    container_name: container_name  # 指定容器名称
    restart: unless-stopped  # 容器重启策略
    environment:  # 环境变量
      - KEY=VALUE
    volumes:  # 数据卷映射
      - host_path:container_path
    ports:  # 端口映射
      - "host_port:container_port"
    networks:  # 网络配置
      - network_name
```
### 配置说明

| 配置项 | 说明 | 可选值 |
| --- | --- | --- |
| version | 指定Docker Compose文件的版本 | 3, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9 |
| services | 定义服务 |  |
| service_name | 服务名称 | 自定义 |
| image | 指定使用的Docker镜像和标签 | 镜像名称:标签 |
| container_name | 指定容器名称 | 自定义 |
| restart | 容器重启策略 | always, unless-stopped, on-failure, no |
| environment | 环境变量 | 键值对 |
| volumes | 数据卷映射 | 主机路径:容器路径 |
| ports | 端口映射 | 主机端口:容器端口 |
| networks | 网络配置 | 网络名称 |
| network_name | 网络名称 | 自定义 |
| driver | 网络驱动 | bridge, host, overlay |
| driver_opts | 网络驱动选项 | 键值对 |
| deploy | 部署配置 | replicas, update_config, restart_policy |
| resources | 资源限制 | limits, reservations |
| limits | 资源限制 | cpus, memory |
| reservations | 资源保留 | cpus, memory |
| replicas | 副本数量 | 整数 |
| update_config | 更新配置 | parallel, rolling_update |
| restart_policy | 重启策略 | always, unless-stopped, on-failure, no |


## 使用Docker-compose部署应用

分享一些我在飞牛NAS上使用Docker-compose安装的一些好用，好玩，使用的Docker应用。

### Jellyfin
[Jellyfin](https://jellyfin.org/)是一个开源的媒体管理系统，支持流媒体播放和媒体库管理,支持视频，音乐，照片，电子书，电视直播，基本上可以All In One,非常好用,而且100%免费，支持web，android，ios，tv，智能电视等设备。使用Docker-compose部署Jellyfin的步骤如下：

```yml{title="docker-compose.yml"}
services:
  jellyfin:
    image: nyanmisaka/jellyfin:latest
    container_name: jellyfin
    restart: unless-stopped
    environment:
      - PUID=0
      - PGID=0
      - TZ=Asia/Shanghai
    volumes:
      - ./config:/config  #配置路径，根据实际路径填写
      - ./cache:/cache  #缓存路径，根据实际路径填写
      - /:/media  #媒体文件路径，根据实际路径填写
    ports:
      - 3722:8096
      - 8920:8920
    devices:
      - /dev/dri:/dev/dri
```

### HomePage

[HomePage](https://gethomepage.dev/)是一个非常好用的私人应用[主页导航开源项目](https://github.com/gethomepage/homepage)，自定义程度较高，集成了丰富的插件，集成Docker状态监控。使用Docker-compose部署HomePage的步骤如下：

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

[cloudflared](https://github.com/cloudflare/cloudflared)Cloudflare隧道，非常好用的内外穿透工具，简单易用，可以将本地服务通过Cloudflare的网络暴露到公网。缺点是大陆访问的速度偏慢，整体比较稳定，一条隧道可以添加n个公共路由，十分强大。
使用Docker-compose部署Cloudflare隧道的步骤如下：

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
### GoTab标签页

[GoTab标签页](https://www.gotab.cn/)是一个非常好用的标签页导航工具,可以[本地私有部署](https://github.com/dengxiwang/gotab-personal)，虽然后端不开源但功能强大，支持自定义背景、图标和布局。使用Docker-compose部署GoTab标签页的步骤如下：

```yml
services:
  gotab-mysql:
    image: mysql:8.0.44
    container_name: gotab-mysql
    command: --default-authentication-plugin=mysql_native_password
    restart: unless-stopped
    environment:
      MYSQL_ROOT_PASSWORD: myroot  # 修改为你的root密码
      # 创建一个默认数据库，如果不需要可以注释掉这行
      MYSQL_DATABASE: gotab
      # 创建一个MySQL用户，如果不需要可以注释掉这行
      MYSQL_USER: gotab
      # MySQL用户的密码，如果不需要可以注释掉这行
      MYSQL_PASSWORD: gotab123
      MYSQL_DEFAULT_AUTH: mysql_native_password  # 新增：强制原生密码认证
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql
  gotab-server:
    image: doxwant/gotab:latest
    container_name: gotab-server
    ports:
      - "9001:8080" # 映射主机的 8080 端口到容器的 8080 端口
    volumes:
      # 挂载上传文件目录，用于持久化存储用户上传的文件（根据实际修改）
      - ./uploads:/app/uploads
      # 挂载资源存储目录，用于保存程序运行过程中产生的资源文件（根据实际修改）
      - ./sourceStore:/app/sourceStore
      # 挂载配置文件 config.toml 到容器内部
      # 使用 bind 模式将主机当前目录下的 config.toml 挂载到容器内的 /app/config.toml（根据实际修改）
      - type: bind
        source: ./config.toml
        target: /app/config.toml

    environment:
      - TZ=Asia/Shanghai
      - SERVER_PORT=8080 # 设置服务监听的端口为 8080
    restart: unless-stopped # 容器退出时自动重启
    #network_mode: host # 使用主机网络模式（注意：在 Docker Desktop 上不支持）
volumes:
  mysql_data: {}
```

### Omnibox
[Omnibox](https://hub.docker.com/r/lampon/omnibox) 它是一款支持网盘资源、多源影视、直播和电视资源的家庭影视,可在线播放，支持tvbox源。
使用Docker-compose部署Omnibox的步骤如下：
```yml
services:
   omnibox:
      image: docker.1ms.run/lampon/omnibox:latest
      container_name: omnibox
      restart: always
      environment:
         - TZ=Asia/Shanghai
      ports:
         - "7023:7023" # 冒号左侧可自定
      volumes:
         - ./omnibox/data:/app/data # 将本地的 ./omnibox/data 目录挂载到容器的 /app/data 目录
      #network_mode: host
      # 这一段PanSou也要加上重新创建一下，后文会提及
      networks:
        - media-net
networks:
  media-net:
    driver: bridge # 使用默认的桥接网络驱动
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

