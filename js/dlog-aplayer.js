/**
 * APlayer 音乐播放器初始化
 * 用于 DLog 页面的音乐播放功能
 */

document.addEventListener('DOMContentLoaded', function() {
    // 检查页面中是否有 aplayer 元素
    const aplayerElements = document.querySelectorAll('.aplayer[data-server][data-id]');
    
    if (aplayerElements.length === 0) {
        return; // 没有音乐播放器元素，直接返回
    }

    // 动态加载 APlayer CSS 和 JS
    function loadAPlayerResources(callback) {
        // 加载 CSS
        if (!document.querySelector('link[href*="APlayer.min.css"]')) {
            const css = document.createElement('link');
            css.rel = 'stylesheet';
            css.href = '/html/heo-music/css/APlayer.min.css';
            document.head.appendChild(css);
        }

        // 加载 JS
        if (!window.APlayer) {
            const js = document.createElement('script');
            js.src = '/html/heo-music/js/APlayer.min.js';
            js.onload = callback;
            document.head.appendChild(js);
        } else {
            callback();
        }
    }

    // 初始化音乐播放器
    function initAPlayer() {
        aplayerElements.forEach(function(element) {
            const server = element.dataset.server;
            const id = element.dataset.id;
            
            // 避免重复初始化
            if (element.dataset.initialized) {
                return;
            }
            
            try {
                // 根据服务器类型获取音乐信息
                let musicInfo;
                
                if (server === 'tencent') {
                    musicInfo = {
                        title: 'QQ音乐',
                        author: '未知艺术家',
                        url: `https://y.qq.com/n/ryqq/songDetail/${id}`,
                        pic: 'https://p.qpic.cn/music_cover/KLaY2dYh1Sia85QrhSxOCkQYD4g9iaXQYo4Qk3zicYwiaOwVhRibZXF/300'
                    };
                    
                    // 异步获取真实歌曲信息
                    fetchSongInfo('tencent', id).then(info => {
                        if (info) {
                            ap.list.add([info]);
                            ap.list.remove(0); // 移除默认占位符
                        }
                    });
                    
                } else if (server === 'netease') {
                    musicInfo = {
                        title: '网易云音乐',
                        author: '未知艺术家',
                        url: `https://music.163.com/song?id=${id}`,
                        pic: 'https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/109951165627118210.jpg'
                    };
                    
                    // 异步获取真实歌曲信息
                    fetchSongInfo('netease', id).then(info => {
                        if (info) {
                            ap.list.add([info]);
                            ap.list.remove(0); // 移除默认占位符
                        }
                    });
                    
                } else {
                    console.warn(`Unsupported music server: ${server}`);
                    return;
                }

                // 创建 APlayer 实例
                const ap = new APlayer({
                    container: element,
                    mini: true,
                    autoplay: false,
                    theme: '#3498db',
                    loop: false,
                    order: 'list',
                    preload: 'metadata',
                    volume: 0.7,
                    mutex: true,
                    listFolded: false,
                    listMaxHeight: '60px',
                    lrcType: 0,
                    audio: [musicInfo]
                });

                // 标记为已初始化
                element.dataset.initialized = 'true';
                
                // 添加自定义样式
                element.classList.add('dlog-aplayer');
                
                console.log(`APlayer initialized for song ID: ${id}`);
                
            } catch (error) {
                console.error('Failed to initialize APlayer:', error);
                
                // 显示加载状态或错误信息
                element.innerHTML = `
                    <div class="aplayer-loading">
                        <div class="music-loader">
                            <span>🎵</span>
                            <div class="loading-bars">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <small>加载音乐中...</small>
                    </div>
                `;
            }
        });
    }

    // 异步获取歌曲信息
    async function fetchSongInfo(server, id) {
        try {
            let apiUrl;
            
            if (server === 'tencent') {
                // 使用第三方API获取QQ音乐信息
                apiUrl = `https://api.qq.jsososo.com/lyric?id=${id}`;
            } else if (server === 'netease') {
                // 使用网易云音乐的API
                apiUrl = `https://api.injahow.cn/meting/?type=song&id=${id}`;
            }
            
            if (!apiUrl) return null;
            
            const response = await fetch(apiUrl);
            if (!response.ok) return null;
            
            const data = await response.json();
            
            if (server === 'tencent' && data.data) {
                return {
                    title: data.data.title || '未知歌曲',
                    author: data.data.singer || '未知艺术家',
                    url: `https://y.qq.com/n/ryqq/songDetail/${id}`,
                    pic: data.data.cover || 'https://p.qpic.cn/music_cover/KLaY2dYh1Sia85QrhSxOCkQYD4g9iaXQYo4Qk3zicYwiaOwVhRibZXF/300'
                };
            } else if (server === 'netease' && data.data && data.data.length > 0) {
                const song = data.data[0];
                return {
                    title: song.title || song.name || '未知歌曲',
                    author: song.author || song.artist || '未知艺术家',
                    url: song.url || `https://music.163.com/song?id=${id}`,
                    pic: song.pic || song.cover || 'https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/109951165627118210.jpg'
                };
            }
            
            return null;
            
        } catch (error) {
            console.warn('Failed to fetch song info:', error);
            return null;
        }
    }

    // 加载资源并初始化
    loadAPlayerResources(initAPlayer);
});

