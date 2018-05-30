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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "Cous");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+8zh":
/*!**********************************!*\
  !*** ./server/doc/row/offset.md ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"offset-\">offset模式</h4>\n<ul>\n<li>设置col的左边距</li>\n</ul>\n";

/***/ }),

/***/ "+YlL":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true */ "evx4");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/addStyles.js */ "2j8j")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "+mnF":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/contents.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./contents.vue?vue&type=style&index=0&lang=css */ "oDyL");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/addStyles.js */ "2j8j")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "+q5c":
/*!********************************************************!*\
  !*** ./server/pages/index.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "nTn7");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "/5he":
/*!***************************************!*\
  !*** ./server/doc/button/htmlType.md ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"htmltype\">htmlType</h4>\n<p>button的html类型，包括button、submit、reset三种类型</p>\n";

/***/ }),

/***/ "/jjP":
/*!****************************************************************!*\
  !*** ./server/pages/input.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./input.vue?vue&type=style&index=0&lang=css */ "IU8k");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "/l5a":
/*!***********************************!*\
  !*** ./server/doc/row/justify.md ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"justify-\">justify用法</h4>\n<ul>\n<li>当row的type设置为flex时，即可设置justify</li>\n<li>有四个参数，start（局左）、end（局右）、center（居中）、space-around（对其）\n  、space-between（两端对其）</li>\n</ul>\n";

/***/ }),

