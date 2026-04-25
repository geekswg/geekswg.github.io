/**
 * @description 指定规则链接预览指定内容预览插件
 * @author geekswg
 */
class LinkPreview {
  constructor(options = {}) {
    this.options = {
      selector: 'a[href^="/posts/"]',
      previewSelector: 'body',
      customCss: {},
      hideSelector: 'header, footer',
      width: 400,
      height: 300,
      delay: 500,
      hideDelay: 500,
      ...options
    };
    this.container = null;
    this.timer = null;
    this.hideTimer = null;
    this.init();
  }

  init() {
    this.createStyles();
    document.addEventListener('mouseover', this.handleMouseOver.bind(this));
    document.addEventListener('mousemove', this.checkMousePosition.bind(this), { passive: true });
    document.addEventListener('touchstart', this.handleTouchStart.bind(this), { passive: true });
    document.addEventListener('click', this.handleLinkActivation.bind(this), true);
    document.addEventListener('touchend', this.handleLinkActivation.bind(this), { passive: true, capture: true });
    document.addEventListener('pjax:send', this.handlePageTransition.bind(this));
    window.addEventListener('pagehide', this.handlePageTransition.bind(this));
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
  }

  createStyles() {
    if (document.getElementById('link-preview-styles')) return;
    const style = document.createElement('style');
    style.id = 'link-preview-styles';
    style.textContent = `
      .lp-container {
        position: absolute;
        z-index: 9999;
        background: #fff;
        border: 1px solid #ddd;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        border-radius: 8px;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        width: ${this.options.width}px;
        height: ${this.options.height}px;
        transition: opacity 0.2s ease-in-out;
      }
      .lp-container.lp-hidden {
        opacity: 0;
        pointer-events: none;
      }
      .lp-container.lp-visible {
        opacity: 1;
      }
      [data-theme='dark'] .lp-container {
        background: #1a1a1a;
        border-color: #333;
        color: #f8f9fa;
      }
      [data-theme='dark'] .lp-header,
      [data-theme='dark'] .lp-footer {
        background: #2a2a2a;
        border-color: #333;
        color: #ddd;
      }
      [data-theme='dark'] .lp-btn {
        color: #aaa;
      }
      [data-theme='dark'] .lp-btn:hover {
        background: #333;
      }
      .lp-header {
        padding: 2px;
        background: #f8f9fa;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-shrink: 0;
      }
      .lp-title {
        font-weight: bold;
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-right: 10px;
      }
      .lp-actions {
        display: flex;
        gap: 8px;
      }
      .lp-btn {
        cursor: pointer;
        padding: 2px 5px;
        border-radius: 4px;
        color: #666;
        text-decoration: none;
        font-size: 16px;
        line-height: 16px;
      }
      .lp-close {
         font-size: 24px;
       }
      .lp-btn:hover { background: #eee; }
      .lp-content {
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 15px;
        font-size: 14px;
        position: relative;
        -webkit-overflow-scrolling: touch;
      }
      .lp-content::-webkit-scrollbar {
        width: 6px;
      }
      .lp-content::-webkit-scrollbar-track {
        background: #f1f1f1;
      }
      .lp-content::-webkit-scrollbar-thumb {
        background: #888;
        border-radius: 3px;
      }
      .lp-content::-webkit-scrollbar-thumb:hover {
        background: #555;
      }
      .lp-footer {
        padding: 2px;
        background: #f8f9fa;
        border-top: 1px solid #eee;
        font-size: 12px;
        color: #888;
        display: flex;
        justify-content: space-between;
        flex-shrink: 0;
      }
      .lp-url {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 70%;
      }
      .lp-loading {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    `;
    document.head.appendChild(style);
  }

  handleMouseOver(e) {
    // Ignore links rendered inside the preview panel to avoid recursive previewing.
    if (this.container && this.container.contains(e.target)) {
      return;
    }

    const link = e.target.closest(this.options.selector);
    clearTimeout(this.hideTimer);
    if (!link) return;

    clearTimeout(this.timer);
    this.timer = setTimeout(() => this.showPreview(link), this.options.delay);
  }

  checkMousePosition(e) {
    if (!this.container || this.container.style.display === 'none') return;

    const rect = this.container.getBoundingClientRect();
    const isInContainer = e.clientX >= rect.left && e.clientX <= rect.right &&
                         e.clientY >= rect.top && e.clientY <= rect.bottom;
    const link = document.elementFromPoint(e.clientX, e.clientY)?.closest(this.options.selector);

    if (isInContainer || link) {
      clearTimeout(this.hideTimer);
    } else {
      clearTimeout(this.hideTimer);
      this.hideTimer = setTimeout(() => this.hidePreview(), this.options.hideDelay || 500);
    }
  }

