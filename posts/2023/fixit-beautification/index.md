# Fixit-主题美化记录


{{< admonition quote "说明" true >}}
记录自己博客主题的修改和美化记录
{{< /admonition >}}
> 本文阅读前，基于你已经了解hugo，并且使用Fixit主题成功搭建成功后，如还不了解相关内容请访问👉 [FixIt 主题文档](https://fixit.lruihao.cn/zh-cn/) 了解。
> <small>*关于 [FixIt 主题](https://github.com/hugo-fixit/FixIt) 的问题，请移步 [FixIt 官网](https://fixit.lruihao.cn) 相关文章哦～*</small>
<!--more-->

## 首页-home

    首页个人头像添加 snake 动画特效 背景
> 参考 [动态贪吃蛇特效Github地址](https://github.com/Platane/snk)


## 自定义css

> 文件位置 /assets/css/_custom.scss

### 自定义字体

在`/assets/css/_custom.scss`中添加以下代码即可自定义字体，推荐[中文网字计划](https://chinese-font.netlify.app/zh-cn/cdn/)中挑选自己喜欢字体。
```css
// 引入字体 https://chinese-font.netlify.app/zh-cn/cdn/
@import url('https://chinese-fonts-cdn.deno.dev/packages/lxgwwenkai/dist/LXGWWenKai-Light/result.css');
// 自定义字体
html,body {
   font-family: "LXGW WenKai Light";
   font-weight: normal;
   font-size: 1rem;
}
```

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

> 在`/assets/css/_custom.scss`文件中添加如下代码：

```css {title="/assets/css/_custom.scss"}
/** 添加网格背景 */
.single {
  .single-subtitle {
    color: #57606a;
  }

  .content {
    background-image: linear-gradient(90deg, rgba(60, 10, 30, .04) 3%, transparent 0), linear-gradient(1turn, rgba(60, 10, 30, .04) 3%, transparent 0);
    background-size: 20px 20px;
    background-position: center;
  
    [data-theme='dark'] & {
      background-image: linear-gradient(90deg, rgba(195, 245, 215, .04) 3%, transparent 0), linear-gradient(1turn, rgba(195, 245, 215, .04) 3%, transparent 0);
    }
  }
}
```

## 自定义js

> 文件位置 assets/js/custom.js [我的自定义custom.js](https://github.com/geekswg/geekswg.github.io/blob/main/js/custom.min.js)

### console打印样式

> console. 花样打印信息，让你的控制台更加高端大气上档次。

```js
this.consoleInfo = () => {
      var myConsole = {
        log: function (s, css) {
            css = (css == undefined) ? "color:#fff7d3;background-color:#ff4f49;font-size:12px;" : css;
            console.log("%c%s", css, s);
        },
        green: function (s, css) {
            css = (css == undefined) ? "color:#fff7d3;background-color:#33a600;font-size:12px;" : css;
            console.log("%c%s", css, s);
        },
        blue: function (s, css) {
            css = (css == undefined) ? "color:#fff7d3;background-color:#00768f;font-size:12px;" : css;
            console.log("%c%s", css, s);
        },
        violet: function (s, css) {
            css = (css == undefined) ? "color:#fff7d3;background-color:#79008f;font-size:12px;padding:10px;" : css;
            console.log("%c%s", css, s);
        },
        img: function(imgUrl,width,height){
          width = (width == undefined) ? '100px':width;
          height = (height == undefined) ? '100px':height;
          console.log("%c  ", 
          "background-image:url("+imgUrl+");"+
          "line-height:"+height+";font-size:"+width+";background-size: contain;");
        }
      }
      myConsole.violet(
        " Talk is cheap, Show me the code. \n"+
        "                       --Linux 的创始人 Linus Torvalds "
      );
      console.log(
        '%c 毕少侠 | https://geekswg.github.io %c e-mail: mailto://geekswg@qq.com %c',
        'color: #FF0000; background: #4bffba; padding:5px 0; border-radius: 5px 5px 5px 5px;',
        'background: #fadfa3; padding:5px 0; border-radius: 5px 5px 5px 5px;',
        ''
      );
      myConsole.blue(
      '____________________________________________\n'+
      '                      /                     \n'+
      '----__----__----__---/-__---__-----------__-\n'+
      '  /   ) /___) /___) /(     (_ `| /| /  /   )\n'+
      '_(___/_(___ _(___ _/___\\__(__)_|/_|/__(___/_\n'+
      '    /                                    /  \n'+
      '(_ /                                 (_ /   \n'+
      '————————————————————————————————————————————'
      );
      myConsole.img('http://geekswg.js.cool/images/posts/featured-image-preview.jpg','264px','100px');
      return this;
    };
```

在线工具：
> 在线生成ascii字符画的网站
1.  http://patorjk.com/software/taag
2.  https://tool.lu/asciipainting

> 图片生成字符画：
1. http://life.chacuo.net/convertphoto2char
2. https://www.degraeve.com/img2txt.php

> 图片生成字符画：
1. 

参考：
Console相关文档 https://developer.mozilla.org/zh-CN/docs/Web/API/Console

### 添加鼠标点击特效

> 在自定义js中添加自己想要的鼠标点击特效的实现

:point_down:

```html
// =====鼠标特效
function clickEffect() {
  console.log('初始化鼠标特效-clickEffect!');
  let balls = [];
  let longPressed = false;
  let longPress;
  let multiplier = 0;
  let width,
  height;
  let origin;
  let normal;
  let ctx;
  const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
  const canvas = document.createElement("canvas");
  document.body.appendChild(canvas);
  canvas.setAttribute("style", "width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");
  const pointer = document.createElement("span");
  pointer.classList.add("pointer");
  document.body.appendChild(pointer);
  if (canvas.getContext && window.addEventListener) {
      ctx = canvas.getContext("2d");
      updateSize();
      window.addEventListener('resize', updateSize, false);
      loop();
      window.addEventListener("mousedown", function (e) {
          pushBalls(randBetween(10, 20), e.clientX, e.clientY);
          document.body.classList.add("is-pressed");
          longPress = setTimeout(function () {
              document.body.classList.add("is-longpress");
              longPressed = true;
          }, 500);
      }, false);
      window.addEventListener("mouseup", function (e) {
          clearInterval(longPress);
          if (longPressed == true) {
              document.body.classList.remove("is-longpress");
              pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e.clientX, e.clientY);
              longPressed = false;
          }
          document.body.classList.remove("is-pressed");
      }, false);
      window.addEventListener("mousemove", function (e) {
          let x = e.clientX;
          let y = e.clientY;
          pointer.style.top = y + "px";
          pointer.style.left = x + "px";
      }, false);
  } else {
      console.log("canvas or addEventListener is unsupported!");
  }

  function updateSize() {
      canvas.width = window.innerWidth * 2;
      canvas.height = window.innerHeight * 2;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
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
              this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
          } else {
              this.multiplier = randBetween(6, 12);
          }
          this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
          this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
          this.r = randBetween(8, 12) + 3 * Math.random();
          this.color = colours[Math.floor(Math.random() * colours.length)];
      }
      update() {
          this.x += this.vx - normal.x;
          this.y += this.vy - normal.y;
          normal.x = -2 / window.innerWidth * Math.sin(this.angle);
          normal.y = -2 / window.innerHeight * Math.cos(this.angle);
          this.r -= 0.3;
          this.vx *= 0.9;
          this.vy *= 0.9;
      }
  }
  function pushBalls(count = 1, x = origin.x, y = origin.y) {
      for (let i = 0; i < count; i++) {
          balls.push(new Ball(x, y));
      }
  }
  function randBetween(min, max) {
      return Math.floor(Math.random() * max) + min;
  }
  function loop() {
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < balls.length; i++) {
          let b = balls[i];
          if (b.r < 0)
              continue;
          ctx.fillStyle = b.color;
          ctx.beginPath();
          ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
          ctx.fill();
          b.update();
      }
      if (longPressed == true) {
          multiplier += 0.2;
      } else if (!longPressed && multiplier >= 0) {
          multiplier -= 0.4;
      }
      removeBall();
      requestAnimationFrame(loop);
  }
  function removeBall() {
      for (let i = 0; i < balls.length; i++) {
          let b = balls[i];
          if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
              balls.splice(i, 1);
          }
      }
  }
}
// =====鼠标特效
```

### 动态设置网站title

> 动态设置网站title，当网页失去焦点时改变网页title，引起用户注意，让用户回来继续浏览。

```js
//自动设置网站标题
function autSetTitle(){
  console.log('初始化-autSetTitle() => ' +document.title);
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      //$('[rel="icon"]').attr('href', "/failure.ico");
      //$('[rel="shortcut icon"]').attr('href', "/failure.ico");
      //document.title = '喔唷，崩溃啦！';
      document.title = ' 😂去哪里了！';
      clearTimeout(titleTime);
    } else {
      //$('[rel="icon"]').attr('href', "/favicon-32x32.ico");
      //$('[rel="shortcut icon"]').attr('href', "/favicon-32x32.ico");
      document.title = ' 😍欢迎回来！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
    }
  });
}