/***/ "/zoJ":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/contents.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./contents.vue?vue&type=style&index=0&lang=css */ "+mnF");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("73841ac2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "04e6":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/menu.vue?vue&type=template&id=387dc710&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("headers"),
      _vm._v(" "),
      _c(
        "contents",
        { attrs: { linkName: _vm.linkName } },
        [
          _c(
            "t-row",
            [
              _c(
                "t-col",
                { attrs: { span: 24 } },
                [
                  _c(
                    "t-menu",
                    {
                      attrs: { "active-name": 1 },
                      on: { "on:select": _vm.onClickHandle1 }
                    },
                    [
                      _c(
                        "t-menuSub",
                        { attrs: { name: 1 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 1")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "t-menuSub",
                        { attrs: { name: 2 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 2")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "t-menuSub",
                        { attrs: { name: 3 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 3")
                          ])
                        ],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "t-row",
            [
              _c(
                "t-col",
                { attrs: { span: 24 } },
                [
                  _c(
                    "t-menu",
                    {
                      attrs: { "active-name": 2 },
                      on: { "on:select": _vm.onClickHandle2 }
                    },
                    [
                      _c(
                        "t-menuSub",
                        { attrs: { name: 1 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 1")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "t-menuSub",
                        { attrs: { name: 2 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 2")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "t-menuSub",
                        { attrs: { name: 3 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 3")
                          ])
                        ],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "t-row",
            [
              _c(
                "t-col",
                { attrs: { span: 24 } },
                [
                  _c(
                    "t-menu",
                    {
                      attrs: { "active-name": 3 },
                      on: { "on:select": _vm.onClickHandle3 }
                    },
                    [
                      _c(
                        "t-menuSub",
                        { attrs: { name: 1 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 1")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "t-menuSub",
                        { attrs: { name: 2 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 2")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "t-menuSub",
                        { attrs: { name: 3 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 3")
                          ])
                        ],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c(
            "t-row",
            [
              _c(
                "t-col",
                { attrs: { span: 8 } },
                [
                  _c(
                    "t-menu",
                    {
                      attrs: { mode: "vertical", "active-name": 3 },
                      on: { "on:select": _vm.onClickHandle4 }
                    },
                    [
                      _c(
                        "t-menuSub",
                        { attrs: { name: 1 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 1")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "t-menuSub",
                        { attrs: { name: 2 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 2")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "t-menuSub",
                        { attrs: { name: 3 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 3")
                          ])
                        ],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "t-col",
                { attrs: { span: 8 } },
                [
                  _c(
                    "t-menu",
                    {
                      attrs: { mode: "vertical", "active-name": 3 },
                      on: { "on:select": _vm.onClickHandle5 }
                    },
                    [
                      _c(
                        "t-menuSub",
                        { attrs: { name: 1 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 1")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "t-menuSub",
                        { attrs: { name: 2 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 2")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "t-menuSub",
                        { attrs: { name: 3 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 3")
                          ])
                        ],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "t-col",
                { attrs: { span: 8 } },
                [
                  _c(
                    "t-menu",
                    {
                      attrs: {
                        width: 300,
                        height: 30,
                        mode: "vertical",
                        "active-name": 3
                      },
                      on: { "on:select": _vm.onClickHandle6 }
                    },
                    [
                      _c(
                        "t-menuSub",
                        { attrs: { name: 1 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 1")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "t-menuSub",
                        { attrs: { name: 2 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 2")
                          ])
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "t-menuSub",
                        { attrs: { name: 3 } },
                        [
                          _c("template", { slot: "title" }, [
                            _vm._v("menuSub 3")
                          ])
                        ],
                        2
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("footers")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "0QUC":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-header-demo[data-v-dbacb37a]{\n    height: 36px;\n    line-height: 36px;\n    background-color: #FFF;\n    color: #000;\n    font-size: 15px;\n    margin-bottom: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "0QfO":
/*!*******************************************************!*\
  !*** ./server/pages/menu.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=script&lang=js */ "YwAc");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0Ss6":
/*!************************************!*\
  !*** ./server/doc/row/static.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-row>\n    <t-col :span='24'>col</t-col>\n</t-row>\n<br>\n<t-row>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n</t-row>\n<br>\n<t-row>\n    <t-col :span='4'>col</t-col>\n    <t-col :span='4'>col</t-col>\n    <t-col :span='4'>col</t-col>\n    <t-col :span='4'>col</t-col>\n    <t-col :span='4'>col</t-col>\n    <t-col :span='4'>col</t-col>\n</t-row>\n<br>\n<t-row>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n</t-row>\n<br>\n<t-row>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n</t-row>\n<br>\n<t-row>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n</t-row>";

/***/ }),

/***/ "13OY":
/*!***********************************************************!*\
  !*** ./server/pages/exapmple.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./exapmple.vue?vue&type=script&lang=js */ "ZSi5");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1Hq0":
/*!*****************************************!*\
  !*** ./server/doc/button/htmlType.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-button htmlType=\"button\">button</t-button>\n<br><br>\n<t-button htmlType=\"submit\">submit</t-button>\n<br><br>\n<t-button htmlType=\"reset\">reset</t-button>";

/***/ }),

/***/ "2j8j":
/*!************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/addStyles.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "7MtX");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "32DF":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "3BtT":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true */ "WE9M");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/addStyles.js */ "2j8j")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "3CKU":
/*!*******************************************************************!*\
  !*** ./server/pages/exapmple.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./exapmple.vue?vue&type=style&index=0&lang=css */ "p4F6");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3Gwo":
/*!**************************************************************!*\
  !*** ./server/pages/input.vue?vue&type=template&id=57c17981 ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_57c17981__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./input.vue?vue&type=template&id=57c17981 */ "6XNA");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_57c17981__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_57c17981__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "3Z28":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/exapmple.vue?vue&type=template&id=72890c97 ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("headers"),
      _vm._v(" "),
      _c(
        "contents",
        { attrs: { linkName: _vm.linkName } },
        [
          _c("t-exapmple", { attrs: { mode: "horizontal", more: "" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
                _c(
                  "t-row",
                  [_c("t-col", { attrs: { span: 24 } }, [_vm._v("col")])],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "markdown" },
              domProps: { textContent: _vm._s(_vm.info) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { textContent: _vm._s(_vm.code) },
              slot: "code"
            })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { mode: "vertical", more: "" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
                _c(
                  "t-row",
                  [_c("t-col", { attrs: { span: 24 } }, [_vm._v("col")])],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "markdown" },
              domProps: { textContent: _vm._s(_vm.info) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { textContent: _vm._s(_vm.code) },
              slot: "code"
            })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("footers")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "40a+":
/*!*************************************!*\
  !*** ./server/doc/button/size.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-button size='tiny'>tiny</t-button>\n<br>\n<br>\n<t-button size='default'>default</t-button>\n<br>\n<br>\n<t-button size='large'>large</t-button>\n<br>\n<br>\n<t-button size='auto' :width='120' :height='50'>auto</t-button>\n<br>\n<br>\n<t-button size='default' long>long</t-button>";

/***/ }),

/***/ "5/ze":
/*!********************************************************!*\
  !*** ./server/pages/input.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./input.vue?vue&type=script&lang=js */ "RblI");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5icY":
/*!*************************************************************************!*\
  !*** ./server/webComponents/contents.vue?vue&type=template&id=3b4b1e2d ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_template_id_3b4b1e2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./contents.vue?vue&type=template&id=3b4b1e2d */ "mygN");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_template_id_3b4b1e2d__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_template_id_3b4b1e2d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "5rES":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true */ "n5py");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("4ccea941", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "6XNA":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/input.vue?vue&type=template&id=57c17981 ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("headers"),
      _vm._v(" "),
      _c(
        "contents",
        { attrs: { linkName: _vm.linkName } },
        [
          _c("h1", [_vm._v("input")]),
          _vm._v(" "),
          _c("h2", [_vm._v("size")]),
          _vm._v(" "),
          _c("p", [_vm._v("defalut")]),
          _vm._v(" "),
          _c("t-input", {
            model: {
              value: _vm.inputValue,
              callback: function($$v) {
                _vm.inputValue = $$v
              },
              expression: "inputValue"
            }
          }),
          _vm._v(" "),
          _c("p", [_vm._v("large")]),
          _vm._v(" "),
          _c("t-input", {
            attrs: { size: "large" },
            model: {
              value: _vm.inputValue,
              callback: function($$v) {
                _vm.inputValue = $$v
              },
              expression: "inputValue"
            }
          }),
          _vm._v(" "),
          _c("p", [_vm._v("small")]),
          _vm._v(" "),
          _c("t-input", {
            attrs: { size: "small" },
            model: {
              value: _vm.inputValue,
              callback: function($$v) {
                _vm.inputValue = $$v
              },
              expression: "inputValue"
            }
          }),
          _vm._v(" "),
          _c("p", [_vm._v("tiny")]),
          _vm._v(" "),
          _c("t-input", {
            attrs: { size: "tiny" },
            model: {
              value: _vm.inputValue,
              callback: function($$v) {
                _vm.inputValue = $$v
              },
              expression: "inputValue"
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("footers")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "6jnl":
/*!*************************************!*\
  !*** ./server/doc/button/type.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-button>default</t-button>\n<br><br>\n<t-button type='text'>text</t-button>\n<br><br>\n<t-button type='warning'>warning</t-button>\n<br><br>\n<t-button type='error'>error</t-button>";

/***/ }),

/***/ "6uJy":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true */ "k6mY");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("347bb7d6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "7/90":
/*!*******************************!*\
  !*** ./server/pages/menu.vue ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_vue_vue_type_template_id_387dc710_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.vue?vue&type=template&id=387dc710&scoped=true */ "Ceic");
/* harmony import */ var _menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.vue?vue&type=script&lang=js */ "0QfO");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _menu_vue_vue_type_style_index_0_id_387dc710_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true */ "mM1R");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_vue_vue_type_template_id_387dc710_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_vue_vue_type_template_id_387dc710_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "387dc710",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "server/pages/menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "7MtX":
/*!*******************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/urls.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "7OQq":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true */ "xOLY");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("49e7511f", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "7Qx8":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/exapmple.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "7iuI":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/footers.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),

/***/ "8G7x":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/headers.vue?vue&type=template&id=dbacb37a&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "t-header",
    { staticClass: "v-header-demo", attrs: { width: 1200 } },
    [_vm._v("header")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "8mW/":
/*!******************************************************************************************!*\
  !*** ./server/pages/row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_style_index_0_id_5f1b6f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true */ "JjjG");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_style_index_0_id_5f1b6f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_style_index_0_id_5f1b6f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_style_index_0_id_5f1b6f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_style_index_0_id_5f1b6f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_style_index_0_id_5f1b6f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "92bu":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/tooltip.vue?vue&type=style&index=0&lang=css ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./tooltip.vue?vue&type=style&index=0&lang=css */ "J/IE");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("4e68b4c6", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "9Oql":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/layout.vue?vue&type=template&id=64c42883&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("headers"),
      _vm._v(" "),
      _c(
        "contents",
        { attrs: { linkName: _vm.linkName } },
        [
          _c("h1", [_vm._v("无sider")]),
          _vm._v(" "),
          _c("t-header", [_vm._v("header")]),
          _vm._v(" "),
          _c(
            "t-layout",
            { staticClass: "demo-content" },
            [
              _c(
                "t-content",
                _vm._l(10, function(i) {
                  return _c("p", {
                    key: i,
                    domProps: { textContent: _vm._s(i) }
                  })
                })
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("t-footer", [_vm._v("footer")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("左sider")]),
          _vm._v(" "),
          _c("t-header", [_vm._v("header")]),
          _vm._v(" "),
          _c(
            "t-layout",
            { staticClass: "demo-content" },
            [
              _c("t-sider", [_vm._v("sider")]),
              _vm._v(" "),
              _c(
                "t-content",
                _vm._l(10, function(i) {
                  return _c("p", {
                    key: i,
                    domProps: { textContent: _vm._s(i) }
                  })
                })
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("t-footer", [_vm._v("footer")]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("左sider")]),
          _vm._v(" "),
          _c(
            "t-layout",
            [
              _c("t-sider", [_vm._v("sider")]),
              _vm._v(" "),
              _c(
                "t-layout",
                { staticClass: "demo-content" },
                [
                  _c("t-header", [_vm._v("header")]),
                  _vm._v(" "),
                  _c(
                    "t-content",
                    _vm._l(10, function(i) {
                      return _c("p", {
                        key: i,
                        domProps: { textContent: _vm._s(i) }
                      })
                    })
                  ),
                  _vm._v(" "),
                  _c("t-footer", [_vm._v("footer")])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("右sider")]),
          _vm._v(" "),
          _c("t-header", [_vm._v("header")]),
          _vm._v(" "),
          _c(
            "t-layout",
            { staticClass: "demo-content" },
            [
              _c(
                "t-content",
                _vm._l(10, function(i) {
                  return _c("p", {
                    key: i,
                    domProps: { textContent: _vm._s(i) }
                  })
                })
              ),
              _vm._v(" "),
              _c("t-sider", { attrs: { width: "400" } }, [_vm._v("sider")])
            ],
            1
          ),
          _vm._v(" "),
          _c("t-footer", [_vm._v("footer")])
        ],
        1
      ),
      _vm._v(" "),
      _c("footers")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "9QQ4":
/*!*****************************************************************************************!*\
  !*** ./server/pages/layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_64c42883_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true */ "7OQq");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_64c42883_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_64c42883_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_64c42883_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_64c42883_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_64c42883_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ADkW":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/tooltip.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            linkName: '气泡提示',
            msg: '气泡提示，气泡提示，气泡提示，<br>气泡提示，气泡提示。',
            isOpen: true
        };
    }
};

/***/ }),

/***/ "Akr8":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/row-col.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _static = __webpack_require__(/*! ../doc/row/static.html */ "0Ss6");

var _static2 = _interopRequireDefault(_static);

var _static3 = __webpack_require__(/*! ../doc/row/static.md */ "RY7/");

var _static4 = _interopRequireDefault(_static3);

var _flex = __webpack_require__(/*! ../doc/row/flex.html */ "amTn");

var _flex2 = _interopRequireDefault(_flex);

var _flex3 = __webpack_require__(/*! ../doc/row/flex.md */ "sU2q");

var _flex4 = _interopRequireDefault(_flex3);

var _justify = __webpack_require__(/*! ../doc/row/justify.html */ "aniP");

var _justify2 = _interopRequireDefault(_justify);

var _justify3 = __webpack_require__(/*! ../doc/row/justify.md */ "/l5a");

var _justify4 = _interopRequireDefault(_justify3);

var _align = __webpack_require__(/*! ../doc/row/align.html */ "tndz");

var _align2 = _interopRequireDefault(_align);

var _align3 = __webpack_require__(/*! ../doc/row/align.md */ "c3CU");

var _align4 = _interopRequireDefault(_align3);

var _gutter = __webpack_require__(/*! ../doc/row/gutter.html */ "YE0Q");

var _gutter2 = _interopRequireDefault(_gutter);

var _gutter3 = __webpack_require__(/*! ../doc/row/gutter.md */ "O/Wn");

var _gutter4 = _interopRequireDefault(_gutter3);

var _offset = __webpack_require__(/*! ../doc/row/offset.html */ "nnaN");

var _offset2 = _interopRequireDefault(_offset);

var _offset3 = __webpack_require__(/*! ../doc/row/offset.md */ "+8zh");

var _offset4 = _interopRequireDefault(_offset3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            linkName: '栅栏',
            staticHtml: _static2.default,
            staticMd: _static4.default,
            flexHtml: _flex2.default,
            flexMd: _flex4.default,
            justifyHtml: _justify2.default,
            justifyMd: _justify4.default,
            alignHtml: _align2.default,
            alignMd: _align4.default,
            gutterHtml: _gutter2.default,
            gutterMd: _gutter4.default,
            offsetHtml: _offset2.default,
            offsetMd: _offset4.default
        };
    }
};

/***/ }),

/***/ "AqnB":
/*!*********************************!*\
  !*** ./server/pages/layout.vue ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_vue_vue_type_template_id_64c42883_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.vue?vue&type=template&id=64c42883&scoped=true */ "ZI5K");
/* harmony import */ var _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.vue?vue&type=script&lang=js */ "lmkL");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _layout_vue_vue_type_style_index_0_id_64c42883_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true */ "9QQ4");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _layout_vue_vue_type_template_id_64c42883_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _layout_vue_vue_type_template_id_64c42883_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "64c42883",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "server/pages/layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "C1Bu":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/tooltip.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "C1M3":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/contents.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _routes = __webpack_require__(/*! ../routes.js */ "udWi");

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        linkName: {
            type: String,
            default: '首页'
        }
    },
    data: function data() {
        return {
            routes: _routes2.default
        };
    },
    methods: {
        routerHandle: function routerHandle(name) {
            this.routes.forEach(function (val) {
                if (name == val.name) {
                    this.$router.push({
                        path: val.path
                    });
                }
            }.bind(this));
        }
    }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "C1P+":
/*!**************************************************************************************************!*\
  !*** ./server/webComponents/headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_style_index_0_id_dbacb37a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true */ "u7+q");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_style_index_0_id_dbacb37a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_style_index_0_id_dbacb37a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_style_index_0_id_dbacb37a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_style_index_0_id_dbacb37a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_style_index_0_id_dbacb37a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Ceic":
/*!*************************************************************************!*\
  !*** ./server/pages/menu.vue?vue&type=template&id=387dc710&scoped=true ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_387dc710_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=template&id=387dc710&scoped=true */ "04e6");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_387dc710_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_387dc710_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "Cous":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _routes = __webpack_require__(/*! ./routes.js */ "udWi");

var _routes2 = _interopRequireDefault(_routes);

var _contents = __webpack_require__(/*! ./webComponents/contents.vue */ "wQ+W");

var _contents2 = _interopRequireDefault(_contents);

var _headers = __webpack_require__(/*! ./webComponents/headers.vue */ "Jmx2");

var _headers2 = _interopRequireDefault(_headers);

var _footers = __webpack_require__(/*! ./webComponents/footers.vue */ "KHGg");

var _footers2 = _interopRequireDefault(_footers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.config.devtools = true;

Vue.use(VueRouter);

var components = {
    contents: _contents2.default,
    headers: _headers2.default,
    footers: _footers2.default
};

function install(Vue) {
    Object.keys(components).forEach(function (value) {
        Vue.component(value, components[value]);
    });
}

install(Vue);

var router = new VueRouter({
    routes: _routes2.default
});

var app = new Vue({
    router: router
}).$mount('#app');

/***/ }),

/***/ "EGq8":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/table.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            linkName: '表格'
        };
    }
};

/***/ }),

/***/ "F6oO":
/*!**************************************************************************!*\
  !*** ./server/pages/table.vue?vue&type=template&id=7b7cbb85&scoped=true ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_7b7cbb85_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./table.vue?vue&type=template&id=7b7cbb85&scoped=true */ "e9VK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_7b7cbb85_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_7b7cbb85_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "FlKb":
/*!**************************************************************************!*\
  !*** ./server/pages/index.vue?vue&type=template&id=7c3cf2ee&scoped=true ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7c3cf2ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7c3cf2ee&scoped=true */ "Yf5q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7c3cf2ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7c3cf2ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "G/MH":
/*!**************************************!*\
  !*** ./server/doc/button/click.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\n    <t-button size='default' @click=\"handleClick('default')\">click</t-button>\n</template>\n<script>\n    export default{\n        methods:{\n            handleClick:function(val){\n                alert(val);\n            }\n        }\n    }\n</script>";

/***/ }),

/***/ "GJM7":
/*!************************************!*\
  !*** ./server/doc/button/click.md ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"click-\">click事件</h4>\n<p>在button上绑定@click事件用来触发回调事件，可以带入参数</p>\n";

/***/ }),

/***/ "Gdal":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true */ "+YlL");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("2a2aef48", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "GgXm":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-header[data-v-64c42883],.v-footer[data-v-64c42883]{\n    text-align: center;\n    height: 36px;\n    line-height: 36px;\n    background: #000;\n    color: #FFF;\n    font-size: 12px;\n}\n.v-sider[data-v-64c42883]{\n    background: rgba(0,153,229,.7);\n}\n.v-content[data-v-64c42883]{\n    background: rgba(0, 117, 175, 0.9);\n}\n", ""]);

// exports


/***/ }),

/***/ "Gpx9":
/*!******************************************************************!*\
  !*** ./server/webComponents/footers.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./footers.vue?vue&type=script&lang=js */ "7iuI");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "I3Oi":
/*!********************************!*\
  !*** ./server/pages/table.vue ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_vue_vue_type_template_id_7b7cbb85_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=7b7cbb85&scoped=true */ "F6oO");
/* harmony import */ var _table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js */ "qj0Z");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _table_vue_vue_type_style_index_0_id_7b7cbb85_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true */ "RFXK");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_vue_vue_type_template_id_7b7cbb85_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_vue_vue_type_template_id_7b7cbb85_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7b7cbb85",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "server/pages/table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "IU8k":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/input.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./input.vue?vue&type=style&index=0&lang=css */ "SkBt");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("299c1458", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "Ia4R":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/layout.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            linkName: '布局'
        };
    }
};

/***/ }),

/***/ "J/IE":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/tooltip.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./tooltip.vue?vue&type=style&index=0&lang=css */ "C1Bu");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/addStyles.js */ "2j8j")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "Ja4b":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/row-col.vue?vue&type=template&id=5f1b6f84&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("headers"),
      _vm._v(" "),
      _c(
        "contents",
        { staticClass: "demo-content", attrs: { linkName: _vm.linkName } },
        [
          _c("h1", [_vm._v("基础用法栅栏系统")]),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { mode: "vertical", more: "" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
                _c(
                  "t-row",
                  [_c("t-col", { attrs: { span: 24 } }, [_vm._v("col")])],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-row",
                  [
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-row",
                  [
                    _c("t-col", { attrs: { span: 4 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 4 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 4 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 4 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 4 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 4 } }, [_vm._v("col")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-row",
                  [
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-row",
                  [
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-row",
                  [
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "markdown" },
              domProps: { textContent: _vm._s(_vm.staticMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { textContent: _vm._s(_vm.staticHtml) },
              slot: "code"
            })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("基础模式下的offset")]),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { mode: "vertical" } }, [
            _c("div", { attrs: { slot: "view" }, slot: "view" }),
            _vm._v(" "),
            _c("textarea", { attrs: { slot: "markdown" }, slot: "markdown" }),
            _vm._v(" "),
            _c("textarea", { attrs: { slot: "code" }, slot: "code" })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("基础模式下的gutter")]),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { mode: "vertical" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
                _c(
                  "t-row",
                  { attrs: { gutter: 10 } },
                  [
                    _c(
                      "t-col",
                      {
                        staticStyle: { background: "none" },
                        attrs: { offset: 1, span: 4 }
                      },
                      [
                        _c(
                          "div",
                          { staticStyle: { background: "rgba(0,153,229,.7)" } },
                          [_vm._v("col")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "t-col",
                      {
                        staticStyle: { background: "none" },
                        attrs: { offset: 2, span: 4 }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              background: "rgba(0, 117, 175, 0.9)"
                            }
                          },
                          [_vm._v("col")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "t-col",
                      {
                        staticStyle: { background: "none" },
                        attrs: { offset: 3, span: 4 }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              background: "rgba(0, 117, 175, 0.9)"
                            }
                          },
                          [_vm._v("col")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "t-col",
                      {
                        staticStyle: { background: "none" },
                        attrs: { offset: 4, span: 4 }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              background: "rgba(0, 117, 175, 0.9)"
                            }
                          },
                          [_vm._v("col")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "t-col",
                      {
                        staticStyle: { background: "none" },
                        attrs: { offset: 5, span: 4 }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              background: "rgba(0, 117, 175, 0.9)"
                            }
                          },
                          [_vm._v("col")]
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "t-col",
                      {
                        staticStyle: { background: "none" },
                        attrs: { offset: 6, span: 4 }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticStyle: {
                              background: "rgba(0, 117, 175, 0.9)"
                            }
                          },
                          [_vm._v("col")]
                        )
                      ]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "markdown" },
              domProps: { textContent: _vm._s(_vm.offsetMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { textContent: _vm._s(_vm.offsetHtml) },
              slot: "code"
            })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { mode: "vertical", more: "" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
                _c(
                  "t-row",
                  { attrs: { type: "flex" } },
                  [
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 3 } }, [_vm._v("col")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-row",
                  { attrs: { type: "flex" } },
                  [
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 2 } }, [_vm._v("col")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-row",
                  { attrs: { type: "flex" } },
                  [
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 1 } }, [_vm._v("col")])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "markdown" },
              domProps: { textContent: _vm._s(_vm.flexMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { textContent: _vm._s(_vm.flexHtml) },
              slot: "code"
            })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("flex模式——justify用法")]),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { mode: "vertical", more: "" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
                _c(
                  "t-row",
                  { attrs: { type: "flex", justify: "start" } },
                  [
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-row",
                  { attrs: { type: "flex", justify: "end" } },
                  [
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-row",
                  { attrs: { type: "flex", justify: "center" } },
                  [
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-row",
                  { attrs: { type: "flex", justify: "space-around" } },
                  [
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-row",
                  { attrs: { type: "flex", justify: "space-between" } },
                  [
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 5 } }, [_vm._v("col")])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "markdown" },
              domProps: { textContent: _vm._s(_vm.justifyMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { textContent: _vm._s(_vm.justifyHtml) },
              slot: "code"
            })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("flex模式——align用法")]),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { mode: "vertical" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
                _c(
                  "t-row",
                  { attrs: { type: "flex", align: "top" } },
                  [
                    _c("t-col", { attrs: { span: 6 } }, [
                      _c("div", { staticStyle: { height: "140px" } }, [
                        _vm._v("col")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 6 } }, [
                      _c("div", { staticStyle: { height: "100px" } }, [
                        _vm._v("col")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 6 } }, [
                      _c("div", [_vm._v("col")])
                    ]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 6 } }, [
                      _c("div", { staticStyle: { height: "80px" } }, [
                        _vm._v("col")
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-row",
                  {
                    attrs: { type: "flex", justify: "center", align: "middle" }
                  },
                  [
                    _c("t-col", { attrs: { span: 6 } }, [
                      _c("div", { staticStyle: { height: "140px" } }, [
                        _vm._v("col")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 6 } }, [
                      _c("div", { staticStyle: { height: "100px" } }, [
                        _vm._v("col")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 6 } }, [
                      _c("div", [_vm._v("col")])
                    ]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 6 } }, [
                      _c("div", { staticStyle: { height: "80px" } }, [
                        _vm._v("col")
                      ])
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-row",
                  {
                    attrs: { type: "flex", justify: "center", align: "bottom" }
                  },
                  [
                    _c("t-col", { attrs: { span: 6 } }, [
                      _c("div", { staticStyle: { height: "140px" } }, [
                        _vm._v("col")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 6 } }, [
                      _c("div", { staticStyle: { height: "100px" } }, [
                        _vm._v("col")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 6 } }, [
                      _c("div", [_vm._v("col")])
                    ]),
                    _vm._v(" "),
                    _c("t-col", { attrs: { span: 6 } }, [
                      _c("div", { staticStyle: { height: "80px" } }, [
                        _vm._v("col")
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "markdown" },
              domProps: { textContent: _vm._s(_vm.alignMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { textContent: _vm._s(_vm.alignHtml) },
              slot: "code"
            })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("footers")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "JjjG":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true */ "3BtT");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("193d0a85", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "Jmx2":
/*!******************************************!*\
  !*** ./server/webComponents/headers.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headers_vue_vue_type_template_id_dbacb37a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headers.vue?vue&type=template&id=dbacb37a&scoped=true */ "bGW4");
/* harmony import */ var _headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./headers.vue?vue&type=script&lang=js */ "u6MD");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _headers_vue_vue_type_style_index_0_id_dbacb37a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true */ "C1P+");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _headers_vue_vue_type_template_id_dbacb37a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _headers_vue_vue_type_template_id_dbacb37a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dbacb37a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "server/webComponents/headers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "KHGg":
/*!******************************************!*\
  !*** ./server/webComponents/footers.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footers_vue_vue_type_template_id_e5e0e816_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footers.vue?vue&type=template&id=e5e0e816&scoped=true */ "tXbM");
/* harmony import */ var _footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footers.vue?vue&type=script&lang=js */ "Gpx9");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _footers_vue_vue_type_style_index_0_id_e5e0e816_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true */ "lP3g");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _footers_vue_vue_type_template_id_e5e0e816_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _footers_vue_vue_type_template_id_e5e0e816_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e5e0e816",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "server/webComponents/footers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Ku6K":
/*!***********************************!*\
  !*** ./server/pages/exapmple.vue ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exapmple_vue_vue_type_template_id_72890c97__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exapmple.vue?vue&type=template&id=72890c97 */ "rKaz");
/* harmony import */ var _exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exapmple.vue?vue&type=script&lang=js */ "13OY");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _exapmple_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exapmple.vue?vue&type=style&index=0&lang=css */ "3CKU");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _exapmple_vue_vue_type_template_id_72890c97__WEBPACK_IMPORTED_MODULE_0__["render"],
  _exapmple_vue_vue_type_template_id_72890c97__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "server/pages/exapmple.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "LyNM":
/*!****************************************************************!*\
  !*** ./server/pages/tooltip.vue?vue&type=template&id=1f1ebd0c ***!
  \****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_template_id_1f1ebd0c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./tooltip.vue?vue&type=template&id=1f1ebd0c */ "U6Hs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_template_id_1f1ebd0c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_template_id_1f1ebd0c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "NUMJ":
/*!*****************************************!*\
  !*** ./server/doc/button/disabled.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-button size='default' :disabled=\"true\">静止选中</t-button>\n";

/***/ }),

/***/ "NyLy":
/*!****************************************************************************************!*\
  !*** ./server/pages/index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3cf2ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true */ "6uJy");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3cf2ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3cf2ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3cf2ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3cf2ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3cf2ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "O/Wn":
/*!**********************************!*\
  !*** ./server/doc/row/gutter.md ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"-\">每一列之间的间隔</h4>\n<ul>\n<li>在row上面设置每一个col之间的间隔</li>\n</ul>\n";

/***/ }),

/***/ "OjnA":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/button.vue?vue&type=style&index=0&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./button.vue?vue&type=style&index=0&lang=css */ "sm6O");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("16c40b48", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "PrOE":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/button.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _size = __webpack_require__(/*! ../doc/button/size.html */ "40a+");

var _size2 = _interopRequireDefault(_size);

var _size3 = __webpack_require__(/*! ../doc/button/size.md */ "XKov");

var _size4 = _interopRequireDefault(_size3);

var _disabled = __webpack_require__(/*! ../doc/button/disabled.html */ "NUMJ");

var _disabled2 = _interopRequireDefault(_disabled);

var _disabled3 = __webpack_require__(/*! ../doc/button/disabled.md */ "kQVV");

var _disabled4 = _interopRequireDefault(_disabled3);

var _type = __webpack_require__(/*! ../doc/button/type.html */ "6jnl");

var _type2 = _interopRequireDefault(_type);

var _type3 = __webpack_require__(/*! ../doc/button/type.md */ "qI5Q");

var _type4 = _interopRequireDefault(_type3);

var _click = __webpack_require__(/*! ../doc/button/click.html */ "G/MH");

var _click2 = _interopRequireDefault(_click);

var _click3 = __webpack_require__(/*! ../doc/button/click.md */ "GJM7");

var _click4 = _interopRequireDefault(_click3);

var _htmlType = __webpack_require__(/*! ../doc/button/htmlType.html */ "1Hq0");

var _htmlType2 = _interopRequireDefault(_htmlType);

var _htmlType3 = __webpack_require__(/*! ../doc/button/htmlType.md */ "/5he");

var _htmlType4 = _interopRequireDefault(_htmlType3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            type: 'submit',
            linkName: '按钮',
            sizeHtml: _size2.default,
            sizeMd: _size4.default,
            disabledHtml: _disabled2.default,
            disabledMd: _disabled4.default,
            typeHtml: _type2.default,
            typeMd: _type4.default,
            clickHtml: _click2.default,
            clickMd: _click4.default,
            htmlTypeHtml: _htmlType2.default,
            htmlTypeMd: _htmlType4.default
        };
    },
    methods: {
        handleClick: function handleClick(val) {
            alert(val);
        }
    }
};

/***/ }),

/***/ "QdjM":
/*!**********************************************************!*\
  !*** ./server/pages/tooltip.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./tooltip.vue?vue&type=script&lang=js */ "ADkW");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "RFXK":
/*!****************************************************************************************!*\
  !*** ./server/pages/table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_7b7cbb85_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true */ "5rES");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_7b7cbb85_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_7b7cbb85_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_7b7cbb85_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_7b7cbb85_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_7b7cbb85_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "RH0y":
/*!*************************************!*\
  !*** ./server/doc/exapmple-info.md ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"zhoujingwen\">zhoujingwen</h4>\n<p>如果123123</p>\n";

/***/ }),

/***/ "RY7/":
/*!**********************************!*\
  !*** ./server/doc/row/static.md ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"24-\">24等分栅栏系统</h2>\n<ul>\n<li>row为水平方向创建一行，col为垂直方向等分一行，col最大<code>span</code>等分为24等分。</li>\n</ul>\n";

/***/ }),

/***/ "RblI":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/input.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            inputValue: '',
            linkName: '输入框'
        };
    },
    watch: {
        inputValue: function inputValue(value) {
            console.log(value);
        }
    }
};

/***/ }),

/***/ "Rv9s":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/button.vue?vue&type=template&id=65c6108b ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("headers"),
      _vm._v(" "),
      _c(
        "contents",
        { attrs: { linkName: _vm.linkName } },
        [
          _c("h1", [_vm._v("按钮-size")]),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { mode: "vertical" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
                _c("t-button", { attrs: { size: "tiny" } }, [_vm._v("tiny")]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("t-button", { attrs: { size: "default" } }, [
                  _vm._v("default")
                ]),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-button",
                  { attrs: { size: "large", htmlType: _vm.type } },
                  [_vm._v("large")]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c(
                  "t-button",
                  { attrs: { size: "auto", width: 120, height: 50 } },
                  [_vm._v("auto")]
                ),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("br"),
                _vm._v(" "),
                _c("t-button", { attrs: { size: "default", long: "" } }, [
                  _vm._v("long")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.sizeMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { innerHTML: _vm._s(_vm.sizeHtml) },
              slot: "code"
            })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("按钮-disabled")]),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { mode: "vertical" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
                _c("t-button", [_vm._v("default")]),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c("t-button", { attrs: { type: "text" } }, [_vm._v("text")]),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c("t-button", { attrs: { type: "warning" } }, [
                  _vm._v("warning")
                ]),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c("t-button", { attrs: { type: "error" } }, [_vm._v("error")])
              ],
              1
            ),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.typeMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { innerHTML: _vm._s(_vm.typeHtml) },
              slot: "code"
            })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("按钮-htmlType")]),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { mode: "vertical" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
                _c("t-button", { attrs: { htmlType: "button" } }, [
                  _vm._v("button")
                ]),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c("t-button", { attrs: { htmlType: "submit" } }, [
                  _vm._v("submit")
                ]),
                _vm._v(" "),
                _c("br"),
                _c("br"),
                _vm._v(" "),
                _c("t-button", { attrs: { htmlType: "reset" } }, [
                  _vm._v("reset")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.htmlTypeMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { innerHTML: _vm._s(_vm.htmlTypeHtml) },
              slot: "code"
            })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("按钮-click")]),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { mode: "vertical" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
                _c(
                  "t-button",
                  {
                    attrs: { size: "default" },
                    on: {
                      click: function($event) {
                        _vm.handleClick("default")
                      }
                    }
                  },
                  [_vm._v("click")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.clickMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { innerHTML: _vm._s(_vm.clickHtml) },
              slot: "code"
            })
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("footers")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "SkBt":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/input.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./input.vue?vue&type=style&index=0&lang=css */ "kTEy");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/addStyles.js */ "2j8j")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "TZ3a":
/*!**********************************************************!*\
  !*** ./server/pages/row-col.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./row-col.vue?vue&type=script&lang=js */ "Akr8");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "U6Hs":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/tooltip.vue?vue&type=template&id=1f1ebd0c ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("headers"),
      _vm._v(" "),
      _c(
        "contents",
        { attrs: { linkName: _vm.linkName } },
        [
          _c(
            "t-row",
            {
              staticStyle: { "text-align": "center", "margin-bottom": "10px" }
            },
            [
              _c("t-col", { attrs: { span: 2 } }, [
                _vm._v("\n                 \n            ")
              ]),
              _vm._v(" "),
              _c(
                "t-col",
                { attrs: { span: 2 } },
                [
                  _c(
                    "t-button",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.top-start",
                          value: _vm.msg,
                          expression: "msg",
                          modifiers: { "top-start": true }
                        }
                      ],
                      attrs: { size: "tiny" }
                    },
                    [_vm._v("上左")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "t-col",
                { attrs: { span: 2 } },
                [
                  _c(
                    "t-button",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.top",
                          value: _vm.msg,
                          expression: "msg",
                          modifiers: { top: true }
                        }
                      ],
                      attrs: { size: "tiny" }
                    },
                    [_vm._v("上中")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "t-col",
                { attrs: { span: 2 } },
                [
                  _c(
                    "t-button",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.top-end",
                          value: _vm.msg,
                          expression: "msg",
                          modifiers: { "top-end": true }
                        }
                      ],
                      attrs: { size: "tiny" }
                    },
                    [_vm._v("上右")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("t-col", { attrs: { span: 2 } }, [
                _vm._v("\n                 \n            ")
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "t-row",
            {
              staticStyle: { "text-align": "center", "margin-bottom": "10px" }
            },
            [
              _c(
                "t-col",
                { attrs: { span: 2 } },
                [
                  _c(
                    "t-button",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.left-start",
                          value: _vm.msg,
                          expression: "msg",
                          modifiers: { "left-start": true }
                        }
                      ],
                      attrs: { size: "tiny" }
                    },
                    [_vm._v("左上")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("t-col", { attrs: { span: 2 } }, [
                _vm._v("\n                 \n            ")
              ]),
              _vm._v(" "),
              _c("t-col", { attrs: { span: 2 } }, [
                _vm._v("\n                 \n            ")
              ]),
              _vm._v(" "),
              _c("t-col", { attrs: { span: 2 } }, [
                _vm._v("\n                 \n            ")
              ]),
              _vm._v(" "),
              _c(
                "t-col",
                { attrs: { span: 2 } },
                [
                  _c(
                    "t-button",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.right-start",
                          value: _vm.msg,
                          expression: "msg",
                          modifiers: { "right-start": true }
                        }
                      ],
                      attrs: { size: "tiny" }
                    },
                    [_vm._v("右上")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "t-row",
            {
              staticStyle: { "text-align": "center", "margin-bottom": "10px" }
            },
            [
              _c(
                "t-col",
                { attrs: { span: 2 } },
                [
                  _c(
                    "t-button",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.left",
                          value: _vm.msg,
                          expression: "msg",
                          modifiers: { left: true }
                        }
                      ],
                      attrs: { size: "tiny" }
                    },
                    [_vm._v("左中")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("t-col", { attrs: { span: 2 } }, [
                _vm._v("\n                 \n            ")
              ]),
              _vm._v(" "),
              _c("t-col", { attrs: { span: 2 } }, [
                _vm._v("\n                 \n            ")
              ]),
              _vm._v(" "),
              _c("t-col", { attrs: { span: 2 } }, [
                _vm._v("\n                 \n            ")
              ]),
              _vm._v(" "),
              _c(
                "t-col",
                { attrs: { span: 2 } },
                [
                  _c(
                    "t-button",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.right",
                          value: _vm.msg,
                          expression: "msg",
                          modifiers: { right: true }
                        }
                      ],
                      attrs: { size: "tiny" }
                    },
                    [_vm._v("右中")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "t-row",
            {
              staticStyle: { "text-align": "center", "margin-bottom": "10px" }
            },
            [
              _c(
                "t-col",
                { attrs: { span: 2 } },
                [
                  _c(
                    "t-button",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.left-end",
                          value: _vm.msg,
                          expression: "msg",
                          modifiers: { "left-end": true }
                        }
                      ],
                      attrs: { size: "tiny" }
                    },
                    [_vm._v("左下")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("t-col", { attrs: { span: 2 } }, [
                _vm._v("\n                 \n            ")
              ]),
              _vm._v(" "),
              _c("t-col", { attrs: { span: 2 } }, [
                _vm._v("\n                 \n            ")
              ]),
              _vm._v(" "),
              _c("t-col", { attrs: { span: 2 } }, [
                _vm._v("\n                 \n            ")
              ]),
              _vm._v(" "),
              _c(
                "t-col",
                { attrs: { span: 2 } },
                [
                  _c(
                    "t-button",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.right-end",
                          value: _vm.msg,
                          expression: "msg",
                          modifiers: { "right-end": true }
                        }
                      ],
                      attrs: { size: "tiny" }
                    },
                    [_vm._v("右下")]
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "t-row",
            {
              staticStyle: { "text-align": "center", "margin-bottom": "10px" }
            },
            [
              _c("t-col", { attrs: { span: 2 } }, [
                _vm._v("\n                 \n            ")
              ]),
              _vm._v(" "),
              _c(
                "t-col",
                { attrs: { span: 2 } },
                [
                  _c(
                    "t-button",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.bottom-start",
                          value: _vm.msg,
                          expression: "msg",
                          modifiers: { "bottom-start": true }
                        }
                      ],
                      attrs: { size: "tiny" }
                    },
                    [_vm._v("下左")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "t-col",
                { attrs: { span: 2 } },
                [
                  _c(
                    "t-button",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.bottom",
                          value: _vm.msg,
                          expression: "msg",
                          modifiers: { bottom: true }
                        }
                      ],
                      attrs: { size: "tiny" }
                    },
                    [_vm._v("下中")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "t-col",
                { attrs: { span: 2 } },
                [
                  _c(
                    "t-button",
                    {
                      directives: [
                        {
                          name: "tooltip",
                          rawName: "v-tooltip.bottom-end",
                          value: _vm.msg,
                          expression: "msg",
                          modifiers: { "bottom-end": true }
                        }
                      ],
                      attrs: { size: "tiny" }
                    },
                    [_vm._v("下右")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("t-col", { attrs: { span: 2 } }, [
                _vm._v("\n                 \n            ")
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("footers")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "UVHL":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/exapmple.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./exapmple.vue?vue&type=style&index=0&lang=css */ "7Qx8");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/addStyles.js */ "2j8j")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "UtF8":
/*!****************************************************************************!*\
  !*** ./server/pages/row-col.vue?vue&type=template&id=5f1b6f84&scoped=true ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_template_id_5f1b6f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./row-col.vue?vue&type=template&id=5f1b6f84&scoped=true */ "Ja4b");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_template_id_5f1b6f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_template_id_5f1b6f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "VwIj":
/*!*********************************!*\
  !*** ./server/pages/button.vue ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_vue_vue_type_template_id_65c6108b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.vue?vue&type=template&id=65c6108b */ "XIx+");
/* harmony import */ var _button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.vue?vue&type=script&lang=js */ "wUeT");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _button_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.vue?vue&type=style&index=0&lang=css */ "frx2");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _button_vue_vue_type_template_id_65c6108b__WEBPACK_IMPORTED_MODULE_0__["render"],
  _button_vue_vue_type_template_id_65c6108b__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "server/pages/button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "WE9M":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.demo-content .v-col[data-v-5f1b6f84],.v-col div[data-v-5f1b6f84]{\n    font-size: 12px;\n    line-height: 3;\n    text-align: center;\n    color: #FFF;\n    background: rgba(0,153,229,.7);\n}\n.demo-content .v-col[data-v-5f1b6f84]:nth-child(odd),.v-col:nth-child(odd) div[data-v-5f1b6f84]{\n    background: rgba(0, 117, 175, 0.9);\n}\n", ""]);

// exports


/***/ }),

/***/ "XIx+":
/*!***************************************************************!*\
  !*** ./server/pages/button.vue?vue&type=template&id=65c6108b ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_65c6108b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./button.vue?vue&type=template&id=65c6108b */ "Rv9s");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_65c6108b__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_65c6108b__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "XKov":
/*!***********************************!*\
  !*** ./server/doc/button/size.md ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"size-\">size选项定义大小</h4>\n<p>基础选项：ting（小）、default（默认）、large（大）</p>\n<p>宽度自适应选项：long，可以和size中除了auto选项配合使用</p>\n<p>自定义宽高：auto，配合widht和height一起使用</p>\n";

/***/ }),

/***/ "XPSw":
/*!*************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "gec1");
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(_listToStyles__WEBPACK_IMPORTED_MODULE_0__["default"])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ "XQBI":
/*!*******************************************************************!*\
  !*** ./server/webComponents/contents.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./contents.vue?vue&type=script&lang=js */ "C1M3");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "YE0Q":
/*!************************************!*\
  !*** ./server/doc/row/gutter.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-row :gutter=\"10\">\n    <t-col :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0,153,229,.7)\">col</div></t-col>\n    <t-col :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n    <t-col :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n    <t-col :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n    <t-col :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n    <t-col :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n</t-row>";

/***/ }),

/***/ "Yf5q":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/index.vue?vue&type=template&id=7c3cf2ee&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("headers"),
      _vm._v(" "),
      _c("contents", { attrs: { linkName: _vm.linkName } }, [_vm._v("index")]),
      _vm._v(" "),
      _c("footers")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "YwAc":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/menu.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            linkName: '导航'
        };
    },
    methods: {
        onClickHandle1: function onClickHandle1(val) {
            console.group('onClickHandle1');
            console.log(val);
            console.groupEnd();
        },
        onClickHandle2: function onClickHandle2(val) {
            console.group('onClickHandle2');
            console.log(val);
            console.groupEnd();
        },
        onClickHandle3: function onClickHandle3(val) {
            console.group('onClickHandle3');
            console.log(val);
            console.groupEnd();
        },
        onClickHandle4: function onClickHandle4(val) {
            console.group('onClickHandle4');
            console.log(val);
            console.groupEnd();
        },
        onClickHandle5: function onClickHandle5(val) {
            console.group('onClickHandle5');
            console.log(val);
            console.groupEnd();
        },
        onClickHandle6: function onClickHandle6(val) {
            console.group('onClickHandle6');
            console.log(val);
            console.groupEnd();
        }
    }
};

/***/ }),

/***/ "ZI5K":
/*!***************************************************************************!*\
  !*** ./server/pages/layout.vue?vue&type=template&id=64c42883&scoped=true ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_64c42883_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=template&id=64c42883&scoped=true */ "9Oql");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_64c42883_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_64c42883_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "ZSi5":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/exapmple.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _exapmpleInfo = __webpack_require__(/*! ../doc/exapmple-info.md */ "RH0y");

var _exapmpleInfo2 = _interopRequireDefault(_exapmpleInfo);

var _exapmpleCode = __webpack_require__(/*! ../doc/exapmple-code.md */ "nMPc");

var _exapmpleCode2 = _interopRequireDefault(_exapmpleCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            linkName: '例子展示',
            info: _exapmpleInfo2.default,
            code: _exapmpleCode2.default
        };
    }
};

