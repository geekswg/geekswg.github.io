# CNBLog主题配置


<h1>主题信息</h1>
<p>主题作者：<a href="https://www.cnblogs.com/bndong" target="_blank">https://www.cnblogs.com/bndong</a></p>
<p>主题文档：<a href="https://bndong.github.io/Cnblogs-Theme-SimpleMemory/v2/#/">简介 - Document (bndong.github.io)</a></p>
<p>主题源码：<a href="https://gitee.com/dbnuo/Cnblogs-Theme-SimpleMemory">Cnblogs-Theme-SimpleMemory: Cnblogs theme / Basic theme : SimpleMemory (gitee.com)</a></p>
<h1>博客侧边栏公告&nbsp;</h1>
<div class="cnblogs_code">
<pre>&lt;script type="text/javascript"&gt;<span style="color: #000000;">
    window.cnblogsConfig </span>=<span style="color: #000000;"> {
        cnzz: </span>"1280245132", <span style="color: #008000;">//</span><span style="color: #008000;">网站统计</span>
<span style="color: #000000;">        info: {
            name: </span>'独行侠', <span style="color: #008000;">//</span><span style="color: #008000;"> 用户名</span>
            startDate: '2010-01-01', <span style="color: #008000;">//</span><span style="color: #008000;"> 入园时间，年-月-日。入园时间查看方法：鼠标停留园龄时间上，会显示入园时间</span>
            avatar: 'https://geekswg.gitee.io/static/img/mine.jpg', <span style="color: #008000;">//</span><span style="color: #008000;"> 用户头像</span>
            blogIcon: 'https://geekswg.gitee.io/static/img/favicon.ico'<span style="color: #000000;">,
        },
        sidebar: { </span><span style="color: #008000;">//</span><span style="color: #008000;"> 列表数据 ['导航名称', '链接', 'icon']</span>
<span style="color: #000000;">            navList: [
                [</span>'我的博客', 'https://geekswg.gitee.io/music', 'icon-github'<span style="color: #000000;">],
                [</span>'我的码云', 'https://gitee.com/geekswg', 'icon-gitee'<span style="color: #000000;">],
                [</span>'给我写信', 'https://gitee.com/geekswg', 'icon-logo_QQ'<span style="color: #000000;">],
                [</span>'音乐后台', 'https://player.ilt.me/admin/user/login', 'icon-logo_ie'<span style="color: #000000;">],
            ],
            customList: {
                </span>"标题一": { <span style="color: #008000;">//</span><span style="color: #008000;"> 标题</span>
                    "data": [ <span style="color: #008000;">//</span><span style="color: #008000;"> 列表数据 ['列表', '链接']</span>
                        ['我的博客1', 'https://www.cnblogs.com/geekswg/'<span style="color: #000000;">],
                        [</span>'我的博客2', 'https://www.cnblogs.com/geekswg/'<span style="color: #000000;">],
                        [</span>'我的博客3', 'https://www.cnblogs.com/geekswg/'<span style="color: #000000;">],
                    ],
                    </span>"icon": "icon-brush_fill" <span style="color: #008000;">//</span><span style="color: #008000;"> 配置图标，参考文档：定制化/字体图标库</span>
<span style="color: #000000;">                },
                </span>"标题二": { <span style="color: #008000;">//</span><span style="color: #008000;"> 标题</span>
                    "data": [ <span style="color: #008000;">//</span><span style="color: #008000;"> 列表数据 ['列表', '链接']</span>
                        ['我的博客6', 'https://www.cnblogs.com/geekswg/'<span style="color: #000000;">],
                        [</span>'我的博客7', 'https://www.cnblogs.com/geekswg/'<span style="color: #000000;">],
                        [</span>'我的博客8', 'https://www.cnblogs.com/geekswg/'<span style="color: #000000;">],
                    ],
                    </span>"icon": "icon-brush_fill" <span style="color: #008000;">//</span><span style="color: #008000;"> 配置图标，参考文档：定制化/字体图标库</span>
<span style="color: #000000;">                },
            },
        },
        footer: {</span><span style="color: #008000;">//</span><span style="color: #008000;">页脚</span>
<span style="color: #000000;">            text: {
                left: </span>'但行好事'<span style="color: #000000;">,
                right: </span>'莫问前程'<span style="color: #000000;">,
                iconFont: {
                    icon: </span>"icon-xl"<span style="color: #000000;">,
                    color: </span>"red"<span style="color: #000000;">,
                    fontSize: </span>"18px"<span style="color: #000000;">
                }
            },
            style: </span>3<span style="color: #000000;">,
        },
        links: {</span><span style="color: #008000;">//</span><span style="color: #008000;">友链</span>
<span style="color: #000000;">            footer: [
                [</span>"BNDong", 'https://www.cnblogs.com/bndong'<span style="color: #000000;">],
                [</span>"申请坑位", 'https://msg.cnblogs.com/send/geekswg'<span style="color: #000000;">],
                [</span>"申请坑位", 'https://msg.cnblogs.com/send/geekswg'<span style="color: #000000;">],
            ],
        },
        rtMenu: {</span><span style="color: #008000;">//</span><span style="color: #008000;">二维码</span>
            qrCode: 'https://geekswg.gitee.io/SimpleMemory/imgs/myQRcode.png'<span style="color: #000000;">,
            reward: {
                alipay: </span>'https://geekswg.gitee.io/SimpleMemory/imgs/QRcode-alipay.png'<span style="color: #000000;">,
                wechatpay: </span>'https://geekswg.gitee.io/SimpleMemory/imgs/QRCode-wechat.jpg'<span style="color: #000000;">
            },
            downScrollDom: </span>'#blog_post_info_block'<span style="color: #000000;">,
        },
        switchDayNight: { </span><span style="color: #008000;">//</span><span style="color: #008000;">夜间模式切换</span>
            enable: <span style="color: #0000ff;">true</span>,       <span style="color: #008000;">//</span><span style="color: #008000;"> 是否开启日/夜间模式切换按钮</span>
            nightMode: <span style="color: #0000ff;">false</span>,   <span style="color: #008000;">//</span><span style="color: #008000;"> 强制夜间模式 （版本 &gt;= v2.0.6）</span>
            auto: {             <span style="color: #008000;">//</span><span style="color: #008000;"> 自动切换相关配置</span>
                enable: <span style="color: #0000ff;">false</span>,  <span style="color: #008000;">//</span><span style="color: #008000;"> 开启自动切换</span>
                dayHour: 5,     <span style="color: #008000;">//</span><span style="color: #008000;"> 日间模式开始时间，整数型，24小时制</span>
                nightHour: 20   <span style="color: #008000;">//</span><span style="color: #008000;"> 夜间模式开始时间，整数型，24小时制</span>
<span style="color: #000000;">            }
        },
        animate: {</span><span style="color: #008000;">//</span><span style="color: #008000;">动画</span>
<span style="color: #000000;">            homeBanner: {
                enable: </span><span style="color: #0000ff;">true</span>, <span style="color: #008000;">//</span><span style="color: #008000;"> 是否开启动效</span>
<span style="color: #000000;">                options: {
                    radius: </span>50<span style="color: #000000;">,
                    density: </span>0.2<span style="color: #000000;">,
                    color: </span>'random', <span style="color: #008000;">//</span><span style="color: #008000;"> 颜色设置，&ldquo;random&rdquo; 为随机颜色</span>
                    clearOffset: 0.3<span style="color: #000000;">
                }
            },
            articleBanner: {
                enable: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
            },
            background: {
                enable: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
                options: {
                    colorSaturation: </span>"60%"<span style="color: #000000;">,
                    colorBrightness: </span>"50%"<span style="color: #000000;">,
                    colorAlpha: </span>0.5<span style="color: #000000;">,
                    colorCycleSpeed: </span>5<span style="color: #000000;">,
                    verticalPosition: </span>"random"<span style="color: #000000;">,
                    horizontalSpeed: </span>200<span style="color: #000000;">,
                    ribbonCount: </span>3<span style="color: #000000;">,
                    strokeSize: </span>0<span style="color: #000000;">,
                    parallaxAmount: </span>-0.2<span style="color: #000000;">,
                    animateSections: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">
                }
            },
        },
        articleSuffix: {
            copyrightHtml: </span>"版权..."<span style="color: #000000;">,
            aboutHtml: </span>"I am a good person"<span style="color: #000000;">,
        },
       loading:{</span><span style="color: #008000;">//</span><span style="color: #008000;">载入页</span>
<span style="color: #000000;">            rebound: {
                tension: </span>14<span style="color: #000000;">,
                friction: </span>10<span style="color: #000000;">
            },
            spinner: {
                id: </span>'spinner'<span style="color: #000000;">,
                radius: </span>90<span style="color: #000000;">,
                sides: </span>5<span style="color: #000000;">,
                depth: </span>8<span style="color: #000000;">,
                colors: {
                    background: </span>'#00272C'<span style="color: #000000;">,
                    stroke: </span><span style="color: #0000ff;">null</span><span style="color: #000000;">,
                    base: </span><span style="color: #0000ff;">null</span><span style="color: #000000;">,
                    child: </span>'#02C39A'<span style="color: #000000;">
                },
                alwaysForward: </span><span style="color: #0000ff;">true</span>, <span style="color: #008000;">//</span><span style="color: #008000;"> When false the spring will reverse normally.</span>
                restAt: <span style="color: #0000ff;">null</span>, <span style="color: #008000;">//</span><span style="color: #008000;"> A number from 0.1 to 0.9 || null for full rotation</span>
                renderBase: <span style="color: #0000ff;">false</span><span style="color: #000000;">
            },
       },
       progressBar: { </span><span style="color: #008000;">//</span><span style="color: #008000;">顶部进度条样式</span>
         color   : '#77b6ff'<span style="color: #000000;">,
         height  : </span>'5px'<span style="color: #000000;">,
         duration: </span>0.5<span style="color: #000000;">,
       },
       code: {
            type: </span>'hljs'<span style="color: #000000;">,
            options: {
                line: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
                macStyle: </span><span style="color: #0000ff;">true</span><span style="color: #000000;">,
                maxHeight: </span>'70vh'<span style="color: #000000;">,
                hljs: {
                    theme: </span>'atom-one-dark-reasonable'<span style="color: #000000;">,
                    languages: [],
                    
                },
            },
        },
    }

    </span><span style="color: #008000;">//</span><span style="color: #008000;"> 友链配置</span>
    window.cnblogsConfig.links.page =<span style="color: #000000;"> [{
            name: </span>'我的博客'<span style="color: #000000;">,
            introduction: </span>'IT技术类博客'<span style="color: #000000;">,
            avatar: </span>'https://blog.dbnuo.com/images/avatar.gif'<span style="color: #000000;">,
            url: </span>'https://geekswg.gitee.io/music'<span style="color: #000000;">
        },
        {
            name: </span>'BNDong'<span style="color: #000000;">,
            introduction: </span>'IT技术类博客'<span style="color: #000000;">,
            avatar: </span>'https://blog.dbnuo.com/images/avatar.gif'<span style="color: #000000;">,
            url: </span>'https://geekswg.gitee.io/music'<span style="color: #000000;">
        },
    ];