  handleTouchStart(e) {
    if (!this.container || this.container.style.display === 'none') return;

    const target = e.target;
    const isInContainer = this.container.contains(target);
    const link = target.closest(this.options.selector);

    if (isInContainer || link) {
      clearTimeout(this.hideTimer);
      return;
    }

    clearTimeout(this.hideTimer);
    this.hideTimer = setTimeout(() => this.hidePreview(), this.options.hideDelay || 500);
  }

  handleLinkActivation(e) {
    if (!this.container || this.container.style.display === 'none') return;
    if (!e.target.closest('a[href]')) return;
    this.hidePreview(true);
  }

  handlePageTransition() {
    this.hidePreview(true);
    this.clearTimers();
  }

  handleVisibilityChange() {
    if (document.visibilityState === 'hidden') {
      this.handlePageTransition();
    }
  }

  async showPreview(link) {
    const url = link.href;
    const startTime = performance.now();

    if (!this.container) {
      this.container = document.createElement('div');
      this.container.className = 'lp-container';
      document.body.appendChild(this.container);
    }

    const rect = link.getBoundingClientRect();
    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let left = rect.left + scrollX;
    let top = rect.bottom + scrollY + 5;

    if (left + this.options.width > scrollX + viewportWidth - 20) {
      left = scrollX + viewportWidth - this.options.width - 20;
    }
    if (left < scrollX + 10) {
      left = scrollX + 10;
    }

    if (rect.bottom + this.options.height + 20 > viewportHeight && rect.top > this.options.height + 20) {
      top = rect.top + scrollY - this.options.height - 5;
    }

    this.container.style.top = `${top}px`;
    this.container.style.left = `${left}px`;
    this.container.style.display = 'flex';
    this.container.classList.add('lp-visible');
    this.container.classList.remove('lp-hidden');
    this.container.innerHTML = `
      <div class="lp-header">
        <span class="lp-title">加载中...</span>
        <div class="lp-actions">
          <a href="${url}" target="_blank" class="lp-btn" title="新标签打开">↗</a>
          <span class="lp-btn lp-close" title="关闭">×</span>
        </div>
      </div>
      <div class="lp-content"><div class="lp-loading">Loading...</div></div>
      <div class="lp-footer">
        <span class="lp-url">${link.pathname || url}</span>
        <span class="lp-time"></span>
      </div>
    `;

    this.container.querySelector('.lp-close').onclick = () => this.hidePreview();

    try {
      const resp = await fetch(url);
      const html = await resp.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      if (this.options.hideSelector) {
        const hideElements = doc.querySelectorAll(this.options.hideSelector);
        hideElements.forEach(el => {
          if (el.style.display !== 'none') {
            el.dataset.lpOriginalDisplay = el.style.display;
            el.style.display = 'none';
          }
        });
      }

      const contentSelectors = [this.options.previewSelector, 'article', '.post-content', '.content', 'main'];
      let content = null;
      for (const sel of contentSelectors) {
        if (!sel) continue;
        content = doc.querySelector(sel);
        if (content) break;
      }

      if (this.options.customCss && typeof this.options.customCss === 'object') {
        for (const [selector, css] of Object.entries(this.options.customCss)) {
          const elements = doc.querySelectorAll(selector);
          elements.forEach(el => {
            el.style.cssText += css;
          });
        }
      }

      const title = doc.querySelector('h1')?.innerText || doc.title || '无标题';
      const endTime = performance.now();
      const loadTime = ((endTime - startTime) / 1000).toFixed(2);

      if (this.container) {
        this.container.querySelector('.lp-title').innerText = title;
        this.container.querySelector('.lp-content').innerHTML = content ? content.innerHTML : '未找到指定内容';
        this.container.querySelector('.lp-time').innerText = `${loadTime}s`;
      }
    } catch (err) {
      if (this.container) {
        this.container.querySelector('.lp-content').innerHTML = '加载失败: ' + err.message;
      }
    }
  }

  hidePreview(immediate = false) {
    if (this.container) {
      if (immediate) {
        this.container.classList.add('lp-hidden');
        this.container.classList.remove('lp-visible');
        this.container.style.display = 'none';
        return;
      }

      this.container.classList.add('lp-hidden');
      this.container.classList.remove('lp-visible');
      setTimeout(() => {
        if (this.container && this.container.classList.contains('lp-hidden')) {
          this.container.style.display = 'none';
        }
      }, 200);
    }
  }

  clearTimers() {
    clearTimeout(this.timer);
    clearTimeout(this.hideTimer);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LinkPreview;
} else {
  window.LinkPreview = LinkPreview;
}

(() => {
  window.linkPreview = new LinkPreview({
    selector: 'a[href^="/posts/"]',
    previewSelector: 'body',
    customCss: {
      'article': 'width:100% !important; max-width:100% !important; padding:0; margin:0;',
      '.code-header':'top:-14px !important;',
      '.breadcrumb-container':'width:100% !important;top:0 !important; ',
    },
    hideSelector: 'header,aside,footer',
    delay: 500,
    hideDelay: 100,
    width: 360,
    height: 280
  });
})();