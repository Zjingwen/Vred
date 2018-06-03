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

/***/ "+QLl":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/button.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************/
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

/***/ "+q5c":
/*!********************************************************!*\
  !*** ./server/pages/index.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js */ "rI/7");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

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
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./input.vue?vue&type=style&index=0&lang=css */ "Mw+4");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "/l5a":
/*!***********************************!*\
  !*** ./server/doc/row/justify.md ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"justify-\">justify用法</h4>\n<ul>\n<li>当row的type设置为flex时，即可设置justify</li>\n<li>有四个参数，start（局左）、end（局右）、center（居中）、space-around（对其）\n  、space-between（两端对其）</li>\n</ul>\n";

/***/ }),

/***/ "0QfO":
/*!*******************************************************!*\
  !*** ./server/pages/menu.vue?vue&type=script&lang=js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./menu.vue?vue&type=script&lang=js */ "mL5P");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0Ss6":
/*!************************************!*\
  !*** ./server/doc/row/static.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-row>\n    <t-col :span='24'>col</t-col>\n</t-row>\n<br>\n<t-row>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n    <t-col :span='5'>col</t-col>\n</t-row>\n<br>\n<t-row>\n    <t-col :span='4'>col</t-col>\n    <t-col :span='4'>col</t-col>\n    <t-col :span='4'>col</t-col>\n    <t-col :span='4'>col</t-col>\n    <t-col :span='4'>col</t-col>\n    <t-col :span='4'>col</t-col>\n</t-row>\n<br>\n<t-row>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n    <t-col :span='3'>col</t-col>\n</t-row>\n<br>\n<t-row>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n    <t-col :span='2'>col</t-col>\n</t-row>\n<br>\n<t-row>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n    <t-col :span='1'>col</t-col>\n</t-row>";

/***/ }),

/***/ "1/h0":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/table.vue?vue&type=template&id=7b7cbb85&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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

/***/ "13OY":
/*!***********************************************************!*\
  !*** ./server/pages/exapmple.vue?vue&type=script&lang=js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./exapmple.vue?vue&type=script&lang=js */ "PHhM");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1Hq0":
/*!*****************************************!*\
  !*** ./server/doc/button/htmlType.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-button htmlType=\"button\">button</t-button>\n<br><br>\n<t-button htmlType=\"submit\">submit</t-button>\n<br><br>\n<t-button htmlType=\"reset\">reset</t-button>";

/***/ }),

/***/ "1eXW":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true */ "TxeJ");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("4c036bf2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "1ti1":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true */ "w0G1");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("59c5d4c2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "2N2x":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/headers.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
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

/***/ "30+k":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true */ "5k3T");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("2941f097", content, false, {});
// Hot Module Replacement
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
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./exapmple.vue?vue&type=style&index=0&lang=css */ "vHuB");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3Gwo":
/*!**************************************************************!*\
  !*** ./server/pages/input.vue?vue&type=template&id=57c17981 ***!
  \**************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_57c17981__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./input.vue?vue&type=template&id=57c17981 */ "tHoD");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_57c17981__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_template_id_57c17981__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "3RPg":
/*!*****************************************!*\
  !*** ./server/doc/layout/no-sider.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-header>header</t-header>\n<t-layout class='demo-content'>\n    <t-content>\n        <p v-for=\"i in 10\" :key='i' v-text='i'></p>\n    </t-content>\n</t-layout>\n<t-footer>footer</t-footer>";

/***/ }),

/***/ "3Wui":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.v-header[data-v-64c42883],\n.v-footer[data-v-64c42883] {\n  text-align: center;\n  height: 36px;\n  line-height: 36px;\n  background: #b3c0d1;\n  color: #fff;\n  font-size: 12px;\n}\n.v-sider[data-v-64c42883] {\n  background: rgba(0, 153, 229, 0.7);\n}\n.v-content[data-v-64c42883] {\n  background: rgba(0, 117, 175, 0.9);\n}\n", ""]);

// exports


/***/ }),

/***/ "3aBk":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/contents.vue?vue&type=template&id=3b4b1e2d ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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

/***/ "40a+":
/*!*************************************!*\
  !*** ./server/doc/button/size.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-button size='tiny'>tiny</t-button>\n<br>\n<br>\n<t-button size='default'>default</t-button>\n<br>\n<br>\n<t-button size='large'>large</t-button>\n<br>\n<br>\n<t-button size='auto' :width='120' :height='50'>auto</t-button>\n<br>\n<br>\n<t-button size='default' long>long</t-button>";

/***/ }),

/***/ "454C":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/tooltip.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./tooltip.vue?vue&type=style&index=0&lang=css */ "Ow2E");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "4DKN":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true */ "djP6");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "5/ze":
/*!********************************************************!*\
  !*** ./server/pages/input.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./input.vue?vue&type=script&lang=js */ "eKbZ");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_input_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5ffr":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/table.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
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

/***/ "5icY":
/*!*************************************************************************!*\
  !*** ./server/webComponents/contents.vue?vue&type=template&id=3b4b1e2d ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_template_id_3b4b1e2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./contents.vue?vue&type=template&id=3b4b1e2d */ "3aBk");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_template_id_3b4b1e2d__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_template_id_3b4b1e2d__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "5k3T":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true */ "bZeE");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "6KBx":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true */ "3Wui");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "6jnl":
/*!*************************************!*\
  !*** ./server/doc/button/type.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-button>default</t-button>\n<br><br>\n<t-button type='text'>text</t-button>\n<br><br>\n<t-button type='warning'>warning</t-button>\n<br><br>\n<t-button type='error'>error</t-button>";

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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "8mW/":
/*!******************************************************************************************!*\
  !*** ./server/pages/row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_style_index_0_id_5f1b6f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true */ "Be0r");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_style_index_0_id_5f1b6f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_style_index_0_id_5f1b6f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_style_index_0_id_5f1b6f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_style_index_0_id_5f1b6f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_style_index_0_id_5f1b6f84_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "9QQ4":
/*!*****************************************************************************************!*\
  !*** ./server/pages/layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_64c42883_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true */ "Paa7");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_64c42883_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_64c42883_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_64c42883_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_64c42883_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_64c42883_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "Aqnx":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/button.vue?vue&type=template&id=65c6108b ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.sizeMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { textContent: _vm._s(_vm.sizeHtml) },
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
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.typeMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { textContent: _vm._s(_vm.typeHtml) },
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
            _c("div", {
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
            _c("div", {
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

/***/ "BDYz":
/*!**************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addStylesClient; });
/* harmony import */ var _listToStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listToStyles */ "dJqi");
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

/***/ "BMg7":
/*!********************************************!*\
  !*** ./server/doc/layout/right-sider.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-header>header</t-header>\n<t-layout class='demo-content'>\n  <t-content>\n    <p v-for=\"i in 10\" :key='i' v-text='i'></p>\n  </t-content>\n  <t-sider width=\"400\">sider</t-sider>\n</t-layout>\n<t-footer>footer</t-footer>";

/***/ }),

/***/ "Be0r":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true */ "mHE3");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("f1e10d68", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "C1P+":
/*!**************************************************************************************************!*\
  !*** ./server/webComponents/headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_style_index_0_id_dbacb37a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true */ "1ti1");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_style_index_0_id_dbacb37a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_style_index_0_id_dbacb37a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_style_index_0_id_dbacb37a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_style_index_0_id_dbacb37a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_style_index_0_id_dbacb37a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Ceic":
/*!*************************************************************************!*\
  !*** ./server/pages/menu.vue?vue&type=template&id=387dc710&scoped=true ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_387dc710_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./menu.vue?vue&type=template&id=387dc710&scoped=true */ "mX/Q");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_387dc710_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_387dc710_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

new Vue({
  router: router
}).$mount('#app');

/***/ }),

/***/ "DRpc":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/contents.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.v-contents{\n    margin: 0 auto;\n    background: #FFF;\n    padding-bottom: 20px;\n    padding-top : 20px;\n    margin-bottom: 20px;\n    min-height: 800px;\n\n    font-size: 14px;\n}\n", ""]);

// exports


/***/ }),

/***/ "DT+b":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/input.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "EPg8":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/exapmple.vue?vue&type=style&index=0&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./exapmple.vue?vue&type=style&index=0&lang=css */ "X8JT");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "F6oO":
/*!**************************************************************************!*\
  !*** ./server/pages/table.vue?vue&type=template&id=7b7cbb85&scoped=true ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_7b7cbb85_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table.vue?vue&type=template&id=7b7cbb85&scoped=true */ "1/h0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_7b7cbb85_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_7b7cbb85_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "FkQF":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/row-col.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
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
//
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

/***/ "FlKb":
/*!**************************************************************************!*\
  !*** ./server/pages/index.vue?vue&type=template&id=7c3cf2ee&scoped=true ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7c3cf2ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7c3cf2ee&scoped=true */ "dpXq");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7c3cf2ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7c3cf2ee_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "Gpx9":
/*!******************************************************************!*\
  !*** ./server/webComponents/footers.vue?vue&type=script&lang=js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./footers.vue?vue&type=script&lang=js */ "X6Gd");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "H0Zh":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.v-header-demo[data-v-dbacb37a]{\n    height: 36px;\n    line-height: 36px;\n    background-color: #FFF;\n    color: #000;\n    font-size: 15px;\n    margin-bottom: 20px;\n}\n", ""]);

// exports


/***/ }),

/***/ "H9fe":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/contents.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "KDq5":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/button.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./button.vue?vue&type=style&index=0&lang=css */ "vsEG");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("68a4fe31", content, false, {});
// Hot Module Replacement
if(false) {}

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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "KcLR":
/*!***************************************!*\
  !*** ./server/doc/tooltip/tooltip.md ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"tootip-\">tootip的基础用法</h4>\n<ul>\n<li>上左:v-tooltip.top-start</li>\n<li>上中:v-tooltip.top</li>\n<li>上右:v-tooltip.top-end</li>\n<li>左上:v-tooltip.left-start</li>\n<li>右上:v-tooltip.right-start</li>\n<li>左中:v-tooltip.left</li>\n<li>右中:v-tooltip.right</li>\n<li>左下:v-tooltip.left-end</li>\n<li>右下:v-tooltip.right</li>\n<li>下左:v-tooltip.bottom-start</li>\n<li>下中:v-tooltip.bottom</li>\n<li>下右:v-tooltip.bottom-end</li>\n</ul>\n";

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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_template_id_1f1ebd0c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./tooltip.vue?vue&type=template&id=1f1ebd0c */ "nDij");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_template_id_1f1ebd0c__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_template_id_1f1ebd0c__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "Mw+4":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/input.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./input.vue?vue&type=style&index=0&lang=css */ "yfTq");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("21fb5112", content, false, {});
// Hot Module Replacement
if(false) {}

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
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3cf2ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true */ "PYzt");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3cf2ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3cf2ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3cf2ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3cf2ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_7c3cf2ee_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "O/Wn":
/*!**********************************!*\
  !*** ./server/doc/row/gutter.md ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"-\">每一列之间的间隔</h4>\n<ul>\n<li>在row上面设置每一个col之间的间隔</li>\n</ul>\n";

/***/ }),

/***/ "O9mY":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true */ "4DKN");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("ee1e52c2", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "OtyK":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true */ "Pcrv");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "Ow2E":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/tooltip.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.mb10-ce{\n    margin-bottom: 10px;\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "PHhM":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/exapmple.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************/
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

/***/ "PYzt":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true */ "OtyK");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("5fa505b4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "Paa7":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&id=64c42883&lang=css&scoped=true */ "6KBx");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("b598a12c", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "Pcrv":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/index.vue?vue&type=style&index=0&id=7c3cf2ee&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "QdjM":
/*!**********************************************************!*\
  !*** ./server/pages/tooltip.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./tooltip.vue?vue&type=script&lang=js */ "y/2j");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "RFEo":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/footers.vue?vue&type=template&id=e5e0e816&scoped=true ***!
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
  return _c("t-footer", [_vm._v("footer")])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "RFXK":
/*!****************************************************************************************!*\
  !*** ./server/pages/table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_7b7cbb85_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true */ "1eXW");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_7b7cbb85_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_7b7cbb85_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_7b7cbb85_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_7b7cbb85_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_style_index_0_id_7b7cbb85_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "TZ3a":
/*!**********************************************************!*\
  !*** ./server/pages/row-col.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./row-col.vue?vue&type=script&lang=js */ "FkQF");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "TxeJ":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true */ "z8Yn");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "UoDk":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/tooltip.vue?vue&type=style&index=0&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./tooltip.vue?vue&type=style&index=0&lang=css */ "454C");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("0b9b16d2", content, false, {});
// Hot Module Replacement
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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_template_id_5f1b6f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./row-col.vue?vue&type=template&id=5f1b6f84&scoped=true */ "q7I/");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_template_id_5f1b6f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_row_col_vue_vue_type_template_id_5f1b6f84_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "UyyM":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/layout.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _noSider = __webpack_require__(/*! ../doc/layout/no-sider.html */ "3RPg");

var _noSider2 = _interopRequireDefault(_noSider);

var _noSider3 = __webpack_require__(/*! ../doc/layout/no-sider.md */ "nhqS");

var _noSider4 = _interopRequireDefault(_noSider3);

var _leftSider = __webpack_require__(/*! ../doc/layout/left-sider.html */ "jsMt");

var _leftSider2 = _interopRequireDefault(_leftSider);

var _leftSider3 = __webpack_require__(/*! ../doc/layout/left-sider.md */ "kGBH");

var _leftSider4 = _interopRequireDefault(_leftSider3);

var _rightSider = __webpack_require__(/*! ../doc/layout/right-sider.html */ "BMg7");

var _rightSider2 = _interopRequireDefault(_rightSider);

var _rightSider3 = __webpack_require__(/*! ../doc/layout/right-sider.md */ "V4q7");

var _rightSider4 = _interopRequireDefault(_rightSider3);

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

exports.default = {
  data: function data() {
    return {
      linkName: "布局",
      noSiferHtml: _noSider2.default,
      noSiferMd: _noSider4.default,
      leftSiferHtml: _leftSider2.default,
      leftSiferMd: _leftSider4.default,
      rightSiferHtml: _rightSider2.default,
      rightSiferMd: _rightSider4.default
    };
  }
};

/***/ }),

/***/ "V4q7":
/*!******************************************!*\
  !*** ./server/doc/layout/right-sider.md ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"right-sider\">right-sider</h4>\n<ul>\n<li>左边栏的上中下左布局</li>\n</ul>\n";

/***/ }),

/***/ "VpqN":
/*!********************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader/lib/urls.js ***!
  \********************************************************************/
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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "X6Gd":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/footers.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************/
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

/***/ "X8JT":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/exapmple.vue?vue&type=style&index=0&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "XCsI":
/*!***************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js ***!
  \***************************************************************************************/
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

/***/ "XIx+":
/*!***************************************************************!*\
  !*** ./server/pages/button.vue?vue&type=template&id=65c6108b ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_65c6108b__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./button.vue?vue&type=template&id=65c6108b */ "Aqnx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_65c6108b__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_65c6108b__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "XKov":
