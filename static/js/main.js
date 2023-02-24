"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: gainsboro;\\r\\n}\\r\\n\\r\\n.to-do-holder {\\r\\n  width: 60%;\\r\\n  max-width: 500px;\\r\\n  height: auto;\\r\\n  margin: 50px auto;\\r\\n  background: #fff;\\r\\n  gap: 0;\\r\\n  font-family: sans-serif;\\r\\n  font-size: 15px;\\r\\n  border-radius: 6px;\\r\\n}\\r\\n\\r\\n.title-to-do {\\r\\n  font-weight: bold;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.ul-to-do {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.li-to-do {\\r\\n  width: 100%;\\r\\n  list-style: none;\\r\\n  height: 40px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  border-bottom: 1px solid rgb(139, 137, 137);\\r\\n  padding: 1px 10px;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.li-to-do-input {\\r\\n  padding: 5px 10px;\\r\\n}\\r\\n\\r\\n.text-li {\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  border: none;\\r\\n  font-family: sans-serif;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.li-description {\\r\\n  width: 87%;\\r\\n  height: 100%;\\r\\n  border: none;\\r\\n}\\r\\n\\r\\n.task-text {\\r\\n  border: 1px solid transparent;\\r\\n}\\r\\n\\r\\n.refresh {\\r\\n  position: relative;\\r\\n  left: 7%;\\r\\n  width: 21px;\\r\\n  height: 19px;\\r\\n}\\r\\n\\r\\n.enter {\\r\\n  position: relative;\\r\\n  left: -5px;\\r\\n  width: 10px;\\r\\n  height: 10px;\\r\\n}\\r\\n\\r\\n.icon {\\r\\n  position: relative;\\r\\n  left: 1%;\\r\\n  width: 24px;\\r\\n  height: 24px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.btn-holder {\\r\\n  width: 100%;\\r\\n  height: 40px;\\r\\n  margin: 0;\\r\\n  border: none;\\r\\n  color: rgb(139, 137, 137);\\r\\n  font-family: sans-serif;\\r\\n  font-size: 15px;\\r\\n}\\r\\n\\r\\n.btn-holder:active {\\r\\n  transform: translateX(-1px);\\r\\n  transform: translateY(1px);\\r\\n  box-shadow: 0 0 5px black;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/add.js":
/*!********************!*\
  !*** ./src/add.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTask)\n/* harmony export */ });\nfunction Task(description) {\n  this.description = description;\n  this.completed = false;\n}\n\nlet tasks = [\n\n];\n\nfunction addTask(description) {\n  const newTask = new Task(description);\n  tasks = JSON.parse(localStorage.getItem('tasks'));\n  tasks.push(newTask);\n  let index = 1;\n  tasks.forEach((item) => {\n    item.index = index;\n    index += 1;\n  });\n  const toStore = JSON.stringify(tasks);\n  localStorage.setItem('tasks', toStore);\n}\n\n\n//# sourceURL=webpack://to-do-list/./src/add.js?");

/***/ }),

/***/ "./src/check.js":
/*!**********************!*\
  !*** ./src/check.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction changeStatus(description, status) {\n  const tasks = JSON.parse(localStorage.getItem('tasks'));\n  tasks.forEach((task) => {\n    if (task.description === description) {\n      task.completed = status;\n    }\n  });\n  const toStore = JSON.stringify(tasks);\n  localStorage.setItem('tasks', toStore);\n}\n\nfunction checkTrue() {\n  const checkboxs = document.querySelectorAll('.checkbox');\n  checkboxs.forEach((box) => {\n    if (box.nextElementSibling.style.textDecoration === 'line-through') {\n      box.checked = true;\n    }\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const checkboxs = document.querySelectorAll('.checkbox');\n  checkboxs.forEach((checkbox) => {\n    checkbox.addEventListener('click', () => {\n      const check = checkbox.checked;\n      if (check === true) {\n        checkbox.nextSibling.style.textDecoration = 'line-through';\n        changeStatus(checkbox.nextSibling.value, check);\n      } else {\n        checkbox.nextSibling.style.textDecoration = 'none';\n        changeStatus(checkbox.nextSibling.value, check);\n      }\n    });\n  });\n  checkTrue();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/check.js?");

/***/ }),

/***/ "./src/clearAllCompleted.js":
/*!**********************************!*\
  !*** ./src/clearAllCompleted.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.js */ \"./src/remove.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const checkboxs = document.querySelectorAll('.checkbox');\n  const arr = Array.from(checkboxs);\n  const checkboxCheck = arr.filter((check) => check.checked === true);\n  checkboxCheck.forEach((cheked) => {\n    (0,_remove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cheked.nextSibling.value);\n    cheked.parentElement.remove();\n  });\n});\n\n//# sourceURL=webpack://to-do-list/./src/clearAllCompleted.js?");

