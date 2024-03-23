# Fixit-主题美化记录


{{&lt; admonition quote &#34;说明&#34; true &gt;}}
记录自己博客主题的修改和美化记录
{{&lt; /admonition &gt;}}
&gt; 本文阅读前，基于你已经了解hugo，并且使用Fixit主题成功搭建成功后，如还不了解相关内容请访问👉 [FixIt 主题文档](https://fixit.lruihao.cn/zh-cn/) 了解。
&gt; &lt;small&gt;*关于 [FixIt 主题](https://github.com/hugo-fixit/FixIt) 的问题，请移步 [FixIt 官网](https://fixit.lruihao.cn) 相关文章哦～*&lt;/small&gt;
&lt;!--more--&gt;

## 首页-home

    首页个人头像添加 snake 动画特效 背景
&gt; 参考 [动态贪吃蛇特效Github地址](https://github.com/Platane/snk)


## 自定义css

&gt; 文件位置 /assets/css/_custom.scss

### div滚动条样式
```css
/************************** div 滚动条样式设定 **************************/
div{
  scrollbar-width: none; /*火狐隐藏滚动条*/
  /* scrollbar-color: transparent transparent;*/
  /* scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent; */
  /* 上面注释的是让滚动条变透明的 */
}
/** div 滚动条样式设定 */
div::-webkit-scrollbar {  /* 仅对webkit内核浏览器生效如 chrome edge */
  width: 1px; /* 高宽分别对应横竖滚动条的尺寸,1px为了方便查看，如果不想显示填0 */
  height: 1px; /* 高度参数没有作用可不写 */
  /*display: none;*/ /*隐藏滚动条*/
}
/************************** div 滚动条样式设定 **************************/
```


### 自定义文章网格背景

&gt; 在`/assets/css/_custom.scss`文件中添加如下代码：

```css {title=&#34;/assets/css/_custom.scss&#34;}
/** 添加网格背景 */
.single {
  .single-subtitle {
    color: #57606a;
  }

  .content {
    background-image: linear-gradient(90deg, rgba(60, 10, 30, .04) 3%, transparent 0), linear-gradient(1turn, rgba(60, 10, 30, .04) 3%, transparent 0);
    background-size: 20px 20px;
    background-position: center;
  
    [data-theme=&#39;dark&#39;] &amp; {
      background-image: linear-gradient(90deg, rgba(195, 245, 215, .04) 3%, transparent 0), linear-gradient(1turn, rgba(195, 245, 215, .04) 3%, transparent 0);
    }
  }
}
```

## 自定义js

&gt; 文件位置 assets/js/custom.js [我的自定义custom.js](https://github.com/geekswg/geekswg.github.io/blob/main/js/custom.min.js)

### console打印样式

&gt; console. 花样打印信息，让你的控制台更加高端大气上档次。

```js
this.consoleInfo = () =&gt; {
      var myConsole = {
        log: function (s, css) {
            css = (css == undefined) ? &#34;color:#fff7d3;background-color:#ff4f49;font-size:12px;&#34; : css;
            console.log(&#34;%c%s&#34;, css, s);
        },
        green: function (s, css) {
            css = (css == undefined) ? &#34;color:#fff7d3;background-color:#33a600;font-size:12px;&#34; : css;
            console.log(&#34;%c%s&#34;, css, s);
        },
        blue: function (s, css) {
            css = (css == undefined) ? &#34;color:#fff7d3;background-color:#00768f;font-size:12px;&#34; : css;
            console.log(&#34;%c%s&#34;, css, s);
        },
        violet: function (s, css) {
            css = (css == undefined) ? &#34;color:#fff7d3;background-color:#79008f;font-size:12px;padding:10px;&#34; : css;
            console.log(&#34;%c%s&#34;, css, s);
        },
        img: function(imgUrl,width,height){
          width = (width == undefined) ? &#39;100px&#39;:width;
          height = (height == undefined) ? &#39;100px&#39;:height;
          console.log(&#34;%c  &#34;, 
          &#34;background-image:url(&#34;&#43;imgUrl&#43;&#34;);&#34;&#43;
          &#34;line-height:&#34;&#43;height&#43;&#34;;font-size:&#34;&#43;width&#43;&#34;;background-size: contain;&#34;);
        }
      }
      myConsole.violet(
        &#34; Talk is cheap, Show me the code. \n&#34;&#43;
        &#34;                       --Linux 的创始人 Linus Torvalds &#34;
      );
      console.log(
        &#39;%c 毕少侠 | https://geekswg.github.io %c e-mail: mailto://geekswg@qq.com %c&#39;,
        &#39;color: #FF0000; background: #4bffba; padding:5px 0; border-radius: 5px 5px 5px 5px;&#39;,
        &#39;background: #fadfa3; padding:5px 0; border-radius: 5px 5px 5px 5px;&#39;,
        &#39;&#39;
      );
      myConsole.blue(
      &#39;____________________________________________\n&#39;&#43;
      &#39;                      /                     \n&#39;&#43;
      &#39;----__----__----__---/-__---__-----------__-\n&#39;&#43;
      &#39;  /   ) /___) /___) /(     (_ `| /| /  /   )\n&#39;&#43;
      &#39;_(___/_(___ _(___ _/___\\__(__)_|/_|/__(___/_\n&#39;&#43;
      &#39;    /                                    /  \n&#39;&#43;
      &#39;(_ /                                 (_ /   \n&#39;&#43;
      &#39;————————————————————————————————————————————&#39;
      );
      myConsole.img(&#39;http://geekswg.js.cool/images/posts/featured-image-preview.jpg&#39;,&#39;264px&#39;,&#39;100px&#39;);
      return this;
    };
```

在线工具：
&gt; 在线生成ascii字符画的网站
1.  http://patorjk.com/software/taag
2.  https://tool.lu/asciipainting

&gt; 图片生成字符画：
1. http://life.chacuo.net/convertphoto2char
2. https://www.degraeve.com/img2txt.php

&gt; 图片生成字符画：
1. 

参考：
Console相关文档 https://developer.mozilla.org/zh-CN/docs/Web/API/Console

### 添加鼠标点击特效

&gt; 在自定义js中添加自己想要的鼠标点击特效的实现

:point_down:

```html
// =====鼠标特效
function clickEffect() {
  console.log(&#39;初始化鼠标特效-clickEffect!&#39;);
  let balls = [];
  let longPressed = false;
  let longPress;
  let multiplier = 0;
  let width,
  height;
  let origin;
  let normal;
  let ctx;
  const colours = [&#34;#F73859&#34;, &#34;#14FFEC&#34;, &#34;#00E0FF&#34;, &#34;#FF99FE&#34;, &#34;#FAF15D&#34;];
  const canvas = document.createElement(&#34;canvas&#34;);
  document.body.appendChild(canvas);
  canvas.setAttribute(&#34;style&#34;, &#34;width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;&#34;);
  const pointer = document.createElement(&#34;span&#34;);
  pointer.classList.add(&#34;pointer&#34;);
  document.body.appendChild(pointer);
  if (canvas.getContext &amp;&amp; window.addEventListener) {
      ctx = canvas.getContext(&#34;2d&#34;);
      updateSize();
      window.addEventListener(&#39;resize&#39;, updateSize, false);
      loop();
      window.addEventListener(&#34;mousedown&#34;, function (e) {
          pushBalls(randBetween(10, 20), e.clientX, e.clientY);
          document.body.classList.add(&#34;is-pressed&#34;);
          longPress = setTimeout(function () {
              document.body.classList.add(&#34;is-longpress&#34;);
              longPressed = true;
          }, 500);
      }, false);
      window.addEventListener(&#34;mouseup&#34;, function (e) {
          clearInterval(longPress);
          if (longPressed == true) {
              document.body.classList.remove(&#34;is-longpress&#34;);
              pushBalls(randBetween(50 &#43; Math.ceil(multiplier), 100 &#43; Math.ceil(multiplier)), e.clientX, e.clientY);
              longPressed = false;
          }
          document.body.classList.remove(&#34;is-pressed&#34;);
      }, false);
      window.addEventListener(&#34;mousemove&#34;, function (e) {
          let x = e.clientX;
          let y = e.clientY;
          pointer.style.top = y &#43; &#34;px&#34;;
          pointer.style.left = x &#43; &#34;px&#34;;
      }, false);
  } else {
      console.log(&#34;canvas or addEventListener is unsupported!&#34;);
  }

  function updateSize() {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = window.innerWidth &#43; &#39;px&#39;;
      canvas.style.height = window.innerHeight &#43; &#39;px&#39;;
      ctx.scale(2, 2);
      width = (canvas.width = window.innerWidth);
      height = (canvas.height = window.innerHeight);
      origin = {
          x: width / 2,
          y: height / 2
      };
      normal = {
          x: width / 2,
          y: height / 2
      };
  }
  class Ball {
      constructor(x = origin.x, y = origin.y) {
          this.x = x;
          this.y = y;
          this.angle = Math.PI * 2 * Math.random();
          if (longPressed == true) {
              this.multiplier = randBetween(14 &#43; multiplier, 15 &#43; multiplier);
          } else {
              this.multiplier = randBetween(6, 12);
          }
          this.vx = (this.multiplier &#43; Math.random() * 0.5) * Math.cos(this.angle);
          this.vy = (this.multiplier &#43; Math.random() * 0.5) * Math.sin(this.angle);
          this.r = randBetween(8, 12) &#43; 3 * Math.random();
          this.color = colours[Math.floor(Math.random() * colours.length)];
      }
      update() {
          this.x &#43;= this.vx - normal.x;
          this.y &#43;= this.vy - normal.y;
          normal.x = -2 / window.innerWidth * Math.sin(this.angle);
          normal.y = -2 / window.innerHeight * Math.cos(this.angle);
          this.r -= 0.3;
          this.vx *= 0.9;
          this.vy *= 0.9;
      }
  }
  function pushBalls(count = 1, x = origin.x, y = origin.y) {
      for (let i = 0; i &lt; count; i&#43;&#43;) {
          balls.push(new Ball(x, y));
      }
  }
  function randBetween(min, max) {
      return Math.floor(Math.random() * max) &#43; min;
  }
  function loop() {
      ctx.fillStyle = &#34;rgba(255, 255, 255, 0)&#34;;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i &lt; balls.length; i&#43;&#43;) {
          let b = balls[i];
          if (b.r &lt; 0)
              continue;
          ctx.fillStyle = b.color;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
          ctx.fill();
          b.update();
      }
      if (longPressed == true) {
          multiplier &#43;= 0.2;
      } else if (!longPressed &amp;&amp; multiplier &gt;= 0) {
          multiplier -= 0.4;
      }
      removeBall();
      requestAnimationFrame(loop);
  }
  function removeBall() {
      for (let i = 0; i &lt; balls.length; i&#43;&#43;) {
          let b = balls[i];
          if (b.x &#43; b.r &lt; 0 || b.x - b.r &gt; width || b.y &#43; b.r &lt; 0 || b.y - b.r &gt; height || b.r &lt; 0) {
              balls.splice(i, 1);
          }
      }
  }
}
// =====鼠标特效
```

### 动态设置网站title

&gt; 动态设置网站title，当网页失去焦点时改变网页title，引起用户注意，让用户回来继续浏览。

```js
//自动设置网站标题
function autSetTitle(){
  console.log(&#39;初始化-autSetTitle() =&gt; &#39; &#43;document.title);
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener(&#39;visibilitychange&#39;, function() {
    if(document.hidden) {
      //$(&#39;[rel=&#34;icon&#34;]&#39;).attr(&#39;href&#39;, &#34;/failure.ico&#34;);
      //$(&#39;[rel=&#34;shortcut icon&#34;]&#39;).attr(&#39;href&#39;, &#34;/failure.ico&#34;);
      //document.title = &#39;喔唷，崩溃啦！&#39;;
      document.title = &#39; 😂去哪里了！&#39;;
      clearTimeout(titleTime);
    } else {
      //$(&#39;[rel=&#34;icon&#34;]&#39;).attr(&#39;href&#39;, &#34;/favicon-32x32.ico&#34;);
      //$(&#39;[rel=&#34;shortcut icon&#34;]&#39;).attr(&#39;href&#39;, &#34;/favicon-32x32.ico&#34;);
      document.title = &#39; 😍欢迎回来！&#39;;
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
    }
  });
}

```

### 代码块部分折叠功能

&gt; 自定义`assets/js/codeblock.js`,然后在配置文件`params.yml`中引入该js即可。
```js {title=&#34;assets/js/codeblock.js&#34;}
/**
 * 代码块超过指定高度自动折叠Y
 */
document.addEventListener(&#39;DOMContentLoaded&#39;, () =&gt; {
    CodeBlock.init(&#39;hello world&#39;)
});

const CodeBlock = {
    maxHeight: 512, //px
    //当 overflow-x 值为 hidden、scroll 或者 auto，而本属性的值为 visible（默认值）时，本属性会被隐式的计算为 auto。
    overflowY: &#39;auto&#39;,  // visible ,hidden
    initCodeBlockOverflowY:function(overflowHeight,overflowY){
        overflowY = overflowY || CodeBlock.overflowY;
        overflowHeight = overflowHeight || CodeBlock.maxHeight;
        eles = document.getElementsByClassName(&#39;highlight&#39;);
        eles = Array.from(eles);
        //console.log(eles);
        eles.forEach(function(ele, index, eles) {
            //console.log(ele, index);
            //console.info(&#39;ele.offsetHeight = &#39;,ele.offsetHeight);
            let origalHeight = ele.offsetHeight;
            if(ele.offsetHeight &gt; overflowHeight){
                //console.log(&#39;#&#39;&#43;ele.id&#43;&#39;&gt;.chroma.open&gt;.table-wrapper&#39;);
                let curEle = document.querySelector(&#39;#&#39;&#43;ele.id&#43;&#39;&gt;.chroma.open&gt;.table-wrapper&#39;);
                //console.log(curEle);
                curEle.style.height = overflowHeight &#43; &#39;px&#39;;
                curEle.style.overflowY = overflowY;
                curEle.append();
                
                let showMoreDiv = document.createElement(&#39;div&#39;);
                showMoreDiv.id = ele.id&#43;&#39;-more&#39;;
                
                showMoreDiv.style.cssText = &#39;margin-top: -24px;position:sticky;z-index:99;background-image: linear-gradient(to top, #9c9c9c, transparent);text-align: center;cursor: pointer;&#39;;
                showMoreDiv.innerHTML = &#39;&lt;i class=&#34;fa-solid fa-angles-down fa-beat-fade&#34; style=&#34;font-size:20px;&#34;&gt;&lt;/i&gt;&#39;;
                ele.appendChild(showMoreDiv);
                showMoreDiv.addEventListener(&#39;click&#39;, function(){
                    if(showMoreDiv.innerHTML.indexOf(&#39;fa-angles-down&#39;) &gt;= 0 ){
                        curEle.style.height = origalHeight &#43; &#39;px&#39;;
                        showMoreDiv.innerHTML = &#39;&lt;i class=&#34;fa-solid fa-angles-up fa-beat-fade&#34; style=&#34;font-size:20px;&#34;&gt;&lt;/i&gt;&#39;;
                        showMoreDiv.style.cssText = &#39;margin-top: -56px;position:sticky;z-index:99;background-image: linear-gradient(to top, #9c9c9c, transparent);text-align: center;cursor: pointer;&#39;;
                        
                    }else{
                        curEle.style.height = overflowHeight &#43; &#39;px&#39;;
                        showMoreDiv.innerHTML = &#39;&lt;i class=&#34;fa-solid fa-angles-down fa-beat-fade&#34; style=&#34;font-size:20px;&#34;&gt;&lt;/i&gt;&#39;;
                        showMoreDiv.style.cssText = &#39;margin-top: -24px;position:sticky;z-index:99;background-image: linear-gradient(to top, #9c9c9c, transparent);text-align: center;cursor: pointer;&#39;;
                        window.scrollTo({top:ele.offsetTop, behavior: &#39;smooth&#39;});
                    }
                    
                });
            }
        });
    },

    hello: function(msg){
        console.info(&#39;CodeBlock.hello()=%s, by geekswg&#39;,msg);
    },
    init : function(args){
        this.hello(args);
        this.initCodeBlockOverflowY(512,&#39;auto&#39;);// unit px
    }
}
```
&gt; yml配置修改如下
```yml {title=&#34;config/default/params.yml&#34;}
# Third-party library config
  # 第三方库配置
  library:
      # someCSS = &#34;some.css&#34;
      # located in &#34;assets/&#34; 位于 &#34;assets/&#34;
      # Or 或者
      # someCSS = &#34;https://cdn.example.com/some.css&#34;
    css: {}

    js:
      jquery-min: https://libs.baidu.com/jquery/2.1.4/jquery.min.js
      codeblockjs: js/codeblock.js
      #someJavascript = &#34;js/jquery-3.6.3.min.js&#34;
      # someJavascript = &#34;some.js&#34;
      # located in &#34;assets/&#34; 位于 &#34;assets/&#34;
      # Or 或者
      # someJavascript = &#34;https://cdn.example.com/some.js&#34;
      #dayjs = &#34;js/dayjs.min.js&#34;
```

## 侧边栏-aside

&gt; 对应自定义文件 layouts/partials/custom/aside.html 

自定义aside.html

### 添加天气插件

&gt; 在 aside.html中添加
参考链接 {{&lt; link &#34;https://tianqi.2345.com/plugin/&#34; &#34;2345天气插件&#34; &#34;title&#34; false &gt;}}

```html
&lt;iframe allowtransparency=&#34;true&#34; frameborder=&#34;0&#34; width=&#34;140&#34; height=&#34;278&#34; scrolling=&#34;no&#34; 
src=&#34;//tianqi.2345.com/plugin/widget/index.htm?s=2&amp;z=3&amp;t=1&amp;v=1&amp;d=3&amp;bd=0&amp;k=&amp;f=&amp;ltf=009944&amp;htf=cc0000&amp;q=1&amp;e=1&amp;a=1&amp;c=54511&amp;w=140&amp;h=278&amp;align=center&#34;&gt;
&lt;/iframe&gt;  
```

### 添加一言

&gt; 插件地址 [一言](https://v1.hitokoto.cn/)

```html
{{/*  添加 一言 https://v1.hitokoto.cn/  */}}
&lt;!-- 本例不能添加链接内容，放在此处只是因为此接口比较方便，也许能够解决大部分的需求 --&gt;
&lt;script src=&#34;https://v1.hitokoto.cn/?encode=js&amp;select=%23hitokoto&#34; defer&gt;&lt;/script&gt;
&lt;!-- 请注意，以下的示例包含超链接，您可能需要手动配置样式使其不变色。如果您嫌麻烦，可以移除。 --&gt;
&lt;p id=&#34;hitokoto&#34; style=&#39;color:red;font-family: MMT,&#34;沐目体&#34;;font-size:20px;&#39;&gt;
    &lt;a href=&#34;#&#34; id=&#34;hitokoto_text&#34;&gt;:D 获取中...&lt;/a&gt;
&lt;/p&gt;
```

### 添加音乐插件

&gt; 插件地址 [MetingJS](https://github.com/metowolf/MetingJS)

```html
&lt;!-- require APlayer 添加侧边栏音乐 暂时于目录冲突找不到原因，注释了 --&gt;
&lt;link rel=&#34;stylesheet&#34; href=&#34;https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css&#34;&gt;
&lt;script src=&#34;https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js&#34;&gt;&lt;/script&gt;
&lt;!-- require MetingJS --&gt;
&lt;script src=&#34;https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js&#34;&gt;&lt;/script&gt;
&lt;meting-js
	server=&#34;netease&#34;
	type=&#34;playlist&#34; list-folded=true order=&#34;random&#34;
	id=&#34;6678743774&#34; volume=&#34;0.2&#34; list-max-height=&#34;340px&#34; &gt;
&lt;/meting-js&gt;
```

## 头部自定义

&gt; layouts/partials/header.html 主要修改文件，如果文件不存在，则去你使用的主题目录下找到该文件，复制到自己的site对应的路径下。

### 添加菜单按钮

&gt; 自定义 layouts/partials/header.html 找到需要添加的位置

{{&lt; admonition tip &#34;提示&#34; true &gt;}}
这里是菜单文件的样式，注意这里面有PC端和移动端的，如果要双端都要添加，在对应的两个地方同时加上。
{{&lt; /admonition &gt;}}

### 添加版娘

&gt; 在项目 layouts/partials/header.html 最底部 中添加

:point_down: 点击下方查看代码

```html
&lt;!-- 板娘 https://github.com/stevenjoezhang/live2d-widget --&gt; 
&lt;link rel=&#34;stylesheet&#34; href=&#34;https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css&#34;&gt;
&lt;!--
&lt;script src=&#34;https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js&#34;&gt;&lt;/script&gt;
--&gt;
&lt;script type=&#34;text/javascript&#34;&gt;
// live2d_path 参数建议使用绝对路径
const live2d_path = &#34;https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/&#34;;
//const live2d_path = &#34;/live2d-widget/&#34;;

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) =&gt; {
		let tag;

		if (type === &#34;css&#34;) {
			tag = document.createElement(&#34;link&#34;);
			tag.rel = &#34;stylesheet&#34;;
			tag.href = url;
		}
		else if (type === &#34;js&#34;) {
			tag = document.createElement(&#34;script&#34;);
			tag.src = url;
		}
		if (tag) {
			tag.onload = () =&gt; resolve(url);
			tag.onerror = () =&gt; reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width &gt;= 100) {
	Promise.all([
		loadExternalResource(live2d_path &#43; &#34;waifu.css&#34;, &#34;css&#34;),
		loadExternalResource(live2d_path &#43; &#34;live2d.min.js&#34;, &#34;js&#34;),
		loadExternalResource(live2d_path &#43; &#34;waifu-tips.js&#34;, &#34;js&#34;)
	]).then(() =&gt; {
		// 配置选项的具体用法见 README.md
		initWidget({
			waifuPath: live2d_path &#43; &#34;waifu-tips.json&#34;,
			//apiPath: &#34;https://live2d.fghrsh.net/api/&#34;, 
			//cdnPath: &#34;https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/&#34;,
			cdnPath: &#34;https://live2d.fghrsh.net/api/&#34;,
			tools: [&#34;hitokoto&#34;, &#34;asteroids&#34;, &#34;switch-model&#34;, &#34;switch-texture&#34;, &#34;photo&#34;, &#34;info&#34;, &#34;quit&#34;]
		});
	});
}

console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ &#39;, !-─‐-i  /  /´
           ／｀ｰ&#39;       L/／｀ヽ､
         /   ／,   /|   ,   ,       &#39;,
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ&#39;ｧ-ﾄ､!ハ|   |
          !,/7 &#39;0&#39;     ´0iソ|    |
          |.从&#34;    _     ,,,, / |./    |
          ﾚ&#39;| i＞.､,,__  _,.イ /   .i   |
            ﾚ&#39;| | / k_７_/ﾚ&#39;ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ&gt;､ﾊ    _,.ﾍ､    /､!
              !&#39;〈//｀Ｔ´&#39;, ＼ ｀&#39;7&#39;ｰr&#39;
              ﾚ&#39;ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  &#39;ｰ&#39;    !_,.:
`);
&lt;/script&gt;
```

## 页脚-footer

&gt; 添加十年之约 和 开往友链 的链接

{{&lt; link &#34;https://www.travellings.cn&#34; &#34;开往&#34; &#34;title&#34; false &gt;}}
{{&lt; link &#34;https://www.foreverblog.cn/&#34; &#34;十年之约&#34; &#34;title&#34; false &gt;}}

```html { title=&#34;layouts/partials/custom/footer.html&#34; }
&lt;style&gt;
    .footerImg {
        height: 20px;  
    }
&lt;/style&gt;
&lt;div class=&#34;footer-line custom&#34;&gt;
    &lt;a href=&#34;https://www.travellings.cn&#34; target=&#34;_blank&#34;&gt;&lt;img src=&#34;/images/travelling.png&#34;  class=&#34;footerImg&#34; alt=&#34;&#34; title=&#34;开往-友链接力 v1.5&#34;&gt;&lt;/a&gt;
    &lt;a href=&#34;https://www.travellings.cn/go.html&#34; target=&#34;_blank&#34;&gt;&lt;img src=&#34;/images/travelling.gif&#34; class=&#34;footerImg&#34; alt=&#34;&#34;  title=&#34;开往-友链接力 v1.5&#34;&gt;&lt;/a&gt;
    &lt;a href=&#34;https://www.foreverblog.cn/&#34; target=&#34;_blank&#34;&gt;&lt;img src=&#34;https://img.foreverblog.cn/logo_en_default.png&#34; class=&#34;footerImg&#34; alt=&#34;&#34; &gt; &lt;/a&gt;
    &lt;a href=&#34;https://www.foreverblog.cn/go.html&#34; target=&#34;_blank&#34;&gt;&lt;img src=&#34;https://img.foreverblog.cn/wormhole_2.gif&#34; class=&#34;footerImg&#34; alt=&#34;&#34; title=&#34;穿梭虫洞-随机访问十年之约友链博客&#34;&gt;&lt;/a&gt;
&lt;/div&gt;
```

## 核心配置文件

&gt; params.toml

```toml { title=&#34;config/deafault/params.toml&#34; }
# -------------------------------------------------------------------------------------
# Theme Core Configuration | 主题核心配置
# See: https://fixit.lruihao.cn/theme-documentation-basics/#site-configuration
# -------------------------------------------------------------------------------------

# FixIt theme version
# FixIt 主题版本
version = &#34;0.2.X&#34;
# website description for RSS, SEO, Open Graph and Twitter Cards
# 网站描述, 用于 RSS, SEO, Open Graph 和 Twitter Cards
description = &#34;博客：探索、发现、分享 By geekswg-[毕少侠]&#34;
# site keywords
# 网站关键词
keywords = [&#34;geekswg&#34;,&#34;毕少侠&#34;,&#34;博客&#34;,&#34;Github&#34;,&#34;Hugo&#34;, &#34;LoveIt&#34;,&#34;FixIt&#34;]
# site default theme [&#34;light&#34;, &#34;dark&#34;, &#34;auto&#34;]
# 网站默认主题 [&#34;light&#34;, &#34;dark&#34;, &#34;auto&#34;]
defaultTheme = &#34;auto&#34;
# public git repo url only then enableGitInfo is true
# 公共 git 仓库路径，仅在 enableGitInfo 设为 true 时有效
gitRepo = &#34;https://github.com/geekswg/blogFixit&#34;
# which hash function used for SRI, when empty, no SRI is used [&#34;sha256&#34;, &#34;sha384&#34;, &#34;sha512&#34;, &#34;md5&#34;]
# 哪种哈希函数用来 SRI, 为空时表示不使用 SRI [&#34;sha256&#34;, &#34;sha384&#34;, &#34;sha512&#34;, &#34;md5&#34;]
fingerprint = &#34;&#34;
# date format
# 日期格式
dateFormat = &#34;2006-01-02&#34;
# website images for Open Graph and Twitter Cards
# 网站图片, 用于 Open Graph 和 Twitter Cards
images = [&#34;/images/avatar.png&#34;]
# FixIt 0.2.12 | NEW enable PWA
# FixIt 0.2.12 | 新增 开启 PWA 支持
enablePWA = true
# whether to add external Icon for external links automatically since v0.2.14
# 是否自动显示外链图标 since v0.2.14
externalIcon = true
# FixIt will, by default, inject a theme meta tag in the HTML head on the home page only. since v0.2.14
# You can turn it off, but we would really appreciate if you don’t, as this is a good way to watch FixIt&#39;s popularity on the rise.
# 默认情况下，FixIt 只会在主页的 HTML 头中注入主题元标记。since v0.2.14
# 您可以将其关闭，但如果您不这样做，我们将不胜感激，因为这是观察 FixIt 受欢迎程度上升的好方法。
disableThemeInject = false

# App icon config
# 应用图标配置
[app]
  # optional site title override for the app when added to an iOS home screen or Android launcher
  # 当添加到 iOS 主屏幕或者 Android 启动器时的标题, 覆盖默认标题
  title = &#34;毕少侠APP&#34;
  # whether to omit favicon resource links
  # 是否隐藏网站图标资源链接
  noFavicon = false
  # modern SVG favicon to use in place of older style .png and .ico files
  # 更现代的 SVG 网站图标, 可替代旧的 .png 和 .ico 文件 #设置网站logo的 favicon
  svgFavicon = &#34;/favicon.svg&#34;
  # Safari mask icon color
  # Safari 图标颜色
  iconColor = &#34;#5bbad5&#34;
  # Windows v8-10 tile color
  # Windows v8-10 磁贴颜色
  tileColor = &#34;#da532c&#34;
  # Android browser theme color
  # Android 浏览器主题色
  [app.themeColor]
    light = &#34;#f8f8f8&#34;
    dark = &#34;#252627&#34;

# Search config
# 搜索配置
[search]
  enable = true
  # type of search engine [&#34;lunr&#34;, &#34;algolia&#34;, &#34;fuse&#34;]
  # 搜索引擎的类型 [&#34;lunr&#34;, &#34;algolia&#34;, &#34;fuse&#34;]
  type = &#34;fuse&#34;
  # max index length of the chunked content
  # 文章内容最长索引长度
  contentLength = 9999000
  # placeholder of the search bar
  # 搜索框的占位提示语
  placeholder = &#34;输入关键词搜索&#34;
  # max number of results length
  # 最大结果数目
  maxResultLength = 10
  # snippet length of the result
  # 结果内容片段长度
  snippetLength = 30
  # HTML tag name of the highlight part in results
  # 搜索结果中高亮部分的 HTML 标签
  highlightTag = &#34;em&#34;
  # whether to use the absolute URL based on the baseURL in search index
  # 是否在搜索索引中使用基于 baseURL 的绝对路径
  absoluteURL = false
  [search.algolia]
    index = &#34;&#34;
    appID = &#34;&#34;
    searchKey = &#34;&#34;
  [search.fuse]
    # FixIt 0.2.17 | NEW https://fusejs.io/api/options.html
    isCaseSensitive = false
    minMatchCharLength = 2
    findAllMatches = false
    location = 0
    threshold = 0.3
    distance = 100
    ignoreLocation = true
    useExtendedSearch = true
    ignoreFieldNorm = true

# Header config
# 页面头部导航栏配置
[header]
  # desktop header mode [&#34;sticky&#34;, &#34;normal&#34;, &#34;auto&#34;]
  # 桌面端导航栏模式 [&#34;sticky&#34;, &#34;normal&#34;, &#34;auto&#34;]
  desktopMode = &#34;sticky&#34;
  # mobile header mode [&#34;sticky&#34;, &#34;normal&#34;, &#34;auto&#34;]
  # 移动端导航栏模式 [&#34;sticky&#34;, &#34;normal&#34;, &#34;auto&#34;]
  mobileMode = &#34;auto&#34;
  # Header title config
  # 页面头部导航栏标题配置
  [header.title]
    # URL of the LOGO
    # LOGO 的 URL 网页左上角logo图标配置
    logo = &#34;/images/avatar.png&#34; 
    # title name
    # 标题名称
    name = &#34;毕少侠&#34;
    # you can add extra information before the name (HTML format is supported), such as icons
    # 你可以在名称 (允许 HTML 格式) 之前添加其他信息, 例如图标
    pre = &#34;&#34;
    # you can add extra information after the name (HTML format is supported), such as icons
    # 你可以在名称 (允许 HTML 格式) 之后添加其他信息, 例如图标
    post = &#34;&#34;
    # whether to use typeit animation for title name
    # 是否为标题显示打字机动画
    typeit = false
  # Header subtitle config since v0.2.12
  # 页面头部导航栏副标题配置 since v0.2.12
  [header.subtitle]
    # subtitle name
    # 副标题名称
    name = &#34;&lt;span style=&#39;font-family: MMT,\&#34;沐目体\&#34;;&#39;&gt;也在江湖&lt;/span&gt;&#34;
    # whether to use typeit animation for subtitle name
    # 是否为副标题显示打字机动画
    typeit = true


# FixIt 0.2.18 | NEW Breadcrumb config
[breadcrumb]
  enable = true
  sticky = true
  showHome = true

# Footer config
# 页面底部信息配置
[footer]
  enable = true
  # FixIt 0.2.17 | CHANGED Custom content (HTML format is supported)
  # For advanced use, see parameter `params.customFilePath.footer`
  # FixIt 0.2.17 | 更改 自定义内容 (支持 HTML 格式)
  # 进阶使用，见参数 `params.customFilePath.footer`
  custom = &#34;&#34;
  # whether to show Hugo and theme info
  # 是否显示 Hugo 和主题信息
  hugo = true
  # whether to show copyright info
  # 是否显示版权信息
  copyright = true
  # whether to show the author
  # 是否显示作者
  author = true
  # site creation year
  # 网站创立年份
  since = 2010
  # TODO whether to show total word count of site content
  # TODO 是否显示网站内容总字数
  wordCount = true
  # Public network security only in China (HTML format is supported) since v0.2.12
  # 公网安备信息，仅在中国使用 (支持 HTML 格式) since v0.2.12
  gov = &#34;&lt;a href=&#39;https://icp.gov.moe/?keyword=20231992&#39; target=&#39;_blank&#39;&gt;&lt;img style=&#39;height:16px;margin-bottom:-3px;&#39; src=&#39;https://icp.gov.moe/images/ico64.png&#39;&gt;&lt;/a&gt;&#34;
  # ICP info only in China (HTML format is supported)
  # ICP 备案信息，仅在中国使用 (支持 HTML 格式)
  icp = &#34;&lt;a href=&#39;https://icp.gov.moe/?keyword=20231992&#39; target=&#39;_blank&#39;&gt;萌ICP备20231992号&lt;/a&gt;&#34;
  # license info (HTML format is supported)
  # 许可协议信息 (支持 HTML 格式)
  license = &#39;&#39;
  # license = &#39;&lt;a rel=&#34;license external nofollow noopener noreferrer&#34; href=&#34;https://creativecommons.org/licenses/by-nc/4.0/&#34; target=&#34;_blank&#34;&gt;CC BY-NC 4.0&lt;/a&gt;&#39;
  # FixIt 0.2.17 | CHANGED Site creation time
  # FixIt 0.2.17 | 更改 网站创立时间
  [footer.siteTime]
    enable = true
    animate = true
    icon = &#34;fa-solid fa-heartbeat fa-fw animate-icon&#34;
    pre = &#34;Runing&#34;
    value = &#34;2018-05-28T20:01:01&#43;08:00&#34;
  # FixIt 0.2.17 | NEW footer lines order, optional values: [&#34;first&#34;, 0, 1, 2, 3, 4, 5, &#34;last&#34;]
  # FixIt 0.2.17 | 新增 页面底部行排序，可选值：[&#34;first&#34;, 0, 1, 2, 3, 4, 5, &#34;last&#34;]
  [footer.order]
    copyright = &#39;first&#39;
    
    statistics = 0
    visitor = 0
    beian = 0
    custom = &#39;last&#39;
    powered = &#39;last&#39;

# Section (all posts) page config
# Section (所有文章) 页面配置
[section]
  # special amount of posts in each section page
  # section 页面每页显示文章数量
  paginate = 20
  # date format (month and day)
  # 日期格式 (月和日)
  dateFormat = &#34;2006-01-02&#34;
  # amount of RSS pages
  # RSS 文章数目
  rss = 10
  # recently updated posts settings since v0.2.13
  # 最近更新文章设置 since v0.2.13
  [section.recentlyUpdated]
    enable = true
    rss = true
    days = 30
    maxCount = 10

# List (category or tag) page config
# List (目录或标签) 页面配置
[list]
  # special amount of posts in each list page
  # list 页面每页显示文章数量
  paginate = 20
  # date format (month and day)
  # 日期格式 (月和日)
  dateFormat = &#34;2006-01-02&#34;
  # amount of RSS pages
  # RSS 文章数目
  rss = 10

# TagCloud config for tags page
# 标签云配置
[tagcloud]
  enable = true
  # Minimum font size in px
  # 以 px 为单位的最小字体大小
  min = 14
  # Maximum font size in px
  # 以 px 为单位的最大字体大小
  max = 32
  # Maximum count of posts per tag
  # 每个标签的最大帖子数
  peakCount = 10
  # Order of tags, optional values: [&#34;name&#34;, &#34;count&#34;]
  # 标签顺序，可选值：[&#34;name&#34;, &#34;count&#34;]
  orderby = &#34;name&#34;

# Home page config
# 主页配置
[home]
  # FixIt 0.2.0 | NEW amount of RSS pages
  # FixIt 0.2.0 | 新增 RSS 文章数目
  rss = 20
  # Home page profile
  # 主页个人信息
  [home.profile]
    enable = true
    # Gravatar Email for preferred avatar in home page
    # Gravatar 邮箱，用于优先在主页显示的头像
    gravatarEmail = &#34;&#34;
    # URL of avatar shown in home page
    # 主页显示头像的 URL
    avatarURL = &#34;/images/avatar.webp&#34; #图片地址/static/images/avatar.png
    # avatarURL = &#34;/images/avatar.webp&#34; 
    # FixIt 0.2.7 | CHANGED title shown in home page (HTML format is supported)
    # FixIt 0.2.7 | 更改 主页显示的网站标题（支持 HTML 格式）
    title = &#34;Every day is beautiful if you choose to see it.&#34;
    # subtitle shown in home page
    # 主页显示的网站副标题
    subtitle = &#34;如果你愿意去发现，其实每一天都很美&#34;
    # whether to use typeit animation for subtitle
    # 是否为副标题显示打字机动画
    typeit = true
    # whether to show social links
    # 是否显示社交账号
    social = true
    # FixIt 0.2.0 | NEW disclaimer (HTML format is supported)
    # FixIt 0.2.0 | 新增 免责声明（支持 HTML 格式）
    disclaimer = &#34;&#34;
  # Home page posts
  # 主页文章列表
  [home.posts]
    enable = true
    # special amount of posts in each home posts page
    # 主页每页显示文章数量
    paginate = 12

# Social config in home page
# 主页的社交信息设置
[social]
  GitHub = &#34;geekswg&#34;
  Weibo = &#34;&#34;
  Email = &#34;geekswg@qq.com&#34;
  RSS = true
  Stackoverflow = &#34;&#34;
  QQ = &#34;1101303970&#34;
  blogger = &#34;https://gavinblog.github.io/stellar/&#34;
  cnblog = &#34;geekswg&#34;
  QQGroup = &#34;&#34;
  CSDN = &#34;&#34;
  douyin = &#34;MS4wLjABAAAA7wEzz2PEAVqUc8bQxcCPGOV9r1zmjMooBHGKcVuP1Es&#34;

# Page config
# 文章页面配置
[page]
  # whether to hide a page from home page
  # 是否在主页隐藏一篇文章
  hiddenFromHomePage = false
  # whether to hide a page from search results
  # 是否在搜索结果中隐藏一篇文章
  hiddenFromSearch = false
  # whether to enable twemoji
  # 是否使用 twemoji
  twemoji = false
  # whether to enable lightgallery
  # 是否使用 lightgallery
  lightgallery = true
  # whether to enable the ruby extended syntax
  # 是否使用 ruby 扩展语法
  ruby = true
  # whether to enable the fraction extended syntax
  # 是否使用 fraction 扩展语法
  fraction = true
  # whether to enable the fontawesome extended syntax
  # 是否使用 fontawesome 扩展语法
  fontawesome = true
  # license info (HTML format is supported)
  # 许可协议信息（支持 HTML 格式）
  license = &#39;&lt;a rel=&#34;license external nofollow noopener noreferrer&#34; href=&#34;https://creativecommons.org/licenses/by-nc/4.0/&#34; target=&#34;_blank&#34;&gt;CC BY-NC 4.0&lt;/a&gt;&#39;
  # whether to show link to Raw Markdown content of the content
  # 是否显示原始 Markdown 文档内容的链接
  linkToMarkdown = true
  # whether to show the full text content in RSS
  # 是否在 RSS 中显示全文内容
  rssFullText = false
  # Page style [&#34;narrow&#34;, &#34;normal&#34;, &#34;wide&#34;, ...] since v0.2.13
  # 页面样式 [&#34;narrow&#34;, &#34;normal&#34;, &#34;wide&#34;, ...] since v0.2.13
  pageStyle = &#34;wide&#34;
  # Gravatar is force-used as the author&#39;s avatar since v0.2.14
  # 强制使用 Gravatar 作为作者头像 since v0.2.14
  gravatarForce = false
  # FixIt 0.2.17 | CHANGED Auto Bookmark Support
  # If true, save the reading progress when closing the page.
  # FixIt 0.2.17 | 更改 自动书签支持
  # 如果为true，关闭页面时保存阅读进度。
  autoBookmark = true
  # FixIt 0.2.17 | NEW whether to enable wordCount
  # FixIt 0.2.17 | 新增 是否启用字数显示
  wordCount = true
  # FixIt 0.2.17 | NEW whether to enable readingTime
  # FixIt 0.2.17 | 新增 是否开启预计阅读时间显示
  readingTime = true
  # end of post flag
  # 文章结束标志
  endFlag = &#34;-----（完）-----&#34;
  # FixIt 0.2.18 | NEW whether to enable instant.page
  # FixIt 0.2.18 | 新增 是否开启即时页面
  instantPage = true

  # Repost config since v0.2.15
  # 转载配置 since v0.2.15
  [page.repost]
    enable = false
    url = &#34;&#34;
  # Table of the contents config
  # 目录配置
  [page.toc]
    # whether to enable the table of the contents
    # 是否使用目录
    enable = true
    # whether to keep the static table of the contents in front of the post
    # 是否保持使用文章前面的静态目录
    keepStatic = false
    # whether to make the table of the contents in the sidebar automatically collapsed
    # 是否使侧边目录自动折叠展开
    auto = false
    # position of TOC [&#34;left&#34;, &#34;right&#34;] since v0.2.13
    # 目录位置 [&#34;left&#34;, &#34;right&#34;] since v0.2.13
    position = &#34;right&#34;
  # Display a message at the beginning of an article to warn the reader that its content might be expired. since v0.2.13
  # 在文章开头显示提示信息，提醒读者文章内容可能过时。 since v0.2.13
  [page.expirationReminder]
    enable = true
    # Display the reminder if the last modified time is more than 90 days ago
    # 如果文章最后更新于这天数之前，显示提醒
    reminder = 90
    # Display warning if the last modified time is more than 180 days ago
    # 如果文章最后更新于这天数之前，显示警告
    warning = 180
    # If the article expires, close the comment or not
    # 如果文章到期是否关闭评论
    closeComment = false
  # Code config
  # 代码配置
  [page.code]
    # whether to show the copy button of the code block
    # 是否显示代码块的复制按钮
    copy = true
    # whether to show the edit button of the code block since v0.2.13
    # 是否显示代码块的编辑按钮 since v0.2.13
    edit = true
    # the maximum number of lines of displayed code by default
    # 默认展开显示的代码行数
    maxShownLines = 64
  # Post edit since v0.2.14
  # 文章编辑 since v0.2.14
  [page.edit]
    enable = true
    # Link for fork &amp; edit
    # url = &#34;/edit/branch-name/subdirectory-name&#34; # base on `params.gitRepo`
    # url = &#34;https://github.com/user-name/repo-name/edit/branch-name/subdirectory-name&#34; # full url
    url = &#34;/edit/master/content&#34;
  # KaTeX mathematical formulas config (KaTeX https://katex.org/)
  # KaTeX 数学公式配置 (KaTeX https://katex.org/)
  [page.math]
    enable = false
    # default inline delimiter is $ ... $ and \( ... \)
    # 默认行内定界符是 $ ... $ 和 \( ... \)
    inlineLeftDelimiter = &#34;&#34;
    inlineRightDelimiter = &#34;&#34;
    # default block delimiter is $$ ... $$, \[ ... \], \begin{equation} ... \end{equation} and some other functions
    # 默认块定界符是 $$ ... $$, \[ ... \],  \begin{equation} ... \end{equation} 和一些其它的函数
    blockLeftDelimiter = &#34;&#34;
    blockRightDelimiter = &#34;&#34;
    # KaTeX extension copy_tex
    # KaTeX 插件 copy_tex
    copyTex = true
    # KaTeX extension mhchem
    # KaTeX 插件 mhchem
    mhchem = true
  # Mapbox GL JS config (Mapbox GL JS https://docs.mapbox.com/mapbox-gl-js)
  # Mapbox GL JS 配置 (Mapbox GL JS https://docs.mapbox.com/mapbox-gl-js)
  [page.mapbox]
    # access token of Mapbox GL JS
    # Mapbox GL JS 的 access token
    accessToken = &#34;pk.eyJ1IjoiZGlsbG9uenEiLCJhIjoiY2s2czd2M2x3MDA0NjNmcGxmcjVrZmc2cyJ9.aSjv2BNuZUfARvxRYjSVZQ&#34;
    # style for the light theme
    # 浅色主题的地图样式
    lightStyle = &#34;mapbox://styles/mapbox/light-v10?optimize=true&#34;
    # style for the dark theme
    # 深色主题的地图样式
    darkStyle = &#34;mapbox://styles/mapbox/dark-v10?optimize=true&#34;
    # whether to add NavigationControl (https://docs.mapbox.com/mapbox-gl-js/api/#navigationcontrol)
    # 是否添加 导航控制 (https://docs.mapbox.com/mapbox-gl-js/api/#navigationcontrol)
    navigation = true
    # whether to add GeolocateControl (https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)
    # 是否添加 地理定位控制 (https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)
    geolocate = true
    # whether to add ScaleControl (https://docs.mapbox.com/mapbox-gl-js/api/#scalecontrol)
    # 是否添加 规模控制 (https://docs.mapbox.com/mapbox-gl-js/api/#scalecontrol)
    scale = true
    # whether to add FullscreenControl (https://docs.mapbox.com/mapbox-gl-js/api/#fullscreencontrol)
    # 是否添加 全屏控制 (https://docs.mapbox.com/mapbox-gl-js/api/#fullscreencontrol)
    fullscreen = true
  # Donate (Sponsor) settings
  # 赞赏设置
  [page.reward]
    enable = true
    animation = true
    # position relative to post footer, optional values: [&#34;before&#34;, &#34;after&#34;]
    # 相对于页脚的位置，可选值：[&#34;before&#34;, &#34;after&#34;]
    position = &#34;after&#34;
    comment = &#34;Buy me a coffee&#34;
    [page.reward.ways]
      wechatpay = &#34;/images/sponsor/wechatpay2.png&#34;
      alipay = &#34;/images/sponsor/alipay2.png&#34;
      # paypal = &#34;/images/paypal.png&#34;
      # bitcoin = &#34;/images/bitcoin.png&#34;
  # Social share links in post page
  # 文章页面的分享信息设置
  [page.share]
    enable = true
    Twitter = false
    Facebook = true
    Linkedin = false
    Whatsapp = false
    Pinterest = false
    Tumblr = false
    HackerNews = false
    Reddit = false
    VK = false
    Buffer = false
    Xing = false
    Line = false
    Instapaper = false
    Pocket = false
    Digg = false
    Stumbleupon = false
    Flipboard = false
    Weibo = true
    Renren = false
    Myspace = false
    Blogger = true
    Baidu = false
    Odnoklassniki = false
    Evernote = false
    Skype = true
    Trello = false
    Mix = false

  
  # Third-party library config
  # 第三方库配置
  [page.library]
    [page.library.css]
      # someCSS = &#34;some.css&#34;
      # located in &#34;assets/&#34; 位于 &#34;assets/&#34;
      # Or 或者
      # someCSS = &#34;https://cdn.example.com/some.css&#34;
    [page.library.js]
      jquryMin = &#34;https://libs.baidu.com/jquery/2.1.4/jquery.min.js&#34;
      #someJavascript = &#34;js/jquery-3.6.3.min.js&#34;
      # someJavascript = &#34;some.js&#34;
      # located in &#34;assets/&#34; 位于 &#34;assets/&#34;
      # Or 或者
      # someJavascript = &#34;https://cdn.example.com/some.js&#34;
  
  # 页面 SEO 配置
  [page.seo]
    # image URL
    # 图片 URL
    images = [&#34;/images/avatar.png&#34;]
    # Publisher info
    # 出版者信息
    [page.seo.publisher]
      name = &#34;geekswg&#34;
      logoUrl = &#34;/images/avatar.png&#34;

# TypeIt config
# TypeIt 配置
[typeit]
  # typing speed between each step (measured in milliseconds)
  # 每一步的打字速度 (单位是毫秒)
  speed = 100
  # blinking speed of the cursor (measured in milliseconds)
  # 光标的闪烁速度 (单位是毫秒)
  cursorSpeed = 1000
  # character used for the cursor (HTML format is supported)
  # 光标的字符 (支持 HTML 格式)
  cursorChar = &#34;|&#34;
  # cursor duration after typing finishing (measured in milliseconds, &#34;-1&#34; means unlimited)
  # 打字结束之后光标的持续时间 (单位是毫秒, &#34;-1&#34; 代表无限大)
  duration = -1
  # 是否启用循环打字特效
  loop = true
  # 循环延迟 单位 毫秒
  loopDelay = 6000 

# Mermaid config since v0.2.15
# Mermaid 配置 since v0.2.15
[mermaid]
  # For values, see https://mermaid-js.github.io/mermaid/#/Setup?id=theme
  # 取值详见 https://mermaid-js.github.io/mermaid/#/Setup?id=theme
  themes = [&#39;neutral&#39;, &#39;dark&#39;]

# PanguJS config since v0.2.12
# 盘古之白配置 since v0.2.12
[pangu]
  # For Chinese writing
  # 适用于中文写作用户
  enable = true
  selector = &#34;article&#34; # FixIt 0.2.17 | NEW

# Watermark config since v0.2.12
# Detail config see https://github.com/Lruihao/watermark#readme
# 水印配置 since v0.2.12
# 详细参数见 https://github.com/Lruihao/watermark#readme
[watermark]
  enable = true
  # watermark&#39;s text (HTML format is supported)
  # 水印内容 (允许 HTML 格式)
  content = &#39;&lt;img style=&#34;height: 2rem;&#34; src=&#34;/images/avatar.webp&#34; alt=&#34;logo&#34; /&gt; &lt;span style=&#34;font-family:楷体;&#34;&gt;毕少侠&lt;/span&gt;&#39;
  # watermark&#39;s transparency
  # 水印透明度
  opacity = 0.1000
  # parent of watermark&#39;s container
  # 水印父节点
  appendTo = &#34;.wrapper&gt;main&#34;
  # watermark&#39;s width. unit: px
  # 单水印宽度 单位：px
  width = 220
  # watermark&#39;s height. unit: px
  # 单水印高度 单位：px
  height = 50
  # row spacing of watermarks. unit: px
  # 水印行间距 单位：px
  rowSpacing = 220
  # col spacing of watermarks. unit: px
  # 水印列间距 单位：px
  colSpacing = 100
  # watermark&#39;s tangent angle. unit: deg
  # 水印旋转角度 单位：deg
  rotate = 30
  # watermark&#39;s fontSize. unit: rem
  # 水印字体大小，单位：rem
  fontSize = 2
  # watermark&#39;s fontFamily
  # 水印字体
  fontFamily = &#34;inherit&#34;

# FixIt 0.2.12 | NEW Busuanzi count
# FixIt 0.2.12 | NEW 不蒜子统计
[ibruce]
  enable = true
  # Enable in post meta
  # 在文章中开启
  enablePost = true

# Site verification code for Google/Bing/Yandex/Pinterest/Baidu/360/Sogou
# 网站验证代码，用于 Google/Bing/Yandex/Pinterest/Baidu/360/Sogou
[verification]
  google = &#34;&#34;
  bing = &#34;&#34;
  yandex = &#34;&#34;
  pinterest = &#34;&#34;
  baidu = &#34;&#34;
  so = &#34;&#34;
  sogou = &#34;&#34;

# Site SEO config
# 网站 SEO 配置
[seo]
  # image URL
  # 图片 URL
  image = &#34;/favicon.svg&#34;
  # thumbnail URL
  # 缩略图 URL
  thumbnailUrl = &#34;/favicon.svg&#34;


# Analytics config
# 网站分析配置
[analytics]
  enable = true
  # Google Analytics
  [analytics.google]
    id = &#34;&#34;
    # whether to anonymize IP
    # 是否匿名化用户 IP
    anonymizeIP = true
  # Fathom Analytics
  [analytics.fathom]
    id = &#34;&#34;
    # server url for your tracker if you&#39;re self hosting
    # 自行托管追踪器时的主机路径
    server = &#34;&#34;

# Cookie consent config
# Cookie 许可配置
[cookieconsent]
  enable = false
  # text strings used for Cookie consent banner
  # 用于 Cookie 许可横幅的文本字符串
  [cookieconsent.content]
    message = &#34;&#34;
    dismiss = &#34;&#34;
    link = &#34;&#34;

# CDN config for third-party library files
# 第三方库文件的 CDN 设置
[cdn]
  # CDN data file name, disabled by default [&#34;jsdelivr.yml&#34;, &#34;unpkg.yml&#34;, ...]
  # located in &#34;themes/FixIt/assets/data/cdn/&#34; directory
  # you can store your own data files in the same path under your project: &#34;assets/data/cdn/&#34;
  # CDN 数据文件名称, 默认不启用 [&#34;jsdelivr.yml&#34;, &#34;unpkg.yml&#34;, ...]
  # 位于 &#34;themes/FixIt/assets/data/cdn/&#34; 目录
  # 可以在你的项目下相同路径存放你自己的数据文件：&#34;assets/data/cdn/&#34;
  # 使用 CDN 加速地址文件地址 assets/data/cdn/ 
  data = &#34;unpkg.yml&#34;

# Compatibility config
# 兼容性设置
[compatibility]
  # whether to use Polyfill.io to be compatible with older browsers
  # 是否使用 Polyfill.io 来兼容旧式浏览器
  polyfill = false
  # whether to use object-fit-images to be compatible with older browsers
  # 是否使用 object-fit-images 来兼容旧式浏览器
  objectFit = false

# GitHub banner in the top-right or top-left corner since v0.2.14
# 在左上角或者右上角显示 GitHub 开源链接 since v0.2.14
[githubCorner]
  enable = true
  permalink = &#34;https://github.com/geekswg/blogFixit/&#34;
  title = &#34;在 GitHub 查看代码&#34;
  position = &#34;left&#34; # [&#34;left&#34;, &#34;right&#34;]

# Gravatar config since v0.2.14
# Gravatar 设置 since v0.2.14
[gravatar]
  enable = false
  # Gravatar host, default: &#34;www.gravatar.com&#34; gravatar头像
  # Gravatar 主机，默认：“www.gravatar.com”
  host = &#34;cn.gravatar.com&#34; # [&#34;cn.gravatar.com&#34;, &#34;gravatar.loli.net&#34;, ...]
  style = &#34;mp&#34; # [&#34;&#34;, &#34;mp&#34;, &#34;identicon&#34;, &#34;monsterid&#34;, &#34;wavatar&#34;, &#34;retro&#34;, &#34;blank&#34;, &#34;robohash&#34;]

# Back to top
# 返回顶部
[backToTop]
  enable = true
  # Scroll percent label in b2t button
  # 在 b2t 按钮中显示滚动百分比
  scrollpercent = true

# Reading progress bar
# 阅读进度条
[readingProgress]
  enable = true
  # Available values: [&#34;left&#34;, &#34;right&#34;]
  # 可用值：[&#34;left&#34;, &#34;right&#34;]
  start = &#34;left&#34;
  # Available values: [&#34;top&#34;, &#34;bottom&#34;]
  # 可用值：[&#34;top&#34;, &#34;bottom&#34;]
  position = &#34;top&#34;
  reversed = false
  light = &#34;#0076ff&#34;
  dark = &#34;#fff&#34;
  height = &#34;2px&#34;

# FixIt 0.2.17 | NEW Progress bar in the top during page loading
# For more information: https://github.com/CodeByZach/pace
# FixIt 0.2.17 | 新增 页面加载期间顶部的进度条
# 有关详细信息：https://github.com/CodeByZach/pace
[pace]
  enable = true
  # All available colors:
  # 所有可用颜色：
  # [&#34;black&#34;, &#34;blue&#34;, &#34;green&#34;, &#34;orange&#34;, &#34;pink&#34;, &#34;purple&#34;, &#34;red&#34;, &#34;silver&#34;, &#34;white&#34;, &#34;yellow&#34;]
  color = &#34;blue&#34;
  # All available themes:
  # 所有可用主题：
  # [&#34;barber-shop&#34;, &#34;big-counter&#34;, &#34;bounce&#34;, &#34;center-atom&#34;, &#34;center-circle&#34;, &#34;center-radar&#34;, &#34;center-simple&#34;,
  # &#34;corner-indicator&#34;, &#34;fill-left&#34;, &#34;flash&#34;, &#34;flat-top&#34;, &#34;loading-bar&#34;, &#34;mac-osx&#34;, &#34;material&#34;, &#34;minimal&#34;]
  theme = &#34;loading-bar&#34;

# Define custom file paths
# Create your custom files in site directory `layouts/partials/custom` and uncomment needed files below
# 定义自定义文件路径
# 在站点目录 `layouts/partials/custom` 中创建您的自定义文件，并取消注释下面需要的文件
[customFilePath]
  # aside = &#34;custom/aside.html&#34;
  # profile = &#34;custom/profile.html&#34;
  footer = &#34;custom/footer.html&#34;
  aside = &#34;custom/aside.html&#34;

# Developer options since v0.2.15
# 开发者选项 since v0.2.15
[dev]
  enable = false
  # Check for updates
  # 检查更新
  c4u = false
  # For using the GitHub API, please do not expose to public!
  # 用于使用 GitHub API，请勿公开展示！
  githubToken = &#34;&#34;
  # Mobile Devtools config
  # 移动端开发者工具配置
  [dev.mDevtools]
    enable = false
    # &#34;vConsole&#34;, &#34;eruda&#34; supported
    # 支持 &#34;vConsole&#34;, &#34;eruda&#34;
    type = &#34;vConsole&#34;
```




---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2023/fixit-beautification/  

