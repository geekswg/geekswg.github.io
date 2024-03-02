# 友链


&lt;!-- When you set data `friends.yml` in `yourProject/data/` directory, it will be automatically loaded here. --&gt;
---
&lt;!-- You can define additional content below for this page. --&gt;
## Base info 友链格式

```yaml
- nickname: geekswg
  avatar: https://geekswg.github.io/images/avatar.jpg
  url: https://geekswg.github.io
  description: 毕少侠也在江湖。
```
&gt; 提示

{{&lt; admonition info &#34;FixIt主题 添加友链方法&#34; &gt;}}
在项目 /data/friends.yml 添加如下格式
```yaml
- nickname: geekswg
  avatar: https://geekswg.github.io/images/avatar.jpg
  url: https://geekswg.github.io
  description: 毕少侠也在江湖。
```
{{&lt; /admonition &gt;}}


{{&lt; admonition tip &#34;添加您的 FixIt 网站&#34; &gt;}}
您可以通过 [创建 PR :(fa-solid fa-code-branch fa-fw):](https://github.com/geekswg/blogFixit/pulls) 或 [编辑数据 :(fa-regular fa-pen-to-square fa-fw):](https://github.com/geekswg/blogFixit/edit/master/data/friends.yml)  按 **nickname** 以字典顺序将您的 FixIt 网站添加到此页面，格式如下：

```yml
- nickname: &lt;your nickname&gt;
  avatar: &lt;your avatar&gt;
  url: &lt;your site link&gt;
  description: &lt;description of your site&gt;
```

&gt; :(fa-solid fa-exclamation-triangle): *网站失效、停止维护、不当内容都可能被取消链接！*
{{&lt; /admonition &gt;}}

## 朋友圈

&lt;div id=&#34;friend-posts&#34; style=&#34;display: flex;flex-direction: row; flex-wrap: wrap;  &#34;&gt;
&lt;/div&gt;

## 随机文章

&lt;script&gt;
document.addEventListener(&#39;DOMContentLoaded&#39;, () =&gt; {
  //alert(&#39;DOMContentLoaded&#39;);
  //document.getElementById(&#39;friend-posts&#39;).innerHTML = &#39;DOMContentLoaded&#39;;
  //randomPost();
  let allPosts = [];
  let rssURls = [&#39;https://lruihao.cn/index.xml&#39;
  ,&#39;https://geekswg.js.cool/index.xml&#39;
  ,&#39;https://fixit.lruihao.cn/zh-cn/index.xml&#39;
  ,&#39;https://lewky.cn/index.xml&#39;
  ];
  //rssPosts(&#34;https://lruihao.cn/index.xml&#34;,2,allPosts);
  rssURls.forEach(rssURl=&gt;{
    rssPosts(rssURl,5,allPosts);
  });
  
});
//获取订阅地址文章
function rssPosts (rssURl,postCount,allPosts){
  fetch(rssURl,{
      &#34;Access-Control-Allow-Origin&#34; : &#34;*&#34;,
      &#34;Access-Control-Allow-Credentials&#34; : true,
    }).then(res=&gt;res.text()).then(str=&gt;(new window.DOMParser()).parseFromString(str, &#34;text/xml&#34;)).then(data=&gt;{
        //alert(&#39;fetch-data=&gt;&#39;&#43; xml2String(data));
        //解析rssxml
        let eles = data.getElementsByTagName(&#39;item&#39;);
        if(eles.length &lt;1){
          eles = data.getElementsByTagName(&#39;entry&#39;);
        }
        //alert(&#39;eles.length=&gt;&#39;&#43; eles.length);
        let count = eles.length &gt; postCount ? postCount : eles.length;
        for(let i=0; i&lt;count; i&#43;&#43;){
          let title = eles[i].getElementsByTagName(&#39;title&#39;)[0].innerHTML;
          let link = eles[i].getElementsByTagName(&#39;link&#39;)[0].innerHTML;
          let description = eles[i].getElementsByTagName(&#39;description&#39;)[0].innerHTML;
          let pubDate = eles[i].getElementsByTagName(&#39;pubDate&#39;)[0].innerHTML;
          let author = eles[i].getElementsByTagName(&#39;author&#39;)[0].innerHTML;
          let post = {};
          post.title = title;
          post.link = link;
          post.description = description;
          post.pubDate = pubDate;
          post.author = author;
          allPosts.push(post);
          appendShowPost(&#39;friend-posts&#39;,post );
        }
    }
    )
}
function appendShowPost(eleID,post){
  let ele = document.getElementById(eleID);
  ele.innerHTML = ele.innerHTML &#43; 
  &#39;&lt;div style=&#34;width:200px;&#34;&gt;&lt;a href=&#34;&#39;
  &#43; post.link &#43; &#39;&#34;&gt; &lt;h4&gt;&#39;&#43; post.title &#43;&#39;&lt;/h4&gt;&lt;p&gt;&#39;&#43; post.author &#43;&#39;&lt;/p&gt;&lt;p&gt;&#39;&#43; formatDateStr(post.pubDate) &#43;&#39;&lt;/p&gt;&#39;
  //&#43;&#39;&lt;p&gt;&#39;&#43; post.description.slice(0.20) &#43; &#39;&lt;/p&gt;&#39;
  &#43;&#39;&lt;/a&gt;&lt;/div&gt;&#39;;
}

function formatDateStr(str){
  // 给定的日期字符串
  var dateString = &#39;Wed, 17 Jan 2024 14:57:48 &#43;0800&#39;;
  // 创建 Date 对象并解析日期
  var date = new Date(str);
  // 获取日期的各个部分
  var year = date.getFullYear();
  var month = (&#39;0&#39; &#43; (date.getMonth() &#43; 1)).slice(-2);
  var day = (&#39;0&#39; &#43; date.getDate()).slice(-2);
  var hours = (&#39;0&#39; &#43; date.getHours()).slice(-2);
  var minutes = (&#39;0&#39; &#43; date.getMinutes()).slice(-2);
  var seconds = (&#39;0&#39; &#43; date.getSeconds()).slice(-2);
  // 格式化日期
  var formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
}
function xml2String(xmlObject) {
  //所有浏览器统一用这种方式处理(因为高版本的浏览器都支持)
  return (new XMLSerializer()).serializeToString(xmlObject);
}

&lt;/script&gt;


---

> 作者:   
> URL: https://geekswg.github.io/friends/  

