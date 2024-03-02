# 

&lt;!DOCTYPE html&gt;
&lt;html lang=&#34;en&#34; &gt;
&lt;head&gt;
  &lt;meta charset=&#34;UTF-8&#34;&gt;
  &lt;title&gt;Vue.js 圆形CSS3渐变色拾取器DEMO演示&lt;/title&gt;
  &lt;link rel=&#34;stylesheet&#34; href=&#34;normalize.min.css&#34;&gt;
&lt;link rel=&#34;stylesheet&#34; href=&#34;style.css&#34;&gt;

&lt;/head&gt;
&lt;body&gt;
&lt;!-- partial:index.partial.html --&gt;
&lt;script type=&#34;text/x-template&#34; id=&#34;picker&#34;&gt;
  &lt;div&gt;
  &lt;svg v-bind:style=&#34;{ transform: &#39;rotate(&#39; &#43; (shift * -360 % 360) &#43; &#39;deg)&#39; }&#34;class=&#34;picker__svg&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34; version=&#34;1.1&#34; width=&#34;100%&#34; height=&#34;100%&#34; viewBox=&#34;-10 -10 220 220&#34;&gt;
      &lt;defs&gt;
        &lt;linearGradient v-bind:id=&#34;&#39;redyel-&#39; &#43; id&#34; gradientUnits=&#34;objectBoundingBox&#34; x1=&#34;0&#34; y1=&#34;0&#34; x2=&#34;1&#34; y2=&#34;1&#34;&gt;
            &lt;stop offset=&#34;0%&#34; v-bind:stop-color=&#34;colors[0]&#34;/&gt;   
            &lt;stop offset=&#34;100%&#34; v-bind:stop-color=&#34;colors[1]&#34;/&gt;   
        &lt;/linearGradient&gt;
        &lt;linearGradient v-bind:id=&#34;&#39;yelgre-&#39; &#43; id&#34; gradientUnits=&#34;objectBoundingBox&#34; x1=&#34;0&#34; y1=&#34;0&#34; x2=&#34;0&#34; y2=&#34;1&#34;&gt;
            &lt;stop offset=&#34;0%&#34; v-bind:stop-color=&#34;colors[1]&#34;/&gt;   
            &lt;stop offset=&#34;100%&#34; v-bind:stop-color=&#34;colors[2]&#34;/&gt;   
        &lt;/linearGradient&gt;
        &lt;linearGradient v-bind:id=&#34;&#39;grecya-&#39; &#43; id&#34; gradientUnits=&#34;objectBoundingBox&#34; x1=&#34;1&#34; y1=&#34;0&#34; x2=&#34;0&#34; y2=&#34;1&#34;&gt;
            &lt;stop offset=&#34;0%&#34; v-bind:stop-color=&#34;colors[2]&#34;/&gt;   
            &lt;stop offset=&#34;100%&#34; v-bind:stop-color=&#34;colors[3]&#34;/&gt;   
        &lt;/linearGradient&gt;
        &lt;linearGradient v-bind:id=&#34;&#39;cyablu-&#39; &#43; id&#34; gradientUnits=&#34;objectBoundingBox&#34; x1=&#34;1&#34; y1=&#34;1&#34; x2=&#34;0&#34; y2=&#34;0&#34;&gt;
            &lt;stop offset=&#34;0%&#34; v-bind:stop-color=&#34;colors[3]&#34;/&gt;   
            &lt;stop offset=&#34;100%&#34; v-bind:stop-color=&#34;colors[4]&#34;/&gt;   
        &lt;/linearGradient&gt;
        &lt;linearGradient v-bind:id=&#34;&#39;blumag-&#39; &#43; id&#34; gradientUnits=&#34;objectBoundingBox&#34; x1=&#34;0&#34; y1=&#34;1&#34; x2=&#34;0&#34; y2=&#34;0&#34;&gt;
            &lt;stop offset=&#34;0%&#34; v-bind:stop-color=&#34;colors[4]&#34;/&gt;   
            &lt;stop offset=&#34;100%&#34; v-bind:stop-color=&#34;colors[5]&#34;/&gt;   
        &lt;/linearGradient&gt;
        &lt;linearGradient v-bind:id=&#34;&#39;magred-&#39; &#43; id&#34; gradientUnits=&#34;objectBoundingBox&#34; x1=&#34;0&#34; y1=&#34;1&#34; x2=&#34;1&#34; y2=&#34;0&#34;&gt;
            &lt;stop offset=&#34;0%&#34; v-bind:stop-color=&#34;colors[5]&#34;/&gt;   
            &lt;stop offset=&#34;100%&#34; v-bind:stop-color=&#34;colors[0]&#34;/&gt;   
        &lt;/linearGradient&gt;
      &lt;/defs&gt;
      &lt;ellipse class=&#34;ellipse&#34; cx=&#34;100&#34; cy=&#34;100&#34; rx=&#34;100.95&#34; ry=&#34;100.95&#34; fill=&#34;none&#34; stroke=&#34;#212121&#34;/&gt;
      &lt;g fill=&#34;none&#34; transform=&#34;translate(100,100)&#34;&gt;
        &lt;path d=&#34;M -1,-100 A 100,100 0 0,1 86.6,-50&#34; v-bind:stroke=&#34;&#39;url(#redyel-&#39; &#43; id &#43; &#39;)&#39;&#34;/&gt;
        &lt;path d=&#34;M 86,-51 A 100,100 0 0,1 86.6,50&#34; v-bind:stroke=&#34;&#39;url(#yelgre-&#39; &#43; id &#43; &#39;)&#39;&#34;/&gt;
        &lt;path d=&#34;M 87,49 A 100,100 0 0,1 0,100&#34; v-bind:stroke=&#34;&#39;url(#grecya-&#39; &#43; id &#43; &#39;)&#39;&#34;/&gt;
        &lt;path d=&#34;M 1,100 A 100,100 0 0,1 -86.6,50&#34; v-bind:stroke=&#34;&#39;url(#cyablu-&#39; &#43; id &#43; &#39;)&#39;&#34;/&gt;
        &lt;path d=&#34;M -86,51 A 100,100 0 0,1 -86.6,-50&#34; v-bind:stroke=&#34;&#39;url(#blumag-&#39; &#43; id &#43; &#39;)&#39;&#34;/&gt;
        &lt;path d=&#34;M -87,-49 A 100,100 0 0,1 0,-100&#34; v-bind:stroke=&#34;&#39;url(#magred-&#39; &#43; id &#43; &#39;)&#39;&#34;/&gt;
      &lt;/g&gt;
  &lt;/svg&gt;
  &lt;div&gt;
