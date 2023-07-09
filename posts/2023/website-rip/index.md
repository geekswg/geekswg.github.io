# Website RIP 效果实现

{{< admonition>}}
我们常常会在百度百科中看到有人去世时，关于ta的百度百科页会变成黑白色，而其他的无影响。这难道是又重新创建或者修改了整个网页的内容吗？那工作量和时间也来不及呀，其实不然，而是有一个属性，只需设置该属性就可以改变一整个网页的色调。
{{< /admonition >}}

<!--more-->

> 实现代码

核心代码 `document.querySelector('html').style.filter = 'grayscale(100%)';`

## 具体js代码实现

> 稍微封装了一下，方便维护日期和默哀提示消息，。


## 代码封装 

> 使用Demo `RIP.isInRIP(RIP.rip_configs)`
> 只需要按照格式维护rip_configs就可以轻松实现整个网站默哀祭奠的效果了。

```javascript
/**
    * Rest in Peace. R.I.P 🕯️
    * @2022-3-28 [3.21-mu5735] 沉痛哀悼 132 名遇难同胞：东航航班失事，遇难者含旅客 123 人，机组 9 人
    * @2022-12-03 江泽民同志逝世，享年96岁
    * @returns {Blog}
    */
const RIP = new (function () {
  // 配置信息
  this.rip_configs = [
    { 
      type:'perYear' // 重复方式 once , perYear , perMonth 
      ,startTime: new Date('2022/04/05 00:00:00') // 开始时间  new Date('2022/12/03 00:00:00')
      ,duration: 24   // 持续时间 单位小时
      ,msgOp: function(){ //自定义操作，消息提醒等
        alert('清明节');
        console.log("清明节");
      },
    },
    { 
      type:'once' // 重复方式 once , perYear , perMonth 
      ,startTime: new Date('2022/12/03 00:00:00') // 开始时间  new Date('2022/12/03 00:00:00')
      ,duration: 48   // 持续时间 单位小时
      ,msgOp: function(){ //自定义操作，消息提醒等
        console.log("祭奠日");
      },
    }
  ];
  
  this.isInRIP = (rip_configs,nowTime) => {

    let result = {};
    let isRIP = false;  //是否符合条件
    nowTime = nowTime || new Date();
    
    //let type = 'once' ;// once , perYear,perMonth,
    //let startTime = null; //开始时间
    //let duration = 24; //持续时间 单位H,小时
    //let msgOp = ''; //消息提示
    
    rip_configs.forEach(function (conf, index, confs) {
      console.info('rip_configs.forEach => ' + index  );
      
      let dur = conf.duration;
      let startTime = conf.startTime;
     
      if('once' == conf.type){
        
      } else if ('perYear' == conf.type) {
        startTime.setFullYear(nowTime.getFullYear())
      }
      let endTime = new Date(startTime.getTime() + (dur * 60 * 60 * 1000));
      //console.log("开始=>"+startTime+"\n" + "\n结束=>"+endTime);
      if (nowTime > startTime && nowTime < endTime) {
        console.warn('RIP - Type : ' + conf.type);
        conf.msgOp();
        console.log("开始=>"+startTime+"\n" + "\n结束=>"+endTime);
        document.querySelector('html').style.filter = 'grayscale(100%)';
        
        RIP.isRIP = true;
        result.msgOp = conf.msgOp;
      } 
      result.isRIP = isRIP;
      result.startTime = startTime;
      result.duration = dur;
    });
    return result;
  };
})();

```


---

> 作者: [geekswg](https://geekswg.github.io)  
> URL: https://geekswg.github.io/posts/2023/website-rip/  

