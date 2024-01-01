# 快速搭建Hexo-blog指南


快速搭建hexo博客的步骤如下：

1. 安装Nodejs [https://nodejs.org/zh-cn](https://nodejs.org/zh-cn)
2. 安装Git, [https://git-scm.com/](https://git-scm.com/)
3. 安装Hexo, [https://hexo.io/zh-cn/index.html](https://hexo.io/zh-cn/index.html)
4. 初始化Hexo
5. 选择主题
6. 发布文章
&lt;!--more--&gt;

## 前置环境

* 安装Node.js
* 安装Git
* 安装Hexo

## Hexo安装与配置

1. 初始化站点 `hexo init &lt;folder&gt;`
2. 进入个目录 `cd folder`
3. 新建文章 `hexo new &lt;title&gt;`
4. 启动Hexo站点 `hexo clean &amp;&amp; hexo g &amp;&amp; hexo s`

### 上传到github

## 安装主题并启动

[hexo博客地址](https://hexo.geekswg.top/)

&gt; 使用 Hexo主题  [hexo-theme-anzhiyu](https://github.com/fixit-theme/hexo-theme-anzhiyu.git)
文档地址：https://anzhiy.cn/tags/AnZhiYu/

配置地址：[传送地址](https://github.com/gavinblog/blog-anzhiyu/blob/master/_config.anzhiyu.yml)

可参考修改，部分都加入中文注释

## Hexo自动部署Action

```yaml
name: 自动发布 hexo-deploay
# 触发条件：在 push 到 master 分支后触发
on:
  push:
    branches: 
      - master  # 可以添加多个分支

env:
  TZ: Asia/Shanghai

jobs:
  blog-cicd:
    name: Hexo blog build &amp; deploy
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
        node-version: &#39;16.x&#39;

    # 下载网站源码
    - name: Cache node modules
      # 设置包缓存目录，避免每次下载
      uses: actions/cache@v1
      with:
        path: ~/.npm
        key: ${{ runner.os }}-node-${{ hashFiles(&#39;**/package-lock.json&#39;) }}

    # 安装依赖
    - name: Install hexo dependencies
      # 下载 hexo-cli 脚手架及相关安装包
      run: |
        npm install -g hexo-cli
        npm install --no-fund
        npm install hexo-renderer-pug hexo-renderer-stylus --save
        npm install hexo-generator-search --save
        npm ls --depth 0

    # hexo 编译生成网站
    - name: Generate files
      # 编译 markdown 文件
      run: |
        hexo clean
        hexo generate

    # 自动发布到当前仓库的gh-pages分支，如需部署到其它仓库的，参考下面文档修改配置即可
    # 更多高级用法查看文档，https://github.com/peaceiris/actions-gh-pages
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        # 1.如何生成 github_token，github主页,Settings / Developer settings / Personal access tokens (classic)
        # 2.github_token 在 仓库 Settings,Actions secrets and variables,设置
        github_token: ${{ secrets.ACCESS_TOKEN }}
        publish_dir: ./public

        # Deploy to external repository external_repository
        # 发布到其他仓库的配置，注意必须使用deploy_key，获取和设置方法同上。
        #deploy_key: ${{ secrets.ACTIONS_DEPLOY_KEY }}
        #external_repository: username/external-repository
        #publish_branch: your-branch  # default: gh-pages
        #publish_dir: ./public


        # 以下配置可忽悠，测试功能
        user_name: &#39;github-actions[bot]&#39;
        user_email: &#39;github-actions[bot]@users.noreply.github.com&#39;
        commit_message: ${{ github.event.head_commit.message }}
        #full_commit_message: ${{ github.event.head_commit.message }}
        tag_name: ${{ steps.prepare_tag.outputs.DEPLOY_TAG_NAME }}
        tag_message: &#39;Deployment ${{ github.ref_name }}&#39;
        #cname: github.com

```


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.github.io/posts/2023/build-hexo-blog/  

