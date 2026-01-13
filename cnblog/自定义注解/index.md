# 

#springboot项目自定义注解
自定义注解 实现 统计方法执行时间
## 1定义注解
>代码示例

```
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
public @interface MethodTimer {
    String value() default "";
}
```

## 2利用AOP实现注解
```
import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.util.StopWatch;

/**
 * 方法计时器 切面实现
 */
@Aspect
@Component
@Slf4j
public class MethodTimerAspect {
    @Pointcut("@annotation(methodTimer)")
    public void methodTimerLog(MethodTimer methodTimer) {
    }

    @Around(value = "methodTimerLog(methodTimer)", argNames = "proceedingJoinPoint,methodTimer")
    public Object doAfter(ProceedingJoinPoint proceedingJoinPoint, MethodTimer methodTimer) throws Throwable {
        StopWatch stopWatch = new StopWatch();
        stopWatch.start();

        Object proceed = proceedingJoinPoint.proceed();

        stopWatch.stop();
        log.info("方法名 : [{}],  执行时间: [{}MS], class-method : [{}]", methodTimer.value(),
                stopWatch.getTotalTimeMillis(),
                proceedingJoinPoint.getTarget().getClass().getName() + "." + proceedingJoinPoint.getSignature().getName());
        return proceed;
    }
}
```

## 3自定义注解的使用
```
    @MethodTimer( "上传数据")
    @Override
    public void upload(String serviceCode) {
    }
```
## 4注解不生效
>在方法被其它方法内部调用时可能无法生效注解 

```

@Service("superviseMedical")
@EnableAspectJAutoProxy(exposeProxy = true)
@Slf4j
public class DeptUpServiceImpl implements BaseUploadService<DeptInfo> {
    @MethodTimer( "上传科室数据")
    @Override
    public void upload(String serviceCode) {
        //method2();//不能直接调用，要使用代理才能 使自定义注解生效
        (DeptUpServiceImpl)AopContext.currentProxy().method2()//这样使用代理调用函数 需要在类上添加 @EnableAspectJAutoProxy(exposeProxy = true)
    }
    @MethodTimer( "方法2")
    void method2(){
      - - -
    }
}
```


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/cnblog/%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B3%A8%E8%A7%A3/  

