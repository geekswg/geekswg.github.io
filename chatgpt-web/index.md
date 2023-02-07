# ChatGPT-Web

<!--more-->
<!DOCTYPE html>
<html lang="zh">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ChatGPT-Web</title>
  <script src="https://cdn.bootcdn.net/ajax/libs/vue/3.2.45/vue.global.js"></script>
  <link href="https://cdn.bootcdn.net/ajax/libs/element-plus/2.2.28/index.css" rel="stylesheet" />


  <script src="https://cdn.bootcdn.net/ajax/libs/axios/1.2.5/axios.min.js"></script>
  <script src="https://cdn.bootcdn.net/ajax/libs/element-plus/2.2.28/index.full.js"></script>

  <style>
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

    .slider-block .slider-laber+.el-slider {
      flex: 0 0 70%;
    }

    body {
      margin: 0 !important;
      height: 100%;
    }
  </style>

</head>

<body>
  <a href="https://github.com/SmileBuild/ChatGPT-Web" class="github-corner" aria-label="View source on GitHub"><svg
      width="80" height="80" viewBox="0 0 250 250"
      style="fill:#70B7FD; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
      <path
        d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
        fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
      <path
        d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
        fill="currentColor" class="octo-body"></path>
    </svg></a>
  <div id="hello-vue">

    <el-container>
      <el-header>
        <h2>ChatGPT-Web v0.2.2 </h2>
      </el-header>
      <el-main>
        <el-row :gutter="40">
          <el-col :span="8" class="col-params" v-loading="loading" element-loading-text="Loading..."
            :element-loading-spinner="svg" element-loading-svg-view-box="-10, -10, 50, 50"
            element-loading-background="rgba(122, 122, 122, 0.8)">
            <el-button size="large" type="success" @click="submitForm">Send发送</el-button>
            
            <el-form ref="requsetForm">
              <h4>Prompt 请输入你的问题</h4>
              <el-input ref="promptTextarea" type="textarea" v-model="prompt" placeholder="输入内容" rows="10" @keyup.enter.native="submitForm" ></el-input>
              <br/><br/>
              <el-button size="large" type="danger" @click="resetForm" >clear清空</el-button>
            </el-form>

            <el-link href="https://beta.openai.com/docs/api-reference/completions/create#completions/create-model"
              target="_blank" type="danger">param info (参数说明)</el-link>

          </el-col>
          <el-col :span="16">
            <el-button size="large" type="warning" @click="downloadTxt" :disabled="download_disable">save保存</el-button>
              
            <el-button size="large" type="warning" @click="copyTxt" >复制</el-button>
              
            <h2>ChatGPT的回答 {{respTimer}}</h2>

            <p id="result" style="color:red;white-space: pre-wrap;">{{ response }}</p>
          </el-col>
        </el-row>


        <el-row >
          <el-col  class="col-params">
          <el-form>
          <h2>Params 参数配置</h2>
          <h4 >API Key</h4>
          <el-link href="https://openai.com/api/"
              target="_blank" type="danger">申请API Key,需要翻墙，不支持国内</el-link>
          <el-input v-model="key" placeholder="API秘钥" show-password type="password" ></el-input>
          <h4>Max_tokens</h4>
          <el-input-number type="number" v-model="max_tokens"></el-input-number>
          <h4>Temperature</h4>
          <div class="slider-block">
            <span class="slider-laber">Temperature</span>
            <el-slider v-model="temperature" :step="0.1" :min="0" :max="1" show-input />
          </div>
          <h4>Top_p</h4>
          <div class="slider-block">
            <span class="slider-laber">Top_p</span>
            <el-slider v-model="top_p" :step="0.1" :min="0" :max="1" show-input />
          </div>
          <h4>Frequency_penalty</h4>
          <div class="slider-block">
            <span class="slider-laber">Frequency_penalty</span>
            <el-slider v-model="frequency_penalty" :step="0.1" :min="-2" :max="2" show-input />
          </div>
          <h4>Presence_penalty</h4>
          <div class="slider-block">
            <span class="slider-laber">Presence_penalty</span>
            <el-slider v-model="presence_penalty" :step="0.1" :min="-2" :max="2" show-input />
          </div>
          <h4>Model</h4>
          <el-select v-model="model" class="m-2" placeholder="Model" size="large">
            <el-option v-for="item in models" :key="item.value" :label="item.label" :value="item.value">{{
              item
              }}</el-option>
          </el-select>
          </el-col>
          </el-form>
        </el-row>

      </el-main>
    </el-container>
  </div>

  <script>
    const HelloVueApp = {
      data() {
        return {
          loading: false,
          key: '',
          prompt: '',
          temperature: 1,
          top_p: 1,
          max_tokens: 2048,
          frequency_penalty: 0,
          presence_penalty: 0,
          stop: ["Human:", "AI:"],
          model: 'text-davinci-003',
          models: ['text-davinci-003', 'text-davinci-002', 'text-curie-001'],
          response: '',
          download_disable: true,
          respTimer: '',
          timer: null,
          timeCounter: 0
        }
      },
      watch: {
        response(resp) {
          if (resp == '') {
            this.download_disable = true;
          } else {
            this.download_disable = false;
          }
        }
      },
      methods: {
        resetForm(){
          this.$refs.requsetForm.resetFields();
          this.prompt = '';
          this.$refs.promptTextarea.focus()
        },
        startTimer(){
          this.timeCounter = 0;
          this.timer = setInterval(() => {
            this.timerFun();
          },1000);
        },
        timerFun(){
          this.timeCounter++;
          this.respTimer = '正在思考中'+this.timeCounter + '秒';
        },
        stopTimer(){
          clearInterval(this.timer);
          this.respTimer = '本次思考了'+this.timeCounter + '秒！';
          this.timer = null;
        },
        downloadTxt() {
          let text = 'Prompt: ' + this.prompt + '\n' + document.getElementById('result').innerText;
          let element = document.createElement("a");
          let file = new Blob([text], { type: 'text/plain' });
          element.href = URL.createObjectURL(file);
          element.download = "download.txt";
          element.click();
        },
        copyTxt() {
          let text = document.getElementById('result').innerText;
          const input = document.createElement('input');
          document.body.appendChild(input);
          input.setAttribute('value', text);
          input.select();
          if (document.execCommand('copy')) {
              document.execCommand('copy');
              alert('复制成功')
              console.log('复制成功');
          }
          //this.$refs.result.select()
          //document.execCommand('copy')
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
          let myKey = "c2stQjZUcnhwUW40cnFmM3BNRTFZQWZUM0JsYmtGSnY2OEp3NGZ4ZkhYYWp3dmlXdUVr";
          if(this.key){
            myKey = btoa(this.key); //加密字符串

          }
          alert('API Key => '+myKey);
          axios.post('https://api.openai.com/v1/completions', data, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ` + atob(myKey),
              //'Authorization': `Bearer ` + this.key,
            }
          })
            .then(response => {
              this.loading = false
              this.response = response.data.choices[0].text;
              console.log(this.response)
            })
            .catch(error => {
              this.loading = false
              this.response = error;
              console.log(error);
            })
            .finally(() => {
              this.stopTimer();
            });
        }
      }
    }

    Vue.createApp(HelloVueApp).use(ElementPlus).mount('#hello-vue')
  </script>
</body>

</html>

---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/chatgpt-web/  

