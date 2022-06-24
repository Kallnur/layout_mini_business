/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./sass/main.sass":
/*!************************!*\
  !*** ./sass/main.sass ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./sass/main.sass?");

/***/ }),

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _module_toggleMobNavbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module/toggleMobNavbar.js */ \"./js/module/toggleMobNavbar.js\");\n/* harmony import */ var _sass_main_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/main.sass */ \"./sass/main.sass\");\n/* harmony import */ var _module_toggleHelpModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/toggleHelpModal.js */ \"./js/module/toggleHelpModal.js\");\n/* harmony import */ var _module_validate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./module/validate.js */ \"./js/module/validate.js\");\n\n\n\n\n\nconst btnHelpForm = document.querySelector('.modal-help__btn');\n\n(0,_module_toggleMobNavbar_js__WEBPACK_IMPORTED_MODULE_0__.toggleMobNavbar)();\n(0,_module_toggleHelpModal_js__WEBPACK_IMPORTED_MODULE_2__.toggleHelpModal)();\n\nbtnHelpForm?.addEventListener('click', _module_validate_js__WEBPACK_IMPORTED_MODULE_3__.validateForm);\n(0,_module_toggleMobNavbar_js__WEBPACK_IMPORTED_MODULE_0__.toggleMobNavbar)()\n\n\n//# sourceURL=webpack:///./js/index.js?");

/***/ }),

/***/ "./js/module/toggleHelpModal.js":
/*!**************************************!*\
  !*** ./js/module/toggleHelpModal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleHelpModal\": () => (/* binding */ toggleHelpModal)\n/* harmony export */ });\n/* harmony import */ var _utils_defFunc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/defFunc */ \"./js/utils/defFunc.js\");\n\n\nconst toggleHelpModal = () => {\n    const openModalBtn  = document.querySelector('.home-about__btn');\n    const closeModalBtn = document.querySelector('.modal-help__close-btn');\n    const modalHelp     = document.querySelector('.modal-help');\n\n    const activeClass = 'modal-help--active';\n\n    (0,_utils_defFunc__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(openModalBtn, closeModalBtn, modalHelp, activeClass);\n}\n\n//# sourceURL=webpack:///./js/module/toggleHelpModal.js?");

/***/ }),

/***/ "./js/module/toggleMobNavbar.js":
/*!**************************************!*\
  !*** ./js/module/toggleMobNavbar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toggleMobNavbar\": () => (/* binding */ toggleMobNavbar)\n/* harmony export */ });\n/* harmony import */ var _utils_defFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/defFunc.js */ \"./js/utils/defFunc.js\");\n\n\nconst toggleMobNavbar = () => {\n    const btnOpenNav  = document.querySelector('.hamburger');\n    const btnCloseNav = document.querySelector('.mob-nav__close-btn');\n    const mobNavbar = document.querySelector('.header__mob-nav');\n\n    const activeClass = 'header__mob-nav--active';\n\n    (0,_utils_defFunc_js__WEBPACK_IMPORTED_MODULE_0__.toggleClass)(btnOpenNav, btnCloseNav, mobNavbar, activeClass);\n}\n\n//# sourceURL=webpack:///./js/module/toggleMobNavbar.js?");

/***/ }),

/***/ "./js/module/validate.js":
/*!*******************************!*\
  !*** ./js/module/validate.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validateForm\": () => (/* binding */ validateForm)\n/* harmony export */ });\n/* harmony import */ var _utils_defFunc_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/defFunc.js */ \"./js/utils/defFunc.js\");\n\n\nconst validateForm = (e) => {\n    e.preventDefault();\n\n    // Накидано за последние 10мин + стили...... ведутся работы\n\n    const blockInputs = document.querySelectorAll('.modal-help__inp-block');\n    const userName = document.querySelector('#helpModalName');\n    const userEmail = document.querySelector('#helpModalEmail');\n    const userMess = document.querySelector('#helpModalMess');\n    const disBtn = document.querySelector('.modal-help__btn--load');\n    const txtFoemDone = document.querySelector('.form-done');\n    const modalHelp     = document.querySelector('.modal-help');\n\n    if(userName.value.length >= 2 && userMess.value.length >= 5 && userEmail.value.length >= 5) {\n        (0,_utils_defFunc_js__WEBPACK_IMPORTED_MODULE_0__.clearClass)(blockInputs, 'modal-help__inp-block--warn');\n        e.target.style.display = 'none';\n        disBtn.style.display = 'block';\n\n        setTimeout(() => {\n            txtFoemDone.style.display = 'block';\n        }, 2000)\n        setTimeout(() => {\n            txtFoemDone.style.display = 'none';\n            e.target.style.display = 'block';\n            disBtn.style.display = 'none';\n            userName.value = '';\n            userMess.value = '';\n            userEmail.value = '';\n            modalHelp.classList.remove('modal-help--active');\n            (0,_utils_defFunc_js__WEBPACK_IMPORTED_MODULE_0__.stopScroll)()\n        }, 2500)\n    }\n    if(userName.value <= 0) {\n        userName.parentNode.classList.add('modal-help__inp-block--warn')\n    }\n    if(userEmail.value <= 0) {\n        userEmail.parentNode.classList.add('modal-help__inp-block--warn')\n    }\n    if(userMess.value <= 0) {\n        userMess.parentNode.classList.add('modal-help__inp-block--warn')\n    }\n}\n\n//# sourceURL=webpack:///./js/module/validate.js?");

/***/ }),

/***/ "./js/utils/defFunc.js":
/*!*****************************!*\
  !*** ./js/utils/defFunc.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearClass\": () => (/* binding */ clearClass),\n/* harmony export */   \"stopScroll\": () => (/* binding */ stopScroll),\n/* harmony export */   \"toggleClass\": () => (/* binding */ toggleClass)\n/* harmony export */ });\nconst stopScroll = () => {\n    if(document.body.style.overflow === 'hidden') document.body.style.overflow = ''\n    else document.body.style.overflow = 'hidden';\n    console.log('asdasd');\n}\n\nconst toggleClass = (openBtn, closeBtn, toggleElement, activeClass) => {\n\n    const toggleClassActive = () => {\n        toggleElement.classList.toggle(activeClass);\n        stopScroll();\n    };\n\n    openBtn?.addEventListener('click', toggleClassActive);\n    closeBtn?.addEventListener('click', toggleClassActive);\n}\n\nconst clearClass = (arr, className) => {\n    Array.from(arr).forEach(item => {\n        item.classList.remove(className)\n    })\n}\n\n//# sourceURL=webpack:///./js/utils/defFunc.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;