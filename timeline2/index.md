# timeline2

{{< admonition quote "quote" >}}
note abstract info tip success question warning failure danger bug example quote
{{< /admonition >}}
这里使用MD语法编写你的文章
<!--more-->

{{< timeline2 >}}

    {{% tl-event2 title="标题" from="2023-05-21" to="2023-05-22" %}}
## 你好

> 测试md 语法支持
    {{% /tl-event2 %}}

    {{% tl-event2 title="Current position" from="2022-05-01"  %}}
I'm working here 2
    {{% /tl-event2 %}}

    {{% tl-event2 title="Old position" from="2020-01-02"  %}}
I worked here 1
    {{% /tl-event2 %}}

{{< /timeline2 >}}

## 使用demo-timeline2

```html
{{</* timeline2 */>}}
{{%/* tl-event2 title="标题" from="2023-05-21" to="2023-05-22" */%}}
## 你好
> 测试md 语法支持
    {{%/* /tl-event2 */%}}

    {{%/* tl-event2 title="Current position" to="2023-02-01" from="2022-05-01"  */%}}
I'm working here 2
    {{%/* /tl-event2 */%}}

I worked here 1
    {{%/* /tl-event2 */%}}
{{</* /timeline2 */>}}
```


---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/timeline2/  

