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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_dosis400_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/dosis400.ttf */ \"./src/fonts/dosis400.ttf\");\n/* harmony import */ var _fonts_opensans600_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fonts/opensans600.ttf */ \"./src/fonts/opensans600.ttf\");\n/* harmony import */ var _fonts_opensans400_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../fonts/opensans400.ttf */ \"./src/fonts/opensans400.ttf\");\n/* harmony import */ var _fonts_opensans300_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../fonts/opensans300.ttf */ \"./src/fonts/opensans300.ttf\");\n/* harmony import */ var _images_avatar_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/avatar.jpg */ \"./src/images/avatar.jpg\");\n// Imports\n\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_dosis400_ttf__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_opensans600_ttf__WEBPACK_IMPORTED_MODULE_3__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_opensans400_ttf__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_opensans300_ttf__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@font-face {\\n  font-family: \\\"Dosis\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  font-weight: 600;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  font-weight: 300;\\n  font-style: normal;\\n  font-display: swap;\\n}\\nhtml,\\nbody {\\n  margin: 0;\\n  padding: 0;\\n  width: 100vw;\\n  height: 100vh;\\n  max-width: 1920px;\\n  min-width: 360px;\\n}\\n\\nbody {\\n  display: grid;\\n  grid-template-rows: 150px auto auto;\\n}\\n@media (max-width: 850px) {\\n  body {\\n    grid-template-rows: auto auto auto;\\n  }\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\n.header {\\n  display: flex;\\n  align-items: center;\\n  padding: 0px 10vw;\\n  border-bottom: 1px #EFEFEF solid;\\n}\\n\\n.main {\\n  padding: 0 10vw;\\n  display: grid;\\n  justify-items: center;\\n}\\n\\n.footer {\\n  border-bottom: 20px #42B883 solid;\\n  align-content: flex-end;\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.bar {\\n  display: none;\\n}\\n\\n@media (max-width: 850px) {\\n  .header {\\n    display: grid;\\n    grid-template-columns: auto 1fr;\\n    height: 54px;\\n    overflow-y: hidden;\\n    transition: height 1s;\\n  }\\n\\n  .header-expand {\\n    height: 220px;\\n  }\\n}\\n@font-face {\\n  font-family: \\\"Dosis\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  font-weight: 600;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  font-weight: 300;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n.icon {\\n  align-self: start;\\n  margin: 12px 0px;\\n  width: 30px;\\n  display: none;\\n}\\n@media (max-width: 850px) {\\n  .icon.icon-show {\\n    display: block;\\n  }\\n}\\n\\n.menu {\\n  list-style: none;\\n  margin: 0;\\n  padding: 0;\\n  display: flex;\\n  font: normal 300 34px OpenSans;\\n  letter-spacing: 0.25px;\\n  color: #35495E;\\n}\\n.menu__item {\\n  margin-right: 37px;\\n  text-align: center;\\n}\\n.menu__item a {\\n  color: #35495E;\\n}\\n.menu__item a:hover {\\n  cursor: pointer;\\n}\\n.menu__item--selected a {\\n  margin-right: 37px;\\n  color: #42B883;\\n}\\n.menu__item--selected a:hover {\\n  cursor: pointer;\\n}\\n\\n@media (max-width: 850px) {\\n  .icon-show {\\n    display: block;\\n    align-self: start;\\n    margin: 12px 0px;\\n    width: 30px;\\n  }\\n\\n  .menu {\\n    list-style: none;\\n    margin-left: -30px;\\n    padding: 0;\\n    display: flex;\\n    flex-direction: column;\\n    align-self: flex-start;\\n    font: normal 600 20px OpenSans;\\n    letter-spacing: 0.15px;\\n    color: #35495E;\\n  }\\n  .menu__item {\\n    margin: 12px 84px;\\n    text-align: center;\\n  }\\n  .menu__item--selected {\\n    margin: 12px 84px;\\n    text-align: center;\\n  }\\n  .menu__item a {\\n    color: #35495E;\\n  }\\n  .menu__item a:hover {\\n    cursor: pointer;\\n  }\\n  .menu__item--selected a {\\n    margin: 0px;\\n    color: #42B883;\\n  }\\n  .menu__item--selected a:hover {\\n    cursor: pointer;\\n  }\\n}\\n@font-face {\\n  font-family: \\\"Dosis\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  font-weight: 600;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  font-weight: 300;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n.avatar-border {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  border-radius: 100%;\\n  width: 210px;\\n  height: 216px;\\n  border: 1px solid #42B883;\\n  margin: 24px 0px 24px;\\n}\\n\\n.avatar-image {\\n  width: 200px;\\n  height: 206px;\\n  border-radius: 100%;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-size: 200px 260px;\\n  background-position: center;\\n}\\n\\n@media (max-width: 850px) {\\n  .avatar-border {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    border-radius: 100%;\\n    width: 140px;\\n    height: 146px;\\n    border: 1px solid #42B883;\\n    margin: 12px 0px 12px;\\n  }\\n\\n  .avatar-image {\\n    width: 130px;\\n    height: 136px;\\n    border-radius: 100%;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n    background-size: 130px 160px;\\n    background-position: center;\\n    transition: filter 1s;\\n  }\\n\\n  .filter {\\n    filter: grayscale(0.3) contrast(0.8) brightness(0.75);\\n  }\\n}\\n@font-face {\\n  font-family: \\\"Dosis\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  font-weight: 600;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  font-weight: 300;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n.text {\\n  width: 60vw;\\n}\\n.text-center {\\n  text-align: center;\\n}\\n\\n.title {\\n  font: normal 300 59px OpenSans;\\n  letter-spacing: -0.5px;\\n  color: #35495E;\\n  margin: 24px 0px 24px;\\n}\\n@media (max-width: 850px) {\\n  .title {\\n    font: normal 300 24px OpenSans;\\n    letter-spacing: 0px;\\n    color: #35495E;\\n    margin: 24px 0px 24px;\\n  }\\n}\\n\\n.subtitle {\\n  font: normal 300 34px OpenSans;\\n  letter-spacing: 0.25px;\\n  color: #35495E;\\n  margin: 24px 0px 24px;\\n}\\n@media (max-width: 850px) {\\n  .subtitle {\\n    font: normal 400 15px Dosis;\\n    letter-spacing: 0.25px;\\n    color: #35495E;\\n    margin: 24px 0px 24px;\\n  }\\n}\\n\\n.content {\\n  font: normal 300 24px OpenSans;\\n  letter-spacing: 0px;\\n  color: #35495E;\\n  margin: 24px 0px 24px;\\n}\\n@media (max-width: 850px) {\\n  .content {\\n    font: normal 400 15px Dosis;\\n    letter-spacing: 0.25px;\\n    color: #35495E;\\n    margin: 24px 0px 24px;\\n  }\\n}\\n\\n@font-face {\\n  font-family: \\\"Dosis\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  font-weight: 600;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  font-weight: 300;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n.card, .card-list {\\n  display: grid;\\n  grid-template-columns: 1fr 1fr;\\n  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);\\n  border-radius: 5px;\\n  border-bottom: 5px #35495E solid;\\n  height: 250px;\\n  width: 100%;\\n  margin: 24px 0;\\n}\\n@media (max-width: 850px) {\\n  .card, .card-list {\\n    grid-template-columns: none;\\n    height: auto;\\n  }\\n}\\n.card-image {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background-color: #EFEFEF;\\n}\\n.card-text {\\n  display: grid;\\n  padding: 17px 30px 0 70px;\\n  grid-template-rows: auto auto auto;\\n}\\n@media (max-width: 850px) {\\n  .card-text {\\n    padding: 17px 24px;\\n  }\\n}\\n.card-text-title {\\n  font: normal 400 24px OpenSans;\\n  letter-spacing: 0px;\\n  color: #35495E;\\n}\\n@media (max-width: 850px) {\\n  .card-text-title {\\n    font: normal 400 18px Dosis;\\n    letter-spacing: 0.5px;\\n    color: #35495E;\\n  }\\n}\\n.card-text-description {\\n  height: 100px;\\n  font: normal 600 20px OpenSans;\\n  letter-spacing: 0.15px;\\n  color: #35495E;\\n}\\n@media (max-width: 850px) {\\n  .card-text-description {\\n    font: normal 400 13px Dosis;\\n    letter-spacing: 0.4px;\\n    color: #35495E;\\n  }\\n}\\n.card-text-footer {\\n  display: grid;\\n  grid-template-columns: auto auto;\\n}\\n.card-text-footer section {\\n  display: flex;\\n  align-items: center;\\n}\\n.card-text-footer section p {\\n  font: normal 400 20px Dosis;\\n  letter-spacing: 0.15px;\\n  color: #35495E;\\n}\\n@media (max-width: 850px) {\\n  .card-text-footer section p {\\n    font: normal 400 11px Dosis;\\n    letter-spacing: 0.5px;\\n    color: #35495E;\\n  }\\n}\\n.card-text-footer section img {\\n  margin-left: 1vw;\\n}\\n.card-text-footer section.right {\\n  justify-content: flex-end;\\n}\\n.card-list {\\n  grid-template-columns: 1fr;\\n}\\n\\n@font-face {\\n  font-family: \\\"Dosis\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  font-weight: 600;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  font-weight: 400;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n@font-face {\\n  font-family: \\\"OpenSans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  font-weight: 300;\\n  font-style: normal;\\n  font-display: swap;\\n}\\n.button {\\n  background-color: #35495E;\\n  width: 370px;\\n  height: 80px;\\n  border-radius: 5px;\\n  margin: 24px 0px 24px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  cursor: pointer;\\n}\\n.button a {\\n  font: normal 400 34px Dosis;\\n  letter-spacing: 0.25px;\\n  color: #FFFFFF;\\n}\\n\\n@media (max-width: 850px) {\\n  .button {\\n    background-color: #35495E;\\n    width: 230px;\\n    height: 48px;\\n    border-radius: 5px;\\n    margin: 24px 0px 24px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    cursor: pointer;\\n  }\\n  .button a {\\n    font: normal 400 15px Dosis;\\n    letter-spacing: 1.25px;\\n    color: #FFFFFF;\\n  }\\n}\\n.social {\\n  display: flex;\\n  align-items: flex-end;\\n  margin-bottom: 48px;\\n}\\n.social img {\\n  width: 50px;\\n  margin: 0px 35px;\\n}\\n\\n@media (max-width: 850px) {\\n  .social {\\n    display: flex;\\n    align-items: flex-end;\\n    margin-bottom: 24px;\\n  }\\n  .social img {\\n    width: 40px;\\n    margin: 0px 12px;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/scss/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/fonts/dosis400.ttf":
/*!********************************!*\
  !*** ./src/fonts/dosis400.ttf ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/dosis400.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/dosis400.ttf?");

/***/ }),

/***/ "./src/fonts/opensans300.ttf":
/*!***********************************!*\
  !*** ./src/fonts/opensans300.ttf ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/opensans300.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/opensans300.ttf?");

/***/ }),

/***/ "./src/fonts/opensans400.ttf":
/*!***********************************!*\
  !*** ./src/fonts/opensans400.ttf ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/opensans400.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/opensans400.ttf?");

/***/ }),

/***/ "./src/fonts/opensans600.ttf":
/*!***********************************!*\
  !*** ./src/fonts/opensans600.ttf ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fonts/opensans600.ttf\");\n\n//# sourceURL=webpack:///./src/fonts/opensans600.ttf?");

/***/ }),

/***/ "./src/images/avatar.jpg":
/*!*******************************!*\
  !*** ./src/images/avatar.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"images/avatar.jpg\");\n\n//# sourceURL=webpack:///./src/images/avatar.jpg?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });