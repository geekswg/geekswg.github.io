# 

<h1>前言：</h1>
<p>之前一直使用Eclipse 系列开发IDE工具，由于eclipse是开源的所以，一般情况，eclipse基本上每一个java入门者的首选开发工具，其次 Myeclipse。不过现在越来越多的人使用了 Idea&nbsp;<a href="http://www.baidu.com/link?url=ZzIbccyrnyov-S3NYm5PTnke8Xxa45NQ8EtvLT-Ahe86EaGHhnAZOErXA2ZWXf_p" target="_blank" data-click="{
			'F':'778317EA',
			'F1':'9D73F1E4',
			'F2':'4CA6DD6B',
			'F3':'54E5263F',
			'T':'1592723193',
						'y':'76EE6FEC'
												}">IntelliJ&nbsp;IDEA</a>&nbsp;开发工具。我之前也下载使用过，不过由于不习惯它的 快捷键 和 周围同事 都使用 myeclipse ，所以我也就放弃了。由于现在的同事都比较偏爱使用 Idea ，然后我也接抱着试试的态度，重新 上手使用了，没过几天我就 深深的爱上这个 IDE 工具，现在已经欲罢不能了，尤其熟悉了它的快捷键后，就会发现它十分方便智能，提示十分到位。</p>
<h1>常用面板：</h1>
<h2>启动首页：</h2>
<p>左边栏，底部工具栏 ，右侧栏、右下角事件日志、中间的常用快捷键提示部分（<span style="color: #ff0000;"><strong>双击Shift 快捷键</strong></span>，搜索一切你想搜索的东西，保证你会爱上这个快捷键）</p>
<p><img src="https://img2020.cnblogs.com/blog/2055231/202006/2055231-20200621151548629-436243639.png" alt="" width="455" height="283" loading="lazy" /></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<h1>常用设置：</h1>
<h2>设置快捷偏好</h2>
<p>如果你经常使用eclipse系列的软件，可以修改。</p>
<h2>插件：</h2>
<p>idea 插件市场提供丰富的插件功能，安装十分方便</p>
<p>修改 idea jvm 内存分配：</p>
<p>idea安装同级目录下&nbsp;idea.exe.vmoptions 文件修改 属性值</p>
<p>-Xms128m&nbsp; # 最小内存<br />-Xmx512m #最大内存分配</p>
<h1>常用快捷键使用：</h1>
<p>双击 Shift ，快速全局搜索</p>
<p>Ctrl +&nbsp; F， 指定区域内 光标所在区域内搜索，Ctrl + R , replace ,字符串 替换功能</p>
<p>Alt + F7 查看 变量，方法被引用的所有地方。</p>
<p>Alt + 7 查看 当前文件 大纲 导航，</p>
<p>Alt + Enter ，快速提示，操作，比如导入包，try、catch 或者抛出异常</p>
<p>Ctrl + Alt + S 快速打开 设置</p>
<p>Ctrl + Alt + L 快速 格式化代码，让你代码瞬间变得整洁，方便阅读。</p>
<p>Ctrl + D 复制当前行到下一行， Ctrl + Y 删除当前前，Ctrl + C 复制当前行，Ctrl + V 复制</p>
<p>Alt + Insert ,快速 生成代码。如getter，setter，构造函数 等方法。</p>
<p>以上个人认为经常使用的快捷键，记住了，使用起来十分方便</p>
<p>&nbsp;</p>
<p>==========这里的的内容 主要来源与网络 总结收集==========</p>
<h1>Idea 全部快捷键 表</h1>
<p align="left">快捷键：如果想修改快捷键（setting-&gt;keymap）。</p>
<ul>
<li>
1.&nbsp;Ctrl&nbsp;+&nbsp;Space&nbsp;</li>

</ul>
<p align="left">完成类、方法、变量名称的自动输入,这个快捷键是我最经常使用的快捷键了，它可以完成类、方法、变量名称的自动录入，很方便</p>
<ul>
<li>
2.&nbsp;Ctrl&nbsp;+&nbsp;N（Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;N）</li>

</ul>
<p align="left">
跳转到指定的java文件（其它文件）这个功能很方便，至少我不用每回都在一长串的文件列表里找寻我想要编辑的类文件和jsp文件了</p>
<ul>
<li>
3.&nbsp;Ctrl&nbsp;+&nbsp;B&nbsp;</li>

</ul>
<p align="left">
跳转到定义处这个就不用多说了，好象是个IDE就会提供的功能</p>
<ul>
<li>
4.&nbsp;Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;T&nbsp;</li>

</ul>
<p align="left">
用*来围绕选中的代码行（&nbsp;*&nbsp;包括if、while、try&nbsp;catch等）这个功能也很方便，把我以前要做的：①先写if-else，②然后调整代码的缩进格式，还要注意括号是否匹配了，现在用这个功能来做，省事多了（不过让我变得越来越懒了）</p>
<ul>
<li>
5.&nbsp;Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;B&nbsp;</li>

</ul>
<p align="left">
跳转到方法实现处这个也算是很普遍的功能了，就不多说了。</p>
<ul>
<li>
6.&nbsp;Ctrl&nbsp;+&nbsp;W&nbsp;</li>

</ul>
<p align="left">
按一个word来进行选择操作在IDEA里的这个快捷键功能是先选择光标所在字符处的单词，然后是选择源<br />
代码的扩展区域。举例来说，对下边这个语句java.text.SimpleDateFormat&nbsp;formatter&nbsp;=&nbsp;new&nbsp;java.text.SimpleDateFormat("yyyy-MM-dd&nbsp;HH:mm");当光标的位置在双引号内的字符串中时，会先选中这个字符串，然后是等号右边的表达式，再是整个句子。我一般都是在对代码进行重新修改的时候使用<br />
它来选择出那些长长的复合表达式，很方便：）</p>
<ul>
<li>
7.&nbsp;Shift&nbsp;+&nbsp;F1&nbsp;</li>

