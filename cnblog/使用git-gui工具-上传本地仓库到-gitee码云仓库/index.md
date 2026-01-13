# 

<h1>前言：</h1>
<p>&nbsp;网上关于git的命令操作与使用很多教程和博客，在使用git工具时我发现有一个 git Gui 可视化工具，我觉得十分的亲切，由于我之前一直是使用svn作为版本控制管理工具，都是可视化操作，使用起来特别方便，我发现了git GUI 我觉得这个应该使用起来就会很方便就不用去使用命令进行上传更新提交代码了吧，但在使用Git GUI过程中并没有那么的方便，由于Git GUI 全是英文的导致，我在使用学习过程中遇到不少麻烦，所以就准备写一篇博客来总结下windows上使用Git GUI可视化工具上传，提交代码的步骤方法。</p>
<h1>操作步骤：</h1>
<p>主要使用Git GUI 将本地仓库 上传推送到 远程的 码云仓库地址上！&nbsp;</p>
<h2>1、在码云Gitee上创建一个仓库地址</h2>
<p>&nbsp;打开&nbsp;<a title="码云" href="http://gitee.com/" target="_blank">码云地址</a>，登录后，右上角加号 ，新建仓库</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200626224311947-713494198.png" alt="" width="497" height="218" loading="lazy" /></p>
<p>&nbsp;</p>
<p><span style="font-size: 14px;">&nbsp;输入仓库名称、路径、仓库描述后，点击新建保存。</span></p>
<p><span style="font-size: 14px;">然后打开，刚刚创建的仓库地址，点击克隆下在，复制仓库地址</span></p>
<p><span style="font-size: 14px;">如：https://gitee.com/geekswg/geekswg.git</span></p>
<p><span style="font-size: 14px;"><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200626224634799-187614733.png" alt="" width="466" height="313" loading="lazy" /></span></p>
<h2>2、使用Git GUI 创建 一个本地仓库</h2>
<p>&nbsp;在新建本地仓库地址的目录下右键，选择 Git GUI Here</p>
<p>点击Create New Repository,选择本地仓库目录后，点击create</p>
<h2>3、在码云 个人中心 添加 SSH 公钥</h2>
<p>打开码云个人中心，选择 SSH公钥 添加 SSH公钥，查看如何生成 SSH公钥</p>
<p>生成公钥步骤：</p>
<p>打开windows cmd终端窗口</p>
<p>输入命令 ssh-keygen -t rsa -C "geekswg@qq.com"&nbsp; // 这里 geekswwg@qq.com 为自己码云 账号</p>
<p>然后一直回车，当你看到</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200626234502064-107359756.png" alt="" width="474" height="321" loading="lazy" /></p>
<p>&nbsp;</p>
<p>&nbsp;就说明已经成功创建了SSH公钥了，这里公钥保存的路径一般在在&nbsp;C:\Users\geeks\.ssh\文件夹目录下（geeks为windeos系统的用户名）</p>
<p>在windows 生成 SSH 公钥后，生成公钥的路径一般 在&nbsp;C:\Users\geeks\.ssh\文件夹目录下（geeks为用户名），找到公钥文件（id_rsa.pub）后，然后将生成公钥的文件用记事本打开，将公钥文件里面的文本全部复制到公钥的文本域中，然后保存即可。</p>
<h2>4、使用Git GUI 将本地的代码推送到码云仓库上</h2>
<p>&nbsp;在本地仓库目录下右键，点击 Git GUI Here后,点击 commit,push 按钮，填写远程仓库地址后点击 push，开始提交上传本地仓库代码到gitee码云上的远程仓库了。图示操作如下：</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200626225914829-1712423390.png" alt="" width="504" height="306" loading="lazy" /></p>
<p>&nbsp;提交成功：</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200626230122652-1688731852.png" alt="" width="481" height="219" loading="lazy" /></p>
<h1>遇到的问题：</h1>
<h3>1、&nbsp;! [remote rejected] master -&gt; master (hook declined)</h3>
<p>我在使用git Gui工具commit，push 我的代码到码云仓库主分支时提示，具体报错信息如下</p>
<div class="cnblogs_code">
<pre>POST git-receive-pack (<span style="color: #800080;">757</span><span style="color: #000000;"> bytes)
remote: Powered by [</span><span style="color: #800080;">01</span>;33mGITEE.COM [0m[[<span style="color: #800080;">01</span>;35mGNK-<span style="color: #800080;">5.0</span><span style="color: #000000;">[0m][0m        
remote: error: GE007: Your push would publish a [</span><span style="color: #800080;">01</span><span style="color: #000000;">;31mprivate email address[0m.        
remote: You can make your email </span><span style="color: #0000ff;">public</span> or [33mdisable <span style="color: #0000ff;">this</span><span style="color: #000000;"> protection[0m by visiting:        
remote: [</span><span style="color: #800080;">01</span>;36mhttps:<span style="color: #008000;">//</span><span style="color: #008000;">gitee.com/profile/emails[0m        </span>
remote: error: hook declined to update refs/heads/<span style="color: #000000;">master        
Pushing to https:</span><span style="color: #008000;">//</span><span style="color: #008000;">gitee.com/geekswg/cn_blog_theme_vue.git</span>
To https:<span style="color: #008000;">//</span><span style="color: #008000;">gitee.com/geekswg/cn_blog_theme_vue.git</span>
 ! [remote rejected] master -&gt;<span style="color: #000000;"> master (hook declined)
error: failed to push some refs to </span><span style="color: #800000;">'</span><span style="color: #800000;">https://gitee.com/geekswg/cn_blog_theme_vue.git</span><span style="color: #800000;">'</span></pre>
</div>
<p>根据里面的提示信息：You can make your email public，表示需要公开自己的邮箱，这里需要在<a title="码云仓库" href="http://gitee.com/" target="_blank">码云网站</a>上进行设置，公开自己邮箱后就能正常提交了</p>
<p>主要原因是有 没有 公开自己的邮箱设置，打开码云网站，在个人中心，点击【设置】按钮，选择【多邮箱管理】，不要勾选 不公开自己的邮箱，然后保存设置。</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200626163223087-1690828806.png" alt="" width="589" height="267" loading="lazy" /></p>
<h3>&nbsp;2、&nbsp;! [rejected]&nbsp; &nbsp; &nbsp; &nbsp; master -&gt; master (fetch first)</h3>
<p>提交失败，是由于本地的版本不是最新版本，需要先执行 fetech 更新操作，然后才能提交push代码！</p>
<p>&nbsp;</p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/cnblog/%E4%BD%BF%E7%94%A8git-gui%E5%B7%A5%E5%85%B7-%E4%B8%8A%E4%BC%A0%E6%9C%AC%E5%9C%B0%E4%BB%93%E5%BA%93%E5%88%B0-gitee%E7%A0%81%E4%BA%91%E4%BB%93%E5%BA%93/  

