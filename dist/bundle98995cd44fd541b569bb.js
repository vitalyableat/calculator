/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/*\\r\\n    orange - ff9f0b\\r\\n    dark grey - 48494a\\r\\n    mid grey - 5a5b5c\\r\\n    light grey - 757677\\r\\n\\r\\n    font color - e6e6e6\\r\\n*/\\r\\n\\r\\n* {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: Poppins;\\r\\n    font-size: 30px;\\r\\n    color: #e6e6e6;\\r\\n    border-radius: 0;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background-color: #48494a;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    height: 100vh;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\ndiv.wrap {\\r\\n    width: 600px;\\r\\n    height: 400px;\\r\\n    border-radius: 15px;\\r\\n    outline: 4px solid black;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\ninput.scoreboard {\\r\\n    height: 70px;\\r\\n    width: 570px;\\r\\n    background-color: #333;\\r\\n    font-size: 50px;\\r\\n    padding: 15px;\\r\\n    text-align: right;\\r\\n}\\r\\n\\r\\ndiv.tableWrap {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\ndiv.line {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\nbutton.cell {\\r\\n    width: 75px;\\r\\n    height: 75px;\\r\\n    outline: 2px solid black;\\r\\n    text-align: center;\\r\\n    line-height: 75px;\\r\\n    background-color: #5a5b5c;\\r\\n}\\r\\n\\r\\nbutton.cell:hover {\\r\\n    cursor: pointer;\\r\\n    background-color: #222;\\r\\n}\\r\\n\\r\\nbutton.sign {\\r\\n    background-color: #ff8000;\\r\\n    font-size: 40px;\\r\\n}\\r\\n\\r\\nbutton.number {\\r\\n    font-size: 40px;\\r\\n    background-color: #757677;\\r\\n}\\r\\n\\r\\nbutton.pow {\\r\\n    line-height: 65px;\\r\\n}\\r\\n\\r\\nsup {\\r\\n    font-size: 20px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calculator/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calculator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calculator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calculator/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BACKSPACE\": () => (/* binding */ BACKSPACE),\n/* harmony export */   \"CURRENT_STATE\": () => (/* binding */ CURRENT_STATE),\n/* harmony export */   \"DEFAULT_STATE\": () => (/* binding */ DEFAULT_STATE),\n/* harmony export */   \"MEMORIES\": () => (/* binding */ MEMORIES),\n/* harmony export */   \"MOD\": () => (/* binding */ MOD),\n/* harmony export */   \"NUMBERS\": () => (/* binding */ NUMBERS),\n/* harmony export */   \"ONE_VALUE_OPERATIONS\": () => (/* binding */ ONE_VALUE_OPERATIONS),\n/* harmony export */   \"POWERS\": () => (/* binding */ POWERS),\n/* harmony export */   \"ROOTS\": () => (/* binding */ ROOTS),\n/* harmony export */   \"SCOREBOARD\": () => (/* binding */ SCOREBOARD),\n/* harmony export */   \"SIGNS\": () => (/* binding */ SIGNS),\n/* harmony export */   \"SIGN_TYPES\": () => (/* binding */ SIGN_TYPES)\n/* harmony export */ });\nconst SCOREBOARD = document.getElementById(\"scoreboard\")\r\nconst NUMBERS = document.querySelectorAll(\"button.number\")\r\nconst SIGNS = document.getElementsByName(\"sign\")\r\nconst MEMORIES = document.getElementsByName(\"memory\")\r\nconst POWERS = document.getElementsByName(\"pow\")\r\nconst ROOTS = document.getElementsByName(\"root\")\r\nconst ONE_VALUE_OPERATIONS = document.getElementsByName(\"oneValueOperations\")\r\nconst MOD = document.getElementById(\"mod\")\r\nconst BACKSPACE = document.getElementById(\"backspace\")\r\n\r\n\r\nconst SIGN_TYPES = [\"+\", \"-\", \"÷\", \"×\"]\r\n\r\nconst DEFAULT_STATE = {\r\n  x: 0,\r\n  y: 0,\r\n  firstSign: \"\",\r\n  secondSign: \"\",\r\n  signAmount: 0\r\n}\r\n\r\nconst CURRENT_STATE = DEFAULT_STATE\n\n//# sourceURL=webpack://calculator/./src/consts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ \"./src/consts.js\");\n/* harmony import */ var _utils_validations_pointValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/validations/pointValidation */ \"./src/utils/validations/pointValidation.js\");\n/* harmony import */ var _utils_operations_arithmeticOperations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/operations/arithmeticOperations */ \"./src/utils/operations/arithmeticOperations.js\");\n/* harmony import */ var _utils_operations_powerOperations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/operations/powerOperations */ \"./src/utils/operations/powerOperations.js\");\n/* harmony import */ var _utils_operations_powerOperations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_utils_operations_powerOperations__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _utils_operations_factorial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/operations/factorial */ \"./src/utils/operations/factorial.js\");\n/* harmony import */ var _utils_operations_changeOrientation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/operations/changeOrientation */ \"./src/utils/operations/changeOrientation.js\");\n/* harmony import */ var _utils_operations_root__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/operations/root */ \"./src/utils/operations/root.js\");\n/* harmony import */ var _utils_operations_mod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/operations/mod */ \"./src/utils/operations/mod.js\");\n/* harmony import */ var _utils_operations_memoryOperations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/operations/memoryOperations */ \"./src/utils/operations/memoryOperations.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet memory = 0\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.SCOREBOARD.addEventListener('input', () => {\r\n\r\n})\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.BACKSPACE.addEventListener('click', () => _consts__WEBPACK_IMPORTED_MODULE_1__.SCOREBOARD.value = _consts__WEBPACK_IMPORTED_MODULE_1__.SCOREBOARD.value.substring(0, _consts__WEBPACK_IMPORTED_MODULE_1__.SCOREBOARD.value.length - 1))\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.NUMBERS.forEach(num => num.addEventListener('click', () => {\r\n  if (num.value ===\".\") {\r\n    (0,_utils_validations_pointValidation__WEBPACK_IMPORTED_MODULE_2__.pointValidation)()\r\n  } else {\r\n    _consts__WEBPACK_IMPORTED_MODULE_1__.SCOREBOARD.value += num.value\r\n  }\r\n}))\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.SIGNS.forEach(sign => sign.addEventListener('click', () => {\r\n  _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.signAmount++\r\n\r\n  if (_consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.signAmount === 1) {\r\n    _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.x = Number(_consts__WEBPACK_IMPORTED_MODULE_1__.SCOREBOARD.value)\r\n    _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.firstSign = sign.value\r\n    _consts__WEBPACK_IMPORTED_MODULE_1__.SCOREBOARD.value += sign.value\r\n  } else {\r\n    _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.secondSign = sign.value === \"=\" ? \"\" : sign.value\r\n    _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.y = Number(_consts__WEBPACK_IMPORTED_MODULE_1__.SCOREBOARD.value.split(_consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.firstSign)[1])\r\n\r\n    _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.x = (0,_utils_operations_arithmeticOperations__WEBPACK_IMPORTED_MODULE_3__.arithmeticOperations)(_consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.x, _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.y, _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.firstSign)\r\n    _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.firstSign = _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.secondSign\r\n    _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.secondSign = \"\"\r\n    _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.signAmount = _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.firstSign ? 1 : 0\r\n    _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.y = 0\r\n\r\n    _consts__WEBPACK_IMPORTED_MODULE_1__.SCOREBOARD.value = String(_consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.x) + _consts__WEBPACK_IMPORTED_MODULE_1__.CURRENT_STATE.firstSign\r\n  }\r\n}))\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.MEMORIES.forEach(mem => mem.addEventListener('click', () => memory = (0,_utils_operations_memoryOperations__WEBPACK_IMPORTED_MODULE_9__.memoryOperations)(mem.value, memory)))\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.POWERS.forEach(pow => pow.addEventListener('click', () => _consts__WEBPACK_IMPORTED_MODULE_1__.SCOREBOARD.value = String()))\n\n//# sourceURL=webpack://calculator/./src/index.js?");

/***/ }),

