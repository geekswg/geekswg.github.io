# 正则表达式去除所有HTML标签


<div class="cnblogs_code">
<pre>tempStr = tempStr.replace(/(&lt;([^&gt;]+)&gt;)/ig,"").replace(/[\r\n]/g,""); <span style="color: #008000;">//</span><span style="color: #008000;">去除所有html标签&lt;&gt;&lt;/&gt;.去除所有换行符。</span>
tempStr = tempStr.replace(/\s+/g,'#'); <span style="color: #008000;">//</span><span style="color: #008000;">所有的空格替换成 #</span></pre>
</div>
<p>&nbsp;</p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2020/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F%E5%8E%BB%E9%99%A4%E6%89%80%E6%9C%89%E6%A0%87%E7%AD%BEhtml%E6%A0%87%E7%AD%BE/  