// 为音乐类型添加特殊样式
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .dlog-aplayer {
            margin: 0.4rem 0 !important;
            border-radius: 8px !important;
            overflow: hidden !important;
            box-shadow: 0 2px 8px rgba(52, 152, 219, 0.1) !important;
            background: linear-gradient(135deg, 
                rgba(52, 152, 219, 0.05), 
                rgba(46, 204, 113, 0.05)) !important;
            border: 1px solid rgba(52, 152, 219, 0.1) !important;
            transition: all 0.3s ease !important;
        }
        
        .dlog-aplayer:hover {
            border-color: rgba(52, 152, 219, 0.2) !important;
            box-shadow: 0 4px 12px rgba(52, 152, 219, 0.15) !important;
            transform: translateY(-1px) !important;
        }
        
        .dlog-aplayer .aplayer-body {
            background: var(--dlog-bg-color) !important;
        }
        
        .dlog-aplayer .aplayer-info {
            border: none !important;
            padding: 0.5rem !important;
        }
        
        .dlog-aplayer .aplayer-controller {
            padding: 0.5rem !important;
        }
        
        .dlog-aplayer .aplayer-pic {
            width: 60px !important;
            height: 60px !important;
            border-radius: 3px !important;
        }
        
        .dlog-aplayer .aplayer-pic:hover {
            transform: scale(1.05) !important;
            transition: transform 0.3s ease !important;
        }
        
        .aplayer-error,
        .aplayer-loading {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 1rem;
            background: rgba(52, 152, 219, 0.05);
            border: 1px dashed rgba(52, 152, 219, 0.2);
            border-radius: 4px;
            color: var(--dlog-text-color);
            font-size: 0.8rem;
            flex-direction: column;
            gap: 0.3rem;
        }
        
        .aplayer-error small,
        .aplayer-loading small {
            opacity: 0.6;
            font-size: 0.7rem;
        }
        
        .aplayer-error {
            background: rgba(231, 76, 60, 0.1);
            border-color: rgba(231, 76, 60, 0.3);
        }
        
        .music-loader {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-size: 1.2rem;
        }
        
        .loading-bars {
            display: flex;
            gap: 0.2rem;
            align-items: flex-end;
            height: 1rem;
        }
        
        .loading-bars span {
            width: 2px;
            background: var(--dlog-primary-color);
            border-radius: 1px;
            animation: loadingBar 1.2s ease-in-out infinite;
        }
        
        .loading-bars span:nth-child(1) { animation-delay: 0s; height: 0.4rem; }
        .loading-bars span:nth-child(2) { animation-delay: 0.1s; height: 0.6rem; }
        .loading-bars span:nth-child(3) { animation-delay: 0.2s; height: 0.8rem; }
        .loading-bars span:nth-child(4) { animation-delay: 0.3s; height: 0.6rem; }
        .loading-bars span:nth-child(5) { animation-delay: 0.4s; height: 0.4rem; }
        
        @keyframes loadingBar {
            0%, 100% { 
                transform: scaleY(0.5); 
                opacity: 0.5;
            }
            50% { 
                transform: scaleY(1); 
                opacity: 1;
            }
        }
        
        /* 响应式设计 */
        @media (max-width: 768px) {
            .dlog-aplayer .aplayer-pic {
                width: 50px !important;
                height: 50px !important;
            }
            
            .dlog-aplayer .aplayer-info,
            .dlog-aplayer .aplayer-controller {
                padding: 0.3rem !important;
            }
            
            .music-loader {
                font-size: 1rem;
            }
            
            .loading-bars {
                height: 0.8rem;
            }
        }
        
        @media (max-width: 480px) {
            .dlog-aplayer .aplayer-pic {
                width: 45px !important;
                height: 45px !important;
            }
            
            .dlog-aplayer .aplayer-info,
            .dlog-aplayer .aplayer-controller {
                padding: 0.2rem !important;
            }
            
            .music-loader {
                font-size: 0.9rem;
            }
            
            .loading-bars {
                height: 0.6rem;
            }
        }
    `;
    document.head.appendChild(style);
});