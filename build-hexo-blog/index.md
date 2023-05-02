# 快速搭建Hexo-blog指南


快速搭建hexo博客的步骤如下：

1. 安装Nodejs [https://nodejs.org/zh-cn](https://nodejs.org/zh-cn)
2. 安装Git, [https://git-scm.com/](https://git-scm.com/)
3. 安装Hexo, [https://hexo.io/zh-cn/index.html](https://hexo.io/zh-cn/index.html)
4. 初始化Hexo
5. 选择主题
6. 发布文章
<!--more-->

## 前置环境

* 安装Node.js
* 安装Git
* 安装Hexo

## Hexo安装与配置

1. 初始化站点 `hexo init <folder>`
2. 进入个目录 `cd folder`
3. 新建文章 `hexo new <title>`
4. 启动Hexo站点 `hexo clean && hexo g && hexo s`

### 上传到github

## 安装主题并启动

[hexo博客地址](https://hexo.geekswg.top/)

> 使用 Hexo主题  [hexo-theme-anzhiyu](https://github.com/fixit-theme/hexo-theme-anzhiyu.git)
文档地址：https://anzhiy.cn/tags/AnZhiYu/

配置地址：[传送地址](https://github.com/gavinblog/blog-anzhiyu/blob/master/_config.anzhiyu.yml)

可参考修改，部分都加入中文注释

## Hexo自动部署Action

```yaml
name: 自动发布 hexo-deploay
# 触发条件：在 push 到 hexo-blog-backup 分支后触发
on:
  push:
    branches: 
      - master

env:
  TZ: Asia/Shanghai

jobs:
  blog-cicd:
    name: Hexo blog build & deploy
    runs-on: ubuntu-latest # 使用最新的 Ubuntu 系统作为编译部署的环境

    steps:
    - name: Checkout codes
      uses: actions/checkout@v3
      with:
        submodules: true # 加载子模块，避免初始化过程中的额外加载。

    - name: Setup node
      # 设置 node.js 环境
      uses: actions/setup-node@v1
      with:
        node-version: '16.x'

    - name: Cache node modules
      # 设置包缓存目录，避免每次下载
      uses: actions/cache@v1
      with:
        path: ~/.npm
        key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}

    - name: Install hexo dependencies
      # 下载 hexo-cli 脚手架及相关安装包
      run: |
        npm i hexo-theme-anzhiyu
        npm install -g hexo-cli
        npm install --no-fund
        npm install hexo-renderer-pug hexo-renderer-stylus --save
        npm install hexo-generator-search --save
        npm ls --depth 0

    - name: Generate files
      # 编译 markdown 文件
      run: |
        hexo clean
        hexo generate

    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.ACCESS_TOKEN }}
        publish_dir: ./public
```


---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/build-hexo-blog/  

