# Debian从稳定版切换到testing版

{{< admonition tip >}}
debian升级到testing – 让debian系统永远保持最新的秘诀
{{< /admonition >}}

<!--more-->
debian的版本分为：unstable(不稳定版)、testing(测试版)、stable(稳定版),稳定版稳定性非常强悍，曾经使用过ubuntu，几乎每个星期都要重装系统，自从使用了debian系统，再不用重装系统了。然而稳定版的软件是比较旧的，为了追求稳定，牺牲了一些新的特性支持，比如:最新的debian 8.6 stable版本，linux内核还在3.16版本上，要知道，截止到2016-12-26号，Linux kernel已经更新到4.10了,稳定版是4.9

## 方法一：添加debian testing版本源
> 如果安装的是debian stable版，只要喜欢，任何时间都可以将其变成 testing版本，方法很简单，用喜欢的编辑器打开：`/etc/apt/source.list` 源文件，用#号注释掉之前的源，加入下面的源文件,该源长期有效，因为每个debian版本，都会有testing版本。

```
# --------testing  源
deb http://security.debian.org/ testing/updates main contrib
deb-src http://security.debian.org/ testing/updates main contrib
deb-src http://ftp.debian.org/debian/ testing-updates main contrib
deb http://ftp.debian.org/debian/ testing-updates main contrib
# 163
deb http://mirrors.163.com/debian/ testing main non-free contrib
deb http://mirrors.163.com/debian/ testing-updates main non-free contrib
deb-src http://mirrors.163.com/debian/ testing main non-free contrib
deb-src http://mirrors.163.com/debian/ testing-updates main non-free contrib
deb http://mirrors.163.com/debian-security/ testing/updates main non-free contrib
deb-src http://mirrors.163.com/debian-security/ testing/updates main non-free contrib

#中国官方源镜像
deb http://mirrors.ustc.edu.cn/debian/ testing main contrib non-free
deb-src http://mirrors.ustc.edu.cn/debian/ testing main contrib non-free
deb http://mirrors.ustc.edu.cn/debian/ testing-updates main contrib non-free
deb-src http://mirrors.ustc.edu.cn/debian/ testing-updates main contrib non-free
deb http://mirrors.ustc.edu.cn/debian-security/ testing/updates main contrib non-free
deb-src http://mirrors.ustc.edu.cn/debian-security/ testing/updates main contrib non-free
```

保存源文件，终端下执行：

```
sudo apt-get update
sudo apt-get upgrade
sudo apt-get dist-upgrade
```

## 方法二：直接使用testing镜像安装

镜像下载地址：http://cdimage.debian.org/cdimage/weekly-builds/amd64/iso-dvd/

---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/debian-testing/  
> 转载 URL: https://www.yangshengliang.com/kaiyuan-shijie/linux-shijie/562.html