```

### 代码块部分折叠功能

> 自定义`assets/js/codeblock.js`,然后在配置文件`params.yml`中引入该js即可。
```js {title="assets/js/codeblock.js"}
/**
 * 代码块超过指定高度自动折叠Y
 */
document.addEventListener('DOMContentLoaded', () => {
    CodeBlock.init('hello world')
});
const CodeBlock = {
    maxHeight: 512, //px
    //当 overflow-x 值为 hidden、scroll 或者 auto，而本属性的值为 visible（默认值）时，本属性会被隐式的计算为 auto。
    overflowY: 'auto',  // visible ,hidden
    initCodeBlockOverflowY:function(overflowHeight,overflowY){
        overflowY = overflowY || CodeBlock.overflowY;
        overflowHeight = overflowHeight || CodeBlock.maxHeight;
        eles = document.getElementsByClassName('highlight');
        eles = Array.from(eles);
        //console.log(eles);
        eles.forEach(function(ele, index, eles) {
            //console.log(ele, index);
            //console.info('ele.offsetHeight = ',ele.offsetHeight);
            let origalHeight = ele.offsetHeight;
            if(ele.offsetHeight > overflowHeight){
                //console.log('#'+ele.id+'>.chroma.open>.table-wrapper');
                let childEle = ele.getElementsByClassName('chroma')[0];
                //console.log(curEle);
                childEle.style.height = overflowHeight + 'px';
                childEle.style.overflowY = overflowY;

                let showMoreDiv = document.createElement('div');
                showMoreDiv.id = ele.id+'-more';
                
                showMoreDiv.style.cssText = 'position:sticky;background-image: linear-gradient(to top, #9c9c9c, transparent);text-align: center;cursor: pointer;';
                showMoreDiv.innerHTML = '<i class="fa-solid fa-angles-down fa-beat-fade" style="font-size:20px;"></i>';
                ele.appendChild(showMoreDiv);
                showMoreDiv.addEventListener('click', function(){
                    if(showMoreDiv.innerHTML.indexOf('fa-angles-down') >= 0 ){
                        childEle.style.height = origalHeight + 'px';
                        showMoreDiv.innerHTML = '<i class="fa-solid fa-angles-up fa-beat-fade" style="font-size:20px;"></i>';
                        showMoreDiv.style.cssText = 'margin-top: -34px;position:sticky;z-index:99;background-image: linear-gradient(to top, #9c9c9c, transparent);text-align: center;cursor: pointer;';
                        
                    }else{
                        childEle.style.height = overflowHeight + 'px';
                        showMoreDiv.innerHTML = '<i class="fa-solid fa-angles-down fa-beat-fade" style="font-size:20px;"></i>';
                        showMoreDiv.style.cssText = 'margin-top: -24px;position:sticky;z-index:99;background-image: linear-gradient(to top, #9c9c9c, transparent);text-align: center;cursor: pointer;';
                        window.scrollTo({top:ele.offsetTop, behavior: 'smooth'});
                    }
                    
                });
            }
        });
    },
    hello: function(msg){
        console.info('CodeBlock.hello()=%s, by geekswg',msg);
    },
    init : function(args){
        try {
            this.initCodeBlockOverflowY(512,'auto');// unit px 
        }catch (error) {
            console.error('CodeBlock.init() error',error);
        }
        
    }
}
```
> yml配置修改如下
```yml {title="config/default/params.yml"}
# Third-party library config
  # 第三方库配置
  library:
      # someCSS = "some.css"
      # located in "assets/" 位于 "assets/"
      # Or 或者
      # someCSS = "https://cdn.example.com/some.css"
    css: {}

    js:
      jquery-min: https://libs.baidu.com/jquery/2.1.4/jquery.min.js
      codeblockjs: js/codeblock.js
      #someJavascript = "js/jquery-3.6.3.min.js"
      # someJavascript = "some.js"
      # located in "assets/" 位于 "assets/"
      # Or 或者
      # someJavascript = "https://cdn.example.com/some.js"
      #dayjs = "js/dayjs.min.js"