&lt;/script&gt;

&lt;script type=&#34;text/x-template&#34; id=&#34;pointer&#34;&gt;
  &lt;div class=&#34;pointer&#34; v-bind:style=&#34;{color: color}&#34;&gt;
    &lt;div class=&#34;pointer__marker&#34; v-bind:style=&#34;{transform: &#39;translate(-50%,-50%) rotate(&#39; &#43; position * 380 &#43; &#39;deg)&#39;}&#34;&gt;&lt;/div&gt;
  &lt;/div&gt;
&lt;/script&gt;

&lt;script type=&#34;text/x-template&#34; id=&#34;bg&#34;&gt;
  &lt;div class=&#34;gradient&#34; v-bind:style=&#34;{color: start, background: &#39;linear-gradient(&#39; &#43; start &#43; &#39;, &#39; &#43; stop &#43; &#39;)&#39;}&#34;&gt;
  &lt;transition name=&#34;pouf&#34;&gt;
    &lt;span v-if=&#34;!scrolled&#34; class=&#34;gradient__text&#34;&gt;  
      &lt;strong&gt;scroll to change color shift&lt;/strong&gt;
    &lt;/span&gt;
  &lt;/transition&gt;
  &lt;/div&gt;
&lt;/script&gt;

&lt;script type=&#34;text/x-template&#34; id=&#34;ratio&#34;&gt;
  &lt;label v-bind:style=&#34;{color: color}&#34; class=&#34;ratio&#34;&gt;
    &lt;strong class=&#34;ratio__label&#34;&gt;Ratio&lt;/strong&gt;
    &lt;input class=&#34;ratio__range&#34; type=&#34;range&#34; v-bind:value=&#34;ratio&#34; v-on:input=&#34;updateValue($event)&#34; increment=0.01 min=0 max=1 step=&#34;0.001&#34;&gt;
  &lt;/label&gt;
