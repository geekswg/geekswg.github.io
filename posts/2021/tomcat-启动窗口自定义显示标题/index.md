# Tomcat 启动窗口自定义显示标题


# 描述
有时候我们在服务器会启动多个tomcat，启动后显示的 窗口标题都是Tomcat 我们无法区分哪个tomcat服务对应什么服务。
我们自定义每个tomcat显示不同的名字端口号等关键信息就一目了然了。
# 解决办法
在tomcat\bin 目录下新建一个 setenv.bat文件，然后在文件里输入以下内容
```bat
set TITLE=tomcat7-8081 [%DATE% %TIME% (%CATALINA_HOME%)]
```
# 启动 tomcat
> 双击运行 startup.bat 查看运行效果
![](https://img2020.cnblogs.com/blog/2055231/202109/2055231-20210921194212814-664317789.png)


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2021/tomcat-%E5%90%AF%E5%8A%A8%E7%AA%97%E5%8F%A3%E8%87%AA%E5%AE%9A%E4%B9%89%E6%98%BE%E7%A4%BA%E6%A0%87%E9%A2%98/  

