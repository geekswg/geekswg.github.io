# 

&lt;!DOCTYPE html&gt;
&lt;html lang=&#34;en&#34; &gt;
&lt;head&gt;
&lt;meta charset=&#34;UTF-8&#34;&gt;
&lt;title&gt;JS实现漂亮的随机密码生成器DEMO演示&lt;/title&gt;

&lt;!--图标库--&gt;

&lt;!--字体库--&gt;


&lt;!--主要样式--&gt;
&lt;link rel=&#34;stylesheet&#34; href=&#34;css/style.css&#34;&gt;

&lt;/head&gt;
&lt;body&gt;

&lt;div class=&#34;container&#34;&gt;
	&lt;h2 class=&#34;title&#34;&gt;密码生成器&lt;/h2&gt;
	&lt;div class=&#34;result&#34;&gt;
		&lt;div class=&#34;result__title field-title&#34;&gt;生成的密码&lt;/div&gt;
		&lt;div class=&#34;result__info right&#34;&gt;点击复制&lt;/div&gt;
		&lt;div class=&#34;result__info left&#34;&gt;复制&lt;/div&gt;
		&lt;div class=&#34;result__viewbox&#34; id=&#34;result&#34;&gt;点击生成&lt;/div&gt;
		&lt;button id=&#34;copy-btn&#34; style=&#34;--x: 0; --y: 0&#34;&gt;&lt;i class=&#34;far fa-copy&#34;&gt;&lt;/i&gt;&lt;/button&gt;
	&lt;/div&gt;
	&lt;div class=&#34;length range__slider&#34; data-min=&#34;4&#34; data-max=&#34;32&#34;&gt;
		&lt;div class=&#34;length__title field-title&#34; data-length=&#39;0&#39;&gt;长度：&lt;/div&gt;
		&lt;input id=&#34;slider&#34; type=&#34;range&#34; min=&#34;4&#34; max=&#34;32&#34; value=&#34;16&#34; /&gt;
	&lt;/div&gt;

	&lt;div class=&#34;settings&#34;&gt;
		&lt;span class=&#34;settings__title field-title&#34;&gt;settings&lt;/span&gt;
		&lt;div class=&#34;setting&#34;&gt;
			&lt;input type=&#34;checkbox&#34; id=&#34;uppercase&#34; checked /&gt;
			&lt;label for=&#34;uppercase&#34;&gt;包含大写&lt;/label&gt;
		&lt;/div&gt;
		&lt;div class=&#34;setting&#34;&gt;
			&lt;input type=&#34;checkbox&#34; id=&#34;lowercase&#34; checked /&gt;
			&lt;label for=&#34;lowercase&#34;&gt;包含小写&lt;/label&gt;
		&lt;/div&gt;
		&lt;div class=&#34;setting&#34;&gt;
			&lt;input type=&#34;checkbox&#34; id=&#34;number&#34; checked /&gt;
			&lt;label for=&#34;number&#34;&gt;包括数字&lt;/label&gt;
		&lt;/div&gt;
		&lt;div class=&#34;setting&#34;&gt;
			&lt;input type=&#34;checkbox&#34; id=&#34;symbol&#34; /&gt;
			&lt;label for=&#34;symbol&#34;&gt;包括符号&lt;/label&gt;
		&lt;/div&gt;
	&lt;/div&gt;

	&lt;button class=&#34;btn generate&#34; id=&#34;generate&#34;&gt;生成密码&lt;/button&gt;
&lt;/div&gt;

&lt;script  src=&#34;js/script.js&#34;&gt;&lt;/script&gt;

&lt;div style=&#34;text-align:center;clear:both;&#34;&gt;
&lt;script src=&#34;/gg_bd_ad_720x90.js&#34; type=&#34;text/javascript&#34;&gt;&lt;/script&gt;
&lt;script src=&#34;/follow.js&#34; type=&#34;text/javascript&#34;&gt;&lt;/script&gt;
&lt;/div&gt;

&lt;/body&gt;
&lt;/html&gt;

---

> 作者:   
> URL: https://geekswg.github.io/funs/tools/js-passwd-generator/  

