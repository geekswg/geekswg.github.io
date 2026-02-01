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
                min-width: 90px;
                padding: 2px;
                border-radius: 8px;
                text-align: center;
                flex-shrink: 0;
                border: none;
            }

            .nh-title {
                font-size: 0.8rem;
                color: #666;
                margin-bottom: 1px;
            }

            .nh-name {
                font-size: 24px;
                font-weight: 700;
                margin-top: 1px;
                margin-bottom: 1px;
            }

            .nh-days {
                font-size: 32px;
                line-height: 32px;
                margin-top: 1px;
                margin-bottom: 1px;
            }

            .nh-date {
                font-size: 11px;
                margin-top: 1px;
                margin-bottom: 1px;
            }

            .nh-lunar {
                font-size: 11px;
                margin-top: 1px;
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

            .nh-item-today .nh-item-header,
            .nh-item-week .nh-item-header,
            .nh-item-month .nh-item-header,
            .nh-item-year .nh-item-header {
                display: none;
            }

            .nh-item-today,
            .nh-item-week,
            .nh-item-month,
            .nh-item-year {
                display: flex !important;
                flex-direction: row !important;
                align-items: center;
                gap: 2px;
            }

            .nh-item-today .nh-label,
            .nh-item-week .nh-label,
            .nh-item-month .nh-label,
            .nh-item-year .nh-label {
                min-width: 20px;
            }

            .nh-item-today .nh-progress,
            .nh-item-week .nh-progress,
            .nh-item-month .nh-progress,
            .nh-item-year .nh-progress {
                flex: 1;
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
                width: 100%;
            }

            .nh-progress-bar text {
                fill: #333;
            }

            [data-theme="dark"] .nh-progress-bar text {
                fill: #e0e0e0;
            }

            .nh-progress-bg {
                fill: #eee;
            }

            [data-theme="dark"] .nh-progress-bg {
                fill: #2d3748;
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
                color: #aaa;
            }

            [data-theme="dark"] .nh-lunar {
                color: #bbb;
            }

            [data-theme="dark"] .nh-label {
                color: #888;
            }

            [data-theme="dark"] .nh-badge-today {
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
        var foundHolidays = [];
        
        while (i < max) {
            try {
                var ymd = d.toYmd();
                if (typeof HolidayUtil !== 'undefined' && HolidayUtil && typeof HolidayUtil.getHoliday === 'function') {
                    try {
                        var h = HolidayUtil.getHoliday(ymd);
                        if (h && isChineseName(h.getName())) {
                            var holidayName = h.getName();
                            var targetDate = null;
                            // 尝试获取节日的主要日期（target）
                            if (typeof h.getTarget === 'function') {
                                targetDate = h.getTarget();
                            }
                            // 检查是否已经记录过这个节日
                            var found = false;
                            for (var j = 0; j < foundHolidays.length; j++) {
                                if (foundHolidays[j].name === holidayName) {
                                    found = true;
                                    break;
                                }
                            }
                            if (!found) {
                                var targetSolar = null;
                                if (targetDate) {
                                    var parts = targetDate.split('-');
                                    if (parts.length === 3) {
                                        targetSolar = Solar.fromDate(new Date(parts[0], parts[1] - 1, parts[2]));
                                    }
                                }
                                foundHolidays.push({
                                    name: holidayName,
                                    targetSolar: targetSolar || d,
                                    searchSolar: d
                                });
                            }
                        }
                    } catch (e) {}
                }
            } catch (e) {}
            d = d.next(1);
            i++;
        }
        
        // 找到第一个目标日期大于今天的节日
        var todayStr = fromSolar.toYmd();
        for (var j = 0; j < foundHolidays.length; j++) {
            var holiday = foundHolidays[j];
            var holidayTargetStr = holiday.targetSolar.toYmd();
            if (holidayTargetStr > todayStr) {
                return { solar: holiday.targetSolar, name: holiday.name };
            }
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

        function svgBar(percent, w, h, fillClass, text) {
            var width = w || 120;
            var height = h || 8;
            var svgHeight = text ? 28 : height;
            var fontSize = text ? 14 : 8;
            var p = Math.max(0, Math.min(100, Math.round(percent)));
            var filled = Math.round(width * p / 100);

            // 定义渐变色
            var gradientId = 'grad-' + Math.random().toString(36).substr(2, 9);
            var gradientStart = '#a8c0ff';
            var gradientEnd = '#3f2b96';
            if (fillClass === 'nh-fill-today') {
                gradientStart = '#a1c4fd';
                gradientEnd = '#c2e9fb';
            } else if (fillClass === 'nh-fill-week') {
                gradientStart = '#89f7fe';
                gradientEnd = '#66a6ff';
            } else if (fillClass === 'nh-fill-month') {
                gradientStart = '#a8edea';
                gradientEnd = '#fed6e3';
            } else if (fillClass === 'nh-fill-year') {
                gradientStart = '#ff9a9e';
                gradientEnd = '#fecfef';
            }

            // 检测当前主题
            var isDark = document.documentElement.getAttribute('data-theme') === 'dark' ||
                         document.body.getAttribute('data-theme') === 'dark';
            var textColor = isDark ? '#e0e0e0' : '#333333';

            // 根据文字位置决定颜色
            // 文字靠右显示，如果文字位置在填充区域则用白色，否则使用 CSS 样式
            var textX = width - 30; // 文字中心位置估算
            var textFillStyle = '';
            if (textX <= filled) {
                // 文字在填充区域（渐变色），强制使用白色
                textFillStyle = ' fill="#ffffff" style="fill: #ffffff !important;"';
            }

            var svg = '<svg width="100%" height="' + svgHeight + '" viewBox="0 0 ' + width + ' ' + svgHeight + '" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" class="nh-progress-bar">'
                + '<defs>'
                + '<linearGradient id="' + gradientId + '" x1="0%" y1="0%" x2="100%" y2="0%">'
                + '<stop offset="0%" style="stop-color:' + gradientStart + ';stop-opacity:1" />'
                + '<stop offset="100%" style="stop-color:' + gradientEnd + ';stop-opacity:1" />'
                + '</linearGradient>'
                + '</defs>'
                + '<rect x="0" y="0" width="' + width + '" height="' + height + '" rx="4" ry="4" class="nh-progress-bg" />'
                + '<rect x="0" y="0" width="' + filled + '" height="' + height + '" rx="4" ry="4" fill="url(#' + gradientId + ')" />';
            if (text) {
                svg += '<text x="' + (width - 5) + '" y="' + (height / 2 + 6) + '" text-anchor="end" font-size="' + fontSize + '"' + textFillStyle + '>' + text + '</text>';
            }
            svg += '</svg>';
            return svg;
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
        html += '<div class="nh-progress">' + svgBar(percentToday, null, 20, 'nh-fill-today', '今日剩 ' + hoursRemain + '小时') + '</div>';
        html += '</div>';

        html += '<div class="nh-item nh-item-week">';
        html += '<div class="nh-progress">' + svgBar(percentWeek, null, 20, 'nh-fill-week', '本周剩 ' + daysRemainWeek + '天') + '</div>';
        html += '</div>';

        html += '<div class="nh-item nh-item-month">';
        html += '<div class="nh-progress">' + svgBar(percentMonth, null, 20, 'nh-fill-month', '本月剩 ' + daysRemainMonth + '天') + '</div>';
        html += '</div>';

        html += '<di class="nh-item nh-item-year">';
        html += '<div class="nh-progress">' + svgBar(percentYear, null, 20, 'nh-fill-year', '本年剩' + daysRemainYear + '天') + '</div>';
        html += '<div>';

        
        html += '</div>'; // timeline
        html += '</div>'; // right
        html += '<div style="display:block"><a href="/html/lunar/Calendar.html" target="_blank">查看日历 》</a></div>';
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
