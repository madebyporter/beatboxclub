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

eval("// import uuid from 'uuid/v4';\n//\n// const $button = document.querySelector('button');\n//\n// const handler = StripeCheckout.configure({\n//   key: STRIPE_PUBLISHABLE_KEY,\n//   image: 'https://stripe.com/img/documentation/checkout/marketplace.png',\n//   locale: 'auto',\n//   closed: function () {\n//\n//   },\n//   token: function(token) {\n//\n//     fetch(`${LAMBDA_ENDPOINT}purchase`, {\n//       method: 'POST',\n//       body: JSON.stringify({\n//         token,\n//         amount,\n//         idempotency_key: uuid()\n//       }),\n//       headers: new Headers({\n//         'Content-Type': 'application/json'\n//       })\n//     })\n//     .then(res => res.json())\n//     .catch(error => console.error(error))\n//     .then(response => {\n//\n//\n//     });\n//   }\n// });\n//\n// $button.addEventListener('click', () => {\n//   // setTimeout(() => {\n//   //   $button.innerHTML = 'Waiting for response...';\n//   // }, 500);\n//\n//   if ($button.id = \"loops\"){\n//     handler.open({\n//       amount: 500,\n//       name: 'Loops',\n//       description: 'Buy Loops'\n//     });\n//   } else if ($button.id = \"tracks\"){\n//     handler.open({\n//       amount: 2000,\n//       name: 'Tracks',\n//       description: 'Tracks'\n//     });\n//   } else if ($button.id = \"stems\"){\n//     handler.open({\n//       amount: 5000,\n//       name: 'Stems',\n//       description: 'Stems'\n//     });\n//   }\n//\n// });\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zb3VyY2UvamF2YXNjcmlwdHMvYWxsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc291cmNlL2phdmFzY3JpcHRzL2FsbC5qcz9jYzRiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB1dWlkIGZyb20gJ3V1aWQvdjQnO1xuLy9cbi8vIGNvbnN0ICRidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbi8vXG4vLyBjb25zdCBoYW5kbGVyID0gU3RyaXBlQ2hlY2tvdXQuY29uZmlndXJlKHtcbi8vICAga2V5OiBTVFJJUEVfUFVCTElTSEFCTEVfS0VZLFxuLy8gICBpbWFnZTogJ2h0dHBzOi8vc3RyaXBlLmNvbS9pbWcvZG9jdW1lbnRhdGlvbi9jaGVja291dC9tYXJrZXRwbGFjZS5wbmcnLFxuLy8gICBsb2NhbGU6ICdhdXRvJyxcbi8vICAgY2xvc2VkOiBmdW5jdGlvbiAoKSB7XG4vL1xuLy8gICB9LFxuLy8gICB0b2tlbjogZnVuY3Rpb24odG9rZW4pIHtcbi8vXG4vLyAgICAgZmV0Y2goYCR7TEFNQkRBX0VORFBPSU5UfXB1cmNoYXNlYCwge1xuLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgIHRva2VuLFxuLy8gICAgICAgICBhbW91bnQsXG4vLyAgICAgICAgIGlkZW1wb3RlbmN5X2tleTogdXVpZCgpXG4vLyAgICAgICB9KSxcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuLy8gICAgICAgfSlcbi8vICAgICB9KVxuLy8gICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuLy8gICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSlcbi8vICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4vL1xuLy9cbi8vICAgICB9KTtcbi8vICAgfVxuLy8gfSk7XG4vL1xuLy8gJGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbi8vICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgIC8vICAgJGJ1dHRvbi5pbm5lckhUTUwgPSAnV2FpdGluZyBmb3IgcmVzcG9uc2UuLi4nO1xuLy8gICAvLyB9LCA1MDApO1xuLy9cbi8vICAgaWYgKCRidXR0b24uaWQgPSBcImxvb3BzXCIpe1xuLy8gICAgIGhhbmRsZXIub3Blbih7XG4vLyAgICAgICBhbW91bnQ6IDUwMCxcbi8vICAgICAgIG5hbWU6ICdMb29wcycsXG4vLyAgICAgICBkZXNjcmlwdGlvbjogJ0J1eSBMb29wcydcbi8vICAgICB9KTtcbi8vICAgfSBlbHNlIGlmICgkYnV0dG9uLmlkID0gXCJ0cmFja3NcIil7XG4vLyAgICAgaGFuZGxlci5vcGVuKHtcbi8vICAgICAgIGFtb3VudDogMjAwMCxcbi8vICAgICAgIG5hbWU6ICdUcmFja3MnLFxuLy8gICAgICAgZGVzY3JpcHRpb246ICdUcmFja3MnXG4vLyAgICAgfSk7XG4vLyAgIH0gZWxzZSBpZiAoJGJ1dHRvbi5pZCA9IFwic3RlbXNcIil7XG4vLyAgICAgaGFuZGxlci5vcGVuKHtcbi8vICAgICAgIGFtb3VudDogNTAwMCxcbi8vICAgICAgIG5hbWU6ICdTdGVtcycsXG4vLyAgICAgICBkZXNjcmlwdGlvbjogJ1N0ZW1zJ1xuLy8gICAgIH0pO1xuLy8gICB9XG4vL1xuLy8gfSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./source/javascripts/all.js\n");

/***/ })

/******/ });