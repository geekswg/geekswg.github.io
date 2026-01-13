# 

<h1>描述：</h1>
<p>我们在启动spring-boot,spring-cloud 项目时，是不是经常 遇到报错，但是在控制台 没有能找到 具体 报错信息，只是 提示，启动失败，缺乏具体的报错信息，这样就很不方便我们去找到 报错 原因！也就不能 方便解决问题。</p>
<h1>解决小 技巧</h1>
<p>我们在 springboot 应用的程序入口main 方法中 加入 try catch 代码，这样，在启动中如果报错了，就可以 直接捕获到异常，然后我们打印到控制台，这样就能很快定位并解决问题了！&nbsp;</p>
<h1>示例代码如下：</h1>
<div class="cnblogs_code">
<pre><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">static</span> <span style="color: #0000ff;">void</span><span style="color: #000000;"> main(String[] args) {
        </span><span style="color: #0000ff;">try</span>{<span style="color: #008000;">//</span><span style="color: #008000;">这里捕获异常 为了 方便查看 启动失败的原因</span>
<span style="color: #000000;">            IPUtils.getHostIp();
            SpringApplication.run(MonitorApplication.</span><span style="color: #0000ff;">class</span><span style="color: #000000;">, args);
        }</span><span style="color: #0000ff;">catch</span><span style="color: #000000;"> (Exception e){
            e.printStackTrace();
        }

}</span></pre>
</div>
<p>&nbsp;</p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/cnblog/spring-boot-%E5%90%AF%E5%8A%A8%E6%8A%A5%E9%94%99-%E8%B0%83%E8%AF%95%E5%B0%8F%E6%8A%80%E5%B7%A7/  