/***/ }),

/***/ "amTn":
/*!**********************************!*\
  !*** ./server/doc/row/flex.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-row type='flex'>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n</t-row>\n<br>\n<t-row type='flex'>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n</t-row>\n<br>\n<t-row type='flex'>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n</t-row>";

/***/ }),

/***/ "aniP":
/*!*************************************!*\
  !*** ./server/doc/row/justify.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-row type='flex' justify='start'>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n</t-row>\n<br>\n<t-row type='flex' justify='end'>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n</t-row>\n<br>\n<t-row type='flex' justify='center'>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n</t-row>\n<br>\n<t-row type='flex' justify='space-around'>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n</t-row>\n<br>\n<t-row type='flex' justify='space-between'>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n</t-row>";

/***/ }),

/***/ "bGW4":
/*!************************************************************************************!*\
  !*** ./server/webComponents/headers.vue?vue&type=template&id=dbacb37a&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_template_id_dbacb37a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./headers.vue?vue&type=template&id=dbacb37a&scoped=true */ "8G7x");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_template_id_dbacb37a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_template_id_dbacb37a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "btFE":
/*!**************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "c3CU":
/*!*********************************!*\
  !*** ./server/doc/row/align.md ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"align-\">align用法</h4>\n<ul>\n<li>当row的type设置为flex时，即可设置align</li>\n<li>有三个参数，top（局上）、middle（局中）、bottom（居下）</li>\n</ul>\n";

/***/ }),

/***/ "e9VK":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/table.vue?vue&type=template&id=7b7cbb85&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("headers"),
      _vm._v(" "),
      _c("contents", { attrs: { linkName: _vm.linkName } }, [
        _c(
          "div",
          { staticStyle: { "padding-right": "20px" } },
          [
            _c(
              "t-table",
              { attrs: { width: [10, 10, 10, 20, 25, 30] } },
              [
                _c(
                  "t-thead",
                  [
                    _c(
                      "t-tr",
                      [
                        _c("t-th", [_vm._v("星期一")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期二")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期三")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期四")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期五")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期六")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "t-tr",
                      [
                        _c("t-th", [_vm._v("星期一")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期二")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期三")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期四")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期五")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期六")])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "t-tr",
                      [
                        _c("t-th", [_vm._v("星期一")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期二")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期三")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期四")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期五")]),
                        _vm._v(" "),
                        _c("t-th", [_vm._v("星期六")])
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "t-tbody",
                  [
                    _c("t-tr", [
                      _c("td", [_vm._v("第一天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第二天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第三天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第四天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第五天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第六天")])
                    ]),
                    _vm._v(" "),
                    _c("t-tr", [
                      _c("td", [_vm._v("第一天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第二天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第三天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第四天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第五天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第六天")])
                    ]),
                    _vm._v(" "),
                    _c("t-tr", [
                      _c("td", [
                        _vm._v("第一天"),
                        _c("br"),
                        _vm._v("第一天+1")
                      ]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第二天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第三天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第四天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第五天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第六天")])
                    ]),
                    _vm._v(" "),
                    _c("t-tr", [
                      _c("td", [_vm._v("第一天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第二天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第三天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第四天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第五天")]),
                      _vm._v(" "),
                      _c("td", [_vm._v("第六天"), _c("br"), _vm._v("第六天+1")])
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("footers")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "ee+8":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "evx4":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-footer[data-v-e5e0e816]{\n    text-align: center;\n    height: 36px;\n    line-height: 36px;\n    background: #000;\n    color: #FFF;\n    font-size: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ "frx2":
/*!*****************************************************************!*\
  !*** ./server/pages/button.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./button.vue?vue&type=style&index=0&lang=css */ "OjnA");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "gec1":
/*!**********************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/listToStyles.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return listToStyles; });
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ "iAai":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true */ "sNQG");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("ddeacfd8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "jsUU":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true */ "0QUC");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/addStyles.js */ "2j8j")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "k6mY":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true */ "ee+8");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/addStyles.js */ "2j8j")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "kQVV":
/*!***************************************!*\
  !*** ./server/doc/button/disabled.md ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"-disabled\">禁止选中disabled</h4>\n<p>使用disabled属性可以让button按钮处于禁止状态</p>\n";

/***/ }),

/***/ "kTEy":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/input.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "lP3g":
/*!**************************************************************************************************!*\
  !*** ./server/webComponents/footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_style_index_0_id_e5e0e816_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true */ "Gdal");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_style_index_0_id_e5e0e816_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_style_index_0_id_e5e0e816_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_style_index_0_id_e5e0e816_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_style_index_0_id_e5e0e816_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_style_index_0_id_e5e0e816_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "lmkL":
/*!*********************************************************!*\
  !*** ./server/pages/layout.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=script&lang=js */ "Ia4R");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "m5bF":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/headers.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {};

/***/ }),

/***/ "mB3i":
/*!**********************************!*\
  !*** ./server/pages/tooltip.vue ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tooltip_vue_vue_type_template_id_1f1ebd0c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tooltip.vue?vue&type=template&id=1f1ebd0c */ "LyNM");
/* harmony import */ var _tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tooltip.vue?vue&type=script&lang=js */ "QdjM");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _tooltip_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tooltip.vue?vue&type=style&index=0&lang=css */ "xXyu");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _tooltip_vue_vue_type_template_id_1f1ebd0c__WEBPACK_IMPORTED_MODULE_0__["render"],
  _tooltip_vue_vue_type_template_id_1f1ebd0c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "server/pages/tooltip.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "mM1R":
/*!***************************************************************************************!*\
  !*** ./server/pages/menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_387dc710_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true */ "iAai");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_387dc710_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_387dc710_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_387dc710_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_387dc710_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_387dc710_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "mygN":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/contents.vue?vue&type=template&id=3b4b1e2d ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "t-layout",
    { staticClass: "v-contents" },
    [
      _c(
        "t-sider",
        [
          _c(
            "t-menu",
            {
              attrs: {
                width: 180,
                height: 45,
                mode: "vertical",
                "active-name": _vm.linkName
              },
              on: { "on:select": _vm.routerHandle }
            },
            _vm._l(_vm.routes, function(item, index) {
              return _c(
                "t-menuSub",
                { key: index, attrs: { name: item.name } },
                [
                  _vm._v(
                    "\n                " + _vm._s(item.name) + "\n            "
                  )
                ]
              )
            })
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("t-content", [_vm._t("default")], 2),
      _vm._v(" "),
      _c("t-sider")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "n5py":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true */ "32DF");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/addStyles.js */ "2j8j")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "nMPc":
/*!*************************************!*\
  !*** ./server/doc/exapmple-code.md ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\n    <t-row>1111</t-row>\n</template>  \n\n<script>\nexport default{\n    data:function(){\n        return {\n            linkName: '例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示',\n        }\n    }\n}\n</script>";

/***/ }),

/***/ "nTn7":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/index.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            linkName: '首页'
        };
    }
};

/***/ }),

/***/ "nnaN":
/*!************************************!*\
  !*** ./server/doc/row/offset.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-col :offset='1' :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0,153,229,.7)\">col</div></t-col>\n<t-col :offset='2' :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n<t-col :offset='3' :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n<t-col :offset='4' :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n<t-col :offset='5' :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n<t-col :offset='6' :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>";

/***/ }),

