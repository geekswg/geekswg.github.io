# Fixit-theme修改和PR过程

{{&lt; admonition &gt;}}
记录一次修改fixit主题代码，并pr的过程
note abstract info tip success question warning failure danger bug example quote
{{&lt; /admonition &gt;}}

&lt;!--more--&gt;

## fork项目

fork源项目到自己github仓库。

## 修改代码

主题项目根录下
修改文件
`src/js/theme.js` 修改代码实现参数的配置使用
`layouts/partials/assets.html` 添加参数的读取
`config.toml`  添加参数配置的demo

## 编译运行 

在主题下根目录运行 `npm run babel`
&gt; 前提是要安装 node.js 环境

## 测试

在你自己的的hugo站点下修改对应的配置，观察测试，配置是否生效。

## 进行PR

1. 提交代码到自己的分支

2. 发起PR到原作者的仓库

3. 等待原作者的合并。

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2023/theme-develop-pr/  

