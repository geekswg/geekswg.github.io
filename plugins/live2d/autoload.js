try {
    initLoaclLive2d('200','260','left:30');//初始化本地模型
} catch(err) { 
    console.log('[Error] JQuery is not defined.');
    console.error(err);
}

function initLoaclLive2d(live2d_width,live2d_height,position){
    live2d_width = live2d_width || '200';
    live2d_height = live2d_height || '200';
    position = position || 'left:10'; //页面左边10px;

    $("<link>").attr({href: "/plugins/live2d/assets/waifu.min.css?v=1.4.2", rel: "stylesheet", type: "text/css"}).appendTo('head');
    $('body').append('<div class="waifu"><div class="waifu-tips"></div><canvas id="live2d" class="live2d"></canvas><div class="waifu-tool"><span class="fui-home"></span> <span class="fui-chat"></span> <span class="fui-eye"></span> <span class="fui-user"></span> <span class="fui-photo"></span> <span class="fui-info-circle"></span> <span class="fui-cross"></span></div></div>');
    $.ajax({url: '/plugins/live2d/assets/waifu-tips.min.js?v=1.4.2',dataType:"script", cache: true, async: false});
    $.ajax({url: '/plugins/live2d/assets/live2d.min.js?v=1.0.5',dataType:"script", cache: true, async: false});
    /* 可直接修改部分参数 */
    /* 可直接修改部分参数 */
    live2d_settings['hitokotoAPI'] = 'hitokoto.cn'; // 一言 API
    live2d_settings['modelId'] = 6;                    // 默认模型 ID
    live2d_settings['modelTexturesId'] = 16;            // 默认材质 ID
    // live2d_settings['modelStorage']    = true;         // 记录 ID (刷新后恢复)，可选 true(真), false(假)
    // live2d_settings['canCloseLive2d'] = true;         // 隐藏 关闭看板娘 按钮
    // live2d_settings['canTurnToHomePage'] = true;      // 隐藏 返回首页 按钮
    live2d_settings['homePageUrl']          = '/';       // 主页地址，可选 'auto'(自动), '{URL 网址}'
    live2d_settings['aboutPageUrl']         = '/about/';   // 关于页地址, '{URL 网址}'
    live2d_settings['waifuSize'] = live2d_width+'x'+live2d_height;          // 看板娘大小
    live2d_settings['waifuTipsSize']        = live2d_width+'x66';     // 提示框大小，例如 '250x70', '570x150'
    live2d_settings['waifuFontSize']        = '16px';       // 提示框字体，例如 '12px', '30px'
    live2d_settings['waifuToolFont']        = '22px';       // 工具栏字体，例如 '14px', '36px'
    live2d_settings['waifuToolLine']        = '26px';       // 工具栏行高，例如 '20px', '36px'

    live2d_settings['waifuToolTop']         = '-30px'       // 工具栏顶部边距，例如 '0px', '-60px'
    live2d_settings['waifuEdgeSide']        =  position;    // 看板娘贴边方向，例如 'left:0'(靠左 0px), 'right:30'(靠右 30px)
    live2d_settings['waifuDraggable']       = 'unlimited';    // 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
    live2d_settings['waifuDraggableRevert'] = false;         // 松开鼠标还原拖拽位置，可选 true(真), false(假)
    live2d_settings['waifuMinWidth']        = '100px';      // 面页小于 指定宽度 隐藏看板娘，例如 'disable'(禁用), '768px'
    live2d_settings['modelRandMode']        = 'rand';       //switch 模型切换，可选 'rand'(随机), 'switch'(顺序)
    live2d_settings['modelTexturesRandMode']= 'switch';     //rand 材质切换，可选 'rand'(随机), 'switch'(顺序)
    
    // 后端接口
    live2d_settings['modelAPI']             = '//live2d.fghrsh.net/api/';   // 自建 API 修改这里  https://api3.fghrsh.net/live2d/ https://www.fghrsh.net/post/123.html
    /* 在 initModel 前添加 */
    initModel('/plugins/live2d/assets/waifu-tips.json');
    console.info("initLoaclLive2d success!");
}