# 友链


<!-- When you set data `friends.yml` in `yourProject/data/` directory, it will be automatically loaded here. -->
---
<!-- You can define additional content below for this page. -->
## Base info 友链格式

```yaml
- nickname: geekswg
  avatar: https://geekswg.github.io/images/avatar.jpg
  url: https://geekswg.github.io
  description: 毕少侠也在江湖。
```
> 提示

{{< admonition info "FixIt主题 添加友链方法" >}}
在项目 /data/friends.yml 添加如下格式
```yaml
- nickname: geekswg
  avatar: https://geekswg.github.io/images/avatar.jpg
  url: https://geekswg.github.io
  description: 毕少侠也在江湖。
```
{{< /admonition >}}


{{< admonition tip "添加您的 FixIt 网站" >}}
您可以通过 [创建 PR :(fa-solid fa-code-branch fa-fw):](https://github.com/geekswg/blogFixit/pulls) 或 [编辑数据 :(fa-regular fa-pen-to-square fa-fw):](https://github.com/geekswg/blogFixit/edit/master/data/friends.yml)  按 **nickname** 以字典顺序将您的 FixIt 网站添加到此页面，格式如下：

```yml
- nickname: <your nickname>
  avatar: <your avatar>
  url: <your site link>
  description: <description of your site>
```

> :(fa-solid fa-exclamation-triangle): *网站失效、停止维护、不当内容都可能被取消链接！*
{{< /admonition >}}

## 朋友圈

<div id="friend-posts" style="display: flex;flex-direction: row; flex-wrap: wrap;  ">
</div>

## 随机文章

<script>
document.addEventListener('DOMContentLoaded', () => {
  //alert('DOMContentLoaded');
  //document.getElementById('friend-posts').innerHTML = 'DOMContentLoaded';
  //randomPost();
  let allPosts = [];
  let rssURls = ['https://lruihao.cn/index.xml'
  ,'https://geekswg.js.cool/index.xml'
  ,'https://fixit.lruihao.cn/zh-cn/index.xml'
  ,'https://lewky.cn/index.xml'
  ];
  //rssPosts("https://lruihao.cn/index.xml",2,allPosts);
  rssURls.forEach(rssURl=>{
    rssPosts(rssURl,5,allPosts);
  });
  
});
//获取订阅地址文章
function rssPosts (rssURl,postCount,allPosts){
  fetch(rssURl,{
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Credentials" : true,
    }).then(res=>res.text()).then(str=>(new window.DOMParser()).parseFromString(str, "text/xml")).then(data=>{
        //alert('fetch-data=>'+ xml2String(data));
        //解析rssxml
        let eles = data.getElementsByTagName('item');
        if(eles.length <1){
          eles = data.getElementsByTagName('entry');
        }
        //alert('eles.length=>'+ eles.length);
        let count = eles.length > postCount ? postCount : eles.length;
        for(let i=0; i<count; i++){
          let title = eles[i].getElementsByTagName('title')[0].innerHTML;
          let link = eles[i].getElementsByTagName('link')[0].innerHTML;
          let description = eles[i].getElementsByTagName('description')[0].innerHTML;
          let pubDate = eles[i].getElementsByTagName('pubDate')[0].innerHTML;
          let author = eles[i].getElementsByTagName('author')[0].innerHTML;
          let post = {};
          post.title = title;
          post.link = link;
          post.description = description;
          post.pubDate = pubDate;
          post.author = author;
          allPosts.push(post);
          appendShowPost('friend-posts',post );
        }
    }
    )
}
function appendShowPost(eleID,post){
  let ele = document.getElementById(eleID);
  ele.innerHTML = ele.innerHTML + 
  '<div style="width:200px;"><a href="'
  + post.link + '"> <h4>'+ post.title +'</h4><p>'+ post.author +'</p><p>'+ formatDateStr(post.pubDate) +'</p>'
  //+'<p>'+ post.description.slice(0.20) + '</p>'
  +'</a></div>';
}

function formatDateStr(str){
  // 给定的日期字符串
  var dateString = 'Wed, 17 Jan 2024 14:57:48 +0800';
  // 创建 Date 对象并解析日期
  var date = new Date(str);
  // 获取日期的各个部分
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);
  var hours = ('0' + date.getHours()).slice(-2);
  var minutes = ('0' + date.getMinutes()).slice(-2);
  var seconds = ('0' + date.getSeconds()).slice(-2);
  // 格式化日期
  var formattedDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
}
function xml2String(xmlObject) {
  //所有浏览器统一用这种方式处理(因为高版本的浏览器都支持)
  return (new XMLSerializer()).serializeToString(xmlObject);
}

</script>



<div class="preview-box" id="previewBox">
  <img src="" alt="预览图" id="previewImage">
</div>
<style>
  .preview-link {
    position: relative;
    text-decoration: none;
    color: #3498db;
}
.preview-box {
    display: none; /* 默认隐藏 */
    position: absolute;
    width: 200px;
    height: 150px;
    border: 1px solid #ddd;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    background-color: #fff;
    z-index: 10;
}
.preview-box img {
    width: 100%;
    height: 100%;
}
</style>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const previewBox = document.getElementById("previewBox");
    const previewImage = document.getElementById("previewImage");
    document.querySelectorAll(".friend-link").forEach(link => {
        link.addEventListener("mouseenter", (e) => {
            //const imageSrc = link.getAttribute("data-preview");
            previewImage.src = "https://image.thum.io/get/"+link.href;
            previewBox.style.display = "block";
        });
        link.addEventListener("mousemove", (e) => {
            previewBox.style.top = `${e.pageY-150}px`;
            previewBox.style.left = `${e.pageX-150}px`;
        });
        link.addEventListener("mouseleave", () => {
            previewBox.style.display = "none";
        });
    });
});
</script>


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/friends/  

