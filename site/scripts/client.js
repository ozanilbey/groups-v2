/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([33,1]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(3);
var isBuffer = __webpack_require__(13);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(16);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(4);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(4);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(15)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var settle = __webpack_require__(17);
var buildURL = __webpack_require__(19);
var parseHeaders = __webpack_require__(20);
var isURLSameOrigin = __webpack_require__(21);
var createError = __webpack_require__(5);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(22);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ( true &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(23);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(18);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

(
  /**
   * Interface for event subscription.
   *
   * @example
   * var NanoEvents = require('nanoevents')
   *
   * class Ticker {
   *   constructor() {
   *     this.emitter = new NanoEvents()
   *   }
   *   on() {
   *     return this.emitter.on.apply(this.events, arguments)
   *   }
   *   tick() {
   *     this.emitter.emit('tick')
   *   }
   * }
   *
   * @alias NanoEvents
   * @class
   */
  module.exports = function NanoEvents () {
    /**
     * Event names in keys and arrays with listeners in values.
     * @type {object}
     *
     * @example
     * Object.keys(ee.events)
     *
     * @alias NanoEvents#events
     */
    this.events = { }
  }
).prototype = {

  /**
   * Calls each of the listeners registered for a given event.
   *
   * @param {string} event The event name.
   * @param {...*} arguments The arguments for listeners.
   *
   * @return {undefined}
   *
   * @example
   * ee.emit('tick', tickType, tickDuration)
   *
   * @alias NanoEvents#emit
   * @method
   */
  emit: function emit (event) {
    var args = [].slice.call(arguments, 1)
    // Array.prototype.call() returns empty array if context is not array-like
    ;[].slice.call(this.events[event] || []).filter(function (i) {
      i.apply(this, args) // this === global or window
    })
  },

  /**
   * Add a listener for a given event.
   *
   * @param {string} event The event name.
   * @param {function} cb The listener function.
   *
   * @return {function} Unbind listener from event.
   *
   * @example
   * const unbind = ee.on('tick', (tickType, tickDuration) => {
   *   count += 1
   * })
   *
   * disable () {
   *   unbind()
   * }
   *
   * @alias NanoEvents#on
   * @method
   */
  on: function on (event, cb) {
    if (false) {}

    (this.events[event] = this.events[event] || []).push(cb)

    return function () {
      this.events[event] = this.events[event].filter(function (i) {
        return i !== cb
      })
    }.bind(this)
  }
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var require;var require;/*!
 * Less - Leaner CSS v3.8.1
 * http://lesscss.org
 *
 * Copyright (c) 2009-2018, Alexis Sellier <self@cloudhead.net>
 * Licensed under the Apache-2.0 License.
 *
 */

 /** * @license Apache-2.0
 */

(function(f){if(true){module.exports=f()}else { var g; }})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return require(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var addDataAttr = require('./utils').addDataAttr,
    browser = require('./browser');

module.exports = function(window, options) {

    // use options from the current script tag data attribues
    addDataAttr(options, browser.currentScript(window));

    if (options.isFileProtocol === undefined) {
        options.isFileProtocol = /^(file|(chrome|safari)(-extension)?|resource|qrc|app):/.test(window.location.protocol);
    }

    // Load styles asynchronously (default: false)
    //
    // This is set to `false` by default, so that the body
    // doesn't start loading before the stylesheets are parsed.
    // Setting this to `true` can result in flickering.
    //
    options.async = options.async || false;
    options.fileAsync = options.fileAsync || false;

    // Interval between watch polls
    options.poll = options.poll || (options.isFileProtocol ? 1000 : 1500);

    options.env = options.env || (window.location.hostname == '127.0.0.1' ||
        window.location.hostname == '0.0.0.0'   ||
        window.location.hostname == 'localhost' ||
        (window.location.port &&
            window.location.port.length > 0)      ||
        options.isFileProtocol                   ? 'development'
        : 'production');

    var dumpLineNumbers = /!dumpLineNumbers:(comments|mediaquery|all)/.exec(window.location.hash);
    if (dumpLineNumbers) {
        options.dumpLineNumbers = dumpLineNumbers[1];
    }

    if (options.useFileCache === undefined) {
        options.useFileCache = true;
    }

    if (options.onReady === undefined) {
        options.onReady = true;
    }

    if (options.relativeUrls) {
        options.rewriteUrls = 'all';
    }
};

},{"./browser":3,"./utils":11}],2:[function(require,module,exports){
/**
 * Kicks off less and compiles any stylesheets
 * used in the browser distributed version of less
 * to kick-start less using the browser api
 */
/* global window, document */

// TODO - consider switching this out for a recommendation for this polyfill?
// <script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
// Browsers have good Promise support
require('promise/polyfill');

var options = require('../less/default-options')();

if (window.less) {
    for (key in window.less) {
        if (window.less.hasOwnProperty(key)) {
            options[key] = window.less[key];
        }
    }
}
require('./add-default-options')(window, options);

options.plugins = options.plugins || [];

if (window.LESS_PLUGINS) {
    options.plugins = options.plugins.concat(window.LESS_PLUGINS);
}

var less = module.exports = require('./index')(window, options);

window.less = less;

var css, head, style;

// Always restore page visibility
function resolveOrReject(data) {
    if (data.filename) {
        console.warn(data);
    }
    if (!options.async) {
        head.removeChild(style);
    }
}

if (options.onReady) {
    if (/!watch/.test(window.location.hash)) {
        less.watch();
    }
    // Simulate synchronous stylesheet loading by hiding page rendering
    if (!options.async) {
        css = 'body { display: none !important }';
        head = document.head || document.getElementsByTagName('head')[0];
        style = document.createElement('style');

        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        head.appendChild(style);
    }
    less.registerStylesheetsImmediately();
    less.pageLoadFinished = less.refresh(less.env === 'development').then(resolveOrReject, resolveOrReject);
}

},{"../less/default-options":17,"./add-default-options":1,"./index":8,"promise/polyfill":107}],3:[function(require,module,exports){
var utils = require('./utils');
module.exports = {
    createCSS: function (document, styles, sheet) {
        // Strip the query-string
        var href = sheet.href || '';

        // If there is no title set, use the filename, minus the extension
        var id = 'less:' + (sheet.title || utils.extractId(href));

        // If this has already been inserted into the DOM, we may need to replace it
        var oldStyleNode = document.getElementById(id);
        var keepOldStyleNode = false;

        // Create a new stylesheet node for insertion or (if necessary) replacement
        var styleNode = document.createElement('style');
        styleNode.setAttribute('type', 'text/css');
        if (sheet.media) {
            styleNode.setAttribute('media', sheet.media);
        }
        styleNode.id = id;

        if (!styleNode.styleSheet) {
            styleNode.appendChild(document.createTextNode(styles));

            // If new contents match contents of oldStyleNode, don't replace oldStyleNode
            keepOldStyleNode = (oldStyleNode !== null && oldStyleNode.childNodes.length > 0 && styleNode.childNodes.length > 0 &&
                oldStyleNode.firstChild.nodeValue === styleNode.firstChild.nodeValue);
        }

        var head = document.getElementsByTagName('head')[0];

        // If there is no oldStyleNode, just append; otherwise, only append if we need
        // to replace oldStyleNode with an updated stylesheet
        if (oldStyleNode === null || keepOldStyleNode === false) {
            var nextEl = sheet && sheet.nextSibling || null;
            if (nextEl) {
                nextEl.parentNode.insertBefore(styleNode, nextEl);
            } else {
                head.appendChild(styleNode);
            }
        }
        if (oldStyleNode && keepOldStyleNode === false) {
            oldStyleNode.parentNode.removeChild(oldStyleNode);
        }

        // For IE.
        // This needs to happen *after* the style element is added to the DOM, otherwise IE 7 and 8 may crash.
        // See http://social.msdn.microsoft.com/Forums/en-US/7e081b65-878a-4c22-8e68-c10d39c2ed32/internet-explorer-crashes-appending-style-element-to-head
        if (styleNode.styleSheet) {
            try {
                styleNode.styleSheet.cssText = styles;
            } catch (e) {
                throw new Error('Couldn\'t reassign styleSheet.cssText.');
            }
        }
    },
    currentScript: function(window) {
        var document = window.document;
        return document.currentScript || (function() {
            var scripts = document.getElementsByTagName('script');
            return scripts[scripts.length - 1];
        })();
    }
};

},{"./utils":11}],4:[function(require,module,exports){
// Cache system is a bit outdated and could do with work

module.exports = function(window, options, logger) {
    var cache = null;
    if (options.env !== 'development') {
        try {
            cache = (typeof window.localStorage === 'undefined') ? null : window.localStorage;
        } catch (_) {}
    }
    return {
        setCSS: function(path, lastModified, modifyVars, styles) {
            if (cache) {
                logger.info('saving ' + path + ' to cache.');
                try {
                    cache.setItem(path, styles);
                    cache.setItem(path + ':timestamp', lastModified);
                    if (modifyVars) {
                        cache.setItem(path + ':vars', JSON.stringify(modifyVars));
                    }
                } catch (e) {
                    // TODO - could do with adding more robust error handling
                    logger.error('failed to save "' + path + '" to local storage for caching.');
                }
            }
        },
        getCSS: function(path, webInfo, modifyVars) {
            var css       = cache && cache.getItem(path),
                timestamp = cache && cache.getItem(path + ':timestamp'),
                vars      = cache && cache.getItem(path + ':vars');

            modifyVars = modifyVars || {};
            vars = vars || "{}"; // if not set, treat as the JSON representation of an empty object

            if (timestamp && webInfo.lastModified &&
                (new Date(webInfo.lastModified).valueOf() ===
                    new Date(timestamp).valueOf()) &&
                JSON.stringify(modifyVars) === vars) {
                // Use local copy
                return css;
            }
        }
    };
};

},{}],5:[function(require,module,exports){
var utils = require('./utils'),
    browser = require('./browser');

module.exports = function(window, less, options) {

    function errorHTML(e, rootHref) {
        var id = 'less-error-message:' + utils.extractId(rootHref || '');
        var template = '<li><label>{line}</label><pre class="{class}">{content}</pre></li>';
        var elem = window.document.createElement('div'), timer, content, errors = [];
        var filename = e.filename || rootHref;
        var filenameNoPath = filename.match(/([^\/]+(\?.*)?)$/)[1];

        elem.id        = id;
        elem.className = 'less-error-message';

        content = '<h3>'  + (e.type || 'Syntax') + 'Error: ' + (e.message || 'There is an error in your .less file') +
            '</h3>' + '<p>in <a href="' + filename   + '">' + filenameNoPath + '</a> ';

        var errorline = function (e, i, classname) {
            if (e.extract[i] !== undefined) {
                errors.push(template.replace(/\{line\}/, (parseInt(e.line, 10) || 0) + (i - 1))
                    .replace(/\{class\}/, classname)
                    .replace(/\{content\}/, e.extract[i]));
            }
        };

        if (e.line) {
            errorline(e, 0, '');
            errorline(e, 1, 'line');
            errorline(e, 2, '');
            content += 'on line ' + e.line + ', column ' + (e.column + 1) + ':</p>' +
                '<ul>' + errors.join('') + '</ul>';
        }
        if (e.stack && (e.extract || options.logLevel >= 4)) {
            content += '<br/>Stack Trace</br />' + e.stack.split('\n').slice(1).join('<br/>');
        }
        elem.innerHTML = content;

        // CSS for error messages
        browser.createCSS(window.document, [
            '.less-error-message ul, .less-error-message li {',
            'list-style-type: none;',
            'margin-right: 15px;',
            'padding: 4px 0;',
            'margin: 0;',
            '}',
            '.less-error-message label {',
            'font-size: 12px;',
            'margin-right: 15px;',
            'padding: 4px 0;',
            'color: #cc7777;',
            '}',
            '.less-error-message pre {',
            'color: #dd6666;',
            'padding: 4px 0;',
            'margin: 0;',
            'display: inline-block;',
            '}',
            '.less-error-message pre.line {',
            'color: #ff0000;',
            '}',
            '.less-error-message h3 {',
            'font-size: 20px;',
            'font-weight: bold;',
            'padding: 15px 0 5px 0;',
            'margin: 0;',
            '}',
            '.less-error-message a {',
            'color: #10a',
            '}',
            '.less-error-message .error {',
            'color: red;',
            'font-weight: bold;',
            'padding-bottom: 2px;',
            'border-bottom: 1px dashed red;',
            '}'
        ].join('\n'), { title: 'error-message' });

        elem.style.cssText = [
            'font-family: Arial, sans-serif',
            'border: 1px solid #e00',
            'background-color: #eee',
            'border-radius: 5px',
            '-webkit-border-radius: 5px',
            '-moz-border-radius: 5px',
            'color: #e00',
            'padding: 15px',
            'margin-bottom: 15px'
        ].join(';');

        if (options.env === 'development') {
            timer = setInterval(function () {
                var document = window.document,
                    body = document.body;
                if (body) {
                    if (document.getElementById(id)) {
                        body.replaceChild(elem, document.getElementById(id));
                    } else {
                        body.insertBefore(elem, body.firstChild);
                    }
                    clearInterval(timer);
                }
            }, 10);
        }
    }

    function removeErrorHTML(path) {
        var node = window.document.getElementById('less-error-message:' + utils.extractId(path));
        if (node) {
            node.parentNode.removeChild(node);
        }
    }

    function removeErrorConsole(path) {
        // no action
    }

    function removeError(path) {
        if (!options.errorReporting || options.errorReporting === 'html') {
            removeErrorHTML(path);
        } else if (options.errorReporting === 'console') {
            removeErrorConsole(path);
        } else if (typeof options.errorReporting === 'function') {
            options.errorReporting('remove', path);
        }
    }

    function errorConsole(e, rootHref) {
        var template = '{line} {content}';
        var filename = e.filename || rootHref;
        var errors = [];
        var content = (e.type || 'Syntax') + 'Error: ' + (e.message || 'There is an error in your .less file') +
            ' in ' + filename;

        var errorline = function (e, i, classname) {
            if (e.extract[i] !== undefined) {
                errors.push(template.replace(/\{line\}/, (parseInt(e.line, 10) || 0) + (i - 1))
                    .replace(/\{class\}/, classname)
                    .replace(/\{content\}/, e.extract[i]));
            }
        };

        if (e.line) {
            errorline(e, 0, '');
            errorline(e, 1, 'line');
            errorline(e, 2, '');
            content += ' on line ' + e.line + ', column ' + (e.column + 1) + ':\n' +
                errors.join('\n');
        }
        if (e.stack && (e.extract || options.logLevel >= 4)) {
            content += '\nStack Trace\n' + e.stack;
        }
        less.logger.error(content);
    }

    function error(e, rootHref) {
        if (!options.errorReporting || options.errorReporting === 'html') {
            errorHTML(e, rootHref);
        } else if (options.errorReporting === 'console') {
            errorConsole(e, rootHref);
        } else if (typeof options.errorReporting === 'function') {
            options.errorReporting('add', e, rootHref);
        }
    }

    return {
        add: error,
        remove: removeError
    };
};

},{"./browser":3,"./utils":11}],6:[function(require,module,exports){
/* global window, XMLHttpRequest */

module.exports = function(options, logger) {

    var AbstractFileManager = require('../less/environment/abstract-file-manager.js');

    var fileCache = {};

    // TODOS - move log somewhere. pathDiff and doing something similar in node. use pathDiff in the other browser file for the initial load
    var FileManager = function() {
    };

    FileManager.prototype = new AbstractFileManager();

    FileManager.prototype.alwaysMakePathsAbsolute = function alwaysMakePathsAbsolute() {
        return true;
    };
    FileManager.prototype.join = function join(basePath, laterPath) {
        if (!basePath) {
            return laterPath;
        }
        return this.extractUrlParts(laterPath, basePath).path;
    };
    FileManager.prototype.doXHR = function doXHR(url, type, callback, errback) {

        var xhr = new XMLHttpRequest();
        var async = options.isFileProtocol ? options.fileAsync : true;

        if (typeof xhr.overrideMimeType === 'function') {
            xhr.overrideMimeType('text/css');
        }
        logger.debug('XHR: Getting \'' + url + '\'');
        xhr.open('GET', url, async);
        xhr.setRequestHeader('Accept', type || 'text/x-less, text/css; q=0.9, */*; q=0.5');
        xhr.send(null);

        function handleResponse(xhr, callback, errback) {
            if (xhr.status >= 200 && xhr.status < 300) {
                callback(xhr.responseText,
                    xhr.getResponseHeader('Last-Modified'));
            } else if (typeof errback === 'function') {
                errback(xhr.status, url);
            }
        }

        if (options.isFileProtocol && !options.fileAsync) {
            if (xhr.status === 0 || (xhr.status >= 200 && xhr.status < 300)) {
                callback(xhr.responseText);
            } else {
                errback(xhr.status, url);
            }
        } else if (async) {
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    handleResponse(xhr, callback, errback);
                }
            };
        } else {
            handleResponse(xhr, callback, errback);
        }
    };
    FileManager.prototype.supports = function(filename, currentDirectory, options, environment) {
        return true;
    };

    FileManager.prototype.clearFileCache = function() {
        fileCache = {};
    };

    FileManager.prototype.loadFile = function loadFile(filename, currentDirectory, options, environment) {
        // TODO: Add prefix support like less-node?
        // What about multiple paths?

        if (currentDirectory && !this.isPathAbsolute(filename)) {
            filename = currentDirectory + filename;
        }

        filename = options.ext ? this.tryAppendExtension(filename, options.ext) : filename;

        options = options || {};

        // sheet may be set to the stylesheet for the initial load or a collection of properties including
        // some context variables for imports
        var hrefParts = this.extractUrlParts(filename, window.location.href);
        var href      = hrefParts.url;
        var self      = this;
        
        return new Promise(function(resolve, reject) {
            if (options.useFileCache && fileCache[href]) {
                try {
                    var lessText = fileCache[href];
                    return resolve({ contents: lessText, filename: href, webInfo: { lastModified: new Date() }});
                } catch (e) {
                    return reject({ filename: href, message: 'Error loading file ' + href + ' error was ' + e.message });
                }
            }

            self.doXHR(href, options.mime, function doXHRCallback(data, lastModified) {
                // per file cache
                fileCache[href] = data;

                // Use remote copy (re-parse)
                resolve({ contents: data, filename: href, webInfo: { lastModified: lastModified }});
            }, function doXHRError(status, url) {
                reject({ type: 'File', message: '\'' + url + '\' wasn\'t found (' + status + ')', href: href });
            });
        });
    };

    return FileManager;
};

},{"../less/environment/abstract-file-manager.js":18}],7:[function(require,module,exports){
module.exports = function() {

    var functionRegistry = require('./../less/functions/function-registry');

    function imageSize() {
        throw {
            type: 'Runtime',
            message: 'Image size functions are not supported in browser version of less'
        };
    }

    var imageFunctions = {
        'image-size': function(filePathNode) {
            imageSize(this, filePathNode);
            return -1;
        },
        'image-width': function(filePathNode) {
            imageSize(this, filePathNode);
            return -1;
        },
        'image-height': function(filePathNode) {
            imageSize(this, filePathNode);
            return -1;
        }
    };

    functionRegistry.addMultiple(imageFunctions);
};

},{"./../less/functions/function-registry":27}],8:[function(require,module,exports){
//
// index.js
// Should expose the additional browser functions on to the less object
//
var addDataAttr = require('./utils').addDataAttr,
    browser = require('./browser');

module.exports = function(window, options) {
    var document = window.document;
    var less = require('../less')();
    
    less.options = options;
    var environment = less.environment,
        FileManager = require('./file-manager')(options, less.logger),
        fileManager = new FileManager();
    environment.addFileManager(fileManager);
    less.FileManager = FileManager;
    less.PluginLoader = require('./plugin-loader');

    require('./log-listener')(less, options);
    var errors = require('./error-reporting')(window, less, options);
    var cache = less.cache = options.cache || require('./cache')(window, options, less.logger);
    require('./image-size')(less.environment);

    // Setup user functions - Deprecate?
    if (options.functions) {
        less.functions.functionRegistry.addMultiple(options.functions);
    }

    var typePattern = /^text\/(x-)?less$/;

    function clone(obj) {
        var cloned = {};
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                cloned[prop] = obj[prop];
            }
        }
        return cloned;
    }

    // only really needed for phantom
    function bind(func, thisArg) {
        var curryArgs = Array.prototype.slice.call(arguments, 2);
        return function() {
            var args = curryArgs.concat(Array.prototype.slice.call(arguments, 0));
            return func.apply(thisArg, args);
        };
    }

    function loadStyles(modifyVars) {
        var styles = document.getElementsByTagName('style'),
            style;

        for (var i = 0; i < styles.length; i++) {
            style = styles[i];
            if (style.type.match(typePattern)) {
                var instanceOptions = clone(options);
                instanceOptions.modifyVars = modifyVars;
                var lessText = style.innerHTML || '';
                instanceOptions.filename = document.location.href.replace(/#.*$/, '');

                /* jshint loopfunc:true */
                // use closure to store current style
                less.render(lessText, instanceOptions,
                        bind(function(style, e, result) {
                            if (e) {
                                errors.add(e, 'inline');
                            } else {
                                style.type = 'text/css';
                                if (style.styleSheet) {
                                    style.styleSheet.cssText = result.css;
                                } else {
                                    style.innerHTML = result.css;
                                }
                            }
                        }, null, style));
            }
        }
    }

    function loadStyleSheet(sheet, callback, reload, remaining, modifyVars) {

        var instanceOptions = clone(options);
        addDataAttr(instanceOptions, sheet);
        instanceOptions.mime = sheet.type;

        if (modifyVars) {
            instanceOptions.modifyVars = modifyVars;
        }

        function loadInitialFileCallback(loadedFile) {

            var data = loadedFile.contents,
                path = loadedFile.filename,
                webInfo = loadedFile.webInfo;

            var newFileInfo = {
                currentDirectory: fileManager.getPath(path),
                filename: path,
                rootFilename: path,
                rewriteUrls: instanceOptions.rewriteUrls
            };

            newFileInfo.entryPath = newFileInfo.currentDirectory;
            newFileInfo.rootpath = instanceOptions.rootpath || newFileInfo.currentDirectory;

            if (webInfo) {
                webInfo.remaining = remaining;

                var css = cache.getCSS(path, webInfo, instanceOptions.modifyVars);
                if (!reload && css) {
                    webInfo.local = true;
                    callback(null, css, data, sheet, webInfo, path);
                    return;
                }

            }

            // TODO add tests around how this behaves when reloading
            errors.remove(path);

            instanceOptions.rootFileInfo = newFileInfo;
            less.render(data, instanceOptions, function(e, result) {
                if (e) {
                    e.href = path;
                    callback(e);
                } else {
                    cache.setCSS(sheet.href, webInfo.lastModified, instanceOptions.modifyVars, result.css);
                    callback(null, result.css, data, sheet, webInfo, path);
                }
            });
        }

        fileManager.loadFile(sheet.href, null, instanceOptions, environment)
            .then(function(loadedFile) {
                loadInitialFileCallback(loadedFile);
            }).catch(function(err) {
                console.log(err);
                callback(err);
            });

    }

    function loadStyleSheets(callback, reload, modifyVars) {
        for (var i = 0; i < less.sheets.length; i++) {
            loadStyleSheet(less.sheets[i], callback, reload, less.sheets.length - (i + 1), modifyVars);
        }
    }

    function initRunningMode() {
        if (less.env === 'development') {
            less.watchTimer = setInterval(function () {
                if (less.watchMode) {
                    fileManager.clearFileCache();
                    loadStyleSheets(function (e, css, _, sheet, webInfo) {
                        if (e) {
                            errors.add(e, e.href || sheet.href);
                        } else if (css) {
                            browser.createCSS(window.document, css, sheet);
                        }
                    });
                }
            }, options.poll);
        }
    }

    //
    // Watch mode
    //
    less.watch   = function () {
        if (!less.watchMode ) {
            less.env = 'development';
            initRunningMode();
        }
        this.watchMode = true;
        return true;
    };

    less.unwatch = function () {clearInterval(less.watchTimer); this.watchMode = false; return false; };

    //
    // Synchronously get all <link> tags with the 'rel' attribute set to
    // "stylesheet/less".
    //
    less.registerStylesheetsImmediately = function() {
        var links = document.getElementsByTagName('link');
        less.sheets = [];

        for (var i = 0; i < links.length; i++) {
            if (links[i].rel === 'stylesheet/less' || (links[i].rel.match(/stylesheet/) &&
                (links[i].type.match(typePattern)))) {
                less.sheets.push(links[i]);
            }
        }
    };

    //
    // Asynchronously get all <link> tags with the 'rel' attribute set to
    // "stylesheet/less", returning a Promise.
    //
    less.registerStylesheets = function() {
        return new Promise(function(resolve, reject) {
            less.registerStylesheetsImmediately();
            resolve();
        });
    };

    //
    // With this function, it's possible to alter variables and re-render
    // CSS without reloading less-files
    //
    less.modifyVars = function(record) {
        return less.refresh(true, record, false);
    };

    less.refresh = function (reload, modifyVars, clearFileCache) {
        if ((reload || clearFileCache) && clearFileCache !== false) {
            fileManager.clearFileCache();
        }
        return new Promise(function (resolve, reject) {
            var startTime, endTime, totalMilliseconds, remainingSheets;
            startTime = endTime = new Date();

            // Set counter for remaining unprocessed sheets
            remainingSheets = less.sheets.length;

            if (remainingSheets === 0) {

                endTime = new Date();
                totalMilliseconds = endTime - startTime;
                less.logger.info('Less has finished and no sheets were loaded.');
                resolve({
                    startTime: startTime,
                    endTime: endTime,
                    totalMilliseconds: totalMilliseconds,
                    sheets: less.sheets.length
                });

            } else {
                // Relies on less.sheets array, callback seems to be guaranteed to be called for every element of the array
                loadStyleSheets(function (e, css, _, sheet, webInfo) {
                    if (e) {
                        errors.add(e, e.href || sheet.href);
                        reject(e);
                        return;
                    }
                    if (webInfo.local) {
                        less.logger.info('Loading ' + sheet.href + ' from cache.');
                    } else {
                        less.logger.info('Rendered ' + sheet.href + ' successfully.');
                    }
                    browser.createCSS(window.document, css, sheet);
                    less.logger.info('CSS for ' + sheet.href + ' generated in ' + (new Date() - endTime) + 'ms');

                    // Count completed sheet
                    remainingSheets--;

                    // Check if the last remaining sheet was processed and then call the promise
                    if (remainingSheets === 0) {
                        totalMilliseconds = new Date() - startTime;
                        less.logger.info('Less has finished. CSS generated in ' + totalMilliseconds + 'ms');
                        resolve({
                            startTime: startTime,
                            endTime: endTime,
                            totalMilliseconds: totalMilliseconds,
                            sheets: less.sheets.length
                        });
                    }
                    endTime = new Date();
                }, reload, modifyVars);
            }

            loadStyles(modifyVars);
        });
    };

    less.refreshStyles = loadStyles;
    return less;
};

},{"../less":37,"./browser":3,"./cache":4,"./error-reporting":5,"./file-manager":6,"./image-size":7,"./log-listener":9,"./plugin-loader":10,"./utils":11}],9:[function(require,module,exports){
module.exports = function(less, options) {

    var logLevel_debug = 4,
        logLevel_info = 3,
        logLevel_warn = 2,
        logLevel_error = 1;

    // The amount of logging in the javascript console.
    // 3 - Debug, information and errors
    // 2 - Information and errors
    // 1 - Errors
    // 0 - None
    // Defaults to 2
    options.logLevel = typeof options.logLevel !== 'undefined' ? options.logLevel : (options.env === 'development' ?  logLevel_info : logLevel_error);

    if (!options.loggers) {
        options.loggers = [{
            debug: function(msg) {
                if (options.logLevel >= logLevel_debug) {
                    console.log(msg);
                }
            },
            info: function(msg) {
                if (options.logLevel >= logLevel_info) {
                    console.log(msg);
                }
            },
            warn: function(msg) {
                if (options.logLevel >= logLevel_warn) {
                    console.warn(msg);
                }
            },
            error: function(msg) {
                if (options.logLevel >= logLevel_error) {
                    console.error(msg);
                }
            }
        }];
    }
    for (var i = 0; i < options.loggers.length; i++) {
        less.logger.addListener(options.loggers[i]);
    }
};

},{}],10:[function(require,module,exports){
// TODO: Add tests for browser @plugin
/* global window */

var AbstractPluginLoader = require('../less/environment/abstract-plugin-loader.js');

/**
 * Browser Plugin Loader
 */
var PluginLoader = function(less) {
    this.less = less;
    // Should we shim this.require for browser? Probably not?
};

PluginLoader.prototype = new AbstractPluginLoader();

PluginLoader.prototype.loadPlugin = function(filename, basePath, context, environment, fileManager) {
    return new Promise(function(fulfill, reject) {
        fileManager.loadFile(filename, basePath, context, environment)
            .then(fulfill).catch(reject);
    });
};

module.exports = PluginLoader;


},{"../less/environment/abstract-plugin-loader.js":19}],11:[function(require,module,exports){
module.exports = {
    extractId: function(href) {
        return href.replace(/^[a-z-]+:\/+?[^\/]+/, '')  // Remove protocol & domain
            .replace(/[\?\&]livereload=\w+/, '')        // Remove LiveReload cachebuster
            .replace(/^\//, '')                         // Remove root /
            .replace(/\.[a-zA-Z]+$/, '')                // Remove simple extension
            .replace(/[^\.\w-]+/g, '-')                 // Replace illegal characters
            .replace(/\./g, ':');                       // Replace dots with colons(for valid id)
    },
    addDataAttr: function(options, tag) {
        for (var opt in tag.dataset) {
            if (tag.dataset.hasOwnProperty(opt)) {
                if (opt === 'env' || opt === 'dumpLineNumbers' || opt === 'rootpath' || opt === 'errorReporting') {
                    options[opt] = tag.dataset[opt];
                } else {
                    try {
                        options[opt] = JSON.parse(tag.dataset[opt]);
                    }
                    catch (_) {}
                }
            }
        }
    }
};

},{}],12:[function(require,module,exports){
module.exports = {
    Math: {
        ALWAYS: 0,
        PARENS_DIVISION: 1,
        PARENS: 2,
        STRICT_LEGACY: 3
    },
    RewriteUrls: {
        OFF: 0,
        LOCAL: 1,
        ALL: 2
    }
};
},{}],13:[function(require,module,exports){
var contexts = {};
module.exports = contexts;
var Constants = require('./constants');

var copyFromOriginal = function copyFromOriginal(original, destination, propertiesToCopy) {
    if (!original) { return; }

    for (var i = 0; i < propertiesToCopy.length; i++) {
        if (original.hasOwnProperty(propertiesToCopy[i])) {
            destination[propertiesToCopy[i]] = original[propertiesToCopy[i]];
        }
    }
};

/*
 parse is used whilst parsing
 */
var parseCopyProperties = [
    // options
    'paths',            // option - unmodified - paths to search for imports on
    'rewriteUrls',      // option - whether to adjust URL's to be relative
    'rootpath',         // option - rootpath to append to URL's
    'strictImports',    // option -
    'insecure',         // option - whether to allow imports from insecure ssl hosts
    'dumpLineNumbers',  // option - whether to dump line numbers
    'compress',         // option - whether to compress
    'syncImport',       // option - whether to import synchronously
    'chunkInput',       // option - whether to chunk input. more performant but causes parse issues.
    'mime',             // browser only - mime type for sheet import
    'useFileCache',     // browser only - whether to use the per file session cache
    // context
    'processImports',   // option & context - whether to process imports. if false then imports will not be imported.
                        // Used by the import manager to stop multiple import visitors being created.
    'pluginManager'     // Used as the plugin manager for the session
];

contexts.Parse = function(options) {
    copyFromOriginal(options, this, parseCopyProperties);

    if (typeof this.paths === 'string') { this.paths = [this.paths]; }
};

var evalCopyProperties = [
    'paths',             // additional include paths
    'compress',          // whether to compress
    'ieCompat',          // whether to enforce IE compatibility (IE8 data-uri)
    'math',              // whether math has to be within parenthesis
    'strictUnits',       // whether units need to evaluate correctly
    'sourceMap',         // whether to output a source map
    'importMultiple',    // whether we are currently importing multiple copies
    'urlArgs',           // whether to add args into url tokens
    'javascriptEnabled', // option - whether Inline JavaScript is enabled. if undefined, defaults to false
    'pluginManager',     // Used as the plugin manager for the session
    'importantScope',    // used to bubble up !important statements
    'rewriteUrls'        // option - whether to adjust URL's to be relative
];

contexts.Eval = function(options, frames) {
    copyFromOriginal(options, this, evalCopyProperties);

    if (typeof this.paths === 'string') { this.paths = [this.paths]; }

    this.frames = frames || [];
    this.importantScope = this.importantScope || [];
};

contexts.Eval.prototype.enterCalc = function () {
    if (!this.calcStack) {
        this.calcStack = [];
    }
    this.calcStack.push(true);
    this.inCalc = true;
};

contexts.Eval.prototype.exitCalc = function () {
    this.calcStack.pop();
    if (!this.calcStack) {
        this.inCalc = false;
    }
};

contexts.Eval.prototype.inParenthesis = function () {
    if (!this.parensStack) {
        this.parensStack = [];
    }
    this.parensStack.push(true);
};

contexts.Eval.prototype.outOfParenthesis = function () {
    this.parensStack.pop();
};

contexts.Eval.prototype.inCalc = false;
contexts.Eval.prototype.mathOn = true;
contexts.Eval.prototype.isMathOn = function (op) {
    if (!this.mathOn) {
        return false;
    }
    if (op === '/' && this.math !== Constants.Math.ALWAYS && (!this.parensStack || !this.parensStack.length)) {
        return false;
    }
    if (this.math > Constants.Math.PARENS_DIVISION) {
        return this.parensStack && this.parensStack.length;
    }
    return true;
};

contexts.Eval.prototype.pathRequiresRewrite = function (path) {
    var isRelative = this.rewriteUrls === Constants.RewriteUrls.LOCAL ? isPathLocalRelative : isPathRelative;

    return isRelative(path);
};

contexts.Eval.prototype.rewritePath = function (path, rootpath) {
    var newPath;

    rootpath = rootpath || '';
    newPath = this.normalizePath(rootpath + path);

    // If a path was explicit relative and the rootpath was not an absolute path
    // we must ensure that the new path is also explicit relative.
    if (isPathLocalRelative(path) &&
        isPathRelative(rootpath) &&
        isPathLocalRelative(newPath) === false) {
        newPath = './' + newPath;
    }

    return newPath;
};

contexts.Eval.prototype.normalizePath = function (path) {
    var
        segments = path.split('/').reverse(),
        segment;

    path = [];
    while (segments.length !== 0) {
        segment = segments.pop();
        switch ( segment ) {
            case '.':
                break;
            case '..':
                if ((path.length === 0) || (path[path.length - 1] === '..')) {
                    path.push( segment );
                } else {
                    path.pop();
                }
                break;
            default:
                path.push(segment);
                break;
        }
    }

    return path.join('/');
};

function isPathRelative(path) {
    return !/^(?:[a-z-]+:|\/|#)/i.test(path);
}

function isPathLocalRelative(path) {
    return path.charAt(0) === '.';
}

// todo - do the same for the toCSS ?

},{"./constants":12}],14:[function(require,module,exports){
module.exports = {
    'aliceblue':'#f0f8ff',
    'antiquewhite':'#faebd7',
    'aqua':'#00ffff',
    'aquamarine':'#7fffd4',
    'azure':'#f0ffff',
    'beige':'#f5f5dc',
    'bisque':'#ffe4c4',
    'black':'#000000',
    'blanchedalmond':'#ffebcd',
    'blue':'#0000ff',
    'blueviolet':'#8a2be2',
    'brown':'#a52a2a',
    'burlywood':'#deb887',
    'cadetblue':'#5f9ea0',
    'chartreuse':'#7fff00',
    'chocolate':'#d2691e',
    'coral':'#ff7f50',
    'cornflowerblue':'#6495ed',
    'cornsilk':'#fff8dc',
    'crimson':'#dc143c',
    'cyan':'#00ffff',
    'darkblue':'#00008b',
    'darkcyan':'#008b8b',
    'darkgoldenrod':'#b8860b',
    'darkgray':'#a9a9a9',
    'darkgrey':'#a9a9a9',
    'darkgreen':'#006400',
    'darkkhaki':'#bdb76b',
    'darkmagenta':'#8b008b',
    'darkolivegreen':'#556b2f',
    'darkorange':'#ff8c00',
    'darkorchid':'#9932cc',
    'darkred':'#8b0000',
    'darksalmon':'#e9967a',
    'darkseagreen':'#8fbc8f',
    'darkslateblue':'#483d8b',
    'darkslategray':'#2f4f4f',
    'darkslategrey':'#2f4f4f',
    'darkturquoise':'#00ced1',
    'darkviolet':'#9400d3',
    'deeppink':'#ff1493',
    'deepskyblue':'#00bfff',
    'dimgray':'#696969',
    'dimgrey':'#696969',
    'dodgerblue':'#1e90ff',
    'firebrick':'#b22222',
    'floralwhite':'#fffaf0',
    'forestgreen':'#228b22',
    'fuchsia':'#ff00ff',
    'gainsboro':'#dcdcdc',
    'ghostwhite':'#f8f8ff',
    'gold':'#ffd700',
    'goldenrod':'#daa520',
    'gray':'#808080',
    'grey':'#808080',
    'green':'#008000',
    'greenyellow':'#adff2f',
    'honeydew':'#f0fff0',
    'hotpink':'#ff69b4',
    'indianred':'#cd5c5c',
    'indigo':'#4b0082',
    'ivory':'#fffff0',
    'khaki':'#f0e68c',
    'lavender':'#e6e6fa',
    'lavenderblush':'#fff0f5',
    'lawngreen':'#7cfc00',
    'lemonchiffon':'#fffacd',
    'lightblue':'#add8e6',
    'lightcoral':'#f08080',
    'lightcyan':'#e0ffff',
    'lightgoldenrodyellow':'#fafad2',
    'lightgray':'#d3d3d3',
    'lightgrey':'#d3d3d3',
    'lightgreen':'#90ee90',
    'lightpink':'#ffb6c1',
    'lightsalmon':'#ffa07a',
    'lightseagreen':'#20b2aa',
    'lightskyblue':'#87cefa',
    'lightslategray':'#778899',
    'lightslategrey':'#778899',
    'lightsteelblue':'#b0c4de',
    'lightyellow':'#ffffe0',
    'lime':'#00ff00',
    'limegreen':'#32cd32',
    'linen':'#faf0e6',
    'magenta':'#ff00ff',
    'maroon':'#800000',
    'mediumaquamarine':'#66cdaa',
    'mediumblue':'#0000cd',
    'mediumorchid':'#ba55d3',
    'mediumpurple':'#9370d8',
    'mediumseagreen':'#3cb371',
    'mediumslateblue':'#7b68ee',
    'mediumspringgreen':'#00fa9a',
    'mediumturquoise':'#48d1cc',
    'mediumvioletred':'#c71585',
    'midnightblue':'#191970',
    'mintcream':'#f5fffa',
    'mistyrose':'#ffe4e1',
    'moccasin':'#ffe4b5',
    'navajowhite':'#ffdead',
    'navy':'#000080',
    'oldlace':'#fdf5e6',
    'olive':'#808000',
    'olivedrab':'#6b8e23',
    'orange':'#ffa500',
    'orangered':'#ff4500',
    'orchid':'#da70d6',
    'palegoldenrod':'#eee8aa',
    'palegreen':'#98fb98',
    'paleturquoise':'#afeeee',
    'palevioletred':'#d87093',
    'papayawhip':'#ffefd5',
    'peachpuff':'#ffdab9',
    'peru':'#cd853f',
    'pink':'#ffc0cb',
    'plum':'#dda0dd',
    'powderblue':'#b0e0e6',
    'purple':'#800080',
    'rebeccapurple':'#663399',
    'red':'#ff0000',
    'rosybrown':'#bc8f8f',
    'royalblue':'#4169e1',
    'saddlebrown':'#8b4513',
    'salmon':'#fa8072',
    'sandybrown':'#f4a460',
    'seagreen':'#2e8b57',
    'seashell':'#fff5ee',
    'sienna':'#a0522d',
    'silver':'#c0c0c0',
    'skyblue':'#87ceeb',
    'slateblue':'#6a5acd',
    'slategray':'#708090',
    'slategrey':'#708090',
    'snow':'#fffafa',
    'springgreen':'#00ff7f',
    'steelblue':'#4682b4',
    'tan':'#d2b48c',
    'teal':'#008080',
    'thistle':'#d8bfd8',
    'tomato':'#ff6347',
    'turquoise':'#40e0d0',
    'violet':'#ee82ee',
    'wheat':'#f5deb3',
    'white':'#ffffff',
    'whitesmoke':'#f5f5f5',
    'yellow':'#ffff00',
    'yellowgreen':'#9acd32'
};
},{}],15:[function(require,module,exports){
module.exports = {
    colors: require('./colors'),
    unitConversions: require('./unit-conversions')
};

},{"./colors":14,"./unit-conversions":16}],16:[function(require,module,exports){
module.exports = {
    length: {
        'm': 1,
        'cm': 0.01,
        'mm': 0.001,
        'in': 0.0254,
        'px': 0.0254 / 96,
        'pt': 0.0254 / 72,
        'pc': 0.0254 / 72 * 12
    },
    duration: {
        's': 1,
        'ms': 0.001
    },
    angle: {
        'rad': 1 / (2 * Math.PI),
        'deg': 1 / 360,
        'grad': 1 / 400,
        'turn': 1
    }
};
},{}],17:[function(require,module,exports){
// Export a new default each time
module.exports = function() {
    return {
        /* Inline Javascript - @plugin still allowed */
        javascriptEnabled: false,

        /* Outputs a makefile import dependency list to stdout. */
        depends: false,

        /* (DEPRECATED) Compress using less built-in compression. 
         * This does an okay job but does not utilise all the tricks of 
         * dedicated css compression. */
        compress: false,

        /* Runs the less parser and just reports errors without any output. */
        lint: false,

        /* Sets available include paths.
         * If the file in an @import rule does not exist at that exact location, 
         * less will look for it at the location(s) passed to this option. 
         * You might use this for instance to specify a path to a library which 
         * you want to be referenced simply and relatively in the less files. */
        paths: [],

        /* color output in the terminal */
        color: true,

        /* The strictImports controls whether the compiler will allow an @import inside of either 
         * @media blocks or (a later addition) other selector blocks.
         * See: https://github.com/less/less.js/issues/656 */
        strictImports: false,

        /* Allow Imports from Insecure HTTPS Hosts */
        insecure: false,

        /* Allows you to add a path to every generated import and url in your css. 
         * This does not affect less import statements that are processed, just ones 
         * that are left in the output css. */
        rootpath: '',

        /* By default URLs are kept as-is, so if you import a file in a sub-directory 
         * that references an image, exactly the same URL will be output in the css. 
         * This option allows you to re-write URL's in imported files so that the 
         * URL is always relative to the base imported file */
        rewriteUrls: false,

        /* Compatibility with IE8. Used for limiting data-uri length */
        ieCompat: false,  // true until 3.0

        /* How to process math 
         *   0 always           - eagerly try to solve all operations
         *   1 parens-division  - require parens for division "/"
         *   2 parens | strict  - require parens for all operations
         *   3 strict-legacy    - legacy strict behavior (super-strict)
         */
        math: 0,

        /* Without this option, less attempts to guess at the output unit when it does maths. */
        strictUnits: false,

        /* Effectively the declaration is put at the top of your base Less file, 
         * meaning it can be used but it also can be overridden if this variable 
         * is defined in the file. */
        globalVars: null,

        /* As opposed to the global variable option, this puts the declaration at the
         * end of your base file, meaning it will override anything defined in your Less file. */
        modifyVars: null,

        /* This option allows you to specify a argument to go on to every URL.  */
        urlArgs: ''
    }
}
},{}],18:[function(require,module,exports){
var abstractFileManager = function() {
};

abstractFileManager.prototype.getPath = function (filename) {
    var j = filename.lastIndexOf('?');
    if (j > 0) {
        filename = filename.slice(0, j);
    }
    j = filename.lastIndexOf('/');
    if (j < 0) {
        j = filename.lastIndexOf('\\');
    }
    if (j < 0) {
        return '';
    }
    return filename.slice(0, j + 1);
};

abstractFileManager.prototype.tryAppendExtension = function(path, ext) {
    return /(\.[a-z]*$)|([\?;].*)$/.test(path) ? path : path + ext;
};

abstractFileManager.prototype.tryAppendLessExtension = function(path) {
    return this.tryAppendExtension(path, '.less');
};

abstractFileManager.prototype.supportsSync = function() {
    return false;
};

abstractFileManager.prototype.alwaysMakePathsAbsolute = function() {
    return false;
};

abstractFileManager.prototype.isPathAbsolute = function(filename) {
    return (/^(?:[a-z-]+:|\/|\\|#)/i).test(filename);
};
// TODO: pull out / replace?
abstractFileManager.prototype.join = function(basePath, laterPath) {
    if (!basePath) {
        return laterPath;
    }
    return basePath + laterPath;
};

abstractFileManager.prototype.pathDiff = function pathDiff(url, baseUrl) {
    // diff between two paths to create a relative path

    var urlParts = this.extractUrlParts(url),
        baseUrlParts = this.extractUrlParts(baseUrl),
        i, max, urlDirectories, baseUrlDirectories, diff = '';
    if (urlParts.hostPart !== baseUrlParts.hostPart) {
        return '';
    }
    max = Math.max(baseUrlParts.directories.length, urlParts.directories.length);
    for (i = 0; i < max; i++) {
        if (baseUrlParts.directories[i] !== urlParts.directories[i]) { break; }
    }
    baseUrlDirectories = baseUrlParts.directories.slice(i);
    urlDirectories = urlParts.directories.slice(i);
    for (i = 0; i < baseUrlDirectories.length - 1; i++) {
        diff += '../';
    }
    for (i = 0; i < urlDirectories.length - 1; i++) {
        diff += urlDirectories[i] + '/';
    }
    return diff;
};
// helper function, not part of API
abstractFileManager.prototype.extractUrlParts = function extractUrlParts(url, baseUrl) {
    // urlParts[1] = protocol://hostname/ OR /
    // urlParts[2] = / if path relative to host base
    // urlParts[3] = directories
    // urlParts[4] = filename
    // urlParts[5] = parameters

    var urlPartsRegex = /^((?:[a-z-]+:)?\/{2}(?:[^\/\?#]*\/)|([\/\\]))?((?:[^\/\\\?#]*[\/\\])*)([^\/\\\?#]*)([#\?].*)?$/i,
        urlParts = url.match(urlPartsRegex),
        returner = {}, rawDirectories = [], directories = [], i, baseUrlParts;

    if (!urlParts) {
        throw new Error('Could not parse sheet href - \'' + url + '\'');
    }

    // Stylesheets in IE don't always return the full path
    if (baseUrl && (!urlParts[1] || urlParts[2])) {
        baseUrlParts = baseUrl.match(urlPartsRegex);
        if (!baseUrlParts) {
            throw new Error('Could not parse page url - \'' + baseUrl + '\'');
        }
        urlParts[1] = urlParts[1] || baseUrlParts[1] || '';
        if (!urlParts[2]) {
            urlParts[3] = baseUrlParts[3] + urlParts[3];
        }
    }

    if (urlParts[3]) {
        rawDirectories = urlParts[3].replace(/\\/g, '/').split('/');

        // collapse '..' and skip '.'
        for (i = 0; i < rawDirectories.length; i++) {

            if (rawDirectories[i] === '..') {
                directories.pop();
            }
            else if (rawDirectories[i] !== '.') {
                directories.push(rawDirectories[i]);
            }
        
        }
    }

    returner.hostPart = urlParts[1];
    returner.directories = directories;
    returner.rawPath = (urlParts[1] || '') + rawDirectories.join('/');
    returner.path = (urlParts[1] || '') + directories.join('/');
    returner.filename = urlParts[4];
    returner.fileUrl = returner.path + (urlParts[4] || '');
    returner.url = returner.fileUrl + (urlParts[5] || '');
    return returner;
};

module.exports = abstractFileManager;

},{}],19:[function(require,module,exports){
var functionRegistry = require('../functions/function-registry'),
    LessError = require('../less-error');

var AbstractPluginLoader = function() {
    // Implemented by Node.js plugin loader
    this.require = function() {
        return null;
    }
};

AbstractPluginLoader.prototype.evalPlugin = function(contents, context, imports, pluginOptions, fileInfo) {

    var loader,
        registry,
        pluginObj,
        localModule,
        pluginManager,
        filename,
        result;

    pluginManager = context.pluginManager;

    if (fileInfo) {
        if (typeof fileInfo === 'string') {
            filename = fileInfo;
        }
        else {
            filename = fileInfo.filename;
        }
    }
    var shortname = (new this.less.FileManager()).extractUrlParts(filename).filename;

    if (filename) {
        pluginObj = pluginManager.get(filename);

        if (pluginObj) {
            result = this.trySetOptions(pluginObj, filename, shortname, pluginOptions);
            if (result) {
                return result;
            }
            try {
                if (pluginObj.use) {
                    pluginObj.use.call(this.context, pluginObj);
                }
            }
            catch (e) {
                e.message = e.message || 'Error during @plugin call';
                return new LessError(e, imports, filename);
            }
            return pluginObj;
        }
    }
    localModule = {
        exports: {},
        pluginManager: pluginManager,
        fileInfo: fileInfo
    };
    registry = functionRegistry.create();

    var registerPlugin = function(obj) {
        pluginObj = obj;
    };

    try {
        loader = new Function('module', 'require', 'registerPlugin', 'functions', 'tree', 'less', 'fileInfo', contents);
        loader(localModule, this.require(filename), registerPlugin, registry, this.less.tree, this.less, fileInfo);
    }
    catch (e) {
        return new LessError(e, imports, filename);
    }

    if (!pluginObj) {
        pluginObj = localModule.exports;
    }
    pluginObj = this.validatePlugin(pluginObj, filename, shortname);

    if (pluginObj instanceof LessError) {
        return pluginObj;
    }

    if (pluginObj) {
        pluginObj.imports = imports;
        pluginObj.filename = filename;

        // For < 3.x (or unspecified minVersion) - setOptions() before install()
        if (!pluginObj.minVersion || this.compareVersion('3.0.0', pluginObj.minVersion) < 0) {
            result = this.trySetOptions(pluginObj, filename, shortname, pluginOptions);

            if (result) {
                return result;
            }
        }

        // Run on first load
        pluginManager.addPlugin(pluginObj, fileInfo.filename, registry);
        pluginObj.functions = registry.getLocalFunctions();

        // Need to call setOptions again because the pluginObj might have functions
        result = this.trySetOptions(pluginObj, filename, shortname, pluginOptions);
        if (result) {
            return result;
        }

        // Run every @plugin call
        try {
            if (pluginObj.use) {
                pluginObj.use.call(this.context, pluginObj);
            }
        }
        catch (e) {
            e.message = e.message || 'Error during @plugin call';
            return new LessError(e, imports, filename);
        }

    }
    else {
        return new LessError({ message: 'Not a valid plugin' }, imports, filename);
    }

    return pluginObj;

};

AbstractPluginLoader.prototype.trySetOptions = function(plugin, filename, name, options) {
    if (options && !plugin.setOptions) {
        return new LessError({
            message: 'Options have been provided but the plugin ' +
                name + ' does not support any options.'
        });
    }
    try {
        plugin.setOptions && plugin.setOptions(options);
    }
    catch (e) {
        return new LessError(e);
    }
};

AbstractPluginLoader.prototype.validatePlugin = function(plugin, filename, name) {
    if (plugin) {
        // support plugins being a function
        // so that the plugin can be more usable programmatically
        if (typeof plugin === 'function') {
            plugin = new plugin();
        }

        if (plugin.minVersion) {
            if (this.compareVersion(plugin.minVersion, this.less.version) < 0) {
                return new LessError({
                    message: 'Plugin ' + name + ' requires version ' +
                        this.versionToString(plugin.minVersion)
                });
            }
        }
        return plugin;
    }
    return null;
};

AbstractPluginLoader.prototype.compareVersion = function(aVersion, bVersion) {
    if (typeof aVersion === 'string') {
        aVersion = aVersion.match(/^(\d+)\.?(\d+)?\.?(\d+)?/);
        aVersion.shift();
    }
    for (var i = 0; i < aVersion.length; i++) {
        if (aVersion[i] !== bVersion[i]) {
            return parseInt(aVersion[i]) > parseInt(bVersion[i]) ? -1 : 1;
        }
    }
    return 0;
};
AbstractPluginLoader.prototype.versionToString = function(version) {
    var versionString = '';
    for (var i = 0; i < version.length; i++) {
        versionString += (versionString ? '.' : '') + version[i];
    }
    return versionString;
};
AbstractPluginLoader.prototype.printUsage = function(plugins) {
    for (var i = 0; i < plugins.length; i++) {
        var plugin = plugins[i];
        if (plugin.printUsage) {
            plugin.printUsage();
        }
    }
};

module.exports = AbstractPluginLoader;


},{"../functions/function-registry":27,"../less-error":38}],20:[function(require,module,exports){
/**
 * @todo Document why this abstraction exists, and the relationship between
 *       environment, file managers, and plugin manager
 */

var logger = require('../logger');
var environment = function(externalEnvironment, fileManagers) {
    this.fileManagers = fileManagers || [];
    externalEnvironment = externalEnvironment || {};

    var optionalFunctions = ['encodeBase64', 'mimeLookup', 'charsetLookup', 'getSourceMapGenerator'],
        requiredFunctions = [],
        functions = requiredFunctions.concat(optionalFunctions);

    for (var i = 0; i < functions.length; i++) {
        var propName = functions[i],
            environmentFunc = externalEnvironment[propName];
        if (environmentFunc) {
            this[propName] = environmentFunc.bind(externalEnvironment);
        } else if (i < requiredFunctions.length) {
            this.warn('missing required function in environment - ' + propName);
        }
    }
};

environment.prototype.getFileManager = function (filename, currentDirectory, options, environment, isSync) {

    if (!filename) {
        logger.warn('getFileManager called with no filename.. Please report this issue. continuing.');
    }
    if (currentDirectory == null) {
        logger.warn('getFileManager called with null directory.. Please report this issue. continuing.');
    }

    var fileManagers = this.fileManagers;
    if (options.pluginManager) {
        fileManagers = [].concat(fileManagers).concat(options.pluginManager.getFileManagers());
    }
    for (var i = fileManagers.length - 1; i >= 0 ; i--) {
        var fileManager = fileManagers[i];
        if (fileManager[isSync ? 'supportsSync' : 'supports'](filename, currentDirectory, options, environment)) {
            return fileManager;
        }
    }
    return null;
};

environment.prototype.addFileManager = function (fileManager) {
    this.fileManagers.push(fileManager);
};

environment.prototype.clearFileManagers = function () {
    this.fileManagers = [];
};

module.exports = environment;

},{"../logger":39}],21:[function(require,module,exports){

var functionRegistry = require('./function-registry'),
    Anonymous = require('../tree/anonymous'),
    Keyword = require('../tree/keyword');

functionRegistry.addMultiple({
    boolean: function(condition) {
        return condition ? Keyword.True : Keyword.False;
    },

    'if': function(condition, trueValue, falseValue) {
        return condition ? trueValue
            : (falseValue || new Anonymous);
    }
});

},{"../tree/anonymous":50,"../tree/keyword":70,"./function-registry":27}],22:[function(require,module,exports){
var Color = require('../tree/color'),
    functionRegistry = require('./function-registry');

// Color Blending
// ref: http://www.w3.org/TR/compositing-1

function colorBlend(mode, color1, color2) {
    var ab = color1.alpha, cb, // backdrop
        as = color2.alpha, cs, // source
        ar, cr, r = [];        // result

    ar = as + ab * (1 - as);
    for (var i = 0; i < 3; i++) {
        cb = color1.rgb[i] / 255;
        cs = color2.rgb[i] / 255;
        cr = mode(cb, cs);
        if (ar) {
            cr = (as * cs + ab * (cb -
                  as * (cb + cs - cr))) / ar;
        }
        r[i] = cr * 255;
    }

    return new Color(r, ar);
}

var colorBlendModeFunctions = {
    multiply: function(cb, cs) {
        return cb * cs;
    },
    screen: function(cb, cs) {
        return cb + cs - cb * cs;
    },
    overlay: function(cb, cs) {
        cb *= 2;
        return (cb <= 1) ?
            colorBlendModeFunctions.multiply(cb, cs) :
            colorBlendModeFunctions.screen(cb - 1, cs);
    },
    softlight: function(cb, cs) {
        var d = 1, e = cb;
        if (cs > 0.5) {
            e = 1;
            d = (cb > 0.25) ? Math.sqrt(cb)
                : ((16 * cb - 12) * cb + 4) * cb;
        }
        return cb - (1 - 2 * cs) * e * (d - cb);
    },
    hardlight: function(cb, cs) {
        return colorBlendModeFunctions.overlay(cs, cb);
    },
    difference: function(cb, cs) {
        return Math.abs(cb - cs);
    },
    exclusion: function(cb, cs) {
        return cb + cs - 2 * cb * cs;
    },

    // non-w3c functions:
    average: function(cb, cs) {
        return (cb + cs) / 2;
    },
    negation: function(cb, cs) {
        return 1 - Math.abs(cb + cs - 1);
    }
};

for (var f in colorBlendModeFunctions) {
    if (colorBlendModeFunctions.hasOwnProperty(f)) {
        colorBlend[f] = colorBlend.bind(null, colorBlendModeFunctions[f]);
    }
}

functionRegistry.addMultiple(colorBlend);

},{"../tree/color":55,"./function-registry":27}],23:[function(require,module,exports){
var Dimension = require('../tree/dimension'),
    Color = require('../tree/color'),
    Quoted = require('../tree/quoted'),
    Anonymous = require('../tree/anonymous'),
    functionRegistry = require('./function-registry'),
    colorFunctions;

function clamp(val) {
    return Math.min(1, Math.max(0, val));
}
function hsla(origColor, hsl) {
    var color = colorFunctions.hsla(hsl.h, hsl.s, hsl.l, hsl.a);
    if (color) {
        if (origColor.value && 
            /^(rgb|hsl)/.test(origColor.value)) {
            color.value = origColor.value;
        } else {
            color.value = 'rgb';
        }
        return color;
    }
}
function number(n) {
    if (n instanceof Dimension) {
        return parseFloat(n.unit.is('%') ? n.value / 100 : n.value);
    } else if (typeof n === 'number') {
        return n;
    } else {
        throw {
            type: 'Argument',
            message: 'color functions take numbers as parameters'
        };
    }
}
function scaled(n, size) {
    if (n instanceof Dimension && n.unit.is('%')) {
        return parseFloat(n.value * size / 100);
    } else {
        return number(n);
    }
}
colorFunctions = {
    rgb: function (r, g, b) {
        var color = colorFunctions.rgba(r, g, b, 1.0);
        if (color) {
            color.value = 'rgb';
            return color;
        }
    },
    rgba: function (r, g, b, a) {
        try {
            if (r instanceof Color) {
                if (g) {
                    a = number(g);
                } else {
                    a = r.alpha;
                }
                return new Color(r.rgb, a, 'rgba');
            }
            var rgb = [r, g, b].map(function (c) { return scaled(c, 255); });
            a = number(a);
            return new Color(rgb, a, 'rgba');
        }
        catch (e) {}
    },
    hsl: function (h, s, l) {
        var color = colorFunctions.hsla(h, s, l, 1.0);
        if (color) {
            color.value = 'hsl';
            return color;
        }
    },
    hsla: function (h, s, l, a) {
        try {
            if (h instanceof Color) {
                if (s) {
                    a = number(s);
                } else {
                    a = h.alpha;
                }
                return new Color(h.rgb, a, 'hsla');
            }

            var m1, m2;

            function hue(h) {
                h = h < 0 ? h + 1 : (h > 1 ? h - 1 : h);
                if (h * 6 < 1) {
                    return m1 + (m2 - m1) * h * 6;
                }
                else if (h * 2 < 1) {
                    return m2;
                }
                else if (h * 3 < 2) {
                    return m1 + (m2 - m1) * (2 / 3 - h) * 6;
                }
                else {
                    return m1;
                }
            }

            h = (number(h) % 360) / 360;
            s = clamp(number(s)); l = clamp(number(l)); a = clamp(number(a));

            m2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
            m1 = l * 2 - m2;

            var rgb = [
                hue(h + 1 / 3) * 255,
                hue(h)       * 255,
                hue(h - 1 / 3) * 255
            ];
            a = number(a);
            return new Color(rgb, a, 'hsla');
        }
        catch (e) {}
    },

    hsv: function(h, s, v) {
        return colorFunctions.hsva(h, s, v, 1.0);
    },

    hsva: function(h, s, v, a) {
        h = ((number(h) % 360) / 360) * 360;
        s = number(s); v = number(v); a = number(a);

        var i, f;
        i = Math.floor((h / 60) % 6);
        f = (h / 60) - i;

        var vs = [v,
            v * (1 - s),
            v * (1 - f * s),
            v * (1 - (1 - f) * s)];
        var perm = [[0, 3, 1],
            [2, 0, 1],
            [1, 0, 3],
            [1, 2, 0],
            [3, 1, 0],
            [0, 1, 2]];

        return colorFunctions.rgba(vs[perm[i][0]] * 255,
            vs[perm[i][1]] * 255,
            vs[perm[i][2]] * 255,
            a);
    },

    hue: function (color) {
        return new Dimension(color.toHSL().h);
    },
    saturation: function (color) {
        return new Dimension(color.toHSL().s * 100, '%');
    },
    lightness: function (color) {
        return new Dimension(color.toHSL().l * 100, '%');
    },
    hsvhue: function(color) {
        return new Dimension(color.toHSV().h);
    },
    hsvsaturation: function (color) {
        return new Dimension(color.toHSV().s * 100, '%');
    },
    hsvvalue: function (color) {
        return new Dimension(color.toHSV().v * 100, '%');
    },
    red: function (color) {
        return new Dimension(color.rgb[0]);
    },
    green: function (color) {
        return new Dimension(color.rgb[1]);
    },
    blue: function (color) {
        return new Dimension(color.rgb[2]);
    },
    alpha: function (color) {
        return new Dimension(color.toHSL().a);
    },
    luma: function (color) {
        return new Dimension(color.luma() * color.alpha * 100, '%');
    },
    luminance: function (color) {
        var luminance =
            (0.2126 * color.rgb[0] / 255) +
                (0.7152 * color.rgb[1] / 255) +
                (0.0722 * color.rgb[2] / 255);

        return new Dimension(luminance * color.alpha * 100, '%');
    },
    saturate: function (color, amount, method) {
        // filter: saturate(3.2);
        // should be kept as is, so check for color
        if (!color.rgb) {
            return null;
        }
        var hsl = color.toHSL();

        if (typeof method !== 'undefined' && method.value === 'relative') {
            hsl.s +=  hsl.s * amount.value / 100;
        }
        else {
            hsl.s += amount.value / 100;
        }
        hsl.s = clamp(hsl.s);
        return hsla(color, hsl);
    },
    desaturate: function (color, amount, method) {
        var hsl = color.toHSL();

        if (typeof method !== 'undefined' && method.value === 'relative') {
            hsl.s -=  hsl.s * amount.value / 100;
        }
        else {
            hsl.s -= amount.value / 100;
        }
        hsl.s = clamp(hsl.s);
        return hsla(color, hsl);
    },
    lighten: function (color, amount, method) {
        var hsl = color.toHSL();

        if (typeof method !== 'undefined' && method.value === 'relative') {
            hsl.l +=  hsl.l * amount.value / 100;
        }
        else {
            hsl.l += amount.value / 100;
        }
        hsl.l = clamp(hsl.l);
        return hsla(color, hsl);
    },
    darken: function (color, amount, method) {
        var hsl = color.toHSL();

        if (typeof method !== 'undefined' && method.value === 'relative') {
            hsl.l -=  hsl.l * amount.value / 100;
        }
        else {
            hsl.l -= amount.value / 100;
        }
        hsl.l = clamp(hsl.l);
        return hsla(color, hsl);
    },
    fadein: function (color, amount, method) {
        var hsl = color.toHSL();

        if (typeof method !== 'undefined' && method.value === 'relative') {
            hsl.a +=  hsl.a * amount.value / 100;
        }
        else {
            hsl.a += amount.value / 100;
        }
        hsl.a = clamp(hsl.a);
        return hsla(color, hsl);
    },
    fadeout: function (color, amount, method) {
        var hsl = color.toHSL();

        if (typeof method !== 'undefined' && method.value === 'relative') {
            hsl.a -=  hsl.a * amount.value / 100;
        }
        else {
            hsl.a -= amount.value / 100;
        }
        hsl.a = clamp(hsl.a);
        return hsla(color, hsl);
    },
    fade: function (color, amount) {
        var hsl = color.toHSL();

        hsl.a = amount.value / 100;
        hsl.a = clamp(hsl.a);
        return hsla(color, hsl);
    },
    spin: function (color, amount) {
        var hsl = color.toHSL();
        var hue = (hsl.h + amount.value) % 360;

        hsl.h = hue < 0 ? 360 + hue : hue;

        return hsla(color, hsl);
    },
    //
    // Copyright (c) 2006-2009 Hampton Catlin, Natalie Weizenbaum, and Chris Eppstein
    // http://sass-lang.com
    //
    mix: function (color1, color2, weight) {
        if (!color1.toHSL || !color2.toHSL) {
            console.log(color2.type);
            console.dir(color2);
        }
        if (!weight) {
            weight = new Dimension(50);
        }
        var p = weight.value / 100.0;
        var w = p * 2 - 1;
        var a = color1.toHSL().a - color2.toHSL().a;

        var w1 = (((w * a == -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
        var w2 = 1 - w1;

        var rgb = [color1.rgb[0] * w1 + color2.rgb[0] * w2,
            color1.rgb[1] * w1 + color2.rgb[1] * w2,
            color1.rgb[2] * w1 + color2.rgb[2] * w2];

        var alpha = color1.alpha * p + color2.alpha * (1 - p);

        return new Color(rgb, alpha);
    },
    greyscale: function (color) {
        return colorFunctions.desaturate(color, new Dimension(100));
    },
    contrast: function (color, dark, light, threshold) {
        // filter: contrast(3.2);
        // should be kept as is, so check for color
        if (!color.rgb) {
            return null;
        }
        if (typeof light === 'undefined') {
            light = colorFunctions.rgba(255, 255, 255, 1.0);
        }
        if (typeof dark === 'undefined') {
            dark = colorFunctions.rgba(0, 0, 0, 1.0);
        }
        // Figure out which is actually light and dark:
        if (dark.luma() > light.luma()) {
            var t = light;
            light = dark;
            dark = t;
        }
        if (typeof threshold === 'undefined') {
            threshold = 0.43;
        } else {
            threshold = number(threshold);
        }
        if (color.luma() < threshold) {
            return light;
        } else {
            return dark;
        }
    },
    // Changes made in 2.7.0 - Reverted in 3.0.0
    // contrast: function (color, color1, color2, threshold) {
    //     // Return which of `color1` and `color2` has the greatest contrast with `color`
    //     // according to the standard WCAG contrast ratio calculation.
    //     // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
    //     // The threshold param is no longer used, in line with SASS.
    //     // filter: contrast(3.2);
    //     // should be kept as is, so check for color
    //     if (!color.rgb) {
    //         return null;
    //     }
    //     if (typeof color1 === 'undefined') {
    //         color1 = colorFunctions.rgba(0, 0, 0, 1.0);
    //     }
    //     if (typeof color2 === 'undefined') {
    //         color2 = colorFunctions.rgba(255, 255, 255, 1.0);
    //     }
    //     var contrast1, contrast2;
    //     var luma = color.luma();
    //     var luma1 = color1.luma();
    //     var luma2 = color2.luma();
    //     // Calculate contrast ratios for each color
    //     if (luma > luma1) {
    //         contrast1 = (luma + 0.05) / (luma1 + 0.05);
    //     } else {
    //         contrast1 = (luma1 + 0.05) / (luma + 0.05);
    //     }
    //     if (luma > luma2) {
    //         contrast2 = (luma + 0.05) / (luma2 + 0.05);
    //     } else {
    //         contrast2 = (luma2 + 0.05) / (luma + 0.05);
    //     }
    //     if (contrast1 > contrast2) {
    //         return color1;
    //     } else {
    //         return color2;
    //     }
    // },
    argb: function (color) {
        return new Anonymous(color.toARGB());
    },
    color: function(c) {
        if ((c instanceof Quoted) &&
            (/^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,4})$/i.test(c.value))) {
            var val = c.value.slice(1);
            return new Color(val, undefined, '#' + val);
        }
        if ((c instanceof Color) || (c = Color.fromKeyword(c.value))) {
            c.value = undefined;
            return c;
        }
        throw {
            type:    'Argument',
            message: 'argument must be a color keyword or 3|4|6|8 digit hex e.g. #FFF'
        };
    },
    tint: function(color, amount) {
        return colorFunctions.mix(colorFunctions.rgb(255, 255, 255), color, amount);
    },
    shade: function(color, amount) {
        return colorFunctions.mix(colorFunctions.rgb(0, 0, 0), color, amount);
    }
};
functionRegistry.addMultiple(colorFunctions);

},{"../tree/anonymous":50,"../tree/color":55,"../tree/dimension":62,"../tree/quoted":80,"./function-registry":27}],24:[function(require,module,exports){
module.exports = function(environment) {
    var Quoted = require('../tree/quoted'),
        URL = require('../tree/url'),
        utils = require('../utils'),
        functionRegistry = require('./function-registry'),
        fallback = function(functionThis, node) {
            return new URL(node, functionThis.index, functionThis.currentFileInfo).eval(functionThis.context);
        },
        logger = require('../logger');

    functionRegistry.add('data-uri', function(mimetypeNode, filePathNode) {

        if (!filePathNode) {
            filePathNode = mimetypeNode;
            mimetypeNode = null;
        }

        var mimetype = mimetypeNode && mimetypeNode.value;
        var filePath = filePathNode.value;
        var currentFileInfo = this.currentFileInfo;
        var currentDirectory = currentFileInfo.rewriteUrls ?
            currentFileInfo.currentDirectory : currentFileInfo.entryPath;

        var fragmentStart = filePath.indexOf('#');
        var fragment = '';
        if (fragmentStart !== -1) {
            fragment = filePath.slice(fragmentStart);
            filePath = filePath.slice(0, fragmentStart);
        }
        var context = utils.clone(this.context);
        context.rawBuffer = true;

        var fileManager = environment.getFileManager(filePath, currentDirectory, context, environment, true);

        if (!fileManager) {
            return fallback(this, filePathNode);
        }

        var useBase64 = false;

        // detect the mimetype if not given
        if (!mimetypeNode) {

            mimetype = environment.mimeLookup(filePath);

            if (mimetype === 'image/svg+xml') {
                useBase64 = false;
            } else {
                // use base 64 unless it's an ASCII or UTF-8 format
                var charset = environment.charsetLookup(mimetype);
                useBase64 = ['US-ASCII', 'UTF-8'].indexOf(charset) < 0;
            }
            if (useBase64) { mimetype += ';base64'; }
        }
        else {
            useBase64 = /;base64$/.test(mimetype);
        }

        var fileSync = fileManager.loadFileSync(filePath, currentDirectory, context, environment);
        if (!fileSync.contents) {
            logger.warn('Skipped data-uri embedding of ' + filePath + ' because file not found');
            return fallback(this, filePathNode || mimetypeNode);
        }
        var buf = fileSync.contents;
        if (useBase64 && !environment.encodeBase64) {
            return fallback(this, filePathNode);
        }

        buf = useBase64 ? environment.encodeBase64(buf) : encodeURIComponent(buf);

        var uri = 'data:' + mimetype + ',' + buf + fragment;

        // IE8 cannot handle a data-uri larger than 32,768 characters. If this is exceeded
        // and the --ieCompat flag is enabled, return a normal url() instead.
        var DATA_URI_MAX = 32768;
        if (uri.length >= DATA_URI_MAX) {

            if (this.context.ieCompat !== false) {
                logger.warn('Skipped data-uri embedding of ' + filePath + ' because its size (' + uri.length +
                    ' characters) exceeds IE8-safe ' + DATA_URI_MAX + ' characters!');

                return fallback(this, filePathNode || mimetypeNode);
            }
        }

        return new URL(new Quoted('"' + uri + '"', uri, false, this.index, this.currentFileInfo), this.index, this.currentFileInfo);
    });
};

},{"../logger":39,"../tree/quoted":80,"../tree/url":85,"../utils":89,"./function-registry":27}],25:[function(require,module,exports){
var Keyword = require('../tree/keyword'),
    functionRegistry = require('./function-registry');

var defaultFunc = {
    eval: function () {
        var v = this.value_, e = this.error_;
        if (e) {
            throw e;
        }
        if (v != null) {
            return v ? Keyword.True : Keyword.False;
        }
    },
    value: function (v) {
        this.value_ = v;
    },
    error: function (e) {
        this.error_ = e;
    },
    reset: function () {
        this.value_ = this.error_ = null;
    }
};

functionRegistry.add('default', defaultFunc.eval.bind(defaultFunc));

module.exports = defaultFunc;

},{"../tree/keyword":70,"./function-registry":27}],26:[function(require,module,exports){
var Expression = require('../tree/expression');

var functionCaller = function(name, context, index, currentFileInfo) {
    this.name = name.toLowerCase();
    this.index = index;
    this.context = context;
    this.currentFileInfo = currentFileInfo;

    this.func = context.frames[0].functionRegistry.get(this.name);
};
functionCaller.prototype.isValid = function() {
    return Boolean(this.func);
};

functionCaller.prototype.call = function(args) {
    // This code is terrible and should be replaced as per this issue...
    // https://github.com/less/less.js/issues/2477
    if (Array.isArray(args)) {
        args = args.filter(function (item) {
            if (item.type === 'Comment') {
                return false;
            }
            return true;
        })
        .map(function(item) {
            if (item.type === 'Expression') {
                var subNodes = item.value.filter(function (item) {
                    if (item.type === 'Comment') {
                        return false;
                    }
                    return true;
                });
                if (subNodes.length === 1) {
                    return subNodes[0];
                } else {
                    return new Expression(subNodes);
                }
            }
            return item;
        });
    }

    return this.func.apply(this, args);
};

module.exports = functionCaller;

},{"../tree/expression":64}],27:[function(require,module,exports){
function makeRegistry( base ) {
    return {
        _data: {},
        add: function(name, func) {
            // precautionary case conversion, as later querying of
            // the registry by function-caller uses lower case as well.
            name = name.toLowerCase();

            if (this._data.hasOwnProperty(name)) {
                // TODO warn
            }
            this._data[name] = func;
        },
        addMultiple: function(functions) {
            Object.keys(functions).forEach(
                function(name) {
                    this.add(name, functions[name]);
                }.bind(this));
        },
        get: function(name) {
            return this._data[name] || ( base && base.get( name ));
        },
        getLocalFunctions: function() {
            return this._data;
        },
        inherit: function() {
            return makeRegistry( this );
        },
        create: function(base) {
            return makeRegistry(base);
        }
    };
}

module.exports = makeRegistry( null );
},{}],28:[function(require,module,exports){
module.exports = function(environment) {
    var functions = {
        functionRegistry: require('./function-registry'),
        functionCaller: require('./function-caller')
    };

    // register functions
    require('./boolean');
    require('./default');
    require('./color');
    require('./color-blending');
    require('./data-uri')(environment);
    require('./list');
    require('./math');
    require('./number');
    require('./string');
    require('./svg')(environment);
    require('./types');

    return functions;
};

},{"./boolean":21,"./color":23,"./color-blending":22,"./data-uri":24,"./default":25,"./function-caller":26,"./function-registry":27,"./list":29,"./math":31,"./number":32,"./string":33,"./svg":34,"./types":35}],29:[function(require,module,exports){
var Dimension = require('../tree/dimension'),
    Declaration = require('../tree/declaration'),
    Ruleset = require('../tree/ruleset'),
    Selector = require('../tree/selector'),
    Element = require('../tree/element'),
    functionRegistry = require('./function-registry');

var getItemsFromNode = function(node) {
    // handle non-array values as an array of length 1
    // return 'undefined' if index is invalid
    var items = Array.isArray(node.value) ?
        node.value : Array(node);

    return items;
};

functionRegistry.addMultiple({
    _SELF: function(n) {
        return n;
    },
    extract: function(values, index) {
        index = index.value - 1; // (1-based index)

        return getItemsFromNode(values)[index];
    },
    length: function(values) {
        return new Dimension(getItemsFromNode(values).length);
    },
    each: function(list, rs) {
        var i = 0, rules = [], newRules, iterator;

        if (list.value) {
            if (Array.isArray(list.value)) {
                iterator = list.value;
            } else {
                iterator = [list.value];
            }
        } else if (list.ruleset) {
            iterator = list.ruleset.rules;
        } else if (Array.isArray(list)) {
            iterator = list;
        } else {
            iterator = [list];
        }

        var valueName = '@value',
            keyName = '@key',
            indexName = '@index';

        if (rs.params) {
            valueName = rs.params[0] && rs.params[0].name;
            keyName = rs.params[1] && rs.params[1].name;
            indexName = rs.params[2] && rs.params[2].name;
            rs = rs.rules;
        } else {
            rs = rs.ruleset;
        }
        
        iterator.forEach(function(item) {
            i = i + 1;
            var key, value;
            if (item instanceof Declaration) {
                key = typeof item.name === 'string' ? item.name : item.name[0].value;
                value = item.value;
            } else {
                key = new Dimension(i);
                value = item;
            }

            newRules = rs.rules.slice(0);
            if (valueName) {
                newRules.push(new Declaration(valueName,
                    value,
                    false, false, this.index, this.currentFileInfo));
            }
            if (indexName) {
                newRules.push(new Declaration(indexName,
                    new Dimension(i),
                    false, false, this.index, this.currentFileInfo));
            }
            if (keyName) {
                newRules.push(new Declaration(keyName,
                    key,
                    false, false, this.index, this.currentFileInfo));
            }
        
            rules.push(new Ruleset([ new(Selector)([ new Element("", '&') ]) ],
                newRules,
                rs.strictImports,
                rs.visibilityInfo()
            ));
        });

        return new Ruleset([ new(Selector)([ new Element("", '&') ]) ],
                rules,
                rs.strictImports,
                rs.visibilityInfo()
            ).eval(this.context);

    }
});

},{"../tree/declaration":60,"../tree/dimension":62,"../tree/element":63,"../tree/ruleset":81,"../tree/selector":82,"./function-registry":27}],30:[function(require,module,exports){
var Dimension = require('../tree/dimension');

var MathHelper = function() {
};
MathHelper._math = function (fn, unit, n) {
    if (!(n instanceof Dimension)) {
        throw { type: 'Argument', message: 'argument must be a number' };
    }
    if (unit == null) {
        unit = n.unit;
    } else {
        n = n.unify();
    }
    return new Dimension(fn(parseFloat(n.value)), unit);
};
module.exports = MathHelper;
},{"../tree/dimension":62}],31:[function(require,module,exports){
var functionRegistry = require('./function-registry'),
    mathHelper = require('./math-helper.js');

var mathFunctions = {
    // name,  unit
    ceil:  null,
    floor: null,
    sqrt:  null,
    abs:   null,
    tan:   '',
    sin:   '',
    cos:   '',
    atan:  'rad',
    asin:  'rad',
    acos:  'rad'
};

for (var f in mathFunctions) {
    if (mathFunctions.hasOwnProperty(f)) {
        mathFunctions[f] = mathHelper._math.bind(null, Math[f], mathFunctions[f]);
    }
}

mathFunctions.round = function (n, f) {
    var fraction = typeof f === 'undefined' ? 0 : f.value;
    return mathHelper._math(function(num) { return num.toFixed(fraction); }, null, n);
};

functionRegistry.addMultiple(mathFunctions);

},{"./function-registry":27,"./math-helper.js":30}],32:[function(require,module,exports){
var Dimension = require('../tree/dimension'),
    Anonymous = require('../tree/anonymous'),
    functionRegistry = require('./function-registry'),
    mathHelper = require('./math-helper.js');

var minMax = function (isMin, args) {
    args = Array.prototype.slice.call(args);
    switch (args.length) {
        case 0: throw { type: 'Argument', message: 'one or more arguments required' };
    }
    var i, j, current, currentUnified, referenceUnified, unit, unitStatic, unitClone,
        order  = [], // elems only contains original argument values.
        values = {}; // key is the unit.toString() for unified Dimension values,
    // value is the index into the order array.
    for (i = 0; i < args.length; i++) {
        current = args[i];
        if (!(current instanceof Dimension)) {
            if (Array.isArray(args[i].value)) {
                Array.prototype.push.apply(args, Array.prototype.slice.call(args[i].value));
            }
            continue;
        }
        currentUnified = current.unit.toString() === '' && unitClone !== undefined ? new Dimension(current.value, unitClone).unify() : current.unify();
        unit = currentUnified.unit.toString() === '' && unitStatic !== undefined ? unitStatic : currentUnified.unit.toString();
        unitStatic = unit !== '' && unitStatic === undefined || unit !== '' && order[0].unify().unit.toString() === '' ? unit : unitStatic;
        unitClone = unit !== '' && unitClone === undefined ? current.unit.toString() : unitClone;
        j = values[''] !== undefined && unit !== '' && unit === unitStatic ? values[''] : values[unit];
        if (j === undefined) {
            if (unitStatic !== undefined && unit !== unitStatic) {
                throw { type: 'Argument', message: 'incompatible types' };
            }
            values[unit] = order.length;
            order.push(current);
            continue;
        }
        referenceUnified = order[j].unit.toString() === '' && unitClone !== undefined ? new Dimension(order[j].value, unitClone).unify() : order[j].unify();
        if ( isMin && currentUnified.value < referenceUnified.value ||
            !isMin && currentUnified.value > referenceUnified.value) {
            order[j] = current;
        }
    }
    if (order.length == 1) {
        return order[0];
    }
    args = order.map(function (a) { return a.toCSS(this.context); }).join(this.context.compress ? ',' : ', ');
    return new Anonymous((isMin ? 'min' : 'max') + '(' + args + ')');
};
functionRegistry.addMultiple({
    min: function () {
        return minMax(true, arguments);
    },
    max: function () {
        return minMax(false, arguments);
    },
    convert: function (val, unit) {
        return val.convertTo(unit.value);
    },
    pi: function () {
        return new Dimension(Math.PI);
    },
    mod: function(a, b) {
        return new Dimension(a.value % b.value, a.unit);
    },
    pow: function(x, y) {
        if (typeof x === 'number' && typeof y === 'number') {
            x = new Dimension(x);
            y = new Dimension(y);
        } else if (!(x instanceof Dimension) || !(y instanceof Dimension)) {
            throw { type: 'Argument', message: 'arguments must be numbers' };
        }

        return new Dimension(Math.pow(x.value, y.value), x.unit);
    },
    percentage: function (n) {
        var result = mathHelper._math(function(num) {
            return num * 100;
        }, '%', n);

        return result;
    }
});

},{"../tree/anonymous":50,"../tree/dimension":62,"./function-registry":27,"./math-helper.js":30}],33:[function(require,module,exports){
var Quoted = require('../tree/quoted'),
    Anonymous = require('../tree/anonymous'),
    JavaScript = require('../tree/javascript'),
    functionRegistry = require('./function-registry');

functionRegistry.addMultiple({
    e: function (str) {
        return new Anonymous(str instanceof JavaScript ? str.evaluated : str.value);
    },
    escape: function (str) {
        return new Anonymous(
            encodeURI(str.value).replace(/=/g, '%3D').replace(/:/g, '%3A').replace(/#/g, '%23').replace(/;/g, '%3B')
                .replace(/\(/g, '%28').replace(/\)/g, '%29'));
    },
    replace: function (string, pattern, replacement, flags) {
        var result = string.value;
        replacement = (replacement.type === 'Quoted') ?
            replacement.value : replacement.toCSS();
        result = result.replace(new RegExp(pattern.value, flags ? flags.value : ''), replacement);
        return new Quoted(string.quote || '', result, string.escaped);
    },
    '%': function (string /* arg, arg, ... */) {
        var args = Array.prototype.slice.call(arguments, 1),
            result = string.value;

        for (var i = 0; i < args.length; i++) {
            /* jshint loopfunc:true */
            result = result.replace(/%[sda]/i, function(token) {
                var value = ((args[i].type === 'Quoted') &&
                    token.match(/s/i)) ? args[i].value : args[i].toCSS();
                return token.match(/[A-Z]$/) ? encodeURIComponent(value) : value;
            });
        }
        result = result.replace(/%%/g, '%');
        return new Quoted(string.quote || '', result, string.escaped);
    }
});

},{"../tree/anonymous":50,"../tree/javascript":68,"../tree/quoted":80,"./function-registry":27}],34:[function(require,module,exports){
module.exports = function(environment) {
    var Dimension = require('../tree/dimension'),
        Color = require('../tree/color'),
        Expression = require('../tree/expression'),
        Quoted = require('../tree/quoted'),
        URL = require('../tree/url'),
        functionRegistry = require('./function-registry');

    functionRegistry.add('svg-gradient', function(direction) {

        var stops,
            gradientDirectionSvg,
            gradientType = 'linear',
            rectangleDimension = 'x="0" y="0" width="1" height="1"',
            renderEnv = {compress: false},
            returner,
            directionValue = direction.toCSS(renderEnv),
            i, color, position, positionValue, alpha;

        function throwArgumentDescriptor() {
            throw { type: 'Argument',
                message: 'svg-gradient expects direction, start_color [start_position], [color position,]...,' +
                            ' end_color [end_position] or direction, color list' };
        }

        if (arguments.length == 2) {
            if (arguments[1].value.length < 2) {
                throwArgumentDescriptor();
            }
            stops = arguments[1].value;
        } else if (arguments.length < 3) {
            throwArgumentDescriptor();
        } else {
            stops = Array.prototype.slice.call(arguments, 1);
        }

        switch (directionValue) {
            case 'to bottom':
                gradientDirectionSvg = 'x1="0%" y1="0%" x2="0%" y2="100%"';
                break;
            case 'to right':
                gradientDirectionSvg = 'x1="0%" y1="0%" x2="100%" y2="0%"';
                break;
            case 'to bottom right':
                gradientDirectionSvg = 'x1="0%" y1="0%" x2="100%" y2="100%"';
                break;
            case 'to top right':
                gradientDirectionSvg = 'x1="0%" y1="100%" x2="100%" y2="0%"';
                break;
            case 'ellipse':
            case 'ellipse at center':
                gradientType = 'radial';
                gradientDirectionSvg = 'cx="50%" cy="50%" r="75%"';
                rectangleDimension = 'x="-50" y="-50" width="101" height="101"';
                break;
            default:
                throw { type: 'Argument', message: 'svg-gradient direction must be \'to bottom\', \'to right\',' +
                    ' \'to bottom right\', \'to top right\' or \'ellipse at center\'' };
        }
        returner = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1 1">' +
            '<' + gradientType + 'Gradient id="g" ' + gradientDirectionSvg + '>';

        for (i = 0; i < stops.length; i += 1) {
            if (stops[i] instanceof Expression) {
                color = stops[i].value[0];
                position = stops[i].value[1];
            } else {
                color = stops[i];
                position = undefined;
            }

            if (!(color instanceof Color) || (!((i === 0 || i + 1 === stops.length) && position === undefined) && !(position instanceof Dimension))) {
                throwArgumentDescriptor();
            }
            positionValue = position ? position.toCSS(renderEnv) : i === 0 ? '0%' : '100%';
            alpha = color.alpha;
            returner += '<stop offset="' + positionValue + '" stop-color="' + color.toRGB() + '"' + (alpha < 1 ? ' stop-opacity="' + alpha + '"' : '') + '/>';
        }
        returner += '</' + gradientType + 'Gradient>' +
            '<rect ' + rectangleDimension + ' fill="url(#g)" /></svg>';

        returner = encodeURIComponent(returner);

        returner = 'data:image/svg+xml,' + returner;
        return new URL(new Quoted('\'' + returner + '\'', returner, false, this.index, this.currentFileInfo), this.index, this.currentFileInfo);
    });
};

},{"../tree/color":55,"../tree/dimension":62,"../tree/expression":64,"../tree/quoted":80,"../tree/url":85,"./function-registry":27}],35:[function(require,module,exports){
var Keyword = require('../tree/keyword'),
    DetachedRuleset = require('../tree/detached-ruleset'),
    Dimension = require('../tree/dimension'),
    Color = require('../tree/color'),
    Quoted = require('../tree/quoted'),
    Anonymous = require('../tree/anonymous'),
    URL = require('../tree/url'),
    Operation = require('../tree/operation'),
    functionRegistry = require('./function-registry');

var isa = function (n, Type) {
        return (n instanceof Type) ? Keyword.True : Keyword.False;
    },
    isunit = function (n, unit) {
        if (unit === undefined) {
            throw { type: 'Argument', message: 'missing the required second argument to isunit.' };
        }
        unit = typeof unit.value === 'string' ? unit.value : unit;
        if (typeof unit !== 'string') {
            throw { type: 'Argument', message: 'Second argument to isunit should be a unit or a string.' };
        }
        return (n instanceof Dimension) && n.unit.is(unit) ? Keyword.True : Keyword.False;
    };

functionRegistry.addMultiple({
    isruleset: function (n) {
        return isa(n, DetachedRuleset);
    },
    iscolor: function (n) {
        return isa(n, Color);
    },
    isnumber: function (n) {
        return isa(n, Dimension);
    },
    isstring: function (n) {
        return isa(n, Quoted);
    },
    iskeyword: function (n) {
        return isa(n, Keyword);
    },
    isurl: function (n) {
        return isa(n, URL);
    },
    ispixel: function (n) {
        return isunit(n, 'px');
    },
    ispercentage: function (n) {
        return isunit(n, '%');
    },
    isem: function (n) {
        return isunit(n, 'em');
    },
    isunit: isunit,
    unit: function (val, unit) {
        if (!(val instanceof Dimension)) {
            throw { type: 'Argument',
                message: 'the first argument to unit must be a number' +
                    (val instanceof Operation ? '. Have you forgotten parenthesis?' : '') };
        }
        if (unit) {
            if (unit instanceof Keyword) {
                unit = unit.value;
            } else {
                unit = unit.toCSS();
            }
        } else {
            unit = '';
        }
        return new Dimension(val.value, unit);
    },
    'get-unit': function (n) {
        return new Anonymous(n.unit);
    }
});

},{"../tree/anonymous":50,"../tree/color":55,"../tree/detached-ruleset":61,"../tree/dimension":62,"../tree/keyword":70,"../tree/operation":77,"../tree/quoted":80,"../tree/url":85,"./function-registry":27}],36:[function(require,module,exports){
var contexts = require('./contexts'),
    Parser = require('./parser/parser'),
    LessError = require('./less-error'),
    utils = require('./utils'),
    PromiseConstructor = typeof Promise === 'undefined' ? require('promise') : Promise,
    logger = require('./logger');

module.exports = function(environment) {

    // FileInfo = {
    //  'rewriteUrls' - option - whether to adjust URL's to be relative
    //  'filename' - full resolved filename of current file
    //  'rootpath' - path to append to normal URLs for this node
    //  'currentDirectory' - path to the current file, absolute
    //  'rootFilename' - filename of the base file
    //  'entryPath' - absolute path to the entry file
    //  'reference' - whether the file should not be output and only output parts that are referenced

    var ImportManager = function(less, context, rootFileInfo) {
        this.less = less;
        this.rootFilename = rootFileInfo.filename;
        this.paths = context.paths || [];  // Search paths, when importing
        this.contents = {};             // map - filename to contents of all the files
        this.contentsIgnoredChars = {}; // map - filename to lines at the beginning of each file to ignore
        this.mime = context.mime;
        this.error = null;
        this.context = context;
        // Deprecated? Unused outside of here, could be useful.
        this.queue = [];        // Files which haven't been imported yet
        this.files = {};        // Holds the imported parse trees.
    };

    /**
     * Add an import to be imported
     * @param path - the raw path
     * @param tryAppendExtension - whether to try appending a file extension (.less or .js if the path has no extension)
     * @param currentFileInfo - the current file info (used for instance to work out relative paths)
     * @param importOptions - import options
     * @param callback - callback for when it is imported
     */
    ImportManager.prototype.push = function (path, tryAppendExtension, currentFileInfo, importOptions, callback) {
        var importManager = this,
            pluginLoader = this.context.pluginManager.Loader;

        this.queue.push(path);

        var fileParsedFunc = function (e, root, fullPath) {
            importManager.queue.splice(importManager.queue.indexOf(path), 1); // Remove the path from the queue

            var importedEqualsRoot = fullPath === importManager.rootFilename;
            if (importOptions.optional && e) {
                callback(null, {rules:[]}, false, null);
                logger.info('The file ' + fullPath + ' was skipped because it was not found and the import was marked optional.');
            }
            else {
                // Inline imports aren't cached here.
                // If we start to cache them, please make sure they won't conflict with non-inline imports of the
                // same name as they used to do before this comment and the condition below have been added.
                if (!importManager.files[fullPath] && !importOptions.inline) {
                    importManager.files[fullPath] = { root: root, options: importOptions };
                }
                if (e && !importManager.error) { importManager.error = e; }
                callback(e, root, importedEqualsRoot, fullPath);
            }
        };

        var newFileInfo = {
            rewriteUrls: this.context.rewriteUrls,
            entryPath: currentFileInfo.entryPath,
            rootpath: currentFileInfo.rootpath,
            rootFilename: currentFileInfo.rootFilename
        };

        var fileManager = environment.getFileManager(path, currentFileInfo.currentDirectory, this.context, environment);

        if (!fileManager) {
            fileParsedFunc({ message: 'Could not find a file-manager for ' + path });
            return;
        }

        var loadFileCallback = function(loadedFile) {
            var plugin,
                resolvedFilename = loadedFile.filename,
                contents = loadedFile.contents.replace(/^\uFEFF/, '');

            // Pass on an updated rootpath if path of imported file is relative and file
            // is in a (sub|sup) directory
            //
            // Examples:
            // - If path of imported file is 'module/nav/nav.less' and rootpath is 'less/',
            //   then rootpath should become 'less/module/nav/'
            // - If path of imported file is '../mixins.less' and rootpath is 'less/',
            //   then rootpath should become 'less/../'
            newFileInfo.currentDirectory = fileManager.getPath(resolvedFilename);
            if (newFileInfo.rewriteUrls) {
                newFileInfo.rootpath = fileManager.join(
                    (importManager.context.rootpath || ''),
                    fileManager.pathDiff(newFileInfo.currentDirectory, newFileInfo.entryPath));

                if (!fileManager.isPathAbsolute(newFileInfo.rootpath) && fileManager.alwaysMakePathsAbsolute()) {
                    newFileInfo.rootpath = fileManager.join(newFileInfo.entryPath, newFileInfo.rootpath);
                }
            }
            newFileInfo.filename = resolvedFilename;

            var newEnv = new contexts.Parse(importManager.context);

            newEnv.processImports = false;
            importManager.contents[resolvedFilename] = contents;

            if (currentFileInfo.reference || importOptions.reference) {
                newFileInfo.reference = true;
            }

            if (importOptions.isPlugin) {
                plugin = pluginLoader.evalPlugin(contents, newEnv, importManager, importOptions.pluginArgs, newFileInfo);
                if (plugin instanceof LessError) {
                    fileParsedFunc(plugin, null, resolvedFilename);
                }
                else {
                    fileParsedFunc(null, plugin, resolvedFilename);
                }
            } else if (importOptions.inline) {
                fileParsedFunc(null, contents, resolvedFilename);
            } else {

                // import (multiple) parse trees apparently get altered and can't be cached.
                // TODO: investigate why this is
                if (importManager.files[resolvedFilename]
                    && !importManager.files[resolvedFilename].options.multiple
                    && !importOptions.multiple) {

                    fileParsedFunc(null, importManager.files[resolvedFilename].root, resolvedFilename);
                }
                else {
                    new Parser(newEnv, importManager, newFileInfo).parse(contents, function (e, root) {
                        fileParsedFunc(e, root, resolvedFilename);
                    });
                }
            }
        };
        var promise, context = utils.clone(this.context);

        if (tryAppendExtension) {
            context.ext = importOptions.isPlugin ? '.js' : '.less';
        }

        if (importOptions.isPlugin) {
            promise = pluginLoader.loadPlugin(path, currentFileInfo.currentDirectory, context, environment, fileManager);
        }
        else {
            promise = fileManager.loadFile(path, currentFileInfo.currentDirectory, context, environment,
                function(err, loadedFile) {
                    if (err) {
                        fileParsedFunc(err);
                    } else {
                        loadFileCallback(loadedFile);
                    }
                });
        }
        if (promise) {
            promise.then(loadFileCallback, fileParsedFunc);
        }

    };
    return ImportManager;
};

},{"./contexts":13,"./less-error":38,"./logger":39,"./parser/parser":44,"./utils":89,"promise":undefined}],37:[function(require,module,exports){
module.exports = function(environment, fileManagers) {
    var SourceMapOutput, SourceMapBuilder, ParseTree, ImportManager, Environment;

    var initial = {
        version: [3, 8, 1],
        data: require('./data'),
        tree: require('./tree'),
        Environment: (Environment = require('./environment/environment')),
        AbstractFileManager: require('./environment/abstract-file-manager'),
        AbstractPluginLoader: require('./environment/abstract-plugin-loader'),
        environment: (environment = new Environment(environment, fileManagers)),
        visitors: require('./visitors'),
        Parser: require('./parser/parser'),
        functions: require('./functions')(environment),
        contexts: require('./contexts'),
        SourceMapOutput: (SourceMapOutput = require('./source-map-output')(environment)),
        SourceMapBuilder: (SourceMapBuilder = require('./source-map-builder')(SourceMapOutput, environment)),
        ParseTree: (ParseTree = require('./parse-tree')(SourceMapBuilder)),
        ImportManager: (ImportManager = require('./import-manager')(environment)),
        render: require('./render')(environment, ParseTree, ImportManager),
        parse: require('./parse')(environment, ParseTree, ImportManager),
        LessError: require('./less-error'),
        transformTree: require('./transform-tree'),
        utils: require('./utils'),
        PluginManager: require('./plugin-manager'),
        logger: require('./logger')
    };

    // Create a public API

    var ctor = function(t) {
        return function() {
            var obj = Object.create(t.prototype);
            t.apply(obj, Array.prototype.slice.call(arguments, 0));
            return obj;
        };
    };
    var t, api = Object.create(initial);
    for (var n in initial.tree) {
        /* eslint guard-for-in: 0 */
        t = initial.tree[n];
        if (typeof t === 'function') {
            api[n.toLowerCase()] = ctor(t);
        }
        else {
            api[n] = Object.create(null);
            for (var o in t) {
                /* eslint guard-for-in: 0 */
                api[n][o.toLowerCase()] = ctor(t[o]);
            }
        }
    }

    return api;
};

},{"./contexts":13,"./data":15,"./environment/abstract-file-manager":18,"./environment/abstract-plugin-loader":19,"./environment/environment":20,"./functions":28,"./import-manager":36,"./less-error":38,"./logger":39,"./parse":41,"./parse-tree":40,"./parser/parser":44,"./plugin-manager":45,"./render":46,"./source-map-builder":47,"./source-map-output":48,"./transform-tree":49,"./tree":67,"./utils":89,"./visitors":93}],38:[function(require,module,exports){
var utils = require('./utils');
/**
 * This is a centralized class of any error that could be thrown internally (mostly by the parser).
 * Besides standard .message it keeps some additional data like a path to the file where the error
 * occurred along with line and column numbers.
 *
 * @class
 * @extends Error
 * @type {module.LessError}
 *
 * @prop {string} type
 * @prop {string} filename
 * @prop {number} index
 * @prop {number} line
 * @prop {number} column
 * @prop {number} callLine
 * @prop {number} callExtract
 * @prop {string[]} extract
 *
 * @param {Object} e              - An error object to wrap around or just a descriptive object
 * @param {Object} fileContentMap - An object with file contents in 'contents' property (like importManager) @todo - move to fileManager?
 * @param {string} [currentFilename]
 */
var LessError = module.exports = function LessError(e, fileContentMap, currentFilename) {
    Error.call(this);

    var filename = e.filename || currentFilename;

    this.message = e.message;
    this.stack = e.stack;

    if (fileContentMap && filename) {
        var input = fileContentMap.contents[filename],
            loc = utils.getLocation(e.index, input),
            line = loc.line,
            col  = loc.column,
            callLine = e.call && utils.getLocation(e.call, input).line,
            lines = input ? input.split('\n') : '';

        this.type = e.type || 'Syntax';
        this.filename = filename;
        this.index = e.index;
        this.line = typeof line === 'number' ? line + 1 : null;
        this.column = col;

        if (!this.line && this.stack) {
            var found = this.stack.match(/(<anonymous>|Function):(\d+):(\d+)/);

            if (found) {
                if (found[2]) {
                    this.line = parseInt(found[2]) - 2;
                }
                if (found[3]) {
                    this.column = parseInt(found[3]);
                }
            }
        }

        this.callLine = callLine + 1;
        this.callExtract = lines[callLine];

        this.extract = [
            lines[this.line - 2],
            lines[this.line - 1],
            lines[this.line]
        ];

    }

};

if (typeof Object.create === 'undefined') {
    var F = function () {};
    F.prototype = Error.prototype;
    LessError.prototype = new F();
} else {
    LessError.prototype = Object.create(Error.prototype);
}

LessError.prototype.constructor = LessError;

/**
 * An overridden version of the default Object.prototype.toString
 * which uses additional information to create a helpful message.
 *
 * @param {Object} options
 * @returns {string}
 */
LessError.prototype.toString = function(options) {
    options = options || {};

    var message = '';
    var extract = this.extract || [];
    var error = [];
    var stylize = function (str) { return str; };
    if (options.stylize) {
        var type = typeof options.stylize;
        if (type !== 'function') {
            throw Error('options.stylize should be a function, got a ' + type + '!');
        }
        stylize = options.stylize;
    }

    if (this.line !== null) {
        if (typeof extract[0] === 'string') {
            error.push(stylize((this.line - 1) + ' ' + extract[0], 'grey'));
        }

        if (typeof extract[1] === 'string') {
            var errorTxt = this.line + ' ';
            if (extract[1]) {
                errorTxt += extract[1].slice(0, this.column) +
                    stylize(stylize(stylize(extract[1].substr(this.column, 1), 'bold') +
                        extract[1].slice(this.column + 1), 'red'), 'inverse');
            }
            error.push(errorTxt);
        }

        if (typeof extract[2] === 'string') {
            error.push(stylize((this.line + 1) + ' ' + extract[2], 'grey'));
        }
        error = error.join('\n') + stylize('', 'reset') + '\n';
    }

    message += stylize(this.type + 'Error: ' + this.message, 'red');
    if (this.filename) {
        message += stylize(' in ', 'red') + this.filename;
    }
    if (this.line) {
        message += stylize(' on line ' + this.line + ', column ' + (this.column + 1) + ':', 'grey');
    }

    message += '\n' + error;

    if (this.callLine) {
        message += stylize('from ', 'red') + (this.filename || '') + '/n';
        message += stylize(this.callLine, 'grey') + ' ' + this.callExtract + '/n';
    }

    return message;
};

},{"./utils":89}],39:[function(require,module,exports){
module.exports = {
    error: function(msg) {
        this._fireEvent('error', msg);
    },
    warn: function(msg) {
        this._fireEvent('warn', msg);
    },
    info: function(msg) {
        this._fireEvent('info', msg);
    },
    debug: function(msg) {
        this._fireEvent('debug', msg);
    },
    addListener: function(listener) {
        this._listeners.push(listener);
    },
    removeListener: function(listener) {
        for (var i = 0; i < this._listeners.length; i++) {
            if (this._listeners[i] === listener) {
                this._listeners.splice(i, 1);
                return;
            }
        }
    },
    _fireEvent: function(type, msg) {
        for (var i = 0; i < this._listeners.length; i++) {
            var logFunction = this._listeners[i][type];
            if (logFunction) {
                logFunction(msg);
            }
        }
    },
    _listeners: []
};

},{}],40:[function(require,module,exports){
var LessError = require('./less-error'),
    transformTree = require('./transform-tree'),
    logger = require('./logger');

module.exports = function(SourceMapBuilder) {
    var ParseTree = function(root, imports) {
        this.root = root;
        this.imports = imports;
    };

    ParseTree.prototype.toCSS = function(options) {
        var evaldRoot, result = {}, sourceMapBuilder;
        try {
            evaldRoot = transformTree(this.root, options);
        } catch (e) {
            throw new LessError(e, this.imports);
        }

        try {
            var compress = Boolean(options.compress);
            if (compress) {
                logger.warn('The compress option has been deprecated. We recommend you use a dedicated css minifier, for instance see less-plugin-clean-css.');
            }

            var toCSSOptions = {
                compress: compress,
                dumpLineNumbers: options.dumpLineNumbers,
                strictUnits: Boolean(options.strictUnits),
                numPrecision: 8};

            if (options.sourceMap) {
                sourceMapBuilder = new SourceMapBuilder(options.sourceMap);
                result.css = sourceMapBuilder.toCSS(evaldRoot, toCSSOptions, this.imports);
            } else {
                result.css = evaldRoot.toCSS(toCSSOptions);
            }
        } catch (e) {
            throw new LessError(e, this.imports);
        }

        if (options.pluginManager) {
            var postProcessors = options.pluginManager.getPostProcessors();
            for (var i = 0; i < postProcessors.length; i++) {
                result.css = postProcessors[i].process(result.css, { sourceMap: sourceMapBuilder, options: options, imports: this.imports });
            }
        }
        if (options.sourceMap) {
            result.map = sourceMapBuilder.getExternalSourceMap();
        }

        result.imports = [];
        for (var file in this.imports.files) {
            if (this.imports.files.hasOwnProperty(file) && file !== this.imports.rootFilename) {
                result.imports.push(file);
            }
        }
        return result;
    };
    return ParseTree;
};

},{"./less-error":38,"./logger":39,"./transform-tree":49}],41:[function(require,module,exports){
var PromiseConstructor,
    contexts = require('./contexts'),
    Parser = require('./parser/parser'),
    PluginManager = require('./plugin-manager'),
    LessError = require('./less-error'),
    utils = require('./utils');

module.exports = function(environment, ParseTree, ImportManager) {
    var parse = function (input, options, callback) {

        if (typeof options === 'function') {
            callback = options;
            options = utils.copyOptions(this.options, {});
        }
        else {
            options = utils.copyOptions(this.options, options || {});
        }

        if (!callback) {
            if (!PromiseConstructor) {
                PromiseConstructor = typeof Promise === 'undefined' ? require('promise') : Promise;
            }
            var self = this;
            return new PromiseConstructor(function (resolve, reject) {
                parse.call(self, input, options, function(err, output) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(output);
                    }
                });
            });
        } else {
            var context,
                rootFileInfo,
                pluginManager = new PluginManager(this, !options.reUsePluginManager);

            options.pluginManager = pluginManager;

            context = new contexts.Parse(options);

            if (options.rootFileInfo) {
                rootFileInfo = options.rootFileInfo;
            } else {
                var filename = options.filename || 'input';
                var entryPath = filename.replace(/[^\/\\]*$/, '');
                rootFileInfo = {
                    filename: filename,
                    rewriteUrls: context.rewriteUrls,
                    rootpath: context.rootpath || '',
                    currentDirectory: entryPath,
                    entryPath: entryPath,
                    rootFilename: filename
                };
                // add in a missing trailing slash
                if (rootFileInfo.rootpath && rootFileInfo.rootpath.slice(-1) !== '/') {
                    rootFileInfo.rootpath += '/';
                }
            }

            var imports = new ImportManager(this, context, rootFileInfo);
            this.importManager = imports;

            // TODO: allow the plugins to be just a list of paths or names
            // Do an async plugin queue like lessc

            if (options.plugins) {
                options.plugins.forEach(function(plugin) {
                    var evalResult, contents;
                    if (plugin.fileContent) {
                        contents = plugin.fileContent.replace(/^\uFEFF/, '');
                        evalResult = pluginManager.Loader.evalPlugin(contents, context, imports, plugin.options, plugin.filename);
                        if (evalResult instanceof LessError) {
                            return callback(evalResult);
                        }
                    }
                    else {
                        pluginManager.addPlugin(plugin);
                    }
                });
            }

            new Parser(context, imports, rootFileInfo)
                .parse(input, function (e, root) {
                    if (e) { return callback(e); }
                    callback(null, root, imports, options);
                }, options);
        }
    };
    return parse;
};

},{"./contexts":13,"./less-error":38,"./parser/parser":44,"./plugin-manager":45,"./utils":89,"promise":undefined}],42:[function(require,module,exports){
// Split the input into chunks.
module.exports = function (input, fail) {
    var len = input.length, level = 0, parenLevel = 0,
        lastOpening, lastOpeningParen, lastMultiComment, lastMultiCommentEndBrace,
        chunks = [], emitFrom = 0,
        chunkerCurrentIndex, currentChunkStartIndex, cc, cc2, matched;

    function emitChunk(force) {
        var len = chunkerCurrentIndex - emitFrom;
        if (((len < 512) && !force) || !len) {
            return;
        }
        chunks.push(input.slice(emitFrom, chunkerCurrentIndex + 1));
        emitFrom = chunkerCurrentIndex + 1;
    }

    for (chunkerCurrentIndex = 0; chunkerCurrentIndex < len; chunkerCurrentIndex++) {
        cc = input.charCodeAt(chunkerCurrentIndex);
        if (((cc >= 97) && (cc <= 122)) || (cc < 34)) {
            // a-z or whitespace
            continue;
        }

        switch (cc) {
            case 40:                        // (
                parenLevel++;
                lastOpeningParen = chunkerCurrentIndex;
                continue;
            case 41:                        // )
                if (--parenLevel < 0) {
                    return fail('missing opening `(`', chunkerCurrentIndex);
                }
                continue;
            case 59:                        // ;
                if (!parenLevel) { emitChunk(); }
                continue;
            case 123:                       // {
                level++;
                lastOpening = chunkerCurrentIndex;
                continue;
            case 125:                       // }
                if (--level < 0) {
                    return fail('missing opening `{`', chunkerCurrentIndex);
                }
                if (!level && !parenLevel) { emitChunk(); }
                continue;
            case 92:                        // \
                if (chunkerCurrentIndex < len - 1) { chunkerCurrentIndex++; continue; }
                return fail('unescaped `\\`', chunkerCurrentIndex);
            case 34:
            case 39:
            case 96:                        // ", ' and `
                matched = 0;
                currentChunkStartIndex = chunkerCurrentIndex;
                for (chunkerCurrentIndex = chunkerCurrentIndex + 1; chunkerCurrentIndex < len; chunkerCurrentIndex++) {
                    cc2 = input.charCodeAt(chunkerCurrentIndex);
                    if (cc2 > 96) { continue; }
                    if (cc2 == cc) { matched = 1; break; }
                    if (cc2 == 92) {        // \
                        if (chunkerCurrentIndex == len - 1) {
                            return fail('unescaped `\\`', chunkerCurrentIndex);
                        }
                        chunkerCurrentIndex++;
                    }
                }
                if (matched) { continue; }
                return fail('unmatched `' + String.fromCharCode(cc) + '`', currentChunkStartIndex);
            case 47:                        // /, check for comment
                if (parenLevel || (chunkerCurrentIndex == len - 1)) { continue; }
                cc2 = input.charCodeAt(chunkerCurrentIndex + 1);
                if (cc2 == 47) {
                    // //, find lnfeed
                    for (chunkerCurrentIndex = chunkerCurrentIndex + 2; chunkerCurrentIndex < len; chunkerCurrentIndex++) {
                        cc2 = input.charCodeAt(chunkerCurrentIndex);
                        if ((cc2 <= 13) && ((cc2 == 10) || (cc2 == 13))) { break; }
                    }
                } else if (cc2 == 42) {
                    // /*, find */
                    lastMultiComment = currentChunkStartIndex = chunkerCurrentIndex;
                    for (chunkerCurrentIndex = chunkerCurrentIndex + 2; chunkerCurrentIndex < len - 1; chunkerCurrentIndex++) {
                        cc2 = input.charCodeAt(chunkerCurrentIndex);
                        if (cc2 == 125) { lastMultiCommentEndBrace = chunkerCurrentIndex; }
                        if (cc2 != 42) { continue; }
                        if (input.charCodeAt(chunkerCurrentIndex + 1) == 47) { break; }
                    }
                    if (chunkerCurrentIndex == len - 1) {
                        return fail('missing closing `*/`', currentChunkStartIndex);
                    }
                    chunkerCurrentIndex++;
                }
                continue;
            case 42:                       // *, check for unmatched */
                if ((chunkerCurrentIndex < len - 1) && (input.charCodeAt(chunkerCurrentIndex + 1) == 47)) {
                    return fail('unmatched `/*`', chunkerCurrentIndex);
                }
                continue;
        }
    }

    if (level !== 0) {
        if ((lastMultiComment > lastOpening) && (lastMultiCommentEndBrace > lastMultiComment)) {
            return fail('missing closing `}` or `*/`', lastOpening);
        } else {
            return fail('missing closing `}`', lastOpening);
        }
    } else if (parenLevel !== 0) {
        return fail('missing closing `)`', lastOpeningParen);
    }

    emitChunk(true);
    return chunks;
};

},{}],43:[function(require,module,exports){
var chunker = require('./chunker');

module.exports = function() {
    var input,       // Less input string
        j,           // current chunk
        saveStack = [],   // holds state for backtracking
        furthest,    // furthest index the parser has gone to
        furthestPossibleErrorMessage, // if this is furthest we got to, this is the probably cause
        chunks,      // chunkified input
        current,     // current chunk
        currentPos,  // index of current chunk, in `input`
        parserInput = {};

    var CHARCODE_SPACE = 32,
        CHARCODE_TAB = 9,
        CHARCODE_LF = 10,
        CHARCODE_CR = 13,
        CHARCODE_PLUS = 43,
        CHARCODE_COMMA = 44,
        CHARCODE_FORWARD_SLASH = 47,
        CHARCODE_9 = 57;

    function skipWhitespace(length) {
        var oldi = parserInput.i, oldj = j,
            curr = parserInput.i - currentPos,
            endIndex = parserInput.i + current.length - curr,
            mem = (parserInput.i += length),
            inp = input,
            c, nextChar, comment;

        for (; parserInput.i < endIndex; parserInput.i++) {
            c = inp.charCodeAt(parserInput.i);

            if (parserInput.autoCommentAbsorb && c === CHARCODE_FORWARD_SLASH) {
                nextChar = inp.charAt(parserInput.i + 1);
                if (nextChar === '/') {
                    comment = {index: parserInput.i, isLineComment: true};
                    var nextNewLine = inp.indexOf('\n', parserInput.i + 2);
                    if (nextNewLine < 0) {
                        nextNewLine = endIndex;
                    }
                    parserInput.i = nextNewLine;
                    comment.text = inp.substr(comment.index, parserInput.i - comment.index);
                    parserInput.commentStore.push(comment);
                    continue;
                } else if (nextChar === '*') {
                    var nextStarSlash = inp.indexOf('*/', parserInput.i + 2);
                    if (nextStarSlash >= 0) {
                        comment = {
                            index: parserInput.i,
                            text: inp.substr(parserInput.i, nextStarSlash + 2 - parserInput.i),
                            isLineComment: false
                        };
                        parserInput.i += comment.text.length - 1;
                        parserInput.commentStore.push(comment);
                        continue;
                    }
                }
                break;
            }

            if ((c !== CHARCODE_SPACE) && (c !== CHARCODE_LF) && (c !== CHARCODE_TAB) && (c !== CHARCODE_CR)) {
                break;
            }
        }

        current = current.slice(length + parserInput.i - mem + curr);
        currentPos = parserInput.i;

        if (!current.length) {
            if (j < chunks.length - 1) {
                current = chunks[++j];
                skipWhitespace(0); // skip space at the beginning of a chunk
                return true; // things changed
            }
            parserInput.finished = true;
        }

        return oldi !== parserInput.i || oldj !== j;
    }

    parserInput.save = function() {
        currentPos = parserInput.i;
        saveStack.push( { current: current, i: parserInput.i, j: j });
    };
    parserInput.restore = function(possibleErrorMessage) {

        if (parserInput.i > furthest || (parserInput.i === furthest && possibleErrorMessage && !furthestPossibleErrorMessage)) {
            furthest = parserInput.i;
            furthestPossibleErrorMessage = possibleErrorMessage;
        }
        var state = saveStack.pop();
        current = state.current;
        currentPos = parserInput.i = state.i;
        j = state.j;
    };
    parserInput.forget = function() {
        saveStack.pop();
    };
    parserInput.isWhitespace = function (offset) {
        var pos = parserInput.i + (offset || 0),
            code = input.charCodeAt(pos);
        return (code === CHARCODE_SPACE || code === CHARCODE_CR || code === CHARCODE_TAB || code === CHARCODE_LF);
    };

    // Specialization of $(tok)
    parserInput.$re = function(tok) {
        if (parserInput.i > currentPos) {
            current = current.slice(parserInput.i - currentPos);
            currentPos = parserInput.i;
        }

        var m = tok.exec(current);
        if (!m) {
            return null;
        }

        skipWhitespace(m[0].length);
        if (typeof m === 'string') {
            return m;
        }

        return m.length === 1 ? m[0] : m;
    };

    parserInput.$char = function(tok) {
        if (input.charAt(parserInput.i) !== tok) {
            return null;
        }
        skipWhitespace(1);
        return tok;
    };

    parserInput.$str = function(tok) {
        var tokLength = tok.length;

        // https://jsperf.com/string-startswith/21
        for (var i = 0; i < tokLength; i++) {
            if (input.charAt(parserInput.i + i) !== tok.charAt(i)) {
                return null;
            }
        }

        skipWhitespace(tokLength);
        return tok;
    };

    parserInput.$quoted = function(loc) {
        var pos = loc || parserInput.i,
            startChar = input.charAt(pos);

        if (startChar !== '\'' && startChar !== '"') {
            return;
        }
        var length = input.length,
            currentPosition = pos;

        for (var i = 1; i + currentPosition < length; i++) {
            var nextChar = input.charAt(i + currentPosition);
            switch (nextChar) {
                case '\\':
                    i++;
                    continue;
                case '\r':
                case '\n':
                    break;
                case startChar:
                    var str = input.substr(currentPosition, i + 1);
                    if (!loc && loc !== 0) {
                        skipWhitespace(i + 1);
                        return str
                    }
                    return [startChar, str];
                default:
            }
        }
        return null;
    };

    /**
     * Permissive parsing. Ignores everything except matching {} [] () and quotes
     * until matching token (outside of blocks)
     */
    parserInput.$parseUntil = function(tok) {
        var quote = '',
            returnVal = null,
            inComment = false,
            blockDepth = 0,
            blockStack = [],
            parseGroups = [],
            length = input.length,
            startPos = parserInput.i,
            lastPos = parserInput.i,
            i = parserInput.i,
            loop = true,
            testChar;

        if (typeof tok === 'string') {
            testChar = function(char) {
                return char === tok;
            }
        } else {
            testChar = function(char) {
                return tok.test(char);
            }
        }

        do {
            var prevChar, nextChar = input.charAt(i);
            if (blockDepth === 0 && testChar(nextChar)) {
                returnVal = input.substr(lastPos, i - lastPos);
                if (returnVal) {
                    parseGroups.push(returnVal);
                }
                else {
                    parseGroups.push(' ');
                }
                returnVal = parseGroups;
                skipWhitespace(i - startPos);
                loop = false
            } else {
                if (inComment) {
                    if (nextChar === '*' && 
                        input.charAt(i + 1) === '/') {
                        i++;
                        blockDepth--;
                        inComment = false;
                    }
                    i++;
                    continue;
                }
                switch (nextChar) {
                    case '\\':
                        i++;
                        nextChar = input.charAt(i);
                        parseGroups.push(input.substr(lastPos, i - lastPos + 1));
                        lastPos = i + 1;
                        break;
                    case '/':
                        if (input.charAt(i + 1) === '*') {
                            i++;
                            inComment = true;
                            blockDepth++;
                        }
                        break;
                    case '\'':
                    case '"':
                        quote = parserInput.$quoted(i);
                        if (quote) {
                            parseGroups.push(input.substr(lastPos, i - lastPos), quote);
                            i += quote[1].length - 1;
                            lastPos = i + 1;
                        }
                        else {
                            skipWhitespace(i - startPos);
                            returnVal = nextChar;
                            loop = false;
                        }
                        break;
                    case '{':
                        blockStack.push('}');
                        blockDepth++;
                        break;
                    case '(':
                        blockStack.push(')');
                        blockDepth++;
                        break;
                    case '[':
                        blockStack.push(']');
                        blockDepth++;
                        break;
                    case '}':
                    case ')':
                    case ']':
                        var expected = blockStack.pop();
                        if (nextChar === expected) {
                            blockDepth--;
                        } else {
                            // move the parser to the error and return expected
                            skipWhitespace(i - startPos);
                            returnVal = expected;
                            loop = false;
                        }
                }
                i++;
                if (i > length) {
                    loop = false;
                }
            }
            prevChar = nextChar;
        } while (loop);

        return returnVal ? returnVal : null;
    }

    parserInput.autoCommentAbsorb = true;
    parserInput.commentStore = [];
    parserInput.finished = false;

    // Same as $(), but don't change the state of the parser,
    // just return the match.
    parserInput.peek = function(tok) {
        if (typeof tok === 'string') {
            // https://jsperf.com/string-startswith/21
            for (var i = 0; i < tok.length; i++) {
                if (input.charAt(parserInput.i + i) !== tok.charAt(i)) {
                    return false;
                }
            }
            return true;
        } else {
            return tok.test(current);
        }
    };

    // Specialization of peek()
    // TODO remove or change some currentChar calls to peekChar
    parserInput.peekChar = function(tok) {
        return input.charAt(parserInput.i) === tok;
    };

    parserInput.currentChar = function() {
        return input.charAt(parserInput.i);
    };

    parserInput.prevChar = function() {
        return input.charAt(parserInput.i - 1);
    };

    parserInput.getInput = function() {
        return input;
    };

    parserInput.peekNotNumeric = function() {
        var c = input.charCodeAt(parserInput.i);
        // Is the first char of the dimension 0-9, '.', '+' or '-'
        return (c > CHARCODE_9 || c < CHARCODE_PLUS) || c === CHARCODE_FORWARD_SLASH || c === CHARCODE_COMMA;
    };

    parserInput.start = function(str, chunkInput, failFunction) {
        input = str;
        parserInput.i = j = currentPos = furthest = 0;

        // chunking apparently makes things quicker (but my tests indicate
        // it might actually make things slower in node at least)
        // and it is a non-perfect parse - it can't recognise
        // unquoted urls, meaning it can't distinguish comments
        // meaning comments with quotes or {}() in them get 'counted'
        // and then lead to parse errors.
        // In addition if the chunking chunks in the wrong place we might
        // not be able to parse a parser statement in one go
        // this is officially deprecated but can be switched on via an option
        // in the case it causes too much performance issues.
        if (chunkInput) {
            chunks = chunker(str, failFunction);
        } else {
            chunks = [str];
        }

        current = chunks[0];

        skipWhitespace(0);
    };

    parserInput.end = function() {
        var message,
            isFinished = parserInput.i >= input.length;

        if (parserInput.i < furthest) {
            message = furthestPossibleErrorMessage;
            parserInput.i = furthest;
        }
        return {
            isFinished: isFinished,
            furthest: parserInput.i,
            furthestPossibleErrorMessage: message,
            furthestReachedEnd: parserInput.i >= input.length - 1,
            furthestChar: input[parserInput.i]
        };
    };

    return parserInput;
};

},{"./chunker":42}],44:[function(require,module,exports){
var LessError = require('../less-error'),
    tree = require('../tree'),
    visitors = require('../visitors'),
    getParserInput = require('./parser-input'),
    utils = require('../utils'),
    functionRegistry = require('../functions/function-registry');

//
// less.js - parser
//
//    A relatively straight-forward predictive parser.
//    There is no tokenization/lexing stage, the input is parsed
//    in one sweep.
//
//    To make the parser fast enough to run in the browser, several
//    optimization had to be made:
//
//    - Matching and slicing on a huge input is often cause of slowdowns.
//      The solution is to chunkify the input into smaller strings.
//      The chunks are stored in the `chunks` var,
//      `j` holds the current chunk index, and `currentPos` holds
//      the index of the current chunk in relation to `input`.
//      This gives us an almost 4x speed-up.
//
//    - In many cases, we don't need to match individual tokens;
//      for example, if a value doesn't hold any variables, operations
//      or dynamic references, the parser can effectively 'skip' it,
//      treating it as a literal.
//      An example would be '1px solid #000' - which evaluates to itself,
//      we don't need to know what the individual components are.
//      The drawback, of course is that you don't get the benefits of
//      syntax-checking on the CSS. This gives us a 50% speed-up in the parser,
//      and a smaller speed-up in the code-gen.
//
//
//    Token matching is done with the `$` function, which either takes
//    a terminal string or regexp, or a non-terminal function to call.
//    It also takes care of moving all the indices forwards.
//

var Parser = function Parser(context, imports, fileInfo) {
    var parsers,
        parserInput = getParserInput();

    function error(msg, type) {
        throw new LessError(
            {
                index: parserInput.i,
                filename: fileInfo.filename,
                type: type || 'Syntax',
                message: msg
            },
            imports
        );
    }

    function expect(arg, msg) {
        // some older browsers return typeof 'function' for RegExp
        var result = (arg instanceof Function) ? arg.call(parsers) : parserInput.$re(arg);
        if (result) {
            return result;
        }
        
        error(msg || (typeof arg === 'string'
            ? 'expected \'' + arg + '\' got \'' + parserInput.currentChar() + '\''
            : 'unexpected token'));
    }

    // Specialization of expect()
    function expectChar(arg, msg) {
        if (parserInput.$char(arg)) {
            return arg;
        }
        error(msg || 'expected \'' + arg + '\' got \'' + parserInput.currentChar() + '\'');
    }

    function getDebugInfo(index) {
        var filename = fileInfo.filename;

        return {
            lineNumber: utils.getLocation(index, parserInput.getInput()).line + 1,
            fileName: filename
        };
    }

    /**
     *  Used after initial parsing to create nodes on the fly
     * 
     *  @param {String} str          - string to parse 
     *  @param {Array}  parseList    - array of parsers to run input through e.g. ["value", "important"]
     *  @param {Number} currentIndex - start number to begin indexing
     *  @param {Object} fileInfo     - fileInfo to attach to created nodes
     */
    function parseNode(str, parseList, currentIndex, fileInfo, callback) {
        var result, returnNodes = [];
        var parser = parserInput;

        try {
            parser.start(str, false, function fail(msg, index) {
                callback({
                    message: msg,
                    index: index + currentIndex
                });
            });
            for (var x = 0, p, i; (p = parseList[x]); x++) {
                i = parser.i;
                result = parsers[p]();
                if (result) {
                    result._index = i + currentIndex;
                    result._fileInfo = fileInfo;
                    returnNodes.push(result);
                }
                else {
                    returnNodes.push(null);
                }
            }

            var endInfo = parser.end();
            if (endInfo.isFinished) {
                callback(null, returnNodes);
            }
            else {
                callback(true, null);
            }
        } catch (e) {
            throw new LessError({
                index: e.index + currentIndex,
                message: e.message
            }, imports, fileInfo.filename);
        }
    }
    
    //
    // The Parser
    //
    return {
        parserInput: parserInput,
        imports: imports,
        fileInfo: fileInfo,
        parseNode: parseNode,
        //
        // Parse an input string into an abstract syntax tree,
        // @param str A string containing 'less' markup
        // @param callback call `callback` when done.
        // @param [additionalData] An optional map which can contains vars - a map (key, value) of variables to apply
        //
        parse: function (str, callback, additionalData) {
            var root, error = null, globalVars, modifyVars, ignored, preText = '';

            globalVars = (additionalData && additionalData.globalVars) ? Parser.serializeVars(additionalData.globalVars) + '\n' : '';
            modifyVars = (additionalData && additionalData.modifyVars) ? '\n' + Parser.serializeVars(additionalData.modifyVars) : '';

            if (context.pluginManager) {
                var preProcessors = context.pluginManager.getPreProcessors();
                for (var i = 0; i < preProcessors.length; i++) {
                    str = preProcessors[i].process(str, { context: context, imports: imports, fileInfo: fileInfo });
                }
            }

            if (globalVars || (additionalData && additionalData.banner)) {
                preText = ((additionalData && additionalData.banner) ? additionalData.banner : '') + globalVars;
                ignored = imports.contentsIgnoredChars;
                ignored[fileInfo.filename] = ignored[fileInfo.filename] || 0;
                ignored[fileInfo.filename] += preText.length;
            }

            str = str.replace(/\r\n?/g, '\n');
            // Remove potential UTF Byte Order Mark
            str = preText + str.replace(/^\uFEFF/, '') + modifyVars;
            imports.contents[fileInfo.filename] = str;

            // Start with the primary rule.
            // The whole syntax tree is held under a Ruleset node,
            // with the `root` property set to true, so no `{}` are
            // output. The callback is called when the input is parsed.
            try {
                parserInput.start(str, context.chunkInput, function fail(msg, index) {
                    throw new LessError({
                        index: index,
                        type: 'Parse',
                        message: msg,
                        filename: fileInfo.filename
                    }, imports);
                });

                tree.Node.prototype.parse = this;
                root = new tree.Ruleset(null, this.parsers.primary());
                tree.Node.prototype.rootNode = root;
                root.root = true;
                root.firstRoot = true;
                root.functionRegistry = functionRegistry.inherit();
                
            } catch (e) {
                return callback(new LessError(e, imports, fileInfo.filename));
            }

            // If `i` is smaller than the `input.length - 1`,
            // it means the parser wasn't able to parse the whole
            // string, so we've got a parsing error.
            //
            // We try to extract a \n delimited string,
            // showing the line where the parse error occurred.
            // We split it up into two parts (the part which parsed,
            // and the part which didn't), so we can color them differently.
            var endInfo = parserInput.end();
            if (!endInfo.isFinished) {

                var message = endInfo.furthestPossibleErrorMessage;

                if (!message) {
                    message = 'Unrecognised input';
                    if (endInfo.furthestChar === '}') {
                        message += '. Possibly missing opening \'{\'';
                    } else if (endInfo.furthestChar === ')') {
                        message += '. Possibly missing opening \'(\'';
                    } else if (endInfo.furthestReachedEnd) {
                        message += '. Possibly missing something';
                    }
                }

                error = new LessError({
                    type: 'Parse',
                    message: message,
                    index: endInfo.furthest,
                    filename: fileInfo.filename
                }, imports);
            }

            var finish = function (e) {
                e = error || e || imports.error;

                if (e) {
                    if (!(e instanceof LessError)) {
                        e = new LessError(e, imports, fileInfo.filename);
                    }

                    return callback(e);
                }
                else {
                    return callback(null, root);
                }
            };

            if (context.processImports !== false) {
                new visitors.ImportVisitor(imports, finish)
                    .run(root);
            } else {
                return finish();
            }
        },

        //
        // Here in, the parsing rules/functions
        //
        // The basic structure of the syntax tree generated is as follows:
        //
        //   Ruleset ->  Declaration -> Value -> Expression -> Entity
        //
        // Here's some Less code:
        //
        //    .class {
        //      color: #fff;
        //      border: 1px solid #000;
        //      width: @w + 4px;
        //      > .child {...}
        //    }
        //
        // And here's what the parse tree might look like:
        //
        //     Ruleset (Selector '.class', [
        //         Declaration ("color",  Value ([Expression [Color #fff]]))
        //         Declaration ("border", Value ([Expression [Dimension 1px][Keyword "solid"][Color #000]]))
        //         Declaration ("width",  Value ([Expression [Operation " + " [Variable "@w"][Dimension 4px]]]))
        //         Ruleset (Selector [Element '>', '.child'], [...])
        //     ])
        //
        //  In general, most rules will try to parse a token with the `$re()` function, and if the return
        //  value is truly, will return a new node, of the relevant type. Sometimes, we need to check
        //  first, before parsing, that's when we use `peek()`.
        //
        parsers: parsers = {
            //
            // The `primary` rule is the *entry* and *exit* point of the parser.
            // The rules here can appear at any level of the parse tree.
            //
            // The recursive nature of the grammar is an interplay between the `block`
            // rule, which represents `{ ... }`, the `ruleset` rule, and this `primary` rule,
            // as represented by this simplified grammar:
            //
            //     primary  →  (ruleset | declaration)+
            //     ruleset  →  selector+ block
            //     block    →  '{' primary '}'
            //
            // Only at one point is the primary rule not called from the
            // block rule: at the root level.
            //
            primary: function () {
                var mixin = this.mixin, root = [], node;

                while (true) {
                    while (true) {
                        node = this.comment();
                        if (!node) { break; }
                        root.push(node);
                    }
                    // always process comments before deciding if finished
                    if (parserInput.finished) {
                        break;
                    }
                    if (parserInput.peek('}')) {
                        break;
                    }

                    node = this.extendRule();
                    if (node) {
                        root = root.concat(node);
                        continue;
                    }

                    node = mixin.definition() || this.declaration() || this.ruleset() ||
                        mixin.call(false, false) || this.variableCall() || this.entities.call() || this.atrule();
                    if (node) {
                        root.push(node);
                    } else {
                        var foundSemiColon = false;
                        while (parserInput.$char(';')) {
                            foundSemiColon = true;
                        }
                        if (!foundSemiColon) {
                            break;
                        }
                    }
                }

                return root;
            },

            // comments are collected by the main parsing mechanism and then assigned to nodes
            // where the current structure allows it
            comment: function () {
                if (parserInput.commentStore.length) {
                    var comment = parserInput.commentStore.shift();
                    return new(tree.Comment)(comment.text, comment.isLineComment, comment.index, fileInfo);
                }
            },

            //
            // Entities are tokens which can be found inside an Expression
            //
            entities: {
                mixinLookup: function() {
                    return parsers.mixin.call(true, true);
                },
                //
                // A string, which supports escaping " and '
                //
                //     "milky way" 'he\'s the one!'
                //
                quoted: function (forceEscaped) {
                    var str, index = parserInput.i, isEscaped = false;

                    parserInput.save();
                    if (parserInput.$char('~')) {
                        isEscaped = true;
                    } else if (forceEscaped) {
                        parserInput.restore();
                        return;
                    }

                    str = parserInput.$quoted();
                    if (!str) {
                        parserInput.restore();
                        return;
                    }
                    parserInput.forget();

                    return new(tree.Quoted)(str.charAt(0), str.substr(1, str.length - 2), isEscaped, index, fileInfo);
                },

                //
                // A catch-all word, such as:
                //
                //     black border-collapse
                //
                keyword: function () {
                    var k = parserInput.$char('%') || parserInput.$re(/^\[?(?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+\]?/);
                    if (k) {
                        return tree.Color.fromKeyword(k) || new(tree.Keyword)(k);
                    }
                },

                //
                // A function call
                //
                //     rgb(255, 0, 255)
                //
                // The arguments are parsed with the `entities.arguments` parser.
                //
                call: function () {
                    var name, args, func, index = parserInput.i;

                    // http://jsperf.com/case-insensitive-regex-vs-strtolower-then-regex/18
                    if (parserInput.peek(/^url\(/i)) {
                        return;
                    }

                    parserInput.save();

                    name = parserInput.$re(/^([\w-]+|%|progid:[\w\.]+)\(/);
                    if (!name) {
                        parserInput.forget(); 
                        return;
                    }

                    name = name[1];
                    func = this.customFuncCall(name);
                    if (func) {
                        args = func.parse();
                        if (args && func.stop) {
                            parserInput.forget();
                            return args;
                        }
                    }

                    args = this.arguments(args);

                    if (!parserInput.$char(')')) {
                        parserInput.restore('Could not parse call arguments or missing \')\'');
                        return;
                    }

                    parserInput.forget();
                    
                    return new(tree.Call)(name, args, index, fileInfo);
                },
                
                //
                // Parsing rules for functions with non-standard args, e.g.:
                //
                //     boolean(not(2 > 1))
                //
                //     This is a quick prototype, to be modified/improved when
                //     more custom-parsed funcs come (e.g. `selector(...)`)
                //

                customFuncCall: function (name) {
                    /* Ideally the table is to be moved out of here for faster perf.,
                       but it's quite tricky since it relies on all these `parsers`
                       and `expect` available only here */
                    return {
                        alpha:   f(parsers.ieAlpha, true),
                        boolean: f(condition),
                        'if':    f(condition)
                    }[name.toLowerCase()];

                    function f(parse, stop) {
                        return {
                            parse: parse, // parsing function
                            stop:  stop   // when true - stop after parse() and return its result, 
                                          // otherwise continue for plain args
                        };
                    }
                
                    function condition() {
                        return [expect(parsers.condition, 'expected condition')];
                    }
                },

                arguments: function (prevArgs) {
                    var argsComma = prevArgs || [],
                        argsSemiColon = [],
                        isSemiColonSeparated, value;

                    parserInput.save();

                    while (true) {
                        if (prevArgs) {
                            prevArgs = false;
                        } else {
                            value = parsers.detachedRuleset() || this.assignment() || parsers.expression();
                            if (!value) {
                                break;
                            }

                            if (value.value && value.value.length == 1) {
                                value = value.value[0];
                            }

                            argsComma.push(value);
                        }

                        if (parserInput.$char(',')) {
                            continue;
                        }

                        if (parserInput.$char(';') || isSemiColonSeparated) {
                            isSemiColonSeparated = true;
                            value = (argsComma.length < 1) ? argsComma[0]
                                : new tree.Value(argsComma);
                            argsSemiColon.push(value);
                            argsComma = [];
                        }
                    }

                    parserInput.forget();
                    return isSemiColonSeparated ? argsSemiColon : argsComma;
                },
                literal: function () {
                    return this.dimension() ||
                           this.color() ||
                           this.quoted() ||
                           this.unicodeDescriptor();
                },

                // Assignments are argument entities for calls.
                // They are present in ie filter properties as shown below.
                //
                //     filter: progid:DXImageTransform.Microsoft.Alpha( *opacity=50* )
                //

                assignment: function () {
                    var key, value;
                    parserInput.save();
                    key = parserInput.$re(/^\w+(?=\s?=)/i);
                    if (!key) {
                        parserInput.restore();
                        return;
                    }
                    if (!parserInput.$char('=')) {
                        parserInput.restore();
                        return;
                    }
                    value = parsers.entity();
                    if (value) {
                        parserInput.forget();
                        return new(tree.Assignment)(key, value);
                    } else {
                        parserInput.restore();
                    }
                },

                //
                // Parse url() tokens
                //
                // We use a specific rule for urls, because they don't really behave like
                // standard function calls. The difference is that the argument doesn't have
                // to be enclosed within a string, so it can't be parsed as an Expression.
                //
                url: function () {
                    var value, index = parserInput.i;

                    parserInput.autoCommentAbsorb = false;

                    if (!parserInput.$str('url(')) {
                        parserInput.autoCommentAbsorb = true;
                        return;
                    }

                    value = this.quoted() || this.variable() || this.property() ||
                            parserInput.$re(/^(?:(?:\\[\(\)'"])|[^\(\)'"])+/) || '';

                    parserInput.autoCommentAbsorb = true;

                    expectChar(')');

                    return new(tree.URL)((value.value != null || 
                        value instanceof tree.Variable || 
                        value instanceof tree.Property) ?
                        value : new(tree.Anonymous)(value, index), index, fileInfo);
                },

                //
                // A Variable entity, such as `@fink`, in
                //
                //     width: @fink + 2px
                //
                // We use a different parser for variable definitions,
                // see `parsers.variable`.
                //
                variable: function () {
                    var ch, name, index = parserInput.i;

                    parserInput.save();
                    if (parserInput.currentChar() === '@' && (name = parserInput.$re(/^@@?[\w-]+/))) {
                        ch = parserInput.currentChar();
                        if (ch === '(' || ch === '[' && !parserInput.prevChar().match(/^\s/)) {
                            // this may be a VariableCall lookup
                            var result = parsers.variableCall(name);
                            if (result) {
                                parserInput.forget();
                                return result;
                            }
                        }
                        parserInput.forget();
                        return new(tree.Variable)(name, index, fileInfo);
                    }
                    parserInput.restore();
                },

                // A variable entity using the protective {} e.g. @{var}
                variableCurly: function () {
                    var curly, index = parserInput.i;

                    if (parserInput.currentChar() === '@' && (curly = parserInput.$re(/^@\{([\w-]+)\}/))) {
                        return new(tree.Variable)('@' + curly[1], index, fileInfo);
                    }
                },
                //
                // A Property accessor, such as `$color`, in
                //
                //     background-color: $color
                //
                property: function () {
                    var name, index = parserInput.i;

                    if (parserInput.currentChar() === '$' && (name = parserInput.$re(/^\$[\w-]+/))) {
                        return new(tree.Property)(name, index, fileInfo);
                    }
                },

                // A property entity useing the protective {} e.g. ${prop}
                propertyCurly: function () {
                    var curly, index = parserInput.i;

                    if (parserInput.currentChar() === '$' && (curly = parserInput.$re(/^\$\{([\w-]+)\}/))) {
                        return new(tree.Property)('$' + curly[1], index, fileInfo);
                    }
                },
                //
                // A Hexadecimal color
                //
                //     #4F3C2F
                //
                // `rgb` and `hsl` colors are parsed through the `entities.call` parser.
                //
                color: function () {
                    var rgb;

                    if (parserInput.currentChar() === '#' && (rgb = parserInput.$re(/^#([A-Fa-f0-9]{8}|[A-Fa-f0-9]{6}|[A-Fa-f0-9]{3,4})/))) {
                        return new(tree.Color)(rgb[1], undefined, rgb[0]);
                    }
                },

                colorKeyword: function () {
                    parserInput.save();
                    var autoCommentAbsorb = parserInput.autoCommentAbsorb;
                    parserInput.autoCommentAbsorb = false;
                    var k = parserInput.$re(/^[_A-Za-z-][_A-Za-z0-9-]+/);
                    parserInput.autoCommentAbsorb = autoCommentAbsorb;
                    if (!k) {
                        parserInput.forget();
                        return;
                    }
                    parserInput.restore();
                    var color = tree.Color.fromKeyword(k);
                    if (color) {
                        parserInput.$str(k);
                        return color;
                    }
                },

                //
                // A Dimension, that is, a number and a unit
                //
                //     0.5em 95%
                //
                dimension: function () {
                    if (parserInput.peekNotNumeric()) {
                        return;
                    }

                    var value = parserInput.$re(/^([+-]?\d*\.?\d+)(%|[a-z_]+)?/i);
                    if (value) {
                        return new(tree.Dimension)(value[1], value[2]);
                    }
                },

                //
                // A unicode descriptor, as is used in unicode-range
                //
                // U+0??  or U+00A1-00A9
                //
                unicodeDescriptor: function () {
                    var ud;

                    ud = parserInput.$re(/^U\+[0-9a-fA-F?]+(\-[0-9a-fA-F?]+)?/);
                    if (ud) {
                        return new(tree.UnicodeDescriptor)(ud[0]);
                    }
                },

                //
                // JavaScript code to be evaluated
                //
                //     `window.location.href`
                //
                javascript: function () {
                    var js, index = parserInput.i;

                    parserInput.save();

                    var escape = parserInput.$char('~');
                    var jsQuote = parserInput.$char('`');

                    if (!jsQuote) {
                        parserInput.restore();
                        return;
                    }

                    js = parserInput.$re(/^[^`]*`/);
                    if (js) {
                        parserInput.forget();
                        return new(tree.JavaScript)(js.substr(0, js.length - 1), Boolean(escape), index, fileInfo);
                    }
                    parserInput.restore('invalid javascript definition');
                }
            },

            //
            // The variable part of a variable definition. Used in the `rule` parser
            //
            //     @fink:
            //
            variable: function () {
                var name;

                if (parserInput.currentChar() === '@' && (name = parserInput.$re(/^(@[\w-]+)\s*:/))) { return name[1]; }
            },

            //
            // Call a variable value to retrieve a detached ruleset
            // or a value from a detached ruleset's rules.
            //
            //     @fink();
            //     @fink;
            //     color: @fink[@color];
            //
            variableCall: function (parsedName) {
                var lookups, important, i = parserInput.i,
                    inValue = !!parsedName, name = parsedName;

                parserInput.save();

                if (name || (parserInput.currentChar() === '@'
                    && (name = parserInput.$re(/^(@[\w-]+)(\(\s*\))?/)))) {

                    lookups = this.mixin.ruleLookups();

                    if (!lookups && ((inValue && parserInput.$str('()') !== '()') || (name[2] !== '()'))) {
                        parserInput.restore('Missing \'[...]\' lookup in variable call');
                        return;
                    }

                    if (!inValue) {
                        name = name[1];
                    }

                    if (lookups && parsers.important()) {
                        important = true;
                    }

                    var call = new tree.VariableCall(name, i, fileInfo);
                    if (!inValue && parsers.end()) {
                        parserInput.forget();
                        return call;
                    }
                    else {
                        parserInput.forget();
                        return new tree.NamespaceValue(call, lookups, important, i, fileInfo);
                    }
                }

                parserInput.restore();
            },

            //
            // extend syntax - used to extend selectors
            //
            extend: function(isRule) {
                var elements, e, index = parserInput.i, option, extendList, extend;

                if (!parserInput.$str(isRule ? '&:extend(' : ':extend(')) {
                    return;
                }

                do {
                    option = null;
                    elements = null;
                    while (!(option = parserInput.$re(/^(all)(?=\s*(\)|,))/))) {
                        e = this.element();
                        if (!e) {
                            break;
                        }
                        if (elements) {
                            elements.push(e);
                        } else {
                            elements = [ e ];
                        }
                    }

                    option = option && option[1];
                    if (!elements) {
                        error('Missing target selector for :extend().');
                    }
                    extend = new(tree.Extend)(new(tree.Selector)(elements), option, index, fileInfo);
                    if (extendList) {
                        extendList.push(extend);
                    } else {
                        extendList = [ extend ];
                    }
                } while (parserInput.$char(','));

                expect(/^\)/);

                if (isRule) {
                    expect(/^;/);
                }

                return extendList;
            },

            //
            // extendRule - used in a rule to extend all the parent selectors
            //
            extendRule: function() {
                return this.extend(true);
            },

            //
            // Mixins
            //
            mixin: {
                //
                // A Mixin call, with an optional argument list
                //
                //     #mixins > .square(#fff);
                //     #mixins.square(#fff);
                //     .rounded(4px, black);
                //     .button;
                //
                // We can lookup / return a value using the lookup syntax:
                //
                //     color: #mixin.square(#fff)[@color];
                //
                // The `while` loop is there because mixins can be
                // namespaced, but we only support the child and descendant
                // selector for now.
                //
                call: function (inValue, getLookup) {
                    var s = parserInput.currentChar(), important = false, lookups,
                        index = parserInput.i, elements, args, hasParens;

                    if (s !== '.' && s !== '#') { return; }

                    parserInput.save(); // stop us absorbing part of an invalid selector

                    elements = this.elements();

                    if (elements) {
                        if (parserInput.$char('(')) {
                            args = this.args(true).args;
                            expectChar(')');
                            hasParens = true;
                        }

                        if (getLookup !== false) {
                            lookups = this.ruleLookups();
                        }
                        if (getLookup === true && !lookups) {
                            parserInput.restore();
                            return;
                        }

                        if (inValue && !lookups && !hasParens) {
                            // This isn't a valid in-value mixin call
                            parserInput.restore();
                            return;
                        }

                        if (!inValue && parsers.important()) {
                            important = true;
                        }

                        if (inValue || parsers.end()) {
                            parserInput.forget();
                            var mixin = new(tree.mixin.Call)(elements, args, index, fileInfo, !lookups && important);
                            if (lookups) {
                                return new tree.NamespaceValue(mixin, lookups, important);
                            }
                            else {
                                return mixin;
                            }
                        }
                    }

                    parserInput.restore();
                },
                /**
                 * Matching elements for mixins
                 * (Start with . or # and can have > )
                 */
                elements: function() {
                    var elements, e, c, elem, elemIndex,
                        re = /^[#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/;
                    while (true) {
                        elemIndex = parserInput.i;
                        e = parserInput.$re(re);
                        
                        if (!e) {
                            break;
                        }
                        elem = new(tree.Element)(c, e, false, elemIndex, fileInfo);
                        if (elements) {
                            elements.push(elem);
                        } else {
                            elements = [ elem ];
                        }
                        c = parserInput.$char('>');
                    }
                    return elements;
                },
                args: function (isCall) {
                    var entities = parsers.entities,
                        returner = { args:null, variadic: false },
                        expressions = [], argsSemiColon = [], argsComma = [],
                        isSemiColonSeparated, expressionContainsNamed, name, nameLoop,
                        value, arg, expand, hasSep = true; 

                    parserInput.save();

                    while (true) {
                        if (isCall) {
                            arg = parsers.detachedRuleset() || parsers.expression();
                        } else {
                            parserInput.commentStore.length = 0;
                            if (parserInput.$str('...')) {
                                returner.variadic = true;
                                if (parserInput.$char(';') && !isSemiColonSeparated) {
                                    isSemiColonSeparated = true;
                                }
                                (isSemiColonSeparated ? argsSemiColon : argsComma)
                                    .push({ variadic: true });
                                break;
                            }
                            arg = entities.variable() || entities.property() || entities.literal() || entities.keyword() || this.call(true);
                        }

                        if (!arg || !hasSep) {
                            break;
                        }

                        nameLoop = null;
                        if (arg.throwAwayComments) {
                            arg.throwAwayComments();
                        }
                        value = arg;
                        var val = null;

                        if (isCall) {
                            // Variable
                            if (arg.value && arg.value.length == 1) {
                                val = arg.value[0];
                            }
                        } else {
                            val = arg;
                        }

                        if (val && (val instanceof tree.Variable || val instanceof tree.Property)) {
                            if (parserInput.$char(':')) {
                                if (expressions.length > 0) {
                                    if (isSemiColonSeparated) {
                                        error('Cannot mix ; and , as delimiter types');
                                    }
                                    expressionContainsNamed = true;
                                }

                                value = parsers.detachedRuleset() || parsers.expression();

                                if (!value) {
                                    if (isCall) {
                                        error('could not understand value for named argument');
                                    } else {
                                        parserInput.restore();
                                        returner.args = [];
                                        return returner;
                                    }
                                }
                                nameLoop = (name = val.name);
                            } else if (parserInput.$str('...')) {
                                if (!isCall) {
                                    returner.variadic = true;
                                    if (parserInput.$char(';') && !isSemiColonSeparated) {
                                        isSemiColonSeparated = true;
                                    }
                                    (isSemiColonSeparated ? argsSemiColon : argsComma)
                                        .push({ name: arg.name, variadic: true });
                                    break;
                                } else {
                                    expand = true;
                                }
                            } else if (!isCall) {
                                name = nameLoop = val.name;
                                value = null;
                            }
                        }

                        if (value) {
                            expressions.push(value);
                        }

                        argsComma.push({ name:nameLoop, value:value, expand:expand });

                        if (parserInput.$char(',')) {
                            hasSep = true;
                            continue;
                        }
                        hasSep = parserInput.$char(';') === ';';

                        if (hasSep || isSemiColonSeparated) {

                            if (expressionContainsNamed) {
                                error('Cannot mix ; and , as delimiter types');
                            }

                            isSemiColonSeparated = true;

                            if (expressions.length > 1) {
                                value = new(tree.Value)(expressions);
                            }
                            argsSemiColon.push({ name:name, value:value, expand:expand });

                            name = null;
                            expressions = [];
                            expressionContainsNamed = false;
                        }
                    }

                    parserInput.forget();
                    returner.args = isSemiColonSeparated ? argsSemiColon : argsComma;
                    return returner;
                },
                //
                // A Mixin definition, with a list of parameters
                //
                //     .rounded (@radius: 2px, @color) {
                //        ...
                //     }
                //
                // Until we have a finer grained state-machine, we have to
                // do a look-ahead, to make sure we don't have a mixin call.
                // See the `rule` function for more information.
                //
                // We start by matching `.rounded (`, and then proceed on to
                // the argument list, which has optional default values.
                // We store the parameters in `params`, with a `value` key,
                // if there is a value, such as in the case of `@radius`.
                //
                // Once we've got our params list, and a closing `)`, we parse
                // the `{...}` block.
                //
                definition: function () {
                    var name, params = [], match, ruleset, cond, variadic = false;
                    if ((parserInput.currentChar() !== '.' && parserInput.currentChar() !== '#') ||
                        parserInput.peek(/^[^{]*\}/)) {
                        return;
                    }

                    parserInput.save();

                    match = parserInput.$re(/^([#.](?:[\w-]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+)\s*\(/);
                    if (match) {
                        name = match[1];

                        var argInfo = this.args(false);
                        params = argInfo.args;
                        variadic = argInfo.variadic;

                        // .mixincall("@{a}");
                        // looks a bit like a mixin definition..
                        // also
                        // .mixincall(@a: {rule: set;});
                        // so we have to be nice and restore
                        if (!parserInput.$char(')')) {
                            parserInput.restore('Missing closing \')\'');
                            return;
                        }

                        parserInput.commentStore.length = 0;

                        if (parserInput.$str('when')) { // Guard
                            cond = expect(parsers.conditions, 'expected condition');
                        }

                        ruleset = parsers.block();

                        if (ruleset) {
                            parserInput.forget();
                            return new(tree.mixin.Definition)(name, params, ruleset, cond, variadic);
                        } else {
                            parserInput.restore();
                        }
                    } else {
                        parserInput.forget();
                    }
                },
            
                ruleLookups: function() {
                    var rule, args, lookups = [];

                    if (parserInput.currentChar() !== '[') { 
                        return;
                    }
                    
                    while (true) {
                        parserInput.save();
                        args = null;
                        rule = this.lookupValue();
                        if (!rule && rule !== '') {
                            parserInput.restore();
                            break;
                        }
                        lookups.push(rule);
                        parserInput.forget();
                    }
                    if (lookups.length > 0) {
                        return lookups;
                    }
                },
    
                lookupValue: function() {
                    parserInput.save();
    
                    if (!parserInput.$char('[')) { 
                        parserInput.restore();
                        return;
                    }
    
                    var name = parserInput.$re(/^(?:[@$]{0,2})[_a-zA-Z0-9-]*/);
    
                    if (!parserInput.$char(']')) {
                        parserInput.restore();
                        return;
                    } 

                    if (name || name === '') {
                        parserInput.forget();
                        return name;
                    }
    
                    parserInput.restore();
                }
            },
            //
            // Entities are the smallest recognized token,
            // and can be found inside a rule's value.
            //
            entity: function () {
                var entities = this.entities;

                return this.comment() || entities.literal() || entities.variable() || entities.url() ||
                    entities.property() || entities.call() || entities.keyword() || this.mixin.call(true) ||
                    entities.javascript();
            },

            //
            // A Declaration terminator. Note that we use `peek()` to check for '}',
            // because the `block` rule will be expecting it, but we still need to make sure
            // it's there, if ';' was omitted.
            //
            end: function () {
                return parserInput.$char(';') || parserInput.peek('}');
            },

            //
            // IE's alpha function
            //
            //     alpha(opacity=88)
            //
            ieAlpha: function () {
                var value;

                // http://jsperf.com/case-insensitive-regex-vs-strtolower-then-regex/18
                if (!parserInput.$re(/^opacity=/i)) { return; }
                value = parserInput.$re(/^\d+/);
                if (!value) {
                    value = expect(parsers.entities.variable, 'Could not parse alpha');
                    value = '@{' + value.name.slice(1) + '}';
                }
                expectChar(')');
                return new tree.Quoted('', 'alpha(opacity=' + value + ')');
            },

            //
            // A Selector Element
            //
            //     div
            //     + h1
            //     #socks
            //     input[type="text"]
            //
            // Elements are the building blocks for Selectors,
            // they are made out of a `Combinator` (see combinator rule),
            // and an element name, such as a tag a class, or `*`.
            //
            element: function () {
                var e, c, v, index = parserInput.i;

                c = this.combinator();

                e = parserInput.$re(/^(?:\d+\.\d+|\d+)%/) ||
                    parserInput.$re(/^(?:[.#]?|:*)(?:[\w-]|[^\x00-\x9f]|\\(?:[A-Fa-f0-9]{1,6} ?|[^A-Fa-f0-9]))+/) ||
                    parserInput.$char('*') || parserInput.$char('&') || this.attribute() ||
                    parserInput.$re(/^\([^&()@]+\)/) ||  parserInput.$re(/^[\.#:](?=@)/) ||
                    this.entities.variableCurly();

                if (!e) {
                    parserInput.save();
                    if (parserInput.$char('(')) {
                        if ((v = this.selector(false)) && parserInput.$char(')')) {
                            e = new(tree.Paren)(v);
                            parserInput.forget();
                        } else {
                            parserInput.restore('Missing closing \')\'');
                        }
                    } else {
                        parserInput.forget();
                    }
                }

                if (e) { return new(tree.Element)(c, e, e instanceof tree.Variable, index, fileInfo); }
            },

            //
            // Combinators combine elements together, in a Selector.
            //
            // Because our parser isn't white-space sensitive, special care
            // has to be taken, when parsing the descendant combinator, ` `,
            // as it's an empty space. We have to check the previous character
            // in the input, to see if it's a ` ` character. More info on how
            // we deal with this in *combinator.js*.
            //
            combinator: function () {
                var c = parserInput.currentChar();

                if (c === '/') {
                    parserInput.save();
                    var slashedCombinator = parserInput.$re(/^\/[a-z]+\//i);
                    if (slashedCombinator) {
                        parserInput.forget();
                        return new(tree.Combinator)(slashedCombinator);
                    }
                    parserInput.restore();
                }

                if (c === '>' || c === '+' || c === '~' || c === '|' || c === '^') {
                    parserInput.i++;
                    if (c === '^' && parserInput.currentChar() === '^') {
                        c = '^^';
                        parserInput.i++;
                    }
                    while (parserInput.isWhitespace()) { parserInput.i++; }
                    return new(tree.Combinator)(c);
                } else if (parserInput.isWhitespace(-1)) {
                    return new(tree.Combinator)(' ');
                } else {
                    return new(tree.Combinator)(null);
                }
            },
            //
            // A CSS Selector
            // with less extensions e.g. the ability to extend and guard
            //
            //     .class > div + h1
            //     li a:hover
            //
            // Selectors are made out of one or more Elements, see above.
            //
            selector: function (isLess) {
                var index = parserInput.i, elements, extendList, c, e, allExtends, when, condition;
                isLess = isLess !== false;
                while ((isLess && (extendList = this.extend())) || (isLess && (when = parserInput.$str('when'))) || (e = this.element())) {
                    if (when) {
                        condition = expect(this.conditions, 'expected condition');
                    } else if (condition) {
                        error('CSS guard can only be used at the end of selector');
                    } else if (extendList) {
                        if (allExtends) {
                            allExtends = allExtends.concat(extendList);
                        } else {
                            allExtends = extendList;
                        }
                    } else {
                        if (allExtends) { error('Extend can only be used at the end of selector'); }
                        c = parserInput.currentChar();
                        if (elements) {
                            elements.push(e);
                        } else {
                            elements = [ e ];
                        }
                        e = null;
                    }
                    if (c === '{' || c === '}' || c === ';' || c === ',' || c === ')') {
                        break;
                    }
                }

                if (elements) { return new(tree.Selector)(elements, allExtends, condition, index, fileInfo); }
                if (allExtends) { error('Extend must be used to extend a selector, it cannot be used on its own'); }
            },
            selectors: function () {
                var s, selectors;
                while (true) {
                    s = this.selector();
                    if (!s) {
                        break;
                    }
                    if (selectors) {
                        selectors.push(s);
                    } else {
                        selectors = [ s ];
                    }
                    parserInput.commentStore.length = 0;
                    if (s.condition && selectors.length > 1) {
                        error("Guards are only currently allowed on a single selector.");
                    }
                    if (!parserInput.$char(',')) { break; }
                    if (s.condition) {
                        error("Guards are only currently allowed on a single selector.");
                    }
                    parserInput.commentStore.length = 0;
                }
                return selectors;
            },
            attribute: function () {
                if (!parserInput.$char('[')) { return; }

                var entities = this.entities,
                    key, val, op;

                if (!(key = entities.variableCurly())) {
                    key = expect(/^(?:[_A-Za-z0-9-\*]*\|)?(?:[_A-Za-z0-9-]|\\.)+/);
                }

                op = parserInput.$re(/^[|~*$^]?=/);
                if (op) {
                    val = entities.quoted() || parserInput.$re(/^[0-9]+%/) || parserInput.$re(/^[\w-]+/) || entities.variableCurly();
                }

                expectChar(']');

                return new(tree.Attribute)(key, op, val);
            },

            //
            // The `block` rule is used by `ruleset` and `mixin.definition`.
            // It's a wrapper around the `primary` rule, with added `{}`.
            //
            block: function () {
                var content;
                if (parserInput.$char('{') && (content = this.primary()) && parserInput.$char('}')) {
                    return content;
                }
            },

            blockRuleset: function() {
                var block = this.block();

                if (block) {
                    block = new tree.Ruleset(null, block);
                }
                return block;
            },

            detachedRuleset: function() {
                var argInfo, params, variadic;

                parserInput.save();
                if (parserInput.$re(/^[.#]\(/)) {
                    /**
                     * DR args currently only implemented for each() function, and not 
                     * yet settable as `@dr: #(@arg) {}`
                     * This should be done when DRs are merged with mixins.
                     * See: https://github.com/less/less-meta/issues/16
                     */
                    argInfo = this.mixin.args(false);
                    params = argInfo.args;
                    variadic = argInfo.variadic;
                    if (!parserInput.$char(')')) {
                        parserInput.restore();
                        return;
                    }
                }
                var blockRuleset = this.blockRuleset();
                if (blockRuleset) {
                    parserInput.forget();
                    if (params) {
                        return new tree.mixin.Definition(null, params, blockRuleset, null, variadic);
                    }
                    return new tree.DetachedRuleset(blockRuleset);
                }
                parserInput.restore();
            },

            //
            // div, .class, body > p {...}
            //
            ruleset: function () {
                var selectors, rules, debugInfo;

                parserInput.save();

                if (context.dumpLineNumbers) {
                    debugInfo = getDebugInfo(parserInput.i);
                }

                selectors = this.selectors();

                if (selectors && (rules = this.block())) {
                    parserInput.forget();
                    var ruleset = new(tree.Ruleset)(selectors, rules, context.strictImports);
                    if (context.dumpLineNumbers) {
                        ruleset.debugInfo = debugInfo;
                    }
                    return ruleset;
                } else {
                    parserInput.restore();
                }
            },
            declaration: function () {
                var name, value, index = parserInput.i, hasDR,
                    c = parserInput.currentChar(), important, merge, isVariable;

                if (c === '.' || c === '#' || c === '&' || c === ':') { return; }

                parserInput.save();

                name = this.variable() || this.ruleProperty();
                if (name) {
                    isVariable = typeof name === 'string';

                    if (isVariable) {
                        value = this.detachedRuleset();
                        if (value) {
                            hasDR = true;
                        }
                    }

                    parserInput.commentStore.length = 0;
                    if (!value) {
                        // a name returned by this.ruleProperty() is always an array of the form:
                        // [string-1, ..., string-n, ""] or [string-1, ..., string-n, "+"]
                        // where each item is a tree.Keyword or tree.Variable
                        merge = !isVariable && name.length > 1 && name.pop().value;

                        // Custom property values get permissive parsing
                        if (name[0].value && name[0].value.slice(0, 2) === '--') {
                            value = this.permissiveValue();
                        }
                        // Try to store values as anonymous
                        // If we need the value later we'll re-parse it in ruleset.parseValue
                        else {
                            value = this.anonymousValue();
                        }
                        if (value) {
                            parserInput.forget();
                            // anonymous values absorb the end ';' which is required for them to work
                            return new (tree.Declaration)(name, value, false, merge, index, fileInfo);
                        }

                        if (!value) {
                            value = this.value();
                        }

                        if (value) {
                            important = this.important();
                        } else if (isVariable) {
                            // As a last resort, try permissiveValue
                            value = this.permissiveValue();
                        }
                    }

                    if (value && (this.end() || hasDR)) {
                        parserInput.forget();
                        return new (tree.Declaration)(name, value, important, merge, index, fileInfo);
                    }
                    else {
                        parserInput.restore();
                    }
                } else {
                    parserInput.restore();
                }
            },
            anonymousValue: function () {
                var index = parserInput.i;
                var match = parserInput.$re(/^([^.#@\$+\/'"*`(;{}-]*);/);
                if (match) {
                    return new(tree.Anonymous)(match[1], index);
                }
            },
            /**
             * Used for custom properties, at-rules, and variables (as fallback)
             * Parses almost anything inside of {} [] () "" blocks
             * until it reaches outer-most tokens.
             * 
             * First, it will try to parse comments and entities to reach
             * the end. This is mostly like the Expression parser except no
             * math is allowed.
             */
            permissiveValue: function (untilTokens) {
                var i, e, done, value, 
                    tok = untilTokens || ';',
                    index = parserInput.i, result = [];

                function testCurrentChar() {
                    var char = parserInput.currentChar();
                    if (typeof tok === 'string') {
                        return char === tok;
                    } else {
                        return tok.test(char);
                    }
                }
                if (testCurrentChar()) {
                    return;
                }
                value = [];
                do {
                    e = this.comment();
                    if (e) {
                        value.push(e);
                        continue;
                    }
                    e = this.entity();
                    if (e) {
                        value.push(e);
                    }
                } while (e);

                done = testCurrentChar();
                
                if (value.length > 0) {
                    value = new(tree.Expression)(value);
                    if (done) {
                        return value;
                    }
                    else {
                        result.push(value);
                    }
                    // Preserve space before $parseUntil as it will not
                    if (parserInput.prevChar() === ' ') {
                        result.push(new tree.Anonymous(' ', index));
                    }
                }
                parserInput.save();
                
                value = parserInput.$parseUntil(tok);

                if (value) {
                    if (typeof value === 'string') {
                        error('Expected \'' + value + '\'', 'Parse');
                    }
                    if (value.length === 1 && value[0] === ' ') {
                        parserInput.forget();
                        return new tree.Anonymous('', index);
                    }
                    var item;
                    for (i = 0; i < value.length; i++) {
                        item = value[i];
                        if (Array.isArray(item)) {
                            // Treat actual quotes as normal quoted values
                            result.push(new tree.Quoted(item[0], item[1], true, index, fileInfo));
                        }
                        else {
                            if (i === value.length - 1) {
                                item = item.trim();
                            }
                            // Treat like quoted values, but replace vars like unquoted expressions
                            var quote = new tree.Quoted('\'', item, true, index, fileInfo);
                            quote.variableRegex = /@([\w-]+)/g;
                            quote.propRegex = /\$([\w-]+)/g;
                            result.push(quote);
                        }
                    }
                    parserInput.forget();
                    return new tree.Expression(result, true);
                }
                parserInput.restore();
            },

            //
            // An @import atrule
            //
            //     @import "lib";
            //
            // Depending on our environment, importing is done differently:
            // In the browser, it's an XHR request, in Node, it would be a
            // file-system operation. The function used for importing is
            // stored in `import`, which we pass to the Import constructor.
            //
            'import': function () {
                var path, features, index = parserInput.i;

                var dir = parserInput.$re(/^@import?\s+/);

                if (dir) {
                    var options = (dir ? this.importOptions() : null) || {};

                    if ((path = this.entities.quoted() || this.entities.url())) {
                        features = this.mediaFeatures();

                        if (!parserInput.$char(';')) {
                            parserInput.i = index;
                            error('missing semi-colon or unrecognised media features on import');
                        }
                        features = features && new(tree.Value)(features);
                        return new(tree.Import)(path, features, options, index, fileInfo);
                    }
                    else {
                        parserInput.i = index;
                        error('malformed import statement');
                    }
                }
            },

            importOptions: function() {
                var o, options = {}, optionName, value;

                // list of options, surrounded by parens
                if (!parserInput.$char('(')) { return null; }
                do {
                    o = this.importOption();
                    if (o) {
                        optionName = o;
                        value = true;
                        switch (optionName) {
                            case 'css':
                                optionName = 'less';
                                value = false;
                                break;
                            case 'once':
                                optionName = 'multiple';
                                value = false;
                                break;
                        }
                        options[optionName] = value;
                        if (!parserInput.$char(',')) { break; }
                    }
                } while (o);
                expectChar(')');
                return options;
            },

            importOption: function() {
                var opt = parserInput.$re(/^(less|css|multiple|once|inline|reference|optional)/);
                if (opt) {
                    return opt[1];
                }
            },

            mediaFeature: function () {
                var entities = this.entities, nodes = [], e, p;
                parserInput.save();
                do {
                    e = entities.keyword() || entities.variable() || entities.mixinLookup();
                    if (e) {
                        nodes.push(e);
                    } else if (parserInput.$char('(')) {
                        p = this.property();
                        e = this.value();
                        if (parserInput.$char(')')) {
                            if (p && e) {
                                nodes.push(new(tree.Paren)(new(tree.Declaration)(p, e, null, null, parserInput.i, fileInfo, true)));
                            } else if (e) {
                                nodes.push(new(tree.Paren)(e));
                            } else {
                                error('badly formed media feature definition');
                            }
                        } else {
                            error('Missing closing \')\'', 'Parse');
                        }
                    }
                } while (e);

                parserInput.forget();
                if (nodes.length > 0) {
                    return new(tree.Expression)(nodes);
                }
            },

            mediaFeatures: function () {
                var entities = this.entities, features = [], e;
                do {
                    e = this.mediaFeature();
                    if (e) {
                        features.push(e);
                        if (!parserInput.$char(',')) { break; }
                    } else {
                        e = entities.variable() || entities.mixinLookup();
                        if (e) {
                            features.push(e);
                            if (!parserInput.$char(',')) { break; }
                        }
                    }
                } while (e);

                return features.length > 0 ? features : null;
            },

            media: function () {
                var features, rules, media, debugInfo, index = parserInput.i;

                if (context.dumpLineNumbers) {
                    debugInfo = getDebugInfo(index);
                }

                parserInput.save();

                if (parserInput.$str('@media')) {
                    features = this.mediaFeatures();

                    rules = this.block();

                    if (!rules) {
                        error('media definitions require block statements after any features');
                    }

                    parserInput.forget();

                    media = new(tree.Media)(rules, features, index, fileInfo);
                    if (context.dumpLineNumbers) {
                        media.debugInfo = debugInfo;
                    }

                    return media;
                }

                parserInput.restore();
            },

            //

            // A @plugin directive, used to import plugins dynamically.
            //
            //     @plugin (args) "lib";
            //
            plugin: function () {
                var path, args, options,
                    index = parserInput.i,
                    dir   = parserInput.$re(/^@plugin?\s+/);

                if (dir) {
                    args = this.pluginArgs();

                    if (args) {
                        options = {
                            pluginArgs: args,
                            isPlugin: true
                        };
                    }
                    else {
                        options = { isPlugin: true };
                    }

                    if ((path = this.entities.quoted() || this.entities.url())) {

                        if (!parserInput.$char(';')) {
                            parserInput.i = index;
                            error('missing semi-colon on @plugin');
                        }
                        return new(tree.Import)(path, null, options, index, fileInfo);
                    }
                    else {
                        parserInput.i = index;
                        error('malformed @plugin statement');
                    }
                }
            },

            pluginArgs: function() {
                // list of options, surrounded by parens
                parserInput.save();
                if (!parserInput.$char('(')) {
                    parserInput.restore();
                    return null;
                }
                var args = parserInput.$re(/^\s*([^\);]+)\)\s*/);
                if (args[1]) {
                    parserInput.forget();
                    return args[1].trim();
                }
                else { 
                    parserInput.restore();
                    return null;
                }
            },

            //
            // A CSS AtRule
            //
            //     @charset "utf-8";
            //
            atrule: function () {
                var index = parserInput.i, name, value, rules, nonVendorSpecificName,
                    hasIdentifier, hasExpression, hasUnknown, hasBlock = true, isRooted = true;

                if (parserInput.currentChar() !== '@') { return; }

                value = this['import']() || this.plugin() || this.media();
                if (value) {
                    return value;
                }

                parserInput.save();

                name = parserInput.$re(/^@[a-z-]+/);

                if (!name) { return; }

                nonVendorSpecificName = name;
                if (name.charAt(1) == '-' && name.indexOf('-', 2) > 0) {
                    nonVendorSpecificName = '@' + name.slice(name.indexOf('-', 2) + 1);
                }

                switch (nonVendorSpecificName) {
                    case '@charset':
                        hasIdentifier = true;
                        hasBlock = false;
                        break;
                    case '@namespace':
                        hasExpression = true;
                        hasBlock = false;
                        break;
                    case '@keyframes':
                    case '@counter-style':
                        hasIdentifier = true;
                        break;
                    case '@document':
                    case '@supports':
                        hasUnknown = true;
                        isRooted = false;
                        break;
                    default:
                        hasUnknown = true;
                        break;
                }

                parserInput.commentStore.length = 0;

                if (hasIdentifier) {
                    value = this.entity();
                    if (!value) {
                        error('expected ' + name + ' identifier');
                    }
                } else if (hasExpression) {
                    value = this.expression();
                    if (!value) {
                        error('expected ' + name + ' expression');
                    }
                } else if (hasUnknown) {
                    value = this.permissiveValue(/^[{;]/);
                    hasBlock = (parserInput.currentChar() === '{');
                    if (!value) {
                        if (!hasBlock && parserInput.currentChar() !== ';') {
                            error(name + ' rule is missing block or ending semi-colon');
                        }
                    }
                    else if (!value.value) {
                        value = null;
                    }
                }

                if (hasBlock) {
                    rules = this.blockRuleset();
                }

                if (rules || (!hasBlock && value && parserInput.$char(';'))) {
                    parserInput.forget();
                    return new (tree.AtRule)(name, value, rules, index, fileInfo,
                        context.dumpLineNumbers ? getDebugInfo(index) : null,
                        isRooted
                    );
                }

                parserInput.restore('at-rule options not recognised');
            },

            //
            // A Value is a comma-delimited list of Expressions
            //
            //     font-family: Baskerville, Georgia, serif;
            //
            // In a Rule, a Value represents everything after the `:`,
            // and before the `;`.
            //
            value: function () {
                var e, expressions = [], index = parserInput.i;

                do {
                    e = this.expression();
                    if (e) {
                        expressions.push(e);
                        if (!parserInput.$char(',')) { break; }
                    }
                } while (e);

                if (expressions.length > 0) {
                    return new(tree.Value)(expressions, index);
                }
            },
            important: function () {
                if (parserInput.currentChar() === '!') {
                    return parserInput.$re(/^! *important/);
                }
            },
            sub: function () {
                var a, e;

                parserInput.save();
                if (parserInput.$char('(')) {
                    a = this.addition();
                    if (a && parserInput.$char(')')) {
                        parserInput.forget();
                        e = new(tree.Expression)([a]);
                        e.parens = true;
                        return e;
                    }
                    parserInput.restore('Expected \')\'');
                    return;
                }
                parserInput.restore();
            },
            multiplication: function () {
                var m, a, op, operation, isSpaced;
                m = this.operand();
                if (m) {
                    isSpaced = parserInput.isWhitespace(-1);
                    while (true) {
                        if (parserInput.peek(/^\/[*\/]/)) {
                            break;
                        }

                        parserInput.save();

                        op = parserInput.$char('/') || parserInput.$char('*') || parserInput.$str('./');

                        if (!op) { parserInput.forget(); break; }

                        a = this.operand();

                        if (!a) { parserInput.restore(); break; }
                        parserInput.forget();

                        m.parensInOp = true;
                        a.parensInOp = true;
                        operation = new(tree.Operation)(op, [operation || m, a], isSpaced);
                        isSpaced = parserInput.isWhitespace(-1);
                    }
                    return operation || m;
                }
            },
            addition: function () {
                var m, a, op, operation, isSpaced;
                m = this.multiplication();
                if (m) {
                    isSpaced = parserInput.isWhitespace(-1);
                    while (true) {
                        op = parserInput.$re(/^[-+]\s+/) || (!isSpaced && (parserInput.$char('+') || parserInput.$char('-')));
                        if (!op) {
                            break;
                        }
                        a = this.multiplication();
                        if (!a) {
                            break;
                        }

                        m.parensInOp = true;
                        a.parensInOp = true;
                        operation = new(tree.Operation)(op, [operation || m, a], isSpaced);
                        isSpaced = parserInput.isWhitespace(-1);
                    }
                    return operation || m;
                }
            },
            conditions: function () {
                var a, b, index = parserInput.i, condition;

                a = this.condition(true);
                if (a) {
                    while (true) {
                        if (!parserInput.peek(/^,\s*(not\s*)?\(/) || !parserInput.$char(',')) {
                            break;
                        }
                        b = this.condition(true);
                        if (!b) {
                            break;
                        }
                        condition = new(tree.Condition)('or', condition || a, b, index);
                    }
                    return condition || a;
                }
            },
            condition: function (needsParens) {
                var result, logical, next;
                function or() {
                    return parserInput.$str('or');
                }

                result = this.conditionAnd(needsParens);
                if (!result) {
                    return ;
                }
                logical = or();
                if (logical) {
                    next = this.condition(needsParens);
                    if (next) {
                        result = new(tree.Condition)(logical, result, next);
                    } else {
                        return ;
                    }
                }
                return result;
            },
            conditionAnd: function (needsParens) {
                var result, logical, next, self = this;
                function insideCondition() {
                    var cond = self.negatedCondition(needsParens) || self.parenthesisCondition(needsParens);
                    if (!cond && !needsParens) {
                        return self.atomicCondition(needsParens);
                    }
                    return cond;
                }
                function and() {
                    return parserInput.$str('and');
                }

                result = insideCondition();
                if (!result) {
                    return ;
                }
                logical = and();
                if (logical) {
                    next = this.conditionAnd(needsParens);
                    if (next) {
                        result = new(tree.Condition)(logical, result, next);
                    } else {
                        return ;
                    }
                }
                return result;
            },
            negatedCondition: function (needsParens) {
                if (parserInput.$str('not')) {
                    var result = this.parenthesisCondition(needsParens);
                    if (result) {
                        result.negate = !result.negate;
                    }
                    return result;
                }
            },
            parenthesisCondition: function (needsParens) {
                function tryConditionFollowedByParenthesis(me) {
                    var body;
                    parserInput.save();
                    body = me.condition(needsParens);
                    if (!body) {
                        parserInput.restore();
                        return ;
                    }
                    if (!parserInput.$char(')')) {
                        parserInput.restore();
                        return ;
                    }
                    parserInput.forget();
                    return body;
                }

                var body;
                parserInput.save();
                if (!parserInput.$str('(')) {
                    parserInput.restore();
                    return ;
                }
                body = tryConditionFollowedByParenthesis(this);
                if (body) {
                    parserInput.forget();
                    return body;
                }

                body = this.atomicCondition(needsParens);
                if (!body) {
                    parserInput.restore();
                    return ;
                }
                if (!parserInput.$char(')')) {
                    parserInput.restore('expected \')\' got \'' + parserInput.currentChar() + '\'');
                    return ;
                }
                parserInput.forget();
                return body;
            },
            atomicCondition: function (needsParens) {
                var entities = this.entities, index = parserInput.i, a, b, c, op;

                function cond() {
                    return this.addition() || entities.keyword() || entities.quoted() || entities.mixinLookup();
                }
                cond = cond.bind(this);

                a = cond();
                if (a) {
                    if (parserInput.$char('>')) {
                        if (parserInput.$char('=')) {
                            op = '>=';
                        } else {
                            op = '>';
                        }
                    } else
                    if (parserInput.$char('<')) {
                        if (parserInput.$char('=')) {
                            op = '<=';
                        } else {
                            op = '<';
                        }
                    } else
                    if (parserInput.$char('=')) {
                        if (parserInput.$char('>')) {
                            op = '=>';
                        } else if (parserInput.$char('<')) {
                            op = '=<';
                        } else {
                            op = '=';
                        }
                    }
                    if (op) {
                        b = cond();
                        if (b) {
                            c = new(tree.Condition)(op, a, b, index, false);
                        } else {
                            error('expected expression');
                        }
                    } else {
                        c = new(tree.Condition)('=', a, new(tree.Keyword)('true'), index, false);
                    }
                    return c;
                }
            },

            //
            // An operand is anything that can be part of an operation,
            // such as a Color, or a Variable
            //
            operand: function () {
                var entities = this.entities, negate;

                if (parserInput.peek(/^-[@\$\(]/)) {
                    negate = parserInput.$char('-');
                }

                var o = this.sub() || entities.dimension() ||
                        entities.color() || entities.variable() ||
                        entities.property() || entities.call() ||
                        entities.quoted(true) || entities.colorKeyword() ||
                        entities.mixinLookup();

                if (negate) {
                    o.parensInOp = true;
                    o = new(tree.Negative)(o);
                }

                return o;
            },

            //
            // Expressions either represent mathematical operations,
            // or white-space delimited Entities.
            //
            //     1px solid black
            //     @var * 2
            //
            expression: function () {
                var entities = [], e, delim, index = parserInput.i;

                do {
                    e = this.comment();
                    if (e) {
                        entities.push(e);
                        continue;
                    }
                    e = this.addition() || this.entity();
                    if (e) {
                        entities.push(e);
                        // operations do not allow keyword "/" dimension (e.g. small/20px) so we support that here
                        if (!parserInput.peek(/^\/[\/*]/)) {
                            delim = parserInput.$char('/');
                            if (delim) {
                                entities.push(new(tree.Anonymous)(delim, index));
                            }
                        }
                    }
                } while (e);
                if (entities.length > 0) {
                    return new(tree.Expression)(entities);
                }
            },
            property: function () {
                var name = parserInput.$re(/^(\*?-?[_a-zA-Z0-9-]+)\s*:/);
                if (name) {
                    return name[1];
                }
            },
            ruleProperty: function () {
                var name = [], index = [], s, k;

                parserInput.save();

                var simpleProperty = parserInput.$re(/^([_a-zA-Z0-9-]+)\s*:/);
                if (simpleProperty) {
                    name = [new(tree.Keyword)(simpleProperty[1])];
                    parserInput.forget();
                    return name;
                }

                function match(re) {
                    var i = parserInput.i,
                        chunk = parserInput.$re(re);
                    if (chunk) {
                        index.push(i);
                        return name.push(chunk[1]);
                    }
                }

                match(/^(\*?)/);
                while (true) {
                    if (!match(/^((?:[\w-]+)|(?:[@\$]\{[\w-]+\}))/)) {
                        break;
                    }
                }

                if ((name.length > 1) && match(/^((?:\+_|\+)?)\s*:/)) {
                    parserInput.forget();

                    // at last, we have the complete match now. move forward,
                    // convert name particles to tree objects and return:
                    if (name[0] === '') {
                        name.shift();
                        index.shift();
                    }
                    for (k = 0; k < name.length; k++) {
                        s = name[k];
                        name[k] = (s.charAt(0) !== '@' && s.charAt(0) !== '$') ?
                            new(tree.Keyword)(s) :
                            (s.charAt(0) === '@' ?
                                new(tree.Variable)('@' + s.slice(2, -1), index[k], fileInfo) :
                                new(tree.Property)('$' + s.slice(2, -1), index[k], fileInfo));
                    }
                    return name;
                }
                parserInput.restore();
            }
        }
    };
};
Parser.serializeVars = function(vars) {
    var s = '';

    for (var name in vars) {
        if (Object.hasOwnProperty.call(vars, name)) {
            var value = vars[name];
            s += ((name[0] === '@') ? '' : '@') + name + ': ' + value +
                ((String(value).slice(-1) === ';') ? '' : ';');
        }
    }

    return s;
};

module.exports = Parser;

},{"../functions/function-registry":27,"../less-error":38,"../tree":67,"../utils":89,"../visitors":93,"./parser-input":43}],45:[function(require,module,exports){
/**
 * Plugin Manager
 */
var PluginManager = function(less) {
    this.less = less;
    this.visitors = [];
    this.preProcessors = [];
    this.postProcessors = [];
    this.installedPlugins = [];
    this.fileManagers = [];
    this.iterator = -1;
    this.pluginCache = {};
    this.Loader = new less.PluginLoader(less);
};

var pm, PluginManagerFactory = function(less, newFactory) {
        if (newFactory || !pm) {
            pm = new PluginManager(less);
        }
        return pm;
    };

/**
 * Adds all the plugins in the array
 * @param {Array} plugins
 */
PluginManager.prototype.addPlugins = function(plugins) {
    if (plugins) {
        for (var i = 0; i < plugins.length; i++) {
            this.addPlugin(plugins[i]);
        }
    }
};
/**
 *
 * @param plugin
 * @param {String} filename
 */
PluginManager.prototype.addPlugin = function(plugin, filename, functionRegistry) {
    this.installedPlugins.push(plugin);
    if (filename) {
        this.pluginCache[filename] = plugin;
    }
    if (plugin.install) {
        plugin.install(this.less, this, functionRegistry || this.less.functions.functionRegistry);
    }
};
/**
 *
 * @param filename
 */
PluginManager.prototype.get = function(filename) {
    return this.pluginCache[filename];
};

/**
 * Adds a visitor. The visitor object has options on itself to determine
 * when it should run.
 * @param visitor
 */
PluginManager.prototype.addVisitor = function(visitor) {
    this.visitors.push(visitor);
};
/**
 * Adds a pre processor object
 * @param {object} preProcessor
 * @param {number} priority - guidelines 1 = before import, 1000 = import, 2000 = after import
 */
PluginManager.prototype.addPreProcessor = function(preProcessor, priority) {
    var indexToInsertAt;
    for (indexToInsertAt = 0; indexToInsertAt < this.preProcessors.length; indexToInsertAt++) {
        if (this.preProcessors[indexToInsertAt].priority >= priority) {
            break;
        }
    }
    this.preProcessors.splice(indexToInsertAt, 0, {preProcessor: preProcessor, priority: priority});
};
/**
 * Adds a post processor object
 * @param {object} postProcessor
 * @param {number} priority - guidelines 1 = before compression, 1000 = compression, 2000 = after compression
 */
PluginManager.prototype.addPostProcessor = function(postProcessor, priority) {
    var indexToInsertAt;
    for (indexToInsertAt = 0; indexToInsertAt < this.postProcessors.length; indexToInsertAt++) {
        if (this.postProcessors[indexToInsertAt].priority >= priority) {
            break;
        }
    }
    this.postProcessors.splice(indexToInsertAt, 0, {postProcessor: postProcessor, priority: priority});
};
/**
 *
 * @param manager
 */
PluginManager.prototype.addFileManager = function(manager) {
    this.fileManagers.push(manager);
};
/**
 *
 * @returns {Array}
 * @private
 */
PluginManager.prototype.getPreProcessors = function() {
    var preProcessors = [];
    for (var i = 0; i < this.preProcessors.length; i++) {
        preProcessors.push(this.preProcessors[i].preProcessor);
    }
    return preProcessors;
};
/**
 *
 * @returns {Array}
 * @private
 */
PluginManager.prototype.getPostProcessors = function() {
    var postProcessors = [];
    for (var i = 0; i < this.postProcessors.length; i++) {
        postProcessors.push(this.postProcessors[i].postProcessor);
    }
    return postProcessors;
};
/**
 *
 * @returns {Array}
 * @private
 */
PluginManager.prototype.getVisitors = function() {
    return this.visitors;
};

PluginManager.prototype.visitor = function() {
    var self = this;
    return {
        first: function() {
            self.iterator = -1;
            return self.visitors[self.iterator];
        },
        get: function() {
            self.iterator += 1;
            return self.visitors[self.iterator];
        }
    };
};
/**
 *
 * @returns {Array}
 * @private
 */
PluginManager.prototype.getFileManagers = function() {
    return this.fileManagers;
};

//
module.exports = PluginManagerFactory;

},{}],46:[function(require,module,exports){
var PromiseConstructor,
    utils = require('./utils');

module.exports = function(environment, ParseTree, ImportManager) {
    var render = function (input, options, callback) {
        if (typeof options === 'function') {
            callback = options;
            options = utils.copyOptions(this.options, {});
        }
        else {
            options = utils.copyOptions(this.options, options || {});
        }

        if (!callback) {
            if (!PromiseConstructor) {
                PromiseConstructor = typeof Promise === 'undefined' ? require('promise') : Promise;
            }
            var self = this;
            return new PromiseConstructor(function (resolve, reject) {
                render.call(self, input, options, function(err, output) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(output);
                    }
                });
            });
        } else {
            this.parse(input, options, function(err, root, imports, options) {
                if (err) { return callback(err); }

                var result;
                try {
                    var parseTree = new ParseTree(root, imports);
                    result = parseTree.toCSS(options);
                }
                catch (err) { return callback(err); }

                callback(null, result);
            });
        }
    };

    return render;
};

},{"./utils":89,"promise":undefined}],47:[function(require,module,exports){
module.exports = function (SourceMapOutput, environment) {

    var SourceMapBuilder = function (options) {
        this.options = options;
    };

    SourceMapBuilder.prototype.toCSS = function(rootNode, options, imports) {
        var sourceMapOutput = new SourceMapOutput(
            {
                contentsIgnoredCharsMap: imports.contentsIgnoredChars,
                rootNode: rootNode,
                contentsMap: imports.contents,
                sourceMapFilename: this.options.sourceMapFilename,
                sourceMapURL: this.options.sourceMapURL,
                outputFilename: this.options.sourceMapOutputFilename,
                sourceMapBasepath: this.options.sourceMapBasepath,
                sourceMapRootpath: this.options.sourceMapRootpath,
                outputSourceFiles: this.options.outputSourceFiles,
                sourceMapGenerator: this.options.sourceMapGenerator,
                sourceMapFileInline: this.options.sourceMapFileInline
            });

        var css = sourceMapOutput.toCSS(options);
        this.sourceMap = sourceMapOutput.sourceMap;
        this.sourceMapURL = sourceMapOutput.sourceMapURL;
        if (this.options.sourceMapInputFilename) {
            this.sourceMapInputFilename = sourceMapOutput.normalizeFilename(this.options.sourceMapInputFilename);
        }
        if (this.options.sourceMapBasepath !== undefined && this.sourceMapURL !== undefined) {
            this.sourceMapURL = sourceMapOutput.removeBasepath(this.sourceMapURL);
        }
        return css + this.getCSSAppendage();
    };

    SourceMapBuilder.prototype.getCSSAppendage = function() {

        var sourceMapURL = this.sourceMapURL;
        if (this.options.sourceMapFileInline) {
            if (this.sourceMap === undefined) {
                return '';
            }
            sourceMapURL = 'data:application/json;base64,' + environment.encodeBase64(this.sourceMap);
        }

        if (sourceMapURL) {
            return '/*# sourceMappingURL=' + sourceMapURL + ' */';
        }
        return '';
    };

    SourceMapBuilder.prototype.getExternalSourceMap = function() {
        return this.sourceMap;
    };
    SourceMapBuilder.prototype.setExternalSourceMap = function(sourceMap) {
        this.sourceMap = sourceMap;
    };

    SourceMapBuilder.prototype.isInline = function() {
        return this.options.sourceMapFileInline;
    };
    SourceMapBuilder.prototype.getSourceMapURL = function() {
        return this.sourceMapURL;
    };
    SourceMapBuilder.prototype.getOutputFilename = function() {
        return this.options.sourceMapOutputFilename;
    };
    SourceMapBuilder.prototype.getInputFilename = function() {
        return this.sourceMapInputFilename;
    };

    return SourceMapBuilder;
};

},{}],48:[function(require,module,exports){
module.exports = function (environment) {

    var SourceMapOutput = function (options) {
        this._css = [];
        this._rootNode = options.rootNode;
        this._contentsMap = options.contentsMap;
        this._contentsIgnoredCharsMap = options.contentsIgnoredCharsMap;
        if (options.sourceMapFilename) {
            this._sourceMapFilename = options.sourceMapFilename.replace(/\\/g, '/');
        }
        this._outputFilename = options.outputFilename;
        this.sourceMapURL = options.sourceMapURL;
        if (options.sourceMapBasepath) {
            this._sourceMapBasepath = options.sourceMapBasepath.replace(/\\/g, '/');
        }
        if (options.sourceMapRootpath) {
            this._sourceMapRootpath = options.sourceMapRootpath.replace(/\\/g, '/');
            if (this._sourceMapRootpath.charAt(this._sourceMapRootpath.length - 1) !== '/') {
                this._sourceMapRootpath += '/';
            }
        } else {
            this._sourceMapRootpath = '';
        }
        this._outputSourceFiles = options.outputSourceFiles;
        this._sourceMapGeneratorConstructor = environment.getSourceMapGenerator();

        this._lineNumber = 0;
        this._column = 0;
    };

    SourceMapOutput.prototype.removeBasepath = function(path) {
        if (this._sourceMapBasepath && path.indexOf(this._sourceMapBasepath) === 0) {
            path = path.substring(this._sourceMapBasepath.length);
            if (path.charAt(0) === '\\' || path.charAt(0) === '/') {
                path = path.substring(1);
            }
        }

        return path;
    };

    SourceMapOutput.prototype.normalizeFilename = function(filename) {
        filename = filename.replace(/\\/g, '/');
        filename = this.removeBasepath(filename);
        return (this._sourceMapRootpath || '') + filename;
    };

    SourceMapOutput.prototype.add = function(chunk, fileInfo, index, mapLines) {

        // ignore adding empty strings
        if (!chunk) {
            return;
        }

        var lines,
            sourceLines,
            columns,
            sourceColumns,
            i;

        if (fileInfo && fileInfo.filename) {
            var inputSource = this._contentsMap[fileInfo.filename];

            // remove vars/banner added to the top of the file
            if (this._contentsIgnoredCharsMap[fileInfo.filename]) {
                // adjust the index
                index -= this._contentsIgnoredCharsMap[fileInfo.filename];
                if (index < 0) { index = 0; }
                // adjust the source
                inputSource = inputSource.slice(this._contentsIgnoredCharsMap[fileInfo.filename]);
            }
            inputSource = inputSource.substring(0, index);
            sourceLines = inputSource.split('\n');
            sourceColumns = sourceLines[sourceLines.length - 1];
        }

        lines = chunk.split('\n');
        columns = lines[lines.length - 1];

        if (fileInfo && fileInfo.filename) {
            if (!mapLines) {
                this._sourceMapGenerator.addMapping({ generated: { line: this._lineNumber + 1, column: this._column},
                    original: { line: sourceLines.length, column: sourceColumns.length},
                    source: this.normalizeFilename(fileInfo.filename)});
            } else {
                for (i = 0; i < lines.length; i++) {
                    this._sourceMapGenerator.addMapping({ generated: { line: this._lineNumber + i + 1, column: i === 0 ? this._column : 0},
                        original: { line: sourceLines.length + i, column: i === 0 ? sourceColumns.length : 0},
                        source: this.normalizeFilename(fileInfo.filename)});
                }
            }
        }

        if (lines.length === 1) {
            this._column += columns.length;
        } else {
            this._lineNumber += lines.length - 1;
            this._column = columns.length;
        }

        this._css.push(chunk);
    };

    SourceMapOutput.prototype.isEmpty = function() {
        return this._css.length === 0;
    };

    SourceMapOutput.prototype.toCSS = function(context) {
        this._sourceMapGenerator = new this._sourceMapGeneratorConstructor({ file: this._outputFilename, sourceRoot: null });

        if (this._outputSourceFiles) {
            for (var filename in this._contentsMap) {
                if (this._contentsMap.hasOwnProperty(filename)) {
                    var source = this._contentsMap[filename];
                    if (this._contentsIgnoredCharsMap[filename]) {
                        source = source.slice(this._contentsIgnoredCharsMap[filename]);
                    }
                    this._sourceMapGenerator.setSourceContent(this.normalizeFilename(filename), source);
                }
            }
        }

        this._rootNode.genCSS(context, this);

        if (this._css.length > 0) {
            var sourceMapURL,
                sourceMapContent = JSON.stringify(this._sourceMapGenerator.toJSON());

            if (this.sourceMapURL) {
                sourceMapURL = this.sourceMapURL;
            } else if (this._sourceMapFilename) {
                sourceMapURL = this._sourceMapFilename;
            }
            this.sourceMapURL = sourceMapURL;

            this.sourceMap = sourceMapContent;
        }

        return this._css.join('');
    };

    return SourceMapOutput;
};

},{}],49:[function(require,module,exports){
var contexts = require('./contexts'),
    visitor = require('./visitors'),
    tree = require('./tree');

module.exports = function(root, options) {
    options = options || {};
    var evaldRoot,
        variables = options.variables,
        evalEnv = new contexts.Eval(options);

    //
    // Allows setting variables with a hash, so:
    //
    //   `{ color: new tree.Color('#f01') }` will become:
    //
    //   new tree.Declaration('@color',
    //     new tree.Value([
    //       new tree.Expression([
    //         new tree.Color('#f01')
    //       ])
    //     ])
    //   )
    //
    if (typeof variables === 'object' && !Array.isArray(variables)) {
        variables = Object.keys(variables).map(function (k) {
            var value = variables[k];

            if (!(value instanceof tree.Value)) {
                if (!(value instanceof tree.Expression)) {
                    value = new tree.Expression([value]);
                }
                value = new tree.Value([value]);
            }
            return new tree.Declaration('@' + k, value, false, null, 0);
        });
        evalEnv.frames = [new tree.Ruleset(null, variables)];
    }

    var visitors = [
            new visitor.JoinSelectorVisitor(),
            new visitor.MarkVisibleSelectorsVisitor(true),
            new visitor.ExtendVisitor(),
            new visitor.ToCSSVisitor({compress: Boolean(options.compress)})
        ], preEvalVisitors = [], v, visitorIterator;

    /**
     * first() / get() allows visitors to be added while visiting
     * 
     * @todo Add scoping for visitors just like functions for @plugin; right now they're global
     */
    if (options.pluginManager) {
        visitorIterator = options.pluginManager.visitor();
        for (var i = 0; i < 2; i++) {
            visitorIterator.first();
            while ((v = visitorIterator.get())) {
                if (v.isPreEvalVisitor) {
                    if (i === 0 || preEvalVisitors.indexOf(v) === -1) {
                        preEvalVisitors.push(v);
                        v.run(root);
                    }
                }
                else {
                    if (i === 0 || visitors.indexOf(v) === -1) {
                        if (v.isPreVisitor) {
                            visitors.unshift(v);
                        }
                        else {
                            visitors.push(v);
                        }
                    }
                }
            }
        }
    }
    
    evaldRoot = root.eval(evalEnv);

    for (var i = 0; i < visitors.length; i++) {
        visitors[i].run(evaldRoot);
    }

    // Run any remaining visitors added after eval pass
    if (options.pluginManager) {
        visitorIterator.first();
        while ((v = visitorIterator.get())) {
            if (visitors.indexOf(v) === -1 && preEvalVisitors.indexOf(v) === -1) {
                v.run(evaldRoot);
            }
        }
    }

    return evaldRoot;
};

},{"./contexts":13,"./tree":67,"./visitors":93}],50:[function(require,module,exports){
var Node = require('./node');

var Anonymous = function (value, index, currentFileInfo, mapLines, rulesetLike, visibilityInfo) {
    this.value = value;
    this._index = index;
    this._fileInfo = currentFileInfo;
    this.mapLines = mapLines;
    this.rulesetLike = (typeof rulesetLike === 'undefined') ? false : rulesetLike;
    this.allowRoot = true;
    this.copyVisibilityInfo(visibilityInfo);
};
Anonymous.prototype = new Node();
Anonymous.prototype.type = 'Anonymous';
Anonymous.prototype.eval = function () {
    return new Anonymous(this.value, this._index, this._fileInfo, this.mapLines, this.rulesetLike, this.visibilityInfo());
};
Anonymous.prototype.compare = function (other) {
    return other.toCSS && this.toCSS() === other.toCSS() ? 0 : undefined;
};
Anonymous.prototype.isRulesetLike = function() {
    return this.rulesetLike;
};
Anonymous.prototype.genCSS = function (context, output) {
    this.nodeVisible = Boolean(this.value);
    if (this.nodeVisible) {
        output.add(this.value, this._fileInfo, this._index, this.mapLines);
    }
};
module.exports = Anonymous;

},{"./node":76}],51:[function(require,module,exports){
var Node = require('./node');

var Assignment = function (key, val) {
    this.key = key;
    this.value = val;
};

Assignment.prototype = new Node();
Assignment.prototype.type = 'Assignment';
Assignment.prototype.accept = function (visitor) {
    this.value = visitor.visit(this.value);
};
Assignment.prototype.eval = function (context) {
    if (this.value.eval) {
        return new Assignment(this.key, this.value.eval(context));
    }
    return this;
};
Assignment.prototype.genCSS = function (context, output) {
    output.add(this.key + '=');
    if (this.value.genCSS) {
        this.value.genCSS(context, output);
    } else {
        output.add(this.value);
    }
};
module.exports = Assignment;

},{"./node":76}],52:[function(require,module,exports){
var Node = require('./node'),
    Selector = require('./selector'),
    Ruleset = require('./ruleset'),
    Anonymous = require('./anonymous');

var AtRule = function (name, value, rules, index, currentFileInfo, debugInfo, isRooted, visibilityInfo) {
    var i;

    this.name  = name;
    this.value = (value instanceof Node) ? value : (value ? new Anonymous(value) : value);
    if (rules) {
        if (Array.isArray(rules)) {
            this.rules = rules;
        } else {
            this.rules = [rules];
            this.rules[0].selectors = (new Selector([], null, null, index, currentFileInfo)).createEmptySelectors();
        }
        for (i = 0; i < this.rules.length; i++) {
            this.rules[i].allowImports = true;
        }
        this.setParent(this.rules, this);
    }
    this._index = index;
    this._fileInfo = currentFileInfo;
    this.debugInfo = debugInfo;
    this.isRooted = isRooted || false;
    this.copyVisibilityInfo(visibilityInfo);
    this.allowRoot = true;
};

AtRule.prototype = new Node();
AtRule.prototype.type = 'AtRule';
AtRule.prototype.accept = function (visitor) {
    var value = this.value, rules = this.rules;
    if (rules) {
        this.rules = visitor.visitArray(rules);
    }
    if (value) {
        this.value = visitor.visit(value);
    }
};
AtRule.prototype.isRulesetLike = function() {
    return this.rules || !this.isCharset();
};
AtRule.prototype.isCharset = function() {
    return '@charset' === this.name;
};
AtRule.prototype.genCSS = function (context, output) {
    var value = this.value, rules = this.rules;
    output.add(this.name, this.fileInfo(), this.getIndex());
    if (value) {
        output.add(' ');
        value.genCSS(context, output);
    }
    if (rules) {
        this.outputRuleset(context, output, rules);
    } else {
        output.add(';');
    }
};
AtRule.prototype.eval = function (context) {
    var mediaPathBackup, mediaBlocksBackup, value = this.value, rules = this.rules;

    // media stored inside other atrule should not bubble over it
    // backpup media bubbling information
    mediaPathBackup = context.mediaPath;
    mediaBlocksBackup = context.mediaBlocks;
    // deleted media bubbling information
    context.mediaPath = [];
    context.mediaBlocks = [];

    if (value) {
        value = value.eval(context);
    }
    if (rules) {
        // assuming that there is only one rule at this point - that is how parser constructs the rule
        rules = [rules[0].eval(context)];
        rules[0].root = true;
    }
    // restore media bubbling information
    context.mediaPath = mediaPathBackup;
    context.mediaBlocks = mediaBlocksBackup;

    return new AtRule(this.name, value, rules,
        this.getIndex(), this.fileInfo(), this.debugInfo, this.isRooted, this.visibilityInfo());
};
AtRule.prototype.variable = function (name) {
    if (this.rules) {
        // assuming that there is only one rule at this point - that is how parser constructs the rule
        return Ruleset.prototype.variable.call(this.rules[0], name);
    }
};
AtRule.prototype.find = function () {
    if (this.rules) {
        // assuming that there is only one rule at this point - that is how parser constructs the rule
        return Ruleset.prototype.find.apply(this.rules[0], arguments);
    }
};
AtRule.prototype.rulesets = function () {
    if (this.rules) {
        // assuming that there is only one rule at this point - that is how parser constructs the rule
        return Ruleset.prototype.rulesets.apply(this.rules[0]);
    }
};
AtRule.prototype.outputRuleset = function (context, output, rules) {
    var ruleCnt = rules.length, i;
    context.tabLevel = (context.tabLevel | 0) + 1;

    // Compressed
    if (context.compress) {
        output.add('{');
        for (i = 0; i < ruleCnt; i++) {
            rules[i].genCSS(context, output);
        }
        output.add('}');
        context.tabLevel--;
        return;
    }

    // Non-compressed
    var tabSetStr = '\n' + Array(context.tabLevel).join('  '), tabRuleStr = tabSetStr + '  ';
    if (!ruleCnt) {
        output.add(' {' + tabSetStr + '}');
    } else {
        output.add(' {' + tabRuleStr);
        rules[0].genCSS(context, output);
        for (i = 1; i < ruleCnt; i++) {
            output.add(tabRuleStr);
            rules[i].genCSS(context, output);
        }
        output.add(tabSetStr + '}');
    }

    context.tabLevel--;
};
module.exports = AtRule;

},{"./anonymous":50,"./node":76,"./ruleset":81,"./selector":82}],53:[function(require,module,exports){
var Node = require('./node');

var Attribute = function (key, op, value) {
    this.key = key;
    this.op = op;
    this.value = value;
};
Attribute.prototype = new Node();
Attribute.prototype.type = 'Attribute';
Attribute.prototype.eval = function (context) {
    return new Attribute(this.key.eval ? this.key.eval(context) : this.key,
        this.op, (this.value && this.value.eval) ? this.value.eval(context) : this.value);
};
Attribute.prototype.genCSS = function (context, output) {
    output.add(this.toCSS(context));
};
Attribute.prototype.toCSS = function (context) {
    var value = this.key.toCSS ? this.key.toCSS(context) : this.key;

    if (this.op) {
        value += this.op;
        value += (this.value.toCSS ? this.value.toCSS(context) : this.value);
    }

    return '[' + value + ']';
};
module.exports = Attribute;

},{"./node":76}],54:[function(require,module,exports){
var Node = require('./node'),
    Anonymous = require('./anonymous'),
    FunctionCaller = require('../functions/function-caller');
//
// A function call node.
//
var Call = function (name, args, index, currentFileInfo) {
    this.name = name;
    this.args = args;
    this.calc = name === 'calc';
    this._index = index;
    this._fileInfo = currentFileInfo;
};
Call.prototype = new Node();
Call.prototype.type = 'Call';
Call.prototype.accept = function (visitor) {
    if (this.args) {
        this.args = visitor.visitArray(this.args);
    }
};
//
// When evaluating a function call,
// we either find the function in the functionRegistry,
// in which case we call it, passing the  evaluated arguments,
// if this returns null or we cannot find the function, we
// simply print it out as it appeared originally [2].
//
// The reason why we evaluate the arguments, is in the case where
// we try to pass a variable to a function, like: `saturate(@color)`.
// The function should receive the value, not the variable.
//
Call.prototype.eval = function (context) {
    /**
     * Turn off math for calc(), and switch back on for evaluating nested functions
     */
    var currentMathContext = context.mathOn;
    context.mathOn = !this.calc;
    if (this.calc || context.inCalc) {
        context.enterCalc();
    }
    var args = this.args.map(function (a) { return a.eval(context); });
    if (this.calc || context.inCalc) {
        context.exitCalc();
    }
    context.mathOn = currentMathContext;

    var result, funcCaller = new FunctionCaller(this.name, context, this.getIndex(), this.fileInfo());
    
    if (funcCaller.isValid()) {
        try {
            result = funcCaller.call(args);
        } catch (e) {
            throw { 
                type: e.type || 'Runtime',
                message: 'error evaluating function `' + this.name + '`' +
                         (e.message ? ': ' + e.message : ''),
                index: this.getIndex(), 
                filename: this.fileInfo().filename,
                line: e.lineNumber,
                column: e.columnNumber
            };
        }

        if (result !== null && result !== undefined) {
            // Results that that are not nodes are cast as Anonymous nodes
            // Falsy values or booleans are returned as empty nodes
            if (!(result instanceof Node)) {
                if (!result || result === true) {
                    result = new Anonymous(null); 
                }
                else {
                    result = new Anonymous(result.toString()); 
                }
                
            }
            result._index = this._index;
            result._fileInfo = this._fileInfo;
            return result;
        }

    }

    return new Call(this.name, args, this.getIndex(), this.fileInfo());
};
Call.prototype.genCSS = function (context, output) {
    output.add(this.name + '(', this.fileInfo(), this.getIndex());

    for (var i = 0; i < this.args.length; i++) {
        this.args[i].genCSS(context, output);
        if (i + 1 < this.args.length) {
            output.add(', ');
        }
    }

    output.add(')');
};
module.exports = Call;

},{"../functions/function-caller":26,"./anonymous":50,"./node":76}],55:[function(require,module,exports){
var Node = require('./node'),
    colors = require('../data/colors');

//
// RGB Colors - #ff0014, #eee
//
var Color = function (rgb, a, originalForm) {
    var self = this;
    //
    // The end goal here, is to parse the arguments
    // into an integer triplet, such as `128, 255, 0`
    //
    // This facilitates operations and conversions.
    //
    if (Array.isArray(rgb)) {
        this.rgb = rgb;
    } else if (rgb.length >= 6) {
        this.rgb = [];
        rgb.match(/.{2}/g).map(function (c, i) {
            if (i < 3) {
                self.rgb.push(parseInt(c, 16));
            } else {
                self.alpha = (parseInt(c, 16)) / 255;
            }
        });
    } else {
        this.rgb = [];
        rgb.split('').map(function (c, i) {
            if (i < 3) {
                self.rgb.push(parseInt(c + c, 16));
            } else {
                self.alpha = (parseInt(c + c, 16)) / 255;
            }
        });
    }
    this.alpha = this.alpha || (typeof a === 'number' ? a : 1);
    if (typeof originalForm !== 'undefined') {
        this.value = originalForm;
    }
};

Color.prototype = new Node();
Color.prototype.type = 'Color';

function clamp(v, max) {
    return Math.min(Math.max(v, 0), max);
}

function toHex(v) {
    return '#' + v.map(function (c) {
        c = clamp(Math.round(c), 255);
        return (c < 16 ? '0' : '') + c.toString(16);
    }).join('');
}

Color.prototype.luma = function () {
    var r = this.rgb[0] / 255,
        g = this.rgb[1] / 255,
        b = this.rgb[2] / 255;

    r = (r <= 0.03928) ? r / 12.92 : Math.pow(((r + 0.055) / 1.055), 2.4);
    g = (g <= 0.03928) ? g / 12.92 : Math.pow(((g + 0.055) / 1.055), 2.4);
    b = (b <= 0.03928) ? b / 12.92 : Math.pow(((b + 0.055) / 1.055), 2.4);

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};
Color.prototype.genCSS = function (context, output) {
    output.add(this.toCSS(context));
};
Color.prototype.toCSS = function (context, doNotCompress) {
    var compress = context && context.compress && !doNotCompress, color, alpha,
        colorFunction, args = [];

    // `value` is set if this color was originally
    // converted from a named color string so we need
    // to respect this and try to output named color too.
    alpha = this.fround(context, this.alpha);

    if (this.value) {
        if (this.value.indexOf('rgb') === 0) {
            if (alpha < 1) {
                colorFunction = 'rgba';
            }
        } else if (this.value.indexOf('hsl') === 0) {
            if (alpha < 1) {
                colorFunction = 'hsla';
            } else {
                colorFunction = 'hsl';
            }
        } else {
            return this.value;
        }
    } else {
        if (alpha < 1) {
            colorFunction = 'rgba';
        }
    }

    switch (colorFunction) {
        case 'rgba':
            args = this.rgb.map(function (c) {
                return clamp(Math.round(c), 255);
            }).concat(clamp(alpha, 1));
            break;
        case 'hsla':
            args.push(clamp(alpha, 1));
        case 'hsl':
            color = this.toHSL();
            args = [
                this.fround(context, color.h),
                this.fround(context, color.s * 100) + '%',
                this.fround(context, color.l * 100) + '%'
            ].concat(args);
    }

    if (colorFunction) {
        // Values are capped between `0` and `255`, rounded and zero-padded.
        return colorFunction + '(' + args.join(',' + (compress ? '' : ' ')) + ')';
    }

    color = this.toRGB();

    if (compress) {
        var splitcolor = color.split('');

        // Convert color to short format
        if (splitcolor[1] === splitcolor[2] && splitcolor[3] === splitcolor[4] && splitcolor[5] === splitcolor[6]) {
            color = '#' + splitcolor[1] + splitcolor[3] + splitcolor[5];
        }
    }

    return color;
};

//
// Operations have to be done per-channel, if not,
// channels will spill onto each other. Once we have
// our result, in the form of an integer triplet,
// we create a new Color node to hold the result.
//
Color.prototype.operate = function (context, op, other) {
    var rgb = new Array(3);
    var alpha = this.alpha * (1 - other.alpha) + other.alpha;
    for (var c = 0; c < 3; c++) {
        rgb[c] = this._operate(context, op, this.rgb[c], other.rgb[c]);
    }
    return new Color(rgb, alpha);
};
Color.prototype.toRGB = function () {
    return toHex(this.rgb);
};
Color.prototype.toHSL = function () {
    var r = this.rgb[0] / 255,
        g = this.rgb[1] / 255,
        b = this.rgb[2] / 255,
        a = this.alpha;

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2, d = max - min;

    if (max === min) {
        h = s = 0;
    } else {
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2;               break;
            case b: h = (r - g) / d + 4;               break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s, l: l, a: a };
};
// Adapted from http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
Color.prototype.toHSV = function () {
    var r = this.rgb[0] / 255,
        g = this.rgb[1] / 255,
        b = this.rgb[2] / 255,
        a = this.alpha;

    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, v = max;

    var d = max - min;
    if (max === 0) {
        s = 0;
    } else {
        s = d / max;
    }

    if (max === min) {
        h = 0;
    } else {
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s, v: v, a: a };
};
Color.prototype.toARGB = function () {
    return toHex([this.alpha * 255].concat(this.rgb));
};
Color.prototype.compare = function (x) {
    return (x.rgb &&
        x.rgb[0] === this.rgb[0] &&
        x.rgb[1] === this.rgb[1] &&
        x.rgb[2] === this.rgb[2] &&
        x.alpha  === this.alpha) ? 0 : undefined;
};

Color.fromKeyword = function(keyword) {
    var c, key = keyword.toLowerCase();
    if (colors.hasOwnProperty(key)) {
        c = new Color(colors[key].slice(1));
    }
    else if (key === 'transparent') {
        c = new Color([0, 0, 0], 0);
    }

    if (c) {
        c.value = keyword;
        return c;
    }
};
module.exports = Color;

},{"../data/colors":14,"./node":76}],56:[function(require,module,exports){
var Node = require('./node');

var Combinator = function (value) {
    if (value === ' ') {
        this.value = ' ';
        this.emptyOrWhitespace = true;
    } else {
        this.value = value ? value.trim() : '';
        this.emptyOrWhitespace = this.value === '';
    }
};
Combinator.prototype = new Node();
Combinator.prototype.type = 'Combinator';
var _noSpaceCombinators = {
    '': true,
    ' ': true,
    '|': true
};
Combinator.prototype.genCSS = function (context, output) {
    var spaceOrEmpty = (context.compress || _noSpaceCombinators[this.value]) ? '' : ' ';
    output.add(spaceOrEmpty + this.value + spaceOrEmpty);
};
module.exports = Combinator;

},{"./node":76}],57:[function(require,module,exports){
var Node = require('./node'),
    getDebugInfo = require('./debug-info');

var Comment = function (value, isLineComment, index, currentFileInfo) {
    this.value = value;
    this.isLineComment = isLineComment;
    this._index = index;
    this._fileInfo = currentFileInfo;
    this.allowRoot = true;
};
Comment.prototype = new Node();
Comment.prototype.type = 'Comment';
Comment.prototype.genCSS = function (context, output) {
    if (this.debugInfo) {
        output.add(getDebugInfo(context, this), this.fileInfo(), this.getIndex());
    }
    output.add(this.value);
};
Comment.prototype.isSilent = function(context) {
    var isCompressed = context.compress && this.value[2] !== '!';
    return this.isLineComment || isCompressed;
};
module.exports = Comment;

},{"./debug-info":59,"./node":76}],58:[function(require,module,exports){
var Node = require('./node');

var Condition = function (op, l, r, i, negate) {
    this.op = op.trim();
    this.lvalue = l;
    this.rvalue = r;
    this._index = i;
    this.negate = negate;
};
Condition.prototype = new Node();
Condition.prototype.type = 'Condition';
Condition.prototype.accept = function (visitor) {
    this.lvalue = visitor.visit(this.lvalue);
    this.rvalue = visitor.visit(this.rvalue);
};
Condition.prototype.eval = function (context) {
    var result = (function (op, a, b) {
        switch (op) {
            case 'and': return a && b;
            case 'or':  return a || b;
            default:
                switch (Node.compare(a, b)) {
                    case -1:
                        return op === '<' || op === '=<' || op === '<=';
                    case 0:
                        return op === '=' || op === '>=' || op === '=<' || op === '<=';
                    case 1:
                        return op === '>' || op === '>=';
                    default:
                        return false;
                }
        }
    })(this.op, this.lvalue.eval(context), this.rvalue.eval(context));

    return this.negate ? !result : result;
};
module.exports = Condition;

},{"./node":76}],59:[function(require,module,exports){
var debugInfo = function(context, ctx, lineSeparator) {
    var result = '';
    if (context.dumpLineNumbers && !context.compress) {
        switch (context.dumpLineNumbers) {
            case 'comments':
                result = debugInfo.asComment(ctx);
                break;
            case 'mediaquery':
                result = debugInfo.asMediaQuery(ctx);
                break;
            case 'all':
                result = debugInfo.asComment(ctx) + (lineSeparator || '') + debugInfo.asMediaQuery(ctx);
                break;
        }
    }
    return result;
};

debugInfo.asComment = function(ctx) {
    return '/* line ' + ctx.debugInfo.lineNumber + ', ' + ctx.debugInfo.fileName + ' */\n';
};

debugInfo.asMediaQuery = function(ctx) {
    var filenameWithProtocol = ctx.debugInfo.fileName;
    if (!/^[a-z]+:\/\//i.test(filenameWithProtocol)) {
        filenameWithProtocol = 'file://' + filenameWithProtocol;
    }
    return '@media -sass-debug-info{filename{font-family:' +
        filenameWithProtocol.replace(/([.:\/\\])/g, function (a) {
            if (a == '\\') {
                a = '\/';
            }
            return '\\' + a;
        }) +
        '}line{font-family:\\00003' + ctx.debugInfo.lineNumber + '}}\n';
};

module.exports = debugInfo;

},{}],60:[function(require,module,exports){
var Node = require('./node'),
    Value = require('./value'),
    Keyword = require('./keyword'),
    Anonymous = require('./anonymous'),
    MATH = require('../constants').Math;

var Declaration = function (name, value, important, merge, index, currentFileInfo, inline, variable) {
    this.name = name;
    this.value = (value instanceof Node) ? value : new Value([value ? new Anonymous(value) : null]);
    this.important = important ? ' ' + important.trim() : '';
    this.merge = merge;
    this._index = index;
    this._fileInfo = currentFileInfo;
    this.inline = inline || false;
    this.variable = (variable !== undefined) ? variable
        : (name.charAt && (name.charAt(0) === '@'));
    this.allowRoot = true;
    this.setParent(this.value, this);
};

function evalName(context, name) {
    var value = '', i, n = name.length,
        output = {add: function (s) {value += s;}};
    for (i = 0; i < n; i++) {
        name[i].eval(context).genCSS(context, output);
    }
    return value;
}

Declaration.prototype = new Node();
Declaration.prototype.type = 'Declaration';
Declaration.prototype.genCSS = function (context, output) {
    output.add(this.name + (context.compress ? ':' : ': '), this.fileInfo(), this.getIndex());
    try {
        this.value.genCSS(context, output);
    }
    catch (e) {
        e.index = this._index;
        e.filename = this._fileInfo.filename;
        throw e;
    }
    output.add(this.important + ((this.inline || (context.lastRule && context.compress)) ? '' : ';'), this._fileInfo, this._index);
};
Declaration.prototype.eval = function (context) {
    var mathBypass = false, prevMath, name = this.name, evaldValue, variable = this.variable;
    if (typeof name !== 'string') {
        // expand 'primitive' name directly to get
        // things faster (~10% for benchmark.less):
        name = (name.length === 1) && (name[0] instanceof Keyword) ?
                name[0].value : evalName(context, name);
        variable = false; // never treat expanded interpolation as new variable name
    }

    // @todo remove when parens-division is default
    if (name === 'font' && context.math === MATH.ALWAYS) {
        mathBypass = true;
        prevMath = context.math;
        context.math = MATH.PARENS_DIVISION;
    }
    try {
        context.importantScope.push({});
        evaldValue = this.value.eval(context);

        if (!this.variable && evaldValue.type === 'DetachedRuleset') {
            throw { message: 'Rulesets cannot be evaluated on a property.',
                index: this.getIndex(), filename: this.fileInfo().filename };
        }
        var important = this.important,
            importantResult = context.importantScope.pop();
        if (!important && importantResult.important) {
            important = importantResult.important;
        }

        return new Declaration(name,
                          evaldValue,
                          important,
                          this.merge,
                          this.getIndex(), this.fileInfo(), this.inline,
                              variable);
    }
    catch (e) {
        if (typeof e.index !== 'number') {
            e.index = this.getIndex();
            e.filename = this.fileInfo().filename;
        }
        throw e;
    }
    finally {
        if (mathBypass) {
            context.math = prevMath;
        }
    }
};
Declaration.prototype.makeImportant = function () {
    return new Declaration(this.name,
                          this.value,
                          '!important',
                          this.merge,
                          this.getIndex(), this.fileInfo(), this.inline);
};

module.exports = Declaration;
},{"../constants":12,"./anonymous":50,"./keyword":70,"./node":76,"./value":86}],61:[function(require,module,exports){
var Node = require('./node'),
    contexts = require('../contexts'),
    utils = require('../utils');

var DetachedRuleset = function (ruleset, frames) {
    this.ruleset = ruleset;
    this.frames = frames;
    this.setParent(this.ruleset, this);
};
DetachedRuleset.prototype = new Node();
DetachedRuleset.prototype.type = 'DetachedRuleset';
DetachedRuleset.prototype.evalFirst = true;
DetachedRuleset.prototype.accept = function (visitor) {
    this.ruleset = visitor.visit(this.ruleset);
};
DetachedRuleset.prototype.eval = function (context) {
    var frames = this.frames || utils.copyArray(context.frames);
    return new DetachedRuleset(this.ruleset, frames);
};
DetachedRuleset.prototype.callEval = function (context) {
    return this.ruleset.eval(this.frames ? new contexts.Eval(context, this.frames.concat(context.frames)) : context);
};
module.exports = DetachedRuleset;

},{"../contexts":13,"../utils":89,"./node":76}],62:[function(require,module,exports){
var Node = require('./node'),
    unitConversions = require('../data/unit-conversions'),
    Unit = require('./unit'),
    Color = require('./color');

//
// A number with a unit
//
var Dimension = function (value, unit) {
    this.value = parseFloat(value);
    if (isNaN(this.value)) {
        throw new Error('Dimension is not a number.');
    }
    this.unit = (unit && unit instanceof Unit) ? unit :
      new Unit(unit ? [unit] : undefined);
    this.setParent(this.unit, this);
};

Dimension.prototype = new Node();
Dimension.prototype.type = 'Dimension';
Dimension.prototype.accept = function (visitor) {
    this.unit = visitor.visit(this.unit);
};
Dimension.prototype.eval = function (context) {
    return this;
};
Dimension.prototype.toColor = function () {
    return new Color([this.value, this.value, this.value]);
};
Dimension.prototype.genCSS = function (context, output) {
    if ((context && context.strictUnits) && !this.unit.isSingular()) {
        throw new Error('Multiple units in dimension. Correct the units or use the unit function. Bad unit: ' + this.unit.toString());
    }

    var value = this.fround(context, this.value),
        strValue = String(value);

    if (value !== 0 && value < 0.000001 && value > -0.000001) {
        // would be output 1e-6 etc.
        strValue = value.toFixed(20).replace(/0+$/, '');
    }

    if (context && context.compress) {
        // Zero values doesn't need a unit
        if (value === 0 && this.unit.isLength()) {
            output.add(strValue);
            return;
        }

        // Float values doesn't need a leading zero
        if (value > 0 && value < 1) {
            strValue = (strValue).substr(1);
        }
    }

    output.add(strValue);
    this.unit.genCSS(context, output);
};

// In an operation between two Dimensions,
// we default to the first Dimension's unit,
// so `1px + 2` will yield `3px`.
Dimension.prototype.operate = function (context, op, other) {
    /* jshint noempty:false */
    var value = this._operate(context, op, this.value, other.value),
        unit = this.unit.clone();

    if (op === '+' || op === '-') {
        if (unit.numerator.length === 0 && unit.denominator.length === 0) {
            unit = other.unit.clone();
            if (this.unit.backupUnit) {
                unit.backupUnit = this.unit.backupUnit;
            }
        } else if (other.unit.numerator.length === 0 && unit.denominator.length === 0) {
            // do nothing
        } else {
            other = other.convertTo(this.unit.usedUnits());

            if (context.strictUnits && other.unit.toString() !== unit.toString()) {
                throw new Error('Incompatible units. Change the units or use the unit function. Bad units: \'' + unit.toString() +
                    '\' and \'' + other.unit.toString() + '\'.');
            }

            value = this._operate(context, op, this.value, other.value);
        }
    } else if (op === '*') {
        unit.numerator = unit.numerator.concat(other.unit.numerator).sort();
        unit.denominator = unit.denominator.concat(other.unit.denominator).sort();
        unit.cancel();
    } else if (op === '/') {
        unit.numerator = unit.numerator.concat(other.unit.denominator).sort();
        unit.denominator = unit.denominator.concat(other.unit.numerator).sort();
        unit.cancel();
    }
    return new Dimension(value, unit);
};
Dimension.prototype.compare = function (other) {
    var a, b;

    if (!(other instanceof Dimension)) {
        return undefined;
    }

    if (this.unit.isEmpty() || other.unit.isEmpty()) {
        a = this;
        b = other;
    } else {
        a = this.unify();
        b = other.unify();
        if (a.unit.compare(b.unit) !== 0) {
            return undefined;
        }
    }

    return Node.numericCompare(a.value, b.value);
};
Dimension.prototype.unify = function () {
    return this.convertTo({ length: 'px', duration: 's', angle: 'rad' });
};
Dimension.prototype.convertTo = function (conversions) {
    var value = this.value, unit = this.unit.clone(),
        i, groupName, group, targetUnit, derivedConversions = {}, applyUnit;

    if (typeof conversions === 'string') {
        for (i in unitConversions) {
            if (unitConversions[i].hasOwnProperty(conversions)) {
                derivedConversions = {};
                derivedConversions[i] = conversions;
            }
        }
        conversions = derivedConversions;
    }
    applyUnit = function (atomicUnit, denominator) {
        /* jshint loopfunc:true */
        if (group.hasOwnProperty(atomicUnit)) {
            if (denominator) {
                value = value / (group[atomicUnit] / group[targetUnit]);
            } else {
                value = value * (group[atomicUnit] / group[targetUnit]);
            }

            return targetUnit;
        }

        return atomicUnit;
    };

    for (groupName in conversions) {
        if (conversions.hasOwnProperty(groupName)) {
            targetUnit = conversions[groupName];
            group = unitConversions[groupName];

            unit.map(applyUnit);
        }
    }

    unit.cancel();

    return new Dimension(value, unit);
};
module.exports = Dimension;

},{"../data/unit-conversions":16,"./color":55,"./node":76,"./unit":84}],63:[function(require,module,exports){
var Node = require('./node'),
    Paren = require('./paren'),
    Combinator = require('./combinator');

var Element = function (combinator, value, isVariable, index, currentFileInfo, visibilityInfo) {
    this.combinator = combinator instanceof Combinator ?
                      combinator : new Combinator(combinator);

    if (typeof value === 'string') {
        this.value = value.trim();
    } else if (value) {
        this.value = value;
    } else {
        this.value = '';
    }
    this.isVariable = isVariable;
    this._index = index;
    this._fileInfo = currentFileInfo;
    this.copyVisibilityInfo(visibilityInfo);
    this.setParent(this.combinator, this);
};
Element.prototype = new Node();
Element.prototype.type = 'Element';
Element.prototype.accept = function (visitor) {
    var value = this.value;
    this.combinator = visitor.visit(this.combinator);
    if (typeof value === 'object') {
        this.value = visitor.visit(value);
    }
};
Element.prototype.eval = function (context) {
    return new Element(this.combinator,
                             this.value.eval ? this.value.eval(context) : this.value,
                             this.isVariable,
                             this.getIndex(),
                             this.fileInfo(), this.visibilityInfo());
};
Element.prototype.clone = function () {
    return new Element(this.combinator,
        this.value,
        this.isVariable,
        this.getIndex(),
        this.fileInfo(), this.visibilityInfo());
};
Element.prototype.genCSS = function (context, output) {
    output.add(this.toCSS(context), this.fileInfo(), this.getIndex());
};
Element.prototype.toCSS = function (context) {
    context = context || {};
    var value = this.value, firstSelector = context.firstSelector;
    if (value instanceof Paren) {
        // selector in parens should not be affected by outer selector
        // flags (breaks only interpolated selectors - see #1973)
        context.firstSelector = true;
    }
    value = value.toCSS ? value.toCSS(context) : value;
    context.firstSelector = firstSelector;
    if (value === '' && this.combinator.value.charAt(0) === '&') {
        return '';
    } else {
        return this.combinator.toCSS(context) + value;
    }
};
module.exports = Element;

},{"./combinator":56,"./node":76,"./paren":78}],64:[function(require,module,exports){
var Node = require('./node'),
    Paren = require('./paren'),
    Comment = require('./comment'),
    Dimension = require('./dimension'),
    MATH = require('../constants').Math;

var Expression = function (value, noSpacing) {
    this.value = value;
    this.noSpacing = noSpacing;
    if (!value) {
        throw new Error('Expression requires an array parameter');
    }
};
Expression.prototype = new Node();
Expression.prototype.type = 'Expression';
Expression.prototype.accept = function (visitor) {
    this.value = visitor.visitArray(this.value);
};
Expression.prototype.eval = function (context) {
    var returnValue,
        mathOn = context.isMathOn(),
        inParenthesis = this.parens && 
            (context.math !== MATH.STRICT_LEGACY || !this.parensInOp),
        doubleParen = false;
    if (inParenthesis) {
        context.inParenthesis();
    }
    if (this.value.length > 1) {
        returnValue = new Expression(this.value.map(function (e) {
            if (!e.eval) {
                return e;
            }
            return e.eval(context);
        }), this.noSpacing);
    } else if (this.value.length === 1) {
        if (this.value[0].parens && !this.value[0].parensInOp && !context.inCalc) {
            doubleParen = true;
        }
        returnValue = this.value[0].eval(context);
    } else {
        returnValue = this;
    }
    if (inParenthesis) {
        context.outOfParenthesis();
    }
    if (this.parens && this.parensInOp && !mathOn && !doubleParen 
        && (!(returnValue instanceof Dimension))) {
        returnValue = new Paren(returnValue);
    }
    return returnValue;
};
Expression.prototype.genCSS = function (context, output) {
    for (var i = 0; i < this.value.length; i++) {
        this.value[i].genCSS(context, output);
        if (!this.noSpacing && i + 1 < this.value.length) {
            output.add(' ');
        }
    }
};
Expression.prototype.throwAwayComments = function () {
    this.value = this.value.filter(function(v) {
        return !(v instanceof Comment);
    });
};
module.exports = Expression;

},{"../constants":12,"./comment":57,"./dimension":62,"./node":76,"./paren":78}],65:[function(require,module,exports){
var Node = require('./node'),
    Selector = require('./selector');

var Extend = function Extend(selector, option, index, currentFileInfo, visibilityInfo) {
    this.selector = selector;
    this.option = option;
    this.object_id = Extend.next_id++;
    this.parent_ids = [this.object_id];
    this._index = index;
    this._fileInfo = currentFileInfo;
    this.copyVisibilityInfo(visibilityInfo);
    this.allowRoot = true;

    switch (option) {
        case 'all':
            this.allowBefore = true;
            this.allowAfter = true;
            break;
        default:
            this.allowBefore = false;
            this.allowAfter = false;
            break;
    }
    this.setParent(this.selector, this);
};
Extend.next_id = 0;

Extend.prototype = new Node();
Extend.prototype.type = 'Extend';
Extend.prototype.accept = function (visitor) {
    this.selector = visitor.visit(this.selector);
};
Extend.prototype.eval = function (context) {
    return new Extend(this.selector.eval(context), this.option, this.getIndex(), this.fileInfo(), this.visibilityInfo());
};
Extend.prototype.clone = function (context) {
    return new Extend(this.selector, this.option, this.getIndex(), this.fileInfo(), this.visibilityInfo());
};
// it concatenates (joins) all selectors in selector array
Extend.prototype.findSelfSelectors = function (selectors) {
    var selfElements = [],
        i,
        selectorElements;

    for (i = 0; i < selectors.length; i++) {
        selectorElements = selectors[i].elements;
        // duplicate the logic in genCSS function inside the selector node.
        // future TODO - move both logics into the selector joiner visitor
        if (i > 0 && selectorElements.length && selectorElements[0].combinator.value === '') {
            selectorElements[0].combinator.value = ' ';
        }
        selfElements = selfElements.concat(selectors[i].elements);
    }

    this.selfSelectors = [new Selector(selfElements)];
    this.selfSelectors[0].copyVisibilityInfo(this.visibilityInfo());
};
module.exports = Extend;

},{"./node":76,"./selector":82}],66:[function(require,module,exports){
var Node = require('./node'),
    Media = require('./media'),
    URL = require('./url'),
    Quoted = require('./quoted'),
    Ruleset = require('./ruleset'),
    Anonymous = require('./anonymous'),
    utils = require('../utils'),
    LessError = require('../less-error');

//
// CSS @import node
//
// The general strategy here is that we don't want to wait
// for the parsing to be completed, before we start importing
// the file. That's because in the context of a browser,
// most of the time will be spent waiting for the server to respond.
//
// On creation, we push the import path to our import queue, though
// `import,push`, we also pass it a callback, which it'll call once
// the file has been fetched, and parsed.
//
var Import = function (path, features, options, index, currentFileInfo, visibilityInfo) {
    this.options = options;
    this._index = index;
    this._fileInfo = currentFileInfo;
    this.path = path;
    this.features = features;
    this.allowRoot = true;

    if (this.options.less !== undefined || this.options.inline) {
        this.css = !this.options.less || this.options.inline;
    } else {
        var pathValue = this.getPath();
        if (pathValue && /[#\.\&\?]css([\?;].*)?$/.test(pathValue)) {
            this.css = true;
        }
    }
    this.copyVisibilityInfo(visibilityInfo);
    this.setParent(this.features, this);
    this.setParent(this.path, this);
};

//
// The actual import node doesn't return anything, when converted to CSS.
// The reason is that it's used at the evaluation stage, so that the rules
// it imports can be treated like any other rules.
//
// In `eval`, we make sure all Import nodes get evaluated, recursively, so
// we end up with a flat structure, which can easily be imported in the parent
// ruleset.
//
Import.prototype = new Node();
Import.prototype.type = 'Import';
Import.prototype.accept = function (visitor) {
    if (this.features) {
        this.features = visitor.visit(this.features);
    }
    this.path = visitor.visit(this.path);
    if (!this.options.isPlugin && !this.options.inline && this.root) {
        this.root = visitor.visit(this.root);
    }
};
Import.prototype.genCSS = function (context, output) {
    if (this.css && this.path._fileInfo.reference === undefined) {
        output.add('@import ', this._fileInfo, this._index);
        this.path.genCSS(context, output);
        if (this.features) {
            output.add(' ');
            this.features.genCSS(context, output);
        }
        output.add(';');
    }
};
Import.prototype.getPath = function () {
    return (this.path instanceof URL) ?
        this.path.value.value : this.path.value;
};
Import.prototype.isVariableImport = function () {
    var path = this.path;
    if (path instanceof URL) {
        path = path.value;
    }
    if (path instanceof Quoted) {
        return path.containsVariables();
    }

    return true;
};
Import.prototype.evalForImport = function (context) {
    var path = this.path;

    if (path instanceof URL) {
        path = path.value;
    }

    return new Import(path.eval(context), this.features, this.options, this._index, this._fileInfo, this.visibilityInfo());
};
Import.prototype.evalPath = function (context) {
    var path = this.path.eval(context);
    var fileInfo = this._fileInfo;

    if (!(path instanceof URL)) {
        // Add the rootpath if the URL requires a rewrite
        var pathValue = path.value;
        if (fileInfo &&
            pathValue &&
            context.pathRequiresRewrite(pathValue)) {
            path.value = context.rewritePath(pathValue, fileInfo.rootpath);
        } else {
            path.value = context.normalizePath(path.value);
        }
    }

    return path;
};
Import.prototype.eval = function (context) {
    var result = this.doEval(context);
    if (this.options.reference || this.blocksVisibility()) {
        if (result.length || result.length === 0) {
            result.forEach(function (node) {
                node.addVisibilityBlock();
            }
            );
        } else {
            result.addVisibilityBlock();
        }
    }
    return result;
};
Import.prototype.doEval = function (context) {
    var ruleset, registry,
        features = this.features && this.features.eval(context);

    if (this.options.isPlugin) {
        if (this.root && this.root.eval) {
            try {
                this.root.eval(context);
            }
            catch (e) {
                e.message = 'Plugin error during evaluation';
                throw new LessError(e, this.root.imports, this.root.filename);
            }
        }
        registry = context.frames[0] && context.frames[0].functionRegistry;
        if ( registry && this.root && this.root.functions ) {
            registry.addMultiple( this.root.functions );
        }

        return [];
    }

    if (this.skip) {
        if (typeof this.skip === 'function') {
            this.skip = this.skip();
        }
        if (this.skip) {
            return [];
        }
    }
    if (this.options.inline) {
        var contents = new Anonymous(this.root, 0,
            {
                filename: this.importedFilename,
                reference: this.path._fileInfo && this.path._fileInfo.reference
            }, true, true);

        return this.features ? new Media([contents], this.features.value) : [contents];
    } else if (this.css) {
        var newImport = new Import(this.evalPath(context), features, this.options, this._index);
        if (!newImport.css && this.error) {
            throw this.error;
        }
        return newImport;
    } else {
        ruleset = new Ruleset(null, utils.copyArray(this.root.rules));
        ruleset.evalImports(context);

        return this.features ? new Media(ruleset.rules, this.features.value) : ruleset.rules;
    }
};
module.exports = Import;

},{"../less-error":38,"../utils":89,"./anonymous":50,"./media":71,"./node":76,"./quoted":80,"./ruleset":81,"./url":85}],67:[function(require,module,exports){
var tree = Object.create(null);

tree.Node = require('./node');
tree.Color = require('./color');
tree.AtRule = require('./atrule');
tree.DetachedRuleset = require('./detached-ruleset');
tree.Operation = require('./operation');
tree.Dimension = require('./dimension');
tree.Unit = require('./unit');
tree.Keyword = require('./keyword');
tree.Variable = require('./variable');
tree.Property = require('./property');
tree.Ruleset = require('./ruleset');
tree.Element = require('./element');
tree.Attribute = require('./attribute');
tree.Combinator = require('./combinator');
tree.Selector = require('./selector');
tree.Quoted = require('./quoted');
tree.Expression = require('./expression');
tree.Declaration = require('./declaration');
tree.Call = require('./call');
tree.URL = require('./url');
tree.Import = require('./import');
tree.mixin = {
    Call: require('./mixin-call'),
    Definition: require('./mixin-definition')
};
tree.Comment = require('./comment');
tree.Anonymous = require('./anonymous');
tree.Value = require('./value');
tree.JavaScript = require('./javascript');
tree.Assignment = require('./assignment');
tree.Condition = require('./condition');
tree.Paren = require('./paren');
tree.Media = require('./media');
tree.UnicodeDescriptor = require('./unicode-descriptor');
tree.Negative = require('./negative');
tree.Extend = require('./extend');
tree.VariableCall = require('./variable-call');
tree.NamespaceValue = require('./namespace-value');

module.exports = tree;

},{"./anonymous":50,"./assignment":51,"./atrule":52,"./attribute":53,"./call":54,"./color":55,"./combinator":56,"./comment":57,"./condition":58,"./declaration":60,"./detached-ruleset":61,"./dimension":62,"./element":63,"./expression":64,"./extend":65,"./import":66,"./javascript":68,"./keyword":70,"./media":71,"./mixin-call":72,"./mixin-definition":73,"./namespace-value":74,"./negative":75,"./node":76,"./operation":77,"./paren":78,"./property":79,"./quoted":80,"./ruleset":81,"./selector":82,"./unicode-descriptor":83,"./unit":84,"./url":85,"./value":86,"./variable":88,"./variable-call":87}],68:[function(require,module,exports){
var JsEvalNode = require('./js-eval-node'),
    Dimension = require('./dimension'),
    Quoted = require('./quoted'),
    Anonymous = require('./anonymous');

var JavaScript = function (string, escaped, index, currentFileInfo) {
    this.escaped = escaped;
    this.expression = string;
    this._index = index;
    this._fileInfo = currentFileInfo;
};
JavaScript.prototype = new JsEvalNode();
JavaScript.prototype.type = 'JavaScript';
JavaScript.prototype.eval = function(context) {
    var result = this.evaluateJavaScript(this.expression, context);
    var type = typeof result;

    if (type === 'number' && !isNaN(result)) {
        return new Dimension(result);
    } else if (type === 'string') {
        return new Quoted('"' + result + '"', result, this.escaped, this._index);
    } else if (Array.isArray(result)) {
        return new Anonymous(result.join(', '));
    } else {
        return new Anonymous(result);
    }
};

module.exports = JavaScript;

},{"./anonymous":50,"./dimension":62,"./js-eval-node":69,"./quoted":80}],69:[function(require,module,exports){
var Node = require('./node'),
    Variable = require('./variable');

var JsEvalNode = function() {
};
JsEvalNode.prototype = new Node();

JsEvalNode.prototype.evaluateJavaScript = function (expression, context) {
    var result,
        that = this,
        evalContext = {};

    if (!context.javascriptEnabled) {
        throw { message: 'Inline JavaScript is not enabled. Is it set in your options?',
            filename: this.fileInfo().filename,
            index: this.getIndex() };
    }

    expression = expression.replace(/@\{([\w-]+)\}/g, function (_, name) {
        return that.jsify(new Variable('@' + name, that.getIndex(), that.fileInfo()).eval(context));
    });

    try {
        expression = new Function('return (' + expression + ')');
    } catch (e) {
        throw { message: 'JavaScript evaluation error: ' + e.message + ' from `' + expression + '`' ,
            filename: this.fileInfo().filename,
            index: this.getIndex() };
    }

    var variables = context.frames[0].variables();
    for (var k in variables) {
        if (variables.hasOwnProperty(k)) {
            /* jshint loopfunc:true */
            evalContext[k.slice(1)] = {
                value: variables[k].value,
                toJS: function () {
                    return this.value.eval(context).toCSS();
                }
            };
        }
    }

    try {
        result = expression.call(evalContext);
    } catch (e) {
        throw { message: 'JavaScript evaluation error: \'' + e.name + ': ' + e.message.replace(/["]/g, '\'') + '\'' ,
            filename: this.fileInfo().filename,
            index: this.getIndex() };
    }
    return result;
};
JsEvalNode.prototype.jsify = function (obj) {
    if (Array.isArray(obj.value) && (obj.value.length > 1)) {
        return '[' + obj.value.map(function (v) { return v.toCSS(); }).join(', ') + ']';
    } else {
        return obj.toCSS();
    }
};

module.exports = JsEvalNode;

},{"./node":76,"./variable":88}],70:[function(require,module,exports){
var Node = require('./node');

var Keyword = function (value) { this.value = value; };
Keyword.prototype = new Node();
Keyword.prototype.type = 'Keyword';
Keyword.prototype.genCSS = function (context, output) {
    if (this.value === '%') { throw { type: 'Syntax', message: 'Invalid % without number' }; }
    output.add(this.value);
};

Keyword.True = new Keyword('true');
Keyword.False = new Keyword('false');

module.exports = Keyword;

},{"./node":76}],71:[function(require,module,exports){
var Ruleset = require('./ruleset'),
    Value = require('./value'),
    Selector = require('./selector'),
    Anonymous = require('./anonymous'),
    Expression = require('./expression'),
    AtRule = require('./atrule'),
    utils = require('../utils');

var Media = function (value, features, index, currentFileInfo, visibilityInfo) {
    this._index = index;
    this._fileInfo = currentFileInfo;

    var selectors = (new Selector([], null, null, this._index, this._fileInfo)).createEmptySelectors();

    this.features = new Value(features);
    this.rules = [new Ruleset(selectors, value)];
    this.rules[0].allowImports = true;
    this.copyVisibilityInfo(visibilityInfo);
    this.allowRoot = true;
    this.setParent(selectors, this);
    this.setParent(this.features, this);
    this.setParent(this.rules, this);
};
Media.prototype = new AtRule();
Media.prototype.type = 'Media';
Media.prototype.isRulesetLike = function() { return true; };
Media.prototype.accept = function (visitor) {
    if (this.features) {
        this.features = visitor.visit(this.features);
    }
    if (this.rules) {
        this.rules = visitor.visitArray(this.rules);
    }
};
Media.prototype.genCSS = function (context, output) {
    output.add('@media ', this._fileInfo, this._index);
    this.features.genCSS(context, output);
    this.outputRuleset(context, output, this.rules);
};
Media.prototype.eval = function (context) {
    if (!context.mediaBlocks) {
        context.mediaBlocks = [];
        context.mediaPath = [];
    }

    var media = new Media(null, [], this._index, this._fileInfo, this.visibilityInfo());
    if (this.debugInfo) {
        this.rules[0].debugInfo = this.debugInfo;
        media.debugInfo = this.debugInfo;
    }
    
    media.features = this.features.eval(context);

    context.mediaPath.push(media);
    context.mediaBlocks.push(media);

    this.rules[0].functionRegistry = context.frames[0].functionRegistry.inherit();
    context.frames.unshift(this.rules[0]);
    media.rules = [this.rules[0].eval(context)];
    context.frames.shift();

    context.mediaPath.pop();

    return context.mediaPath.length === 0 ? media.evalTop(context) :
                media.evalNested(context);
};
Media.prototype.evalTop = function (context) {
    var result = this;

    // Render all dependent Media blocks.
    if (context.mediaBlocks.length > 1) {
        var selectors = (new Selector([], null, null, this.getIndex(), this.fileInfo())).createEmptySelectors();
        result = new Ruleset(selectors, context.mediaBlocks);
        result.multiMedia = true;
        result.copyVisibilityInfo(this.visibilityInfo());
        this.setParent(result, this);
    }

    delete context.mediaBlocks;
    delete context.mediaPath;

    return result;
};
Media.prototype.evalNested = function (context) {
    var i, value,
        path = context.mediaPath.concat([this]);

    // Extract the media-query conditions separated with `,` (OR).
    for (i = 0; i < path.length; i++) {
        value = path[i].features instanceof Value ?
                    path[i].features.value : path[i].features;
        path[i] = Array.isArray(value) ? value : [value];
    }

    // Trace all permutations to generate the resulting media-query.
    //
    // (a, b and c) with nested (d, e) ->
    //    a and d
    //    a and e
    //    b and c and d
    //    b and c and e
    this.features = new Value(this.permute(path).map(function (path) {
        path = path.map(function (fragment) {
            return fragment.toCSS ? fragment : new Anonymous(fragment);
        });

        for (i = path.length - 1; i > 0; i--) {
            path.splice(i, 0, new Anonymous('and'));
        }

        return new Expression(path);
    }));
    this.setParent(this.features, this);

    // Fake a tree-node that doesn't output anything.
    return new Ruleset([], []);
};
Media.prototype.permute = function (arr) {
    if (arr.length === 0) {
        return [];
    } else if (arr.length === 1) {
        return arr[0];
    } else {
        var result = [];
        var rest = this.permute(arr.slice(1));
        for (var i = 0; i < rest.length; i++) {
            for (var j = 0; j < arr[0].length; j++) {
                result.push([arr[0][j]].concat(rest[i]));
            }
        }
        return result;
    }
};
Media.prototype.bubbleSelectors = function (selectors) {
    if (!selectors) {
        return;
    }
    this.rules = [new Ruleset(utils.copyArray(selectors), [this.rules[0]])];
    this.setParent(this.rules, this);
};
module.exports = Media;

},{"../utils":89,"./anonymous":50,"./atrule":52,"./expression":64,"./ruleset":81,"./selector":82,"./value":86}],72:[function(require,module,exports){
var Node = require('./node'),
    Selector = require('./selector'),
    MixinDefinition = require('./mixin-definition'),
    defaultFunc = require('../functions/default');

var MixinCall = function (elements, args, index, currentFileInfo, important) {
    this.selector = new Selector(elements);
    this.arguments = args || [];
    this._index = index;
    this._fileInfo = currentFileInfo;
    this.important = important;
    this.allowRoot = true;
    this.setParent(this.selector, this);
};
MixinCall.prototype = new Node();
MixinCall.prototype.type = 'MixinCall';
MixinCall.prototype.accept = function (visitor) {
    if (this.selector) {
        this.selector = visitor.visit(this.selector);
    }
    if (this.arguments.length) {
        this.arguments = visitor.visitArray(this.arguments);
    }
};
MixinCall.prototype.eval = function (context) {
    var mixins, mixin, mixinPath, args = [], arg, argValue,
        rules = [], match = false, i, m, f, isRecursive, isOneFound,
        candidates = [], candidate, conditionResult = [], defaultResult, defFalseEitherCase = -1,
        defNone = 0, defTrue = 1, defFalse = 2, count, originalRuleset, noArgumentsFilter;

    this.selector = this.selector.eval(context);

    function calcDefGroup(mixin, mixinPath) {
        var f, p, namespace;

        for (f = 0; f < 2; f++) {
            conditionResult[f] = true;
            defaultFunc.value(f);
            for (p = 0; p < mixinPath.length && conditionResult[f]; p++) {
                namespace = mixinPath[p];
                if (namespace.matchCondition) {
                    conditionResult[f] = conditionResult[f] && namespace.matchCondition(null, context);
                }
            }
            if (mixin.matchCondition) {
                conditionResult[f] = conditionResult[f] && mixin.matchCondition(args, context);
            }
        }
        if (conditionResult[0] || conditionResult[1]) {
            if (conditionResult[0] != conditionResult[1]) {
                return conditionResult[1] ?
                    defTrue : defFalse;
            }

            return defNone;
        }
        return defFalseEitherCase;
    }

    for (i = 0; i < this.arguments.length; i++) {
        arg = this.arguments[i];
        argValue = arg.value.eval(context);
        if (arg.expand && Array.isArray(argValue.value)) {
            argValue = argValue.value;
            for (m = 0; m < argValue.length; m++) {
                args.push({value: argValue[m]});
            }
        } else {
            args.push({name: arg.name, value: argValue});
        }
    }

    noArgumentsFilter = function(rule) {return rule.matchArgs(null, context);};

    for (i = 0; i < context.frames.length; i++) {
        if ((mixins = context.frames[i].find(this.selector, null, noArgumentsFilter)).length > 0) {
            isOneFound = true;

            // To make `default()` function independent of definition order we have two "subpasses" here.
            // At first we evaluate each guard *twice* (with `default() == true` and `default() == false`),
            // and build candidate list with corresponding flags. Then, when we know all possible matches,
            // we make a final decision.

            for (m = 0; m < mixins.length; m++) {
                mixin = mixins[m].rule;
                mixinPath = mixins[m].path;
                isRecursive = false;
                for (f = 0; f < context.frames.length; f++) {
                    if ((!(mixin instanceof MixinDefinition)) && mixin === (context.frames[f].originalRuleset || context.frames[f])) {
                        isRecursive = true;
                        break;
                    }
                }
                if (isRecursive) {
                    continue;
                }

                if (mixin.matchArgs(args, context)) {
                    candidate = {mixin: mixin, group: calcDefGroup(mixin, mixinPath)};

                    if (candidate.group !== defFalseEitherCase) {
                        candidates.push(candidate);
                    }

                    match = true;
                }
            }

            defaultFunc.reset();

            count = [0, 0, 0];
            for (m = 0; m < candidates.length; m++) {
                count[candidates[m].group]++;
            }

            if (count[defNone] > 0) {
                defaultResult = defFalse;
            } else {
                defaultResult = defTrue;
                if ((count[defTrue] + count[defFalse]) > 1) {
                    throw { type: 'Runtime',
                        message: 'Ambiguous use of `default()` found when matching for `' + this.format(args) + '`',
                        index: this.getIndex(), filename: this.fileInfo().filename };
                }
            }

            for (m = 0; m < candidates.length; m++) {
                candidate = candidates[m].group;
                if ((candidate === defNone) || (candidate === defaultResult)) {
                    try {
                        mixin = candidates[m].mixin;
                        if (!(mixin instanceof MixinDefinition)) {
                            originalRuleset = mixin.originalRuleset || mixin;
                            mixin = new MixinDefinition('', [], mixin.rules, null, false, null, originalRuleset.visibilityInfo());
                            mixin.originalRuleset = originalRuleset;
                        }
                        var newRules = mixin.evalCall(context, args, this.important).rules;
                        this._setVisibilityToReplacement(newRules);
                        Array.prototype.push.apply(rules, newRules);
                    } catch (e) {
                        throw { message: e.message, index: this.getIndex(), filename: this.fileInfo().filename, stack: e.stack };
                    }
                }
            }

            if (match) {
                return rules;
            }
        }
    }
    if (isOneFound) {
        throw { type:    'Runtime',
            message: 'No matching definition was found for `' + this.format(args) + '`',
            index:   this.getIndex(), filename: this.fileInfo().filename };
    } else {
        throw { type:    'Name',
            message: this.selector.toCSS().trim() + ' is undefined',
            index:   this.getIndex(), filename: this.fileInfo().filename };
    }
};

MixinCall.prototype._setVisibilityToReplacement = function (replacement) {
    var i, rule;
    if (this.blocksVisibility()) {
        for (i = 0; i < replacement.length; i++) {
            rule = replacement[i];
            rule.addVisibilityBlock();
        }
    }
};
MixinCall.prototype.format = function (args) {
    return this.selector.toCSS().trim() + '(' +
        (args ? args.map(function (a) {
            var argValue = '';
            if (a.name) {
                argValue += a.name + ':';
            }
            if (a.value.toCSS) {
                argValue += a.value.toCSS();
            } else {
                argValue += '???';
            }
            return argValue;
        }).join(', ') : '') + ')';
};
module.exports = MixinCall;

},{"../functions/default":25,"./mixin-definition":73,"./node":76,"./selector":82}],73:[function(require,module,exports){
var Selector = require('./selector'),
    Element = require('./element'),
    Ruleset = require('./ruleset'),
    Declaration = require('./declaration'),
    DetachedRuleset = require('./detached-ruleset'),
    Expression = require('./expression'),
    contexts = require('../contexts'),
    utils = require('../utils');

var Definition = function (name, params, rules, condition, variadic, frames, visibilityInfo) {
    this.name = name || 'anonymous mixin';
    this.selectors = [new Selector([new Element(null, name, false, this._index, this._fileInfo)])];
    this.params = params;
    this.condition = condition;
    this.variadic = variadic;
    this.arity = params.length;
    this.rules = rules;
    this._lookups = {};
    var optionalParameters = [];
    this.required = params.reduce(function (count, p) {
        if (!p.name || (p.name && !p.value)) {
            return count + 1;
        }
        else {
            optionalParameters.push(p.name);
            return count;
        }
    }, 0);
    this.optionalParameters = optionalParameters;
    this.frames = frames;
    this.copyVisibilityInfo(visibilityInfo);
    this.allowRoot = true;
};
Definition.prototype = new Ruleset();
Definition.prototype.type = 'MixinDefinition';
Definition.prototype.evalFirst = true;
Definition.prototype.accept = function (visitor) {
    if (this.params && this.params.length) {
        this.params = visitor.visitArray(this.params);
    }
    this.rules = visitor.visitArray(this.rules);
    if (this.condition) {
        this.condition = visitor.visit(this.condition);
    }
};
Definition.prototype.evalParams = function (context, mixinEnv, args, evaldArguments) {
    /* jshint boss:true */
    var frame = new Ruleset(null, null),
        varargs, arg,
        params = utils.copyArray(this.params),
        i, j, val, name, isNamedFound, argIndex, argsLength = 0;

    if (mixinEnv.frames && mixinEnv.frames[0] && mixinEnv.frames[0].functionRegistry) {
        frame.functionRegistry = mixinEnv.frames[0].functionRegistry.inherit();
    }
    mixinEnv = new contexts.Eval(mixinEnv, [frame].concat(mixinEnv.frames));

    if (args) {
        args = utils.copyArray(args);
        argsLength = args.length;

        for (i = 0; i < argsLength; i++) {
            arg = args[i];
            if (name = (arg && arg.name)) {
                isNamedFound = false;
                for (j = 0; j < params.length; j++) {
                    if (!evaldArguments[j] && name === params[j].name) {
                        evaldArguments[j] = arg.value.eval(context);
                        frame.prependRule(new Declaration(name, arg.value.eval(context)));
                        isNamedFound = true;
                        break;
                    }
                }
                if (isNamedFound) {
                    args.splice(i, 1);
                    i--;
                    continue;
                } else {
                    throw { type: 'Runtime', message: 'Named argument for ' + this.name +
                        ' ' + args[i].name + ' not found' };
                }
            }
        }
    }
    argIndex = 0;
    for (i = 0; i < params.length; i++) {
        if (evaldArguments[i]) { continue; }

        arg = args && args[argIndex];

        if (name = params[i].name) {
            if (params[i].variadic) {
                varargs = [];
                for (j = argIndex; j < argsLength; j++) {
                    varargs.push(args[j].value.eval(context));
                }
                frame.prependRule(new Declaration(name, new Expression(varargs).eval(context)));
            } else {
                val = arg && arg.value;
                if (val) {
                    // This was a mixin call, pass in a detached ruleset of it's eval'd rules
                    if (Array.isArray(val)) {
                        val = new DetachedRuleset(new Ruleset('', val));
                    }
                    else {
                        val = val.eval(context);
                    }
                } else if (params[i].value) {
                    val = params[i].value.eval(mixinEnv);
                    frame.resetCache();
                } else {
                    throw { type: 'Runtime', message: 'wrong number of arguments for ' + this.name +
                        ' (' + argsLength + ' for ' + this.arity + ')' };
                }

                frame.prependRule(new Declaration(name, val));
                evaldArguments[i] = val;
            }
        }

        if (params[i].variadic && args) {
            for (j = argIndex; j < argsLength; j++) {
                evaldArguments[j] = args[j].value.eval(context);
            }
        }
        argIndex++;
    }

    return frame;
};
Definition.prototype.makeImportant = function() {
    var rules = !this.rules ? this.rules : this.rules.map(function (r) {
        if (r.makeImportant) {
            return r.makeImportant(true);
        } else {
            return r;
        }
    });
    var result = new Definition(this.name, this.params, rules, this.condition, this.variadic, this.frames);
    return result;
};
Definition.prototype.eval = function (context) {
    return new Definition(this.name, this.params, this.rules, this.condition, this.variadic, this.frames || utils.copyArray(context.frames));
};
Definition.prototype.evalCall = function (context, args, important) {
    var _arguments = [],
        mixinFrames = this.frames ? this.frames.concat(context.frames) : context.frames,
        frame = this.evalParams(context, new contexts.Eval(context, mixinFrames), args, _arguments),
        rules, ruleset;

    frame.prependRule(new Declaration('@arguments', new Expression(_arguments).eval(context)));

    rules = utils.copyArray(this.rules);

    ruleset = new Ruleset(null, rules);
    ruleset.originalRuleset = this;
    ruleset = ruleset.eval(new contexts.Eval(context, [this, frame].concat(mixinFrames)));
    if (important) {
        ruleset = ruleset.makeImportant();
    }
    return ruleset;
};
Definition.prototype.matchCondition = function (args, context) {
    if (this.condition && !this.condition.eval(
        new contexts.Eval(context,
            [this.evalParams(context, /* the parameter variables */
                new contexts.Eval(context, this.frames ? this.frames.concat(context.frames) : context.frames), args, [])]
            .concat(this.frames || []) // the parent namespace/mixin frames
            .concat(context.frames)))) { // the current environment frames
        return false;
    }
    return true;
};
Definition.prototype.matchArgs = function (args, context) {
    var allArgsCnt = (args && args.length) || 0, len, optionalParameters = this.optionalParameters;
    var requiredArgsCnt = !args ? 0 : args.reduce(function (count, p) {
        if (optionalParameters.indexOf(p.name) < 0) {
            return count + 1;
        } else {
            return count;
        }
    }, 0);

    if (!this.variadic) {
        if (requiredArgsCnt < this.required) {
            return false;
        }
        if (allArgsCnt > this.params.length) {
            return false;
        }
    } else {
        if (requiredArgsCnt < (this.required - 1)) {
            return false;
        }
    }

    // check patterns
    len = Math.min(requiredArgsCnt, this.arity);

    for (var i = 0; i < len; i++) {
        if (!this.params[i].name && !this.params[i].variadic) {
            if (args[i].value.eval(context).toCSS() != this.params[i].value.eval(context).toCSS()) {
                return false;
            }
        }
    }
    return true;
};
module.exports = Definition;

},{"../contexts":13,"../utils":89,"./declaration":60,"./detached-ruleset":61,"./element":63,"./expression":64,"./ruleset":81,"./selector":82}],74:[function(require,module,exports){
var Node = require('./node'),
    Variable = require('./variable'),
    Ruleset = require('./ruleset'),
    Selector = require('./selector');

var NamespaceValue = function (ruleCall, lookups, important, index, fileInfo) {
    this.value = ruleCall;
    this.lookups = lookups;
    this.important = important;
    this._index = index;
    this._fileInfo = fileInfo;
};
NamespaceValue.prototype = new Node();
NamespaceValue.prototype.type = 'NamespaceValue';
NamespaceValue.prototype.eval = function (context) {
    var i, j, name, rules = this.value.eval(context);
    
    for (i = 0; i < this.lookups.length; i++) {
        name = this.lookups[i];

        /**
         * Eval'd DRs return rulesets.
         * Eval'd mixins return rules, so let's make a ruleset if we need it.
         * We need to do this because of late parsing of values
         */
        if (Array.isArray(rules)) {
            rules = new Ruleset([new Selector()], rules);
        }

        if (name === '') {
            rules = rules.lastDeclaration();
        }
        else if (name.charAt(0) === '@') {
            if (name.charAt(1) === '@') {
                name = '@' + new Variable(name.substr(1)).eval(context).value;
            }
            if (rules.variables) {
                rules = rules.variable(name);
            }
            
            if (!rules) {
                throw { type: 'Name',
                    message: 'variable ' + name + ' not found',
                    filename: this.fileInfo().filename,
                    index: this.getIndex() };
            }
        }
        else {
            if (name.substring(0, 2) === '$@') {
                name = '$' + new Variable(name.substr(1)).eval(context).value;
            }
            else {
                name = name.charAt(0) === '$' ? name : '$' + name;
            }
            if (rules.properties) {
                rules = rules.property(name);
            }
        
            if (!rules) {
                throw { type: 'Name',
                    message: 'property "' + name.substr(1) + '" not found',
                    filename: this.fileInfo().filename,
                    index: this.getIndex() };
            }
            // Properties are an array of values, since a ruleset can have multiple props.
            // We pick the last one (the "cascaded" value)
            rules = rules[rules.length - 1];
        }

        if (rules.value) {
            rules = rules.eval(context).value;
        }
        if (rules.ruleset) {
            rules = rules.ruleset.eval(context);
        }
    }
    return rules;
};
module.exports = NamespaceValue;

},{"./node":76,"./ruleset":81,"./selector":82,"./variable":88}],75:[function(require,module,exports){
var Node = require('./node'),
    Operation = require('./operation'),
    Dimension = require('./dimension');

var Negative = function (node) {
    this.value = node;
};
Negative.prototype = new Node();
Negative.prototype.type = 'Negative';
Negative.prototype.genCSS = function (context, output) {
    output.add('-');
    this.value.genCSS(context, output);
};
Negative.prototype.eval = function (context) {
    if (context.isMathOn()) {
        return (new Operation('*', [new Dimension(-1), this.value])).eval(context);
    }
    return new Negative(this.value.eval(context));
};
module.exports = Negative;

},{"./dimension":62,"./node":76,"./operation":77}],76:[function(require,module,exports){
var Node = function() {
    this.parent = null;
    this.visibilityBlocks = undefined;
    this.nodeVisible = undefined;
    this.rootNode = null;
    this.parsed = null;

    var self = this;
    Object.defineProperty(this, 'currentFileInfo', {
        get: function() { return self.fileInfo(); }
    });
    Object.defineProperty(this, 'index', {
        get: function() { return self.getIndex(); }
    });

};
Node.prototype.setParent = function(nodes, parent) {
    function set(node) {
        if (node && node instanceof Node) {
            node.parent = parent;
        }
    }
    if (Array.isArray(nodes)) {
        nodes.forEach(set);
    }
    else {
        set(nodes);
    }
};
Node.prototype.getIndex = function() {
    return this._index || (this.parent && this.parent.getIndex()) || 0;
};
Node.prototype.fileInfo = function() {
    return this._fileInfo || (this.parent && this.parent.fileInfo()) || {};
};
Node.prototype.isRulesetLike = function() { return false; };
Node.prototype.toCSS = function (context) {
    var strs = [];
    this.genCSS(context, {
        add: function(chunk, fileInfo, index) {
            strs.push(chunk);
        },
        isEmpty: function () {
            return strs.length === 0;
        }
    });
    return strs.join('');
};
Node.prototype.genCSS = function (context, output) {
    output.add(this.value);
};
Node.prototype.accept = function (visitor) {
    this.value = visitor.visit(this.value);
};
Node.prototype.eval = function () { return this; };
Node.prototype._operate = function (context, op, a, b) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
    }
};
Node.prototype.fround = function(context, value) {
    var precision = context && context.numPrecision;
    // add "epsilon" to ensure numbers like 1.000000005 (represented as 1.000000004999...) are properly rounded:
    return (precision) ? Number((value + 2e-16).toFixed(precision)) : value;
};
Node.compare = function (a, b) {
    /* returns:
     -1: a < b
     0: a = b
     1: a > b
     and *any* other value for a != b (e.g. undefined, NaN, -2 etc.) */

    if ((a.compare) &&
        // for "symmetric results" force toCSS-based comparison
        // of Quoted or Anonymous if either value is one of those
        !(b.type === 'Quoted' || b.type === 'Anonymous')) {
        return a.compare(b);
    } else if (b.compare) {
        return -b.compare(a);
    } else if (a.type !== b.type) {
        return undefined;
    }

    a = a.value;
    b = b.value;
    if (!Array.isArray(a)) {
        return a === b ? 0 : undefined;
    }
    if (a.length !== b.length) {
        return undefined;
    }
    for (var i = 0; i < a.length; i++) {
        if (Node.compare(a[i], b[i]) !== 0) {
            return undefined;
        }
    }
    return 0;
};

Node.numericCompare = function (a, b) {
    return a  <  b ? -1
        : a === b ?  0
        : a  >  b ?  1 : undefined;
};
// Returns true if this node represents root of ast imported by reference
Node.prototype.blocksVisibility = function () {
    if (this.visibilityBlocks == null) {
        this.visibilityBlocks = 0;
    }
    return this.visibilityBlocks !== 0;
};
Node.prototype.addVisibilityBlock = function () {
    if (this.visibilityBlocks == null) {
        this.visibilityBlocks = 0;
    }
    this.visibilityBlocks = this.visibilityBlocks + 1;
};
Node.prototype.removeVisibilityBlock = function () {
    if (this.visibilityBlocks == null) {
        this.visibilityBlocks = 0;
    }
    this.visibilityBlocks = this.visibilityBlocks - 1;
};
// Turns on node visibility - if called node will be shown in output regardless
// of whether it comes from import by reference or not
Node.prototype.ensureVisibility = function () {
    this.nodeVisible = true;
};
// Turns off node visibility - if called node will NOT be shown in output regardless
// of whether it comes from import by reference or not
Node.prototype.ensureInvisibility = function () {
    this.nodeVisible = false;
};
// return values:
// false - the node must not be visible
// true - the node must be visible
// undefined or null - the node has the same visibility as its parent
Node.prototype.isVisible = function () {
    return this.nodeVisible;
};
Node.prototype.visibilityInfo = function() {
    return {
        visibilityBlocks: this.visibilityBlocks,
        nodeVisible: this.nodeVisible
    };
};
Node.prototype.copyVisibilityInfo = function(info) {
    if (!info) {
        return;
    }
    this.visibilityBlocks = info.visibilityBlocks;
    this.nodeVisible = info.nodeVisible;
};
module.exports = Node;

},{}],77:[function(require,module,exports){
var Node = require('./node'),
    Color = require('./color'),
    Dimension = require('./dimension'),
    MATH = require('../constants').Math;

var Operation = function (op, operands, isSpaced) {
    this.op = op.trim();
    this.operands = operands;
    this.isSpaced = isSpaced;
};
Operation.prototype = new Node();
Operation.prototype.type = 'Operation';
Operation.prototype.accept = function (visitor) {
    this.operands = visitor.visit(this.operands);
};
Operation.prototype.eval = function (context) {
    var a = this.operands[0].eval(context),
        b = this.operands[1].eval(context),
        op;

    if (context.isMathOn(this.op)) {
        op = this.op === './' ? '/' : this.op;
        if (a instanceof Dimension && b instanceof Color) {
            a = a.toColor();
        }
        if (b instanceof Dimension && a instanceof Color) {
            b = b.toColor();
        }
        if (!a.operate) {
            if (a instanceof Operation && a.op === '/' && context.math === MATH.PARENS_DIVISION) {
                return new Operation(this.op, [a, b], this.isSpaced);
            }
            throw { type: 'Operation',
                message: 'Operation on an invalid type' };
        }

        return a.operate(context, op, b);
    } else {
        return new Operation(this.op, [a, b], this.isSpaced);
    }
};
Operation.prototype.genCSS = function (context, output) {
    this.operands[0].genCSS(context, output);
    if (this.isSpaced) {
        output.add(' ');
    }
    output.add(this.op);
    if (this.isSpaced) {
        output.add(' ');
    }
    this.operands[1].genCSS(context, output);
};

module.exports = Operation;

},{"../constants":12,"./color":55,"./dimension":62,"./node":76}],78:[function(require,module,exports){
var Node = require('./node');

var Paren = function (node) {
    this.value = node;
};
Paren.prototype = new Node();
Paren.prototype.type = 'Paren';
Paren.prototype.genCSS = function (context, output) {
    output.add('(');
    this.value.genCSS(context, output);
    output.add(')');
};
Paren.prototype.eval = function (context) {
    return new Paren(this.value.eval(context));
};
module.exports = Paren;

},{"./node":76}],79:[function(require,module,exports){
var Node = require('./node'),
    Declaration = require('./declaration');

var Property = function (name, index, currentFileInfo) {
    this.name = name;
    this._index = index;
    this._fileInfo = currentFileInfo;
};
Property.prototype = new Node();
Property.prototype.type = 'Property';
Property.prototype.eval = function (context) {
    var property, name = this.name;
    // TODO: shorten this reference
    var mergeRules = context.pluginManager.less.visitors.ToCSSVisitor.prototype._mergeRules;

    if (this.evaluating) {
        throw { type: 'Name',
            message: 'Recursive property reference for ' + name,
            filename: this.fileInfo().filename,
            index: this.getIndex() };
    }

    this.evaluating = true;

    property = this.find(context.frames, function (frame) {

        var v, vArr = frame.property(name);
        if (vArr) {
            for (var i = 0; i < vArr.length; i++) {
                v = vArr[i];

                vArr[i] = new Declaration(v.name,
                    v.value,
                    v.important,
                    v.merge,
                    v.index,
                    v.currentFileInfo,
                    v.inline,
                    v.variable
                );
            }
            mergeRules(vArr);

            v = vArr[vArr.length - 1];
            if (v.important) {
                var importantScope = context.importantScope[context.importantScope.length - 1];
                importantScope.important = v.important;
            }
            v = v.value.eval(context);
            return v;
        }
    });
    if (property) {
        this.evaluating = false;
        return property;
    } else {
        throw { type: 'Name',
            message: 'Property \'' + name + '\' is undefined',
            filename: this.currentFileInfo.filename,
            index: this.index };
    }
};
Property.prototype.find = function (obj, fun) {
    for (var i = 0, r; i < obj.length; i++) {
        r = fun.call(obj, obj[i]);
        if (r) { return r; }
    }
    return null;
};
module.exports = Property;

},{"./declaration":60,"./node":76}],80:[function(require,module,exports){
var Node = require('./node'),
    Variable = require('./variable'),
    Property = require('./property');

var Quoted = function (str, content, escaped, index, currentFileInfo) {
    this.escaped = (escaped == null) ? true : escaped;
    this.value = content || '';
    this.quote = str.charAt(0);
    this._index = index;
    this._fileInfo = currentFileInfo;
    this.variableRegex = /@\{([\w-]+)\}/g;
    this.propRegex = /\$\{([\w-]+)\}/g;
};
Quoted.prototype = new Node();
Quoted.prototype.type = 'Quoted';
Quoted.prototype.genCSS = function (context, output) {
    if (!this.escaped) {
        output.add(this.quote, this.fileInfo(), this.getIndex());
    }
    output.add(this.value);
    if (!this.escaped) {
        output.add(this.quote);
    }
};
Quoted.prototype.containsVariables = function() {
    return this.value.match(this.variableRegex);
};
Quoted.prototype.eval = function (context) {
    var that = this, value = this.value;
    var variableReplacement = function (_, name) {
        var v = new Variable('@' + name, that.getIndex(), that.fileInfo()).eval(context, true);
        return (v instanceof Quoted) ? v.value : v.toCSS();
    };
    var propertyReplacement = function (_, name) {
        var v = new Property('$' + name, that.getIndex(), that.fileInfo()).eval(context, true);
        return (v instanceof Quoted) ? v.value : v.toCSS();
    };
    function iterativeReplace(value, regexp, replacementFnc) {
        var evaluatedValue = value;
        do {
            value = evaluatedValue;
            evaluatedValue = value.replace(regexp, replacementFnc);
        } while (value !== evaluatedValue);
        return evaluatedValue;
    }
    value = iterativeReplace(value, this.variableRegex, variableReplacement);
    value = iterativeReplace(value, this.propRegex, propertyReplacement);
    return new Quoted(this.quote + value + this.quote, value, this.escaped, this.getIndex(), this.fileInfo());
};
Quoted.prototype.compare = function (other) {
    // when comparing quoted strings allow the quote to differ
    if (other.type === 'Quoted' && !this.escaped && !other.escaped) {
        return Node.numericCompare(this.value, other.value);
    } else {
        return other.toCSS && this.toCSS() === other.toCSS() ? 0 : undefined;
    }
};
module.exports = Quoted;

},{"./node":76,"./property":79,"./variable":88}],81:[function(require,module,exports){
var Node = require('./node'),
    Declaration = require('./declaration'),
    Keyword = require('./keyword'),
    Comment = require('./comment'),
    Paren = require('./paren'),
    Selector = require('./selector'),
    Element = require('./element'),
    Anonymous = require('./anonymous'),
    contexts = require('../contexts'),
    globalFunctionRegistry = require('../functions/function-registry'),
    defaultFunc = require('../functions/default'),
    getDebugInfo = require('./debug-info'),
    utils = require('../utils');

var Ruleset = function (selectors, rules, strictImports, visibilityInfo) {
    this.selectors = selectors;
    this.rules = rules;
    this._lookups = {};
    this._variables = null;
    this._properties = null;
    this.strictImports = strictImports;
    this.copyVisibilityInfo(visibilityInfo);
    this.allowRoot = true;

    this.setParent(this.selectors, this);
    this.setParent(this.rules, this);

};
Ruleset.prototype = new Node();
Ruleset.prototype.type = 'Ruleset';
Ruleset.prototype.isRuleset = true;
Ruleset.prototype.isRulesetLike = function() { return true; };
Ruleset.prototype.accept = function (visitor) {
    if (this.paths) {
        this.paths = visitor.visitArray(this.paths, true);
    } else if (this.selectors) {
        this.selectors = visitor.visitArray(this.selectors);
    }
    if (this.rules && this.rules.length) {
        this.rules = visitor.visitArray(this.rules);
    }
};
Ruleset.prototype.eval = function (context) {
    var that = this, selectors, selCnt, selector, i, hasVariable, hasOnePassingSelector = false;

    if (this.selectors && (selCnt = this.selectors.length)) {
        selectors = new Array(selCnt);
        defaultFunc.error({
            type: 'Syntax',
            message: 'it is currently only allowed in parametric mixin guards,'
        });

        for (i = 0; i < selCnt; i++) {
            selector = this.selectors[i].eval(context);
            for (var j = 0; j < selector.elements.length; j++) {
                if (selector.elements[j].isVariable) {
                    hasVariable = true;
                    break;
                }
            }
            selectors[i] = selector;
            if (selector.evaldCondition) {
                hasOnePassingSelector = true;
            }
        }

        if (hasVariable) {
            var toParseSelectors = new Array(selCnt);
            for (i = 0; i < selCnt; i++) {
                selector = selectors[i];
                toParseSelectors[i] = selector.toCSS(context);
            }
            this.parse.parseNode(
                toParseSelectors.join(','),
                ["selectors"], 
                selectors[0].getIndex(), 
                selectors[0].fileInfo(), 
                function(err, result) {
                    if (result) {
                        selectors = utils.flattenArray(result);
                    }
                });
        }

        defaultFunc.reset();
    } else {
        hasOnePassingSelector = true;
    }

    var rules = this.rules ? utils.copyArray(this.rules) : null,
        ruleset = new Ruleset(selectors, rules, this.strictImports, this.visibilityInfo()),
        rule, subRule;

    ruleset.originalRuleset = this;
    ruleset.root = this.root;
    ruleset.firstRoot = this.firstRoot;
    ruleset.allowImports = this.allowImports;

    if (this.debugInfo) {
        ruleset.debugInfo = this.debugInfo;
    }

    if (!hasOnePassingSelector) {
        rules.length = 0;
    }

    // inherit a function registry from the frames stack when possible;
    // otherwise from the global registry
    ruleset.functionRegistry = (function (frames) {
        var i = 0,
            n = frames.length,
            found;
        for ( ; i !== n ; ++i ) {
            found = frames[ i ].functionRegistry;
            if ( found ) { return found; }
        }
        return globalFunctionRegistry;
    }(context.frames)).inherit();

    // push the current ruleset to the frames stack
    var ctxFrames = context.frames;
    ctxFrames.unshift(ruleset);

    // currrent selectors
    var ctxSelectors = context.selectors;
    if (!ctxSelectors) {
        context.selectors = ctxSelectors = [];
    }
    ctxSelectors.unshift(this.selectors);

    // Evaluate imports
    if (ruleset.root || ruleset.allowImports || !ruleset.strictImports) {
        ruleset.evalImports(context);
    }

    // Store the frames around mixin definitions,
    // so they can be evaluated like closures when the time comes.
    var rsRules = ruleset.rules;
    for (i = 0; (rule = rsRules[i]); i++) {
        if (rule.evalFirst) {
            rsRules[i] = rule.eval(context);
        }
    }

    var mediaBlockCount = (context.mediaBlocks && context.mediaBlocks.length) || 0;

    // Evaluate mixin calls.
    for (i = 0; (rule = rsRules[i]); i++) {
        if (rule.type === 'MixinCall') {
            /* jshint loopfunc:true */
            rules = rule.eval(context).filter(function(r) {
                if ((r instanceof Declaration) && r.variable) {
                    // do not pollute the scope if the variable is
                    // already there. consider returning false here
                    // but we need a way to "return" variable from mixins
                    return !(ruleset.variable(r.name));
                }
                return true;
            });
            rsRules.splice.apply(rsRules, [i, 1].concat(rules));
            i += rules.length - 1;
            ruleset.resetCache();
        } else if (rule.type ===  'VariableCall') {
            /* jshint loopfunc:true */
            rules = rule.eval(context).rules.filter(function(r) {
                if ((r instanceof Declaration) && r.variable) {
                    // do not pollute the scope at all
                    return false;
                }
                return true;
            });
            rsRules.splice.apply(rsRules, [i, 1].concat(rules));
            i += rules.length - 1;
            ruleset.resetCache();
        }
    }

    // Evaluate everything else
    for (i = 0; (rule = rsRules[i]); i++) {
        if (!rule.evalFirst) {
            rsRules[i] = rule = rule.eval ? rule.eval(context) : rule;
        }
    }

    // Evaluate everything else
    for (i = 0; (rule = rsRules[i]); i++) {
        // for rulesets, check if it is a css guard and can be removed
        if (rule instanceof Ruleset && rule.selectors && rule.selectors.length === 1) {
            // check if it can be folded in (e.g. & where)
            if (rule.selectors[0] && rule.selectors[0].isJustParentSelector()) {
                rsRules.splice(i--, 1);

                for (var j = 0; (subRule = rule.rules[j]); j++) {
                    if (subRule instanceof Node) {
                        subRule.copyVisibilityInfo(rule.visibilityInfo());
                        if (!(subRule instanceof Declaration) || !subRule.variable) {
                            rsRules.splice(++i, 0, subRule);
                        }
                    }
                }
            }
        }
    }

    // Pop the stack
    ctxFrames.shift();
    ctxSelectors.shift();

    if (context.mediaBlocks) {
        for (i = mediaBlockCount; i < context.mediaBlocks.length; i++) {
            context.mediaBlocks[i].bubbleSelectors(selectors);
        }
    }

    return ruleset;
};
Ruleset.prototype.evalImports = function(context) {
    var rules = this.rules, i, importRules;
    if (!rules) { return; }

    for (i = 0; i < rules.length; i++) {
        if (rules[i].type === 'Import') {
            importRules = rules[i].eval(context);
            if (importRules && (importRules.length || importRules.length === 0)) {
                rules.splice.apply(rules, [i, 1].concat(importRules));
                i += importRules.length - 1;
            } else {
                rules.splice(i, 1, importRules);
            }
            this.resetCache();
        }
    }
};
Ruleset.prototype.makeImportant = function() {
    var result = new Ruleset(this.selectors, this.rules.map(function (r) {
        if (r.makeImportant) {
            return r.makeImportant();
        } else {
            return r;
        }
    }), this.strictImports, this.visibilityInfo());

    return result;
};
Ruleset.prototype.matchArgs = function (args) {
    return !args || args.length === 0;
};
// lets you call a css selector with a guard
Ruleset.prototype.matchCondition = function (args, context) {
    var lastSelector = this.selectors[this.selectors.length - 1];
    if (!lastSelector.evaldCondition) {
        return false;
    }
    if (lastSelector.condition &&
        !lastSelector.condition.eval(
            new contexts.Eval(context,
                context.frames))) {
        return false;
    }
    return true;
};
Ruleset.prototype.resetCache = function () {
    this._rulesets = null;
    this._variables = null;
    this._properties = null;
    this._lookups = {};
};
Ruleset.prototype.variables = function () {
    if (!this._variables) {
        this._variables = !this.rules ? {} : this.rules.reduce(function (hash, r) {
            if (r instanceof Declaration && r.variable === true) {
                hash[r.name] = r;
            }
            // when evaluating variables in an import statement, imports have not been eval'd
            // so we need to go inside import statements.
            // guard against root being a string (in the case of inlined less)
            if (r.type === 'Import' && r.root && r.root.variables) {
                var vars = r.root.variables();
                for (var name in vars) {
                    if (vars.hasOwnProperty(name)) {
                        hash[name] = r.root.variable(name);
                    }
                }
            }
            return hash;
        }, {});
    }
    return this._variables;
};
Ruleset.prototype.properties = function () {
    if (!this._properties) {
        this._properties = !this.rules ? {} : this.rules.reduce(function (hash, r) {
            if (r instanceof Declaration && r.variable !== true) {
                var name = (r.name.length === 1) && (r.name[0] instanceof Keyword) ?
                    r.name[0].value : r.name;
                // Properties don't overwrite as they can merge
                if (!hash['$' + name]) {
                    hash['$' + name] = [ r ];
                }
                else {
                    hash['$' + name].push(r);
                }
            }
            return hash;
        }, {});
    }
    return this._properties;
};
Ruleset.prototype.variable = function (name) {
    var decl = this.variables()[name];
    if (decl) {
        return this.parseValue(decl);
    }
};
Ruleset.prototype.property = function (name) {
    var decl = this.properties()[name];
    if (decl) {
        return this.parseValue(decl);
    }
};
Ruleset.prototype.lastDeclaration = function () {
    for (var i = this.rules.length; i > 0; i--) {
        var decl = this.rules[i - 1];
        if (decl instanceof Declaration) {
            return this.parseValue(decl);
        }
    }
};
Ruleset.prototype.parseValue = function(toParse) {
    var self = this;
    function transformDeclaration(decl) {
        if (decl.value instanceof Anonymous && !decl.parsed) {
            if (typeof decl.value.value === 'string') {
                this.parse.parseNode(
                    decl.value.value,
                    ['value', 'important'], 
                    decl.value.getIndex(), 
                    decl.fileInfo(), 
                    function(err, result) {
                        if (err) {
                            decl.parsed = true;
                        }
                        if (result) {
                            decl.value = result[0];
                            decl.important = result[1] || '';
                            decl.parsed = true;
                        }
                    });
            } else {
                decl.parsed = true;
            }

            return decl;
        }
        else {
            return decl;
        }
    }
    if (!Array.isArray(toParse)) {
        return transformDeclaration.call(self, toParse);
    }
    else {
        var nodes = [];
        toParse.forEach(function(n) {
            nodes.push(transformDeclaration.call(self, n));
        });
        return nodes;
    }
};
Ruleset.prototype.rulesets = function () {
    if (!this.rules) { return []; }

    var filtRules = [], rules = this.rules,
        i, rule;

    for (i = 0; (rule = rules[i]); i++) {
        if (rule.isRuleset) {
            filtRules.push(rule);
        }
    }

    return filtRules;
};
Ruleset.prototype.prependRule = function (rule) {
    var rules = this.rules;
    if (rules) {
        rules.unshift(rule);
    } else {
        this.rules = [ rule ];
    }
    this.setParent(rule, this);
};
Ruleset.prototype.find = function (selector, self, filter) {
    self = self || this;
    var rules = [], match, foundMixins,
        key = selector.toCSS();

    if (key in this._lookups) { return this._lookups[key]; }

    this.rulesets().forEach(function (rule) {
        if (rule !== self) {
            for (var j = 0; j < rule.selectors.length; j++) {
                match = selector.match(rule.selectors[j]);
                if (match) {
                    if (selector.elements.length > match) {
                        if (!filter || filter(rule)) {
                            foundMixins = rule.find(new Selector(selector.elements.slice(match)), self, filter);
                            for (var i = 0; i < foundMixins.length; ++i) {
                                foundMixins[i].path.push(rule);
                            }
                            Array.prototype.push.apply(rules, foundMixins);
                        }
                    } else {
                        rules.push({ rule: rule, path: []});
                    }
                    break;
                }
            }
        }
    });
    this._lookups[key] = rules;
    return rules;
};
Ruleset.prototype.genCSS = function (context, output) {
    var i, j,
        charsetRuleNodes = [],
        ruleNodes = [],
        debugInfo,     // Line number debugging
        rule,
        path;

    context.tabLevel = (context.tabLevel || 0);

    if (!this.root) {
        context.tabLevel++;
    }

    var tabRuleStr = context.compress ? '' : Array(context.tabLevel + 1).join('  '),
        tabSetStr = context.compress ? '' : Array(context.tabLevel).join('  '),
        sep;

    var charsetNodeIndex = 0;
    var importNodeIndex = 0;
    for (i = 0; (rule = this.rules[i]); i++) {
        if (rule instanceof Comment) {
            if (importNodeIndex === i) {
                importNodeIndex++;
            }
            ruleNodes.push(rule);
        } else if (rule.isCharset && rule.isCharset()) {
            ruleNodes.splice(charsetNodeIndex, 0, rule);
            charsetNodeIndex++;
            importNodeIndex++;
        } else if (rule.type === 'Import') {
            ruleNodes.splice(importNodeIndex, 0, rule);
            importNodeIndex++;
        } else {
            ruleNodes.push(rule);
        }
    }
    ruleNodes = charsetRuleNodes.concat(ruleNodes);

    // If this is the root node, we don't render
    // a selector, or {}.
    if (!this.root) {
        debugInfo = getDebugInfo(context, this, tabSetStr);

        if (debugInfo) {
            output.add(debugInfo);
            output.add(tabSetStr);
        }

        var paths = this.paths, pathCnt = paths.length,
            pathSubCnt;

        sep = context.compress ? ',' : (',\n' + tabSetStr);

        for (i = 0; i < pathCnt; i++) {
            path = paths[i];
            if (!(pathSubCnt = path.length)) { continue; }
            if (i > 0) { output.add(sep); }

            context.firstSelector = true;
            path[0].genCSS(context, output);

            context.firstSelector = false;
            for (j = 1; j < pathSubCnt; j++) {
                path[j].genCSS(context, output);
            }
        }

        output.add((context.compress ? '{' : ' {\n') + tabRuleStr);
    }

    // Compile rules and rulesets
    for (i = 0; (rule = ruleNodes[i]); i++) {

        if (i + 1 === ruleNodes.length) {
            context.lastRule = true;
        }

        var currentLastRule = context.lastRule;
        if (rule.isRulesetLike(rule)) {
            context.lastRule = false;
        }

        if (rule.genCSS) {
            rule.genCSS(context, output);
        } else if (rule.value) {
            output.add(rule.value.toString());
        }

        context.lastRule = currentLastRule;

        if (!context.lastRule && rule.isVisible()) {
            output.add(context.compress ? '' : ('\n' + tabRuleStr));
        } else {
            context.lastRule = false;
        }
    }

    if (!this.root) {
        output.add((context.compress ? '}' : '\n' + tabSetStr + '}'));
        context.tabLevel--;
    }

    if (!output.isEmpty() && !context.compress && this.firstRoot) {
        output.add('\n');
    }
};

Ruleset.prototype.joinSelectors = function (paths, context, selectors) {
    for (var s = 0; s < selectors.length; s++) {
        this.joinSelector(paths, context, selectors[s]);
    }
};

Ruleset.prototype.joinSelector = function (paths, context, selector) {

    function createParenthesis(elementsToPak, originalElement) {
        var replacementParen, j;
        if (elementsToPak.length === 0) {
            replacementParen = new Paren(elementsToPak[0]);
        } else {
            var insideParent = new Array(elementsToPak.length);
            for (j = 0; j < elementsToPak.length; j++) {
                insideParent[j] = new Element(
                    null,
                    elementsToPak[j],
                    originalElement.isVariable,
                    originalElement._index,
                    originalElement._fileInfo
                );
            }
            replacementParen = new Paren(new Selector(insideParent));
        }
        return replacementParen;
    }

    function createSelector(containedElement, originalElement) {
        var element, selector;
        element = new Element(null, containedElement, originalElement.isVariable, originalElement._index, originalElement._fileInfo);
        selector = new Selector([element]);
        return selector;
    }

    // joins selector path from `beginningPath` with selector path in `addPath`
    // `replacedElement` contains element that is being replaced by `addPath`
    // returns concatenated path
    function addReplacementIntoPath(beginningPath, addPath, replacedElement, originalSelector) {
        var newSelectorPath, lastSelector, newJoinedSelector;
        // our new selector path
        newSelectorPath = [];

        // construct the joined selector - if & is the first thing this will be empty,
        // if not newJoinedSelector will be the last set of elements in the selector
        if (beginningPath.length > 0) {
            newSelectorPath = utils.copyArray(beginningPath);
            lastSelector = newSelectorPath.pop();
            newJoinedSelector = originalSelector.createDerived(utils.copyArray(lastSelector.elements));
        }
        else {
            newJoinedSelector = originalSelector.createDerived([]);
        }

        if (addPath.length > 0) {
            // /deep/ is a CSS4 selector - (removed, so should deprecate)
            // that is valid without anything in front of it
            // so if the & does not have a combinator that is "" or " " then
            // and there is a combinator on the parent, then grab that.
            // this also allows + a { & .b { .a & { ... though not sure why you would want to do that
            var combinator = replacedElement.combinator, parentEl = addPath[0].elements[0];
            if (combinator.emptyOrWhitespace && !parentEl.combinator.emptyOrWhitespace) {
                combinator = parentEl.combinator;
            }
            // join the elements so far with the first part of the parent
            newJoinedSelector.elements.push(new Element(
                combinator,
                parentEl.value,
                replacedElement.isVariable,
                replacedElement._index,
                replacedElement._fileInfo
            ));
            newJoinedSelector.elements = newJoinedSelector.elements.concat(addPath[0].elements.slice(1));
        }

        // now add the joined selector - but only if it is not empty
        if (newJoinedSelector.elements.length !== 0) {
            newSelectorPath.push(newJoinedSelector);
        }

        // put together the parent selectors after the join (e.g. the rest of the parent)
        if (addPath.length > 1) {
            var restOfPath = addPath.slice(1);
            restOfPath = restOfPath.map(function (selector) {
                return selector.createDerived(selector.elements, []);
            });
            newSelectorPath = newSelectorPath.concat(restOfPath);
        }
        return newSelectorPath;
    }

    // joins selector path from `beginningPath` with every selector path in `addPaths` array
    // `replacedElement` contains element that is being replaced by `addPath`
    // returns array with all concatenated paths
    function addAllReplacementsIntoPath( beginningPath, addPaths, replacedElement, originalSelector, result) {
        var j;
        for (j = 0; j < beginningPath.length; j++) {
            var newSelectorPath = addReplacementIntoPath(beginningPath[j], addPaths, replacedElement, originalSelector);
            result.push(newSelectorPath);
        }
        return result;
    }

    function mergeElementsOnToSelectors(elements, selectors) {
        var i, sel;

        if (elements.length === 0) {
            return ;
        }
        if (selectors.length === 0) {
            selectors.push([ new Selector(elements) ]);
            return;
        }

        for (i = 0; (sel = selectors[i]); i++) {
            // if the previous thing in sel is a parent this needs to join on to it
            if (sel.length > 0) {
                sel[sel.length - 1] = sel[sel.length - 1].createDerived(sel[sel.length - 1].elements.concat(elements));
            }
            else {
                sel.push(new Selector(elements));
            }
        }
    }

    // replace all parent selectors inside `inSelector` by content of `context` array
    // resulting selectors are returned inside `paths` array
    // returns true if `inSelector` contained at least one parent selector
    function replaceParentSelector(paths, context, inSelector) {
        // The paths are [[Selector]]
        // The first list is a list of comma separated selectors
        // The inner list is a list of inheritance separated selectors
        // e.g.
        // .a, .b {
        //   .c {
        //   }
        // }
        // == [[.a] [.c]] [[.b] [.c]]
        //
        var i, j, k, currentElements, newSelectors, selectorsMultiplied, sel, el, hadParentSelector = false, length, lastSelector;
        function findNestedSelector(element) {
            var maybeSelector;
            if (!(element.value instanceof Paren)) {
                return null;
            }

            maybeSelector = element.value.value;
            if (!(maybeSelector instanceof Selector)) {
                return null;
            }

            return maybeSelector;
        }

        // the elements from the current selector so far
        currentElements = [];
        // the current list of new selectors to add to the path.
        // We will build it up. We initiate it with one empty selector as we "multiply" the new selectors
        // by the parents
        newSelectors = [
            []
        ];

        for (i = 0; (el = inSelector.elements[i]); i++) {
            // non parent reference elements just get added
            if (el.value !== '&') {
                var nestedSelector = findNestedSelector(el);
                if (nestedSelector != null) {
                    // merge the current list of non parent selector elements
                    // on to the current list of selectors to add
                    mergeElementsOnToSelectors(currentElements, newSelectors);

                    var nestedPaths = [], replaced, replacedNewSelectors = [];
                    replaced = replaceParentSelector(nestedPaths, context, nestedSelector);
                    hadParentSelector = hadParentSelector || replaced;
                    // the nestedPaths array should have only one member - replaceParentSelector does not multiply selectors
                    for (k = 0; k < nestedPaths.length; k++) {
                        var replacementSelector = createSelector(createParenthesis(nestedPaths[k], el), el);
                        addAllReplacementsIntoPath(newSelectors, [replacementSelector], el, inSelector, replacedNewSelectors);
                    }
                    newSelectors = replacedNewSelectors;
                    currentElements = [];

                } else {
                    currentElements.push(el);
                }

            } else {
                hadParentSelector = true;
                // the new list of selectors to add
                selectorsMultiplied = [];

                // merge the current list of non parent selector elements
                // on to the current list of selectors to add
                mergeElementsOnToSelectors(currentElements, newSelectors);

                // loop through our current selectors
                for (j = 0; j < newSelectors.length; j++) {
                    sel = newSelectors[j];
                    // if we don't have any parent paths, the & might be in a mixin so that it can be used
                    // whether there are parents or not
                    if (context.length === 0) {
                        // the combinator used on el should now be applied to the next element instead so that
                        // it is not lost
                        if (sel.length > 0) {
                            sel[0].elements.push(new Element(el.combinator, '', el.isVariable, el._index, el._fileInfo));
                        }
                        selectorsMultiplied.push(sel);
                    }
                    else {
                        // and the parent selectors
                        for (k = 0; k < context.length; k++) {
                            // We need to put the current selectors
                            // then join the last selector's elements on to the parents selectors
                            var newSelectorPath = addReplacementIntoPath(sel, context[k], el, inSelector);
                            // add that to our new set of selectors
                            selectorsMultiplied.push(newSelectorPath);
                        }
                    }
                }

                // our new selectors has been multiplied, so reset the state
                newSelectors = selectorsMultiplied;
                currentElements = [];
            }
        }

        // if we have any elements left over (e.g. .a& .b == .b)
        // add them on to all the current selectors
        mergeElementsOnToSelectors(currentElements, newSelectors);

        for (i = 0; i < newSelectors.length; i++) {
            length = newSelectors[i].length;
            if (length > 0) {
                paths.push(newSelectors[i]);
                lastSelector = newSelectors[i][length - 1];
                newSelectors[i][length - 1] = lastSelector.createDerived(lastSelector.elements, inSelector.extendList);
            }
        }

        return hadParentSelector;
    }

    function deriveSelector(visibilityInfo, deriveFrom) {
        var newSelector = deriveFrom.createDerived(deriveFrom.elements, deriveFrom.extendList, deriveFrom.evaldCondition);
        newSelector.copyVisibilityInfo(visibilityInfo);
        return newSelector;
    }

    // joinSelector code follows
    var i, newPaths, hadParentSelector;

    newPaths = [];
    hadParentSelector = replaceParentSelector(newPaths, context, selector);

    if (!hadParentSelector) {
        if (context.length > 0) {
            newPaths = [];
            for (i = 0; i < context.length; i++) {

                var concatenated = context[i].map(deriveSelector.bind(this, selector.visibilityInfo()));

                concatenated.push(selector);
                newPaths.push(concatenated);
            }
        }
        else {
            newPaths = [[selector]];
        }
    }

    for (i = 0; i < newPaths.length; i++) {
        paths.push(newPaths[i]);
    }

};
module.exports = Ruleset;

},{"../contexts":13,"../functions/default":25,"../functions/function-registry":27,"../utils":89,"./anonymous":50,"./comment":57,"./debug-info":59,"./declaration":60,"./element":63,"./keyword":70,"./node":76,"./paren":78,"./selector":82}],82:[function(require,module,exports){
var Node = require('./node'),
    Element = require('./element'),
    LessError = require('../less-error');

var Selector = function (elements, extendList, condition, index, currentFileInfo, visibilityInfo) {
    this.extendList = extendList;
    this.condition = condition;
    this.evaldCondition = !condition;
    this._index = index;
    this._fileInfo = currentFileInfo;
    this.elements = this.getElements(elements);
    this.mixinElements_ = undefined;
    this.copyVisibilityInfo(visibilityInfo);
    this.setParent(this.elements, this);
};
Selector.prototype = new Node();
Selector.prototype.type = 'Selector';
Selector.prototype.accept = function (visitor) {
    if (this.elements) {
        this.elements = visitor.visitArray(this.elements);
    }
    if (this.extendList) {
        this.extendList = visitor.visitArray(this.extendList);
    }
    if (this.condition) {
        this.condition = visitor.visit(this.condition);
    }
};
Selector.prototype.createDerived = function(elements, extendList, evaldCondition) {
    elements = this.getElements(elements);
    var newSelector = new Selector(elements, extendList || this.extendList,
        null, this.getIndex(), this.fileInfo(), this.visibilityInfo());
    newSelector.evaldCondition = (evaldCondition != null) ? evaldCondition : this.evaldCondition;
    newSelector.mediaEmpty = this.mediaEmpty;
    return newSelector;
};
Selector.prototype.getElements = function(els) {
    if (!els) {
        return [new Element('', '&', false, this._index, this._fileInfo)];
    }
    if (typeof els === 'string') {
        this.parse.parseNode(
            els, 
            ['selector'],
            this._index, 
            this._fileInfo, 
            function(err, result) {
                if (err) {
                    throw new LessError({
                        index: err.index,
                        message: err.message
                    }, this.parse.imports, this._fileInfo.filename);
                }
                els = result[0].elements;
            });
    }
    return els;
};
Selector.prototype.createEmptySelectors = function() {
    var el = new Element('', '&', false, this._index, this._fileInfo),
        sels = [new Selector([el], null, null, this._index, this._fileInfo)];
    sels[0].mediaEmpty = true;
    return sels;
};
Selector.prototype.match = function (other) {
    var elements = this.elements,
        len = elements.length,
        olen, i;

    other = other.mixinElements();
    olen = other.length;
    if (olen === 0 || len < olen) {
        return 0;
    } else {
        for (i = 0; i < olen; i++) {
            if (elements[i].value !== other[i]) {
                return 0;
            }
        }
    }

    return olen; // return number of matched elements
};
Selector.prototype.mixinElements = function() {
    if (this.mixinElements_) {
        return this.mixinElements_;
    }

    var elements = this.elements.map( function(v) {
        return v.combinator.value + (v.value.value || v.value);
    }).join('').match(/[,&#\*\.\w-]([\w-]|(\\.))*/g);

    if (elements) {
        if (elements[0] === '&') {
            elements.shift();
        }
    } else {
        elements = [];
    }

    return (this.mixinElements_ = elements);
};
Selector.prototype.isJustParentSelector = function() {
    return !this.mediaEmpty &&
        this.elements.length === 1 &&
        this.elements[0].value === '&' &&
        (this.elements[0].combinator.value === ' ' || this.elements[0].combinator.value === '');
};
Selector.prototype.eval = function (context) {
    var evaldCondition = this.condition && this.condition.eval(context),
        elements = this.elements, extendList = this.extendList;

    elements = elements && elements.map(function (e) { return e.eval(context); });
    extendList = extendList && extendList.map(function(extend) { return extend.eval(context); });

    return this.createDerived(elements, extendList, evaldCondition);
};
Selector.prototype.genCSS = function (context, output) {
    var i, element;
    if ((!context || !context.firstSelector) && this.elements[0].combinator.value === '') {
        output.add(' ', this.fileInfo(), this.getIndex());
    }
    for (i = 0; i < this.elements.length; i++) {
        element = this.elements[i];
        element.genCSS(context, output);
    }
};
Selector.prototype.getIsOutput = function() {
    return this.evaldCondition;
};
module.exports = Selector;

},{"../less-error":38,"./element":63,"./node":76}],83:[function(require,module,exports){
var Node = require('./node');

var UnicodeDescriptor = function (value) {
    this.value = value;
};
UnicodeDescriptor.prototype = new Node();
UnicodeDescriptor.prototype.type = 'UnicodeDescriptor';

module.exports = UnicodeDescriptor;

},{"./node":76}],84:[function(require,module,exports){
var Node = require('./node'),
    unitConversions = require('../data/unit-conversions'),
    utils = require('../utils');

var Unit = function (numerator, denominator, backupUnit) {
    this.numerator = numerator ? utils.copyArray(numerator).sort() : [];
    this.denominator = denominator ? utils.copyArray(denominator).sort() : [];
    if (backupUnit) {
        this.backupUnit = backupUnit;
    } else if (numerator && numerator.length) {
        this.backupUnit = numerator[0];
    }
};

Unit.prototype = new Node();
Unit.prototype.type = 'Unit';
Unit.prototype.clone = function () {
    return new Unit(utils.copyArray(this.numerator), utils.copyArray(this.denominator), this.backupUnit);
};
Unit.prototype.genCSS = function (context, output) {
    // Dimension checks the unit is singular and throws an error if in strict math mode.
    var strictUnits = context && context.strictUnits;
    if (this.numerator.length === 1) {
        output.add(this.numerator[0]); // the ideal situation
    } else if (!strictUnits && this.backupUnit) {
        output.add(this.backupUnit);
    } else if (!strictUnits && this.denominator.length) {
        output.add(this.denominator[0]);
    }
};
Unit.prototype.toString = function () {
    var i, returnStr = this.numerator.join('*');
    for (i = 0; i < this.denominator.length; i++) {
        returnStr += '/' + this.denominator[i];
    }
    return returnStr;
};
Unit.prototype.compare = function (other) {
    return this.is(other.toString()) ? 0 : undefined;
};
Unit.prototype.is = function (unitString) {
    return this.toString().toUpperCase() === unitString.toUpperCase();
};
Unit.prototype.isLength = function () {
    return RegExp('^(px|em|ex|ch|rem|in|cm|mm|pc|pt|ex|vw|vh|vmin|vmax)$', 'gi').test(this.toCSS());
};
Unit.prototype.isEmpty = function () {
    return this.numerator.length === 0 && this.denominator.length === 0;
};
Unit.prototype.isSingular = function() {
    return this.numerator.length <= 1 && this.denominator.length === 0;
};
Unit.prototype.map = function(callback) {
    var i;

    for (i = 0; i < this.numerator.length; i++) {
        this.numerator[i] = callback(this.numerator[i], false);
    }

    for (i = 0; i < this.denominator.length; i++) {
        this.denominator[i] = callback(this.denominator[i], true);
    }
};
Unit.prototype.usedUnits = function() {
    var group, result = {}, mapUnit, groupName;

    mapUnit = function (atomicUnit) {
        /* jshint loopfunc:true */
        if (group.hasOwnProperty(atomicUnit) && !result[groupName]) {
            result[groupName] = atomicUnit;
        }

        return atomicUnit;
    };

    for (groupName in unitConversions) {
        if (unitConversions.hasOwnProperty(groupName)) {
            group = unitConversions[groupName];

            this.map(mapUnit);
        }
    }

    return result;
};
Unit.prototype.cancel = function () {
    var counter = {}, atomicUnit, i;

    for (i = 0; i < this.numerator.length; i++) {
        atomicUnit = this.numerator[i];
        counter[atomicUnit] = (counter[atomicUnit] || 0) + 1;
    }

    for (i = 0; i < this.denominator.length; i++) {
        atomicUnit = this.denominator[i];
        counter[atomicUnit] = (counter[atomicUnit] || 0) - 1;
    }

    this.numerator = [];
    this.denominator = [];

    for (atomicUnit in counter) {
        if (counter.hasOwnProperty(atomicUnit)) {
            var count = counter[atomicUnit];

            if (count > 0) {
                for (i = 0; i < count; i++) {
                    this.numerator.push(atomicUnit);
                }
            } else if (count < 0) {
                for (i = 0; i < -count; i++) {
                    this.denominator.push(atomicUnit);
                }
            }
        }
    }

    this.numerator.sort();
    this.denominator.sort();
};
module.exports = Unit;

},{"../data/unit-conversions":16,"../utils":89,"./node":76}],85:[function(require,module,exports){
var Node = require('./node');

var URL = function (val, index, currentFileInfo, isEvald) {
    this.value = val;
    this._index = index;
    this._fileInfo = currentFileInfo;
    this.isEvald = isEvald;
};
URL.prototype = new Node();
URL.prototype.type = 'Url';
URL.prototype.accept = function (visitor) {
    this.value = visitor.visit(this.value);
};
URL.prototype.genCSS = function (context, output) {
    output.add('url(');
    this.value.genCSS(context, output);
    output.add(')');
};
URL.prototype.eval = function (context) {
    var val = this.value.eval(context),
        rootpath;

    if (!this.isEvald) {
        // Add the rootpath if the URL requires a rewrite
        rootpath = this.fileInfo() && this.fileInfo().rootpath;
        if (typeof rootpath === 'string' &&
            typeof val.value === 'string' &&
            context.pathRequiresRewrite(val.value)) {
            if (!val.quote) {
                rootpath = escapePath(rootpath);
            }
            val.value = context.rewritePath(val.value, rootpath);
        } else {
            val.value = context.normalizePath(val.value);
        }

        // Add url args if enabled
        if (context.urlArgs) {
            if (!val.value.match(/^\s*data:/)) {
                var delimiter = val.value.indexOf('?') === -1 ? '?' : '&';
                var urlArgs = delimiter + context.urlArgs;
                if (val.value.indexOf('#') !== -1) {
                    val.value = val.value.replace('#', urlArgs + '#');
                } else {
                    val.value += urlArgs;
                }
            }
        }
    }

    return new URL(val, this.getIndex(), this.fileInfo(), true);
};

function escapePath(path) {
    return path.replace(/[\(\)'"\s]/g, function(match) { return '\\' + match; });
}

module.exports = URL;

},{"./node":76}],86:[function(require,module,exports){
var Node = require('./node');

var Value = function (value) {
    if (!value) {
        throw new Error('Value requires an array argument');
    }
    if (!Array.isArray(value)) {
        this.value = [ value ];
    }
    else {
        this.value = value;
    }
};
Value.prototype = new Node();
Value.prototype.type = 'Value';
Value.prototype.accept = function (visitor) {
    if (this.value) {
        this.value = visitor.visitArray(this.value);
    }
};
Value.prototype.eval = function (context) {
    if (this.value.length === 1) {
        return this.value[0].eval(context);
    } else {
        return new Value(this.value.map(function (v) {
            return v.eval(context);
        }));
    }
};
Value.prototype.genCSS = function (context, output) {
    var i;
    for (i = 0; i < this.value.length; i++) {
        this.value[i].genCSS(context, output);
        if (i + 1 < this.value.length) {
            output.add((context && context.compress) ? ',' : ', ');
        }
    }
};
module.exports = Value;

},{"./node":76}],87:[function(require,module,exports){
var Node = require('./node'),
    Variable = require('./variable'),
    Ruleset = require('./ruleset'),
    DetachedRuleset = require('./detached-ruleset'),
    LessError = require('../less-error');

var VariableCall = function (variable, index, currentFileInfo) {
    this.variable = variable;
    this._index = index;
    this._fileInfo = currentFileInfo;
    this.allowRoot = true;
};
VariableCall.prototype = new Node();
VariableCall.prototype.type = 'VariableCall';
VariableCall.prototype.eval = function (context) {
    var rules, detachedRuleset = new Variable(this.variable, this.getIndex(), this.fileInfo()).eval(context),
        error = new LessError({message: 'Could not evaluate variable call ' + this.variable});

    if (!detachedRuleset.ruleset) {
        if (Array.isArray(detachedRuleset)) {
            rules = detachedRuleset;
        }
        else if (Array.isArray(detachedRuleset.value)) {
            rules = detachedRuleset.value;
        }
        else {
            throw error;
        }
        detachedRuleset = new DetachedRuleset(new Ruleset('', rules));
    }
    if (detachedRuleset.ruleset) {
        return detachedRuleset.callEval(context);
    }
    throw error;
};
module.exports = VariableCall;

},{"../less-error":38,"./detached-ruleset":61,"./node":76,"./ruleset":81,"./variable":88}],88:[function(require,module,exports){
var Node = require('./node'),
    Call = require('./call');

var Variable = function (name, index, currentFileInfo) {
    this.name = name;
    this._index = index;
    this._fileInfo = currentFileInfo;
};
Variable.prototype = new Node();
Variable.prototype.type = 'Variable';
Variable.prototype.eval = function (context) {
    var variable, name = this.name;

    if (name.indexOf('@@') === 0) {
        name = '@' + new Variable(name.slice(1), this.getIndex(), this.fileInfo()).eval(context).value;
    }

    if (this.evaluating) {
        throw { type: 'Name',
            message: 'Recursive variable definition for ' + name,
            filename: this.fileInfo().filename,
            index: this.getIndex() };
    }

    this.evaluating = true;

    variable = this.find(context.frames, function (frame) {
        var v = frame.variable(name);
        if (v) {
            if (v.important) {
                var importantScope = context.importantScope[context.importantScope.length - 1];
                importantScope.important = v.important;
            }
            // If in calc, wrap vars in a function call to cascade evaluate args first
            if (context.inCalc) {
                return (new Call('_SELF', [v.value])).eval(context);
            }
            else {
                return v.value.eval(context);
            }
        }
    });
    if (variable) {
        this.evaluating = false;
        return variable;
    } else {
        throw { type: 'Name',
            message: 'variable ' + name + ' is undefined',
            filename: this.fileInfo().filename,
            index: this.getIndex() };
    }
};
Variable.prototype.find = function (obj, fun) {
    for (var i = 0, r; i < obj.length; i++) {
        r = fun.call(obj, obj[i]);
        if (r) { return r; }
    }
    return null;
};
module.exports = Variable;

},{"./call":54,"./node":76}],89:[function(require,module,exports){
/* jshint proto: true */
var Constants = require('./constants');
var clone = require('clone');

var utils = {
    getLocation: function(index, inputStream) {
        var n = index + 1,
            line = null,
            column = -1;

        while (--n >= 0 && inputStream.charAt(n) !== '\n') {
            column++;
        }

        if (typeof index === 'number') {
            line = (inputStream.slice(0, index).match(/\n/g) || '').length;
        }

        return {
            line: line,
            column: column
        };
    },
    copyArray: function(arr) {
        var i, length = arr.length,
            copy = new Array(length);
        
        for (i = 0; i < length; i++) {
            copy[i] = arr[i];
        }
        return copy;
    },
    clone: function (obj) {
        var cloned = {};
        for (var prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                cloned[prop] = obj[prop];
            }
        }
        return cloned;
    },
    copyOptions: function(obj1, obj2) {
        if (obj2 && obj2._defaults) {
            return obj2;
        }
        var opts = utils.defaults(obj1, obj2);
        if (opts.strictMath) {
            opts.math = Constants.Math.STRICT_LEGACY;
        }
        // Back compat with changed relativeUrls option
        if (opts.relativeUrls) {
            opts.rewriteUrls = Constants.RewriteUrls.ALL;
        }
        if (typeof opts.math === 'string') {
            switch (opts.math.toLowerCase()) {
                case 'always':
                    opts.math = Constants.Math.ALWAYS;
                    break;
                case 'parens-division':
                    opts.math = Constants.Math.PARENS_DIVISION;
                    break;
                case 'strict':
                case 'parens':
                    opts.math = Constants.Math.PARENS;
                    break;
                case 'strict-legacy':
                    opts.math = Constants.Math.STRICT_LEGACY;
            }
        }
        if (typeof opts.rewriteUrls === 'string') {
            switch (opts.rewriteUrls.toLowerCase()) {
                case 'off':
                    opts.rewriteUrls = Constants.RewriteUrls.OFF;
                    break;
                case 'local':
                    opts.rewriteUrls = Constants.RewriteUrls.LOCAL;
                    break;
                case 'all':
                    opts.rewriteUrls = Constants.RewriteUrls.ALL;
                    break;
            }
        }
        return opts;
    },
    defaults: function(obj1, obj2) {
        var newObj = obj2 || {};
        if (!obj2._defaults) {
            newObj = {};
            var defaults = clone(obj1);
            newObj._defaults = defaults;
            var cloned = obj2 ? clone(obj2) : {};
            Object.assign(newObj, defaults, cloned);
        }
        return newObj;
    },
    merge: function(obj1, obj2) {
        for (var prop in obj2) {
            if (obj2.hasOwnProperty(prop)) {
                obj1[prop] = obj2[prop];
            }
        }
        return obj1;
    },
    flattenArray: function(arr, result) {
        result = result || [];
        for (var i = 0, length = arr.length; i < length; i++) {
            var value = arr[i];
            if (Array.isArray(value)) {
                utils.flattenArray(value, result);
            } else {
                if (value !== undefined) {
                    result.push(value);
                }
            }
        }
        return result;
    }
};

module.exports = utils;
},{"./constants":12,"clone":102}],90:[function(require,module,exports){
var tree = require('../tree'),
    Visitor = require('./visitor'),
    logger = require('../logger'),
    utils = require('../utils');

/* jshint loopfunc:true */

var ExtendFinderVisitor = function() {
    this._visitor = new Visitor(this);
    this.contexts = [];
    this.allExtendsStack = [[]];
};

ExtendFinderVisitor.prototype = {
    run: function (root) {
        root = this._visitor.visit(root);
        root.allExtends = this.allExtendsStack[0];
        return root;
    },
    visitDeclaration: function (declNode, visitArgs) {
        visitArgs.visitDeeper = false;
    },
    visitMixinDefinition: function (mixinDefinitionNode, visitArgs) {
        visitArgs.visitDeeper = false;
    },
    visitRuleset: function (rulesetNode, visitArgs) {
        if (rulesetNode.root) {
            return;
        }

        var i, j, extend, allSelectorsExtendList = [], extendList;

        // get &:extend(.a); rules which apply to all selectors in this ruleset
        var rules = rulesetNode.rules, ruleCnt = rules ? rules.length : 0;
        for (i = 0; i < ruleCnt; i++) {
            if (rulesetNode.rules[i] instanceof tree.Extend) {
                allSelectorsExtendList.push(rules[i]);
                rulesetNode.extendOnEveryPath = true;
            }
        }

        // now find every selector and apply the extends that apply to all extends
        // and the ones which apply to an individual extend
        var paths = rulesetNode.paths;
        for (i = 0; i < paths.length; i++) {
            var selectorPath = paths[i],
                selector = selectorPath[selectorPath.length - 1],
                selExtendList = selector.extendList;

            extendList = selExtendList ? utils.copyArray(selExtendList).concat(allSelectorsExtendList)
                                       : allSelectorsExtendList;

            if (extendList) {
                extendList = extendList.map(function(allSelectorsExtend) {
                    return allSelectorsExtend.clone();
                });
            }

            for (j = 0; j < extendList.length; j++) {
                this.foundExtends = true;
                extend = extendList[j];
                extend.findSelfSelectors(selectorPath);
                extend.ruleset = rulesetNode;
                if (j === 0) { extend.firstExtendOnThisSelectorPath = true; }
                this.allExtendsStack[this.allExtendsStack.length - 1].push(extend);
            }
        }

        this.contexts.push(rulesetNode.selectors);
    },
    visitRulesetOut: function (rulesetNode) {
        if (!rulesetNode.root) {
            this.contexts.length = this.contexts.length - 1;
        }
    },
    visitMedia: function (mediaNode, visitArgs) {
        mediaNode.allExtends = [];
        this.allExtendsStack.push(mediaNode.allExtends);
    },
    visitMediaOut: function (mediaNode) {
        this.allExtendsStack.length = this.allExtendsStack.length - 1;
    },
    visitAtRule: function (atRuleNode, visitArgs) {
        atRuleNode.allExtends = [];
        this.allExtendsStack.push(atRuleNode.allExtends);
    },
    visitAtRuleOut: function (atRuleNode) {
        this.allExtendsStack.length = this.allExtendsStack.length - 1;
    }
};

var ProcessExtendsVisitor = function() {
    this._visitor = new Visitor(this);
};

ProcessExtendsVisitor.prototype = {
    run: function(root) {
        var extendFinder = new ExtendFinderVisitor();
        this.extendIndices = {};
        extendFinder.run(root);
        if (!extendFinder.foundExtends) { return root; }
        root.allExtends = root.allExtends.concat(this.doExtendChaining(root.allExtends, root.allExtends));
        this.allExtendsStack = [root.allExtends];
        var newRoot = this._visitor.visit(root);
        this.checkExtendsForNonMatched(root.allExtends);
        return newRoot;
    },
    checkExtendsForNonMatched: function(extendList) {
        var indices = this.extendIndices;
        extendList.filter(function(extend) {
            return !extend.hasFoundMatches && extend.parent_ids.length == 1;
        }).forEach(function(extend) {
            var selector = '_unknown_';
            try {
                selector = extend.selector.toCSS({});
            }
            catch (_) {}

            if (!indices[extend.index + ' ' + selector]) {
                indices[extend.index + ' ' + selector] = true;
                logger.warn('extend \'' + selector + '\' has no matches');
            }
        });
    },
    doExtendChaining: function (extendsList, extendsListTarget, iterationCount) {
        //
        // chaining is different from normal extension.. if we extend an extend then we are not just copying, altering
        // and pasting the selector we would do normally, but we are also adding an extend with the same target selector
        // this means this new extend can then go and alter other extends
        //
        // this method deals with all the chaining work - without it, extend is flat and doesn't work on other extend selectors
        // this is also the most expensive.. and a match on one selector can cause an extension of a selector we had already
        // processed if we look at each selector at a time, as is done in visitRuleset

        var extendIndex, targetExtendIndex, matches, extendsToAdd = [], newSelector, extendVisitor = this, selectorPath,
            extend, targetExtend, newExtend;

        iterationCount = iterationCount || 0;

        // loop through comparing every extend with every target extend.
        // a target extend is the one on the ruleset we are looking at copy/edit/pasting in place
        // e.g.  .a:extend(.b) {}  and .b:extend(.c) {} then the first extend extends the second one
        // and the second is the target.
        // the separation into two lists allows us to process a subset of chains with a bigger set, as is the
        // case when processing media queries
        for (extendIndex = 0; extendIndex < extendsList.length; extendIndex++) {
            for (targetExtendIndex = 0; targetExtendIndex < extendsListTarget.length; targetExtendIndex++) {

                extend = extendsList[extendIndex];
                targetExtend = extendsListTarget[targetExtendIndex];

                // look for circular references
                if ( extend.parent_ids.indexOf( targetExtend.object_id ) >= 0 ) { continue; }

                // find a match in the target extends self selector (the bit before :extend)
                selectorPath = [targetExtend.selfSelectors[0]];
                matches = extendVisitor.findMatch(extend, selectorPath);

                if (matches.length) {
                    extend.hasFoundMatches = true;

                    // we found a match, so for each self selector..
                    extend.selfSelectors.forEach(function(selfSelector) {
                        var info = targetExtend.visibilityInfo();

                        // process the extend as usual
                        newSelector = extendVisitor.extendSelector(matches, selectorPath, selfSelector, extend.isVisible());

                        // but now we create a new extend from it
                        newExtend = new(tree.Extend)(targetExtend.selector, targetExtend.option, 0, targetExtend.fileInfo(), info);
                        newExtend.selfSelectors = newSelector;

                        // add the extend onto the list of extends for that selector
                        newSelector[newSelector.length - 1].extendList = [newExtend];

                        // record that we need to add it.
                        extendsToAdd.push(newExtend);
                        newExtend.ruleset = targetExtend.ruleset;

                        // remember its parents for circular references
                        newExtend.parent_ids = newExtend.parent_ids.concat(targetExtend.parent_ids, extend.parent_ids);

                        // only process the selector once.. if we have :extend(.a,.b) then multiple
                        // extends will look at the same selector path, so when extending
                        // we know that any others will be duplicates in terms of what is added to the css
                        if (targetExtend.firstExtendOnThisSelectorPath) {
                            newExtend.firstExtendOnThisSelectorPath = true;
                            targetExtend.ruleset.paths.push(newSelector);
                        }
                    });
                }
            }
        }

        if (extendsToAdd.length) {
            // try to detect circular references to stop a stack overflow.
            // may no longer be needed.
            this.extendChainCount++;
            if (iterationCount > 100) {
                var selectorOne = '{unable to calculate}';
                var selectorTwo = '{unable to calculate}';
                try {
                    selectorOne = extendsToAdd[0].selfSelectors[0].toCSS();
                    selectorTwo = extendsToAdd[0].selector.toCSS();
                }
                catch (e) {}
                throw { message: 'extend circular reference detected. One of the circular extends is currently:' +
                    selectorOne + ':extend(' + selectorTwo + ')'};
            }

            // now process the new extends on the existing rules so that we can handle a extending b extending c extending
            // d extending e...
            return extendsToAdd.concat(extendVisitor.doExtendChaining(extendsToAdd, extendsListTarget, iterationCount + 1));
        } else {
            return extendsToAdd;
        }
    },
    visitDeclaration: function (ruleNode, visitArgs) {
        visitArgs.visitDeeper = false;
    },
    visitMixinDefinition: function (mixinDefinitionNode, visitArgs) {
        visitArgs.visitDeeper = false;
    },
    visitSelector: function (selectorNode, visitArgs) {
        visitArgs.visitDeeper = false;
    },
    visitRuleset: function (rulesetNode, visitArgs) {
        if (rulesetNode.root) {
            return;
        }
        var matches, pathIndex, extendIndex, allExtends = this.allExtendsStack[this.allExtendsStack.length - 1],
            selectorsToAdd = [], extendVisitor = this, selectorPath;

        // look at each selector path in the ruleset, find any extend matches and then copy, find and replace

        for (extendIndex = 0; extendIndex < allExtends.length; extendIndex++) {
            for (pathIndex = 0; pathIndex < rulesetNode.paths.length; pathIndex++) {
                selectorPath = rulesetNode.paths[pathIndex];

                // extending extends happens initially, before the main pass
                if (rulesetNode.extendOnEveryPath) { continue; }
                var extendList = selectorPath[selectorPath.length - 1].extendList;
                if (extendList && extendList.length) { continue; }

                matches = this.findMatch(allExtends[extendIndex], selectorPath);

                if (matches.length) {
                    allExtends[extendIndex].hasFoundMatches = true;

                    allExtends[extendIndex].selfSelectors.forEach(function(selfSelector) {
                        var extendedSelectors;
                        extendedSelectors = extendVisitor.extendSelector(matches, selectorPath, selfSelector, allExtends[extendIndex].isVisible());
                        selectorsToAdd.push(extendedSelectors);
                    });
                }
            }
        }
        rulesetNode.paths = rulesetNode.paths.concat(selectorsToAdd);
    },
    findMatch: function (extend, haystackSelectorPath) {
        //
        // look through the haystack selector path to try and find the needle - extend.selector
        // returns an array of selector matches that can then be replaced
        //
        var haystackSelectorIndex, hackstackSelector, hackstackElementIndex, haystackElement,
            targetCombinator, i,
            extendVisitor = this,
            needleElements = extend.selector.elements,
            potentialMatches = [], potentialMatch, matches = [];

        // loop through the haystack elements
        for (haystackSelectorIndex = 0; haystackSelectorIndex < haystackSelectorPath.length; haystackSelectorIndex++) {
            hackstackSelector = haystackSelectorPath[haystackSelectorIndex];

            for (hackstackElementIndex = 0; hackstackElementIndex < hackstackSelector.elements.length; hackstackElementIndex++) {

                haystackElement = hackstackSelector.elements[hackstackElementIndex];

                // if we allow elements before our match we can add a potential match every time. otherwise only at the first element.
                if (extend.allowBefore || (haystackSelectorIndex === 0 && hackstackElementIndex === 0)) {
                    potentialMatches.push({pathIndex: haystackSelectorIndex, index: hackstackElementIndex, matched: 0,
                        initialCombinator: haystackElement.combinator});
                }

                for (i = 0; i < potentialMatches.length; i++) {
                    potentialMatch = potentialMatches[i];

                    // selectors add " " onto the first element. When we use & it joins the selectors together, but if we don't
                    // then each selector in haystackSelectorPath has a space before it added in the toCSS phase. so we need to
                    // work out what the resulting combinator will be
                    targetCombinator = haystackElement.combinator.value;
                    if (targetCombinator === '' && hackstackElementIndex === 0) {
                        targetCombinator = ' ';
                    }

                    // if we don't match, null our match to indicate failure
                    if (!extendVisitor.isElementValuesEqual(needleElements[potentialMatch.matched].value, haystackElement.value) ||
                        (potentialMatch.matched > 0 && needleElements[potentialMatch.matched].combinator.value !== targetCombinator)) {
                        potentialMatch = null;
                    } else {
                        potentialMatch.matched++;
                    }

                    // if we are still valid and have finished, test whether we have elements after and whether these are allowed
                    if (potentialMatch) {
                        potentialMatch.finished = potentialMatch.matched === needleElements.length;
                        if (potentialMatch.finished &&
                            (!extend.allowAfter &&
                                (hackstackElementIndex + 1 < hackstackSelector.elements.length || haystackSelectorIndex + 1 < haystackSelectorPath.length))) {
                            potentialMatch = null;
                        }
                    }
                    // if null we remove, if not, we are still valid, so either push as a valid match or continue
                    if (potentialMatch) {
                        if (potentialMatch.finished) {
                            potentialMatch.length = needleElements.length;
                            potentialMatch.endPathIndex = haystackSelectorIndex;
                            potentialMatch.endPathElementIndex = hackstackElementIndex + 1; // index after end of match
                            potentialMatches.length = 0; // we don't allow matches to overlap, so start matching again
                            matches.push(potentialMatch);
                        }
                    } else {
                        potentialMatches.splice(i, 1);
                        i--;
                    }
                }
            }
        }
        return matches;
    },
    isElementValuesEqual: function(elementValue1, elementValue2) {
        if (typeof elementValue1 === 'string' || typeof elementValue2 === 'string') {
            return elementValue1 === elementValue2;
        }
        if (elementValue1 instanceof tree.Attribute) {
            if (elementValue1.op !== elementValue2.op || elementValue1.key !== elementValue2.key) {
                return false;
            }
            if (!elementValue1.value || !elementValue2.value) {
                if (elementValue1.value || elementValue2.value) {
                    return false;
                }
                return true;
            }
            elementValue1 = elementValue1.value.value || elementValue1.value;
            elementValue2 = elementValue2.value.value || elementValue2.value;
            return elementValue1 === elementValue2;
        }
        elementValue1 = elementValue1.value;
        elementValue2 = elementValue2.value;
        if (elementValue1 instanceof tree.Selector) {
            if (!(elementValue2 instanceof tree.Selector) || elementValue1.elements.length !== elementValue2.elements.length) {
                return false;
            }
            for (var i = 0; i  < elementValue1.elements.length; i++) {
                if (elementValue1.elements[i].combinator.value !== elementValue2.elements[i].combinator.value) {
                    if (i !== 0 || (elementValue1.elements[i].combinator.value || ' ') !== (elementValue2.elements[i].combinator.value || ' ')) {
                        return false;
                    }
                }
                if (!this.isElementValuesEqual(elementValue1.elements[i].value, elementValue2.elements[i].value)) {
                    return false;
                }
            }
            return true;
        }
        return false;
    },
    extendSelector:function (matches, selectorPath, replacementSelector, isVisible) {

        // for a set of matches, replace each match with the replacement selector

        var currentSelectorPathIndex = 0,
            currentSelectorPathElementIndex = 0,
            path = [],
            matchIndex,
            selector,
            firstElement,
            match,
            newElements;

        for (matchIndex = 0; matchIndex < matches.length; matchIndex++) {
            match = matches[matchIndex];
            selector = selectorPath[match.pathIndex];
            firstElement = new tree.Element(
                match.initialCombinator,
                replacementSelector.elements[0].value,
                replacementSelector.elements[0].isVariable,
                replacementSelector.elements[0].getIndex(),
                replacementSelector.elements[0].fileInfo()
            );

            if (match.pathIndex > currentSelectorPathIndex && currentSelectorPathElementIndex > 0) {
                path[path.length - 1].elements = path[path.length - 1]
                    .elements.concat(selectorPath[currentSelectorPathIndex].elements.slice(currentSelectorPathElementIndex));
                currentSelectorPathElementIndex = 0;
                currentSelectorPathIndex++;
            }

            newElements = selector.elements
                .slice(currentSelectorPathElementIndex, match.index)
                .concat([firstElement])
                .concat(replacementSelector.elements.slice(1));

            if (currentSelectorPathIndex === match.pathIndex && matchIndex > 0) {
                path[path.length - 1].elements =
                    path[path.length - 1].elements.concat(newElements);
            } else {
                path = path.concat(selectorPath.slice(currentSelectorPathIndex, match.pathIndex));

                path.push(new tree.Selector(
                    newElements
                ));
            }
            currentSelectorPathIndex = match.endPathIndex;
            currentSelectorPathElementIndex = match.endPathElementIndex;
            if (currentSelectorPathElementIndex >= selectorPath[currentSelectorPathIndex].elements.length) {
                currentSelectorPathElementIndex = 0;
                currentSelectorPathIndex++;
            }
        }

        if (currentSelectorPathIndex < selectorPath.length && currentSelectorPathElementIndex > 0) {
            path[path.length - 1].elements = path[path.length - 1]
                .elements.concat(selectorPath[currentSelectorPathIndex].elements.slice(currentSelectorPathElementIndex));
            currentSelectorPathIndex++;
        }

        path = path.concat(selectorPath.slice(currentSelectorPathIndex, selectorPath.length));
        path = path.map(function (currentValue) {
            // we can re-use elements here, because the visibility property matters only for selectors
            var derived = currentValue.createDerived(currentValue.elements);
            if (isVisible) {
                derived.ensureVisibility();
            } else {
                derived.ensureInvisibility();
            }
            return derived;
        });
        return path;
    },
    visitMedia: function (mediaNode, visitArgs) {
        var newAllExtends = mediaNode.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
        newAllExtends = newAllExtends.concat(this.doExtendChaining(newAllExtends, mediaNode.allExtends));
        this.allExtendsStack.push(newAllExtends);
    },
    visitMediaOut: function (mediaNode) {
        var lastIndex = this.allExtendsStack.length - 1;
        this.allExtendsStack.length = lastIndex;
    },
    visitAtRule: function (atRuleNode, visitArgs) {
        var newAllExtends = atRuleNode.allExtends.concat(this.allExtendsStack[this.allExtendsStack.length - 1]);
        newAllExtends = newAllExtends.concat(this.doExtendChaining(newAllExtends, atRuleNode.allExtends));
        this.allExtendsStack.push(newAllExtends);
    },
    visitAtRuleOut: function (atRuleNode) {
        var lastIndex = this.allExtendsStack.length - 1;
        this.allExtendsStack.length = lastIndex;
    }
};

module.exports = ProcessExtendsVisitor;

},{"../logger":39,"../tree":67,"../utils":89,"./visitor":97}],91:[function(require,module,exports){
function ImportSequencer(onSequencerEmpty) {
    this.imports = [];
    this.variableImports = [];
    this._onSequencerEmpty = onSequencerEmpty;
    this._currentDepth = 0;
}

ImportSequencer.prototype.addImport = function(callback) {
    var importSequencer = this,
        importItem = {
            callback: callback,
            args: null,
            isReady: false
        };
    this.imports.push(importItem);
    return function() {
        importItem.args = Array.prototype.slice.call(arguments, 0);
        importItem.isReady = true;
        importSequencer.tryRun();
    };
};

ImportSequencer.prototype.addVariableImport = function(callback) {
    this.variableImports.push(callback);
};

ImportSequencer.prototype.tryRun = function() {
    this._currentDepth++;
    try {
        while (true) {
            while (this.imports.length > 0) {
                var importItem = this.imports[0];
                if (!importItem.isReady) {
                    return;
                }
                this.imports = this.imports.slice(1);
                importItem.callback.apply(null, importItem.args);
            }
            if (this.variableImports.length === 0) {
                break;
            }
            var variableImport = this.variableImports[0];
            this.variableImports = this.variableImports.slice(1);
            variableImport();
        }
    } finally {
        this._currentDepth--;
    }
    if (this._currentDepth === 0 && this._onSequencerEmpty) {
        this._onSequencerEmpty();
    }
};

module.exports = ImportSequencer;

},{}],92:[function(require,module,exports){
var contexts = require('../contexts'),
    Visitor = require('./visitor'),
    ImportSequencer = require('./import-sequencer'),
    utils = require('../utils');

var ImportVisitor = function(importer, finish) {

    this._visitor = new Visitor(this);
    this._importer = importer;
    this._finish = finish;
    this.context = new contexts.Eval();
    this.importCount = 0;
    this.onceFileDetectionMap = {};
    this.recursionDetector = {};
    this._sequencer = new ImportSequencer(this._onSequencerEmpty.bind(this));
};

ImportVisitor.prototype = {
    isReplacing: false,
    run: function (root) {
        try {
            // process the contents
            this._visitor.visit(root);
        }
        catch (e) {
            this.error = e;
        }

        this.isFinished = true;
        this._sequencer.tryRun();
    },
    _onSequencerEmpty: function() {
        if (!this.isFinished) {
            return;
        }
        this._finish(this.error);
    },
    visitImport: function (importNode, visitArgs) {
        var inlineCSS = importNode.options.inline;

        if (!importNode.css || inlineCSS) {

            var context = new contexts.Eval(this.context, utils.copyArray(this.context.frames));
            var importParent = context.frames[0];

            this.importCount++;
            if (importNode.isVariableImport()) {
                this._sequencer.addVariableImport(this.processImportNode.bind(this, importNode, context, importParent));
            } else {
                this.processImportNode(importNode, context, importParent);
            }
        }
        visitArgs.visitDeeper = false;
    },
    processImportNode: function(importNode, context, importParent) {
        var evaldImportNode,
            inlineCSS = importNode.options.inline;

        try {
            evaldImportNode = importNode.evalForImport(context);
        } catch (e) {
            if (!e.filename) { e.index = importNode.getIndex(); e.filename = importNode.fileInfo().filename; }
            // attempt to eval properly and treat as css
            importNode.css = true;
            // if that fails, this error will be thrown
            importNode.error = e;
        }

        if (evaldImportNode && (!evaldImportNode.css || inlineCSS)) {

            if (evaldImportNode.options.multiple) {
                context.importMultiple = true;
            }

            // try appending if we haven't determined if it is css or not
            var tryAppendLessExtension = evaldImportNode.css === undefined;

            for (var i = 0; i < importParent.rules.length; i++) {
                if (importParent.rules[i] === importNode) {
                    importParent.rules[i] = evaldImportNode;
                    break;
                }
            }

            var onImported = this.onImported.bind(this, evaldImportNode, context),
                sequencedOnImported = this._sequencer.addImport(onImported);

            this._importer.push(evaldImportNode.getPath(), tryAppendLessExtension, evaldImportNode.fileInfo(),
                evaldImportNode.options, sequencedOnImported);
        } else {
            this.importCount--;
            if (this.isFinished) {
                this._sequencer.tryRun();
            }
        }
    },
    onImported: function (importNode, context, e, root, importedAtRoot, fullPath) {
        if (e) {
            if (!e.filename) {
                e.index = importNode.getIndex(); e.filename = importNode.fileInfo().filename;
            }
            this.error = e;
        }

        var importVisitor = this,
            inlineCSS = importNode.options.inline,
            isPlugin = importNode.options.isPlugin,
            isOptional = importNode.options.optional,
            duplicateImport = importedAtRoot || fullPath in importVisitor.recursionDetector;

        if (!context.importMultiple) {
            if (duplicateImport) {
                importNode.skip = true;
            } else {
                importNode.skip = function() {
                    if (fullPath in importVisitor.onceFileDetectionMap) {
                        return true;
                    }
                    importVisitor.onceFileDetectionMap[fullPath] = true;
                    return false;
                };
            }
        }

        if (!fullPath && isOptional) {
            importNode.skip = true;
        }

        if (root) {
            importNode.root = root;
            importNode.importedFilename = fullPath;

            if (!inlineCSS && !isPlugin && (context.importMultiple || !duplicateImport)) {
                importVisitor.recursionDetector[fullPath] = true;

                var oldContext = this.context;
                this.context = context;
                try {
                    this._visitor.visit(root);
                } catch (e) {
                    this.error = e;
                }
                this.context = oldContext;
            }
        }

        importVisitor.importCount--;

        if (importVisitor.isFinished) {
            importVisitor._sequencer.tryRun();
        }
    },
    visitDeclaration: function (declNode, visitArgs) {
        if (declNode.value.type === 'DetachedRuleset') {
            this.context.frames.unshift(declNode);
        } else {
            visitArgs.visitDeeper = false;
        }
    },
    visitDeclarationOut: function(declNode) {
        if (declNode.value.type === 'DetachedRuleset') {
            this.context.frames.shift();
        }
    },
    visitAtRule: function (atRuleNode, visitArgs) {
        this.context.frames.unshift(atRuleNode);
    },
    visitAtRuleOut: function (atRuleNode) {
        this.context.frames.shift();
    },
    visitMixinDefinition: function (mixinDefinitionNode, visitArgs) {
        this.context.frames.unshift(mixinDefinitionNode);
    },
    visitMixinDefinitionOut: function (mixinDefinitionNode) {
        this.context.frames.shift();
    },
    visitRuleset: function (rulesetNode, visitArgs) {
        this.context.frames.unshift(rulesetNode);
    },
    visitRulesetOut: function (rulesetNode) {
        this.context.frames.shift();
    },
    visitMedia: function (mediaNode, visitArgs) {
        this.context.frames.unshift(mediaNode.rules[0]);
    },
    visitMediaOut: function (mediaNode) {
        this.context.frames.shift();
    }
};
module.exports = ImportVisitor;

},{"../contexts":13,"../utils":89,"./import-sequencer":91,"./visitor":97}],93:[function(require,module,exports){
var visitors = {
    Visitor: require('./visitor'),
    ImportVisitor: require('./import-visitor'),
    MarkVisibleSelectorsVisitor: require('./set-tree-visibility-visitor'),
    ExtendVisitor: require('./extend-visitor'),
    JoinSelectorVisitor: require('./join-selector-visitor'),
    ToCSSVisitor: require('./to-css-visitor')
};

module.exports = visitors;

},{"./extend-visitor":90,"./import-visitor":92,"./join-selector-visitor":94,"./set-tree-visibility-visitor":95,"./to-css-visitor":96,"./visitor":97}],94:[function(require,module,exports){
var Visitor = require('./visitor');

var JoinSelectorVisitor = function() {
    this.contexts = [[]];
    this._visitor = new Visitor(this);
};

JoinSelectorVisitor.prototype = {
    run: function (root) {
        return this._visitor.visit(root);
    },
    visitDeclaration: function (declNode, visitArgs) {
        visitArgs.visitDeeper = false;
    },
    visitMixinDefinition: function (mixinDefinitionNode, visitArgs) {
        visitArgs.visitDeeper = false;
    },

    visitRuleset: function (rulesetNode, visitArgs) {
        var context = this.contexts[this.contexts.length - 1],
            paths = [], selectors;

        this.contexts.push(paths);

        if (!rulesetNode.root) {
            selectors = rulesetNode.selectors;
            if (selectors) {
                selectors = selectors.filter(function(selector) { return selector.getIsOutput(); });
                rulesetNode.selectors = selectors.length ? selectors : (selectors = null);
                if (selectors) { rulesetNode.joinSelectors(paths, context, selectors); }
            }
            if (!selectors) { rulesetNode.rules = null; }
            rulesetNode.paths = paths;
        }
    },
    visitRulesetOut: function (rulesetNode) {
        this.contexts.length = this.contexts.length - 1;
    },
    visitMedia: function (mediaNode, visitArgs) {
        var context = this.contexts[this.contexts.length - 1];
        mediaNode.rules[0].root = (context.length === 0 || context[0].multiMedia);
    },
    visitAtRule: function (atRuleNode, visitArgs) {
        var context = this.contexts[this.contexts.length - 1];
        if (atRuleNode.rules && atRuleNode.rules.length) {
            atRuleNode.rules[0].root = (atRuleNode.isRooted || context.length === 0 || null);
        }
    }
};

module.exports = JoinSelectorVisitor;

},{"./visitor":97}],95:[function(require,module,exports){
var SetTreeVisibilityVisitor = function(visible) {
    this.visible = visible;
};
SetTreeVisibilityVisitor.prototype.run = function(root) {
    this.visit(root);
};
SetTreeVisibilityVisitor.prototype.visitArray = function(nodes) {
    if (!nodes) {
        return nodes;
    }

    var cnt = nodes.length, i;
    for (i = 0; i < cnt; i++) {
        this.visit(nodes[i]);
    }
    return nodes;
};
SetTreeVisibilityVisitor.prototype.visit = function(node) {
    if (!node) {
        return node;
    }
    if (node.constructor === Array) {
        return this.visitArray(node);
    }

    if (!node.blocksVisibility || node.blocksVisibility()) {
        return node;
    }
    if (this.visible) {
        node.ensureVisibility();
    } else {
        node.ensureInvisibility();
    }

    node.accept(this);
    return node;
};
module.exports = SetTreeVisibilityVisitor;
},{}],96:[function(require,module,exports){
var tree = require('../tree'),
    Visitor = require('./visitor');

var CSSVisitorUtils = function(context) {
    this._visitor = new Visitor(this);
    this._context = context;
};

CSSVisitorUtils.prototype = {
    containsSilentNonBlockedChild: function(bodyRules) {
        var rule;
        if (!bodyRules) {
            return false;
        }
        for (var r = 0; r < bodyRules.length; r++) {
            rule = bodyRules[r];
            if (rule.isSilent && rule.isSilent(this._context) && !rule.blocksVisibility()) {
                // the atrule contains something that was referenced (likely by extend)
                // therefore it needs to be shown in output too
                return true;
            }
        }
        return false;
    },

    keepOnlyVisibleChilds: function(owner) {
        if (owner && owner.rules) {
            owner.rules = owner.rules.filter(function(thing) {
                return thing.isVisible();
            });
        }
    },

    isEmpty: function(owner) {
        return (owner && owner.rules) 
            ? (owner.rules.length === 0) : true;
    },

    hasVisibleSelector: function(rulesetNode) {
        return (rulesetNode && rulesetNode.paths)
            ? (rulesetNode.paths.length > 0) : false;
    },

    resolveVisibility: function (node, originalRules) {
        if (!node.blocksVisibility()) {
            if (this.isEmpty(node) && !this.containsSilentNonBlockedChild(originalRules)) {
                return ;
            }

            return node;
        }

        var compiledRulesBody = node.rules[0];
        this.keepOnlyVisibleChilds(compiledRulesBody);

        if (this.isEmpty(compiledRulesBody)) {
            return ;
        }

        node.ensureVisibility();
        node.removeVisibilityBlock();

        return node;
    },

    isVisibleRuleset: function(rulesetNode) {
        if (rulesetNode.firstRoot) {
            return true;
        }

        if (this.isEmpty(rulesetNode)) {
            return false;
        }

        if (!rulesetNode.root && !this.hasVisibleSelector(rulesetNode)) {
            return false;
        }

        return true;
    }

};

var ToCSSVisitor = function(context) {
    this._visitor = new Visitor(this);
    this._context = context;
    this.utils = new CSSVisitorUtils(context);
};

ToCSSVisitor.prototype = {
    isReplacing: true,
    run: function (root) {
        return this._visitor.visit(root);
    },

    visitDeclaration: function (declNode, visitArgs) {
        if (declNode.blocksVisibility() || declNode.variable) {
            return;
        }
        return declNode;
    },

    visitMixinDefinition: function (mixinNode, visitArgs) {
        // mixin definitions do not get eval'd - this means they keep state
        // so we have to clear that state here so it isn't used if toCSS is called twice
        mixinNode.frames = [];
    },

    visitExtend: function (extendNode, visitArgs) {
    },

    visitComment: function (commentNode, visitArgs) {
        if (commentNode.blocksVisibility() || commentNode.isSilent(this._context)) {
            return;
        }
        return commentNode;
    },

    visitMedia: function(mediaNode, visitArgs) {
        var originalRules = mediaNode.rules[0].rules;
        mediaNode.accept(this._visitor);
        visitArgs.visitDeeper = false;

        return this.utils.resolveVisibility(mediaNode, originalRules);
    },

    visitImport: function (importNode, visitArgs) {
        if (importNode.blocksVisibility()) {
            return ;
        }
        return importNode;
    },

    visitAtRule: function(atRuleNode, visitArgs) {
        if (atRuleNode.rules && atRuleNode.rules.length) {
            return this.visitAtRuleWithBody(atRuleNode, visitArgs);
        } else {
            return this.visitAtRuleWithoutBody(atRuleNode, visitArgs);
        }
    },

    visitAnonymous: function(anonymousNode, visitArgs) {
        if (!anonymousNode.blocksVisibility()) {
            anonymousNode.accept(this._visitor);
            return anonymousNode;
        }
    },

    visitAtRuleWithBody: function(atRuleNode, visitArgs) {
        // if there is only one nested ruleset and that one has no path, then it is
        // just fake ruleset
        function hasFakeRuleset(atRuleNode) {
            var bodyRules = atRuleNode.rules;
            return bodyRules.length === 1 && (!bodyRules[0].paths || bodyRules[0].paths.length === 0);
        }
        function getBodyRules(atRuleNode) {
            var nodeRules = atRuleNode.rules;
            if (hasFakeRuleset(atRuleNode)) {
                return nodeRules[0].rules;
            }

            return nodeRules;
        }
        // it is still true that it is only one ruleset in array
        // this is last such moment
        // process childs
        var originalRules = getBodyRules(atRuleNode);
        atRuleNode.accept(this._visitor);
        visitArgs.visitDeeper = false;

        if (!this.utils.isEmpty(atRuleNode)) {
            this._mergeRules(atRuleNode.rules[0].rules);
        }

        return this.utils.resolveVisibility(atRuleNode, originalRules);
    },

    visitAtRuleWithoutBody: function(atRuleNode, visitArgs) {
        if (atRuleNode.blocksVisibility()) {
            return;
        }

        if (atRuleNode.name === '@charset') {
            // Only output the debug info together with subsequent @charset definitions
            // a comment (or @media statement) before the actual @charset atrule would
            // be considered illegal css as it has to be on the first line
            if (this.charset) {
                if (atRuleNode.debugInfo) {
                    var comment = new tree.Comment('/* ' + atRuleNode.toCSS(this._context).replace(/\n/g, '') + ' */\n');
                    comment.debugInfo = atRuleNode.debugInfo;
                    return this._visitor.visit(comment);
                }
                return;
            }
            this.charset = true;
        }

        return atRuleNode;
    },

    checkValidNodes: function(rules, isRoot) {
        if (!rules) {
            return;
        }

        for (var i = 0; i < rules.length; i++) {
            var ruleNode = rules[i];
            if (isRoot && ruleNode instanceof tree.Declaration && !ruleNode.variable) {
                throw { message: 'Properties must be inside selector blocks. They cannot be in the root',
                    index: ruleNode.getIndex(), filename: ruleNode.fileInfo() && ruleNode.fileInfo().filename};
            }
            if (ruleNode instanceof tree.Call) {
                throw { message: 'Function \'' + ruleNode.name + '\' is undefined',
                    index: ruleNode.getIndex(), filename: ruleNode.fileInfo() && ruleNode.fileInfo().filename};
            }
            if (ruleNode.type && !ruleNode.allowRoot) {
                throw { message: ruleNode.type + ' node returned by a function is not valid here',
                    index: ruleNode.getIndex(), filename: ruleNode.fileInfo() && ruleNode.fileInfo().filename};
            }
        }
    },

    visitRuleset: function (rulesetNode, visitArgs) {
        // at this point rulesets are nested into each other
        var rule, rulesets = [];

        this.checkValidNodes(rulesetNode.rules, rulesetNode.firstRoot);

        if (!rulesetNode.root) {
            // remove invisible paths
            this._compileRulesetPaths(rulesetNode);

            // remove rulesets from this ruleset body and compile them separately
            var nodeRules = rulesetNode.rules, nodeRuleCnt = nodeRules ? nodeRules.length : 0;
            for (var i = 0; i < nodeRuleCnt; ) {
                rule = nodeRules[i];
                if (rule && rule.rules) {
                    // visit because we are moving them out from being a child
                    rulesets.push(this._visitor.visit(rule));
                    nodeRules.splice(i, 1);
                    nodeRuleCnt--;
                    continue;
                }
                i++;
            }
            // accept the visitor to remove rules and refactor itself
            // then we can decide nogw whether we want it or not
            // compile body
            if (nodeRuleCnt > 0) {
                rulesetNode.accept(this._visitor);
            } else {
                rulesetNode.rules = null;
            }
            visitArgs.visitDeeper = false;

        } else { // if (! rulesetNode.root) {
            rulesetNode.accept(this._visitor);
            visitArgs.visitDeeper = false;
        }

        if (rulesetNode.rules) {
            this._mergeRules(rulesetNode.rules);
            this._removeDuplicateRules(rulesetNode.rules);
        }

        // now decide whether we keep the ruleset
        if (this.utils.isVisibleRuleset(rulesetNode)) {
            rulesetNode.ensureVisibility();
            rulesets.splice(0, 0, rulesetNode);
        }

        if (rulesets.length === 1) {
            return rulesets[0];
        }
        return rulesets;
    },

    _compileRulesetPaths: function(rulesetNode) {
        if (rulesetNode.paths) {
            rulesetNode.paths = rulesetNode.paths
                .filter(function(p) {
                    var i;
                    if (p[0].elements[0].combinator.value === ' ') {
                        p[0].elements[0].combinator = new(tree.Combinator)('');
                    }
                    for (i = 0; i < p.length; i++) {
                        if (p[i].isVisible() && p[i].getIsOutput()) {
                            return true;
                        }
                    }
                    return false;
                });
        }
    },

    _removeDuplicateRules: function(rules) {
        if (!rules) { return; }

        // remove duplicates
        var ruleCache = {},
            ruleList, rule, i;

        for (i = rules.length - 1; i >= 0 ; i--) {
            rule = rules[i];
            if (rule instanceof tree.Declaration) {
                if (!ruleCache[rule.name]) {
                    ruleCache[rule.name] = rule;
                } else {
                    ruleList = ruleCache[rule.name];
                    if (ruleList instanceof tree.Declaration) {
                        ruleList = ruleCache[rule.name] = [ruleCache[rule.name].toCSS(this._context)];
                    }
                    var ruleCSS = rule.toCSS(this._context);
                    if (ruleList.indexOf(ruleCSS) !== -1) {
                        rules.splice(i, 1);
                    } else {
                        ruleList.push(ruleCSS);
                    }
                }
            }
        }
    },

    _mergeRules: function(rules) {
        if (!rules) {
            return; 
        }

        var groups    = {},
            groupsArr = [];
        
        for (var i = 0; i < rules.length; i++) {
            var rule = rules[i];
            if (rule.merge) {
                var key = rule.name;
                groups[key] ? rules.splice(i--, 1) : 
                    groupsArr.push(groups[key] = []);
                groups[key].push(rule);
            }
        }

        groupsArr.forEach(function(group) {
            if (group.length > 0) {
                var result = group[0],
                    space  = [],
                    comma  = [new tree.Expression(space)];
                group.forEach(function(rule) {
                    if ((rule.merge === '+') && (space.length > 0)) {
                        comma.push(new tree.Expression(space = []));
                    }
                    space.push(rule.value);
                    result.important = result.important || rule.important;
                });
                result.value = new tree.Value(comma);
            }
        });
    }
};

module.exports = ToCSSVisitor;

},{"../tree":67,"./visitor":97}],97:[function(require,module,exports){
var tree = require('../tree');

var _visitArgs = { visitDeeper: true },
    _hasIndexed = false;

function _noop(node) {
    return node;
}

function indexNodeTypes(parent, ticker) {
    // add .typeIndex to tree node types for lookup table
    var key, child;
    for (key in parent) { 
        /* eslint guard-for-in: 0 */
        child = parent[key];
        switch (typeof child) {
            case 'function':
                // ignore bound functions directly on tree which do not have a prototype
                // or aren't nodes
                if (child.prototype && child.prototype.type) {
                    child.prototype.typeIndex = ticker++;
                }
                break;
            case 'object':
                ticker = indexNodeTypes(child, ticker);
                break;
        
        }
    }
    return ticker;
}

var Visitor = function(implementation) {
    this._implementation = implementation;
    this._visitInCache = {};
    this._visitOutCache = {};

    if (!_hasIndexed) {
        indexNodeTypes(tree, 1);
        _hasIndexed = true;
    }
};

Visitor.prototype = {
    visit: function(node) {
        if (!node) {
            return node;
        }

        var nodeTypeIndex = node.typeIndex;
        if (!nodeTypeIndex) {
            // MixinCall args aren't a node type?
            if (node.value && node.value.typeIndex) {
                this.visit(node.value);
            }
            return node;
        }

        var impl = this._implementation,
            func = this._visitInCache[nodeTypeIndex],
            funcOut = this._visitOutCache[nodeTypeIndex],
            visitArgs = _visitArgs,
            fnName;

        visitArgs.visitDeeper = true;

        if (!func) {
            fnName = 'visit' + node.type;
            func = impl[fnName] || _noop;
            funcOut = impl[fnName + 'Out'] || _noop;
            this._visitInCache[nodeTypeIndex] = func;
            this._visitOutCache[nodeTypeIndex] = funcOut;
        }

        if (func !== _noop) {
            var newNode = func.call(impl, node, visitArgs);
            if (node && impl.isReplacing) {
                node = newNode;
            }
        }

        if (visitArgs.visitDeeper && node && node.accept) {
            node.accept(this);
        }

        if (funcOut != _noop) {
            funcOut.call(impl, node);
        }

        return node;
    },
    visitArray: function(nodes, nonReplacing) {
        if (!nodes) {
            return nodes;
        }

        var cnt = nodes.length, i;

        // Non-replacing
        if (nonReplacing || !this._implementation.isReplacing) {
            for (i = 0; i < cnt; i++) {
                this.visit(nodes[i]);
            }
            return nodes;
        }

        // Replacing
        var out = [];
        for (i = 0; i < cnt; i++) {
            var evald = this.visit(nodes[i]);
            if (evald === undefined) { continue; }
            if (!evald.splice) {
                out.push(evald);
            } else if (evald.length) {
                this.flatten(evald, out);
            }
        }
        return out;
    },
    flatten: function(arr, out) {
        if (!out) {
            out = [];
        }

        var cnt, i, item,
            nestedCnt, j, nestedItem;

        for (i = 0, cnt = arr.length; i < cnt; i++) {
            item = arr[i];
            if (item === undefined) {
                continue;
            }
            if (!item.splice) {
                out.push(item);
                continue;
            }

            for (j = 0, nestedCnt = item.length; j < nestedCnt; j++) {
                nestedItem = item[j];
                if (nestedItem === undefined) {
                    continue;
                }
                if (!nestedItem.splice) {
                    out.push(nestedItem);
                } else if (nestedItem.length) {
                    this.flatten(nestedItem, out);
                }
            }
        }

        return out;
    }
};
module.exports = Visitor;

},{"../tree":67}],98:[function(require,module,exports){
"use strict";

// rawAsap provides everything we need except exception management.
var rawAsap = require("./raw");
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};

},{"./raw":99}],99:[function(require,module,exports){
(function (global){
"use strict";

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],100:[function(require,module,exports){
'use strict'

exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function placeHoldersCount (b64) {
  var len = b64.length
  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // the number of equal signs (place holders)
  // if there are two placeholders, than the two characters before it
  // represent one byte
  // if there is only one, then the three characters before it represent 2 bytes
  // this is just a cheap hack to not do indexOf twice
  return b64[len - 2] === '=' ? 2 : b64[len - 1] === '=' ? 1 : 0
}

function byteLength (b64) {
  // base64 is 4/3 + up to two characters of the original data
  return (b64.length * 3 / 4) - placeHoldersCount(b64)
}

function toByteArray (b64) {
  var i, l, tmp, placeHolders, arr
  var len = b64.length
  placeHolders = placeHoldersCount(b64)

  arr = new Arr((len * 3 / 4) - placeHolders)

  // if there are placeholders, only get up to the last complete 4 chars
  l = placeHolders > 0 ? len - 4 : len

  var L = 0

  for (i = 0; i < l; i += 4) {
    tmp = (revLookup[b64.charCodeAt(i)] << 18) | (revLookup[b64.charCodeAt(i + 1)] << 12) | (revLookup[b64.charCodeAt(i + 2)] << 6) | revLookup[b64.charCodeAt(i + 3)]
    arr[L++] = (tmp >> 16) & 0xFF
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  if (placeHolders === 2) {
    tmp = (revLookup[b64.charCodeAt(i)] << 2) | (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[L++] = tmp & 0xFF
  } else if (placeHolders === 1) {
    tmp = (revLookup[b64.charCodeAt(i)] << 10) | (revLookup[b64.charCodeAt(i + 1)] << 4) | (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[L++] = (tmp >> 8) & 0xFF
    arr[L++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] + lookup[num >> 12 & 0x3F] + lookup[num >> 6 & 0x3F] + lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp = (uint8[i] << 16) + (uint8[i + 1] << 8) + (uint8[i + 2])
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var output = ''
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    output += lookup[tmp >> 2]
    output += lookup[(tmp << 4) & 0x3F]
    output += '=='
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + (uint8[len - 1])
    output += lookup[tmp >> 10]
    output += lookup[(tmp >> 4) & 0x3F]
    output += lookup[(tmp << 2) & 0x3F]
    output += '='
  }

  parts.push(output)

  return parts.join('')
}

},{}],101:[function(require,module,exports){
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */

'use strict'

var base64 = require('base64-js')
var ieee754 = require('ieee754')

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

var K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('Invalid typed array length')
  }
  // Return an augmented `Uint8Array` instance
  var buf = new Uint8Array(length)
  buf.__proto__ = Buffer.prototype
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

// Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
if (typeof Symbol !== 'undefined' && Symbol.species &&
    Buffer[Symbol.species] === Buffer) {
  Object.defineProperty(Buffer, Symbol.species, {
    value: null,
    configurable: true,
    enumerable: false,
    writable: false
  })
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (isArrayBuffer(value)) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  return fromObject(value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Buffer.prototype.__proto__ = Uint8Array.prototype
Buffer.__proto__ = Uint8Array

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  var buf = createBuffer(length)

  var actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  var buf = createBuffer(length)
  for (var i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  var buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  buf.__proto__ = Buffer.prototype
  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    var buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj) {
    if (isArrayBufferView(obj) || 'length' in obj) {
      if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
        return createBuffer(0)
      }
      return fromArrayLike(obj)
    }

    if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
      return fromArrayLike(obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (isArrayBufferView(string) || isArrayBuffer(string)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  newBuf.__proto__ = Buffer.prototype
  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    var limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : new Buffer(val, encoding)
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffers from another context (i.e. an iframe) do not pass the `instanceof` check
// but they should be treated as valid. See: https://github.com/feross/buffer/issues/166
function isArrayBuffer (obj) {
  return obj instanceof ArrayBuffer ||
    (obj != null && obj.constructor != null && obj.constructor.name === 'ArrayBuffer' &&
      typeof obj.byteLength === 'number')
}

// Node 0.10 supports `ArrayBuffer` but lacks `ArrayBuffer.isView`
function isArrayBufferView (obj) {
  return (typeof ArrayBuffer.isView === 'function') && ArrayBuffer.isView(obj)
}

function numberIsNaN (obj) {
  return obj !== obj // eslint-disable-line no-self-compare
}

},{"base64-js":100,"ieee754":103}],102:[function(require,module,exports){
(function (Buffer){
var clone = (function() {
'use strict';

function _instanceof(obj, type) {
  return type != null && obj instanceof type;
}

var nativeMap;
try {
  nativeMap = Map;
} catch(_) {
  // maybe a reference error because no `Map`. Give it a dummy value that no
  // value will ever be an instanceof.
  nativeMap = function() {};
}

var nativeSet;
try {
  nativeSet = Set;
} catch(_) {
  nativeSet = function() {};
}

var nativePromise;
try {
  nativePromise = Promise;
} catch(_) {
  nativePromise = function() {};
}

/**
 * Clones (copies) an Object using deep copying.
 *
 * This function supports circular references by default, but if you are certain
 * there are no circular references in your object, you can save some CPU time
 * by calling clone(obj, false).
 *
 * Caution: if `circular` is false and `parent` contains circular references,
 * your program may enter an infinite loop and crash.
 *
 * @param `parent` - the object to be cloned
 * @param `circular` - set to true if the object to be cloned may contain
 *    circular references. (optional - true by default)
 * @param `depth` - set to a number if the object is only to be cloned to
 *    a particular depth. (optional - defaults to Infinity)
 * @param `prototype` - sets the prototype to be used when cloning an object.
 *    (optional - defaults to parent prototype).
 * @param `includeNonEnumerable` - set to true if the non-enumerable properties
 *    should be cloned as well. Non-enumerable properties on the prototype
 *    chain will be ignored. (optional - false by default)
*/
function clone(parent, circular, depth, prototype, includeNonEnumerable) {
  if (typeof circular === 'object') {
    depth = circular.depth;
    prototype = circular.prototype;
    includeNonEnumerable = circular.includeNonEnumerable;
    circular = circular.circular;
  }
  // maintain two arrays for circular references, where corresponding parents
  // and children have the same index
  var allParents = [];
  var allChildren = [];

  var useBuffer = typeof Buffer != 'undefined';

  if (typeof circular == 'undefined')
    circular = true;

  if (typeof depth == 'undefined')
    depth = Infinity;

  // recurse this function so we don't reset allParents and allChildren
  function _clone(parent, depth) {
    // cloning null always returns null
    if (parent === null)
      return null;

    if (depth === 0)
      return parent;

    var child;
    var proto;
    if (typeof parent != 'object') {
      return parent;
    }

    if (_instanceof(parent, nativeMap)) {
      child = new nativeMap();
    } else if (_instanceof(parent, nativeSet)) {
      child = new nativeSet();
    } else if (_instanceof(parent, nativePromise)) {
      child = new nativePromise(function (resolve, reject) {
        parent.then(function(value) {
          resolve(_clone(value, depth - 1));
        }, function(err) {
          reject(_clone(err, depth - 1));
        });
      });
    } else if (clone.__isArray(parent)) {
      child = [];
    } else if (clone.__isRegExp(parent)) {
      child = new RegExp(parent.source, __getRegExpFlags(parent));
      if (parent.lastIndex) child.lastIndex = parent.lastIndex;
    } else if (clone.__isDate(parent)) {
      child = new Date(parent.getTime());
    } else if (useBuffer && Buffer.isBuffer(parent)) {
      if (Buffer.allocUnsafe) {
        // Node.js >= 4.5.0
        child = Buffer.allocUnsafe(parent.length);
      } else {
        // Older Node.js versions
        child = new Buffer(parent.length);
      }
      parent.copy(child);
      return child;
    } else if (_instanceof(parent, Error)) {
      child = Object.create(parent);
    } else {
      if (typeof prototype == 'undefined') {
        proto = Object.getPrototypeOf(parent);
        child = Object.create(proto);
      }
      else {
        child = Object.create(prototype);
        proto = prototype;
      }
    }

    if (circular) {
      var index = allParents.indexOf(parent);

      if (index != -1) {
        return allChildren[index];
      }
      allParents.push(parent);
      allChildren.push(child);
    }

    if (_instanceof(parent, nativeMap)) {
      parent.forEach(function(value, key) {
        var keyChild = _clone(key, depth - 1);
        var valueChild = _clone(value, depth - 1);
        child.set(keyChild, valueChild);
      });
    }
    if (_instanceof(parent, nativeSet)) {
      parent.forEach(function(value) {
        var entryChild = _clone(value, depth - 1);
        child.add(entryChild);
      });
    }

    for (var i in parent) {
      var attrs;
      if (proto) {
        attrs = Object.getOwnPropertyDescriptor(proto, i);
      }

      if (attrs && attrs.set == null) {
        continue;
      }
      child[i] = _clone(parent[i], depth - 1);
    }

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(parent);
      for (var i = 0; i < symbols.length; i++) {
        // Don't need to worry about cloning a symbol because it is a primitive,
        // like a number or string.
        var symbol = symbols[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, symbol);
        if (descriptor && !descriptor.enumerable && !includeNonEnumerable) {
          continue;
        }
        child[symbol] = _clone(parent[symbol], depth - 1);
        if (!descriptor.enumerable) {
          Object.defineProperty(child, symbol, {
            enumerable: false
          });
        }
      }
    }

    if (includeNonEnumerable) {
      var allPropertyNames = Object.getOwnPropertyNames(parent);
      for (var i = 0; i < allPropertyNames.length; i++) {
        var propertyName = allPropertyNames[i];
        var descriptor = Object.getOwnPropertyDescriptor(parent, propertyName);
        if (descriptor && descriptor.enumerable) {
          continue;
        }
        child[propertyName] = _clone(parent[propertyName], depth - 1);
        Object.defineProperty(child, propertyName, {
          enumerable: false
        });
      }
    }

    return child;
  }

  return _clone(parent, depth);
}

/**
 * Simple flat clone using prototype, accepts only objects, usefull for property
 * override on FLAT configuration object (no nested props).
 *
 * USE WITH CAUTION! This may not behave as you wish if you do not know how this
 * works.
 */
clone.clonePrototype = function clonePrototype(parent) {
  if (parent === null)
    return null;

  var c = function () {};
  c.prototype = parent;
  return new c();
};

// private utility functions

function __objToStr(o) {
  return Object.prototype.toString.call(o);
}
clone.__objToStr = __objToStr;

function __isDate(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Date]';
}
clone.__isDate = __isDate;

function __isArray(o) {
  return typeof o === 'object' && __objToStr(o) === '[object Array]';
}
clone.__isArray = __isArray;

function __isRegExp(o) {
  return typeof o === 'object' && __objToStr(o) === '[object RegExp]';
}
clone.__isRegExp = __isRegExp;

function __getRegExpFlags(re) {
  var flags = '';
  if (re.global) flags += 'g';
  if (re.ignoreCase) flags += 'i';
  if (re.multiline) flags += 'm';
  return flags;
}
clone.__getRegExpFlags = __getRegExpFlags;

return clone;
})();

if (typeof module === 'object' && module.exports) {
  module.exports = clone;
}

}).call(this,require("buffer").Buffer)
},{"buffer":101}],103:[function(require,module,exports){
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = nBytes * 8 - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}

},{}],104:[function(require,module,exports){
'use strict';

var asap = require('asap/raw');

function noop() {}

// States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable

// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.


// to avoid using try/catch inside critical functions, we
// extract them to here.
var LAST_ERROR = null;
var IS_ERROR = {};
function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}
function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (typeof this !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }
  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }
  this._40 = 0;
  this._65 = 0;
  this._55 = null;
  this._72 = null;
  if (fn === noop) return;
  doResolve(fn, this);
}
Promise._37 = null;
Promise._87 = null;
Promise._61 = noop;

Promise.prototype.then = function(onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }
  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}
function handle(self, deferred) {
  while (self._65 === 3) {
    self = self._55;
  }
  if (Promise._37) {
    Promise._37(self);
  }
  if (self._65 === 0) {
    if (self._40 === 0) {
      self._40 = 1;
      self._72 = deferred;
      return;
    }
    if (self._40 === 1) {
      self._40 = 2;
      self._72 = [self._72, deferred];
      return;
    }
    self._72.push(deferred);
    return;
  }
  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function() {
    var cb = self._65 === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      if (self._65 === 1) {
        resolve(deferred.promise, self._55);
      } else {
        reject(deferred.promise, self._55);
      }
      return;
    }
    var ret = tryCallOne(cb, self._55);
    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}
function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(
      self,
      new TypeError('A promise cannot be resolved with itself.')
    );
  }
  if (
    newValue &&
    (typeof newValue === 'object' || typeof newValue === 'function')
  ) {
    var then = getThen(newValue);
    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }
    if (
      then === self.then &&
      newValue instanceof Promise
    ) {
      self._65 = 3;
      self._55 = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }
  self._65 = 1;
  self._55 = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._65 = 2;
  self._55 = newValue;
  if (Promise._87) {
    Promise._87(self, newValue);
  }
  finale(self);
}
function finale(self) {
  if (self._40 === 1) {
    handle(self, self._72);
    self._72 = null;
  }
  if (self._40 === 2) {
    for (var i = 0; i < self._72.length; i++) {
      handle(self, self._72[i]);
    }
    self._72 = null;
  }
}

function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });
  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}

},{"asap/raw":99}],105:[function(require,module,exports){
'use strict';

//This file contains the ES6 extensions to the core Promises/A+ API

var Promise = require('./core.js');

module.exports = Promise;

/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._61);
  p._65 = 1;
  p._55 = value;
  return p;
}
Promise.resolve = function (value) {
  if (value instanceof Promise) return value;

  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (typeof value === 'object' || typeof value === 'function') {
    try {
      var then = value.then;
      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }
  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);

  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._65 === 3) {
            val = val._55;
          }
          if (val._65 === 1) return res(i, val._55);
          if (val._65 === 2) reject(val._55);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;
          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }
      args[i] = val;
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function(value){
      Promise.resolve(value).then(resolve, reject);
    });
  });
};

/* Prototype Methods */

Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

},{"./core.js":104}],106:[function(require,module,exports){
// should work in any browser without browserify

if (typeof Promise.prototype.done !== 'function') {
  Promise.prototype.done = function (onFulfilled, onRejected) {
    var self = arguments.length ? this.then.apply(this, arguments) : this
    self.then(null, function (err) {
      setTimeout(function () {
        throw err
      }, 0)
    })
  }
}
},{}],107:[function(require,module,exports){
// not "use strict" so we can declare global "Promise"

var asap = require('asap');

if (typeof Promise === 'undefined') {
  Promise = require('./lib/core.js')
  require('./lib/es6-extensions.js')
}

require('./polyfill-done.js');

},{"./lib/core.js":104,"./lib/es6-extensions.js":105,"./polyfill-done.js":106,"asap":98}]},{},[2])(2)
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(32)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
	 true ? factory(exports, __webpack_require__(1)) :
	undefined;
}(this, (function (exports,riot) { 'use strict';

var nonState = 'isMounted opts'.split(' ');

function reload(name) {
  riot.util.styleManager.inject();

  var elems = document.querySelectorAll((name + ", [data-is=" + name + "]"));
  var tags = [];

  for (var i = 0; i < elems.length; i++) {
    var el = elems[i], oldTag = el._tag, v;
    reload.trigger('before-unmount', oldTag);
    oldTag.unmount(true); // detach the old tag

    // reset the innerHTML and attributes to how they were before mount
    el.innerHTML = oldTag.__.innerHTML;
    (oldTag.__.instAttrs || []).map(function(attr) {
      el.setAttribute(attr.name, attr.value);
    });

    // copy options for creating the new tag
    var newOpts = {};
    for(key in oldTag.opts) {
      newOpts[key] = oldTag.opts[key];
    }
    newOpts.parent = oldTag.parent;

    // create the new tag
    reload.trigger('before-mount', newOpts, oldTag);
    var newTag = riot.mount(el, newOpts)[0];

    // copy state from the old to new tag
    for(var key in oldTag) {
      v = oldTag[key];
      if (~nonState.indexOf(key)) { continue }
      newTag[key] = v;
    }
    newTag.update();
    tags.push(newTag);
    reload.trigger('after-mount', newTag, oldTag);
  }

  return tags
}

riot.observable(reload);
riot.reload = reload;
if (riot.default) { riot.default.reload = reload; }

exports.reload = reload;
exports['default'] = reload;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(3);
var Axios = __webpack_require__(14);
var defaults = __webpack_require__(2);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(7);
axios.CancelToken = __webpack_require__(29);
axios.isCancel = __webpack_require__(6);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(30);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(2);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(24);
var dispatchRequest = __webpack_require__(25);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(5);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(26);
var isCancel = __webpack_require__(6);
var defaults = __webpack_require__(2);
var isAbsoluteURL = __webpack_require__(27);
var combineURLs = __webpack_require__(28);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(7);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/riot/riot.js
var riot = __webpack_require__(1);
var riot_default = /*#__PURE__*/__webpack_require__.n(riot);

// EXTERNAL MODULE: ./node_modules/riot-hot-reload/index.js
var riot_hot_reload = __webpack_require__(11);

// EXTERNAL MODULE: ./node_modules/nanoevents/index.js
var nanoevents = __webpack_require__(8);
var nanoevents_default = /*#__PURE__*/__webpack_require__.n(nanoevents);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(9);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./lib/scripts/helper/client.js


var capitalize = function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var downsizeImage = function downsizeImage(path, width) {
  // Check if the source is Cloudinary
  if (path.includes('cloudinary.com')) {
    // Inject transformation rules
    return path.replace('/upload/', '/upload/c_limit,w_' + width + '/');
  } else {
    return path;
  }
};

var client_showOverlay = function showOverlay(tagName, specs) {
  // Remove previous overlay
  hideOverlay(); // Create new overlay

  var newOverlayItem = document.createElement('groups-overlay'); // Set component property on overlay

  var component = document.createAttribute('component');
  component.value = tagName;
  newOverlayItem.setAttributeNode(component); // Set specs of component on overlay

  if (specs) {
    var _arr = Object.keys(specs);

    for (var _i = 0; _i < _arr.length; _i++) {
      var key = _arr[_i];
      var attribute = document.createAttribute(key);
      attribute.value = specs[key];
      newOverlayItem.setAttributeNode(attribute);
    }
  } // Mount & append overlay


  riot_default.a.mount(newOverlayItem);
  document.body.appendChild(newOverlayItem);
};

var hideOverlay = function hideOverlay() {
  // Remove previous overlay
  var previousOverlayItem = document.querySelector('groups-overlay');
  previousOverlayItem && previousOverlayItem.parentNode.removeChild(previousOverlayItem);
  document.body.style.overflow = 'auto';
};


// CONCATENATED MODULE: ./lib/scripts/helper/call.js

 // API call function

function apiCall(method, args, callback, emitPostSignal) {
  //Crate Axios instance
  var instance = axios_default.a.create({
    baseURL: window.GroupsConfig.host,
    timeout: 20000,
    headers: {
      'Content-Type': 'application/json'
    },
    maxRedirects: 3
  }); // Create query string

  var _call = "/".concat(method, "?");

  for (var key in args) {
    _call += key + '=' + encodeURI(args[key]) + '&';
  }

  _call += 'public_id=' + window.GroupsConfig.id; // Make the call

  instance.get(_call, {
    withCredentials: true
  }).then(function (response) {
    callback(response); // Execute "after" events

    if (emitPostSignal) window.Groups.events.emit("after" + capitalize(method), args);
  }).catch(function (error) {
    console.log(error);
  });
}

var call_call = function call(method, args, callback) {
  var emitPostSignal = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  // Execute "before" events
  var beforeEventsExist = Object.keys(window.Groups.events.events).indexOf("before" + capitalize(method)) != -1;

  if (beforeEventsExist) {
    window.Groups.events.emit("before" + capitalize(method), args, function () {
      var goToNextStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (goToNextStep) {
        apiCall(method, args, callback, emitPostSignal);
      }
    });
  } else {
    apiCall(method, args, callback, emitPostSignal);
  }
};

/* harmony default export */ var helper_call = (call_call);
// CONCATENATED MODULE: ./lib/scripts/call/getProfile.js


function getProfileCall(args, callback) {
  helper_call("getProfile", {
    "id": args[0]
  }, function (response) {
    callback(response.data);
  });
}

;
/* harmony default export */ var getProfile = (function () {
  var args = Array.from(arguments);
  var callback = args.pop();
  getProfileCall(args, callback);
});
;
// CONCATENATED MODULE: ./lib/scripts/call/getUser.js


function getUserCall(callback) {
  helper_call("whoami", {}, function (response) {
    callback(response.data);
  });
}

;
/* harmony default export */ var getUser = (function (callback) {
  getUserCall(callback);
});
;
// CONCATENATED MODULE: ./lib/scripts/helper/session.js


var getPublicId = function getPublicId() {
  return window && window.hasOwnProperty('GroupsConfig') ? window.GroupsConfig.id.replace(/-/g, '') : undefined;
};

var getCookies = function getCookies() {
  return document.cookie.replace(/\s+/g, '').split(';');
};

var getCookie = function getCookie(key) {
  var cookies = getCookies();
  var cookieExists = cookies.filter(function (cookie) {
    return cookie.indexOf(key) >= 0;
  }).length;

  if (cookieExists) {
    // Get value from the related cookie
    var value;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = cookies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var cookie = _step.value;
        var data = cookie.split('=');
        value = data[0] === key ? data[1] : undefined;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return value;
  } else {
    return false;
  }
};

var startSession = function startSession(id) {
  var key = getPublicId();
  var expiry = new Date();
  expiry.setTime(expiry.getTime() + 10 * 60 * 1000);
  document.cookie = 'groups_' + key + '_id=' + id + '; path=/; expires=' + expiry.toGMTString();
  document.cookie = 'groups_' + key + '_session_off=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
};

var session_getSession = function getSession(callback) {
  var key = getPublicId();
  var id = getCookie('groups_' + key + '_id=');
  var response;

  if (id) {
    // Respond positively
    callback({
      "success": true,
      "id": id
    });
  } else {
    // Check if session is marked as "off"
    var sessionIsOff = getCookie('groups_' + key + '_session_off=');

    if (sessionIsOff) {
      // Respond negatively
      callback({
        "success": false,
        "reason": "No active session"
      });
    } else {
      // Check for session on server
      getUser(function (response) {
        if (response.success) {
          // Start session
          startSession();
        } else {
          // End session
          endSession();
        } // Respond with new session information


        callback(response);
      });
    }
  }
};

var endSession = function endSession() {
  var key = getPublicId();
  document.cookie = 'groups_' + key + '_id=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.cookie = 'groups_' + key + '_session_off=true; path=/;';
};


// CONCATENATED MODULE: ./lib/scripts/call/logout.js



function logoutCall(callback) {
  helper_call("logout", {}, function (response) {
    if (response.data.success) {
      endSession();
      window.Groups.events.emit("afterLogout");
    }

    callback(response.data);
  }, false);
}

;
/* harmony default export */ var logout = (function (callback) {
  logoutCall(callback);
});
;
// CONCATENATED MODULE: ./lib/scripts/helper/show.js


var show_show = function show(name, specs) {
  // Set tag name
  var tagName = 'groups-' + name; // Set hook name

  var hookName = 'Show';
  name.split('-').forEach(function (word) {
    return hookName += capitalize(word);
  });
  var beforeEventsExist = Object.keys(window.Groups.events.events).indexOf("before" + hookName) != -1;

  if (beforeEventsExist) {
    window.Groups.events.emit('before' + hookName, specs, function () {
      var goToNextStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (goToNextStep) {
        client_showOverlay(tagName, specs);
        window.Groups.events.emit('after' + hookName, specs);
      }
    });
  } else {
    client_showOverlay(tagName, specs);
    window.Groups.events.emit('after' + hookName, specs);
  }
};

/* harmony default export */ var helper_show = (show_show);
// CONCATENATED MODULE: ./lib/tags/auth-state.tag

    var auth_state_riot = __webpack_require__(1)
    
 // Helper functions



auth_state_riot.tag2('groups-auth-state', '<div class="groups-content"> <div class="groups-not-logged" if="{!id}"> <a if="{!stateInformation}" class="groups-idle">&middot; &middot; &middot;</a> <a if="{stateInformation}" class="{opts.minor && opts.active == \'login\' ? \'groups-active\' : \'\'}" data-link="login" onclick="{opts.minor ? handleCallback : handleLoginBox}">Login</a> <a if="{stateInformation}" class="{opts.minor && opts.active == \'register\' ? \'groups-active\' : \'\'}" data-link="register" onclick="{opts.minor ? handleCallback : handleRegisterBox}">Register</a> </div> <div class="groups-logged" if="{id}"> <a if="{!profile}" class="groups-idle">&middot; &middot; &middot;</a> <a class="groups-details" data-link="profile" data-id="{id}" onclick="{handleShow}" if="{profile}"> <img riot-src="{profile.avatar ? downsizeImage(profile.avatar, 40) : \'https://res.cloudinary.com/groups/image/upload/groups/content/avatars/user.png\'}"> <span>{profile.fullname || profile.username}</span> </a> <a class="groups-exit" if="{profile}" onclick="{handleExit}"> <svg viewbox="0 -1 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-17.000000, -16.000000)" fill="black" fill-rule="nonzero"> <path d="M19.9086651,31.0702576 L25.9789227,31.0702576 L25.9789227,34 L17,34 L17,16 L26,16 L26,18.9297424 L19.9086651,18.9297424 L19.9086651,31.0702576 Z M29.3157895,21.0187266 L31.4210526,23.0580524 L23,23.0580524 L23,25.9213483 L31.4210526,25.9213483 L29.3157895,27.9812734 L31.3789474,30 L37,24.5 L31.3789474,19 L29.3157895,21.0187266 Z"></path> </g> </g> </svg> </a> </div> </div>', '', 'class="{\'groups-element groups-root groups-\' + theme + (opts.type == \'inline\' ? \' groups-inline\' : \' groups-box\')}" riot-style="{\'height: \' + height + \'; line-height: \' + height + \';\'}"', function(opts) {
var _this = this;

// Call functions
this.downsizeImage = downsizeImage;
this.theme = opts.theme || 'default';
this.height = opts.height || '50px';
this.failMessages = [];
this.on('before-mount', function () {
  this.handleState();
});

this.restart = function () {
  _this.handleState();
};

this.handleLoginBox = function () {
  return helper_show('login', {
    action: 'updateState'
  });
};

this.handleRegisterBox = function () {
  return helper_show('register', {
    action: 'updateState'
  });
};

this.handleState = function () {
  var self = _this;
  session_getSession(function (response) {
    if (response.success) {
      self.id = response.id;
      self.handleInformation(self.id);
    } else {
      //Handle errors
      self.stateInformation = true;
      self.update();
    }
  });
};

this.handleInformation = function (id) {
  var self = _this;
  getProfile(id, function (response) {
    if (response.success) {
      self.profile = response.profile;
      self.stateInformation = true;
      self.update();
    } else {
      self.stateInformation = true;
      self.update(); //Handle errors
    }
  });
};

this.handleCallback = function (event) {
  event.target.classList.contains('groups-active') ? opts.callback() : opts.callback(event);
};

this.handleShow = function (event) {
  var self = _this;
  var dataset = event.target.dataset;

  switch (dataset.link) {
    case 'profile':
      helper_show('profile', {
        id: dataset.id,
        scroll: true
      });
      break;
  }
};

this.handleExit = function () {
  var self = _this;
  logout(function (response) {
    if (response.success) {
      self.id = undefined;
      self.update();
      Array.from(document.getElementsByClassName('groups-element')).forEach(function (item) {
        item._tag && item._tag.restart && item._tag.restart();
      });
    } else {//Handle errors
    }
  });
};
});
    
  if (false) {}
  
// CONCATENATED MODULE: ./lib/scripts/call/login.js



function loginCall(args, callback) {
  helper_call("login", {
    "username": args[0],
    "password": args[1]
  }, function (response) {
    if (response.data.success) {
      startSession(response.data.id);
      window.Groups.events.emit("afterLogin", args);
    }

    callback(response.data);
  }, false);
}

;
/* harmony default export */ var login = (function () {
  var args = Array.from(arguments);
  var callback = args.pop();
  loginCall(args, callback);
});
;
// CONCATENATED MODULE: ./lib/tags/auth-login.tag

    var auth_login_riot = __webpack_require__(1)
     // Helper functions


auth_login_riot.tag2('groups-auth-login', '<div class="groups-header" if="{opts.title}"> <div class="groups-title">{opts.title || \'Login\'}</div> </div> <div class="groups-warning" if="{failMessages.length > 0}"> <ul if="{failMessages.length > 0}" class="groups-fail"> <li each="{failMessage in failMessages}">{failMessage}</li> </ul> </div> <div class="groups-content"> <form> <input ref="username" type="text" placeholder="Enter your username"> <input ref="password" type="password" placeholder="Enter your password"> <button ref="submit" onclick="{handleSubmit}">Login</button> <div class="groups-option groups-double"> <a data-link="register" onclick="{opts.minor ? opts.callback : handleRegisterBox}">Not registered?</a> <a data-link="reset" onclick="{opts.minor ? opts.callback : handleResetBox}">Forgot Password</a> </div> </form> </div> <div class="groups-check"> <svg class="groups-checkmark" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 52 52"> <circle class="groups-checkmark_circle" cx="26" cy="26" r="25" fill="none"></circle> <path class="groups-checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path> </svg> </div>', '', 'class="{\'groups-element groups-root groups-box\' + (checked ? \' groups-checked\' : \'\')}" riot-style="{opts.minor ? (opts.gap == 0 ? \'top: -1em);\' : \'top: calc(\' + opts.gap + \' + 1em);\') : \'\'}"', function(opts) {
var _this = this;

// Call functions

this.handleRegisterBox = function () {
  return helper_show('register');
};

this.handleResetBox = function () {
  return helper_show('reset');
};

this.failMessages = [];

this.checkUsernameMinimumLength = function () {
  var usernameMinimumLengthLimit = 1;
  var failMessage = 'Username is too short!';

  if (_this.refs.username.value.length >= usernameMinimumLengthLimit) {
    _this.refs.username.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.username.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.checkUsernamePattern = function () {
  var failMessage = 'Username is invalid. Valid characters are letters, numbers, hyphens, and underscores.';
  var usernamePattern = /^[a-zA-Z0-9-_]+$/;

  if (usernamePattern.test(_this.refs.username.value)) {
    _this.refs.username.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.username.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.checkPasswordMinimumLength = function () {
  var passwordMinimumLengthLimit = 5;
  var failMessage = 'Password must be ' + passwordMinimumLengthLimit + ' characters minimum!';

  if (_this.refs.password.value.length >= passwordMinimumLengthLimit) {
    _this.refs.password.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.password.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.validateInformation = function () {
  var validUsernameMinimumLength = _this.checkUsernameMinimumLength();

  var validUsernamePattern = _this.checkUsernamePattern();

  var validPasswordMinimumLength = _this.checkPasswordMinimumLength();

  if (validUsernameMinimumLength && validUsernamePattern && // Username
  validPasswordMinimumLength // Username
  ) {
      return true;
    } else {
    _this.refs.submit.classList.remove('groups-loading');

    return false;
  }
};

this.handleSubmit = function (event) {
  event.preventDefault();
  var self = _this;
  self.refs.submit.classList.add('groups-loading');
  var username = self.refs.username.value;
  var password = self.refs.password.value;
  self.refs.username.className = '';
  self.refs.password.className = '';
  self.failMessages = [];

  if (self.validateInformation()) {
    login(username, password, function (response) {
      if (response.success) {
        self.checked = true;
        self.refs.submit.classList.remove('groups-loading');
        self.update();
        Array.from(document.getElementsByClassName('groups-element')).forEach(function (item) {
          item._tag && item._tag.restart && item._tag.restart();
        });

        if (opts.minor) {
          opts.callback();
          opts.refresh();
        } else {
          setTimeout(function () {
            hideOverlay();
          }, 2500);
        }
      } else {
        var failMessage = response.reason || 'We couldn\'t log you in.';
        self.failMessages = [];
        self.failMessages.push(failMessage);
        self.refs.username.className = 'groups-error';
        self.refs.password.className = 'groups-error';
        self.refs.submit.classList.remove('groups-loading');
        self.update();
      }
    });
  }
};
});
    
  if (false) {}
  
// CONCATENATED MODULE: ./lib/scripts/call/register.js


function registerCall(args, callback) {
  helper_call("signup", {
    "username": args[0],
    "email": args[1],
    "password": args[2]
  }, function (response) {
    callback(response.data);
  });
}

;
/* harmony default export */ var register = (function () {
  var args = Array.from(arguments);
  var callback = args.pop();
  registerCall(args, callback);
});
;
// CONCATENATED MODULE: ./lib/tags/auth-register.tag

    var auth_register_riot = __webpack_require__(1)
    
 // Helper functions


auth_register_riot.tag2('groups-auth-register', '<div class="groups-header" if="{opts.title}"> <div class="groups-title">{opts.title || \'Register\'}</div> </div> <div class="groups-warning" if="{failMessages.length > 0}"> <ul if="{failMessages.length > 0}" class="groups-fail"> <li each="{failMessage in failMessages}">{failMessage}</li> </ul> </div> <div class="groups-content"> <form> <input ref="username" type="text" placeholder="Choose a nickname"> <input ref="email" type="text" placeholder="Enter email address"> <input ref="password" type="password" placeholder="Set password"> <input ref="confirmation" type="password" placeholder="Confirm password"> <button ref="submit" onclick="{handleSubmit}">Register</button> <div class="groups-option groups-single"> <a data-link="login" onclick="{opts.minor ? opts.callback : handleLoginBox}">Already a member?</a> </div> </form> </div> <div class="groups-check"> <svg class="groups-checkmark" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 52 52"> <circle class="groups-checkmark_circle" cx="26" cy="26" r="25" fill="none"></circle> <path class="groups-checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path> </svg> </div>', '', 'class="{\'groups-element groups-root groups-box\' + (checked ? \' groups-checked\' : \'\')}"', function(opts) {
var _this = this;

//Call functions

this.handleLoginBox = function () {
  return helper_show('login');
};

this.failMessages = [];

this.checkUsernameMinimumLength = function () {
  var usernameMinimumLengthLimit = 1;
  var failMessage = 'Username is too short!';

  if (_this.refs.username.value.length >= usernameMinimumLengthLimit) {
    _this.refs.username.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.username.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.checkUsernameMaximumLength = function () {
  var usernameMaximumLengthLimit = 36;
  var failMessage = 'Username must be ' + usernameMaximumLengthLimit + ' characters maximum!';

  if (_this.refs.username.value.length <= usernameMaximumLengthLimit) {
    _this.refs.username.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.username.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.checkUsernamePattern = function () {
  var failMessage = 'Username is invalid. Valid characters are letters, numbers, hyphens, and underscores.';
  var usernamePattern = /^[a-zA-Z0-9-_]+$/;

  if (usernamePattern.test(_this.refs.username.value)) {
    _this.refs.username.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.username.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.checkEmailPattern = function () {
  var failMessage = 'Email is invalid. Valid format: user@site.com';
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(_this.refs.email.value)) {
    _this.refs.email.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.email.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.checkPasswordMinimumLength = function () {
  var passwordMinimumLengthLimit = 5;
  var failMessage = 'Password must be ' + passwordMinimumLengthLimit + ' characters minimum!';

  if (_this.refs.password.value.length >= passwordMinimumLengthLimit) {
    _this.refs.password.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.password.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.checkPasswordMaximumLength = function () {
  var passwordMaximumLengthLimit = 255;
  var failMessage = 'Password must be ' + passwordMaximumLengthLimit + ' characters maximum!';

  if (_this.refs.password.value.length <= passwordMaximumLengthLimit) {
    _this.refs.password.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.password.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.checkPasswordMatch = function () {
  var failMessage = 'Passwords do not match.';

  if (_this.refs.password.value == _this.refs.confirmation.value) {
    _this.refs.confirmation.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.confirmation.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.validateInformation = function () {
  var validUsernameMinimumLength = _this.checkUsernameMinimumLength();

  var validUsernameMaximumLength = _this.checkUsernameMaximumLength();

  var validUsernamePattern = _this.checkUsernamePattern();

  var validEmailPattern = _this.checkEmailPattern();

  var validPasswordMinimumLength = _this.checkPasswordMinimumLength();

  var validPasswordMaximumLength = _this.checkPasswordMaximumLength();

  var validPasswordMatch = _this.checkPasswordMatch();

  if (validUsernameMinimumLength && validUsernameMaximumLength && validUsernamePattern && // Username
  validEmailPattern && // Email
  validPasswordMinimumLength && validPasswordMaximumLength && validPasswordMatch // Password
  ) {
      return true;
    } else {
    _this.refs.submit.classList.remove('groups-loading');

    return false;
  }
};

this.handleSubmit = function (event) {
  event.preventDefault();
  var self = _this;
  self.refs.submit.classList.add('groups-loading');
  var username = self.refs.username.value;
  var email = self.refs.email.value;
  var password = self.refs.password.value;
  self.refs.username.className = '';
  self.refs.email.className = '';
  self.refs.password.className = '';
  self.failMessages = [];

  if (self.validateInformation()) {
    register(username, email, password, function (response) {
      if (response.success) {
        //Auto-Login
        login(username, password, function (response) {
          if (response.success) {
            self.checked = true;
            self.refs.submit.classList.remove('groups-loading');
            self.update();
            Array.from(document.getElementsByClassName('groups-element')).forEach(function (item) {
              item._tag && item._tag.restart && item._tag.restart();
            });

            if (opts.minor) {
              opts.callback();
              opts.refresh();
            } else {
              setTimeout(function () {
                hideOverlay();
              }, 2500);
            }
          } else {
            self.refs.submit.classList.remove('groups-loading');
            helper_show('alert', {
              'title': 'Register Successful!',
              'message': 'Please login to continue.',
              'affirmative': 'Login',
              'negative': 'Cancel',
              'show': 'login'
            });
          }
        });
      } else {
        var failMessage = response.reason || 'We couldn\'t register you.';
        self.failMessages = [];
        self.failMessages.push(failMessage);
        self.refs.username.className = 'groups-error';
        self.refs.email.className = 'groups-error';
        self.refs.password.className = 'groups-error';
        self.refs.confirmation.className = 'groups-error';
        self.refs.submit.classList.remove('groups-loading');
        self.update();
      }
    });
  }
};
});
    
  if (false) {}
  
// CONCATENATED MODULE: ./lib/scripts/call/reset.js


function resetCall(args, callback) {
  helper_call("resetPassword", {
    "email": args[0]
  }, function (response) {
    callback(response.data);
  });
}

;
/* harmony default export */ var call_reset = (function () {
  var args = Array.from(arguments);
  var callback = args.pop();
  resetCall(args, callback);
});
;
// CONCATENATED MODULE: ./lib/scripts/call/verify.js


function verify_resetCall(args, callback) {
  helper_call("verifyReset", {
    "email": args[0],
    "code": args[1]
  }, function (response) {
    callback(response.data);
  });
}

;
/* harmony default export */ var verify = (function () {
  var args = Array.from(arguments);
  var callback = args.pop();
  verify_resetCall(args, callback);
});
;
// CONCATENATED MODULE: ./lib/scripts/call/setPassword.js


function setPasswordCall(args, callback) {
  helper_call("setProfile", {
    "password": args[0]
  }, function (response) {
    callback(response.data);
  });
}

;
/* harmony default export */ var setPassword = (function () {
  var args = Array.from(arguments);
  var callback = args.pop();
  setPasswordCall(args, callback);
});
;
// CONCATENATED MODULE: ./lib/tags/auth-reset.tag

    var auth_reset_riot = __webpack_require__(1)
    

 // Helper functions

 //this.next = 'provideEmail';
auth_reset_riot.tag2('groups-auth-reset', '<div class="groups-header" if="{opts.title}"> <div class="groups-title">{opts.title || \'Reset Password\'}</div> </div> <div class="groups-warning" if="{failMessages.length > 0}"> <ul if="{failMessages.length > 0}" class="groups-fail"> <li each="{failMessage in failMessages}">{failMessage}</li> </ul> </div> <div class="groups-content"> <form if="{next == \'provideEmail\'}"> <b>Step 1</b> <p>Please enter your email address.</p> <input ref="email" type="text" placeholder="Email address"> <button ref="submitEmail" onclick="{handleEmailSubmit}">Continue</button> <div class="groups-option groups-single"> <a data-link="register" onclick="{opts.minor ? opts.callback : handleRegisterBox}">Not registered?</a> </div> </form> <form class="groups-code" if="{next == \'verifyCode\'}"> <b>Step 2</b> <p>Please enter the 6-digit code we sent to your email.</p> <div ref="code"> <input each="{item in Array(codeCharacterCount)}" onkeyup="{handleCodeInput}" type="text" maxlength="1"> </div> <button ref="submitCode" onclick="{handleCodeSubmit}">Continue</button> </form> <form class="groups-code" if="{next == \'updatePassword\'}"> <b>Step 3</b> <p>Please enter new password.</p> <input ref="password" type="password" placeholder="Enter new password"> <input ref="confirmation" type="password" placeholder="Confirm new password"> <button ref="submitPassword" onclick="{handlePasswordSubmit}">Update Password</button> </form> </div> <div class="groups-check"> <svg class="groups-checkmark" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 52 52"> <circle class="groups-checkmark_circle" cx="26" cy="26" r="25" fill="none"></circle> <path class="groups-checkmark_check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"></path> </svg> </div>', '', 'class="{\'groups-element groups-root groups-box\' + (checked ? \' groups-checked\' : \'\')}"', function(opts) {
var _this = this;

// Call functions

this.next = 'provideEmail';
this.codeCharacterCount = 6;
this.codeTemplate = new Array(this.codeCharacterCount);
this.failMessages = [];

this.handleRegisterBox = function () {
  return helper_show('register');
}; //Step 1: provideEmail

this.checkEmailPattern = function () {
  var failMessage = 'Email is invalid. Valid format: user@site.com';
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(_this.refs.email.value)) {
    _this.refs.email.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.email.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.validateEmail = function () {
  var validEmailPattern = _this.checkEmailPattern();

  if (validEmailPattern) {
    return true;
  } else {
    _this.refs.submitEmail.classList.remove('groups-loading');

    return false;
  }
};

this.handleEmailSubmit = function (event) {
  event.preventDefault();
  var self = _this;
  self.refs.submitEmail.classList.add('groups-loading');
  var email = self.refs.email.value;
  self.refs.email.className = '';
  self.failMessages = [];

  if (self.validateEmail()) {
    call_reset(email, function (response) {
      if (response.success) {
        self.refs.submitEmail.classList.remove('groups-loading');
        self.email = email;
        self.next = 'verifyCode';
        self.update();
        self.refs.code.firstElementChild.focus();
      } else {
        failMessage = response.reason || 'Please try entering your email again.';
        self.refs.submitEmail.classList.remove('groups-loading');
        self.refs.email.classList.add('groups-error');
        self.failMessages.includes(failMessage) || self.failMessages.push(failMessage);
        self.update();
      }
    });
  }
}; //Step 2: verifyCode

this.handleCodeInput = function (event) {
  if (event.keyCode != 46 && event.keyCode != 8) {
    if (!isNaN(parseInt(event.target.value))) {
      event.target.nextElementSibling && event.target.nextElementSibling.focus();
    } else {
      event.target.value = '';
    }
  }
};

this.checkCodeCharacterLength = function () {
  var self = _this;
  var characters = Array.from(self.refs.code.children);
  var failMessage = 'All ' + self.codeCharacterCount + ' characters must be entered!';
  var result = true;
  characters.forEach(function (item) {
    if (item.value.length != 1) {
      result = false;
    }
  });

  if (result == true) {
    self.failMessages.includes(failMessage) && self.failMessages.splice(self.failMessages.indexOf(failMessage), 1);
  } else {
    self.failMessages.includes(failMessage) || self.failMessages.push(failMessage);
  }

  return result;
};

this.checkCodeCharacterType = function () {
  var self = _this;
  var characters = Array.from(self.refs.code.children);
  var failMessage = 'All ' + self.codeCharacterCount + ' characters must be number!';
  var result = true;
  characters.forEach(function (item) {
    if (isNaN(item.value)) {
      result = false;
    }
  });

  if (result == true) {
    self.failMessages.includes(failMessage) && self.failMessages.splice(self.failMessages.indexOf(failMessage), 1);
  } else {
    self.failMessages.includes(failMessage) || self.failMessages.push(failMessage);
  }

  return result;
};

this.validateCode = function () {
  var characters = Array.from(_this.refs.code.children);

  var validCodeCharacterLength = _this.checkCodeCharacterLength();

  var validCodeCharacterType = _this.checkCodeCharacterType();

  if (validCodeCharacterLength && validCodeCharacterType // Code
  ) {
      characters.forEach(function (item) {
        item.classList.remove('groups-error');
      });
      return true;
    } else {
    _this.refs.submitCode.classList.remove('groups-loading');

    characters.forEach(function (item) {
      item.classList.add('groups-error');
    });
    return false;
  }
};

this.handleCodeSubmit = function (event) {
  event.preventDefault();
  var self = _this;
  var characters = Array.from(self.refs.code.children);
  self.refs.submitCode.classList.add('groups-loading');
  var code = '';
  characters.forEach(function (item) {
    code += item.value;
    item.className = '';
  });
  self.failMessages = [];

  if (self.validateCode()) {
    verify(self.email, code, function (response) {
      if (response.success) {
        self.refs.submitCode.classList.remove('groups-loading');
        self.next = 'updatePassword';
        self.update();
      } else {
        var _failMessage = response.reason || 'Please try entering your code again.';

        self.refs.submitCode.classList.remove('groups-loading');

        var _characters = Array.from(self.refs.code.children);

        _characters.forEach(function (item) {
          item.classList.add('groups-error');
        });

        self.failMessages.includes(_failMessage) || self.failMessages.push(_failMessage);
        self.update();
      }
    });
  }
}; //Step 3: updatePassword

this.checkPasswordMinimumLength = function () {
  var passwordMinimumLengthLimit = 5;
  var failMessage = 'Password must be ' + passwordMinimumLengthLimit + ' characters minimum!';

  if (_this.refs.password.value.length >= passwordMinimumLengthLimit) {
    _this.refs.password.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.password.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.checkPasswordMaximumLength = function () {
  var passwordMaximumLengthLimit = 255;
  var failMessage = 'Password must be ' + passwordMaximumLengthLimit + ' characters maximum!';

  if (_this.refs.password.value.length <= passwordMaximumLengthLimit) {
    _this.refs.password.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.password.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.checkPasswordMatch = function () {
  var failMessage = 'Passwords do not match.';

  if (_this.refs.password.value == _this.refs.confirmation.value) {
    _this.refs.confirmation.classList.remove('groups-error');

    _this.failMessages.includes(failMessage) && _this.failMessages.splice(_this.failMessages.indexOf(failMessage), 1);
    return true;
  } else {
    _this.refs.confirmation.classList.add('groups-error');

    _this.failMessages.includes(failMessage) || _this.failMessages.push(failMessage);
    return false;
  }
};

this.validatePassword = function () {
  var validPasswordMinimumLength = _this.checkPasswordMinimumLength();

  var validPasswordMaximumLength = _this.checkPasswordMaximumLength();

  var validPasswordMatch = _this.checkPasswordMatch();

  if (validPasswordMinimumLength && validPasswordMaximumLength && validPasswordMatch // Password
  ) {
      return true;
    } else {
    _this.refs.submitPassword.classList.remove('groups-loading');

    return false;
  }
};

this.handlePasswordSubmit = function (event) {
  event.preventDefault();
  var self = _this;
  self.refs.submitPassword.classList.add('groups-loading');
  var password = self.refs.password.value;
  self.refs.password.className = '';
  self.refs.confirmation.className = '';
  self.failMessages = [];

  if (self.validatePassword()) {
    setPassword(password, function (response) {
      if (response.success) {
        self.refs.submitPassword.classList.remove('groups-loading');
        self.checked = true;
        self.update();

        if (opts.minor) {
          opts.callback();
          opts.refresh();
        } else {
          setTimeout(function () {
            hideOverlay();
          }, 2500);
        }
      } else {
        failMessage = response.reason || 'Please try entering your password again.';
        self.refs.submitPassword.classList.remove('groups-loading');
        self.refs.password.classList.add('groups-error');
        self.failMessages.includes(failMessage) || self.failMessages.push(failMessage);
        self.update();
      }
    });
  }
};
});
    
  if (false) {}
  
// CONCATENATED MODULE: ./lib/tags/auth.tag

    var auth_riot = __webpack_require__(1)
    



auth_riot.tag2('groups-auth', '<groups-auth-state minor="{true}" callback="{changeProperties}" type="{opts.type}" theme="{opts.theme}" active="{active}" height="{opts.height}"></groups-auth-state> <groups-auth-login minor="{true}" title="{opts.title}" callback="{changeProperties}" gap="{(position == \'topleft\' || position == \'topright\') ? height : 0}" refresh="{refreshState}" if="{active == \'login\'}"></groups-auth-login> <groups-auth-register minor="{true}" title="{opts.title}" callback="{changeProperties}" gap="{(position == \'topleft\' || position == \'topright\') ? height : 0}" refresh="{refreshState}" if="{active == \'register\'}"></groups-auth-register> <groups-auth-reset minor="{true}" title="{opts.title}" callback="{changeProperties}" gap="{(position == \'topleft\' || position == \'topright\') ? height : 0}" refresh="{refreshState}" if="{active == \'reset\'}"></groups-auth-reset>', '', 'class="{\'groups-element groups-root groups-\' + position}" riot-style="{\'height: \' + height + \'; line-height: \' + height + \'; \'}"', function(opts) {
var _this = this;
this.active = opts.default || undefined;
this.height = opts.height || '50px';
this.position = opts.position && ['topleft', 'topright', 'bottomleft', 'bottomright'].includes(opts.position) ? opts.position : 'topleft';

this.changeProperties = function (event) {
  _this.active = event ? event.currentTarget.dataset.link : undefined;

  _this.update();
};

this.refreshState = function () {
  _this.tags['groups-auth-state'].stateInformation = false;

  _this.tags['groups-auth-state'].update();

  _this.tags['groups-auth-state'].handleState();
};
});
    
  if (false) {}
  
// EXTERNAL MODULE: ./lib/styles/common.less
var common = __webpack_require__(31);

// EXTERNAL MODULE: ./node_modules/less/dist/less.js
var less = __webpack_require__(10);
var less_default = /*#__PURE__*/__webpack_require__.n(less);

// CONCATENATED MODULE: ./lib/scripts/renderColor.js

var colorFunction = '@prefix: groups;\n' + '.icon-color-states(@color) {\n' + '    svg {\n' + '        path {\n' + '            fill: @color;\n' + '        }\n' + '    }\n' + '    &:hover {\n' + '        svg {\n' + '            path {\n' + '                fill: tint(@color, 10%);\n' + '            }\n' + '        }\n' + '    }\n' + '    &:active {\n' + '        svg {\n' + '            path {\n' + '                fill: shade(@color, 10%);\n' + '            }\n' + '        }\n' + '    }\n' + '}\n' + '.text-color-states(@color) {\n' + '    color: @color;\n' + '    &:hover {\n' + '        color: tint(@color, 10%);\n' + '    }\n' + '    &:active {\n' + '        color: shade(@color, 10%);\n' + '    }\n' + '}\n' + '.background-color-states(@color) {\n' + '    background-color: @color;\n' + '    &:hover {\n' + '        background-color: tint(@color, 10%);\n' + '    }\n' + '    &:active {\n' + '        background-color: shade(@color, 10%);\n' + '    }\n' + '}\n' + '.@{prefix}-custom-color {\n' + '    .@{prefix}-root {\n' + '        a {\n' + '            .text-color-states(@theme-color);\n' + '        }\n' + '        button {\n' + '            .background-color-states(@theme-color);\n' + '        }\n' + '    }\n' + '    .@{prefix}-article {' + '        a {' + '            color: @theme-color;' + '        }' + '        blockquote {' + '            border-left-color: @theme-color;' + '            &::before{' + '                color: @theme-color;' + '            }' + '        }' + '    }' + '    .@{prefix}-box.@{prefix}-root {\n' + '        .@{prefix}-header {\n' + '            .@{prefix}-title {\n' + '                color: @theme-color;\n' + '            }\n' + '            .@{prefix}-option {\n' + '                .icon-color-states(@theme-color);\n' + '                svg {\n' + '                    path {\n' + '                        fill: @theme-color;\n' + '                    }\n' + '                }\n' + '            }\n' + '        }\n' + '    }\n' + '    .@{prefix}-card.@{prefix}-root {\n' + '        .@{prefix}-information {\n' + '            b {\n' + '                .text-color-states(@theme-color);\n' + '            }\n' + '        }\n' + '        button {\n' + '            .background-color-states(@theme-color);\n' + '        }\n' + '        &.@{prefix}-color {\n' + '            background-color: @theme-color;\n' + '            button {\n' + '                color: @theme-color;\n' + '            }\n' + '        }\n' + '    }\n' + '    .@{prefix}-credit {\n' + '        span {\n' + '            color: @theme-color;\n' + '            b {\n' + '                color: @theme-color;\n' + '            }\n' + '        }\n' + '    }\n' + '    .@{prefix}-loading {\n' + '        .@{prefix}-loader {\n' + '            &.@{prefix}-inline {\n' + '                .@{prefix}-dots {\n' + '                    & > span {\n' + '                        background-color: @theme-color;\n' + '                    }\n' + '                }\n' + '            }\n' + '        }\n' + '    }\n' + '    @{prefix}-alert.@{prefix}-root {\n' + '        & > button {\n' + '            &:not(.@{prefix}-danger) {\n' + '               color: @theme-color !important;\n' + '            }\n' + '        }\n' + '    }\n' + '    @{prefix}-auth-state.@{prefix}-root {\n' + '        .@{prefix}-content {\n' + '            a {\n' + '                color: @theme-color;' + '                border-right: 1px dotted fade(@theme-color, 20%);\n' + '            }\n' + '            .@{prefix}-logged {\n' + '                .@{prefix}-details {\n' + '                    span {\n' + '                        color: @theme-color;\n' + '                    }\n' + '                }\n' + '                .@{prefix}-exit {\n' + '                    svg {\n' + '                        path {\n' + '                            fill: fade(@theme-color, 50%);\n' + '                        }\n' + '                    }\n' + '                }\n' + '            }\n' + '        }\n' + '        &.@{prefix}-color {\n' + '            background-color: @theme-color;\n' + '        }\n' + '    }\n' + '    @{prefix}-blog-composer.@{prefix}-root {' + '        .@{prefix}-content {' + '            form {' + '                input, input[type] {' + '                    color: @theme-color;' + '                    &::placeholder {' + '                        color: @theme-color;' + '                    }' + '                }' + '            }' + '        }' + '    }' + '    @{prefix}-blog-list.@{prefix}-root {' + '        .@{prefix}-content {' + '            .@{prefix}-list {' + '                .@{prefix}-item {' + '                    .@{prefix}-title {' + '                        .text-color-states(@theme-color);' + '                    }' + '                }' + '            }' + '        }' + '    }' + '    @{prefix}-blog-post.@{prefix}-root {' + '        .@{prefix}-content {' + '            .@{prefix}-post {' + '                .@{prefix}-title {' + '                    color: @theme-color;' + '                }' + '            }' + '            .@{prefix}-reply {' + '                border-top: 2px solid @theme-color;' + '                .@{prefix}-synopsis {' + '                    & > a {' + '                        &.@{prefix}-icon {' + '                            svg {' + '                                path {' + '                                    fill: @theme-color;' + '                                }' + '                            }' + '                        }' + '                    }' + '                }' + '            }' + '        }' + '    }' + '    @{prefix}-forum-list.@{prefix}-root {\n' + '        .@{prefix}-content {\n' + '            .@{prefix}-bar {\n' + '                .@{prefix}-search {\n' + '                    background-color: desaturate(tint(@theme-color, 20%), 5%);\n' + '                }\n' + '                button {\n' + '                    .background-color-states(@theme-color);\n' + '                }\n' + '            }\n' + '            .@{prefix}-list {\n' + '                .@{prefix}-item {\n' + '                    &:hover {\n' + '                        background-color: fade(@theme-color, 5%);\n' + '                    }\n' + '                }\n' + '            }\n' + '        }\n' + '    }\n' + '    @{prefix}-forum-thread.@{prefix}-root {\n' + '        .@{prefix}-content {\n' + '            .@{prefix}-reply {\n' + '                border-top: 2px solid @theme-color;\n' + '                .@{prefix}-synopsis {\n' + '                    & > a {\n' + '                        &.@{prefix}-icon {\n' + '                            svg {\n' + '                                path {\n' + '                                    fill: @theme-color;\n' + '                                }\n' + '                            }\n' + '                        }\n' + '                    }\n' + '                }\n' + '            }\n' + '        }\n' + '    }\n' + '    @{prefix}-group-card.@{prefix}-root {\n' + '        .@{prefix}-information {\n' + '            b {\n' + '                color: @theme-color;\n' + '                .text-color-states(@theme-color);\n' + '            }\n' + '        }\n' + '    }\n' + '    @{prefix}-group-header.@{prefix}-root {\n' + '        .@{prefix}-information {\n' + '            a {\n' + '                .text-color-states(@theme-color);\n' + '            }\n' + '            .@{prefix}-members {\n' + '                span {\n' + '                    background-color: @theme-color;\n' + '                }\n' + '            }\n' + '        }\n' + '        ul {\n' + '            li {\n' + '                a {\n' + '                    svg {\n' + '                        path {\n' + '                            fill: @theme-color;\n' + '                        }\n' + '                    }\n' + '                }\n' + '            }\n' + '        }\n' + '    }\n' + '    @{prefix}-group-settings.@{prefix}-root {\n' + '        .@{prefix}-content {\n' + '            h2 {\n' + '                color: @theme-color;\n' + '            }\n' + '            .@{prefix}-cover {\n' + '                &:hover {\n' + '                    &::before {\n' + '                        background-color: fade(@theme-color, 90%);\n' + '                    }\n' + '                }\n' + '                &::before {\n' + '                    background-color: fade(@theme-color, 60%);\n' + '                }\n' + '            }\n' + '        }\n' + '    }\n' + '    @{prefix}-messages.@{prefix}-root {\n' + '        .@{prefix}-content {\n' + '            .@{prefix}-sidebar {\n' + '                input, input[type] {\n' + '                    background-color: @theme-color;\n' + '                }\n' + '                .@{prefix}-list {\n' + '                    .@{prefix}-item {\n' + '                        &.@{prefix}-unread {\n' + '                            background-color: fade(@theme-color, 15%);\n' + '                            div {\n' + '                                b {\n' + '                                    color: @theme-color !important;\n' + '                                }\n' + '                            }\n' + '                        }\n' + '                    }\n' + '                }\n' + '            }\n' + '            .@{prefix}-main {\n' + '                .@{prefix}-conversation {\n' + '                    .@{prefix}-item {\n' + '                        &.@{prefix}-outbound {\n' + '                            p {\n' + '                                background-color: @theme-color;\n' + '                            }\n' + '                        }\n' + '                    }\n' + '                }\n' + '            }\n' + '        }\n' + '    }\n' + '    @{prefix}-profile-activity.@{prefix}-root {\n' + '        .@{prefix}-content {\n' + '            ul {\n' + '                li {\n' + '                    &::before {\n' + '                        background-color: @theme-color;\n' + '                    }\n' + '                    div {\n' + '                        svg {\n' + '                            path {\n' + '                                fill: @theme-color;\n' + '                            }\n' + '                        }\n' + '                    }\n' + '                }\n' + '            }\n' + '        }\n' + '    }\n' + '    @{prefix}-profile-card.@{prefix}-root {\n' + '        .@{prefix}-option {\n' + '            .icon-color-states(@theme-color);\n' + '            svg {\n' + '                path {\n' + '                    fill: @theme-color;\n' + '                }\n' + '            }\n' + '        }\n' + '        .@{prefix}-information {\n' + '            b {\n' + '                .text-color-states(@theme-color);\n' + '            }\n' + '        }\n' + '    }\n' + '    @{prefix}-profile-header.@{prefix}-root {\n' + '        .@{prefix}-option {\n' + '            .icon-color-states(@theme-color);\n' + '            svg {\n' + '                path {\n' + '                    fill: @theme-color;\n' + '                }\n' + '            }\n' + '        }\n' + '        .@{prefix}-information {\n' + '            a {\n' + '                .text-color-states(@theme-color);\n' + '            }\n' + '        }\n' + '        ul {\n' + '            li {\n' + '                a {\n' + '                    svg {\n' + '                        path {\n' + '                            fill: @theme-color;\n' + '                        }\n' + '                    }\n' + '                }\n' + '            }\n' + '        }\n' + '    }\n' + '    @{prefix}-profile-settings.@{prefix}-root {\n' + '        .@{prefix}-content {\n' + '            h2 {\n' + '                color: @theme-color;\n' + '            }\n' + '            .@{prefix}-avatar {\n' + '                &:hover {\n' + '                    &::before {\n' + '                        background-color: fade(@theme-color, 90%);\n' + '                    }\n' + '                }\n' + '                &::before {\n' + '                    background-color: fade(@theme-color, 60%);\n' + '                }\n' + '            }\n' + '        }\n' + '    }\n' + '    @{prefix}-star-list.@{prefix}-root {\n' + '        .@{prefix}-content {\n' + '            .@{prefix}-bar {\n' + '                .@{prefix}-search {\n' + '                    background-color: desaturate(tint(@theme-color, 20%), 5%);\n' + '                }\n' + '            }\n' + '            .@{prefix}-list {\n' + '                .@{prefix}-item {\n' + '                    &:hover {\n' + '                        background-color: fade(@theme-color, 5%);\n' + '                    }\n' + '                }\n' + '            }\n' + '        }\n' + '    }\n' + '}\n';
/* harmony default export */ var renderColor = (function (color) {
  less_default.a.render(colorFunction.toString(), {
    modifyVars: {
      '@theme-color': color
    }
  }, function (event, output) {
    var body = document.body || document.getElementsByTagName('body')[0];
    body.classList.add('groups-custom-color');
    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {
      style.styleSheet.cssText = output.css;
    } else {
      style.appendChild(document.createTextNode(output.css));
    }

    head.appendChild(style);
  });
});
;
// CONCATENATED MODULE: ./lib/app.js
// Riot

 // NanoEvents

 // Tags





 // Style

 // Color

 // Overlay

 // Session

 // Authentication






 // Profile


 // Init

var app_init = function init(id) {
  var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  //Define parameters
  var parameters = ['id', 'host', 'theme', 'color', 'token']; // Get meta information & set meta object

  var meta = {};
  parameters.forEach(function (parameter) {
    var query = 'meta[name="groups-' + parameter + '"]';
    meta[parameter] = document.querySelector(query) ? document.querySelector(query).getAttribute('content') : undefined;
  }); // Inject ID to settings object

  settings.id = id; // Set global config object

  window.GroupsConfig = {};
  parameters.forEach(function (parameter) {
    window.GroupsConfig[parameter] = meta[parameter] || settings[parameter];
  }); // Handle theme and colors

  document.body.className = document.body.className.replace(/\bgroups-theme\S+/ig, '');
  document.body.classList.add('groups-theme-' + window.GroupsConfig.theme);
  window.GroupsConfig.color && renderColor(window.GroupsConfig.color);
  /* Check token & mount
  if(window.GroupsConfig.token) {
  	tokenLogin(window.GroupsConfig.token, () => {
  		console.log("logged in via token");
  		riot.mount('*');
  	});
  	return;
  }
  */

  riot_default.a.mount('*');
};

window.Groups = {
  init: app_init,
  //getActivityToken, // Activity
  getUser: getUser,
  login: login,
  logout: logout,
  register: register,
  reset: call_reset,
  verify: verify,
  // Authentication
  //editBlogPost, editBlogComment, getBlogPost, getBlogPosts, removeBlogPost, removeBlogComment, commentBlogPost, startBlogPost, // Blog
  //addComment, getComments, removeComment, //Comments
  //getThread, getThreads, removeReply, replyThread, startThread, // Forum
  //createGroup, getGroup, joinGroup, leaveGroup, listGroups, listMembers, setGroupCover, setGroupDescription, setGroupTitle, // Groups
  //follow, getMembers, getFollowers, getFollowing, unfollow, // Members
  //countUnreadMessages, getConversation, getConversations, getInbox, getMessage, getOutbox, sendAnonymousMessage, sendMessage, // Messages
  hideOverlay: hideOverlay,
  showOverlay: client_showOverlay,
  // Overlay
  getProfile: getProfile,

  /*listMemberships, setAvatar, setBio, setBirthday, setEmail,*/
  setPassword: setPassword,
  //setProfile, setUsername, // Profile
  //showAlert, showAuth, showLogin, showRegister, showReset, showBlog, showBlogComposer, showBlogList, showBlogPost, showComments, showForum, showForumComposer, showForumList, showForumThread, showGroup, showGroupCreator, showMessagesComposer, showMessages, showOverlay, showProfile, // Show
  //star, getStar, getStars, getUserStars, removeStar, // Star
  //getPrivateContent, addPrivateContent, removePrivateContent, editPrivateContent, // Private Content
  getPublicId: getPublicId,
  getSession: session_getSession // Session
  //checkSubscription, createSubscription // Stripe

}; // Events

window.Groups.events = new nanoevents_default.a();

window.Groups.on = function (hook, callback) {
  window.Groups.events.on(hook, callback);
};
/*

// Tags
import './tags/overlay.tag';
import './tags/alert.tag';

import './tags/star-button.tag';
import './tags/star-list.tag';
import './tags/blog.tag';
import './tags/blog-list.tag';
import './tags/blog-post.tag';
import './tags/blog-composer.tag';
import './tags/comments.tag';
import './tags/forum.tag';
import './tags/forum-list.tag';
import './tags/forum-thread.tag';
import './tags/forum-composer.tag';
import './tags/group.tag';
import './tags/group-card.tag';
import './tags/group-creator.tag';
import './tags/group-header.tag';
import './tags/group-activity.tag';
import './tags/group-members.tag';
import './tags/group-settings.tag';

import './tags/messages.tag';
import './tags/messages-composer.tag';
import './tags/profile.tag';
import './tags/profile-card.tag';
import './tags/profile-header.tag';
import './tags/profile-activity.tag';
import './tags/profile-followers.tag';
import './tags/profile-following.tag';
import './tags/profile-groups.tag';
import './tags/profile-settings.tag';

import './tags/feedback.tag';
// import './tags/list.tag';
import './tags/group-list.tag';
import './tags/profile-list.tag';
import './tags/private-content.tag';





// Activity
import getActivityToken from './scripts/getActivityToken.js';



// Blog
import commentBlogPost from './scripts/commentBlogPost.js';
import editBlogPost from './scripts/editBlogPost.js';
import editBlogComment from './scripts/editBlogComment.js';
import getBlogPost from './scripts/getBlogPost.js';
import getBlogPosts from './scripts/getBlogPosts.js';
import publishBlogPost from './scripts/publishBlogPost.js';
import removeBlogPost from './scripts/removeBlogPost.js';
import removeBlogComment from './scripts/removeBlogComment.js';
import startBlogPost from './scripts/startBlogPost.js';
import unpublishBlogPost from './scripts/unpublishBlogPost.js';

// Comments
import addComment from './scripts/addComment.js';
import getComments from './scripts/getComments.js';
import removeComment from './scripts/removeComment.js';

// Forum
import getThread from './scripts/getThread.js';
import getThreads from './scripts/getThreads.js';
import removeReply from './scripts/removeReply.js';
import replyThread from './scripts/replyThread.js';
import startThread from './scripts/startThread.js';

// Groups
import createGroup from './scripts/createGroup.js';
import getGroup from './scripts/getGroup.js';
import joinGroup from './scripts/joinGroup.js';
import leaveGroup from './scripts/leaveGroup.js';
import listGroups from './scripts/listGroups.js';
import listMembers from './scripts/listMembers.js';
import setGroupCover from './scripts/setGroupCover.js';
import setGroupDescription from './scripts/setGroupDescription.js';
import setGroupTitle from './scripts/setGroupTitle.js';

// Members
import follow from './scripts/follow.js';
import getFollowers from './scripts/getFollowers.js';
import getFollowing from './scripts/getFollowing.js';
import getMembers from './scripts/getMembers.js';
import unfollow from './scripts/unfollow.js';

// Messages
import countUnreadMessages from './scripts/countUnreadMessages.js';
import getConversation from './scripts/getConversation.js';
import getConversations from './scripts/getConversations.js';
import getInbox from './scripts/getInbox.js';
import getMessage from './scripts/getMessage.js';
import getOutbox from './scripts/getOutbox.js';
import sendAnonymousMessage from './scripts/sendAnonymousMessage.js';
import sendMessage from './scripts/sendMessage.js';

// Profile
import listMemberships from './scripts/listMemberships.js';
import setAvatar from './scripts/setAvatar.js';
import setBio from './scripts/setBio.js';
import setBirthday from './scripts/setBirthday.js';
import setEmail from './scripts/setEmail.js';
import setProfile from './scripts/setProfile.js';
import setUsername from './scripts/setUsername.js';

// Show
import showAlert from './scripts/showAlert.js';
import showAuth from './scripts/showAuth.js';
import showLogin from './scripts/showLogin.js';
import showRegister from './scripts/showRegister.js';
import showReset from './scripts/showReset.js';
import showBlog from './scripts/showBlog.js';
import showBlogComposer from './scripts/showBlogComposer.js';
import showBlogList from './scripts/showBlogList.js';
import showBlogPost from './scripts/showBlogPost.js';
import showComments from './scripts/showComments.js';
import showForum from './scripts/showForum.js';
import showForumComposer from './scripts/showForumComposer.js';
import showForumList from './scripts/showForumList.js';
import showForumThread from './scripts/showForumThread.js';
import showGroup from './scripts/showGroup.js';
import showGroupCreator from './scripts/showGroupCreator.js';
import showMessages from './scripts/showMessages.js';
import showMessagesComposer from './scripts/showMessagesComposer.js';
import showOverlay from './scripts/showOverlay.js';
import showProfile from './scripts/showProfile.js';

// Star
import star from './scripts/star.js';
import getStar from './scripts/getStar.js';
import getStars from './scripts/getStars.js';
import getUserStars from './scripts/getUserStars.js';
import removeStar from './scripts/removeStar.js';

import getPrivateContent from './scripts/getPrivateContent.js';
import removePrivateContent from './scripts/removePrivateContent.js';
import editPrivateContent from './scripts/editPrivateContent.js';
import addPrivateContent from './scripts/addPrivateContent.js';

// Stripe
import createSubscription from './scripts/createSubscription.js';
import checkSubscription from './scripts/checkSubscription.js';
import tokenLogin from './scripts/tokenLogin.js';

*/

/***/ })
/******/ ]);