```

## 侧边栏-aside

> 对应自定义文件 layouts/partials/custom/aside.html 

自定义aside.html

### 添加天气插件

> 在 aside.html中添加
参考链接 {{< link "https://tianqi.2345.com/plugin/" "2345天气插件" "title" false >}}

```html
<iframe allowtransparency="true" frameborder="0" width="140" height="278" scrolling="no" 
src="//tianqi.2345.com/plugin/widget/index.htm?s=2&z=3&t=1&v=1&d=3&bd=0&k=&f=&ltf=009944&htf=cc0000&q=1&e=1&a=1&c=54511&w=140&h=278&align=center">
</iframe>  
```

### 添加一言

> 插件地址 [一言](https://v1.hitokoto.cn/)

```html
{{/*  添加 一言 https://v1.hitokoto.cn/  */}}
<!-- 本例不能添加链接内容，放在此处只是因为此接口比较方便，也许能够解决大部分的需求 -->
<script src="https://v1.hitokoto.cn/?encode=js&select=%23hitokoto" defer></script>
<!-- 请注意，以下的示例包含超链接，您可能需要手动配置样式使其不变色。如果您嫌麻烦，可以移除。 -->
<p id="hitokoto" style='color:red;font-family: MMT,"沐目体";font-size:20px;'>
    <a href="#" id="hitokoto_text">:D 获取中...</a>