/*!***********************************!*\
  !*** ./server/doc/button/size.md ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"size-\">size选项定义大小</h4>\n<p>基础选项：ting（小）、default（默认）、large（大）</p>\n<p>宽度自适应选项：long，可以和size中除了auto选项配合使用</p>\n<p>自定义宽高：auto，配合widht和height一起使用</p>\n";

/***/ }),

/***/ "XQBI":
/*!*******************************************************************!*\
  !*** ./server/webComponents/contents.vue?vue&type=script&lang=js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./contents.vue?vue&type=script&lang=js */ "H9fe");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Y5cL":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.demo-content .v-col[data-v-5f1b6f84],.v-col div[data-v-5f1b6f84]{\n    font-size: 12px;\n    line-height: 3;\n    text-align: center;\n    color: #FFF;\n    background: rgba(0,153,229,.7);\n}\n.demo-content .v-col[data-v-5f1b6f84]:nth-child(odd),.v-col:nth-child(odd) div[data-v-5f1b6f84]{\n    background: rgba(0, 117, 175, 0.9);\n}\n", ""]);

// exports


/***/ }),

/***/ "YE0Q":
/*!************************************!*\
  !*** ./server/doc/row/gutter.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-row :gutter=\"10\">\n    <t-col :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n    <t-col :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n    <t-col :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n    <t-col :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n    <t-col :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n    <t-col :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n</t-row>";

/***/ }),

/***/ "YbWx":
/*!*************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js ***!
  \*************************************************************************/
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

var	fixUrls = __webpack_require__(/*! ./urls */ "VpqN");

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

/***/ "ZI5K":
/*!***************************************************************************!*\
  !*** ./server/pages/layout.vue?vue&type=template&id=64c42883&scoped=true ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_64c42883_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./layout.vue?vue&type=template&id=64c42883&scoped=true */ "hIlM");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_64c42883_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_64c42883_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "azFL":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/contents.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./contents.vue?vue&type=style&index=0&lang=css */ "DRpc");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "bGW4":
/*!************************************************************************************!*\
  !*** ./server/webComponents/headers.vue?vue&type=template&id=dbacb37a&scoped=true ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_template_id_dbacb37a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./headers.vue?vue&type=template&id=dbacb37a&scoped=true */ "eys+");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_template_id_dbacb37a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_template_id_dbacb37a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "bZeE":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.v-footer[data-v-e5e0e816]{\n    text-align: center;\n    height: 36px;\n    line-height: 36px;\n    background: #000;\n    color: #FFF;\n    font-size: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ "c3CU":
/*!*********************************!*\
  !*** ./server/doc/row/align.md ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"align-\">align用法</h4>\n<ul>\n<li>当row的type设置为flex时，即可设置align</li>\n<li>有三个参数，top（局上）、middle（局中）、bottom（居下）</li>\n</ul>\n";

/***/ }),

/***/ "dJqi":
/*!***********************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/listToStyles.js ***!
  \***********************************************************************************/
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

/***/ "djP6":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "dpXq":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/index.vue?vue&type=template&id=7c3cf2ee&scoped=true ***!
  \**********************************************************************************************************************************************************************************************************************************************/
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

/***/ "eKbZ":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/input.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
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

/***/ "eys+":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/headers.vue?vue&type=template&id=dbacb37a&scoped=true ***!
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
    "t-header",
    { staticClass: "v-header-demo", attrs: { width: 1200 } },
    [_vm._v("header")]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "frx2":
/*!*****************************************************************!*\
  !*** ./server/pages/button.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./button.vue?vue&type=style&index=0&lang=css */ "KDq5");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "hIlM":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/layout.vue?vue&type=template&id=64c42883&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
          _c("t-exapmple", { attrs: { more: "" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
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
                _c("t-footer", [_vm._v("footer")])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.noSiferMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { textContent: _vm._s(_vm.noSiferHtml) },
              slot: "code"
            })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("左sider")]),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { more: "" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
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
                _c("t-footer", [_vm._v("footer")])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.leftSiferMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { innerHTML: _vm._s(_vm.leftSiferHtml) },
              slot: "code"
            })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("左sider")]),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { more: "" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
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
                _c("t-footer", [_vm._v("footer")])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.leftSiferMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { textContent: _vm._s(_vm.leftSiferHtml) },
              slot: "code"
            })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("右sider")]),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { more: "" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
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
                    _c("t-sider", { attrs: { width: "400" } }, [
                      _vm._v("sider")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("t-footer", [_vm._v("footer")])
              ],
              1
            ),
            _vm._v(" "),
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.rightSiferMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { textContent: _vm._s(_vm.rightSiferHtml) },
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

/***/ "j8w1":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/button.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ "jsMt":
/*!*******************************************!*\
  !*** ./server/doc/layout/left-sider.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-header>header</t-header>\n<t-layout class='demo-content'>\n    <t-sider>sider</t-sider>\n    <t-content>\n        <p v-for=\"i in 10\" :key='i' v-text='i'></p>\n    </t-content>\n</t-layout>\n<t-footer>footer</t-footer>";

/***/ }),

/***/ "kGBH":
/*!*****************************************!*\
  !*** ./server/doc/layout/left-sider.md ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"left-sider\">left-sider</h4>\n<ul>\n<li>右边栏的上中下左布局</li>\n</ul>\n";

/***/ }),

/***/ "kQVV":
/*!***************************************!*\
  !*** ./server/doc/button/disabled.md ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"-disabled\">禁止选中disabled</h4>\n<p>使用disabled属性可以让button按钮处于禁止状态</p>\n";

/***/ }),

/***/ "lP3g":
/*!**************************************************************************************************!*\
  !*** ./server/webComponents/footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_style_index_0_id_e5e0e816_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./footers.vue?vue&type=style&index=0&id=e5e0e816&lang=css&scoped=true */ "30+k");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_style_index_0_id_e5e0e816_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_style_index_0_id_e5e0e816_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_style_index_0_id_e5e0e816_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_style_index_0_id_e5e0e816_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_style_index_0_id_e5e0e816_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "lbwJ":
/*!*********************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js ***!
  \*********************************************************************/
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

/***/ "lmkL":
/*!*********************************************************!*\
  !*** ./server/pages/layout.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./layout.vue?vue&type=script&lang=js */ "UyyM");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ "mHE3":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./row-col.vue?vue&type=style&index=0&id=5f1b6f84&lang=css&scoped=true */ "Y5cL");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "mL5P":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/menu.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************************************************/
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

/***/ "mM1R":
/*!***************************************************************************************!*\
  !*** ./server/pages/menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_387dc710_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./menu.vue?vue&type=style&index=0&id=387dc710&lang=css&scoped=true */ "O9mY");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_387dc710_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_387dc710_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_387dc710_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_387dc710_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_style_index_0_id_387dc710_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "mX/Q":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/menu.vue?vue&type=template&id=387dc710&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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

/***/ "nDij":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/tooltip.vue?vue&type=template&id=1f1ebd0c ***!
  \************************************************************************************************************************************************************************************************************************************/
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
        [_c("t-tooltip")],
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

/***/ "nMPc":
/*!*************************************!*\
  !*** ./server/doc/exapmple-code.md ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<template>\n    <t-row>1111</t-row>\n</template>  \n\n<script>\nexport default{\n    data:function(){\n        return {\n            linkName: '例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示例子展示',\n        }\n    }\n}\n</script>";

/***/ }),

/***/ "nhqS":
/*!***************************************!*\
  !*** ./server/doc/layout/no-sider.md ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"no-sider\">no-sider</h4>\n<ul>\n<li>没有左右边栏的上中下3行布局</li>\n</ul>\n";

/***/ }),

/***/ "nnaN":
/*!************************************!*\
  !*** ./server/doc/row/offset.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-row :gutter=\"10\">\n  <t-col :offset='1' :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n  <t-col :offset='2' :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n  <t-col :offset='3' :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n  <t-col :offset='4' :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n  <t-col :offset='5' :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n  <t-col :offset='6' :span=\"4\" style=\"background:none;\"><div style=\"background:rgba(0, 117, 175, 0.9)\">col</div></t-col>\n</t-row>";

/***/ }),

/***/ "q7I/":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/row-col.vue?vue&type=template&id=5f1b6f84&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************/
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
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.staticMd) },
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
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.offsetMd) },
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
                        attrs: { span: 4 }
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
                        attrs: { span: 4 }
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
                        attrs: { span: 4 }
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
                        attrs: { span: 4 }
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
                        attrs: { span: 4 }
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
                        attrs: { span: 4 }
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
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.gutterMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { textContent: _vm._s(_vm.gutterHtml) },
              slot: "code"
            })
          ]),
          _vm._v(" "),
          _c("br"),
          _vm._v(" "),
          _c("h1", [_vm._v("flex模式")]),
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
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.flexMd) },
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
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.alignMd) },
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
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./table.vue?vue&type=script&lang=js */ "5ffr");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "rI/7":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/index.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************/
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

/***/ "rKaz":
/*!*****************************************************************!*\
  !*** ./server/pages/exapmple.vue?vue&type=template&id=72890c97 ***!
  \*****************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_template_id_72890c97__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./exapmple.vue?vue&type=template&id=72890c97 */ "yx9C");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_template_id_72890c97__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_exapmple_vue_vue_type_template_id_72890c97__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "sU2q":
/*!********************************!*\
  !*** ./server/doc/row/flex.md ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4 id=\"flex-\">flex模式等分</h4>\n<ul>\n<li>讲row的type值设置为flex，那么系统就会安装flex的模式进行布局，col的span设置没有影响。</li>\n</ul>\n";

/***/ }),

/***/ "tHoD":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/input.vue?vue&type=template&id=57c17981 ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_template_id_e5e0e816_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./footers.vue?vue&type=template&id=e5e0e816&scoped=true */ "RFEo");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_template_id_e5e0e816_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_footers_vue_vue_type_template_id_e5e0e816_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./headers.vue?vue&type=script&lang=js */ "2N2x");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_headers_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "vHuB":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/exapmple.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./exapmple.vue?vue&type=style&index=0&lang=css */ "EPg8");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("68c99aee", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "vhXu":
/*!***************************************************************************!*\
  !*** ./server/webComponents/contents.vue?vue&type=style&index=0&lang=css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./contents.vue?vue&type=style&index=0&lang=css */ "x0FC");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_contents_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "vsEG":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/button.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./button.vue?vue&type=style&index=0&lang=css */ "j8w1");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "w0G1":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./headers.vue?vue&type=style&index=0&id=dbacb37a&lang=css&scoped=true */ "H0Zh");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./button.vue?vue&type=script&lang=js */ "+QLl");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "x0FC":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/webComponents/contents.vue?vue&type=style&index=0&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./contents.vue?vue&type=style&index=0&lang=css */ "azFL");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("9bdfe48a", content, false, {});
// Hot Module Replacement
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
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./tooltip.vue?vue&type=style&index=0&lang=css */ "UoDk");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_tooltip_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "y/2j":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/tooltip.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = __webpack_require__(/*! ../doc/tooltip/tooltip.html */ "zDt3");

var _tooltip2 = _interopRequireDefault(_tooltip);

var _tooltip3 = __webpack_require__(/*! ../doc/tooltip/tooltip.md */ "KcLR");

var _tooltip4 = _interopRequireDefault(_tooltip3);

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

exports.default = {
  data: function data() {
    return {
      linkName: "气泡提示",
      msg: "气泡提示，气泡提示，气泡提示，<br>气泡提示，气泡提示。",
      loading: {
        content: 'asyncContent',
        loadingContent: '<i>Loading...</i>'
      },
      isOpen: false,
      tooltipHtml: _tooltip2.default,
      tooltipMd: _tooltip4.default
    };
  }
};

/***/ }),

/***/ "yfTq":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/input.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./input.vue?vue&type=style&index=0&lang=css */ "DT+b");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/_style-loader@0.21.0@style-loader/lib/addStyles.js */ "YbWx")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "yx9C":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/exapmple.vue?vue&type=template&id=72890c97 ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.info) },
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
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.info) },
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

/***/ "z8Yn":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/table.vue?vue&type=style&index=0&id=7b7cbb85&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

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
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
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

/***/ }),