</span>&lt;/script&gt;
&lt;script src="https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@v2.0.7/dist/simpleMemory.js" defer&gt;&lt;/script&gt;</pre>
</div>
<h1>侧边音乐</h1>
<p>在页脚HTML代码中添加</p>
<div class="cnblogs_code">
<pre>&lt;!-- ===========侧边栏音乐插件========= --&gt;
&lt;!-- https:<span style="color: #008000;">//</span><span style="color: #008000;">player.ilt.me/  提供支持 geekswg  --&gt;</span>
 &lt;script id="ilt" src="https://geekswg.gitee.io/player/js/player.js" key="b4c63958cd344d34a901fb1311673d65"&gt;&lt;/script&gt; 
&lt;!-- https:<span style="color: #008000;">//</span><span style="color: #008000;">player.ilt.me/admin/user/login 音乐管理后台地址</span>
--&gt;
&lt;!-- ============侧边栏音乐插件========= --&gt;</pre>
</div>
<p>&nbsp;</p>

## 音乐插件2
> 在设置 中 页脚HTML代码 中添加  

```javascrpt
<!-- require APlayer -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css">
<script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js"></script>
<!-- require MetingJS -->
<script src="https://cdn.jsdelivr.net/npm/meting@2/dist/Meting.min.js"></script>
<meting-js
        lrc-type="0"
        server="tencent" id='8138088068'
        type="playlist"
        order="random"
        fixed="true" mini="true" autoplay="true" theme="auto"
	auto="https://y.qq.com/n/yqq/playlist/8138088068.html">
    <pre hidden>
		
	</pre>
</meting-js>
<!--
qq音乐源地址 -> 修改后地址
https://y.qq.com/n/ryqq/playlist/8138088068 -> https://y.qq.com/n/yqq/playlist/8138088068.html
-->
```
## 页面统计
> 页面访问统计添加 [https://uweb.umeng.com/](友盟+)
在设置 中 页脚HTML代码 中添加

```javascript
<!-- 页面统计 -->
<script type="text/javascript">document.write('<div id="pageVisitInfo2" style="width:100%;position:fixed;bottom:6px;text-align:center;z-index:999;">'+unescape("%3Cspan id='cnzz_stat_icon_1278974928'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1278974928%26online%3D1%26show%3Dline' type='text/javascript'%3E%3C/script%3E")+'</div>');</script>
<!-- 页面统计 -->
```

## 鼠标点击效果
>在设置 中 页脚HTML代码 中添加  

```javascript
<!-- 鼠标特效 -->
<script>
// =====鼠标特效
function clickEffect() {
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
clickEffect(); //调用
</script>
<!-- 鼠标特效 -->
```
## 博客侧边栏公告
>   完整版  

```
<script type="text/javascript">
    window.cnblogsConfig = {
        cnzz: "1280245132", //网站统计
        info: {
            name: '独行侠', // 用户名
            startDate: '2010-01-01', // 入园时间，年-月-日。入园时间查看方法：鼠标停留园龄时间上，会显示入园时间
            avatar: 'https://geekswg.gitee.io/static/img/mine.jpg', // 用户头像
            blogIcon: 'https://geekswg.gitee.io/static/img/favicon.ico',
        },
        banner: { //首页 每日一句话 ，jinrishici：每次刷新随机获取一句古诗词。one：每日获取一句话
            home: {
                title: [
                    '莫笑少年江湖梦，谁不少年梦江湖。','曾经年少立志三千里，如今踌躇百步无寸功。','懵懂半生，庸碌尘世中，转眼高堂皆白发，儿女蹒跚学堂中。','碎银几两催人老。',
                    '心仍少，皱纹却上眉目中，浮生醉酒回梦里。','青春人依旧，只叹时光太匆匆！',
                    '长风破浪会有时，直挂云帆济沧海。 ——《行路难》 李白',
                    '天生我材必有用，千金散尽还复来。 ——《将进酒》 李白',
                    '人生得意须尽欢，莫使金樽空对月。 ——《将进酒》李白',
                    '众里寻他千百度，蓦然回首，那人却在灯火阑珊处。','花自飘零水自流，一种相思，两种闲愁。此情无计可消除，才下眉头，却上心头。——《如梦令》','花径不曾缘客扫，蓬门今始为君开。——《客至》',
                    '人攀明月不可得，月行却与人相随。——《把酒问月》','会当凌绝顶，一览众山小。——《望岳》','但见新人笑，那闻旧人哭。——《佳人》','衣带渐宽终不悔，为伊消得人憔悴。——《凤栖梧》','莫愁前路无知己，天下谁人不识君。——高适《别董大》',
                    '曾经沧海难为水，除却巫山不是云。——元稹《离思五首·其四》',
                    '山穷水复疑无路，柳暗花明又一村。'
                ],
                titleSource: 'one',
            }
        },
        sidebar: { // 列表数据 ['导航名称', '链接', 'icon']
            navList: [
                ['写 博 客', 'https://i.cnblogs.com/posts/edit', 'icon-cnblogs'],
                ['留 言 板', 'https://www.cnblogs.com/geekswg/p/13047579.html', 'icon-activity_fill'],
                ['我的主页', 'https://geekswg.gitee.io/music', 'icon-homepage_fill'], 
                
                ['Github ', 'https://gitee.com/geekswg', 'icon-github'],
                ['我的码云', 'https://gitee.com/geekswg', 'icon-gitee'],
                ['给我写信', 'http://wpa.qq.com/msgrd?v=3&uin=1101303970&site=qq&menu=yes', 'icon-logo_QQ'],

                ['学习教程', 'https://www.runoob.com/', 'icon-logo_ie']
                ['音乐后台', 'https://player.ilt.me/admin/user/login', 'icon-logo_ie'],
            ],
            customList: {
                "沉迷学习": { // 标题
                    "data": [ // 列表数据 ['列表', '链接']
                        ['菜鸟教程', 'https://www.runoob.com/', 'icon-logo_ie'],
                        ['我的博客2', 'https://www.cnblogs.com/geekswg/'],
                        ['我的博客3', 'https://www.cnblogs.com/geekswg/'],
                    ],
                    "icon": "icon-brush_fill" // 配置图标，参考文档：定制化/字体图标库
                },
                "常用工具": { // 标题
                    "data": [ // 列表数据 ['列表', '链接']
                        ['Maven仓库', 'https://mvnrepository.com/'],
                        ['我的博客7', 'https://www.cnblogs.com/geekswg/', 'icon-logo_ie'],
                        ['我的博客8', 'https://www.cnblogs.com/geekswg/'],
                    ],
                    "icon": "icon-brush_fill" // 配置图标，参考文档：定制化/字体图标库
                },
            },
        },
        footer: {//页脚
            text: {
                left: '但行好事',
                right: '莫问前程',
                iconFont: {
                    icon: "icon-xl",
                    color: "red",
                    fontSize: "18px"
                }
            },
            style: 3,
        },
        links: {//友链
            footer: [
                ["BNDong", 'https://www.cnblogs.com/bndong'],
                ["申请坑位", 'https://msg.cnblogs.com/send/geekswg'],
                ["申请坑位", 'https://msg.cnblogs.com/send/geekswg'],
            ],
        },
        rtMenu: {//二维码
            qrCode: 'https://geekswg.gitee.io/SimpleMemory/imgs/myQRcode.png',
            reward: {
                alipay: 'https://geekswg.gitee.io/SimpleMemory/imgs/QRcode-alipay.png',
                wechatpay: 'https://geekswg.gitee.io/SimpleMemory/imgs/QRCode-wechat.jpg'
            },
            downScrollDom: '#blog_post_info_block',
        },
        switchDayNight: { //夜间模式切换
            enable: true,       // 是否开启日/夜间模式切换按钮
            nightMode: false,   // 强制夜间模式 （版本 >= v2.0.6）
            auto: {             // 自动切换相关配置
                enable: true,  // 开启自动切换
                dayHour: 5,     // 日间模式开始时间，整数型，24小时制
                nightHour: 20   // 夜间模式开始时间，整数型，24小时制
            }
        },
        animate: {//动画
            homeBanner: {
                enable: true, // 是否开启动效
                options: {
                    radius: 50,
                    density: 0.2,
                    color: 'random', // 颜色设置，“random” 为随机颜色
                    clearOffset: 0.3
                }
            },
            articleBanner: {
                enable: true,
            },
            background: {
                enable: true,
                options: {
                    colorSaturation: "60%",
                    colorBrightness: "50%",
                    colorAlpha: 0.5,
                    colorCycleSpeed: 5,
                    verticalPosition: "random",
                    horizontalSpeed: 200,
                    ribbonCount: 3,
                    strokeSize: 0,
                    parallaxAmount: -0.2,
                    animateSections: true
                }
            },
            mouse: {
                enable: true,
                options: {
                    size: 12, // 中心圆点的大小，单位 px
                    sizeF: 36 // 外部边框的大小，单位 px
                },
            },
        },
        articleSuffix: {
            copyrightHtml: "版权所有，未经授权，请勿随意转载！...",
            aboutHtml: "I am a good person",
        },
       loading:{//载入页
            rebound: {
				tension: 14,
				friction: 10
		    },
			spinner: {
				id: 'spinner',
				radius: 90,
				sides: 5,
				depth: 8,
				colors: {
					background: '#00272C',
					stroke: null,
					base: null,
					child: '#02C39A'
				},
				alwaysForward: true, // When false the spring will reverse normally.
				restAt: null, // A number from 0.1 to 0.9 || null for full rotation
				renderBase: false
			},
       },
       progressBar: { //顶部进度条样式
         color   : '#77b6ff',
         height  : '5px',
         duration: 0.5,
       },
       code: {
            type: 'hljs',
            options: {
                line: true,
                macStyle: true,
             //   maxHeight: '70vh',
                hljs: {
                    theme: 'atom-one-dark-reasonable',
                    languages: [],
                    
                },
            },
        },
    }

    // 友链配置
    window.cnblogsConfig.links.page = [{
            name: '我的博客',
            introduction: 'IT技术类博客',
            avatar: 'https://blog.dbnuo.com/images/avatar.gif',
            url: 'https://geekswg.gitee.io/music'
        },
        {
            name: 'BNDong',
            introduction: 'IT技术类博客',
            avatar: 'https://blog.dbnuo.com/images/avatar.gif',
            url: 'https://geekswg.gitee.io/music'
        },
    ];

</script>

<script src="https://cdn.jsdelivr.net/gh/BNDong/Cnblogs-Theme-SimpleMemory@v2.0.8/dist/simpleMemory.js" defer></script>
```

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2021/%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE/  