</p>
```

### 添加音乐插件

> 插件地址 [MetingJS](https://github.com/metowolf/MetingJS)

```html
<!-- require APlayer 添加侧边栏音乐 暂时于目录冲突找不到原因，注释了 -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>
<meting-js
	server="netease"
	type="playlist" list-folded=true order="random"
	id="6678743774" volume="0.2" list-max-height="340px" >
</meting-js>
```

## 头部自定义

> layouts/partials/header.html 主要修改文件，如果文件不存在，则去你使用的主题目录下找到该文件，复制到自己的site对应的路径下。

### 添加菜单按钮

> 自定义 layouts/partials/header.html 找到需要添加的位置

{{< admonition tip "提示" true >}}
这里是菜单文件的样式，注意这里面有PC端和移动端的，如果要双端都要添加，在对应的两个地方同时加上。
{{< /admonition >}}

### 添加版娘

> 在项目 layouts/partials/header.html 最底部 中添加

:point_down: 点击下方查看代码

```html
<!-- 板娘 https://github.com/stevenjoezhang/live2d-widget --> 
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-awesome/css/font-awesome.min.css">
<!--
<script src="https://cdn.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/autoload.js"></script>
-->
<script type="text/javascript">
// live2d_path 参数建议使用绝对路径
const live2d_path = "https://fastly.jsdelivr.net/gh/stevenjoezhang/live2d-widget@latest/";
//const live2d_path = "/live2d-widget/";

// 封装异步加载资源的方法
function loadExternalResource(url, type) {
	return new Promise((resolve, reject) => {
		let tag;

		if (type === "css") {
			tag = document.createElement("link");
			tag.rel = "stylesheet";
			tag.href = url;
		}
		else if (type === "js") {
			tag = document.createElement("script");
			tag.src = url;
		}
		if (tag) {
			tag.onload = () => resolve(url);
			tag.onerror = () => reject(url);
			document.head.appendChild(tag);
		}
	});
}

// 加载 waifu.css live2d.min.js waifu-tips.js
if (screen.width >= 100) {
	Promise.all([
		loadExternalResource(live2d_path + "waifu.css", "css"),
		loadExternalResource(live2d_path + "live2d.min.js", "js"),
		loadExternalResource(live2d_path + "waifu-tips.js", "js")
	]).then(() => {
		// 配置选项的具体用法见 README.md
		initWidget({
			waifuPath: live2d_path + "waifu-tips.json",
			//apiPath: "https://live2d.fghrsh.net/api/", 
			//cdnPath: "https://fastly.jsdelivr.net/gh/fghrsh/live2d_api/",
			cdnPath: "https://live2d.fghrsh.net/api/",
			tools: ["hitokoto", "asteroids", "switch-model", "switch-texture", "photo", "info", "quit"]
		});
	});
}

console.log(`
  く__,.ヘヽ.        /  ,ー､ 〉
           ＼ ', !-─‐-i  /  /´
           ／｀ｰ'       L/／｀ヽ､
         /   ／,   /|   ,   ,       ',
       ｲ   / /-‐/  ｉ  L_ ﾊ ヽ!   i
        ﾚ ﾍ 7ｲ｀ﾄ   ﾚ'ｧ-ﾄ､!ハ|   |
          !,/7 '0'     ´0iソ|    |
          |.从"    _     ,,,, / |./    |
          ﾚ'| i＞.､,,__  _,.イ /   .i   |
            ﾚ'| | / k_７_/ﾚ'ヽ,  ﾊ.  |
              | |/i 〈|/   i  ,.ﾍ |  i  |
             .|/ /  ｉ：    ﾍ!    ＼  |
              kヽ>､ﾊ    _,.ﾍ､    /､!
              !'〈//｀Ｔ´', ＼ ｀'7'ｰr'
              ﾚ'ヽL__|___i,___,ンﾚ|ノ
                  ﾄ-,/  |___./
                  'ｰ'    !_,.:
`);
</script>
```

## 页脚-footer

> 添加十年之约 和 开往友链 的链接

{{< link "https://www.travellings.cn" "开往" "title" false >}}
{{< link "https://www.foreverblog.cn/" "十年之约" "title" false >}}

```html { title="layouts/partials/custom/footer.html" }
<style>
    .footerImg {
        height: 20px;  
    }