</ul>
<p align="left">
在浏览器中显示指定的java&nbsp;docs,这个也应该是几乎所有的java&nbsp;ide都提供的功能，就不多说了。</p>
<ul>
<li>
8.&nbsp;Ctrl&nbsp;+&nbsp;Q&nbsp;</li>

</ul>
<p align="left">
在editor&nbsp;window中显示java&nbsp;docs这个功能很方便--因为有时仅仅是忘记了自己编写的方法中的某个参数的含义，此时又不想再起一个浏览器来查看java&nbsp;doc，此时这个功能的好处就体现出来了</p>
<ul>
<li>
9.&nbsp;Ctrl&nbsp;+&nbsp;/&nbsp;</li>

</ul>
<p align="left">
注释/反注释指定的语句,这个功能很象PB中提供的一个功能，它可以注释和反注释你所选择的语句（使用单行注释符号"//"），你也可以用Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;/&nbsp;来进行多行语句的注释（即使用多行注释符号"/*&nbsp;...&nbsp;*/"）</p>
<ul>
<li>
10.&nbsp;F2/Shift&nbsp;+&nbsp;F2&nbsp;</li>

</ul>
<p align="left">
跳转到下/上一个错误语句处IDEA提供了一个在错误语句之间方便的跳转的功能，你使用这个快捷键可以快捷在出错的语句之间进行跳转。</p>
<ul>
<li>
11.&nbsp;Shift&nbsp;+&nbsp;F6&nbsp;</li>

</ul>
<p align="left">
提供对方法、变量的重命名对IDEA提供的Refector功能我用得比较少，相比之下这个功能是我用得最多的了。对于这个功能没什么可说的了，确实很方便，赶快试一试吧。</p>
<ul>
<li>
12.&nbsp;Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;L&nbsp;</li>

</ul>
<p align="left">
根据模板格式化选择的代码,根据模板中设定的格式来format你的java代码，不过可惜的是只对java文件有效</p>
<ul>
<li>
13.&nbsp;Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;I&nbsp;</li>

