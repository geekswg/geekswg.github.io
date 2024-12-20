# 

&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;style&gt;
    .ai-summary {
      width: 300px;
      padding: 20px;
      background: #f0f0f0;
      border-radius: 8px;
      position: sticky;
      top: 80px;
      transition: all 0.3s ease;
    }

    .ai-summary.minimized {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      overflow: hidden;
      padding: 0;
      cursor: pointer;
    }
    .ai-summary.minimized:hover {
      width: 300px;
      height: auto;
      border-radius: 8px;
      padding: 20px;
    }

    .content {
      height: 2000px; /* For demo scrolling */
    }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class=&#34;ai-summary&#34;&gt;
    &lt;h3&gt;AI Summary&lt;/h3&gt;
    &lt;p&gt;This is the AI generated summary of your article. It will transform into a circle when you scroll down.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div class=&#34;content&#34;&gt;
    &lt;!-- Main content here --&gt;
  &lt;/div&gt;

  &lt;script&gt;
    window.addEventListener(&#39;scroll&#39;, function() {
      const summary = document.querySelector(&#39;.ai-summary&#39;);
      if (window.scrollY &gt; 100) {
        summary.classList.add(&#39;minimized&#39;);
      } else {
        summary.classList.remove(&#39;minimized&#39;);
      }
    });
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;

---

> 作者:   
> URL: https://geekswg.js.cool/gallery/t/  