</style>
<div class="footer-line custom">
    <a href="https://www.travellings.cn" target="_blank"><img src="/images/travelling.png"  class="footerImg" alt="" title="开往-友链接力 v1.5"></a>
    <a href="https://www.travellings.cn/go.html" target="_blank"><img src="/images/travelling.gif" class="footerImg" alt=""  title="开往-友链接力 v1.5"></a>
    <a href="https://www.foreverblog.cn/" target="_blank"><img src="https://img.foreverblog.cn/logo_en_default.png" class="footerImg" alt="" > </a>
    <a href="https://www.foreverblog.cn/go.html" target="_blank"><img src="https://img.foreverblog.cn/wormhole_2.gif" class="footerImg" alt="" title="穿梭虫洞-随机访问十年之约友链博客"></a>
</div>
```

## 核心配置文件

> params.toml

```toml { title="config/deafault/params.toml" }
# -------------------------------------------------------------------------------------
# Theme Core Configuration | 主题核心配置
# See: https://fixit.lruihao.cn/theme-documentation-basics/#site-configuration
# -------------------------------------------------------------------------------------

# FixIt theme version
# FixIt 主题版本
version = "0.2.X"
# website description for RSS, SEO, Open Graph and Twitter Cards
# 网站描述, 用于 RSS, SEO, Open Graph 和 Twitter Cards
description = "博客：探索、发现、分享 By geekswg-[毕少侠]"
# site keywords
# 网站关键词
keywords = ["geekswg","毕少侠","博客","Github","Hugo", "LoveIt","FixIt"]
# site default theme ["light", "dark", "auto"]
# 网站默认主题 ["light", "dark", "auto"]
defaultTheme = "auto"
# public git repo url only then enableGitInfo is true
# 公共 git 仓库路径，仅在 enableGitInfo 设为 true 时有效
gitRepo = "https://github.com/geekswg/blog-fixit"
# which hash function used for SRI, when empty, no SRI is used ["sha256", "sha384", "sha512", "md5"]
# 哪种哈希函数用来 SRI, 为空时表示不使用 SRI ["sha256", "sha384", "sha512", "md5"]
fingerprint = ""
# date format
# 日期格式
dateFormat = "2006-01-02"
# website images for Open Graph and Twitter Cards
# 网站图片, 用于 Open Graph 和 Twitter Cards
images = ["/images/avatar.png"]
# FixIt 0.2.12 | NEW enable PWA
# FixIt 0.2.12 | 新增 开启 PWA 支持
enablePWA = true
# whether to add external Icon for external links automatically since v0.2.14
# 是否自动显示外链图标 since v0.2.14
externalIcon = true
# FixIt will, by default, inject a theme meta tag in the HTML head on the home page only. since v0.2.14
# You can turn it off, but we would really appreciate if you don’t, as this is a good way to watch FixIt's popularity on the rise.
# 默认情况下，FixIt 只会在主页的 HTML 头中注入主题元标记。since v0.2.14
# 您可以将其关闭，但如果您不这样做，我们将不胜感激，因为这是观察 FixIt 受欢迎程度上升的好方法。
disableThemeInject = false

# App icon config
# 应用图标配置
[app]
  # optional site title override for the app when added to an iOS home screen or Android launcher
  # 当添加到 iOS 主屏幕或者 Android 启动器时的标题, 覆盖默认标题
  title = "毕少侠APP"
  # whether to omit favicon resource links
  # 是否隐藏网站图标资源链接
  noFavicon = false
  # modern SVG favicon to use in place of older style .png and .ico files
  # 更现代的 SVG 网站图标, 可替代旧的 .png 和 .ico 文件 #设置网站logo的 favicon
  svgFavicon = "/favicon.svg"
  # Safari mask icon color
  # Safari 图标颜色
  iconColor = "#5bbad5"
  # Windows v8-10 tile color
  # Windows v8-10 磁贴颜色
  tileColor = "#da532c"
  # Android browser theme color
  # Android 浏览器主题色
  [app.themeColor]
    light = "#f8f8f8"
    dark = "#252627"