&lt;/script&gt;

&lt;div id=&#34;app&#34; class=&#34;app&#34;&gt;
  &lt;div class=&#34;app__wrap&#34; v-bind:class=&#34;{ &#39;app--uihide&#39;: !visibleUI, &#39;app--uianimate&#39;: animateUI }&#34;&gt;
    &lt;v-style&gt;
      :root {
        --colorInner: {{colorInner}};
        --colorOuter: {{colorOuter}};
        --colorUI: {{colorUI}}};
      }
    &lt;/v-style&gt;
    &lt;bg v-bind:stop=&#34;colorInner&#34; 
        v-bind:scrolled=&#34;didScroll&#34; 
        v-bind:start=&#34;colorOuter&#34;&gt;
    &lt;/bg&gt;
    &lt;div class=&#34;controls&#34;&gt;
      &lt;!--pointer class=&#34;pointer--lower&#34; v-bind:position=&#34;pointer&#34;&gt;&lt;/pointer--&gt;
      &lt;picker class=&#34;picker picker--outer&#34; v-bind:colors=&#34;colorsOuter&#34;&gt;&lt;/picker&gt;
      &lt;picker class=&#34;picker picker--inner&#34; v-bind:colors=&#34;colorsInner&#34; v-bind:shift=&#34;shift&#34;&gt;&lt;/picker&gt;
      &lt;pointer v-bind:position=&#34;pointer&#34; v-bind:color=&#34;colorInner&#34;&gt;&lt;/pointer&gt;
      &lt;ratio v-model=&#34;ratio&#34;&gt;&lt;/ratio&gt;
    &lt;/div&gt;
    &lt;div class=&#34;actions&#34; v-bind:class=&#34;{ &#39;actions--up&#39;: didScroll }&#34;&gt;
      &lt;button title=&#34;copy to clipboard&#34; v-bind:data-clipboard-text=&#34;&#39;linear-gradient(&#39; &#43; colorOuter &#43;&#39;, &#39;&#43; colorInner &#43;&#39;)&#39;&#34; class=&#34;button actions__button&#34;&gt;&lt;i class=&#34;button__icon&#34;&gt;&lt;svg viewBox=&#34;0 0 1151.25 1440.625125&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;&gt;&lt;path d=&#34;m-5932.9762 2569.7556-362.8126-.3168v-143.7479-143.7479h-143.75-143.75v-431.875-431.875h431.875 431.8751v143.75 143.75h143.75 143.75v432.5 432.5001l-69.0625-.3104c-37.9844-.1707-232.3282-.4529-431.875-.6271zm362.1875-432.3559v-293.2934l-292.1875.9223c-160.7032.5072-292.3696 1.0931-292.5921 1.302-.2224.2089-.5457 131.7759-.7183 292.3711l-.3139 291.9914h292.9059 292.9059zm-725.0001-212.9567v-218.75h218.75 218.7501v-74.0625-74.0625l-292.4948.3177-292.4948.3178-.3177 292.4948-.3178 292.4948 74.0625-.0001h74.0625z&#34; transform=&#34;translate(6583.2887 -1418.193)&#34;/&gt;&lt;/svg&gt;&lt;/i&gt;&lt;span class=&#34;button__text&#34;&gt;copy&lt;/span&gt;&lt;/button&gt;
      &lt;button v-on:click=&#34;toggleDiscrete()&#34; class=&#34;button actions__button&#34;&gt;&lt;i class=&#34;button__icon&#34;&gt;&lt;svg viewBox=&#34;0 0 1279.0173 1598.999125&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;&gt;&lt;path d=&#34;m-2896.2791 556.86227c-20.5895-1.755-45.7549-4.81513-61.8496-7.521-232.2831-39.0512-423.5294-201.18751-500.3924-424.22668-14.6274-42.445313-25.1549-89.624913-31.0953-139.354163-3.2286-27.02832-3.2286-109.221637 0-136.249937 17.7073-148.2357 78.1511-276.1044 179.5379-379.8118 104.1372-106.5209 236.6946-170.9064 389.4244-189.1505 27.0283-3.2286 109.2216-3.2286 136.2499 0 152.7298 18.2441 285.2872 82.6296 389.4244 189.1505 101.3868 103.7074 161.8306 231.5761 179.5379 379.8118 3.2286 27.0283 3.2286 109.221617 0 136.249937-17.7073 148.235623-78.1511 276.104363-179.5379 379.811793-103.9338 106.31275-236.9979 171.02105-388.7994 189.07092-15.9852 1.90075-97.3955 3.5065-112.4999 2.21913zm98.1754-162.3659c184.4382-21.39347 338.9126-145.55761 399.6544-321.235943 10.9472-31.66149 19.6053-71.03906 23.6366-107.49999 2.1674-19.60284 2.1674-76.647147 0-96.249947-9.7254-87.9607-41.1265-169.0733-91.8694-237.3086-87.3017-117.397-220.3349-187.8181-366.7341-194.1305l-19.113-.8241v480.388147 480.388173l19.113-.82411c10.5121-.45326 26.4027-1.66967 35.3125-2.70313z&#34; transform=&#34;translate(3492.0379 721.87326)&#34;/&gt;&lt;/svg&gt;&lt;/i&gt;&lt;span class=&#34;button__text&#34;&gt;lightmode&lt;/span&gt;&lt;/button&gt;
      &lt;!--button v-on:click=&#34;toggleUI()&#34; class=&#34;button actions__button&#34;&gt;&lt;i class=&#34;button__icon&#34;&gt;☉&lt;/i&gt;&lt;span class=&#34;button__text&#34;&gt;toggle ui&lt;/span&gt;&lt;/button--&gt;
      &lt;button v-on:click=&#34;togglePlay()&#34; class=&#34;button button--play actions__button&#34;&gt;&lt;i class=&#34;button__icon&#34;&gt;&lt;svg viewBox=&#34;0 0 560.62432 1401.56075&#34; xmlns=&#34;http://www.w3.org/2000/svg&#34;&gt;&lt;path d=&#34;m-1464.3832 828.28949v-560.6243l280.3122 280.3121 280.31211 280.3122-280.31211 280.31211-280.3122 280.3122z&#34; transform=&#34;translate(1464.3832 -267.66519)&#34;/&gt;&lt;/svg&gt;&lt;/i&gt;&lt;span class=&#34;button__text&#34;&gt;play&lt;/span&gt;&lt;/button&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;!-- partial --&gt;
  &lt;script src=&#39;vue.min.js&#39;&gt;&lt;/script&gt;
&lt;script src=&#39;chroma.min.js&#39;&gt;&lt;/script&gt;
&lt;script src=&#39;hamster.js&#39;&gt;&lt;/script&gt;
&lt;script src=&#39;clipboard.min.js&#39;&gt;&lt;/script&gt;&lt;script  src=&#34;script.js&#34;&gt;&lt;/script&gt;

&lt;/body&gt;
&lt;/html&gt;


---

> 作者:   
> URL: https://geekswg.github.io/funs/tools/vue-gradient-editor/  

