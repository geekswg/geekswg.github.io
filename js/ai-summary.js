
  //aiConfig = {};
  // //ai摘要接口地址 项目 https://github.com/geekswg/qw/ fork https://github.com/FloatSheep/Qwen-Post-Summary
  // aiConfig.aiApi = "https://qw.geekswg.top"
  // //需要ai摘要的页面内容的选择器
  // aiConfig.aiSelector = '#content';
  // //投诉链接
  // aiConfig.reportUrl = "mailto:geekswg@qq.cn?subject=文章摘要投诉&body=投诉网址：="+location.href;
  // //正则表达式启用ai摘要的路径
  // aiConfig.enableAIPathRegex = /\/posts\//; 
  // aiConfig.aiGPTDesc = '';
aiConfig = {}

// 全局变量用于跟踪当前活动的打字实例
let currentTypingInstanceId = null;
let previousTypingTimeouts = [];
let styleInitialized = false;

  AISmmary={
    styleHtml:`#summary-wrapper{position:relative;margin:10px 0;max-width:100%;background:linear-gradient(135deg,rgba(102,126,234,0.06)0%,rgba(118,75,162,0.06)100%);border:1px solid rgba(102,126,234,0.2);padding:0;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(102,126,234,0.08);transition:all .3s cubic-bezier(0.4,0,0.2,1)}#summary-wrapper:hover{box-shadow:0 4px 20px rgba(102,126,234,0.12);transform:translateY(-1px)}#summary-wrapper::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#667eea0%,#764ba2100%);animation:shimmer 3s ease-in-out infinite}@keyframes shimmer{0%,100%{opacity:.5}50%{opacity:1}}#summary-wrapper>#title{display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding:5px 10px;background:rgba(255,255,255,0.4);border-bottom:1px solid rgba(102,126,234,0.1)}[data-theme='dark'] #summary-wrapper>#title{background:rgba(30,30,40,0.7)}#summary-wrapper>#title>span.logo{font-size:10px;font-weight:700;padding:3px 8px;background:#5a73e7;color:#fff;border-radius:10px;cursor:pointer;letter-spacing:.3px;box-shadow:0 1px 4px rgba(90,115,231,0.25);transition:all .2s ease}#summary-wrapper>#title>span.logo:hover{transform:scale(1.03);box-shadow:0 2px 6px rgba(90,115,231,0.35)}#summary-wrapper>#title>span.logo.typing{animation:loading 1.2s ease-in-out infinite;cursor:not-allowed;opacity:.7}#summary-wrapper>#title>span.name{display:flex;align-items:center;cursor:pointer;font-weight:600;font-size:12px;color:#5a73e7;transition:all .2s ease}[data-theme='dark'] #summary-wrapper>#title>span.name{color:#9bb1ff}#summary-wrapper>#title>span.name:hover{color:#764ba2;transform:translateX(2px)}[data-theme='dark'] #summary-wrapper>#title>span.name:hover{color:#b8a6ff}.icon-up{font-weight:400;font-size:9px;margin-left:3px;opacity:.6;transform:rotate(90deg);transition:all .2s ease}.icon-robot{animation:float 2s ease-in-out infinite;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:400;width:24px;height:24px;border-radius:50%;margin-right:6px;background:linear-gradient(135deg,#5a73e70%,#764ba2100%);box-shadow:0 2px 6px rgba(90,115,231,0.25)}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}.icon-up svg{width:.8rem;height:14px}#summary-wrapper>#meta{display:flex;flex-direction:row;align-items:center;justify-content:space-between;font-size:9px;padding:5px 10px;background:rgba(255,255,255,0.25);border-top:1px solid rgba(102,126,234,0.08)}[data-theme='dark'] #summary-wrapper>#meta{background:rgba(25,25,35,0.5)}#summary-wrapper>#meta>span.tip{opacity:.5;color:#64748b;line-height:1.3}[data-theme='dark'] #summary-wrapper>#meta>span.tip{color:#94a3b8}#summary-wrapper>#meta>a.report{white-space:nowrap;margin-left:6px;padding:2px 6px;background:rgba(90,115,231,0.1);color:#5a73e7;border-radius:5px;text-decoration:none;transition:all .2s ease;font-weight:500}[data-theme='dark'] #summary-wrapper>#meta>a.report{color:#9bb1ff;background:rgba(90,115,231,0.12)}#summary-wrapper>#meta>a.report:hover{background:rgba(90,115,231,0.18);transform:translateY(-1px);box-shadow:0 1px 4px rgba(90,115,231,0.12)}#post-ai-result{min-height:2rem;max-width:100%;padding:8px 12px;font-size:13px;line-height:1.5;color:#334155;background:transparent;animation:fadeIn .4s ease}[data-theme='dark'] #post-ai-result{color:#cbd5e1}@keyframes fadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}#post-ai-result-text .text{display:inline}[data-theme='dark'] #post-ai-result-text .text{color:#cbd5e1}.ai-cursor{vertical-align:middle;display:inline-block;width:2px;background:linear-gradient(180deg,#5a73e70%,#764ba2100%);height:14px;margin-left:1px;border-radius:1px;animation:blink 1s ease-in-out infinite;box-shadow:0 0 3px rgba(90,115,231,0.3)}@keyframes blink{0%,50%,to{opacity:1}25%,75%{opacity:.3}}@keyframes loading{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(0.98)}}#result-loading{display:flex;align-items:center;justify-content:center;padding:10px;color:#5a73e7;font-size:12px}[data-theme='dark'] #result-loading{color:#9bb1ff}#summary-wrapper.minimized{max-width:100%;box-shadow:0 6px 24px rgba(90,115,231,0.18);animation:slideDown .25s ease}@keyframes slideDown{from{opacity:0;transform:translateY(-15px)}to{opacity:1;transform:translateY(0)}}#summary-wrapper.minimized>#title{padding:4px 8px}#summary-wrapper.minimized>#meta{display:none}#summary-wrapper.minimized>#post-ai-result{padding:6px 10px;font-size:12px}`
    ,initStyle:()=>{
      if (!styleInitialized) {
        style = document.createElement('style');
        style.id = 'ai-summary-style';
        style.innerHTML = AISmmary.styleHtml;
        document.head.appendChild(style);
        styleInitialized = true;
      }
    },
    divHtml:'<div id="summary-wrapper"><div id="title"><span id="summary-post" class="name"><span class="icon-robot">🤖</span><span class="text">文章摘要 </span><span class="icon-up"></span> </span><span id="ai-logo" class="logo">$aiGPTName</span></div><div id="post-ai-result" class="post-ai-result"><span id="post-ai-result-text" class="text"><span id="result-loading">加载中...</span></span></div><div id="meta"><span class="tip">此内容根据文章生成，并经过人工审核，仅用于文章内容的解释与总结</span> <a class="report" href="mailto:admin@hesiy.cn" id="aiReport">投诉</a></div></div>',
    initDiv:(aiConfig)=>{
      ele = document.querySelector(aiConfig.aiSelector);
      divHtml = AISmmary.divHtml.replace('$aiGPTName', aiConfig.aiGPTName);
      ele.insertAdjacentHTML('beforebegin',AISmmary.divHtml.replace('$aiGPTName', aiConfig.aiGPTName));
    },
    fetchAIData:(aiConfig)=>{
      aiSmmaryData(aiConfig);
    },
    pjaxInit:(aiConfig)=>{
      clearTimeout(aiConfig.typingTimeout);
      AISmmary.init(aiConfig);
    },
    // 清理之前页面的打字效果
    cleanupPrevious:()=>{
      // 清除所有之前的定时器
      previousTypingTimeouts.forEach(timeout => clearTimeout(timeout));
      previousTypingTimeouts = [];

      // 移除旧的摘要容器
      const oldWrapper = document.querySelector('#summary-wrapper');
      if (oldWrapper) {
        oldWrapper.remove();
      }

      // 清除旧的滚动监听器
      if (window.aiScrollHandler) {
        window.removeEventListener('scroll', window.aiScrollHandler);
        window.aiScrollHandler = null;
      }
    },
    init:(aiConfig)=>{
      // 先清理之前的实例
      AISmmary.cleanupPrevious();
      
      // 生成新的实例ID
      currentTypingInstanceId = Date.now();
      aiConfig.instanceId = currentTypingInstanceId;
      
      aiConfig.aiApi = aiConfig.aiApi || "https://qw.geekswg.top"
      aiConfig.aiSelector = window.aiConfig.aiSelector || '#content';
      aiConfig.reportUrl = aiConfig.reportUrl || "mailto:geekswg@qq.cn?subject=文章摘要投诉&body=投诉网址：="+location.href;
      aiConfig.enableAIPathRegex = aiConfig.enableAIPathRegex||/\/posts\//; //正则表达式
      aiConfig.aiGPTDesc = aiConfig.aiGPTDesc || '我是一个使用通义千问AI模型的AI摘要助手，可以帮助您快速生成文章摘要，提高阅读体验。';
      aiConfig.aiGPTName = aiConfig.aiGPTName || 'AI-Agent';
      if (!aiConfig.enableAIPathRegex.test(location.pathname)) {
        return;
      }else if(!document.querySelector(aiConfig.aiSelector)){
        //console.info("选择器错误，请检查aiConfig.aiSelector配置=>"+aiConfig.aiSelector);
        return;
      }
      AISmmary.initStyle();
      AISmmary.initDiv(aiConfig);
      AISmmary.fetchAIData(aiConfig);
      addScrollListener();
    }
  }

  function aiSmmaryData (aiConfig) {
    // 检查是否是当前活动的实例
    const instanceId = aiConfig.instanceId;
    
    aiConfig.enableType ??= true;
    aiApi = aiConfig.aiApi||"";
    aiSelector = aiConfig.aiSelector||'#content';
    reportUrl = aiConfig.reportUrl||"mailto:geekswg@qq.cn?subject=文章摘要投诉&body=投诉网址：="+location.href;
    backendUrl = aiApi;
    contentCursor = document.querySelector(aiSelector);
    outputCursor = document.getElementById("post-ai-result-text");
    loadingText = document.getElementById("result-loading");
    aiLogoCursor = document.getElementById("ai-logo");
    postTitleCursor = document.getElementById("summary-post");
    document.querySelector("#aiReport").href = reportUrl;

    // 获取 postId 和 content
    const url = new URL(location.href); //alert(url)
    const postId = url.pathname.split("/").filter((e) => e !== "").pop();

    let content = contentCursor.textContent;
    content = content.replace(/\s+/g, ' ');//去除所有空格
    truncateString =  (str) =>{ //截取字符串
      const maxLength = 4000;
      const halfLength = 2000;
      if (str.length <= maxLength) {
          return str; // 字符串长度小于等于 1000，直接返回
      }
      const start = str.slice(0, halfLength); // 截取前 500 字符
      const end = str.slice(-halfLength);    // 截取后 500 字符
      return `${start}...${end}`; // 拼接前后部分和省略号
    }
    content = truncateString(content); //截取字符

    // 处理 backendUrl 可能以 / 结尾的情况
    const apiUrl = backendUrl.endsWith("/")
      ? `${backendUrl}api/summary`
      : `${backendUrl}/api/summary`;

    // 构建请求体
    const requestBody = {
      postId: postId,
      content: content,
    };

    // 光标效果
    const addCursor = () => {
      if (currentTypingInstanceId !== instanceId) return;
      const cursorSpan = document.createElement("span");
      cursorSpan.className = "ai-cursor";
      outputCursor.appendChild(cursorSpan);
    };

    // 插入光标
    addCursor();

    // 打字效果
    let typingTimeout;
    let shouldDisable = false;

    const typeWriter = (index, text) => {
      // 检查是否是当前实例
      if (currentTypingInstanceId !== instanceId) return;
      
      if (loadingText) {
        loadingText.remove();
      }
      aiLogoCursor.classList.add("typing");
      if (index < text.length) {
        // 在光标前面插入文本
        const cursor = document.querySelector(".ai-cursor");
        if(cursor)
          cursor.insertAdjacentText("beforebegin", text.charAt(index));
        index++;

        typingTimeout = setTimeout(() => typeWriter(index, text), 40); // 调整打字速度
        aiConfig.typingTimeout = typingTimeout;
        previousTypingTimeouts.push(typingTimeout);
      } else {
        aiLogoCursor.classList.remove("typing");
        document.querySelector(".ai-cursor")?.remove(); // 移除光标
        shouldDisable = false;
      }
    };

    // 摘要输入
    const inputSummary = (data) => {
      // 检查是否是当前实例
      if (currentTypingInstanceId !== instanceId) return;
      
      const outputElement = outputCursor;
      const text = data;
      let index = 0;
      shouldDisable = true;
      if(!aiConfig.enableType){
        document.querySelector("#post-ai-result-text").innerHTML = data;
        shouldDisable = false;
        switchMode = false;
        return;
      }
      clearTimeout(typingTimeout);
      typeWriter(index, text);
      // 当用户离开页面时调用stopTimer函数 
    };

    // 发送 GET 请求，获得摘要状态
    let summaryData = undefined;

    const fetchSummary = () => {
      fetch(`${apiUrl}?postId=${postId}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          // 检查是否是当前实例
          if (currentTypingInstanceId !== instanceId) return;
          
          if (data.isSave) {
            // 存入摘要
            summaryData = data.data;
            // 成功，模拟打字效果
            inputSummary(data.data);
          } else {
            // 如果 isSave 为 false，发送 POST 请求
            fetch(apiUrl, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(requestBody),
            })
              .then((response) => response.json())
              .then((data) => {
                // 检查是否是当前实例
                if (currentTypingInstanceId !== instanceId) return;
                
                if (data.code === 1) {
                  // 存入摘要
                  summaryData = data.data;
                  // 成功，模拟打字效果
                  inputSummary(data.data);
                } else {
                  // 客户端错误，输出响应内容
                  console.error("Error:", data);
                }
              })
              .catch((error) => {
                if (currentTypingInstanceId !== instanceId) return;
                outputCursor.textContent = `${error}`;
                console.error("Fetch error:", error);
              });
          }
        })
        .catch((error) => {
          if (currentTypingInstanceId !== instanceId) return;
          outputCursor.textContent = `${error}`;
          console.error("Fetch error:", error);
        });
    };

    // 发送请求
    fetchSummary();

    // 监听 Logo 点击事件
    let switchMode = false;

    aiLogoCursor.addEventListener("click", () => {
      if (currentTypingInstanceId !== instanceId) return;
      
      if (!shouldDisable) {
        if (!switchMode) {
          // 介绍模式
          let index = 0;
          const text = aiConfig.aiGPTDesc ||"我是浮杨开发的摘要生成助理 QwenGPT，如你所见，这是一个使用 Qwen 14B 作为生成模型的工具。我在这里只负责显示，并仿照 GPT 的形式输出，如果你像我一样讨厌 Cloudflare Worker 的速度，又囊中羞涩，你也可以像我这样做，当然，你也可以使用 Tianli 开发的 TianliGPT 来更简单的实现 AI 摘要。当然，我的样式与代码很大一部分来自于無名大佬，感谢他的帮助！";

          shouldDisable = true;
          switchMode = true;

          clearTimeout(typingTimeout);

          outputCursor.textContent = ``;

          addCursor();
          setTimeout(() => {
            typeWriter(index, text);
          }, 1000);
        } else {
          if (summaryData !== undefined) {
            shouldDisable = true;
            switchMode = false;

            clearTimeout(typingTimeout);

            outputCursor.textContent = ``;

            addCursor();
            inputSummary(summaryData);
          }
        }
      }
    });

    postTitleCursor.addEventListener("click", () => {
      if (currentTypingInstanceId !== instanceId) return;
      location.href = `https://geekswg.js.cool/posts/2024/ai-summary/`;
    });
  };

function addScrollListener() {
    // 节流函数
    throttle = function (func, wait) {
      let lastTime = 0;
      return function(...args) {
        const now = Date.now();
        if (now - lastTime >= wait) {
          func.apply(this, args);
          lastTime = now;
        }
      };
    }
    // 监听目标div的top值
    const targetDiv = document.querySelector('#summary-wrapper');
    if (!targetDiv) {
      return;
    }
    
    // 保存滚动处理器到全局，方便后续移除
    window.aiScrollHandler = throttle(() => {
      const rect = targetDiv.getBoundingClientRect();
      if (rect.top <= 60) {
        // top值小于60时的处理
        targetDiv.classList.add('minimized');
      } else {
        targetDiv.classList.remove('minimized');
      }
    }, 100);
    
    window.addEventListener('scroll', window.aiScrollHandler);
}