# Search config
# 搜索配置
[search]
  enable = true
  # type of search engine ["lunr", "algolia", "fuse"]
  # 搜索引擎的类型 ["lunr", "algolia", "fuse"]
  type = "fuse"
  # max index length of the chunked content
  # 文章内容最长索引长度
  contentLength = 9999000
  # placeholder of the search bar
  # 搜索框的占位提示语
  placeholder = "输入关键词搜索"
  # max number of results length
  # 最大结果数目
  maxResultLength = 10
  # snippet length of the result
  # 结果内容片段长度
  snippetLength = 30
  # HTML tag name of the highlight part in results
  # 搜索结果中高亮部分的 HTML 标签
  highlightTag = "em"
  # whether to use the absolute URL based on the baseURL in search index
  # 是否在搜索索引中使用基于 baseURL 的绝对路径
  absoluteURL = false
  [search.algolia]
    index = ""
    appID = ""
    searchKey = ""
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
  # desktop header mode ["sticky", "normal", "auto"]
  # 桌面端导航栏模式 ["sticky", "normal", "auto"]
  desktopMode = "sticky"
  # mobile header mode ["sticky", "normal", "auto"]
  # 移动端导航栏模式 ["sticky", "normal", "auto"]
  mobileMode = "auto"
  # Header title config
  # 页面头部导航栏标题配置
  [header.title]
    # URL of the LOGO
    # LOGO 的 URL 网页左上角logo图标配置
    logo = "/images/avatar.png" 
    # title name
    # 标题名称
    name = "毕少侠"
    # you can add extra information before the name (HTML format is supported), such as icons
    # 你可以在名称 (允许 HTML 格式) 之前添加其他信息, 例如图标
    pre = ""
    # you can add extra information after the name (HTML format is supported), such as icons
    # 你可以在名称 (允许 HTML 格式) 之后添加其他信息, 例如图标
    post = ""
    # whether to use typeit animation for title name
    # 是否为标题显示打字机动画
    typeit = false
  # Header subtitle config since v0.2.12
  # 页面头部导航栏副标题配置 since v0.2.12
  [header.subtitle]
    # subtitle name
    # 副标题名称
    name = "<span style='font-family: MMT,\"沐目体\";'>也在江湖</span>"
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
  custom = ""
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
  gov = "<a href='https://icp.gov.moe/?keyword=20231992' target='_blank'><img style='height:16px;margin-bottom:-3px;' src='https://icp.gov.moe/images/ico64.png'></a>"
  # ICP info only in China (HTML format is supported)
  # ICP 备案信息，仅在中国使用 (支持 HTML 格式)
  icp = "<a href='https://icp.gov.moe/?keyword=20231992' target='_blank'>萌ICP备20231992号</a>"
  # license info (HTML format is supported)
  # 许可协议信息 (支持 HTML 格式)
  license = ''
  # license = '<a rel="license external nofollow noopener noreferrer" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>'
  # FixIt 0.2.17 | CHANGED Site creation time
  # FixIt 0.2.17 | 更改 网站创立时间
  [footer.siteTime]
    enable = true
    animate = true
    icon = "fa-solid fa-heartbeat fa-fw animate-icon"
    pre = "Runing"
    value = "2018-05-28T20:01:01+08:00"
  # FixIt 0.2.17 | NEW footer lines order, optional values: ["first", 0, 1, 2, 3, 4, 5, "last"]
  # FixIt 0.2.17 | 新增 页面底部行排序，可选值：["first", 0, 1, 2, 3, 4, 5, "last"]
  [footer.order]
    copyright = 'first'
    
    statistics = 0
    visitor = 0
    beian = 0
    custom = 'last'
    powered = 'last'

