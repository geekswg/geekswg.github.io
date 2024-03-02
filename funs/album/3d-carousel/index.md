# 3d Carousel


&lt;!--more--&gt;
&lt;!DOCTYPE html&gt;
&lt;html lang=&#34;zh&#34;&gt;

&lt;head&gt;
  &lt;meta charset=&#34;UTF-8&#34; /&gt;
  &lt;meta name=&#34;viewport&#34; content=&#34;width=device-width,user-scalable=no&#34; /&gt;
  &lt;title&gt;3D Carousel&lt;/title&gt;
  &lt;style&gt;
    * {
      margin: 0;
      padding: 0;
    }

    html,
    body {
      height: 100%;
      /* for touch screen */
      touch-action: none;
    }

    body {
      overflow: hidden;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;

      -webkit-perspective: 1000px;
      perspective: 1000px;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    #drag-container,
    #spin-container {
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin: auto;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      -webkit-transform: rotateX(-10deg);
      transform: rotateX(-10deg);
    }

    #drag-container img,
    #drag-container video {
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      line-height: 200px;
      font-size: 50px;
      text-align: center;
      -webkit-box-shadow: 0 0 8px #fff;
      box-shadow: 0 0 8px #fff;
      -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
    }

    #drag-container img:hover,
    #drag-container video:hover {
      -webkit-box-shadow: 0 0 15px #fffd;
      box-shadow: 0 0 15px #fffd;
      -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0007);
    }

    #drag-container p {
      font-family: Serif;
      position: absolute;
      top: 100%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%) rotateX(90deg);
      transform: translate(-50%, -50%) rotateX(90deg);
      color: #F00;
    }

    #ground {
      width: 900px;
      height: 900px;
      position: absolute;
      top: 100%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%) rotateX(90deg);
      transform: translate(-50%, -50%) rotateX(90deg);
      background: -webkit-radial-gradient(center center,
          farthest-side,
          #9993,
          transparent);
    }

    #music-container {
      position: absolute;
      top: 0;
      left: 0;
    }

    @-webkit-keyframes spin {
      from {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
      }

      to {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
      }
    }

    @keyframes spin {
      from {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
      }

      to {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
      }
    }

    @-webkit-keyframes spinRevert {
      from {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
      }

      to {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
      }
    }

    @keyframes spinRevert {
      from {
        -webkit-transform: rotateY(360deg);
        transform: rotateY(360deg);
      }

      to {
        -webkit-transform: rotateY(0deg);
        transform: rotateY(0deg);
      }
    }
  &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
  &lt;div id=&#34;drag-container&#34;&gt;
    &lt;div id=&#34;spin-container&#34;&gt;

      &lt;!-- Add your images (or video) here --&gt;
      &lt;img src=&#34;1.jpeg&#34; alt=&#34;&#34; /&gt;
      &lt;img src=&#34;2.jpeg&#34;/&gt;
      &lt;img src=&#34;3.jpeg&#34; /&gt;
      &lt;img src=&#34;4.jpeg&#34; /&gt;
      &lt;img src=&#34;5.jpeg&#34; /&gt;
      &lt;img src=&#34;6.jpeg&#34; /&gt;
      &lt;img src=&#34;7.jpeg&#34; /&gt;

      &lt;img src=&#34;1.jpeg&#34; alt=&#34;&#34; /&gt;
      &lt;img src=&#34;2.jpeg&#34;/&gt;
      &lt;img src=&#34;3.jpeg&#34; /&gt;
      &lt;img src=&#34;4.jpeg&#34; /&gt;
      &lt;img src=&#34;5.jpeg&#34; /&gt;
      &lt;img src=&#34;6.jpeg&#34; /&gt;
      &lt;img src=&#34;7.jpeg&#34; /&gt;

      &lt;!-- Example image with link --&gt;
      &lt;a target=&#34;_blank&#34; href=&#34;7.jpeg&#34;&gt;
        &lt;img src=&#34;7.jpeg&#34; alt=&#34;&#34; /&gt;
      &lt;/a&gt;

      &lt;!-- Example add video  --&gt;
      &lt;video controls autoplay=&#34;autoplay&#34; loop title=&#34;mv-刘德华-今天&#34;&gt;
        &lt;source src=&#34;7144295491784707358.mp4&#34; type=&#34;video/mp4&#34; /&gt;
      &lt;/video&gt;

      &lt;!-- Text at center of ground --&gt;
      &lt;p&gt;3D Tiktok Carousel&lt;/p&gt;
    &lt;/div&gt;
    &lt;div id=&#34;ground&#34;&gt;&lt;/div&gt;
  &lt;/div&gt;

  &lt;div id=&#34;music-container&#34;&gt;&lt;/div&gt;

  &lt;!-- github corner (https://github.com/tholman/github-corners) --&gt;
  &lt;a href=&#34;https://github.com/HoangTran0410/3DCarousel&#34; target=&#34;_blank&#34; class=&#34;github-corner&#34;
    aria-label=&#34;View source on GitHub&#34;&gt;
    &lt;svg width=&#34;80&#34; height=&#34;80&#34; viewBox=&#34;0 0 250 250&#34; style=&#34; fill: #fff;
          color: #000;
          position: absolute;
          top: 0;
          border: 0;
          right: 0;
        &#34; aria-hidden=&#34;true&#34;&gt;
      &lt;path d=&#34;M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z&#34;&gt;&lt;/path&gt;
      &lt;path
        d=&#34;M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2&#34;
        fill=&#34;currentColor&#34; style=&#34;transform-origin: 130px 106px&#34; class=&#34;octo-arm&#34;&gt;&lt;/path&gt;
      &lt;path
        d=&#34;M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z&#34;
        fill=&#34;currentColor&#34; class=&#34;octo-body&#34;&gt;&lt;/path&gt;
    &lt;/svg&gt;&lt;/a&gt;
  &lt;style&gt;
    .github-corner:hover .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }

    @keyframes octocat-wave {

      0%,
      100% {
        transform: rotate(0);
      }

      20%,
      60% {
        transform: rotate(-25deg);
      }

      40%,
      80% {
        transform: rotate(10deg);
      }
    }

    @media (max-width: 500px) {
      .github-corner:hover .octo-arm {
        animation: none;
      }

      .github-corner .octo-arm {
        animation: octocat-wave 560ms ease-in-out;
      }
    }
  &lt;/style&gt;

  &lt;script&gt;
    // Author: Hoang Tran (https://www.facebook.com/profile.php?id=100004848287494)
    // Github verson (1 file .html): https://github.com/HoangTran0410/3DCarousel/blob/master/index.html

    // You can change global variables here:
    var radius = 240; // how big of the radius
    var autoRotate = true; // auto rotate or not
    var rotateSpeed = -60; // unit: seconds/360 degrees
    var imgWidth = 120; // width of images (unit: px)
    var imgHeight = 170; // height of images (unit: px)

    // Link of background music - set &#39;null&#39; if you dont want to play background music
    var bgMusicURL = &#34;&#34;;
    var bgMusicControls = true; // Show UI music control

    /*
   NOTE:
     &#43; imgWidth, imgHeight will work for video
     &#43; if imgWidth, imgHeight too small, play/pause button in &lt;video&gt; will be hidden
     &#43; Music link are taken from: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HauMaster&amp;playlist=1&amp;song=1&amp;background=28
     &#43; Custom from code in tiktok video  https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
    */

    // ===================== start =======================
    setTimeout(init, 100);

    var odrag = document.getElementById(&#34;drag-container&#34;);
    var ospin = document.getElementById(&#34;spin-container&#34;);
    var aImg = ospin.getElementsByTagName(&#34;img&#34;);
    var aVid = ospin.getElementsByTagName(&#34;video&#34;);
    var aEle = [...aImg, ...aVid]; // combine 2 arrays

    // Size of images
    ospin.style.width = imgWidth &#43; &#34;px&#34;;
    ospin.style.height = imgHeight &#43; &#34;px&#34;;

    // Size of ground - depend on radius
    var ground = document.getElementById(&#34;ground&#34;);
    ground.style.width = radius * 3 &#43; &#34;px&#34;;
    ground.style.height = radius * 3 &#43; &#34;px&#34;;

    function init(delayTime) {
      for (var i = 0; i &lt; aEle.length; i&#43;&#43;) {
        aEle[i].style.transform =
          &#34;rotateY(&#34; &#43;
          i * (360 / aEle.length) &#43;
          &#34;deg) translateZ(&#34; &#43;
          radius &#43;
          &#34;px)&#34;;
        aEle[i].style.transition = &#34;transform 1s&#34;;
        aEle[i].style.transitionDelay =
          delayTime || (aEle.length - i) / 4 &#43; &#34;s&#34;;
      }
    }

    function applyTranform(obj) {
      // Constrain the angle of camera (between 0 and 180)
      if (tY &gt; 180) tY = 180;
      if (tY &lt; 0) tY = 0;

      // Apply the angle
      obj.style.transform = &#34;rotateX(&#34; &#43; -tY &#43; &#34;deg) rotateY(&#34; &#43; tX &#43; &#34;deg)&#34;;
    }

    function playSpin(yes) {
      ospin.style.animationPlayState = yes ? &#34;running&#34; : &#34;paused&#34;;
    }

    var sX,
      sY,
      nX,
      nY,
      desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;

    // auto spin
    if (autoRotate) {
      var animationName = rotateSpeed &gt; 0 ? &#34;spin&#34; : &#34;spinRevert&#34;;
      ospin.style.animation = `${animationName} ${Math.abs(
        rotateSpeed
      )}s infinite linear`;
    }

    // add background music
    if (bgMusicURL) {
      document.getElementById(&#34;music-container&#34;).innerHTML &#43;=
        &#39;&lt;audio src=&#34;${bgMusicURL}&#34; ${bgMusicControls ? &#34;controls&#34; : &#34;&#34;} autoplay loop&gt;&#39; &#43;
        &#34;&lt;p&gt;If you are reading this, it is because your browser does not support the audio element.&lt;/p&gt;&#34; &#43;
        &#34;&lt;/audio&gt;&#34;;
    }

    // setup events
    document.onpointerdown = function (e) {
      clearInterval(odrag.timer);
      e = e || window.event;
      var sX = e.clientX,
        sY = e.clientY;

      this.onpointermove = function (e) {
        e = e || window.event;
        var nX = e.clientX,
          nY = e.clientY;
        desX = nX - sX;
        desY = nY - sY;
        tX &#43;= desX * 0.1;
        tY &#43;= desY * 0.1;
        applyTranform(odrag);
        sX = nX;
        sY = nY;
      };

      this.onpointerup = function (e) {
        odrag.timer = setInterval(function () {
          desX *= 0.95;
          desY *= 0.95;
          tX &#43;= desX * 0.1;
          tY &#43;= desY * 0.1;
          applyTranform(odrag);
          playSpin(false);
          if (Math.abs(desX) &lt; 0.5 &amp;&amp; Math.abs(desY) &lt; 0.5) {
            clearInterval(odrag.timer);
            playSpin(true);
          }
        }, 17);
        this.onpointermove = this.onpointerup = null;
      };

      return false;
    };

    document.onmousewheel = function (e) {
      e = e || window.event;
      var d = e.wheelDelta / 20 || -e.detail;
      radius &#43;= d;
      init(1);
    };
  &lt;/script&gt;
&lt;/body&gt;

&lt;/html&gt;

---

> 作者:   
> URL: https://geekswg.github.io/funs/album/3d-carousel/  

