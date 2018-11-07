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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/javascripts/all.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/javascripts/all.js":
/*!***********************************!*\
  !*** ./source/javascripts/all.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var js = js || {},\n  body = document.getElementsByTagName('body')[0];\n\n// Scripts\njs.main = {\n  init: function () {\n    this.modal();\n  },\n  modal: function (e) {\n    var bd = body;\n    var modal_link = document.querySelectorAll('.modal-link');\n    var modal_close = document.querySelectorAll('.modal-close');\n    var modal_page = document.querySelectorAll('.modal-page');\n\n\n    function modal_init(e) {\n      e.preventDefault();\n\n      for(var i = 0, l=document.links.length; i<l; i++) {\n        var $href = this.modal_link.getAttribute('href');\n      }\n\n      document.body.classList.add(\"modal-open\");\n      document.getElementByID($href).classList.add(\"active\");\n    };\n    function modal_remove() {\n      document.body.classList.remove(\"modal-open\");\n      document.modal_page.classList.remove(\"active\");\n    };\n\n    modal_link[0].addEventListener(\"click\", modal_init, false);\n    modal_close[0].addEventListener(\"click\", modal_remove, false);\n  }\n};\n\ndocument.addEventListener('DOMContentLoaded', function(){\n  js.main.init();\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvamF2YXNjcmlwdHMvYWxsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc291cmNlL2phdmFzY3JpcHRzL2FsbC5qcz9jYzRiIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBqcyA9IGpzIHx8IHt9LFxuICBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXTtcblxuLy8gU2NyaXB0c1xuanMubWFpbiA9IHtcbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHRoaXMubW9kYWwoKTtcbiAgfSxcbiAgbW9kYWw6IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIGJkID0gYm9keTtcbiAgICB2YXIgbW9kYWxfbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tb2RhbC1saW5rJyk7XG4gICAgdmFyIG1vZGFsX2Nsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWNsb3NlJyk7XG4gICAgdmFyIG1vZGFsX3BhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtcGFnZScpO1xuXG5cbiAgICBmdW5jdGlvbiBtb2RhbF9pbml0KGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgZm9yKHZhciBpID0gMCwgbD1kb2N1bWVudC5saW5rcy5sZW5ndGg7IGk8bDsgaSsrKSB7XG4gICAgICAgIHZhciAkaHJlZiA9IHRoaXMubW9kYWxfbGluay5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwibW9kYWwtb3BlblwiKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlEKCRocmVmKS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH07XG4gICAgZnVuY3Rpb24gbW9kYWxfcmVtb3ZlKCkge1xuICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibW9kYWwtb3BlblwiKTtcbiAgICAgIGRvY3VtZW50Lm1vZGFsX3BhZ2UuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9O1xuXG4gICAgbW9kYWxfbGlua1swXS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbW9kYWxfaW5pdCwgZmFsc2UpO1xuICAgIG1vZGFsX2Nsb3NlWzBdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtb2RhbF9yZW1vdmUsIGZhbHNlKTtcbiAgfVxufTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XG4gIGpzLm1haW4uaW5pdCgpO1xufSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/javascripts/all.js\n");

/***/ })

/******/ });