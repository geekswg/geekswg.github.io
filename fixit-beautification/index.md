# 基于Fixit主题美化记录


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

> 文件位置 /assets\css/_custom.scss

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

```html
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

---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/fixit-beautification/  

