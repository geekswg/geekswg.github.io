# ElasticSearch 定时批量删除N天前的数据


<h1>描述：</h1>
<p>之前我已经完成了使用ElasticSearch、kibana、filebeat、三个工具完成分布式集群收集 分布在各个ip地址上的微服务日志，这样就可以统一的在一个服务器上查看了所有的微服务产生的日志了，避免了一个个通过工具远程linux服务器去查看日志，极大提高了日志查看分析的效率了。当时目前我只是完成收集和查看所有日志，那么时间一长我们就会遇到问题，日志一直发到elastic服务器上，日志越来越多，我就需要一个定时删除过期的日志数据的办法。</p>
<p>功能需求：</p>
<p>需要定时删除elasticSearch指定过期数据，比如只保留N天数据，超过N天前的数据，直接删除。</p>
<h1>解决方案：</h1>
<p>通过万能的百度搜索，找到了解决方案，这里我们就比如，定时删除30天前收集的日志文件。</p>
<h2>步骤1、在kibana控制台完成删除N天数据的命令。</h2>
<p>学习kibana 命令 查增删该</p>
<p>官方学习地址：<a href="https://www.elastic.co/guide/cn/kibana/current/console-kibana.html">https://www.elastic.co/guide/cn/kibana/current/console-kibana.html</a></p>
<div class="imageblock">
<div class="title">igure 1. 控制台用户界面</div>
</div>
<p>控制台可以解析像 cURL 命令这样的语句。例如以下控制台命令</p>
<div class="pre_wrapper lang-js">
<pre class="programlisting prettyprint lang-js">GET /_search
{
  "query": {
    "match_all": {}
  }
}</pre>
</div>
<p>是 Elasticsearch&nbsp;<code class="literal">_search API</code>&nbsp;的简单 GET 请求。下面是同样效果的 cURL 命令。</p>
<div class="pre_wrapper lang-bash">
<pre class="programlisting prettyprint lang-bash">curl -XGET "http://localhost:9200/_search" -d'
{
  "query": {
    "match_all": {}
  }
}'</pre>
</div>
<p>实际上，您可以复制粘贴上面的命令到控制台，它会自动转换成控制台语句。</p>
<p>当敲入一行命令，控制台会给出上下文相关的<a class="xref" title="API 提示" href="https://www.elastic.co/guide/cn/kibana/current/console-kibana.html#suggestions">提示</a>。这些<a class="xref" title="API 提示" href="https://www.elastic.co/guide/cn/kibana/current/console-kibana.html#suggestions">提示</a>可以帮助您探索每条 API 参数，或者用于提高输入速度。控制台会提示 APIs 、索引和字段名。<img src="https://www.elastic.co/guide/cn/kibana/current/images/introduction_suggestion.png" alt="Suggestions" width="400" /></p>
<div id="suggestions" class="imageblock text-center">
<div class="title">Figure 2. API 提示</div>
</div>
<p>一旦您在左边的面板中敲入命令，您可以点击 URL 行边上的绿色小三角提交这条请求到 Elasticsearch。注意，当您移动光标的时候，会跟随着您。我们把这个叫做<a class="xref" title="动作菜单" href="https://www.elastic.co/guide/cn/kibana/current/console-kibana.html#action_menu">动作菜单</a>。您也可以选择写多条请求并一起提交它们。</p>
<div id="action_menu" class="imageblock text-center">
<div class="title">Figure 3. 动作菜单</div>
</div>
<p>当请求响应后，您可以在侧面的面板中看到它：</p>
<div class="imageblock">
<div class="title">Figure 4. 输出面板</div>
</div>
<h2>控制台用户界面</h2>
<p>在这个章节中会有更多关于控制台界面的详细描述。<a class="xref" title="控制台" href="https://www.elastic.co/guide/cn/kibana/current/console-kibana.html">控制台</a>章节只介绍了基础的用户界面部分<em id="__mceDel">。</em></p>
<p>我们当然主要学习删除命令&nbsp;</p>
<p>下面是demo代码</p>
<div class="cnblogs_code">
<pre>POST /filebeat-*/<span style="color: #000000;">_delete_by_query
{
  </span><span style="color: #800000;">"</span><span style="color: #800000;">query</span><span style="color: #800000;">"</span><span style="color: #000000;">: {
    </span><span style="color: #800000;">"</span><span style="color: #800000;">range</span><span style="color: #800000;">"</span><span style="color: #000000;">: {
      </span><span style="color: #800000;">"</span><span style="color: #800000;">@timestamp</span><span style="color: #800000;">"</span><span style="color: #000000;">: {
        </span><span style="color: #800000;">"</span><span style="color: #800000;">lt</span><span style="color: #800000;">"</span>: <span style="color: #800000;">"</span><span style="color: #800000;">now-300d</span><span style="color: #800000;">"</span><span style="color: #000000;">,
        </span><span style="color: #800000;">"</span><span style="color: #800000;">format</span><span style="color: #800000;">"</span>: <span style="color: #800000;">"</span><span style="color: #800000;">epoch_millis</span><span style="color: #800000;">"</span><span style="color: #000000;">
      }
    }
  }
}</span></pre>
</div>
<p>其中&nbsp;"lt": "now-300d", 参数表示 删除 300天前的数据，如需指定N天前，我们只要修改 指定天数即可</p>
<p>下面是执行结果</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200621144336981-688547918.png" alt="" width="529" height="273" loading="lazy" /></p>
<h2>步骤2、将改命令转换成脚本</h2>
<p>步骤如图：</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200621144454121-495950473.png" alt="" width="414" height="197" loading="lazy" /></p>
<p>&nbsp;</p>
<p>代码：</p>
<div class="cnblogs_Highlighter">
<pre class="brush:csharp;gutter:true;">curl -XPOST "http://127.0.0.1:9200/filebeat-*/_delete_by_query" -H 'Content-Type: application/json' -d'{<br />  "query": {    <br />    "range": {      <br />      "@timestamp": {        <br />        "lt": "now-300d",        <br />        "format": "epoch_millis"      <br />      }    <br />    }  <br />  }<br />}'</pre>
</div>
<p>将上面的代码复制后：</p>
<h3>windows下脚本</h3>
<p>windows下制作成 dos 批处理文件：新建txt，修改文件后缀名为.bat 后将上面代码拷入后保存</p>
<p>注意 windows 下执行 curl命令 需要安装 环境：<a href="https://curl.haxx.se/windows/">https://curl.haxx.se/windows/</a></p>
<h3>linux下 编写脚本</h3>
<p>linux下新建 .sh 脚本文件&nbsp;</p>
<div class="cnblogs_code">
<pre>#!/bin/bash</pre>
<pre class="brush:csharp;gutter:true;">curl -XPOST "http://127.0.0.1:9200/filebeat-*/_delete_by_query" -H 'Content-Type: application/json' -d'{<br />  "query": {    <br />    "range": {      <br />      "@timestamp": {        <br />        "lt": "now-300d",        <br />        "format": "epoch_millis"      <br />      }    <br />    }  <br />  }<br />}'</pre>
</div>
<p>&nbsp;</p>
<h2>步骤3、将脚本做成定时任务</h2>
<p>到此就完成了定时批量删除过期的 elastic 日志文件的功能。</p>
<p>总结 ： 其实 elasticserch 可以比如类似 mysql 数据库，kibana 类似 可视化 操作数据库的第三方软件 如 Navicat、PL/SQL工具。</p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2020/elasticsearch-%E5%AE%9A%E6%97%B6%E6%89%B9%E9%87%8F%E5%88%A0%E9%99%A4n%E5%A4%A9%E5%89%8D%E7%9A%84%E6%95%B0%E6%8D%AE/  

