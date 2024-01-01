# DOS命令总结

总结一些用到dos命令，方便查用
&lt;!--more--&gt;
## 快捷打开控制面板

{{&lt; admonition &gt;}}
我们在安装开发工具，和一些SDK，经常要 **配置环境变量** ，新建一个bat文件，使用DOS命令快速打开，windows环境变量配置页面.
{{&lt; /admonition &gt;}}

```bat
@echo off
start rundll32 sysdm.cpl,EditEnvironmentVariables
exit
```

### 下载

{{&lt; link href=&#34;openENV.bat&#34; content=&#34;下载批处理文件-快速打开环境变量&#34; download=&#34;打开环境变量.bat&#34; card=true &gt;}}

## DOS命令Demo

```bat
@echo off
set exitStr=q
set excuteStr=dydl.exe -up 
set paramStr=?relation^=1

:loop
set excuteStr=dydl.exe -up 
echo 输入q回车退出程序
rem set 用来设置变量，/p 表示暂停，等待用户输入，  var= 就是用户的输入.
set /p inputStr=请输入需要下载的抖音主页的网址（q）:
set excuteStr=%excuteStr%%inputStr%%paramStr%
echo 正在执行 %excuteStr%
rem 将echo内容保存到文件
@echo %excuteStr% &gt;&gt; executeLog.txt
rem start cmd 新开一个窗口执行命令异步操作
rem cmd 当前窗口执行命令 同步阻塞操作
if &#34;%inputStr%&#34; == &#34;%exitStr%&#34; goto end_loop
pause
%excuteStr%
goto loop

:end_loop
echo 正在退出程序，按任意建退出！
pause
```

### 批处理文件下载Demo

{{&lt; link href=&#34;dydownload.zip&#34; content=&#34;下载抖音无水印视频&#34; download=&#34;下载抖音无水印视频.zip&#34; card=true &gt;}}

&lt;!--more--&gt;


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.github.io/posts/2023/dos/  

