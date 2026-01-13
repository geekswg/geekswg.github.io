# Js 调用 本地 Exe 通用解决方法


# js 调用 本地 exe 通用解决方法
## 前言
在web项目中，经常遇到需要在某个页面上需要调用本地的程序exe，网上有很多方法，大部分只能在ie上用 。
```
var path = '程序地址.exe 参数';//程序地址 +' '+ 参数;
//exe程序所在位置以及要传的参数
     try {
         var Shell = new ActiveXObject("WScript.Shell");
         Shell.Run(path,0,true);
     }
     catch (e) {
        console.log(e)
        alert("该可执行文件不存在");
     }
```
ActiveXObject插件是IE所特有的，在不同浏览器内核下是无法通用的。只有用ie浏览器才可以使用ActiveXObject。
在浏览网页中发现 有个 a标签中 mailto: 用法，直接可以调用发送邮件方法，腾讯在很多地方可以调用起qq进行聊天，这个功能就非常好，体验也不错，研究了一下他们的实现，发现是通过自定义windows URL协议 来实现的。

## 解决方案
思路 通过自定义URL协议来实现在网页中调用 指定exe 程序，并且传递参数。

## 文件示例
openExe.bat (具体调用exe的文件)
```bat
@echo off 
rem openExe 是url协议名 使用<a href="openExe:参数" >打开exe</a>
set m=%m:openExe:=%
set m="%m:separator=&%"
rem 实际运行程序的地址在这里配置 %m% 是参数
start "" "C:\\Users\\Administrator\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe" %m%
exit
```
注册表添加 openExe URL协议
```reg
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\openExe]
@="URL:openExe Protocol"
"URL Protocol"=""

[HKEY_CLASSES_ROOT\openExe\DefaultIcon]
@="openExe.exe,1"

[HKEY_CLASSES_ROOT\openExe\shell]

[HKEY_CLASSES_ROOT\openExe\shell\open]

[HKEY_CLASSES_ROOT\openExe\shell\open\command]
@="cmd /c set m=%1 & \"C:\\Program Files\\openExe\\openExe.bat\" %%m%% & exit"

```
dos 命令注册注册表
```bat
REGEDIT /S openExe.reg
```

## 使用html实列
```html
<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
</head>
<body>
<div>
	<a href="openExe:www.baidu.com">执行可执行文件（协议名:参数）</a>
</div>
</body>
</html>
```

## 打包文件 到exe实现自动安装
使用winrar 添加压缩文件 ， 创建自解压文件 高级 设置 安装程序

![](https://img2020.cnblogs.com/blog/2055231/202110/2055231-20211026115219893-352623521.png)
一般 设置解压路径 与上面 bat 文件地址一致 
![](https://img2020.cnblogs.com/blog/2055231/202110/2055231-20211026115456359-780913678.png)

确定后，打包完成。
双击后就能制动 安装完成注册，既可以在页面中随意使用openExe 协议了。


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2021/js-%E8%B0%83%E7%94%A8%E6%9C%AC%E5%9C%B0-exe-%E6%96%B9%E6%B3%95%E9%80%9A%E7%94%A8%E6%94%AF%E6%8C%81%E7%9B%AE%E5%89%8D-%E5%A4%A7%E9%83%A8%E5%88%86%E4%B8%BB%E6%B5%81%E6%B5%8F%E8%A7%88%E5%99%A8chrome%E7%81%AB%E7%8B%90ie/  

