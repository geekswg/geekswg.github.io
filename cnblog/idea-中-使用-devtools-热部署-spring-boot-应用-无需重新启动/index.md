# 

<h1>描述：</h1>
<p>在我们使用spring-boot开发时，如果在开发者调试项目，边修改边调试运行，如果每次修改 java文件或者配置文件后都需要重新启动程序，如果程序启动比较慢的化，每次修改一点东西都要重新启动，这就太浪费时间了，不方便测试和修改，热部署技术就应用而生。</p>
<h1>解决方案：</h1>
<p>本人使用的时Idea 的开发工具，使用 spring-boot的 devtools 工具就能很方便的完成 热部署功能。</p>
<h1>spring-boot-devtools的使用</h1>
<h2>1、项目引入依赖</h2>
<p>在maven中添加依赖</p>
<pre>&lt;springboot-devtools.version&gt;2.3.0.RELEASE&lt;/springboot-devtools.version&gt;</pre>
<div class="cnblogs_code">
<pre><span style="color: #008000;">&lt;!--</span><span style="color: #008000;"> https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-devtools </span><span style="color: #008000;">--&gt;</span>
        <span style="color: #008000;">&lt;!--</span><span style="color: #008000;"> spring-boot-devtools 热部署 spring-boot 依赖包 optional true 可选依赖，子项目不会依赖 </span><span style="color: #008000;">--&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">dependency</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">groupId</span><span style="color: #0000ff;">&gt;</span>org.springframework.boot<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">groupId</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">artifactId</span><span style="color: #0000ff;">&gt;</span>spring-boot-devtools<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">artifactId</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">version</span><span style="color: #0000ff;">&gt;</span>${springboot-devtools.version}<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">version</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">optional</span><span style="color: #0000ff;">&gt;</span>true<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">optional</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">dependency</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>maven build plugins plugin configuration fork添加<strong> &lt;fork&gt;true&lt;/fork&gt;&nbsp;<strong>这步不能少否则不能自动加载</strong></strong></p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">build</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">plugins</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">plugin</span><span style="color: #0000ff;">&gt;</span>
                <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">groupId</span><span style="color: #0000ff;">&gt;</span>org.springframework.boot<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">groupId</span><span style="color: #0000ff;">&gt;</span>
                <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">artifactId</span><span style="color: #0000ff;">&gt;</span>spring-boot-maven-plugin<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">artifactId</span><span style="color: #0000ff;">&gt;</span>
                <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">configuration</span><span style="color: #0000ff;">&gt;</span>
                    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">fork</span><span style="color: #0000ff;">&gt;</span>true<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">fork</span><span style="color: #0000ff;">&gt;</span>
                <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">configuration</span><span style="color: #0000ff;">&gt;</span>
            <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">plugin</span><span style="color: #0000ff;">&gt;</span>
        <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">plugins</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">build</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>&nbsp;</p>
<h2>2、设置Idea 自动编译、自动加载</h2>
<p>快捷键 Ctrl+Alt+s 打开设置 、build、compiler、build proje auto ~~~ 选择</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200610213837369-1249856604.png" alt="" width="589" height="327" loading="lazy" /></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;快捷键Ctrl+Alt+Shift+/ 选择 registry、</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200610214121019-174588388.png" alt="" width="591" height="300" loading="lazy" /></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>设置 运行 configuration、spring-boot、</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200610214230070-445132188.png" alt="" width="591" height="484" loading="lazy" /></p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200610214409445-1424811450.png" alt="" width="592" height="259" loading="lazy" /></p>
<h2>3、运行项目测试热部署</h2>
<p>运行项目后，修改java代码 ，然后查看 event log窗口 出现</p>
<p>class reloaded Stop debug session ，这样的日志，就说明 成功热部署了&nbsp;</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200610214712424-686568376.png" alt="" width="588" height="438" loading="lazy" /></p>
<p>&nbsp;</p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/cnblog/idea-%E4%B8%AD-%E4%BD%BF%E7%94%A8-devtools-%E7%83%AD%E9%83%A8%E7%BD%B2-spring-boot-%E5%BA%94%E7%94%A8-%E6%97%A0%E9%9C%80%E9%87%8D%E6%96%B0%E5%90%AF%E5%8A%A8/  

