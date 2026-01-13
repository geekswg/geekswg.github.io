# 

## 转载
部分内容转载自： http://blog.sina.com.cn/s/blog_e2b8213a0102wqby.html

## 注册表 定义协议
> 项目中遇到某需求：chorme要运行IE并打开网页。解决方案之一就是通过自定义协议来实现该需求。
    在注册表中写入如下内容来进行自定义协议：
复制代码
```bat
[HKEY_CLASSES_ROOT\openIE]  
@="URL:OpenIE Protocol"  
"URL Protocol"=""  

[HKEY_CLASSES_ROOT\openIE\DefaultIcon]  
@="iexplore.exe,1"  

[HKEY_CLASSES_ROOT\openIE\shell]  
  
[HKEY_CLASSES_ROOT\openIE\shell\open]  
  
[HKEY_CLASSES_ROOT\openIE\shell\open\command]  
@="cmd /c set m=%1 & call set m=%%m:openIE:=%% & call \"C:\\Program Files\\Internet Explorer\\iexplore.exe\" %%m%% & exit" 
```
复制代码
## 使用示例

>然后使用openIE协议，如<a href = “openIE:http://www.baidu.com”>点我使用外部协议运行IE打开百度</a>进行访问百度。
  但是这样会弹出cmd的命令框，给用户带来不好的体验。解决方法如下：

>    链接：http://pan.baidu.com/s/1sllgzxV 密码：ugpk

内容是一个可以解压的exe，解压后有三个文件：alert.reg 与上边的openie协议大同小异，将协议名称换成了alert。
复制代码
```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\alert]
@="URL:Alert Protocol"
"URL Protocol"=""

[HKEY_CLASSES_ROOT\alert\DefaultIcon]
@="iexplore.exe,1"

[HKEY_CLASSES_ROOT\alert\shell]

[HKEY_CLASSES_ROOT\alert\shell\open]

[HKEY_CLASSES_ROOT\alert\shell\open\command]
@="cmd /c set m=%1 & \"C:\\Program Files\\alert\\openIE.bat\" %%m%% & exit"
````

>   并且将command换成了bat文件，不再是直接打开ie。bat文件内容入下：

```bat
@echo off
set m=%m:alert:=%
set m="%m:separator=&%"
start "" "C:\\Program Files\\Internet Explorer\\iexplore.exe" %m%
exit
```
这些命令虽然写不出来，但是不妨碍我们读懂，将使用alert协议访问的地址作为参数进行处理，然后通过ie打开。

最后一个文件是runreg.bat，内容如下：

> REGEDIT /S alert.reg
<p style="text-indent:2em">
很显然作为exe，双击执行的就是这个regedit，将注册表写好的同时，也将openie.bat复制到了C:\Program Files\alert\路径下，虽然不知道它是如何实现的，但是不妨碍我进行改造处理。比如给换个路径，比如换一个执行程序（当然执行程序支持命令行参数启动）。
</p>  

>  自定义协议可以帮助我们通过浏览器打开本地程序，当然不仅限于此。


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/cnblog/%E9%9D%9Eie%E6%B5%8F%E8%A7%88%E5%99%A8%E6%89%93%E5%BC%80ie%E5%B9%B6%E8%AE%BF%E9%97%AE%E6%8C%87%E5%AE%9A%E9%93%BE%E6%8E%A5/  

