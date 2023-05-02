# Cursor帮我写的代码

{{< admonition note "申明" >}}
记录由AI工具帮忙写的代码，越来越离不开Cusor了。
作者: [Cursor](https://www.cursor.so/)
{{< /admonition >}}
<!--more-->

## 白名单功能

### 指令

> `Ctrl + K` 实现方法一个白名单网站数组，判断当前的文字是否在白名单内，如果在则放行跳转。

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

### 指令 数组遍历

> `Ctrl + K` js数组遍历写法

```js
// ES5 forEach
var arr = [1, 2, 3];
arr.forEach(function(item, index, array) {
  console.log(item, index);
});

// ES6 for...of
var arr = [1, 2, 3];
for (let item of arr) {
  console.log(item);
}

// ES6 entries() + destructuring
var arr = [1, 2, 3];
for (let [index, item] of arr.entries()) {
  console.log(index, item);
}

// ES6 entries() + forEach()
var arr = [1, 2, 3];
arr.entries().forEach(function(item) {
  console.log(item[0], item[1]);
});

// ES6 map()
var arr = [1, 2, 3];
arr.map(function(item, index) {
  console.log(item, index);
});

// ES6 reduce()
var arr = [1, 2, 3];
arr.reduce(function(prev, curr, index) {
  console.log(prev, curr, index);
});

// ES6 filter()
var arr = [1, 2, 3];
arr.filter(function(item, index) {
  console.log(item, index);
});

// ES6 find()
var arr = [1, 2, 3];
arr.find(function(item, index) {
  console.log(item, index);
});

// ES6 findIndex()
var arr = [1, 2, 3];
arr.findIndex(function(item, index) {
  console.log(item, index);
});

// ES6 some()
var arr = [1, 2, 3];
arr.some(function(item, index) {
  console.log(item, index);
});

// ES6 every()
var arr = [1, 2, 3];
arr.every(function(item, index) {
  console.log(item, index);
});

// for loop
var arr = [1, 2, 3];
for (var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for loop with cached length
var arr = [1, 2, 3];
for (var i = 0, len = arr.length; i < len; i++) {
  console.log(arr[i]);
}

// while loop
var arr = [1, 2, 3];
var i = 0;
while (i < arr.length)
```


---

> 作者: [Cursor](https://www.cursor.so/)  
> URL: https://geekswg.github.io/code-writed-by-cursor/  

