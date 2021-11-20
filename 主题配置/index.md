# 主题配置

# 安装GO

# 安装Hugo
&gt; windows 下载 [huto](https://github.com/gohugoio/hugo/releases) 直接解压
&gt; 配置环境变量
测试 在cmd中输入 hugo version 查看 hugo 是否安装完成

# 下载Hugo主题LoveIt
在 windows 下
```
hugo new site blog
cd themes
git clone 
```
# 配置主题
&gt; 在blog根目录下修改 config.toml 文件
```
#baseURL = &#34;https://geekswg.github.io/&#34;
# [en, zh-cn, fr, pl, ...] determines default content language
# [en, zh-cn, fr, pl, ...] 设置默认的语言
defaultContentLanguage = &#34;zh-cn&#34;
# 网站语言, 仅在这里 CN大写
languageCode = &#34;zh-CN&#34;
# 是否包括中日韩文字
hasCJKLanguage = true
# 主题
theme = &#34;LoveIt&#34;
# 网站标题
title = &#34;Geekswgの博客 - 在阅读中遇见自己&#34;
# 是否使用 robots.txt
enableRobotsTXT = true
# 是否使用 git 信息
enableGitInfo = true
# 是否使用 emoji 代码
enableEmoji = true
[languages]

  [languages.zh-cn]
    weight = 2
    # 网站语言, 仅在这里 CN 大写
    languageCode = &#34;zh-CN&#34;
    # 语言名称
    languageName = &#34;简体中文&#34;
    # 是否包括中日韩文字
    hasCJKLanguage = true
    # 默认每页列表显示的文章数目
    paginate = 12
    # [UA-XXXXXXXX-X] 谷歌分析代号
    googleAnalytics = &#34;&#34;
    # 版权描述，仅仅用于 SEO
    copyright = &#34;This work is licensed under a Creative Commons Attribution-NonCommercial 4.0 International License.&#34;
    # 菜单配置
    [languages.zh-cn.menu]
      [[languages.zh-cn.menu.main]]
        identifier = &#34;posts&#34;
        # 你可以在名称 (允许 HTML 格式) 之前添加其他信息, 例如图标
        pre = &#34;&#34;
        # 你可以在名称 (允许 HTML 格式) 之后添加其他信息, 例如图标
        post = &#34;&#34;
        name = &#34;所有文章&#34;
        url = &#34;/posts/&#34;
        title = &#34;&#34;
        weight = 1
      [[languages.zh-cn.menu.main]]
        identifier = &#34;tags&#34;
        pre = &#34;&#34;
        post = &#34;&#34;
        name = &#34;标签&#34;
        url = &#34;/tags/&#34;
        title = &#34;&#34;
        weight = 2
      [[languages.zh-cn.menu.main]]
        identifier = &#34;categories&#34;
        pre = &#34;&#34;
        post = &#34;&#34;
        name = &#34;分类&#34;
        url = &#34;/categories/&#34;
        title = &#34;&#34;
        weight = 3
      [[languages.zh-cn.menu.main]]
        identifier = &#34;documentation&#34;
        pre = &#34;&#34;
        name = &#34;文档&#34;
        url = &#34;/categories/documentation/&#34;
        title = &#34;&#34;
        weight = 4
      [[languages.zh-cn.menu.main]]
        identifier = &#34;about&#34;
        pre = &#34;&#34;
        post = &#34;&#34;
        name = &#34;关于&#34;
        url = &#34;/about/&#34;
        title = &#34;&#34;
        weight = 5
      [[languages.zh-cn.menu.main]]
        identifier = &#34;github&#34;
        pre = &#34;&lt;i class=&#39;fab fa-github fa-fw&#39;&gt;&lt;/i&gt;&#34;
        post = &#34;&#34;
        name = &#34;Github&#34;
        url = &#34;https://github.com/geekswg&#34;
        title = &#34;GitHub&#34;
        weight = 6
      [[languages.zh-cn.menu.main]]
        identifier = &#34;friend&#34;
        pre = &#34;&lt;i class=&#39;fas fa-user-friends&#39;&gt;&lt;/i&gt;&#34;
        post = &#34;&#34;
        name = &#34;友链&#34;
        url = &#34;/friend/&#34;
        title = &#34;&#34;
        weight = 7      
    [languages.zh-cn.params]
      # 网站描述
      description = &#34;早起的年轻人做的网站&#34;
      # 网站关键词
      keywords = [&#34;Theme&#34;, &#34;Hugo&#34;,&#34;geekswg&#34;]
      # 应用图标配置
      [languages.zh-cn.params.app]
        # 当添加到 iOS 主屏幕或者 Android 启动器时的标题, 覆盖默认标题
        title = &#34;LoveIt&#34;
        # 是否隐藏网站图标资源链接
        noFavicon = false
        # 更现代的 SVG 网站图标, 可替代旧的 .png 和 .ico 文件
        svgFavicon = &#34;/images/avatar.png&#34;
        # Android 浏览器主题色
        themeColor = &#34;#ffffff&#34;
        # Safari 图标颜色
        iconColor = &#34;#5bbad5&#34;
        # Windows v8-10 磁贴颜色
        tileColor = &#34;#da532c&#34;
      # 搜索配置
      [languages.zh-cn.params.search]
        enable = true
        # 搜索引擎的类型 (&#34;lunr&#34;, &#34;algolia&#34;)
        type = &#34;algolia&#34;
        # 文章内容最长索引长度
        contentLength = 4000
        # 搜索框的占位提示语
        placeholder = &#34;&#34;
        # 最大结果数目
        maxResultLength = 10
        # 结果内容片段长度
        snippetLength = 50
        # 搜索结果中高亮部分的 HTML 标签
        highlightTag = &#34;em&#34;
        # 是否在搜索索引中使用基于 baseURL 的绝对路径
        absoluteURL = false
        [languages.zh-cn.params.search.algolia]
          index = &#34;index.zh-cn&#34;
          appID = &#34;PASDMWALPK&#34;
          searchKey = &#34;b42948e51daaa93df92381c8e2ac0f93&#34;
      # 主页信息设置
      [languages.zh-cn.params.home]
        # RSS 文章数目
        rss = 10
        # 主页个人信息
        [languages.zh-cn.params.home.profile]
          enable = true
          # Gravatar 邮箱，用于优先在主页显示的头像
          gravatarEmail = &#34;&#34;
          # 主页显示头像的 URL
          avatarURL = &#34;/images/avatar.png&#34;
          # 主页显示的网站标题 (支持 HTML 格式)
          title = &#34;&#34;
          # 主页显示的网站副标题
          subtitle = &#34;一个记录学习过程的网站&#34;
          # 是否为副标题显示打字机动画
          typeit = true
          # 是否显示社交账号
          social = true
          # 免责声明 (支持 HTML 格式)
          disclaimer = &#34;&#34;
        # 主页文章列表
        [languages.zh-cn.params.home.posts]
          enable = true
          # 主页每页显示文章数量
          paginate = 6
      # 主页的社交信息设置
      [languages.zh-cn.params.social]
        Gitee = &#34;geekswg&#34;
        Email = &#34;geekswg@qq.com&#34;
        GitHub = &#34;geekswg&#34;
        Bilibili = &#34;39865904&#34;
        Zhihu = &#34;&#34;
        Linkedin = &#34;&#34;
        Twitter = &#34;&#34;
        Instagram = &#34;&#34;
        Facebook = &#34;&#34;
        Telegram = &#34;&#34;
        Medium = &#34;&#34;
        Gitlab = &#34;&#34;
        Youtubelegacy = &#34;&#34;
        Youtubecustom = &#34;&#34;
        Youtubechannel = &#34;&#34;
        Tumblr = &#34;&#34;
        Quora = &#34;&#34;
        Keybase = &#34;&#34;
        Pinterest = &#34;&#34;
        Reddit = &#34;&#34;
        Codepen = &#34;&#34;
        FreeCodeCamp = &#34;&#34;
        Bitbucket = &#34;&#34;
        Stackoverflow = &#34;&#34;
        # Weibo = &#34;xxxx&#34;
        Odnoklassniki = &#34;&#34;
        VK = &#34;&#34;
        Flickr = &#34;&#34;
        Xing = &#34;&#34;
        Snapchat = &#34;&#34;
        Soundcloud = &#34;&#34;
        Spotify = &#34;&#34;
        Bandcamp = &#34;&#34;
        Paypal = &#34;&#34;
        Fivehundredpx = &#34;&#34;
        Mix = &#34;&#34;
        Goodreads = &#34;&#34;
        Lastfm = &#34;&#34;
        Foursquare = &#34;&#34;
        Hackernews = &#34;&#34;
        Kickstarter = &#34;&#34;
        Patreon = &#34;&#34;
        # Steam = &#34;xxxx&#34;
        Twitch = &#34;&#34;
        Strava = &#34;&#34;
        Skype = &#34;&#34;
        Whatsapp = &#34;&#34;
        # Juejin =&#34;user/3843548384077192&#34;
        # Douban = &#34;xxxx&#34;
        Angellist = &#34;&#34;
        Slidershare = &#34;&#34;
        Jsfiddle = &#34;&#34;
        Deviantart = &#34;&#34;
        Behance = &#34;&#34;
        Dribbble = &#34;&#34;
        Wordpress = &#34;&#34;
        Vine = &#34;&#34;
        Googlescholar = &#34;&#34;
        Researchgate = &#34;&#34;
        Mastodon = &#34;&#34;
        Thingiverse = &#34;&#34;
        Devto = &#34;&#34;
        Gitea = &#34;&#34;
        XMPP = &#34;&#34;
        Matrix = &#34;&#34;
        # Email = &#34;852851198@qq.com&#34;
        # RSS = true

[params]
  # LoveIt theme version
  # LoveIt 主题版本
  version = &#34;0.2.X&#34;
  # site default theme (&#34;light&#34;, &#34;dark&#34;, &#34;auto&#34;)
  # 网站默认主题 (&#34;light&#34;, &#34;dark&#34;, &#34;auto&#34;)
  defaultTheme = &#34;auto&#34;
  # public git repo url only then enableGitInfo is true
  # 公共 git 仓库路径，仅在 enableGitInfo 设为 true 时有效
  gitRepo = &#34;https://github.com/dillonzq/LoveIt&#34;
  # which hash function used for SRI, when empty, no SRI is used (&#34;sha256&#34;, &#34;sha384&#34;, &#34;sha512&#34;, &#34;md5&#34;)
  # 哪种哈希函数用来 SRI, 为空时表示不使用 SRI (&#34;sha256&#34;, &#34;sha384&#34;, &#34;sha512&#34;, &#34;md5&#34;)
  fingerprint = &#34;&#34;
  # date format
  # 日期格式
  dateFormat = &#34;2006-01-02&#34;
  # website images for Open Graph and Twitter Cards
  # 网站图片, 用于 Open Graph 和 Twitter Cards
  images = [&#34;/logo.png&#34;]
  #来自之前
  archivePaginate = 50

  # show &#39;xx Posts In Total&#39; in archive page ?            # 是否在归档页显示文章的总数
  showArchiveCount = true
  # Header config
  # 页面头部导航栏配置
  [params.header]
    # desktop header mode (&#34;fixed&#34;, &#34;normal&#34;, &#34;auto&#34;)
    # 桌面端导航栏模式 (&#34;fixed&#34;, &#34;normal&#34;, &#34;auto&#34;)
    desktopMode = &#34;fixed&#34;
    # mobile header mode (&#34;fixed&#34;, &#34;normal&#34;, &#34;auto&#34;)
    # 移动端导航栏模式 (&#34;fixed&#34;, &#34;normal&#34;, &#34;auto&#34;)
    mobileMode = &#34;auto&#34;
    # Header title config
    # 页面头部导航栏标题配置
    [params.header.title]
      # URL of the LOGO
      # LOGO 的 URL
      logo = &#34;&#34;
      # title name
      # 标题名称
      name = &#34;早起的年轻人&#34;
      # you can add extra information before the name (HTML format is supported), such as icons
      # 你可以在名称 (允许 HTML 格式) 之前添加其他信息, 例如图标
      pre = &#34;&lt;i class=&#39;far fa-kiss-wink-heart fa-fw&#39;&gt;&lt;/i&gt;&#34;
      # you can add extra information after the name (HTML format is supported), such as icons
      # 你可以在名称 (允许 HTML 格式) 之后添加其他信息, 例如图标
      post = &#34;&#34;
      # whether to use typeit animation for title name
      # 是否为标题显示打字机动画
      typeit = true

  [params.busuanzi]         # count web traffic by busuanzi                             # 是否使用不蒜子统计站点访问量
    enable = true
    siteUV = true
    sitePV = true
    pagePV = true

  [params.reward]                                         # 文章打赏
    enable = true
    wechat = &#34;/path/to/your/wechat-qr-code.png&#34;           # 微信二维码
    alipay = &#34;/path/to/your/alipay-qr-code.png&#34;    
  # Footer config
  # 页面底部信息配置
  [params.footer]
    enable = true
    # Custom content (HTML format is supported)
    # 自定义内容 (支持 HTML 格式)
    custom = &#39;&#39;
    # whether to show Hugo and theme info
    # 是否显示 Hugo 和主题信息
    hugo = true
    # whether to show copyright info
    # 是否显示版权信息
    copyright = true
    # whether to show the author
    # 是否显示作者
    author = true
    # site creation time
    # 网站创立年份
    since = 2021
    # ICP info only in China (HTML format is supported)
    # ICP 备案信息，仅在中国使用 (支持 HTML 格式)
    icp = &#34;&#34;
    # license info (HTML format is supported)
    # 许可协议信息 (支持 HTML 格式)
    license= &#39;&lt;a rel=&#34;license external nofollow noopener noreffer&#34; href=&#34;https://creativecommons.org/licenses/by-nc/4.0/&#34; target=&#34;_blank&#34;&gt;CC BY-NC 4.0&lt;/a&gt;&#39;

  # Section (all posts) page config
  # Section (所有文章) 页面配置
  [params.section]
    # special amount of posts in each section page
    # section 页面每页显示文章数量
    paginate = 20
    # date format (month and day)
    # 日期格式 (月和日)
    dateFormat = &#34;01-02&#34;
    # amount of RSS pages
    # RSS 文章数目
    rss = 10

  # List (category or tag) page config
  # List (目录或标签) 页面配置
  [params.list]
    # special amount of posts in each list page
    # list 页面每页显示文章数量
    paginate = 20
    # date format (month and day)
    # 日期格式 (月和日)
    dateFormat = &#34;01-02&#34;
    # amount of RSS pages
    # RSS 文章数目
    rss = 10

  # Page config
  # 文章页面配置
  [params.page]
    # whether to hide a page from home page
    # 是否在主页隐藏一篇文章
    hiddenFromHomePage = false
    # whether to hide a page from search results
    # 是否在搜索结果中隐藏一篇文章
    hiddenFromSearch = false
    # whether to enable twemoji
    # 是否使用 twemoji
    twemoji = false
    # whether to enable lightgallery
    # 是否使用 lightgallery
    lightgallery = false
    # whether to enable the ruby extended syntax
    # 是否使用 ruby 扩展语法
    ruby = true
    # whether to enable the fraction extended syntax
    # 是否使用 fraction 扩展语法
    fraction = true
    # whether to enable the fontawesome extended syntax
    # 是否使用 fontawesome 扩展语法
    fontawesome = true
    # whether to show link to Raw Markdown content of the content
    # 是否显示原始 Markdown 文档内容的链接
    linkToMarkdown = true
    # whether to show the full text content in RSS
    # 是否在 RSS 中显示全文内容
    rssFullText = false
    # Table of the contents config
    # 目录配置
    [params.page.toc]
      # whether to enable the table of the contents
      # 是否使用目录
      enable = true
      # whether to keep the static table of the contents in front of the post
      # 是否保持使用文章前面的静态目录
      keepStatic = false
      # whether to make the table of the contents in the sidebar automatically collapsed
      # 是否使侧边目录自动折叠展开
      auto = true
    # Code config
    # 代码配置
    [params.page.code]
      # whether to show the copy button of the code block
      # 是否显示代码块的复制按钮
      copy = true
      # the maximum number of lines of displayed code by default
      # 默认展开显示的代码行数
      maxShownLines = 10
    # KaTeX mathematical formulas config (KaTeX https://katex.org/)
    # KaTeX 数学公式配置 (KaTeX https://katex.org/)
    [params.page.math]
      enable = true
      # default block delimiter is $$ ... $$ and \\[ ... \\]
      # 默认块定界符是 $$ ... $$ 和 \\[ ... \\]
      blockLeftDelimiter = &#34;&#34;
      blockRightDelimiter = &#34;&#34;
      # default inline delimiter is $ ... $ and \\( ... \\)
      # 默认行内定界符是 $ ... $ 和 \\( ... \\)
      inlineLeftDelimiter = &#34;&#34;
      inlineRightDelimiter = &#34;&#34;
      # KaTeX extension copy_tex
      # KaTeX 插件 copy_tex
      copyTex = true
      # KaTeX extension mhchem
      # KaTeX 插件 mhchem
      mhchem = true
    # Mapbox GL JS config (Mapbox GL JS https://docs.mapbox.com/mapbox-gl-js)
    # Mapbox GL JS 配置 (Mapbox GL JS https://docs.mapbox.com/mapbox-gl-js)
    [params.page.mapbox]
      # access token of Mapbox GL JS
      # Mapbox GL JS 的 access token
      accessToken = &#34;pk.eyJ1IjoiZGlsbG9uenEiLCJhIjoiY2s2czd2M2x3MDA0NjNmcGxmcjVrZmc2cyJ9.aSjv2BNuZUfARvxRYjSVZQ&#34;
      # style for the light theme
      # 浅色主题的地图样式
      lightStyle = &#34;mapbox://styles/mapbox/light-v10?optimize=true&#34;
      # style for the dark theme
      # 深色主题的地图样式
      darkStyle = &#34;mapbox://styles/mapbox/dark-v10?optimize=true&#34;
      # whether to add NavigationControl (https://docs.mapbox.com/mapbox-gl-js/api/#navigationcontrol)
      # 是否添加 NavigationControl (https://docs.mapbox.com/mapbox-gl-js/api/#navigationcontrol)
      navigation = true
      # whether to add GeolocateControl (https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)
      # 是否添加 GeolocateControl (https://docs.mapbox.com/mapbox-gl-js/api/#geolocatecontrol)
      geolocate = true
      # whether to add ScaleControl (https://docs.mapbox.com/mapbox-gl-js/api/#scalecontrol)
      # 是否添加 ScaleControl (https://docs.mapbox.com/mapbox-gl-js/api/#scalecontrol)
      scale = true
      # whether to add FullscreenControl (https://docs.mapbox.com/mapbox-gl-js/api/#fullscreencontrol)
      # 是否添加 FullscreenControl (https://docs.mapbox.com/mapbox-gl-js/api/#fullscreencontrol)
      fullscreen = true
    # Social share links in post page
    # 文章页面的分享信息设置
    [params.page.share]
      enable = true
      Twitter = true
      Facebook = true
      Linkedin = false
      Whatsapp = false
      Pinterest = false
      Tumblr = false
      HackerNews = true
      Reddit = false
      VK = false
      Buffer = false
      Xing = false
      Line = true
      Instapaper = false
      Pocket = false
      Digg = false
      Stumbleupon = false
      Flipboard = false
      Weibo = true
      Renren = false
      Myspace = false
      Blogger = false
      Baidu = false
      Odnoklassniki = false
      Evernote = false
      Skype = false
      Trello = false
      Mix = false
    # Comment config
    # 评论系统设置
    [params.page.comment]
      enable = true
      # Disqus comment config (https://disqus.com/)
      # Disqus 评论系统设置 (https://disqus.com/)
      [params.page.comment.disqus]
        enable = false
        # Disqus shortname to use Disqus in posts
        # Disqus 的 shortname，用来在文章中启用 Disqus 评论系统
        shortname = &#34;&#34;
      # Gitalk comment config (https://github.com/gitalk/gitalk)
      # Gitalk 评论系统设置 (https://github.com/gitalk/gitalk)
      [params.page.comment.gitalk]
        enable = false
        owner = &#34;&#34;
        repo = &#34;&#34;
        clientId = &#34;&#34;
        clientSecret = &#34;&#34;
      # Valine comment config (https://github.com/xCss/Valine)
      # Valine 评论系统设置 (https://github.com/xCss/Valine)
      [params.page.comment.valine]
        enable = true
        appId = &#39;cIRpq8figzQxyGz5LyAdUahJ-gzGzoHsz&#39;
        appKey = &#39;T9YWfgGhznKaXXx7TCLxzS3C&#39;
        notify = true  # mail notifier , https://github.com/xCss/Valine/wiki
        verify = false # Verification code
        avatar = &#39;robohash&#39;
        placeholder = &#39;说点什么吧...&#39;
        visitor = true
        path = true
        meta = true
        pageSize = true
        lang = true
        enableQQ = true
        # Facebook comment config (https://developers.facebook.com/docs/plugins/comments)
        # Facebook 评论系统设置 (https://developers.facebook.com/docs/plugins/comments)
      [params.page.comment.facebook]
        enable = false
        width = &#34;100%&#34;
        numPosts = 10
        appId = &#34;&#34;
        languageCode = &#34;&#34;
      # Telegram comments config (https://comments.app/)
      # Telegram comments 评论系统设置 (https://comments.app/)
      [params.page.comment.telegram]
        enable = false
        siteID = &#34;&#34;
        limit = 5
        height = &#34;&#34;
        color = &#34;&#34;
        colorful = true
        dislikes = false
        outlined = false
      # Commento comment config (https://commento.io/)
      # Commento comment 评论系统设置 (https://commento.io/)
      [params.page.comment.commento]
        enable = false
      # Utterances comment config (https://utteranc.es/)
      # Utterances comment 评论系统设置 (https://utteranc.es/)
      [params.page.comment.utterances]
        enable = false
        # owner/repo
        repo = &#34;&#34;
        issueTerm = &#34;pathname&#34;
        label = &#34;&#34;
        lightTheme = &#34;github-light&#34;
        darkTheme = &#34;github-dark&#34;
    # Third-party library config
    # 第三方库配置
    [params.page.library]
      [params.page.library.css]
        # someCSS = &#34;some.css&#34;
        # located in &#34;assets/&#34; 位于 &#34;assets/&#34;
        # Or 或者
        # someCSS = &#34;https://cdn.example.com/some.css&#34;
      [params.page.library.js]
        # someJavascript = &#34;some.js&#34;
        # located in &#34;assets/&#34; 位于 &#34;assets/&#34;
        # Or 或者
        # someJavascript = &#34;https://cdn.example.com/some.js&#34;
    # Page SEO config
    # 页面 SEO 配置
    [params.page.seo]
      # image URL
      # 图片 URL
      images = []
      # Publisher info
      # 出版者信息
      [params.page.seo.publisher]
        name = &#34;xxxx&#34;
        logoUrl = &#34;/images/avatar.png&#34;

  # TypeIt config
  # TypeIt 配置
  [params.typeit]
    # typing speed between each step (measured in milliseconds)
    # 每一步的打字速度 (单位是毫秒)
    speed = 100
    # blinking speed of the cursor (measured in milliseconds)
    # 光标的闪烁速度 (单位是毫秒)
    cursorSpeed = 1000
    # character used for the cursor (HTML format is supported)
    # 光标的字符 (支持 HTML 格式)
    cursorChar = &#34;|&#34;
    # cursor duration after typing finishing (measured in milliseconds, &#34;-1&#34; means unlimited)
    # 打字结束之后光标的持续时间 (单位是毫秒, &#34;-1&#34; 代表无限大)
    duration = -1

  # Site verification code for Google/Bing/Yandex/Pinterest/Baidu
  # 网站验证代码，用于 Google/Bing/Yandex/Pinterest/Baidu
  [params.verification]
    google = &#34;&#34;
    bing = &#34;&#34;
    yandex = &#34;&#34;
    pinterest = &#34;&#34;
    baidu = &#34;&#34;

  # Site SEO config
  # 网站 SEO 配置
  [params.seo]
    # image URL
    # 图片 URL
    image = &#34;/images/Apple-Devices-Preview.png&#34;
    # thumbnail URL
    # 缩略图 URL
    thumbnailUrl = &#34;/images/screenshot.png&#34;

  # Analytics config
  # 网站分析配置
  [params.analytics]
    enable = false
    # Google Analytics
    [params.analytics.google]
      id = &#34;&#34;
      # whether to anonymize IP
      # 是否匿名化用户 IP
      anonymizeIP = true
    # Fathom Analytics
    [params.analytics.fathom]
      id = &#34;&#34;
      # server url for your tracker if you&#39;re self hosting
      # 自行托管追踪器时的主机路径
      server = &#34;&#34;

  # Cookie consent config
  # Cookie 许可配置
  [params.cookieconsent]
    enable = false
    # text strings used for Cookie consent banner
    # 用于 Cookie 许可横幅的文本字符串
    [params.cookieconsent.content]
      message = &#34;&#34;
      dismiss = &#34;&#34;
      link = &#34;&#34;

  # CDN config for third-party library files
  # 第三方库文件的 CDN 设置
  [params.cdn]
    # CDN data file name, disabled by default
    # (&#34;jsdelivr.yml&#34;)
    # located in &#34;themes/LoveIt/assets/data/cdn/&#34; directory
    # you can store your own data files in the same path under your project:
    # &#34;assets/data/cdn/&#34;
    # CDN 数据文件名称, 默认不启用
    # (&#34;jsdelivr.yml&#34;)
    # 位于 &#34;themes/LoveIt/assets/data/cdn/&#34; 目录
    # 可以在你的项目下相同路径存放你自己的数据文件:
    # &#34;assets/data/cdn/&#34;
    data = &#34;jsdelivr.yml&#34;

  # Compatibility config
  # 兼容性设置
  [params.compatibility]
    # whether to use Polyfill.io to be compatible with older browsers
    # 是否使用 Polyfill.io 来兼容旧式浏览器
    polyfill = false
    # whether to use object-fit-images to be compatible with older browsers
    # 是否使用 object-fit-images 来兼容旧式浏览器
    objectFit = false

# Markup related configuration in Hugo
# Hugo 解析文档的配置
[markup]
  # Syntax Highlighting (https://gohugo.io/content-management/syntax-highlighting)
  # 语法高亮设置 (https://gohugo.io/content-management/syntax-highlighting)
  [markup.highlight]
    codeFences = true
    guessSyntax = true
    lineNos = true
    lineNumbersInTable = true
    # false is a necessary configuration (https://github.com/dillonzq/LoveIt/issues/158)
    # false 是必要的设置 (https://github.com/dillonzq/LoveIt/issues/158)
    noClasses = false
  # Goldmark is from Hugo 0.60 the default library used for Markdown
  # Goldmark 是 Hugo 0.60 以来的默认 Markdown 解析库
  [markup.goldmark]
    [markup.goldmark.extensions]
      definitionList = true
      footnote = true
      linkify = true
      strikethrough = true
      table = true
      taskList = true
      typographer = true
    [markup.goldmark.renderer]
      # whether to use HTML tags directly in the document
      # 是否在文档中直接使用 HTML 标签
      unsafe = true
  # Table Of Contents settings
  # 目录设置
  [markup.tableOfContents]
    startLevel = 1
    endLevel = 6

# Author config
# 作者配置
[author]
  name = &#34;早起的年轻人&#34;
  email = &#34;geekswg@qq.com&#34;
  link = &#34;&#34;

# Sitemap config
# 网站地图配置
[sitemap]
  changefreq = &#34;weekly&#34;
  filename = &#34;sitemap.xml&#34;
  priority = 0.5

# Permalinks config (https://gohugo.io/content-management/urls/#permalinks)
# Permalinks 配置 (https://gohugo.io/content-management/urls/#permalinks)
[Permalinks]
  # posts = &#34;:year/:month/:filename&#34;
  posts = &#34;:filename&#34;

# Privacy config (https://gohugo.io/about/hugo-and-gdpr/)
# 隐私信息配置 (https://gohugo.io/about/hugo-and-gdpr/)
[privacy]
  # privacy of the Google Analytics (replaced by params.analytics.google)
  # Google Analytics 相关隐私 (被 params.analytics.google 替代)
  [privacy.googleAnalytics]
    # ...
  [privacy.twitter]
    enableDNT = true
  [privacy.youtube]
    privacyEnhanced = true

# Options to make output .md files
# 用于输出 Markdown 格式文档的设置
# [mediaTypes]
#   [mediaTypes.&#34;text/plain&#34;]
#     suffixes = [&#34;md&#34;]

# # Options to make output .md files
# # 用于输出 Markdown 格式文档的设置
# [outputFormats.MarkDown]
#   mediaType = &#34;text/plain&#34;
#   isPlainText = false
#   isHTML = true

# # Options to make hugo output files
# # 用于 Hugo 输出文档的设置
# [outputs]
#   home = [&#34;HTML&#34;, &#34;RSS&#34;, &#34;JSON&#34;]
#   page = [&#34;HTML&#34;, &#34;MarkDown&#34;]
#   section = [&#34;HTML&#34;, &#34;RSS&#34;]
#   taxonomy = [&#34;HTML&#34;, &#34;RSS&#34;]
#   taxonomyTerm = [&#34;HTML&#34;]
```

# 上传GitHub Pages
&gt; 在vscode 终端上 输入 hugo 后回车，会编译public文件下面  
&gt; 按照以下命令 将public目录下所有文件上传到github
```
git init
git add .
git commit -m &#34;我的博客第一次提交&#34;
git remote add origin https://github.com/geekswg/geekswg.github.io.git
git push origin master
```

