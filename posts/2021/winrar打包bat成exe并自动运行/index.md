# WinRAR打包bat成exe并自动运行


# 准备好bat文件
> 打开环境变量设置
```bat
rundll32.exe shell32.dll,Control_RunDLL sysdm.cpl,,3
```

# 利用winrar打包可执行exe

> 选择需要打包的文件右键【添加到压缩文件】

 ![](https://img2020.cnblogs.com/blog/2055231/202110/2055231-20211003104001081-1584358152.png)

>  一般 => 压缩选项 选择 创建自解压文件

![](https://img2020.cnblogs.com/blog/2055231/202110/2055231-20211003104205208-1526128603.png)

> 高级 选项卡 选择 自解压选项 

![](https://img2020.cnblogs.com/blog/2055231/202110/2055231-20211003104355950-2025238503.png)

> 高级自解压选项 设置 模式=>解压到临时文件夹 安装 安装程序 设置解压后运行

![](https://img2020.cnblogs.com/blog/2055231/202110/2055231-20211003104635123-318150741.png)![](https://img2020.cnblogs.com/blog/2055231/202110/2055231-20211003104729381-1383682867.png)

> 完成后运行

![](https://img2020.cnblogs.com/blog/2055231/202110/2055231-20211003104838512-2040797651.png)


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2021/winrar%E6%89%93%E5%8C%85bat%E6%88%90exe%E5%B9%B6%E8%87%AA%E5%8A%A8%E8%BF%90%E8%A1%8C/  

