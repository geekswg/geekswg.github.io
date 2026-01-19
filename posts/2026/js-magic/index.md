# Js的魔法特效


记录一些神奇且实用的JavaScript特效，源码来自互联网，部分经过修改和优化。可以直接在博客中使用，无需引入其他库。主要使用javascript和canvas特性实现。

## 游动的小鱼

<a href="javascript:window.scrollTo(0, document.body.scrollHeight);" >查看效果 </a>

```js
/**
 * 源码来自互联网，作者不详
 * @modified by Lruihao 2024-05-21 移除依赖 jQuery
 * @description 一个鱼游动的动画效果
 */
const RENDERER = {
  POINT_INTERVAL: 5,
  FISH_COUNT: 3,
  MAX_INTERVAL_COUNT: 50,
  INIT_HEIGHT_RATE: 0.5,
  THRESHOLD: 50,
  FISH_COLOR: '#ff0000', // 鱼的颜色，可以修改为其他颜色，默认置空
  FISH_BACKGROUND_LIGHT: 'rgb(0 119 190 / 8%)',
  FISH_BACKGROUND_DARK: 'rgb(255 255 255 / 8%)',
  THEME_STATE: fixit.isDark, // 这里利用 FixIt 主题的 isDark 属性来判断是否是暗色主题
  FISH_STYLE: `
    .footer {
      position: relative;
    }
    #flyfish {
      position: absolute;
      width: 100%;
      height: 230px;
      overflow: hidden;
      left: 0;
      bottom: 0;
      z-index: -1;
      pointer-events: none;
    }`,

  init: function () {
    this.setParameters();
    this.setStyle();
    this.reconstructMethods();
    this.setup();
    this.bindEvent();
    this.render();
  },
  setParameters: function () {
    this.window = window;
    this.container = document.createElement("div");
    this.container.id = "flyfish";
    this.canvas = document.createElement("canvas");
    this.context = this.canvas.getContext("2d");
    this.points = [];
    this.fishes = [];
    this.watchIds = [];
    document.querySelector('.footer').appendChild(this.container);
    //document.body.appendChild(this.container);
  },
  setStyle: function () {
    const style = document.createElement("style");
    style.innerHTML = this.FISH_STYLE;
    document.querySelector("head").appendChild(style);
  },
  createSurfacePoints: function () {
    const count = Math.round(this.width / this.POINT_INTERVAL);
    this.pointInterval = this.width / (count - 1);
    this.points.push(new SURFACE_POINT(this, 0));

    for (let i = 1; i < count; i++) {
      const point = new SURFACE_POINT(this, i * this.pointInterval),
        previous = this.points[i - 1];

      point.setPreviousPoint(previous);
      previous.setNextPoint(point);
      this.points.push(point);
    }
  },
  reconstructMethods: function () {
    this.watchWindowSize = this.watchWindowSize.bind(this);
    this.jdugeToStopResize = this.jdugeToStopResize.bind(this);
    this.startEpicenter = this.startEpicenter.bind(this);
    this.moveEpicenter = this.moveEpicenter.bind(this);
    this.render = this.render.bind(this);
  },
  setup: function () {
    this.points.length = 0;
    this.fishes.length = 0;
    this.watchIds.length = 0;
    this.intervalCount = this.MAX_INTERVAL_COUNT;

    this.containerWidth = this.container.offsetWidth;
    this.containerHeight = this.container.offsetHeight;
    this.width = this.containerWidth;
    this.height = this.containerHeight;
    this.fishCount =
      (((this.FISH_COUNT * this.width) / 500) * this.height) / 500;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.reverse = false;

    this.container.appendChild(this.canvas);
    this.fishes.push(new FISH(this));
    this.createSurfacePoints();
  },
  watchWindowSize: function () {
    this.clearTimer();
    this.tmpWidth = this.window.innerWidth;
    this.tmpHeight = this.window.innerHeight;
    this.watchIds.push(setTimeout(this.jdugeToStopResize, this.WATCH_INTERVAL));
  },
  clearTimer: function () {
    while (this.watchIds.length > 0) {
      clearTimeout(this.watchIds.pop());
    }
  },
  jdugeToStopResize: function () {
    const width = this.window.innerWidth,
      height = this.window.innerHeight,
      stopped = width == this.tmpWidth && height == this.tmpHeight;

    this.tmpWidth = width;
    this.tmpHeight = height;

    if (stopped) {
      this.setup();
    }
  },
  bindEvent: function () {
    const self = this;
    this.window.addEventListener("resize", function () {
      self.watchWindowSize();
    });
    this.container.addEventListener("mouseenter", function (event) {
      self.startEpicenter(event);
    });
    this.container.addEventListener("mousemove", function (event) {
      self.moveEpicenter(event);
    });
  },
  getAxis: function (event) {
    const offset = this.container.getBoundingClientRect();

    return {
      x: event.clientX - offset.left + this.window.scrollX,
      y: event.clientY - offset.top + this.window.scrollY,
    };
  },
  startEpicenter: function (event) {
    this.axis = this.getAxis(event);
  },
  moveEpicenter: function (event) {
    const axis = this.getAxis(event);

    if (!this.axis) {
      this.axis = axis;
    }
    this.generateEpicenter(axis.x, axis.y, axis.y - this.axis.y);
    this.axis = axis;
  },
  generateEpicenter: function (x, y, velocity) {
    if (
      y < this.height / 2 - this.THRESHOLD ||
      y > this.height / 2 + this.THRESHOLD
    ) {
      return;
    }
    const index = Math.round(x / this.pointInterval);

    if (index < 0 || index >= this.points.length) {
      return;
    }
    this.points[index].interfere(y, velocity);
  },
  controlStatus: function () {
    for (let i = 0, count = this.points.length; i < count; i++) {
      this.points[i].updateSelf();
    }
    for (let i = 0, count = this.points.length; i < count; i++) {
      this.points[i].updateNeighbors();
    }
    if (this.fishes.length < this.fishCount) {
      if (--this.intervalCount == 0) {
        this.intervalCount = this.MAX_INTERVAL_COUNT;
        this.fishes.push(new FISH(this));
      }
    }
  },
  render: function () {
    const self = this;
    function renderFrame() {
      self.controlStatus();
      self.context.clearRect(0, 0, self.width, self.height);
      if (self.THEME_STATE) {
        self.context.fillStyle = self.FISH_BACKGROUND_DARK;
      } else {
        self.context.fillStyle = self.FISH_BACKGROUND_LIGHT;
      }
      for (let i = 0, count = self.fishes.length; i < count; i++) {
        self.fishes[i].render(self.context);
      }
      self.context.save();
      self.context.globalCompositeOperation = "xor";
      self.context.beginPath();
      self.context.moveTo(0, self.reverse ? 0 : self.height);

      for (let i = 0, count = self.points.length; i < count; i++) {
        self.points[i].render(self.context);
      }
      self.context.lineTo(self.width, self.reverse ? 0 : self.height);
      self.context.closePath();
      self.context.fill();
      self.context.restore();

      requestAnimationFrame(renderFrame);
    }
    renderFrame();
  },
  randomColor: function () {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
};

// SURFACE_POINT class
function SURFACE_POINT(renderer, x) {
  this.renderer = renderer;
  this.x = x;
  this.init();
}
SURFACE_POINT.prototype = {
  SPRING_CONSTANT: 0.03,
  SPRING_FRICTION: 0.9,
  WAVE_SPREAD: 0.3,
  ACCELARATION_RATE: 0.01,

  init: function () {
    this.initHeight = this.renderer.height * this.renderer.INIT_HEIGHT_RATE;
    this.height = this.initHeight;
    this.fy = 0;
    this.force = { previous: 0, next: 0 };
  },
  setPreviousPoint: function (previous) {
    this.previous = previous;
  },
  setNextPoint: function (next) {
    this.next = next;
  },
  interfere: function (y, velocity) {
    this.fy =
      this.renderer.height *
      this.ACCELARATION_RATE *
      (this.renderer.height - this.height - y >= 0 ? -1 : 1) *
      Math.abs(velocity);
  },
  updateSelf: function () {
    this.fy += this.SPRING_CONSTANT * (this.initHeight - this.height);
    this.fy *= this.SPRING_FRICTION;
    this.height += this.fy;
  },
  updateNeighbors: function () {
    if (this.previous) {
      this.force.previous =
        this.WAVE_SPREAD * (this.height - this.previous.height);
    }
    if (this.next) {
      this.force.next = this.WAVE_SPREAD * (this.height - this.next.height);
    }
  },
  render: function (context) {
    if (this.previous) {
      this.previous.height += this.force.previous;
      this.previous.fy += this.force.previous;
    }
    if (this.next) {
      this.next.height += this.force.next;
      this.next.fy += this.force.next;
    }
    context.lineTo(this.x, this.renderer.height - this.height);
  },
};

// FISH class
function FISH(renderer) {
  this.renderer = renderer;
  this.init();
}
FISH.prototype = {
  GRAVITY: 0.5,
  init: function () {
    this.direction = Math.random() < 0.5;
    this.x = this.direction
      ? this.renderer.width + this.renderer.THRESHOLD
      : -this.renderer.THRESHOLD;
    this.previousY = this.y;
    this.vx = this.getRandomValue(4, 10) * (this.direction ? -1 : 1);

    if (this.renderer.reverse) {
      this.y = this.getRandomValue(
        (this.renderer.height * 1) / 10,
        (this.renderer.height * 4) / 10
      );
      this.vy = this.getRandomValue(2, 5);
      this.ay = this.getRandomValue(0.05, 0.2);
    } else {
      this.y = this.getRandomValue(
        (this.renderer.height * 6) / 10,
        (this.renderer.height * 9) / 10
      );
      this.vy = this.getRandomValue(-5, -2);
      this.ay = this.getRandomValue(-0.2, -0.05);
    }
    this.isOut = false;
    this.theta = 0;
    this.phi = 0;
  },
  getRandomValue: function (min, max) {
    return min + (max - min) * Math.random();
  },
  controlStatus: function (context) {
    this.previousY = this.y;
    this.x += this.vx;
    this.y += this.vy;
    this.vy += this.ay;

    if (this.renderer.reverse) {
      if (this.y > this.renderer.height * this.renderer.INIT_HEIGHT_RATE) {
        this.vy -= this.GRAVITY;
        this.isOut = true;
      } else {
        if (this.isOut) {
          this.ay = this.getRandomValue(0.05, 0.2);
        }
        this.isOut = false;
      }
    } else {
      if (this.y < this.renderer.height * this.renderer.INIT_HEIGHT_RATE) {
        this.vy += this.GRAVITY;
        this.isOut = true;
      } else {
        if (this.isOut) {
          this.ay = this.getRandomValue(-0.2, -0.05);
        }
        this.isOut = false;
      }
    }
    if (!this.isOut) {
      this.theta += Math.PI / 20;
      this.theta %= Math.PI * 2;
      this.phi += Math.PI / 30;
      this.phi %= Math.PI * 2;
    }
    this.renderer.generateEpicenter(
      this.x + (this.direction ? -1 : 1) * this.renderer.THRESHOLD,
      this.y,
      this.y - this.previousY
    );

    if (
      (this.vx > 0 && this.x > this.renderer.width + this.renderer.THRESHOLD) ||
      (this.vx < 0 && this.x < -this.renderer.THRESHOLD)
    ) {
      this.init();
    }
  },
  render: function (context) {
    
    context.save();
    context.translate(this.x, this.y);
    context.rotate(Math.PI + Math.atan2(this.vy, this.vx));
    context.scale(1, this.direction ? 1 : -1);
    context.fillStyle = this.renderer.FISH_COLOR;
    context.beginPath();
    context.moveTo(-30, 0);
    context.bezierCurveTo(-20, 15, 15, 10, 40, 0);
    context.bezierCurveTo(15, -10, -20, -15, -30, 0);
    context.fill();

    context.save();
    context.translate(40, 0);
    context.scale(0.9 + 0.2 * Math.sin(this.theta), 1);
    context.beginPath();
    context.moveTo(0, 0);
    context.quadraticCurveTo(5, 10, 20, 8);
    context.quadraticCurveTo(12, 5, 10, 0);
    context.quadraticCurveTo(12, -5, 20, -8);
    context.quadraticCurveTo(5, -10, 0, 0);
    context.fill();
    context.restore();

    context.save();
    context.translate(-3, 0);
    context.rotate(
      (Math.PI / 3 + (Math.PI / 10) * Math.sin(this.phi)) *
      (this.renderer.reverse ? -1 : 1)
    );

    context.beginPath();

    if (this.renderer.reverse) {
      context.moveTo(5, 0);
      context.bezierCurveTo(10, 10, 10, 30, 0, 40);
      context.bezierCurveTo(-12, 25, -8, 10, 0, 0);
    } else {
      context.moveTo(-5, 0);
      context.bezierCurveTo(-10, -10, -10, -30, 0, -40);
      context.bezierCurveTo(12, -25, 8, -10, 0, 0);
    }
    context.closePath();
    context.fill();
    context.restore();
    context.restore();
    this.controlStatus(context);
    
  },
};

// window.onload = function () {
//   RENDERER.init();
// };

window.addEventListener("load", function () {
  RENDERER.init();
});

```

