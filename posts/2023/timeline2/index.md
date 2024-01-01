# timeline2

{{&lt; admonition quote &#34;quote&#34; &gt;}}
note abstract info tip success question warning failure danger bug example quote
{{&lt; /admonition &gt;}}
这里使用MD语法编写你的文章
&lt;!--more--&gt;

{{&lt; timeline2 &gt;}}

    {{% tl-event2 title=&#34;标题&#34; from=&#34;2023-05-21&#34; to=&#34;2023-05-22&#34; %}}
## 你好

&gt; 测试md 语法支持
    {{% /tl-event2 %}}

    {{% tl-event2 title=&#34;Current position&#34; from=&#34;2022-05-01&#34;  %}}
I&#39;m working here 2
    {{% /tl-event2 %}}

    {{% tl-event2 title=&#34;Old position&#34; from=&#34;2020-01-02&#34;  %}}
I worked here 1
    {{% /tl-event2 %}}

{{&lt; /timeline2 &gt;}}

## 使用demo-timeline2

```html { title=&#34;timeline2-demo&#34; }
{{&lt;/* timeline2 */&gt;}}
{{%/* tl-event2 title=&#34;标题&#34; from=&#34;2023-05-21&#34; to=&#34;2023-05-22&#34; */%}}
## 你好
&gt; 测试md 语法支持
    {{%/* /tl-event2 */%}}

    {{%/* tl-event2 title=&#34;Current position&#34; to=&#34;2023-02-01&#34; from=&#34;2022-05-01&#34;  */%}}
I&#39;m working here 2
    {{%/* /tl-event2 */%}}

I worked here 1
    {{%/* /tl-event2 */%}}
{{&lt;/* /timeline2 */&gt;}}
```


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.github.io/posts/2023/timeline2/  

