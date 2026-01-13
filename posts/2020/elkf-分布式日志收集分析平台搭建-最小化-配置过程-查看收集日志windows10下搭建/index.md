# ELKF-分布式日志收集分析平台搭建 最小化 配置过程 - 查看收集日志（windows10下搭建）


<h1>前言</h1>
<p>Elasticsearch是与名为Logstash的数据收集和日志解析引擎以及名为Kibana的分析和可视化平台一起开发的。这三个产品被设计成一个集成解决方案，称为&ldquo;Elastic Stack&rdquo;（以前称为&ldquo;ELK stack&rdquo;）</p>
<div class="jsx-1479139469">
<p class="jsx-1479139469 page-title">轻量型日志采集器Filebeat (<a href="https://www.elastic.co/cn/beats/filebeat">https://www.elastic.co/cn/beats/filebeat</a>)</p>
</div>
<div class="jsx-860376702 description">
<p>当您要面对成百上千、甚至成千上万的服务器、虚拟机和容器生成的日志时，请告别 SSH 吧。Filebeat 将为您提供一种轻量型方法，用于转发和汇总日志与文件，让简单的事情不再繁杂。</p>
<div class="jsx-1479139469">
<p class="jsx-1479139469 ">Filebeat 让简单的事情简单化</p>
</div>
<div class="jsx-2737622821">
<p>Filebeat 内置有多种模块（Apache、Cisco ASA、Microsoft Azure、NGINX、MySQL&nbsp;<a href="https://www.elastic.co/guide/en/beats/filebeat/current/filebeat-modules.html">等等</a>），可针对常见格式的日志大大简化收集、解析和可视化过程，只需一条命令即可。之所以能实现这一点，是因为它将自动默认路径（因操作系统而异）与 Elasticsearch 采集节点管道的定义和 Kibana 仪表板组合在一起。不仅如此，数个 Filebeat 模块还包括预配置的 Machine Learning 任务。</p>
</div>
</div>
<h1>ELKF 版本号 及 下载 地址</h1>
<p>&nbsp; &nbsp; ElasticSearch 、Kibana、Filebeat、版本号 均为&nbsp;7.7.0</p>
<p>&nbsp; &nbsp; 官方下地址&nbsp;<a href="https://www.elastic.co/cn/">https://www.elastic.co/cn/</a>&nbsp; 不推荐 在官网下载 速度太慢了，<br />&nbsp; &nbsp; 建议使用国内 开源镜像地址下 如 华为开源镜像、阿里 等 ，本人在 华为开源镜像下载&nbsp;<a href="https://mirrors.huaweicloud.com/">https://mirrors.huaweicloud.com/</a>。速度很给力，建议收藏该网址</p>
<h1>搭建环境</h1>
<ul>
<li>windows 10 专业版 2004 </li>
<li>jdk 1.8 建议配置 JAVA_HOME 环境变量</li>
<li>下载 完成&nbsp;elasticsearch-7.7.0-windows-x86_64.zip ，kibana-7.7.0-windows-x86_64.zip，filebeat-7.7.0-windows-x86_64.zip</li>




</ul>
<h1>开始安装配置</h1>
<h2>安装elasticsearch-7.7.0&nbsp;</h2>
<p>基于Lucene的搜索服务器。它提供了一个分布式多用户能力的全文搜索引擎，基于RESTful web接口</p>
<ul>
<li>修改配置文件</li>




</ul>
<p>解压zip包后 修改 config/elasticsearch.yml 文件</p>
<div class="cnblogs_code">
<pre>network.host: 127.0.0.1<span style="color: #000000;">
http.port: </span>9200</pre>
</div>
<ul>
<li>启动elasticsearch</li>
</ul>
<p>在 cmd 中运行 bin/elasticsearch.bat</p>
<p>验证是否启动成功，</p>
<p>打开浏览器 访问&nbsp;<a href="http://127.0.0.1:9200/">http://127.0.0.1:9200/</a>&nbsp;如果 返回 json 字符，说明运行成功</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200606175644651-1990331905.png" alt="" width="474" height="305" loading="lazy" /></p>
<p>&nbsp;</p>
<h2>安装kibana-7.7.0</h2>
<ul>
<li>修改参数</li>
</ul>
<p>解压zip包，修改 config/kibana.yml配置文件</p>
<div class="cnblogs_Highlighter">
<pre class="brush:csharp;gutter:true;"># 配置IP 和端口号
server:
  port: 5601
  host: 127.0.0.1
# 配置 elasticsearch 地址
elasticsearch.hosts: ["http://127.0.0.1:9200"]
i18n.locale: "zh-CN"</pre>
</div>
<ul>
<li>启动kibana</li>
</ul>
<p>在cmd中 运行 bin/kibana.bat</p>
<p>&nbsp;验证是否成功启动</p>
<p>打开浏览器 访问&nbsp;<a href="http://127.0.0.1:5601/">http://127.0.0.1:5601/</a>&nbsp;如果出现 kibana 可视化管理页面 ，说明成功启动</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200606180230606-1216276036.png" alt="" width="489" height="284" loading="lazy" /></p>
<p>&nbsp;</p>
<h2>安装filebeat-7.7.0</h2>
<ul>
<li>修改参数</li>
</ul>
<p>解压zip包，修改&nbsp;filebeat.yml 配置文件</p>
<div class="cnblogs_Highlighter">
<pre class="brush:csharp;gutter:true;"># 输入
filebeat.inputs:
# Each - is an input. Most options can be set at the input level, so
# you can use different inputs for various configurations.
# Below are the input specific configurations.
# 需要采集日志的地方
- type: log
  # Change to true to enable this input configuration.
  enabled: true
  #发送文件 编码  utf-8 解决中文日志乱码问题
  encoding: utf-8
  # Paths that should be crawled and fetched. Glob based paths.
  #需要收集的日志地址
  paths:
    - D:/log/*.log
    - D:/log2/*.log

name: myFileBeatTest

setup.kibana:
  host: "127.0.0.1:5601"

output.elasticsearch:
  hosts: ["127.0.0.1:9200"]
monitoring.enabled: true</pre>
</div>
<p>修改&nbsp; modules.d/elasticsearch.yml.enable ,&nbsp;modules.d/logstash.yml.enable</p>
<ul>
<li>运行filebeat</li>
</ul>
<p>在cmd 中</p>
<p>输入 filebeat modules <span class="hljs-built_in">enable elasticsearch （启动elasticsearcch 模块）</span></p>
<p>输入 filebeat.exe setup -e ,回车启动 filebeat&nbsp;</p>
<h1>搭建完成使用kibana可视化工具查看日志</h1>
<ul>
<li>访问kibana 可视化 管理页面&nbsp;</li>
</ul>
<p><a href="http://127.0.0.1:5601/app/kibana#/home">http://127.0.0.1:5601/app/kibana#/home</a></p>
<ul>
<li>添加日志数据</li>
</ul>
<p>建立kibana索引、elasticseart索引</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200606181930060-818529805.png" alt="" width="476" height="309" loading="lazy" /></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200606182044822-97025499.png" alt="" width="495" height="311" loading="lazy" /></p>
<p>&nbsp;</p>
<ul>
<li>&nbsp;查看收集到elastics文件数据库中的日志</li>
</ul>
<p>添加筛选字段、通过仪表盘查看收集到的日志数据</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200606182326852-2141252176.png" alt="" width="554" height="269" loading="lazy" /></p>
<h1>总结：</h1>
<p>本人在搭建过程遇到最大问题其实是不知道如何使用&nbsp; kibana， 添加日志文件 建立索引和查看数据（如果有能力的情况下看官网文档）</p>
<p>到此你已经完成 了 日志收集 和 日志数据查看 查看 的简单 dmeo了</p>
<p>在linux 部署其实步骤 一样，只不过启动 linux 启动命令 不太一样，请自行学习 ，主要的是 配置文件的参数 修改 ，和 kibana 可视化工具的使用，建立索引，查看日志。</p>
<p>如需高级 文件 日志 过滤，指定 数据收集，请参考 filebeat 配置文件 参数详解，或 使用 logstash 工具 来实现。</p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2020/elkf-%E5%88%86%E5%B8%83%E5%BC%8F%E6%97%A5%E5%BF%97%E6%94%B6%E9%9B%86%E5%88%86%E6%9E%90%E5%B9%B3%E5%8F%B0%E6%90%AD%E5%BB%BA-%E6%9C%80%E5%B0%8F%E5%8C%96-%E9%85%8D%E7%BD%AE%E8%BF%87%E7%A8%8B-%E6%9F%A5%E7%9C%8B%E6%94%B6%E9%9B%86%E6%97%A5%E5%BF%97windows10%E4%B8%8B%E6%90%AD%E5%BB%BA/  

