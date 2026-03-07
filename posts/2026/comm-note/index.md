# Notes/常用笔记



## git

```bash
git clone --recursive https://github.com/geekswg/blog-fixit.git
# 如果已经克隆了仓库但没有初始化子模块，可以使用以下命令：
git submodule update --init
```

## hugo

新建文章
```bash
hugo new posts/notes/comm-note.md
```

启动
```bash
hugo server -e production
```

## windows

### 激活

激活 Windows

以管理员模式启动 PowerShell 点击“开始”，搜索“PowerShell”，右键选择“以管理员身份运行”。
输入以下命令并回车 
```powershell
irm https://get.activated.win | iex
```
系统会提示选择激活方式，输入 1（数字许可证激活，HWID方式），永久激活 Windows。
完成激活 当看到“Successful”提示时，关闭窗口即可完成激活。

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2026/comm-note/  

