# Spring-Boot自定义yml读取


## 通过注解方式加载自定义yml文件
```java
package com.fixit.blog.consts;
@Component
@PropertySource(value = "conf/jgpt.yml")//指定文件位置
@ConfigurationProperties(prefix = "jgpt-api")// 指定前缀
@Data
public class JgptConst {
    public static String clientId;
    //加载对应数据
    @PostConstruct
    public static void setClientId(String clientId) {
        JgptConst.clientId = clientId;
    }
}
```
> yml文件
```
jgpt-api:
  clientId: 10105
```

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2021/spring-boot%E8%87%AA%E5%AE%9A%E4%B9%89yml%E8%AF%BB%E5%8F%96/  

