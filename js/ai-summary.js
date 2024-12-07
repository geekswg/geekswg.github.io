
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

  AISmmary={
    styleHtml:'#post-ai-result,#summary-wrapper{max-width:100%;border:1px solid #2d96bd;padding:.5rem 1rem;margin-bottom:.8rem;border-radius:16px}#summary-wrapper>#title{display:flex;color:#2d96bd;flex-direction:row;align-items:center;justify-content:space-between;margin-bottom:.8rem;padding:0 8px}#summary-wrapper>#title>span.logo{padding:2px 10px;font-size:12px;font-weight:700;border:1px solid transparent;border-radius:25px;cursor:pointer}#summary-wrapper>#title>span.logo.typing{animation:loading 1s infinite;cursor:not-allowed}#summary-wrapper>#title>span.name{display:flex;align-items:center;cursor:pointer}.icon-up{font-weight:400;font-size:12px;margin-left:-3px;opacity:.8;transform:rotate(90deg)}.icon-robot{display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:400;width:25px;height:26px;border-radius:50%;margin-right:8px}.icon-up svg{width:1.1rem;height:19px}#summary-wrapper>#meta{display:flex;flex-direction:row;align-items:center;justify-content:space-between;margin-top:1rem;padding:0 8px;font-size:12px}#summary-wrapper>#meta>span.tip{opacity:.6}#summary-wrapper>#meta>a.report{white-space:nowrap;margin-left:12px;opacity:.8;transition:all .3s}.post-ai-result{margin-bottom:.9rem;min-height:3rem;max-width:41rem;font-size:16px}.ai-cursor{display:inline-block;width:3px;background:#333;height:16px;margin-bottom:-2px;opacity:.95;margin-left:3px;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s;-ms-transition:all .3s;transition:all .3s;animation:blink 1s infinite}@keyframes blink{0%,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes loading{0%{opacity:1}50%{opacity:.4}to{opacity:1}}'
    ,initStyle:()=>{
      style = document.createElement('style');
      style.innerHTML = AISmmary.styleHtml;
      document.head.appendChild(style);
    },
    divHtml:'<div id="summary-wrapper"><div id="title"><span id="summary-post" class="name"><span class="icon-robot"><i class="fas fa-robot ai-title-icon fa-beat"></i> </span><span class="text">文章摘要 </span><span class="icon-up">2</span> </span><span id="ai-logo" class="logo">QwenGPT</span></div><div id="post-ai-result" class="post-ai-result"><span id="post-ai-result-text" lass="text"><span id="result-loading">加载中...</span></span></div><div id="meta"><span class="tip">此内容根据文章生成，并经过人工审核，仅用于文章内容的解释与总结</span> <a class="report" href="mailto:admin@hesiy.cn" id="aiReport">投诉</a></div></div>',
    initDiv:(aiConfig)=>{
      ele = document.querySelector(aiConfig.aiSelector);
      ele.insertAdjacentHTML('afterbegin',AISmmary.divHtml);
      // if(ele){
      //   ele.insertAdjacentHTML('afterbegin',AISmmary.divHtml);
      // }else{
      //   console.log('Element not found.');
      // }
    },
    fetchAIData:(aiConfig)=>{
      aiSmmaryData(aiConfig);
    },
    pjaxInit:(aiConfig)=>{
      if (!aiConfig.enableAIPathRegex.test(location.pathname)) {
        //alert("当前页面不支持AI摘要功能")
        return;
      }
      AISmmary.initStyle();
      AISmmary.initDiv(aiConfig);
      AISmmary.fetchAIData(aiConfig);
    },
    init:(aiConfig)=>{
      aiConfig.aiApi = aiConfig.aiApi || "https://qw.geekswg.top"
      aiConfig.aiSelector = window.aiConfig.aiSelector || '#content';
      aiConfig.reportUrl = aiConfig.reportUrl || "mailto:geekswg@qq.cn?subject=文章摘要投诉&body=投诉网址：="+location.href;
      aiConfig.enableAIPathRegex = aiConfig.enableAIPathRegex||/\/posts\//; //正则表达式
      aiConfig.aiGPTDesc = aiConfig.aiGPTDesc || 'qwenGPT';
      if (!aiConfig.enableAIPathRegex.test(location.pathname)) {
        return;
      }else if(!document.querySelector(aiConfig.aiSelector)){
        //console.info("选择器错误，请检查aiConfig.aiSelector配置=>"+aiConfig.aiSelector);
        return;
      }
      AISmmary.initStyle();
      AISmmary.initDiv(aiConfig);
      AISmmary.fetchAIData(aiConfig);
    }
  }

  function aiSmmaryData (aiConfig) {
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
      if (loadingText) {
        loadingText.remove();
      }
      aiLogoCursor.classList.add("typing");
      if (index < text.length) {
        // 在光标前面插入文本
        const cursor = document.querySelector(".ai-cursor");
        cursor.insertAdjacentText("beforebegin", text.charAt(index));

        index++;

        typingTimeout = setTimeout(() => typeWriter(index, text), 80); // 调整打字速度
      } else {
        aiLogoCursor.classList.remove("typing");
        document.querySelector(".ai-cursor")?.remove(); // 移除光标

        shouldDisable = false;
      }
    };

    // 摘要输入
    const inputSummary = (data) => {
      const outputElement = outputCursor;
      const text = data;
      let index = 0;
      shouldDisable = true;

      clearTimeout(typingTimeout);
      typeWriter(index, text);
    };

    // 发送 GET 请求，获得摘要状态
    let summaryData = undefined;

    const fetchSummary = () => {
      fetch(`${apiUrl}?postId=${postId}`, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
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
                outputCursor.textContent = `${error}`;
                console.error("Fetch error:", error);
              });
          }
        })
        .catch((error) => {
          outputCursor.textContent = `${error}`;
          console.error("Fetch error:", error);
        });
    };

    // 发送请求
    fetchSummary();

    // 监听 Logo 点击事件
    let switchMode = false;

    aiLogoCursor.addEventListener("click", () => {
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
      location.href = `https://geekswg.js.cool/posts/2024/ai-summary/`;
    });
  };
