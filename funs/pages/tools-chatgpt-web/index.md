# ChatGPT-Web

&lt;!--more--&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang=&#34;zh&#34;&gt;

&lt;head&gt;
  &lt;meta charset=&#34;UTF-8&#34;&gt;
  &lt;meta name=&#34;viewport&#34; content=&#34;width=device-width, initial-scale=1.0&#34;&gt;
  &lt;title&gt;ChatGPT-Web&lt;/title&gt;

  &lt;style&gt;
    .github-corner:hover .octo-arm {
      animation: octocat-wave 560ms ease-in-out
    }

    @keyframes octocat-wave {

      0%,
      100% {
        transform: rotate(0)
      }

      20%,
      60% {
        transform: rotate(-25deg)
      }

      40%,
      80% {
        transform: rotate(10deg)
      }
    }

    @media (max-width:500px) {
      .github-corner:hover .octo-arm {
        animation: none
      }

      .github-corner .octo-arm {
        animation: octocat-wave 560ms ease-in-out
      }
    }

    .el-header {
      background: var(--el-color-black);
      color: aliceblue;
    }

    .slider-block {
      display: flex;
      align-items: center;
    }

    .slider-block .el-slider {
      margin-top: 0;
      margin-left: 12px;
    }

    .slider-block .slider-laber {
      font-size: 14px;
      color: var(--el-text-color-secondary);
      line-height: 44px;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-bottom: 0;
    }

    .slider-block .slider-laber&#43;.el-slider {
      flex: 0 0 70%;
    }

    body {
      margin: 0 !important;
      height: 100%;
    }
  &lt;/style&gt;

&lt;/head&gt;