/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((description, newDescription) => {\n  const toModify = JSON.parse(localStorage.getItem('tasks'));\n  toModify.forEach((element) => {\n    if (element.description === description) {\n      element.description = newDescription;\n    }\n  });\n  const toStorage = JSON.stringify(toModify);\n  localStorage.setItem('tasks', toStorage);\n});\n\n//# sourceURL=webpack://to-do-list/./src/editTask.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _icons_dots_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/dots.png */ \"./src/icons/dots.png\");\n/* harmony import */ var _icons_refresh_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/refresh.png */ \"./src/icons/refresh.png\");\n/* harmony import */ var _icons_enter_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/enter.png */ \"./src/icons/enter.png\");\n/* harmony import */ var _icons_trash_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/trash.png */ \"./src/icons/trash.png\");\n/* harmony import */ var _add_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add.js */ \"./src/add.js\");\n/* harmony import */ var _removeTrash_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./removeTrash.js */ \"./src/removeTrash.js\");\n/* harmony import */ var _editTask_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editTask.js */ \"./src/editTask.js\");\n/* harmony import */ var _check_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./check.js */ \"./src/check.js\");\n/* harmony import */ var _clearAllCompleted_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./clearAllCompleted.js */ \"./src/clearAllCompleted.js\");\n\n\n\n\n\n\n\n\n\n\n\nconst inputAdd = document.getElementById('add-text');\nconst refreshIcon = document.querySelector('.refresh');\nconst enterIcon = document.querySelector('.enter');\nconst holder = document.querySelector('.ul-to-do');\nconst buttonClear = document.querySelector('.btn-holder');\n\nrefreshIcon.src = _icons_refresh_png__WEBPACK_IMPORTED_MODULE_2__;\nenterIcon.src = _icons_enter_png__WEBPACK_IMPORTED_MODULE_3__;\n\nfunction changeIcon() {\n  const tasksItems = document.querySelectorAll('.task-item');\n  const taskText = document.querySelectorAll('.task-text');\n  taskText.forEach((task) => {\n    task.addEventListener('click', () => {\n      task.nextSibling.src = _icons_trash_png__WEBPACK_IMPORTED_MODULE_4__;\n      task.nextSibling.classList.add('trash-can');\n      task.style.backgroundColor = 'rgb(240, 233, 166)';\n      task.parentNode.style.backgroundColor = 'rgb(240, 233, 166)';\n      (0,_removeTrash_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    });\n    const currentValue = task.value;\n    task.addEventListener('change', () => {\n      (0,_editTask_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(currentValue, task.value);\n    });\n  });\n  tasksItems.forEach((item) => {\n    item.addEventListener('mouseleave', () => {\n      item.lastChild.src = _icons_dots_png__WEBPACK_IMPORTED_MODULE_1__;\n      item.lastChild.classList.remove('trash-can');\n      item.style.backgroundColor = '#fff';\n      item.childNodes[1].style.backgroundColor = '#fff';\n    });\n  });\n}\n\nfunction listConstructor() {\n  if (localStorage.getItem('tasks') === '' || localStorage.getItem('tasks') === null) {\n    localStorage.setItem('tasks', '[]');\n  }\n  const toConstruct = JSON.parse(localStorage.getItem('tasks'));\n  toConstruct.sort((x, y) => x.index - y.index);\n  toConstruct.forEach((item) => {\n    const newLi = document.createElement('li');\n    newLi.classList.add('li-to-do');\n    newLi.classList.add('task-item');\n    let compOrNot = 'none';\n    if (item.completed === true) {\n      compOrNot = 'line-through';\n    }\n    newLi.innerHTML = `<input type=\"checkbox\"  class=\"checkbox\"><input type=\"text\" class=\"li-description task-text\" style=\"text-decoration: ${compOrNot}\" value =\"${item.description}\"><img src=\"${_icons_dots_png__WEBPACK_IMPORTED_MODULE_1__}\" class=\"icon\">`;\n    holder.appendChild(newLi);\n  });\n\n  changeIcon();\n  (0,_check_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n}\n\nlistConstructor();\n\nfunction deletePrevious() {\n  const children = holder.childNodes;\n  const counter = children.length;\n  for (let i = 5; i < counter; i += 1) {\n    if (children.length > 4) {\n      holder.removeChild(children[5]);\n    }\n  }\n}\n\ninputAdd.onchange = () => {\n  deletePrevious();\n  (0,_add_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(inputAdd.value);\n  inputAdd.value = '';\n  listConstructor();\n};\n\nwindow.onload = () => {\n  if (localStorage.getItem('tasks') === null) {\n    localStorage.setItem('tasks', '[]');\n  }\n};\n\nbuttonClear.onclick = () => {\n  (0,_clearAllCompleted_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n  // listConstructor()\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/remove.js":
/*!***********************!*\
  !*** ./src/remove.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((description) => {\n  const toModify = JSON.parse(localStorage.getItem('tasks'));\n  let ind;\n  toModify.forEach((element) => {\n    if (element.description === description) {\n      ind = element.index;\n    }\n  });\n  toModify.splice(ind - 1, 1);\n  let newIndex = 1;\n  toModify.forEach((element) => {\n    element.index = newIndex;\n    newIndex += 1;\n  });\n\n  const toStorage = JSON.stringify(toModify);\n  localStorage.setItem('tasks', toStorage);\n  const trashCans = document.querySelectorAll('.trash-can');\n  trashCans.forEach((can) => {\n    can.parentElement.remove();\n  });\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/remove.js?");

/***/ }),

/***/ "./src/removeTrash.js":
/*!****************************!*\
  !*** ./src/removeTrash.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _remove_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove.js */ \"./src/remove.js\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const trash = document.querySelector('.trash-can');\n  trash.onclick = () => {\n    (0,_remove_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(trash.previousSibling.value);\n  };\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/removeTrash.js?");

/***/ }),

/***/ "./src/icons/dots.png":
/*!****************************!*\
  !*** ./src/icons/dots.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"7c2a7739078478fa2df6.png\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/dots.png?");

/***/ }),

/***/ "./src/icons/enter.png":
/*!*****************************!*\
  !*** ./src/icons/enter.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cc5a107b9f1659a25da6.png\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/enter.png?");

/***/ }),

/***/ "./src/icons/refresh.png":
/*!*******************************!*\
  !*** ./src/icons/refresh.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"18e6eabe023b44fbf25b.png\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/refresh.png?");

/***/ }),

/***/ "./src/icons/trash.png":
/*!*****************************!*\
  !*** ./src/icons/trash.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"65b082ca4443dd60bd4f.png\";\n\n//# sourceURL=webpack://to-do-list/./src/icons/trash.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);