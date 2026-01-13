# Spring-Boot 应用 报错 No Qualifying Bean of Type  XXXXX.***Mapper


<h1>报错类型</h1>
<p>NoSuchBeanDefinitionException、No qualifying bean of type&nbsp; XXXXX.***Mapper</p>
<h1>报错信息详情</h1>
<p>Caused by: org.springframework.beans.factory.NoSuchBeanDefinitionException: No qualifying bean of type 'com.pflm.modules.job.dao.ScheduleJobMapper' available: expected at least 1 bean which qualifies as autowire candidate. Dependency annotations: {@javax.annotation.Resource(shareable=true, lookup=, name=, description=, authenticationType=CONTAINER, type=class java.lang.Object, mappedName=)}</p>
<h1>原因分析</h1>
<p>这个错误原因是由于@Mapper注解 mapper文件 没有被扫描到 所以报错，NoSuchBeanDefinitionException，bean 未定义，找不到该 bean</p>
<h1>解决方法：</h1>
<p>在 spring-boot 应用的程序入口 加上 @MapperScan("指定mapper的包名,指定mapper的包名2") 即可解决问题</p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2020/spring-boot-%E5%BA%94%E7%94%A8-%E6%8A%A5%E9%94%99-no-qualifying-bean-of-type-xxxxx.___mapper/  

