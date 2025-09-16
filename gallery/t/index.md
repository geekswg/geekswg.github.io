# 

<style>
  .aside-collection {
    transition: all 0.3s ease;
  }
  
  @media screen and (max-width: 768px) {
    .aside-collection {
      position: fixed;
      right: -300px;
      top: 60px;
      width: 300px;
      background: #fff;
      height: calc(100vh - 60px);
      z-index: 999;
      padding: 20px;
      box-shadow: -2px 0 8px rgba(0,0,0,0.1);
    }
  
    .aside-collection.show {
      right: 0;
    }
  
    .aside-toggle {
      display: block;
      position: fixed;
      right: 10px;
      top: 70px;
      width: 40px;
      height: 40px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      z-index: 1000;
      cursor: pointer;
    }
  }
  
  [data-theme="dark"] .aside-collection {
    background: #252627;
  }
  </style>
  
  <div class="aside-toggle" onclick="toggleAside()">
    <i class="fas fa-bars"></i>
  </div>
  
  <div class="aside-collection">
    <!-- 原有的aside内容 -->
    ...existing code...
  </div>
  
  <script>
  function toggleAside() {
    document.querySelector('.aside-collection').classList.toggle('show');
  }
  </script>

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/gallery/t/  

