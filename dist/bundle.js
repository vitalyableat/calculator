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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    padding: 0;\\r\\n    margin: 0;\\r\\n    font-family: Poppins;\\r\\n    font-size: 30px;\\r\\n    color: #e6e6e6;\\r\\n    border-radius: 0;\\r\\n    border: none;\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\nbody {\\r\\n    background-color: #48494a;\\r\\n    display: flex;\\r\\n    justify-content: center;\\r\\n    align-items: center;\\r\\n    height: 100vh;\\r\\n    overflow: hidden;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\n/* HEADER */\\r\\n\\r\\ndiv.header {\\r\\n    margin: -80px 0 20px;\\r\\n    height: 60px;\\r\\n    width: 600px;\\r\\n    border-radius: 15px;\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\ndiv.themeWrap {\\r\\n    display: flex;\\r\\n    padding-left: 10px;\\r\\n    outline: 4px solid black;\\r\\n    border-radius: 15px;\\r\\n    overflow: hidden;\\r\\n    background-color: #333333;\\r\\n}\\r\\n\\r\\nh2.themeTxt {\\r\\n    line-height: 60px;\\r\\n    margin-right: 10px;\\r\\n}\\r\\n\\r\\ndiv.themeIconWrap {\\r\\n    display: flex;\\r\\n    padding: 10px;\\r\\n    background-color: #757677;\\r\\n}\\r\\n\\r\\ndiv.themeIconWrap:hover {\\r\\n    cursor: pointer;\\r\\n    background-color: #222222;\\r\\n}\\r\\n\\r\\ndiv.selectedTheme {\\r\\n    background-color: #ff8000;\\r\\n}\\r\\n\\r\\ndiv.themeIcon {\\r\\n    border-radius: 50%;\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n    outline: 3px solid black;\\r\\n}\\r\\n\\r\\ndiv.darkTheme {\\r\\n    background-color: #333333;\\r\\n}\\r\\n\\r\\ndiv.lightTheme {\\r\\n    background-color: #e6e6e6;\\r\\n}\\r\\n\\r\\ndiv.prevValue {\\r\\n    background-color: #333;\\r\\n    margin: 0 15px;\\r\\n    outline: 4px solid black;\\r\\n    border-radius: 15px;\\r\\n    padding: 10px 15px;\\r\\n}\\r\\n\\r\\ndiv.prevValueLight {\\r\\n    background-color: #e6e6e6;\\r\\n}\\r\\n\\r\\ndiv.prevValue:hover {\\r\\n    cursor: pointer;\\r\\n    background-color: #222222;\\r\\n}\\r\\n\\r\\nh2.prevValueTxt {\\r\\n    font-size: 40px;\\r\\n    line-height: 40px;\\r\\n}\\r\\n\\r\\ndiv.memory {\\r\\n    width: 225px;\\r\\n    background-color: #333333;\\r\\n    border-radius: 15px;\\r\\n    outline: 4px solid black;\\r\\n    line-height: 60px;\\r\\n    padding: 0 10px;\\r\\n    display: flex;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\nh2#memValue {\\r\\n    margin-left: 10px;\\r\\n    white-space: nowrap;\\r\\n    overflow: hidden;\\r\\n    text-overflow: ellipsis;\\r\\n}\\r\\n\\r\\n/* BODY */\\r\\n\\r\\ndiv.wrap {\\r\\n    width: 600px;\\r\\n    height: 400px;\\r\\n    border-radius: 15px;\\r\\n    outline: 4px solid black;\\r\\n    overflow: hidden;\\r\\n}\\r\\n\\r\\ninput.scoreboard {\\r\\n    height: 70px;\\r\\n    width: 570px;\\r\\n    background-color: #333;\\r\\n    font-size: 50px;\\r\\n    padding: 15px;\\r\\n    text-align: right;\\r\\n}\\r\\n\\r\\ndiv.tableWrap {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n}\\r\\n\\r\\ndiv.line {\\r\\n    display: flex;\\r\\n}\\r\\n\\r\\nbutton.cell {\\r\\n    width: 75px;\\r\\n    height: 75px;\\r\\n    outline: 2px solid black;\\r\\n    text-align: center;\\r\\n    line-height: 75px;\\r\\n    background-color: #5a5b5c;\\r\\n}\\r\\n\\r\\nbutton.cell:hover {\\r\\n    cursor: pointer;\\r\\n    background-color: #222;\\r\\n}\\r\\n\\r\\nbutton.sign {\\r\\n    background-color: #ff8000;\\r\\n    font-size: 40px;\\r\\n}\\r\\n\\r\\nbutton.number {\\r\\n    font-size: 40px;\\r\\n    background-color: #757677;\\r\\n}\\r\\n\\r\\nbutton.pow {\\r\\n    line-height: 65px;\\r\\n}\\r\\n\\r\\nsup {\\r\\n    font-size: 20px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://calculator/./src/styles/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://calculator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://calculator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://calculator/./src/styles/main.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://calculator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Calculator.js":
/*!***************************!*\
  !*** ./src/Calculator.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Calculator\": () => (/* binding */ Calculator)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ \"./src/consts.js\");\n\r\n\r\nclass Calculator {\r\n  constructor() {\r\n    this.value = 0\r\n    this.history = []\r\n    this.memory = 0\r\n  }\r\n\r\n  resetMemory() {\r\n    this.memory = 0\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.MEM_VALUE.innerHTML = this.memory\r\n  }\r\n\r\n  changeMemory(value) {\r\n    this.memory += value\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.MEM_VALUE.innerHTML = this.memory\r\n  }\r\n\r\n  resetValue(value) {\r\n    this.value = value\r\n  }\r\n\r\n  executeCommand(command) {\r\n    this.value = command.execute(this.value)\r\n    this.history.push(command)\r\n  }\r\n\r\n  undo() {\r\n    const command = this.history.pop()\r\n    this.value = command.undo(this.value)\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/Calculator.js?");

