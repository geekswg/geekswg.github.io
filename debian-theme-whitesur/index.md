# Debian Theme Whitesur

{{< admonition quote "quote" true >}}
通过安装主题，让你的linux看起来非常炫酷。
{{< /admonition >}}

<!--more-->

## whiteSur 主题

主题下载地址 [WhiteSur-gtk-theme](https://github.com/vinceliuice/WhiteSur-gtk-theme)  

## 安装主题

解压后在终端中执行执行`./install`即可。

## 安装icons

下载地址 ：https://github.com/vinceliuice/WhiteSur-icon-theme
安装方法，解压后 `./install`，非常简单。

## 安装plank dock栏

安装Plank
plank的安装非常简单：
```bash
sudo apt install plank
```
地址1：https://www.gnome-look.org/p/1399398/
启动plank:  `plank &`

## linux添加自启动
为了每次启动能够正常使用plank,将plank添加到 linux自启动程序中。

开机启动：
1、跳转到对应位置（/etc/init.d/）
```bash
cd /etc/init.d/
```

2、创建sh脚本（文本名.sh）（如果不存在会自动创建）
```bash
sudo gedite /etc/init.d/my-starter.sh
```

3、在sh文件中输入一下内容

```bash
  #!/bin/sh
    
    ### BEGIN INIT INFO
    # Provides:Leanote
    # Required-Start: $network $remote_fs $local_fs
    # Required-Stop: $network $remote_fs $local_fs
    # Default-Start: 2 3 4 5
    # Default-Stop: 0 1 6
    # Short-Description: Leanote
    # Description: Leanote start
    ### END INIT INFO
    
    #开机启动 plank &
    nohup plank &

    exit 0
```

---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/debian-theme-whitesur/  

