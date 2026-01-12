# Fixit主题美化指南


# Fixit主题美化指南

Fixit是Hugo的一个优秀主题，本文介绍如何对Fixit主题进行个性化美化。

## 自定义CSS样式

### 修改主题色彩
```scss
:root {
  --primary-color: #ff6b6b;
  --secondary-color: #4ecdc4;
  --accent-color: #45b7d1;
}
```

### 调整字体大小
```scss
body {
  font-size: 16px;
  line-height: 1.6;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
}
```

## 布局优化

### 侧边栏调整
```scss
.sidebar {
  width: 300px;
  background: #f8f9fa;
  border-right: 1px solid #e9ecef;
}
```

### 响应式布局
```scss
@media (max-width: 768px) {
  .sidebar {
    width: 100%;
    position: fixed;
    z-index: 1000;
  }
}
```

## 功能增强

### 添加动画效果
```scss
.card {
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }
}
```

### 优化代码高亮
```scss
.highlight {
  pre {
    border-radius: 8px;
    padding: 1rem;
    overflow-x: auto;
  }
}
```

## 自定义组件

### 创建Shortcodes
```html
<!-- layouts/shortcodes/notice.html -->
<div class="notice {{ .Get "type" }}">
  <strong>{{ .Get "title" }}</strong>
  {{ .Inner }}
</div>
```

通过这些美化技巧，可以让你的Fixit主题更加个性化和美观。

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2023/fixit-beautification/  

