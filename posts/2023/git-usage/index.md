# Git使用指南


# Git使用指南

Git是分布式版本控制系统，广泛应用于软件开发中。本文介绍Git的常用命令和操作。

## 基本命令

### 初始化仓库
```bash
git init
git add .
git commit -m "初始提交"
```

### 分支管理
```bash
git branch feature-branch
git checkout feature-branch
git merge feature-branch
```

### 远程仓库
```bash
git remote add origin https://github.com/user/repo.git
git push -u origin master
```

## 高级用法

### 撤销修改
```bash
git reset --hard HEAD
git checkout -- file.txt
```

### 暂存修改
```bash
git stash
git stash pop
```

Git是开发者必备的工具，熟练掌握可以大大提高开发效率。

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2023/git-usage/  

