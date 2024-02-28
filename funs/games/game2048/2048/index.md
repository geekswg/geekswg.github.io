# 

&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
  &lt;meta charset=&#34;utf-8&#34;&gt;
  &lt;title&gt;2048&lt;/title&gt;

  &lt;link href=&#34;style/main.css&#34; rel=&#34;stylesheet&#34; type=&#34;text/css&#34;&gt;
  &lt;link rel=&#34;shortcut icon&#34; href=&#34;favicon.ico&#34;&gt;
  &lt;link rel=&#34;apple-touch-icon&#34; href=&#34;meta/apple-touch-icon.png&#34;&gt;
  &lt;link rel=&#34;apple-touch-startup-image&#34; href=&#34;meta/apple-touch-startup-image-640x1096.png&#34; media=&#34;(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)&#34;&gt; &lt;!-- iPhone 5&#43; --&gt;
  &lt;link rel=&#34;apple-touch-startup-image&#34; href=&#34;meta/apple-touch-startup-image-640x920.png&#34;  media=&#34;(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)&#34;&gt; &lt;!-- iPhone, retina --&gt;
  &lt;meta name=&#34;apple-mobile-web-app-capable&#34; content=&#34;yes&#34;&gt;
  &lt;meta name=&#34;apple-mobile-web-app-status-bar-style&#34; content=&#34;black&#34;&gt;

  &lt;meta name=&#34;HandheldFriendly&#34; content=&#34;True&#34;&gt;
  &lt;meta name=&#34;MobileOptimized&#34; content=&#34;320&#34;&gt;
  &lt;meta name=&#34;viewport&#34; content=&#34;width=device-width, target-densitydpi=160dpi, initial-scale=1.0, maximum-scale=1, user-scalable=no, minimal-ui&#34;&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;div class=&#34;container&#34;&gt;
    &lt;div class=&#34;heading&#34;&gt;
      &lt;h1 class=&#34;title&#34;&gt;2048&lt;/h1&gt;
      &lt;div class=&#34;scores-container&#34;&gt;
        &lt;div class=&#34;score-container&#34;&gt;0&lt;/div&gt;
        &lt;div class=&#34;best-container&#34;&gt;0&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;

    &lt;div class=&#34;above-game&#34;&gt;
      &lt;p class=&#34;game-intro&#34;&gt;Join the numbers and get to the &lt;strong&gt;2048 tile!&lt;/strong&gt;&lt;/p&gt;
      &lt;a class=&#34;restart-button&#34;&gt;New Game&lt;/a&gt;
    &lt;/div&gt;

    &lt;div class=&#34;game-container&#34;&gt;
      &lt;div class=&#34;game-message&#34;&gt;
        &lt;p&gt;&lt;/p&gt;
        &lt;div class=&#34;lower&#34;&gt;
	        &lt;a class=&#34;keep-playing-button&#34;&gt;Keep going&lt;/a&gt;
          &lt;a class=&#34;retry-button&#34;&gt;Try again&lt;/a&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div class=&#34;grid-container&#34;&gt;
        &lt;div class=&#34;grid-row&#34;&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&#34;grid-row&#34;&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&#34;grid-row&#34;&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
        &lt;/div&gt;
        &lt;div class=&#34;grid-row&#34;&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
          &lt;div class=&#34;grid-cell&#34;&gt;&lt;/div&gt;
        &lt;/div&gt;
      &lt;/div&gt;

      &lt;div class=&#34;tile-container&#34;&gt;

      &lt;/div&gt;
    &lt;/div&gt;

    &lt;p class=&#34;game-explanation&#34;&gt;
      &lt;strong class=&#34;important&#34;&gt;How to play:&lt;/strong&gt; Use your &lt;strong&gt;arrow keys&lt;/strong&gt; to move the tiles. When two tiles with the same number touch, they &lt;strong&gt;merge into one!&lt;/strong&gt;
    &lt;/p&gt;
    &lt;hr&gt;
    &lt;p&gt;
    &lt;strong class=&#34;important&#34;&gt;Note:&lt;/strong&gt; This site is the official version of 2048. You can play it on your phone via &lt;a href=&#34;http://git.io/2048&#34;&gt;http://git.io/2048.&lt;/a&gt; All other apps or sites are derivatives or fakes, and should be used with caution.
    &lt;/p&gt;
    &lt;hr&gt;
    &lt;p&gt;
    Created by &lt;a href=&#34;http://gabrielecirulli.com&#34; target=&#34;_blank&#34;&gt;Gabriele Cirulli.&lt;/a&gt; Based on &lt;a href=&#34;https://itunes.apple.com/us/app/1024!/id823499224&#34; target=&#34;_blank&#34;&gt;1024 by Veewo Studio&lt;/a&gt; and conceptually similar to &lt;a href=&#34;http://asherv.com/threes/&#34; target=&#34;_blank&#34;&gt;Threes by Asher Vollmer.&lt;/a&gt;
    &lt;/p&gt;
  &lt;/div&gt;

  &lt;script src=&#34;js/bind_polyfill.js&#34;&gt;&lt;/script&gt;
  &lt;script src=&#34;js/classlist_polyfill.js&#34;&gt;&lt;/script&gt;
  &lt;script src=&#34;js/animframe_polyfill.js&#34;&gt;&lt;/script&gt;
  &lt;script src=&#34;js/keyboard_input_manager.js&#34;&gt;&lt;/script&gt;
  &lt;script src=&#34;js/html_actuator.js&#34;&gt;&lt;/script&gt;
  &lt;script src=&#34;js/grid.js&#34;&gt;&lt;/script&gt;
  &lt;script src=&#34;js/tile.js&#34;&gt;&lt;/script&gt;
  &lt;script src=&#34;js/local_storage_manager.js&#34;&gt;&lt;/script&gt;
  &lt;script src=&#34;js/game_manager.js&#34;&gt;&lt;/script&gt;
  &lt;script src=&#34;js/application.js&#34;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;


  
&lt;/body&gt;
&lt;/html&gt;

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.github.io/funs/games/game2048/2048/  

