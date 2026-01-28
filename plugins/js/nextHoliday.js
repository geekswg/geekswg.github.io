/*
  nextHoliday.js - 使用 lunar.js (Solar/HolidayUtil) 实现节日倒计时与剩余时间展示
  只修改本文件：查找下一个节日（包含周末），并展示"今日/本周/本月/本年"剩余时间
*/
(function () {
    'use strict';

    // 注入 CSS 样式到页面
    function injectStyles() {
        var css = `
            /* NextHoliday 卡片样式 */
            .nh-card {
                display: flex;
                align-items: center;
                gap: 2px;
                padding: 2px;
                border-radius: 12px;
                transition: all 0.3s ease;
            }

            .nh-left {
                min-width: 100px;
                padding: 2px;
                border-radius: 8px;
                text-align: center;
                flex-shrink: 0;
            }

            .nh-title {
                font-size: 0.8rem;
                color: #666;
            }

            .nh-name {
                font-size: 24px;
                font-weight: 700;
                margin-top: 4px;
            }

            .nh-days {
                font-size: 32px;
                margin-top: 4px;
            }

            .nh-date {
                font-size: 11px;
                margin-top: 4px;
            }

            .nh-lunar {
                font-size: 11px;
                margin-top: 2px;
            }

            .nh-right {
                flex: 1;
                padding: 4px;
            }

            .nh-timeline {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            .nh-item {
                display: flex;
                flex-direction: column;
                gap: 2px;
            }

            .nh-item-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .nh-label {
                font-size: 11px;
                color: #888;
            }

            .nh-badge {
                padding: 2px 6px;
                border-radius: 12px;
                font-size: 11px;
            }

            .nh-badge-today {
                background: #eef6ff;
                color: #2b6ef6;
            }

            .nh-badge-week {
                background: #f3f8ff;
                color: #3b82f6;
            }

            .nh-badge-month {
                background: #eef2ff;
                color: #6366f1;
            }

            .nh-badge-year {
                background: #fff0f6;
                color: #db2777;
            }

            .nh-progress {
                display: flex;
                align-items: center;
            }

            .nh-progress-bar {
                vertical-align: middle;
            }

            .nh-progress-bg {
                fill: #eee;
            }

            .nh-fill-today {
                fill: #2b6ef6;
            }

            .nh-fill-week {
                fill: #3b82f6;
            }

            .nh-fill-month {
                fill: #6366f1;
            }

            .nh-fill-year {
                fill: #db2777;
            }

            /* 暗色主题 */
            [data-theme="dark"] .nh-card {
                background: rgba(255, 255, 255, 0.02);
            }

            [data-theme="dark"] .nh-left {
                background: rgba(255, 255, 255, 0.05);
            }

            [data-theme="dark"] .nh-title {
                color: #b0b0b0;
            }

            [data-theme="dark"] .nh-name {
                color: #e0e0e0;
            }

            [data-theme="dark"] .nh-days {
                color: #5dade2;
            }

            [data-theme="dark"] .nh-date {
                color: #777;
            }

            [data-theme="dark"] .nh-lunar {
                color: #888;
            }

            [data-theme="dark"] .nh-label {
                color: #888;
            }

            [data-theme="dark"] .nh-badge-today {
                background: rgba(93, 173, 226, 0.15);
                color: #5dade2;
            }

            [data-theme="dark"] .nh-badge-week {
                background: rgba(52, 152, 219, 0.15);
                color: #3498db;
            }

            [data-theme="dark"] .nh-badge-month {
                background: rgba(155, 89, 182, 0.15);
                color: #9b59b6;
            }

            [data-theme="dark"] .nh-badge-year {
                background: rgba(231, 76, 60, 0.15);
                color: #e74c3c;
            }

            [data-theme="dark"] .nh-progress-bg {
                fill: #2d3748;
            }

            [data-theme="dark"] .nh-fill-today {
                fill: #5dade2;
            }

            [data-theme="dark"] .nh-fill-week {
                fill: #3498db;
            }

            [data-theme="dark"] .nh-fill-month {
                fill: #9b59b6;
            }

            [data-theme="dark"] .nh-fill-year {
                fill: #e74c3c;
            }
        `;

        var styleEl = document.createElement('style');
        styleEl.id = 'nextHolidayStyles';
        styleEl.textContent = css;
        document.head.appendChild(styleEl);
    }

    // 注入样式
    if (!document.getElementById('nextHolidayStyles')) {
        injectStyles();
    }

    function pad(n) { return n < 10 ? '0' + n : n; }

    // 如果页面没有加载 lunar.js，这里提供一个最小的 Solar 降级实现，基于原生 Date
    if (typeof Solar === 'undefined') {
        (function () {
            function SolarFallback(d) {
                this._d = d instanceof Date ? new Date(d.getTime()) : new Date();
            }
            SolarFallback.fromDate = function (d) {
                return new SolarFallback(d);
            };
            SolarFallback.prototype.getYear = function () { return this._d.getFullYear(); };
            // 返回 1..12
            SolarFallback.prototype.getMonth = function () { return this._d.getMonth() + 1; };
            SolarFallback.prototype.getDay = function () { return this._d.getDate(); };
            SolarFallback.prototype.getHour = function () { return this._d.getHours(); };
            SolarFallback.prototype.toYmd = function () {
                return this._d.getFullYear() + '-' + pad(this._d.getMonth() + 1) + '-' + pad(this._d.getDate());
            };
            SolarFallback.prototype.getWeek = function () { return this._d.getDay(); };
            SolarFallback.prototype.next = function (n) {
                var d = new Date(this._d.getFullYear(), this._d.getMonth(), this._d.getDate() + (n || 1));
                return SolarFallback.fromDate(d);
            };
            // expose as global Solar so后续代码可以直接使用
            window.Solar = SolarFallback;
        })();
    }

    function solarToYmd(solar) {
        return solar.getYear() + '-' + pad(solar.getMonth()) + '-' + pad(solar.getDay());
    }

    // 仅查找下一个中国法定放假日（使用 HolidayUtil）
    var SEARCH_DAYS = 365;
    function isChineseName(name) {
        return /[\u4e00-\u9fff]/.test(name);
    }
    function findNextHoliday(fromSolar, maxDays) {
        var d = fromSolar;
        var max = maxDays || SEARCH_DAYS;
        var i = 0;
        while (i < max) {
            try {
                var ymd = d.toYmd();
                if (typeof HolidayUtil !== 'undefined' && HolidayUtil && typeof HolidayUtil.getHoliday === 'function') {
                    try {
                        var h = HolidayUtil.getHoliday(ymd);
                        if (h && !h.isWork()) {
                            var nm = h.getName();
                            if (isChineseName(nm)) {
                                return { solar: d, name: nm };
                            }
                        }
                    } catch (e) {}
                }
            } catch (e) {}
            d = d.next(1);
            i++;
        }
        return null;
    }
    

    function formatDate(solar) {
        return solar.getYear() + '-' + pad(solar.getMonth()) + '-' + pad(solar.getDay());
    }

    function daysBetween(dateA, dateB) {
        // dateB - dateA in full days (floor)
        var ms = dateB.getTime() - dateA.getTime();
        return Math.floor(ms / (24 * 3600 * 1000));
    }

    function buildCard(htmlId) {
        var container = document.getElementById(htmlId);
        if (!container) return;

        var now = new Date();
        var solarNow = Solar.fromDate(now);

        // 查找下一个节日（日历上的第一个非工作日或周末）
        var found = findNextHoliday(solarNow, 800);
        var targetSolar = found ? found.solar : solarNow.next(1);
        var targetName = found ? found.name : '未知节日';

        // 计算相差天数（目标日 - 现在），保留符号
        var targetDate = new Date(targetSolar.getYear(), targetSolar.getMonth() - 1, targetSolar.getDay(), 0, 0, 0);
        var diffDays = daysBetween(new Date(now.getFullYear(), now.getMonth(), now.getDate()), targetDate);

        // 今日剩余时间（小时）
        var startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
        var endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
        var msRemainToday = endOfDay.getTime() - now.getTime();
        var hoursRemain = Math.max(0, Math.floor(msRemainToday / (3600 * 1000)));

        // 本周剩余天数（到周日为止，不包含今天）和进度
        var weekday = now.getDay(); // 0 Sun .. 6 Sat
        var daysRemainWeek = 7 - weekday;

        // 本月剩余天数（含当天）
        var year = now.getFullYear();
        var month = now.getMonth();
        var daysInMonth = new Date(year, month + 1, 0).getDate();
        var dayOfMonth = now.getDate();
        var daysRemainMonth = daysInMonth - dayOfMonth + 1;

        // 本年剩余天数（含当天）
        var startOfYear = new Date(year, 0, 1);
        var dayOfYear = Math.floor((now - startOfYear) / (24 * 3600 * 1000)) + 1;
        var isLeap = (new Date(year, 1, 29).getDate() === 29);
        var daysInYear = isLeap ? 366 : 365;
        var daysRemainYear = daysInYear - dayOfYear + 1;

        // 计算进度百分比（0-100），对于今日/周/月/年显示已完成百分比
        var percentToday = Math.min(100, Math.max(0, (now.getTime() - startOfDay.getTime()) / (24 * 3600 * 1000) * 100));
        var percentWeek = Math.min(100, Math.max(0, (weekday + (now.getHours() + now.getMinutes()/60)/24) / 7 * 100));
        var percentMonth = Math.min(100, Math.max(0, ((dayOfMonth - 1) + (now.getHours() + now.getMinutes()/60)/24) / daysInMonth * 100));
        var percentYear = Math.min(100, Math.max(0, ((dayOfYear - 1) + (now.getHours() + now.getMinutes()/60)/24) / daysInYear * 100));

        function svgBar(percent, w, h, fillClass) {
            var width = w || 80;
            var height = h || 8;
            var p = Math.max(0, Math.min(100, Math.round(percent)));
            var filled = Math.round(width * p / 100);
            return '<svg width="' + width + '" height="' + height + '" viewBox="0 0 ' + width + ' ' + height + '" xmlns="http://www.w3.org/2000/svg" class="nh-progress-bar">'
                + '<rect x="0" y="0" width="' + width + '" height="' + height + '" rx="4" ry="4" class="nh-progress-bg" />'
                + '<rect x="0" y="0" width="' + filled + '" height="' + height + '" rx="4" ry="4" class="' + (fillClass || 'nh-fill-today') + '" />'
                + '</svg>';
        }

        // 构建 HTML（移除所有内联样式，使用 CSS 类）
        var html = '';
        html += '<div class="nh-card">';
        html += '<div class="nh-left">';
        html += '<div class="nh-title">距离下一个节日</div>';
        html += '<div class="nh-name">' + (targetName || '节日') + '</div>';
        html += '<div class="nh-days">' + diffDays + '</div>';
        // 阳历日期
        html += '<div class="nh-date">' + formatDate(targetSolar) + '</div>';
        // 农历（尝试使用 Solar.getLunar 或 Lunar.fromDate）
        var lunarStr = '';
        try {
            var lunarObj = null;
            if (targetSolar && typeof targetSolar.getLunar === 'function') {
                lunarObj = targetSolar.getLunar();
            } else if (typeof Lunar !== 'undefined' && typeof Lunar.fromDate === 'function') {
                var td = new Date(targetSolar.getYear(), targetSolar.getMonth() - 1, targetSolar.getDay());
                lunarObj = Lunar.fromDate(td);
            }
            if (lunarObj) {
                var ygz = typeof lunarObj.getYearInGanZhi === 'function' ? lunarObj.getYearInGanZhi() : (lunarObj.getYearInGanZhi ? lunarObj.getYearInGanZhi : '');
                var sx = typeof lunarObj.getYearShengXiao === 'function' ? lunarObj.getYearShengXiao() : '';
                var mcn = typeof lunarObj.getMonthInChinese === 'function' ? lunarObj.getMonthInChinese() : '';
                var dcn = typeof lunarObj.getDayInChinese === 'function' ? lunarObj.getDayInChinese() : '';
                lunarStr = (ygz ? ygz : '') + (sx ? sx : '') + '年 ' + (mcn ? mcn : '') +'月'+ (dcn ? dcn : '');
            }
        } catch (e) { lunarStr = ''; }
        if (lunarStr) {
            html += '<div class="nh-lunar">' + lunarStr + '</div>';
        }
        html += '</div>';

        html += '<div class="nh-right">';
        html += '<div class="nh-timeline">';
        html += '<div class="nh-item nh-item-today">';
        html += '<div class="nh-item-header">';
        html += '<span class="nh-label">今日</span>';
        html += '<span class="nh-badge nh-badge-today">还剩 ' + hoursRemain + ' 小时</span>';
        html += '</div>';
        html += '<div class="nh-progress">' + svgBar(percentToday, 120, 8, 'nh-fill-today') + '</div>';
        html += '</div>';

        html += '<div class="nh-item nh-item-week">';
        html += '<div class="nh-item-header">';
        html += '<span class="nh-label">本周</span>';
        html += '<span class="nh-badge nh-badge-week">还剩 ' + daysRemainWeek + ' 天</span>';
        html += '</div>';
        html += '<div class="nh-progress">' + svgBar(percentWeek, 120, 8, 'nh-fill-week') + '</div>';
        html += '</div>';

        html += '<div class="nh-item nh-item-month">';
        html += '<div class="nh-item-header">';
        html += '<span class="nh-label">本月</span>';
        html += '<span class="nh-badge nh-badge-month">还剩 ' + daysRemainMonth + ' 天</span>';
        html += '</div>';
        html += '<div class="nh-progress">' + svgBar(percentMonth, 120, 8, 'nh-fill-month') + '</div>';
        html += '</div>';

        html += '<di class="nh-item nh-item-year">';
        html += '<div class="nh-item-header">';
        html += '<span class="nh-label">本年</span>';
        html += '<span class="nh-badge nh-badge-year">还剩 ' + daysRemainYear + ' 天</span>';
        html += '</div>';
        html += '<div class="nh-progress">' + svgBar(percentYear, 120, 8, 'nh-fill-year') + '</div>';
        html += '<a href="/html/lunar/Calendar.html" target="_blank">查看日历</a>';
        html += '<div>';

        html += '</div>'; // timeline
        html += '</div>'; // right
        html += '</div>'; // card

        container.innerHTML = html;
    }

    // 自动运行：将结果填充到 id 为 'holiday' 的元素（保留兼容性）
    try {
        buildCard('holiday');
    } catch (e) {
        console && console.error && console.error('nextHoliday.js error', e);
    }

})();