/***/ }),

/***/ "./src/consts.js":
/*!***********************!*\
  !*** ./src/consts.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ALL_ELEMENTS\": () => (/* binding */ ALL_ELEMENTS),\n/* harmony export */   \"BACKSPACE\": () => (/* binding */ BACKSPACE),\n/* harmony export */   \"BODY\": () => (/* binding */ BODY),\n/* harmony export */   \"CALCULATOR\": () => (/* binding */ CALCULATOR),\n/* harmony export */   \"CURRENT_STATE\": () => (/* binding */ CURRENT_STATE),\n/* harmony export */   \"DARK_THEME_BTN\": () => (/* binding */ DARK_THEME_BTN),\n/* harmony export */   \"LIGHT_THEME_BTN\": () => (/* binding */ LIGHT_THEME_BTN),\n/* harmony export */   \"MEMORIES\": () => (/* binding */ MEMORIES),\n/* harmony export */   \"MEMORY_WRAP\": () => (/* binding */ MEMORY_WRAP),\n/* harmony export */   \"MEM_VALUE\": () => (/* binding */ MEM_VALUE),\n/* harmony export */   \"NUMBERS\": () => (/* binding */ NUMBERS),\n/* harmony export */   \"ONE_VALUE_COMMANDS\": () => (/* binding */ ONE_VALUE_COMMANDS),\n/* harmony export */   \"PREV_VALUE_BTN\": () => (/* binding */ PREV_VALUE_BTN),\n/* harmony export */   \"SCOREBOARD\": () => (/* binding */ SCOREBOARD),\n/* harmony export */   \"SIGNS\": () => (/* binding */ SIGNS),\n/* harmony export */   \"SIGN_VALUES\": () => (/* binding */ SIGN_VALUES),\n/* harmony export */   \"THEME_WRAP\": () => (/* binding */ THEME_WRAP),\n/* harmony export */   \"TWO_VALUE_COMMANDS\": () => (/* binding */ TWO_VALUE_COMMANDS)\n/* harmony export */ });\n/* harmony import */ var _Calculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculator */ \"./src/Calculator.js\");\n\r\n\r\nconst CALCULATOR = new _Calculator__WEBPACK_IMPORTED_MODULE_0__.Calculator()\r\n\r\nconst SCOREBOARD = document.getElementById(\"scoreboard\")\r\nconst NUMBERS = document.querySelectorAll(\"button.number\")\r\nconst SIGNS = document.getElementsByName(\"sign\")\r\nconst BACKSPACE = document.getElementById(\"backspace\")\r\nconst ONE_VALUE_COMMANDS = document.getElementsByName(\"oneValueCommands\")\r\nconst TWO_VALUE_COMMANDS = document.getElementsByName(\"twoValueCommands\")\r\nconst MEMORIES = document.getElementsByName(\"memory\")\r\nconst PREV_VALUE_BTN = document.getElementById(\"prevValue\")\r\n\r\nconst MEM_VALUE = document.getElementById(\"memValue\")\r\nconst DARK_THEME_BTN = document.getElementById(\"darkTheme\")\r\nconst LIGHT_THEME_BTN = document.getElementById(\"lightTheme\")\r\nconst THEME_WRAP = document.getElementById(\"themeWrap\")\r\nconst MEMORY_WRAP = document.getElementById(\"memoryWrap\")\r\nconst ALL_ELEMENTS = document.querySelectorAll(\"*\")\r\nconst BODY = document.querySelectorAll('body')[0]\r\n\r\nconst SIGN_VALUES = [\"+\", \"-\", \"×\", \"÷\"]\r\n\r\nconst CURRENT_STATE = {\r\n  x: 0,\r\n  y: 0,\r\n  signIndex: 0,\r\n  command: \"\",\r\n  theme: \"dark\"\r\n}\n\n//# sourceURL=webpack://calculator/./src/consts.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ \"./src/styles/main.css\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consts */ \"./src/consts.js\");\n/* harmony import */ var _utils_validations_numberValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/validations/numberValidation */ \"./src/utils/validations/numberValidation.js\");\n/* harmony import */ var _utils_validations_signValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/validations/signValidation */ \"./src/utils/validations/signValidation.js\");\n/* harmony import */ var _utils_validations_backspaceValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/validations/backspaceValidation */ \"./src/utils/validations/backspaceValidation.js\");\n/* harmony import */ var _utils_validations_oneValueCommandValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/validations/oneValueCommandValidation */ \"./src/utils/validations/oneValueCommandValidation.js\");\n/* harmony import */ var _utils_validations_twoValueCommandValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/validations/twoValueCommandValidation */ \"./src/utils/validations/twoValueCommandValidation.js\");\n/* harmony import */ var _utils_validations_memoryValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/validations/memoryValidation */ \"./src/utils/validations/memoryValidation.js\");\n/* harmony import */ var _utils_themeChange__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/themeChange */ \"./src/utils/themeChange.js\");\n/* harmony import */ var _utils_validations_prevValueValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils/validations/prevValueValidation */ \"./src/utils/validations/prevValueValidation.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.BACKSPACE.addEventListener('click', _utils_validations_backspaceValidation__WEBPACK_IMPORTED_MODULE_4__.backspaceValidation)\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.NUMBERS.forEach(num => num.addEventListener('click', () => (0,_utils_validations_numberValidation__WEBPACK_IMPORTED_MODULE_2__.numberValidation)(num)))\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.SIGNS.forEach(sign => sign.addEventListener('click', () => (0,_utils_validations_signValidation__WEBPACK_IMPORTED_MODULE_3__.signValidation)(sign)))\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.ONE_VALUE_COMMANDS.forEach(com => com.addEventListener('click', () => (0,_utils_validations_oneValueCommandValidation__WEBPACK_IMPORTED_MODULE_5__.oneValueCommandValidation)(com)))\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.TWO_VALUE_COMMANDS.forEach(com => com.addEventListener('click', () => (0,_utils_validations_twoValueCommandValidation__WEBPACK_IMPORTED_MODULE_6__.twoValueCommandValidation)(com)))\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.MEMORIES.forEach(mem => mem.addEventListener('click', () => (0,_utils_validations_memoryValidation__WEBPACK_IMPORTED_MODULE_7__.memoryValidation)(mem)))\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.DARK_THEME_BTN.addEventListener('click', _utils_themeChange__WEBPACK_IMPORTED_MODULE_8__.themeChangeDark)\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.LIGHT_THEME_BTN.addEventListener('click', _utils_themeChange__WEBPACK_IMPORTED_MODULE_8__.themeChangeLight)\r\n\r\n_consts__WEBPACK_IMPORTED_MODULE_1__.PREV_VALUE_BTN.addEventListener('click', _utils_validations_prevValueValidation__WEBPACK_IMPORTED_MODULE_9__.prevValueValidation)\r\n\n\n//# sourceURL=webpack://calculator/./src/index.js?");