/***/ "./src/utils/operations/arithmeticOperations.js":
/*!******************************************************!*\
  !*** ./src/utils/operations/arithmeticOperations.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arithmeticOperations\": () => (/* binding */ arithmeticOperations)\n/* harmony export */ });\nconst arithmeticOperations = (x, y, sign) => {\r\n  switch (sign) {\r\n    case \"+\":\r\n      return x + y\r\n    case \"-\":\r\n      return x - y\r\n    case \"÷\":\r\n      return x / y\r\n    case \"×\":\r\n      return x * y\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/arithmeticOperations.js?");

/***/ }),

/***/ "./src/utils/operations/changeOrientation.js":
/*!***************************************************!*\
  !*** ./src/utils/operations/changeOrientation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeOrientation\": () => (/* binding */ changeOrientation)\n/* harmony export */ });\nconst changeOrientation = (x) => x === 0 ? 0 : -x\n\n//# sourceURL=webpack://calculator/./src/utils/operations/changeOrientation.js?");

/***/ }),

/***/ "./src/utils/operations/factorial.js":
/*!*******************************************!*\
  !*** ./src/utils/operations/factorial.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"factorial\": () => (/* binding */ factorial)\n/* harmony export */ });\nconst factorial = (val, n) => {\r\n  if (n === 1) {\r\n    return val\r\n  }\r\n  return factorial(val * n, n - 1)\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/factorial.js?");

/***/ }),

