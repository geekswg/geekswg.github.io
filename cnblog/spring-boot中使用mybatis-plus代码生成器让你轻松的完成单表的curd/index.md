# 

<h1>摘要：</h1>
<p>最近spring-boot/cloud 项目中使用了mybatis-plus持久层框架，但是在开发中发现还是比较让你烦恼是一个个的去建对应的表实体类BaseEntity,BaseMapper,Service,Ctrooller,这些操作实在枯燥乏味而且尤其是实体特别容易由于粗心和手误导致不小心写错变量名，在写完代码测试时发现错误，比较麻烦，影响开发效率。这里mybatis-plus官网是提供了一个代码生成器插件，自从使用了它，效率提高不少！非常推荐使用，学习使用成本低。</p>
<h1>mybatis-plus代码生成器的使用</h1>
<p>[mybatis-plus官方网站](<a href="https://mybatis.plus/">https://mybatis.plus/</a>)</p>
<p>本文建立在了解mbatis持久层框架基础上。</p>
<h2>使用软件环境</h2>
<p>jdk 8</p>
<p><span style="font-size: 14px;">&lt;spring-boot.version&gt;2.1.6.RELEASE&lt;/spring-boot.version&gt;</span></p>
<p><span style="font-size: 14px;">&lt;spring-cloud.version&gt;Greenwich.SR2&lt;/spring-cloud.version&gt;</span></p>
<p><span style="font-size: 14px;">&lt;lombok.version&gt;1.18.12&lt;/lombok.version&gt;</span></p>
<h2>mybatis-plus代码生成器依赖</h2>
<p>&nbsp;&lt;mybatis-plus.version&gt;3.3.2&lt;/mybatis-plus.version&gt;</p>
<div class="cnblogs_code">
<pre>&lt;dependency&gt;<br />    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;<br />    &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;<br />    &lt;version&gt;${mybatis-plus.version}&lt;/version&gt;<br />&lt;/dependency&gt;<br />&lt;dependency&gt;<br />    &lt;groupId&gt;com.baomidou&lt;/groupId&gt;<br />    &lt;artifactId&gt;mybatis-plus-generator&lt;/artifactId&gt;<br />    &lt;version&gt;${mybatis-plus.version}&lt;/version&gt;<br />&lt;/dependency&gt;<br />&lt;dependency&gt;<br />    &lt;groupId&gt;org.apache.velocity&lt;/groupId&gt;<br />    &lt;artifactId&gt;velocity-engine-core&lt;/artifactId&gt;<br />    &lt;version&gt;2.2&lt;/version&gt;<br />&lt;/dependency&gt;</pre>
</div>
<h2>&nbsp;代码生成器Demo</h2>
<p>直接上代码</p>
<div class="cnblogs_code">
<pre><span style="color: #008000;">/**</span><span style="color: #008000;">
 * TODO mybait-plus代码生成器
 *
 &lt;dependency&gt;
     &lt;groupId&gt;com.baomidou&lt;/groupId&gt;
     &lt;artifactId&gt;mybatis-plus-boot-starter&lt;/artifactId&gt;
     &lt;version&gt;${mybatis-plus.version}&lt;/version&gt;
 &lt;/dependency&gt;
 &lt;dependency&gt;
     &lt;groupId&gt;com.baomidou&lt;/groupId&gt;
     &lt;artifactId&gt;mybatis-plus-generator&lt;/artifactId&gt;
     &lt;version&gt;${mybatis-plus.version}&lt;/version&gt;
 &lt;/dependency&gt;
 &lt;dependency&gt;
     &lt;groupId&gt;org.apache.velocity&lt;/groupId&gt;
     &lt;artifactId&gt;velocity-engine-core&lt;/artifactId&gt;
     &lt;version&gt;2.2&lt;/version&gt;
 &lt;/dependency&gt;
 *
 * </span><span style="color: #808080;">@author</span><span style="color: #008000;">: geekswg@qq.com
 * </span><span style="color: #808080;">@since</span><span style="color: #008000;">: 2020/7/27 22:05
 </span><span style="color: #008000;">*/</span>
<span style="color: #0000ff;">public</span> <span style="color: #0000ff;">class</span><span style="color: #000000;"> MyBatisPlusAutoGenerator {

    </span><span style="color: #008000;">/**</span><span style="color: #008000;">
     * &lt;p&gt;
     * 读取控制台内容
     * &lt;/p&gt;
     *
     * </span><span style="color: #808080;">@param</span><span style="color: #008000;"> tip 提示信息
     * </span><span style="color: #808080;">@return</span><span style="color: #008000;"> 控制台输入信息
     </span><span style="color: #008000;">*/</span>
    <span style="color: #0000ff;">public</span> <span style="color: #0000ff;">static</span><span style="color: #000000;"> String scannerInput(String tip) {
        Scanner scanner </span>= <span style="color: #0000ff;">new</span><span style="color: #000000;"> Scanner(System.in);
        StringBuilder sbTips </span>= <span style="color: #0000ff;">new</span><span style="color: #000000;"> StringBuilder();
        sbTips.append(</span>"正在使用Mybatis-Plus代码生成器！\n"<span style="color: #000000;">);
        sbTips.append(</span>"请输入需要自动生成的" + tip + "："<span style="color: #000000;">);
        System.out.println(sbTips.toString());
        </span><span style="color: #0000ff;">if</span><span style="color: #000000;"> (scanner.hasNext()) {
            String inputText </span>=<span style="color: #000000;"> scanner.next();
            </span><span style="color: #0000ff;">if</span><span style="color: #000000;"> (StrUtil.isNotEmpty(inputText)) {
                </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> inputText;
            }
        }
        </span><span style="color: #0000ff;">throw</span> <span style="color: #0000ff;">new</span> MybatisPlusException("请输入正确的" + tip + "！"<span style="color: #000000;">);
    }

    </span><span style="color: #0000ff;">private</span> <span style="color: #0000ff;">static</span> <span style="color: #0000ff;">final</span> String BASE_SRC_ROOT = "/src/main/java/"<span style="color: #000000;">;
    </span><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">void</span><span style="color: #000000;"> codeGenerate() {
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> 代码生成器</span>
        AutoGenerator mpg = <span style="color: #0000ff;">new</span><span style="color: #000000;"> AutoGenerator();

        </span><span style="color: #008000;">//</span><span style="color: #008000;"> 全局配置</span>
        GlobalConfig gc = <span style="color: #0000ff;">new</span><span style="color: #000000;"> GlobalConfig();
        String projectPath </span>= System.getProperty("user.dir"<span style="color: #000000;">);
        String baseSrc </span>= projectPath +<span style="color: #000000;"> BASE_SRC_ROOT;
        gc.setOutputDir(baseSrc);
        gc.setAuthor(</span>"autoGenerateByMyBatisPlus"<span style="color: #000000;">);
        gc.setOpen(</span><span style="color: #0000ff;">true</span>);<span style="color: #008000;">//</span><span style="color: #008000;">生成完代码，打开资源管理器查看
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> gc.setSwagger2(true); 实体属性 Swagger2 注解</span>
<span style="color: #000000;">        mpg.setGlobalConfig(gc);

        </span><span style="color: #008000;">//</span><span style="color: #008000;"> 数据源配置</span>
        DataSourceConfig dsc = <span style="color: #0000ff;">new</span><span style="color: #000000;"> DataSourceConfig();
        dsc.setUrl(</span>"jdbc:mysql://127.0.0.1:3306/db_geek?useUnicode=true&amp;useSSL=false&amp;characterEncoding=utf8&amp;serverTimezone=GMT"<span style="color: #000000;">);
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> dsc.setSchemaName("public");
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> 8.X.X com.mysql.cj.jdbc.Driver  </span><span style="color: #008000;">//</span><span style="color: #008000;"> com.mysql.jdbc.Driver</span>
        dsc.setDriverName("com.mysql.cj.jdbc.Driver");<span style="color: #008000;">//</span><span style="color: #008000;">数据库驱动</span>
        dsc.setUsername("root");<span style="color: #008000;">//</span><span style="color: #008000;">用户名</span>
        dsc.setPassword("root");<span style="color: #008000;">//</span><span style="color: #008000;">密码</span>
<span style="color: #000000;">        mpg.setDataSource(dsc);

        </span><span style="color: #008000;">//</span><span style="color: #008000;"> 包配置</span>
        PackageConfig pc = <span style="color: #0000ff;">new</span><span style="color: #000000;"> PackageConfig();
        pc.setParent(</span>"org.demo.springcloud"); <span style="color: #008000;">//</span><span style="color: #008000;">"com.baomidou.ant"
        </span><span style="color: #008000;">//</span><span style="color: #008000;">最终生成代码目录为 baseSrc/org/demo/springcloud/moduleName</span>
        pc.setModuleName(scannerInput("模块名"<span style="color: #000000;">));
        mpg.setPackageInfo(pc);
</span><span style="color: #008000;">/**</span><span style="color: #008000;">
 // 自定义配置
 InjectionConfig cfg = new InjectionConfig() {
@Override public void initMap() {
// to do nothing
}
};

 // 如果模板引擎是 freemarker
 String templatePath = "/templates/mapper.xml.ftl";
 // 如果模板引擎是 velocity
 // String templatePath = "/templates/mapper.xml.vm";

 // 自定义输出配置
 List&lt;FileOutConfig&gt; focList = new ArrayList&lt;&gt;();
 // 自定义配置会被优先输出
 focList.add(new FileOutConfig(templatePath) {
@Override public String outputFile(TableInfo tableInfo) {
// 自定义输出文件名 ， 如果你 Entity 设置了前后缀、此处注意 xml 的名称会跟着发生变化！！
return projectPath + "/src/main/resources/mapper/" + pc.getModuleName()
+ "/" + tableInfo.getEntityName() + "Mapper" + StringPool.DOT_XML;
}
});

 cfg.setFileCreate(new IFileCreate() {
@Override public boolean isCreate(ConfigBuilder configBuilder, FileType fileType, String filePath) {
// 判断自定义文件夹是否需要创建
checkDir("调用默认方法创建的目录，自定义目录用");
if (fileType == FileType.MAPPER) {
// 已经生成 mapper 文件判断存在，不想重新生成返回 false
return !new File(filePath).exists();
}
// 允许生成模板文件
return true;
}
});

 cfg.setFileOutConfigList(focList);
 mpg.setCfg(cfg);
 *</span><span style="color: #008000;">*/</span>
        <span style="color: #008000;">//</span><span style="color: #008000;"> 配置模板</span>
        TemplateConfig templateConfig = <span style="color: #0000ff;">new</span><span style="color: #000000;"> TemplateConfig();

        </span><span style="color: #008000;">//</span><span style="color: #008000;"> 配置自定义输出模板
        </span><span style="color: #008000;">//</span><span style="color: #008000;">指定自定义模板路径，注意不要带上.ftl/.vm, 会根据使用的模板引擎自动识别
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> templateConfig.setEntity("templates/entity2.java");
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> templateConfig.setService();
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> templateConfig.setController();</span>
<span style="color: #000000;">
        templateConfig.setXml(</span><span style="color: #0000ff;">null</span><span style="color: #000000;">);
        mpg.setTemplate(templateConfig);

        </span><span style="color: #008000;">//</span><span style="color: #008000;"> 策略配置</span>
        StrategyConfig strategy = <span style="color: #0000ff;">new</span><span style="color: #000000;"> StrategyConfig();
        strategy.setNaming(NamingStrategy.underline_to_camel);
        strategy.setColumnNaming(NamingStrategy.underline_to_camel);
        strategy.setEntityLombokModel(</span><span style="color: #0000ff;">true</span>);   <span style="color: #008000;">//</span><span style="color: #008000;">使用lombok插件</span>
        strategy.setRestControllerStyle(<span style="color: #0000ff;">true</span>);<span style="color: #008000;">//</span><span style="color: #008000;">使用@RestController
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> 公共父类
</span><span style="color: #008000;">//</span><span style="color: #008000;">        strategy.setSuperControllerClass("你自己的父类控制器,没有就不用设置!");</span><span style="color: #008000;">//</span><span style="color: #008000;">BaseController
        </span><span style="color: #008000;">//</span><span style="color: #008000;"> 写于父类中的公共字段
</span><span style="color: #008000;">//</span><span style="color: #008000;">        strategy.setSuperEntityColumns("id");</span>
        strategy.setInclude(scannerInput("表名，多个英文逗号分割").split(","<span style="color: #000000;">));
        strategy.setControllerMappingHyphenStyle(</span><span style="color: #0000ff;">true</span><span style="color: #000000;">);
        strategy.setTablePrefix(pc.getModuleName() </span>+ "_"<span style="color: #000000;">);
        mpg.setStrategy(strategy);
</span><span style="color: #008000;">//</span><span style="color: #008000;">        mpg.setTemplateEngine(new FreemarkerTemplateEngine());</span>
<span style="color: #000000;">        mpg.execute();
    }

    </span><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">static</span> <span style="color: #0000ff;">void</span><span style="color: #000000;"> main(String[] args) {
        </span><span style="color: #0000ff;">new</span><span style="color: #000000;"> MyBatisPlusAutoGenerator().codeGenerate();
    }
}</span></pre>
</div>
<p>直接右键运行该类的main方法执行后在控制台按提示输入</p>
<p>模块名、表名，即可生成相应的代码。</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202008/2055231-20200801073111148-1936352524.png" alt="" width="774" height="257" loading="lazy" /></p>
<p>&nbsp;</p>
<p>&nbsp;成功生成代码后会自动打开生成的目录文件夹</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202008/2055231-20200801073236365-562183591.png" alt="" width="610" height="264" loading="lazy" /></p>
<p>&nbsp;</p>
<h2>开始使用&nbsp;</h2>
<p>使用自动生成的代码快速完成单表的CURD。CURD是一个数据库技术中的缩写词，一般的项目开发的各种参数的基本功能都是CURD。作用是用于处理数据的基本原子操作。</p>
<div class="para">它代表创建（Create）、更新（Update）、读取（Retrieve）和删除（Delete）操作。</div>
<div class="para">CURD 定义了用于处理数据的基本原子操作。</div>
<div class="para">自动生成代码在Idea中项目结构</div>
<div class="para"><img src="https://img2020.cnblogs.com/blog/2055231/202008/2055231-20200801094815736-1517957281.png" alt="" width="582" height="530" loading="lazy" /></div>
<div class="para">直接在controller完成增删改查的操作</div>
<div class="para">
<div class="cnblogs_code">
<pre><span style="color: #000000;">@RestController
@RequestMapping(</span>"/auto/bs-bank-info"<span style="color: #000000;">)
</span><span style="color: #0000ff;">public</span> <span style="color: #0000ff;">class</span><span style="color: #000000;"> BsBankInfoController {

    @Resource
    BsBankInfoServiceImpl bankInfoService;

    </span><span style="color: #008000;">/**</span><span style="color: #008000;">
     * 查询列表
     * </span><span style="color: #808080;">@param</span><span style="color: #008000;"> bsBankInfo
     * </span><span style="color: #808080;">@return</span>
     <span style="color: #008000;">*/</span><span style="color: #000000;">
    @PostMapping(</span>"list"<span style="color: #000000;">)
    </span><span style="color: #0000ff;">public</span><span style="color: #000000;"> Object list(@RequestBody BsBankInfo bsBankInfo){
        Wrapper queryWrapper </span>= <span style="color: #0000ff;">new</span> QueryWrapper&lt;&gt;<span style="color: #000000;">(bsBankInfo);
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> bankInfoService.list(queryWrapper);
    }
    @PostMapping(</span>"listbyPage"<span style="color: #000000;">)
    </span><span style="color: #0000ff;">public</span><span style="color: #000000;"> Object listbyPage(@RequestBody BsBankInfo bsBankInfo){
        Page</span>&lt;BsBankInfo&gt; pager = <span style="color: #0000ff;">new</span> Page(1,1);<span style="color: #008000;">//</span><span style="color: #008000;">这里测试固定了</span>
        Wrapper queryWrapper = <span style="color: #0000ff;">new</span> QueryWrapper&lt;&gt;<span style="color: #000000;">(bsBankInfo);
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> bankInfoService.page(pager ,queryWrapper);
    }
    @PostMapping(</span>"add"<span style="color: #000000;">)
    </span><span style="color: #0000ff;">public</span><span style="color: #000000;"> Object add(@RequestBody BsBankInfo bsBankInfo){
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> bankInfoService.save(bsBankInfo);
    }
    @PostMapping(</span>"update"<span style="color: #000000;">)
    </span><span style="color: #0000ff;">public</span><span style="color: #000000;"> Object update(@RequestBody BsBankInfo bsBankInfo){
        </span><span style="color: #0000ff;">return</span><span style="color: #000000;"> bankInfoService.updateById(bsBankInfo);
    }
    @PostMapping(</span>"delete"<span style="color: #000000;">)
    </span><span style="color: #0000ff;">public</span><span style="color: #000000;"> Object delete(@RequestBody BsBankInfo bsBankInfo){
        </span><span style="color: #0000ff;">return</span> bankInfoService.remove(<span style="color: #0000ff;">new</span> QueryWrapper&lt;&gt;<span style="color: #000000;">(bsBankInfo));
    }
}</span></pre>
</div>
<p>上面的代码示例是不是看起非常丝滑，简洁！</p>
<p>到此基本上单表的CURD简单完成了。这里只需要写controller里面写你的业务接口代码，其他部分的都是mybatis-plus代码生成器帮你自动生成的。</p>
<h1>总结：</h1>
<p>这里我用的是3.X版本，现在用的mybatis-plus还是主要以2.X比较多。2.X和3.X目前我直观了解到是</p>
<p>增删查改的方法名不太一样了</p>
<p>如</p>
<p>2.X insert 、selectList</p>
<p>3.X save、 list</p>
<p>代码生成器的区别</p>
</div>
<div class="para">代码生成的实体类</div>
<div class="para">3.X去除注解@TableName,@TableField,@TableId等注解，感觉有点不习惯，好像少点了什么，不知道为什么要这样</div>
<div class="para">3.X 实体类 未继承 Model&lt;T&gt; 了，2.X自动生成是继承，可以直接完成简单增删改操作。</div>
<p>&nbsp;</p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/cnblog/spring-boot%E4%B8%AD%E4%BD%BF%E7%94%A8mybatis-plus%E4%BB%A3%E7%A0%81%E7%94%9F%E6%88%90%E5%99%A8%E8%AE%A9%E4%BD%A0%E8%BD%BB%E6%9D%BE%E7%9A%84%E5%AE%8C%E6%88%90%E5%8D%95%E8%A1%A8%E7%9A%84curd/  

