/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./a.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./a.js":
/*!**************!*\
  !*** ./a.js ***!
  \**************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// require('./body.css');\r\nlet o = __webpack_require__(/*! ./b.js */ \"./b.js\");\r\n// console.log(o.a)\r\n// o.fn()\r\n\r\no.f()\r\n\n\n//# sourceURL=webpack:///./a.js?");

/***/ }),

/***/ "./b.js":
/*!**************!*\
  !*** ./b.js ***!
  \**************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.a = 123\r\n\r\nexports.fn = function(){\r\n  console.lo(\"ads\")\r\n}\r\n\r\n\r\nexports.f = function(){\r\n  const data = \"\";\r\n  const url = \"package.json\";\r\n  const opts = {\r\n    method:'GET',\r\n    //fetch中get和head方法不能设置请求body选项,否则报错\r\n    // body:'',\r\n\r\n    //设置请求头\r\n    headers:{\r\n      \"content-type\":\"x-www-form-urlencoded\",\r\n    },\r\n    //不管是同源还是跨域请求都带上cookie信息\r\n    credentials:'include'\r\n  };\r\n\r\n  //注意：fetch中默认的请求方式是get\r\n  //不管服务器返回的状态是多少，fecth都不认为是失败，都执行的是then方法，不会执行catch\r\n  //方法，需要自己进行异常抛出\r\n\r\n\r\n  fetch(url,opts).then(res=>{\r\n    /*\r\n      res包含如下信息：\r\n        headers:{}   响应头信息\r\n        redirected:false  是否重定向\r\n        status: 状态码\r\n        statusText：状态描述\r\n        type:'basic'或者'cors'     basic表示同源，cors表示是跨域\r\n        url:表示请求的地址\r\n        credentials:'include'   不管是同源还是跨域请求都带上cookie信息\r\n\r\n\r\n      注意：res是一个Response对象，它的原型上__proto__有许多方法\r\n        arrayBuffer:\r\n        blob:\r\n        clone:\r\n        json:\r\n        text:\r\n        。。。。。\r\n        基于这些方法可以快速的将从服务器返回的数据解析出来\r\n\r\n    */\r\n    console.log(res)\r\n\r\n  }).catch(msg=>{\r\n    console.log(msg)\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack:///./b.js?");

/***/ })

/******/ });