## 动态彩虹带背景

> 使用方法：直接在html中引入下面的js代码即可。

```js
(function (name, factory) {
    if (typeof window === "object") {
        window[name] = factory();
    }
})
    ("Ribbons", function () {
        var _w = window, _b = document.body, _d = document.documentElement;

        //随机函数
        var random = function () {
            if (arguments.length === 1) {
                if (Array.isArray(arguments[0])) {
                    var index = Math.round(random(0, arguments[0].length - 1));
                    return arguments[0][index];
                }
                return random(0, arguments[0]);
            } else
                if (arguments.length === 2) {
                    return Math.random() * (arguments[1] - arguments[0]) + arguments[0];
                }
            return 0;
        };

        //屏幕信息
        var screenInfo = function (e) {
            var width = Math.max(0, _w.innerWidth || _d.clientWidth || _b.clientWidth || 0),
                height = Math.max(0, _w.innerHeight || _d.clientHeight || _b.clientHeight || 0),
                scrollx = Math.max(0, _w.pageXOffset || _d.scrollLeft || _b.scrollLeft || 0) - (_d.clientLeft || 0),
                scrolly = Math.max(0, _w.pageYOffset || _d.scrollTop || _b.scrollTop || 0) - (_d.clientTop || 0);
            return {
                width: width,
                height: height,
                ratio: width / height,
                centerx: width / 2,
                centery: height / 2,
                scrollx: scrollx,
                scrolly: scrolly
            };
        };

        var mouseInfo = function (e) {
            var screen = screenInfo(e),
                mousex = e ? Math.max(0, e.pageX || e.clientX || 0) : 0,
                mousey = e ? Math.max(0, e.pageY || e.clientY || 0) : 0;

            return {
                mousex: mousex,
                mousey: mousey,
                centerx: mousex - screen.width / 2,
                centery: mousey - screen.height / 2
            };
        };

        //点
        var Point = function (x, y) {
            this.x = 0;
            this.y = 0;
            this.set(x, y);
        };
        //点运算
        Point.prototype = {
            constructor: Point,
            set: function (x, y) {
                this.x = x || 0; this.y = y || 0;
            },
            copy: function (point) {
                this.x = point.x || 0; this.y = point.y || 0; return this;
            },
            multiply: function (x, y) {
                this.x *= x || 1; this.y *= y || 1; return this;
            },
            divide: function (x, y) {
                this.x /= x || 1; this.y /= y || 1; return this;
            },
            add: function (x, y) {
                this.x += x || 0; this.y += y || 0; return this;
            },
            subtract: function (x, y) {
                this.x -= x || 0; this.y -= y || 0; return this;
            },
            clampX: function (min, max) {
                this.x = Math.max(min, Math.min(this.x, max)); return this;
            },
            clampY: function (min, max) {
                this.y = Math.max(min, Math.min(this.y, max)); return this;
            },
            flipX: function () {
                this.x *= -1; return this;
            },
            flipY: function () {
                this.y *= -1; return this;
            }
        };

        //丝带画板
        var Factory = function (options) {
            this._canvas = null;
            this._context = null;
            this._sto = null;
            this._width = 0;
            this._height = 0;
            this._scroll = 0;
            this._ribbons = [];
            this._options = {
                id: "bgCanvas",//画板Id
                backgroundColor: "transparent",//画板背景
                colorSaturation: "80%",//纯度
                colorBrightness: "60%",//亮度
                colorAlpha: 0.2,//透明度
                colorCycleSpeed: 6,//丝带不同块之间的色彩变化量
                verticalPosition: "center",//丝带相对于屏幕的初始位置：top/min 屏幕最上方，middle|center 中间，bottom|max 屏幕最下面
                horizontalSpeed: 200,//丝带水平方向移动速度参数（会乘以一个随机值）
                ribbonCount: 3,//同一时间丝带总条数
                strokeSize: 0,//公共边路径样式
                parallaxAmount: -0.5,//滚动偏移参数，-1表示不偏移，0表示基于丝带只出现在页面最上面
                animateSections: true//丝带块是否偏移，显得有动感
            };
            this._onDraw = this._onDraw.bind(this);
            this._onResize = this._onResize.bind(this);
            this._onScroll = this._onScroll.bind(this);
            this.setOptions(options);
            this.init();
        };
        Factory.prototype = {
            constructor: Factory,
            setOptions: function (options) {
                if (typeof options === "object") {
                    for (var key in options) {
                        if (options.hasOwnProperty(key)) {
                            this._options[key] = options[key];
                        }
                    }
                }
            },
            //初始化
            init: function () {
                //初始化画板
                try {
                    this._canvas = document.createElement("canvas");
                    this._canvas.style["display"] = "block";
                    this._canvas.style["position"] = "fixed";
                    this._canvas.style["margin"] = "0";
                    this._canvas.style["padding"] = "0";
                    this._canvas.style["border"] = "0";
                    this._canvas.style["outline"] = "0";
                    this._canvas.style["left"] = "0";
                    this._canvas.style["top"] = "0";
                    this._canvas.style["width"] = "100%";
                    this._canvas.style["height"] = "100%";
                    this._canvas.style["z-index"] = "-10";
                    this._canvas.style["background-color"] = this._options.backgroundColor;
                    this._canvas.id = this._options.id;
                    this._onResize();
                    this._context = this._canvas.getContext("2d");
                    this._context.clearRect(0, 0, this._width, this._height);
                    this._context.globalAlpha = this._options.colorAlpha;
                    window.addEventListener("resize", this._onResize);
                    window.addEventListener("scroll", this._onScroll);
                    document.body.appendChild(this._canvas);
                }
                catch (e) {
                    console.warn("Canvas Context Error: " + e.toString());
                    return;
                }
                //开始绘画
                this._onDraw();
            },
            //生成一条丝带
            addRibbon: function () {
                var dir = Math.round(random(1, 9)) > 5 ? "right" : "left",//丝带延伸方向
                    stop = 1000,
                    hide = 200,
                    min = 0 - hide,
                    max = this._width + hide,
                    movex = 0,
                    movey = 0,
                    startx = dir === "right" ? min : max,//起始点x左边
                    starty = Math.round(random(0, this._height));//起始点y左边

                //丝带生成的位置
                if (/^(top|min)$/i.test(this._options.verticalPosition)) {//最上方
                    starty = 0 + hide;
                } else if (/^(middle|center)$/i.test(this._options.verticalPosition)) {//中间
                    starty = this._height / 2;
                } else if (/^(bottom|max)$/i.test(this._options.verticalPosition)) {//最下方
                    starty = this._height - hide;
                }

                if (this._options.parallaxAmount !== 0) {
                    starty += this._scroll;//加上滚动
                }

                var ribbon = [],
                    point1 = new Point(startx, starty),
                    point2 = new Point(startx, starty),
                    point3 = null,
                    color = Math.round(random(0, 360)),
                    delay = 0;

                //从起始位置开始生成一条丝带
                //丝带每个分部都是一个三角形，三点确定一个三角形，相邻三角形有一条公共边
                while (true) {
                    if (stop <= 0) break;
                    stop--;
                    movex = Math.round((Math.random() * 1 - 0.2) * this._options.horizontalSpeed);
                    movey = Math.round((Math.random() * 1 - 0.5) * (this._height * 0.25));
                    point3 = new Point();
                    point3.copy(point2);
                    if (dir === "right") {
                        point3.add(movex, movey);
                        if (point2.x >= max) break;
                    } else if (dir === "left") {
                        point3.subtract(movex, movey);
                        if (point2.x <= min) break;
                    }
                    ribbon.push({
                        //三点
                        point1: new Point(point1.x, point1.y),
                        point2: new Point(point2.x, point2.y),
                        point3: point3,
                        color: color,//丝带颜色
                        delay: delay,//延迟消失
                        dir: dir,//方向
                        alpha: 0,//透明度
                        phase: 0 //随机位移有关参数
                    });
                    //公共边
                    point1.copy(point2);
                    point2.copy(point3);
                    delay += 4;
                    color += this._options.colorCycleSpeed;
                }
                this._ribbons.push(ribbon);
            },
            //绘制一个三角形方块
            _drawRibbonSection: function (section) {
                if (section) {
                    if (section.phase >= 1 && section.alpha <= 0) {
                        return true;
                    }
                    if (section.delay <= 0) {
                        section.phase += 0.02;
                        section.alpha = Math.sin(section.phase) * 1;
                        section.alpha = section.alpha <= 0 ? 0 : section.alpha;
                        section.alpha = section.alpha >= 1 ? 1 : section.alpha;
                        if (this._options.animateSections) {
                            var mod = Math.sin(1 + section.phase * Math.PI / 2) * 0.1;
                            if (section.dir === "right") {
                                section.point1.add(mod, 0);
                                section.point2.add(mod, 0);
                                section.point3.add(mod, 0);
                            } else {
                                section.point1.subtract(mod, 0);
                                section.point2.subtract(mod, 0);
                                section.point3.subtract(mod, 0);
                            }
                            section.point1.add(0, mod);
                            section.point2.add(0, mod);
                            section.point3.add(0, mod);
                        }
                    } else {
                        section.delay -= 0.5;
                    }
                    var s = this._options.colorSaturation,
                        l = this._options.colorBrightness,
                        c = "hsla(" + section.color + ", " + s + ", " + l + ", " + section.alpha + " )";

                    //绘制一个方块
                    this._context.save();
                    if (this._options.parallaxAmount !== 0) {
                        this._context.translate(0, this._scroll * this._options.parallaxAmount);
                    }
                    this._context.beginPath();
                    this._context.moveTo(section.point1.x, section.point1.y);
                    this._context.lineTo(section.point2.x, section.point2.y);
                    this._context.lineTo(section.point3.x, section.point3.y);
                    this._context.fillStyle = c;
                    this._context.fill();
                    if (this._options.strokeSize > 0) {
                        this._context.lineWidth = this._options.strokeSize;
                        this._context.strokeStyle = c;
                        this._context.lineCap = "round";
                        this._context.stroke();
                    }
                    this._context.restore();
                }
                return false;
            },
            //绘制丝带
            _onDraw: function () {
                //清空已经绘制过的丝带
                for (var i = 0, t = this._ribbons.length; i < t; ++i) {
                    if (!this._ribbons[i]) {
                        this._ribbons.splice(i, 1);
                    }
                }
                this._context.clearRect(0, 0, this._width, this._height);//清空画板
                for (var a = 0; a < this._ribbons.length; ++a) {
                    var ribbon = this._ribbons[a],
                        numSections = ribbon ? ribbon.length : 0,
                        numDone = 0;

                    //绘制整条丝带
                    for (var b = 0; b < numSections; ++b) {
                        if (this._drawRibbonSection(ribbon[b])) {
                            numDone++;
                        }
                    }
                    //丝带已经全部飘过屏幕，设置为null,函数前面会自动清理
                    if (numDone >= numSections) {
                        this._ribbons[a] = null;
                    }
                }
                //随机生成一条丝带
                if (this._ribbons.length < this._options.ribbonCount && Math.random() > 0.99) {
                    this.addRibbon();
                }

                //调度交给系统，当需要刷新画板时调用指定的回调函数，用于提高性能
                requestAnimationFrame(this._onDraw);
            },
            //重新设置窗体大小时需要获取窗体大小
            _onResize: function (e) {
                var screen = screenInfo(e);
                this._width = screen.width;
                this._height = screen.height;
                if (this._canvas) {
                    this._canvas.width = this._width;
                    this._canvas.height = this._height;
                    if (this._context) {
                        this._context.globalAlpha = this._options.colorAlpha;
                    }
                }
            },
            //滚动时获取滚动距离
            _onScroll: function (e) {
                var screen = screenInfo(e);
                this._scroll = screen.scrolly;
            }
        }; return Factory;
    });

//初始化并绘制
new Ribbons({
    ribbonCount: 5,
    parallaxAmount: -0.99
});
options = {
        id: "bgCanvas",//画板Id
        backgroundColor: "#1f1f1f",//画板背景
        colorSaturation: "80%",//纯度
        colorBrightness: "60%",//亮度
        colorAlpha: 0.65,//透明度
        colorCycleSpeed: 6,//丝带不同块之间的色彩变化量
        verticalPosition: "center",//丝带相对于屏幕的初始位置：top/min 屏幕最上方，middle|center 中间，bottom|max 屏幕最下面
        horizontalSpeed: 200,//丝带水平方向移动速度参数（会乘以一个随机值）
        ribbonCount: 3,//同一时间丝带总条数
        strokeSize: 0,//公共边路径样式
        parallaxAmount: -0.5,//滚动偏移参数，-1表示不偏移，0表示基于丝带只出现在页面最上面
        animateSections: true//丝带块是否偏移，显得有动感
};
```

