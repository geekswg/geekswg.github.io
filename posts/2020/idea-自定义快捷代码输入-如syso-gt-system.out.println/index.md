# Idea 自定义快捷代码输入 如syso => System.out.println()


<h1>前言</h1>
<p>之前一直用的Eclipse System.out.println()的快捷代码输入 是 syso，但是在Idea 不好使用了，后来搜索了一番才知道，在Idea中的快捷输入是 sout,这里我就想了能不能在Idea中也使用syso快捷打出 System.out.println();尼？答案当然可以了！</p>
<h1>自定义快捷代码步骤</h1>
<h2>Ctrl + Alt + S 打开 Idea 设置</h2>
<h2>搜索 live ，出现 live Templates 设置页面</h2>
<h2>开始设置</h2>
<p>选择需要添加的模块，在点击右边菜单上 + 加号 添加自定义快捷 代码 参数信息 和 具体操作，编辑完成后点击 apply保存信息。</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202007/2055231-20200713203115459-1660735411.png" alt="" width="567" height="393" loading="lazy" /></p>
<p>学会了自定义快捷代码，一些比较通用和常用格式的代码就可以自己定义一些快捷代码迅速的打出模板代码是不是极大提高的敲代码的效率呀。</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h1>&nbsp;Idea 比较常用快捷代码</h1>
<h2>psvm 、main</h2>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">static</span> <span style="color: #0000ff;">void</span><span style="color: #000000;"> main(String[] args){
  $END$
}</span></pre>
</div>
<h2>prsf</h2>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">private</span> <span style="color: #0000ff;">static</span> <span style="color: #0000ff;">final</span> </pre>
</div>
<h2>psfs</h2>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">static</span> <span style="color: #0000ff;">final</span> String </pre>
</div>
<h2>geti</h2>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">static</span><span style="color: #000000;"> $CLASS_NAME$ getInstance() {
  </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> $VALUE$;
}</span></pre>
</div>
<p>&nbsp;</p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2020/idea-%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BF%AB%E6%8D%B7%E4%BB%A3%E7%A0%81%E8%BE%93%E5%85%A5-%E5%A6%82syso-gt-system.out.println/  