/***/ }),

/***/ "./src/utils/chooseCommand.js":
/*!************************************!*\
  !*** ./src/utils/chooseCommand.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"chooseCommand\": () => (/* binding */ chooseCommand)\n/* harmony export */ });\n/* harmony import */ var _operations_AddCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operations/AddCommand */ \"./src/utils/operations/AddCommand.js\");\n/* harmony import */ var _operations_SubtractCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operations/SubtractCommand */ \"./src/utils/operations/SubtractCommand.js\");\n/* harmony import */ var _operations_MultiplyCommand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./operations/MultiplyCommand */ \"./src/utils/operations/MultiplyCommand.js\");\n/* harmony import */ var _operations_DivideCommand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operations/DivideCommand */ \"./src/utils/operations/DivideCommand.js\");\n/* harmony import */ var _operations_InversionCommand__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./operations/InversionCommand */ \"./src/utils/operations/InversionCommand.js\");\n/* harmony import */ var _operations_FactorialCommand__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operations/FactorialCommand */ \"./src/utils/operations/FactorialCommand.js\");\n/* harmony import */ var _operations_PowCommand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operations/PowCommand */ \"./src/utils/operations/PowCommand.js\");\n/* harmony import */ var _operations_ModCommand__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./operations/ModCommand */ \"./src/utils/operations/ModCommand.js\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../consts */ \"./src/consts.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst chooseCommand = (command, value = 1) => {\r\n  switch (command) {\r\n    case \"+\":\r\n      return new _operations_AddCommand__WEBPACK_IMPORTED_MODULE_0__.AddCommand(value)\r\n    case \"-\":\r\n      return new _operations_SubtractCommand__WEBPACK_IMPORTED_MODULE_1__.SubtractCommand(value)\r\n    case \"×\":\r\n      return new _operations_MultiplyCommand__WEBPACK_IMPORTED_MODULE_2__.MultiplyCommand(value)\r\n    case \"÷\":\r\n      return new _operations_DivideCommand__WEBPACK_IMPORTED_MODULE_3__.DivideCommand(value)\r\n    case \"+/-\":\r\n      return new _operations_InversionCommand__WEBPACK_IMPORTED_MODULE_4__.InversionCommand()\r\n    case \"%\":\r\n      return new _operations_ModCommand__WEBPACK_IMPORTED_MODULE_7__.ModCommand()\r\n    case \"!\":\r\n      return new _operations_FactorialCommand__WEBPACK_IMPORTED_MODULE_5__.FactorialCommand()\r\n    case \"x^2\":\r\n      return new _operations_PowCommand__WEBPACK_IMPORTED_MODULE_6__.PowCommand(2)\r\n    case \"x^3\":\r\n      return new _operations_PowCommand__WEBPACK_IMPORTED_MODULE_6__.PowCommand(3)\r\n    case \"x^n\":\r\n      return new _operations_PowCommand__WEBPACK_IMPORTED_MODULE_6__.PowCommand(value)\r\n    case \"10^n\":\r\n      return new _operations_PowCommand__WEBPACK_IMPORTED_MODULE_6__.PowCommand(value)\r\n    case \"1/x\":\r\n      return new _operations_PowCommand__WEBPACK_IMPORTED_MODULE_6__.PowCommand(-1)\r\n    case \"x^1/2\":\r\n      return new _operations_PowCommand__WEBPACK_IMPORTED_MODULE_6__.PowCommand(1 / 2)\r\n    case \"x^1/3\":\r\n      return new _operations_PowCommand__WEBPACK_IMPORTED_MODULE_6__.PowCommand(1 / 3)\r\n    case \"x^1/n\":\r\n      return new _operations_PowCommand__WEBPACK_IMPORTED_MODULE_6__.PowCommand(1 / value)\r\n    case \"MC\":\r\n      _consts__WEBPACK_IMPORTED_MODULE_8__.CALCULATOR.resetMemory()\r\n      break\r\n    case \"M+\":\r\n      _consts__WEBPACK_IMPORTED_MODULE_8__.CALCULATOR.changeMemory(Number(_consts__WEBPACK_IMPORTED_MODULE_8__.SCOREBOARD.value))\r\n      break\r\n    case \"M-\":\r\n      _consts__WEBPACK_IMPORTED_MODULE_8__.CALCULATOR.changeMemory(-Number(_consts__WEBPACK_IMPORTED_MODULE_8__.SCOREBOARD.value))\r\n      break\r\n    case \"MR\":\r\n      _consts__WEBPACK_IMPORTED_MODULE_8__.SCOREBOARD.value = String(_consts__WEBPACK_IMPORTED_MODULE_8__.CALCULATOR.memory)\r\n      break\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/chooseCommand.js?");

