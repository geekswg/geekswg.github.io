# 

<div class="line number2 index1 alt1">
<p align="left">#filebeat 5.2.2</p>
<p align="left">#prospector(input)段配置</p>
<p align="left">filebeat.prospectors: <span style="color: #008080;">#每一个prospectors，起始于一个破折号"-"</span></p>
<p align="left">- input_type: log <span style="color: #008080;">#默认log，从日志文件读取每一行。stdin，从标准输入读取</span></p>
<p align="left">paths: <span style="color: #008080;">#日志文件路径列表，可用通配符，不递归</span></p>
<p align="left">- /var/log/*.log</p>
<p align="left">encoding: plain #编码，默认无，plain(不验证或者改变任何输入), latin1, utf-8, utf-16be-bom, utf-16be, utf-16le, big5, gb18030, gbk, hz-gb-2312, euc-kr, euc-jp, iso-2022-jp, shift-jis</p>
<p align="left">include_lines: ['^ERR', '^WARN'] <span style="color: #008080;">#匹配行，后接一个正则表达式列表，默认无，如果启用，则filebeat只输出匹配行，如果同时指定了多行匹配，仍会按照include_lines做过滤</span></p>
<p align="left">exclude_lines: ["^DBG"] <span style="color: #008080;">#排除行，后接一个正则表达式的列表，默认无</span></p>
<p align="left">exclude_files: [".gz$"] #排除文件，后接一个正则表达式的列表，默认无</p>
<p align="left">ignore_older: 0 #排除更改时间超过定义的文件，时间字符串可以用2h表示2小时，5m表示5分钟，默认0</p>
<p align="left">document_type: log #该type会被添加到type字段，对于输出到ES来说，这个输入时的type字段会被存储，默认log</p>
<p align="left">scan_frequency: 10s #prospector扫描新文件的时间间隔，默认10秒</p>
<p align="left">max_bytes: 10485760 #单文件最大收集的字节数，单文件超过此字节数后的字节将被丢弃，默认10MB，需要增大，保持与日志输出配置的单文件最大值一致即可</p>
<p align="left">multiline.pattern: ^\[ <span style="color: #008080;">#多行匹配模式，后接正则表达式，默认无</span></p>
<p align="left">multiline.negate: false #多行匹配模式后配置的模式是否取反，默认false</p>
<p align="left">multiline.match: after #定义多行内容被添加到模式匹配行之后还是之前，默认无，可以被设置为after或者before</p>
<p align="left">multiline.max_lines: 500 <span style="color: #008080;">#单一多行匹配聚合的最大行数，超过定义行数后的行会被丢弃，默认500</span></p>
<p align="left">multiline.timeout: 5s <span style="color: #008080;">#多行匹配超时时间，超过超时时间后的当前多行匹配事件将停止并发送，然后开始一个新的多行匹配事件，默认5秒</span></p>
<p align="left">tail_files: false #可以配置为true和false。配置为true时，filebeat将从新文件的最后位置开始读取，如果配合日志轮循使用，新文件的第一行将被跳过</p>
<p align="left">&nbsp;</p>
<p align="left">close_renamed: false <span style="color: #008080;">#当文件被重命名或被轮询时关闭重命名的文件处理。注意：潜在的数据丢失。请务必阅读并理解此选项的文档。默认false</span></p>
<p align="left">close_removed: true <span style="color: #008080;">#如果文件不存在，立即关闭文件处理。如果后面文件又出现了，会在scan_frequency之后继续从最后一个已知position处开始收集，默认true</span></p>
<p align="left">enabled: true #每个prospectors的开关，默认true</p>
<p align="left">&nbsp;</p>
<p align="left"><span style="color: #008080;">#filebeat全局配置</span></p>
<p align="left">filebeat.spool_size: 2048 <span style="color: #008080;">#后台事件计数阈值，超过后强制发送，默认2048</span></p>
<p align="left">filebeat.idle_timeout: 5s #后台刷新超时时间，超过定义时间后强制发送，不管spool_size是否达到，默认5秒</p>
<p align="left">filebeat.registry_file: ${path.data}/registry #注册表文件，同logstash的sincedb，记录日志文件信息，如果使用相对路径，则意味着相对于日志数据的路径</p>
<p align="left">filebeat.config_dir: #定义filebeat配置文件目录，必须指定一个不同于filebeat主配置文件所在的目录，目录中所有配置文件中的全局配置会被忽略</p>
<p align="left">&nbsp;</p>
<p align="left"><span style="color: #008080;">#通用配置段</span></p>
<p align="left">name: #配置发送者名称，如果不配置则使用hostname</p>
<p align="left">tags: ["service-X", "web-tier"] #标记tag，可用于分组</p>
<p align="left">fields: #添加附件字段，可以使values，arrays，dictionaries或者任何嵌套数据</p>
<p align="left">env: staging</p>
<p align="left">queue_size: 1000 <span style="color: #008080;">#处理管道中单个事件内的队列大小，默认1000</span></p>
<p align="left">max_procs: #设置最大CPU数，默认为CPU核数</p>
<p align="left">&nbsp;</p>
<p align="left"><span style="color: #008080;">#processors配置段</span></p>
<p align="left"><span style="color: #008080;">#Outputs配置段</span></p>
<p align="left">output.elasticsearch: #elasticsearch输出模块</p>
<p align="left">enabled: true #启用模块</p>
<p align="left">hosts: ["localhost:9200"] #ES地址</p>
<p align="left">compression_level: 0 #gzip压缩级别，默认0，不压缩，压缩耗CPU</p>
<p align="left">worker: 1 #每个ES的worker数？？？？？，默认1</p>
<p align="left">index: "filebeat-%{+yyyy.MM.dd}" #可选配置，ES索引名称，默认filebeat-%{+yyyy.MM.dd}</p>
<p align="left">pipeline: "" #可选配置，输出到ES接收节点的pipeline，默认无</p>
<p align="left">path: "/elasticsearch" <span style="color: #008080;">#可选的，HTTP路径，默认无</span></p>
<p align="left">proxy_url: http://proxy:3128 #http代理服务器地址，默认无</p>
<p align="left">max_retries: 3 #ES重试次数，默认3次，超过3次后，当前事件将被丢弃</p>
<p align="left">bulk_max_size: 50 #对一个单独的ES批量API索引请求的最大事件数？？？？？默认50</p>
<p align="left">timeout: 90 #到ES的http请求超时时间？？？？？默认90秒</p>
<p align="left">&nbsp;</p>
<p align="left">output.logstash: #logstash输出模块</p>
<p align="left">enabled: true #启用模块</p>
<p align="left">hosts: ["localhost:5044"] #logstash地址</p>
<p align="left">worker: 1 <span style="color: #008080;">#每个logstash的worker数？？？？？，默认1</span></p>
<p align="left">compression_level: 3 #压缩级别，默认3</p>
<p align="left">loadbalance: true #负载均衡开关，在不同的logstash间负载</p>
<p align="left">pipelining: 0 #在处理新的批量期间，异步发送至logstash的批量次数？？？？？</p>
<p align="left">index: 'filebeat' <span style="color: #008080;">#可选配置，索引名称，默认为filebeat</span></p>
<p align="left">proxy_url: socks5://user:password@socks5-server:2233 #socks5代理服务器地址</p>
<p align="left">proxy_use_local_resolver: false #使用代理时是否使用本地解析，默认false</p>
<p align="left">&nbsp;</p>
<p align="left">output.kafka: #kafka输出模块</p>
<p align="left">output.redis: <span style="color: #008080;">#redis输出模块</span></p>
<p align="left">enabled: true <span style="color: #008080;">#启用模块</span></p>
<p align="left">hosts: ["localhost:6379"] #redis地址，地址为一个列表，如果loadbalance开启，则负载到里表中的服务器，当一个redis服务器不可达，事件将被分发到可到达的redis服务器</p>
<p align="left">port: 6379 <span style="color: #008080;">#redis端口，如果hosts内未包含端口信息，默认6379</span></p>
<p align="left">key: filebeat #事件发布到redis的list或channel，默认filebeat</p>
<p align="left">password: #redis密码，默认无</p>
<p align="left">db: 0 #redis的db值，默认0</p>
<p align="left">datatype: list #发布事件使用的redis数据类型，如果为list，使用RPUSH命令（生产消费模式）。如果为channel，使用PUBLISH命令{发布订阅模式}。默认为list</p>
<p align="left">worker: 1 #为每个redis服务器启动的工作进程数，会根据负载均衡配置递增</p>
<p align="left">loadbalance: true #负载均衡，默认开启</p>
<p align="left">timeout: 5s <span style="color: #008080;">#redis连接超时时间，默认5s</span></p>
<p align="left">max_retries: 3 #filebeat会忽略此设置，并一直重试到全部发送为止，其他beat设置为0即忽略，默认3次</p>
<p align="left">bulk_max_size: 2048 ##对一个redis请求或管道批量的最大事件数，默认2048</p>
<p align="left">proxy_url: #socks5代理地址，必须使用<a href="https://blog.csdn.net/xuguokun1986/article/details/73560195/?utm_medium=distribute.pc_relevant.none-task-blog-baidujs-10" target="_blank">socks5://</a></p>
<p align="left">proxy_use_local_resolver: false #使用代理时是否使用本地解析，默认false</p>
<p align="left">&nbsp;</p>
<p align="left"><span style="color: #008080;">#Paths配置段</span></p>
<p align="left">path.home: <span style="color: #008080;">#主目录，filebeat安装目录，为其他所有path配置的默认基本路径，默认为filebeat二进制文件的本地目录</span></p>
<p align="left">path.config: ${path.home} <span style="color: #008080;">#filebeat配置路径，主配置文件和es模板的默认基本路径，默认为filebeat家目录</span></p>
<p align="left">path.data: ${path.home}/data #filebeat数据存储路径，默认在filebeat家目录下</p>
<p align="left">path.logs: ${path.home}/logs <span style="color: #008080;">#filebeat日志存储路径，默认在filebeat家目录下</span></p>
<p align="left">&nbsp;</p>
<p align="left"><span style="color: #008080;">#logging配置段</span></p>
<p align="left"><span style="color: #008080;">#有3个可配置的filebeat日志输出选项：syslog,file,stderr</span></p>
<p align="left"><span style="color: #008080;">#windows默认输出到file</span></p>
<p align="left">logging.level: info #设定日志级别，可设置级别有critical, error, warning, info, debug</p>
<p align="left">logging.selectors: [ ] #开启debug输出的选择组件，开启所有选择使用["*"],其他可用选择为"beat","publish","service"</p>
<p align="left">logging.to_syslog: true #输出所有日志到syslog，默认为false</p>
<p align="left">logging.metrics.enabled: true #定期记录filebeat内部性能指标，默认true</p>
<p align="left">logging.metrics.period: 30s #记录内部性能指标的周期，默认30秒</p>
<p align="left">logging.to_files: true <span style="color: #008080;">#输出所有日志到file，默认true</span></p>
<p align="left">logging.files: #日志输出的文件配置</p>
<p align="left">path: /var/log/filebeat #配置日志输出路径，默认在家目录的logs目录</p>
<p align="left">name: filebeat #日志文件名</p>
<p align="left">rotateeverybytes: 10485760 #日志轮循大小，默认10MB</p>
<p align="left">keepfiles: 7 <span style="color: #008080;">#日志轮循文件保存数量，默认7</span></p>
<p align="left"><span style="color: #008080;">#harvester收割者</span></p>
<p align="left"><span style="color: #008080;">#负责读取每个文件的内容，收割者一行一行的读取每个文件并发送内容到output，收割者负责打开和关闭文件</span></p>
<p align="left"><span style="color: #008080;">#prospector勘探者</span></p>
<p align="left"><span style="color: #008080;">#负责管理收割者和查找所有读取源。目前勘探者支持两个勘探类型，log和stdin,每个勘探类型可以被定义多次。龙勘探者检查每个文件来看是否需要打开一个收割者或收割者是否在运行，诱惑是否忽略这个文件</span></p>
<p align="left"><span style="color: #008080;">#filebeat如何保持文件状态？</span></p>
<p align="left"><span style="color: #008080;">#filebeat保持每个文件的状态并频繁刷新状态到磁盘上的注册文件</span></p>
<p align="left"><span style="color: #008080;">#状态用于记忆收割者读取的最后一个偏移量并确保所有的日志行被发送</span></p>
<p align="left"><span style="color: #008080;">#如果一个es或logstash的输出不可达时，filebeat将持续追踪发送的最后一样并继续读取文件，尽快可以变为可用的输出</span></p>
<p align="left"><span style="color: #008080;">#当filebeat运行时，状态信息将被每个勘探者保存在内存中</span></p>
<p align="left"><span style="color: #008080;">#当filebeat被重启，会使用注册文件读取数据重建状态，并且让每个收割者从一直的最后位置开始</span></p>
<p align="left"><span style="color: #008080;">#每个勘探者为他发现的每个文件保持一个状态，因为文件可能被删除或移动，文件名和路径不足以确定一个文件</span></p>
<p align="left"><span style="color: #008080;">&nbsp;</span></p>
<p align="left"><span style="color: #008080;">#registry记录内容如下</span></p>
<p align="left">[root@jenkins data]# cat registry</p>
<p align="left">[{"source":"/var/log/messages","offset":5912,"FileStateOS":{"inode":38382035,"device":64768},"timestamp":"2017-03-13T18:17:54.39159179+08:00","ttl":-1}]</p>
<p align="left">[root@jenkins data]# stat /var/log/messages</p>
<p align="left">File: &lsquo;/var/log/messages&rsquo;</p>
<p align="left">Size: 5912 Blocks: 16 IO Block: 4096 regular file</p>
<p align="left">Device: fd00h/64768d Inode: 38382035 Links: 1</p>
<p align="left">Access: (0600/-rw-------) Uid: ( 0/ root) Gid: ( 0/ root)</p>
<p align="left">Context: system_u:object_r:var_log_t:s0</p>
<p align="left">Access: 2017-03-13 18:17:49.355444251 +0800</p>
<p align="left">Modify: 2017-03-13 18:15:22.452429796 +0800</p>
<p align="left">Change: 2017-03-13 18:15:22.452429796 +0800</p>
<p align="left">Birth: -</p>
<p align="left">&nbsp;</p>
<p align="left"><span style="color: #008080;">#multiline.negate和match组合</span></p>
<p align="left">negate match</p>
<p align="left">false after 连续匹配的行将被添加到前一个不匹配的行</p>
<p align="left">false before 连续匹配的行将被预合并到后一个不匹配的行</p>
<p align="left">true after 连续不匹配的行将被添加到前一个匹配的行</p>
<p align="left">true before 连续不匹配的行将被预合并到后一个匹配的行</p>
<p align="left">&nbsp;</p>
<p align="left">#注意：filebeat.registry_file，由于此配置是filebeat的全局配置，所以如果需要分开存储registry_file则必须拆分filebeat配置文件和进程。</p>
<p align="left">#而logstash的sincedb配置是input.file段配置，每个input可以单独指定sincedb</p>
<p align="left">&nbsp;</p>
<p align="left"><span style="color: #008080;">#注意：如果如果output.redis的datatype使用list，redis在没有阻塞的情况下是看不到该list的</span></p>
<p>&nbsp;</p>
</div>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/cnblog/filebeat-yml%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6--%E5%B8%B8%E7%94%A8%E5%8F%82%E6%95%B0%E8%AF%A6%E8%A7%A3/  