## canvas数字时钟

效果见主页或者侧边栏的数字时钟。

使用方法：将下面的html代码放到你想显示数字时钟的位置，并引入canvasTime.js脚本即可,可以通过colckColor参数指定时钟的颜色，如果没有指定，则七种颜色随机生成。

```html
<!-- 数字时钟 -->
<div class="aside-custom" >
  <canvas style="width:100%;" id="canvasTime" >当前浏览器不支持canvas，请更换浏览器后再试</canvas>
</div>
<script src="/js/canvasTime.js?colckColor=red" ></script>
```
[canvasTime.js脚本源码](/js/canvasTime.js)

## 飞舞雪花

<a href="javascript:startSnow()">开始下雪</a>
<a href="javascript:stopSnow()">停止下雪</a>

> 查看源码 [js/flysnow.js](/js/flysnow.js)

<script>
  function startSnow(){
    if (!window.snowfall) {
      loadJS('/js/flysnow.js?snowColor=f00');
    } else if (!window.snowfall.isRunning) {
      window.snowfall.toggle();
    }
  }
  function stopSnow(){
    if (window.snowfall) {
      window.snowfall.destroy();
      window.snowfall = null;
    }
  }
  function loadJS(src){
    var script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
  }
</script>

<!--
> [!NOTE]
> 突出显示用户应考虑的信息，即使只是浏览也应考虑。

> [!TIP]
> 可选信息，可帮助用户取得更大的成功。

> [!IMPORTANT]
> 用户成功所需的关键信息。

> [!WARNING]
> 由于存在潜在风险，需要用户立即关注的关键内容。

> [!CAUTION]
> 操作的潜在负面后果。
这里使用MD语法编写你的文章
 -->

---

> 作者: [geekswg](https://github.com/geekswg)  
> URL: https://geekswg.js.cool/posts/2026/js-magic/  

