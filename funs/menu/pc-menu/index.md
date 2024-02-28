# 

&lt;!DOCTYPE html&gt;
&lt;html lang=&#34;zh&#34;&gt;
&lt;head&gt;
    &lt;meta charset=&#34;utf-8&#34;&gt;
    &lt;meta http-equiv=&#34;Content-Type&#34; content=&#34;text/html; charset=utf-8&#34;&gt;
    &lt;title&gt;js网页左上角扇形导航菜单特效&lt;/title&gt;
    &lt;link href=&#34;style.css&#34; rel=&#34;stylesheet&#34; /&gt;
&lt;/head&gt;

&lt;body&gt;

    &lt;div class=&#34;menuHolder&#34; style=&#34;background: #46b0ff;&#34; &gt;
        &lt;div class=&#34;menuWindow&#34;&gt;
            &lt;ul class=&#34;p1&#34;&gt;
                &lt;li class=&#34;s1&#34;&gt;&lt;a href=&#34;javascript:;&#34;&gt;导航菜单&lt;/a&gt;
                    &lt;ul id=&#34;p2&#34; class=&#34;p2&#34;&gt;
                        
                        
        
                    &lt;/ul&gt;
                &lt;/li&gt;
            &lt;/ul&gt;
        &lt;/div&gt;
        &lt;/div&gt;
    &lt;div style=&#34;height:360px;&#34;&gt;&lt;/div&gt;
    
&lt;script&gt;
        var menu = [
            {
                title: &#39;tool-实用工具&#39;,
                subtitle: [&#39;cool-keybord-炫酷键盘&#39;, &#39;color-picker颜色拾取器&#39;, &#39;pwd-generator-密码生成器&#39;
                ,&#39;qrcode-creator二维码生成&#39;,&#39;dev-tool在线工具&#39;],
                subUrl:[&#39;/funs/pages/tools-jq-keybord/&#39;,&#39;/funs/pages/tools-color-picker/&#39;,&#39;/funs/pages/tools-generator/&#39;
                ,&#39;/funs/pages/tools-qrcode-creator/&#39;,&#39;/html/tools/html-dev-tool/&#39;]
            },
            {
                title: &#39;game-游戏&#39;,
                subtitle: [&#39;cube-魔方&#39;, &#39;ai-chess-AI国际象棋&#39;, &#39;2048&#39;, &#39;四级菜单&#39;],
                subUrl:[&#39;/funs/pages/games-cube/&#39;,&#39;/funs/pages/games-ai-chess/&#39;,&#39;/funs/pages/games-2048/&#39;,&#39;/&#39;]
            },
            {
                title: &#39;album-相册&#39;,
                subtitle: [&#39;3d-carousel&#39;, &#39;accordion-image-相册&#39;, &#39;菜单3&#39;, &#39;菜单4&#39;, &#39;菜单5&#39;],
                subUrl:[&#39;/funs/pages/3d-carousel/&#39;,&#39;/funs/pages/album-accordion-image/&#39;,&#39;/&#39;,&#39;/&#39;,&#39;/&#39;]
            }
        ]
        renderMenu(menu)
        function renderMenu(menu) {
            var lis = &#39;&#39;
            const deg = 90
            var p2 = document.getElementById(&#39;p2&#39;)
            for (var i = 0; i &lt; menu.length; i&#43;&#43;) {
                var sublis = &#39;&#39;
                var rotateDeg = deg / menu.length
                for (var j = 0; j &lt; menu[i].subtitle.length; j&#43;&#43;) {
                    var subrotateDeg = deg / menu[i].subtitle.length
                    var lineHeight = 600/menu[i].subtitle.length &#43; 40
                    sublis &#43;= &#39;&lt;li&gt;&#39; &#43;
                        &#39;&lt;a target=&#34;_blank&#34; style=&#34;transform: rotate(&#39; &#43; (subrotateDeg * j) &#43; &#39;deg);line-height:&#39;&#43;lineHeight&#43;&#39;px&#34; href=&#34;&#39;&#43;menu[i].subUrl[j]&#43;&#39;&#34;&gt;&#39; &#43;
                        &#39;&lt;span&gt;&#39; &#43; menu[i].subtitle[j] &#43; &#39;&lt;/span&gt;&#39; &#43;
                        &#39;&lt;/a&gt;&#39; &#43;
                        &#39;&lt;/li&gt;&#39;
                }
                var ul = &#39; &lt;ul class=&#34;p3 a&#39; &#43; menu[i].subtitle.length &#43; &#39;&#34;&gt;&#39; &#43; sublis &#43; &#39;&lt;/ul&gt;&#39;
                lis &#43;= &#39;&lt;li class=&#34;s2&#34;&gt;&#39; &#43;
                    &#39;&lt;a style=&#34;transform: rotate(&#39; &#43; (rotateDeg * i) &#43; &#39;deg);&#34; href=&#34;javascript:;&#34;&gt;&lt;span&gt;&#39; &#43; menu[i].title &#43; &#39;&lt;/span&gt;&lt;/a&gt;&#39; &#43;
                    &#39;&#39; &#43; ul &#43; &#39;&#39; &#43;
                    &#39;&lt;/li&gt;&#39;
            }
            p2.innerHTML = lis
        }
&lt;/script&gt;
  
&lt;/body&gt;
&lt;/html&gt;

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.github.io/funs/menu/pc-menu/  

