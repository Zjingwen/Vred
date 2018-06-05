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

/***/ "/x8P":
/*!*********************************!*\
  !*** ./server/pages/popper.vue ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _popper_vue_vue_type_template_id_778c24f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popper.vue?vue&type=template&id=778c24f6 */ "dPU1");
/* harmony import */ var _popper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popper.vue?vue&type=script&lang=js */ "rrhF");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _popper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _popper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _popper_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popper.vue?vue&type=style&index=0&lang=css */ "A0tC");
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.2.2@vue-loader/lib/runtime/componentNormalizer.js */ "XCsI");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_2_2_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _popper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _popper_vue_vue_type_template_id_778c24f6__WEBPACK_IMPORTED_MODULE_0__["render"],
  _popper_vue_vue_type_template_id_778c24f6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "server/pages/popper.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ "A0tC":
/*!*****************************************************************!*\
  !*** ./server/pages/popper.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-style-loader@4.1.0@vue-style-loader!../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./popper.vue?vue&type=style&index=0&lang=css */ "NUM2");
/* harmony import */ var _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_style_loader_0_21_0_style_loader_index_js_node_modules_css_loader_0_28_11_css_loader_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

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

module.exports = "<h4 id=\"tootip-\">tootip的基础用法</h4>\n<ul>\n<li>上左:content=top-start</li>\n<li>上中:content=top</li>\n<li>上右:content=top-end</li>\n<li>左上:content=left-start</li>\n<li>右上:content=right-start</li>\n<li>左中:content=left</li>\n<li>右中:content=right</li>\n<li>左下:content=left-end</li>\n<li>右下:content=right</li>\n<li>下左:content=bottom-start</li>\n<li>下中:content=bottom</li>\n<li>下右:content=bottom-end</li>\n</ul>\n";

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

/***/ "NUM2":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-style-loader@4.1.0@vue-style-loader!./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/popper.vue?vue&type=style&index=0&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/_style-loader@0.21.0@style-loader!../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./popper.vue?vue&type=style&index=0&lang=css */ "OMga");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/_vue-style-loader@4.1.0@vue-style-loader/lib/addStylesClient.js */ "BDYz").default
var update = add("3e1adea5", content, false, {});
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

/***/ "OMga":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.21.0@style-loader!./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/popper.vue?vue&type=style&index=0&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/_css-loader@0.28.11@css-loader!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./popper.vue?vue&type=style&index=0&lang=css */ "kVt8");

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

