/* eslint-disable no-var */
(function () {
	"use strict";

	var DEFAULTS = {
		containerId: "danmu",
		serverURL: "",
		lang: "zh-CN",
		count: 50,
		page: 1,
		pageSize: 50,
		sortBy: "insertedAt_desc",
		refreshMs: 60000,
		intervalMs: 800,
		minSpeed: 80,
		maxSpeed: 140,
		fontSize: 20,
		opacity: 0.9,
		maxRows: 6,
		rowHeight: 36,
		padding: 6,
		randomColor: true,
		colorList: ["#ffffff", "#ffd166", "#ef476f", "#06d6a0", "#118ab2"],
		showNick: true,
		showAvatar: true,
		showLike: true,
		avatarSize: 24,
		pauseOnHover: true,
		loop: true,
		token: "",
		useRichContent: false,
		containerHeight: 512
	};

	function extend(target, source) {
		var out = {};
		var k;
		for (k in target) out[k] = target[k];
		if (source) {
			for (k in source) {
				if (source[k] !== undefined && source[k] !== "") out[k] = source[k];
			}
		}
		return out;
	}

	function normalizeServerURL(url) {
		if (!url) return "";
		return url.replace(/\/?$/, "/") + "api/";
	}

	function tryWalineCommentCount(serverURL) {
		if (!serverURL || !window.Waline || typeof window.Waline.commentCount !== "function") return;
		try {
			window.Waline.commentCount({ serverURL: serverURL });
		} catch (err) {
			// ignore to avoid breaking danmu when Waline API is unavailable
		}
	}

	function toNumber(value, fallback) {
		var n = Number(value);
		return Number.isFinite(n) ? n : fallback;
	}

	function pickColor(options) {
		if (!options.randomColor || !options.colorList || !options.colorList.length) {
			return "";
		}
		var idx = Math.floor(Math.random() * options.colorList.length);
		return options.colorList[idx];
	}

	function stripHtml(html) {
		var temp = document.createElement("div");
		temp.innerHTML = html || "";
		return (temp.textContent || temp.innerText || "").trim();
	}

	function readContainerConfig(container) {
		if (!container || !container.dataset) return {};
		var data = container.dataset;
		return {
			serverURL: data.walineServer || data.serverUrl || data.serverURL || "",
			lang: data.lang || "",
			count: data.count ? toNumber(data.count, undefined) : undefined,
			refreshMs: data.refreshMs ? toNumber(data.refreshMs, undefined) : undefined,
			intervalMs: data.intervalMs ? toNumber(data.intervalMs, undefined) : undefined,
			minSpeed: data.minSpeed ? toNumber(data.minSpeed, undefined) : undefined,
			maxSpeed: data.maxSpeed ? toNumber(data.maxSpeed, undefined) : undefined,
			fontSize: data.fontSize ? toNumber(data.fontSize, undefined) : undefined,
			opacity: data.opacity ? toNumber(data.opacity, undefined) : undefined,
			maxRows: data.maxRows ? toNumber(data.maxRows, undefined) : undefined,
			rowHeight: data.rowHeight ? toNumber(data.rowHeight, undefined) : undefined,
			padding: data.padding ? toNumber(data.padding, undefined) : undefined,
			randomColor: data.randomColor === "true" ? true : data.randomColor === "false" ? false : undefined,
			showNick: data.showNick === "true" ? true : data.showNick === "false" ? false : undefined,
			pauseOnHover: data.pauseOnHover === "true" ? true : data.pauseOnHover === "false" ? false : undefined,
			loop: data.loop === "true" ? true : data.loop === "false" ? false : undefined
		};
	}



	function buildStyleTag() {
		var style = document.createElement("style");
		style.type = "text/css";
		style.textContent =
			".danmu-waline{position:relative;overflow:hidden;user-select:none;}" +
			".danmu-waline-item{position:absolute;white-space:nowrap;will-change:transform;pointer-events:auto;display:flex;align-items:center;min-width:fit-content;}" +
			".danmu-waline-avatar{width:20px;height:20px;border-radius:50%;margin-right:4px;flex-shrink:0;object-fit:cover;display:block;}" +
			".danmu-waline-content{display:flex;flex-direction:row;align-items:center;flex-shrink:0;}" +
			".danmu-waline-nick{font-weight:bold;font-size:14px;margin-right:2px;}" +
			".danmu-waline-text{font-size:16px;}" +
			".danmu-waline-like{font-size:14px;color:#ef476f;margin-left:2px;}" +
			".danmu-waline-paused .danmu-waline-item{animation-play-state:paused !important;}" +
			".danmu-waline-reload{position:absolute;bottom:10px;left:50%;transform:translateX(-50%);padding:6px 12px;background:rgba(0,0,0,0.5);color:#fff;border:none;border-radius:4px;cursor:pointer;font-size:12px;transition:opacity 0.3s;z-index:100;}" +
			".danmu-waline-reload:hover{background:rgba(0,0,0,0.7);}";
		document.head.appendChild(style);
		return style;
	}

function fetchRecentComments(options) {
	if (!options.serverURL) return Promise.resolve([]);

	// 直接使用API调用，避免依赖Waline.RecentComments的问题
	var apiBase = normalizeServerURL(options.serverURL);
	if (!apiBase) return Promise.resolve([]);

	var path = options.path || window.location.pathname;
	var page = options.page || 1;
	var pageSize = options.pageSize || 50;
	var sortBy = options.sortBy || "insertedAt_desc";

	var params = [];
	params.push("path=" + encodeURIComponent(path));
	params.push("page=" + page);
	params.push("pageSize=" + pageSize);
	params.push("sortBy=" + sortBy);

	var url = apiBase + "comment?" + params.join("&");

	var headers = {};
	if (options.token) headers.Authorization = "Bearer " + options.token;

	return fetch(url, { headers: headers })
		.then(function (resp) {
			return resp.text();
		})
		.then(function (text) {
			var data;
			try {
				data = JSON.parse(text);
			} catch (e) {
				console.error("[DanmuWaline] JSON parse error:", e);
				return [];
			}
			if (data && data.errno) {
				console.error("[DanmuWaline] Waline API error:", data.errno, data.errmsg);
				throw new Error("Waline API error: " + data.errno + " " + (data.errmsg || ""));
			}
			var list = (data && data.data) || [];
			if (list && list.data && Array.isArray(list.data)) {
				list = list.data;
			}
			if (!Array.isArray(list)) {
				console.error("[DanmuWaline] list is not an array:", list);
				return [];
			}
			return list
				.map(function (item) {
					var raw = options.useRichContent ? item.comment || item.content || "" : stripHtml(item.comment || item.content || "");
					var nick = item.nick || item.nickName || "";
					var avatar = item.avatar || "";
					var like = item.like || 0;
					if (!raw) return null;
					return { text: raw, nick: nick, avatar: avatar, like: like };
				})
				.filter(function (item) {
					return item && item.text;
				});
		})
		.catch(function (err) {
			console.error("[DanmuWaline] fetch error:", err);
			return [];
		});
}

	function DanmuWaline(userOptions) {
		this.options = extend(DEFAULTS, userOptions || {});
		this.container = document.getElementById(this.options.containerId);
		if (this.container) {
			var containerConfig = readContainerConfig(this.container);
			this.options = extend(this.options, containerConfig);
		}
		// 如果没有指定路径，使用当前页面的路径
		if (!this.options.path) {
			this.options.path = window.location.pathname;
		}
		this.container = document.getElementById(this.options.containerId);
		this.styleTag = null;
		this.queue = [];
		this.source = [];
		this.rowIndex = 0;
		this.rowCounts = {};
		this.timer = null;
		this.refreshTimer = null;
		this.running = false;
		this.instanceId = Math.random().toString(36).slice(2);
	}

	DanmuWaline.prototype.initContainer = function () {
		if (!this.container) return false;
		if (!this.styleTag) this.styleTag = buildStyleTag();
		if (!this.container.classList.contains("danmu-waline")) {
			this.container.classList.add("danmu-waline");
		}
		if (this.options.containerHeight && this.options.containerHeight > 0) {
			this.container.style.height = this.options.containerHeight + "px";
		} else {
			if (this.container.clientHeight < this.options.rowHeight) {
				var rows = this.options.maxRows && this.options.maxRows > 0 ? this.options.maxRows : 6;
				this.container.style.minHeight = rows * this.options.rowHeight + this.options.padding * 2 + "px";
			}
		}

		var reloadBtn = document.createElement("button");
		reloadBtn.className = "danmu-waline-reload";
		reloadBtn.textContent = "↻ 重新加载";
		reloadBtn.title = "重新加载弹幕";
		var self = this;
		reloadBtn.addEventListener("click", function () {
			self.reload();
		});
		this.container.appendChild(reloadBtn);

		if (this.options.pauseOnHover) {
			var container = this.container;
			container.addEventListener("mouseover", function (e) {
				var target = e.target;
				var item = target.closest(".danmu-waline-item");
				if (item) {
					item.style.animationPlayState = "paused";
					item.dataset.paused = "true";
				}
			});
			container.addEventListener("mouseout", function (e) {
				var target = e.target;
				var item = target.closest(".danmu-waline-item");
				if (item && item.dataset.paused === "true") {
					item.style.animationPlayState = "running";
					item.dataset.paused = "false";
				}
			});
		}
		return true;
	};

	DanmuWaline.prototype.loadComments = function () {
		var self = this;
		return fetchRecentComments(this.options).then(function (list) {
				var safeList = list || [];
				self.source = safeList;
				self.queue = safeList.slice();
				return safeList;
		}).catch(function (err) {
			console.error("[DanmuWaline] loadComments error:", err);
			return [];
		});
	};

	DanmuWaline.prototype.reload = function () {
		var self = this;
		this.stop();
		this.clearItems();
		this.rowCounts = {};
		this.rowIndex = 0;
		this.running = true;
		return this.loadComments()
			.then(function () {
				// 确保队列中有数据后再开始定时器
				if (self.queue.length > 0) {
					self.tick();
				}
				self.timer = setInterval(function () {
					self.tick();
				}, self.options.intervalMs);
				if (self.options.refreshMs > 0) {
					self.refreshTimer = setInterval(function () {
						self.loadComments();
					}, self.options.refreshMs);
				}
			})
			.catch(function (err) {
				console.error("[DanmuWaline] reload error:", err);
			});
	};

	DanmuWaline.prototype.pickNext = function () {
		if (this.queue.length) return this.queue.shift();
		if (this.options.loop && this.source.length) {
			this.queue = this.source.slice();
			return this.queue.shift();
		}
		return null;
	};

	DanmuWaline.prototype.getRowTop = function () {
		var maxRows = this.options.maxRows;
		var availableHeight = this.container.clientHeight || 0;
		var topPadding = this.options.padding * 2;
		var bottomPadding = 50;
		if (this.options.containerHeight && this.options.containerHeight > 0) {
			availableHeight = this.options.containerHeight - topPadding - bottomPadding;
		}
		if (!maxRows || maxRows < 1) {
			var itemHeight = Math.max(this.options.rowHeight, this.options.fontSize + 8);
			maxRows = Math.max(1, Math.floor(availableHeight / itemHeight));
		}

		var candidates = [];
		var minRowCount = Infinity;
		for (var i = 0; i < maxRows; i++) {
			var count = this.rowCounts[i] || 0;
			if (count < minRowCount) {
				minRowCount = count;
				candidates = [i];
			} else if (count === minRowCount) {
				candidates.push(i);
			}
		}

		var selectedRow = candidates[Math.floor(Math.random() * candidates.length)];
		this.rowIndex += 1;
		this.rowCounts[selectedRow] = minRowCount + 1;
		return selectedRow * this.options.rowHeight + topPadding;
	};

	DanmuWaline.prototype.spawnItem = function (item) {
		if (!item || !this.container) return;
		if (!item.text) return;

		var node = document.createElement("div");
		node.className = "danmu-waline-item";
		var rowTop = this.getRowTop();
		node.style.top = rowTop + "px";
		node.style.fontSize = this.options.fontSize + "px";
		node.style.opacity = String(this.options.opacity);

		if (this.options.showAvatar && item.avatar) {
			var avatar = document.createElement("img");
			avatar.className = "danmu-waline-avatar";
			avatar.src = item.avatar;
			avatar.style.width = this.options.avatarSize + "px";
			avatar.style.height = this.options.avatarSize + "px";
			avatar.style.borderRadius = "50%";
			node.appendChild(avatar);
		}

		var content = document.createElement("div");
		content.className = "danmu-waline-content";

		if (this.options.showNick && item.nick) {
			var nick = document.createElement("span");
			nick.className = "danmu-waline-nick";
			nick.textContent = item.nick + ": ";

			var color = pickColor(this.options);
			if (color) nick.style.color = color;

			content.appendChild(nick);
		}

		var text = document.createElement("span");
		text.className = "danmu-waline-text";
		text.textContent = item.text;
		content.appendChild(text);

		if (this.options.showLike && item.like !== undefined && item.like !== null && item.like > 0) {
			var like = document.createElement("span");
			like.className = "danmu-waline-like";
			like.textContent = " ♥" + item.like;
			content.appendChild(like);
		}

		node.appendChild(content);

		this.container.appendChild(node);

		var containerWidth = Math.max(this.container.clientWidth || 0, window.innerWidth);
		node.style.left = "0px";
		var textWidth = node.offsetWidth || 0;
		var speed = toNumber(this.options.minSpeed, 80);
		if (this.options.maxSpeed > this.options.minSpeed) {
			speed =
				this.options.minSpeed +
				Math.random() * (this.options.maxSpeed - this.options.minSpeed);
		}
		var duration = (containerWidth + textWidth) / speed;
		duration = Math.max(5, duration);

		var keyframeName = "danmu-waline-move-" + this.instanceId + "-" + Date.now() + "-" + Math.floor(Math.random() * 1000);
		var rule =
			"@keyframes " +
			keyframeName +
			" {from{transform:translateX(" +
			containerWidth +
			"px);}to{transform:translateX(-" +
			textWidth +
			"px);}}";
		this.styleTag.sheet.insertRule(rule, this.styleTag.sheet.cssRules.length);

		node.style.animation = keyframeName + " " + duration + "s linear 0s 1 forwards";
		var rowIndex = Math.floor((rowTop - this.options.padding * 2) / this.options.rowHeight);
		node.dataset.rowIndex = rowIndex;
		var self = this;
		node.addEventListener("animationend", function () {
			if (node.parentNode) {
				node.parentNode.removeChild(node);
				var r = parseInt(node.dataset.rowIndex, 10);
				if (!isNaN(r) && self.rowCounts[r] > 0) {
					self.rowCounts[r] = self.rowCounts[r] - 1;
				}
			}
		});
	};

	DanmuWaline.prototype.tick = function () {
		if (!this.running) return;
		if (!this.container || this.container.clientWidth === 0) return;
		var item = this.pickNext();
		if (!item) return;
		this.spawnItem(item);
	};

	DanmuWaline.prototype.start = function () {
		var self = this;
		if (!this.initContainer()) return this;
		this.running = true;
		tryWalineCommentCount(this.options.serverURL);

		this.loadComments().then(function () {
			self.tick();
			self.timer = setInterval(function () {
				self.tick();
			}, self.options.intervalMs);
		});

		if (this.options.refreshMs > 0) {
			this.refreshTimer = setInterval(function () {
				self.loadComments();
			}, this.options.refreshMs);
		}
		return this;
	};

	DanmuWaline.prototype.stop = function () {
		this.running = false;
		if (this.timer) clearInterval(this.timer);
		if (this.refreshTimer) clearInterval(this.refreshTimer);
		this.timer = null;
		this.refreshTimer = null;
		return this;
	};

	DanmuWaline.prototype.destroy = function () {
		this.stop();
		if (this.container) {
			var nodes = this.container.querySelectorAll(".danmu-waline-item");
			for (var i = 0; i < nodes.length; i += 1) {
				nodes[i].parentNode.removeChild(nodes[i]);
			}
			this.container.classList.remove("danmu-waline-paused");
		}
	};

	DanmuWaline.prototype.clearItems = function () {
		if (this.container) {
			var nodes = this.container.querySelectorAll(".danmu-waline-item");
			for (var i = 0; i < nodes.length; i += 1) {
				nodes[i].parentNode.removeChild(nodes[i]);
			}
		}
		this.rowCounts = {};
		this.queue = [];
		this.source = [];
	};

	window.DanmuWaline = {
		init: function (options) {
			return new DanmuWaline(options).start();
		}
	};

	if (window.DANMU_WALINE_CONFIG && window.DANMU_WALINE_CONFIG.autostart) {
		window.DanmuWaline.init(window.DANMU_WALINE_CONFIG);
	}
})();
