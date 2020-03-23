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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.ts":
/*!****************!*\
  !*** ./app.ts ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\n/* variable that contains my name */\nvar myName = 'Hallie';\n// console.log(myName);\n// constant that contains the number of states in the U.S\nvar states = 50;\n// console.log(states);\n// result of adding 5 and 4 \nvar number = 5 + 4;\n// console.log(number);\n// write a function called sayHello the displays an alert that says Hello World!\nfunction sayHello(num1, num2) {\n    console.log('Hello World!');\n    return num1 + num2;\n}\nsayHello(6, 8);\n// fire checkAge function that checks for name and age\nfunction firstCheckAge(name, age) {\n    if (age <= 20) {\n        alert(\"Sorry, \" + name + \", you aren't old enough to view this page!\");\n    }\n    else {\n        alert(\"You may enter, \" + name);\n    }\n}\nfirstCheckAge(\"Charles\", 21);\nfirstCheckAge(\"Abby\", 27);\nfirstCheckAge(\"James\", 18);\nfirstCheckAge(\"John\", 17);\n// array of my favorite vegetables \nvar vegetables = [\"potato\", \"broccoli\", \"edamame\", \"lettuce\"];\nfor (var _i = 0, vegetables_1 = vegetables; _i < vegetables_1.length; _i++) {\n    var veggies = vegetables_1[_i];\n    console.log(veggies);\n}\n// create a checkage but with a loop\nvar array = [\n    { name: \"Hallie\", age: 25 },\n    { name: \"TJ\", age: 26 },\n    { name: \"Wendy\", age: 9 },\n    { name: \"Jack\", age: 14 },\n    { name: \"Mercedes\", age: 21 },\n];\n// function checkAge(name: string, age: number) {\n//     for (let i = 0; i < array.length; i++) {\n//         if (array[i].age < 21) {\n//             console.log(\"Sorry, \" + array[i].name + \", you aren't old enough to view this page!\")\n//         } else {\n//             console.log(\"You may enter, \" + array[i].name + \".\")\n//         }\n//     }\n// }\n// checkAge(array)\n// create getLength function\nfunction getLength(str) {\n    if (str.length % 2 == 0) {\n        return ('The world is nice and even!');\n    }\n    else if (str.length % 2 != 0) {\n        return ('The World is an odd place!');\n    }\n}\nconsole.log(getLength('hello world!'));\nconsole.log(getLength(\"Goodbye World!\"));\n\n\n//# sourceURL=webpack:///./app.ts?");

/***/ })

/******/ });