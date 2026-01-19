(function () {
	"use strict";
	// 获取当前脚本的 URL
	const script = document.currentScript.src;
	// 创建一个 URL 对象以解析参数
	const urlParams = new URL(script).searchParams;
	// 获取参数
	const snowCount = parseInt(urlParams.get("snowCount")) || 60;
	let snowColor = urlParams.get("snowColor") || "#e4f6f6";
	// 兼容不带 # 的颜色值（因为 URL 中的 # 会被解析为锚点）
	if (snowColor && !snowColor.startsWith("#")) {
		// 检查是否是十六进制颜色（3位或6位）
		if (/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(snowColor)) {
			snowColor = "#" + snowColor;
		}
		// 否则保持原样（如 blue, red 等颜色名称）
	}
	// 雪花效果类
	class Snowflakes {
		constructor(options = {}) {
			this.config = {
				count: snowCount, // 雪花数量
				minSize: 8, // 最小尺寸
				maxSize: 24, // 最大尺寸
				minSpeed: 0.3, // 最小速度
				maxSpeed: 2.0, // 最大速度
				wind: 0.2, // 风力
				swingAmount: 0.6, // 摆动幅度
				opacity: 0.85, // 透明度
				color: snowColor, // 颜色
				symbols: ["❄", "❅", "❆", "＊", "✦"], // 雪花符号
				zIndex: 9999, // 层级
				...options,
			};

			this.container = null;
			this.snowflakes = [];
			this.animationId = null;
			this.isRunning = true;
			this.resizeTimeout = null;

			this.init();
		}

		// 初始化
		init() {
			this.createContainer();
			this.createSnowflakes();
			this.startAnimation();
			this.bindEvents();
		}

		// 创建容器
		createContainer() {
			this.container = document.createElement("div");
			Object.assign(this.container.style, {
				position: "fixed",
				top: "0",
				left: "0",
				width: "100%",
				height: "100%",
				pointerEvents: "none",
				zIndex: this.config.zIndex,
				overflow: "hidden",
			});
			document.body.appendChild(this.container);
		}

		// 创建所有雪花
		createSnowflakes() {
			for (let i = 0; i < this.config.count; i++) {
				this.createSnowflake(true);
			}
		}

		// 创建单个雪花
		createSnowflake(randomY = false) {
			const snowflake = document.createElement("div");

			// 随机属性
			const size = this.random(this.config.minSize, this.config.maxSize);
			const x = this.random(-50, window.innerWidth + 50);
			const y = randomY
				? this.random(-100, window.innerHeight * 0.8)
				: -size;
			const speed = this.random(
				this.config.minSpeed,
				this.config.maxSpeed,
			);
			const swingSpeed = this.random(0.01, 0.04);
			const swingPhase = this.random(0, Math.PI * 2);
			const swingAmount = this.config.swingAmount * this.random(0.5, 1.5);
			const rotationSpeed = this.random(-0.8, 0.8);
			const opacity = this.random(
				this.config.opacity * 0.7,
				this.config.opacity,
			);
			const symbol =
				this.config.symbols[
					Math.floor(Math.random() * this.config.symbols.length)
				];

			// 设置样式（使用 transform 避免频繁布局变更）
			Object.assign(snowflake.style, {
				position: "absolute",
				fontSize: `${size}px`,
				color: this.config.color,
				opacity: opacity.toString(),
				textShadow: "0 0 8px rgba(255, 255, 255, 0.7)",
				transform: `translate3d(${x}px, ${y}px, 0) rotate(0deg)`,
				willChange: "transform",
				userSelect: "none",
				pointerEvents: "none",
				zIndex: this.config.zIndex,
			});

			snowflake.textContent = symbol;

			// 存储雪花数据
			this.snowflakes.push({
				element: snowflake,
				x,
				y,
				size,
				speed,
				swingSpeed,
				swingPhase,
				swingAmount,
				rotation: 0,
				rotationSpeed,
				opacity,
			});

			this.container.appendChild(snowflake);

			return snowflake;
		}

		// 开始动画
		startAnimation() {
			if (!this.isRunning) return;

			const animate = () => {
				// 更新每个雪花
				for (let i = this.snowflakes.length - 1; i >= 0; i--) {
					const flake = this.snowflakes[i];

					// 更新位置
					flake.y += flake.speed;
					flake.swingPhase += flake.swingSpeed;
					flake.x += Math.sin(flake.swingPhase) * flake.swingAmount;
					flake.x += this.config.wind;
					flake.rotation += flake.rotationSpeed;

					// 只更新 transform，避免 layout/paint 过多开销
					flake.element.style.transform = `translate3d(${flake.x}px, ${flake.y}px, 0) rotate(${flake.rotation}deg)`;

					// 轻微透明度变化
					if (Math.random() < 0.01) {
						flake.element.style.opacity = (
							flake.opacity *
							(0.8 + Math.random() * 0.4)
						).toString();
					}

					// 如果雪花超出屏幕底部，重置到顶部
					if (flake.y > window.innerHeight + 50) {
						this.resetSnowflake(flake);
					}

					// 如果雪花超出屏幕两侧，从另一边出现
					if (flake.x > window.innerWidth + 50) {
						flake.x = -50;
					} else if (flake.x < -50) {
						flake.x = window.innerWidth + 50;
					}
				}

				this.animationId = requestAnimationFrame(animate);
			};

			animate();
		}

		// 重置雪花
		resetSnowflake(flake) {
			flake.y = -flake.size;
			flake.x = this.random(0, window.innerWidth);

			// 重新随机化属性
			flake.speed = this.random(
				this.config.minSpeed,
				this.config.maxSpeed,
			);
			flake.swingSpeed = this.random(0.01, 0.04);
			flake.swingAmount = this.config.swingAmount * this.random(0.5, 1.5);
			flake.rotationSpeed = this.random(-0.8, 0.8);
			flake.rotation = 0;
			flake.opacity = this.random(
				this.config.opacity * 0.7,
				this.config.opacity,
			);

			// 随机选择新的雪花符号
			flake.element.textContent =
				this.config.symbols[
					Math.floor(Math.random() * this.config.symbols.length)
				];

			flake.element.style.opacity = flake.opacity.toString();
			flake.element.style.transform = `translate3d(${flake.x}px, ${flake.y}px, 0) rotate(${flake.rotation}deg)`;
		}

		// 绑定事件
		bindEvents() {
			// 窗口大小变化时调整（防抖）
			window.addEventListener(
				"resize",
				() => {
					clearTimeout(this.resizeTimeout);
					this.resizeTimeout = setTimeout(() => {
						this.snowflakes.forEach((flake) => {
							if (flake.x > window.innerWidth)
								flake.x = window.innerWidth * 0.5;
							if (flake.y > window.innerHeight)
								flake.y = window.innerHeight * 0.5;
							// 立即更新元素位置以减少可见抖动
							flake.element.style.transform = `translate3d(${flake.x}px, ${flake.y}px, 0) rotate(${flake.rotation}deg)`;
						});
					}, 120);
				},
				{ passive: true },
			);
		}

		// 控制方法
		setCount(count) {
			this.config.count = Math.max(10, Math.min(500, count));

			// 调整雪花数量
			if (this.snowflakes.length > this.config.count) {
				const toRemove = this.snowflakes.length - this.config.count;
				for (let i = 0; i < toRemove; i++) {
					const flake = this.snowflakes.pop();
					if (flake && flake.element.parentNode) {
						flake.element.parentNode.removeChild(flake.element);
					}
				}
			} else if (this.snowflakes.length < this.config.count) {
				const toAdd = this.config.count - this.snowflakes.length;
				for (let i = 0; i < toAdd; i++) {
					this.createSnowflake(true);
				}
			}
		}

		setSpeed(min, max) {
			this.config.minSpeed = min;
			this.config.maxSpeed = max;
		}

		toggle() {
			this.isRunning = !this.isRunning;
			if (this.isRunning) {
				this.startAnimation();
			} else if (this.animationId) {
				cancelAnimationFrame(this.animationId);
			}
		}

		destroy() {
			this.isRunning = false;
			if (this.animationId) {
				cancelAnimationFrame(this.animationId);
			}

			this.snowflakes.forEach((flake) => {
				if (flake.element.parentNode) {
					flake.element.parentNode.removeChild(flake.element);
				}
			});

			this.snowflakes = [];

			if (this.container && this.container.parentNode) {
				this.container.parentNode.removeChild(this.container);
			}
		}

		// 工具函数
		random(min, max) {
			return min + Math.random() * (max - min);
		}
	}

	// 自动初始化
	window.createSnowfall = function (options) {
		return new Snowflakes(options);
	};

	// 页面加载后自动创建
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", () => {
			window.snowfall = new Snowflakes();
		});
	} else {
		window.snowfall = new Snowflakes();
	}
})();