# Section (all posts) page config
# Section (所有文章) 页面配置
[section]
  # special amount of posts in each section page
  # section 页面每页显示文章数量
  paginate = 20
  # date format (month and day)
  # 日期格式 (月和日)
  dateFormat = "2006-01-02"
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
  dateFormat = "2006-01-02"
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
  # Order of tags, optional values: ["name", "count"]
  # 标签顺序，可选值：["name", "count"]
  orderby = "name"

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
    gravatarEmail = ""
    # URL of avatar shown in home page
    # 主页显示头像的 URL
    avatarURL = "/images/avatar.webp" #图片地址/static/images/avatar.png
    # avatarURL = "/images/avatar.webp" 
    # FixIt 0.2.7 | CHANGED title shown in home page (HTML format is supported)
    # FixIt 0.2.7 | 更改 主页显示的网站标题（支持 HTML 格式）
    title = "Every day is beautiful if you choose to see it."
    # subtitle shown in home page
    # 主页显示的网站副标题
    subtitle = "如果你愿意去发现，其实每一天都很美"
    # whether to use typeit animation for subtitle
    # 是否为副标题显示打字机动画
    typeit = true
    # whether to show social links
    # 是否显示社交账号
    social = true
    # FixIt 0.2.0 | NEW disclaimer (HTML format is supported)
    # FixIt 0.2.0 | 新增 免责声明（支持 HTML 格式）
    disclaimer = ""
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
  GitHub = "geekswg"
  Weibo = ""
  Email = "geekswg@qq.com"
  RSS = true
  Stackoverflow = ""
  QQ = "1101303970"
  blogger = "https://gavinblog.github.io/stellar/"
  cnblog = "geekswg"
  QQGroup = ""
  CSDN = ""
  douyin = "MS4wLjABAAAA7wEzz2PEAVqUc8bQxcCPGOV9r1zmjMooBHGKcVuP1Es"

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
  license = '<a rel="license external nofollow noopener noreferrer" href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">CC BY-NC 4.0</a>'
  # whether to show link to Raw Markdown content of the content
  # 是否显示原始 Markdown 文档内容的链接
  linkToMarkdown = true
  # whether to show the full text content in RSS
  # 是否在 RSS 中显示全文内容
  rssFullText = false
  # Page style ["narrow", "normal", "wide", ...] since v0.2.13
  # 页面样式 ["narrow", "normal", "wide", ...] since v0.2.13
  pageStyle = "wide"
  # Gravatar is force-used as the author's avatar since v0.2.14
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
  endFlag = "-----（完）-----"
  # FixIt 0.2.18 | NEW whether to enable instant.page
  # FixIt 0.2.18 | 新增 是否开启即时页面
  instantPage = true

  # Repost config since v0.2.15
  # 转载配置 since v0.2.15
  [page.repost]
    enable = false
    url = ""
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
    # position of TOC ["left", "right"] since v0.2.13
    # 目录位置 ["left", "right"] since v0.2.13
    position = "right"
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
    # Link for fork & edit
    # url = "/edit/branch-name/subdirectory-name" # base on `params.gitRepo`
    # url = "https://github.com/user-name/repo-name/edit/branch-name/subdirectory-name" # full url
    url = "/edit/master/content"
  # KaTeX mathematical formulas config (KaTeX https://katex.org/)
  # KaTeX 数学公式配置 (KaTeX https://katex.org/)
  [page.math]
    enable = false
    # default inline delimiter is $ ... $ and \( ... \)
    # 默认行内定界符是 $ ... $ 和 \( ... \)
    inlineLeftDelimiter = ""
    inlineRightDelimiter = ""
    # default block delimiter is $$ ... $$, \[ ... \], \begin{equation} ... \end{equation} and some other functions
    # 默认块定界符是 $$ ... $$, \[ ... \],  \begin{equation} ... \end{equation} 和一些其它的函数
    blockLeftDelimiter = ""
    blockRightDelimiter = ""
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
    accessToken = "pk.eyJ1IjoiZGlsbG9uenEiLCJhIjoiY2s2czd2M2x3MDA0NjNmcGxmcjVrZmc2cyJ9.aSjv2BNuZUfARvxRYjSVZQ"
    # style for the light theme
    # 浅色主题的地图样式
    lightStyle = "mapbox://styles/mapbox/light-v10?optimize=true"
    # style for the dark theme
    # 深色主题的地图样式
    darkStyle = "mapbox://styles/mapbox/dark-v10?optimize=true"
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
    # position relative to post footer, optional values: ["before", "after"]
    # 相对于页脚的位置，可选值：["before", "after"]
    position = "after"
    comment = "Buy me a coffee"
    [page.reward.ways]
      wechatpay = "/images/sponsor/wechatpay2.png"
      alipay = "/images/sponsor/alipay2.png"
      # paypal = "/images/paypal.png"
      # bitcoin = "/images/bitcoin.png"
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
      # someCSS = "some.css"
      # located in "assets/" 位于 "assets/"
      # Or 或者
      # someCSS = "https://cdn.example.com/some.css"
    [page.library.js]
      jquryMin = "https://libs.baidu.com/jquery/2.1.4/jquery.min.js"
      #someJavascript = "js/jquery-3.6.3.min.js"
      # someJavascript = "some.js"
      # located in "assets/" 位于 "assets/"
      # Or 或者
      # someJavascript = "https://cdn.example.com/some.js"
  
  # 页面 SEO 配置
  [page.seo]
    # image URL
    # 图片 URL
    images = ["/images/avatar.png"]
    # Publisher info
    # 出版者信息
    [page.seo.publisher]
      name = "geekswg"
      logoUrl = "/images/avatar.png"

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
  cursorChar = "|"
  # cursor duration after typing finishing (measured in milliseconds, "-1" means unlimited)
  # 打字结束之后光标的持续时间 (单位是毫秒, "-1" 代表无限大)
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
  themes = ['neutral', 'dark']

# PanguJS config since v0.2.12
# 盘古之白配置 since v0.2.12
[pangu]
  # For Chinese writing
  # 适用于中文写作用户
  enable = true
  selector = "article" # FixIt 0.2.17 | NEW

# Watermark config since v0.2.12
# Detail config see https://github.com/Lruihao/watermark#readme
# 水印配置 since v0.2.12
# 详细参数见 https://github.com/Lruihao/watermark#readme
[watermark]
  enable = true
  # watermark's text (HTML format is supported)
  # 水印内容 (允许 HTML 格式)
  content = '<img style="height: 2rem;" src="/images/avatar.webp" alt="logo" /> <span style="font-family:楷体;">毕少侠</span>'
  # watermark's transparency
  # 水印透明度
  opacity = 0.1000
  # parent of watermark's container
  # 水印父节点
  appendTo = ".wrapper>main"
  # watermark's width. unit: px
  # 单水印宽度 单位：px
  width = 220
  # watermark's height. unit: px
  # 单水印高度 单位：px
  height = 50
  # row spacing of watermarks. unit: px
  # 水印行间距 单位：px
  rowSpacing = 220
  # col spacing of watermarks. unit: px
  # 水印列间距 单位：px
  colSpacing = 100
  # watermark's tangent angle. unit: deg
  # 水印旋转角度 单位：deg
  rotate = 30
  # watermark's fontSize. unit: rem
  # 水印字体大小，单位：rem
  fontSize = 2
  # watermark's fontFamily
  # 水印字体
  fontFamily = "inherit"

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
  google = ""
  bing = ""
  yandex = ""
  pinterest = ""
  baidu = ""
  so = ""
  sogou = ""