/***/ "oDyL":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/contents.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-contents{\n    margin: 0 auto;\n    background: #FFF;\n    padding-bottom: 20px;\n    padding-top : 20px;\n    margin-bottom: 20px;\n    min-height: 800px;\n\n    font-size: 14px;\n}\n", ""]);

// exports


/***/ }),

/***/ "p4F6":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/exapmple.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./exapmple.vue?vue&type=style&index=0&lang=css */ "UVHL");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("79f9d648", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "qI5Q":
/*!***********************************!*\
  !*** ./server/doc/button/type.md ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"type\">type</h4>\n<p>button按钮有4种样式：default、text、warning、error</p>\n";

/***/ }),

/***/ "qj0Z":
/*!********************************************************!*\
  !*** ./server/pages/table.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./table.vue?vue&type=script&lang=js */ "EGq8");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "rKaz":
/*!*****************************************************************!*\
  !*** ./server/pages/exapmple.vue?vue&type=template&id=72890c97 ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_template_id_72890c97__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./exapmple.vue?vue&type=template&id=72890c97 */ "3Z28");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_template_id_72890c97__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_template_id_72890c97__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "sNQG":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true */ "yxM7");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/addStyles.js */ "2j8j")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "sU2q":
/*!********************************!*\
  !*** ./server/doc/row/flex.md ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"flex-\">flex模式等分</h4>\n<ul>\n<li>讲row的type值设置为flex，那么系统就会安装flex的模式进行布局，col的span设置没有影响。</li>\n</ul>\n";

/***/ }),

/***/ "sW7J":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/footers.vue?vue&type=template&id=e5e0e816&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("t-footer", [_vm._v("footer")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "sm6O":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/button.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./button.vue?vue&type=style&index=0&lang=css */ "t0dG");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/addStyles.js */ "2j8j")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "t0dG":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/button.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "tSbm":
/*!********************************!*\
  !*** ./server/pages/input.vue ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_vue_vue_type_template_id_57c17981__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input.vue?vue&type=template&id=57c17981 */ "3Gwo");
/* harmony import */ var _input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.vue?vue&type=script&lang=js */ "5/ze");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _input_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.vue?vue&type=style&index=0&lang=css */ "/jjP");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _input_vue_vue_type_template_id_57c17981__WEBPACK_IMPORTED_MODULE_0__["render"],
  _input_vue_vue_type_template_id_57c17981__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "server/pages/input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "tXbM":
/*!************************************************************************************!*\
  !*** ./server/webComponents/footers.vue?vue&type=template&id=e5e0e816&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_template_id_e5e0e816_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./footers.vue?vue&type=template&id=e5e0e816&scoped=true */ "sW7J");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_template_id_e5e0e816_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_template_id_e5e0e816_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "tlnI":
/*!********************************!*\
  !*** ./server/pages/index.vue ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7c3cf2ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7c3cf2ee&scoped=true */ "FlKb");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "+q5c");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_7c3cf2ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true */ "NyLy");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7c3cf2ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7c3cf2ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7c3cf2ee",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "server/pages/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "tndz":
/*!***********************************!*\
  !*** ./server/doc/row/align.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-row type='flex' align='top'>\n    <t-col :span='6'><div style=\"height: 140px;\">col</div></t-col>\n    <t-col :span='6'><div style=\"height: 100px;\">col</div></t-col>\n    <t-col :span='6'><div>col</div></t-col>\n    <t-col :span='6'><div style=\"height: 80px;\">col</div></t-col>\n</t-row>\n<br>\n<t-row type='flex' justify='center' align='middle'>\n    <t-col :span='6'><div style=\"height: 140px;\">col</div></t-col>\n    <t-col :span='6'><div style=\"height: 100px;\">col</div></t-col>\n    <t-col :span='6'><div>col</div></t-col>\n    <t-col :span='6'><div style=\"height: 80px;\">col</div></t-col>\n</t-row>\n<br>\n<t-row type='flex' justify='center' align='bottom'>\n    <t-col :span='6'><div style=\"height: 140px;\">col</div></t-col>\n    <t-col :span='6'><div style=\"height: 100px;\">col</div></t-col>\n    <t-col :span='6'><div>col</div></t-col>\n    <t-col :span='6'><div style=\"height: 80px;\">col</div></t-col>\n</t-row>";

/***/ }),

/***/ "u6MD":
/*!******************************************************************!*\
  !*** ./server/webComponents/headers.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./headers.vue?vue&type=script&lang=js */ "m5bF");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "u7+q":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/webComponents/headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true */ "jsUU");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("702b0930", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "udWi":
/*!**************************!*\
  !*** ./server/routes.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(/*! ./pages/index.vue */ "tlnI");

var _index2 = _interopRequireDefault(_index);

var _rowCol = __webpack_require__(/*! ./pages/row-col.vue */ "zC9b");

var _rowCol2 = _interopRequireDefault(_rowCol);

var _button = __webpack_require__(/*! ./pages/button.vue */ "VwIj");

var _button2 = _interopRequireDefault(_button);

var _layout = __webpack_require__(/*! ./pages/layout.vue */ "AqnB");

var _layout2 = _interopRequireDefault(_layout);

var _table = __webpack_require__(/*! ./pages/table.vue */ "I3Oi");

var _table2 = _interopRequireDefault(_table);

var _input = __webpack_require__(/*! ./pages/input.vue */ "tSbm");

var _input2 = _interopRequireDefault(_input);

var _menu = __webpack_require__(/*! ./pages/menu.vue */ "7/90");

var _menu2 = _interopRequireDefault(_menu);

var _tooltip = __webpack_require__(/*! ./pages/tooltip.vue */ "mB3i");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _exapmple = __webpack_require__(/*! ./pages/exapmple.vue */ "Ku6K");

var _exapmple2 = _interopRequireDefault(_exapmple);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    path: '/',
    name: '首页',
    component: _index2.default
}, {
    path: '/row-col',
    name: '栅栏',
    component: _rowCol2.default
}, {
    path: '/button',
    name: '按钮',
    component: _button2.default
}, {
    path: '/layout',
    name: '布局',
    component: _layout2.default
}, {
    path: '/menu',
    name: '导航',
    component: _menu2.default
}, {
    path: '/table',
    name: '表格',
    component: _table2.default
}, {
    path: '/input',
    name: '输入框',
    component: _input2.default
}, {
    path: '/tooltip',
    name: '气泡提示',
    component: _tooltip2.default
}, {
    path: '/exapmple',
    name: '例子展示',
    component: _exapmple2.default
}];

/***/ }),

/***/ "vhXu":
/*!***************************************************************************!*\
  !*** ./server/webComponents/contents.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./contents.vue?vue&type=style&index=0&lang=css */ "/zoJ");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "wQ+W":
/*!*******************************************!*\
  !*** ./server/webComponents/contents.vue ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _contents_vue_vue_type_template_id_3b4b1e2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contents.vue?vue&type=template&id=3b4b1e2d */ "5icY");
/* harmony import */ var _contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contents.vue?vue&type=script&lang=js */ "XQBI");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _contents_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contents.vue?vue&type=style&index=0&lang=css */ "vhXu");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _contents_vue_vue_type_template_id_3b4b1e2d__WEBPACK_IMPORTED_MODULE_0__["render"],
  _contents_vue_vue_type_template_id_3b4b1e2d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "server/webComponents/contents.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "wUeT":
/*!*********************************************************!*\
  !*** ./server/pages/button.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./button.vue?vue&type=script&lang=js */ "PrOE");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "xOLY":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true */ "GgXm");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/.npminstall/style-loader/0.21.0/style-loader/lib/addStyles.js */ "2j8j")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "xXyu":
/*!******************************************************************!*\
  !*** ./server/pages/tooltip.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./tooltip.vue?vue&type=style&index=0&lang=css */ "92bu");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "xsKK":
/*!********************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "yxM7":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./server/pages/menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "zC9b":
/*!**********************************!*\
  !*** ./server/pages/row-col.vue ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _row_col_vue_vue_type_template_id_5f1b6f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row-col.vue?vue&type=template&id=5f1b6f84&scoped=true */ "UtF8");
