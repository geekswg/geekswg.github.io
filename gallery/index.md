# Gallery


&lt;style&gt;
.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    padding: 20px;
    max-width: 100%;
    margin: auto;

    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.gallery-item {
    text-align: center;
    flex: 1 1 calc(25% - 15px); /* Adjust for 4 items per row with gap */
    box-sizing: border-box;
}

.gallery-item img {
    width: 100%;
    aspect-ratio: 1 ;
    object-fit: cover;
    border-radius: 4px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.gallery-item img:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.gallery-item p {
    margin: 10px 0 0;
    font-size: 14px;
}

&lt;/style&gt;

&lt;div class=&#34;gallery&#34;&gt;
        &lt;div class=&#34;gallery-item&#34;&gt;
            &lt;a href=&#34;/gallery/hello&#34; &gt;
            &lt;img src=&#34;/images/avatar.webp&#34; alt=&#34;&#34;&gt;
            &lt;p&gt;相册&lt;/p&gt;
            &lt;/a&gt;
        &lt;/div&gt;
        &lt;div class=&#34;gallery-item&#34;&gt;
            &lt;a href=&#34;/gallery/qsmy&#34; &gt;
            &lt;img src=&#34;/gallery/qsmy/qsmy/qsmy-7.webp&#34; alt=&#34;&#34;&gt;
            &lt;p&gt;秦时明月&lt;/p&gt;
            &lt;/a&gt;
        &lt;/div&gt;
&lt;/div&gt;

---

> 作者:   
> URL: https://geekswg.js.cool/gallery/  

