/**
 * javascript for shortcode mmt-netease
 * @author @Lruihao (https://lruihao.cn)
 */

const PLUGINS_LIVE2D = new(function(){
  const $live2d = document.querySelector('.plugins-live2d-data');

  /**
   * 主入口 初始话 live2d插件
   * @returns 
   */
  this.initPluginsLive2d = () => {
    if (!$live2d ) {
      console.log('--- 初始 plugings_live2d失败 ---');
      return;
    }
    console.log('--- 初始 plugings_live2d开始 ---');
    this.getRequire();
    console.log('--- 初始 getRequire完成 ---');


    console.log(['初始 initMyLive2d  参数: ', `${$live2d.dataset.live2d_width}`
      , `${$live2d.dataset.live2d_height}` , `${$live2d.dataset.live2d_position}` 
      , `${$live2d.dataset.live2d_minwidth}`]
    .join(' / '));
    this.initMyLive2d(`${$live2d.dataset.live2d_width}`,`${$live2d.dataset.live2d_height}`,`${$live2d.dataset.live2d_position}`,`${$live2d.dataset.live2d_minwidth}`);
    // $comment.addEventListener('click', () => {
    //   this.getRandomComment($music.dataset.autoplay);
    // });
  };


  /**
   * require APlayer and MetingJS
   */
  this.getRequire = () => {

  };

  this.strimStr = function(srcStr){
    srcStr = srcStr || '';
    srcStr = srcStr.replace(/(\"|'*)/g, '');
    return srcStr;
  }

  /**
   * 初始化 live2d 
   * @param {*} live2d_width 宽度
   * @param {*} live2d_height 高度
   * @param {*} position 位置 //'left:10'; //页面左边10px;
   */
  this.initMyLive2d = function(live2d_width,live2d_height,position,minWidth){
    live2d_width = live2d_width || '200'; //live2d_width=live2d_height.replace(/(\"|'*)/g, '');
    live2d_height = live2d_height || '200'; //live2d_height=live2d_height.replace(/(\"|'*)/g, '');
    position = position || 'left:10'; //页面左边10px; 
    //position = position.replace(/(\"|'*)/g, '');
    minWidth = minWidth || '400px' ;// minWidth = this.strimStr(minWidth);

    console.info([live2d_width,live2d_height,position,minWidth].join(' / '));

    $("<link>").attr({href: "https://live2d.fghrsh.net/assets/1.4.2/waifu.min.css", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    // waifu-tips.js 依赖 JQuery 库
    $.ajax({url: 'https://live2d.fghrsh.net/assets/1.4.2/jquery.min.js',dataType:"script", cache: true, async: false});
    // 实现拖动效果，需引入 JQuery UI
    $.ajax({url: 'https://live2d.fghrsh.net/assets/1.4.2/jquery-ui.min.js',dataType:"script", cache: true, async: false});
    $.ajax({url: "https://live2d.fghrsh.net/assets/1.4.2/waifu-tips.min.js", dataType:"script", cache: true, success: function() {
    $.ajax({url: "https://live2d.fghrsh.net/assets/1.4.2/live2d.min.js", dataType:"script", cache: true, success: function() {
        /* 可直接修改部分参数 */
        live2d_settings['hitokotoAPI'] = 'hitokoto.cn'; // 一言 API
        live2d_settings['modelId'] = 6;                    // 默认模型 ID
        live2d_settings['modelTexturesId'] = 16;            // 默认材质 ID
        live2d_settings['modelStorage'] = true;           // 不储存模型 ID
        live2d_settings['canCloseLive2d'] = true;         // 隐藏 关闭看板娘 按钮
        live2d_settings['canTurnToHomePage'] = true;      // 隐藏 返回首页 按钮
        live2d_settings['waifuSize'] = live2d_width+'x'+live2d_height;          // 看板娘大小
        live2d_settings['homePageUrl']  = '/';       // 主页地址，可选 'auto'(自动), '{URL 网址}'
        live2d_settings['aboutPageUrl'] = '/about/';   // 关于页地址, '{URL 网址}'
        
        live2d_settings['waifuTipsSize'] = (live2d_width-10)+'x'+live2d_height/4;      // 提示框大小
        //live2d_settings['waifuFontSize'] = '16px';         // 提示框字体
        live2d_settings['waifuEdgeSide'] = position;     // 看板娘贴边方向
        live2d_settings['waifuToolFont'] = (live2d_height/10)+'px';         // 工具栏字体
        live2d_settings['waifuToolLine'] = (live2d_height/8)+'px';       // 工具栏行高，例如 '20px', '36px'
        live2d_settings['waifuToolTop'] = '16px';         // 工具栏顶部边距

        live2d_settings['waifuEdgeSide']        =  position;    // 看板娘贴边方向，例如 'left:0'(靠左 0px), 'right:30'(靠右 30px)
        live2d_settings['waifuDraggable']       = 'unlimited';    // 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
        live2d_settings['waifuDraggableRevert'] = false;         // 松开鼠标还原拖拽位置，可选 true(真), false(假)
        live2d_settings['waifuMinWidth']        = minWidth;      // 面页小于 指定宽度 隐藏看板娘，例如 'disable'(禁用), '768px'
        live2d_settings['modelRandMode']        = 'rand';       //switch 模型切换，可选 'rand'(随机), 'switch'(顺序)
        live2d_settings['modelTexturesRandMode']= 'switch';     //rand 材质切换，可选 'rand'(随机), 'switch'(顺序)
            
        /* 内置 waifu-tips.json */
        initModel({
            "waifu": {
                "console_open_msg": ["哈哈，你打开了控制台，是想要看看我的秘密吗？"],
                "copy_message": ["你都复制了些什么呀，转载要记得加上出处哦"],
                "screenshot_message": ["照好了嘛，是不是很可爱呢？"],
                "hidden_message": ["我们还能再见面的吧…"],
                "load_rand_textures": ["我还没有其他衣服呢", "我的新衣服好看嘛"],
                "hour_tips": {
                    "t5-7": ["早上好！一日之计在于晨，美好的一天就要开始了"],
                    "t7-11": ["上午好！工作顺利嘛，不要久坐，多起来走动走动哦！"],
                    "t11-14": ["中午了，工作了一个上午，现在是午餐时间！"],
                    "t14-17": ["午后很容易犯困呢，今天的运动目标完成了吗？"],
                    "t17-19": ["傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~"],
                    "t19-21": ["晚上好，今天过得怎么样？"],
                    "t21-23": ["已经这么晚了呀，早点休息吧，晚安~"],
                    "t23-5": ["你是夜猫子呀？这么晚还不睡觉，明天起的来嘛"],
                    "default": ["嗨~ 快来逗我玩吧！"]
                },
                "referrer_message": {
                    "localhost": ["欢迎阅读<span style=\"color:#0099cc;\">『", "』</span>", " - "],
                    "baidu": ["Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style=\"color:#0099cc;\">", "</span> 找到的我吗？"],
                    "so": ["Hello! 来自 360搜索 的朋友<br>你是搜索 <span style=\"color:#0099cc;\">", "</span> 找到的我吗？"],
                    "google": ["Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style=\"color:#0099cc;\">『", "』</span>", " - "],
                    "default": ["Hello! 来自 <span style=\"color:#0099cc;\">", "</span> 的朋友"],
                    "none": ["欢迎阅读<span style=\"color:#0099cc;\">『", "』</span>", " - "]
                },
                "referrer_hostname": {
                    "example.com": ["示例网站"],
                    "www.fghrsh.net": ["FGHRSH 的博客"]
                },
                "model_message": {
                    "1": ["来自 Potion Maker 的 Pio 酱 ~"],
                    "2": ["来自 Potion Maker 的 Tia 酱 ~"]  
                },
                "hitokoto_api_message": {
                    "lwl12.com": ["这句一言来自 <span style=\"color:#0099cc;\">『{source}』</span>", "，是 <span style=\"color:#0099cc;\">{creator}</span> 投稿的", "。"],
                    "fghrsh.net": ["这句一言出处是 <span style=\"color:#0099cc;\">『{source}』</span>，是 <span style=\"color:#0099cc;\">FGHRSH</span> 在 {date} 收藏的！"],
                    "jinrishici.com": ["这句诗词出自 <span style=\"color:#0099cc;\">《{title}》</span>，是 {dynasty}诗人 {author} 创作的！"],
                    "hitokoto.cn": ["这句一言来自 <span style=\"color:#0099cc;\">『{source}』</span>，是 <span style=\"color:#0099cc;\">{creator}</span> 在 hitokoto.cn 投稿的。"]
                }
            },
            "mouseover": [
              { "selector": ".container a[href^='http']", "text": ["要看看 <span style=\"color:#0099cc;\">{text}</span> 么？"] },
              { "selector": ".container a[href^='#']", "text": ["要看目录 <span style=\"color:#0099cc;\">{text}</span> 么？"] },
              { "selector": ".container a[href^='/']", "text": ["要看看 <span style=\"color:#0099cc;\">{text}</span> 么？"] },
              { "selector": ".menu a[href]", "text": ["要看看菜单 <span style=\"color:#0099cc;\">{text}</span> 么？"] },
              { "selector": "#share-bar a[href]", "text": ["好东西要和朋友一起分享 <span style=\"color:#0099cc;\">{text}</span> 么？"] },
              { "selector": ".widgets .fixed-button", "text": ["小助手 <span style=\"color:#0099cc;\">{text}</span> "] },
              { "selector": ".search", "text": ["<span style=\"color:#0099cc;\">这里可以找到你想要的东西哟{text}</span> "] },
      
              { "selector": ".aplayer-info", "text": ["来一起听音乐吧~~~ {text}"] },
              { "selector": ".aplayer-list li", "text": ["听听 <span style=\"color:#0099cc;\">{text}</span> ？"] },
                
                { "selector": ".fui-home", "text": ["点击前往首页，想回到上一页可以使用浏览器的后退功能哦"] },
                { "selector": ".fui-chat", "text": ["一言一语，一颦一笑。一字一句，一颗赛艇。"] },
                { "selector": ".fui-eye", "text": ["嗯··· 要切换 看板娘 吗？"] },
                { "selector": ".fui-user", "text": ["喜欢换装 Play 吗？"] },
                { "selector": ".fui-photo", "text": ["要拍张纪念照片吗？"] },
                { "selector": ".fui-info-circle", "text": ["这里有关于我的信息呢"] },
                { "selector": ".fui-cross", "text": ["你不喜欢我了吗..."] },
                { "selector": "#tor_show", "text": ["翻页比较麻烦吗，点击可以显示这篇文章的目录呢"] },
                { "selector": "#comment_go", "text": ["想要去评论些什么吗？"] },
                { "selector": "#night_mode", "text": ["深夜时要爱护眼睛呀"] },
                { "selector": "#qrcode", "text": ["手机扫一下就能继续看，很方便呢"] },
                { "selector": ".comment_reply", "text": ["要吐槽些什么呢"] },
                { "selector": "#back-to-top", "text": ["回到开始的地方吧"] },
                { "selector": "#author", "text": ["该怎么称呼你呢"] },
                { "selector": "#mail", "text": ["留下你的邮箱，不然就是无头像人士了"] },
                { "selector": "#url", "text": ["你的家在哪里呢，好让我去参观参观"] },
                { "selector": "#textarea", "text": ["认真填写哦，垃圾评论是禁止事项"] },
                { "selector": ".OwO-logo", "text": ["要插入一个表情吗"] },
                { "selector": "#csubmit", "text": ["要[提交]^(Commit)了吗，首次评论需要审核，请耐心等待~"] },
                { "selector": ".ImageBox", "text": ["点击图片可以放大呢"] },
                { "selector": "input[name=s]", "text": ["找不到想看的内容？搜索看看吧"] },
                { "selector": ".previous", "text": ["去上一页看看吧"] },
                { "selector": ".next", "text": ["去下一页看看吧"] },
                { "selector": ".dropdown-toggle", "text": ["这里是菜单"] },
                { "selector": "c-player a.play-icon", "text": ["想要听点音乐吗"] },
                { "selector": "c-player div.time", "text": ["在这里可以调整<span style=\"color:#0099cc;\">播放进度</span>呢"] },
                { "selector": "c-player div.volume", "text": ["在这里可以调整<span style=\"color:#0099cc;\">音量</span>呢"] },
                { "selector": "c-player div.list-button", "text": ["<span style=\"color:#0099cc;\">播放列表</span>里都有什么呢"] },
                { "selector": "c-player div.lyric-button", "text": ["有<span style=\"color:#0099cc;\">歌词</span>的话就能跟着一起唱呢"] },
                { "selector": ".waifu #live2d", "text": ["干嘛呢你，快把手拿开", "鼠…鼠标放错地方了！"] }
            ],
            "click": [
                {
                    "selector": ".waifu #live2d",
                    "text": [
                      "是…是不小心碰到了吧！",
                      "萝莉控是什么呀？",
                      "你看到我的小熊了吗",
                      "再摸的话我可要报警了！⌇●﹏●⌇",
                      "你在做什么呀，大变态！⌇●﹏●⌇",
                      "我已经名花有主了，不要动坏心思哟(❤️´艸｀❤️)",
                      "你什么气质？，和我用一样的手机，给我砸了😡",
                      "110吗，这里有个变态一直在摸我(ó﹏ò｡)"
                    ]
                }
            ],
            "seasons": [
                { "date": "01/01", "text": ["<span style=\"color:#0099cc;\">元旦</span>了呢，新的一年又开始了，今年是{year}年~"] },
                { "date": "02/14", "text": ["又是一年<span style=\"color:#0099cc;\">情人节</span>，{year}年找到对象了嘛~"] },
                { "date": "03/08", "text": ["今天是<span style=\"color:#0099cc;\">妇女节</span>！"] },
                { "date": "03/12", "text": ["今天是<span style=\"color:#0099cc;\">植树节</span>，要保护环境呀"] },
                { "date": "04/01", "text": ["悄悄告诉你一个秘密~<span style=\"background-color:#34495e;\">今天是愚人节，不要被骗了哦~</span>"] },
                { "date": "05/01", "text": ["今天是<span style=\"color:#0099cc;\">五一劳动节</span>，计划好假期去哪里了吗~"] },
                { "date": "06/01", "text": ["<span style=\"color:#0099cc;\">儿童节</span>了呢，快活的时光总是短暂，要是永远长不大该多好啊…"] },
                { "date": "09/03", "text": ["<span style=\"color:#0099cc;\">中国人民抗日战争胜利纪念日</span>，铭记历史、缅怀先烈、珍爱和平、开创未来。"] },
                { "date": "09/10", "text": ["<span style=\"color:#0099cc;\">教师节</span>，在学校要给老师问声好呀~"] },
                { "date": "10/01", "text": ["<span style=\"color:#0099cc;\">国庆节</span>，新中国已经成立69年了呢"] },
                { "date": "11/05-11/12", "text": ["今年的<span style=\"color:#0099cc;\">双十一</span>是和谁一起过的呢~"] },
                { "date": "12/20-12/31", "text": ["这几天是<span style=\"color:#0099cc;\">圣诞节</span>，主人肯定又去剁手买买买了~"] }
            ]
        });
    }});
}});
}


});



(() => {
  // It will be executed when the DOM tree is built.
  document.addEventListener('DOMContentLoaded', () => {    
    //初始化
    PLUGINS_LIVE2D.initPluginsLive2d();
  });
})();
