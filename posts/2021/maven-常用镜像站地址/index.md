# Maven 常用镜像站地址


<h1 data-spm-anchor-id="a2c6h.13651104.0.i5.261c36a4l4osby">Maven 配置</h1>
<p data-spm-anchor-id="a2c6h.13651104.0.i6.261c36a4l4osby">打开 Maven 的配置文件(windows机器一般在maven安装目录的conf/settings.xml)，在<code>&lt;mirrors&gt;&lt;/mirrors&gt;</code>标签中添加 mirror 子节点:</p>
<h1 data-spm-anchor-id="a2c6h.13651104.0.i6.261c36a4l4osby">常用的镜像地址</h1>
<h2><a href="https://developer.aliyun.com/mvn/guide" target="_blank">阿里云仓库</a></h2>
<p>(推荐使用，速度快)</p>
<p><a href="https://maven.aliyun.com/">阿里云Maven中央仓库</a>&nbsp;为&nbsp;<a href="https://devops.aliyun.com/">阿里云云效</a>&nbsp;提供的公共代理仓库，帮助研发人员提高研发生产效率，使用阿里云Maven中央仓库作为下载源，速度更快更稳定。</p>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">mirror</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">id</span><span style="color: #0000ff;">&gt;</span>aliyunmaven<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">id</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">mirrorOf</span><span style="color: #0000ff;">&gt;</span>*<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">mirrorOf</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">name</span><span style="color: #0000ff;">&gt;</span>阿里云公共仓库<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">name</span><span style="color: #0000ff;">&gt;</span>
    <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">url</span><span style="color: #0000ff;">&gt;</span>https://maven.aliyun.com/repository/public<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">url</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">mirror</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<h2>华为云</h2>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">mirror</span><span style="color: #0000ff;">&gt;</span>
　　<span style="color: #0000ff;">&lt;</span><span style="color: #800000;">id</span><span style="color: #0000ff;">&gt;</span>huaweicloud<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">id</span><span style="color: #0000ff;">&gt;</span>
   <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">name</span><span style="color: #0000ff;">&gt;</span>华为云 maven<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">name</span><span style="color: #0000ff;">&gt;</span>
   <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">mirrorOf</span><span style="color: #0000ff;">&gt;</span>*<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">mirrorOf</span><span style="color: #0000ff;">&gt;</span>
   <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">url</span><span style="color: #0000ff;">&gt;</span>https://mirrors.huaweicloud.com/repository/maven/<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">url</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">mirror</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<h2>腾讯云</h2>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">mirror</span><span style="color: #0000ff;">&gt;</span>
　　<span style="color: #0000ff;">&lt;</span><span style="color: #800000;">id</span><span style="color: #0000ff;">&gt;</span>nexus-tencentyun<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">id</span><span style="color: #0000ff;">&gt;</span>
　　<span style="color: #0000ff;">&lt;</span><span style="color: #800000;">mirrorOf</span><span style="color: #0000ff;">&gt;</span>*<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">mirrorOf</span><span style="color: #0000ff;">&gt;</span>
　　<span style="color: #0000ff;">&lt;</span><span style="color: #800000;">name</span><span style="color: #0000ff;">&gt;</span>Nexus tencentyun<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">name</span><span style="color: #0000ff;">&gt;</span>
　　<span style="color: #0000ff;">&lt;</span><span style="color: #800000;">url</span><span style="color: #0000ff;">&gt;</span>http://mirrors.cloud.tencent.com/nexus/repository/maven-public/<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">url</span><span style="color: #0000ff;">&gt;</span>
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">mirror</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<h2><a href="https://tuna.moe/" target="_blank">清华大学</a></h2>
<p>&nbsp;</p>
<h1>Maven 仓库搜索</h1>
<p>&nbsp;推荐使用&nbsp;&nbsp;<a href="https://mvnrepository.com/">Maven Repository: Search/Browse/Explore (mvnrepository.com)</a></p>
<p>&nbsp;</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202108/2055231-20210828114143012-2049488446.png" alt="" loading="lazy" /></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h1>直接在pom.xml中指定Maven远程仓库地址</h1>
<h1>&nbsp;</h1>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">&lt;</span><span style="color: #800000;">repositories</span><span style="color: #0000ff;">&gt;</span>  
        <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">repository</span><span style="color: #0000ff;">&gt;</span>  
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">id</span><span style="color: #0000ff;">&gt;</span>alimaven<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">id</span><span style="color: #0000ff;">&gt;</span>  
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">name</span><span style="color: #0000ff;">&gt;</span>aliyun maven<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">name</span><span style="color: #0000ff;">&gt;</span>  
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">url</span><span style="color: #0000ff;">&gt;</span>http://maven.aliyun.com/nexus/content/groups/public/<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">url</span><span style="color: #0000ff;">&gt;</span>  
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">releases</span><span style="color: #0000ff;">&gt;</span>  
                <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">enabled</span><span style="color: #0000ff;">&gt;</span>true<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">enabled</span><span style="color: #0000ff;">&gt;</span>  
            <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">releases</span><span style="color: #0000ff;">&gt;</span>  
            <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">snapshots</span><span style="color: #0000ff;">&gt;</span>  
                <span style="color: #0000ff;">&lt;</span><span style="color: #800000;">enabled</span><span style="color: #0000ff;">&gt;</span>false<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">enabled</span><span style="color: #0000ff;">&gt;</span>  
            <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">snapshots</span><span style="color: #0000ff;">&gt;</span>  
        <span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">repository</span><span style="color: #0000ff;">&gt;</span>  
<span style="color: #0000ff;">&lt;/</span><span style="color: #800000;">repositories</span><span style="color: #0000ff;">&gt;</span></pre>
</div>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><code class="language-js hljs javascript"><span class="xml"><span class="hljs-tag">&nbsp;</span></span></code></p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2021/maven-%E5%B8%B8%E7%94%A8%E9%95%9C%E5%83%8F%E7%AB%99%E5%9C%B0%E5%9D%80/  

