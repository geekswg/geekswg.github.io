'use strict'

/**
 *  fullscreen (全屏控件)
 * 
 *  @author MiiKio
 *  @version 1.0
 *  @updatetime 2022.3.5
 *  @param {Object}       raw           当前控件实例支持的原生API名称
 *  @param {Boolean}      isEnabled     全屏控件是否可用
 *  @param {Boolean}      isFullscreen  当前是否已全屏
 *  @param {HTMLElement}  element       当前全屏的元素
 *  @param {Function}     request       启用全屏，参数：(element: 变为全屏的元素，默认为HTML根元素, options: 全屏配置)，仅返回 Promise<resolve>
 *  @param {Function}     exit          退出全屏，仅返回 Promise<resolve>
 *  @param {Function}     toggle        切换全屏，参数：(valid: 是否全屏，默认为切换, element: 变为全屏的元素，仅切换为全屏时生效, options: 全屏配置，仅切换为全屏时生效)，仅返回 Promise<resolve>
 *  @param {Function}     onchange      全屏状态改变时的操作 (仅可赋值更改)
 *  @param {Function}     onerror       全屏改变时返回错误的操作 (仅可赋值更改)
 */
var instance = {}
var changeHandler = null
var errorHandler = null
var raw = (function() {
  var i, j, props = {}, keys = [
    // Common
    ['fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror', 'requestFullscreen', 'exitFullscreen'],
    // Modern WebKit
    ['webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror', 'webkitRequestFullscreen', 'webkitExitFullscreen'],
    // Legacy WebKit
    ['webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror', 'webkitRequestFullScreen', 'webkitCancelFullScreen'],
    // Mozilla
    ['mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror', 'mozRequestFullScreen', 'mozCancelFullScreen'],
    // IE
    ['msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError', 'msRequestFullscreen', 'msExitFullscreen']
  ]
  for (i = 0; i < keys.length; i++) {
    if (keys[i][0] in document) {
      for (j = 0; j < keys[i].length; j++) props[keys[0][j]] = keys[i][j]
      break
    }
  }
  return Object.freeze(props)
})()
var resolve = function(value) {
  return typeof Promise === 'undefined' ? value : value instanceof Promise ? value.catch(Promise.resolve.bind(Promise)) : Promise.resolve(value)
}

Object.defineProperties(instance, {
  raw: {
    enumerable: true,
    value: raw
  },
  isEnabled: {
    enumerable: true,
    get: function() { return Boolean(document[raw.fullscreenEnabled]) }
  },
  isFullscreen: {
    enumerable: true,
    get: function() { return Boolean(document[raw.fullscreenElement]) },
    set: function(value) { typeof value == 'boolean' && instance.toggle(value) }
  },
  element: {
    enumerable: true,
    get: function() { return document[raw.fullscreenElement] || null }
  },
  request: {
    enumerable: true,
    value: function(element, options) {
      try {
        if (element == null) element = document.documentElement
        else if (typeof element === 'string') element = document.querySelector(element)
        return resolve(element[raw.requestFullscreen](options))
      } catch (e) {
        return resolve(e)
      }
    }
  },
  exit: {
    enumerable: true,
    value: function() {
      try {
        return resolve(document[raw.exitFullscreen]())
      } catch (e) {
        return resolve(e)
      }
    }
  },
  toggle: {
    enumerable: true,
    value: function(valid, element, options) {
      return (valid != null ? valid : !instance.isFullscreen) ? instance.request(element, options) : instance.exit()
    }
  },
  onchange: {
    enumerable: true,
    get: function() { return changeHandler },
    set: function(value) {
      var eventName = raw['fullscreenchange']
      if (!eventName) return
      if (changeHandler) document.removeEventListener(eventName, changeHandler)
      changeHandler = typeof value == 'function' ? value : null
      if (changeHandler) document.addEventListener(eventName, changeHandler, false)
    }
  },
  onerror: {
    enumerable: true,
    get: function() { return errorHandler },
    set: function(value) {
      var eventName = raw['fullscreenerror']
      if (!eventName) return
      if (errorHandler) document.removeEventListener(eventName, errorHandler)
      errorHandler = typeof value == 'function' ? value : null
      if (errorHandler) document.addEventListener(eventName, errorHandler, false)
    }
  }
})

export default instance