/***/ "./src/utils/operations/memoryOperations.js":
/*!**************************************************!*\
  !*** ./src/utils/operations/memoryOperations.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"memoryOperations\": () => (/* binding */ memoryOperations)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ \"./src/consts.js\");\n\r\n\r\nconst memoryOperations = (type, memory) => {\r\n  switch (type) {\r\n    case \"MC\":\r\n      return 0\r\n    case \"M+\": {\r\n      if (!_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signAmount) {\r\n        return memory + Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value)\r\n      } else {\r\n        console.log(\"error\")\r\n        return memory\r\n      }\r\n    }\r\n    case \"M-\": {\r\n      if (!_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signAmount) {\r\n        return memory - Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value)\r\n      } else {\r\n        console.log(\"error\")\r\n        return memory\r\n      }\r\n    }\r\n    case \"MR\": {\r\n      _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value = String(memory)\r\n      return memory\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/memoryOperations.js?");

/***/ }),

/***/ "./src/utils/operations/mod.js":
/*!*************************************!*\
  !*** ./src/utils/operations/mod.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mod\": () => (/* binding */ mod)\n/* harmony export */ });\nconst mod = (x, y) => {\r\n  if (y <= 0) {\r\n    return \"error\"\r\n  }\r\n  if (x <= 0) {\r\n    return 0\r\n  }\r\n\r\n  return  x % y\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/mod.js?");

/***/ }),

/***/ "./src/utils/operations/powerOperations.js":
/*!*************************************************!*\
  !*** ./src/utils/operations/powerOperations.js ***!
  \*************************************************/
/***/ (() => {

eval("const powerOperations = (type, x = 1, n = 1) => {\r\n  switch (type) {\r\n    case 'x^2':\r\n      return power(x, 2)\r\n    case 'x^3':\r\n      return power(x, 3)\r\n    case 'x^n':\r\n      return power(x, n)\r\n    case '10^n':\r\n      return power(10, n)\r\n  }\r\n}\r\n\r\n\r\nconst power = (x, n) => {\r\n  if (n === 1) {\r\n    return x\r\n  }\r\n  return x * power(x, n - 1)\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/powerOperations.js?");

/***/ }),

/***/ "./src/utils/operations/root.js":
/*!**************************************!*\
  !*** ./src/utils/operations/root.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"root\": () => (/* binding */ root)\n/* harmony export */ });\nconst root = (x, n) => {\r\n  if (x < 0) {\r\n    if (n % 2 === 1) {\r\n      return - ((-x) ** (1 / n))\r\n    } else {\r\n      return \"error\"\r\n    }\r\n  }\r\n  return x ** (1 / n)\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/root.js?");

/***/ }),

/***/ "./src/utils/validations/pointValidation.js":
/*!**************************************************!*\
  !*** ./src/utils/validations/pointValidation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pointValidation\": () => (/* binding */ pointValidation)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ \"./src/consts.js\");\n\r\n\r\nconst pointValidation = () => {\r\n  const checkFirstNumWithPoint = _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.includes(\".\")\r\n  const checkSecondNumWithPoint = _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.split(_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.firstSign)[1].includes(\".\")\r\n\r\n  const canAddPointToFirstNum = !_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signAmount && !checkFirstNumWithPoint\r\n  const canAddPointToSecondNum = _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signAmount && !checkSecondNumWithPoint\r\n\r\n  if (canAddPointToFirstNum || canAddPointToSecondNum) {\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value += '.'\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/validations/pointValidation.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;