/**
 * @class 类库
 * @author jim
 * @date 2018/01/07
 */
var jsoft = function(){
	this.version = "0.0.1";
};

/**
 * 增加命名空间机制
 */
jsoft.namespace = new Object();

/**
 * 注册命名空间
 * @param {String} fullNS 完整的命名空间字符串，如baidu.libs.Firefox
 * @example jsoft.namespace.register("jsoft.libs.Firefox");
 */
jsoft.namespace.register = function(fullNS){
	//命名空间合法性校验依据
	var reg = /^[_$a-z]+[_$a-z0-9]*/i;
	
    // 将命名空间切成N部分, 比如baidu.libs.Firefox等
    var nsArray = fullNS.split('.');
    var sEval = "";
    var sNS = "";
    var _tmpObj = [window];
    for (var i = 0; i < nsArray.length; i++){
		//命名空间合法性校验
		if(!reg.test(nsArray[i])) {
			throw new Error("Invalid namespace:" + nsArray[i] + "");
			return ;
		}

        _tmpObj[i+1] = _tmpObj[i][nsArray[i]];
        if(typeof _tmpObj[i+1] == 'undefined') {
            _tmpObj[i+1] = new Object();
        }
    }
};

/**
 * 让所有字符串支持空白过滤功能：trim
 * @retrn {String} 返回两端无空白的字符串
 */
String.prototype.trim = function(){
	return this.replace(/^\s*|\s*$/g,"");
};

/**
 * 字符串的format方法
 */
String.prototype.format = function(){
    var $ = arguments.length, _ = this;
    while ($--) 
        _ = _.replace(new RegExp("\\{" + $ + "\\}", "g"), arguments[$]);
    return _
};

/**
 * 日期格式化
 * @param {Object} pattern
 */
Date.prototype.format = function(pattern){
	var pad = function (source, length) {
	    var pre = "",
	        negative = (source < 0),
	        string = String(Math.abs(source));
	
	    if (string.length < length) {
	        pre = (new Array(length - string.length + 1)).join('0');
	    }
	
	    return (negative ?  "-" : "") + pre + string;
	};
	
	if ('string' != typeof pattern) {
        return this.toString();
    }

    var replacer = function(patternPart, result) {
        pattern = pattern.replace(patternPart, result);
    }
    
    var year    = this.getFullYear(),
        month   = this.getMonth() + 1,
        date2   = this.getDate(),
        hours   = this.getHours(),
        minutes = this.getMinutes(),
        seconds = this.getSeconds();

    replacer(/yyyy/g, pad(year, 4));
    replacer(/yy/g, pad(parseInt(year.toString().slice(2), 10), 2));
    replacer(/MM/g, pad(month, 2));
    replacer(/M/g, month);
    replacer(/dd/g, pad(date2, 2));
    replacer(/d/g, date2);

    replacer(/HH/g, pad(hours, 2));
    replacer(/H/g, hours);
    replacer(/hh/g, pad(hours % 12, 2));
    replacer(/h/g, hours % 12);
    replacer(/mm/g, pad(minutes, 2));
    replacer(/m/g, minutes);
    replacer(/ss/g, pad(seconds, 2));
    replacer(/s/g, seconds);

    return pattern;
};

/**
 * 获取某字符串的字节数
 */
String.prototype.getBytes = function () {
    var stream = this.replace(/\n/g, 'xx').replace(/\t/g, 'x');
    var escapedStr = encodeURIComponent(stream);
    return escapedStr.replace(/%[A-Z0-9][A-Z0-9]/g, 'x').length;
}

/**
 * 获取某个节点的outerhtml，超过40个字符，则以...代替
 * @param {} elm
 */
var getOuterHtmlEllipsis = function(elm) {
	var reg = /(<[^>]+>)/g;
	var arr = reg.exec(elm.outerHTML);
	var rst = arr ? arr[1] : elm.outerHTML;
	rst = rst.length > 40 ? rst.substr(0,40) + '...' : rst;
	return rst.replace(/</g,'&lt;').replace(/>/g,'&gt;');
};

/**
 * 获取某节点的整个html片段，超过40个字符，则以...代替
 * @param {Object} elm
 */
var getOuterAndInnerHtmlEllipsis = function(elm){
	var rst = jQuery('<div></div>').append(elm).html();
};

(function(){
    jsoft.i18n = {};
    jsoft.i18n.getMessage = function(msgId,arr){
        if(arr) {
            for(var i=0,len=arr.length;i<len;i++){
                arr[i] = '' + arr[i];
            }
            return chrome.i18n.getMessage(msgId,arr);
        }else{
            return chrome.i18n.getMessage(msgId);
        }
    };
})();