/***/ }),

/***/ "./src/utils/operations/AddCommand.js":
/*!********************************************!*\
  !*** ./src/utils/operations/AddCommand.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AddCommand\": () => (/* binding */ AddCommand)\n/* harmony export */ });\nclass AddCommand {\r\n  constructor(valueToAdd) {\r\n    this.valueToAdd = valueToAdd\r\n  }\r\n\r\n  execute(currentValue) {\r\n    return currentValue + this.valueToAdd\r\n  }\r\n\r\n  undo(currentValue) {\r\n    return currentValue - this.valueToAdd\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/AddCommand.js?");

/***/ }),

/***/ "./src/utils/operations/DivideCommand.js":
/*!***********************************************!*\
  !*** ./src/utils/operations/DivideCommand.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DivideCommand\": () => (/* binding */ DivideCommand)\n/* harmony export */ });\nclass DivideCommand {\r\n  constructor(valueToDivide) {\r\n    this.valueToDivide = valueToDivide\r\n  }\r\n\r\n  execute(currentValue) {\r\n    return currentValue / this.valueToDivide\r\n  }\r\n\r\n  undo(currentValue) {\r\n    return currentValue * this.valueToDivide\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/DivideCommand.js?");

/***/ }),

/***/ "./src/utils/operations/FactorialCommand.js":
/*!**************************************************!*\
  !*** ./src/utils/operations/FactorialCommand.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FactorialCommand\": () => (/* binding */ FactorialCommand)\n/* harmony export */ });\nclass FactorialCommand {\r\n\r\n  execute(currentValue) {\r\n    return factorial(1, currentValue)\r\n  }\r\n\r\n  undo(currentValue) {\r\n    return undoFactorial(currentValue, 1)\r\n  }\r\n}\r\n\r\nconst factorial = (val = 1, n) => {\r\n  if (n === 1 || n === 0) {\r\n    return val\r\n  }\r\n  return factorial(val * n, n - 1)\r\n}\r\n\r\nconst undoFactorial = (val, n) => {\r\n  if (val === 1) {\r\n    return n - 1\r\n  }\r\n  return undoFactorial(val / n, n + 1)\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/FactorialCommand.js?");

/***/ }),

/***/ "./src/utils/operations/InversionCommand.js":
/*!**************************************************!*\
  !*** ./src/utils/operations/InversionCommand.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"InversionCommand\": () => (/* binding */ InversionCommand)\n/* harmony export */ });\nclass InversionCommand {\r\n  execute(currentValue) {\r\n    return -currentValue\r\n  }\r\n\r\n  undo(currentValue) {\r\n    return -currentValue\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/InversionCommand.js?");

/***/ }),

/***/ "./src/utils/operations/ModCommand.js":
/*!********************************************!*\
  !*** ./src/utils/operations/ModCommand.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModCommand\": () => (/* binding */ ModCommand)\n/* harmony export */ });\nclass ModCommand {\r\n  execute(currentValue) {\r\n    return currentValue / 100\r\n  }\r\n\r\n  undo(currentValue) {\r\n    return currentValue * 100\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/ModCommand.js?");

/***/ }),

/***/ "./src/utils/operations/MultiplyCommand.js":
/*!*************************************************!*\
  !*** ./src/utils/operations/MultiplyCommand.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MultiplyCommand\": () => (/* binding */ MultiplyCommand)\n/* harmony export */ });\nclass MultiplyCommand {\r\n  constructor(valueToMultiply) {\r\n    this.valueToMultiply = valueToMultiply\r\n  }\r\n\r\n  execute(currentValue) {\r\n    return currentValue * this.valueToMultiply\r\n  }\r\n\r\n  undo(currentValue) {\r\n    return currentValue / this.valueToMultiply\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/MultiplyCommand.js?");

/***/ }),

/***/ "./src/utils/operations/PowCommand.js":
/*!********************************************!*\
  !*** ./src/utils/operations/PowCommand.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PowCommand\": () => (/* binding */ PowCommand)\n/* harmony export */ });\nclass PowCommand {\r\n  constructor(valueToPow) {\r\n    this.valueToPow = valueToPow\r\n  }\r\n\r\n  execute(currentValue) {\r\n    return currentValue ** this.valueToPow\r\n  }\r\n\r\n  undo(currentValue) {\r\n    return currentValue ** (1 / this.valueToPow)\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/PowCommand.js?");

/***/ }),

/***/ "./src/utils/operations/SubtractCommand.js":
/*!*************************************************!*\
  !*** ./src/utils/operations/SubtractCommand.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SubtractCommand\": () => (/* binding */ SubtractCommand)\n/* harmony export */ });\nclass SubtractCommand {\r\n  constructor(valueToSubtract) {\r\n    this.valueToSubtract = valueToSubtract\r\n  }\r\n\r\n  execute(currentValue) {\r\n    return currentValue - this.valueToSubtract\r\n  }\r\n\r\n  undo(currentValue) {\r\n    return currentValue + this.valueToSubtract\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/operations/SubtractCommand.js?");

/***/ }),

/***/ "./src/utils/themeChange.js":
/*!**********************************!*\
  !*** ./src/utils/themeChange.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"themeChangeDark\": () => (/* binding */ themeChangeDark),\n/* harmony export */   \"themeChangeLight\": () => (/* binding */ themeChangeLight)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../consts */ \"./src/consts.js\");\n\r\n\r\nconst themeChangeDark = () => {\r\n  if (_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.theme !== 'dark') {\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.theme = \"dark\"\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME_BTN.classList.add(\"selectedTheme\")\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.LIGHT_THEME_BTN.classList.remove(\"selectedTheme\")\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.style.backgroundColor = \"#333\"\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.MEMORY_WRAP.style.backgroundColor = \"#333\"\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.PREV_VALUE_BTN.classList.toggle('prevValueLight')\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.THEME_WRAP.style.backgroundColor = \"#333\"\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.ALL_ELEMENTS.forEach(el => el.style.color = \"#e6e6e6\")\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.BODY.style.backgroundColor = \"#48494a\"\r\n  }\r\n}\r\n\r\nconst themeChangeLight = () => {\r\n  if (_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.theme !== 'light') {\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.theme = \"light\"\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.LIGHT_THEME_BTN.classList.add(\"selectedTheme\")\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.DARK_THEME_BTN.classList.remove(\"selectedTheme\")\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.style.backgroundColor = \"#e6e6e6\"\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.MEMORY_WRAP.style.backgroundColor = \"#e6e6e6\"\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.PREV_VALUE_BTN.classList.toggle('prevValueLight')\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.THEME_WRAP.style.backgroundColor = \"#e6e6e6\"\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.ALL_ELEMENTS.forEach(el => el.style.color = \"#000\")\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.BODY.style.backgroundColor = \"#b4b4b4\"\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/themeChange.js?");

/***/ }),

/***/ "./src/utils/validations/backspaceValidation.js":
/*!******************************************************!*\
  !*** ./src/utils/validations/backspaceValidation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"backspaceValidation\": () => (/* binding */ backspaceValidation)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ \"./src/consts.js\");\n\r\n\r\nconst backspaceValidation = () => {\r\n  if (_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex >= _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length - 1) {\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex = 0\r\n  }\r\n  _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value = _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.substring(0, _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length - 1)\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/validations/backspaceValidation.js?");

/***/ }),

/***/ "./src/utils/validations/memoryValidation.js":
/*!***************************************************!*\
  !*** ./src/utils/validations/memoryValidation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"memoryValidation\": () => (/* binding */ memoryValidation)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ \"./src/consts.js\");\n/* harmony import */ var _chooseCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chooseCommand */ \"./src/utils/chooseCommand.js\");\n\r\n\r\n\r\nconst memoryValidation = (mem) => {\r\n  const isPointOrMinusOrPlus = _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value === \".\" || _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value === \"-\" || _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value === \"+\"\r\n  const isNotOneNumber = !_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value || (_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length && isPointOrMinusOrPlus) || _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex\r\n\r\n  if ((mem.value === \"M+\" || mem.value === \"M-\") && isNotOneNumber) {\r\n    console.log(\"Need one number\")\r\n  } else {\r\n    (0,_chooseCommand__WEBPACK_IMPORTED_MODULE_1__.chooseCommand)(mem.value)\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/validations/memoryValidation.js?");

/***/ }),

/***/ "./src/utils/validations/numberValidation.js":
/*!***************************************************!*\
  !*** ./src/utils/validations/numberValidation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"numberValidation\": () => (/* binding */ numberValidation)\n/* harmony export */ });\n/* harmony import */ var _pointValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pointValidation */ \"./src/utils/validations/pointValidation.js\");\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../consts */ \"./src/consts.js\");\n\r\n\r\n\r\nconst numberValidation = (num) => {\r\n  if (num.value === \".\") {\r\n    (0,_pointValidation__WEBPACK_IMPORTED_MODULE_0__.pointValidation)()\r\n  } else {\r\n    _consts__WEBPACK_IMPORTED_MODULE_1__.SCOREBOARD.value += num.value\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/validations/numberValidation.js?");

/***/ }),

/***/ "./src/utils/validations/oneValueCommandValidation.js":
/*!************************************************************!*\
  !*** ./src/utils/validations/oneValueCommandValidation.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"oneValueCommandValidation\": () => (/* binding */ oneValueCommandValidation)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ \"./src/consts.js\");\n/* harmony import */ var _chooseCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chooseCommand */ \"./src/utils/chooseCommand.js\");\n\r\n\r\n\r\nconst oneValueCommandValidation = (com) => {\r\n  const isPointOrMinusOrPlus = _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value === \".\" || _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value === \"-\" || _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value === \"+\"\r\n  if (!_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value || (_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length && isPointOrMinusOrPlus) || _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex) {\r\n    console.log(\"Need one number\")\r\n  } else if (Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value) === 0 && com.value === \"1/x\") {\r\n    console.log(\"Division by 0\")\r\n  } else if (Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value) < 0 && (com.value === \"x^1/2\" || com.value === \"!\")) {\r\n    console.log(\"Should be positive\")\r\n  } else if (_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.includes(\".\") && com.value === \"!\") {\r\n    console.log(\"Should be integer\")\r\n  } else if (com.value === \"10^n\") {\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.resetValue(10)\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.executeCommand((0,_chooseCommand__WEBPACK_IMPORTED_MODULE_1__.chooseCommand)(com.value, Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value)))\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value = String(_consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.value)\r\n  } else {\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.resetValue(Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value))\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.executeCommand((0,_chooseCommand__WEBPACK_IMPORTED_MODULE_1__.chooseCommand)(com.value))\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value = String(_consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.value)\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/validations/oneValueCommandValidation.js?");

/***/ }),

/***/ "./src/utils/validations/pointValidation.js":
/*!**************************************************!*\
  !*** ./src/utils/validations/pointValidation.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pointValidation\": () => (/* binding */ pointValidation)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ \"./src/consts.js\");\n\r\n\r\nconst pointValidation = () => {\r\n  const isFirstIncludesPoint = _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.includes(\".\")\r\n  const isSecondIncludesPoint = _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.substring(_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex + 1, _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length).includes(\".\")\r\n\r\n  const firstCondition = !_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex && !isFirstIncludesPoint\r\n  const secondCondition = _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex && !isSecondIncludesPoint\r\n\r\n  if (firstCondition || secondCondition) {\r\n      _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value += \".\"\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/validations/pointValidation.js?");

/***/ }),

/***/ "./src/utils/validations/prevValueValidation.js":
/*!******************************************************!*\
  !*** ./src/utils/validations/prevValueValidation.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prevValueValidation\": () => (/* binding */ prevValueValidation)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ \"./src/consts.js\");\n\r\n\r\nconst prevValueValidation = () => {\r\n  if (_consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.history.length) {\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.undo()\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value = String(_consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.value)\r\n  } else {\r\n    console.log(\"No more history with this number\")\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/validations/prevValueValidation.js?");

/***/ }),

/***/ "./src/utils/validations/signValidation.js":
/*!*************************************************!*\
  !*** ./src/utils/validations/signValidation.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"signValidation\": () => (/* binding */ signValidation)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ \"./src/consts.js\");\n/* harmony import */ var _chooseCommand__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../chooseCommand */ \"./src/utils/chooseCommand.js\");\n\r\n\r\n\r\nconst signValidation = (sign) => {\r\n  const signIsMinusOrPlus = sign.value === '-' || sign.value === '+'\r\n\r\n  if (_consts__WEBPACK_IMPORTED_MODULE_0__.SIGN_VALUES.includes(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value[_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length - 1])) {\r\n    if ((_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length > 1 && sign.value !== \"=\") || (_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length === 1 && signIsMinusOrPlus)) {\r\n      _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value = _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.substring(0, _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length - 1) + sign.value\r\n    }\r\n  } else if (_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.command) {\r\n    if (!_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value && signIsMinusOrPlus) {\r\n      _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value += sign.value\r\n    } else if ((!_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value || !Number.isFinite(Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value)))) {\r\n      console.log(\"Write N value\")\r\n    } else if (Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value) === 0 && _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.command === \"x^1/n\") {\r\n      console.log(\"Division by 0\")\r\n    } else if (_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.command === \"x^1/n\" && Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value) % 2 === 0 && _consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.value < 0) {\r\n      console.log(\"For negative numbers only odd roots available\")\r\n    } else {\r\n      _consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.executeCommand((0,_chooseCommand__WEBPACK_IMPORTED_MODULE_1__.chooseCommand)(_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.command, Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value)))\r\n      _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value = String(_consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.value)\r\n      _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.command = \"\"\r\n      _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex = sign.value === \"=\" ? 0 : _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length\r\n      _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value += sign.value === \"=\" ? \"\" : sign.value\r\n    }\r\n  } else if (_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length) {\r\n    if (_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex) {\r\n      let y = Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.substring(_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex + 1, _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length))\r\n      if (Number.isFinite(y)) {\r\n        _consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.executeCommand((0,_chooseCommand__WEBPACK_IMPORTED_MODULE_1__.chooseCommand)(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value[_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex], y))\r\n        _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value = String(_consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.value)\r\n        _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex = sign.value === \"=\" ? 0 : _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length\r\n        _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value += sign.value === \"=\" ? \"\" : sign.value\r\n      }\r\n    } else if (Number.isFinite(Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value))) {\r\n      _consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.resetValue(Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value))\r\n      _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex = sign.value === \"=\" ? 0 : _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length\r\n      _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value += sign.value === \"=\" ? \"\" : sign.value\r\n    }\r\n  } else if (signIsMinusOrPlus) {\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value += sign.value\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/validations/signValidation.js?");

/***/ }),

/***/ "./src/utils/validations/twoValueCommandValidation.js":
/*!************************************************************!*\
  !*** ./src/utils/validations/twoValueCommandValidation.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"twoValueCommandValidation\": () => (/* binding */ twoValueCommandValidation)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../consts */ \"./src/consts.js\");\n\r\n\r\nconst twoValueCommandValidation = (com) => {\r\n  const isPointOrMinusOrPlus = _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value === \".\" || _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value === \"-\" || _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value === \"+\"\r\n  if (_consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.command) {\r\n    console.log(\"Perform previous command\")\r\n  } else if (!_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value || (_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value.length && isPointOrMinusOrPlus) || _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.signIndex) {\r\n    console.log(\"Write X value\")\r\n  } else {\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.CALCULATOR.resetValue(Number(_consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value))\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.SCOREBOARD.value = \"\"\r\n    _consts__WEBPACK_IMPORTED_MODULE_0__.CURRENT_STATE.command = com.value\r\n  }\r\n}\n\n//# sourceURL=webpack://calculator/./src/utils/validations/twoValueCommandValidation.js?");

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