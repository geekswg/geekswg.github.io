# Windows下使用DOS命令关闭指定端口


# 程序启动提示XXXX端口已经在使用
> 在启动tomcat或者使用idea 中启动项目时会经常遇到 报错 XXXX 端口已经在使用 ，或者端口已被占用导致，导致无法正确启动

# 解决办法
> windows下 可以使用 dos命令查看该端口号被哪个进程使用，然后再使用taskkill 命令结束程序进程。
## 查看端口进程
```bat
netstat -aon|findstr 1099
```
## 强制关闭进程

```bat
taskkill /f /pid 246532
```

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2021/windows%E4%B8%8B%E4%BD%BF%E7%94%A8dos%E5%91%BD%E4%BB%A4%E5%85%B3%E9%97%AD%E6%8C%87%E5%AE%9A%E7%AB%AF%E5%8F%A3/  

