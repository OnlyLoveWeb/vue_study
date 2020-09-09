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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return name; });
/* unused harmony export height */
/* harmony export (immutable) */ __webpack_exports__["d"] = mul;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return one; });
/* unused harmony export two */
/* unused harmony export three */
function add(num1, num2) {
	return num1 + num2;
}
// 导出方式一

// 导出方式二
var name = 'shen';
var height = 1.88;

// 导出函数和类
function mul(num1, num2){
	return num1 * num2;
}

class Person {
	run() {
		console.log('在奔跑');
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Person;

// 默认导出
var address = 'luoyang';
// export default address;
/* harmony default export */ __webpack_exports__["c"] = (function() {
	console.log('talking');
});
var one = '1';
var two = '2';
var three = '3';



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(0);

console.log(Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* add */])(20, 30));
// console.log(mul(20, 30));
console.log(__WEBPACK_IMPORTED_MODULE_0__math_js__["e" /* name */]);
console.log(Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["d" /* mul */])(1, 10));
const person = new __WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* Person */]();
person.run();

console.log(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* default */]);

Object(__WEBPACK_IMPORTED_MODULE_0__math_js__["c" /* default */])();

console.log(__WEBPACK_IMPORTED_MODULE_0__math_js__["f" /* one */]);

/***/ })
/******/ ]);