&lt;body&gt;
  &lt;a href=&#34;https://github.com/SmileBuild/ChatGPT-Web&#34; class=&#34;github-corner&#34; aria-label=&#34;View source on GitHub&#34;&gt;&lt;svg
      width=&#34;80&#34; height=&#34;80&#34; viewBox=&#34;0 0 250 250&#34;
      style=&#34;fill:#70B7FD; color:#fff; position: absolute; top: 0; border: 0; right: 0;&#34; aria-hidden=&#34;true&#34;&gt;
      &lt;path d=&#34;M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z&#34;&gt;&lt;/path&gt;
      &lt;path
        d=&#34;M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2&#34;
        fill=&#34;currentColor&#34; style=&#34;transform-origin: 130px 106px;&#34; class=&#34;octo-arm&#34;&gt;&lt;/path&gt;
      &lt;path
        d=&#34;M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z&#34;
        fill=&#34;currentColor&#34; class=&#34;octo-body&#34;&gt;&lt;/path&gt;
    &lt;/svg&gt;&lt;/a&gt;
  &lt;div id=&#34;hello-vue&#34;&gt;

    &lt;el-container&gt;
      {{/*  &lt;el-header&gt;
        &lt;h2&gt;ChatGPT-Web v0.2.2 &lt;/h2&gt;
      &lt;/el-header&gt;  */}}

      &lt;el-main&gt;
        &lt;el-row :gutter=&#34;40&#34;&gt;
          &lt;el-col :span=&#34;8&#34; class=&#34;col-params&#34; v-loading=&#34;loading&#34; element-loading-text=&#34;Loading...&#34;
            :element-loading-spinner=&#34;svg&#34; element-loading-svg-view-box=&#34;-10, -10, 50, 50&#34;
            element-loading-background=&#34;rgba(122, 122, 122, 0.8)&#34;&gt;
            &lt;el-button size=&#34;large&#34; type=&#34;success&#34; @click=&#34;submitForm&#34;&gt;Send发送&lt;/el-button&gt;
            
            &lt;el-form ref=&#34;requsetForm&#34;&gt;
              &lt;h4&gt;Prompt 请输入你的问题&lt;/h4&gt;
              &lt;el-input ref=&#34;promptTextarea&#34; type=&#34;textarea&#34; v-model=&#34;prompt&#34; placeholder=&#34;输入内容&#34; rows=&#34;10&#34; @keyup.enter.native=&#34;submitForm&#34; &gt;&lt;/el-input&gt;
              &lt;br/&gt;&lt;br/&gt;
              &lt;el-button size=&#34;large&#34; type=&#34;danger&#34; @click=&#34;resetForm&#34; &gt;clear清空&lt;/el-button&gt;
            &lt;/el-form&gt;

            &lt;el-link href=&#34;https://beta.openai.com/docs/api-reference/completions/create#completions/create-model&#34;
              target=&#34;_blank&#34; type=&#34;danger&#34;&gt;param info (参数说明)&lt;/el-link&gt;

          &lt;/el-col&gt;
          &lt;el-col :span=&#34;16&#34;&gt;
            &lt;el-button size=&#34;large&#34; type=&#34;warning&#34; @click=&#34;downloadTxt&#34; :disabled=&#34;download_disable&#34;&gt;save保存&lt;/el-button&gt;
              
            &lt;el-button size=&#34;large&#34; type=&#34;warning&#34; @click=&#34;copyTxt&#34; &gt;复制&lt;/el-button&gt;
              
            &lt;h2&gt;ChatGPT的回答 {{respTimer}}&lt;/h2&gt;

            &lt;p id=&#34;result&#34; style=&#34;color:red;white-space: pre-wrap;&#34;&gt;{{ response }}&lt;/p&gt;
          &lt;/el-col&gt;
        &lt;/el-row&gt;


        &lt;el-row &gt;
          &lt;el-col  class=&#34;col-params&#34;&gt;
          &lt;el-form&gt;
          &lt;h2&gt;Params 参数配置&lt;/h2&gt;
          &lt;h4 &gt;API Key&lt;/h4&gt;
          &lt;el-link href=&#34;https://openai.com/api/&#34;
              target=&#34;_blank&#34; type=&#34;danger&#34;&gt;申请API Key,需要翻墙，不支持国内&lt;/el-link&gt;
          &lt;el-input v-model=&#34;key&#34; placeholder=&#34;API秘钥&#34; show-password type=&#34;password&#34; &gt;&lt;/el-input&gt;
          &lt;h4&gt;Max_tokens&lt;/h4&gt;
          &lt;el-input-number type=&#34;number&#34; v-model=&#34;max_tokens&#34;&gt;&lt;/el-input-number&gt;
          &lt;h4&gt;Temperature&lt;/h4&gt;
          &lt;div class=&#34;slider-block&#34;&gt;
            &lt;span class=&#34;slider-laber&#34;&gt;Temperature&lt;/span&gt;
            &lt;el-slider v-model=&#34;temperature&#34; :step=&#34;0.1&#34; :min=&#34;0&#34; :max=&#34;1&#34; show-input /&gt;
          &lt;/div&gt;
          &lt;h4&gt;Top_p&lt;/h4&gt;
          &lt;div class=&#34;slider-block&#34;&gt;
            &lt;span class=&#34;slider-laber&#34;&gt;Top_p&lt;/span&gt;
            &lt;el-slider v-model=&#34;top_p&#34; :step=&#34;0.1&#34; :min=&#34;0&#34; :max=&#34;1&#34; show-input /&gt;
          &lt;/div&gt;
          &lt;h4&gt;Frequency_penalty&lt;/h4&gt;
          &lt;div class=&#34;slider-block&#34;&gt;
            &lt;span class=&#34;slider-laber&#34;&gt;Frequency_penalty&lt;/span&gt;
            &lt;el-slider v-model=&#34;frequency_penalty&#34; :step=&#34;0.1&#34; :min=&#34;-2&#34; :max=&#34;2&#34; show-input /&gt;
          &lt;/div&gt;
          &lt;h4&gt;Presence_penalty&lt;/h4&gt;
          &lt;div class=&#34;slider-block&#34;&gt;
            &lt;span class=&#34;slider-laber&#34;&gt;Presence_penalty&lt;/span&gt;
            &lt;el-slider v-model=&#34;presence_penalty&#34; :step=&#34;0.1&#34; :min=&#34;-2&#34; :max=&#34;2&#34; show-input /&gt;
          &lt;/div&gt;
          &lt;h4&gt;Model&lt;/h4&gt;
          &lt;el-select v-model=&#34;model&#34; class=&#34;m-2&#34; placeholder=&#34;Model&#34; size=&#34;large&#34;&gt;
            &lt;el-option v-for=&#34;item in models&#34; :key=&#34;item.value&#34; :label=&#34;item.label&#34; :value=&#34;item.value&#34;&gt;{{
              item
              }}&lt;/el-option&gt;
          &lt;/el-select&gt;
          &lt;/el-col&gt;
          &lt;/el-form&gt;
        &lt;/el-row&gt;

      &lt;/el-main&gt;
    &lt;/el-container&gt;
  &lt;/div&gt;

  &lt;script&gt;
    const HelloVueApp = {
      data() {
        return {
          loading: false,
          key: &#39;&#39;,
          prompt: &#39;&#39;,
          temperature: 1,
          top_p: 1,
          max_tokens: 2048,
          frequency_penalty: 0,
          presence_penalty: 0,
          stop: [&#34;Human:&#34;, &#34;AI:&#34;],
          model: &#39;text-davinci-003&#39;,
          models: [&#39;text-davinci-003&#39;, &#39;text-davinci-002&#39;, &#39;text-curie-001&#39;],
          response: &#39;&#39;,
          download_disable: true,
          respTimer: &#39;&#39;,
          timer: null,
          timeCounter: 0
        }
      },
      watch: {
        response(resp) {
          if (resp == &#39;&#39;) {
            this.download_disable = true;
          } else {
            this.download_disable = false;
          }
        }
      },
      methods: {
        resetForm(){
          this.$refs.requsetForm.resetFields();
          this.prompt = &#39;&#39;;
          this.$refs.promptTextarea.focus()
        },
        startTimer(){
          this.timeCounter = 0;
          this.timer = setInterval(() =&gt; {
            this.timerFun();
          },1000);
        },
        timerFun(){
          this.timeCounter&#43;&#43;;
          this.respTimer = &#39;正在思考中&#39;&#43;this.timeCounter &#43; &#39;秒&#39;;
        },
        stopTimer(){
          clearInterval(this.timer);
          this.respTimer = &#39;本次思考了&#39;&#43;this.timeCounter &#43; &#39;秒！&#39;;
          this.timer = null;
        },
        downloadTxt() {
          let text = &#39;Prompt: &#39; &#43; this.prompt &#43; &#39;\n&#39; &#43; document.getElementById(&#39;result&#39;).innerText;
          let element = document.createElement(&#34;a&#34;);
          let file = new Blob([text], { type: &#39;text/plain&#39; });
          element.href = URL.createObjectURL(file);
          element.download = &#34;download.txt&#34;;
          element.click();
        },
        copyTxt() {
          let text = document.getElementById(&#39;result&#39;).innerText;
          const input = document.createElement(&#39;input&#39;);
          document.body.appendChild(input);
          input.setAttribute(&#39;value&#39;, text);
          input.select();
          if (document.execCommand(&#39;copy&#39;)) {
              document.execCommand(&#39;copy&#39;);
              alert(&#39;复制成功&#39;)
              console.log(&#39;复制成功&#39;);
          }
          //this.$refs.result.select()
          //document.execCommand(&#39;copy&#39;)
        },
        submitForm() {
          let data = {
            prompt: this.prompt,
            temperature: this.temperature,
            top_p: this.top_p,
            model: this.model,
            max_tokens: this.max_tokens,
            frequency_penalty: this.frequency_penalty,
            presence_penalty: this.presence_penalty,
            stop: this.stop
          }
          this.loading = true;
          this.startTimer();        
          let myKey = &#34;c2stQjZUcnhwUW40cnFmM3BNRTFZQWZUM0JsYmtGSnY2OEp3NGZ4ZkhYYWp3dmlXdUVr&#34;;
          if(this.key){
            myKey = btoa(this.key); //加密字符串
          }
          //alert(&#39;API Key =&gt; &#39;&#43;myKey);
          axios.post(&#39;https://api.openai.com/v1/completions&#39;, data, {
            headers: {
              &#39;Content-Type&#39;: &#39;application/json&#39;,
              &#39;Authorization&#39;: `Bearer ` &#43; atob(myKey),
              //&#39;Authorization&#39;: `Bearer ` &#43; this.key,
            }
          })
            .then(response =&gt; {
              this.loading = false
              this.response = response.data.choices[0].text;
              console.log(this.response)
            })
            .catch(error =&gt; {
              this.loading = false
              this.response = error;
              console.log(error);
            })
            .finally(() =&gt; {
              this.stopTimer();
            });
        }
      }
    }

    Vue.createApp(HelloVueApp).use(ElementPlus).mount(&#39;#hello-vue&#39;)
  &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.github.io/funs/pages/tools-chatgpt-web/  

