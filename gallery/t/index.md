# 

&lt;style&gt;
  .aside-collection {
    transition: all 0.3s ease;
  }
  
  @media screen and (max-width: 768px) {
    .aside-collection {
      position: fixed;
      right: -300px;
      top: 60px;
      width: 300px;
      background: #fff;
      height: calc(100vh - 60px);
      z-index: 999;
      padding: 20px;
      box-shadow: -2px 0 8px rgba(0,0,0,0.1);
    }
  
    .aside-collection.show {
      right: 0;
    }
  
    .aside-toggle {
      display: block;
      position: fixed;
      right: 10px;
      top: 70px;
      width: 40px;
      height: 40px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      z-index: 1000;
      cursor: pointer;
    }
  }
  
  [data-theme=&#34;dark&#34;] .aside-collection {
    background: #252627;
  }
  &lt;/style&gt;
  
  &lt;div class=&#34;aside-toggle&#34; onclick=&#34;toggleAside()&#34;&gt;
    &lt;i class=&#34;fas fa-bars&#34;&gt;&lt;/i&gt;
  &lt;/div&gt;
  
  &lt;div class=&#34;aside-collection&#34;&gt;
    &lt;!-- 原有的aside内容 --&gt;
    ...existing code...
  &lt;/div&gt;
  
  &lt;script&gt;
  function toggleAside() {
    document.querySelector(&#39;.aside-collection&#39;).classList.toggle(&#39;show&#39;);
  }
  &lt;/script&gt;

---

> 作者:   
> URL: https://geekswg.js.cool/gallery/t/  

