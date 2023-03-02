# funs-menu

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title>js网页左上角扇形导航菜单特效</title>
  <link rel="stylesheet" type="text/css" href="index.css" />
</head>
<body>

<div class="menuHolder">
<div class="menuWindow">
	<ul class="p1">
		<li class="s1"><a href="javascript:;">导航菜单</a>
			<ul id="p2" class="p2">
				
				

			</ul>
		</li>
	</ul>
</div>
</div>

<script>
var menu = [
	{
		title: 'tool-实用工具',
		subtitle: ['cool-keybord-炫酷键盘', 'color-picker-颜色拾取器', 'pwd-generator-密码生成器'],
		subUrl:['/funs/pages/tools-jq-keybord/','https://bing.com','https://qq.com']
	},
	{
		title: 'game-游戏',
		subtitle: ['cube-魔方', 'ai-chess-AI国际象棋', '2048', '四级菜单'],
		subUrl:['/funs/game-cube/','https://bing.com','https://qq.com','https://qq.com']
	},
	{
		title: 'album-相册',
		subtitle: ['3d-carousel', 'accordion-image-相册', '三级菜单', '四级菜单'],
		subUrl:['/funs/3d-carousel/','/funs/pages/album-accordion-image/','https://qq.com','https://qq.com']
	}
]
renderMenu(menu)
function renderMenu(menu) {
	var lis = ''
	const deg = 90
	var p2 = document.getElementById('p2')
	for (var i = 0; i < menu.length; i++) {
		var sublis = ''
		var rotateDeg = deg / menu.length
		for (var j = 0; j < menu[i].subtitle.length; j++) {
			var subrotateDeg = deg / menu[i].subtitle.length
			var lineHeight = 600/menu[i].subtitle.length + 40
			sublis += '<li>' +
				'<a target="_blank" style="transform: rotate(' + (subrotateDeg * j) + 'deg);line-height:'+lineHeight+'px" href="'+menu[i].subUrl[j]+'">' +
				'<span>' + menu[i].subtitle[j] + '</span>' +
				'</a>' +
				'</li>'
		}
		var ul = ' <ul class="p3 a' + menu[i].subtitle.length + '">' + sublis + '</ul>'
		lis += '<li class="s2">' +
			'<a style="transform: rotate(' + (rotateDeg * i) + 'deg);" href="javascript:;"><span>' + menu[i].title + '</span></a>' +
			'' + ul + '' +
			'</li>'
	}
	p2.innerHTML = lis
}
</script>

</body>
</html>


---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/funs/menu/  

