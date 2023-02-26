# 基于Fixit主题美化记录


{{< admonition quote "说明" true >}}
记录自己博客主题的修改和美化记录
{{< /admonition >}}
这里使用MD语法编写你的文章
<!--more-->

## 首页-home
修改更新资料背景

## 侧边栏-aside

自定义aside.html

### 添加天气插件

## 头部自定义

### 添加按钮

### 添加版娘
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

{{< link "https://www.travellings.cn" "开往" "" true >}}
{{< link "https://www.foreverblog.cn/" "十年之约" "" true >}}

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

