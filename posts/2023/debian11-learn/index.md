# Debian11 Learn 相关命令

{{&lt; admonition quote &#34;quote&#34; false &gt;}}
note abstract info tip success question warning failure danger bug example quote
{{&lt; /admonition &gt;}}
刚刚入手debian11,记录使用中遇到的一些常用命令。
&lt;!--more--&gt;

## 配置中文环境

首先我们添加对中文的支持：
`sudo apt-get install locales`

然后然后配置 locales 软件包:
`sudo dpkg-reconfigure locales`

## 安装中文输入法

安装scim输入法

```bash
apt-get install scim   
apt-get install scim-chinese   
apt-get install scim-pinyin  
```

## 安装VScode
&gt;Visual Studio Code是由微软Microsoft开发，功能强大的开源代码编辑器。它具有内置的调试支持。
嵌入式Git控件，语法高亮显示，代码自动补全，集成终端，代码重构和代码片段。
本教程介绍如何在Debian 11安装vscode编辑器。在继续本教程之前，我们假设你当前登录系统的用户是具有sudo权限的用户。
要在Debian 11安装vscode，请完成这些步骤。首先apt命令更新软件包索引并安装导入微软GPG密钥的依赖软件。

安装脚本如下：
```bash
#!/bin/bash

# 在你的Debian linux操作系统上通过以下步骤来完成 VS Code 的安装。
# 01、首先输入以下内容来更新软件包索引并安装依赖项：
sudo apt update
sudo apt install software-properties-common apt-transport-https curl

# 02、使用以下curl命令导入Microsoft GPG密钥：
curl -sSL https://packages.microsoft.com/keys/microsoft.asc | sudo apt-key add -

# 将Visual Studio代码存储库添加到你的系统：
sudo add-apt-repository &#34;deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main&#34;

# 03、添加存储库后，安装最新版本的Visual Studio代码：
sudo apt update
sudo apt install code

echo &#34;instsall is finish&#34;

# 完
```

## 安装Hugo

```bash
# 通过运行以下命令确保您的系统是最新的 apt 终端中的命令：
sudo apt update
sudo apt upgrade

# 默认情况下，Hugo 在 Debian 11 基础存储库中可用。 现在我们使用以下命令安装`Hugo`
sudo apt install hugo

# 查看hugo 版本号以验证是否安装成功：
hugo version
```

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.github.io/posts/2023/debian11-learn/  

