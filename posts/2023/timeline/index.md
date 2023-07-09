# Timeline

{{< admonition quote "quote" >}}
note abstract info tip success question warning failure danger bug example quote
{{< /admonition >}}
这里使用MD语法编写你的文章
<!--more-->

{{< timeline >}}

    {{% tl-event title="标题" from="2023-05-21" to="2023-05-22" %}}
## 你好
> 测试md 语法支持
    {{% /tl-event %}}

    {{% tl-event title="Current position" from="2022-05-01"  %}}
I'm working here 2
    {{% /tl-event %}}

    {{% tl-event title="Old position" from="2020-01-02"  %}}
I worked here 1
    {{% /tl-event %}}

{{< /timeline >}}

## 使用demo-timeline

```
{{</* timeline */>}}
{{%/* tl-event title="标题" from="2023-05-21" to="2023-05-22" */%}}
## 你好
> 测试md 语法支持
    {{%/* /tl-event */%}}

    {{%/* tl-event title="Current position" to="2023-02-01" from="2022-05-01"  */%}}
I'm working here 2
    {{%/* /tl-event */%}}

I worked here 1
    {{%/* /tl-event */%}}
{{</* /timeline */>}}
```


---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/posts/2023/timeline/  