</ul>
<p align="left">
将选中的代码进行自动缩进编排这个功能在编辑jsp文件的时候也可以工作，提供了一个对上边格式化代码功能的补充。<br />
14.&nbsp;Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;O&nbsp;<br />
优化import自动去除无用的import语句，蛮不错的一个功能。<br />
15.&nbsp;Ctrl&nbsp;+&nbsp;]/[&nbsp;<br />
跳转到代码块结束/开始处,这个功能vi也有，也是很常用的一个代码编辑功能了。<br />
16.Ctrl+E<br />
可以显示最近编辑的文件列表<br />
17.Shift+Click<br />
可以关闭文件<br />
18.Ctrl+Shift+Backspace<br />
可以跳转到上次编辑的地方<br />
19.Ctrl+F12<br />
可以显示当前文件的结构<br />
20.Ctrl+F7<br />
可以查询当前元素在当前文件中的引用，然后按F3可以选择<br />
21.Ctrl+Shift+N<br />
可以快速打开文件<br />
22.Alt+Q<br />
可以看到当前方法的声明<br />
23.Ctrl+P<br />
可以显示参数信息<br />
25.Alt+Insert<br />
可以生成构造器/Getter/Setter等<br />
26.Ctrl+Alt+V&nbsp;<br />
可以引入变量。例如把括号内的SQL赋成一个变量<br />
27.Alt+Up&nbsp;and&nbsp;Alt+Down<br />
可在方法间快速移动<br /><br />
下面的不是很有用<br />
28.Alt+Enter<br />
可以得到一些Intention&nbsp;Action，例如将&rdquo;==&rdquo;改为&rdquo;equals()&rdquo;<br />
29.Ctrl+Shift+Alt+N<br />
可以快速打开符号<br />
30.Ctrl+Shift+Space<br />
在很多时候都能够给出Smart提示<br />
31.Alt+F3可以快速寻找<br />
32.Ctrl+O可以选择父类的方法进行重写<br />
33.Ctrl+Alt+Space是类名自动完成<br />
34.&nbsp;Ctrl+JLive&nbsp;Templates!<br />
35.Ctrl+Shift+F7可以高亮当前元素在当前文件中的使用<br />
30.Ctrl+Alt+Up&nbsp;/Ctrl+Alt+Down可以快速跳转搜索结果<br />
31.Ctrl+Shift+J可以整合两行<br />
32.Alt+F8是计算变量值<br /><br />
Ctrl+D&nbsp;复制上一行或复制选定&nbsp;<br />
Ctrl+Alt+L&nbsp;格式化代码&nbsp;<br />
Alt+Shift+Insert&nbsp;列编辑</p>
<h2 align="left">IntelliJ&nbsp;IDEA使用技巧：</h2>
<p align="left">1、写代码时用Alt-Insert（Code|Generate&hellip;）可以创建类里面任何字段的getter与setter方法。</p>
<p align="left">2、右键点击断点标记（在文本的左边栏里）激活速查菜单，你可以快速设置enable/disable断点或者条件它的属性。</p>
<p align="left">3、CodeCompletion（代码完成）属性里的一个特殊的变量是，激活Ctrl-Alt-Space可以完成在或不在当前文件里的类名。如果类没有引入则import标志会自动创建。</p>
<p align="left">4、使用Ctrl-Shift-V快捷键可以将最近使用的剪贴板内容选择插入到文本。使用时系统会弹出一个含有剪贴内容的对话框，从中你可以选择你要粘贴的部分。</p>
<p align="left">5、利用CodeCompletion（代码完成）属性可以快速地在代码中完成各种不同地语句，方法是先键入一个类名地前几个字母然后再用Ctrl-Space完成全称。如果有多个选项，它们会列在速查列表里。</p>
<p align="left">6、用Ctrl-/与Ctrl-Shift-/来注释/反注释代码行与代码块。</p>
<p align="left">-/用单行注释标记（&ldquo;//&hellip;&rdquo;）来注释/反注释当前行或者选择地代码块。而Ctrl-Shift-/则可以用块注释标记（&ldquo;/*&hellip;*/&rdquo;）把所选块包围起来。要反注释一个代码块就在块中任何一个地方按Ctrl-Shift-/即可。</p>
<p align="left">7、按Alt-Q（View|Context Info）可以不需要移动代码就能查看当前方法地声明。连续按两次会显示当前所编辑的类名。</p>
<p align="left">8、使用Refactor|Copy
Class&hellip;可以创建一个所选择的类的&ldquo;副本&rdquo;。这一点很有用，比如，在你想要创建一个大部分内容都和已存在类相同的类时。</p>
<p align="left">9、在编辑器里Ctrl-D可以复制选择的块或者没有所选块是的当前行。</p>
<p align="left">10、Ctrl-W（选择字）在编辑器里的功能是先选择脱字符处的单词，然后选择源代码的扩展区域。举例来说，先选择一个方法名，然后是调用这个方法的表达式，然后是整个语句，然后包容块，等等。</p>
<p align="left">11、如果你不想让指示事件细节的&ldquo;亮球&rdquo;图标在编辑器上显示，通过按Alt-Enter组合键打开所有事件列表然后用鼠标点击它就可以把这个事件文本附件的亮球置成非活动状态。</p>
<p align="left">这样以后就不会有指示特殊事件的亮球出现了，但是你仍然可以用Alt-Enter快捷键使用它。</p>
<p align="left">12、在使用CodeCompletion时，可以用逗点（.）字符，逗号（，）分号（；），空格和其它字符输入弹出列表里的当前高亮部分。选择的名字会随着输入的字符自动输入到编辑器里。</p>
<p align="left">13、在任何工具窗口里使用Escape键都可以把焦点移到编辑器上。</p>
<p align="left">Shift-Escape不仅可以把焦点移到编辑器上而且还可以隐藏当前（或最后活动的）工具窗口。</p>
<p align="left">F12键把焦点从编辑器移到最近使用的工具窗口。</p>
<p align="left">14、在调试程序时查看任何表达式值的一个容易的方法就是在编辑器中选择文本（可以按几次Ctrl-W组合键更有效地执行这个操作）然后按Alt-F8。</p>
<p align="left">15、要打开编辑器脱字符处使用的类或者方法Java文档的浏览器，就按Shift-F1（右键菜单的External JavaDoc）。</p>
<p align="left">要使用这个功能须要把加入浏览器的路径，在&ldquo;General&rdquo;选项中设置（Options | IDE Settings），另外还要把创建的Java文档加入到工程中（File | Project Properties）。</p>
<p align="left">16、用Ctrl-F12（View | File Structure Popup）键你可以在当前编辑的文件中快速导航。</p>
<p align="left">这时它会显示当前类的成员列表。选中一个要导航的元素然后按Enter键或F4键。要轻松地定位到列表中的一个条目，只需键入它的名字即可。</p>
<p align="left">17、在代码中把光标置于标记符或者它的检查点上再按Alt-F7（右键菜单中的Find Usages&hellip;）会很快地查找到在整个工程中使用地某一个类、方法或者变量的位置。</p>
<p align="left">18、按Ctrl-N（Go to | Class&hellip;）再键入类的名字可以快速地在编辑器里打开任何一个类。从显示出来的下拉列表里选择类。</p>
<p align="left">同样的方法你可以通过使用Ctrl-Shift-N（Go to | File&hellip;）打开工程中的非Java文件。</p>
<p align="left">&nbsp;</p>
<p align="left">19、要导航代码中一些地方使用到的类、方法或者变量的声明，无把光标放在查看项上再按Ctrl-B即可。也可以通过按Ctrl键的同时在查看点上单击鼠标键调转到声明处。</p>
<p align="left">20、把光标放到查看点上再按Ctrl-Alt-B可以导航到一个抽象方法的实现代码。</p>
<p align="left">21、要看一个所选择的类的继承层次，按Ctrl-H（Browse Type Hierarchy）即可。也可以激活编辑器中的继承关系视图查看当前编辑类的继承关系。</p>
<p align="left">22、使用Ctrl-Shift-F7（Search | Highlight Usages in File）可以快速高亮显示当前文件中某一变量的使用地方。按Escape清除高亮显示。</p>
<p align="left">23、用Alt-F3（Search | Incremental Search）在编辑器中实现快速查查找功能。</p>
<p align="left">在&ldquo;Search for:&rdquo;提示工具里输入字符,使用箭头键朝前和朝后搜索。按Escape退出。</p>
<p align="left">24、按Ctrl-J组合键来执行一些你记不起来的Live Template缩写。比如，键&ldquo;it&rdquo;然后按Ctrl-J看看有什么发生。</p>
<p align="left">25、Introduce
Variable整合帮助你简化代码中复杂的声明。举个例子，在下面的代码片断里，在代码中选择一个表达式：</p>
<p align="left">然后按Ctrl-Alt-V（Refactor | Introduce Variable）就会出现下面的结果：</p>
<p align="left">26、Ctrl-Shift-J快捷键把两行合成一行并把不必要的空格去掉以匹配你的代码格式。</p>
<p align="left">27、Ctrl-Shift-Backspace（Go to | Last Edit Location）让你调转到代码中所做改变的最后一个地方。</p>
<p align="left">多按几次Ctrl-Shift-Backspace查看更深的修改历史。</p>
<p align="left">28、用Tools
| Reformat Code&hellip;根据你的代码样式参考（查看Options | IDE Setting |
Code Style）格式化代码。</p>
<p align="left">使用Tools | Optimize Imports&hellip;可以根据设置（查看Options | IDE Setting | Code Style | Imports）自动&ldquo;优化&rdquo;imports（清除无用的imports等）。</p>
<p align="left">29、使用IDEA的Live Templates | Live Templates让你在眨眼间创建许多典型代码。比如，</p>
<p align="left">&nbsp;</p>
<p align="left">在一个方法里键入</p>
<p align="left">再按Tab键看有什么事情发生了。</p>
<p align="left">用Tab键在不同的模板域内移动。查看Options | Live Templates获取更多的细节。</p>
<p align="left">30、要查看一个文件中修改的本地历史，</p>
<p align="left">激活右键菜单里的Local VCS | Show
History&hellip;。也许你可以导航不同的文件版本，看看它们的不同之处再回滚到以前的任何一个版本吧。</p>
<p align="left">使用同样的右键菜单条目还可以看到一个目录里修改的历史。有了这个特性你就不会丢失任何代码了。</p>
<p align="left">&nbsp;</p>
<p align="left">31、如果要了解主菜单里每一个条目的用途，把鼠标指针移到菜单条目上再应用程序框架的底部的状态栏里就会显示它们的一些简短描述，也许会对你有帮助。</p>
<p align="left">32、要在编辑器里显示方法间的分隔线，打开Options | IDE Settings | Editor，选中&ldquo;Show
method separators&rdquo;检查盒（checkbox）。</p>
<p align="left">33、用Alt-Up和Alt-Down键可以在编辑器里不同的方法之间快速移动。</p>
<p align="left">34、用F2/Shift-F2键在高亮显示的语法错误间跳转。</p>
<p align="left">用Ctrl-Alt-Down/Ctrl-Alt-Up快捷键则可以在编译器错误信息或者查找操作结果间跳转。</p>
<p align="left">35、通过按Ctrl-O（Code | Override Methods&hellip;）可以很容易地重载基本类地方法。</p>
<p align="left">要完成当前类implements的（或者抽象基本类的）接口的方法，就使用Ctrl-I（Code | Implement Methods&hellip;）。</p>
<p align="left">36、如果光标置于一个方法调用的括号间，按Ctrl-P会显示一个可用参数的列表。</p>
<p align="left">37、要快速查看编辑器脱字符处使用的类或方法的Java文档，按Ctrl-Q（在弹出菜单的Show Quick JavaDoc里）即可。</p>
<p align="left">38、像Ctrl-Q（Show Quick JavaDoc显示简洁Java文档），Ctrl-P（Show Parameter Info显示参数信息），Ctrl-B（Go to Declaration跳转到声明），Shift-F1（External JavaDoc外部Java文档）以及其它一些快捷键不仅可以在编辑器里使用，也可以应用在代码完成右键列表里。</p>
<p align="left">39、Ctrl-E（View | Recent Files）弹出最近访问的文件右键列表。选中文件按Enter键打开。</p>
<p align="left">40、在IDEA中可以很容易地对你的类，方法以及变量进行重命名并在所有使用到它们的地方自动更正。</p>
<p align="left">试一下，把编辑器脱字符置于任何一个变量名字上然后按Shift-F6（Refactor | Rename&hellip;）。在对话框里键入要显示地新名字再按Enter。你会浏览到使用这个变量地所有地方然后按&ldquo;Do Refactor&rdquo;按钮结束重命名操作。</p>
<p align="left">&nbsp;</p>
<p align="left">41、要在任何视图（Project View工程视图，Structure View结构视图或者其它视图）里快速</p>
<p align="left">选择当前编辑地部分（类，文件，方法或者字段），按Alt-F1（View | Select in&hellip;）。</p>
<p align="left">42、在&ldquo;new&rdquo;字符后实例化一个已知类型对象时也许你会用到SmartType代码完成这个特性。比如，键入</p>
<p align="left">再按Ctrl-Shift-Space：</p>
<p align="left">43、通过使用SmartType代码完成，c教教Gf:业的供:育络\在IDEA中创建接口的整个匿名implementation也是非常容易的，比如，对于一些listener（监听器），可以键入</p>
<p align="left">Component component;</p>
<p align="left">component.addMouseListener(</p>
<p align="left">new &lt;caret is here&gt;</p>
<p align="left">);</p>
<p align="left">然后再按Ctrl-Shift-Space看看有什么发生了。</p>
<p align="left">44、在你需要设置一个已知类型的表达式的值时用SmartType代码完成也很有帮助。比如，键入</p>
<p align="left">String s = (&lt;caret is
here&gt;</p>
<p align="left">再按Ctrl-Shift-Space看看会有什么出现。</p>
<p align="left">45、在所有视图里都提供了速查功能：在树里只需键入字符就可以快速定位到一个条目。</p>
<p align="left">46、当你想用代码片断捕捉异常时，在编辑器里选中这个片断，按Ctrl-Alt-T（Code | Surround with&hellip;）然后选择&ldquo;try/catch&rdquo;。它会自动产生代码片断中抛出的所有异常的捕捉块。在Options
| File Templates | Code tab中你还可以自己定制产生捕捉块的模板。</p>
<p align="left">用列表中的其它项可以包围别的一些结构。</p>
<p align="left">47、在使用代码完成时，</p>
<p align="left">用Tab键可以输入弹出列表里的高亮显示部分。</p>
<p align="left">不像用Enter键接受输入，这个选中的名字会覆盖掉脱字符右边名字的其它部分。这一点在用一个方法或者变量名替换另一个时特别有用。</p>
<p align="left">48、在声明一个变量时代码完成特性会给你显示一个建议名。比如，开始键入&ldquo;private FileOutputStream&rdquo;然后按Ctrl-Space</p>
<p align="left">在Options | IDE Setting | Code
Style中还可以为本地变量，</p>
<p>==========这里的的内容 主要来源与网络 总结收集==========</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">快捷键：如果想修改快捷键（<span lang="EN-US">setting-&gt;keymap</span>）。</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">1.&nbsp;Ctrl&nbsp;+&nbsp;Space&nbsp;<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">完成类、方法、变量名称的自动输入<span lang="EN-US">,</span>这个快捷键是我最经常使用的快捷键了，它可以完成类、方法、变量名称的自动录入，很方便</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">2.&nbsp;Ctrl&nbsp;+&nbsp;N</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">（<span lang="EN-US">Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;N</span>）<span lang="EN-US"><br />
</span></span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">跳转到指定的<span lang="EN-US">java</span>文件（其它文件）这个功能很方便，至少我不用每回都在一长串的文件列表里找寻我想要编辑的类文件和<span lang="EN-US">jsp</span>文件了</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">3.&nbsp;Ctrl&nbsp;+&nbsp;B&nbsp;<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">跳转到定义处这个就不用多说了，好象是个<span lang="EN-US">IDE</span>就会提供的功能</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">4.&nbsp;Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;T&nbsp;<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">用<span lang="EN-US">*</span>来围绕选中的代码行（<span lang="EN-US">&nbsp;*&nbsp;</span>包括<span lang="EN-US">if</span>、<span lang="EN-US">while</span>、<span lang="EN-US">try&nbsp;catch</span>等）这个功能也很方便，把我以前要做的：①先写<span lang="EN-US">if-else</span>，②然后调整代码的缩进格式，还要注意括号是否匹配了，现在用这个功能来做，省事多了（不过让我变得越来越懒了）</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">5.&nbsp;Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;B&nbsp;<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">跳转到方法实现处这个也算是很普遍的功能了，就不多说了。</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">6.&nbsp;Ctrl&nbsp;+&nbsp;W</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">&nbsp;</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">按一个<span lang="EN-US">word</span>来进行选择操作在<span lang="EN-US">IDEA</span>里的这个快捷键功能是先选择光标所在字符处的单词，然后是选择源</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">代码的扩展区域。举例来说，对下边这个语句<span lang="EN-US">java.text.SimpleDateFormat&nbsp;formatter&nbsp;=&nbsp;new&nbsp;java.text.SimpleDateFormat("yyyy-MM-dd&nbsp;HH:mm");</span>当光标的位置在双引号内的字符串中时，会先选中这个字符串，然后是等号右边的表达式，再是整个句子。我一般都是在对代码进行重新修改的时候使用</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">它来选择出那些长长的复合表达式，很方便：）</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">7.&nbsp;Shift&nbsp;+&nbsp;F1&nbsp;<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">在浏览器中显示指定的<span lang="EN-US">java&nbsp;docs,</span>这个也应该是几乎所有的<span lang="EN-US">java&nbsp;ide</span>都提供的功能，就不多说了。</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">8.&nbsp;Ctrl&nbsp;+&nbsp;Q&nbsp;<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">在<span lang="EN-US">editor&nbsp;window</span>中显示<span lang="EN-US">java&nbsp;docs</span>这个功能很方便<span lang="EN-US">--</span>因为有时仅仅是忘记了自己编写的方法中的某个参数的含义，此时又不想再起一个浏览器来查看<span lang="EN-US">java&nbsp;doc</span>，此时这个功能的好处就体现出来了</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">9.&nbsp;Ctrl&nbsp;+&nbsp;/&nbsp;<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">注释<span lang="EN-US">/</span>反注释指定的语句<span lang="EN-US">,</span>这个功能很象<span lang="EN-US">PB</span>中提供的一个功能，它可以注释和反注释你所选择的语句（使用单行注释符号<span lang="EN-US">"//"</span>），你也可以用<span lang="EN-US">Ctrl&nbsp;+&nbsp;Shift&nbsp;+&nbsp;/&nbsp;</span>来进行多行语句的注释（即使用多行注释符号<span lang="EN-US">"/*&nbsp;...&nbsp;*/"</span>）</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">10.&nbsp;F2/Shift&nbsp;+&nbsp;F2&nbsp;<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">跳转到下<span lang="EN-US">/</span>上一个错误语句处<span lang="EN-US">IDEA</span>提供了一个在错误语句之间方便的跳转的功能，你使用这个快捷键可以快捷在出错的语句之间进行跳转。</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">11.&nbsp;Shift&nbsp;+&nbsp;F6&nbsp;<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">提供对方法、变量的重命名对<span lang="EN-US">IDEA</span>提供的<span lang="EN-US">Refector</span>功能我用得比较少，相比之下这个功能是我用得最多的了。对于这个功能没什么可说的了，确实很方便，赶快试一试吧。</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">12.&nbsp;Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;L&nbsp;<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">根据模板格式化选择的代码<span lang="EN-US">,</span>根据模板中设定的格式来<span lang="EN-US">format</span>你的<span lang="EN-US">java</span>代码，不过可惜的是只对<span lang="EN-US">java</span>文件有效</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">13.&nbsp;Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;I&nbsp;<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">将选中的代码进行自动缩进编排这个功能在编辑<span lang="EN-US">jsp</span>文件的时候也可以工作，提供了一个对上边格式化代码功能的补充。</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">14.&nbsp;Ctrl&nbsp;+&nbsp;Alt&nbsp;+&nbsp;O&nbsp;<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">优化<span lang="EN-US">import</span>自动去除无用的<span lang="EN-US">import</span>语句，蛮不错的一个功能。</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
<span style="background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">15.&nbsp;Ctrl&nbsp;+&nbsp;]/[&nbsp;</span><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">跳转到代码块结束<span lang="EN-US">/</span>开始处<span lang="EN-US">,</span>这个功能<span lang="EN-US">vi</span>也有，也是很常用的一个代码编辑功能了。</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">16.Ctrl+E<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以显示最近编辑的文件列表</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">17.Shift+Click<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以关闭文件</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">18.Ctrl+Shift+Backspace<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以跳转到上次编辑的地方</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">19.Ctrl+F12<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以显示当前文件的结构</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">20.Ctrl+F7<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以查询当前元素在当前文件中的引用，然后按<span lang="EN-US">F3</span>可以选择</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">21.Ctrl+Shift+N<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以快速打开文件</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">22.Alt+Q<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以看到当前方法的声明</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">23.Ctrl+P<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以显示参数信息</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">25.Alt+Insert<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以生成构造器<span lang="EN-US">/Getter/Setter</span>等</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">26.Ctrl+Alt+V&nbsp;<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以引入变量。例如把括号内的<span lang="EN-US">SQL</span>赋成一个变量</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">27.Alt+Up&nbsp;and&nbsp;Alt+Down<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可在方法间快速移动</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">下面的不是很有用</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">28.Alt+Enter<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以得到一些<span lang="EN-US">Intention&nbsp;Action</span>，例如将&rdquo;<span lang="EN-US">==</span>&rdquo;改为&rdquo;<span lang="EN-US">equals()</span>&rdquo;</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">29.Ctrl+Shift+Alt+N<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以快速打开符号</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">30.Ctrl+Shift+Space<br />
</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">在很多时候都能够给出<span lang="EN-US">Smart</span>提示</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">31.Alt+F3</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以快速寻找<span lang="EN-US"><br />
32.Ctrl+O</span>可以选择父类的方法进行重写<span lang="EN-US"><br />
33.Ctrl+Alt+Space</span>是类名自动完成<span lang="EN-US"><br />
34.&nbsp;Ctrl+JLive&nbsp;Templates!<br />
35.Ctrl+Shift+F7</span>可以高亮当前元素在当前文件中的使用<span lang="EN-US"><br />
</span></span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">30.Ctrl+Alt+Up&nbsp;/Ctrl+Alt+Down</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以快速跳转搜索结果</span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">31.Ctrl+Shift+J</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">可以整合两行<span lang="EN-US"><br />
32.Alt+F8</span>是计算变量值<span lang="EN-US"><br />
</span></span><span style="font-family: '微软雅黑',sans-serif; color: #4f4f4f;" lang="EN-US"><br />
</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">Ctrl+D&nbsp;</span><span style="font-family: 微软雅黑, sans-serif; color: red; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">复制上一行或复制选定<span lang="EN-US">&nbsp;<br />
Ctrl+Alt+L&nbsp;</span>格式化代码<span lang="EN-US">&nbsp;<br />
Alt+Shift+Insert&nbsp;</span>列编辑</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">IntelliJ&nbsp;IDEA</span><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;">使用技巧：</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span style="font-family: 微软雅黑, sans-serif; color: #4f4f4f; background-image: initial; background-position: initial; background-size: initial; background-repeat: initial; background-attachment: initial; background-origin: initial; background-clip: initial;" lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">1</span>、写代码时用<span lang="EN-US">Alt-Insert</span>（<span lang="EN-US">Code|Generate&hellip;</span>）可以创建类里面任何字段的<span lang="EN-US">getter</span>与<span lang="EN-US">setter</span>方法。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">2</span>、右键点击断点标记（在文本的左边栏里）激活速查菜单，你可以快速设置<span lang="EN-US">enable/disable</span>断点或者条件它的属性。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">3</span>、<span lang="EN-US">CodeCompletion</span>（代码完成）属性里的一个特殊的变量是，激活<span lang="EN-US">Ctrl-Alt-Space</span>可以完成在或不在当前文件里的类名。如果类没有引入则<span lang="EN-US">import</span>标志会自动创建。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">4</span>、使用<span lang="EN-US">Ctrl-Shift-V</span>快捷键可以将最近使用的剪贴板内容选择插入到文本。使用时系统会弹出一个含有剪贴内容的对话框，从中你可以选择你要粘贴的部分。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">5</span>、利用<span lang="EN-US">CodeCompletion</span>（代码完成）属性可以快速地在代码中完成各种不同地语句，方法是先键入一个类名地前几个字母然后再用<span lang="EN-US">Ctrl-Space</span>完成全称。如果有多个选项，它们会列在速查列表里。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">6</span>、用<span lang="EN-US">Ctrl-/</span>与<span lang="EN-US">Ctrl-Shift-/</span>来注释<span lang="EN-US">/</span>反注释代码行与代码块。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">-/</span>用单行注释标记（<span lang="EN-US">&ldquo;//&hellip;&rdquo;</span>）来注释<span lang="EN-US">/</span>反注释当前行或者选择地代码块。而<span lang="EN-US">Ctrl-Shift-/</span>则可以用块注释标记（<span lang="EN-US">&ldquo;/*&hellip;*/&rdquo;</span>）把所选块包围起来。要反注释一个代码块就在块中任何一个地方按<span lang="EN-US">Ctrl-Shift-/</span>即可。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">7</span>、按<span lang="EN-US">Alt-Q</span>（<span lang="EN-US">View|Context Info</span>）可以不需要移动代码就能查看当前方法地声明。连续按两次会显示当前所编辑的类名。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">8</span>、使用<span lang="EN-US">Refactor|Copy
Class&hellip;</span>可以创建一个所选择的类的<span lang="EN-US">&ldquo;</span>副本<span lang="EN-US">&rdquo;</span>。这一点很有用，比如，在你想要创建一个大部分内容都和已存在类相同的类时。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">9</span>、在编辑器里<span lang="EN-US">Ctrl-D</span>可以复制选择的块或者没有所选块是的当前行。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">10</span>、<span lang="EN-US">Ctrl-W</span>（选择字）在编辑器里的功能是先选择脱字符处的单词，然后选择源代码的扩展区域。举例来说，先选择一个方法名，然后是调用这个方法的表达式，然后是整个语句，然后包容块，等等。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">11</span>、如果你不想让指示事件细节的<span lang="EN-US">&ldquo;</span>亮球<span lang="EN-US">&rdquo;</span>图标在编辑器上显示，通过按<span lang="EN-US">Alt-Enter</span>组合键打开所有事件列表然后用鼠标点击它就可以把这个事件文本附件的亮球置成非活动状态。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">这样以后就不会有指示特殊事件的亮球出现了，但是你仍然可以用<span lang="EN-US">Alt-Enter</span>快捷键使用它。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">12</span>、在使用<span lang="EN-US">CodeCompletion</span>时，可以用逗点（<span lang="EN-US">.</span>）字符，逗号（，）分号（；），空格和其它字符输入弹出列表里的当前高亮部分。选择的名字会随着输入的字符自动输入到编辑器里。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">13</span>、在任何工具窗口里使用<span lang="EN-US">Escape</span>键都可以把焦点移到编辑器上。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">Shift-Escape</span>不仅可以把焦点移到编辑器上而且还可以隐藏当前（或最后活动的）工具窗口。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">F12</span>键把焦点从编辑器移到最近使用的工具窗口。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">14</span>、在调试程序时查看任何表达式值的一个容易的方法就是在编辑器中选择文本（可以按几次<span lang="EN-US">Ctrl-W</span>组合键更有效地执行这个操作）然后按<span lang="EN-US">Alt-F8</span>。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">15</span>、要打开编辑器脱字符处使用的类或者方法<span lang="EN-US">Java</span>文档的浏览器，就按<span lang="EN-US">Shift-F1</span>（右键菜单的<span lang="EN-US">External JavaDoc</span>）。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">要使用这个功能须要把加入浏览器的路径，在&ldquo;<span lang="EN-US">General&rdquo;</span>选项中设置（<span lang="EN-US">Options | IDE Settings</span>），另外还要把创建的<span lang="EN-US">Java</span>文档加入到工程中（<span lang="EN-US">File | Project Properties</span>）。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">16</span>、用<span lang="EN-US">Ctrl-F12</span>（<span lang="EN-US">View | File Structure Popup</span>）键你可以在当前编辑的文件中快速导航。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">这时它会显示当前类的成员列表。选中一个要导航的元素然后按<span lang="EN-US">Enter</span>键或<span lang="EN-US">F4</span>键。要轻松地定位到列表中的一个条目，只需键入它的名字即可。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">17</span>、在代码中把光标置于标记符或者它的检查点上再按<span lang="EN-US">Alt-F7</span>（右键菜单中的<span lang="EN-US">Find Usages&hellip;</span>）会很快地查找到在整个工程中使用地某一个类、方法或者变量的位置。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">18</span>、按<span lang="EN-US">Ctrl-N</span>（<span lang="EN-US">Go to | Class&hellip;</span>）再键入类的名字可以快速地在编辑器里打开任何一个类。从显示出来的下拉列表里选择类。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">同样的方法你可以通过使用<span lang="EN-US">Ctrl-Shift-N</span>（<span lang="EN-US">Go to | File&hellip;</span>）打开工程中的非<span lang="EN-US">Java</span>文件。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">19</span>、要导航代码中一些地方使用到的类、方法或者变量的声明，无把光标放在查看项上再按<span lang="EN-US">Ctrl-B</span>即可。也可以通过按<span lang="EN-US">Ctrl</span>键的同时在查看点上单击鼠标键调转到声明处。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">20</span>、把光标放到查看点上再按<span lang="EN-US">Ctrl-Alt-B</span>可以导航到一个抽象方法的实现代码。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">21</span>、要看一个所选择的类的继承层次，按<span lang="EN-US">Ctrl-H</span>（<span lang="EN-US">Browse Type Hierarchy</span>）即可。也可以激活编辑器中的继承关系视图查看当前编辑类的继承关系。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">22</span>、使用<span lang="EN-US">Ctrl-Shift-F7</span>（<span lang="EN-US">Search | Highlight Usages in File</span>）可以快速高亮显示当前文件中某一变量的使用地方。按<span lang="EN-US">Escape</span>清除高亮显示。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">23</span>、用<span lang="EN-US">Alt-F3</span>（<span lang="EN-US">Search | Incremental Search</span>）在编辑器中实现快速查查找功能。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">在&ldquo;<span lang="EN-US">Search for:&rdquo;</span>提示工具里输入字符<span lang="EN-US">,</span>使用箭头键朝前和朝后搜索。按<span lang="EN-US">Escape</span>退出。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">24</span>、按<span lang="EN-US">Ctrl-J</span>组合键来执行一些你记不起来的<span lang="EN-US">Live Template</span>缩写。比如，键<span lang="EN-US">&ldquo;it&rdquo;</span>然后按<span lang="EN-US">Ctrl-J</span>看看有什么发生。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">25</span>、<span lang="EN-US">Introduce
Variable</span>整合帮助你简化代码中复杂的声明。举个例子，在下面的代码片断里，在代码中选择一个表达式：</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">然后按<span lang="EN-US">Ctrl-Alt-V</span>（<span lang="EN-US">Refactor | Introduce Variable</span>）就会出现下面的结果：</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">26</span>、<span lang="EN-US">Ctrl-Shift-J</span>快捷键把两行合成一行并把不必要的空格去掉以匹配你的代码格式。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">27</span>、<span lang="EN-US">Ctrl-Shift-Backspace</span>（<span lang="EN-US">Go to | Last Edit Location</span>）让你调转到代码中所做改变的最后一个地方。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">多按几次<span lang="EN-US">Ctrl-Shift-Backspace</span>查看更深的修改历史。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">28</span>、用<span lang="EN-US">Tools
| Reformat Code&hellip;</span>根据你的代码样式参考（查看<span lang="EN-US">Options | IDE Setting |
Code Style</span>）格式化代码。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">使用<span lang="EN-US">Tools | Optimize Imports&hellip;</span>可以根据设置（查看<span lang="EN-US">Options | IDE Setting | Code Style | Imports</span>）自动<span lang="EN-US">&ldquo;</span>优化<span lang="EN-US">&rdquo;imports</span>（清除无用的<span lang="EN-US">imports</span>等）。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">29</span>、使用<span lang="EN-US">IDEA</span>的<span lang="EN-US">Live Templates | Live Templates</span>让你在眨眼间创建许多典型代码。比如，</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">在一个方法里键入</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">再按<span lang="EN-US">Tab</span>键看有什么事情发生了。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">用<span lang="EN-US">Tab</span>键在不同的模板域内移动。查看<span lang="EN-US">Options | Live Templates</span>获取更多的细节。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">30</span>、要查看一个文件中修改的本地历史，</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">激活右键菜单里的<span lang="EN-US">Local VCS | Show
History&hellip;</span>。也许你可以导航不同的文件版本，看看它们的不同之处再回滚到以前的任何一个版本吧。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">使用同样的右键菜单条目还可以看到一个目录里修改的历史。有了这个特性你就不会丢失任何代码了。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">31</span>、如果要了解主菜单里每一个条目的用途，把鼠标指针移到菜单条目上再应用程序框架的底部的状态栏里就会显示它们的一些简短描述，也许会对你有帮助。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">32</span>、要在编辑器里显示方法间的分隔线，打开<span lang="EN-US">Options | IDE Settings | Editor</span>，选中<span lang="EN-US">&ldquo;Show
method separators&rdquo;</span>检查盒（<span lang="EN-US">checkbox</span>）。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">33</span>、用<span lang="EN-US">Alt-Up</span>和<span lang="EN-US">Alt-Down</span>键可以在编辑器里不同的方法之间快速移动。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">34</span>、用<span lang="EN-US">F2/Shift-F2</span>键在高亮显示的语法错误间跳转。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">用<span lang="EN-US">Ctrl-Alt-Down/Ctrl-Alt-Up</span>快捷键则可以在编译器错误信息或者查找操作结果间跳转。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">35</span>、通过按<span lang="EN-US">Ctrl-O</span>（<span lang="EN-US">Code | Override Methods&hellip;</span>）可以很容易地重载基本类地方法。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">要完成当前类<span lang="EN-US">implements</span>的（或者抽象基本类的）接口的方法，就使用<span lang="EN-US">Ctrl-I</span>（<span lang="EN-US">Code | Implement Methods&hellip;</span>）。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">36</span>、如果光标置于一个方法调用的括号间，按<span lang="EN-US">Ctrl-P</span>会显示一个可用参数的列表。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">37</span>、要快速查看编辑器脱字符处使用的类或方法的<span lang="EN-US">Java</span>文档，按<span lang="EN-US">Ctrl-Q</span>（在弹出菜单的<span lang="EN-US">Show Quick JavaDoc</span>里）即可。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">38</span>、像<span lang="EN-US">Ctrl-Q</span>（<span lang="EN-US">Show Quick JavaDoc</span>显示简洁<span lang="EN-US">Java</span>文档），<span lang="EN-US">Ctrl-P</span>（<span lang="EN-US">Show Parameter Info</span>显示参数信息），<span lang="EN-US">Ctrl-B</span>（<span lang="EN-US">Go to Declaration</span>跳转到声明），<span lang="EN-US">Shift-F1</span>（<span lang="EN-US">External JavaDoc</span>外部<span lang="EN-US">Java</span>文档）以及其它一些快捷键不仅可以在编辑器里使用，也可以应用在代码完成右键列表里。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">39</span>、<span lang="EN-US">Ctrl-E</span>（<span lang="EN-US">View | Recent Files</span>）弹出最近访问的文件右键列表。选中文件按<span lang="EN-US">Enter</span>键打开。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">40</span>、在<span lang="EN-US">IDEA</span>中可以很容易地对你的类，方法以及变量进行重命名并在所有使用到它们的地方自动更正。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">试一下，把编辑器脱字符置于任何一个变量名字上然后按<span lang="EN-US">Shift-F6</span>（<span lang="EN-US">Refactor | Rename&hellip;</span>）。在对话框里键入要显示地新名字再按<span lang="EN-US">Enter</span>。你会浏览到使用这个变量地所有地方然后按<span lang="EN-US">&ldquo;Do Refactor&rdquo;</span>按钮结束重命名操作。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">41</span>、要在任何视图（<span lang="EN-US">Project View</span>工程视图，<span lang="EN-US">Structure View</span>结构视图或者其它视图）里快速</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">选择当前编辑地部分（类，文件，方法或者字段），按<span lang="EN-US">Alt-F1</span>（<span lang="EN-US">View | Select in&hellip;</span>）。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">42</span>、在<span lang="EN-US">&ldquo;new&rdquo;</span>字符后实例化一个已知类型对象时也许你会用到<span lang="EN-US">SmartType</span>代码完成这个特性。比如，键入</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">再按<span lang="EN-US">Ctrl-Shift-Space</span>：</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">43</span>、通过使用<span lang="EN-US">SmartType</span>代码完成，<span lang="EN-US">c</span>教教<span lang="EN-US">Gf:</span>业的供<span lang="EN-US">:</span>育络<span lang="EN-US">\</span>在<span lang="EN-US">IDEA</span>中创建接口的整个匿名<span lang="EN-US">implementation</span>也是非常容易的，比如，对于一些<span lang="EN-US">listener</span>（监听器），可以键入</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">Component component;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">component.addMouseListener(</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">new &lt;caret is here&gt;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">);</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">然后再按<span lang="EN-US">Ctrl-Shift-Space</span>看看有什么发生了。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">44</span>、在你需要设置一个已知类型的表达式的值时用<span lang="EN-US">SmartType</span>代码完成也很有帮助。比如，键入</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">String s = (&lt;caret is
here&gt;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">再按<span lang="EN-US">Ctrl-Shift-Space</span>看看会有什么出现。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">45</span>、在所有视图里都提供了速查功能：在树里只需键入字符就可以快速定位到一个条目。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">46</span>、当你想用代码片断捕捉异常时，在编辑器里选中这个片断，按<span lang="EN-US">Ctrl-Alt-T</span>（<span lang="EN-US">Code | Surround with&hellip;</span>）然后选择<span lang="EN-US">&ldquo;try/catch&rdquo;</span>。它会自动产生代码片断中抛出的所有异常的捕捉块。在<span lang="EN-US">Options
| File Templates | Code tab</span>中你还可以自己定制产生捕捉块的模板。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">用列表中的其它项可以包围别的一些结构。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">47</span>、在使用代码完成时，</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">用<span lang="EN-US">Tab</span>键可以输入弹出列表里的高亮显示部分。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">不像用<span lang="EN-US">Enter</span>键接受输入，这个选中的名字会覆盖掉脱字符右边名字的其它部分。这一点在用一个方法或者变量名替换另一个时特别有用。</p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">48</span>、在声明一个变量时代码完成特性会给你显示一个建议名。比如，开始键入<span lang="EN-US">&ldquo;private FileOutputStream&rdquo;</span>然后按<span lang="EN-US">Ctrl-Space</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left"><span lang="EN-US">&nbsp;</span></p>
<p class="MsoNormal" style="line-height: 12pt;" align="left">在<span lang="EN-US">Options | IDE Setting | Code
Style</span>中还可以为本地变量，</p>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/cnblog/idea-java%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7%E5%BF%AB%E9%80%9F%E4%B8%8A%E6%89%8B-%E5%B8%B8%E7%94%A8%E5%BF%AB%E6%8D%B7%E9%94%AE%E6%B1%87%E6%80%BB/  