/***/ "PZ7Z":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/popper.vue?vue&type=template&id=778c24f6 ***!
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
          _c("h1", [_vm._v("tooltip提示基础用用法")]),
          _vm._v(" "),
          _c("t-exapmple", { attrs: { mode: "vertical" } }, [
            _c(
              "div",
              { attrs: { slot: "view" }, slot: "view" },
              [
                _c(
                  "t-row",
                  {
                    staticClass: "mb10-ce",
                    attrs: { type: "flex", justify: "center" }
                  },
                  [
                    _c(
                      "t-col",
                      { attrs: { span: 7 } },
                      [
                        _c(
                          "t-popper",
                          {
                            attrs: {
                              content: "top-start",
                              placement: "top-start",
                              transfer: ""
                            }
                          },
                          [
                            _c("t-button", { attrs: { size: "tiny" } }, [
                              _vm._v("上左")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "t-col",
                      { attrs: { span: 7 } },
                      [
                        _c(
                          "t-popper",
                          {
                            attrs: {
                              content: "top",
                              placement: "top",
                              transfer: ""
                            }
                          },
                          [
                            _c("t-button", { attrs: { size: "tiny" } }, [
                              _vm._v("上中")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "t-col",
                      { attrs: { span: 7 } },
                      [
                        _c(
                          "t-popper",
                          {
                            attrs: {
                              content: "top-end",
                              placement: "top-end",
                              transfer: ""
                            }
                          },
                          [
                            _c("t-button", { attrs: { size: "tiny" } }, [
                              _vm._v("上右")
                            ])
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
                _c(
                  "t-row",
                  {
                    staticClass: "mb10-ce",
                    attrs: { type: "flex", justify: "space-between" }
                  },
                  [
                    _c(
                      "t-col",
                      { attrs: { span: 5 } },
                      [
                        _c(
                          "t-popper",
                          {
                            attrs: {
                              content: "left-start",
                              placement: "left-start",
                              transfer: ""
                            }
                          },
                          [
                            _c("t-button", { attrs: { size: "tiny" } }, [
                              _vm._v("左上")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "t-col",
                      { attrs: { span: 5 } },
                      [
                        _c(
                          "t-popper",
                          {
                            attrs: {
                              content: "right-start",
                              placement: "right-start",
                              transfer: ""
                            }
                          },
                          [
                            _c("t-button", { attrs: { size: "tiny" } }, [
                              _vm._v("右上")
                            ])
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
                _c(
                  "t-row",
                  {
                    staticClass: "mb10-ce",
                    attrs: { type: "flex", justify: "space-between" }
                  },
                  [
                    _c(
                      "t-col",
                      { attrs: { span: 5 } },
                      [
                        _c(
                          "t-popper",
                          {
                            attrs: {
                              content: "left",
                              placement: "left",
                              transfer: ""
                            }
                          },
                          [
                            _c("t-button", { attrs: { size: "tiny" } }, [
                              _vm._v("右上")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "t-col",
                      { attrs: { span: 5 } },
                      [
                        _c(
                          "t-popper",
                          {
                            attrs: {
                              content: "right",
                              placement: "right",
                              transfer: ""
                            }
                          },
                          [
                            _c("t-button", { attrs: { size: "tiny" } }, [
                              _vm._v("右中")
                            ])
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
                _c(
                  "t-row",
                  {
                    staticClass: "mb10-ce",
                    attrs: { type: "flex", justify: "space-between" }
                  },
                  [
                    _c(
                      "t-col",
                      { attrs: { span: 5 } },
                      [
                        _c(
                          "t-popper",
                          {
                            attrs: {
                              content: "left-end",
                              placement: "left-end",
                              transfer: ""
                            }
                          },
                          [
                            _c("t-button", { attrs: { size: "tiny" } }, [
                              _vm._v("左下")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "t-col",
                      { attrs: { span: 5 } },
                      [
                        _c(
                          "t-popper",
                          {
                            attrs: {
                              content: "right-end",
                              placement: "right-end",
                              transfer: ""
                            }
                          },
                          [
                            _c("t-button", { attrs: { size: "tiny" } }, [
                              _vm._v("右下")
                            ])
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
                _c(
                  "t-row",
                  {
                    staticClass: "mb10-ce",
                    attrs: { type: "flex", justify: "center" }
                  },
                  [
                    _c(
                      "t-col",
                      { attrs: { span: 7 } },
                      [
                        _c(
                          "t-popper",
                          {
                            attrs: {
                              content: "bottom-start",
                              placement: "bottom-start",
                              transfer: ""
                            }
                          },
                          [
                            _c("t-button", { attrs: { size: "tiny" } }, [
                              _vm._v("下左")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "t-col",
                      { attrs: { span: 7 } },
                      [
                        _c(
                          "t-popper",
                          {
                            attrs: {
                              content: "bottom",
                              placement: "bottom",
                              transfer: ""
                            }
                          },
                          [
                            _c("t-button", { attrs: { size: "tiny" } }, [
                              _vm._v("下中")
                            ])
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "t-col",
                      { attrs: { span: 7 } },
                      [
                        _c(
                          "t-popper",
                          {
                            attrs: {
                              content: "bottom-end",
                              placement: "bottom-end",
                              transfer: ""
                            }
                          },
                          [
                            _c("t-button", { attrs: { size: "tiny" } }, [
                              _vm._v("下右")
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
              ],
              1
            ),
            _vm._v(" "),
            _c("div", {
              attrs: { slot: "markdown" },
              domProps: { innerHTML: _vm._s(_vm.tooltipMd) },
              slot: "markdown"
            }),
            _vm._v(" "),
            _c("textarea", {
              attrs: { slot: "code" },
              domProps: { innerHTML: _vm._s(_vm.tooltipHtml) },
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

/***/ "dPU1":
/*!***************************************************************!*\
  !*** ./server/pages/popper.vue?vue&type=template&id=778c24f6 ***!
  \***************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_template_id_778c24f6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./popper.vue?vue&type=template&id=778c24f6 */ "PZ7Z");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_template_id_778c24f6__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_2_2_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_template_id_778c24f6__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "kVt8":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@0.28.11@css-loader!./node_modules/_vue-loader@15.2.2@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/popper.vue?vue&type=style&index=0&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/_css-loader@0.28.11@css-loader/lib/css-base.js */ "lbwJ")(false);
// imports


// module
exports.push([module.i, "\n.mb10-ce{\n    margin-bottom: 20px;\n    text-align: center;\n}\n", ""]);

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

/***/ "rrhF":
/*!*********************************************************!*\
  !*** ./server/pages/popper.vue?vue&type=script&lang=js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@7.1.4@babel-loader/lib!../../node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./popper.vue?vue&type=script&lang=js */ "vf+A");
/* harmony import */ var _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_vue_loader_15_2_2_vue_loader_lib_index_js_vue_loader_options_popper_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

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

var _popper = __webpack_require__(/*! ./pages/popper.vue */ "/x8P");

var _popper2 = _interopRequireDefault(_popper);

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
  path: '/popper',
  name: '气泡提示',
  component: _popper2.default
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

/***/ "vf+A":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@7.1.4@babel-loader/lib!./node_modules/_vue-loader@15.2.2@vue-loader/lib??vue-loader-options!./server/pages/popper.vue?vue&type=script&lang=js ***!
  \**********************************************************************************************************************************************************************************/
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

module.exports = "<t-row type='flex' justify='center' class='mb10-ce'>\n    <t-col :span='7'>\n        <t-popper content='top-start' placement='top-start' transfer>\n            <t-button size='tiny'>上左</t-button>\n        </t-popper>\n    </t-col>\n    <t-col :span='7'>\n        <t-popper content='top' placement='top' transfer>\n            <t-button size='tiny'>上中</t-button>\n        </t-popper>\n    </t-col>\n    <t-col :span='7'>\n        <t-popper content='top-end' placement='top-end' transfer>\n            <t-button size='tiny'>上右</t-button>\n        </t-popper>\n    </t-col>\n</t-row>\n<t-row type='flex' justify='space-between' class='mb10-ce'>\n    <t-col :span='5'>\n        <t-popper content='left-start' placement='left-start' transfer>\n            <t-button size='tiny'>左上</t-button>\n        </t-popper>\n    </t-col>\n    <t-col :span='5'>\n        <t-popper content='right-start' placement='right-start' transfer>\n            <t-button size='tiny'>右上</t-button>\n        </t-popper>\n    </t-col>\n</t-row>\n<t-row type='flex' justify='space-between' class='mb10-ce'>\n    <t-col :span='5'>\n        <t-popper content='left' placement='left' transfer>\n            <t-button size='tiny'>右上</t-button>\n        </t-popper>\n    </t-col>\n    <t-col :span='5'>\n        <t-popper content='right' placement='right' transfer>\n            <t-button size='tiny'>右中</t-button>\n        </t-popper>\n    </t-col>\n</t-row>\n<t-row type='flex' justify='space-between' class='mb10-ce'>\n    <t-col :span='5'>\n        <t-popper content='left-end' placement='left-end' transfer>\n            <t-button size='tiny'>左下</t-button>\n        </t-popper>\n    </t-col>\n    <t-col :span='5'>\n        <t-popper content='right-end' placement='right-end' transfer>\n            <t-button size='tiny'>右下</t-button>\n        </t-popper>\n    </t-col>\n</t-row>\n<t-row type='flex' justify='center' class='mb10-ce'>\n    <t-col :span='7'>\n        <t-popper content='bottom-start' placement='bottom-start' transfer>\n            <t-button size='tiny'>下左</t-button>\n        </t-popper>\n    </t-col>\n    <t-col :span='7'>\n        <t-popper content='bottom' placement='bottom' transfer>\n            <t-button size='tiny'>下中</t-button>\n        </t-popper>\n    </t-col>\n    <t-col :span='7'>\n        <t-popper content='bottom-end' placement='bottom-end' transfer>\n            <t-button size='tiny'>下右</t-button>\n        </t-popper>\n    </t-col>\n</t-row>";

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvb2Zmc2V0Lm1kIiwid2VicGFjazovLy9zZXJ2ZXIvcGFnZXMvYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudnVlPzdmNTAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vaHRtbFR5cGUubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2lucHV0LnZ1ZT9kNGEzIiwid2VicGFjazovLy8uL3NlcnZlci9kb2Mvcm93L2p1c3RpZnkubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3BvcHBlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL21lbnUudnVlP2RmMzIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvc3RhdGljLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3RhYmxlLnZ1ZT80YTNmIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9leGFwbXBsZS52dWU/NWNhOCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2J1dHRvbi9odG1sVHlwZS5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy90YWJsZS52dWU/MGMwMyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9oZWFkZXJzLnZ1ZT8yM2ViIiwid2VicGFjazovLy9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9oZWFkZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9mb290ZXJzLnZ1ZT83ZTZkIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9leGFwbXBsZS52dWU/MDEyYyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2xheW91dC9uby1zaWRlci5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9sYXlvdXQudnVlP2QxOTkiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlPzlhMjgiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vc2l6ZS5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9tZW51LnZ1ZT9mYzkxIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbnB1dC52dWU/NzE0NCIsIndlYnBhY2s6Ly8vc2VydmVyL3BhZ2VzL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9mb290ZXJzLnZ1ZT82ZjI2Iiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9sYXlvdXQudnVlPzc5MmUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vdHlwZS5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9tZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvcm93LWNvbC52dWU/ODBlMCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvbGF5b3V0LnZ1ZT85NTgxIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9wb3BwZXIudnVlPzgyMTAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2xheW91dC52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2J1dHRvbi52dWU/YTE2ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzIiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvbGF5b3V0L3JpZ2h0LXNpZGVyLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlP2I5ZmUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvaGVhZGVycy52dWU/ZTdkNiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlP2RhMGQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2lucHV0LnZ1ZT9lMDIwIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9leGFwbXBsZS52dWU/MjM3OCIsIndlYnBhY2s6Ly8vc2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvYnV0dG9uL2NsaWNrLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vY2xpY2subWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvZm9vdGVycy52dWU/ZWYxMCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9oZWFkZXJzLnZ1ZT9mMjA1Iiwid2VicGFjazovLy9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9jb250ZW50cy52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3RhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9oZWFkZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvYnV0dG9uLnZ1ZT9lNGI3Iiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2Zvb3RlcnMudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvdG9vbHRpcC90b29sdGlwLm1kIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9leGFwbXBsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2lucHV0LnZ1ZT8xZDllIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9wb3BwZXIudnVlP2Q1ZjIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vZGlzYWJsZWQuaHRtbCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvaW5kZXgudnVlP2YxMTgiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvZ3V0dGVyLm1kIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9tZW51LnZ1ZT8wNThhIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9wb3BwZXIudnVlP2JhNmIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2luZGV4LnZ1ZT84MWUyIiwid2VicGFjazovLy9zZXJ2ZXIvcGFnZXMvZXhhcG1wbGUudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbmRleC52dWU/MTUzYSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvcG9wcGVyLnZ1ZT8xYzVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9sYXlvdXQudnVlPzQ5ZTIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2luZGV4LnZ1ZT8wZThhIiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2Zvb3RlcnMudnVlP2MyYjkiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3RhYmxlLnZ1ZT82MTMxIiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvZXhhcG1wbGUtaW5mby5tZCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL3Jvdy9zdGF0aWMubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlP2M1MzYiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3RhYmxlLnZ1ZT9iZTEzIiwid2VicGFjazovLy9zZXJ2ZXIvcGFnZXMvbGF5b3V0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2xheW91dC9yaWdodC1zaWRlci5tZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9idXR0b24udnVlIiwid2VicGFjazovLy9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9mb290ZXJzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvZXhhcG1wbGUudnVlP2MyN2YiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vc2l6ZS5tZCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9jb250ZW50cy52dWU/MWY1YiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvcm93LWNvbC52dWU/YTIzOSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL3Jvdy9ndXR0ZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvZmxleC5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9kb2Mvcm93L2p1c3RpZnkuaHRtbCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9jb250ZW50cy52dWU/MTk5MSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9mb290ZXJzLnZ1ZT8yYTY2Iiwid2VicGFjazovLy8uL3NlcnZlci9kb2Mvcm93L2FsaWduLm1kIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL21lbnUudnVlPzdlODciLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2luZGV4LnZ1ZT81Y2MwIiwid2VicGFjazovLy9zZXJ2ZXIvcGFnZXMvaW5wdXQudnVlIiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2hlYWRlcnMudnVlP2E4ZmYiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2J1dHRvbi52dWU/ZmZlMiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvbGF5b3V0LnZ1ZT83NzkzIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9idXR0b24udnVlP2NhMWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9sYXlvdXQvbGVmdC1zaWRlci5odG1sIiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvbGF5b3V0L2xlZnQtc2lkZXIubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vZGlzYWJsZWQubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3BvcHBlci52dWU/MjEwMCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9mb290ZXJzLnZ1ZT8zOWRmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9sYXlvdXQudnVlPzBhOTUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlPzNlMWUiLCJ3ZWJwYWNrOi8vL3NlcnZlci9wYWdlcy9tZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvbWVudS52dWU/YmQzZCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvbWVudS52dWU/YzQ5NiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL2V4YXBtcGxlLWNvZGUubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9sYXlvdXQvbm8tc2lkZXIubWQiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvb2Zmc2V0Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlP2U1YzMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9idXR0b24vdHlwZS5tZCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvdGFibGUudnVlPzhmOGUiLCJ3ZWJwYWNrOi8vL3NlcnZlci9wYWdlcy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3BvcHBlci52dWU/NWFkNyIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvZG9jL3Jvdy9mbGV4Lm1kIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbnB1dC52dWU/YmI2YSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvaW5wdXQudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL2RvYy9yb3cvYWxpZ24uaHRtbCIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9oZWFkZXJzLnZ1ZT85YTVjIiwid2VicGFjazovLy8uL3NlcnZlci9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2V4YXBtcGxlLnZ1ZT83MWEwIiwid2VicGFjazovLy9zZXJ2ZXIvcGFnZXMvcG9wcGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvd2ViQ29tcG9uZW50cy9jb250ZW50cy52dWU/ZjAxMiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvYnV0dG9uLnZ1ZT8wOTU3Iiwid2VicGFjazovLy8uL3NlcnZlci93ZWJDb21wb25lbnRzL2hlYWRlcnMudnVlPzlkNmIiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9idXR0b24udnVlPzc0NjAiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3dlYkNvbXBvbmVudHMvY29udGVudHMudnVlP2M0MDciLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL2lucHV0LnZ1ZT8zZGE4Iiwid2VicGFjazovLy8uL3NlcnZlci9wYWdlcy9leGFwbXBsZS52dWU/NzkwYiIsIndlYnBhY2s6Ly8vLi9zZXJ2ZXIvcGFnZXMvdGFibGUudnVlP2UwMzEiLCJ3ZWJwYWNrOi8vLy4vc2VydmVyL3BhZ2VzL3Jvdy1jb2wudnVlIiwid2VicGFjazovLy8uL3NlcnZlci9kb2MvdG9vbHRpcC90b29sdGlwLmh0bWwiXSwibmFtZXMiOlsiVnVlIiwiY29uZmlnIiwiZGV2dG9vbHMiLCJ1c2UiLCJWdWVSb3V0ZXIiLCJjb21wb25lbnRzIiwiY29udGVudHMiLCJoZWFkZXJzIiwiZm9vdGVycyIsImluc3RhbGwiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsInZhbHVlIiwiY29tcG9uZW50Iiwicm91dGVyIiwicm91dGVzIiwiJG1vdW50IiwicGF0aCIsIm5hbWUiLCJpbmRleCIsInJvd0NvbCIsImJ1dHRvbiIsImxheW91dCIsIm1lbnUiLCJ0YWJsZSIsImlucHV0IiwicG9wcGVyIiwiZXhhcG1wbGUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSx1Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUEsMEJBRkE7QUFHQSxvQ0FIQTtBQUlBLGtDQUpBO0FBS0EsNENBTEE7QUFNQSwwQ0FOQTtBQU9BLG9DQVBBO0FBUUEsa0NBUkE7QUFTQSxzQ0FUQTtBQVVBLG9DQVZBO0FBV0EsNENBWEE7QUFZQTtBQVpBO0FBY0EsS0FoQkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQWpCQSxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEYyTSwrUUFBb0IsQzs7Ozs7Ozs7Ozs7QUNBL04sdUc7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ2EsK2NBQW9CLEM7Ozs7Ozs7Ozs7O0FDQXBiLG1NOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDbEM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHVCQWlCQTtBQUNBO0FBQ0EsZ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2QzBNLDhRQUFvQixDOzs7Ozs7Ozs7OztBQ0E5TixtaEU7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsU0FBUyx5QkFBeUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0EsV0FBVyxlQUFlLDBCQUEwQixFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUyxrQ0FBa0MsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdKOE0sa1JBQW9CLEM7Ozs7Ozs7Ozs7O0FDQWxPLHVMOzs7Ozs7Ozs7OztBQ0FBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLFk7Ozs7Ozs7Ozs7O0FDVkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0EsWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkNJQSxFOzs7Ozs7Ozs7OztBQ2RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWbWEsa2RBQW9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXZiLG9OOzs7Ozs7Ozs7OztBQ0FBO0FBQ0E7OztBQUdBO0FBQ0Es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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFVBQVUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw0Q0FBNEMsU0FBUyxlQUFlLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFVBQVUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw0Q0FBNEMsU0FBUyxlQUFlLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFVBQVUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw0Q0FBNEMsU0FBUyxlQUFlLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFVBQVUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw0Q0FBNEMsU0FBUyxlQUFlLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFVBQVUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw0Q0FBNEMsU0FBUyxlQUFlLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFVBQVUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw0Q0FBNEMsU0FBUyxlQUFlLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFVBQVUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw0Q0FBNEMsU0FBUyxlQUFlLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFVBQVUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw0Q0FBNEMsU0FBUyxlQUFlLEVBQUU7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixTQUFTLFVBQVUsRUFBRTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQSw0Q0FBNEMsU0FBUyxlQUFlLEVBQUU7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O0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDLHlCQUF5QixrQ0FBa0M7QUFDM0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDLHlCQUF5QixzQ0FBc0M7QUFDL0Q7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVMsbUJBQW1CLEVBQUU7QUFDMUQ7QUFD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QUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLGVBQWUsRUFBRTtBQUM3QztBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG1CQUFtQjtBQUN6Qyx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxzQkFBc0IsZUFBZTtBQUNyQyx5QkFBeUIsb0NBQW9DO0FBQzdEO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixTQUFTLDZCQUE2QixFQUFFO0FBQ3BFO0FBQ0E7QUFDQSxlQUFlLFNBQVMsZUFBZSxnQkFBZ0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVMsaUNBQWlDLEVBQUU7QUFDL0Q7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLCtCQUErQixFQUFFO0FBQzdEO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyxrQ0FBa0MsRUFBRTtBQUNoRTtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFNBQVMsd0NBQXdDLEVBQUU7QUFDdEU7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTLHlDQUF5QyxFQUFFO0FBQ3ZFO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0EsaUNBQWlDLFNBQVMsVUFBVSxFQUFFO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsbUJBQW1CO0FBQ3pDLHlCQUF5QixxQ0FBcUM7QUFDOUQ7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHNCQUFzQixlQUFlO0FBQ3JDLHlCQUF5Qix1Q0FBdUM7QUFDaEU7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVMsbUJBQW1CLEVBQUU7QUFDMUQ7QUFDQTtBQUNBLGVBQWUsU0FBUyxlQUFlLGdCQUFnQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsU0FBUyw2QkFBNkIsRUFBRTtBQUMzRDtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RCxpQ0FBaUMsZUFBZSxrQkFBa0IsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RCxpQ0FBaUMsZUFBZSxrQkFBa0IsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQsaUNBQWlDLGVBQWUsaUJBQWlCLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RCxpQ0FBaUMsZUFBZSxrQkFBa0IsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RCxpQ0FBaUMsZUFBZSxrQkFBa0IsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsU0FBUyxVQUFVLEVBQUU7QUFDdEQsaUNBQWlDLGVBQWUsaUJBQWlCLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RCxpQ0FBaUMsZUFBZSxrQkFBa0IsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RCxpQ0FBaUMsZUFBZSxrQkFBa0IsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxTQUFTLFVBQVUsRUFBRTtBQUN0RDtB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Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGtDO0FBQ2xDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFpQkE7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7OztBQ3ZDQSxtNkUiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCJDb3VzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoNCBpZD1cXFwib2Zmc2V0LVxcXCI+b2Zmc2V05qih5byPPC9oND5cXG48dWw+XFxuPGxpPuiuvue9rmNvbOeahOW3pui+uei3nTwvbGk+XFxuPC91bD5cXG5cIjsiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcnM+PC9oZWFkZXJzPlxuICAgICAgICA8Y29udGVudHMgOmxpbmtOYW1lPSdsaW5rTmFtZSc+XG4gICAgICAgICAgICA8aDE+5oyJ6ZKuLXNpemU8L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9kZT0ndmVydGljYWwnPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknPnRpbnk8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J2RlZmF1bHQnPmRlZmF1bHQ8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J2xhcmdlJyA6aHRtbFR5cGU9XCJ0eXBlXCI+bGFyZ2U8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J2F1dG8nIDp3aWR0aD0nMTIwJyA6aGVpZ2h0PSc1MCc+YXV0bzwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0nZGVmYXVsdCcgbG9uZz5sb25nPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cInNpemVNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cInNpemVIdG1sXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxoMT7mjInpkq4tZGlzYWJsZWQ8L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9kZT0ndmVydGljYWwnPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uPmRlZmF1bHQ8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8YnI+PGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gdHlwZT0ndGV4dCc+dGV4dDwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxicj48YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiB0eXBlPSd3YXJuaW5nJz53YXJuaW5nPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPGJyPjxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHR5cGU9J2Vycm9yJz5lcnJvcjwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwibWFya2Rvd25cIiB2LWh0bWw9XCJ0eXBlTWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc2xvdD1cImNvZGVcIiB2LXRleHQ9XCJ0eXBlSHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aDE+5oyJ6ZKuLWh0bWxUeXBlPC9oMT5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vZGU9J3ZlcnRpY2FsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBodG1sVHlwZT1cImJ1dHRvblwiPmJ1dHRvbjwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxicj48YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBodG1sVHlwZT1cInN1Ym1pdFwiPnN1Ym1pdDwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxicj48YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBodG1sVHlwZT1cInJlc2V0XCI+cmVzZXQ8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cIm1hcmtkb3duXCIgdi1odG1sPVwiaHRtbFR5cGVNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtaHRtbD1cImh0bWxUeXBlSHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aDE+5oyJ6ZKuLWNsaWNrPC9oMT5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vZGU9J3ZlcnRpY2FsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSdkZWZhdWx0JyBAY2xpY2s9XCJoYW5kbGVDbGljaygnZGVmYXVsdCcpXCI+Y2xpY2s8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cIm1hcmtkb3duXCIgdi1odG1sPVwiY2xpY2tNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtaHRtbD1cImNsaWNrSHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgIDwvY29udGVudHM+XG4gICAgICAgIDxmb290ZXJzPjwvZm9vdGVycz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiPjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCBzaXplSHRtbCBmcm9tICcuLi9kb2MvYnV0dG9uL3NpemUuaHRtbCc7XG4gICAgaW1wb3J0IHNpemVNZCBmcm9tICcuLi9kb2MvYnV0dG9uL3NpemUubWQnO1xuXG4gICAgaW1wb3J0IGRpc2FibGVkSHRtbCBmcm9tICcuLi9kb2MvYnV0dG9uL2Rpc2FibGVkLmh0bWwnO1xuICAgIGltcG9ydCBkaXNhYmxlZE1kIGZyb20gJy4uL2RvYy9idXR0b24vZGlzYWJsZWQubWQnO1xuXG4gICAgaW1wb3J0IHR5cGVIdG1sIGZyb20gJy4uL2RvYy9idXR0b24vdHlwZS5odG1sJztcbiAgICBpbXBvcnQgdHlwZU1kIGZyb20gJy4uL2RvYy9idXR0b24vdHlwZS5tZCc7XG5cbiAgICBpbXBvcnQgY2xpY2tIdG1sIGZyb20gJy4uL2RvYy9idXR0b24vY2xpY2suaHRtbCc7XG4gICAgaW1wb3J0IGNsaWNrTWQgZnJvbSAnLi4vZG9jL2J1dHRvbi9jbGljay5tZCc7XG5cbiAgICBpbXBvcnQgaHRtbFR5cGVIdG1sIGZyb20gJy4uL2RvYy9idXR0b24vaHRtbFR5cGUuaHRtbCc7XG4gICAgaW1wb3J0IGh0bWxUeXBlTWQgZnJvbSAnLi4vZG9jL2J1dHRvbi9odG1sVHlwZS5tZCc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB0eXBlOidzdWJtaXQnLFxuICAgICAgICAgICAgICAgIGxpbmtOYW1lOiAn5oyJ6ZKuJyxcbiAgICAgICAgICAgICAgICBzaXplSHRtbDogc2l6ZUh0bWwsXG4gICAgICAgICAgICAgICAgc2l6ZU1kOiBzaXplTWQsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRIdG1sOiBkaXNhYmxlZEh0bWwsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRNZDogZGlzYWJsZWRNZCxcbiAgICAgICAgICAgICAgICB0eXBlSHRtbDogdHlwZUh0bWwsXG4gICAgICAgICAgICAgICAgdHlwZU1kOiB0eXBlTWQsXG4gICAgICAgICAgICAgICAgY2xpY2tIdG1sOiBjbGlja0h0bWwsXG4gICAgICAgICAgICAgICAgY2xpY2tNZDogY2xpY2tNZCxcbiAgICAgICAgICAgICAgICBodG1sVHlwZUh0bWw6IGh0bWxUeXBlSHRtbCxcbiAgICAgICAgICAgICAgICBodG1sVHlwZU1kOiBodG1sVHlwZU1kLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOntcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrOmZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgYWxlcnQodmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoNCBpZD1cXFwiaHRtbHR5cGVcXFwiPmh0bWxUeXBlPC9oND5cXG48cD5idXR0b27nmoRodG1s57G75Z6L77yM5YyF5ousYnV0dG9u44CBc3VibWl044CBcmVzZXTkuInnp43nsbvlnos8L3A+XFxuXCI7IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCJqdXN0aWZ5LVxcXCI+anVzdGlmeeeUqOazlTwvaDQ+XFxuPHVsPlxcbjxsaT7lvZNyb3fnmoR0eXBl6K6+572u5Li6ZmxleOaXtu+8jOWNs+WPr+iuvue9rmp1c3RpZnk8L2xpPlxcbjxsaT7mnInlm5vkuKrlj4LmlbDvvIxzdGFydO+8iOWxgOW3pu+8ieOAgWVuZO+8iOWxgOWPs++8ieOAgWNlbnRlcu+8iOWxheS4re+8ieOAgXNwYWNlLWFyb3VuZO+8iOWvueWFtu+8iVxcbiAg44CBc3BhY2UtYmV0d2Vlbu+8iOS4pOerr+WvueWFtu+8iTwvbGk+XFxuPC91bD5cXG5cIjsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3BvcHBlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzc4YzI0ZjZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wb3BwZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcHBlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9wb3BwZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc3OGMyNGY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc3OGMyNGY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wb3BwZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3OGMyNGY2XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzc4YzI0ZjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci9wYWdlcy9wb3BwZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0LXJvdz5cXG4gICAgPHQtY29sIDpzcGFuPScyNCc+Y29sPC90LWNvbD5cXG48L3Qtcm93Plxcbjxicj5cXG48dC1yb3c+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdz5cXG4gICAgPHQtY29sIDpzcGFuPSc0Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc0Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzQnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cXG48L3Qtcm93Plxcbjxicj5cXG48dC1yb3c+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdz5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG48L3Qtcm93Plxcbjxicj5cXG48dC1yb3c+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cIjsiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJoZWFkZXJzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiY29udGVudHNcIiwgeyBhdHRyczogeyBsaW5rTmFtZTogX3ZtLmxpbmtOYW1lIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXJpZ2h0XCI6IFwiMjBweFwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0LXRhYmxlXCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgd2lkdGg6IFsxMCwgMTAsIDEwLCAyMCwgMjUsIDMwXSB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC10aGVhZFwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtdHJcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+S4gFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5LqMXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kuIlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+Wbm1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5LqUXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/lha1cIildKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtdHJcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+S4gFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5LqMXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kuIlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+Wbm1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5LqUXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/lha1cIildKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtdHJcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+S4gFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5LqMXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/kuIlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtdGhcIiwgW192bS5fdihcIuaYn+acn+Wbm1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC10aFwiLCBbX3ZtLl92KFwi5pif5pyf5LqUXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRoXCIsIFtfdm0uX3YoXCLmmJ/mnJ/lha1cIildKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC10Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtdHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS4gOWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LqM5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkuInlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOWbm+WkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LqU5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzlha3lpKlcIildKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkuIDlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS6jOWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LiJ5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzlm5vlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS6lOWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5YWt5aSpXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC10clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLnrKzkuIDlpKlcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi56ys5LiA5aSpKzFcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS6jOWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LiJ5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzlm5vlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS6lOWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5YWt5aSpXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC10clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5LiA5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkuozlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOS4ieWkqVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KFwi56ys5Zub5aSpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoXCLnrKzkupTlpKlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihcIuesrOWFreWkqVwiKSwgX2MoXCJiclwiKSwgX3ZtLl92KFwi56ys5YWt5aSpKzFcIildKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dC1idXR0b24gaHRtbFR5cGU9XFxcImJ1dHRvblxcXCI+YnV0dG9uPC90LWJ1dHRvbj5cXG48YnI+PGJyPlxcbjx0LWJ1dHRvbiBodG1sVHlwZT1cXFwic3VibWl0XFxcIj5zdWJtaXQ8L3QtYnV0dG9uPlxcbjxicj48YnI+XFxuPHQtYnV0dG9uIGh0bWxUeXBlPVxcXCJyZXNldFxcXCI+cmVzZXQ8L3QtYnV0dG9uPlwiOyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjdjYmI4NSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0YzAzNmJmMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I3Y2JiODUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I3Y2JiODUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRiYWNiMzdhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjU5YzVkNGMyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRiYWNiMzdhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGJhY2IzN2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjx0ZW1wbGF0ZT5cbiAgICA8dC1oZWFkZXIgY2xhc3M9J3YtaGVhZGVyLWRlbW8nIDp3aWR0aD1cIjEyMDBcIj5oZWFkZXI8L3QtaGVhZGVyPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwiY3NzXCIgc2NvcGVkPlxuICAgIC52LWhlYWRlci1kZW1ve1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBcbiAgICB9XG48L3NjcmlwdD4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9vdGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lNWUwZTgxNiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyOTQxZjA5N1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9vdGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lNWUwZTgxNiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU1ZTBlODE2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2V4YXBtcGxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dC1oZWFkZXI+aGVhZGVyPC90LWhlYWRlcj5cXG48dC1sYXlvdXQgY2xhc3M9J2RlbW8tY29udGVudCc+XFxuICAgIDx0LWNvbnRlbnQ+XFxuICAgICAgICA8cCB2LWZvcj1cXFwiaSBpbiAxMFxcXCIgOmtleT0naScgdi10ZXh0PSdpJz48L3A+XFxuICAgIDwvdC1jb250ZW50PlxcbjwvdC1sYXlvdXQ+XFxuPHQtZm9vdGVyPmZvb3RlcjwvdC1mb290ZXI+XCI7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LWhlYWRlcltkYXRhLXYtNjRjNDI4ODNdLFxcbi52LWZvb3RlcltkYXRhLXYtNjRjNDI4ODNdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGhlaWdodDogMzZweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgYmFja2dyb3VuZDogI2IzYzBkMTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4udi1zaWRlcltkYXRhLXYtNjRjNDI4ODNdIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTUzLCAyMjksIDAuNyk7XFxufVxcbi52LWNvbnRlbnRbZGF0YS12LTY0YzQyODgzXSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDExNywgMTc1LCAwLjkpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidC1sYXlvdXRcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInYtY29udGVudHNcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInQtc2lkZXJcIixcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0LW1lbnVcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTgwLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDUsXG4gICAgICAgICAgICAgICAgbW9kZTogXCJ2ZXJ0aWNhbFwiLFxuICAgICAgICAgICAgICAgIFwiYWN0aXZlLW5hbWVcIjogX3ZtLmxpbmtOYW1lXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IFwib246c2VsZWN0XCI6IF92bS5yb3V0ZXJIYW5kbGUgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ucm91dGVzLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIGF0dHJzOiB7IG5hbWU6IGl0ZW0ubmFtZSB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpdGVtLm5hbWUpICsgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0LWNvbnRlbnRcIiwgW192bS5fdChcImRlZmF1bHRcIildLCAyKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInQtc2lkZXJcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dC1idXR0b24gc2l6ZT0ndGlueSc+dGlueTwvdC1idXR0b24+XFxuPGJyPlxcbjxicj5cXG48dC1idXR0b24gc2l6ZT0nZGVmYXVsdCc+ZGVmYXVsdDwvdC1idXR0b24+XFxuPGJyPlxcbjxicj5cXG48dC1idXR0b24gc2l6ZT0nbGFyZ2UnPmxhcmdlPC90LWJ1dHRvbj5cXG48YnI+XFxuPGJyPlxcbjx0LWJ1dHRvbiBzaXplPSdhdXRvJyA6d2lkdGg9JzEyMCcgOmhlaWdodD0nNTAnPmF1dG88L3QtYnV0dG9uPlxcbjxicj5cXG48YnI+XFxuPHQtYnV0dG9uIHNpemU9J2RlZmF1bHQnIGxvbmc+bG9uZzwvdC1idXR0b24+XCI7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4N2RjNzEwJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zODdkYzcxMCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4N2RjNzEwJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcnM+PC9oZWFkZXJzPlxuICAgICAgICA8Y29udGVudHMgOmxpbmtOYW1lPSdsaW5rTmFtZSc+XG4gICAgICAgICAgICA8ZGl2IHN0eWxlPSdwYWRkaW5nLXJpZ2h0OjIwcHg7Jz5cbiAgICAgICAgICAgICAgICA8dC10YWJsZSA6d2lkdGg9XCJbMTAsMTAsMTAsMjAsMjUsMzBdXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5LiAPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+S6jDwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/kuIk8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5ZubPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+S6lDwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/lha08L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC10cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/kuIA8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5LqMPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+S4iTwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/lm5s8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5LqUPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+WFrTwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC10cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+S4gDwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/kuow8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5LiJPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRoPuaYn+acn+WbmzwvdC10aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC10aD7mmJ/mnJ/kupQ8L3QtdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtdGg+5pif5pyf5YWtPC90LXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LXRyPlxuICAgICAgICAgICAgICAgICAgICA8L3QtdGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0LXRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS4gOWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS6jOWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS4ieWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOWbm+WkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS6lOWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOWFreWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC10cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LiA5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LqM5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LiJ5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5Zub5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5LqU5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+56ys5YWt5aSpPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC10cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LXRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkuIDlpKk8YnI+56ys5LiA5aSpKzE8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkuozlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkuInlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzlm5vlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzkupTlpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD7nrKzlha3lpKk8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LXRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS4gOWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS6jOWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS4ieWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOWbm+WkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOS6lOWkqTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPuesrOWFreWkqTxicj7nrKzlha3lpKkrMTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtdHI+XG4gICAgICAgICAgICAgICAgICAgIDwvdC10Ym9keT5cbiAgICAgICAgICAgICAgICA8L3QtdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9jb250ZW50cz5cbiAgICAgICAgPGZvb3RlcnM+PC9mb290ZXJzPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwiY3NzXCIgc2NvcGVkPjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtOYW1lOiAn6KGo5qC8J1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU1ZTBlODE2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9vdGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lNWUwZTgxNiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU1ZTBlODE2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjRjNDI4ODMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjRjNDI4ODMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0YzQyODgzJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0LWJ1dHRvbj5kZWZhdWx0PC90LWJ1dHRvbj5cXG48YnI+PGJyPlxcbjx0LWJ1dHRvbiB0eXBlPSd0ZXh0Jz50ZXh0PC90LWJ1dHRvbj5cXG48YnI+PGJyPlxcbjx0LWJ1dHRvbiB0eXBlPSd3YXJuaW5nJz53YXJuaW5nPC90LWJ1dHRvbj5cXG48YnI+PGJyPlxcbjx0LWJ1dHRvbiB0eXBlPSdlcnJvcic+ZXJyb3I8L3QtYnV0dG9uPlwiOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Mzg3ZGM3MTAmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL21lbnUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Mzg3ZGM3MTAmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjM4N2RjNzEwXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzL192dWUtaG90LXJlbG9hZC1hcGlAMi4zLjBAdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzg3ZGM3MTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzg3ZGM3MTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4N2RjNzEwJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzg3ZGM3MTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci9wYWdlcy9tZW51LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm93LWNvbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjFiNmY4NCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jvdy1jb2wudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWYxYjZmODQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0YzQyODgzJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0YzQyODgzJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvcHBlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvcHBlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0YzQyODgzJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTY0YzQyODgzJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2NGM0Mjg4M1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY0YzQyODgzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY0YzQyODgzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY0YzQyODgzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjRjNDI4ODMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci9wYWdlcy9sYXlvdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiaGVhZGVyc1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJjb250ZW50c1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGxpbmtOYW1lOiBfdm0ubGlua05hbWUgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwi5oyJ6ZKuLXNpemVcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vZGU6IFwidmVydGljYWxcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwidmlld1wiIH0sIHNsb3Q6IFwidmlld1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgc2l6ZTogXCJ0aW55XCIgfSB9LCBbX3ZtLl92KFwidGlueVwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgc2l6ZTogXCJkZWZhdWx0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJkZWZhdWx0XCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzaXplOiBcImxhcmdlXCIsIGh0bWxUeXBlOiBfdm0udHlwZSB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwibGFyZ2VcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNpemU6IFwiYXV0b1wiLCB3aWR0aDogMTIwLCBoZWlnaHQ6IDUwIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJhdXRvXCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidC1idXR0b25cIiwgeyBhdHRyczogeyBzaXplOiBcImRlZmF1bHRcIiwgbG9uZzogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcImxvbmdcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5zaXplTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLnNpemVIdG1sKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCLmjInpkq4tZGlzYWJsZWRcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vZGU6IFwidmVydGljYWxcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwidmlld1wiIH0sIHNsb3Q6IFwidmlld1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIFtfdm0uX3YoXCJkZWZhdWx0XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSB9LCBbX3ZtLl92KFwidGV4dFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWJ1dHRvblwiLCB7IGF0dHJzOiB7IHR5cGU6IFwid2FybmluZ1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwid2FybmluZ1wiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWJ1dHRvblwiLCB7IGF0dHJzOiB7IHR5cGU6IFwiZXJyb3JcIiB9IH0sIFtfdm0uX3YoXCJlcnJvclwiKV0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLnR5cGVNZCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJtYXJrZG93blwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb2RlXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0udHlwZUh0bWwpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuaMiemSri1odG1sVHlwZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9kZTogXCJ2ZXJ0aWNhbFwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidC1idXR0b25cIiwgeyBhdHRyczogeyBodG1sVHlwZTogXCJidXR0b25cIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcImJ1dHRvblwiKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWJ1dHRvblwiLCB7IGF0dHJzOiB7IGh0bWxUeXBlOiBcInN1Ym1pdFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwic3VibWl0XCIpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgaHRtbFR5cGU6IFwicmVzZXRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcInJlc2V0XCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwibWFya2Rvd25cIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uaHRtbFR5cGVNZCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJtYXJrZG93blwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb2RlXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmh0bWxUeXBlSHRtbCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwi5oyJ6ZKuLWNsaWNrXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwiZGVmYXVsdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmhhbmRsZUNsaWNrKFwiZGVmYXVsdFwiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjbGlja1wiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmNsaWNrTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5jbGlja0h0bWwpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbmltcG9ydCBsaXN0VG9TdHlsZXMgZnJvbSAnLi9saXN0VG9TdHlsZXMnXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTdHlsZXNDbGllbnQgKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHQtaGVhZGVyPmhlYWRlcjwvdC1oZWFkZXI+XFxuPHQtbGF5b3V0IGNsYXNzPSdkZW1vLWNvbnRlbnQnPlxcbiAgPHQtY29udGVudD5cXG4gICAgPHAgdi1mb3I9XFxcImkgaW4gMTBcXFwiIDprZXk9J2knIHYtdGV4dD0naSc+PC9wPlxcbiAgPC90LWNvbnRlbnQ+XFxuICA8dC1zaWRlciB3aWR0aD1cXFwiNDAwXFxcIj5zaWRlcjwvdC1zaWRlcj5cXG48L3QtbGF5b3V0Plxcbjx0LWZvb3Rlcj5mb290ZXI8L3QtZm9vdGVyPlwiOyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmMWI2Zjg0Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImYxZTEwZDY4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmMWI2Zjg0Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jvdy1jb2wudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWYxYjZmODQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kYmFjYjM3YSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGJhY2IzN2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsImltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMuanMnO1xuaW1wb3J0IGNvbnRlbnRzIGZyb20gJy4vd2ViQ29tcG9uZW50cy9jb250ZW50cy52dWUnO1xuaW1wb3J0IGhlYWRlcnMgZnJvbSAnLi93ZWJDb21wb25lbnRzL2hlYWRlcnMudnVlJztcbmltcG9ydCBmb290ZXJzIGZyb20gJy4vd2ViQ29tcG9uZW50cy9mb290ZXJzLnZ1ZSc7XG5cblZ1ZS5jb25maWcuZGV2dG9vbHMgPSB0cnVlO1xuXG5WdWUudXNlKFZ1ZVJvdXRlcik7XG5cbmNvbnN0IGNvbXBvbmVudHMgPSB7XG4gIGNvbnRlbnRzLFxuICBoZWFkZXJzLFxuICBmb290ZXJzLFxufTtcblxuZnVuY3Rpb24gaW5zdGFsbChWdWUpIHtcbiAgT2JqZWN0LmtleXMoY29tcG9uZW50cykuZm9yRWFjaCgodmFsdWUpPT57XG4gICAgVnVlLmNvbXBvbmVudCh2YWx1ZSwgY29tcG9uZW50c1t2YWx1ZV0pO1xuICB9KTtcbn1cblxuaW5zdGFsbChWdWUpO1xuXG5sZXQgcm91dGVyID0gbmV3IFZ1ZVJvdXRlcih7XG4gIHJvdXRlcyxcbn0pO1xuXG5uZXcgVnVlKHtcbiAgcm91dGVyLFxufSkuJG1vdW50KCcjYXBwJyk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtY29udGVudHN7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgcGFkZGluZy10b3AgOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICBtaW4taGVpZ2h0OiA4MDBweDtcXG5cXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2V4YXBtcGxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2V4YXBtcGxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXJzPjwvaGVhZGVycz5cbiAgICAgICAgPGNvbnRlbnRzIDpsaW5rTmFtZT0nbGlua05hbWUnIGNsYXNzPSdkZW1vLWNvbnRlbnQnPlxuICAgICAgICAgICAgPGgxPuWfuuehgOeUqOazleagheagj+ezu+e7nzwvaDE+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb2RlPSd2ZXJ0aWNhbCcgbW9yZT5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMjQnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNCc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cInN0YXRpY01kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi10ZXh0PVwic3RhdGljSHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aDE+5Z+656GA5qih5byP5LiL55qEb2Zmc2V0PC9oMT5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vZGU9J3ZlcnRpY2FsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdyA6Z3V0dGVyPVwiMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6b2Zmc2V0PScxJyA6c3Bhbj1cIjRcIiBzdHlsZT1cImJhY2tncm91bmQ6bm9uZTtcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6b2Zmc2V0PScyJyA6c3Bhbj1cIjRcIiBzdHlsZT1cImJhY2tncm91bmQ6bm9uZTtcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6b2Zmc2V0PSczJyA6c3Bhbj1cIjRcIiBzdHlsZT1cImJhY2tncm91bmQ6bm9uZTtcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6b2Zmc2V0PSc0JyA6c3Bhbj1cIjRcIiBzdHlsZT1cImJhY2tncm91bmQ6bm9uZTtcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6b2Zmc2V0PSc1JyA6c3Bhbj1cIjRcIiBzdHlsZT1cImJhY2tncm91bmQ6bm9uZTtcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6b2Zmc2V0PSc2JyA6c3Bhbj1cIjRcIiBzdHlsZT1cImJhY2tncm91bmQ6bm9uZTtcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cIm9mZnNldE1kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi10ZXh0PVwib2Zmc2V0SHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aDE+5Z+656GA5qih5byP5LiL55qEZ3V0dGVyPC9oMT5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vZGU9J3ZlcnRpY2FsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdyA6Z3V0dGVyPVwiMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj1cIjRcIiBzdHlsZT1cImJhY2tncm91bmQ6bm9uZTtcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj1cIjRcIiBzdHlsZT1cImJhY2tncm91bmQ6bm9uZTtcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj1cIjRcIiBzdHlsZT1cImJhY2tncm91bmQ6bm9uZTtcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj1cIjRcIiBzdHlsZT1cImJhY2tncm91bmQ6bm9uZTtcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj1cIjRcIiBzdHlsZT1cImJhY2tncm91bmQ6bm9uZTtcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj1cIjRcIiBzdHlsZT1cImJhY2tncm91bmQ6bm9uZTtcIj48ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cImd1dHRlck1kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi10ZXh0PVwiZ3V0dGVySHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aDE+ZmxleOaooeW8jzwvaDE+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb2RlPSd2ZXJ0aWNhbCcgbW9yZT5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdyB0eXBlPSdmbGV4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93IHR5cGU9J2ZsZXgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cIm1hcmtkb3duXCIgdi1odG1sPVwiZmxleE1kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi10ZXh0PVwiZmxleEh0bWxcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90LWV4YXBtcGxlPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGgxPmZsZXjmqKHlvI/igJTigJRqdXN0aWZ555So5rOVPC9oMT5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vZGU9J3ZlcnRpY2FsJyBtb3JlPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J3N0YXJ0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nZW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nY2VudGVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYXJvdW5kJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYmV0d2Vlbic+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJtYXJrZG93blwiIHYtdGV4dD1cImp1c3RpZnlNZFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi10ZXh0PVwianVzdGlmeUh0bWxcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90LWV4YXBtcGxlPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGgxPmZsZXjmqKHlvI/igJTigJRhbGlnbueUqOazlTwvaDE+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb2RlPSd2ZXJ0aWNhbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcgYWxpZ249J3RvcCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XCJoZWlnaHQ6IDE0MHB4O1wiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XCJoZWlnaHQ6IDEwMHB4O1wiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXY+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cImhlaWdodDogODBweDtcIj5jb2w8L2Rpdj48L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdjZW50ZXInIGFsaWduPSdtaWRkbGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVwiaGVpZ2h0OiAxNDBweDtcIj5jb2w8L2Rpdj48L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVwiaGVpZ2h0OiAxMDBweDtcIj5jb2w8L2Rpdj48L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2PmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XCJoZWlnaHQ6IDgwcHg7XCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nY2VudGVyJyBhbGlnbj0nYm90dG9tJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cImhlaWdodDogMTQwcHg7XCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdiBzdHlsZT1cImhlaWdodDogMTAwcHg7XCI+Y29sPC9kaXY+PC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNic+PGRpdj5jb2w8L2Rpdj48L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVwiaGVpZ2h0OiA4MHB4O1wiPmNvbDwvZGl2PjwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwibWFya2Rvd25cIiB2LWh0bWw9XCJhbGlnbk1kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi10ZXh0PVwiYWxpZ25IdG1sXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgPC9jb250ZW50cz5cbiAgICAgICAgPGZvb3RlcnM+PC9mb290ZXJzPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwiY3NzXCIgc2NvcGVkPlxuICAgIC5kZW1vLWNvbnRlbnQgLnYtY29sLC52LWNvbCBkaXZ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwxNTMsMjI5LC43KTtcbiAgICB9XG4gICAgLmRlbW8tY29udGVudCAudi1jb2w6bnRoLWNoaWxkKG9kZCksLnYtY29sOm50aC1jaGlsZChvZGQpIGRpdntcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAxMTcsIDE3NSwgMC45KTtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgc3RhdGljSHRtbCBmcm9tIFwiLi4vZG9jL3Jvdy9zdGF0aWMuaHRtbFwiO1xuICAgIGltcG9ydCBzdGF0aWNNZCBmcm9tIFwiLi4vZG9jL3Jvdy9zdGF0aWMubWRcIjtcblxuICAgIGltcG9ydCBmbGV4SHRtbCBmcm9tIFwiLi4vZG9jL3Jvdy9mbGV4Lmh0bWxcIjtcbiAgICBpbXBvcnQgZmxleE1kIGZyb20gXCIuLi9kb2Mvcm93L2ZsZXgubWRcIjtcblxuICAgIGltcG9ydCBqdXN0aWZ5SHRtbCBmcm9tIFwiLi4vZG9jL3Jvdy9qdXN0aWZ5Lmh0bWxcIjtcbiAgICBpbXBvcnQganVzdGlmeU1kIGZyb20gXCIuLi9kb2Mvcm93L2p1c3RpZnkubWRcIjtcblxuICAgIGltcG9ydCBhbGlnbkh0bWwgZnJvbSBcIi4uL2RvYy9yb3cvYWxpZ24uaHRtbFwiO1xuICAgIGltcG9ydCBhbGlnbk1kIGZyb20gXCIuLi9kb2Mvcm93L2FsaWduLm1kXCI7XG5cbiAgICBpbXBvcnQgZ3V0dGVySHRtbCBmcm9tIFwiLi4vZG9jL3Jvdy9ndXR0ZXIuaHRtbFwiO1xuICAgIGltcG9ydCBndXR0ZXJNZCBmcm9tIFwiLi4vZG9jL3Jvdy9ndXR0ZXIubWRcIjtcblxuICAgIGltcG9ydCBvZmZzZXRIdG1sIGZyb20gXCIuLi9kb2Mvcm93L29mZnNldC5odG1sXCI7XG4gICAgaW1wb3J0IG9mZnNldE1kIGZyb20gXCIuLi9kb2Mvcm93L29mZnNldC5tZFwiO1xuICAgIFxuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGRhdGE6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua05hbWU6ICfmoIXmoI8nLFxuICAgICAgICAgICAgICAgIHN0YXRpY0h0bWw6IHN0YXRpY0h0bWwsXG4gICAgICAgICAgICAgICAgc3RhdGljTWQ6IHN0YXRpY01kLFxuICAgICAgICAgICAgICAgIGZsZXhIdG1sOiBmbGV4SHRtbCxcbiAgICAgICAgICAgICAgICBmbGV4TWQ6IGZsZXhNZCxcbiAgICAgICAgICAgICAgICBqdXN0aWZ5SHRtbDoganVzdGlmeUh0bWwsXG4gICAgICAgICAgICAgICAganVzdGlmeU1kOiBqdXN0aWZ5TWQsXG4gICAgICAgICAgICAgICAgYWxpZ25IdG1sOiBhbGlnbkh0bWwsXG4gICAgICAgICAgICAgICAgYWxpZ25NZDogYWxpZ25NZCxcbiAgICAgICAgICAgICAgICBndXR0ZXJIdG1sOiBndXR0ZXJIdG1sLFxuICAgICAgICAgICAgICAgIGd1dHRlck1kOiBndXR0ZXJNZCxcbiAgICAgICAgICAgICAgICBvZmZzZXRIdG1sOiBvZmZzZXRIdG1sLFxuICAgICAgICAgICAgICAgIG9mZnNldE1kOiBvZmZzZXRNZCxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dGVtcGxhdGU+XFxuICAgIDx0LWJ1dHRvbiBzaXplPSdkZWZhdWx0JyBAY2xpY2s9XFxcImhhbmRsZUNsaWNrKCdkZWZhdWx0JylcXFwiPmNsaWNrPC90LWJ1dHRvbj5cXG48L3RlbXBsYXRlPlxcbjxzY3JpcHQ+XFxuICAgIGV4cG9ydCBkZWZhdWx0e1xcbiAgICAgICAgbWV0aG9kczp7XFxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s6ZnVuY3Rpb24odmFsKXtcXG4gICAgICAgICAgICAgICAgYWxlcnQodmFsKTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgIH1cXG48L3NjcmlwdD5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCJjbGljay1cXFwiPmNsaWNr5LqL5Lu2PC9oND5cXG48cD7lnKhidXR0b27kuIrnu5HlrppAY2xpY2vkuovku7bnlKjmnaXop6blj5Hlm57osIPkuovku7bvvIzlj6/ku6XluKblhaXlj4LmlbA8L3A+XFxuXCI7IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LWhlYWRlci1kZW1vW2RhdGEtdi1kYmFjYjM3YV17XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgbGluZS1oZWlnaHQ6IDM2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIjx0ZW1wbGF0ZT5cbiAgICA8dC1sYXlvdXQgY2xhc3M9J3YtY29udGVudHMnPlxuICAgICAgICA8dC1zaWRlcj5cbiAgICAgICAgICAgIDx0LW1lbnUgOndpZHRoPScxODAnIDpoZWlnaHQ9JzQ1JyBtb2RlPSd2ZXJ0aWNhbCcgOmFjdGl2ZS1uYW1lPSdsaW5rTmFtZScgQG9uOnNlbGVjdD0ncm91dGVySGFuZGxlJz5cbiAgICAgICAgICAgICAgICA8dC1tZW51U3ViIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIHJvdXRlc1wiIDprZXk9J2luZGV4JyA6bmFtZT0naXRlbS5uYW1lJz5cbiAgICAgICAgICAgICAgICAgICAge3tpdGVtLm5hbWV9fVxuICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgPC90LW1lbnU+XG4gICAgICAgIDwvdC1zaWRlcj5cbiAgICAgICAgPHQtY29udGVudD48c2xvdD48L3Nsb3Q+PC90LWNvbnRlbnQ+XG4gICAgICAgIDx0LXNpZGVyPjwvdC1zaWRlcj5cbiAgICA8L3QtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwiY3NzXCI+XG4gICAgLnYtY29udGVudHN7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgcGFkZGluZy10b3AgOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiA4MDBweDtcblxuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHJvdXRlcyBmcm9tICcuLi9yb3V0ZXMuanMnO1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICBsaW5rTmFtZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAn6aaW6aG1J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHJvdXRlczogcm91dGVzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICAgICAgcm91dGVySGFuZGxlOmZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICAgICAgICAgIHRoaXMucm91dGVzLmZvckVhY2goZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICAgICAgaWYobmFtZSA9PSB2YWwubmFtZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aDogdmFsLnBhdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2I3Y2JiODUmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2I3Y2JiODUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdiN2NiYjg1XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzL192dWUtaG90LXJlbG9hZC1hcGlAMi4zLjBAdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2I3Y2JiODUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2I3Y2JiODUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YjdjYmI4NSZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdiN2NiYjg1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzZXJ2ZXIvcGFnZXMvdGFibGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYmFjYjM3YSZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaGVhZGVycy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kYmFjYjM3YSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZGJhY2IzN2FcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkYmFjYjM3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkYmFjYjM3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaGVhZGVycy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGJhY2IzN2Emc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkYmFjYjM3YScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic2VydmVyL3dlYkNvbXBvbmVudHMvaGVhZGVycy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjY4YTRmZTMxXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU1ZTBlODE2JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZm9vdGVycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZm9vdGVycy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU1ZTBlODE2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlNWUwZTgxNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2U1ZTBlODE2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2U1ZTBlODE2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNWUwZTgxNiZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2U1ZTBlODE2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzZXJ2ZXIvd2ViQ29tcG9uZW50cy9mb290ZXJzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcInRvb3RpcC1cXFwiPnRvb3RpcOeahOWfuuehgOeUqOazlTwvaDQ+XFxuPHVsPlxcbjxsaT7kuIrlt6Y6Y29udGVudD10b3Atc3RhcnQ8L2xpPlxcbjxsaT7kuIrkuK06Y29udGVudD10b3A8L2xpPlxcbjxsaT7kuIrlj7M6Y29udGVudD10b3AtZW5kPC9saT5cXG48bGk+5bem5LiKOmNvbnRlbnQ9bGVmdC1zdGFydDwvbGk+XFxuPGxpPuWPs+S4ijpjb250ZW50PXJpZ2h0LXN0YXJ0PC9saT5cXG48bGk+5bem5LitOmNvbnRlbnQ9bGVmdDwvbGk+XFxuPGxpPuWPs+S4rTpjb250ZW50PXJpZ2h0PC9saT5cXG48bGk+5bem5LiLOmNvbnRlbnQ9bGVmdC1lbmQ8L2xpPlxcbjxsaT7lj7PkuIs6Y29udGVudD1yaWdodDwvbGk+XFxuPGxpPuS4i+W3pjpjb250ZW50PWJvdHRvbS1zdGFydDwvbGk+XFxuPGxpPuS4i+S4rTpjb250ZW50PWJvdHRvbTwvbGk+XFxuPGxpPuS4i+WPszpjb250ZW50PWJvdHRvbS1lbmQ8L2xpPlxcbjwvdWw+XFxuXCI7IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzI4OTBjOTdcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZXhhcG1wbGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzcyODkwYzk3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzcyODkwYzk3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzI4OTBjOTdcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3Mjg5MGM5NycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic2VydmVyL3BhZ2VzL2V4YXBtcGxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyMWZiNTExMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3BwZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2UxYWRlYTVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvcHBlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3BwZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCI8dC1idXR0b24gc2l6ZT0nZGVmYXVsdCcgOmRpc2FibGVkPVxcXCJ0cnVlXFxcIj7pnZnmraLpgInkuK08L3QtYnV0dG9uPlxcblwiOyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2MzY2YyZWUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YzNjZjJlZSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoNCBpZD1cXFwiLVxcXCI+5q+P5LiA5YiX5LmL6Ze055qE6Ze06ZqUPC9oND5cXG48dWw+XFxuPGxpPuWcqHJvd+S4iumdouiuvue9ruavj+S4gOS4qmNvbOS5i+mXtOeahOmXtOmalDwvbGk+XFxuPC91bD5cXG5cIjsiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zODdkYzcxMCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJlZTFlNTJjMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zODdkYzcxMCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4N2RjNzEwJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvcHBlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvcHBlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3BwZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdjM2NmMmVlJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2MzY2YyZWUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2MzY2YyZWUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcnM+PC9oZWFkZXJzPlxuICAgICAgICA8Y29udGVudHMgOmxpbmtOYW1lPSdsaW5rTmFtZSc+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb2RlPSdob3Jpem9udGFsJyBtb3JlPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyNCc+Y29sPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc2xvdD1cIm1hcmtkb3duXCIgdi1odG1sPVwiaW5mb1wiPjwvZGl2PlxuICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi10ZXh0PVwiY29kZVwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9kZT0ndmVydGljYWwnIG1vcmU+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzI0Jz5jb2w8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBzbG90PVwibWFya2Rvd25cIiB2LWh0bWw9XCJpbmZvXCI+PC9kaXY+XG4gICAgICAgICAgICA8dGV4dGFyZWEgc2xvdD1cImNvZGVcIiB2LXRleHQ9XCJjb2RlXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgPC9jb250ZW50cz5cbiAgICAgICAgPGZvb3RlcnM+PC9mb290ZXJzPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwiY3NzXCI+PC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IGluZm8gZnJvbSAnLi4vZG9jL2V4YXBtcGxlLWluZm8ubWQnO1xuICAgIGltcG9ydCBjb2RlIGZyb20gJy4uL2RvYy9leGFwbXBsZS1jb2RlLm1kJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGxpbmtOYW1lOiAn5L6L5a2Q5bGV56S6JyxcbiAgICAgICAgICAgICAgICBpbmZvOiBpbmZvLFxuICAgICAgICAgICAgICAgIGNvZGU6IGNvZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YzNjZjJlZSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI1ZmE1MDViNFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2MzY2YyZWUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2MzY2YyZWUmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImhlYWRlcnNcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiY29udGVudHNcIixcbiAgICAgICAgeyBhdHRyczogeyBsaW5rTmFtZTogX3ZtLmxpbmtOYW1lIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcInRvb2x0aXDmj5DnpLrln7rnoYDnlKjnlKjms5VcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vZGU6IFwidmVydGljYWxcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwidmlld1wiIH0sIHNsb3Q6IFwidmlld1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWIxMC1jZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZsZXhcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiA3IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LXBvcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwidG9wLXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwidG9wLXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2ZlcjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC1idXR0b25cIiwgeyBhdHRyczogeyBzaXplOiBcInRpbnlcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS4iuW3plwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogNyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidC1wb3BwZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiBcInRvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmZXI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgc2l6ZTogXCJ0aW55XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLkuIrkuK1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IDcgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInQtcG9wcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJ0b3AtZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwidG9wLWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmZXI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgc2l6ZTogXCJ0aW55XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLkuIrlj7NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYjEwLWNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiLCBqdXN0aWZ5OiBcInNwYWNlLWJldHdlZW5cIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiA1IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LXBvcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwibGVmdC1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiBcImxlZnQtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZmVyOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWJ1dHRvblwiLCB7IGF0dHJzOiB7IHNpemU6IFwidGlueVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5bem5LiKXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiA1IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LXBvcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwicmlnaHQtc3RhcnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogXCJyaWdodC1zdGFydFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmZXI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgc2l6ZTogXCJ0aW55XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLlj7PkuIpcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYjEwLWNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiLCBqdXN0aWZ5OiBcInNwYWNlLWJldHdlZW5cIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiA1IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LXBvcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZmVyOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWJ1dHRvblwiLCB7IGF0dHJzOiB7IHNpemU6IFwidGlueVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5Y+z5LiKXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiA1IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LXBvcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmZXI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgc2l6ZTogXCJ0aW55XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLlj7PkuK1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYjEwLWNlXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiLCBqdXN0aWZ5OiBcInNwYWNlLWJldHdlZW5cIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiA1IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LXBvcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwibGVmdC1lbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogXCJsZWZ0LWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmZXI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgc2l6ZTogXCJ0aW55XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLlt6bkuItcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInQtcG9wcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJyaWdodC1lbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudDogXCJyaWdodC1lbmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZmVyOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWJ1dHRvblwiLCB7IGF0dHJzOiB7IHNpemU6IFwidGlueVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5Y+z5LiLXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWIxMC1jZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZsZXhcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiA3IH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LXBvcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiYm90dG9tLXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwiYm90dG9tLXN0YXJ0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2ZlcjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidC1idXR0b25cIiwgeyBhdHRyczogeyBzaXplOiBcInRpbnlcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS4i+W3plwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogNyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidC1wb3BwZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50OiBcImJvdHRvbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmZXI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgc2l6ZTogXCJ0aW55XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLkuIvkuK1cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IDcgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInQtcG9wcGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJib3R0b20tZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ6IFwiYm90dG9tLWVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmZXI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInQtYnV0dG9uXCIsIHsgYXR0cnM6IHsgc2l6ZTogXCJ0aW55XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLkuIvlj7NcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS50b29sdGlwTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS50b29sdGlwSHRtbCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZvb3RlcnNcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjRjNDI4ODMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYjU5OGExMmNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02NGM0Mjg4MyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjRjNDI4ODMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidC1mb290ZXJcIiwgW192bS5fdihcImZvb3RlclwiKV0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjdjYmI4NSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiN2NiYjg1Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCJ6aG91amluZ3dlblxcXCI+emhvdWppbmd3ZW48L2g0PlxcbjxwPuWmguaenDEyMzEyMzwvcD5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGgyIGlkPVxcXCIyNC1cXFwiPjI0562J5YiG5qCF5qCP57O757ufPC9oMj5cXG48dWw+XFxuPGxpPnJvd+S4uuawtOW5s+aWueWQkeWIm+W7uuS4gOihjO+8jGNvbOS4uuWeguebtOaWueWQkeetieWIhuS4gOihjO+8jGNvbOacgOWkpzxjb2RlPnNwYW48L2NvZGU+562J5YiG5Li6MjTnrYnliIbjgII8L2xpPlxcbjwvdWw+XFxuXCI7IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jvdy1jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YjdjYmI4NSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiN2NiYjg1Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdiN2NiYjg1Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXJzPjwvaGVhZGVycz5cbiAgICAgICAgPGNvbnRlbnRzIDpsaW5rTmFtZT0nbGlua05hbWUnPlxuICAgICAgICAgICAgPGgxPuaXoHNpZGVyPC9oMT5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vcmU+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1oZWFkZXI+aGVhZGVyPC90LWhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgPHQtbGF5b3V0IGNsYXNzPSdkZW1vLWNvbnRlbnQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWZvcj1cImkgaW4gMTBcIiA6a2V5PSdpJyB2LXRleHQ9J2knPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L3QtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8dC1mb290ZXI+Zm9vdGVyPC90LWZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cIm5vU2lmZXJNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cIm5vU2lmZXJIdG1sXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgICAgIDxicj5cbiAgICAgICAgICAgIDxoMT7lt6ZzaWRlcjwvaDE+XG4gICAgICAgICAgICA8dC1leGFwbXBsZSBtb3JlPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtaGVhZGVyPmhlYWRlcjwvdC1oZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWxheW91dCBjbGFzcz0nZGVtby1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LXNpZGVyPnNpZGVyPC90LXNpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWZvcj1cImkgaW4gMTBcIiA6a2V5PSdpJyB2LXRleHQ9J2knPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L3QtbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8dC1mb290ZXI+Zm9vdGVyPC90LWZvb3Rlcj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cImxlZnRTaWZlck1kXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHNsb3Q9XCJjb2RlXCIgdi1odG1sPVwibGVmdFNpZmVySHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgICAgICA8YnI+XG4gICAgICAgICAgICA8aDE+5bemc2lkZXI8L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9yZT5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJ2aWV3XCI+XG4gICAgICAgICAgICAgICAgICAgIDx0LWhlYWRlcj5oZWFkZXI8L3QtaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8dC1sYXlvdXQgY2xhc3M9J2RlbW8tY29udGVudCc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1zaWRlcj5zaWRlcjwvdC1zaWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1mb3I9XCJpIGluIDEwXCIgOmtleT0naScgdi10ZXh0PSdpJz48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPC90LWxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPHQtZm9vdGVyPmZvb3RlcjwvdC1mb290ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwibWFya2Rvd25cIiB2LWh0bWw9XCJsZWZ0U2lmZXJNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtdGV4dD1cImxlZnRTaWZlckh0bWxcIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPC90LWV4YXBtcGxlPlxuICAgICAgICAgICAgPGJyPlxuICAgICAgICAgICAgPGgxPuWPs3NpZGVyPC9oMT5cbiAgICAgICAgICAgIDx0LWV4YXBtcGxlIG1vcmU+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwidmlld1wiPlxuICAgICAgICAgICAgICAgICAgICA8dC1oZWFkZXI+aGVhZGVyPC90LWhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWxheW91dCBjbGFzcz0nZGVtby1jb250ZW50Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWZvcj1cImkgaW4gMTBcIiA6a2V5PSdpJyB2LXRleHQ9J2knPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtY29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1zaWRlciB3aWR0aD1cIjQwMFwiPnNpZGVyPC90LXNpZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LWxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgPHQtZm9vdGVyPmZvb3RlcjwvdC1mb290ZXI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBzbG90PVwibWFya2Rvd25cIiB2LWh0bWw9XCJyaWdodFNpZmVyTWRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgc2xvdD1cImNvZGVcIiB2LXRleHQ9XCJyaWdodFNpZmVySHRtbFwiPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L3QtZXhhcG1wbGU+XG4gICAgICAgICAgICBcbiAgICAgICAgPC9jb250ZW50cz5cbiAgICAgICAgPGZvb3RlcnM+PC9mb290ZXJzPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwiY3NzXCIgc2NvcGVkPlxuLnYtaGVhZGVyLFxuLnYtZm9vdGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDM2cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICBiYWNrZ3JvdW5kOiAjYjNjMGQxO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLnYtc2lkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE1MywgMjI5LCAwLjcpO1xufVxuLnYtY29udGVudCB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTE3LCAxNzUsIDAuOSk7XG59XG48L3N0eWxlPlxuPHNjcmlwdD5cbmltcG9ydCBub1NpZmVySHRtbCBmcm9tIFwiLi4vZG9jL2xheW91dC9uby1zaWRlci5odG1sXCI7XG5pbXBvcnQgbm9TaWZlck1kIGZyb20gXCIuLi9kb2MvbGF5b3V0L25vLXNpZGVyLm1kXCI7XG5cbmltcG9ydCBsZWZ0U2lmZXJIdG1sIGZyb20gXCIuLi9kb2MvbGF5b3V0L2xlZnQtc2lkZXIuaHRtbFwiO1xuaW1wb3J0IGxlZnRTaWZlck1kIGZyb20gXCIuLi9kb2MvbGF5b3V0L2xlZnQtc2lkZXIubWRcIjtcblxuaW1wb3J0IHJpZ2h0U2lmZXJIdG1sIGZyb20gXCIuLi9kb2MvbGF5b3V0L3JpZ2h0LXNpZGVyLmh0bWxcIjtcbmltcG9ydCByaWdodFNpZmVyTWQgZnJvbSBcIi4uL2RvYy9sYXlvdXQvcmlnaHQtc2lkZXIubWRcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGlua05hbWU6IFwi5biD5bGAXCIsXG4gICAgICBub1NpZmVySHRtbDogbm9TaWZlckh0bWwsXG4gICAgICBub1NpZmVyTWQ6IG5vU2lmZXJNZCxcbiAgICAgIGxlZnRTaWZlckh0bWw6IGxlZnRTaWZlckh0bWwsXG4gICAgICBsZWZ0U2lmZXJNZDogbGVmdFNpZmVyTWQsXG4gICAgICByaWdodFNpZmVySHRtbDogcmlnaHRTaWZlckh0bWwsXG4gICAgICByaWdodFNpZmVyTWQ6IHJpZ2h0U2lmZXJNZFxuICAgIH07XG4gIH1cbn07XG48L3NjcmlwdD4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCJyaWdodC1zaWRlclxcXCI+cmlnaHQtc2lkZXI8L2g0Plxcbjx1bD5cXG48bGk+5bem6L655qCP55qE5LiK5Lit5LiL5bem5biD5bGAPC9saT5cXG48L3VsPlxcblwiOyIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1YzYxMDhiXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NWM2MTA4YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NWM2MTA4YicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NWM2MTA4YlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY1YzYxMDhiJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzZXJ2ZXIvcGFnZXMvYnV0dG9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIjx0ZW1wbGF0ZT5cbiAgICA8dC1mb290ZXI+Zm9vdGVyPC90LWZvb3Rlcj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiIHNjb3BlZD5cbiAgICAudi1mb290ZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgYmFja2dyb3VuZDogIzAwMDtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgXG4gICAgfVxuPC9zY3JpcHQ+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCJzaXplLVxcXCI+c2l6ZemAiemhueWumuS5ieWkp+WwjzwvaDQ+XFxuPHA+5Z+656GA6YCJ6aG577yadGluZ++8iOWwj++8ieOAgWRlZmF1bHTvvIjpu5jorqTvvInjgIFsYXJnZe+8iOWkp++8iTwvcD5cXG48cD7lrr3luqboh6rpgILlupTpgInpobnvvJpsb25n77yM5Y+v5Lul5ZKMc2l6ZeS4remZpOS6hmF1dG/pgInpobnphY3lkIjkvb/nlKg8L3A+XFxuPHA+6Ieq5a6a5LmJ5a696auY77yaYXV0b++8jOmFjeWQiHdpZGh05ZKMaGVpZ2h05LiA6LW35L2/55SoPC9wPlxcblwiOyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kZW1vLWNvbnRlbnQgLnYtY29sW2RhdGEtdi01ZjFiNmY4NF0sLnYtY29sIGRpdltkYXRhLXYtNWYxYjZmODRde1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiAjRkZGO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMTUzLDIyOSwuNyk7XFxufVxcbi5kZW1vLWNvbnRlbnQgLnYtY29sW2RhdGEtdi01ZjFiNmY4NF06bnRoLWNoaWxkKG9kZCksLnYtY29sOm50aC1jaGlsZChvZGQpIGRpdltkYXRhLXYtNWYxYjZmODRde1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDExNywgMTc1LCAwLjkpO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHQtcm93IDpndXR0ZXI9XFxcIjEwXFxcIj5cXG4gICAgPHQtY29sIDpzcGFuPVxcXCI0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpub25lO1xcXCI+PGRpdiBzdHlsZT1cXFwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49XFxcIjRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOm5vbmU7XFxcIj48ZGl2IHN0eWxlPVxcXCJiYWNrZ3JvdW5kOnJnYmEoMCwgMTE3LCAxNzUsIDAuOSlcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPVxcXCI0XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDpub25lO1xcXCI+PGRpdiBzdHlsZT1cXFwiYmFja2dyb3VuZDpyZ2JhKDAsIDExNywgMTc1LCAwLjkpXFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49XFxcIjRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOm5vbmU7XFxcIj48ZGl2IHN0eWxlPVxcXCJiYWNrZ3JvdW5kOnJnYmEoMCwgMTE3LCAxNzUsIDAuOSlcXFwiPmNvbDwvZGl2PjwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG48L3Qtcm93PlwiOyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0LXJvdyB0eXBlPSdmbGV4Jz5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMyc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSczJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzMnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93IHR5cGU9J2ZsZXgnPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzInPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMic+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScyJz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdyB0eXBlPSdmbGV4Jz5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPScxJz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzEnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nMSc+Y29sPC90LWNvbD5cXG48L3Qtcm93PlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3RhcnQnPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J2VuZCc+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG48L3Qtcm93Plxcbjxicj5cXG48dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nY2VudGVyJz5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdzcGFjZS1hcm91bmQnPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cXG48YnI+XFxuPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J3NwYWNlLWJldHdlZW4nPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+Y29sPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc1Jz5jb2w8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPmNvbDwvdC1jb2w+XFxuPC90LXJvdz5cIjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudHMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtZm9vdGVyW2RhdGEtdi1lNWUwZTgxNl17XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMzZweDtcXG4gICAgYmFja2dyb3VuZDogIzAwMDtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoNCBpZD1cXFwiYWxpZ24tXFxcIj5hbGlnbueUqOazlTwvaDQ+XFxuPHVsPlxcbjxsaT7lvZNyb3fnmoR0eXBl6K6+572u5Li6ZmxleOaXtu+8jOWNs+WPr+iuvue9rmFsaWduPC9saT5cXG48bGk+5pyJ5LiJ5Liq5Y+C5pWw77yMdG9w77yI5bGA5LiK77yJ44CBbWlkZGxl77yI5bGA5Lit77yJ44CBYm90dG9t77yI5bGF5LiL77yJPC9saT5cXG48L3VsPlxcblwiOyIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiaGVhZGVyc1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImNvbnRlbnRzXCIsIHsgYXR0cnM6IHsgbGlua05hbWU6IF92bS5saW5rTmFtZSB9IH0sIFtfdm0uX3YoXCJpbmRleFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZm9vdGVyc1wiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXJzPjwvaGVhZGVycz5cbiAgICAgICAgPGNvbnRlbnRzIDpsaW5rTmFtZT0nbGlua05hbWUnPlxuICAgICAgICAgICAgPGgxPmlucHV0PC9oMT5cbiAgICAgICAgICAgIDxoMj5zaXplPC9oMj5cbiAgICAgICAgICAgIDxwPmRlZmFsdXQ8L3A+XG4gICAgICAgICAgICA8dC1pbnB1dCB2LW1vZGVsPSdpbnB1dFZhbHVlJz48L3QtaW5wdXQ+XG4gICAgICAgICAgICA8cD5sYXJnZTwvcD5cbiAgICAgICAgICAgIDx0LWlucHV0IHYtbW9kZWw9J2lucHV0VmFsdWUnIHNpemU9J2xhcmdlJz48L3QtaW5wdXQ+XG4gICAgICAgICAgICA8cD5zbWFsbDwvcD5cbiAgICAgICAgICAgIDx0LWlucHV0IHYtbW9kZWw9J2lucHV0VmFsdWUnIHNpemU9J3NtYWxsJz48L3QtaW5wdXQ+XG4gICAgICAgICAgICA8cD50aW55PC9wPlxuICAgICAgICAgICAgPHQtaW5wdXQgdi1tb2RlbD0naW5wdXRWYWx1ZScgc2l6ZT0ndGlueSc+PC90LWlucHV0PlxuICAgICAgICA8L2NvbnRlbnRzPlxuICAgICAgICA8Zm9vdGVycz48L2Zvb3RlcnM+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIj48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpbnB1dFZhbHVlOicnLFxuICAgICAgICAgICAgICAgIGxpbmtOYW1lOifovpPlhaXmoYYnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOntcbiAgICAgICAgICAgIGlucHV0VmFsdWUodmFsdWUpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInQtaGVhZGVyXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ2LWhlYWRlci1kZW1vXCIsIGF0dHJzOiB7IHdpZHRoOiAxMjAwIH0gfSxcbiAgICBbX3ZtLl92KFwiaGVhZGVyXCIpXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImhlYWRlcnNcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiY29udGVudHNcIixcbiAgICAgICAgeyBhdHRyczogeyBsaW5rTmFtZTogX3ZtLmxpbmtOYW1lIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuaXoHNpZGVyXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb3JlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidC1oZWFkZXJcIiwgW192bS5fdihcImhlYWRlclwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtbGF5b3V0XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRlbW8tY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKDEwLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGkpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWZvb3RlclwiLCBbX3ZtLl92KFwiZm9vdGVyXCIpXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwibWFya2Rvd25cIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ubm9TaWZlck1kKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5ub1NpZmVySHRtbCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwi5bemc2lkZXJcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vcmU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWhlYWRlclwiLCBbX3ZtLl92KFwiaGVhZGVyXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGVtby1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXNpZGVyXCIsIFtfdm0uX3YoXCJzaWRlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbCgxMCwgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhpKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidC1mb290ZXJcIiwgW192bS5fdihcImZvb3RlclwiKV0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmxlZnRTaWZlck1kKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ubGVmdFNpZmVySHRtbCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwi5bemc2lkZXJcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vcmU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0LWhlYWRlclwiLCBbX3ZtLl92KFwiaGVhZGVyXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1sYXlvdXRcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGVtby1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LXNpZGVyXCIsIFtfdm0uX3YoXCJzaWRlclwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbCgxMCwgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhpKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidC1mb290ZXJcIiwgW192bS5fdihcImZvb3RlclwiKV0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmxlZnRTaWZlck1kKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5sZWZ0U2lmZXJIdG1sKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCLlj7NzaWRlclwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9yZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwidmlld1wiIH0sIHNsb3Q6IFwidmlld1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInQtaGVhZGVyXCIsIFtfdm0uX3YoXCJoZWFkZXJcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LWxheW91dFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkZW1vLWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbCgxMCwgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhpKSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1zaWRlclwiLCB7IGF0dHJzOiB7IHdpZHRoOiBcIjQwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcInNpZGVyXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInQtZm9vdGVyXCIsIFtfdm0uX3YoXCJmb290ZXJcIildKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5yaWdodFNpZmVyTWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLnJpZ2h0U2lmZXJIdG1sKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZm9vdGVyc1wiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIm1vZHVsZS5leHBvcnRzID0gXCI8dC1oZWFkZXI+aGVhZGVyPC90LWhlYWRlcj5cXG48dC1sYXlvdXQgY2xhc3M9J2RlbW8tY29udGVudCc+XFxuICAgIDx0LXNpZGVyPnNpZGVyPC90LXNpZGVyPlxcbiAgICA8dC1jb250ZW50PlxcbiAgICAgICAgPHAgdi1mb3I9XFxcImkgaW4gMTBcXFwiIDprZXk9J2knIHYtdGV4dD0naSc+PC9wPlxcbiAgICA8L3QtY29udGVudD5cXG48L3QtbGF5b3V0Plxcbjx0LWZvb3Rlcj5mb290ZXI8L3QtZm9vdGVyPlwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcImxlZnQtc2lkZXJcXFwiPmxlZnQtc2lkZXI8L2g0Plxcbjx1bD5cXG48bGk+5Y+z6L655qCP55qE5LiK5Lit5LiL5bem5biD5bGAPC9saT5cXG48L3VsPlxcblwiOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8aDQgaWQ9XFxcIi1kaXNhYmxlZFxcXCI+56aB5q2i6YCJ5LitZGlzYWJsZWQ8L2g0PlxcbjxwPuS9v+eUqGRpc2FibGVk5bGe5oCn5Y+v5Lul6K6pYnV0dG9u5oyJ6ZKu5aSE5LqO56aB5q2i54q25oCBPC9wPlxcblwiOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubWIxMC1jZXtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zvb3RlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTVlMGU4MTYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWU1ZTBlODE2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmMWI2Zjg0Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm93LWNvbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ZjFiNmY4NCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmMWI2Zjg0Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXJzPjwvaGVhZGVycz5cbiAgICAgICAgPGNvbnRlbnRzIDpsaW5rTmFtZT0nbGlua05hbWUnPlxuICAgICAgICAgICAgPHQtcm93PlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nMjQnPlxuICAgICAgICAgICAgICAgICAgICA8dC1tZW51IDphY3RpdmUtbmFtZT1cIjFcIiBAb246c2VsZWN0PVwib25DbGlja0hhbmRsZTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDE8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMjwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPSczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAzPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgPC90LW1lbnU+XG4gICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDx0LXJvdz5cbiAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzI0Jz5cbiAgICAgICAgICAgICAgICAgICAgPHQtbWVudSA6YWN0aXZlLW5hbWU9XCIyXCIgQG9uOnNlbGVjdD1cIm9uQ2xpY2tIYW5kbGUyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPScxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAxPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDI8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMzwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1tZW51PlxuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8dC1yb3c+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPScyNCc+XG4gICAgICAgICAgICAgICAgICAgIDx0LW1lbnUgOmFjdGl2ZS1uYW1lPVwiM1wiIEBvbjpzZWxlY3Q9XCJvbkNsaWNrSGFuZGxlM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMTwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPScyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAyPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDM8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICA8L3QtbWVudT5cbiAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgPHQtcm93PlxuICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nOCc+XG4gICAgICAgICAgICAgICAgICAgIDx0LW1lbnUgbW9kZT0ndmVydGljYWwnIDphY3RpdmUtbmFtZT1cIjNcIiBAb246c2VsZWN0PVwib25DbGlja0hhbmRsZTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzEnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDE8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMjwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPSczJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAzPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgPC90LW1lbnU+XG4gICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzgnPlxuICAgICAgICAgICAgICAgICAgICA8dC1tZW51IG1vZGU9J3ZlcnRpY2FsJyA6YWN0aXZlLW5hbWU9XCIzXCIgQG9uOnNlbGVjdD1cIm9uQ2xpY2tIYW5kbGU1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPScxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAxPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDI8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMzwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1tZW51PlxuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc4Jz5cbiAgICAgICAgICAgICAgICAgICAgPHQtbWVudSA6d2lkdGg9JzMwMCcgOmhlaWdodD0nMzAnIG1vZGU9J3ZlcnRpY2FsJyA6YWN0aXZlLW5hbWU9XCIzXCIgQG9uOnNlbGVjdD1cIm9uQ2xpY2tIYW5kbGU2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51U3ViIDpuYW1lPScxJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInRpdGxlXCI+bWVudVN1YiAxPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tPHQtbWVudUdyb3VwPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAxPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSAyPC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1tZW51SXRlbT5tZW51SXRlbSA0PC90LW1lbnVJdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51R3JvdXA+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudVN1Yj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVTdWIgOm5hbWU9JzInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidGl0bGVcIj5tZW51U3ViIDI8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS08dC1tZW51R3JvdXA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDE8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDI8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LW1lbnVJdGVtPm1lbnVJdGVtIDQ8L3QtbWVudUl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVHcm91cD4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1tZW51U3ViPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudVN1YiA6bmFtZT0nMyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ0aXRsZVwiPm1lbnVTdWIgMzwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLTx0LW1lbnVHcm91cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMTwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gMjwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtbWVudUl0ZW0+bWVudUl0ZW0gNDwvdC1tZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtbWVudUdyb3VwPi0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LW1lbnVTdWI+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1tZW51PlxuICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICA8L2NvbnRlbnRzPlxuICAgICAgICA8Zm9vdGVycz48L2Zvb3RlcnM+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIiBzY29wZWQ+XG4gICAgXG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBsaW5rTmFtZTon5a+86IiqJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOntcbiAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGUxOiBmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ29uQ2xpY2tIYW5kbGUxJyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja0hhbmRsZTI6IGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cCgnb25DbGlja0hhbmRsZTInKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrSGFuZGxlMzogZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdvbkNsaWNrSGFuZGxlMycpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tIYW5kbGU0OiBmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXAoJ29uQ2xpY2tIYW5kbGU0Jyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codmFsKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja0hhbmRsZTU6IGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cCgnb25DbGlja0hhbmRsZTUnKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBFbmQoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrSGFuZGxlNjogZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmdyb3VwKCdvbkNsaWNrSGFuZGxlNicpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4N2RjNzEwJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtc3R5bGUtbG9hZGVyQDQuMS4wQHZ1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zODdkYzcxMCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiaGVhZGVyc1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJjb250ZW50c1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGxpbmtOYW1lOiBfdm0ubGlua05hbWUgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IDI0IH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYWN0aXZlLW5hbWVcIjogMSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IFwib246c2VsZWN0XCI6IF92bS5vbkNsaWNrSGFuZGxlMSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDEgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgMlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAzIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiAyNCB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidC1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFjdGl2ZS1uYW1lXCI6IDIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBcIm9uOnNlbGVjdFwiOiBfdm0ub25DbGlja0hhbmRsZTIgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAxIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgM1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogMjQgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInQtbWVudVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhY3RpdmUtbmFtZVwiOiAzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgXCJvbjpzZWxlY3RcIjogX3ZtLm9uQ2xpY2tIYW5kbGUzIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAyIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDMgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IDggfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInQtbWVudVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbW9kZTogXCJ2ZXJ0aWNhbFwiLCBcImFjdGl2ZS1uYW1lXCI6IDMgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBcIm9uOnNlbGVjdFwiOiBfdm0ub25DbGlja0hhbmRsZTQgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAxIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAxXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMyB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgM1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc3BhbjogOCB9IH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidC1tZW51XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIsIFwiYWN0aXZlLW5hbWVcIjogMyB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IFwib246c2VsZWN0XCI6IF92bS5vbkNsaWNrSGFuZGxlNSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDEgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgMlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAzIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiA4IH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGU6IFwidmVydGljYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYWN0aXZlLW5hbWVcIjogM1xuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgXCJvbjpzZWxlY3RcIjogX3ZtLm9uQ2xpY2tIYW5kbGU2IH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0LW1lbnVTdWJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogMSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIm1lbnVTdWIgMVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInQtbWVudVN1YlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiAyIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwibWVudVN1YiAyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidC1tZW51U3ViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IDMgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRlbXBsYXRlXCIsIHsgc2xvdDogXCJ0aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJtZW51U3ViIDNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZm9vdGVyc1wiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwibW9kdWxlLmV4cG9ydHMgPSBcIjx0ZW1wbGF0ZT5cXG4gICAgPHQtcm93PjExMTE8L3Qtcm93PlxcbjwvdGVtcGxhdGU+ICBcXG5cXG48c2NyaXB0PlxcbmV4cG9ydCBkZWZhdWx0e1xcbiAgICBkYXRhOmZ1bmN0aW9uKCl7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGxpbmtOYW1lOiAn5L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S65L6L5a2Q5bGV56S6JyxcXG4gICAgICAgIH1cXG4gICAgfVxcbn1cXG48L3NjcmlwdD5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCJuby1zaWRlclxcXCI+bm8tc2lkZXI8L2g0Plxcbjx1bD5cXG48bGk+5rKh5pyJ5bem5Y+z6L655qCP55qE5LiK5Lit5LiLM+ihjOW4g+WxgDwvbGk+XFxuPC91bD5cXG5cIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHQtcm93IDpndXR0ZXI9XFxcIjEwXFxcIj5cXG4gIDx0LWNvbCA6b2Zmc2V0PScxJyA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gIDx0LWNvbCA6b2Zmc2V0PScyJyA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gIDx0LWNvbCA6b2Zmc2V0PSczJyA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gIDx0LWNvbCA6b2Zmc2V0PSc0JyA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gIDx0LWNvbCA6b2Zmc2V0PSc1JyA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG4gIDx0LWNvbCA6b2Zmc2V0PSc2JyA6c3Bhbj1cXFwiNFxcXCIgc3R5bGU9XFxcImJhY2tncm91bmQ6bm9uZTtcXFwiPjxkaXYgc3R5bGU9XFxcImJhY2tncm91bmQ6cmdiYSgwLCAxMTcsIDE3NSwgMC45KVxcXCI+Y29sPC9kaXY+PC90LWNvbD5cXG48L3Qtcm93PlwiOyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImhlYWRlcnNcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiY29udGVudHNcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkZW1vLWNvbnRlbnRcIiwgYXR0cnM6IHsgbGlua05hbWU6IF92bS5saW5rTmFtZSB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCLln7rnoYDnlKjms5XmoIXmoI/ns7vnu59cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vZGU6IFwidmVydGljYWxcIiwgbW9yZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwidmlld1wiIH0sIHNsb3Q6IFwidmlld1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIFtfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMjQgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSldLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNCB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDQgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA0IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNCB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDQgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA0IH0gfSwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5zdGF0aWNNZCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJtYXJrZG93blwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb2RlXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uc3RhdGljSHRtbCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwi5Z+656GA5qih5byP5LiL55qEb2Zmc2V0XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGd1dHRlcjogMTAgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9mZnNldDogMSwgc3BhbjogNCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMTE3LCAxNzUsIDAuOSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImNvbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb2Zmc2V0OiAyLCBzcGFuOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29sXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvZmZzZXQ6IDMsIHNwYW46IDQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjb2xcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInQtY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCJub25lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG9mZnNldDogNCwgc3BhbjogNCB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMTE3LCAxNzUsIDAuOSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcImNvbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidC1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIm5vbmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb2Zmc2V0OiA1LCBzcGFuOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29sXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvZmZzZXQ6IDYsIHNwYW46IDQgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDExNywgMTc1LCAwLjkpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjb2xcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwibWFya2Rvd25cIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ub2Zmc2V0TWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLm9mZnNldEh0bWwpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaDFcIiwgW192bS5fdihcIuWfuuehgOaooeW8j+S4i+eahGd1dHRlclwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9kZTogXCJ2ZXJ0aWNhbFwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBndXR0ZXI6IDEwIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcGFuOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29sXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcGFuOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29sXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcGFuOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29sXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcGFuOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29sXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcGFuOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29sXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0LWNvbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwibm9uZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcGFuOiA0IH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLCAxMTcsIDE3NSwgMC45KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiY29sXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmd1dHRlck1kKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5ndXR0ZXJIdG1sKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJmbGV45qih5byPXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIsIG1vcmU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMyB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDMgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAzIH0gfSwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDIgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAyIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMiB9IH0sIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcImZsZXhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiAxIH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDEgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5mbGV4TWQpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmZsZXhIdG1sKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcImNvZGVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJmbGV45qih5byP4oCU4oCUanVzdGlmeeeUqOazlVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9kZTogXCJ2ZXJ0aWNhbFwiLCBtb3JlOiBcIlwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJ2aWV3XCIgfSwgc2xvdDogXCJ2aWV3XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcImZsZXhcIiwganVzdGlmeTogXCJzdGFydFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJmbGV4XCIsIGp1c3RpZnk6IFwiZW5kXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0eXBlOiBcImZsZXhcIiwganVzdGlmeTogXCJjZW50ZXJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiLCBqdXN0aWZ5OiBcInNwYWNlLWFyb3VuZFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJmbGV4XCIsIGp1c3RpZnk6IFwic3BhY2UtYmV0d2VlblwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA1IH0gfSwgW192bS5fdihcImNvbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNSB9IH0sIFtfdm0uX3YoXCJjb2xcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDUgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uanVzdGlmeU1kKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5qdXN0aWZ5SHRtbCkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMVwiLCBbX3ZtLl92KFwiZmxleOaooeW8j+KAlOKAlGFsaWdu55So5rOVXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtZXhhcG1wbGVcIiwgeyBhdHRyczogeyBtb2RlOiBcInZlcnRpY2FsXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiLCBhbGlnbjogXCJ0b3BcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA2IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjE0MHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJjb2xcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDYgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImNvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiY29sXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA2IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjgwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImNvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiZmxleFwiLCBqdXN0aWZ5OiBcImNlbnRlclwiLCBhbGlnbjogXCJtaWRkbGVcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxNDBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiY29sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA2IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJjb2xcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDYgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcImNvbFwiKV0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI4MHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJjb2xcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0LXJvd1wiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImZsZXhcIiwganVzdGlmeTogXCJjZW50ZXJcIiwgYWxpZ246IFwiYm90dG9tXCIgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDYgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTQwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcImNvbFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogNiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiY29sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidC1jb2xcIiwgeyBhdHRyczogeyBzcGFuOiA2IH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCJjb2xcIildKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDYgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiODBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiY29sXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJtYXJrZG93blwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5hbGlnbk1kKSB9LFxuICAgICAgICAgICAgICBzbG90OiBcIm1hcmtkb3duXCJcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvZGVcIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5hbGlnbkh0bWwpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmb290ZXJzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGg0IGlkPVxcXCJ0eXBlXFxcIj50eXBlPC9oND5cXG48cD5idXR0b27mjInpkq7mnIk056eN5qC35byP77yaZGVmYXVsdOOAgXRleHTjgIF3YXJuaW5n44CBZXJyb3I8L3A+XFxuXCI7IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGhlYWRlcnM+PC9oZWFkZXJzPlxuICAgICAgICA8Y29udGVudHMgOmxpbmtOYW1lPSdsaW5rTmFtZSc+aW5kZXg8L2NvbnRlbnRzPlxuICAgICAgICA8Zm9vdGVycz48L2Zvb3RlcnM+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIiBzY29wZWQ+PC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIGRhdGE6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlua05hbWU6ICfpppbpobUnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9wcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9wcGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxoNCBpZD1cXFwiZmxleC1cXFwiPmZsZXjmqKHlvI/nrYnliIY8L2g0Plxcbjx1bD5cXG48bGk+6K6ycm9355qEdHlwZeWAvOiuvue9ruS4umZsZXjvvIzpgqPkuYjns7vnu5/lsLHkvJrlronoo4VmbGV455qE5qih5byP6L+b6KGM5biD5bGA77yMY29s55qEc3Bhbuiuvue9ruayoeacieW9seWTjeOAgjwvbGk+XFxuPC91bD5cXG5cIjsiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJoZWFkZXJzXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImNvbnRlbnRzXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgbGlua05hbWU6IF92bS5saW5rTmFtZSB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImgxXCIsIFtfdm0uX3YoXCJpbnB1dFwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoMlwiLCBbX3ZtLl92KFwic2l6ZVwiKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJkZWZhbHV0XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtaW5wdXRcIiwge1xuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5pbnB1dFZhbHVlLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmlucHV0VmFsdWUgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpbnB1dFZhbHVlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwibGFyZ2VcIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBzaXplOiBcImxhcmdlXCIgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5pbnB1dFZhbHVlID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5wdXRWYWx1ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcInNtYWxsXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCJzbWFsbFwiIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmlucHV0VmFsdWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uaW5wdXRWYWx1ZSA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlucHV0VmFsdWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJ0aW55XCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInQtaW5wdXRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCJ0aW55XCIgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uaW5wdXRWYWx1ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5pbnB1dFZhbHVlID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5wdXRWYWx1ZVwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZvb3RlcnNcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3YzE3OTgxXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2lucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2lucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1N2MxNzk4MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1N2MxNzk4MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3YzE3OTgxXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTdjMTc5ODEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci9wYWdlcy9pbnB1dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YzNjZjJlZSZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YzNjZjJlZSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiN2MzY2YyZWVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvX3Z1ZS1ob3QtcmVsb2FkLWFwaUAyLjMuMEB2dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3YzNjZjJlZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3YzNjZjJlZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjM2NmMmVlJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2MzY2YyZWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNlcnZlci9wYWdlcy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHQtcm93IHR5cGU9J2ZsZXgnIGFsaWduPSd0b3AnPlxcbiAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XFxcImhlaWdodDogMTQwcHg7XFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XFxcImhlaWdodDogMTAwcHg7XFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXY+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDgwcHg7XFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdjZW50ZXInIGFsaWduPSdtaWRkbGUnPlxcbiAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XFxcImhlaWdodDogMTQwcHg7XFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XFxcImhlaWdodDogMTAwcHg7XFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXY+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDgwcHg7XFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbjwvdC1yb3c+XFxuPGJyPlxcbjx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdjZW50ZXInIGFsaWduPSdib3R0b20nPlxcbiAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XFxcImhlaWdodDogMTQwcHg7XFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXYgc3R5bGU9XFxcImhlaWdodDogMTAwcHg7XFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzYnPjxkaXY+Y29sPC9kaXY+PC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc2Jz48ZGl2IHN0eWxlPVxcXCJoZWlnaHQ6IDgwcHg7XFxcIj5jb2w8L2Rpdj48L3QtY29sPlxcbjwvdC1yb3c+XCI7IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX2JhYmVsLWxvYWRlckA3LjEuNEBiYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL19iYWJlbC1sb2FkZXJANy4xLjRAYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IGluZGV4IGZyb20gJy4vcGFnZXMvaW5kZXgudnVlJztcbmltcG9ydCByb3dDb2wgZnJvbSAnLi9wYWdlcy9yb3ctY29sLnZ1ZSc7XG5pbXBvcnQgYnV0dG9uIGZyb20gJy4vcGFnZXMvYnV0dG9uLnZ1ZSc7XG5pbXBvcnQgbGF5b3V0IGZyb20gJy4vcGFnZXMvbGF5b3V0LnZ1ZSc7XG5pbXBvcnQgdGFibGUgZnJvbSAnLi9wYWdlcy90YWJsZS52dWUnO1xuaW1wb3J0IGlucHV0IGZyb20gJy4vcGFnZXMvaW5wdXQudnVlJztcbmltcG9ydCBtZW51IGZyb20gJy4vcGFnZXMvbWVudS52dWUnO1xuaW1wb3J0IHBvcHBlciBmcm9tICcuL3BhZ2VzL3BvcHBlci52dWUnO1xuaW1wb3J0IGV4YXBtcGxlIGZyb20gJy4vcGFnZXMvZXhhcG1wbGUudnVlJztcblxuZXhwb3J0IGRlZmF1bHQgW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIG5hbWU6ICfpppbpobUnLFxuICAgIGNvbXBvbmVudDogaW5kZXgsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3Jvdy1jb2wnLFxuICAgIG5hbWU6ICfmoIXmoI8nLFxuICAgIGNvbXBvbmVudDogcm93Q29sLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9idXR0b24nLFxuICAgIG5hbWU6ICfmjInpkq4nLFxuICAgIGNvbXBvbmVudDogYnV0dG9uLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9sYXlvdXQnLFxuICAgIG5hbWU6ICfluIPlsYAnLFxuICAgIGNvbXBvbmVudDogbGF5b3V0LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9tZW51JyxcbiAgICBuYW1lOiAn5a+86IiqJyxcbiAgICBjb21wb25lbnQ6IG1lbnUsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL3RhYmxlJyxcbiAgICBuYW1lOiAn6KGo5qC8JyxcbiAgICBjb21wb25lbnQ6IHRhYmxlLFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9pbnB1dCcsXG4gICAgbmFtZTogJ+i+k+WFpeahhicsXG4gICAgY29tcG9uZW50OiBpbnB1dCxcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvcG9wcGVyJyxcbiAgICBuYW1lOiAn5rCU5rOh5o+Q56S6JyxcbiAgICBjb21wb25lbnQ6IHBvcHBlcixcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvZXhhcG1wbGUnLFxuICAgIG5hbWU6ICfkvovlrZDlsZXnpLonLFxuICAgIGNvbXBvbmVudDogZXhhcG1wbGUsXG4gIH0sXG5dO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2V4YXBtcGxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjY4Yzk5YWVlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGFwbXBsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxoZWFkZXJzPjwvaGVhZGVycz5cbiAgICAgICAgPGNvbnRlbnRzIDpsaW5rTmFtZT0nbGlua05hbWUnPlxuICAgICAgICAgICAgPGgxPnRvb2x0aXDmj5DnpLrln7rnoYDnlKjnlKjms5U8L2gxPlxuICAgICAgICAgICAgPHQtZXhhcG1wbGUgbW9kZT0ndmVydGljYWwnPlxuICAgICAgICAgICAgICAgIDxkaXYgc2xvdD1cInZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J2NlbnRlcicgY2xhc3M9J21iMTAtY2UnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc3Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1wb3BwZXIgY29udGVudD0ndG9wLXN0YXJ0JyBwbGFjZW1lbnQ9J3RvcC1zdGFydCcgdHJhbnNmZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55Jz7kuIrlt6Y8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1wb3BwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc3Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1wb3BwZXIgY29udGVudD0ndG9wJyBwbGFjZW1lbnQ9J3RvcCcgdHJhbnNmZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55Jz7kuIrkuK08L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1wb3BwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc3Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1wb3BwZXIgY29udGVudD0ndG9wLWVuZCcgcGxhY2VtZW50PSd0b3AtZW5kJyB0cmFuc2Zlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknPuS4iuWPszwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LXBvcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJyBjbGFzcz0nbWIxMC1jZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXBvcHBlciBjb250ZW50PSdsZWZ0LXN0YXJ0JyBwbGFjZW1lbnQ9J2xlZnQtc3RhcnQnIHRyYW5zZmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueSc+5bem5LiKPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtcG9wcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtcG9wcGVyIGNvbnRlbnQ9J3JpZ2h0LXN0YXJ0JyBwbGFjZW1lbnQ9J3JpZ2h0LXN0YXJ0JyB0cmFuc2Zlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknPuWPs+S4ijwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LXBvcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJyBjbGFzcz0nbWIxMC1jZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXBvcHBlciBjb250ZW50PSdsZWZ0JyBwbGFjZW1lbnQ9J2xlZnQnIHRyYW5zZmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueSc+5Y+z5LiKPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtcG9wcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0LWNvbCA6c3Bhbj0nNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtcG9wcGVyIGNvbnRlbnQ9J3JpZ2h0JyBwbGFjZW1lbnQ9J3JpZ2h0JyB0cmFuc2Zlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknPuWPs+S4rTwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LXBvcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgIDwvdC1yb3c+XG4gICAgICAgICAgICAgICAgICAgIDx0LXJvdyB0eXBlPSdmbGV4JyBqdXN0aWZ5PSdzcGFjZS1iZXR3ZWVuJyBjbGFzcz0nbWIxMC1jZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXBvcHBlciBjb250ZW50PSdsZWZ0LWVuZCcgcGxhY2VtZW50PSdsZWZ0LWVuZCcgdHJhbnNmZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55Jz7lt6bkuIs8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1wb3BwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHQtY29sIDpzcGFuPSc1Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1wb3BwZXIgY29udGVudD0ncmlnaHQtZW5kJyBwbGFjZW1lbnQ9J3JpZ2h0LWVuZCcgdHJhbnNmZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55Jz7lj7PkuIs8L3QtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1wb3BwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3QtY29sPlxuICAgICAgICAgICAgICAgICAgICA8L3Qtcm93PlxuICAgICAgICAgICAgICAgICAgICA8dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nY2VudGVyJyBjbGFzcz0nbWIxMC1jZSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXBvcHBlciBjb250ZW50PSdib3R0b20tc3RhcnQnIHBsYWNlbWVudD0nYm90dG9tLXN0YXJ0JyB0cmFuc2Zlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknPuS4i+W3pjwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LXBvcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXBvcHBlciBjb250ZW50PSdib3R0b20nIHBsYWNlbWVudD0nYm90dG9tJyB0cmFuc2Zlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknPuS4i+S4rTwvdC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90LXBvcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdC1jb2w+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dC1jb2wgOnNwYW49JzcnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0LXBvcHBlciBjb250ZW50PSdib3R0b20tZW5kJyBwbGFjZW1lbnQ9J2JvdHRvbS1lbmQnIHRyYW5zZmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueSc+5LiL5Y+zPC90LWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3QtcG9wcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90LWNvbD5cbiAgICAgICAgICAgICAgICAgICAgPC90LXJvdz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IHNsb3Q9XCJtYXJrZG93blwiIHYtaHRtbD1cInRvb2x0aXBNZFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBzbG90PVwiY29kZVwiIHYtaHRtbD1cInRvb2x0aXBIdG1sXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvdC1leGFwbXBsZT5cbiAgICAgICAgICAgIDwhLS0gPHQtdG9vbHRpcCBjb250ZW50PSd0b29sdGlwLXRlc3QnPlxuICAgICAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55Jz50ZXN0PC90LWJ1dHRvbj5cbiAgICAgICAgICAgIDwvdC10b29sdGlwPiAtLT5cbiAgICAgICAgPC9jb250ZW50cz5cbiAgICAgICAgPGZvb3RlcnM+PC9mb290ZXJzPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwiY3NzXCI+XG4gICAgLm1iMTAtY2V7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbmltcG9ydCB0b29sdGlwSHRtbCBmcm9tICcuLi9kb2MvdG9vbHRpcC90b29sdGlwLmh0bWwnO1xuaW1wb3J0IHRvb2x0aXBNZCBmcm9tICcuLi9kb2MvdG9vbHRpcC90b29sdGlwLm1kJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBkYXRhOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGlua05hbWU6IFwi5rCU5rOh5o+Q56S6XCIsXG4gICAgICBtc2c6IFwi5rCU5rOh5o+Q56S677yM5rCU5rOh5o+Q56S677yM5rCU5rOh5o+Q56S677yMPGJyPuawlOazoeaPkOekuu+8jOawlOazoeaPkOekuuOAglwiLFxuICAgICAgbG9hZGluZzp7XG4gICAgICAgICAgY29udGVudDogJ2FzeW5jQ29udGVudCcsXG4gICAgICAgICAgbG9hZGluZ0NvbnRlbnQ6ICc8aT5Mb2FkaW5nLi4uPC9pPicsXG4gICAgICB9LFxuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICAgIHRvb2x0aXBIdG1sOiB0b29sdGlwSHRtbCxcbiAgICAgIHRvb2x0aXBNZDogdG9vbHRpcE1kXG4gICAgfTtcbiAgfVxufTtcbjwvc2NyaXB0PlxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1zdHlsZS1sb2FkZXJANC4xLjBAdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGJhY2IzN2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRiYWNiMzdhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlcnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZGJhY2IzN2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NvbnRlbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjRiMWUyZFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbnRlbnRzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzL192dWUtaG90LXJlbG9hZC1hcGlAMi4zLjBAdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2I0YjFlMmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2I0YjFlMmQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbnRlbnRzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYjRiMWUyZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNiNGIxZTJkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzZXJ2ZXIvd2ViQ29tcG9uZW50cy9jb250ZW50cy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9fYmFiZWwtbG9hZGVyQDcuMS40QGJhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fc3R5bGUtbG9hZGVyQDAuMjEuMEBzdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnRzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLXN0eWxlLWxvYWRlckA0LjEuMEB2dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjliZGZlNDhhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvX3N0eWxlLWxvYWRlckAwLjIxLjBAc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50cy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9fY3NzLWxvYWRlckAwLjI4LjExQGNzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzL192dWUtbG9hZGVyQDE1LjIuMkB2dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnB1dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL19zdHlsZS1sb2FkZXJAMC4yMS4wQHN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL19jc3MtbG9hZGVyQDAuMjguMTFAY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvX3Z1ZS1sb2FkZXJAMTUuMi4yQHZ1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2lucHV0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiaGVhZGVyc1wiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJjb250ZW50c1wiLFxuICAgICAgICB7IGF0dHJzOiB7IGxpbmtOYW1lOiBfdm0ubGlua05hbWUgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ0LWV4YXBtcGxlXCIsIHsgYXR0cnM6IHsgbW9kZTogXCJob3Jpem9udGFsXCIsIG1vcmU6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBzbG90OiBcInZpZXdcIiB9LCBzbG90OiBcInZpZXdcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInQtcm93XCIsXG4gICAgICAgICAgICAgICAgICBbX2MoXCJ0LWNvbFwiLCB7IGF0dHJzOiB7IHNwYW46IDI0IH0gfSwgW192bS5fdihcImNvbFwiKV0pXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcIm1hcmtkb3duXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmluZm8pIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwibWFya2Rvd25cIlxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29kZVwiIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLmNvZGUpIH0sXG4gICAgICAgICAgICAgIHNsb3Q6IFwiY29kZVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidC1leGFwbXBsZVwiLCB7IGF0dHJzOiB7IG1vZGU6IFwidmVydGljYWxcIiwgbW9yZTogXCJcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwidmlld1wiIH0sIHNsb3Q6IFwidmlld1wiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidC1yb3dcIixcbiAgICAgICAgICAgICAgICAgIFtfYyhcInQtY29sXCIsIHsgYXR0cnM6IHsgc3BhbjogMjQgfSB9LCBbX3ZtLl92KFwiY29sXCIpXSldLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwibWFya2Rvd25cIiB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uaW5mbykgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJtYXJrZG93blwiXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb2RlXCIgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uY29kZSkgfSxcbiAgICAgICAgICAgICAgc2xvdDogXCJjb2RlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImZvb3RlcnNcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvX2Nzcy1sb2FkZXJAMC4yOC4xMUBjc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Jvdy1jb2wudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmMWI2Zjg0JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcm93LWNvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vcm93LWNvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVmMWI2Zjg0Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9fdnVlLWxvYWRlckAxNS4yLjJAdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1ZjFiNmY4NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy9fdnVlLWhvdC1yZWxvYWQtYXBpQDIuMy4wQHZ1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVmMWI2Zjg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVmMWI2Zjg0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9yb3ctY29sLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZjFiNmY4NCZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVmMWI2Zjg0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzZXJ2ZXIvcGFnZXMvcm93LWNvbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J2NlbnRlcicgY2xhc3M9J21iMTAtY2UnPlxcbiAgICA8dC1jb2wgOnNwYW49JzcnPlxcbiAgICAgICAgPHQtcG9wcGVyIGNvbnRlbnQ9J3RvcC1zdGFydCcgcGxhY2VtZW50PSd0b3Atc3RhcnQnIHRyYW5zZmVyPlxcbiAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55Jz7kuIrlt6Y8L3QtYnV0dG9uPlxcbiAgICAgICAgPC90LXBvcHBlcj5cXG4gICAgPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc3Jz5cXG4gICAgICAgIDx0LXBvcHBlciBjb250ZW50PSd0b3AnIHBsYWNlbWVudD0ndG9wJyB0cmFuc2Zlcj5cXG4gICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueSc+5LiK5LitPC90LWJ1dHRvbj5cXG4gICAgICAgIDwvdC1wb3BwZXI+XFxuICAgIDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNyc+XFxuICAgICAgICA8dC1wb3BwZXIgY29udGVudD0ndG9wLWVuZCcgcGxhY2VtZW50PSd0b3AtZW5kJyB0cmFuc2Zlcj5cXG4gICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueSc+5LiK5Y+zPC90LWJ1dHRvbj5cXG4gICAgICAgIDwvdC1wb3BwZXI+XFxuICAgIDwvdC1jb2w+XFxuPC90LXJvdz5cXG48dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgY2xhc3M9J21iMTAtY2UnPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPlxcbiAgICAgICAgPHQtcG9wcGVyIGNvbnRlbnQ9J2xlZnQtc3RhcnQnIHBsYWNlbWVudD0nbGVmdC1zdGFydCcgdHJhbnNmZXI+XFxuICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknPuW3puS4ijwvdC1idXR0b24+XFxuICAgICAgICA8L3QtcG9wcGVyPlxcbiAgICA8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPlxcbiAgICAgICAgPHQtcG9wcGVyIGNvbnRlbnQ9J3JpZ2h0LXN0YXJ0JyBwbGFjZW1lbnQ9J3JpZ2h0LXN0YXJ0JyB0cmFuc2Zlcj5cXG4gICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueSc+5Y+z5LiKPC90LWJ1dHRvbj5cXG4gICAgICAgIDwvdC1wb3BwZXI+XFxuICAgIDwvdC1jb2w+XFxuPC90LXJvdz5cXG48dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgY2xhc3M9J21iMTAtY2UnPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPlxcbiAgICAgICAgPHQtcG9wcGVyIGNvbnRlbnQ9J2xlZnQnIHBsYWNlbWVudD0nbGVmdCcgdHJhbnNmZXI+XFxuICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknPuWPs+S4ijwvdC1idXR0b24+XFxuICAgICAgICA8L3QtcG9wcGVyPlxcbiAgICA8L3QtY29sPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPlxcbiAgICAgICAgPHQtcG9wcGVyIGNvbnRlbnQ9J3JpZ2h0JyBwbGFjZW1lbnQ9J3JpZ2h0JyB0cmFuc2Zlcj5cXG4gICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueSc+5Y+z5LitPC90LWJ1dHRvbj5cXG4gICAgICAgIDwvdC1wb3BwZXI+XFxuICAgIDwvdC1jb2w+XFxuPC90LXJvdz5cXG48dC1yb3cgdHlwZT0nZmxleCcganVzdGlmeT0nc3BhY2UtYmV0d2VlbicgY2xhc3M9J21iMTAtY2UnPlxcbiAgICA8dC1jb2wgOnNwYW49JzUnPlxcbiAgICAgICAgPHQtcG9wcGVyIGNvbnRlbnQ9J2xlZnQtZW5kJyBwbGFjZW1lbnQ9J2xlZnQtZW5kJyB0cmFuc2Zlcj5cXG4gICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueSc+5bem5LiLPC90LWJ1dHRvbj5cXG4gICAgICAgIDwvdC1wb3BwZXI+XFxuICAgIDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNSc+XFxuICAgICAgICA8dC1wb3BwZXIgY29udGVudD0ncmlnaHQtZW5kJyBwbGFjZW1lbnQ9J3JpZ2h0LWVuZCcgdHJhbnNmZXI+XFxuICAgICAgICAgICAgPHQtYnV0dG9uIHNpemU9J3RpbnknPuWPs+S4izwvdC1idXR0b24+XFxuICAgICAgICA8L3QtcG9wcGVyPlxcbiAgICA8L3QtY29sPlxcbjwvdC1yb3c+XFxuPHQtcm93IHR5cGU9J2ZsZXgnIGp1c3RpZnk9J2NlbnRlcicgY2xhc3M9J21iMTAtY2UnPlxcbiAgICA8dC1jb2wgOnNwYW49JzcnPlxcbiAgICAgICAgPHQtcG9wcGVyIGNvbnRlbnQ9J2JvdHRvbS1zdGFydCcgcGxhY2VtZW50PSdib3R0b20tc3RhcnQnIHRyYW5zZmVyPlxcbiAgICAgICAgICAgIDx0LWJ1dHRvbiBzaXplPSd0aW55Jz7kuIvlt6Y8L3QtYnV0dG9uPlxcbiAgICAgICAgPC90LXBvcHBlcj5cXG4gICAgPC90LWNvbD5cXG4gICAgPHQtY29sIDpzcGFuPSc3Jz5cXG4gICAgICAgIDx0LXBvcHBlciBjb250ZW50PSdib3R0b20nIHBsYWNlbWVudD0nYm90dG9tJyB0cmFuc2Zlcj5cXG4gICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueSc+5LiL5LitPC90LWJ1dHRvbj5cXG4gICAgICAgIDwvdC1wb3BwZXI+XFxuICAgIDwvdC1jb2w+XFxuICAgIDx0LWNvbCA6c3Bhbj0nNyc+XFxuICAgICAgICA8dC1wb3BwZXIgY29udGVudD0nYm90dG9tLWVuZCcgcGxhY2VtZW50PSdib3R0b20tZW5kJyB0cmFuc2Zlcj5cXG4gICAgICAgICAgICA8dC1idXR0b24gc2l6ZT0ndGlueSc+5LiL5Y+zPC90LWJ1dHRvbj5cXG4gICAgICAgIDwvdC1wb3BwZXI+XFxuICAgIDwvdC1jb2w+XFxuPC90LXJvdz5cIjsiXSwic291cmNlUm9vdCI6IiJ9