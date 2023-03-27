# Cursor帮我写的代码

{{< admonition note "申明" >}}
记录由AI工具帮忙写的代码，越来越离不开Cusor了。
作者: [Cursor](https://www.cursor.so/)
{{< /admonition >}}
<!--more-->

## 白名单功能

### 指令

> `Ctrl + K` 写一个白名单功能，白名单数组，如果网址在白名单内，则放行跳转到该网址

```js
let whitelist = ['example.com', 'google.com', 'facebook.com'];

function checkWhitelist(url) {
  let hostname = new URL(url).hostname;
  return whitelist.includes(hostname);
}

if (checkWhitelist(window.location.href)) {
  window.location.href = window.location.href;
}
```

写的不错满足我的要求，比我自己想的实现方法简单不少。

---

> 作者: map[link:https://www.cursor.so/ name:Cursor]  
> URL: https://geekswg.github.io/code-writed-by-cursor/  

