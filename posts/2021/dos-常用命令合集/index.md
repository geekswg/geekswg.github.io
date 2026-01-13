# DOS 常用命令合集


# 设置系统时间
> 新建bat文件 输入以下内容 
**注意win10及以上的系统要求【以管理员身份运行】**
```bat
date 2021-08-01
time 17:20
```
> 自动同步网络时间

```bat
w32tm /resync
```
# 打开系统环境变量设置
```bat
@echo off
start rundll32 sysdm.cpl,EditEnvironmentVariables
exit
```
>方法二 新建bat文件后输入以下dos命令
```bat
rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,3
```

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2021/dos-%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4%E5%90%88%E9%9B%86/  