# Site SEO config
# 网站 SEO 配置
[seo]
  # image URL
  # 图片 URL
  image = "/favicon.svg"
  # thumbnail URL
  # 缩略图 URL
  thumbnailUrl = "/favicon.svg"


# Analytics config
# 网站分析配置
[analytics]
  enable = true
  # Google Analytics
  [analytics.google]
    id = ""
    # whether to anonymize IP
    # 是否匿名化用户 IP
    anonymizeIP = true
  # Fathom Analytics
  [analytics.fathom]
    id = ""
    # server url for your tracker if you're self hosting
    # 自行托管追踪器时的主机路径
    server = ""

# Cookie consent config
# Cookie 许可配置
[cookieconsent]
  enable = false
  # text strings used for Cookie consent banner
  # 用于 Cookie 许可横幅的文本字符串
  [cookieconsent.content]
    message = ""
    dismiss = ""
    link = ""

# CDN config for third-party library files
# 第三方库文件的 CDN 设置
[cdn]
  # CDN data file name, disabled by default ["jsdelivr.yml", "unpkg.yml", ...]
  # located in "themes/FixIt/assets/data/cdn/" directory
  # you can store your own data files in the same path under your project: "assets/data/cdn/"
  # CDN 数据文件名称, 默认不启用 ["jsdelivr.yml", "unpkg.yml", ...]
  # 位于 "themes/FixIt/assets/data/cdn/" 目录
  # 可以在你的项目下相同路径存放你自己的数据文件："assets/data/cdn/"
  # 使用 CDN 加速地址文件地址 assets/data/cdn/ 
  data = "unpkg.yml"

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
  permalink = "https://github.com/geekswg/blog-fixit/"
  title = "在 GitHub 查看代码"
  position = "left" # ["left", "right"]

# Gravatar config since v0.2.14
# Gravatar 设置 since v0.2.14
[gravatar]
  enable = false
  # Gravatar host, default: "www.gravatar.com" gravatar头像
  # Gravatar 主机，默认：“www.gravatar.com”
  host = "cn.gravatar.com" # ["cn.gravatar.com", "gravatar.loli.net", ...]
  style = "mp" # ["", "mp", "identicon", "monsterid", "wavatar", "retro", "blank", "robohash"]

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
  # Available values: ["left", "right"]
  # 可用值：["left", "right"]
  start = "left"
  # Available values: ["top", "bottom"]
  # 可用值：["top", "bottom"]
  position = "top"
  reversed = false
  light = "#0076ff"
  dark = "#fff"
  height = "2px"

# FixIt 0.2.17 | NEW Progress bar in the top during page loading
# For more information: https://github.com/CodeByZach/pace
# FixIt 0.2.17 | 新增 页面加载期间顶部的进度条
# 有关详细信息：https://github.com/CodeByZach/pace
[pace]
  enable = true
  # All available colors:
  # 所有可用颜色：
  # ["black", "blue", "green", "orange", "pink", "purple", "red", "silver", "white", "yellow"]
  color = "blue"
  # All available themes:
  # 所有可用主题：
  # ["barber-shop", "big-counter", "bounce", "center-atom", "center-circle", "center-radar", "center-simple",
  # "corner-indicator", "fill-left", "flash", "flat-top", "loading-bar", "mac-osx", "material", "minimal"]
  theme = "loading-bar"

# Define custom file paths
# Create your custom files in site directory `layouts/partials/custom` and uncomment needed files below
# 定义自定义文件路径
# 在站点目录 `layouts/partials/custom` 中创建您的自定义文件，并取消注释下面需要的文件
[customFilePath]
  # aside = "custom/aside.html"
  # profile = "custom/profile.html"
  footer = "custom/footer.html"
  aside = "custom/aside.html"

# Developer options since v0.2.15
# 开发者选项 since v0.2.15
[dev]
  enable = false
  # Check for updates
  # 检查更新
  c4u = false
  # For using the GitHub API, please do not expose to public!
  # 用于使用 GitHub API，请勿公开展示！
  githubToken = ""
  # Mobile Devtools config
  # 移动端开发者工具配置
  [dev.mDevtools]
    enable = false
    # "vConsole", "eruda" supported
    # 支持 "vConsole", "eruda"
    type = "vConsole"
```




---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2023/fixit-beautification/  

