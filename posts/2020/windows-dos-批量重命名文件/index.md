# Win10 批量重命名文件


<h1>描述</h1>
<p>在工作中经常出现 在同一目录下有一些 很多相同扩展名的文件但是名字看起来很乱各不同，我们想将它们统一重命名一下统一的格式，如果一个个去改名字太麻烦了。</p>
<p>这里我门就可以使用windows下 dos 命令来写一个 批量重命名操作.bat 批处理来完成。</p>
<p>这些 重复 且枯燥的操作了。</p>
<p>下面直接上</p>
<h1>dos 批处理 命令</h1>
<div class="cnblogs_code">
<pre><span style="color: #000000;">@echo off
chcp </span><span style="color: #800080;">65001</span><span style="color: #000000;">
@echo 预处理 带空格的文件名
@echo off</span>&amp;<span style="color: #000000;">setlocal enabledelayedexpansion
</span><span style="color: #0000ff;">for</span> /f <span style="color: #800000;">"</span><span style="color: #800000;">delims=</span><span style="color: #800000;">"</span> %%i <span style="color: #0000ff;">in</span> (<span style="color: #800000;">'</span><span style="color: #800000;">dir /s/b *.*</span><span style="color: #800000;">'</span>) <span style="color: #0000ff;">do</span><span style="color: #000000;"> (
</span><span style="color: #0000ff;">set</span> <span style="color: #800000;">"</span><span style="color: #800000;">foo=%%~nxi</span><span style="color: #800000;">"</span>    
<span style="color: #0000ff;">set</span> foo=!foo: =!    
<span style="color: #0000ff;">set</span> foo=!foo: =!<span style="color: #000000;">    
ren </span><span style="color: #800000;">"</span><span style="color: #800000;">%%~fi</span><span style="color: #800000;">"</span> <span style="color: #800000;">"</span><span style="color: #800000;">!foo!</span><span style="color: #800000;">"</span><span style="color: #000000;">
)
@echo 预处理完成，按任意键开始准备批量重命名信息！
pause
</span><span style="color: #0000ff;">set</span> prefixName=
<span style="color: #0000ff;">set</span> /p prefixName=<span style="color: #000000;">请输入前缀名：
</span><span style="color: #0000ff;">set</span> suffixName=
<span style="color: #0000ff;">set</span> /p suffixName=<span style="color: #000000;">请输后缀缀名：
@echo 请注意按任意键继续 开始重命名！
pause 
@echo off
setlocal enabledelayedexpansion
</span><span style="color: #0000ff;">set</span> n=<span style="color: #800080;">1</span>
<span style="color: #0000ff;">for</span> /f %%i <span style="color: #0000ff;">in</span> (<span style="color: #800000;">'</span><span style="color: #800000;">dir /b *</span><span style="color: #800000;">'</span>) <span style="color: #0000ff;">do</span><span style="color: #000000;"> (
ren </span><span style="color: #800000;">"</span><span style="color: #800000;">%%i</span><span style="color: #800000;">"</span> %prefixName%!n!.%suffixName%
<span style="color: #0000ff;">set</span> /a n+=<span style="color: #800080;">1</span><span style="color: #000000;">)
@echo 批量重命名完成！ 
pause</span></pre>
</div>
<h1>运行</h1>
<p>直接将上面的dos命令拷贝了一个 新建的txt文件中，然后将该文件 重命名为 renameAll.bat 文件，复制到需要重命名文件的同级目录后，双击运行</p>
<p>该批处理文件，后输入 前缀名 和 文件后缀名后 就会 完成批量自动命名操作了。</p>
<p>重命名后文件格式为：</p>
<p>前缀名1.后缀名&nbsp;前缀名2.后缀名&nbsp;前缀名3.后缀名&nbsp;前缀名4.后缀名 ~~~~~ 等等了。</p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2020/windows-dos-%E6%89%B9%E9%87%8F%E9%87%8D%E5%91%BD%E5%90%8D%E6%96%87%E4%BB%B6/  

