# 

<h1 style="text-align: center;">word 批量设置表格宽度自适应</h1>
<h1>描述 ：</h1>
<p>我们经常从 外部 如 excel，html 等其他文件 中复制的表格到word 文档 经常会出现在 word 中显示不全的问题</p>
<p>主要是源格式的表格 宽度比 word 文档页面要大，就会导致 表格无法正常显示所有数据</p>
<p>&nbsp;</p>
<h1>解决方案</h1>
<p>使用 word 宏工具 批量设置 word 文档中的 表格宽度自适应，即可解决问题！</p>
<h2>打开宏编辑器</h2>
<p>在当前word文档中 按 alt + F11 快捷键 打开 word 宏编辑器 是 vb 语言。</p>
<p>然后 步骤如下图 所示</p>
<p>&nbsp;<img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200604063238933-449912634.png" alt="" /></p>
<h2>&nbsp;直接上代码</h2>
<p>&nbsp;附 图中代码如下：（尽情的复制吧）</p>
<div class="cnblogs_Highlighter">
<pre class="brush:csharp;gutter:true;">Private Sub Document_Open()
Application.Browser.Target = wdBrowseTable
For i = 1 To ActiveDocument.Tables.Count
    ActiveDocument.Tables(i).AutoFitBehavior (wdAutoFitContent) '根据内容自动调整表格

    ActiveDocument.Tables(i).AutoFitBehavior (wdAutoFitWindow) '根据窗口自动调整表格

    ActiveDocument.Tables(i).Range.ParagraphFormat.Alignment = wdAlignParagraphCenter '水平居中

    ActiveDocument.Tables(i).Range.ParagraphFormat.Alignment = wdCellAlignVerticalCenter '垂直居中

Next i
End Sub</pre>
</div>
<p>&nbsp;附代码如下</p>
<p>注意一定不要忘记 点击 保存按钮</p>
<p>方法缘于 博客园大神 传送门：<a href="https://www.cnblogs.com/jiangxin/p/5579885.html">https://www.cnblogs.com/jiangxin/p/5579885.html</a></p>
<p><strong>Word 的 宏工具真的有用呀，office 学无止境</strong></p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/cnblog/%E5%A4%96%E9%83%A8%E5%BA%94%E7%94%A8%E5%A4%8D%E5%88%B6-%E8%A1%A8%E6%A0%BC-%E5%88%B0word%E4%B8%AD-%E8%AE%BE%E7%BD%AE%E8%A1%A8%E6%A0%BC%E8%87%AA%E9%80%82%E5%BA%941/  

