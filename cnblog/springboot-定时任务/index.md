# 

# 启用定时任务配置
```java
@SpringBootApplication
@EnableScheduling
public class SpringbootApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringbootApplication.class, args);
    }
}
```
# 创建定时任务类
```java
@Component
public class TimerTask {
    private static final long TIME_DELAY = 2 * 1000; // 60 秒

    //每 隔 TIME_DELAY 执行一次
    @Scheduled(fixedDelay =TIME_DELAY)
    public void delayTask(){
        System.out.println("fixedDelay Task => " + DateUtil.now());
    }
    
    //每五秒执行一次
    @Scheduled(cron="0/5 * * * * ?")
    public void cronTask(){
        System.out.println("corn Task => "+DateUtil.now());
    }
}
```

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/cnblog/springboot-%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1/  

