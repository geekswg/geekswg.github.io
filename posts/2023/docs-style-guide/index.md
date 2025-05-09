# 中文技术文档的写作规范

{{< admonition quote "转载" true >}}
本文转载于 ：[李瑞豪的博客-中文技术文档的写作规范](https://lruihao.cn/posts/document-style-guide/)
{{< /admonition >}}

英语世界里，文档非常受重视，许多公司和组织都有自己的文档规范，清楚地规定写作要求，比如[微软](https://www.microsoftpressstore.com/store/microsoft-manual-of-style-9780735648715)、[MailChimp](http://styleguide.mailchimp.com/)、[Apple](https://help.apple.com/asg/mac/2013/ASG_2013.pdf)、[Yahoo](https://www.amazon.com/dp/B003P8QDFU/ref=dp-kindle-redirect?_encoding=UTF8&btkr=1)、[docker](https://docs.docker.com/opensource/doc-style/)、[Struts](https://struts.apache.org/docs/documentation-style-guide.html) 等等（维基百科有一份完整的[清单](https://en.wikipedia.org/wiki/List_of_style_guides)）。[中文的](https://github.com/ruanyf/document-style-guide/blob/master/docs/reference.md)也有不少，但都不令人满意，要么太简单，要么不太适用。
<!--more-->
> 以下参考来源：阮一峰的 [中文技术文档的写作规范](https://github.com/ruanyf/document-style-guide)

对于开发者来说，在工作中也需要适当地产出一些技术文档，但是很多人都不知道怎么写文档，都是凭着感觉写。

对于开发的系统、软件而言，系统用词的准确性和统一性也显得十分重要。

参考上面的规范，于是有了下面一份中文技术文档的写作规范。

<!--more-->

## 标题

### 层级

标题分为四级。

- 一级标题：文章的标题
- 二级标题：文章主要部分的大标题
- 三级标题：二级标题下面一级的小标题
- 四级标题：三级标题下面某一方面的小标题

下面是示例。

```markdown
# 一级标题

## 二级标题

### 三级标题

#### 四级标题
```

> 注：最多支持六级，但是同论文写作一样，层级太深，会使得整体显得杂乱无章，当确实需要更深层级时，应另起新篇单独论述。

### 原则

（1）一级标题下，不能直接出现三级标题。

示例：下面的文章结构，缺少二级标题。

```markdown
# 一级标题

### 三级标题
```

（2）标题要避免孤立编号（即同级标题只有一个）。

示例：下面的文章结构，`二级标题 A`只包含一个三级标题，完全可以省略`三级标题 A`。

```markdown
## 二级标题 A

### 三级标题 A

## 二级标题 B
```

（3）下级标题不重复上一级标题的名字。

示例：下面的文章结构，二级标题与下属的三级标题同名，建议避免。

```markdown
## 概述

### 概述
```

（4）谨慎使用四级标题，尽量避免出现，保持层级的简单，防止出现过于复杂的章节。

如果三级标题下有并列性的内容，建议只使用项目列表（Item list）。

示例：下面的结构二要好于结构一。结构一适用的场景，主要是较长篇幅的内容。

```markdown
结构一

### 三级标题

#### 四级标题 A

#### 四级标题 B

#### 四级标题 C

结构二

### 三级标题

**（1）A**

**（2）B**

**（3）C**
```

## 文本

### 字间距

（1）全角中文字符与半角英文字符之间，应有一个半角空格。

```
错误：本文介绍如何快速启动Windows系统。

正确：本文介绍如何快速启动 Windows 系统。
```

（2）全角中文字符与半角阿拉伯数字之间，有没有半角空格都可，但必须保证风格统一，不能两种风格混杂。

```
正确：2011年5月15日，我订购了5台笔记本电脑与10台平板电脑。

正确：2011 年 5 月 15 日，我订购了 5 台笔记本电脑与 10 台平板电脑。
```

半角的百分号，视同阿拉伯数字。

```
正确：今年我国经济增长率是6.5%。

正确：今年我国经济增长率是 6.5%。
```

（3）英文单位若不翻译，单位前的阿拉伯数字与单位符号之间，应留出适当的空隙。

```
例1：一部容量为 16 GB 的智能手机

例2：1 h = 60 min = 3,600 s
```

（4）半角英文字符和半角阿拉伯数字，与全角标点符号之间不留空格。

```
错误：他的电脑是 MacBook Air 。

正确：他的电脑是 MacBook Air。
```

### 句子

（1）避免使用长句。

不包含任何标点符号的单个句子，或者以逗号分隔的句子构件，长度尽量保持在 20 个字以内；20 ～ 29 个字的句子，可以接受；30 ～ 39 个字的句子，语义必须明确，才能接受；多于 40 个字的句子，任何情况下都不能接受。

```
错误：本产品适用于从由一台服务器进行动作控制的单一节点结构到由多台服务器进行动作控制的并行处理程序结构等多种体系结构。

正确：本产品适用于多种体系结构。无论是由一台服务器（单一节点结构），还是由多台服务器（并行处理结构）进行动作控制，均可以使用本产品。
```

逗号分割的长句，总长度不应该超过 100 字或者正文的 3 行。

（2）尽量使用简单句和并列句，避免使用复合句。

```
并列句：他昨天生病了，没有参加会议。

复合句：那个昨天生病的人没有参加会议。
```

（3）同样一个意思，尽量使用肯定句表达，不使用否定句表达。

```
错误：请确认没有接通装置的电源。

正确：请确认装置的电源已关闭。
```

（4）避免使用双重否定句。

```
错误：没有删除权限的用户，不能删除此文件。

正确：用户必须拥有删除权限，才能删除此文件。
```

### 写作风格

（1）尽量不使用被动语态，改为使用主动语态。

```
错误：假如此软件尚未被安装，

正确：假如尚未安装这个软件，
```

（2）不使用非正式的语言风格。

```
错误：Lady Gaga 的演唱会真是酷毙了，从没看过这么给力的表演！！！

正确：无法参加本次活动，我深感遗憾。
```

（3）不使用冷僻、生造或者文言文的词语，而要使用现代汉语的常用表达方式。

```
错误：这是唯二的快速启动的方法。

正确：这是仅有的两种快速启动的方法。
```

（4）用对“的”、“地”、“得”。

```
她露出了开心的笑容。
（形容词＋的＋名词）

她开心地笑了。
（副词＋地＋动词）

她笑得很开心。
（动词＋得＋副词）
```

（5）使用代词时（比如“其”、“该”、“此”、“这”等词），必须明确指代的内容，保证只有一个含义。

```
错误：从管理系统可以监视中继系统和受其直接控制的分配系统。

正确：从管理系统可以监视两个系统：中继系统和受中继系统直接控制的分配系统。
```

（6）名词前不要使用过多的形容词。

```
错误：此设备的使用必须在接受过本公司举办的正式的设备培训的技师的指导下进行。

正确：此设备必须在技师的指导下使用，且指导技师必须接受过由本公司举办的正式设备培训。
```

### 英文处理

（1）英文原文如果使用了复数形式，翻译成中文时，应该将其还原为单数形式。

```
英文：...information stored in random access memory (RAMs)...

中文：⋯⋯存储在随机存取存储器（RAM）里的信息⋯⋯
```

（2）外文缩写可以使用半角圆点(`.`)表示缩写。

```
U.S.A.
Apple, Inc.
```

（3）表示中文时，英文省略号（`...`）应改为中文省略号（`⋯⋯`）。

```
英文：5 minutes later...

中文：5 分钟过去了⋯⋯
```

（4）英文书名或电影名改用中文表达时，双引号应改为书名号。

```
英文：He published an article entitled "The Future of the Aviation".

中文：他发表了一篇名为《航空业的未来》的文章。
```

（5）第一次出现英文词汇时，在括号中给出中文标注。此后再次出现时，直接使用英文缩写即可。

```
IOC（International Olympic Committee，国际奥林匹克委员会）。这样定义后，便可以直接使用“IOC”了。
```

（6）专有名词中每个词第一个字母均应大写，非专有名词则不需要大写。

```
“American Association of Physicists in Medicine”（美国医学物理学家协会）是专有名词，需要大写。

“online transaction processing”（在线事务处理）不是专有名词，不应大写。
```

## 段落

### 原则

- 一个段落只能有一个主题，或一个中心句子。
- 段落的中心句子放在段首，对全段内容进行概述。后面陈述的句子为中心句子服务。
- 一个段落的长度不能超过七行，最佳段落长度小于等于四行。
- 段落的句子语气要使用陈述和肯定语气，避免使用感叹语气。
- 段落之间使用一个空行隔开。
- 段落开头不要留出空白字符。

### 引用

引用第三方内容时，应注明出处。

```
One man’s constant is another man’s variable. — Alan Perlis
```

如果是全篇转载，请在全文开头显著位置注明作者和出处，并链接至原文。

```
本文转载自 WikiQuote
```

使用外部图片时，必须在图片下方或文末标明来源。

```
本文部分图片来自 Wikipedia
```

## 数值

### 半角数字

阿拉伯数字一律使用半角形式，不得使用全角形式。

```
错误：这件商品的价格是１０００元。

正确：这件商品的价格是 1000 元。
```

### 千分号

数值为千位以上，应添加千分号（半角逗号）。

```
XXX 公司的实收资本为 ￥1,258,000 人民币。
```

对于 4 位的数值，千分号是选用的，比如`1000`和`1,000`都可以接受。对于 4 位以上的数值，应添加千分号。

### 货币

货币应为阿拉伯数字，并在数字前写出货币符号，或在数字后写出货币中文名称。

```
$1,000
1,000 美元
```

英文的货币名称，建议参考国际标准 [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217)。

### 数值范围

表示数值范围时，用波浪线（`～`）或一字线（`—`）连接。参见《标点符号》一节的“连接号”部分。

带有单位或百分号时，两个数字建议都要加上单位或百分号。

```
132 kg～234 kg

67%～89%
```

### 变化程度的表示法

数字的增加要使用“增加了”、“增加到”。“了”表示增量，“到”表示定量。

```
增加到过去的两倍
（过去为一，现在为二）

增加了两倍
（过去为一，现在为三）
```

数字的减少要使用“降低了”、“降低到”。“了”表示增量，“到”表示定量。

```
降低到百分之八十
（定额是一百，现在是八十）

降低了百分之八十
（原来是一百，现在是二十）
```

不能用“降低 N 倍”或“减少 N 倍”的表示法，要用“降低百分之几”或“减少百分之几”。因为减少（或降低）一倍表示数值原来为一百，现在等于零。

## 标点符号

### 原则

（1）中文语句的标点符号，均应该采取全角符号，这样可以与全角文字保持视觉的一致。

（2）如果整句为英文，则该句使用英文/半角标点。

（3）句号、问号、叹号、逗号、顿号、分号和冒号不得出现在一行之首。

（4）点号（句号、逗号、顿号、分号、冒号）不得出现在标题的末尾，而标号（引号、括号、破折号、省略号、书名号、着重号、间隔号、叹号、问号）可以。

### 句号

（1）中文语句的结尾处应该用全角句号（`。`）。

（2）句子末尾用括号加注时，句号应在括号之外。

```
错误：关于文件的输出，请参照第 1.3 节（见第 26 页。）

正确：关于文件的输出，请参照第 1.3 节（见第 26 页）。
```

### 逗号

（1）逗号（`，`）表示句子内部的一般性停顿。

（2）注意避免“一逗到底”，即整个段落除了结尾，全部停顿都使用逗号。

### 顿号

（1）句子内部的并列词，应该用全角顿号(`、`) 分隔，而不用逗号，即使并列词是英语也是如此。

```
错误：我最欣赏的科技公司有 Google, Facebook, 腾讯, 阿里和百度等。

正确：我最欣赏的科技公司有 Google、Facebook、腾讯、阿里和百度等。
```

（2）英文句子中，并列词语之间使用半角逗号（`,`）分隔。

```
例句：Microsoft Office includes Word, Excel, PowerPoint, Outlook and other components.
```

（3）中文句子内部的并列词，最后一个尽量使用（`和`）来连接，使句子读起来更加连贯，下面两个句子都可以，第二个更优。

```
正确：我最欣赏的科技公司有 Google、Facebook、腾讯、阿里，以及百度等。

正确：我最欣赏的科技公司有 Google、Facebook、腾讯、阿里和百度等。
```

### 分号

（1）分号（`；`）表示复句内部并列分句之间的停顿。

### 引号

（1）引用时，应该使用全角双引号（`“ ”`），注意前后双引号不同。

```
例句：许多人都认为客户服务的核心是“友好”和“专业”。
```

（2）引号里面还要用引号时，外面一层用双引号，里面一层用单引号（`‘ ’`），注意前后单引号不同。

```
例句：鲍勃解释道：“我要放音乐，可萨利说，‘不行！’。”
```

### 括号

（1）补充说明时，使用全角圆括号（`（）`），括号前后不加空格。

```
例句：请确认所有的连接（电缆和接插件）均安装牢固。
```

（2）几种括号的中英文名称。

|       |            英文             |  中文  |
| ----- | :-------------------------: | :----: |
| `{ }` |  braces 或 curly brackets   | 大括号 |
| `[ ]` | square brackets 或 brackets | 方括号 |
| `< >` |       angled brackets       | 尖括号 |
| `( )` |         parentheses         | 圆括号 |

### 冒号

（1）全角冒号（`：`）常用在需要解释的词语后边，引出解释和说明。

```
例句：请确认以下几项内容：时间、地点、活动名称和来宾数量。
```

（2）表示时间时，应使用半角冒号（`:`）。

```
例句：早上 8:00
```

### 省略号

（1）省略号（`⋯⋯`）表示语句未完、或者语气的不连续。

（2）省略号占两个汉字空间、包含六个省略点，不要使用`。。。`或`...`等非标准形式。

（3）省略号不应与“等”这个词一起使用。

```
错误：我们为会餐准备了香蕉、苹果、梨…等各色水果。

正确：我们为会餐准备了各色水果，有香蕉、苹果、梨⋯⋯

正确：我们为会餐准备了香蕉、苹果、梨等各色水果。
```

### 感叹号

（1）应该使用平静的语气叙述，尽量避免使用感叹号（`！`）。

（2）不得多个感叹号连用，比如`！！`和`!!!`。

### 破折号

（1）破折号`————`一般用于进一步解释。

（2）破折号应占两个汉字的位置。如果破折号本身只占一个汉字的位置，那么前后应该留出一个半角空格。

```
例句：直觉————尽管它并不总是可靠的————告诉我，这事可能出了些问题。

例句：直觉 —— 尽管它并不总是可靠的 —— 告诉我，这事可能出了些问题。
```

### 连接号

（1）连接号用于连接两个类似的词。

（2）以下场合应该使用直线连接号（`-`），占一个半角字符的位置。

- 两个名词的复合
- 图表编号

```
例句：氧化-还原反应

例句：图 1-1
```

（3）数值范围（例如日期、时间或数字）应该使用波浪连接号（`～`）或一字号（`—`），占一个全角字符的位置。

```
例句：2009 年～2011 年
```

注意，波浪连接号前后两个值都建议加上单位。

（4）波浪连接号也可以用汉字“至”代替。

```
例句：周围温度：-20 °C 至 -10 °C
```

## 文档体系

### 结构

软件手册是一部完整的书，建议采用下面的结构。

- **简介**（Introduction）：[必备] [文件] 提供对产品和文档本身的总体的、扼要的说明
- **快速上手**（Getting Started）：[可选] [文件] 如何最快速地使用产品
- **入门篇**（Basics）：[必备] [目录] 又称“使用篇”，提供初级的使用教程
  - **环境准备**（Prerequisite）：[必备] [文件] 软件使用需要满足的前置条件
  - **安装**（Installation）：[可选] [文件] 软件的安装方法
  - **设置**（Configuration）：[必备] [文件] 软件的设置
- **进阶篇**（Advanced)：[可选] [目录] 又称“开发篇”，提供中高级的开发教程
- **API**（Reference）：[可选] [目录|文件] 软件 API 的逐一介绍
- **FAQ**：[可选] [文件] 常见问题解答
- **附录**（Appendix）：[可选] [目录] 不属于教程本身、但对阅读教程有帮助的内容
  - **Glossary**：[可选] [文件] 名词解释
  - **Recipes**：[可选] [文件] 最佳实践
  - **Troubleshooting**：[可选] [文件] 故障处理
  - **ChangeLog**：[可选] [文件] 版本说明
  - **Feedback**：[可选] [文件] 反馈方式

下面是两个真实范例，可参考。

- [Redux 手册](https://redux.js.org/introduction/getting-started)
- [Atom 手册](http://flight-manual.atom.io/)

### 文件名

文档的文件名不得含有空格。

文件名必须使用半角字符，不得使用全角字符。这也意味着，中文不能用于文件名。

```
错误：名词解释.md

正确：glossary.md
```

文件名建议只使用小写字母，不使用大写字母。

```
错误：TroubleShooting.md

正确：troubleshooting.md
```

为了醒目，某些说明文件的文件名，可以使用大写字母，比如`README`、`LICENSE`。

文件名包含多个单词时，单词之间建议使用半角的连词线（`-`）分隔。

```
不佳：advanced_usage.md

正确：advanced-usage.md
```

## 参考链接

- [产品手册中文写作规范](https://www.taodocs.com/p-51273.html), by 华为
- [写作规范和格式规范](http://guide.daocloud.io/dcs/写作规范和格式规范-9153803.html), by DaoCloud
- [技术写作技巧在日汉翻译中的应用](http://www.hitachi-tc.co.jp/company/thesis/thesis.pdf), by 刘方
- [简体中文规范指南](https://www.lengoo.de/documents/styleguides/lengoo_styleguide_ZH.pdf), by lengoo
- [文档风格指南](https://open.leancloud.cn/copywriting-style-guide.html), by LeanCloud
- [豌豆荚文案风格指南](https://docs.google.com/document/d/1R8lMCPf6zCD5KEA8ekZ5knK77iw9J-vJ6vEopPemqZM/edit), by 豌豆荚
- [中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines), by sparanoid
- [中文排版需求](http://w3c.github.io/clreq/), by W3C
- [为什么文件名要小写？](http://www.ruanyifeng.com/blog/2017/02/filename-should-be-lowercase.html), by 阮一峰
- [Google Developer Documentation Style Guide](https://developers.google.com/style/), by Google
- [出版物上数字用法的规定（国家标准 GBT15835－2011）](http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091154536.pdf)
- [GB 3100-1993 国际单位制及其应用](https://zh.wikisource.org/zh-hans/GB_3100-1993_国际单位制及其应用)
- [markdownlint](https://github.com/DavidAnson/vscode-markdownlint), VSCode 插件
- [pangu.js](https://github.com/vinta/pangu.js), 盘古之白系列插件


---

> 作者: [Lruihao](https://github.com/Lruihao)  
> URL: https://lruihao.cn/posts/document-style-guide/  


---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2023/docs-style-guide/  
> 转载 URL: https://lruihao.cn/posts/document-style-guide/