/* harmony import */ var _row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./row-col.vue?vue&type=script&lang=js */ "TZ3a");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _row_col_vue_vue_type_style_index_0_id_5f1b6f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true */ "8mW/");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _row_col_vue_vue_type_template_id_5f1b6f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _row_col_vue_vue_type_template_id_5f1b6f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f1b6f84",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "server/pages/row-col.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvb2Zmc2V0Lm1kIiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2Zvb3RlcnMudnVlPzI4MGUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlPzMyZGEiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2luZGV4LnZ1ZT82NTYyIiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvYnV0dG9uL2h0bWxUeXBlLm1kIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbnB1dC52dWU/MDQ2OCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL3Jvdy9qdXN0aWZ5Lm1kIiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2NvbnRlbnRzLnZ1ZT9mNTY3Iiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9tZW51LnZ1ZT84NjQ2Iiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2hlYWRlcnMudnVlPzA2YWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL21lbnUudnVlPzIxYzYiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvc3RhdGljLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2V4YXBtcGxlLnZ1ZT9lN2ExIiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvYnV0dG9uL2h0bWxUeXBlLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3RhYmxlLnZ1ZT9hMWI4Iiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9yb3ctY29sLnZ1ZT85NmM2Iiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9leGFwbXBsZS52dWU/YWExMiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvZXhhcG1wbGUudnVlP2ZjMjEiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vc2l6ZS5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbnB1dC52dWU/ODdiZCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvdGFibGUudnVlPzA3YWIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2lucHV0LnZ1ZT9mODY3Iiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvYnV0dG9uL3R5cGUuaHRtbCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudnVlPzlmNjYiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL21lbnUudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvbGF5b3V0LnZ1ZT81MGY1Iiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9leGFwbXBsZS52dWU/NzM3YiIsIndlYnBhY2s6Ly8vc2VydmVyL3dlYkNvbXBvbmVudHMvZm9vdGVycy52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvaGVhZGVycy52dWU/ZmRmYyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvcm93LWNvbC52dWU/ZGZhMiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvdG9vbHRpcC52dWU/ZDkyOCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvbGF5b3V0LnZ1ZT80Mjk1Iiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9sYXlvdXQudnVlPzYzN2MiLCJ3ZWJwYWNrOi8vL3NlcnZlci9wYWdlcy90b29sdGlwLnZ1ZSIsIndlYnBhY2s6Ly8vc2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9sYXlvdXQudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy90b29sdGlwLnZ1ZT8yZWE4Iiwid2VicGFjazovLy9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9jb250ZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvaGVhZGVycy52dWU/YmU3MCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL3NlcnZlci9wYWdlcy90YWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vY2xpY2suaHRtbCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2J1dHRvbi9jbGljay5tZCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9mb290ZXJzLnZ1ZT9hZjRjIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9sYXlvdXQudnVlP2NmNmMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvZm9vdGVycy52dWU/NGY1OCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvdGFibGUudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbnB1dC52dWU/ZGVkOSIsIndlYnBhY2s6Ly8vc2VydmVyL3BhZ2VzL2xheW91dC52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Rvb2x0aXAudnVlP2VkNjUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlPzczMjkiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlPzFkN2MiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvaGVhZGVycy52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvZm9vdGVycy52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2V4YXBtcGxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2J1dHRvbi9kaXNhYmxlZC5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbmRleC52dWU/YzFjMCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL3Jvdy9ndXR0ZXIubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2J1dHRvbi52dWU/NGI4MCIsIndlYnBhY2s6Ly8vc2VydmVyL3BhZ2VzL2J1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Rvb2x0aXAudnVlP2E3Y2MiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3RhYmxlLnZ1ZT8wNDU3Iiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvZXhhcG1wbGUtaW5mby5tZCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL3Jvdy9zdGF0aWMubWQiLCJ3ZWJwYWNrOi8vL3NlcnZlci9wYWdlcy9pbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2J1dHRvbi52dWU/NWYyZCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvaW5wdXQudnVlP2QxYjgiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlPzBmNWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Rvb2x0aXAudnVlP2EyZDQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2V4YXBtcGxlLnZ1ZT9hZDJmIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9idXR0b24udnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9yb3ctY29sLnZ1ZT9hZmNjIiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvYnV0dG9uL3NpemUubWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2NvbnRlbnRzLnZ1ZT82Yjg3Iiwid2VicGFjazovLy8uL3NlcnZlci9kb2Mvcm93L2d1dHRlci5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbmRleC52dWU/Mjg0NiIsIndlYnBhY2s6Ly8vc2VydmVyL3BhZ2VzL21lbnUudnVlIiwid2VicGFjazovLy9zZXJ2ZXIvcGFnZXMvZXhhcG1wbGUudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9kb2Mvcm93L2ZsZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL3Jvdy9qdXN0aWZ5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL3Jvdy9hbGlnbi5tZCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvdGFibGUudnVlPzhhYTYiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2luZGV4LnZ1ZT82YThjIiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2Zvb3RlcnMudnVlPzhlMWYiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2J1dHRvbi52dWU/MjZhYSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL21lbnUudnVlPzc3YjIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvaGVhZGVycy52dWU/Y2Y3ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudnVlP2VjODUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vZGlzYWJsZWQubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2lucHV0LnZ1ZT82ZDY1Iiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2Zvb3RlcnMudnVlPzk2ZWIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2xheW91dC52dWU/ZDY0YiIsIndlYnBhY2s6Ly8vc2VydmVyL3dlYkNvbXBvbmVudHMvaGVhZGVycy52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Rvb2x0aXAudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9tZW51LnZ1ZT9hMTQ3Iiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2NvbnRlbnRzLnZ1ZT9hZjliIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy90YWJsZS52dWU/ZWFiMCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2V4YXBtcGxlLWNvZGUubWQiLCJ3ZWJwYWNrOi8vL3NlcnZlci9wYWdlcy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvb2Zmc2V0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlPzM5NjgiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2V4YXBtcGxlLnZ1ZT8yZTU0Iiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvYnV0dG9uL3R5cGUubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3RhYmxlLnZ1ZT9kYzUzIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9tZW51LnZ1ZT8zZmE0Iiwid2VicGFjazovLy8uL3NlcnZlci9kb2Mvcm93L2ZsZXgubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvZm9vdGVycy52dWU/Y2E2OCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvYnV0dG9uLnZ1ZT81MjkzIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9idXR0b24udnVlPzI5NDIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2lucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9kb2Mvcm93L2FsaWduLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvaGVhZGVycy52dWU/YTMyYyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9oZWFkZXJzLnZ1ZT9lMGZiIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlP2M0ZDIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9idXR0b24udnVlPzIxZDciLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2xheW91dC52dWU/ODRiZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvdG9vbHRpcC52dWU/ZThlNCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9tZW51LnZ1ZT9lNzU2Iiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9yb3ctY29sLnZ1ZSJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJkZXZ0b29scyIsInVzZSIsIlZ1ZVJvdXRlciIsImNvbXBvbmVudHMiLCJjb250ZW50cyIsImhlYWRlcnMiLCJmb290ZXJzIiwiaW5zdGFsbCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwiY29tcG9uZW50IiwidmFsdWUiLCJyb3V0ZXIiLCJyb3V0ZXMiLCJhcHAiLCIkbW91bnQiLCJwYXRoIiwibmFtZSIsImluZGV4Iiwicm93Q29sIiwiYnV0dG9uIiwibGF5b3V0IiwibWVudSIsInRhYmxlIiwiaW5wdXQiLCJ0b29sdGlwIiwiZXhhcG1wbGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztB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QkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjOztBQUVkLGtEQUFrRCxzQkFBc0I7QUFDeEU7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNB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QTtBQUNBLFNBQVMsc0NBQXNDLHlCQUF5QixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTLDZCQUE2QixFQUFFO0FBQ3BFO0FBQ0E7QUFDQSxlQUFlLFNBQVMsZUFBZSxnQkFBZ0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLFNBQVMsV0FBVyxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxF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Q0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTLDZCQUE2QixFQUFFO0FBQ3BFO0FBQ0E7QUFDQSxlQUFlLFNBQVMsZUFBZSxnQkFBZ0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVMsZUFBZSxFQUFFO0FBQzdDO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyxlQUFlLEVBQUU7QUFDN0M7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLGVBQWUsRUFBRTtBQUM3QztBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6Qyx5QkFBeUIsa0NBQWtDO0FBQzNEO0FBQ0EsYUFB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM1RkEscUo7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUyx5QkFBeUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0EsV0FBVyxlQUFlLDBCQUEwQixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyxrQ0FBa0MsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGtDO0FBQ2xDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFpQkE7QUFDQTtBQUNBLGdGIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIkNvdXNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCJvZmZzZXQtXFxcIj5vZmZzZXTmqKHlvI88L2g0Plxcbjx1bD5cXG48bGk+6K6+572uY29s55qE5bem6L656LedPC9saT5cXG48L3VsPlxcblwiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9vdGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lNWUwZTgxNiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9vdGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lNWUwZTgxNiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU1ZTBlODE2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoNCBpZD1cXFwiaHRtbHR5cGVcXFwiPmh0bWxUeXBlPC9oND5cXG48cD5idXR0b27nmoRodG1s57G75Z6L77yM5YyF5ousYnV0dG9u44CBc3VibWl044CBcmVzZXTkuInnp43nsbvlnos8L3A+XFxuXCI7IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcImp1c3RpZnktXFxcIj5qdXN0aWZ555So5rOVPC9oND5cXG48dWw+XFxuPGxpPuW9k3Jvd+eahHR5cGXorr7nva7kuLpmbGV45pe277yM5Y2z5Y+v6K6+572uanVzdGlmeTwvbGk+XFxuPGxpPuacieWbm+S4quWPguaVsO+8jHN0YXJ077yI5bGA5bem77yJ44CBZW5k77yI5bGA5Y+z77yJ44CBY2VudGVy77yI5bGF5Lit77yJ44CBc3BhY2UtYXJvdW5k77yI5a+55YW277yJXFxuICDjgIFzcGFjZS1iZXR3ZWVu77yI5Lik56uv5a+55YW277yJPC9saT5cXG48L3VsPlxcblwiOyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzM4NDFhYzJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiaGVhZGVyc1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJjb250ZW50c1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGxpbmtOYW1lOiBfdm0ubGlua05hbWUgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IDI0IH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYWN0aXZlLW5hbWVcIjogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IFwib246c2VsZWN0XCI6IF92bS5vbkNsaWNrSGFuZGxlMSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDEgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgMlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAzIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiAyNCB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidC1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFjdGl2ZS1uYW1lXCI6IDIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBcIm9uOnNlbGVjdFwiOiBfdm0ub25DbGlja0hhbmRsZTIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAxIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgM1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogMjQgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInQtbWVudVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhY3RpdmUtbmFtZVwiOiAzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgXCJvbjpzZWxlY3RcIjogX3ZtLm9uQ2xpY2tIYW5kbGUzIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAyIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDMgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IDggfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInQtbWVudVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbW9kZTogXCJ2ZXJ0aWNhbFwiLCBcImFjdGl2ZS1uYW1lXCI6IDMgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBcIm9uOnNlbGVjdFwiOiBfdm0ub25DbGlja0hhbmRsZTQgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAxIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgM1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogOCB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidC1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIsIFwiYWN0aXZlLW5hbWVcIjogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IFwib246c2VsZWN0XCI6IF92bS5vbkNsaWNrSGFuZGxlNSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDEgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgMlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAzIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiA4IH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLW5hbWVcIjogM1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgXCJvbjpzZWxlY3RcIjogX3ZtLm9uQ2xpY2tIYW5kbGU2IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAyIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDMgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZm9vdGVyc1wiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtaGVhZGVyLWRlbW9bZGF0YS12LWRiYWNiMzdhXXtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMzZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHQtcm93PlxcbiAgICA8dC1jb2wgOnNwYW49JzI0Jz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdz5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93PlxcbiAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc0Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc0Jz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdz5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93PlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdz5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG48L3Qtcm93PlwiOyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHQtYnV0dG9uIGh0bWxUeXBlPVxcXCJidXR0b25cXFwiPmJ1dHRvbjwvdC1idXR0b24+XFxuPGJyPjxicj5cXG48dC1idXR0b24gaHRtbFR5cGU9XFxcInN1Ym1pdFxcXCI+c3VibWl0PC90LWJ1dHRvbj5cXG48YnI+PGJyPlxcbjx0LWJ1dHRvbiBodG1sVHlwZT1cXFwicmVzZXRcXFwiPnJlc2V0PC90LWJ1dHRvbj5cIjsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm93LWNvbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjFiNmY4NCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm93LWNvbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjFiNmY4NCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmMWI2Zjg0Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImhlYWRlcnNcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiY29udGVudHNcIixcbiAgICAgICAgeyBhdHRyczogeyBsaW5rTmFtZTogX3ZtLmxpbmtOYW1lIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vZGU6IFwiaG9yaXpvbnRhbFwiLCBtb3JlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgW19jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyNCB9IH0sIFtfdm0uX3YoXCJjb2xcIildKV0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uaW5mbykgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJtYXJrZG93blwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb2RlXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uY29kZSkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9kZTogXCJ2ZXJ0aWNhbFwiLCBtb3JlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgW19jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyNCB9IH0sIFtfdm0uX3YoXCJjb2xcIildKV0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uaW5mbykgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJtYXJrZG93blwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb2RlXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uY29kZSkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZvb3RlcnNcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dC1idXR0b24gc2l6ZT0ndGlueSc+dGlueTwvdC1idXR0b24+XFxuPGJyPlxcbjxicj5cXG48dC1idXR0b24gc2l6ZT0nZGVmYXVsdCc+ZGVmYXVsdDwvdC1idXR0b24+XFxuPGJyPlxcbjxicj5cXG48dC1idXR0b24gc2l6ZT0nbGFyZ2UnPmxhcmdlPC90LWJ1dHRvbj5cXG48YnI+XFxuPGJyPlxcbjx0LWJ1dHRvbiBzaXplPSdhdXRvJyA6d2lkdGg9JzEyMCcgOmhlaWdodD0nNTAnPmF1dG88L3QtYnV0dG9uPlxcbjxicj5cXG48YnI+XFxuPHQtYnV0dG9uIHNpemU9J2RlZmF1bHQnIGxvbmc+bG9uZzwvdC1idXR0b24+XCI7IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiN2NiYjg1Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNGNjZWE5NDFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I3Y2JiODUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjdjYmI4NSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiaGVhZGVyc1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJjb250ZW50c1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGxpbmtOYW1lOiBfdm0ubGlua05hbWUgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiaW5wdXRcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcInNpemVcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiZGVmYWx1dFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWlucHV0XCIsIHtcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5pbnB1dFZhbHVlID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5wdXRWYWx1ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcImxhcmdlXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCJsYXJnZVwiIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlucHV0VmFsdWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uaW5wdXRWYWx1ZSA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlucHV0VmFsdWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJzbWFsbFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5pbnB1dFZhbHVlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmlucHV0VmFsdWUgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpbnB1dFZhbHVlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwidGlueVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwidGlueVwiIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlucHV0VmFsdWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uaW5wdXRWYWx1ZSA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlucHV0VmFsdWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHQtYnV0dG9uPmRlZmF1bHQ8L3QtYnV0dG9uPlxcbjxicj48YnI+XFxuPHQtYnV0dG9uIHR5cGU9J3RleHQnPnRleHQ8L3QtYnV0dG9uPlxcbjxicj48YnI+XFxuPHQtYnV0dG9uIHR5cGU9J3dhcm5pbmcnPndhcm5pbmc8L3QtYnV0dG9uPlxcbjxicj48YnI+XFxuPHQtYnV0dG9uIHR5cGU9J2Vycm9yJz5lcnJvcjwvdC1idXR0b24+XCI7IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2MzY2YyZWUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzNDdiYjdkNlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YzNjZjJlZSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdjM2NmMmVlJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4N2RjNzEwJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4N2RjNzEwJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjM4N2RjNzEwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczODdkYzcxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczODdkYzcxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzg3ZGM3MTAmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczODdkYzcxMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic2VydmVyL3BhZ2VzL21lbnUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjRjNDI4ODMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0OWU3NTExZlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjRjNDI4ODMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjRjNDI4ODMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8dC1mb290ZXI+Zm9vdGVyPC90LWZvb3Rlcj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiIHNjb3BlZD5cbiAgICAudi1mb290ZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgXG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInQtaGVhZGVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ2LWhlYWRlci1kZW1vXCIsIGF0dHJzOiB7IHdpZHRoOiAxMjAwIH0gfSxcbiAgICBbX3ZtLl92KFwiaGVhZGVyXCIpXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm93LWNvbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjFiNmY4NCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmMWI2Zjg0Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90b29sdGlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNGU2OGI0YzZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdG9vbHRpcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rvb2x0aXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImhlYWRlcnNcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiY29udGVudHNcIixcbiAgICAgICAgeyBhdHRyczogeyBsaW5rTmFtZTogX3ZtLmxpbmtOYW1lIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuaXoHNpZGVyXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtaGVhZGVyXCIsIFtfdm0uX3YoXCJoZWFkZXJcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0LWxheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkZW1vLWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29udGVudFwiLFxuICAgICAgICAgICAgICAgIF92bS5fbCgxMCwgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhpKSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1mb290ZXJcIiwgW192bS5fdihcImZvb3RlclwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuW3pnNpZGVyXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtaGVhZGVyXCIsIFtfdm0uX3YoXCJoZWFkZXJcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0LWxheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkZW1vLWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInQtc2lkZXJcIiwgW192bS5fdihcInNpZGVyXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgX3ZtLl9sKDEwLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGkpIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWZvb3RlclwiLCBbX3ZtLl92KFwiZm9vdGVyXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwi5bemc2lkZXJcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0LWxheW91dFwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInQtc2lkZXJcIiwgW192bS5fdihcInNpZGVyXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidC1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRlbW8tY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0LWhlYWRlclwiLCBbX3ZtLl92KFwiaGVhZGVyXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbCgxMCwgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhpKSB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0LWZvb3RlclwiLCBbX3ZtLl92KFwiZm9vdGVyXCIpXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuWPs3NpZGVyXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtaGVhZGVyXCIsIFtfdm0uX3YoXCJoZWFkZXJcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0LWxheW91dFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkZW1vLWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29udGVudFwiLFxuICAgICAgICAgICAgICAgIF92bS5fbCgxMCwgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhpKSB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidC1zaWRlclwiLCB7IGF0dHJzOiB7IHdpZHRoOiBcIjQwMFwiIH0gfSwgW192bS5fdihcInNpZGVyXCIpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1mb290ZXJcIiwgW192bS5fdihcImZvb3RlclwiKV0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjRjNDI4ODMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0YzQyODgzJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJcbjx0ZW1wbGF0ZT5cbiAgICA8IS0tJ2F1dG8nXG4gICAgJ2F1dG8tc3RhcnQnXG4gICAgJ2F1dG8tZW5kJ1xuICAgICd0b3AnXG4gICAgJ3RvcC1zdGFydCdcbiAgICAndG9wLWVuZCdcbiAgICAncmlnaHQnXG4gICAgJ3JpZ2h0LXN0YXJ0J1xuICAgICdyaWdodC1lbmQnXG4gICAgJ2JvdHRvbSdcbiAgICAnYm90dG9tLXN0YXJ0J1xuICAgICdib3R0b20tZW5kJ1xuICAgICdsZWZ0J1xuICAgICdsZWZ0LXN0YXJ0J1xuICAgICdsZWZ0LWVuZCctLT5cbiAgICA8ZGl2PlxuICAgICAgICA8aGVhZGVycz48L2hlYWRlcnM+XG4gICAgICAgIDxjb250ZW50cyA6bGlua05hbWU9J2xpbmtOYW1lJz5cbiAgICAgICAgICAgIDx0LXJvdyBzdHlsZT0ndGV4dC1hbGlnbjogY2VudGVyO21hcmdpbi1ib3R0b206IDEwcHg7Jz5cbiAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55JyB2LXRvb2x0aXAudG9wLXN0YXJ0PVwibXNnXCI+5LiK5bemPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55JyB2LXRvb2x0aXAudG9wPVwibXNnXCI+5LiK5LitPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55JyB2LXRvb2x0aXAudG9wLWVuZD1cIm1zZ1wiPuS4iuWPszwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgIDx0LXJvdyBzdHlsZT0ndGV4dC1hbGlnbjogY2VudGVyO21hcmdpbi1ib3R0b206IDEwcHg7Jz5cbiAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPlxuICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueScgdi10b29sdGlwLmxlZnQtc3RhcnQ9XCJtc2dcIj7lt6bkuIo8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknIHYtdG9vbHRpcC5yaWdodC1zdGFydD1cIm1zZ1wiPuWPs+S4ijwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICA8dC1yb3cgc3R5bGU9J3RleHQtYWxpZ246IGNlbnRlcjttYXJnaW4tYm90dG9tOiAxMHB4Oyc+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknIHYtdG9vbHRpcC5sZWZ0PVwibXNnXCI+5bem5LitPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55JyB2LXRvb2x0aXAucmlnaHQ9XCJtc2dcIj7lj7PkuK08L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgPHQtcm93IHN0eWxlPSd0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLWJvdHRvbTogMTBweDsnPlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55JyB2LXRvb2x0aXAubGVmdC1lbmQ9XCJtc2dcIj7lt6bkuIs8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7XG4gICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtcbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknIHYtdG9vbHRpcC5yaWdodC1lbmQ9XCJtc2dcIj7lj7PkuIs8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgPHQtcm93IHN0eWxlPSd0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luLWJvdHRvbTogMTBweDsnPlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknIHYtdG9vbHRpcC5ib3R0b20tc3RhcnQ9XCJtc2dcIj7kuIvlt6Y8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknIHYtdG9vbHRpcC5ib3R0b209XCJtc2dcIj7kuIvkuK08L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknIHYtdG9vbHRpcC5ib3R0b20tZW5kPVwibXNnXCI+5LiL5Y+zPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwO1xuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICA8L2NvbnRlbnRzPlxuICAgICAgICA8Zm9vdGVycz48L2Zvb3RlcnM+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIj5cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtOYW1lOiAn5rCU5rOh5o+Q56S6JyxcbiAgICAgICAgICAgICAgICBtc2c6J+awlOazoeaPkOekuu+8jOawlOazoeaPkOekuu+8jOawlOazoeaPkOekuu+8jDxicj7msJTms6Hmj5DnpLrvvIzmsJTms6Hmj5DnpLrjgIInLFxuICAgICAgICAgICAgICAgIGlzT3BlbjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG5cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXJzPjwvaGVhZGVycz5cbiAgICAgICAgPGNvbnRlbnRzIDpsaW5rTmFtZT0nbGlua05hbWUnIGNsYXNzPSdkZW1vLWNvbnRlbnQnPlxuICAgICAgICAgICAgPGgxPuWfuuehgOeUqOazleagheagj+ezu+e7nzwvaDE+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb2RlPSd2ZXJ0aWNhbCcgbW9yZT5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgPHQtcm93PlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzI0Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDx0LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPHQtcm93PlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc0Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc0Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDx0LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgPHQtcm93PlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgIDx0LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwibWFya2Rvd25cIiB2LXRleHQ9XCJzdGF0aWNNZFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi10ZXh0PVwic3RhdGljSHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aDE+5Z+656GA5qih5byP5LiL55qEb2Zmc2V0PC9oMT5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vZGU9J3ZlcnRpY2FsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJtYXJrZG93blwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxoMT7ln7rnoYDmqKHlvI/kuIvnmoRndXR0ZXI8L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9kZT0ndmVydGljYWwnPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93IDpndXR0ZXI9XCIxMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpvZmZzZXQ9JzEnIDpzcGFuPVwiNFwiIHN0eWxlPVwiYmFja2dyb3VuZDpub25lO1wiPjxkaXYgc3R5bGU9XCJiYWNrZ3JvdW5kOnJnYmEoMCwxNTMsMjI5LC43KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOm9mZnNldD0nMicgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOm9mZnNldD0nMycgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOm9mZnNldD0nNCcgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOm9mZnNldD0nNScgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOm9mZnNldD0nNicgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJtYXJrZG93blwiIHYtdGV4dD1cIm9mZnNldE1kXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc2xvdD1cImNvZGVcIiB2LXRleHQ9XCJvZmZzZXRIdG1sXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vZGU9J3ZlcnRpY2FsJyBtb3JlPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93IHR5cGU9J2ZsZXgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdyB0eXBlPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJtYXJrZG93blwiIHYtdGV4dD1cImZsZXhNZFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi10ZXh0PVwiZmxleEh0bWxcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90LWV4YXBtcGxlPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGgxPmZsZXjmqKHlvI/igJTigJRqdXN0aWZ555So5rOVPC9oMT5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vZGU9J3ZlcnRpY2FsJyBtb3JlPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J3N0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJtYXJrZG93blwiIHYtdGV4dD1cImp1c3RpZnlNZFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi10ZXh0PVwianVzdGlmeUh0bWxcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90LWV4YXBtcGxlPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGgxPmZsZXjmqKHlvI/igJTigJRhbGlnbueUqOazlTwvaDE+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb2RlPSd2ZXJ0aWNhbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcgYWxpZ249J3RvcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XCJoZWlnaHQ6IDE0MHB4O1wiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XCJoZWlnaHQ6IDEwMHB4O1wiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXY+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cImhlaWdodDogODBweDtcIj5jb2w8L2Rpdj48L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdjZW50ZXInIGFsaWduPSdtaWRkbGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVwiaGVpZ2h0OiAxNDBweDtcIj5jb2w8L2Rpdj48L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVwiaGVpZ2h0OiAxMDBweDtcIj5jb2w8L2Rpdj48L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2PmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XCJoZWlnaHQ6IDgwcHg7XCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nY2VudGVyJyBhbGlnbj0nYm90dG9tJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cImhlaWdodDogMTQwcHg7XCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cImhlaWdodDogMTAwcHg7XCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdj5jb2w8L2Rpdj48L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVwiaGVpZ2h0OiA4MHB4O1wiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJtYXJrZG93blwiIHYtdGV4dD1cImFsaWduTWRcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cImFsaWduSHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgIDwvY29udGVudHM+XG4gICAgICAgIDxmb290ZXJzPjwvZm9vdGVycz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiIHNjb3BlZD5cbiAgICAuZGVtby1jb250ZW50IC52LWNvbCwudi1jb2wgZGl2e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMTUzLDIyOSwuNyk7XG4gICAgfVxuICAgIC5kZW1vLWNvbnRlbnQgLnYtY29sOm50aC1jaGlsZChvZGQpLC52LWNvbDpudGgtY2hpbGQob2RkKSBkaXZ7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTE3LCAxNzUsIDAuOSk7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHN0YXRpY0h0bWwgZnJvbSBcIi4uL2RvYy9yb3cvc3RhdGljLmh0bWxcIjtcbiAgICBpbXBvcnQgc3RhdGljTWQgZnJvbSBcIi4uL2RvYy9yb3cvc3RhdGljLm1kXCI7XG5cbiAgICBpbXBvcnQgZmxleEh0bWwgZnJvbSBcIi4uL2RvYy9yb3cvZmxleC5odG1sXCI7XG4gICAgaW1wb3J0IGZsZXhNZCBmcm9tIFwiLi4vZG9jL3Jvdy9mbGV4Lm1kXCI7XG5cbiAgICBpbXBvcnQganVzdGlmeUh0bWwgZnJvbSBcIi4uL2RvYy9yb3cvanVzdGlmeS5odG1sXCI7XG4gICAgaW1wb3J0IGp1c3RpZnlNZCBmcm9tIFwiLi4vZG9jL3Jvdy9qdXN0aWZ5Lm1kXCI7XG5cbiAgICBpbXBvcnQgYWxpZ25IdG1sIGZyb20gXCIuLi9kb2Mvcm93L2FsaWduLmh0bWxcIjtcbiAgICBpbXBvcnQgYWxpZ25NZCBmcm9tIFwiLi4vZG9jL3Jvdy9hbGlnbi5tZFwiO1xuXG4gICAgaW1wb3J0IGd1dHRlckh0bWwgZnJvbSBcIi4uL2RvYy9yb3cvZ3V0dGVyLmh0bWxcIjtcbiAgICBpbXBvcnQgZ3V0dGVyTWQgZnJvbSBcIi4uL2RvYy9yb3cvZ3V0dGVyLm1kXCI7XG5cbiAgICBpbXBvcnQgb2Zmc2V0SHRtbCBmcm9tIFwiLi4vZG9jL3Jvdy9vZmZzZXQuaHRtbFwiO1xuICAgIGltcG9ydCBvZmZzZXRNZCBmcm9tIFwiLi4vZG9jL3Jvdy9vZmZzZXQubWRcIjtcbiAgICBcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtOYW1lOiAn5qCF5qCPJyxcbiAgICAgICAgICAgICAgICBzdGF0aWNIdG1sOiBzdGF0aWNIdG1sLFxuICAgICAgICAgICAgICAgIHN0YXRpY01kOiBzdGF0aWNNZCxcbiAgICAgICAgICAgICAgICBmbGV4SHRtbDogZmxleEh0bWwsXG4gICAgICAgICAgICAgICAgZmxleE1kOiBmbGV4TWQsXG4gICAgICAgICAgICAgICAganVzdGlmeUh0bWw6IGp1c3RpZnlIdG1sLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlNZDoganVzdGlmeU1kLFxuICAgICAgICAgICAgICAgIGFsaWduSHRtbDogYWxpZ25IdG1sLFxuICAgICAgICAgICAgICAgIGFsaWduTWQ6IGFsaWduTWQsXG4gICAgICAgICAgICAgICAgZ3V0dGVySHRtbDogZ3V0dGVySHRtbCxcbiAgICAgICAgICAgICAgICBndXR0ZXJNZDogZ3V0dGVyTWQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0SHRtbDogb2Zmc2V0SHRtbCxcbiAgICAgICAgICAgICAgICBvZmZzZXRNZDogb2Zmc2V0TWQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2xheW91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjRjNDI4ODMmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xheW91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjRjNDI4ODMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjRjNDI4ODNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY0YzQyODgzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY0YzQyODgzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0YzQyODgzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjRjNDI4ODMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci9wYWdlcy9sYXlvdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiPHRlbXBsYXRlPlxuICAgIDx0LWxheW91dCBjbGFzcz0ndi1jb250ZW50cyc+XG4gICAgICAgIDx0LXNpZGVyPlxuICAgICAgICAgICAgPHQtbWVudSA6d2lkdGg9JzE4MCcgOmhlaWdodD0nNDUnIG1vZGU9J3ZlcnRpY2FsJyA6YWN0aXZlLW5hbWU9J2xpbmtOYW1lJyBAb246c2VsZWN0PSdyb3V0ZXJIYW5kbGUnPlxuICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gcm91dGVzXCIgOmtleT0naW5kZXgnIDpuYW1lPSdpdGVtLm5hbWUnPlxuICAgICAgICAgICAgICAgICAgICB7e2l0ZW0ubmFtZX19XG4gICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICA8L3QtbWVudT5cbiAgICAgICAgPC90LXNpZGVyPlxuICAgICAgICA8dC1jb250ZW50PjxzbG90Pjwvc2xvdD48L3QtY29udGVudD5cbiAgICAgICAgPHQtc2lkZXI+PC90LXNpZGVyPlxuICAgIDwvdC1sYXlvdXQ+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIj5cbiAgICAudi1jb250ZW50c3tcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcCA6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDgwMHB4O1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgcm91dGVzIGZyb20gJy4uL3JvdXRlcy5qcyc7XG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIGxpbmtOYW1lOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICfpppbpobUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcm91dGVzOiByb3V0ZXNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgICAgICByb3V0ZXJIYW5kbGU6ZnVuY3Rpb24obmFtZSl7XG4gICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXMuZm9yRWFjaChmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgICAgICBpZihuYW1lID09IHZhbC5uYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoOiB2YWwucGF0aFxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRiYWNiMzdhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGJhY2IzN2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsImltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMuanMnO1xuaW1wb3J0IGNvbnRlbnRzIGZyb20gJy4vd2ViQ29tcG9uZW50cy9jb250ZW50cy52dWUnO1xuaW1wb3J0IGhlYWRlcnMgZnJvbSAnLi93ZWJDb21wb25lbnRzL2hlYWRlcnMudnVlJztcbmltcG9ydCBmb290ZXJzIGZyb20gJy4vd2ViQ29tcG9uZW50cy9mb290ZXJzLnZ1ZSc7XG5cblZ1ZS5jb25maWcuZGV2dG9vbHMgPSB0cnVlO1xuXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gICAgY29udGVudHMsXG4gICAgaGVhZGVycyxcbiAgICBmb290ZXJzXG59XG5cbmZ1bmN0aW9uIGluc3RhbGwoVnVlKXtcbiAgICBPYmplY3Qua2V5cyhjb21wb25lbnRzKS5mb3JFYWNoKHZhbHVlPT57XG4gICAgICAgIFZ1ZS5jb21wb25lbnQodmFsdWUsIGNvbXBvbmVudHNbdmFsdWVdKTtcbiAgICB9KTtcbn1cblxuaW5zdGFsbChWdWUpO1xuXG52YXIgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gICAgcm91dGVzXG59KVxuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICByb3V0ZXJcbn0pLiRtb3VudCgnI2FwcCcpIiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXJzPjwvaGVhZGVycz5cbiAgICAgICAgPGNvbnRlbnRzIDpsaW5rTmFtZT0nbGlua05hbWUnPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT0ncGFkZGluZy1yaWdodDoyMHB4Oyc+XG4gICAgICAgICAgICAgICAgPHQtdGFibGUgOndpZHRoPVwiWzEwLDEwLDEwLDIwLDI1LDMwXVwiPlxuICAgICAgICAgICAgICAgICAgICA8dC10aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+S4gDwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/kuow8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5LiJPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+WbmzwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/kupQ8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5YWtPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LXRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5LiAPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+S6jDwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/kuIk8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5ZubPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+S6lDwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/lha08L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC10cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/kuIA8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5LqMPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+S4iTwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/lm5s8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5LqUPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+WFrTwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC10cj5cbiAgICAgICAgICAgICAgICAgICAgPC90LXRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dC10Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkuIDlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkuozlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkuInlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzlm5vlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkupTlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzlha3lpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LXRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS4gOWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS6jOWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS4ieWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOWbm+WkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS6lOWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOWFreWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC10cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LiA5aSpPGJyPuesrOS4gOWkqSsxPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LqM5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LiJ5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5Zub5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LqU5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5YWt5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC10cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkuIDlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkuozlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkuInlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzlm5vlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkupTlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzlha3lpKk8YnI+56ys5YWt5aSpKzE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LXRyPlxuICAgICAgICAgICAgICAgICAgICA8L3QtdGJvZHk+XG4gICAgICAgICAgICAgICAgPC90LXRhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvY29udGVudHM+XG4gICAgICAgIDxmb290ZXJzPjwvZm9vdGVycz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiIHNjb3BlZD48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rTmFtZTogJ+ihqOagvCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxuICAgIDx0LWJ1dHRvbiBzaXplPSdkZWZhdWx0JyBAY2xpY2s9XFxcImhhbmRsZUNsaWNrKCdkZWZhdWx0JylcXFwiPmNsaWNrPC90LWJ1dHRvbj5cXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgbWV0aG9kczp7XFxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s6ZnVuY3Rpb24odmFsKXtcXG4gICAgICAgICAgICAgICAgYWxlcnQodmFsKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCJjbGljay1cXFwiPmNsaWNr5LqL5Lu2PC9oND5cXG48cD7lnKhidXR0b27kuIrnu5HlrppAY2xpY2vkuovku7bnlKjmnaXop6blj5Hlm57osIPkuovku7bvvIzlj6/ku6XluKblhaXlj4LmlbA8L3A+XFxuXCI7IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9vdGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lNWUwZTgxNiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjJhMmFlZjQ4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTVlMGU4MTYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU1ZTBlODE2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1oZWFkZXJbZGF0YS12LTY0YzQyODgzXSwudi1mb290ZXJbZGF0YS12LTY0YzQyODgzXXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4udi1zaWRlcltkYXRhLXYtNjRjNDI4ODNde1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMTUzLDIyOSwuNyk7XFxufVxcbi52LWNvbnRlbnRbZGF0YS12LTY0YzQyODgzXXtcXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMTcsIDE3NSwgMC45KTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjdjYmI4NSZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjdjYmI4NSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3YjdjYmI4NVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2I3Y2JiODUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2I3Y2JiODUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjdjYmI4NSZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdiN2NiYjg1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzZXJ2ZXIvcGFnZXMvdGFibGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyOTljMTQ1OFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcnM+PC9oZWFkZXJzPlxuICAgICAgICA8Y29udGVudHMgOmxpbmtOYW1lPSdsaW5rTmFtZSc+XG4gICAgICAgICAgICA8aDE+5pegc2lkZXI8L2gxPlxuICAgICAgICAgICAgPHQtaGVhZGVyPmhlYWRlcjwvdC1oZWFkZXI+XG4gICAgICAgICAgICA8dC1sYXlvdXQgY2xhc3M9J2RlbW8tY29udGVudCc+XG4gICAgICAgICAgICAgICAgPHQtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPHAgdi1mb3I9XCJpIGluIDEwXCIgOmtleT0naScgdi10ZXh0PSdpJz48L3A+XG4gICAgICAgICAgICAgICAgPC90LWNvbnRlbnQ+XG4gICAgICAgICAgICA8L3QtbGF5b3V0PlxuICAgICAgICAgICAgPHQtZm9vdGVyPmZvb3RlcjwvdC1mb290ZXI+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aDE+5bemc2lkZXI8L2gxPlxuICAgICAgICAgICAgPHQtaGVhZGVyPmhlYWRlcjwvdC1oZWFkZXI+XG4gICAgICAgICAgICA8dC1sYXlvdXQgY2xhc3M9J2RlbW8tY29udGVudCc+XG4gICAgICAgICAgICAgICAgPHQtc2lkZXI+c2lkZXI8L3Qtc2lkZXI+XG4gICAgICAgICAgICAgICAgPHQtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPHAgdi1mb3I9XCJpIGluIDEwXCIgOmtleT0naScgdi10ZXh0PSdpJz48L3A+XG4gICAgICAgICAgICAgICAgPC90LWNvbnRlbnQ+XG4gICAgICAgICAgICA8L3QtbGF5b3V0PlxuICAgICAgICAgICAgPHQtZm9vdGVyPmZvb3RlcjwvdC1mb290ZXI+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aDE+5bemc2lkZXI8L2gxPlxuICAgICAgICAgICAgPHQtbGF5b3V0PlxuICAgICAgICAgICAgICAgIDx0LXNpZGVyPnNpZGVyPC90LXNpZGVyPlxuICAgICAgICAgICAgICAgIDx0LWxheW91dCBjbGFzcz0nZGVtby1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAgPHQtaGVhZGVyPmhlYWRlcjwvdC1oZWFkZXI+ICAgIFxuICAgICAgICAgICAgICAgICAgICA8dC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1mb3I9XCJpIGluIDEwXCIgOmtleT0naScgdi10ZXh0PSdpJz48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8dC1mb290ZXI+Zm9vdGVyPC90LWZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L3QtbGF5b3V0PlxuICAgICAgICAgICAgPC90LWxheW91dD5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxoMT7lj7NzaWRlcjwvaDE+XG4gICAgICAgICAgICA8dC1oZWFkZXI+aGVhZGVyPC90LWhlYWRlcj5cbiAgICAgICAgICAgIDx0LWxheW91dCBjbGFzcz0nZGVtby1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICA8dC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8cCB2LWZvcj1cImkgaW4gMTBcIiA6a2V5PSdpJyB2LXRleHQ9J2knPjwvcD5cbiAgICAgICAgICAgICAgICA8L3QtY29udGVudD5cbiAgICAgICAgICAgICAgICA8dC1zaWRlciB3aWR0aD1cIjQwMFwiPnNpZGVyPC90LXNpZGVyPlxuICAgICAgICAgICAgPC90LWxheW91dD5cbiAgICAgICAgICAgIDx0LWZvb3Rlcj5mb290ZXI8L3QtZm9vdGVyPlxuICAgICAgICA8L2NvbnRlbnRzPlxuICAgICAgICA8Zm9vdGVycz48L2Zvb3RlcnM+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIiBzY29wZWQ+XG4gICAgLnYtaGVhZGVyLC52LWZvb3RlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgICAudi1zaWRlcntcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLDE1MywyMjksLjcpO1xuICAgIH1cbiAgICAudi1jb250ZW50e1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDExNywgMTc1LCAwLjkpO1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtOYW1lOiAn5biD5bGAJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90b29sdGlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90b29sdGlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rvb2x0aXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJoZWFkZXJzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImNvbnRlbnRzXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGVtby1jb250ZW50XCIsIGF0dHJzOiB7IGxpbmtOYW1lOiBfdm0ubGlua05hbWUgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwi5Z+656GA55So5rOV5qCF5qCP57O757ufXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIsIG1vcmU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICBbX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDI0IH0gfSwgW192bS5fdihcImNvbFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDQgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA0IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNCB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDQgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA0IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNCB9IH0sIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLnN0YXRpY01kKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5zdGF0aWNIdG1sKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCLln7rnoYDmqKHlvI/kuIvnmoRvZmZzZXRcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vZGU6IFwidmVydGljYWxcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7IGF0dHJzOiB7IHNsb3Q6IFwibWFya2Rvd25cIiB9LCBzbG90OiBcIm1hcmtkb3duXCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7IGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sIHNsb3Q6IFwiY29kZVwiIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwi5Z+656GA5qih5byP5LiL55qEZ3V0dGVyXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGd1dHRlcjogMTAgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9mZnNldDogMSwgc3BhbjogNCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcInJnYmEoMCwxNTMsMjI5LC43KVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImNvbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb2Zmc2V0OiAyLCBzcGFuOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29sXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvZmZzZXQ6IDMsIHNwYW46IDQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjb2xcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9mZnNldDogNCwgc3BhbjogNCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMTE3LCAxNzUsIDAuOSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImNvbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb2Zmc2V0OiA1LCBzcGFuOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29sXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvZmZzZXQ6IDYsIHNwYW46IDQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjb2xcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLm9mZnNldE1kKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5vZmZzZXRIdG1sKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIsIG1vcmU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcImZsZXhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uZmxleE1kKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5mbGV4SHRtbCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiZmxleOaooeW8j+KAlOKAlGp1c3RpZnnnlKjms5VcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vZGU6IFwidmVydGljYWxcIiwgbW9yZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwidmlld1wiIH0sIHNsb3Q6IFwidmlld1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJmbGV4XCIsIGp1c3RpZnk6IFwic3RhcnRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiLCBqdXN0aWZ5OiBcImVuZFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJmbGV4XCIsIGp1c3RpZnk6IFwiY2VudGVyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcImZsZXhcIiwganVzdGlmeTogXCJzcGFjZS1hcm91bmRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiLCBqdXN0aWZ5OiBcInNwYWNlLWJldHdlZW5cIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmp1c3RpZnlNZCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJtYXJrZG93blwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb2RlXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uanVzdGlmeUh0bWwpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcImZsZXjmqKHlvI/igJTigJRhbGlnbueUqOazlVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9kZTogXCJ2ZXJ0aWNhbFwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcImZsZXhcIiwgYWxpZ246IFwidG9wXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxNDBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiY29sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA2IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJjb2xcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDYgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI4MHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJjb2xcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZsZXhcIiwganVzdGlmeTogXCJjZW50ZXJcIiwgYWxpZ246IFwibWlkZGxlXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDYgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTQwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImNvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiY29sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA2IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDYgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiODBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiY29sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmbGV4XCIsIGp1c3RpZnk6IFwiY2VudGVyXCIsIGFsaWduOiBcImJvdHRvbVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA2IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjE0MHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJjb2xcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDYgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImNvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA2IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjgwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImNvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmFsaWduTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmFsaWduSHRtbCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZvb3RlcnNcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jvdy1jb2wudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWYxYjZmODQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxOTNkMGE4NVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmMWI2Zjg0Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm93LWNvbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjFiNmY4NCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYmFjYjM3YSZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaGVhZGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kYmFjYjM3YSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJkYmFjYjM3YVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZGJhY2IzN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZGJhY2IzN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRiYWNiMzdhJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZGJhY2IzN2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci93ZWJDb21wb25lbnRzL2hlYWRlcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNWUwZTgxNiZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZm9vdGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lNWUwZTgxNiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlNWUwZTgxNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTVlMGU4MTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTVlMGU4MTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU1ZTBlODE2JnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTVlMGU4MTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci93ZWJDb21wb25lbnRzL2Zvb3RlcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzI4OTBjOTdcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3Mjg5MGM5NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3Mjg5MGM5NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyODkwYzk3XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzI4OTBjOTcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci9wYWdlcy9leGFwbXBsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHQtYnV0dG9uIHNpemU9J2RlZmF1bHQnIDpkaXNhYmxlZD1cXFwidHJ1ZVxcXCI+6Z2Z5q2i6YCJ5LitPC90LWJ1dHRvbj5cXG5cIjsiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YzNjZjJlZSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YzNjZjJlZSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoNCBpZD1cXFwiLVxcXCI+5q+P5LiA5YiX5LmL6Ze055qE6Ze06ZqUPC9oND5cXG48dWw+XFxuPGxpPuWcqHJvd+S4iumdouiuvue9ruavj+S4gOS4qmNvbOS5i+mXtOeahOmXtOmalDwvbGk+XFxuPC91bD5cXG5cIjsiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxNmM0MGI0OFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aGVhZGVycz48L2hlYWRlcnM+XG4gICAgICAgIDxjb250ZW50cyA6bGlua05hbWU9J2xpbmtOYW1lJz5cbiAgICAgICAgICAgIDxoMT7mjInpkq4tc2l6ZTwvaDE+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb2RlPSd2ZXJ0aWNhbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueSc+dGlueTwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0nZGVmYXVsdCc+ZGVmYXVsdDwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0nbGFyZ2UnIDpodG1sVHlwZT1cInR5cGVcIj5sYXJnZTwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0nYXV0bycgOndpZHRoPScxMjAnIDpoZWlnaHQ9JzUwJz5hdXRvPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSdkZWZhdWx0JyBsb25nPmxvbmc8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwibWFya2Rvd25cIiB2LWh0bWw9XCJzaXplTWRcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtaHRtbD1cInNpemVIdG1sXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxoMT7mjInpkq4tZGlzYWJsZWQ8L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9kZT0ndmVydGljYWwnPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uPmRlZmF1bHQ8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gdHlwZT0ndGV4dCc+dGV4dDwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxicj48YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiB0eXBlPSd3YXJuaW5nJz53YXJuaW5nPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHR5cGU9J2Vycm9yJz5lcnJvcjwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cInR5cGVNZFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi1odG1sPVwidHlwZUh0bWxcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90LWV4YXBtcGxlPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGgxPuaMiemSri1odG1sVHlwZTwvaDE+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb2RlPSd2ZXJ0aWNhbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gaHRtbFR5cGU9XCJidXR0b25cIj5idXR0b248L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gaHRtbFR5cGU9XCJzdWJtaXRcIj5zdWJtaXQ8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gaHRtbFR5cGU9XCJyZXNldFwiPnJlc2V0PC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc2xvdD1cIm1hcmtkb3duXCIgdi1odG1sPVwiaHRtbFR5cGVNZFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi1odG1sPVwiaHRtbFR5cGVIdG1sXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxoMT7mjInpkq4tY2xpY2s8L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9kZT0ndmVydGljYWwnPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J2RlZmF1bHQnIEBjbGljaz1cImhhbmRsZUNsaWNrKCdkZWZhdWx0JylcIj5jbGljazwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cImNsaWNrTWRcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtaHRtbD1cImNsaWNrSHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgIDwvY29udGVudHM+XG4gICAgICAgIDxmb290ZXJzPjwvZm9vdGVycz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiPjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCBzaXplSHRtbCBmcm9tICcuLi9kb2MvYnV0dG9uL3NpemUuaHRtbCc7XG4gICAgaW1wb3J0IHNpemVNZCBmcm9tICcuLi9kb2MvYnV0dG9uL3NpemUubWQnO1xuXG4gICAgaW1wb3J0IGRpc2FibGVkSHRtbCBmcm9tICcuLi9kb2MvYnV0dG9uL2Rpc2FibGVkLmh0bWwnO1xuICAgIGltcG9ydCBkaXNhYmxlZE1kIGZyb20gJy4uL2RvYy9idXR0b24vZGlzYWJsZWQubWQnO1xuXG4gICAgaW1wb3J0IHR5cGVIdG1sIGZyb20gJy4uL2RvYy9idXR0b24vdHlwZS5odG1sJztcbiAgICBpbXBvcnQgdHlwZU1kIGZyb20gJy4uL2RvYy9idXR0b24vdHlwZS5tZCc7XG5cbiAgICBpbXBvcnQgY2xpY2tIdG1sIGZyb20gJy4uL2RvYy9idXR0b24vY2xpY2suaHRtbCc7XG4gICAgaW1wb3J0IGNsaWNrTWQgZnJvbSAnLi4vZG9jL2J1dHRvbi9jbGljay5tZCc7XG5cbiAgICBpbXBvcnQgaHRtbFR5cGVIdG1sIGZyb20gJy4uL2RvYy9idXR0b24vaHRtbFR5cGUuaHRtbCc7XG4gICAgaW1wb3J0IGh0bWxUeXBlTWQgZnJvbSAnLi4vZG9jL2J1dHRvbi9odG1sVHlwZS5tZCc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOidzdWJtaXQnLFxuICAgICAgICAgICAgICAgIGxpbmtOYW1lOiAn5oyJ6ZKuJyxcbiAgICAgICAgICAgICAgICBzaXplSHRtbDogc2l6ZUh0bWwsXG4gICAgICAgICAgICAgICAgc2l6ZU1kOiBzaXplTWQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRIdG1sOiBkaXNhYmxlZEh0bWwsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRNZDogZGlzYWJsZWRNZCxcbiAgICAgICAgICAgICAgICB0eXBlSHRtbDogdHlwZUh0bWwsXG4gICAgICAgICAgICAgICAgdHlwZU1kOiB0eXBlTWQsXG4gICAgICAgICAgICAgICAgY2xpY2tIdG1sOiBjbGlja0h0bWwsXG4gICAgICAgICAgICAgICAgY2xpY2tNZDogY2xpY2tNZCxcbiAgICAgICAgICAgICAgICBodG1sVHlwZUh0bWw6IGh0bWxUeXBlSHRtbCxcbiAgICAgICAgICAgICAgICBodG1sVHlwZU1kOiBodG1sVHlwZU1kLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOntcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrOmZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgYWxlcnQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdG9vbHRpcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90b29sdGlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I3Y2JiODUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I3Y2JiODUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcInpob3VqaW5nd2VuXFxcIj56aG91amluZ3dlbjwvaDQ+XFxuPHA+5aaC5p6cMTIzMTIzPC9wPlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDIgaWQ9XFxcIjI0LVxcXCI+MjTnrYnliIbmoIXmoI/ns7vnu588L2gyPlxcbjx1bD5cXG48bGk+cm935Li65rC05bmz5pa55ZCR5Yib5bu65LiA6KGM77yMY29s5Li65Z6C55u05pa55ZCR562J5YiG5LiA6KGM77yMY29s5pyA5aSnPGNvZGU+c3BhbjwvY29kZT7nrYnliIbkuLoyNOetieWIhuOAgjwvbGk+XFxuPC91bD5cXG5cIjsiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcnM+PC9oZWFkZXJzPlxuICAgICAgICA8Y29udGVudHMgOmxpbmtOYW1lPSdsaW5rTmFtZSc+XG4gICAgICAgICAgICA8aDE+aW5wdXQ8L2gxPlxuICAgICAgICAgICAgPGgyPnNpemU8L2gyPlxuICAgICAgICAgICAgPHA+ZGVmYWx1dDwvcD5cbiAgICAgICAgICAgIDx0LWlucHV0IHYtbW9kZWw9J2lucHV0VmFsdWUnPjwvdC1pbnB1dD5cbiAgICAgICAgICAgIDxwPmxhcmdlPC9wPlxuICAgICAgICAgICAgPHQtaW5wdXQgdi1tb2RlbD0naW5wdXRWYWx1ZScgc2l6ZT0nbGFyZ2UnPjwvdC1pbnB1dD5cbiAgICAgICAgICAgIDxwPnNtYWxsPC9wPlxuICAgICAgICAgICAgPHQtaW5wdXQgdi1tb2RlbD0naW5wdXRWYWx1ZScgc2l6ZT0nc21hbGwnPjwvdC1pbnB1dD5cbiAgICAgICAgICAgIDxwPnRpbnk8L3A+XG4gICAgICAgICAgICA8dC1pbnB1dCB2LW1vZGVsPSdpbnB1dFZhbHVlJyBzaXplPSd0aW55Jz48L3QtaW5wdXQ+XG4gICAgICAgIDwvY29udGVudHM+XG4gICAgICAgIDxmb290ZXJzPjwvZm9vdGVycz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiPjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6JycsXG4gICAgICAgICAgICAgICAgbGlua05hbWU6J+i+k+WFpeahhidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6e1xuICAgICAgICAgICAgaW5wdXRWYWx1ZSh2YWx1ZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJoZWFkZXJzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImNvbnRlbnRzXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbGlua05hbWU6IF92bS5saW5rTmFtZSB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCLmjInpkq4tc2l6ZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9kZTogXCJ2ZXJ0aWNhbFwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidC1idXR0b25cIiwgeyBhdHRyczogeyBzaXplOiBcInRpbnlcIiB9IH0sIFtfdm0uX3YoXCJ0aW55XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidC1idXR0b25cIiwgeyBhdHRyczogeyBzaXplOiBcImRlZmF1bHRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcImRlZmF1bHRcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNpemU6IFwibGFyZ2VcIiwgaHRtbFR5cGU6IF92bS50eXBlIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJsYXJnZVwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2l6ZTogXCJhdXRvXCIsIHdpZHRoOiAxMjAsIGhlaWdodDogNTAgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcImF1dG9cIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWJ1dHRvblwiLCB7IGF0dHJzOiB7IHNpemU6IFwiZGVmYXVsdFwiLCBsb25nOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibG9uZ1wiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwibWFya2Rvd25cIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uc2l6ZU1kKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uc2l6ZUh0bWwpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuaMiemSri1kaXNhYmxlZFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9kZTogXCJ2ZXJ0aWNhbFwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidC1idXR0b25cIiwgW192bS5fdihcImRlZmF1bHRcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidC1idXR0b25cIiwgeyBhdHRyczogeyB0eXBlOiBcInRleHRcIiB9IH0sIFtfdm0uX3YoXCJ0ZXh0XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgdHlwZTogXCJ3YXJuaW5nXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJ3YXJuaW5nXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgdHlwZTogXCJlcnJvclwiIH0gfSwgW192bS5fdihcImVycm9yXCIpXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS50eXBlTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS50eXBlSHRtbCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwi5oyJ6ZKuLWh0bWxUeXBlXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWJ1dHRvblwiLCB7IGF0dHJzOiB7IGh0bWxUeXBlOiBcImJ1dHRvblwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiYnV0dG9uXCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgaHRtbFR5cGU6IFwic3VibWl0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJzdWJtaXRcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidC1idXR0b25cIiwgeyBhdHRyczogeyBodG1sVHlwZTogXCJyZXNldFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwicmVzZXRcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmh0bWxUeXBlTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5odG1sVHlwZUh0bWwpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuaMiemSri1jbGlja1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9kZTogXCJ2ZXJ0aWNhbFwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcImRlZmF1bHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5oYW5kbGVDbGljayhcImRlZmF1bHRcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY2xpY2tcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmNsaWNrTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5jbGlja0h0bWwpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm93LWNvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiaGVhZGVyc1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJjb250ZW50c1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGxpbmtOYW1lOiBfdm0ubGlua05hbWUgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiLCBcIm1hcmdpbi1ib3R0b21cIjogXCIxMHB4XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIMKgXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiAyIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRvb2x0aXAudG9wLXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHsgXCJ0b3Atc3RhcnRcIjogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcInRpbnlcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLkuIrlt6ZcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInQtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtdG9vbHRpcC50b3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tc2csXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyB0b3A6IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCJ0aW55XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5LiK5LitXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiAyIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRvb2x0aXAudG9wLWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7IFwidG9wLWVuZFwiOiB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwidGlueVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuS4iuWPs1wiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIMKgXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsIFwibWFyZ2luLWJvdHRvbVwiOiBcIjEwcHhcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiAyIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRvb2x0aXAubGVmdC1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7IFwibGVmdC1zdGFydFwiOiB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwidGlueVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuW3puS4ilwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIMKgXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgwqBcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDCoFxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10b29sdGlwLnJpZ2h0LXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHsgXCJyaWdodC1zdGFydFwiOiB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwidGlueVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWPs+S4ilwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiLCBcIm1hcmdpbi1ib3R0b21cIjogXCIxMHB4XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10b29sdGlwLmxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tc2csXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyBsZWZ0OiB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwidGlueVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuW3puS4rVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIMKgXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgwqBcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDCoFxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10b29sdGlwLnJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHsgcmlnaHQ6IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCJ0aW55XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Y+z5LitXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsIFwibWFyZ2luLWJvdHRvbVwiOiBcIjEwcHhcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiAyIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRvb2x0aXAubGVmdC1lbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tc2csXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyBcImxlZnQtZW5kXCI6IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCJ0aW55XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5bem5LiLXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgwqBcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDCoFxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIMKgXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiAyIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRvb2x0aXAucmlnaHQtZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHsgXCJyaWdodC1lbmRcIjogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcInRpbnlcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlj7PkuItcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIiwgXCJtYXJnaW4tYm90dG9tXCI6IFwiMTBweFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDCoFxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10b29sdGlwLmJvdHRvbS1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtc2dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7IFwiYm90dG9tLXN0YXJ0XCI6IHRydWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCJ0aW55XCIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5LiL5bemXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiAyIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRvb2x0aXAuYm90dG9tXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubXNnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1zZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllcnM6IHsgYm90dG9tOiB0cnVlIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwidGlueVwiIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuS4i+S4rVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10b29sdGlwLmJvdHRvbS1lbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tc2csXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibXNnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmaWVyczogeyBcImJvdHRvbS1lbmRcIjogdHJ1ZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcInRpbnlcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLkuIvlj7NcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDCoFxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2V4YXBtcGxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NWM2MTA4YlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY1YzYxMDhiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY1YzYxMDhiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1YzYxMDhiXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjVjNjEwOGInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci9wYWdlcy9idXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRlbW8tY29udGVudCAudi1jb2xbZGF0YS12LTVmMWI2Zjg0XSwudi1jb2wgZGl2W2RhdGEtdi01ZjFiNmY4NF17XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwxNTMsMjI5LC43KTtcXG59XFxuLmRlbW8tY29udGVudCAudi1jb2xbZGF0YS12LTVmMWI2Zjg0XTpudGgtY2hpbGQob2RkKSwudi1jb2w6bnRoLWNoaWxkKG9kZCkgZGl2W2RhdGEtdi01ZjFiNmY4NF17XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTE3LCAxNzUsIDAuOSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcInNpemUtXFxcIj5zaXpl6YCJ6aG55a6a5LmJ5aSn5bCPPC9oND5cXG48cD7ln7rnoYDpgInpobnvvJp0aW5n77yI5bCP77yJ44CBZGVmYXVsdO+8iOm7mOiupO+8ieOAgWxhcmdl77yI5aSn77yJPC9wPlxcbjxwPuWuveW6puiHqumAguW6lOmAiemhue+8mmxvbmfvvIzlj6/ku6XlkoxzaXpl5Lit6Zmk5LqGYXV0b+mAiemhuemFjeWQiOS9v+eUqDwvcD5cXG48cD7oh6rlrprkuYnlrr3pq5jvvJphdXRv77yM6YWN5ZCId2lkaHTlkoxoZWlnaHTkuIDotbfkvb/nlKg8L3A+XFxuXCI7IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dC1yb3cgOmd1dHRlcj1cXFwiMTBcXFwiPlxcbiAgICA8dC1jb2wgOnNwYW49XFxcIjRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOm5vbmU7XFxcIj48ZGl2IHN0eWxlPVxcXCJiYWNrZ3JvdW5kOnJnYmEoMCwxNTMsMjI5LC43KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPVxcXCI0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpub25lO1xcXCI+PGRpdiBzdHlsZT1cXFwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49XFxcIjRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOm5vbmU7XFxcIj48ZGl2IHN0eWxlPVxcXCJiYWNrZ3JvdW5kOnJnYmEoMCwgMTE3LCAxNzUsIDAuOSlcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPVxcXCI0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpub25lO1xcXCI+PGRpdiBzdHlsZT1cXFwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49XFxcIjRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOm5vbmU7XFxcIj48ZGl2IHN0eWxlPVxcXCJiYWNrZ3JvdW5kOnJnYmEoMCwgMTE3LCAxNzUsIDAuOSlcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuPC90LXJvdz5cIjsiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJoZWFkZXJzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY29udGVudHNcIiwgeyBhdHRyczogeyBsaW5rTmFtZTogX3ZtLmxpbmtOYW1lIH0gfSwgW192bS5fdihcImluZGV4XCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcnM+PC9oZWFkZXJzPlxuICAgICAgICA8Y29udGVudHMgOmxpbmtOYW1lPSdsaW5rTmFtZSc+XG4gICAgICAgICAgICA8dC1yb3c+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyNCc+XG4gICAgICAgICAgICAgICAgICAgIDx0LW1lbnUgOmFjdGl2ZS1uYW1lPVwiMVwiIEBvbjpzZWxlY3Q9XCJvbkNsaWNrSGFuZGxlMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMTwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPScyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAyPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDM8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICA8L3QtbWVudT5cbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPHQtcm93PlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMjQnPlxuICAgICAgICAgICAgICAgICAgICA8dC1tZW51IDphY3RpdmUtbmFtZT1cIjJcIiBAb246c2VsZWN0PVwib25DbGlja0hhbmRsZTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDE8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMjwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPSczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAzPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgPC90LW1lbnU+XG4gICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDx0LXJvdz5cbiAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzI0Jz5cbiAgICAgICAgICAgICAgICAgICAgPHQtbWVudSA6YWN0aXZlLW5hbWU9XCIzXCIgQG9uOnNlbGVjdD1cIm9uQ2xpY2tIYW5kbGUzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPScxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAxPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDI8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMzwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1tZW51PlxuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8dC1yb3c+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc4Jz5cbiAgICAgICAgICAgICAgICAgICAgPHQtbWVudSBtb2RlPSd2ZXJ0aWNhbCcgOmFjdGl2ZS1uYW1lPVwiM1wiIEBvbjpzZWxlY3Q9XCJvbkNsaWNrSGFuZGxlNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMTwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPScyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAyPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDM8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICA8L3QtbWVudT5cbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nOCc+XG4gICAgICAgICAgICAgICAgICAgIDx0LW1lbnUgbW9kZT0ndmVydGljYWwnIDphY3RpdmUtbmFtZT1cIjNcIiBAb246c2VsZWN0PVwib25DbGlja0hhbmRsZTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDE8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMjwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPSczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAzPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgPC90LW1lbnU+XG4gICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzgnPlxuICAgICAgICAgICAgICAgICAgICA8dC1tZW51IDp3aWR0aD0nMzAwJyA6aGVpZ2h0PSczMCcgbW9kZT0ndmVydGljYWwnIDphY3RpdmUtbmFtZT1cIjNcIiBAb246c2VsZWN0PVwib25DbGlja0hhbmRsZTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDE8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMjwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPSczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAzPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgPC90LW1lbnU+XG4gICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgIDwvY29udGVudHM+XG4gICAgICAgIDxmb290ZXJzPjwvZm9vdGVycz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiIHNjb3BlZD5cbiAgICBcbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtOYW1lOiflr7zoiKonXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICAgICAgb25DbGlja0hhbmRsZTE6IGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cCgnb25DbGlja0hhbmRsZTEnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrSGFuZGxlMjogZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdvbkNsaWNrSGFuZGxlMicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGUzOiBmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ29uQ2xpY2tIYW5kbGUzJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja0hhbmRsZTQ6IGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cCgnb25DbGlja0hhbmRsZTQnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrSGFuZGxlNTogZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdvbkNsaWNrSGFuZGxlNScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGU2OiBmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ29uQ2xpY2tIYW5kbGU2Jyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcnM+PC9oZWFkZXJzPlxuICAgICAgICA8Y29udGVudHMgOmxpbmtOYW1lPSdsaW5rTmFtZSc+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb2RlPSdob3Jpem9udGFsJyBtb3JlPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyNCc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwibWFya2Rvd25cIiB2LXRleHQ9XCJpbmZvXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cImNvZGVcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90LWV4YXBtcGxlPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vZGU9J3ZlcnRpY2FsJyBtb3JlPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyNCc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwibWFya2Rvd25cIiB2LXRleHQ9XCJpbmZvXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cImNvZGVcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90LWV4YXBtcGxlPlxuICAgICAgICA8L2NvbnRlbnRzPlxuICAgICAgICA8Zm9vdGVycz48L2Zvb3RlcnM+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIj48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgaW5mbyBmcm9tICcuLi9kb2MvZXhhcG1wbGUtaW5mby5tZCc7XG4gICAgaW1wb3J0IGNvZGUgZnJvbSAnLi4vZG9jL2V4YXBtcGxlLWNvZGUubWQnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGRhdGE6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua05hbWU6ICfkvovlrZDlsZXnpLonLFxuICAgICAgICAgICAgICAgIGluZm86IGluZm8sXG4gICAgICAgICAgICAgICAgY29kZTogY29kZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0LXJvdyB0eXBlPSdmbGV4Jz5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93IHR5cGU9J2ZsZXgnPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdyB0eXBlPSdmbGV4Jz5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG48L3Qtcm93PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3RhcnQnPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J2VuZCc+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG48L3Qtcm93Plxcbjxicj5cXG48dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nY2VudGVyJz5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cIjsiLCIvKiBnbG9iYWxzIF9fVlVFX1NTUl9DT05URVhUX18gKi9cblxuLy8gSU1QT1JUQU5UOiBEbyBOT1QgdXNlIEVTMjAxNSBmZWF0dXJlcyBpbiB0aGlzIGZpbGUgKGV4Y2VwdCBmb3IgbW9kdWxlcykuXG4vLyBUaGlzIG1vZHVsZSBpcyBhIHJ1bnRpbWUgdXRpbGl0eSBmb3IgY2xlYW5lciBjb21wb25lbnQgbW9kdWxlIG91dHB1dCBhbmQgd2lsbFxuLy8gYmUgaW5jbHVkZWQgaW4gdGhlIGZpbmFsIHdlYnBhY2sgdXNlciBidW5kbGUuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNvbXBvbmVudCAoXG4gIHNjcmlwdEV4cG9ydHMsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmdW5jdGlvbmFsVGVtcGxhdGUsXG4gIGluamVjdFN0eWxlcyxcbiAgc2NvcGVJZCxcbiAgbW9kdWxlSWRlbnRpZmllciwgLyogc2VydmVyIG9ubHkgKi9cbiAgc2hhZG93TW9kZSAvKiB2dWUtY2xpIG9ubHkgKi9cbikge1xuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKHJlbmRlcikge1xuICAgIG9wdGlvbnMucmVuZGVyID0gcmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBzdGF0aWNSZW5kZXJGbnNcbiAgICBvcHRpb25zLl9jb21waWxlZCA9IHRydWVcbiAgfVxuXG4gIC8vIGZ1bmN0aW9uYWwgdGVtcGxhdGVcbiAgaWYgKGZ1bmN0aW9uYWxUZW1wbGF0ZSkge1xuICAgIG9wdGlvbnMuZnVuY3Rpb25hbCA9IHRydWVcbiAgfVxuXG4gIC8vIHNjb3BlZElkXG4gIGlmIChzY29wZUlkKSB7XG4gICAgb3B0aW9ucy5fc2NvcGVJZCA9ICdkYXRhLXYtJyArIHNjb3BlSWRcbiAgfVxuXG4gIHZhciBob29rXG4gIGlmIChtb2R1bGVJZGVudGlmaWVyKSB7IC8vIHNlcnZlciBidWlsZFxuICAgIGhvb2sgPSBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgLy8gMi4zIGluamVjdGlvblxuICAgICAgY29udGV4dCA9XG4gICAgICAgIGNvbnRleHQgfHwgLy8gY2FjaGVkIGNhbGxcbiAgICAgICAgKHRoaXMuJHZub2RlICYmIHRoaXMuJHZub2RlLnNzckNvbnRleHQpIHx8IC8vIHN0YXRlZnVsXG4gICAgICAgICh0aGlzLnBhcmVudCAmJiB0aGlzLnBhcmVudC4kdm5vZGUgJiYgdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQpIC8vIGZ1bmN0aW9uYWxcbiAgICAgIC8vIDIuMiB3aXRoIHJ1bkluTmV3Q29udGV4dDogdHJ1ZVxuICAgICAgaWYgKCFjb250ZXh0ICYmIHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgICAgfVxuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCBzdHlsZXNcbiAgICAgIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICAgICAgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgY29udGV4dClcbiAgICAgIH1cbiAgICAgIC8vIHJlZ2lzdGVyIGNvbXBvbmVudCBtb2R1bGUgaWRlbnRpZmllciBmb3IgYXN5bmMgY2h1bmsgaW5mZXJyZW5jZVxuICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMpIHtcbiAgICAgICAgY29udGV4dC5fcmVnaXN0ZXJlZENvbXBvbmVudHMuYWRkKG1vZHVsZUlkZW50aWZpZXIpXG4gICAgICB9XG4gICAgfVxuICAgIC8vIHVzZWQgYnkgc3NyIGluIGNhc2UgY29tcG9uZW50IGlzIGNhY2hlZCBhbmQgYmVmb3JlQ3JlYXRlXG4gICAgLy8gbmV2ZXIgZ2V0cyBjYWxsZWRcbiAgICBvcHRpb25zLl9zc3JSZWdpc3RlciA9IGhvb2tcbiAgfSBlbHNlIGlmIChpbmplY3RTdHlsZXMpIHtcbiAgICBob29rID0gc2hhZG93TW9kZVxuICAgICAgPyBmdW5jdGlvbiAoKSB7IGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIHRoaXMuJHJvb3QuJG9wdGlvbnMuc2hhZG93Um9vdCkgfVxuICAgICAgOiBpbmplY3RTdHlsZXNcbiAgfVxuXG4gIGlmIChob29rKSB7XG4gICAgaWYgKG9wdGlvbnMuZnVuY3Rpb25hbCkge1xuICAgICAgLy8gZm9yIHRlbXBsYXRlLW9ubHkgaG90LXJlbG9hZCBiZWNhdXNlIGluIHRoYXQgY2FzZSB0aGUgcmVuZGVyIGZuIGRvZXNuJ3RcbiAgICAgIC8vIGdvIHRocm91Z2ggdGhlIG5vcm1hbGl6ZXJcbiAgICAgIG9wdGlvbnMuX2luamVjdFN0eWxlcyA9IGhvb2tcbiAgICAgIC8vIHJlZ2lzdGVyIGZvciBmdW5jdGlvYWwgY29tcG9uZW50IGluIHZ1ZSBmaWxlXG4gICAgICB2YXIgb3JpZ2luYWxSZW5kZXIgPSBvcHRpb25zLnJlbmRlclxuICAgICAgb3B0aW9ucy5yZW5kZXIgPSBmdW5jdGlvbiByZW5kZXJXaXRoU3R5bGVJbmplY3Rpb24gKGgsIGNvbnRleHQpIHtcbiAgICAgICAgaG9vay5jYWxsKGNvbnRleHQpXG4gICAgICAgIHJldHVybiBvcmlnaW5hbFJlbmRlcihoLCBjb250ZXh0KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHJlZ2lzdHJhdGlvbiBhcyBiZWZvcmVDcmVhdGUgaG9va1xuICAgICAgdmFyIGV4aXN0aW5nID0gb3B0aW9ucy5iZWZvcmVDcmVhdGVcbiAgICAgIG9wdGlvbnMuYmVmb3JlQ3JlYXRlID0gZXhpc3RpbmdcbiAgICAgICAgPyBbXS5jb25jYXQoZXhpc3RpbmcsIGhvb2spXG4gICAgICAgIDogW2hvb2tdXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBleHBvcnRzOiBzY3JpcHRFeHBvcnRzLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoNCBpZD1cXFwiYWxpZ24tXFxcIj5hbGlnbueUqOazlTwvaDQ+XFxuPHVsPlxcbjxsaT7lvZNyb3fnmoR0eXBl6K6+572u5Li6ZmxleOaXtu+8jOWNs+WPr+iuvue9rmFsaWduPC9saT5cXG48bGk+5pyJ5LiJ5Liq5Y+C5pWw77yMdG9w77yI5bGA5LiK77yJ44CBbWlkZGxl77yI5bGA5Lit77yJ44CBYm90dG9t77yI5bGF5LiL77yJPC9saT5cXG48L3VsPlxcblwiOyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImhlYWRlcnNcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjb250ZW50c1wiLCB7IGF0dHJzOiB7IGxpbmtOYW1lOiBfdm0ubGlua05hbWUgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctcmlnaHRcIjogXCIyMHB4XCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInQtdGFibGVcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyB3aWR0aDogWzEwLCAxMCwgMTAsIDIwLCAyNSwgMzBdIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXRoZWFkXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC10clwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5LiAXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kuoxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+S4iVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5ZubXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kupRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+WFrVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC10clwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5LiAXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kuoxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+S4iVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5ZubXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kupRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+WFrVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC10clwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5LiAXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kuoxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+S4iVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5ZubXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kupRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+WFrVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXRib2R5XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC10clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LiA5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkuozlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS4ieWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5Zub5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkupTlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOWFreWkqVwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtdHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS4gOWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LqM5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkuInlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOWbm+WkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LqU5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzlha3lpKlcIildKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuesrOS4gOWkqVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLnrKzkuIDlpKkrMVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LqM5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkuInlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOWbm+WkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LqU5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzlha3lpKlcIildKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkuIDlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS6jOWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LiJ5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzlm5vlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS6lOWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5YWt5aSpXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCLnrKzlha3lpKkrMVwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZvb3RlcnNcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LWZvb3RlcltkYXRhLXYtZTVlMGU4MTZde1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICAgIGJhY2tncm91bmQ6ICMwMDA7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4N2RjNzEwJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZGRlYWNmZDhcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zODdkYzcxMCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzg3ZGM3MTAmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kYmFjYjM3YSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kYmFjYjM3YSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRiYWNiMzdhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YzNjZjJlZSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2MzY2YyZWUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2MzY2YyZWUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCItZGlzYWJsZWRcXFwiPuemgeatoumAieS4rWRpc2FibGVkPC9oND5cXG48cD7kvb/nlKhkaXNhYmxlZOWxnuaAp+WPr+S7peiuqWJ1dHRvbuaMiemSruWkhOS6juemgeatoueKtuaAgTwvcD5cXG5cIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU1ZTBlODE2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTVlMGU4MTYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIjx0ZW1wbGF0ZT5cbiAgICA8dC1oZWFkZXIgY2xhc3M9J3YtaGVhZGVyLWRlbW8nIDp3aWR0aD1cIjEyMDBcIj5oZWFkZXI8L3QtaGVhZGVyPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwiY3NzXCIgc2NvcGVkPlxuICAgIC52LWhlYWRlci1kZW1ve1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBcbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Rvb2x0aXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmMWViZDBjXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdG9vbHRpcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdG9vbHRpcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90b29sdGlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWYxZWJkMGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWYxZWJkMGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Rvb2x0aXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmMWViZDBjXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWYxZWJkMGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci9wYWdlcy90b29sdGlwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzg3ZGM3MTAmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zODdkYzcxMCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInQtbGF5b3V0XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ2LWNvbnRlbnRzXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ0LXNpZGVyXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidC1tZW51XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDE4MCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1LFxuICAgICAgICAgICAgICAgIG1vZGU6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICBcImFjdGl2ZS1uYW1lXCI6IF92bS5saW5rTmFtZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBcIm9uOnNlbGVjdFwiOiBfdm0ucm91dGVySGFuZGxlIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnJvdXRlcywgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgeyBrZXk6IGluZGV4LCBhdHRyczogeyBuYW1lOiBpdGVtLm5hbWUgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaXRlbS5uYW1lKSArIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidC1jb250ZW50XCIsIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0LXNpZGVyXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiN2NiYjg1Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjdjYmI4NSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjdjYmI4NSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxuICAgIDx0LXJvdz4xMTExPC90LXJvdz5cXG48L3RlbXBsYXRlPiAgXFxuXFxuPHNjcmlwdD5cXG5leHBvcnQgZGVmYXVsdHtcXG4gICAgZGF0YTpmdW5jdGlvbigpe1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBsaW5rTmFtZTogJ+S+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuuS+i+WtkOWxleekuicsXFxuICAgICAgICB9XFxuICAgIH1cXG59XFxuPC9zY3JpcHQ+XCI7IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXJzPjwvaGVhZGVycz5cbiAgICAgICAgPGNvbnRlbnRzIDpsaW5rTmFtZT0nbGlua05hbWUnPmluZGV4PC9jb250ZW50cz5cbiAgICAgICAgPGZvb3RlcnM+PC9mb290ZXJzPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwiY3NzXCIgc2NvcGVkPjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtOYW1lOiAn6aaW6aG1J1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0LWNvbCA6b2Zmc2V0PScxJyA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLDE1MywyMjksLjcpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbjx0LWNvbCA6b2Zmc2V0PScyJyA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG48dC1jb2wgOm9mZnNldD0nMycgOnNwYW49XFxcIjRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOm5vbmU7XFxcIj48ZGl2IHN0eWxlPVxcXCJiYWNrZ3JvdW5kOnJnYmEoMCwgMTE3LCAxNzUsIDAuOSlcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuPHQtY29sIDpvZmZzZXQ9JzQnIDpzcGFuPVxcXCI0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpub25lO1xcXCI+PGRpdiBzdHlsZT1cXFwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbjx0LWNvbCA6b2Zmc2V0PSc1JyA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG48dC1jb2wgOm9mZnNldD0nNicgOnNwYW49XFxcIjRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOm5vbmU7XFxcIj48ZGl2IHN0eWxlPVxcXCJiYWNrZ3JvdW5kOnJnYmEoMCwgMTE3LCAxNzUsIDAuOSlcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtY29udGVudHN7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgcGFkZGluZy10b3AgOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcXG5cXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjc5ZjlkNjQ4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2V4YXBtcGxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcInR5cGVcXFwiPnR5cGU8L2g0PlxcbjxwPmJ1dHRvbuaMiemSruaciTTnp43moLflvI/vvJpkZWZhdWx044CBdGV4dOOAgXdhcm5pbmfjgIFlcnJvcjwvcD5cXG5cIjsiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4N2RjNzEwJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4N2RjNzEwJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzg3ZGM3MTAmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCJmbGV4LVxcXCI+ZmxleOaooeW8j+etieWIhjwvaDQ+XFxuPHVsPlxcbjxsaT7orrJyb3fnmoR0eXBl5YC86K6+572u5Li6ZmxleO+8jOmCo+S5iOezu+e7n+WwseS8muWuieijhWZsZXjnmoTmqKHlvI/ov5vooYzluIPlsYDvvIxjb2znmoRzcGFu6K6+572u5rKh5pyJ5b2x5ZON44CCPC9saT5cXG48L3VsPlxcblwiOyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0LWZvb3RlclwiLCBbX3ZtLl92KFwiZm9vdGVyXCIpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3YzE3OTgxXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2lucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2lucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTdjMTc5ODEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTdjMTc5ODEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2lucHV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01N2MxNzk4MVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU3YzE3OTgxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzZXJ2ZXIvcGFnZXMvaW5wdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2MzY2YyZWUmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2MzY2YyZWUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiN2MzY2YyZWVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdjM2NmMmVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdjM2NmMmVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2MzY2YyZWUmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YzNjZjJlZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic2VydmVyL3BhZ2VzL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8dC1yb3cgdHlwZT0nZmxleCcgYWxpZ249J3RvcCc+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cXFwiaGVpZ2h0OiAxNDBweDtcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cXFwiaGVpZ2h0OiAxMDBweDtcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XFxcImhlaWdodDogODBweDtcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J2NlbnRlcicgYWxpZ249J21pZGRsZSc+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cXFwiaGVpZ2h0OiAxNDBweDtcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cXFwiaGVpZ2h0OiAxMDBweDtcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XFxcImhlaWdodDogODBweDtcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J2NlbnRlcicgYWxpZ249J2JvdHRvbSc+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cXFwiaGVpZ2h0OiAxNDBweDtcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cXFwiaGVpZ2h0OiAxMDBweDtcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XFxcImhlaWdodDogODBweDtcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuPC90LXJvdz5cIjsiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGJhY2IzN2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3MDJiMDkzMFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRiYWNiMzdhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kYmFjYjM3YSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IGluZGV4IGZyb20gJy4vcGFnZXMvaW5kZXgudnVlJztcbmltcG9ydCByb3dDb2wgZnJvbSAnLi9wYWdlcy9yb3ctY29sLnZ1ZSc7XG5pbXBvcnQgYnV0dG9uIGZyb20gJy4vcGFnZXMvYnV0dG9uLnZ1ZSc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4vcGFnZXMvbGF5b3V0LnZ1ZSc7XG5pbXBvcnQgdGFibGUgZnJvbSAnLi9wYWdlcy90YWJsZS52dWUnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4vcGFnZXMvaW5wdXQudnVlJztcbmltcG9ydCBtZW51IGZyb20gJy4vcGFnZXMvbWVudS52dWUnO1xuaW1wb3J0IHRvb2x0aXAgZnJvbSAnLi9wYWdlcy90b29sdGlwLnZ1ZSc7XG5pbXBvcnQgZXhhcG1wbGUgZnJvbSAnLi9wYWdlcy9leGFwbXBsZS52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBbXG4gICAgeyBcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBuYW1lOiAn6aaW6aG1JyxcbiAgICAgICAgY29tcG9uZW50OiBpbmRleCBcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIHBhdGg6ICcvcm93LWNvbCcsXG4gICAgICAgIG5hbWU6ICfmoIXmoI8nLFxuICAgICAgICBjb21wb25lbnQ6IHJvd0NvbCBcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIHBhdGg6ICcvYnV0dG9uJyxcbiAgICAgICAgbmFtZTogJ+aMiemSricsXG4gICAgICAgIGNvbXBvbmVudDogYnV0dG9uIFxuICAgIH0sXG4gICAgeyBcbiAgICAgICAgcGF0aDogJy9sYXlvdXQnLFxuICAgICAgICBuYW1lOiAn5biD5bGAJyxcbiAgICAgICAgY29tcG9uZW50OiBsYXlvdXRcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIHBhdGg6ICcvbWVudScsXG4gICAgICAgIG5hbWU6ICflr7zoiKonLFxuICAgICAgICBjb21wb25lbnQ6IG1lbnVcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIHBhdGg6ICcvdGFibGUnLFxuICAgICAgICBuYW1lOiAn6KGo5qC8JyxcbiAgICAgICAgY29tcG9uZW50OiB0YWJsZSBcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIHBhdGg6ICcvaW5wdXQnLFxuICAgICAgICBuYW1lOiAn6L6T5YWl5qGGJyxcbiAgICAgICAgY29tcG9uZW50OiBpbnB1dFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL3Rvb2x0aXAnLFxuICAgICAgICBuYW1lOiAn5rCU5rOh5o+Q56S6JyxcbiAgICAgICAgY29tcG9uZW50OiB0b29sdGlwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHBhdGg6ICcvZXhhcG1wbGUnLFxuICAgICAgICBuYW1lOiAn5L6L5a2Q5bGV56S6JyxcbiAgICAgICAgY29tcG9uZW50OiBleGFwbXBsZVxuICAgIH1cbl07IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNiNGIxZTJkXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbnRlbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NvbnRlbnRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2I0YjFlMmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2I0YjFlMmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbnRlbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjRiMWUyZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNiNGIxZTJkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzZXJ2ZXIvd2ViQ29tcG9uZW50cy9jb250ZW50cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NGM0Mjg4MyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0YzQyODgzJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NGM0Mjg4MyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rvb2x0aXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdG9vbHRpcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjFiNmY4NCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Jvdy1jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Jvdy1jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcm93LWNvbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjFiNmY4NCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1ZjFiNmY4NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWYxYjZmODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWYxYjZmODQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Jvdy1jb2wudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmMWI2Zjg0JnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWYxYjZmODQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci9wYWdlcy9yb3ctY29sLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=