/***/ "zDt3":
/*!*****************************************!*\
  !*** ./server/doc/tooltip/tooltip.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<t-row type='flex' justify='center' class='mb10-ce'>\n  <t-col :span='5'>\n      <t-button size='tiny' v-tooltip.top-start=\"msg\">上左</t-button>\n  </t-col>\n  <t-col :span='5'>\n      <t-button size='tiny' v-tooltip.top=\"msg\">上中</t-button>\n  </t-col>\n  <t-col :span='5'>\n      <t-button size='tiny' v-tooltip.top-end=\"msg\">上右</t-button>\n  </t-col>\n</t-row>\n<t-row type='flex' justify='space-between' class='mb10-ce'>\n  <t-col :span='5'>\n      <t-button size='tiny' v-tooltip.left-start=\"msg\">左上</t-button>\n  </t-col>\n  <t-col :span='5'>\n      <t-button size='tiny' v-tooltip.right-start=\"msg\">右上</t-button>\n  </t-col>\n</t-row>\n<t-row type='flex' justify='space-between' class='mb10-ce'>\n  <t-col :span='5'>\n      <t-button size='tiny' v-tooltip.left=\"msg\">左中</t-button>\n  </t-col>\n  <t-col :span='5'>\n      <t-button size='tiny' v-tooltip.right=\"msg\">右中</t-button>\n  </t-col>\n</t-row>\n<t-row type='flex' justify='space-between' class='mb10-ce'>\n  <t-col :span='5'>\n      <t-button size='tiny' v-tooltip.left-end=\"msg\">左下</t-button>\n  </t-col>\n  <t-col :span='5'>\n      <t-button size='tiny' v-tooltip.right-end=\"msg\">右下</t-button>\n  </t-col>\n</t-row>\n<t-row type='flex' justify='center' class='mb10-ce'>\n  <t-col :span='5'>\n      <t-button size='tiny' v-tooltip.bottom-start=\"msg\">下左</t-button>\n  </t-col>\n  <t-col :span='5'>\n      <t-button size='tiny' v-tooltip.bottom=\"msg\">下中</t-button>\n  </t-col>\n  <t-col :span='5'>\n      <t-button size='tiny' v-tooltip.bottom-end=\"msg\">下右</t-button>\n  </t-col>\n</t-row>";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvb2Zmc2V0Lm1kIiwid2VicGFjazovLy9zZXJ2ZXIvcGFnZXMvYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudnVlPzdmNTAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vaHRtbFR5cGUubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2lucHV0LnZ1ZT9kNGEzIiwid2VicGFjazovLy8uL3NlcnZlci9kb2Mvcm93L2p1c3RpZnkubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL21lbnUudnVlP2RmMzIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvc3RhdGljLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3RhYmxlLnZ1ZT80YTNmIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9leGFwbXBsZS52dWU/NWNhOCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2J1dHRvbi9odG1sVHlwZS5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy90YWJsZS52dWU/MGMwMyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9oZWFkZXJzLnZ1ZT8yM2ViIiwid2VicGFjazovLy9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9oZWFkZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9mb290ZXJzLnZ1ZT83ZTZkIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9leGFwbXBsZS52dWU/MDEyYyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2xheW91dC9uby1zaWRlci5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9sYXlvdXQudnVlP2QxOTkiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlPzlhMjgiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vc2l6ZS5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy90b29sdGlwLnZ1ZT8zNTFhIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9tZW51LnZ1ZT9mYzkxIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbnB1dC52dWU/NzE0NCIsIndlYnBhY2s6Ly8vc2VydmVyL3BhZ2VzL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9mb290ZXJzLnZ1ZT82ZjI2Iiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9sYXlvdXQudnVlPzc5MmUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vdHlwZS5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9tZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvcm93LWNvbC52dWU/ODBlMCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvbGF5b3V0LnZ1ZT85NTgxIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9sYXlvdXQudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9idXR0b24udnVlP2ExNmUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2xheW91dC9yaWdodC1zaWRlci5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9yb3ctY29sLnZ1ZT9iOWZlIiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2hlYWRlcnMudnVlP2U3ZDYiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2NvbnRlbnRzLnZ1ZT9kYTBkIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbnB1dC52dWU/ZTAyMCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvZXhhcG1wbGUudnVlPzIzNzgiLCJ3ZWJwYWNrOi8vL3NlcnZlci9wYWdlcy9yb3ctY29sLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2J1dHRvbi9jbGljay5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvYnV0dG9uL2NsaWNrLm1kIiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2Zvb3RlcnMudnVlP2VmMTAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvaGVhZGVycy52dWU/ZjIwNSIsIndlYnBhY2s6Ly8vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy90YWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvaGVhZGVycy52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2J1dHRvbi52dWU/ZTRiNyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9mb290ZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL3Rvb2x0aXAvdG9vbHRpcC5tZCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvZXhhcG1wbGUudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbnB1dC52dWU/MWQ5ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2J1dHRvbi9kaXNhYmxlZC5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbmRleC52dWU/ZjExOCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL3Jvdy9ndXR0ZXIubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL21lbnUudnVlPzA1OGEiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2luZGV4LnZ1ZT84MWUyIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy90b29sdGlwLnZ1ZT9hYzUwIiwid2VicGFjazovLy9zZXJ2ZXIvcGFnZXMvZXhhcG1wbGUudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbmRleC52dWU/MTUzYSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvbGF5b3V0LnZ1ZT80OWUyIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbmRleC52dWU/MGU4YSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvdG9vbHRpcC52dWU/NTYxYiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9mb290ZXJzLnZ1ZT9jMmI5Iiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy90YWJsZS52dWU/NjEzMSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2V4YXBtcGxlLWluZm8ubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvc3RhdGljLm1kIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9yb3ctY29sLnZ1ZT9jNTM2Iiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy90YWJsZS52dWU/YmUxMyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvdG9vbHRpcC52dWU/MmFhOCIsIndlYnBhY2s6Ly8vc2VydmVyL3BhZ2VzL2xheW91dC52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9sYXlvdXQvcmlnaHQtc2lkZXIubWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vc2VydmVyL3dlYkNvbXBvbmVudHMvZm9vdGVycy52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2V4YXBtcGxlLnZ1ZT9jMjdmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvYnV0dG9uL3NpemUubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlPzFmNWIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlP2EyMzkiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvZ3V0dGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9kb2Mvcm93L2ZsZXguaHRtbCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL3Jvdy9qdXN0aWZ5Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlPzE5OTEiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvZm9vdGVycy52dWU/MmE2NiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL3Jvdy9hbGlnbi5tZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvbGlzdFRvU3R5bGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9tZW51LnZ1ZT83ZTg3Iiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbmRleC52dWU/NWNjMCIsIndlYnBhY2s6Ly8vc2VydmVyL3BhZ2VzL2lucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9oZWFkZXJzLnZ1ZT9hOGZmIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9idXR0b24udnVlP2ZmZTIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2xheW91dC52dWU/Nzc5MyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvYnV0dG9uLnZ1ZT9jYTFkIiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvbGF5b3V0L2xlZnQtc2lkZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2xheW91dC9sZWZ0LXNpZGVyLm1kIiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvYnV0dG9uL2Rpc2FibGVkLm1kIiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2Zvb3RlcnMudnVlPzM5ZGYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2xheW91dC52dWU/MGE5NSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvdG9vbHRpcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlPzNlMWUiLCJ3ZWJwYWNrOi8vL3NlcnZlci9wYWdlcy9tZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvbWVudS52dWU/YmQzZCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvbWVudS52dWU/YzQ5NiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvdG9vbHRpcC52dWU/YjhkOSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2V4YXBtcGxlLWNvZGUubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9sYXlvdXQvbm8tc2lkZXIubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvb2Zmc2V0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlP2U1YzMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vdHlwZS5tZCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvdGFibGUudnVlPzhmOGUiLCJ3ZWJwYWNrOi8vL3NlcnZlci9wYWdlcy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvZmxleC5tZCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvaW5wdXQudnVlP2JiNmEiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2lucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9kb2Mvcm93L2FsaWduLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvaGVhZGVycy52dWU/OWE1YyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcm91dGVzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9leGFwbXBsZS52dWU/NzFhMCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9jb250ZW50cy52dWU/ZjAxMiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvYnV0dG9uLnZ1ZT8wOTU3Iiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2hlYWRlcnMudnVlPzlkNmIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9idXR0b24udnVlPzc0NjAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlP2M0MDciLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Rvb2x0aXAudnVlP2JmNGQiLCJ3ZWJwYWNrOi8vL3NlcnZlci9wYWdlcy90b29sdGlwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvaW5wdXQudnVlPzNkYTgiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2V4YXBtcGxlLnZ1ZT83OTBiIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy90YWJsZS52dWU/ZTAzMSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvcm93LWNvbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy90b29sdGlwL3Rvb2x0aXAuaHRtbCJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJkZXZ0b29scyIsInVzZSIsIlZ1ZVJvdXRlciIsImNvbXBvbmVudHMiLCJjb250ZW50cyIsImhlYWRlcnMiLCJmb290ZXJzIiwiaW5zdGFsbCIsIk9iamVjdCIsImtleXMiLCJmb3JFYWNoIiwidmFsdWUiLCJjb21wb25lbnQiLCJyb3V0ZXIiLCJyb3V0ZXMiLCIkbW91bnQiLCJwYXRoIiwibmFtZSIsImluZGV4Iiwicm93Q29sIiwiYnV0dG9uIiwibGF5b3V0IiwibWVudSIsInRhYmxlIiwiaW5wdXQiLCJ0b29sdGlwIiwiZXhhcG1wbGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7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Q3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDLHlCQUF5QixrQ0FBa0M7QUFDM0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDLHlCQUF5QixzQ0FBc0M7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7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LEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLGVBQWUsRUFBRTtBQUM3QztBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtB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QTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGtDO0FBQ2xDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFpQkE7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7OztBQ3ZDQSx5akQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCJDb3VzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoNCBpZD1cXFwib2Zmc2V0LVxcXCI+b2Zmc2V05qih5byPPC9oND5cXG48dWw+XFxuPGxpPuiuvue9rmNvbOeahOW3pui+uei3nTwvbGk+XFxuPC91bD5cXG5cIjsiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcnM+PC9oZWFkZXJzPlxuICAgICAgICA8Y29udGVudHMgOmxpbmtOYW1lPSdsaW5rTmFtZSc+XG4gICAgICAgICAgICA8aDE+5oyJ6ZKuLXNpemU8L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9kZT0ndmVydGljYWwnPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknPnRpbnk8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J2RlZmF1bHQnPmRlZmF1bHQ8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J2xhcmdlJyA6aHRtbFR5cGU9XCJ0eXBlXCI+bGFyZ2U8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J2F1dG8nIDp3aWR0aD0nMTIwJyA6aGVpZ2h0PSc1MCc+YXV0bzwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0nZGVmYXVsdCcgbG9uZz5sb25nPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cInNpemVNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cInNpemVIdG1sXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxoMT7mjInpkq4tZGlzYWJsZWQ8L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9kZT0ndmVydGljYWwnPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uPmRlZmF1bHQ8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gdHlwZT0ndGV4dCc+dGV4dDwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxicj48YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiB0eXBlPSd3YXJuaW5nJz53YXJuaW5nPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHR5cGU9J2Vycm9yJz5lcnJvcjwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwibWFya2Rvd25cIiB2LWh0bWw9XCJ0eXBlTWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc2xvdD1cImNvZGVcIiB2LXRleHQ9XCJ0eXBlSHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aDE+5oyJ6ZKuLWh0bWxUeXBlPC9oMT5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vZGU9J3ZlcnRpY2FsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBodG1sVHlwZT1cImJ1dHRvblwiPmJ1dHRvbjwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxicj48YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBodG1sVHlwZT1cInN1Ym1pdFwiPnN1Ym1pdDwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxicj48YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBodG1sVHlwZT1cInJlc2V0XCI+cmVzZXQ8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cIm1hcmtkb3duXCIgdi1odG1sPVwiaHRtbFR5cGVNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtaHRtbD1cImh0bWxUeXBlSHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aDE+5oyJ6ZKuLWNsaWNrPC9oMT5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vZGU9J3ZlcnRpY2FsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSdkZWZhdWx0JyBAY2xpY2s9XCJoYW5kbGVDbGljaygnZGVmYXVsdCcpXCI+Y2xpY2s8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cIm1hcmtkb3duXCIgdi1odG1sPVwiY2xpY2tNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtaHRtbD1cImNsaWNrSHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgIDwvY29udGVudHM+XG4gICAgICAgIDxmb290ZXJzPjwvZm9vdGVycz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiPjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCBzaXplSHRtbCBmcm9tICcuLi9kb2MvYnV0dG9uL3NpemUuaHRtbCc7XG4gICAgaW1wb3J0IHNpemVNZCBmcm9tICcuLi9kb2MvYnV0dG9uL3NpemUubWQnO1xuXG4gICAgaW1wb3J0IGRpc2FibGVkSHRtbCBmcm9tICcuLi9kb2MvYnV0dG9uL2Rpc2FibGVkLmh0bWwnO1xuICAgIGltcG9ydCBkaXNhYmxlZE1kIGZyb20gJy4uL2RvYy9idXR0b24vZGlzYWJsZWQubWQnO1xuXG4gICAgaW1wb3J0IHR5cGVIdG1sIGZyb20gJy4uL2RvYy9idXR0b24vdHlwZS5odG1sJztcbiAgICBpbXBvcnQgdHlwZU1kIGZyb20gJy4uL2RvYy9idXR0b24vdHlwZS5tZCc7XG5cbiAgICBpbXBvcnQgY2xpY2tIdG1sIGZyb20gJy4uL2RvYy9idXR0b24vY2xpY2suaHRtbCc7XG4gICAgaW1wb3J0IGNsaWNrTWQgZnJvbSAnLi4vZG9jL2J1dHRvbi9jbGljay5tZCc7XG5cbiAgICBpbXBvcnQgaHRtbFR5cGVIdG1sIGZyb20gJy4uL2RvYy9idXR0b24vaHRtbFR5cGUuaHRtbCc7XG4gICAgaW1wb3J0IGh0bWxUeXBlTWQgZnJvbSAnLi4vZG9jL2J1dHRvbi9odG1sVHlwZS5tZCc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOidzdWJtaXQnLFxuICAgICAgICAgICAgICAgIGxpbmtOYW1lOiAn5oyJ6ZKuJyxcbiAgICAgICAgICAgICAgICBzaXplSHRtbDogc2l6ZUh0bWwsXG4gICAgICAgICAgICAgICAgc2l6ZU1kOiBzaXplTWQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRIdG1sOiBkaXNhYmxlZEh0bWwsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRNZDogZGlzYWJsZWRNZCxcbiAgICAgICAgICAgICAgICB0eXBlSHRtbDogdHlwZUh0bWwsXG4gICAgICAgICAgICAgICAgdHlwZU1kOiB0eXBlTWQsXG4gICAgICAgICAgICAgICAgY2xpY2tIdG1sOiBjbGlja0h0bWwsXG4gICAgICAgICAgICAgICAgY2xpY2tNZDogY2xpY2tNZCxcbiAgICAgICAgICAgICAgICBodG1sVHlwZUh0bWw6IGh0bWxUeXBlSHRtbCxcbiAgICAgICAgICAgICAgICBodG1sVHlwZU1kOiBodG1sVHlwZU1kLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOntcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrOmZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgYWxlcnQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoNCBpZD1cXFwiaHRtbHR5cGVcXFwiPmh0bWxUeXBlPC9oND5cXG48cD5idXR0b27nmoRodG1s57G75Z6L77yM5YyF5ousYnV0dG9u44CBc3VibWl044CBcmVzZXTkuInnp43nsbvlnos8L3A+XFxuXCI7IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCJqdXN0aWZ5LVxcXCI+anVzdGlmeeeUqOazlTwvaDQ+XFxuPHVsPlxcbjxsaT7lvZNyb3fnmoR0eXBl6K6+572u5Li6ZmxleOaXtu+8jOWNs+WPr+iuvue9rmp1c3RpZnk8L2xpPlxcbjxsaT7mnInlm5vkuKrlj4LmlbDvvIxzdGFydO+8iOWxgOW3pu+8ieOAgWVuZO+8iOWxgOWPs++8ieOAgWNlbnRlcu+8iOWxheS4re+8ieOAgXNwYWNlLWFyb3VuZO+8iOWvueWFtu+8iVxcbiAg44CBc3BhY2UtYmV0d2Vlbu+8iOS4pOerr+WvueWFtu+8iTwvbGk+XFxuPC91bD5cXG5cIjsiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHQtcm93PlxcbiAgICA8dC1jb2wgOnNwYW49JzI0Jz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdz5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93PlxcbiAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc0Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc0Jz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdz5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93PlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdz5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG48L3Qtcm93PlwiOyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImhlYWRlcnNcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJjb250ZW50c1wiLCB7IGF0dHJzOiB7IGxpbmtOYW1lOiBfdm0ubGlua05hbWUgfSB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctcmlnaHRcIjogXCIyMHB4XCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInQtdGFibGVcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyB3aWR0aDogWzEwLCAxMCwgMTAsIDIwLCAyNSwgMzBdIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXRoZWFkXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC10clwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5LiAXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kuoxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+S4iVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5ZubXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kupRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+WFrVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC10clwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5LiAXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kuoxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+S4iVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5ZubXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kupRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+WFrVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC10clwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5LiAXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kuoxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+S4iVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5ZubXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kupRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+WFrVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXRib2R5XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC10clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LiA5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkuozlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS4ieWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5Zub5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkupTlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOWFreWkqVwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtdHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS4gOWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LqM5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkuInlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOWbm+WkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LqU5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzlha3lpKlcIildKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuesrOS4gOWkqVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLnrKzkuIDlpKkrMVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LqM5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkuInlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOWbm+WkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LqU5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzlha3lpKlcIildKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkuIDlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS6jOWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LiJ5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzlm5vlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS6lOWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5YWt5aSpXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCLnrKzlha3lpKkrMVwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZvb3RlcnNcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2V4YXBtcGxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0LWJ1dHRvbiBodG1sVHlwZT1cXFwiYnV0dG9uXFxcIj5idXR0b248L3QtYnV0dG9uPlxcbjxicj48YnI+XFxuPHQtYnV0dG9uIGh0bWxUeXBlPVxcXCJzdWJtaXRcXFwiPnN1Ym1pdDwvdC1idXR0b24+XFxuPGJyPjxicj5cXG48dC1idXR0b24gaHRtbFR5cGU9XFxcInJlc2V0XFxcIj5yZXNldDwvdC1idXR0b24+XCI7IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiN2NiYjg1Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjRjMDM2YmYyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjdjYmI4NSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjdjYmI4NSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGJhY2IzN2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNTljNWQ0YzJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGJhY2IzN2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kYmFjYjM3YSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHRlbXBsYXRlPlxuICAgIDx0LWhlYWRlciBjbGFzcz0ndi1oZWFkZXItZGVtbycgOndpZHRoPVwiMTIwMFwiPmhlYWRlcjwvdC1oZWFkZXI+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIiBzY29wZWQ+XG4gICAgLnYtaGVhZGVyLWRlbW97XG4gICAgICAgIGhlaWdodDogMzZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIFxuICAgIH1cbjwvc2NyaXB0PiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU1ZTBlODE2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjI5NDFmMDk3XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU1ZTBlODE2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTVlMGU4MTYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0LWhlYWRlcj5oZWFkZXI8L3QtaGVhZGVyPlxcbjx0LWxheW91dCBjbGFzcz0nZGVtby1jb250ZW50Jz5cXG4gICAgPHQtY29udGVudD5cXG4gICAgICAgIDxwIHYtZm9yPVxcXCJpIGluIDEwXFxcIiA6a2V5PSdpJyB2LXRleHQ9J2knPjwvcD5cXG4gICAgPC90LWNvbnRlbnQ+XFxuPC90LWxheW91dD5cXG48dC1mb290ZXI+Zm9vdGVyPC90LWZvb3Rlcj5cIjsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtaGVhZGVyW2RhdGEtdi02NGM0Mjg4M10sXFxuLnYtZm9vdGVyW2RhdGEtdi02NGM0Mjg4M10ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgaGVpZ2h0OiAzNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICBiYWNrZ3JvdW5kOiAjYjNjMGQxO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi52LXNpZGVyW2RhdGEtdi02NGM0Mjg4M10ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxNTMsIDIyOSwgMC43KTtcXG59XFxuLnYtY29udGVudFtkYXRhLXYtNjRjNDI4ODNdIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTE3LCAxNzUsIDAuOSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0LWxheW91dFwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidi1jb250ZW50c1wiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidC1zaWRlclwiLFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInQtbWVudVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxODAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NSxcbiAgICAgICAgICAgICAgICBtb2RlOiBcInZlcnRpY2FsXCIsXG4gICAgICAgICAgICAgICAgXCJhY3RpdmUtbmFtZVwiOiBfdm0ubGlua05hbWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgXCJvbjpzZWxlY3RcIjogX3ZtLnJvdXRlckhhbmRsZSB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5yb3V0ZXMsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgbmFtZTogaXRlbS5uYW1lIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGl0ZW0ubmFtZSkgKyBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInQtY29udGVudFwiLCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidC1zaWRlclwiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0LWJ1dHRvbiBzaXplPSd0aW55Jz50aW55PC90LWJ1dHRvbj5cXG48YnI+XFxuPGJyPlxcbjx0LWJ1dHRvbiBzaXplPSdkZWZhdWx0Jz5kZWZhdWx0PC90LWJ1dHRvbj5cXG48YnI+XFxuPGJyPlxcbjx0LWJ1dHRvbiBzaXplPSdsYXJnZSc+bGFyZ2U8L3QtYnV0dG9uPlxcbjxicj5cXG48YnI+XFxuPHQtYnV0dG9uIHNpemU9J2F1dG8nIDp3aWR0aD0nMTIwJyA6aGVpZ2h0PSc1MCc+YXV0bzwvdC1idXR0b24+XFxuPGJyPlxcbjxicj5cXG48dC1idXR0b24gc2l6ZT0nZGVmYXVsdCcgbG9uZz5sb25nPC90LWJ1dHRvbj5cIjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rvb2x0aXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90b29sdGlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rvb2x0aXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzg3ZGM3MTAmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4N2RjNzEwJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzg3ZGM3MTAmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aGVhZGVycz48L2hlYWRlcnM+XG4gICAgICAgIDxjb250ZW50cyA6bGlua05hbWU9J2xpbmtOYW1lJz5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9J3BhZGRpbmctcmlnaHQ6MjBweDsnPlxuICAgICAgICAgICAgICAgIDx0LXRhYmxlIDp3aWR0aD1cIlsxMCwxMCwxMCwyMCwyNSwzMF1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC10cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/kuIA8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5LqMPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+S4iTwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/lm5s8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5LqUPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+WFrTwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC10cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+S4gDwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/kuow8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5LiJPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+WbmzwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/kupQ8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5YWtPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LXRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5LiAPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+S6jDwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/kuIk8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5ZubPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+S6lDwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/lha08L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdC10aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHQtdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC10cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LiA5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LqM5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LiJ5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5Zub5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LqU5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5YWt5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC10cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkuIDlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkuozlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkuInlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzlm5vlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkupTlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzlha3lpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LXRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS4gOWkqTxicj7nrKzkuIDlpKkrMTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS6jOWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS4ieWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOWbm+WkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS6lOWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOWFreWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC10cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LiA5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LqM5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LiJ5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5Zub5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LqU5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5YWt5aSpPGJyPuesrOWFreWkqSsxPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC10cj5cbiAgICAgICAgICAgICAgICAgICAgPC90LXRib2R5PlxuICAgICAgICAgICAgICAgIDwvdC10YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2NvbnRlbnRzPlxuICAgICAgICA8Zm9vdGVycz48L2Zvb3RlcnM+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIiBzY29wZWQ+PC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGRhdGE6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua05hbWU6ICfooajmoLwnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTVlMGU4MTYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU1ZTBlODE2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTVlMGU4MTYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NGM0Mjg4MyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NGM0Mjg4MyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjRjNDI4ODMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHQtYnV0dG9uPmRlZmF1bHQ8L3QtYnV0dG9uPlxcbjxicj48YnI+XFxuPHQtYnV0dG9uIHR5cGU9J3RleHQnPnRleHQ8L3QtYnV0dG9uPlxcbjxicj48YnI+XFxuPHQtYnV0dG9uIHR5cGU9J3dhcm5pbmcnPndhcm5pbmc8L3QtYnV0dG9uPlxcbjxicj48YnI+XFxuPHQtYnV0dG9uIHR5cGU9J2Vycm9yJz5lcnJvcjwvdC1idXR0b24+XCI7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tZW51LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zODdkYzcxMCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL21lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zODdkYzcxMCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzg3ZGM3MTBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczODdkYzcxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczODdkYzcxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzg3ZGM3MTAmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczODdkYzcxMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic2VydmVyL3BhZ2VzL21lbnUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmMWI2Zjg0Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm93LWNvbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjFiNmY4NCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjRjNDI4ODMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjRjNDI4ODMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NGM0Mjg4MyZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xheW91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NGM0Mjg4MyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjRjNDI4ODNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NGM0Mjg4MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NGM0Mjg4MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NGM0Mjg4MyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY0YzQyODgzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzZXJ2ZXIvcGFnZXMvbGF5b3V0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImhlYWRlcnNcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiY29udGVudHNcIixcbiAgICAgICAgeyBhdHRyczogeyBsaW5rTmFtZTogX3ZtLmxpbmtOYW1lIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuaMiemSri1zaXplXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWJ1dHRvblwiLCB7IGF0dHJzOiB7IHNpemU6IFwidGlueVwiIH0gfSwgW192bS5fdihcInRpbnlcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWJ1dHRvblwiLCB7IGF0dHJzOiB7IHNpemU6IFwiZGVmYXVsdFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2l6ZTogXCJsYXJnZVwiLCBodG1sVHlwZTogX3ZtLnR5cGUgfSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcImxhcmdlXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzaXplOiBcImF1dG9cIiwgd2lkdGg6IDEyMCwgaGVpZ2h0OiA1MCB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiYXV0b1wiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgc2l6ZTogXCJkZWZhdWx0XCIsIGxvbmc6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJsb25nXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwibWFya2Rvd25cIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uc2l6ZU1kKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5zaXplSHRtbCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwi5oyJ6ZKuLWRpc2FibGVkXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWJ1dHRvblwiLCBbX3ZtLl92KFwiZGVmYXVsdFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWJ1dHRvblwiLCB7IGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0gfSwgW192bS5fdihcInRleHRcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidC1idXR0b25cIiwgeyBhdHRyczogeyB0eXBlOiBcIndhcm5pbmdcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIndhcm5pbmdcIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidC1idXR0b25cIiwgeyBhdHRyczogeyB0eXBlOiBcImVycm9yXCIgfSB9LCBbX3ZtLl92KFwiZXJyb3JcIildKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS50eXBlTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLnR5cGVIdG1sKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCLmjInpkq4taHRtbFR5cGVcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vZGU6IFwidmVydGljYWxcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwidmlld1wiIH0sIHNsb3Q6IFwidmlld1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgaHRtbFR5cGU6IFwiYnV0dG9uXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJidXR0b25cIilcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidC1idXR0b25cIiwgeyBhdHRyczogeyBodG1sVHlwZTogXCJzdWJtaXRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcInN1Ym1pdFwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWJ1dHRvblwiLCB7IGF0dHJzOiB7IGh0bWxUeXBlOiBcInJlc2V0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJyZXNldFwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmh0bWxUeXBlTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5odG1sVHlwZUh0bWwpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuaMiemSri1jbGlja1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9kZTogXCJ2ZXJ0aWNhbFwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcImRlZmF1bHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5oYW5kbGVDbGljayhcImRlZmF1bHRcIilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY2xpY2tcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5jbGlja01kKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uY2xpY2tIdG1sKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZm9vdGVyc1wiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0LWhlYWRlcj5oZWFkZXI8L3QtaGVhZGVyPlxcbjx0LWxheW91dCBjbGFzcz0nZGVtby1jb250ZW50Jz5cXG4gIDx0LWNvbnRlbnQ+XFxuICAgIDxwIHYtZm9yPVxcXCJpIGluIDEwXFxcIiA6a2V5PSdpJyB2LXRleHQ9J2knPjwvcD5cXG4gIDwvdC1jb250ZW50PlxcbiAgPHQtc2lkZXIgd2lkdGg9XFxcIjQwMFxcXCI+c2lkZXI8L3Qtc2lkZXI+XFxuPC90LWxheW91dD5cXG48dC1mb290ZXI+Zm9vdGVyPC90LWZvb3Rlcj5cIjsiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm93LWNvbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjFiNmY4NCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJmMWUxMGQ2OFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm93LWNvbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjFiNmY4NCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmMWI2Zjg0Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGJhY2IzN2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRiYWNiMzdhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJpbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzLmpzJztcbmltcG9ydCBjb250ZW50cyBmcm9tICcuL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlJztcbmltcG9ydCBoZWFkZXJzIGZyb20gJy4vd2ViQ29tcG9uZW50cy9oZWFkZXJzLnZ1ZSc7XG5pbXBvcnQgZm9vdGVycyBmcm9tICcuL3dlYkNvbXBvbmVudHMvZm9vdGVycy52dWUnO1xuXG5WdWUuY29uZmlnLmRldnRvb2xzID0gdHJ1ZTtcblxuVnVlLnVzZShWdWVSb3V0ZXIpO1xuXG5jb25zdCBjb21wb25lbnRzID0ge1xuICBjb250ZW50cyxcbiAgaGVhZGVycyxcbiAgZm9vdGVycyxcbn07XG5cbmZ1bmN0aW9uIGluc3RhbGwoVnVlKSB7XG4gIE9iamVjdC5rZXlzKGNvbXBvbmVudHMpLmZvckVhY2goKHZhbHVlKT0+e1xuICAgIFZ1ZS5jb21wb25lbnQodmFsdWUsIGNvbXBvbmVudHNbdmFsdWVdKTtcbiAgfSk7XG59XG5cbmluc3RhbGwoVnVlKTtcblxubGV0IHJvdXRlciA9IG5ldyBWdWVSb3V0ZXIoe1xuICByb3V0ZXMsXG59KTtcblxubmV3IFZ1ZSh7XG4gIHJvdXRlcixcbn0pLiRtb3VudCgnI2FwcCcpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LWNvbnRlbnRze1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wIDogMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgbWluLWhlaWdodDogODAwcHg7XFxuXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aGVhZGVycz48L2hlYWRlcnM+XG4gICAgICAgIDxjb250ZW50cyA6bGlua05hbWU9J2xpbmtOYW1lJyBjbGFzcz0nZGVtby1jb250ZW50Jz5cbiAgICAgICAgICAgIDxoMT7ln7rnoYDnlKjms5XmoIXmoI/ns7vnu588L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9kZT0ndmVydGljYWwnIG1vcmU+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzI0Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwibWFya2Rvd25cIiB2LWh0bWw9XCJzdGF0aWNNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cInN0YXRpY0h0bWxcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90LWV4YXBtcGxlPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGgxPuWfuuehgOaooeW8j+S4i+eahG9mZnNldDwvaDE+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb2RlPSd2ZXJ0aWNhbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgOmd1dHRlcj1cIjEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOm9mZnNldD0nMScgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOm9mZnNldD0nMicgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOm9mZnNldD0nMycgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOm9mZnNldD0nNCcgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOm9mZnNldD0nNScgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOm9mZnNldD0nNicgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwibWFya2Rvd25cIiB2LWh0bWw9XCJvZmZzZXRNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cIm9mZnNldEh0bWxcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90LWV4YXBtcGxlPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGgxPuWfuuehgOaooeW8j+S4i+eahGd1dHRlcjwvaDE+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb2RlPSd2ZXJ0aWNhbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgOmd1dHRlcj1cIjEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49XCI0XCIgc3R5bGU9XCJiYWNrZ3JvdW5kOm5vbmU7XCI+PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwibWFya2Rvd25cIiB2LWh0bWw9XCJndXR0ZXJNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cImd1dHRlckh0bWxcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90LWV4YXBtcGxlPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGgxPmZsZXjmqKHlvI88L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9kZT0ndmVydGljYWwnIG1vcmU+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93IHR5cGU9J2ZsZXgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdyB0eXBlPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cImZsZXhNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cImZsZXhIdG1sXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxoMT5mbGV45qih5byP4oCU4oCUanVzdGlmeeeUqOazlTwvaDE+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb2RlPSd2ZXJ0aWNhbCcgbW9yZT5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdzdGFydCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J2VuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J2NlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwibWFya2Rvd25cIiB2LXRleHQ9XCJqdXN0aWZ5TWRcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cImp1c3RpZnlIdG1sXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxoMT5mbGV45qih5byP4oCU4oCUYWxpZ27nlKjms5U8L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9kZT0ndmVydGljYWwnPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93IHR5cGU9J2ZsZXgnIGFsaWduPSd0b3AnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVwiaGVpZ2h0OiAxNDBweDtcIj5jb2w8L2Rpdj48L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVwiaGVpZ2h0OiAxMDBweDtcIj5jb2w8L2Rpdj48L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2PmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XCJoZWlnaHQ6IDgwcHg7XCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nY2VudGVyJyBhbGlnbj0nbWlkZGxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cImhlaWdodDogMTQwcHg7XCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cImhlaWdodDogMTAwcHg7XCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdj5jb2w8L2Rpdj48L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVwiaGVpZ2h0OiA4MHB4O1wiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J2NlbnRlcicgYWxpZ249J2JvdHRvbSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XCJoZWlnaHQ6IDE0MHB4O1wiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XCJoZWlnaHQ6IDEwMHB4O1wiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXY+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cImhlaWdodDogODBweDtcIj5jb2w8L2Rpdj48L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cIm1hcmtkb3duXCIgdi1odG1sPVwiYWxpZ25NZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cImFsaWduSHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgIDwvY29udGVudHM+XG4gICAgICAgIDxmb290ZXJzPjwvZm9vdGVycz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiIHNjb3BlZD5cbiAgICAuZGVtby1jb250ZW50IC52LWNvbCwudi1jb2wgZGl2e1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMTUzLDIyOSwuNyk7XG4gICAgfVxuICAgIC5kZW1vLWNvbnRlbnQgLnYtY29sOm50aC1jaGlsZChvZGQpLC52LWNvbDpudGgtY2hpbGQob2RkKSBkaXZ7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTE3LCAxNzUsIDAuOSk7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHN0YXRpY0h0bWwgZnJvbSBcIi4uL2RvYy9yb3cvc3RhdGljLmh0bWxcIjtcbiAgICBpbXBvcnQgc3RhdGljTWQgZnJvbSBcIi4uL2RvYy9yb3cvc3RhdGljLm1kXCI7XG5cbiAgICBpbXBvcnQgZmxleEh0bWwgZnJvbSBcIi4uL2RvYy9yb3cvZmxleC5odG1sXCI7XG4gICAgaW1wb3J0IGZsZXhNZCBmcm9tIFwiLi4vZG9jL3Jvdy9mbGV4Lm1kXCI7XG5cbiAgICBpbXBvcnQganVzdGlmeUh0bWwgZnJvbSBcIi4uL2RvYy9yb3cvanVzdGlmeS5odG1sXCI7XG4gICAgaW1wb3J0IGp1c3RpZnlNZCBmcm9tIFwiLi4vZG9jL3Jvdy9qdXN0aWZ5Lm1kXCI7XG5cbiAgICBpbXBvcnQgYWxpZ25IdG1sIGZyb20gXCIuLi9kb2Mvcm93L2FsaWduLmh0bWxcIjtcbiAgICBpbXBvcnQgYWxpZ25NZCBmcm9tIFwiLi4vZG9jL3Jvdy9hbGlnbi5tZFwiO1xuXG4gICAgaW1wb3J0IGd1dHRlckh0bWwgZnJvbSBcIi4uL2RvYy9yb3cvZ3V0dGVyLmh0bWxcIjtcbiAgICBpbXBvcnQgZ3V0dGVyTWQgZnJvbSBcIi4uL2RvYy9yb3cvZ3V0dGVyLm1kXCI7XG5cbiAgICBpbXBvcnQgb2Zmc2V0SHRtbCBmcm9tIFwiLi4vZG9jL3Jvdy9vZmZzZXQuaHRtbFwiO1xuICAgIGltcG9ydCBvZmZzZXRNZCBmcm9tIFwiLi4vZG9jL3Jvdy9vZmZzZXQubWRcIjtcbiAgICBcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtOYW1lOiAn5qCF5qCPJyxcbiAgICAgICAgICAgICAgICBzdGF0aWNIdG1sOiBzdGF0aWNIdG1sLFxuICAgICAgICAgICAgICAgIHN0YXRpY01kOiBzdGF0aWNNZCxcbiAgICAgICAgICAgICAgICBmbGV4SHRtbDogZmxleEh0bWwsXG4gICAgICAgICAgICAgICAgZmxleE1kOiBmbGV4TWQsXG4gICAgICAgICAgICAgICAganVzdGlmeUh0bWw6IGp1c3RpZnlIdG1sLFxuICAgICAgICAgICAgICAgIGp1c3RpZnlNZDoganVzdGlmeU1kLFxuICAgICAgICAgICAgICAgIGFsaWduSHRtbDogYWxpZ25IdG1sLFxuICAgICAgICAgICAgICAgIGFsaWduTWQ6IGFsaWduTWQsXG4gICAgICAgICAgICAgICAgZ3V0dGVySHRtbDogZ3V0dGVySHRtbCxcbiAgICAgICAgICAgICAgICBndXR0ZXJNZDogZ3V0dGVyTWQsXG4gICAgICAgICAgICAgICAgb2Zmc2V0SHRtbDogb2Zmc2V0SHRtbCxcbiAgICAgICAgICAgICAgICBvZmZzZXRNZDogb2Zmc2V0TWQsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgICA8dC1idXR0b24gc2l6ZT0nZGVmYXVsdCcgQGNsaWNrPVxcXCJoYW5kbGVDbGljaygnZGVmYXVsdCcpXFxcIj5jbGljazwvdC1idXR0b24+XFxuPC90ZW1wbGF0ZT5cXG48c2NyaXB0PlxcbiAgICBleHBvcnQgZGVmYXVsdHtcXG4gICAgICAgIG1ldGhvZHM6e1xcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrOmZ1bmN0aW9uKHZhbCl7XFxuICAgICAgICAgICAgICAgIGFsZXJ0KHZhbCk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfVxcbiAgICB9XFxuPC9zY3JpcHQ+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoNCBpZD1cXFwiY2xpY2stXFxcIj5jbGlja+S6i+S7tjwvaDQ+XFxuPHA+5ZyoYnV0dG9u5LiK57uR5a6aQGNsaWNr5LqL5Lu255So5p2l6Kem5Y+R5Zue6LCD5LqL5Lu277yM5Y+v5Lul5bim5YWl5Y+C5pWwPC9wPlxcblwiOyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9vdGVycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1oZWFkZXItZGVtb1tkYXRhLXYtZGJhY2IzN2Fde1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCI8dGVtcGxhdGU+XG4gICAgPHQtbGF5b3V0IGNsYXNzPSd2LWNvbnRlbnRzJz5cbiAgICAgICAgPHQtc2lkZXI+XG4gICAgICAgICAgICA8dC1tZW51IDp3aWR0aD0nMTgwJyA6aGVpZ2h0PSc0NScgbW9kZT0ndmVydGljYWwnIDphY3RpdmUtbmFtZT0nbGlua05hbWUnIEBvbjpzZWxlY3Q9J3JvdXRlckhhbmRsZSc+XG4gICAgICAgICAgICAgICAgPHQtbWVudVN1YiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiByb3V0ZXNcIiA6a2V5PSdpbmRleCcgOm5hbWU9J2l0ZW0ubmFtZSc+XG4gICAgICAgICAgICAgICAgICAgIHt7aXRlbS5uYW1lfX1cbiAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgIDwvdC1tZW51PlxuICAgICAgICA8L3Qtc2lkZXI+XG4gICAgICAgIDx0LWNvbnRlbnQ+PHNsb3Q+PC9zbG90PjwvdC1jb250ZW50PlxuICAgICAgICA8dC1zaWRlcj48L3Qtc2lkZXI+XG4gICAgPC90LWxheW91dD5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiPlxuICAgIC52LWNvbnRlbnRze1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wIDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgbWluLWhlaWdodDogODAwcHg7XG5cbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCByb3V0ZXMgZnJvbSAnLi4vcm91dGVzLmpzJztcbiAgICBcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgbGlua05hbWU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ+mmlumhtSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByb3V0ZXM6IHJvdXRlc1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOntcbiAgICAgICAgICAgIHJvdXRlckhhbmRsZTpmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgICAgICAgICB0aGlzLnJvdXRlcy5mb3JFYWNoKGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgICAgIGlmKG5hbWUgPT0gdmFsLm5hbWUpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IHZhbC5wYXRoXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdiN2NiYjg1JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiN2NiYjg1Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3YjdjYmI4NVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdiN2NiYjg1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdiN2NiYjg1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90YWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I3Y2JiODUmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3YjdjYmI4NScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic2VydmVyL3BhZ2VzL3RhYmxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaGVhZGVycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGJhY2IzN2Emc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGJhY2IzN2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImRiYWNiMzdhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzL192dWUtaG90LXJlbG9hZC1hcGlAMi4zLjBAdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZGJhY2IzN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZGJhY2IzN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRiYWNiMzdhJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZGJhY2IzN2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci93ZWJDb21wb25lbnRzL2hlYWRlcnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2OGE0ZmUzMVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNWUwZTgxNiZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZm9vdGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lNWUwZTgxNiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTVlMGU4MTZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlNWUwZTgxNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlNWUwZTgxNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZm9vdGVycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTVlMGU4MTYmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlNWUwZTgxNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic2VydmVyL3dlYkNvbXBvbmVudHMvZm9vdGVycy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCJ0b290aXAtXFxcIj50b290aXDnmoTln7rnoYDnlKjms5U8L2g0Plxcbjx1bD5cXG48bGk+5LiK5bemOnYtdG9vbHRpcC50b3Atc3RhcnQ8L2xpPlxcbjxsaT7kuIrkuK06di10b29sdGlwLnRvcDwvbGk+XFxuPGxpPuS4iuWPszp2LXRvb2x0aXAudG9wLWVuZDwvbGk+XFxuPGxpPuW3puS4ijp2LXRvb2x0aXAubGVmdC1zdGFydDwvbGk+XFxuPGxpPuWPs+S4ijp2LXRvb2x0aXAucmlnaHQtc3RhcnQ8L2xpPlxcbjxsaT7lt6bkuK06di10b29sdGlwLmxlZnQ8L2xpPlxcbjxsaT7lj7PkuK06di10b29sdGlwLnJpZ2h0PC9saT5cXG48bGk+5bem5LiLOnYtdG9vbHRpcC5sZWZ0LWVuZDwvbGk+XFxuPGxpPuWPs+S4izp2LXRvb2x0aXAucmlnaHQ8L2xpPlxcbjxsaT7kuIvlt6Y6di10b29sdGlwLmJvdHRvbS1zdGFydDwvbGk+XFxuPGxpPuS4i+S4rTp2LXRvb2x0aXAuYm90dG9tPC9saT5cXG48bGk+5LiL5Y+zOnYtdG9vbHRpcC5ib3R0b20tZW5kPC9saT5cXG48L3VsPlxcblwiOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyODkwYzk3XCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2V4YXBtcGxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2V4YXBtcGxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3Mjg5MGM5NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3Mjg5MGM5NycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyODkwYzk3XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzI4OTBjOTcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci9wYWdlcy9leGFwbXBsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjFmYjUxMTJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHQtYnV0dG9uIHNpemU9J2RlZmF1bHQnIDpkaXNhYmxlZD1cXFwidHJ1ZVxcXCI+6Z2Z5q2i6YCJ5LitPC90LWJ1dHRvbj5cXG5cIjsiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdjM2NmMmVlJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2MzY2YyZWUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcIi1cXFwiPuavj+S4gOWIl+S5i+mXtOeahOmXtOmalDwvaDQ+XFxuPHVsPlxcbjxsaT7lnKhyb3fkuIrpnaLorr7nva7mr4/kuIDkuKpjb2zkuYvpl7TnmoTpl7TpmpQ8L2xpPlxcbjwvdWw+XFxuXCI7IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzg3ZGM3MTAmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZWUxZTUyYzJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzg3ZGM3MTAmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zODdkYzcxMCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YzNjZjJlZSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdjM2NmMmVlJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdjM2NmMmVlJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5tYjEwLWNle1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aGVhZGVycz48L2hlYWRlcnM+XG4gICAgICAgIDxjb250ZW50cyA6bGlua05hbWU9J2xpbmtOYW1lJz5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vZGU9J2hvcml6b250YWwnIG1vcmU+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzI0Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzbG90PVwibWFya2Rvd25cIiB2LWh0bWw9XCJpbmZvXCI+PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgc2xvdD1cImNvZGVcIiB2LXRleHQ9XCJjb2RlXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb2RlPSd2ZXJ0aWNhbCcgbW9yZT5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMjQnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cImluZm9cIj48L2Rpdj5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cImNvZGVcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90LWV4YXBtcGxlPlxuICAgICAgICA8L2NvbnRlbnRzPlxuICAgICAgICA8Zm9vdGVycz48L2Zvb3RlcnM+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIj48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgaW5mbyBmcm9tICcuLi9kb2MvZXhhcG1wbGUtaW5mby5tZCc7XG4gICAgaW1wb3J0IGNvZGUgZnJvbSAnLi4vZG9jL2V4YXBtcGxlLWNvZGUubWQnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGRhdGE6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua05hbWU6ICfkvovlrZDlsZXnpLonLFxuICAgICAgICAgICAgICAgIGluZm86IGluZm8sXG4gICAgICAgICAgICAgICAgY29kZTogY29kZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdjM2NmMmVlJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVmYTUwNWI0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YzNjZjJlZSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YzNjZjJlZSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NGM0Mjg4MyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJiNTk4YTEyY1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0YzQyODgzJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NGM0Mjg4MyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90b29sdGlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdG9vbHRpcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0LWZvb3RlclwiLCBbX3ZtLl92KFwiZm9vdGVyXCIpXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiN2NiYjg1Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I3Y2JiODUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcInpob3VqaW5nd2VuXFxcIj56aG91amluZ3dlbjwvaDQ+XFxuPHA+5aaC5p6cMTIzMTIzPC9wPlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDIgaWQ9XFxcIjI0LVxcXCI+MjTnrYnliIbmoIXmoI/ns7vnu588L2gyPlxcbjx1bD5cXG48bGk+cm935Li65rC05bmz5pa55ZCR5Yib5bu65LiA6KGM77yMY29s5Li65Z6C55u05pa55ZCR562J5YiG5LiA6KGM77yMY29s5pyA5aSnPGNvZGU+c3BhbjwvY29kZT7nrYnliIbkuLoyNOetieWIhuOAgjwvbGk+XFxuPC91bD5cXG5cIjsiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm93LWNvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jvdy1jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiN2NiYjg1Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I3Y2JiODUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I3Y2JiODUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdG9vbHRpcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwYjliMTZkMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdG9vbHRpcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90b29sdGlwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcnM+PC9oZWFkZXJzPlxuICAgICAgICA8Y29udGVudHMgOmxpbmtOYW1lPSdsaW5rTmFtZSc+XG4gICAgICAgICAgICA8aDE+5pegc2lkZXI8L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9yZT5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWhlYWRlcj5oZWFkZXI8L3QtaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8dC1sYXlvdXQgY2xhc3M9J2RlbW8tY29udGVudCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtZm9yPVwiaSBpbiAxMFwiIDprZXk9J2knIHYtdGV4dD0naSc+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDx0LWZvb3Rlcj5mb290ZXI8L3QtZm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cIm1hcmtkb3duXCIgdi1odG1sPVwibm9TaWZlck1kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi10ZXh0PVwibm9TaWZlckh0bWxcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90LWV4YXBtcGxlPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGgxPuW3pnNpZGVyPC9oMT5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vcmU+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1oZWFkZXI+aGVhZGVyPC90LWhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPHQtbGF5b3V0IGNsYXNzPSdkZW1vLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtc2lkZXI+c2lkZXI8L3Qtc2lkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtZm9yPVwiaSBpbiAxMFwiIDprZXk9J2knIHYtdGV4dD0naSc+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1sYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgIDx0LWZvb3Rlcj5mb290ZXI8L3QtZm9vdGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cIm1hcmtkb3duXCIgdi1odG1sPVwibGVmdFNpZmVyTWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc2xvdD1cImNvZGVcIiB2LWh0bWw9XCJsZWZ0U2lmZXJIdG1sXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxoMT7lt6ZzaWRlcjwvaDE+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb3JlPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtaGVhZGVyPmhlYWRlcjwvdC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWxheW91dCBjbGFzcz0nZGVtby1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LXNpZGVyPnNpZGVyPC90LXNpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWZvcj1cImkgaW4gMTBcIiA6a2V5PSdpJyB2LXRleHQ9J2knPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L3QtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8dC1mb290ZXI+Zm9vdGVyPC90LWZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cImxlZnRTaWZlck1kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi10ZXh0PVwibGVmdFNpZmVySHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aDE+5Y+zc2lkZXI8L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9yZT5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWhlYWRlcj5oZWFkZXI8L3QtaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbGF5b3V0IGNsYXNzPSdkZW1vLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtZm9yPVwiaSBpbiAxMFwiIDprZXk9J2knIHYtdGV4dD0naSc+PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXNpZGVyIHdpZHRoPVwiNDAwXCI+c2lkZXI8L3Qtc2lkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8dC1mb290ZXI+Zm9vdGVyPC90LWZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cInJpZ2h0U2lmZXJNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cInJpZ2h0U2lmZXJIdG1sXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgICAgIFxuICAgICAgICA8L2NvbnRlbnRzPlxuICAgICAgICA8Zm9vdGVycz48L2Zvb3RlcnM+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIiBzY29wZWQ+XG4udi1oZWFkZXIsXG4udi1mb290ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMzZweDtcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XG4gIGJhY2tncm91bmQ6ICNiM2MwZDE7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG59XG4udi1zaWRlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTUzLCAyMjksIDAuNyk7XG59XG4udi1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxMTcsIDE3NSwgMC45KTtcbn1cbjwvc3R5bGU+XG48c2NyaXB0PlxuaW1wb3J0IG5vU2lmZXJIdG1sIGZyb20gXCIuLi9kb2MvbGF5b3V0L25vLXNpZGVyLmh0bWxcIjtcbmltcG9ydCBub1NpZmVyTWQgZnJvbSBcIi4uL2RvYy9sYXlvdXQvbm8tc2lkZXIubWRcIjtcblxuaW1wb3J0IGxlZnRTaWZlckh0bWwgZnJvbSBcIi4uL2RvYy9sYXlvdXQvbGVmdC1zaWRlci5odG1sXCI7XG5pbXBvcnQgbGVmdFNpZmVyTWQgZnJvbSBcIi4uL2RvYy9sYXlvdXQvbGVmdC1zaWRlci5tZFwiO1xuXG5pbXBvcnQgcmlnaHRTaWZlckh0bWwgZnJvbSBcIi4uL2RvYy9sYXlvdXQvcmlnaHQtc2lkZXIuaHRtbFwiO1xuaW1wb3J0IHJpZ2h0U2lmZXJNZCBmcm9tIFwiLi4vZG9jL2xheW91dC9yaWdodC1zaWRlci5tZFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGRhdGE6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICBsaW5rTmFtZTogXCLluIPlsYBcIixcbiAgICAgIG5vU2lmZXJIdG1sOiBub1NpZmVySHRtbCxcbiAgICAgIG5vU2lmZXJNZDogbm9TaWZlck1kLFxuICAgICAgbGVmdFNpZmVySHRtbDogbGVmdFNpZmVySHRtbCxcbiAgICAgIGxlZnRTaWZlck1kOiBsZWZ0U2lmZXJNZCxcbiAgICAgIHJpZ2h0U2lmZXJIdG1sOiByaWdodFNpZmVySHRtbCxcbiAgICAgIHJpZ2h0U2lmZXJNZDogcmlnaHRTaWZlck1kXG4gICAgfTtcbiAgfVxufTtcbjwvc2NyaXB0PiIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcInJpZ2h0LXNpZGVyXFxcIj5yaWdodC1zaWRlcjwvaDQ+XFxuPHVsPlxcbjxsaT7lt6bovrnmoI/nmoTkuIrkuK3kuIvlt6bluIPlsYA8L2xpPlxcbjwvdWw+XFxuXCI7IiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjVjNjEwOGJcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY1YzYxMDhiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY1YzYxMDhiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1YzYxMDhiXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjVjNjEwOGInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci9wYWdlcy9idXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiPHRlbXBsYXRlPlxuICAgIDx0LWZvb3Rlcj5mb290ZXI8L3QtZm9vdGVyPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwiY3NzXCIgc2NvcGVkPlxuICAgIC52LWZvb3RlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBcbiAgICB9XG48L3NjcmlwdD4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcInNpemUtXFxcIj5zaXpl6YCJ6aG55a6a5LmJ5aSn5bCPPC9oND5cXG48cD7ln7rnoYDpgInpobnvvJp0aW5n77yI5bCP77yJ44CBZGVmYXVsdO+8iOm7mOiupO+8ieOAgWxhcmdl77yI5aSn77yJPC9wPlxcbjxwPuWuveW6puiHqumAguW6lOmAiemhue+8mmxvbmfvvIzlj6/ku6XlkoxzaXpl5Lit6Zmk5LqGYXV0b+mAiemhuemFjeWQiOS9v+eUqDwvcD5cXG48cD7oh6rlrprkuYnlrr3pq5jvvJphdXRv77yM6YWN5ZCId2lkaHTlkoxoZWlnaHTkuIDotbfkvb/nlKg8L3A+XFxuXCI7IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRlbW8tY29udGVudCAudi1jb2xbZGF0YS12LTVmMWI2Zjg0XSwudi1jb2wgZGl2W2RhdGEtdi01ZjFiNmY4NF17XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDM7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwxNTMsMjI5LC43KTtcXG59XFxuLmRlbW8tY29udGVudCAudi1jb2xbZGF0YS12LTVmMWI2Zjg0XTpudGgtY2hpbGQob2RkKSwudi1jb2w6bnRoLWNoaWxkKG9kZCkgZGl2W2RhdGEtdi01ZjFiNmY4NF17XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTE3LCAxNzUsIDAuOSk7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dC1yb3cgOmd1dHRlcj1cXFwiMTBcXFwiPlxcbiAgICA8dC1jb2wgOnNwYW49XFxcIjRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOm5vbmU7XFxcIj48ZGl2IHN0eWxlPVxcXCJiYWNrZ3JvdW5kOnJnYmEoMCwgMTE3LCAxNzUsIDAuOSlcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPVxcXCI0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpub25lO1xcXCI+PGRpdiBzdHlsZT1cXFwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49XFxcIjRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOm5vbmU7XFxcIj48ZGl2IHN0eWxlPVxcXCJiYWNrZ3JvdW5kOnJnYmEoMCwgMTE3LCAxNzUsIDAuOSlcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPVxcXCI0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpub25lO1xcXCI+PGRpdiBzdHlsZT1cXFwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbjwvdC1yb3c+XCI7IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50byArIFwiIFwiICsgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHQtcm93IHR5cGU9J2ZsZXgnPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG48L3Qtcm93Plxcbjxicj5cXG48dC1yb3cgdHlwZT0nZmxleCc+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93IHR5cGU9J2ZsZXgnPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdzdGFydCc+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG48L3Qtcm93Plxcbjxicj5cXG48dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nZW5kJz5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdjZW50ZXInPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J3NwYWNlLWFyb3VuZCc+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG48L3Qtcm93Plxcbjxicj5cXG48dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYmV0d2Vlbic+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG48L3Qtcm93PlwiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1mb290ZXJbZGF0YS12LWU1ZTBlODE2XXtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwO1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCJhbGlnbi1cXFwiPmFsaWdu55So5rOVPC9oND5cXG48dWw+XFxuPGxpPuW9k3Jvd+eahHR5cGXorr7nva7kuLpmbGV45pe277yM5Y2z5Y+v6K6+572uYWxpZ248L2xpPlxcbjxsaT7mnInkuInkuKrlj4LmlbDvvIx0b3DvvIjlsYDkuIrvvInjgIFtaWRkbGXvvIjlsYDkuK3vvInjgIFib3R0b23vvIjlsYXkuIvvvIk8L2xpPlxcbjwvdWw+XFxuXCI7IiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJoZWFkZXJzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY29udGVudHNcIiwgeyBhdHRyczogeyBsaW5rTmFtZTogX3ZtLmxpbmtOYW1lIH0gfSwgW192bS5fdihcImluZGV4XCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcnM+PC9oZWFkZXJzPlxuICAgICAgICA8Y29udGVudHMgOmxpbmtOYW1lPSdsaW5rTmFtZSc+XG4gICAgICAgICAgICA8aDE+aW5wdXQ8L2gxPlxuICAgICAgICAgICAgPGgyPnNpemU8L2gyPlxuICAgICAgICAgICAgPHA+ZGVmYWx1dDwvcD5cbiAgICAgICAgICAgIDx0LWlucHV0IHYtbW9kZWw9J2lucHV0VmFsdWUnPjwvdC1pbnB1dD5cbiAgICAgICAgICAgIDxwPmxhcmdlPC9wPlxuICAgICAgICAgICAgPHQtaW5wdXQgdi1tb2RlbD0naW5wdXRWYWx1ZScgc2l6ZT0nbGFyZ2UnPjwvdC1pbnB1dD5cbiAgICAgICAgICAgIDxwPnNtYWxsPC9wPlxuICAgICAgICAgICAgPHQtaW5wdXQgdi1tb2RlbD0naW5wdXRWYWx1ZScgc2l6ZT0nc21hbGwnPjwvdC1pbnB1dD5cbiAgICAgICAgICAgIDxwPnRpbnk8L3A+XG4gICAgICAgICAgICA8dC1pbnB1dCB2LW1vZGVsPSdpbnB1dFZhbHVlJyBzaXplPSd0aW55Jz48L3QtaW5wdXQ+XG4gICAgICAgIDwvY29udGVudHM+XG4gICAgICAgIDxmb290ZXJzPjwvZm9vdGVycz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiPjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlucHV0VmFsdWU6JycsXG4gICAgICAgICAgICAgICAgbGlua05hbWU6J+i+k+WFpeahhidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2g6e1xuICAgICAgICAgICAgaW5wdXRWYWx1ZSh2YWx1ZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidC1oZWFkZXJcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInYtaGVhZGVyLWRlbW9cIiwgYXR0cnM6IHsgd2lkdGg6IDEyMDAgfSB9LFxuICAgIFtfdm0uX3YoXCJoZWFkZXJcIildXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiaGVhZGVyc1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJjb250ZW50c1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGxpbmtOYW1lOiBfdm0ubGlua05hbWUgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwi5pegc2lkZXJcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vcmU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWhlYWRlclwiLCBbX3ZtLl92KFwiaGVhZGVyXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGVtby1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woMTAsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInBcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoaSkgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInQtZm9vdGVyXCIsIFtfdm0uX3YoXCJmb290ZXJcIildKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5ub1NpZmVyTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLm5vU2lmZXJIdG1sKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCLlt6ZzaWRlclwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9yZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwidmlld1wiIH0sIHNsb3Q6IFwidmlld1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInQtaGVhZGVyXCIsIFtfdm0uX3YoXCJoZWFkZXJcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkZW1vLWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtc2lkZXJcIiwgW192bS5fdihcInNpZGVyXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKDEwLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGkpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWZvb3RlclwiLCBbX3ZtLl92KFwiZm9vdGVyXCIpXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwibWFya2Rvd25cIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ubGVmdFNpZmVyTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5sZWZ0U2lmZXJIdG1sKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCLlt6ZzaWRlclwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9yZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwidmlld1wiIH0sIHNsb3Q6IFwidmlld1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInQtaGVhZGVyXCIsIFtfdm0uX3YoXCJoZWFkZXJcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkZW1vLWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtc2lkZXJcIiwgW192bS5fdihcInNpZGVyXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKDEwLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGkpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWZvb3RlclwiLCBbX3ZtLl92KFwiZm9vdGVyXCIpXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwibWFya2Rvd25cIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ubGVmdFNpZmVyTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmxlZnRTaWZlckh0bWwpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuWPs3NpZGVyXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb3JlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidC1oZWFkZXJcIiwgW192bS5fdihcImhlYWRlclwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRlbW8tY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKDEwLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGkpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXNpZGVyXCIsIHsgYXR0cnM6IHsgd2lkdGg6IFwiNDAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwic2lkZXJcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidC1mb290ZXJcIiwgW192bS5fdihcImZvb3RlclwiKV0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnJpZ2h0U2lmZXJNZCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJtYXJrZG93blwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb2RlXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ucmlnaHRTaWZlckh0bWwpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0LWhlYWRlcj5oZWFkZXI8L3QtaGVhZGVyPlxcbjx0LWxheW91dCBjbGFzcz0nZGVtby1jb250ZW50Jz5cXG4gICAgPHQtc2lkZXI+c2lkZXI8L3Qtc2lkZXI+XFxuICAgIDx0LWNvbnRlbnQ+XFxuICAgICAgICA8cCB2LWZvcj1cXFwiaSBpbiAxMFxcXCIgOmtleT0naScgdi10ZXh0PSdpJz48L3A+XFxuICAgIDwvdC1jb250ZW50PlxcbjwvdC1sYXlvdXQ+XFxuPHQtZm9vdGVyPmZvb3RlcjwvdC1mb290ZXI+XCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoNCBpZD1cXFwibGVmdC1zaWRlclxcXCI+bGVmdC1zaWRlcjwvaDQ+XFxuPHVsPlxcbjxsaT7lj7PovrnmoI/nmoTkuIrkuK3kuIvlt6bluIPlsYA8L2xpPlxcbjwvdWw+XFxuXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoNCBpZD1cXFwiLWRpc2FibGVkXFxcIj7npoHmraLpgInkuK1kaXNhYmxlZDwvaDQ+XFxuPHA+5L2/55SoZGlzYWJsZWTlsZ7mgKflj6/ku6XorqlidXR0b27mjInpkq7lpITkuo7npoHmraLnirbmgIE8L3A+XFxuXCI7IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU1ZTBlODE2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9vdGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lNWUwZTgxNiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdG9vbHRpcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWYxZWJkMGNcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90b29sdGlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi90b29sdGlwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Rvb2x0aXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFmMWViZDBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFmMWViZDBjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90b29sdGlwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZjFlYmQwY1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFmMWViZDBjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzZXJ2ZXIvcGFnZXMvdG9vbHRpcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jvdy1jb2wudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWYxYjZmODQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmMWI2Zjg0Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jvdy1jb2wudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWYxYjZmODQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcnM+PC9oZWFkZXJzPlxuICAgICAgICA8Y29udGVudHMgOmxpbmtOYW1lPSdsaW5rTmFtZSc+XG4gICAgICAgICAgICA8dC1yb3c+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyNCc+XG4gICAgICAgICAgICAgICAgICAgIDx0LW1lbnUgOmFjdGl2ZS1uYW1lPVwiMVwiIEBvbjpzZWxlY3Q9XCJvbkNsaWNrSGFuZGxlMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMTwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPScyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAyPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDM8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICA8L3QtbWVudT5cbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPHQtcm93PlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMjQnPlxuICAgICAgICAgICAgICAgICAgICA8dC1tZW51IDphY3RpdmUtbmFtZT1cIjJcIiBAb246c2VsZWN0PVwib25DbGlja0hhbmRsZTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDE8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMjwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPSczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAzPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgPC90LW1lbnU+XG4gICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDx0LXJvdz5cbiAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzI0Jz5cbiAgICAgICAgICAgICAgICAgICAgPHQtbWVudSA6YWN0aXZlLW5hbWU9XCIzXCIgQG9uOnNlbGVjdD1cIm9uQ2xpY2tIYW5kbGUzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPScxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAxPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDI8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMzwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1tZW51PlxuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8dC1yb3c+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc4Jz5cbiAgICAgICAgICAgICAgICAgICAgPHQtbWVudSBtb2RlPSd2ZXJ0aWNhbCcgOmFjdGl2ZS1uYW1lPVwiM1wiIEBvbjpzZWxlY3Q9XCJvbkNsaWNrSGFuZGxlNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMTwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPScyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAyPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDM8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICA8L3QtbWVudT5cbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nOCc+XG4gICAgICAgICAgICAgICAgICAgIDx0LW1lbnUgbW9kZT0ndmVydGljYWwnIDphY3RpdmUtbmFtZT1cIjNcIiBAb246c2VsZWN0PVwib25DbGlja0hhbmRsZTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDE8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMjwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPSczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAzPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgPC90LW1lbnU+XG4gICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzgnPlxuICAgICAgICAgICAgICAgICAgICA8dC1tZW51IDp3aWR0aD0nMzAwJyA6aGVpZ2h0PSczMCcgbW9kZT0ndmVydGljYWwnIDphY3RpdmUtbmFtZT1cIjNcIiBAb246c2VsZWN0PVwib25DbGlja0hhbmRsZTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDE8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMjwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPSczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAzPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgPC90LW1lbnU+XG4gICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgIDwvY29udGVudHM+XG4gICAgICAgIDxmb290ZXJzPjwvZm9vdGVycz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiIHNjb3BlZD5cbiAgICBcbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtOYW1lOiflr7zoiKonXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICAgICAgb25DbGlja0hhbmRsZTE6IGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cCgnb25DbGlja0hhbmRsZTEnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrSGFuZGxlMjogZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdvbkNsaWNrSGFuZGxlMicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGUzOiBmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ29uQ2xpY2tIYW5kbGUzJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja0hhbmRsZTQ6IGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cCgnb25DbGlja0hhbmRsZTQnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrSGFuZGxlNTogZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdvbkNsaWNrSGFuZGxlNScpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGU2OiBmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ29uQ2xpY2tIYW5kbGU2Jyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzg3ZGM3MTAmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4N2RjNzEwJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJoZWFkZXJzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImNvbnRlbnRzXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbGlua05hbWU6IF92bS5saW5rTmFtZSB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogMjQgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInQtbWVudVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhY3RpdmUtbmFtZVwiOiAxIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgXCJvbjpzZWxlY3RcIjogX3ZtLm9uQ2xpY2tIYW5kbGUxIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAyIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDMgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IDI0IH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYWN0aXZlLW5hbWVcIjogMiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IFwib246c2VsZWN0XCI6IF92bS5vbkNsaWNrSGFuZGxlMiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDEgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgMlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAzIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiAyNCB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidC1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFjdGl2ZS1uYW1lXCI6IDMgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBcIm9uOnNlbGVjdFwiOiBfdm0ub25DbGlja0hhbmRsZTMgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAxIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgM1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogOCB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidC1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIsIFwiYWN0aXZlLW5hbWVcIjogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IFwib246c2VsZWN0XCI6IF92bS5vbkNsaWNrSGFuZGxlNCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDEgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgMlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAzIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiA4IH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG1vZGU6IFwidmVydGljYWxcIiwgXCJhY3RpdmUtbmFtZVwiOiAzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgXCJvbjpzZWxlY3RcIjogX3ZtLm9uQ2xpY2tIYW5kbGU1IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAyIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDMgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IDggfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInQtbWVudVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJhY3RpdmUtbmFtZVwiOiAzXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBcIm9uOnNlbGVjdFwiOiBfdm0ub25DbGlja0hhbmRsZTYgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAxIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgM1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJoZWFkZXJzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImNvbnRlbnRzXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbGlua05hbWU6IF92bS5saW5rTmFtZSB9IH0sXG4gICAgICAgIFtfYyhcInQtdG9vbHRpcFwiKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHRlbXBsYXRlPlxcbiAgICA8dC1yb3c+MTExMTwvdC1yb3c+XFxuPC90ZW1wbGF0ZT4gIFxcblxcbjxzY3JpcHQ+XFxuZXhwb3J0IGRlZmF1bHR7XFxuICAgIGRhdGE6ZnVuY3Rpb24oKXtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgbGlua05hbWU6ICfkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLrkvovlrZDlsZXnpLonLFxcbiAgICAgICAgfVxcbiAgICB9XFxufVxcbjwvc2NyaXB0PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcIm5vLXNpZGVyXFxcIj5uby1zaWRlcjwvaDQ+XFxuPHVsPlxcbjxsaT7msqHmnInlt6blj7PovrnmoI/nmoTkuIrkuK3kuIsz6KGM5biD5bGAPC9saT5cXG48L3VsPlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8dC1yb3cgOmd1dHRlcj1cXFwiMTBcXFwiPlxcbiAgPHQtY29sIDpvZmZzZXQ9JzEnIDpzcGFuPVxcXCI0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpub25lO1xcXCI+PGRpdiBzdHlsZT1cXFwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgPHQtY29sIDpvZmZzZXQ9JzInIDpzcGFuPVxcXCI0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpub25lO1xcXCI+PGRpdiBzdHlsZT1cXFwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgPHQtY29sIDpvZmZzZXQ9JzMnIDpzcGFuPVxcXCI0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpub25lO1xcXCI+PGRpdiBzdHlsZT1cXFwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgPHQtY29sIDpvZmZzZXQ9JzQnIDpzcGFuPVxcXCI0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpub25lO1xcXCI+PGRpdiBzdHlsZT1cXFwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgPHQtY29sIDpvZmZzZXQ9JzUnIDpzcGFuPVxcXCI0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpub25lO1xcXCI+PGRpdiBzdHlsZT1cXFwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgPHQtY29sIDpvZmZzZXQ9JzYnIDpzcGFuPVxcXCI0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpub25lO1xcXCI+PGRpdiBzdHlsZT1cXFwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbjwvdC1yb3c+XCI7IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiaGVhZGVyc1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJjb250ZW50c1wiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRlbW8tY29udGVudFwiLCBhdHRyczogeyBsaW5rTmFtZTogX3ZtLmxpbmtOYW1lIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuWfuuehgOeUqOazleagheagj+ezu+e7n1wiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9kZTogXCJ2ZXJ0aWNhbFwiLCBtb3JlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgW19jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyNCB9IH0sIFtfdm0uX3YoXCJjb2xcIildKV0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA0IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNCB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDQgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA0IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNCB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDQgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnN0YXRpY01kKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5zdGF0aWNIdG1sKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCLln7rnoYDmqKHlvI/kuIvnmoRvZmZzZXRcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vZGU6IFwidmVydGljYWxcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwidmlld1wiIH0sIHNsb3Q6IFwidmlld1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZ3V0dGVyOiAxMCB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb2Zmc2V0OiAxLCBzcGFuOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29sXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvZmZzZXQ6IDIsIHNwYW46IDQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjb2xcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9mZnNldDogMywgc3BhbjogNCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMTE3LCAxNzUsIDAuOSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImNvbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb2Zmc2V0OiA0LCBzcGFuOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29sXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvZmZzZXQ6IDUsIHNwYW46IDQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjb2xcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9mZnNldDogNiwgc3BhbjogNCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMTE3LCAxNzUsIDAuOSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImNvbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5vZmZzZXRNZCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJtYXJrZG93blwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb2RlXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ub2Zmc2V0SHRtbCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwi5Z+656GA5qih5byP5LiL55qEZ3V0dGVyXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGd1dHRlcjogMTAgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNwYW46IDQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjb2xcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNwYW46IDQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjb2xcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNwYW46IDQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjb2xcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNwYW46IDQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjb2xcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNwYW46IDQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjb2xcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNwYW46IDQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjb2xcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwibWFya2Rvd25cIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uZ3V0dGVyTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmd1dHRlckh0bWwpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcImZsZXjmqKHlvI9cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vZGU6IFwidmVydGljYWxcIiwgbW9yZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwidmlld1wiIH0sIHNsb3Q6IFwidmlld1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJmbGV4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJmbGV4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmZsZXhNZCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJtYXJrZG93blwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb2RlXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uZmxleEh0bWwpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcImZsZXjmqKHlvI/igJTigJRqdXN0aWZ555So5rOVXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIsIG1vcmU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiLCBqdXN0aWZ5OiBcInN0YXJ0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcImZsZXhcIiwganVzdGlmeTogXCJlbmRcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiLCBqdXN0aWZ5OiBcImNlbnRlclwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJmbGV4XCIsIGp1c3RpZnk6IFwic3BhY2UtYXJvdW5kXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcImZsZXhcIiwganVzdGlmeTogXCJzcGFjZS1iZXR3ZWVuXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwibWFya2Rvd25cIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5qdXN0aWZ5TWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmp1c3RpZnlIdG1sKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJmbGV45qih5byP4oCU4oCUYWxpZ27nlKjms5VcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vZGU6IFwidmVydGljYWxcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwidmlld1wiIH0sIHNsb3Q6IFwidmlld1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJmbGV4XCIsIGFsaWduOiBcInRvcFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDYgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTQwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImNvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiY29sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA2IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDYgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiODBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiY29sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmbGV4XCIsIGp1c3RpZnk6IFwiY2VudGVyXCIsIGFsaWduOiBcIm1pZGRsZVwiIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA2IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjE0MHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJjb2xcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDYgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImNvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA2IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjgwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImNvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiLCBqdXN0aWZ5OiBcImNlbnRlclwiLCBhbGlnbjogXCJib3R0b21cIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxNDBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiY29sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA2IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJjb2xcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDYgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI4MHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJjb2xcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmFsaWduTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmFsaWduSHRtbCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZvb3RlcnNcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcInR5cGVcXFwiPnR5cGU8L2g0PlxcbjxwPmJ1dHRvbuaMiemSruaciTTnp43moLflvI/vvJpkZWZhdWx044CBdGV4dOOAgXdhcm5pbmfjgIFlcnJvcjwvcD5cXG5cIjsiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aGVhZGVycz48L2hlYWRlcnM+XG4gICAgICAgIDxjb250ZW50cyA6bGlua05hbWU9J2xpbmtOYW1lJz5pbmRleDwvY29udGVudHM+XG4gICAgICAgIDxmb290ZXJzPjwvZm9vdGVycz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiIHNjb3BlZD48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rTmFtZTogJ+mmlumhtSdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcImZsZXgtXFxcIj5mbGV45qih5byP562J5YiGPC9oND5cXG48dWw+XFxuPGxpPuiusnJvd+eahHR5cGXlgLzorr7nva7kuLpmbGV477yM6YKj5LmI57O757uf5bCx5Lya5a6J6KOFZmxleOeahOaooeW8j+i/m+ihjOW4g+WxgO+8jGNvbOeahHNwYW7orr7nva7msqHmnInlvbHlk43jgII8L2xpPlxcbjwvdWw+XFxuXCI7IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiaGVhZGVyc1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJjb250ZW50c1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGxpbmtOYW1lOiBfdm0ubGlua05hbWUgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiaW5wdXRcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcInNpemVcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiZGVmYWx1dFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWlucHV0XCIsIHtcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5pbnB1dFZhbHVlID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5wdXRWYWx1ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcImxhcmdlXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCJsYXJnZVwiIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlucHV0VmFsdWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uaW5wdXRWYWx1ZSA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlucHV0VmFsdWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJzbWFsbFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwic21hbGxcIiB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5pbnB1dFZhbHVlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmlucHV0VmFsdWUgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpbnB1dFZhbHVlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwidGlueVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWlucHV0XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwidGlueVwiIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlucHV0VmFsdWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uaW5wdXRWYWx1ZSA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlucHV0VmFsdWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2lucHV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01N2MxNzk4MVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2lucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9pbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzL192dWUtaG90LXJlbG9hZC1hcGlAMi4zLjBAdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTdjMTc5ODEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTdjMTc5ODEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2lucHV0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01N2MxNzk4MVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU3YzE3OTgxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzZXJ2ZXIvcGFnZXMvaW5wdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2MzY2YyZWUmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2MzY2YyZWUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdjM2NmMmVlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzL192dWUtaG90LXJlbG9hZC1hcGlAMi4zLjBAdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2MzY2YyZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2MzY2YyZWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YzNjZjJlZSZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdjM2NmMmVlJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzZXJ2ZXIvcGFnZXMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0LXJvdyB0eXBlPSdmbGV4JyBhbGlnbj0ndG9wJz5cXG4gICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDE0MHB4O1xcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDEwMHB4O1xcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2PmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cXFwiaGVpZ2h0OiA4MHB4O1xcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG48L3Qtcm93Plxcbjxicj5cXG48dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nY2VudGVyJyBhbGlnbj0nbWlkZGxlJz5cXG4gICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDE0MHB4O1xcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDEwMHB4O1xcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2PmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cXFwiaGVpZ2h0OiA4MHB4O1xcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG48L3Qtcm93Plxcbjxicj5cXG48dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nY2VudGVyJyBhbGlnbj0nYm90dG9tJz5cXG4gICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDE0MHB4O1xcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDEwMHB4O1xcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2PmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cXFwiaGVpZ2h0OiA4MHB4O1xcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG48L3Qtcm93PlwiOyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBpbmRleCBmcm9tICcuL3BhZ2VzL2luZGV4LnZ1ZSc7XG5pbXBvcnQgcm93Q29sIGZyb20gJy4vcGFnZXMvcm93LWNvbC52dWUnO1xuaW1wb3J0IGJ1dHRvbiBmcm9tICcuL3BhZ2VzL2J1dHRvbi52dWUnO1xuaW1wb3J0IGxheW91dCBmcm9tICcuL3BhZ2VzL2xheW91dC52dWUnO1xuaW1wb3J0IHRhYmxlIGZyb20gJy4vcGFnZXMvdGFibGUudnVlJztcbmltcG9ydCBpbnB1dCBmcm9tICcuL3BhZ2VzL2lucHV0LnZ1ZSc7XG5pbXBvcnQgbWVudSBmcm9tICcuL3BhZ2VzL21lbnUudnVlJztcbmltcG9ydCB0b29sdGlwIGZyb20gJy4vcGFnZXMvdG9vbHRpcC52dWUnO1xuaW1wb3J0IGV4YXBtcGxlIGZyb20gJy4vcGFnZXMvZXhhcG1wbGUudnVlJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICAgIHsgXG4gICAgICAgIHBhdGg6ICcvJyxcbiAgICAgICAgbmFtZTogJ+mmlumhtScsXG4gICAgICAgIGNvbXBvbmVudDogaW5kZXggXG4gICAgfSxcbiAgICB7IFxuICAgICAgICBwYXRoOiAnL3Jvdy1jb2wnLFxuICAgICAgICBuYW1lOiAn5qCF5qCPJyxcbiAgICAgICAgY29tcG9uZW50OiByb3dDb2wgXG4gICAgfSxcbiAgICB7IFxuICAgICAgICBwYXRoOiAnL2J1dHRvbicsXG4gICAgICAgIG5hbWU6ICfmjInpkq4nLFxuICAgICAgICBjb21wb25lbnQ6IGJ1dHRvbiBcbiAgICB9LFxuICAgIHsgXG4gICAgICAgIHBhdGg6ICcvbGF5b3V0JyxcbiAgICAgICAgbmFtZTogJ+W4g+WxgCcsXG4gICAgICAgIGNvbXBvbmVudDogbGF5b3V0XG4gICAgfSxcbiAgICB7IFxuICAgICAgICBwYXRoOiAnL21lbnUnLFxuICAgICAgICBuYW1lOiAn5a+86IiqJyxcbiAgICAgICAgY29tcG9uZW50OiBtZW51XG4gICAgfSxcbiAgICB7IFxuICAgICAgICBwYXRoOiAnL3RhYmxlJyxcbiAgICAgICAgbmFtZTogJ+ihqOagvCcsXG4gICAgICAgIGNvbXBvbmVudDogdGFibGUgXG4gICAgfSxcbiAgICB7IFxuICAgICAgICBwYXRoOiAnL2lucHV0JyxcbiAgICAgICAgbmFtZTogJ+i+k+WFpeahhicsXG4gICAgICAgIGNvbXBvbmVudDogaW5wdXRcbiAgICB9LFxuICAgIHtcbiAgICAgICAgcGF0aDogJy90b29sdGlwJyxcbiAgICAgICAgbmFtZTogJ+awlOazoeaPkOekuicsXG4gICAgICAgIGNvbXBvbmVudDogdG9vbHRpcFxuICAgIH0sXG4gICAge1xuICAgICAgICBwYXRoOiAnL2V4YXBtcGxlJyxcbiAgICAgICAgbmFtZTogJ+S+i+WtkOWxleekuicsXG4gICAgICAgIGNvbXBvbmVudDogZXhhcG1wbGVcbiAgICB9XG5dOyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2OGM5OWFlZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRiYWNiMzdhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kYmFjYjM3YSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRiYWNiMzdhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jb250ZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2I0YjFlMmRcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNiNGIxZTJkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNiNGIxZTJkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jb250ZW50cy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2I0YjFlMmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYjRiMWUyZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI5YmRmZTQ4YVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdG9vbHRpcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rvb2x0aXAudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8aGVhZGVycz48L2hlYWRlcnM+XG4gICAgICAgIDxjb250ZW50cyA6bGlua05hbWU9J2xpbmtOYW1lJz5cbiAgICAgICAgICAgIDwhLS0gPGgxPnRvb2x0aXDmj5DnpLrln7rnoYDnlKjnlKjms5U8L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9kZT0ndmVydGljYWwnIG1vcmU+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nY2VudGVyJyBjbGFzcz0nbWIxMC1jZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55JyB2LXRvb2x0aXAudG9wLXN0YXJ0PVwibXNnXCI+5LiK5bemPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55JyB2LXRvb2x0aXAudG9wPVwibXNnXCI+5LiK5LitPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55JyB2LXRvb2x0aXAudG9wLWVuZD1cIm1zZ1wiPuS4iuWPszwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgY2xhc3M9J21iMTAtY2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueScgdi10b29sdGlwLmxlZnQtc3RhcnQ9XCJtc2dcIj7lt6bkuIo8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknIHYtdG9vbHRpcC5yaWdodC1zdGFydD1cIm1zZ1wiPuWPs+S4ijwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgY2xhc3M9J21iMTAtY2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueScgdi10b29sdGlwLmxlZnQ9XCJtc2dcIj7lt6bkuK08L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknIHYtdG9vbHRpcC5yaWdodD1cIm1zZ1wiPuWPs+S4rTwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgY2xhc3M9J21iMTAtY2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueScgdi10b29sdGlwLmxlZnQtZW5kPVwibXNnXCI+5bem5LiLPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55JyB2LXRvb2x0aXAucmlnaHQtZW5kPVwibXNnXCI+5Y+z5LiLPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdjZW50ZXInIGNsYXNzPSdtYjEwLWNlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknIHYtdG9vbHRpcC5ib3R0b20tc3RhcnQ9XCJtc2dcIj7kuIvlt6Y8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknIHYtdG9vbHRpcC5ib3R0b209XCJtc2dcIj7kuIvkuK08L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknIHYtdG9vbHRpcC5ib3R0b20tZW5kPVwibXNnXCI+5LiL5Y+zPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwibWFya2Rvd25cIiB2LWh0bWw9XCJ0b29sdGlwTWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc2xvdD1cImNvZGVcIiB2LWh0bWw9XCJ0b29sdGlwSHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aDE+bG9hZGluZ0NvbnRlbnQ8L2gxPlxuICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknXG4gICAgICAgICAgICAgICAgdi10b29sdGlwPSdsb2FkaW5nJ1xuICAgICAgICAgICAgPmxvYWRpbmc8L3QtYnV0dG9uPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGgxPuaOp+WItuaYvuekuumakOiXjzwvaDE+XG4gICAgICAgICAgICA8dC1yb3c+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyNCc+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55J1xuICAgICAgICAgICAgICAgICAgICAgICAgdi10b29sdGlwPVwie1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1zZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93OiBpc09wZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiAndG9wJyAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxuICAgICAgICAgICAgICAgICAgICA+5o6n5Yi25pi+56S66ZqQ6JePPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMjQnPlxuICAgICAgICAgICAgICAgICAgICBzaG93OiZuYnNwOzxpbnB1dCB0eXBlPVwicmFkaW9cIiBuYW1lPVwib3BlblwiIHYtbW9kZWw9J2lzT3BlbicgOnZhbHVlPVwidHJ1ZVwiLz5cbiAgICAgICAgICAgICAgICAgICAgaGlkZTo8aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIm9wZW5cIiB2LW1vZGVsPSdpc09wZW4nIDp2YWx1ZT1cImZhbHNlXCIvPlxuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICA8L3Qtcm93PiAtLT5cbiAgICAgICAgICAgIDx0LXRvb2x0aXA+PC90LXRvb2x0aXA+XG4gICAgICAgIDwvY29udGVudHM+XG4gICAgICAgIDxmb290ZXJzPjwvZm9vdGVycz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiPlxuICAgIC5tYjEwLWNle1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG5pbXBvcnQgdG9vbHRpcEh0bWwgZnJvbSAnLi4vZG9jL3Rvb2x0aXAvdG9vbHRpcC5odG1sJztcbmltcG9ydCB0b29sdGlwTWQgZnJvbSAnLi4vZG9jL3Rvb2x0aXAvdG9vbHRpcC5tZCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZGF0YTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxpbmtOYW1lOiBcIuawlOazoeaPkOekulwiLFxuICAgICAgbXNnOiBcIuawlOazoeaPkOekuu+8jOawlOazoeaPkOekuu+8jOawlOazoeaPkOekuu+8jDxicj7msJTms6Hmj5DnpLrvvIzmsJTms6Hmj5DnpLrjgIJcIixcbiAgICAgIGxvYWRpbmc6e1xuICAgICAgICAgIGNvbnRlbnQ6ICdhc3luY0NvbnRlbnQnLFxuICAgICAgICAgIGxvYWRpbmdDb250ZW50OiAnPGk+TG9hZGluZy4uLjwvaT4nLFxuICAgICAgfSxcbiAgICAgIGlzT3BlbjogZmFsc2UsXG4gICAgICB0b29sdGlwSHRtbDogdG9vbHRpcEh0bWwsXG4gICAgICB0b29sdGlwTWQ6IHRvb2x0aXBNZFxuICAgIH07XG4gIH1cbn07XG48L3NjcmlwdD5cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImhlYWRlcnNcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiY29udGVudHNcIixcbiAgICAgICAgeyBhdHRyczogeyBsaW5rTmFtZTogX3ZtLmxpbmtOYW1lIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vZGU6IFwiaG9yaXpvbnRhbFwiLCBtb3JlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgW19jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyNCB9IH0sIFtfdm0uX3YoXCJjb2xcIildKV0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5pbmZvKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5jb2RlKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIsIG1vcmU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICBbX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDI0IH0gfSwgW192bS5fdihcImNvbFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmluZm8pIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmNvZGUpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjFiNmY4NCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Jvdy1jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Jvdy1jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcm93LWNvbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjFiNmY4NCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWYxYjZmODRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1ZjFiNmY4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1ZjFiNmY4NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcm93LWNvbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWYxYjZmODQmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZjFiNmY4NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdjZW50ZXInIGNsYXNzPSdtYjEwLWNlJz5cXG4gIDx0LWNvbCA6c3Bhbj0nNSc+XFxuICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknIHYtdG9vbHRpcC50b3Atc3RhcnQ9XFxcIm1zZ1xcXCI+5LiK5bemPC90LWJ1dHRvbj5cXG4gIDwvdC1jb2w+XFxuICA8dC1jb2wgOnNwYW49JzUnPlxcbiAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55JyB2LXRvb2x0aXAudG9wPVxcXCJtc2dcXFwiPuS4iuS4rTwvdC1idXR0b24+XFxuICA8L3QtY29sPlxcbiAgPHQtY29sIDpzcGFuPSc1Jz5cXG4gICAgICA8dC1idXR0b24gc2l6ZT0ndGlueScgdi10b29sdGlwLnRvcC1lbmQ9XFxcIm1zZ1xcXCI+5LiK5Y+zPC90LWJ1dHRvbj5cXG4gIDwvdC1jb2w+XFxuPC90LXJvdz5cXG48dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgY2xhc3M9J21iMTAtY2UnPlxcbiAgPHQtY29sIDpzcGFuPSc1Jz5cXG4gICAgICA8dC1idXR0b24gc2l6ZT0ndGlueScgdi10b29sdGlwLmxlZnQtc3RhcnQ9XFxcIm1zZ1xcXCI+5bem5LiKPC90LWJ1dHRvbj5cXG4gIDwvdC1jb2w+XFxuICA8dC1jb2wgOnNwYW49JzUnPlxcbiAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55JyB2LXRvb2x0aXAucmlnaHQtc3RhcnQ9XFxcIm1zZ1xcXCI+5Y+z5LiKPC90LWJ1dHRvbj5cXG4gIDwvdC1jb2w+XFxuPC90LXJvdz5cXG48dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgY2xhc3M9J21iMTAtY2UnPlxcbiAgPHQtY29sIDpzcGFuPSc1Jz5cXG4gICAgICA8dC1idXR0b24gc2l6ZT0ndGlueScgdi10b29sdGlwLmxlZnQ9XFxcIm1zZ1xcXCI+5bem5LitPC90LWJ1dHRvbj5cXG4gIDwvdC1jb2w+XFxuICA8dC1jb2wgOnNwYW49JzUnPlxcbiAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55JyB2LXRvb2x0aXAucmlnaHQ9XFxcIm1zZ1xcXCI+5Y+z5LitPC90LWJ1dHRvbj5cXG4gIDwvdC1jb2w+XFxuPC90LXJvdz5cXG48dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgY2xhc3M9J21iMTAtY2UnPlxcbiAgPHQtY29sIDpzcGFuPSc1Jz5cXG4gICAgICA8dC1idXR0b24gc2l6ZT0ndGlueScgdi10b29sdGlwLmxlZnQtZW5kPVxcXCJtc2dcXFwiPuW3puS4izwvdC1idXR0b24+XFxuICA8L3QtY29sPlxcbiAgPHQtY29sIDpzcGFuPSc1Jz5cXG4gICAgICA8dC1idXR0b24gc2l6ZT0ndGlueScgdi10b29sdGlwLnJpZ2h0LWVuZD1cXFwibXNnXFxcIj7lj7PkuIs8L3QtYnV0dG9uPlxcbiAgPC90LWNvbD5cXG48L3Qtcm93Plxcbjx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdjZW50ZXInIGNsYXNzPSdtYjEwLWNlJz5cXG4gIDx0LWNvbCA6c3Bhbj0nNSc+XFxuICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknIHYtdG9vbHRpcC5ib3R0b20tc3RhcnQ9XFxcIm1zZ1xcXCI+5LiL5bemPC90LWJ1dHRvbj5cXG4gIDwvdC1jb2w+XFxuICA8dC1jb2wgOnNwYW49JzUnPlxcbiAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55JyB2LXRvb2x0aXAuYm90dG9tPVxcXCJtc2dcXFwiPuS4i+S4rTwvdC1idXR0b24+XFxuICA8L3QtY29sPlxcbiAgPHQtY29sIDpzcGFuPSc1Jz5cXG4gICAgICA8dC1idXR0b24gc2l6ZT0ndGlueScgdi10b29sdGlwLmJvdHRvbS1lbmQ9XFxcIm1zZ1xcXCI+5LiL5Y+zPC90LWJ1dHRvbj5cXG4gIDwvdC1jb2w+XFxuPC90LXJvdz5cIjsiXSwic291cmNlUm9vdCI6IiJ9