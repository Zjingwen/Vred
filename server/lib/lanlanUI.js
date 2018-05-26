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
/******/ 	return __webpack_require__(__webpack_require__.s = "8yIb");
/******/ })
/************************************************************************/
/******/ ({

/***/ "+q3+":
/*!***************************************!*\
  !*** ./components/table/table-tr.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_tr_vue_vue_type_template_id_7a748cf9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-tr.vue?vue&type=template&id=7a748cf9&scoped=true */ "E/Pf");
/* harmony import */ var _table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-tr.vue?vue&type=script&lang=js */ "7BT5");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _table_css_vue_type_style_index_0_id_7a748cf9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.css?vue&type=style&index=0&id=7a748cf9&lang=css&scoped=true */ "pLg8");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_tr_vue_vue_type_template_id_7a748cf9_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_tr_vue_vue_type_template_id_7a748cf9_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7a748cf9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/table/table-tr.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "+t+2":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&id=3ddab256&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&id=3ddab256&lang=css&scoped=true */ "5Kht");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("0eac218a", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "/E0q":
/*!********************************!*\
  !*** ./components/col/col.vue ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _col_vue_vue_type_template_id_2cef9ef4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./col.vue?vue&type=template&id=2cef9ef4&scoped=true */ "WHYS");
/* harmony import */ var _col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./col.vue?vue&type=script&lang=js */ "xWml");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _col_css_vue_type_style_index_0_id_2cef9ef4_lang_stylus_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./col.css?vue&type=style&index=0&id=2cef9ef4&lang=stylus&scoped=true */ "EDxO");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _col_vue_vue_type_template_id_2cef9ef4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _col_vue_vue_type_template_id_2cef9ef4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2cef9ef4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/col/col.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "0ROg":
/*!***********************************************************************************!*\
  !*** ./components/table/table-body.vue?vue&type=template&id=1f2d595d&scoped=true ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_template_id_1f2d595d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./table-body.vue?vue&type=template&id=1f2d595d&scoped=true */ "DGEn");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_template_id_1f2d595d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_template_id_1f2d595d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "0iu8":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/content.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
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

var prefixCls = 'v-content';

exports.default = {
    name: prefixCls,
    computed: {
        style: function style() {
            var style = {
                overflow: 'hidden'
            };

            return style;
        },
        classs: function classs() {
            return ['' + prefixCls];
        }
    }
};

/***/ }),

/***/ "12Am":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/content.vue?vue&type=style&index=0&id=5459268f&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-content[data-v-5459268f]{\n    flex: auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "14P4":
/*!**************************************!*\
  !*** ./components/layout/header.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_vue_vue_type_template_id_583deae7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.vue?vue&type=template&id=583deae7&scoped=true */ "qgAz");
/* harmony import */ var _header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.vue?vue&type=script&lang=js */ "Yvss");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _header_vue_vue_type_style_index_0_id_583deae7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.vue?vue&type=style&index=0&id=583deae7&lang=css&scoped=true */ "alyQ");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _header_vue_vue_type_template_id_583deae7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _header_vue_vue_type_template_id_583deae7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "583deae7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/layout/header.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ "30o+":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&id=7a748cf9&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&id=7a748cf9&lang=css&scoped=true */ "QSDy");

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

/***/ "3aZ2":
/*!**********************************************************************************************!*\
  !*** ./components/button/button.css?vue&type=style&index=0&id=5350d404&scoped=true&lang=css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_button_css_vue_type_style_index_0_id_5350d404_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./button.css?vue&type=style&index=0&id=5350d404&scoped=true&lang=css */ "5xH8");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_button_css_vue_type_style_index_0_id_5350d404_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_button_css_vue_type_style_index_0_id_5350d404_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_button_css_vue_type_style_index_0_id_5350d404_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_button_css_vue_type_style_index_0_id_5350d404_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_button_css_vue_type_style_index_0_id_5350d404_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3ca1":
/*!***********************************!*\
  !*** ./components/input/input.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ./input.css */ "kIj4");

var _input = __webpack_require__(/*! ./input.html */ "VjfO");

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = Vue.extend({
    template: _input2.default,
    data: function data() {
        return {
            currentValue: this.value
        };
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: [String, Number],
        name: String,
        customClass: '',
        placeholder: String,
        disabled: Boolean,
        readonly: Boolean,
        autofocus: Boolean,
        autoComplete: {
            type: String,
            default: 'off'
        },
        size: {
            type: String,
            default: 'small'
        },
        form: String,
        icon: String,
        imageIcon: Boolean
    },
    methods: {

        updateValue: function updateValue(value) {
            this.currentValue = value.trim();
        },

        handleBlur: function handleBlur(event) {
            this.$emit('blur', event);
            this.$emit("input", this.$refs.input.value);
        },

        handleFocus: function handleFocus(event) {
            this.$emit('focus', event);
        },

        handleIconClick: function handleIconClick() {
            this.$emit("icon-click", event);
        },

        inputSelect: function inputSelect() {
            this.$refs.input.select();
        }
    },
    created: function created() {
        this.$on('inputSelect', this.inputSelect);
    },
    watch: {
        currentValue: function currentValue(newV) {
            this.$emit("input", newV);
            this.$emit('change', newV);
        }
    }
});

/***/ }),

/***/ "3opx":
/*!*********************************************************************************!*\
  !*** ./components/layout/content.vue?vue&type=template&id=5459268f&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_template_id_5459268f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./content.vue?vue&type=template&id=5459268f&scoped=true */ "WKi4");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_template_id_5459268f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_template_id_5459268f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "4WJF":
/*!**************************************!*\
  !*** ./components/layout/footer.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_vue_vue_type_template_id_370b86f5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.vue?vue&type=template&id=370b86f5 */ "u3v6");
/* harmony import */ var _footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.vue?vue&type=script&lang=js */ "QSfQ");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");





/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _footer_vue_vue_type_template_id_370b86f5__WEBPACK_IMPORTED_MODULE_0__["render"],
  _footer_vue_vue_type_template_id_370b86f5__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/layout/footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "58MS":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/header.vue?vue&type=style&index=0&id=583deae7&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&id=583deae7&lang=css&scoped=true */ "Efyt");

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

/***/ "5Kht":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&id=3ddab256&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&id=3ddab256&lang=css&scoped=true */ "9d/h");

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

/***/ "5xH8":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/button/button.css?vue&type=style&index=0&id=5350d404&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./button.css?vue&type=style&index=0&id=5350d404&scoped=true&lang=css */ "F8SR");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("b9c36b94", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "6RWp":
/*!*******************************************************************************!*\
  !*** ./components/layout/sider.vue?vue&type=template&id=26701691&scoped=true ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_template_id_26701691_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./sider.vue?vue&type=template&id=26701691&scoped=true */ "fYuv");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_template_id_26701691_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_template_id_26701691_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "6YbG":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/table/table-body.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
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

var prefixCls = 'v-table-body';
exports.default = {
    name: prefixCls,
    computed: {
        classs: function classs() {
            var classs = ['' + prefixCls];

            return classs;
        }
    }
};

/***/ }),

/***/ "6ZDO":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/header.vue?vue&type=template&id=583deae7&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { class: _vm.classs }, [
    _c(
      "div",
      { staticClass: "v-header-width", style: _vm.styles },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "7BT5":
/*!***************************************************************!*\
  !*** ./components/table/table-tr.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./table-tr.vue?vue&type=script&lang=js */ "zNuy");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ "83Sj":
/*!********************************************************************************!*\
  !*** ./components/layout/layout.vue?vue&type=template&id=128725f8&scoped=true ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_128725f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=template&id=128725f8&scoped=true */ "js1h");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_128725f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_template_id_128725f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "8DyF":
/*!***************************************!*\
  !*** ./components/layout/content.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_vue_vue_type_template_id_5459268f_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content.vue?vue&type=template&id=5459268f&scoped=true */ "3opx");
/* harmony import */ var _content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.vue?vue&type=script&lang=js */ "nwYo");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _content_vue_vue_type_style_index_0_id_5459268f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content.vue?vue&type=style&index=0&id=5459268f&lang=css&scoped=true */ "NWSM");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _content_vue_vue_type_template_id_5459268f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _content_vue_vue_type_template_id_5459268f_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5459268f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/layout/content.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "8ktk":
/*!*******************************************************************************************!*\
  !*** ./components/menu/index.css?vue&type=style&index=0&id=a1444c38&lang=css&scoped=true ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_a1444c38_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&id=a1444c38&lang=css&scoped=true */ "G7VM");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_a1444c38_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_a1444c38_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_a1444c38_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_a1444c38_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_a1444c38_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "8yIb":
/*!*********************************!*\
  !*** ./components/component.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ./col/index.js */ "B7r1");

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./row/index.js */ "d7Mn");

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ./layout/index.js */ "okHz");

var _index6 = __webpack_require__(/*! ./table/index.js */ "vbul");

var _index7 = __webpack_require__(/*! ./menu/index.js */ "B+aG");

var _index8 = __webpack_require__(/*! ./button/index.js */ "HlVv");

var _index9 = _interopRequireDefault(_index8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var input = __webpack_require__(/*! ./input/input.js */ "3ca1");

// var Modal = require("./modal/modal.js");
// var Notice = require("./notice/notification.js");
// var Message = require("./message/index.js");
//

// var Select = require("./select/select.js");
// var Option = require("./select/option.js");


// var Tooltip = require("./tooltip/tooltip.js");
// var Checkbox = require("./checkbox/checkbox.js");
// var Radio = require("./radio/radio.js");
// var Popover = require("./popover/popover.js");
// var PopoverDirective = require("./popover/directive.js");
// var Dropdown = require("./dropdown/dropdown.js");
// var DropdownMenu = require("./dropdown/dropdown-menu.js");
// var DropdownItem = require("./dropdown/dropdown-item.js");
// //
// var Pagination = require("./pagination/pagination.js");

// var InfiniteScroll = require("./directives/infinite-scroll.js");
// var Lazyload = require("./directives/img-lazyload.js");

// var Clock = require("./datetime/picker/time-picker.js");
// var Date = require("./datetime/picker/date-picker.js");

// var VueAwesomeSwiper = require("./swipre/vue-awesome-swiper.js");

var components = {
    col: _index2.default,
    row: _index4.default,

    header: _index5.header,
    content: _index5.content,
    footer: _index5.footer,
    layout: _index5.layout,
    sider: _index5.sider,

    button: _index9.default,
    input: input,

    table: _index6.table,
    thead: _index6.thead,
    tbody: _index6.tbody,
    tr: _index6.tr,

    menu: _index7.menu,
    menuItem: _index7.menuItem,
    menuGroup: _index7.menuGroup,
    menuSub: _index7.menuSub
};

function install(Vue) {
    Object.keys(components).forEach(function (value) {
        Vue.component('t-' + value, components[value]);
    });

    // Vue.component('t-row', components['row']);
    // Vue.component('t-col', col);
    // Vue.component('t-input', Input);
    // Vue.component('t-select', Select);
    // Vue.component('t-option', Option);
    // Vue.component('t-button', Button);

    // Vue.component('t-tooltip', Tooltip);
    // Vue.component('t-checkbox', Checkbox);
    // Vue.component('t-radio', Radio);
    // Vue.component('t-popover', Popover);
    // Vue.component('t-dropdown', Dropdown);
    // Vue.component('t-dropdown-menu', DropdownMenu);
    // Vue.component('t-dropdown-item', DropdownItem);

    // Vue.component('modal', Modal);
    // Vue.component('notice', Notice);
    // Vue.component('message', Message);

    // Vue.component('t-pagination', Pagination);

    // Vue.prototype.$notify = Notice;
    // Vue.prototype.$message = Message;

    // Vue.directive('InfiniteScroll', InfiniteScroll);
    // Vue.directive('lazy', Lazyload);
    // Vue.directive('popover', PopoverDirective);

    // Vue.component('t-clock-picker', Clock);
    // Vue.component('t-date-picker', Date);
    // Vue.component('swiper', VueAwesomeSwiper.swiper);
    // Vue.component('swiperSlide', VueAwesomeSwiper.swiperSlide);
}

if (window.Vue) {
    // window.infiniteScroll = InfiniteScroll;
    install(Vue);
}

/***/ }),

/***/ "9d/h":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&id=3ddab256&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-menu[data-v-3ddab256]{\n    display: block;\n    position: relative;\n}\n.v-menu-item-sub[data-v-3ddab256]{\n    height: inherit;\n    line-height: inherit;\n    padding: 0 20px;\n    position: relative;\n    z-index: 3;\n    cursor: pointer;\n}\n.v-menu-horizontal .v-menu-item-sub.active[data-v-3ddab256]{\n    border-bottom: 2px solid #FF773D;\n    color: #FF773D;\n}\n.v-menu-horizontal[data-v-3ddab256]{\n    height: 60px;\n    line-height: 60px;\n}\n.v-menu-horizontal[data-v-3ddab256]::after{\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    z-index: 1;\n    background: #dddee1;\n}\n.v-menu-horizontal .v-menu-item-sub[data-v-3ddab256]{\n    float: left;\n}\n.v-menu-vertical[data-v-3ddab256]{\n    display: inline-block;\n    width: 200px;\n    height: 100%;\n}\n.v-menu-vertical .v-menu-item-sub[data-v-3ddab256]{\n    height: 60px;\n    line-height: 60px;\n}\n.v-menu-vertical[data-v-3ddab256]::after{\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 100%;\n    width: 1px;\n    z-index: 1;\n    background: #dddee1;\n}\n.v-menu-vertical .v-menu-item-sub.active[data-v-3ddab256]{\n    border-right: 2px solid #FF773D;\n    color: #FF773D;\n}", ""]);

// exports


/***/ }),

/***/ "Ag6m":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/table/table-head.vue?vue&type=script&lang=js ***!
  \****************************************************************************************************************************************************************************************************************/
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

var prefixCls = 'v-table-head';
exports.default = {
    name: prefixCls,
    computed: {
        classs: function classs() {
            var classs = ['' + prefixCls];

            return classs;
        }
    }
};

/***/ }),

/***/ "B+aG":
/*!**********************************!*\
  !*** ./components/menu/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuGroup = exports.menuSub = exports.menuItem = exports.menu = undefined;

var _menu = __webpack_require__(/*! ./menu.vue */ "gYsK");

var _menu2 = _interopRequireDefault(_menu);

var _menuItem = __webpack_require__(/*! ./menu-item.vue */ "RVVh");

var _menuItem2 = _interopRequireDefault(_menuItem);

var _menuSub = __webpack_require__(/*! ./menu-sub.vue */ "QKbK");

var _menuSub2 = _interopRequireDefault(_menuSub);

var _menuGroup = __webpack_require__(/*! ./menu-group.vue */ "QjmW");

var _menuGroup2 = _interopRequireDefault(_menuGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.menu = _menu2.default;
exports.menuItem = _menuItem2.default;
exports.menuSub = _menuSub2.default;
exports.menuGroup = _menuGroup2.default;

/***/ }),

/***/ "B7r1":
/*!*********************************!*\
  !*** ./components/col/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _col = __webpack_require__(/*! ./col.vue */ "/E0q");

var _col2 = _interopRequireDefault(_col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _col2.default;

/***/ }),

/***/ "BKVx":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/layout.vue?vue&type=style&index=0&id=128725f8&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&id=128725f8&lang=css&scoped=true */ "gtkV");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("70674f43", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "BYku":
/*!*********************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./components/input/input.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.t-input{\n    position: relative;\n    line-height: 1;\n}\n\n.t-input .t-input_icon{\n    position: absolute;\n    right: 0;\n    top: 0;\n    width: 36px;\n    height: 36px;\n    text-align: center;\n    line-height: 34px;\n    cursor: pointer;\n    user-select: none;\n}\n.t-input .t-input_icon.image{\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAQAAAAZxLZ7AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfhAQQROA5ODYTbAAAAKklEQVQI12Oc2cBQz4AAjcxbDvgyMjjAuOkNzAwMcKHG9Aa4ypkNM6EcAITpCyeWG1arAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE3LTAxLTA0VDE3OjU2OjE0KzA4OjAwfReaGQAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxNy0wMS0wNFQxNzo1NjoxNCswODowMAxKIqUAAAAASUVORK5CYII=) no-repeat center;\n}\n\n.t-input_icon + .t-input_ori{\n    padding-right: 36px;\n}\n\n.t-input_ori{\n    display: inline-block;\n    padding: 3px 10px;\n    box-sizing: border-box;\n    width: 100%;\n    height: 36px;\n    font-size: 14px;\n    color: #666;\n    background-color: #fff;\n    background-image: none;\n    border: 1px solid #F1EDED;\n    border-radius: 0;\n    outline: none;\n    line-height: normal;\n    border-radius: 4px;\n}\n\n.t-input_ori:hover {\n    border: 1px solid #8492A6;\n}\n\n.t-input_ori:focus {\n    border: 1px solid #FF7438;\n}\n\n.t-input.disabled .t-input_ori{\n    background-color: rgb(239, 242, 247);\n    color: rgb(187, 187, 187);\n    cursor: not-allowed;\n    border-color: rgb(211, 220, 230);\n}\n\n\n.t-input_large{\n    font-size: 16px;\n}\n.t-input_large .t-input_ori{\n    height: 42px;\n}\n\n.t-input_small{\n    font-size: 14px;\n}\n.t-input_small .t-input_ori{\n    height: 30px;\n}\n.t-input_small .t-input_icon{\n    width: 30px;\n    height: 30px;\n    line-height: 30px;\n}\n.t-input_small .t-input_icon + .t-input_ori{\n    padding-right: 30px;\n}\n\n.t-input_tiny .t-input_ori{\n    height: 26px;\n    font-size: 12px;\n}\n.t-input_tiny .t-input_icon{\n    width: 26px;\n    height: 26px;\n    line-height: 26px;\n}\n.t-input_tiny .t-input_icon + .t-input_ori{\n    padding-right: 25px;\n}\n", ""]);

// exports


/***/ }),

/***/ "CmFP":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/menu/menu-sub.vue?vue&type=template&id=9ea25552&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
    "li",
    { class: _vm.classs, style: _vm.style, on: { click: _vm.itemHandle } },
    [
      _c("div", { class: [_vm.profixCls + "-title"] }, [_vm._t("title")], 2),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "DGEn":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/table/table-body.vue?vue&type=template&id=1f2d595d&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("tbody", { class: _vm.classs }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "E/Pf":
/*!*********************************************************************************!*\
  !*** ./components/table/table-tr.vue?vue&type=template&id=7a748cf9&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_template_id_7a748cf9_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./table-tr.vue?vue&type=template&id=7a748cf9&scoped=true */ "x4Ge");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_template_id_7a748cf9_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_tr_vue_vue_type_template_id_7a748cf9_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "E5FF":
/*!********************************************************************************************!*\
  !*** ./components/table/table.css?vue&type=style&index=0&id=25bab43c&lang=css&scoped=true ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_25bab43c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&id=25bab43c&lang=css&scoped=true */ "bka6");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_25bab43c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_25bab43c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_25bab43c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_25bab43c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_25bab43c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "EDxO":
/*!*******************************************************************************************!*\
  !*** ./components/col/col.css?vue&type=style&index=0&id=2cef9ef4&lang=stylus&scoped=true ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_col_css_vue_type_style_index_0_id_2cef9ef4_lang_stylus_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./col.css?vue&type=style&index=0&id=2cef9ef4&lang=stylus&scoped=true */ "HZ/o");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_col_css_vue_type_style_index_0_id_2cef9ef4_lang_stylus_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_col_css_vue_type_style_index_0_id_2cef9ef4_lang_stylus_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_col_css_vue_type_style_index_0_id_2cef9ef4_lang_stylus_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_col_css_vue_type_style_index_0_id_2cef9ef4_lang_stylus_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_col_css_vue_type_style_index_0_id_2cef9ef4_lang_stylus_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Efyt":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/header.vue?vue&type=style&index=0&id=583deae7&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-header[data-v-583deae7]{\n    width: 100%;\n}\n.v-header-width[data-v-583deae7]{\n    margin: 0 auto;\n}\n", ""]);

// exports


/***/ }),

/***/ "F8SR":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/button/button.css?vue&type=style&index=0&id=5350d404&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./button.css?vue&type=style&index=0&id=5350d404&scoped=true&lang=css */ "Srux");

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

/***/ "FNw8":
/*!********************************************************************************************!*\
  !*** ./components/table/table.css?vue&type=style&index=0&id=772f9e9b&lang=css&scoped=true ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_772f9e9b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&id=772f9e9b&lang=css&scoped=true */ "rq9K");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_772f9e9b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_772f9e9b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_772f9e9b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_772f9e9b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_772f9e9b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "FO2j":
/*!**************************************************************!*\
  !*** ./components/layout/layout.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=script&lang=js */ "wMjz");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "FYZP":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/menu/menu-item.vue?vue&type=template&id=29ef778c&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { class: _vm.classs }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "G7VM":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&id=a1444c38&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&id=a1444c38&lang=css&scoped=true */ "IXGn");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("40dbb480", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "GFa3":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&id=9ea25552&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-menu[data-v-9ea25552]{\n    display: block;\n    position: relative;\n}\n.v-menu-item-sub[data-v-9ea25552]{\n    height: inherit;\n    line-height: inherit;\n    padding: 0 20px;\n    position: relative;\n    z-index: 3;\n    cursor: pointer;\n}\n.v-menu-horizontal .v-menu-item-sub.active[data-v-9ea25552]{\n    border-bottom: 2px solid #FF773D;\n    color: #FF773D;\n}\n.v-menu-horizontal[data-v-9ea25552]{\n    height: 60px;\n    line-height: 60px;\n}\n.v-menu-horizontal[data-v-9ea25552]::after{\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    z-index: 1;\n    background: #dddee1;\n}\n.v-menu-horizontal .v-menu-item-sub[data-v-9ea25552]{\n    float: left;\n}\n.v-menu-vertical[data-v-9ea25552]{\n    display: inline-block;\n    width: 200px;\n    height: 100%;\n}\n.v-menu-vertical .v-menu-item-sub[data-v-9ea25552]{\n    height: 60px;\n    line-height: 60px;\n}\n.v-menu-vertical[data-v-9ea25552]::after{\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 100%;\n    width: 1px;\n    z-index: 1;\n    background: #dddee1;\n}\n.v-menu-vertical .v-menu-item-sub.active[data-v-9ea25552]{\n    border-right: 2px solid #FF773D;\n    color: #FF773D;\n}", ""]);

// exports


/***/ }),

/***/ "GsFj":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&id=7a748cf9&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&id=7a748cf9&lang=css&scoped=true */ "30o+");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("1f0f9134", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "H4GF":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&id=25bab43c&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&id=25bab43c&lang=css&scoped=true */ "p08+");

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

/***/ "HDxI":
/*!************************************************************!*\
  !*** ./components/table/table.vue?vue&type=script&lang=js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./table.vue?vue&type=script&lang=js */ "jZhU");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "HZ/o":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/col/col.css?vue&type=style&index=0&id=2cef9ef4&lang=stylus&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./col.css?vue&type=style&index=0&id=2cef9ef4&lang=stylus&scoped=true */ "ylbt");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("4ce0ebb0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "HlVv":
/*!************************************!*\
  !*** ./components/button/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _button = __webpack_require__(/*! ./button.vue */ "Zb5R");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _button2.default;

/***/ }),

/***/ "I05C":
/*!***********************************!*\
  !*** ./components/util/assist.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.oneOf = oneOf;
exports.findComponentUpward = findComponentUpward;
exports.findComponentDownward = findComponentDownward;
exports.findBrothersComponents = findBrothersComponents;
exports.findComponentsDownward = findComponentsDownward;
// 判断参数是否是其中之一
function oneOf(value, valueList) {
    for (var i = 0; i < valueList.length; i++) {
        if (value === valueList[i]) {
            return true;
        }
    }
    return false;
}

// 寻找父级组件
function findComponentUpward(context, componentName, componentNames) {
    if (typeof componentName === 'string') {
        componentNames = [componentName];
    } else {
        componentNames = componentName;
    }

    var parent = context.$parent;
    var name = parent.$options.name;

    while (parent && (!name || componentNames.indexOf(name) < 0)) {
        parent = parent.$parent;
        if (parent) name = parent.$options.name;
    }
    return parent;
}

// 寻找子级组件
function findComponentDownward(context, componentName) {
    var childrens = context.$children;
    var children = null;

    if (childrens.length) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = childrens[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var child = _step.value;

                var name = child.$options.name;
                if (name === componentName) {
                    children = child;
                    break;
                } else {
                    children = findComponentDownward(child, componentName);
                    if (children) break;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return children;
}

// 寻找同级组件
function findBrothersComponents(context, componentName) {
    var exceptMe = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    var res = context.$parent.$children.filter(function (item) {
        return item.$options.name === componentName;
    });
    var index = res.findIndex(function (item) {
        return item._uid === context._uid;
    });
    if (exceptMe) res.splice(index, 1);
    return res;
}

// Find components downward
function findComponentsDownward(context, componentName) {
    return context.$children.reduce(function (components, child) {
        if (child.$options.name === componentName) components.push(child);
        var foundChilds = findComponentsDownward(child, componentName);
        return components.concat(foundChilds);
    }, []);
}

/***/ }),

/***/ "IGX9":
/*!**************************************************************!*\
  !*** ./components/menu/menu-sub.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./menu-sub.vue?vue&type=script&lang=js */ "XnuL");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "IXGn":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&id=a1444c38&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&id=a1444c38&lang=css&scoped=true */ "YJGu");

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

/***/ "Ifzv":
/*!******************************************************************************!*\
  !*** ./components/table/table.vue?vue&type=template&id=25bab43c&scoped=true ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_25bab43c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./table.vue?vue&type=template&id=25bab43c&scoped=true */ "WML9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_25bab43c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_vue_vue_type_template_id_25bab43c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "In3Y":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/menu/menu.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(/*! ../util/assist */ "I05C");

var profixCls = 'v-menu'; //
//
//
//
//
//

exports.default = {
    name: profixCls,
    props: {
        activeName: {
            type: [String, Number],
            default: ''
        },
        mode: {
            type: String,
            default: 'horizontal',
            validator: function validator(val) {
                return (0, _assist.oneOf)(val, ['horizontal', 'vertical']);
            }
        },
        width: {
            type: Number,
            default: 0
        },
        height: {
            type: Number,
            default: 0
        }
    },
    computed: {
        classs: function classs() {
            var classs = ['' + profixCls, profixCls + '-' + this.mode];

            return classs;
        },
        style: function style() {
            var style = {};

            if (this.width !== 0) {
                style.width = this.width + 'px';
            }

            return style;
        }
    },
    methods: {
        $onClickHandle: function $onClickHandle(val) {

            this.$activeHandle(val);
            this.$emit('on:select', val);
        },
        $activeHandle: function $activeHandle(name) {
            (0, _assist.findComponentsDownward)(this, 'v-menu-item-sub').forEach(function (val) {

                if (val.name == name) {
                    val.active = true;

                    return;
                }

                val.active = false;
            });
        }
    },
    mounted: function mounted() {

        this.$activeHandle(this.activeName);
    }
};

/***/ }),

/***/ "J3GE":
/*!**************************************!*\
  !*** ./components/layout/layout.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_vue_vue_type_template_id_128725f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.vue?vue&type=template&id=128725f8&scoped=true */ "83Sj");
/* harmony import */ var _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.vue?vue&type=script&lang=js */ "FO2j");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _layout_vue_vue_type_style_index_0_id_128725f8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.vue?vue&type=style&index=0&id=128725f8&lang=css&scoped=true */ "UPq0");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _layout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _layout_vue_vue_type_template_id_128725f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _layout_vue_vue_type_template_id_128725f8_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "128725f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/layout/layout.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "JekO":
/*!**************************************************************************!*\
  !*** ./components/row/row.vue?vue&type=template&id=1bf7ea3a&scoped=true ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_template_id_1bf7ea3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./row.vue?vue&type=template&id=1bf7ea3a&scoped=true */ "NOeS");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_template_id_1bf7ea3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_template_id_1bf7ea3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "KHOc":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/menu/menu-group.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
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

var profixCls = 'v-menu-item-group';

exports.default = {
    name: profixCls,
    computed: {
        classs: function classs() {
            var classs = ['' + profixCls];

            return classs;
        }
    }
};

/***/ }),

/***/ "Ka0m":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/sider.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
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

var prefixCls = 'v-sider';
exports.default = {
    name: prefixCls,
    props: {
        width: {
            type: [Number, String],
            default: 200
        }
    },
    computed: {
        classs: function classs() {
            return ['' + prefixCls];
        },
        style: function style() {
            return {
                width: this.width + 'px',
                minWidth: this.width + 'px',
                maxWidth: this.width + 'px'
            };
        }
    }
};

/***/ }),

/***/ "Kj8d":
/*!***************************************************************!*\
  !*** ./components/menu/menu-item.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./menu-item.vue?vue&type=script&lang=js */ "mZ6y");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "KmMT":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./components/input/input.css ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!./input.css */ "BYku");

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

/***/ "L/cL":
/*!****************************************************************************!*\
  !*** ./components/menu/menu.vue?vue&type=template&id=a1444c38&scoped=true ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_a1444c38_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=template&id=a1444c38&scoped=true */ "LXxp");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_a1444c38_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_template_id_a1444c38_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "LXxp":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/menu/menu.vue?vue&type=template&id=a1444c38&scoped=true ***!
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
    "ul",
    { class: _vm.classs, style: _vm.style },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "LrLU":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/row/row.css?vue&type=style&index=0&id=1bf7ea3a&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./row.css?vue&type=style&index=0&id=1bf7ea3a&lang=css&scoped=true */ "MpkY");

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

/***/ "MW61":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/menu/menu-group.vue?vue&type=template&id=3ddab256&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { class: _vm.classs }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "MpkY":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/row/row.css?vue&type=style&index=0&id=1bf7ea3a&lang=css&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-row[data-v-1bf7ea3a]{\n    position: relative;\n    margin-left: 0;\n    margin-right: 0;\n    height: auto;\n    zoom: 1;\n    display: block;\n}\n.v-row[data-v-1bf7ea3a]:after, .v-row[data-v-1bf7ea3a]:before{\n    content: \"\";\n    display: table;\n}\n.v-row[data-v-1bf7ea3a]:after {\n    clear: both;\n    visibility: hidden;\n    font-size: 0;\n    height: 0;\n}\n.v-row-flex[data-v-1bf7ea3a]{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n.v-row-flex-start[data-v-1bf7ea3a]{\n    justify-content: flex-start;\n}\n.v-row-flex-end[data-v-1bf7ea3a]{\n    justify-content: flex-end;\n}\n.v-row-flex-center[data-v-1bf7ea3a]{\n    justify-content: center;\n}\n.v-row-flex-space-around[data-v-1bf7ea3a]{\n    justify-content: space-around;\n}\n.v-row-flex-space-between[data-v-1bf7ea3a]{\n    justify-content: space-between;\n}\n.v-row-flex-top[data-v-1bf7ea3a]{\n    align-items: flex-start;\n}\n.v-row-flex-middle[data-v-1bf7ea3a]{\n    align-items: center;\n}\n.v-row-flex-bottom[data-v-1bf7ea3a]{\n    align-items: flex-end;\n}", ""]);

// exports


/***/ }),

/***/ "N+P7":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&id=29ef778c&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&id=29ef778c&lang=css&scoped=true */ "hCvn");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("186aa0ef", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "NB7K":
/*!****************************************************************!*\
  !*** ./components/menu/menu-group.vue?vue&type=script&lang=js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./menu-group.vue?vue&type=script&lang=js */ "KHOc");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "NOeS":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/row/row.vue?vue&type=template&id=1bf7ea3a&scoped=true ***!
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
    { class: _vm.classs, style: _vm.styles },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "NWSM":
/*!***********************************************************************************************!*\
  !*** ./components/layout/content.vue?vue&type=style&index=0&id=5459268f&lang=css&scoped=true ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_id_5459268f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./content.vue?vue&type=style&index=0&id=5459268f&lang=css&scoped=true */ "NtcS");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_id_5459268f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_id_5459268f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_id_5459268f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_id_5459268f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_style_index_0_id_5459268f_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "NtcS":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/content.vue?vue&type=style&index=0&id=5459268f&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./content.vue?vue&type=style&index=0&id=5459268f&lang=css&scoped=true */ "slfG");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("3ef825ae", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "PKIT":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/footer.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(/*! ../util/assist */ "I05C");

var prefixCls = 'v-footer'; //
//
//

exports.default = {
    name: prefixCls,
    props: {
        type: {
            type: String,
            default: '',
            validator: function validator(val) {
                return (0, _assist.oneOf)(val, ['', 'fixed']);
            }
        },
        width: {
            type: Number,
            default: 100
        },
        index: {
            type: Number,
            default: 0
        }
    },
    computed: {
        style: function style() {
            var style = {
                width: this.width + '%',
                overflow: 'hidden'
            };

            if (this.type) {
                style.position = this.type;
                style.bottom = 0;
                style.zIndex = this.index;
            }

            return style;
        },
        classs: function classs() {

            return ['' + prefixCls];
        }
    }
};

/***/ }),

/***/ "QKbK":
/*!**************************************!*\
  !*** ./components/menu/menu-sub.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_sub_vue_vue_type_template_id_9ea25552_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-sub.vue?vue&type=template&id=9ea25552&scoped=true */ "h4tL");
/* harmony import */ var _menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-sub.vue?vue&type=script&lang=js */ "IGX9");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_css_vue_type_style_index_0_id_9ea25552_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?vue&type=style&index=0&id=9ea25552&lang=css&scoped=true */ "Y+G8");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _menu_sub_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_sub_vue_vue_type_template_id_9ea25552_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_sub_vue_vue_type_template_id_9ea25552_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9ea25552",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/menu/menu-sub.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "QSDy":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&id=7a748cf9&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-table[data-v-7a748cf9]{\n    width: 100%;\n    border: 1px solid #e9eaec;\n}\n.v-table-head[data-v-7a748cf9]{\n    background: #f8f8f9;\n    font-weight: bold;\n    font-size: 14px;\n}\n.v-table-head tr[data-v-7a748cf9]{\n    border-bottom: 1px solid #e9eaec;\n}\n.v-table-head tr th[data-v-7a748cf9]{\n    padding: 15px 0;\n}\n.v-table-body[data-v-7a748cf9]{\n    font-size: 12px;\n    text-align: center;\n}\n.v-table-body tr[data-v-7a748cf9]{\n    border-bottom: 1px solid #e9eaec;\n}\n.v-table-body tr td[data-v-7a748cf9]{\n    padding: 15px 0;\n}", ""]);

// exports


/***/ }),

/***/ "QSfQ":
/*!**************************************************************!*\
  !*** ./components/layout/footer.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=script&lang=js */ "PKIT");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "QjmW":
/*!****************************************!*\
  !*** ./components/menu/menu-group.vue ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_group_vue_vue_type_template_id_3ddab256_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-group.vue?vue&type=template&id=3ddab256&scoped=true */ "dLi4");
/* harmony import */ var _menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-group.vue?vue&type=script&lang=js */ "NB7K");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_css_vue_type_style_index_0_id_3ddab256_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?vue&type=style&index=0&id=3ddab256&lang=css&scoped=true */ "y3W3");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _menu_group_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_group_vue_vue_type_template_id_3ddab256_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_group_vue_vue_type_template_id_3ddab256_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3ddab256",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/menu/menu-group.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "RVVh":
/*!***************************************!*\
  !*** ./components/menu/menu-item.vue ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_item_vue_vue_type_template_id_29ef778c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-item.vue?vue&type=template&id=29ef778c&scoped=true */ "uVl7");
/* harmony import */ var _menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-item.vue?vue&type=script&lang=js */ "Kj8d");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_css_vue_type_style_index_0_id_29ef778c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?vue&type=style&index=0&id=29ef778c&lang=css&scoped=true */ "x5Tt");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _menu_item_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_item_vue_vue_type_template_id_29ef778c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_item_vue_vue_type_template_id_29ef778c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "29ef778c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/menu/menu-item.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "S+LG":
/*!*****************************************!*\
  !*** ./components/table/table-body.vue ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_body_vue_vue_type_template_id_1f2d595d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-body.vue?vue&type=template&id=1f2d595d&scoped=true */ "0ROg");
/* harmony import */ var _table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-body.vue?vue&type=script&lang=js */ "cXTn");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _table_css_vue_type_style_index_0_id_1f2d595d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.css?vue&type=style&index=0&id=1f2d595d&lang=css&scoped=true */ "cT8e");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_body_vue_vue_type_template_id_1f2d595d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_body_vue_vue_type_template_id_1f2d595d_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f2d595d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/table/table-body.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "Sndz":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&id=1f2d595d&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&id=1f2d595d&lang=css&scoped=true */ "Vk9a");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("3ff0aa02", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "Srux":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/button/button.css?vue&type=style&index=0&id=5350d404&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.t-btn[data-v-5350d404]{\n    outline: none;\n    cursor: pointer;\n    box-sizing: border-box;\n    border: none;\n    background: none;\n    border-radius: 4px;\n}\n.t-btn.disabled[data-v-5350d404], .t-btn[disabled][data-v-5350d404],.t-btn.disabled[data-v-5350d404]:hover,.t-btn[disabled][data-v-5350d404]:hover{\n    cursor: not-allowed;\n    color: #bbbec4;\n    background-color: #f7f7f7;\n    border-color: #dddee1;\n}\n.t-btn-size-tiny[data-v-5350d404]{\n    font-size: 12px;\n    padding: 4px 15px;\n}\n.t-btn-size-default[data-v-5350d404]{\n    font-size: 14px;\n    padding: 6px 18px;\n}\n.t-btn-size-large[data-v-5350d404]{\n    font-size: 16px;\n    padding: 8px 28px;\n}\n.t-btn-size-long[data-v-5350d404]{\n    font-size: 14px;\n    padding: 6px 18px;\n    width: 100%;\n}\n.t-btn-type-default[data-v-5350d404]{\n    background: #f7f7f7;\n    color: #495060;\n    border: 1px solid #dddee1;\n}\n.t-btn-type-default[data-v-5350d404]:hover{\n    background: #ffffff;\n    color: #57a3f3;\n    border: 1px solid #57a3f3;\n}\n.t-btn-type-text[data-v-5350d404]{\n    color: #495060;\n    border: 1px solid rgba(255,255,255,0);\n}\n.t-btn-type-text[data-v-5350d404]:hover{\n    color: #57a3f3;\n    border: 1px solid rgba(255,255,255,0);\n}\n.t-btn-type-warning[data-v-5350d404]{\n    background: #ff9900;\n    color: #fff;\n    border: 1px solid #ff9900;\n}\n.t-btn-type-warning[data-v-5350d404]:hover{\n    background: #ffad33;\n    color: #fff;\n    border: 1px solid #ffad33;\n}\n.t-btn-type-error[data-v-5350d404]{\n    background: #ed3f14;\n    color: #fff;\n    border: 1px solid #ed3f14;\n}\n.t-btn-type-error[data-v-5350d404]:hover{\n    background: #f16543;\n    color: #fff;\n    border: 1px solid #ed3f14;\n}", ""]);

// exports


/***/ }),

/***/ "TX5u":
/*!********************************************************!*\
  !*** ./components/row/row.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./row.vue?vue&type=script&lang=js */ "wOIX");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "TqBO":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/header.vue?vue&type=style&index=0&id=583deae7&lang=css&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&id=583deae7&lang=css&scoped=true */ "58MS");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("bceff4c8", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "UPq0":
/*!**********************************************************************************************!*\
  !*** ./components/layout/layout.vue?vue&type=style&index=0&id=128725f8&lang=css&scoped=true ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_128725f8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&id=128725f8&lang=css&scoped=true */ "BKVx");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_128725f8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_128725f8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_128725f8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_128725f8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_layout_vue_vue_type_style_index_0_id_128725f8_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "URlm":
/*!*****************************************************************!*\
  !*** ./components/table/table-head.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./table-head.vue?vue&type=script&lang=js */ "Ag6m");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "UgII":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/col/col.vue?vue&type=template&id=2cef9ef4&scoped=true ***!
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
    { class: _vm.classs, style: _vm.styles },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "VjfO":
/*!*************************************!*\
  !*** ./components/input/input.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"t-input\" :class=\"[size?('t-input_'+size):'',{disabled:disabled}]\">\n\n    <i class=\"material-icons t-input_icon\" v-if=\"icon\" @click=\"handleIconClick\">{{icon}}</i>\n    <i class=\"t-input_icon image\" v-if=\"imageIcon\" @click=\"handleIconClick\"></i>\n\n    <input\n        class=\"t-input_ori\"\n        :class=\"[customClass]\"\n        :type=\"type\"\n        :placeholder=\"placeholder\"\n        :name=\"name\"\n        :disabled=\"disabled\"\n        :readonly=\"readonly\"\n        :autocomplete=\"autoComplete\"\n        :autofocus=\"autofocus\"\n        :value=\"value\"\n        :form=\"form\"\n        ref=\"input\"\n        @input=\"updateValue($event.target.value)\"\n        @focus=\"handleFocus\"\n        @blur=\"handleBlur\"\n    >\n\n</div>";

/***/ }),

/***/ "Vk9a":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&id=1f2d595d&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&id=1f2d595d&lang=css&scoped=true */ "qY6+");

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

/***/ "WHYS":
/*!**************************************************************************!*\
  !*** ./components/col/col.vue?vue&type=template&id=2cef9ef4&scoped=true ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_template_id_2cef9ef4_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./col.vue?vue&type=template&id=2cef9ef4&scoped=true */ "UgII");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_template_id_2cef9ef4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_template_id_2cef9ef4_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "WKi4":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/content.vue?vue&type=template&id=5459268f&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
    { class: _vm.classs, style: _vm.style },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "WML9":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/table/table.vue?vue&type=template&id=25bab43c&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
    "table",
    {
      class: _vm.classs,
      attrs: { cellspacing: "0", cellpadding: "0", border: "0" }
    },
    [
      _c(
        "colgroup",
        _vm._l(_vm.width, function(item, index) {
          return _c("col", { key: index, attrs: { width: item } })
        })
      ),
      _vm._v(" "),
      _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "WjeU":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&id=9ea25552&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&id=9ea25552&lang=css&scoped=true */ "GFa3");

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

/***/ "XnuL":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/menu/menu-sub.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(/*! ../util/assist */ "I05C");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//

var profixCls = 'v-menu-item-sub';

exports.default = {
    name: profixCls,
    props: {
        name: {
            type: [String, Number],
            dafeult: ''
        }
    },
    data: function data() {
        return {
            profixCls: profixCls,
            active: false,
            height: 0
        };
    },
    computed: {
        classs: function classs() {
            var classs = ['' + profixCls, _defineProperty({}, 'active', this.active)];

            return classs;
        },
        style: function style() {
            var style = {};

            if (this.height) {
                style.height = this.height + 'px';
                style.lineHeight = this.height + 'px';
            }

            return style;
        }
    },
    methods: {
        itemHandle: function itemHandle() {
            (0, _assist.findComponentUpward)(this, 'v-menu').$onClickHandle(this.name);
        }
    },
    mounted: function mounted() {

        if ((0, _assist.findComponentUpward)(this, 'v-menu') && (0, _assist.findComponentUpward)(this, 'v-menu').height) {
            this.height = (0, _assist.findComponentUpward)(this, 'v-menu').height;
        }
    }
};

/***/ }),

/***/ "Y+G8":
/*!*******************************************************************************************!*\
  !*** ./components/menu/index.css?vue&type=style&index=0&id=9ea25552&lang=css&scoped=true ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_9ea25552_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&id=9ea25552&lang=css&scoped=true */ "aJ5q");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_9ea25552_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_9ea25552_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_9ea25552_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_9ea25552_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_9ea25552_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "YJGu":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&id=a1444c38&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-menu[data-v-a1444c38]{\n    display: block;\n    position: relative;\n}\n.v-menu-item-sub[data-v-a1444c38]{\n    height: inherit;\n    line-height: inherit;\n    padding: 0 20px;\n    position: relative;\n    z-index: 3;\n    cursor: pointer;\n}\n.v-menu-horizontal .v-menu-item-sub.active[data-v-a1444c38]{\n    border-bottom: 2px solid #FF773D;\n    color: #FF773D;\n}\n.v-menu-horizontal[data-v-a1444c38]{\n    height: 60px;\n    line-height: 60px;\n}\n.v-menu-horizontal[data-v-a1444c38]::after{\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    z-index: 1;\n    background: #dddee1;\n}\n.v-menu-horizontal .v-menu-item-sub[data-v-a1444c38]{\n    float: left;\n}\n.v-menu-vertical[data-v-a1444c38]{\n    display: inline-block;\n    width: 200px;\n    height: 100%;\n}\n.v-menu-vertical .v-menu-item-sub[data-v-a1444c38]{\n    height: 60px;\n    line-height: 60px;\n}\n.v-menu-vertical[data-v-a1444c38]::after{\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 100%;\n    width: 1px;\n    z-index: 1;\n    background: #dddee1;\n}\n.v-menu-vertical .v-menu-item-sub.active[data-v-a1444c38]{\n    border-right: 2px solid #FF773D;\n    color: #FF773D;\n}", ""]);

// exports


/***/ }),

/***/ "Yvss":
/*!**************************************************************!*\
  !*** ./components/layout/header.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./header.vue?vue&type=script&lang=js */ "hGC3");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "Zb5R":
/*!**************************************!*\
  !*** ./components/button/button.vue ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_vue_vue_type_template_id_5350d404_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.vue?vue&type=template&id=5350d404&scoped=true */ "z0dI");
/* harmony import */ var _button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.vue?vue&type=script&lang=js */ "sFOJ");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _button_css_vue_type_style_index_0_id_5350d404_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./button.css?vue&type=style&index=0&id=5350d404&scoped=true&lang=css */ "3aZ2");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _button_vue_vue_type_template_id_5350d404_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _button_vue_vue_type_template_id_5350d404_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5350d404",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/button/button.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "aJ5q":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&id=9ea25552&lang=css&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&id=9ea25552&lang=css&scoped=true */ "WjeU");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("fbd90314", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "alyQ":
/*!**********************************************************************************************!*\
  !*** ./components/layout/header.vue?vue&type=style&index=0&id=583deae7&lang=css&scoped=true ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_583deae7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./header.vue?vue&type=style&index=0&id=583deae7&lang=css&scoped=true */ "TqBO");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_583deae7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_583deae7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_583deae7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_583deae7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_style_index_0_id_583deae7_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "bka6":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&id=25bab43c&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&id=25bab43c&lang=css&scoped=true */ "H4GF");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("83121156", content, false, {});
// Hot Module Replacement
if(false) {}

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

/***/ "bucP":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/col/col.css?vue&type=style&index=0&id=2cef9ef4&lang=stylus&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-col-1[data-v-2cef9ef4] {\n    position: relative;\n    display: block\n}\n.v-col-1[data-v-2cef9ef4],.v-col-2[data-v-2cef9ef4],.v-col-3[data-v-2cef9ef4],.v-col-4[data-v-2cef9ef4],.v-col-5[data-v-2cef9ef4],.v-col-6[data-v-2cef9ef4],.v-col-7[data-v-2cef9ef4],.v-col-8[data-v-2cef9ef4],.v-col-9[data-v-2cef9ef4],.v-col-10[data-v-2cef9ef4],.v-col-11[data-v-2cef9ef4],.v-col-12[data-v-2cef9ef4],.v-col-13[data-v-2cef9ef4],.v-col-14[data-v-2cef9ef4],.v-col-15[data-v-2cef9ef4],.v-col-16[data-v-2cef9ef4],.v-col-17[data-v-2cef9ef4],.v-col-18[data-v-2cef9ef4],.v-col-19[data-v-2cef9ef4],.v-col-20[data-v-2cef9ef4],.v-col-21[data-v-2cef9ef4],.v-col-22[data-v-2cef9ef4],.v-col-23[data-v-2cef9ef4],.v-col-24[data-v-2cef9ef4] {\n    float: left;\n}\n.v-col-24[data-v-2cef9ef4] {\n    display: block;\n    width: 100%\n}\n.v-col-23[data-v-2cef9ef4] {\n    display: block;\n    width: 95.83333333%;\n}\n.v-col-22[data-v-2cef9ef4] {\n    display: block;\n    width: 91.66666667%;\n}\n.v-col-21[data-v-2cef9ef4] {\n    display: block;\n    width: 87.5%\n}\n.v-col-20[data-v-2cef9ef4] {\n    display: block;\n    width: 83.33333333%;\n}\n.v-col-19[data-v-2cef9ef4] {\n    display: block;\n    width: 79.16666667%;\n}\n.v-col-18[data-v-2cef9ef4] {\n    display: block;\n    width: 75%\n}\n.v-col-17[data-v-2cef9ef4] {\n    display: block;\n    width: 70.83333333%;\n}\n.v-col-16[data-v-2cef9ef4] {\n    display: block;\n    width: 66.66666667%;\n}\n.v-col-15[data-v-2cef9ef4] {\n    display: block;\n    width: 62.5%;\n}\n.v-col-14[data-v-2cef9ef4] {\n    display: block;\n    width: 58.33333333%;\n}\n.v-col-13[data-v-2cef9ef4] {\n    display: block;\n    width: 54.16666667%;\n}\n.v-col-12[data-v-2cef9ef4] {\n    display: block;\n    width: 50%;\n}\n.v-col-11[data-v-2cef9ef4] {\n    display: block;\n    width: 45.83333333%\n}\n.v-col-10[data-v-2cef9ef4] {\n    display: block;\n    width: 41.66666667%;\n}\n.v-col-9[data-v-2cef9ef4] {\n    display: block;\n    width: 37.5%;\n}\n.v-col-8[data-v-2cef9ef4] {\n    display: block;\n    width: 33.33333333%\n}\n.v-col-7[data-v-2cef9ef4] {\n    display: block;\n    width: 29.16666667%;\n}\n.v-col-6[data-v-2cef9ef4] {\n    display: block;\n    width: 25%;\n}\n.v-col-5[data-v-2cef9ef4] {\n    display: block;\n    width: 20%;\n}\n.v-col-4[data-v-2cef9ef4] {\n    display: block;\n    width: 16.66666667%;\n}\n.v-col-3[data-v-2cef9ef4] {\n    display: block;\n    width: 12.5%;\n}\n.v-col-2[data-v-2cef9ef4] {\n    display: block;\n    width: 8.33333333%\n}\n.v-col-1[data-v-2cef9ef4] {\n    display: block;\n    width: 4.16666667%;\n}\n.v-col-0[data-v-2cef9ef4] {\n    display: none\n}\n.v-col-offset-1[data-v-2cef9ef4] {\n    margin-left: 4.16666667%;\n}\n.v-col-offset-2[data-v-2cef9ef4] {\n    margin-left: 8.33333333%;\n}\n.v-col-offset-3[data-v-2cef9ef4] {\n    margin-left: 12.5%;\n}\n.v-col-offset-4[data-v-2cef9ef4] {\n    margin-left: 16.66666667%;\n}\n.v-col-offset-5[data-v-2cef9ef4] {\n    margin-left: 20.83333333%;\n}\n.v-col-offset-6[data-v-2cef9ef4] {\n    margin-left: 25%;\n}\n.v-col-offset-7[data-v-2cef9ef4] {\n    margin-left: 29.16666667%;\n}\n.v-col-offset-8[data-v-2cef9ef4] {\n    margin-left: 33.33333333%;\n}\n.v-col-offset-9[data-v-2cef9ef4] {\n    margin-left: 37.5%;\n}\n.v-col-offset-10[data-v-2cef9ef4] {\n    margin-left: 41.66666667%;\n}\n.v-col-offset-11[data-v-2cef9ef4] {\n    margin-left: 45.83333333%;\n}\n.v-col-offset-12[data-v-2cef9ef4] {\n    margin-left: 50%;\n}\n.v-col-offset-13[data-v-2cef9ef4] {\n    margin-left: 54.16666667%;\n}\n.v-col-offset-14[data-v-2cef9ef4] {\n    margin-left: 58.33333333%;\n}\n.v-col-offset-15[data-v-2cef9ef4] {\n    margin-left: 62.5%;\n}\n.v-col-offset-16[data-v-2cef9ef4] {\n    margin-left: 66.66666667%;\n}\n.v-col-offset-17[data-v-2cef9ef4] {\n    margin-left: 70.83333333%;\n}\n.v-col-offset-18[data-v-2cef9ef4] {\n    margin-left: 75%;\n}\n.v-col-offset-19[data-v-2cef9ef4] {\n    margin-left: 79.16666667%;\n}\n.v-col-offset-20[data-v-2cef9ef4] {\n    margin-left: 83.33333333%;\n}\n.v-col-offset-21[data-v-2cef9ef4] {\n    margin-left: 87.5%;\n}\n.v-col-offset-22[data-v-2cef9ef4] {\n    margin-left: 91.66666667%;\n}\n.v-col-offset-23[data-v-2cef9ef4] {\n    margin-left: 95.83333333%;\n}\n.v-col-offset-24[data-v-2cef9ef4] {\n    margin-left: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "cT8e":
/*!********************************************************************************************!*\
  !*** ./components/table/table.css?vue&type=style&index=0&id=1f2d595d&lang=css&scoped=true ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_1f2d595d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&id=1f2d595d&lang=css&scoped=true */ "Sndz");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_1f2d595d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_1f2d595d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_1f2d595d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_1f2d595d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_1f2d595d_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "cXTn":
/*!*****************************************************************!*\
  !*** ./components/table/table-body.vue?vue&type=script&lang=js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./table-body.vue?vue&type=script&lang=js */ "6YbG");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_body_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d7Mn":
/*!*********************************!*\
  !*** ./components/row/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _row = __webpack_require__(/*! ./row.vue */ "m5Rx");

var _row2 = _interopRequireDefault(_row);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _row2.default;

/***/ }),

/***/ "dLi4":
/*!**********************************************************************************!*\
  !*** ./components/menu/menu-group.vue?vue&type=template&id=3ddab256&scoped=true ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_template_id_3ddab256_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./menu-group.vue?vue&type=template&id=3ddab256&scoped=true */ "MW61");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_template_id_3ddab256_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_group_vue_vue_type_template_id_3ddab256_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "da/a":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/sider.vue?vue&type=style&index=0&id=26701691&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-sider[data-v-26701691]{\n}\n", ""]);

// exports


/***/ }),

/***/ "eEd1":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/footer.vue?vue&type=template&id=370b86f5 ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
    { class: _vm.classs, style: _vm.style },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "eM5b":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&id=29ef778c&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-menu[data-v-29ef778c]{\n    display: block;\n    position: relative;\n}\n.v-menu-item-sub[data-v-29ef778c]{\n    height: inherit;\n    line-height: inherit;\n    padding: 0 20px;\n    position: relative;\n    z-index: 3;\n    cursor: pointer;\n}\n.v-menu-horizontal .v-menu-item-sub.active[data-v-29ef778c]{\n    border-bottom: 2px solid #FF773D;\n    color: #FF773D;\n}\n.v-menu-horizontal[data-v-29ef778c]{\n    height: 60px;\n    line-height: 60px;\n}\n.v-menu-horizontal[data-v-29ef778c]::after{\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    z-index: 1;\n    background: #dddee1;\n}\n.v-menu-horizontal .v-menu-item-sub[data-v-29ef778c]{\n    float: left;\n}\n.v-menu-vertical[data-v-29ef778c]{\n    display: inline-block;\n    width: 200px;\n    height: 100%;\n}\n.v-menu-vertical .v-menu-item-sub[data-v-29ef778c]{\n    height: 60px;\n    line-height: 60px;\n}\n.v-menu-vertical[data-v-29ef778c]::after{\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 100%;\n    width: 1px;\n    z-index: 1;\n    background: #dddee1;\n}\n.v-menu-vertical .v-menu-item-sub.active[data-v-29ef778c]{\n    border-right: 2px solid #FF773D;\n    color: #FF773D;\n}", ""]);

// exports


/***/ }),

/***/ "ee3b":
/*!*********************************************************************************************!*\
  !*** ./components/layout/sider.vue?vue&type=style&index=0&id=26701691&lang=css&scoped=true ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_style_index_0_id_26701691_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./sider.vue?vue&type=style&index=0&id=26701691&lang=css&scoped=true */ "sUt5");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_style_index_0_id_26701691_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_style_index_0_id_26701691_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_style_index_0_id_26701691_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_style_index_0_id_26701691_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_style_index_0_id_26701691_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f1wT":
/*!**********************************************************!*\
  !*** ./components/menu/menu.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./menu.vue?vue&type=script&lang=js */ "In3Y");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fYuv":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/sider.vue?vue&type=template&id=26701691&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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
    { class: _vm.classs, style: _vm.style },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "fh0H":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/button/button.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(/*! ../util/assist */ "I05C");

var prefixCls = 't-btn'; //
//
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
    name: prefixCls,
    props: {
        type: {
            type: String,
            default: 'default',
            validator: function validator(val) {
                return (0, _assist.oneOf)(val, ['default', 'text', 'warning', 'error']);
            }
        },
        width: {
            type: Number,
            default: 100
        },
        height: {
            type: Number,
            default: 50
        },
        size: {
            type: String,
            default: 'default',
            validator: function validator(val) {
                return (0, _assist.oneOf)(val, ['default', 'tiny', 'large', 'long', 'auto']);
            }
        },
        disabled: {
            type: Boolean,
            default: false
        },
        htmlType: {
            type: String,
            default: 'button',
            validator: function validator(val) {
                return (0, _assist.oneOf)(val, ['button', 'submit', 'reset']);
            }
        }
    },
    computed: {
        classs: function classs() {
            var classs = [];

            classs = [[prefixCls + '-type-' + this.type]];

            if (this.size != 'auto') {
                classs.push([prefixCls + '-size-' + this.size]);
            }

            return classs;
        },
        style: function style() {
            var style = {};

            if (this.size == 'auto') {
                style.width = this.width + 'px';
                style.height = this.height + 'px';
                style.lineHeight = this.height + 'px';
            };
            return style;
        }
    },
    methods: {
        handleClick: function handleClick(event) {
            this.$emit("click", event);
        }
    }
};

/***/ }),

/***/ "gYsK":
/*!**********************************!*\
  !*** ./components/menu/menu.vue ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_vue_vue_type_template_id_a1444c38_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.vue?vue&type=template&id=a1444c38&scoped=true */ "L/cL");
/* harmony import */ var _menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.vue?vue&type=script&lang=js */ "f1wT");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_css_vue_type_style_index_0_id_a1444c38_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css?vue&type=style&index=0&id=a1444c38&lang=css&scoped=true */ "8ktk");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _menu_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _menu_vue_vue_type_template_id_a1444c38_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _menu_vue_vue_type_template_id_a1444c38_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a1444c38",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/menu/menu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ "ghlW":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/col/col.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(/*! ../util/assist */ "I05C");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//
//

var prefixCls = 'v-col';

exports.default = {
    name: prefixCls,
    props: {
        span: {
            type: Number,
            default: 24
        },
        offset: {
            type: Number,
            default: 0
        }
    },
    data: function data() {
        return {
            gutter: 0
        };
    },
    computed: {
        classs: function classs() {
            var _ref;

            return ['' + prefixCls, (_ref = {}, _defineProperty(_ref, prefixCls + '-' + this.span, this.span), _defineProperty(_ref, prefixCls + '-offset-' + this.offset, this.offset), _ref)];
        },
        styles: function styles() {
            var style = {};
            if (this.gutter !== 0) {
                style = {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                };
            }

            return style;
        }
    },
    methods: {
        updateGutter: function updateGutter() {
            var Row = (0, _assist.findComponentUpward)(this, 'v-row');

            if (Row) {
                Row.updateGutter(Row.gutter);
            }
        }
    },
    mounted: function mounted() {
        this.updateGutter();
    }
};

/***/ }),

/***/ "gtkV":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/layout.vue?vue&type=style&index=0&id=128725f8&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./layout.vue?vue&type=style&index=0&id=128725f8&lang=css&scoped=true */ "xqBy");

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

/***/ "gvI0":
/*!************************************!*\
  !*** ./components/table/table.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_vue_vue_type_template_id_25bab43c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table.vue?vue&type=template&id=25bab43c&scoped=true */ "Ifzv");
/* harmony import */ var _table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.vue?vue&type=script&lang=js */ "HDxI");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _table_css_vue_type_style_index_0_id_25bab43c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.css?vue&type=style&index=0&id=25bab43c&lang=css&scoped=true */ "E5FF");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _table_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_vue_vue_type_template_id_25bab43c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_vue_vue_type_template_id_25bab43c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "25bab43c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/table/table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "h4tL":
/*!********************************************************************************!*\
  !*** ./components/menu/menu-sub.vue?vue&type=template&id=9ea25552&scoped=true ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_template_id_9ea25552_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./menu-sub.vue?vue&type=template&id=9ea25552&scoped=true */ "CmFP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_template_id_9ea25552_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_sub_vue_vue_type_template_id_9ea25552_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "hCvn":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/menu/index.css?vue&type=style&index=0&id=29ef778c&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&id=29ef778c&lang=css&scoped=true */ "eM5b");

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

/***/ "hGC3":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/header.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(/*! ../util/assist */ "I05C");

var prefixCls = 'v-header'; //
//
//
//
//
//
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
    name: prefixCls,
    props: {
        width: {
            type: Number,
            default: 100
        },
        type: {
            type: String,
            default: '',
            validator: function validator(val) {
                return (0, _assist.oneOf)(val, ['', 'fixed']);
            }
        },
        index: {
            type: Number,
            default: 0
        }
    },
    computed: {
        styles: function styles() {
            var style = {
                maxWidth: this.width + 'px'
            };

            if (this.type) {
                style.position = this.type;
                style.zIndex = this.index;
            }

            return style;
        },
        classs: function classs() {
            return ['' + prefixCls];
        }
    }
};

/***/ }),

/***/ "hMV6":
/*!****************************************************************************************!*\
  !*** ./components/row/row.css?vue&type=style&index=0&id=1bf7ea3a&lang=css&scoped=true ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_row_css_vue_type_style_index_0_id_1bf7ea3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./row.css?vue&type=style&index=0&id=1bf7ea3a&lang=css&scoped=true */ "ik5G");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_row_css_vue_type_style_index_0_id_1bf7ea3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_row_css_vue_type_style_index_0_id_1bf7ea3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_row_css_vue_type_style_index_0_id_1bf7ea3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_row_css_vue_type_style_index_0_id_1bf7ea3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_row_css_vue_type_style_index_0_id_1bf7ea3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "hOpc":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/button/button.vue?vue&type=template&id=5350d404&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
    "button",
    {
      staticClass: "t-btn",
      class: _vm.classs,
      style: _vm.style,
      attrs: { disabled: _vm.disabled, type: _vm.htmlType },
      on: { click: _vm.handleClick }
    },
    [_c("span", [_vm._t("default")], 2)]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "hiYR":
/*!*************************************************************!*\
  !*** ./components/layout/sider.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./sider.vue?vue&type=script&lang=js */ "Ka0m");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "iWaq":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&id=772f9e9b&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&id=772f9e9b&lang=css&scoped=true */ "sJyR");

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

/***/ "ik5G":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/row/row.css?vue&type=style&index=0&id=1bf7ea3a&lang=css&scoped=true ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./row.css?vue&type=style&index=0&id=1bf7ea3a&lang=css&scoped=true */ "LrLU");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("61c90fde", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "jZhU":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/table/table.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(/*! ../util/assist.js */ "I05C");

var prefixCls = 'v-table'; //
//
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
    name: prefixCls,
    props: {
        width: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    },
    computed: {
        classs: function classs() {
            var classs = ['' + prefixCls];

            return classs;
        }
    },
    methods: {
        widthHandle: function widthHandle() {
            var componentNode = (0, _assist.findComponentDownward)(this, 'v-table-tr');
            var width = this.width;
            var length = componentNode.$el.children.length;

            if (length && !width.length) {
                var num = 100 / length;
                for (var i = 0; i < length; i++) {
                    this.$set(this.width, i, '' + num);
                }
            };
        }
    },
    mounted: function mounted() {
        if (!this.width.length) this.widthHandle();
    }
};

/***/ }),

/***/ "js1h":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/layout.vue?vue&type=template&id=128725f8&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
    { class: _vm.classs, style: _vm.style },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "kIj4":
/*!************************************!*\
  !*** ./components/input/input.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!./input.css */ "KmMT");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("046a3aaa", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "kLDB":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/table/table-head.vue?vue&type=template&id=772f9e9b&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("thead", { class: _vm.classs }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "ku9v":
/*!***********************************************************************************!*\
  !*** ./components/table/table-head.vue?vue&type=template&id=772f9e9b&scoped=true ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_template_id_772f9e9b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./table-head.vue?vue&type=template&id=772f9e9b&scoped=true */ "kLDB");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_template_id_772f9e9b_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_table_head_vue_vue_type_template_id_772f9e9b_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "lD88":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/sider.vue?vue&type=style&index=0&id=26701691&lang=css&scoped=true ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./sider.vue?vue&type=style&index=0&id=26701691&lang=css&scoped=true */ "da/a");

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

/***/ "m5Rx":
/*!********************************!*\
  !*** ./components/row/row.vue ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _row_vue_vue_type_template_id_1bf7ea3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./row.vue?vue&type=template&id=1bf7ea3a&scoped=true */ "JekO");
/* harmony import */ var _row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./row.vue?vue&type=script&lang=js */ "TX5u");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _row_css_vue_type_style_index_0_id_1bf7ea3a_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./row.css?vue&type=style&index=0&id=1bf7ea3a&lang=css&scoped=true */ "hMV6");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _row_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _row_vue_vue_type_template_id_1bf7ea3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _row_vue_vue_type_template_id_1bf7ea3a_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1bf7ea3a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/row/row.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "mZ6y":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/menu/menu-item.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
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

var profixCls = 'v-menu-item';

exports.default = {
    name: profixCls,
    computed: {
        classs: function classs() {
            var classs = ['' + profixCls];

            return classs;
        }
    }
};

/***/ }),

/***/ "nAam":
/*!*****************************************!*\
  !*** ./components/table/table-head.vue ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _table_head_vue_vue_type_template_id_772f9e9b_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./table-head.vue?vue&type=template&id=772f9e9b&scoped=true */ "ku9v");
/* harmony import */ var _table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-head.vue?vue&type=script&lang=js */ "URlm");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _table_css_vue_type_style_index_0_id_772f9e9b_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.css?vue&type=style&index=0&id=772f9e9b&lang=css&scoped=true */ "FNw8");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _table_head_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _table_head_vue_vue_type_template_id_772f9e9b_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _table_head_vue_vue_type_template_id_772f9e9b_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "772f9e9b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/table/table-head.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "nwYo":
/*!***************************************************************!*\
  !*** ./components/layout/content.vue?vue&type=script&lang=js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./content.vue?vue&type=script&lang=js */ "0iu8");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_content_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "okHz":
/*!************************************!*\
  !*** ./components/layout/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sider = exports.layout = exports.footer = exports.content = exports.header = undefined;

var _header = __webpack_require__(/*! ./header.vue */ "14P4");

var _header2 = _interopRequireDefault(_header);

var _content = __webpack_require__(/*! ./content.vue */ "8DyF");

var _content2 = _interopRequireDefault(_content);

var _footer = __webpack_require__(/*! ./footer.vue */ "4WJF");

var _footer2 = _interopRequireDefault(_footer);

var _layout = __webpack_require__(/*! ./layout.vue */ "J3GE");

var _layout2 = _interopRequireDefault(_layout);

var _sider = __webpack_require__(/*! ./sider.vue */ "zMrb");

var _sider2 = _interopRequireDefault(_sider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.header = _header2.default;
exports.content = _content2.default;
exports.footer = _footer2.default;
exports.layout = _layout2.default;
exports.sider = _sider2.default;

/***/ }),

/***/ "p08+":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&id=25bab43c&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-table[data-v-25bab43c]{\n    width: 100%;\n    border: 1px solid #e9eaec;\n}\n.v-table-head[data-v-25bab43c]{\n    background: #f8f8f9;\n    font-weight: bold;\n    font-size: 14px;\n}\n.v-table-head tr[data-v-25bab43c]{\n    border-bottom: 1px solid #e9eaec;\n}\n.v-table-head tr th[data-v-25bab43c]{\n    padding: 15px 0;\n}\n.v-table-body[data-v-25bab43c]{\n    font-size: 12px;\n    text-align: center;\n}\n.v-table-body tr[data-v-25bab43c]{\n    border-bottom: 1px solid #e9eaec;\n}\n.v-table-body tr td[data-v-25bab43c]{\n    padding: 15px 0;\n}", ""]);

// exports


/***/ }),

/***/ "pLg8":
/*!********************************************************************************************!*\
  !*** ./components/table/table.css?vue&type=style&index=0&id=7a748cf9&lang=css&scoped=true ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_7a748cf9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&id=7a748cf9&lang=css&scoped=true */ "GsFj");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_7a748cf9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_7a748cf9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_7a748cf9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_7a748cf9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_table_css_vue_type_style_index_0_id_7a748cf9_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "qY6+":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&id=1f2d595d&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-table[data-v-1f2d595d]{\n    width: 100%;\n    border: 1px solid #e9eaec;\n}\n.v-table-head[data-v-1f2d595d]{\n    background: #f8f8f9;\n    font-weight: bold;\n    font-size: 14px;\n}\n.v-table-head tr[data-v-1f2d595d]{\n    border-bottom: 1px solid #e9eaec;\n}\n.v-table-head tr th[data-v-1f2d595d]{\n    padding: 15px 0;\n}\n.v-table-body[data-v-1f2d595d]{\n    font-size: 12px;\n    text-align: center;\n}\n.v-table-body tr[data-v-1f2d595d]{\n    border-bottom: 1px solid #e9eaec;\n}\n.v-table-body tr td[data-v-1f2d595d]{\n    padding: 15px 0;\n}", ""]);

// exports


/***/ }),

/***/ "qgAz":
/*!********************************************************************************!*\
  !*** ./components/layout/header.vue?vue&type=template&id=583deae7&scoped=true ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_583deae7_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./header.vue?vue&type=template&id=583deae7&scoped=true */ "6ZDO");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_583deae7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_header_vue_vue_type_template_id_583deae7_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "rq9K":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&id=772f9e9b&lang=css&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./table.css?vue&type=style&index=0&id=772f9e9b&lang=css&scoped=true */ "iWaq");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("37b572a0", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "sFOJ":
/*!**************************************************************!*\
  !*** ./components/button/button.vue?vue&type=script&lang=js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./button.vue?vue&type=script&lang=js */ "fh0H");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "sJyR":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/table/table.css?vue&type=style&index=0&id=772f9e9b&lang=css&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-table[data-v-772f9e9b]{\n    width: 100%;\n    border: 1px solid #e9eaec;\n}\n.v-table-head[data-v-772f9e9b]{\n    background: #f8f8f9;\n    font-weight: bold;\n    font-size: 14px;\n}\n.v-table-head tr[data-v-772f9e9b]{\n    border-bottom: 1px solid #e9eaec;\n}\n.v-table-head tr th[data-v-772f9e9b]{\n    padding: 15px 0;\n}\n.v-table-body[data-v-772f9e9b]{\n    font-size: 12px;\n    text-align: center;\n}\n.v-table-body tr[data-v-772f9e9b]{\n    border-bottom: 1px solid #e9eaec;\n}\n.v-table-body tr td[data-v-772f9e9b]{\n    padding: 15px 0;\n}", ""]);

// exports


/***/ }),

/***/ "sUt5":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/sider.vue?vue&type=style&index=0&id=26701691&lang=css&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./sider.vue?vue&type=style&index=0&id=26701691&lang=css&scoped=true */ "lD88");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader/lib/addStylesClient.js */ "XPSw").default
var update = add("184ef20e", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "slfG":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/content.vue?vue&type=style&index=0&id=5459268f&lang=css&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./content.vue?vue&type=style&index=0&id=5459268f&lang=css&scoped=true */ "12Am");

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

/***/ "u3v6":
/*!********************************************************************!*\
  !*** ./components/layout/footer.vue?vue&type=template&id=370b86f5 ***!
  \********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_370b86f5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./footer.vue?vue&type=template&id=370b86f5 */ "eEd1");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_370b86f5__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_footer_vue_vue_type_template_id_370b86f5__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "uVl7":
/*!*********************************************************************************!*\
  !*** ./components/menu/menu-item.vue?vue&type=template&id=29ef778c&scoped=true ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_template_id_29ef778c_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./menu-item.vue?vue&type=template&id=29ef778c&scoped=true */ "FYZP");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_template_id_29ef778c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_menu_item_vue_vue_type_template_id_29ef778c_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "vbul":
/*!***********************************!*\
  !*** ./components/table/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tr = exports.tbody = exports.thead = exports.table = undefined;

var _table = __webpack_require__(/*! ./table.vue */ "gvI0");

var _table2 = _interopRequireDefault(_table);

var _tableHead = __webpack_require__(/*! ./table-head.vue */ "nAam");

var _tableHead2 = _interopRequireDefault(_tableHead);

var _tableBody = __webpack_require__(/*! ./table-body.vue */ "S+LG");

var _tableBody2 = _interopRequireDefault(_tableBody);

var _tableTr = __webpack_require__(/*! ./table-tr.vue */ "+q3+");

var _tableTr2 = _interopRequireDefault(_tableTr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.table = _table2.default;
exports.thead = _tableHead2.default;
exports.tbody = _tableBody2.default;
exports.tr = _tableTr2.default;

/***/ }),

/***/ "wMjz":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/layout.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//

var prefixCls = 'v-layout';
exports.default = {
    name: prefixCls,
    data: function data() {
        return {
            hasSider: false
        };
    },
    props: {
        top: {
            type: Number,
            default: 0
        },
        bottom: {
            type: Number,
            default: 0
        }
    },
    computed: {
        style: function style() {
            var style = {
                overflow: 'hidden'
            };

            if (this.top) {
                style.paddingTop = this.top + 'px';
            }

            if (this.bottom) {
                style.paddingBottom = this.bottom + 'px';
            }

            return style;
        },
        classs: function classs() {
            return ['' + prefixCls, _defineProperty({}, prefixCls + '-has-sider', this.hasSider)];
        }
    },
    methods: {
        findSider: function findSider() {
            return this.$children.some(function (child) {
                return child.$options.name === 'v-sider';
            });
        }
    },
    mounted: function mounted() {
        this.hasSider = this.findSider();
    }
};

/***/ }),

/***/ "wOIX":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/row/row.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _assist = __webpack_require__(/*! ../util/assist */ "I05C");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//
//

var prefixCls = 'v-row';

exports.default = {
    name: prefixCls,
    props: {
        gutter: {
            type: Number,
            default: 0
        },
        type: {
            type: String,
            default: '',
            validator: function validator(val) {
                return (0, _assist.oneOf)(val, ['', 'flex']);
            }
        },
        justify: {
            type: String,
            default: '',
            validator: function validator(val) {
                return (0, _assist.oneOf)(val, ['', 'start', 'end', 'center', 'space-around', 'space-between']);
            }
        },
        align: {
            type: String,
            default: '',
            validator: function validator(val) {
                return (0, _assist.oneOf)(val, ['', 'top', 'middle', 'bottom']);
            }
        }
    },
    computed: {
        classs: function classs() {
            var _classs;

            var classs = (_classs = {}, _defineProperty(_classs, '' + prefixCls, !this.type), _defineProperty(_classs, prefixCls + '-' + this.type, !!this.type), _defineProperty(_classs, prefixCls + '-flex-' + this.justify, !!this.justify), _defineProperty(_classs, prefixCls + '-flex-' + this.align, !!this.align), _classs);
            return classs;
        },
        styles: function styles() {
            var style = {};
            if (this.gutter !== 0) {
                style = {
                    marginLeft: this.gutter / -2 + 'px',
                    marginRight: this.gutter / -2 + 'px'
                };
            }

            return style;
        }
    },
    methods: {
        updateGutter: function updateGutter(val) {
            var Col = (0, _assist.findComponentDownward)(this, 'v-col');
            var Cols = (0, _assist.findBrothersComponents)(Col, 'v-col', false);
            if (Cols.length) {
                Cols.forEach(function (child) {
                    if (val !== 0) {
                        child.gutter = val;
                    }
                });
            }
        }
    },
    watch: {
        gutter: function gutter(val) {
            this.updateGutter(val);
        }
    }
};

/***/ }),

/***/ "x4Ge":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/table/table-tr.vue?vue&type=template&id=7a748cf9&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("tr", [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "x5Tt":
/*!*******************************************************************************************!*\
  !*** ./components/menu/index.css?vue&type=style&index=0&id=29ef778c&lang=css&scoped=true ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_29ef778c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&id=29ef778c&lang=css&scoped=true */ "N+P7");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_29ef778c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_29ef778c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_29ef778c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_29ef778c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_29ef778c_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "xWml":
/*!********************************************************!*\
  !*** ./components/col/col.vue?vue&type=script&lang=js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./col.vue?vue&type=script&lang=js */ "ghlW");
/* harmony import */ var _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_babel_loader_7_1_4_babel_loader_lib_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_col_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "xqBy":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/layout/layout.vue?vue&type=style&index=0&id=128725f8&lang=css&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/.npminstall/css-loader/0.28.11/css-loader/lib/css-base.js */ "xsKK")(false);
// imports


// module
exports.push([module.i, "\n.v-layout[data-v-128725f8]{\n    display: flex;\n    flex-direction: column;\n    flex: auto;\n}\n.v-layout-has-sider[data-v-128725f8]{\n    flex-direction: row;\n}\n", ""]);

// exports


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

/***/ "y3W3":
/*!*******************************************************************************************!*\
  !*** ./components/menu/index.css?vue&type=style&index=0&id=3ddab256&lang=css&scoped=true ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_3ddab256_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-style-loader/4.1.0/vue-style-loader!../../node_modules/.npminstall/style-loader/0.21.0/style-loader!../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./index.css?vue&type=style&index=0&id=3ddab256&lang=css&scoped=true */ "+t+2");
/* harmony import */ var _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_3ddab256_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_3ddab256_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_3ddab256_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_3ddab256_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_npminstall_vue_style_loader_4_1_0_vue_style_loader_index_js_node_modules_npminstall_style_loader_0_21_0_style_loader_index_js_node_modules_npminstall_css_loader_0_28_11_css_loader_index_js_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_stylePostLoader_js_index_css_vue_type_style_index_0_id_3ddab256_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ylbt":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/style-loader/0.21.0/style-loader!./node_modules/.npminstall/css-loader/0.28.11/css-loader!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./components/col/col.css?vue&type=style&index=0&id=2cef9ef4&lang=stylus&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/.npminstall/css-loader/0.28.11/css-loader!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/stylePostLoader.js!./col.css?vue&type=style&index=0&id=2cef9ef4&lang=stylus&scoped=true */ "bucP");

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

/***/ "z0dI":
/*!********************************************************************************!*\
  !*** ./components/button/button.vue?vue&type=template&id=5350d404&scoped=true ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_5350d404_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./button.vue?vue&type=template&id=5350d404&scoped=true */ "hOpc");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_5350d404_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_index_js_vue_loader_options_button_vue_vue_type_template_id_5350d404_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "zMrb":
/*!*************************************!*\
  !*** ./components/layout/sider.vue ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sider_vue_vue_type_template_id_26701691_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sider.vue?vue&type=template&id=26701691&scoped=true */ "6RWp");
/* harmony import */ var _sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sider.vue?vue&type=script&lang=js */ "hiYR");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _sider_vue_vue_type_style_index_0_id_26701691_lang_css_scoped_true__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sider.vue?vue&type=style&index=0&id=26701691&lang=css&scoped=true */ "ee3b");
/* harmony import */ var _node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib/runtime/componentNormalizer.js */ "btFE");






/* normalize component */

var component = Object(_node_modules_npminstall_vue_loader_15_1_0_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _sider_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  _sider_vue_vue_type_template_id_26701691_scoped_true__WEBPACK_IMPORTED_MODULE_0__["render"],
  _sider_vue_vue_type_template_id_26701691_scoped_true__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "26701691",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "components/layout/sider.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "zNuy":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/.npminstall/babel-loader/7.1.4/babel-loader/lib!./node_modules/.npminstall/vue-loader/15.1.0/vue-loader/lib??vue-loader-options!./components/table/table-tr.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************************************************/
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

var prefixCls = 'v-table-tr';
exports.default = {
    name: prefixCls
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS10ci52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L2luZGV4LmNzcz83NzBkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQudnVlP2Y2ZGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcz9jYzhjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jc3M/ZDUwNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZT8xZDdjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5jc3M/OGU1MSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzPzM1ZWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvdGFibGUvdGFibGUtYm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZT9iZjA1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtdHIudnVlP2U0ZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5jc3M/YWRjOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvaW5kZXguY3NzIiwid2VicGFjazovLy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWhlYWQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQudnVlPzA4MzciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUtc3ViLnZ1ZT85NDMxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtYm9keS52dWU/MGM1OSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcz8yZGFjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC5jc3M/NGE4MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlPzk1MTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcz8wOWNkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzP2Y5M2IiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZT82MzVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LWl0ZW0udnVlPzZkNjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L2luZGV4LmNzcz84MDI3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5jc3M/NmY4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcz81NmI4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzP2UyZjciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS52dWU/ODk4MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wuY3NzPzhlNTIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91dGlsL2Fzc2lzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvbWVudS1zdWIudnVlPzI5NjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L2luZGV4LmNzcz80OGIzIiwid2VicGFjazovLy9jb21wb25lbnRzL21lbnUvbWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9tZW51L21lbnUtZ3JvdXAudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2xheW91dC9zaWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUtaXRlbS52dWU/M2RiYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNzcz8xMmQwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LnZ1ZT8wZWU1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L3Jvdy5jc3M/ZTZiNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvbWVudS1ncm91cC52dWU/OWM5NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jvdy9yb3cuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5jc3M/NmQ4OSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvbWVudS1ncm91cC52dWU/MDcwOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jvdy9yb3cudnVlP2I5Y2UiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWU/YTJhYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9jb250ZW50LnZ1ZT8wY2JiIiwid2VicGFjazovLy9jb21wb25lbnRzL2xheW91dC9mb290ZXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LXN1Yi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/OTJjNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9mb290ZXIudnVlP2EwYWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUtZ3JvdXAudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LWl0ZW0udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtYm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/NTE5ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L3Jvdy52dWU/MGRkZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlP2I2NDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZT82ZTUwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtaGVhZC52dWU/NTU4NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wudnVlPzFmYjIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzPzM3NWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWU/YzMzZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLnZ1ZT82NDdiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5jc3M/MTgwMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvbWVudS9tZW51LXN1Yi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L2luZGV4LmNzcz8zYWEzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5jc3M/MjQ1ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlPzZhMDUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvaW5kZXguY3NzPzQ2MzEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZT8xMTU5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzP2U0ZWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzPzRmMzkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS1ib2R5LnZ1ZT9iODJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGVyLnZ1ZT8xOGY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci52dWU/ZjczMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvaW5kZXguY3NzP2ZlYjkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlPzg4MGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUudnVlP2EzYzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlPzkzZmUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jb2wvY29sLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQudnVlPzI5NzMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L2luZGV4LmNzcz8xMzJiIiwid2VicGFjazovLy9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L3Jvdy5jc3M/MzVlZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udnVlPzg1OTAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlPzUwODciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/ZjFkZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jvdy9yb3cuY3NzPzAyMWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvdGFibGUvdGFibGUudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC52dWU/YTIyNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNzcz84OWY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtaGVhZC52dWU/OWMwNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zaWRlci52dWU/NzI0YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jvdy9yb3cudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL21lbnUvbWVudS1pdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWhlYWQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQudnVlP2Y2MWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/MGJjNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcz85NmRjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzPzRiMjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/YzBhNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udnVlP2ZmODEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlP2E5NWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWU/YTNjZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL2xheW91dC9sYXlvdXQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL3Jvdy9yb3cudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtdHIudnVlP2RiNzgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L2luZGV4LmNzcz81Nzc2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC52dWU/ZTdhMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQudnVlPzVhYmIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvaW5kZXguY3NzPzhmMDEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2wvY29sLmNzcz8wYzIyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy90YWJsZS90YWJsZS10ci52dWUiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlZ1ZSIsImV4dGVuZCIsInRlbXBsYXRlIiwiaHRtbCIsImRhdGEiLCJjdXJyZW50VmFsdWUiLCJ2YWx1ZSIsInByb3BzIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJOdW1iZXIiLCJuYW1lIiwiY3VzdG9tQ2xhc3MiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwiQm9vbGVhbiIsInJlYWRvbmx5IiwiYXV0b2ZvY3VzIiwiYXV0b0NvbXBsZXRlIiwic2l6ZSIsImZvcm0iLCJpY29uIiwiaW1hZ2VJY29uIiwibWV0aG9kcyIsInVwZGF0ZVZhbHVlIiwidHJpbSIsImhhbmRsZUJsdXIiLCJldmVudCIsIiRlbWl0IiwiJHJlZnMiLCJpbnB1dCIsImhhbmRsZUZvY3VzIiwiaGFuZGxlSWNvbkNsaWNrIiwiaW5wdXRTZWxlY3QiLCJzZWxlY3QiLCJjcmVhdGVkIiwiJG9uIiwid2F0Y2giLCJuZXdWIiwicmVxdWlyZSIsImNvbXBvbmVudHMiLCJjb2wiLCJyb3ciLCJoZWFkZXIiLCJjb250ZW50IiwiZm9vdGVyIiwibGF5b3V0Iiwic2lkZXIiLCJidXR0b24iLCJ0YWJsZSIsInRoZWFkIiwidGJvZHkiLCJ0ciIsIm1lbnUiLCJtZW51SXRlbSIsIm1lbnVHcm91cCIsIm1lbnVTdWIiLCJpbnN0YWxsIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJ3aW5kb3ciLCJDb2wiLCJvbmVPZiIsImZpbmRDb21wb25lbnRVcHdhcmQiLCJmaW5kQ29tcG9uZW50RG93bndhcmQiLCJmaW5kQnJvdGhlcnNDb21wb25lbnRzIiwiZmluZENvbXBvbmVudHNEb3dud2FyZCIsInZhbHVlTGlzdCIsImkiLCJsZW5ndGgiLCJjb250ZXh0IiwiY29tcG9uZW50TmFtZSIsImNvbXBvbmVudE5hbWVzIiwicGFyZW50IiwiJHBhcmVudCIsIiRvcHRpb25zIiwiaW5kZXhPZiIsImNoaWxkcmVucyIsIiRjaGlsZHJlbiIsImNoaWxkcmVuIiwiY2hpbGQiLCJleGNlcHRNZSIsInJlcyIsImZpbHRlciIsIml0ZW0iLCJpbmRleCIsImZpbmRJbmRleCIsIl91aWQiLCJzcGxpY2UiLCJyZWR1Y2UiLCJwdXNoIiwiZm91bmRDaGlsZHMiLCJjb25jYXQiLCJSb3ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlE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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxWEE7O0FBRUE7O0FBRUE7QUFDQTs7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFpQkE7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7a0JBQ0E7QUFDQTtBQURBLEMiLCJmaWxlIjoibGFubGFuVUkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiOHlJYlwiKTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFibGUtdHIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdhNzQ4Y2Y5JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFibGUtdHIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlLXRyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdhNzQ4Y2Y5Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdhNzQ4Y2Y5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3YTc0OGNmOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3YTc0OGNmOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGFibGUtdHIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdhNzQ4Y2Y5JnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2E3NDhjZjknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdGFibGUvdGFibGUtdHIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2RkYWIyNTYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwZWFjMjE4YVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZGRhYjI1NiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNkZGFiMjU2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NvbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmNlZjllZjQmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jb2wuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmNlZjllZjQmbGFuZz1zdHlsdXMmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmNlZjllZjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJjZWY5ZWY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJjZWY5ZWY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jb2wudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjZWY5ZWY0JnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmNlZjllZjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvY29sL2NvbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiAgOmNsYXNzPVwiY2xhc3NzXCIgOnN0eWxlPVwic3R5bGVcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9J2Nzcycgc2NvcGVkPlxuICAgIC52LWNvbnRlbnR7XG4gICAgICAgIGZsZXg6IGF1dG87XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ3YtY29udGVudCc7XG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIG5hbWU6IHByZWZpeENscyxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgc3R5bGU6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NzOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4Q2xzfWBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1jb250ZW50W2RhdGEtdi01NDU5MjY4Zl17XFxuICAgIGZsZXg6IGF1dG87XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaGVhZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ODNkZWFlNyZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2hlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODNkZWFlNyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1ODNkZWFlN1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTgzZGVhZTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTgzZGVhZTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2hlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTgzZGVhZTcmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ODNkZWFlNycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YTc0OGNmOSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2E3NDhjZjkmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2E3NDhjZjkmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM1MGQ0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vYnV0dG9uLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUzNTBkNDA0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIiLCJpbXBvcnQgJy4vaW5wdXQuY3NzJztcbmltcG9ydCBodG1sIGZyb20gJy4vaW5wdXQuaHRtbCc7XG5cbm1vZHVsZS5leHBvcnRzID0gVnVlLmV4dGVuZCh7XG4gICAgdGVtcGxhdGU6IGh0bWwsXG4gICAgZGF0YTogZnVuY3Rpb24oKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgY3VycmVudFZhbHVlOiB0aGlzLnZhbHVlXG4gICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAndGV4dCdcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgICAgY3VzdG9tQ2xhc3M6ICcnLFxuICAgICAgICBwbGFjZWhvbGRlcjogU3RyaW5nLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gICAgICAgIGF1dG9mb2N1czogQm9vbGVhbixcbiAgICAgICAgYXV0b0NvbXBsZXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnb2ZmJ1xuICAgICAgICB9LFxuICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnc21hbGwnXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm06IFN0cmluZyxcbiAgICAgICAgaWNvbjogU3RyaW5nLFxuICAgICAgICBpbWFnZUljb246IEJvb2xlYW5cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcblxuICAgICAgICB1cGRhdGVWYWx1ZTogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSB2YWx1ZS50cmltKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlQmx1cjogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicsIGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJpbnB1dFwiLCB0aGlzLiRyZWZzLmlucHV0LnZhbHVlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVGb2N1czogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJywgZXZlbnQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZUljb25DbGljazogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJpY29uLWNsaWNrXCIsIGV2ZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbnB1dFNlbGVjdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB0aGlzLiRyZWZzLmlucHV0LnNlbGVjdCgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy4kb24oJ2lucHV0U2VsZWN0JywgdGhpcy5pbnB1dFNlbGVjdCk7XG4gICAgfSxcbiAgICB3YXRjaDp7XG4gICAgICAgIGN1cnJlbnRWYWx1ZTogZnVuY3Rpb24obmV3Vil7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgbmV3Vik7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBuZXdWKTtcbiAgICAgICAgfVxuICAgIH1cbn0pOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZm9vdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzBiODZmNVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Zvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vZm9vdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzM3MGI4NmY1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzM3MGI4NmY1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mb290ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM3MGI4NmY1XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzcwYjg2ZjUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODNkZWFlNyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4M2RlYWU3Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODNkZWFlNyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2RkYWIyNTYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNkZGFiMjU2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNkZGFiMjU2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vYnV0dG9uLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUzNTBkNDA0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYjljMzZiOTRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vYnV0dG9uLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUzNTBkNDA0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vYnV0dG9uLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUzNTBkNDA0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8dGVtcGxhdGU+XG4gICAgPHRib2R5IDpjbGFzcz1cImNsYXNzc1wiPjxzbG90Pjwvc2xvdD48L3Rib2R5PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNyYz0nLi90YWJsZS5jc3MnIGxhbmc9XCJjc3NcIiBzY29wZWQ+PC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBjb25zdCBwcmVmaXhDbHMgPSAndi10YWJsZS1ib2R5JztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IHByZWZpeENscyxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgY2xhc3NzOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4Q2xzfWBcbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBjbGFzczogX3ZtLmNsYXNzcyB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJ2LWhlYWRlci13aWR0aFwiLCBzdHlsZTogX3ZtLnN0eWxlcyB9LFxuICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLXRyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLXRyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0NTkyNjhmJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0NTkyNjhmJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjU0NTkyNjhmXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NDU5MjY4ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NDU5MjY4ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29udGVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQ1OTI2OGYmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1NDU5MjY4ZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMTQ0NGMzOCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMTQ0NGMzOCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwiaW1wb3J0IGNvbCBmcm9tICcuL2NvbC9pbmRleC5qcyc7XG5pbXBvcnQgcm93IGZyb20gJy4vcm93L2luZGV4LmpzJztcbmltcG9ydCB7IGhlYWRlcixjb250ZW50LGZvb3RlcixsYXlvdXQsc2lkZXIgfSBmcm9tICcuL2xheW91dC9pbmRleC5qcyc7XG5cbmltcG9ydCB7IHRhYmxlLHRoZWFkLHRib2R5LHRyIH0gZnJvbSAnLi90YWJsZS9pbmRleC5qcyc7XG5cbmltcG9ydCB7IG1lbnUsIG1lbnVJdGVtLCBtZW51R3JvdXAsIG1lbnVTdWIgfSBmcm9tICcuL21lbnUvaW5kZXguanMnO1xuXG5cbmltcG9ydCBidXR0b24gZnJvbSAnLi9idXR0b24vaW5kZXguanMnO1xudmFyIGlucHV0ID0gcmVxdWlyZShcIi4vaW5wdXQvaW5wdXQuanNcIik7XG5cblxuLy8gdmFyIE1vZGFsID0gcmVxdWlyZShcIi4vbW9kYWwvbW9kYWwuanNcIik7XG4vLyB2YXIgTm90aWNlID0gcmVxdWlyZShcIi4vbm90aWNlL25vdGlmaWNhdGlvbi5qc1wiKTtcbi8vIHZhciBNZXNzYWdlID0gcmVxdWlyZShcIi4vbWVzc2FnZS9pbmRleC5qc1wiKTtcbi8vXG5cbi8vIHZhciBTZWxlY3QgPSByZXF1aXJlKFwiLi9zZWxlY3Qvc2VsZWN0LmpzXCIpO1xuLy8gdmFyIE9wdGlvbiA9IHJlcXVpcmUoXCIuL3NlbGVjdC9vcHRpb24uanNcIik7XG5cblxuLy8gdmFyIFRvb2x0aXAgPSByZXF1aXJlKFwiLi90b29sdGlwL3Rvb2x0aXAuanNcIik7XG4vLyB2YXIgQ2hlY2tib3ggPSByZXF1aXJlKFwiLi9jaGVja2JveC9jaGVja2JveC5qc1wiKTtcbi8vIHZhciBSYWRpbyA9IHJlcXVpcmUoXCIuL3JhZGlvL3JhZGlvLmpzXCIpO1xuLy8gdmFyIFBvcG92ZXIgPSByZXF1aXJlKFwiLi9wb3BvdmVyL3BvcG92ZXIuanNcIik7XG4vLyB2YXIgUG9wb3ZlckRpcmVjdGl2ZSA9IHJlcXVpcmUoXCIuL3BvcG92ZXIvZGlyZWN0aXZlLmpzXCIpO1xuLy8gdmFyIERyb3Bkb3duID0gcmVxdWlyZShcIi4vZHJvcGRvd24vZHJvcGRvd24uanNcIik7XG4vLyB2YXIgRHJvcGRvd25NZW51ID0gcmVxdWlyZShcIi4vZHJvcGRvd24vZHJvcGRvd24tbWVudS5qc1wiKTtcbi8vIHZhciBEcm9wZG93bkl0ZW0gPSByZXF1aXJlKFwiLi9kcm9wZG93bi9kcm9wZG93bi1pdGVtLmpzXCIpO1xuLy8gLy9cbi8vIHZhciBQYWdpbmF0aW9uID0gcmVxdWlyZShcIi4vcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmpzXCIpO1xuXG4vLyB2YXIgSW5maW5pdGVTY3JvbGwgPSByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL2luZmluaXRlLXNjcm9sbC5qc1wiKTtcbi8vIHZhciBMYXp5bG9hZCA9IHJlcXVpcmUoXCIuL2RpcmVjdGl2ZXMvaW1nLWxhenlsb2FkLmpzXCIpO1xuXG4vLyB2YXIgQ2xvY2sgPSByZXF1aXJlKFwiLi9kYXRldGltZS9waWNrZXIvdGltZS1waWNrZXIuanNcIik7XG4vLyB2YXIgRGF0ZSA9IHJlcXVpcmUoXCIuL2RhdGV0aW1lL3BpY2tlci9kYXRlLXBpY2tlci5qc1wiKTtcblxuLy8gdmFyIFZ1ZUF3ZXNvbWVTd2lwZXIgPSByZXF1aXJlKFwiLi9zd2lwcmUvdnVlLWF3ZXNvbWUtc3dpcGVyLmpzXCIpO1xuXG5sZXQgY29tcG9uZW50cyA9IHtcbiAgICBjb2wsXG4gICAgcm93LFxuICAgIFxuICAgIGhlYWRlcixcbiAgICBjb250ZW50LFxuICAgIGZvb3RlcixcbiAgICBsYXlvdXQsXG4gICAgc2lkZXIsXG5cbiAgICBidXR0b24sXG4gICAgaW5wdXQsXG5cbiAgICB0YWJsZSxcbiAgICB0aGVhZCxcbiAgICB0Ym9keSxcbiAgICB0cixcblxuICAgIG1lbnUsXG4gICAgbWVudUl0ZW0sXG4gICAgbWVudUdyb3VwLFxuICAgIG1lbnVTdWJcbn1cblxuXG5cbmZ1bmN0aW9uIGluc3RhbGwoVnVlKXtcbiAgICBPYmplY3Qua2V5cyhjb21wb25lbnRzKS5mb3JFYWNoKHZhbHVlPT57XG4gICAgICAgIFZ1ZS5jb21wb25lbnQoJ3QtJyt2YWx1ZSwgY29tcG9uZW50c1t2YWx1ZV0pO1xuICAgIH0pO1xuXG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1yb3cnLCBjb21wb25lbnRzWydyb3cnXSk7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1jb2wnLCBjb2wpO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3QtaW5wdXQnLCBJbnB1dCk7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1zZWxlY3QnLCBTZWxlY3QpO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3Qtb3B0aW9uJywgT3B0aW9uKTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LWJ1dHRvbicsIEJ1dHRvbik7XG5cbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LXRvb2x0aXAnLCBUb29sdGlwKTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LWNoZWNrYm94JywgQ2hlY2tib3gpO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3QtcmFkaW8nLCBSYWRpbyk7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1wb3BvdmVyJywgUG9wb3Zlcik7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1kcm9wZG93bicsIERyb3Bkb3duKTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LWRyb3Bkb3duLW1lbnUnLCBEcm9wZG93bk1lbnUpO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3QtZHJvcGRvd24taXRlbScsIERyb3Bkb3duSXRlbSk7XG5cbiAgICAvLyBWdWUuY29tcG9uZW50KCdtb2RhbCcsIE1vZGFsKTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCdub3RpY2UnLCBOb3RpY2UpO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ21lc3NhZ2UnLCBNZXNzYWdlKTtcblxuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3QtcGFnaW5hdGlvbicsIFBhZ2luYXRpb24pO1xuXG4gICAgLy8gVnVlLnByb3RvdHlwZS4kbm90aWZ5ID0gTm90aWNlO1xuICAgIC8vIFZ1ZS5wcm90b3R5cGUuJG1lc3NhZ2UgPSBNZXNzYWdlO1xuXG4gICAgLy8gVnVlLmRpcmVjdGl2ZSgnSW5maW5pdGVTY3JvbGwnLCBJbmZpbml0ZVNjcm9sbCk7XG4gICAgLy8gVnVlLmRpcmVjdGl2ZSgnbGF6eScsIExhenlsb2FkKTtcbiAgICAvLyBWdWUuZGlyZWN0aXZlKCdwb3BvdmVyJywgUG9wb3ZlckRpcmVjdGl2ZSk7XG5cbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LWNsb2NrLXBpY2tlcicsIENsb2NrKTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LWRhdGUtcGlja2VyJywgRGF0ZSk7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgnc3dpcGVyJywgVnVlQXdlc29tZVN3aXBlci5zd2lwZXIpO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3N3aXBlclNsaWRlJywgVnVlQXdlc29tZVN3aXBlci5zd2lwZXJTbGlkZSk7XG59XG5cblxuaWYod2luZG93LlZ1ZSl7XG4gICAgLy8gd2luZG93LmluZmluaXRlU2Nyb2xsID0gSW5maW5pdGVTY3JvbGw7XG4gICAgaW5zdGFsbChWdWUpO1xufVxuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1tZW51W2RhdGEtdi0zZGRhYjI1Nl17XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi52LW1lbnUtaXRlbS1zdWJbZGF0YS12LTNkZGFiMjU2XXtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnYtbWVudS1ob3Jpem9udGFsIC52LW1lbnUtaXRlbS1zdWIuYWN0aXZlW2RhdGEtdi0zZGRhYjI1Nl17XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkY3NzNEO1xcbiAgICBjb2xvcjogI0ZGNzczRDtcXG59XFxuLnYtbWVudS1ob3Jpem9udGFsW2RhdGEtdi0zZGRhYjI1Nl17XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxufVxcbi52LW1lbnUtaG9yaXpvbnRhbFtkYXRhLXYtM2RkYWIyNTZdOjphZnRlcntcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiAjZGRkZWUxO1xcbn1cXG4udi1tZW51LWhvcml6b250YWwgLnYtbWVudS1pdGVtLXN1YltkYXRhLXYtM2RkYWIyNTZde1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuLnYtbWVudS12ZXJ0aWNhbFtkYXRhLXYtM2RkYWIyNTZde1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udi1tZW51LXZlcnRpY2FsIC52LW1lbnUtaXRlbS1zdWJbZGF0YS12LTNkZGFiMjU2XXtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG59XFxuLnYtbWVudS12ZXJ0aWNhbFtkYXRhLXYtM2RkYWIyNTZdOjphZnRlcntcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZDogI2RkZGVlMTtcXG59XFxuLnYtbWVudS12ZXJ0aWNhbCAudi1tZW51LWl0ZW0tc3ViLmFjdGl2ZVtkYXRhLXYtM2RkYWIyNTZde1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjRkY3NzNEO1xcbiAgICBjb2xvcjogI0ZGNzczRDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiPHRlbXBsYXRlPlxuICAgIDx0aGVhZCA6Y2xhc3M9XCJjbGFzc3NcIj48c2xvdD48L3Nsb3Q+PC90aGVhZD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzcmM9Jy4vdGFibGUuY3NzJyBsYW5nPVwiY3NzXCIgc2NvcGVkPjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ3YtdGFibGUtaGVhZCc7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBwcmVmaXhDbHMsXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc3MgPSBbXG4gICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeENsc31gXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgbWVudSBmcm9tICcuL21lbnUudnVlJztcbmltcG9ydCBtZW51SXRlbSBmcm9tICcuL21lbnUtaXRlbS52dWUnO1xuaW1wb3J0IG1lbnVTdWIgZnJvbSAnLi9tZW51LXN1Yi52dWUnO1xuaW1wb3J0IG1lbnVHcm91cCBmcm9tICcuL21lbnUtZ3JvdXAudnVlJztcblxuZXhwb3J0IHsgbWVudSwgbWVudUl0ZW0sIG1lbnVTdWIsIG1lbnVHcm91cCB9IiwiaW1wb3J0IENvbCBmcm9tICcuL2NvbC52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBDb2w7IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyODcyNWY4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzA2NzRmNDNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyODcyNWY4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyODcyNWY4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udC1pbnB1dHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLnQtaW5wdXQgLnQtaW5wdXRfaWNvbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4udC1pbnB1dCAudC1pbnB1dF9pY29uLmltYWdle1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FRQUFBQVp4TFo3QUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQW1KTFIwUUEvNGVQekw4QUFBQUhkRWxOUlFmaEFRUVJPQTVPRFlUYkFBQUFLa2xFUVZRSTEyT2MyY0JRejRBQWpjeGJEdmd5TWpqQXVPa056QXdNY0tIRzlBYTR5cGtOTTZFY0FJVHBDeWVXRzFhckFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREUzTFRBeExUQTBWREUzT2pVMk9qRTBLekE0T2pBd2ZSZWFHUUFBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeE55MHdNUzB3TkZReE56bzFOam94TkNzd09Eb3dNQXhLSXFVQUFBQUFTVVZPUks1Q1lJST0pIG5vLXJlcGVhdCBjZW50ZXI7XFxufVxcblxcbi50LWlucHV0X2ljb24gKyAudC1pbnB1dF9vcml7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7XFxufVxcblxcbi50LWlucHV0X29yaXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzY2NjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YxRURFRDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4udC1pbnB1dF9vcmk6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODQ5MkE2O1xcbn1cXG5cXG4udC1pbnB1dF9vcmk6Zm9jdXMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY3NDM4O1xcbn1cXG5cXG4udC1pbnB1dC5kaXNhYmxlZCAudC1pbnB1dF9vcml7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDI0MiwgMjQ3KTtcXG4gICAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjExLCAyMjAsIDIzMCk7XFxufVxcblxcblxcbi50LWlucHV0X2xhcmdle1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi50LWlucHV0X2xhcmdlIC50LWlucHV0X29yaXtcXG4gICAgaGVpZ2h0OiA0MnB4O1xcbn1cXG5cXG4udC1pbnB1dF9zbWFsbHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udC1pbnB1dF9zbWFsbCAudC1pbnB1dF9vcml7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuLnQtaW5wdXRfc21hbGwgLnQtaW5wdXRfaWNvbntcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxufVxcbi50LWlucHV0X3NtYWxsIC50LWlucHV0X2ljb24gKyAudC1pbnB1dF9vcml7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi50LWlucHV0X3RpbnkgLnQtaW5wdXRfb3Jpe1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnQtaW5wdXRfdGlueSAudC1pbnB1dF9pY29ue1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjZweDtcXG59XFxuLnQtaW5wdXRfdGlueSAudC1pbnB1dF9pY29uICsgLnQtaW5wdXRfb3Jpe1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibGlcIixcbiAgICB7IGNsYXNzOiBfdm0uY2xhc3NzLCBzdHlsZTogX3ZtLnN0eWxlLCBvbjogeyBjbGljazogX3ZtLml0ZW1IYW5kbGUgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IFtfdm0ucHJvZml4Q2xzICsgXCItdGl0bGVcIl0gfSwgW192bS5fdChcInRpdGxlXCIpXSwgMiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRib2R5XCIsIHsgY2xhc3M6IF92bS5jbGFzc3MgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1YmFiNDNjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1YmFiNDNjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9jb2wuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmNlZjllZjQmbGFuZz1zdHlsdXMmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1oZWFkZXJbZGF0YS12LTU4M2RlYWU3XXtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi52LWhlYWRlci13aWR0aFtkYXRhLXYtNTgzZGVhZTdde1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM1MGQ0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2J1dHRvbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MzUwZDQwNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM1MGQ0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzJmOWU5YiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzJmOWU5YiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGNsYXNzOiBfdm0uY2xhc3NzIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMTQ0NGMzOCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQwZGJiNDgwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWExNDQ0YzM4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTE0NDRjMzgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LW1lbnVbZGF0YS12LTllYTI1NTUyXXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnYtbWVudS1pdGVtLXN1YltkYXRhLXYtOWVhMjU1NTJde1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udi1tZW51LWhvcml6b250YWwgLnYtbWVudS1pdGVtLXN1Yi5hY3RpdmVbZGF0YS12LTllYTI1NTUyXXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRjc3M0Q7XFxuICAgIGNvbG9yOiAjRkY3NzNEO1xcbn1cXG4udi1tZW51LWhvcml6b250YWxbZGF0YS12LTllYTI1NTUyXXtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG59XFxuLnYtbWVudS1ob3Jpem9udGFsW2RhdGEtdi05ZWEyNTU1Ml06OmFmdGVye1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQ6ICNkZGRlZTE7XFxufVxcbi52LW1lbnUtaG9yaXpvbnRhbCAudi1tZW51LWl0ZW0tc3ViW2RhdGEtdi05ZWEyNTU1Ml17XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG4udi1tZW51LXZlcnRpY2FsW2RhdGEtdi05ZWEyNTU1Ml17XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi52LW1lbnUtdmVydGljYWwgLnYtbWVudS1pdGVtLXN1YltkYXRhLXYtOWVhMjU1NTJde1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbn1cXG4udi1tZW51LXZlcnRpY2FsW2RhdGEtdi05ZWEyNTU1Ml06OmFmdGVye1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiAjZGRkZWUxO1xcbn1cXG4udi1tZW51LXZlcnRpY2FsIC52LW1lbnUtaXRlbS1zdWIuYWN0aXZlW2RhdGEtdi05ZWEyNTU1Ml17XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNGRjc3M0Q7XFxuICAgIGNvbG9yOiAjRkY3NzNEO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YTc0OGNmOSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjFmMGY5MTM0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdhNzQ4Y2Y5Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2E3NDhjZjkmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjViYWI0M2MmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1YmFiNDNjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1YmFiNDNjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2NvbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yY2VmOWVmNCZsYW5nPXN0eWx1cyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjRjZTBlYmIwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2NvbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yY2VmOWVmNCZsYW5nPXN0eWx1cyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2NvbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yY2VmOWVmNCZsYW5nPXN0eWx1cyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IGJ1dHRvbiBmcm9tICcuL2J1dHRvbi52dWUnO1xuZXhwb3J0IGRlZmF1bHQgYnV0dG9uOyIsIi8vIOWIpOaWreWPguaVsOaYr+WQpuaYr+WFtuS4reS5i+S4gFxuZXhwb3J0IGZ1bmN0aW9uIG9uZU9mKHZhbHVlLHZhbHVlTGlzdCl7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZUxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHZhbHVlID09PSB2YWx1ZUxpc3RbaV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuLy8g5a+75om+54i257qn57uE5Lu2XG5leHBvcnQgZnVuY3Rpb24gZmluZENvbXBvbmVudFVwd2FyZChjb250ZXh0LCBjb21wb25lbnROYW1lLCBjb21wb25lbnROYW1lcyl7XG4gICAgaWYgKHR5cGVvZiBjb21wb25lbnROYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb21wb25lbnROYW1lcyA9IFtjb21wb25lbnROYW1lXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnROYW1lcyA9IGNvbXBvbmVudE5hbWU7XG4gICAgfVxuXG4gICAgbGV0IHBhcmVudCA9IGNvbnRleHQuJHBhcmVudDtcbiAgICBsZXQgbmFtZSA9IHBhcmVudC4kb3B0aW9ucy5uYW1lO1xuICAgIFxuICAgIHdoaWxlIChwYXJlbnQgJiYgKCFuYW1lIHx8IGNvbXBvbmVudE5hbWVzLmluZGV4T2YobmFtZSkgPCAwKSkge1xuICAgICAgICBwYXJlbnQgPSBwYXJlbnQuJHBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCkgbmFtZSA9IHBhcmVudC4kb3B0aW9ucy5uYW1lO1xuICAgIH1cbiAgICByZXR1cm4gcGFyZW50O1xufVxuXG4vLyDlr7vmib7lrZDnuqfnu4Tku7ZcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ29tcG9uZW50RG93bndhcmQgKGNvbnRleHQsIGNvbXBvbmVudE5hbWUpIHtcbiAgICBjb25zdCBjaGlsZHJlbnMgPSBjb250ZXh0LiRjaGlsZHJlbjtcbiAgICBsZXQgY2hpbGRyZW4gPSBudWxsO1xuXG4gICAgaWYgKGNoaWxkcmVucy5sZW5ndGgpIHtcbiAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBjaGlsZHJlbnMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBjaGlsZC4kb3B0aW9ucy5uYW1lO1xuICAgICAgICAgICAgaWYgKG5hbWUgPT09IGNvbXBvbmVudE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IGNoaWxkO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IGZpbmRDb21wb25lbnREb3dud2FyZChjaGlsZCwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkcmVuKSBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY2hpbGRyZW47XG59XG5cbi8vIOWvu+aJvuWQjOe6p+e7hOS7tlxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRCcm90aGVyc0NvbXBvbmVudHMgKGNvbnRleHQsIGNvbXBvbmVudE5hbWUsIGV4Y2VwdE1lID0gdHJ1ZSkge1xuICAgIGxldCByZXMgPSBjb250ZXh0LiRwYXJlbnQuJGNoaWxkcmVuLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uJG9wdGlvbnMubmFtZSA9PT0gY29tcG9uZW50TmFtZTtcbiAgICB9KTtcbiAgICBsZXQgaW5kZXggPSByZXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5fdWlkID09PSBjb250ZXh0Ll91aWQpO1xuICAgIGlmIChleGNlcHRNZSkgcmVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuIHJlcztcbn1cblxuLy8gRmluZCBjb21wb25lbnRzIGRvd253YXJkXG5leHBvcnQgZnVuY3Rpb24gZmluZENvbXBvbmVudHNEb3dud2FyZCAoY29udGV4dCwgY29tcG9uZW50TmFtZSkge1xuICAgIHJldHVybiBjb250ZXh0LiRjaGlsZHJlbi5yZWR1Y2UoKGNvbXBvbmVudHMsIGNoaWxkKSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC4kb3B0aW9ucy5uYW1lID09PSBjb21wb25lbnROYW1lKSBjb21wb25lbnRzLnB1c2goY2hpbGQpO1xuICAgICAgICBjb25zdCBmb3VuZENoaWxkcyA9IGZpbmRDb21wb25lbnRzRG93bndhcmQoY2hpbGQsIGNvbXBvbmVudE5hbWUpO1xuICAgICAgICByZXR1cm4gY29tcG9uZW50cy5jb25jYXQoZm91bmRDaGlsZHMpO1xuICAgIH0sIFtdKTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUtc3ViLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUtc3ViLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMTQ0NGMzOCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTE0NDRjMzgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTE0NDRjMzgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8dGVtcGxhdGU+XG4gICAgPHVsIDpjbGFzcz0nY2xhc3NzJyA6c3R5bGU9J3N0eWxlJz5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvdWw+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIiBzcmM9Jy4vaW5kZXguY3NzJyBzY29wZWQ+PC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25lT2YsIGZpbmRDb21wb25lbnRVcHdhcmQsIGZpbmRDb21wb25lbnRzRG93bndhcmQgfSBmcm9tICcuLi91dGlsL2Fzc2lzdCc7XG5cbiAgICBjb25zdCBwcm9maXhDbHMgPSAndi1tZW51JztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBuYW1lOiBwcm9maXhDbHMsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBhY3RpdmVOYW1lOntcbiAgICAgICAgICAgICAgICB0eXBlOiBbU3RyaW5nLE51bWJlcl0sXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlOntcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2hvcml6b250YWwnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjpmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25lT2YodmFsLFsnaG9yaXpvbnRhbCcsJ3ZlcnRpY2FsJ10pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoOntcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlaWdodDp7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgY2xhc3NzOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgYCR7cHJvZml4Q2xzfWAsXG4gICAgICAgICAgICAgICAgICAgIGAke3Byb2ZpeENsc30tJHt0aGlzLm1vZGV9YFxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3NzO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0eWxlOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge307XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodGhpcy53aWR0aCAhPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLndpZHRoID0gdGhpcy53aWR0aCArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOntcbiAgICAgICAgICAgICRvbkNsaWNrSGFuZGxlOmZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy4kYWN0aXZlSGFuZGxlKHZhbCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnb246c2VsZWN0Jyx2YWwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICRhY3RpdmVIYW5kbGU6ZnVuY3Rpb24obmFtZSl7XG4gICAgICAgICAgICAgICAgZmluZENvbXBvbmVudHNEb3dud2FyZCh0aGlzLCd2LW1lbnUtaXRlbS1zdWInKS5mb3JFYWNoKCh2YWwpPT57XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZih2YWwubmFtZSA9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwuYWN0aXZlID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZhbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZDpmdW5jdGlvbigpe1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLiRhY3RpdmVIYW5kbGUodGhpcy5hY3RpdmVOYW1lKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMjg3MjVmOCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xheW91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMjg3MjVmOCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxMjg3MjVmOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTI4NzI1ZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTI4NzI1ZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xheW91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTI4NzI1Zjgmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxMjg3MjVmOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz0nY2xhc3NzJz5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwiY3NzXCIgc3JjPScuL2luZGV4LmNzcycgc2NvcGVkPjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGNvbnN0IHByb2ZpeENscyA9ICd2LW1lbnUtaXRlbS1ncm91cCc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbmFtZTogcHJvZml4Q2xzLFxuICAgICAgICBjb21wdXRlZDp7XG4gICAgICAgICAgICBjbGFzc3M6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgY2xhc3NzID0gW1xuICAgICAgICAgICAgICAgICAgICBgJHtwcm9maXhDbHN9YFxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3NzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgOnN0eWxlPVwic3R5bGVcIiA6Y2xhc3M9XCJjbGFzc3NcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9J2Nzcycgc2NvcGVkPlxuICAgIC52LXNpZGVye1xuICAgICAgICBcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBjb25zdCBwcmVmaXhDbHMgPSAndi1zaWRlcic7XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIG5hbWU6IHByZWZpeENscyxcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICB3aWR0aDp7XG4gICAgICAgICAgICAgICB0eXBlOiBbTnVtYmVyLFN0cmluZ10sXG4gICAgICAgICAgICAgICBkZWZhdWx0OiAyMDBcbiAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDp7XG4gICAgICAgICAgICBjbGFzc3M6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhDbHN9YFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHlsZTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcbiAgICAgICAgICAgICAgICAgICAgbWluV2lkdGg6IGAke3RoaXMud2lkdGh9cHhgLFxuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogYCR7dGhpcy53aWR0aH1weGAsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuL2lucHV0LmNzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbnB1dC5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbnB1dC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidWxcIixcbiAgICB7IGNsYXNzOiBfdm0uY2xhc3NzLCBzdHlsZTogX3ZtLnN0eWxlIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcm93LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiZjdlYTNhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9yb3cuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWJmN2VhM2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcm93LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiZjdlYTNhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGNsYXNzOiBfdm0uY2xhc3NzIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1yb3dbZGF0YS12LTFiZjdlYTNhXXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHpvb206IDE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udi1yb3dbZGF0YS12LTFiZjdlYTNhXTphZnRlciwgLnYtcm93W2RhdGEtdi0xYmY3ZWEzYV06YmVmb3Jle1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxufVxcbi52LXJvd1tkYXRhLXYtMWJmN2VhM2FdOmFmdGVyIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcbi52LXJvdy1mbGV4W2RhdGEtdi0xYmY3ZWEzYV17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnYtcm93LWZsZXgtc3RhcnRbZGF0YS12LTFiZjdlYTNhXXtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4udi1yb3ctZmxleC1lbmRbZGF0YS12LTFiZjdlYTNhXXtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLnYtcm93LWZsZXgtY2VudGVyW2RhdGEtdi0xYmY3ZWEzYV17XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udi1yb3ctZmxleC1zcGFjZS1hcm91bmRbZGF0YS12LTFiZjdlYTNhXXtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi52LXJvdy1mbGV4LXNwYWNlLWJldHdlZW5bZGF0YS12LTFiZjdlYTNhXXtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udi1yb3ctZmxleC10b3BbZGF0YS12LTFiZjdlYTNhXXtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi52LXJvdy1mbGV4LW1pZGRsZVtkYXRhLXYtMWJmN2VhM2Fde1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udi1yb3ctZmxleC1ib3R0b21bZGF0YS12LTFiZjdlYTNhXXtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yOWVmNzc4YyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjE4NmFhMGVmXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI5ZWY3NzhjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjllZjc3OGMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS1ncm91cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LWdyb3VwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3M6IF92bS5jbGFzc3MsIHN0eWxlOiBfdm0uc3R5bGVzIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTQ1OTI2OGYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NDU5MjY4ZiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NDU5MjY4ZiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjNlZjgyNWFlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTQ1OTI2OGYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0NTkyNjhmJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiA6Y2xhc3M9XCJjbGFzc3NcIiA6c3R5bGU9XCJzdHlsZVwiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vdXRpbC9hc3Npc3QnO1xuICAgIGNvbnN0IHByZWZpeENscyA9ICd2LWZvb3Rlcic7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbmFtZTogcHJlZml4Q2xzLFxuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICB0eXBlOntcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25lT2YodmFsLFsnJywnZml4ZWQnXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGg6e1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmRleDp7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgc3R5bGU6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB0aGlzLndpZHRoICsgJyUnLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMudHlwZSl7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnBvc2l0aW9uID0gdGhpcy50eXBlO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5ib3R0b20gPSAwO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS56SW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc3M6ZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeENsc31gXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tZW51LXN1Yi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWVhMjU1NTImc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tZW51LXN1Yi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWVudS1zdWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWVhMjU1NTImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiOWVhMjU1NTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzllYTI1NTUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzllYTI1NTUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tZW51LXN1Yi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OWVhMjU1NTImc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5ZWEyNTU1MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9tZW51L21lbnUtc3ViLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LXRhYmxlW2RhdGEtdi03YTc0OGNmOV17XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1oZWFkW2RhdGEtdi03YTc0OGNmOV17XFxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi52LXRhYmxlLWhlYWQgdHJbZGF0YS12LTdhNzQ4Y2Y5XXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVhZWM7XFxufVxcbi52LXRhYmxlLWhlYWQgdHIgdGhbZGF0YS12LTdhNzQ4Y2Y5XXtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cXG4udi10YWJsZS1ib2R5W2RhdGEtdi03YTc0OGNmOV17XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udi10YWJsZS1ib2R5IHRyW2RhdGEtdi03YTc0OGNmOV17XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1ib2R5IHRyIHRkW2RhdGEtdi03YTc0OGNmOV17XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9vdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tZW51LWdyb3VwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZGRhYjI1NiZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21lbnUtZ3JvdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL21lbnUtZ3JvdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2RkYWIyNTYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2RkYWIyNTZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzNkZGFiMjU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzNkZGFiMjU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tZW51LWdyb3VwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZGRhYjI1NiZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNkZGFiMjU2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL21lbnUvbWVudS1ncm91cC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21lbnUtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjllZjc3OGMmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tZW51LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL21lbnUtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yOWVmNzc4YyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyOWVmNzc4Y1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjllZjc3OGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjllZjc3OGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21lbnUtaXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjllZjc3OGMmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyOWVmNzc4YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9tZW51L21lbnUtaXRlbS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RhYmxlLWJvZHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmMmQ1OTVkJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFibGUtYm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUtYm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZjJkNTk1ZCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxZjJkNTk1ZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWYyZDU5NWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWYyZDU5NWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RhYmxlLWJvZHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmMmQ1OTVkJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWYyZDU5NWQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdGFibGUvdGFibGUtYm9keS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZjJkNTk1ZCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjNmZjBhYTAyXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmMmQ1OTVkJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWYyZDU5NWQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50LWJ0bltkYXRhLXYtNTM1MGQ0MDRde1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4udC1idG4uZGlzYWJsZWRbZGF0YS12LTUzNTBkNDA0XSwgLnQtYnRuW2Rpc2FibGVkXVtkYXRhLXYtNTM1MGQ0MDRdLC50LWJ0bi5kaXNhYmxlZFtkYXRhLXYtNTM1MGQ0MDRdOmhvdmVyLC50LWJ0bltkaXNhYmxlZF1bZGF0YS12LTUzNTBkNDA0XTpob3ZlcntcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgY29sb3I6ICNiYmJlYzQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XFxuICAgIGJvcmRlci1jb2xvcjogI2RkZGVlMTtcXG59XFxuLnQtYnRuLXNpemUtdGlueVtkYXRhLXYtNTM1MGQ0MDRde1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHBhZGRpbmc6IDRweCAxNXB4O1xcbn1cXG4udC1idG4tc2l6ZS1kZWZhdWx0W2RhdGEtdi01MzUwZDQwNF17XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcGFkZGluZzogNnB4IDE4cHg7XFxufVxcbi50LWJ0bi1zaXplLWxhcmdlW2RhdGEtdi01MzUwZDQwNF17XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgcGFkZGluZzogOHB4IDI4cHg7XFxufVxcbi50LWJ0bi1zaXplLWxvbmdbZGF0YS12LTUzNTBkNDA0XXtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nOiA2cHggMThweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi50LWJ0bi10eXBlLWRlZmF1bHRbZGF0YS12LTUzNTBkNDA0XXtcXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG4gICAgY29sb3I6ICM0OTUwNjA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGRlZTE7XFxufVxcbi50LWJ0bi10eXBlLWRlZmF1bHRbZGF0YS12LTUzNTBkNDA0XTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gICAgY29sb3I6ICM1N2EzZjM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM1N2EzZjM7XFxufVxcbi50LWJ0bi10eXBlLXRleHRbZGF0YS12LTUzNTBkNDA0XXtcXG4gICAgY29sb3I6ICM0OTUwNjA7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMCk7XFxufVxcbi50LWJ0bi10eXBlLXRleHRbZGF0YS12LTUzNTBkNDA0XTpob3ZlcntcXG4gICAgY29sb3I6ICM1N2EzZjM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMCk7XFxufVxcbi50LWJ0bi10eXBlLXdhcm5pbmdbZGF0YS12LTUzNTBkNDA0XXtcXG4gICAgYmFja2dyb3VuZDogI2ZmOTkwMDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjk5MDA7XFxufVxcbi50LWJ0bi10eXBlLXdhcm5pbmdbZGF0YS12LTUzNTBkNDA0XTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogI2ZmYWQzMztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmFkMzM7XFxufVxcbi50LWJ0bi10eXBlLWVycm9yW2RhdGEtdi01MzUwZDQwNF17XFxuICAgIGJhY2tncm91bmQ6ICNlZDNmMTQ7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWQzZjE0O1xcbn1cXG4udC1idG4tdHlwZS1lcnJvcltkYXRhLXYtNTM1MGQ0MDRdOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiAjZjE2NTQzO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VkM2YxNDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4M2RlYWU3Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYmNlZmY0YzhcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4M2RlYWU3Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4M2RlYWU3Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTI4NzI1ZjgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyODcyNWY4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLWhlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUtaGVhZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzOiBfdm0uY2xhc3NzLCBzdHlsZTogX3ZtLnN0eWxlcyB9LFxuICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwidC1pbnB1dFxcXCIgOmNsYXNzPVxcXCJbc2l6ZT8oJ3QtaW5wdXRfJytzaXplKTonJyx7ZGlzYWJsZWQ6ZGlzYWJsZWR9XVxcXCI+XFxuXFxuICAgIDxpIGNsYXNzPVxcXCJtYXRlcmlhbC1pY29ucyB0LWlucHV0X2ljb25cXFwiIHYtaWY9XFxcImljb25cXFwiIEBjbGljaz1cXFwiaGFuZGxlSWNvbkNsaWNrXFxcIj57e2ljb259fTwvaT5cXG4gICAgPGkgY2xhc3M9XFxcInQtaW5wdXRfaWNvbiBpbWFnZVxcXCIgdi1pZj1cXFwiaW1hZ2VJY29uXFxcIiBAY2xpY2s9XFxcImhhbmRsZUljb25DbGlja1xcXCI+PC9pPlxcblxcbiAgICA8aW5wdXRcXG4gICAgICAgIGNsYXNzPVxcXCJ0LWlucHV0X29yaVxcXCJcXG4gICAgICAgIDpjbGFzcz1cXFwiW2N1c3RvbUNsYXNzXVxcXCJcXG4gICAgICAgIDp0eXBlPVxcXCJ0eXBlXFxcIlxcbiAgICAgICAgOnBsYWNlaG9sZGVyPVxcXCJwbGFjZWhvbGRlclxcXCJcXG4gICAgICAgIDpuYW1lPVxcXCJuYW1lXFxcIlxcbiAgICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCJcXG4gICAgICAgIDpyZWFkb25seT1cXFwicmVhZG9ubHlcXFwiXFxuICAgICAgICA6YXV0b2NvbXBsZXRlPVxcXCJhdXRvQ29tcGxldGVcXFwiXFxuICAgICAgICA6YXV0b2ZvY3VzPVxcXCJhdXRvZm9jdXNcXFwiXFxuICAgICAgICA6dmFsdWU9XFxcInZhbHVlXFxcIlxcbiAgICAgICAgOmZvcm09XFxcImZvcm1cXFwiXFxuICAgICAgICByZWY9XFxcImlucHV0XFxcIlxcbiAgICAgICAgQGlucHV0PVxcXCJ1cGRhdGVWYWx1ZSgkZXZlbnQudGFyZ2V0LnZhbHVlKVxcXCJcXG4gICAgICAgIEBmb2N1cz1cXFwiaGFuZGxlRm9jdXNcXFwiXFxuICAgICAgICBAYmx1cj1cXFwiaGFuZGxlQmx1clxcXCJcXG4gICAgPlxcblxcbjwvZGl2PlwiOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWYyZDU5NWQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmMmQ1OTVkJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmMmQ1OTVkJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3M6IF92bS5jbGFzc3MsIHN0eWxlOiBfdm0uc3R5bGUgfSxcbiAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInRhYmxlXCIsXG4gICAge1xuICAgICAgY2xhc3M6IF92bS5jbGFzc3MsXG4gICAgICBhdHRyczogeyBjZWxsc3BhY2luZzogXCIwXCIsIGNlbGxwYWRkaW5nOiBcIjBcIiwgYm9yZGVyOiBcIjBcIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJjb2xncm91cFwiLFxuICAgICAgICBfdm0uX2woX3ZtLndpZHRoLCBmdW5jdGlvbihpdGVtLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcImNvbFwiLCB7IGtleTogaW5kZXgsIGF0dHJzOiB7IHdpZHRoOiBpdGVtIH0gfSlcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZWEyNTU1MiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWVhMjU1NTImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWVhMjU1NTImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbmltcG9ydCBsaXN0VG9TdHlsZXMgZnJvbSAnLi9saXN0VG9TdHlsZXMnXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTdHlsZXNDbGllbnQgKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG4iLCI8dGVtcGxhdGU+XG4gICAgPGxpIDpjbGFzcz0nY2xhc3NzJyA6c3R5bGU9J3N0eWxlJyBAY2xpY2s9J2l0ZW1IYW5kbGUnPlxuICAgICAgICA8ZGl2IDpjbGFzcz0nW3Byb2ZpeENscyArIFwiLXRpdGxlXCJdJz48c2xvdCBuYW1lPSd0aXRsZSc+PC9zbG90PjwvZGl2PlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9saT5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiIHNyYz0nLi9pbmRleC5jc3MnIHNjb3BlZD48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBmaW5kQ29tcG9uZW50VXB3YXJkLCBmaW5kQ29tcG9uZW50c0Rvd253YXJkIH0gZnJvbSAnLi4vdXRpbC9hc3Npc3QnO1xuICAgIGNvbnN0IHByb2ZpeENscyA9ICd2LW1lbnUtaXRlbS1zdWInO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIG5hbWU6IHByb2ZpeENscyxcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgbmFtZTp7XG4gICAgICAgICAgICAgICAgdHlwZTpbU3RyaW5nLE51bWJlcl0sXG4gICAgICAgICAgICAgICAgZGFmZXVsdDonJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByb2ZpeENsczogcHJvZml4Q2xzLFxuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc3MgPSBbXG4gICAgICAgICAgICAgICAgICAgIGAke3Byb2ZpeENsc31gLHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgYWN0aXZlYF06IHRoaXMuYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHlsZTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5oZWlnaHQpe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmxpbmVIZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOntcbiAgICAgICAgICAgIGl0ZW1IYW5kbGU6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBmaW5kQ29tcG9uZW50VXB3YXJkKHRoaXMsJ3YtbWVudScpLiRvbkNsaWNrSGFuZGxlKHRoaXMubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoIGZpbmRDb21wb25lbnRVcHdhcmQodGhpcywndi1tZW51JykgJiYgZmluZENvbXBvbmVudFVwd2FyZCh0aGlzLCd2LW1lbnUnKS5oZWlnaHQpe1xuICAgICAgICAgICAgICAgIHRoaXMuaGVpZ2h0ID0gIGZpbmRDb21wb25lbnRVcHdhcmQodGhpcywndi1tZW51JykuaGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllYTI1NTUyJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllYTI1NTUyJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1tZW51W2RhdGEtdi1hMTQ0NGMzOF17XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi52LW1lbnUtaXRlbS1zdWJbZGF0YS12LWExNDQ0YzM4XXtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnYtbWVudS1ob3Jpem9udGFsIC52LW1lbnUtaXRlbS1zdWIuYWN0aXZlW2RhdGEtdi1hMTQ0NGMzOF17XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkY3NzNEO1xcbiAgICBjb2xvcjogI0ZGNzczRDtcXG59XFxuLnYtbWVudS1ob3Jpem9udGFsW2RhdGEtdi1hMTQ0NGMzOF17XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxufVxcbi52LW1lbnUtaG9yaXpvbnRhbFtkYXRhLXYtYTE0NDRjMzhdOjphZnRlcntcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiAjZGRkZWUxO1xcbn1cXG4udi1tZW51LWhvcml6b250YWwgLnYtbWVudS1pdGVtLXN1YltkYXRhLXYtYTE0NDRjMzhde1xcbiAgICBmbG9hdDogbGVmdDtcXG59XFxuLnYtbWVudS12ZXJ0aWNhbFtkYXRhLXYtYTE0NDRjMzhde1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udi1tZW51LXZlcnRpY2FsIC52LW1lbnUtaXRlbS1zdWJbZGF0YS12LWExNDQ0YzM4XXtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG59XFxuLnYtbWVudS12ZXJ0aWNhbFtkYXRhLXYtYTE0NDRjMzhdOjphZnRlcntcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZDogI2RkZGVlMTtcXG59XFxuLnYtbWVudS12ZXJ0aWNhbCAudi1tZW51LWl0ZW0tc3ViLmFjdGl2ZVtkYXRhLXYtYTE0NDRjMzhde1xcbiAgICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCAjRkY3NzNEO1xcbiAgICBjb2xvcjogI0ZGNzczRDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNTBkNDA0JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYnV0dG9uLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUzNTBkNDA0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjUzNTBkNDA0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MzUwZDQwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MzUwZDQwNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MzUwZDQwNCZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUzNTBkNDA0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2J1dHRvbi9idXR0b24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWVhMjU1NTImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJmYmQ5MDMxNFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZWEyNTU1MiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllYTI1NTUyJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTgzZGVhZTcmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4M2RlYWU3Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWJhYjQzYyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjgzMTIxMTU2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1YmFiNDNjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjViYWI0M2MmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1jb2wtMVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9ja1xcbn1cXG4udi1jb2wtMVtkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0yW2RhdGEtdi0yY2VmOWVmNF0sLnYtY29sLTNbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtNFtkYXRhLXYtMmNlZjllZjRdLC52LWNvbC01W2RhdGEtdi0yY2VmOWVmNF0sLnYtY29sLTZbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtN1tkYXRhLXYtMmNlZjllZjRdLC52LWNvbC04W2RhdGEtdi0yY2VmOWVmNF0sLnYtY29sLTlbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTBbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTFbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTJbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTNbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTRbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTVbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTZbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTdbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMThbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTlbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMjBbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMjFbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMjJbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMjNbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMjRbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG4udi1jb2wtMjRbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJVxcbn1cXG4udi1jb2wtMjNbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTUuODMzMzMzMzMlO1xcbn1cXG4udi1jb2wtMjJbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTEuNjY2NjY2NjclO1xcbn1cXG4udi1jb2wtMjFbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogODcuNSVcXG59XFxuLnYtY29sLTIwW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG59XFxuLnYtY29sLTE5W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDc5LjE2NjY2NjY3JTtcXG59XFxuLnYtY29sLTE4W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDc1JVxcbn1cXG4udi1jb2wtMTdbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNzAuODMzMzMzMzMlO1xcbn1cXG4udi1jb2wtMTZbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNjYuNjY2NjY2NjclO1xcbn1cXG4udi1jb2wtMTVbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNjIuNSU7XFxufVxcbi52LWNvbC0xNFtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMyU7XFxufVxcbi52LWNvbC0xM1tkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA1NC4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC0xMltkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcbi52LWNvbC0xMVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0NS44MzMzMzMzMyVcXG59XFxuLnYtY29sLTEwW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG59XFxuLnYtY29sLTlbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMzcuNSU7XFxufVxcbi52LWNvbC04W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJVxcbn1cXG4udi1jb2wtN1tkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyOS4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC02W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDI1JTtcXG59XFxuLnYtY29sLTVbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG4udi1jb2wtNFtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XFxufVxcbi52LWNvbC0zW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEyLjUlO1xcbn1cXG4udi1jb2wtMltkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4LjMzMzMzMzMzJVxcbn1cXG4udi1jb2wtMVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0LjE2NjY2NjY3JTtcXG59XFxuLnYtY29sLTBbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XFxuLnYtY29sLW9mZnNldC0xW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNC4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMltkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTNbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcXG59XFxuLnYtY29sLW9mZnNldC00W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTVbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMC44MzMzMzMzMyU7XFxufVxcbi52LWNvbC1vZmZzZXQtNltkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuLnYtY29sLW9mZnNldC03W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogMjkuMTY2NjY2NjclO1xcbn1cXG4udi1jb2wtb2Zmc2V0LThbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxufVxcbi52LWNvbC1vZmZzZXQtOVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDM3LjUlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTEwW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTExW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNDUuODMzMzMzMzMlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTEyW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTEzW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNTQuMTY2NjY2NjclO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTE0W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTE1W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNjIuNSU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTZbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTdbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MC44MzMzMzMzMyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMThbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTlbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3OS4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMjBbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMjFbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4Ny41JTtcXG59XFxuLnYtY29sLW9mZnNldC0yMltkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG59XFxuLnYtY29sLW9mZnNldC0yM1tkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDk1LjgzMzMzMzMzJTtcXG59XFxuLnYtY29sLW9mZnNldC0yNFtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmMmQ1OTVkJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmMmQ1OTVkJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLWJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUtYm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBSb3cgZnJvbSAnLi9yb3cudnVlJztcblxuZXhwb3J0IGRlZmF1bHQgUm93OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LXNpZGVyW2RhdGEtdi0yNjcwMTY5MV17XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzOiBfdm0uY2xhc3NzLCBzdHlsZTogX3ZtLnN0eWxlIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LW1lbnVbZGF0YS12LTI5ZWY3NzhjXXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnYtbWVudS1pdGVtLXN1YltkYXRhLXYtMjllZjc3OGNde1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udi1tZW51LWhvcml6b250YWwgLnYtbWVudS1pdGVtLXN1Yi5hY3RpdmVbZGF0YS12LTI5ZWY3NzhjXXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRjc3M0Q7XFxuICAgIGNvbG9yOiAjRkY3NzNEO1xcbn1cXG4udi1tZW51LWhvcml6b250YWxbZGF0YS12LTI5ZWY3NzhjXXtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG59XFxuLnYtbWVudS1ob3Jpem9udGFsW2RhdGEtdi0yOWVmNzc4Y106OmFmdGVye1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQ6ICNkZGRlZTE7XFxufVxcbi52LW1lbnUtaG9yaXpvbnRhbCAudi1tZW51LWl0ZW0tc3ViW2RhdGEtdi0yOWVmNzc4Y117XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG4udi1tZW51LXZlcnRpY2FsW2RhdGEtdi0yOWVmNzc4Y117XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcbi52LW1lbnUtdmVydGljYWwgLnYtbWVudS1pdGVtLXN1YltkYXRhLXYtMjllZjc3OGNde1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbn1cXG4udi1tZW51LXZlcnRpY2FsW2RhdGEtdi0yOWVmNzc4Y106OmFmdGVye1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiAjZGRkZWUxO1xcbn1cXG4udi1tZW51LXZlcnRpY2FsIC52LW1lbnUtaXRlbS1zdWIuYWN0aXZlW2RhdGEtdi0yOWVmNzc4Y117XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICNGRjc3M0Q7XFxuICAgIGNvbG9yOiAjRkY3NzNEO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjcwMTY5MSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjcwMTY5MSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzczogX3ZtLmNsYXNzcywgc3R5bGU6IF92bS5zdHlsZSB9LFxuICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz1cInQtYnRuXCJcbiAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICA6dHlwZT1cImh0bWxUeXBlXCJcbiAgICAgICAgOmNsYXNzPVwiY2xhc3NzXCJcbiAgICAgICAgOnN0eWxlPVwic3R5bGVcIlxuICAgICAgICBAY2xpY2s9XCJoYW5kbGVDbGlja1wiXG4gICAgPjxzcGFuPjxzbG90Pjwvc2xvdD48L3NwYW4+PC9idXR0b24+XG48L3RlbXBsYXRlPlxuPHN0eWxlIHNyYz0nLi9idXR0b24uY3NzJyBzY29wZWQgbGFuZz1cImNzc1wiPjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vdXRpbC9hc3Npc3QnO1xuXG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ3QtYnRuJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogcHJlZml4Q2xzLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOmZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbmVPZih2YWwsWydkZWZhdWx0JywndGV4dCcsJ3dhcm5pbmcnLCdlcnJvciddKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aDp7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlaWdodDp7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDUwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOmZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbmVPZih2YWwsWydkZWZhdWx0JywndGlueScsJ2xhcmdlJywnbG9uZycsJ2F1dG8nXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaHRtbFR5cGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOmZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbmVPZih2YWwsWydidXR0b24nLCdzdWJtaXQnLCdyZXNldCddKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgY2xhc3NzOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzcyA9IFtdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNsYXNzcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeENsc30tdHlwZS1gK3RoaXMudHlwZV1cbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zaXplICE9ICdhdXRvJyl7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzcy5wdXNoKFtgJHtwcmVmaXhDbHN9LXNpemUtYCt0aGlzLnNpemVdKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc3MgO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0eWxlOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge307XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnNpemUgPT0gJ2F1dG8nKXtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUud2lkdGggPSB0aGlzLndpZHRoKydweCc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0KydweCc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmxpbmVIZWlnaHQgPSB0aGlzLmhlaWdodCsncHgnO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBoYW5kbGVDbGljazogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjbGlja1wiLGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTE0NDRjMzgmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWExNDQ0YzM4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImExNDQ0YzM4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhMTQ0NGMzOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhMTQ0NGMzOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWVudS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTE0NDRjMzgmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdhMTQ0NGMzOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9tZW51L21lbnUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChwYXJlbnRJZCwgbGlzdCkge1xuICB2YXIgc3R5bGVzID0gW11cbiAgdmFyIG5ld1N0eWxlcyA9IHt9XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXVxuICAgIHZhciBpZCA9IGl0ZW1bMF1cbiAgICB2YXIgY3NzID0gaXRlbVsxXVxuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl1cbiAgICB2YXIgc291cmNlTWFwID0gaXRlbVszXVxuICAgIHZhciBwYXJ0ID0ge1xuICAgICAgaWQ6IHBhcmVudElkICsgJzonICsgaSxcbiAgICAgIGNzczogY3NzLFxuICAgICAgbWVkaWE6IG1lZGlhLFxuICAgICAgc291cmNlTWFwOiBzb3VyY2VNYXBcbiAgICB9XG4gICAgaWYgKCFuZXdTdHlsZXNbaWRdKSB7XG4gICAgICBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0geyBpZDogaWQsIHBhcnRzOiBbcGFydF0gfSlcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpXG4gICAgfVxuICB9XG4gIHJldHVybiBzdHlsZXNcbn1cbiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz1cImNsYXNzc1wiIDpzdHlsZT1cInN0eWxlc1wiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc3JjPScuL2NvbC5jc3MnIGxhbmc9J3N0eWx1cycgc2NvcGVkPjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZmluZENvbXBvbmVudFVwd2FyZCB9IGZyb20gJy4uL3V0aWwvYXNzaXN0JztcbiAgICBsZXQgcHJlZml4Q2xzID0gJ3YtY29sJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogcHJlZml4Q2xzLFxuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICBzcGFuOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDI0XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb2Zmc2V0OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBndXR0ZXI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgY2xhc3NzOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4Q2xzfWAsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXhDbHN9LSR7dGhpcy5zcGFufWBdOiB0aGlzLnNwYW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4Q2xzfS1vZmZzZXQtJHt0aGlzLm9mZnNldH1gXTogdGhpcy5vZmZzZXQsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0eWxlczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IHt9O1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuZ3V0dGVyICE9PTApe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiB0aGlzLmd1dHRlciAvIDIgKydweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IHRoaXMuZ3V0dGVyIC8gMiArJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgICAgICB1cGRhdGVHdXR0ZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgY29uc3QgUm93ID0gZmluZENvbXBvbmVudFVwd2FyZCh0aGlzLCAndi1yb3cnKTtcblxuICAgICAgICAgICAgICAgIGlmIChSb3cpIHtcbiAgICAgICAgICAgICAgICAgICAgUm93LnVwZGF0ZUd1dHRlcihSb3cuZ3V0dGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlR3V0dGVyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTI4NzI1ZjgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMjg3MjVmOCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTI4NzI1ZjgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNWJhYjQzYyZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWJhYjQzYyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyNWJhYjQzY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjViYWI0M2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjViYWI0M2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNWJhYjQzYyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI1YmFiNDNjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3RhYmxlL3RhYmxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjllZjc3OGMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI5ZWY3NzhjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI5ZWY3NzhjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgOmNsYXNzPVwiY2xhc3NzXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9J3YtaGVhZGVyLXdpZHRoJyA6c3R5bGU9XCJzdHlsZXNcIj5cbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9J2Nzcycgc2NvcGVkPlxuICAgIC52LWhlYWRlcntcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC52LWhlYWRlci13aWR0aHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi91dGlsL2Fzc2lzdCc7XG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ3YtaGVhZGVyJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogcHJlZml4Q2xzLFxuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICB3aWR0aDp7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6e1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbmVPZih2YWwsWycnLCdmaXhlZCddKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbmRleDp7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgc3R5bGVzOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBtYXhXaWR0aDogdGhpcy53aWR0aCArICdweCdcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy50eXBlKXtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUucG9zaXRpb24gPSB0aGlzLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnpJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NzOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4Q2xzfWBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9yb3cuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWJmN2VhM2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcm93LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiZjdlYTNhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYnV0dG9uXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidC1idG5cIixcbiAgICAgIGNsYXNzOiBfdm0uY2xhc3NzLFxuICAgICAgc3R5bGU6IF92bS5zdHlsZSxcbiAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0uZGlzYWJsZWQsIHR5cGU6IF92bS5odG1sVHlwZSB9LFxuICAgICAgb246IHsgY2xpY2s6IF92bS5oYW5kbGVDbGljayB9XG4gICAgfSxcbiAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMildXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzJmOWU5YiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzcyZjllOWImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzcyZjllOWImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9yb3cuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWJmN2VhM2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2MWM5MGZkZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9yb3cuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWJmN2VhM2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9yb3cuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWJmN2VhM2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjx0ZW1wbGF0ZT5cbiAgICA8dGFibGUgY2VsbHNwYWNpbmc9XCIwXCIgY2VsbHBhZGRpbmc9XCIwXCIgYm9yZGVyPVwiMFwiIDpjbGFzcz1cImNsYXNzc1wiPlxuICAgICAgICA8Y29sZ3JvdXA+XG4gICAgICAgICAgICA8Y29sIHYtZm9yPScoaXRlbSxpbmRleCkgaW4gd2lkdGgnIDprZXk9J2luZGV4JyA6d2lkdGg9J2l0ZW0nPjwvY29sPlxuICAgICAgICA8L2NvbGdyb3VwPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC90YWJsZT5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzcmM9Jy4vdGFibGUuY3NzJyBsYW5nPVwiY3NzXCIgc2NvcGVkPjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZmluZENvbXBvbmVudERvd253YXJkIH0gZnJvbSAnLi4vdXRpbC9hc3Npc3QuanMnO1xuXG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ3YtdGFibGUnO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogcHJlZml4Q2xzLFxuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICB3aWR0aDp7XG4gICAgICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDp7XG4gICAgICAgICAgICBjbGFzc3M6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgY2xhc3NzID0gW1xuICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhDbHN9YFxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3NzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOntcbiAgICAgICAgICAgIHdpZHRoSGFuZGxlOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IGNvbXBvbmVudE5vZGUgPSBmaW5kQ29tcG9uZW50RG93bndhcmQodGhpcywndi10YWJsZS10cicpO1xuICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IGxlbmd0aCA9IGNvbXBvbmVudE5vZGUuJGVsLmNoaWxkcmVuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZihsZW5ndGggJiYgIXdpZHRoLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBudW0gPSAxMDAgLyBsZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aSA8IGxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLndpZHRoLGksYCR7bnVtfWApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbW91bnRlZDpmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYoIXRoaXMud2lkdGgubGVuZ3RoKSB0aGlzLndpZHRoSGFuZGxlKCk7XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzczogX3ZtLmNsYXNzcywgc3R5bGU6IF92bS5zdHlsZSB9LFxuICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuL2lucHV0LmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjA0NmEzYWFhXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5wdXQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbnB1dC5jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0aGVhZFwiLCB7IGNsYXNzOiBfdm0uY2xhc3NzIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2NzAxNjkxJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjcwMTY5MSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjcwMTY5MSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcm93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYmY3ZWEzYSZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Jvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vcm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Jvdy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYmY3ZWEzYSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxYmY3ZWEzYVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWJmN2VhM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWJmN2VhM2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Jvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWJmN2VhM2Emc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYmY3ZWEzYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9yb3cvcm93LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz0nY2xhc3NzJz48c2xvdD48L3Nsb3Q+PC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIiBzcmM9Jy4vaW5kZXguY3NzJyBzY29wZWQ+PC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgY29uc3QgcHJvZml4Q2xzID0gJ3YtbWVudS1pdGVtJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBuYW1lOiBwcm9maXhDbHMsXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc3MgPSBbXG4gICAgICAgICAgICAgICAgICAgIGAke3Byb2ZpeENsc31gXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RhYmxlLWhlYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3MmY5ZTliJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFibGUtaGVhZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUtaGVhZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzJmOWU5YiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3NzJmOWU5YlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzcyZjllOWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzcyZjllOWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RhYmxlLWhlYWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3MmY5ZTliJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzcyZjllOWInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdGFibGUvdGFibGUtaGVhZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBoZWFkZXIgZnJvbSAnLi9oZWFkZXIudnVlJztcbmltcG9ydCBjb250ZW50IGZyb20gJy4vY29udGVudC52dWUnO1xuaW1wb3J0IGZvb3RlciBmcm9tICcuL2Zvb3Rlci52dWUnO1xuaW1wb3J0IGxheW91dCBmcm9tICcuL2xheW91dC52dWUnO1xuaW1wb3J0IHNpZGVyIGZyb20gJy4vc2lkZXIudnVlJztcblxuZXhwb3J0IHsgaGVhZGVyLGNvbnRlbnQsZm9vdGVyLGxheW91dCxzaWRlciB9IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtdGFibGVbZGF0YS12LTI1YmFiNDNjXXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVhZWM7XFxufVxcbi52LXRhYmxlLWhlYWRbZGF0YS12LTI1YmFiNDNjXXtcXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmOTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnYtdGFibGUtaGVhZCB0cltkYXRhLXYtMjViYWI0M2Nde1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWFlYztcXG59XFxuLnYtdGFibGUtaGVhZCB0ciB0aFtkYXRhLXYtMjViYWI0M2Nde1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcbi52LXRhYmxlLWJvZHlbZGF0YS12LTI1YmFiNDNjXXtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi52LXRhYmxlLWJvZHkgdHJbZGF0YS12LTI1YmFiNDNjXXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVhZWM7XFxufVxcbi52LXRhYmxlLWJvZHkgdHIgdGRbZGF0YS12LTI1YmFiNDNjXXtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YTc0OGNmOSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YTc0OGNmOSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtdGFibGVbZGF0YS12LTFmMmQ1OTVkXXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVhZWM7XFxufVxcbi52LXRhYmxlLWhlYWRbZGF0YS12LTFmMmQ1OTVkXXtcXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmOTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnYtdGFibGUtaGVhZCB0cltkYXRhLXYtMWYyZDU5NWRde1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWFlYztcXG59XFxuLnYtdGFibGUtaGVhZCB0ciB0aFtkYXRhLXYtMWYyZDU5NWRde1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxufVxcbi52LXRhYmxlLWJvZHlbZGF0YS12LTFmMmQ1OTVkXXtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi52LXRhYmxlLWJvZHkgdHJbZGF0YS12LTFmMmQ1OTVkXXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVhZWM7XFxufVxcbi52LXRhYmxlLWJvZHkgdHIgdGRbZGF0YS12LTFmMmQ1OTVkXXtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzJmOWU5YiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM3YjU3MmEwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc3MmY5ZTliJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzcyZjllOWImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LXRhYmxlW2RhdGEtdi03NzJmOWU5Yl17XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1oZWFkW2RhdGEtdi03NzJmOWU5Yl17XFxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi52LXRhYmxlLWhlYWQgdHJbZGF0YS12LTc3MmY5ZTliXXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVhZWM7XFxufVxcbi52LXRhYmxlLWhlYWQgdHIgdGhbZGF0YS12LTc3MmY5ZTliXXtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cXG4udi10YWJsZS1ib2R5W2RhdGEtdi03NzJmOWU5Yl17XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udi10YWJsZS1ib2R5IHRyW2RhdGEtdi03NzJmOWU5Yl17XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1ib2R5IHRyIHRkW2RhdGEtdi03NzJmOWU5Yl17XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY3MDE2OTEmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxODRlZjIwZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjcwMTY5MSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2NzAxNjkxJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTQ1OTI2OGYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTQ1OTI2OGYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NDU5MjY4ZiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB0YWJsZSBmcm9tICcuL3RhYmxlLnZ1ZSc7XG5pbXBvcnQgdGhlYWQgZnJvbSAnLi90YWJsZS1oZWFkLnZ1ZSc7XG5pbXBvcnQgdGJvZHkgZnJvbSAnLi90YWJsZS1ib2R5LnZ1ZSc7XG5pbXBvcnQgdHIgZnJvbSAnLi90YWJsZS10ci52dWUnO1xuXG5leHBvcnQgeyB0YWJsZSwgdGhlYWQsIHRib2R5LCB0ciB9OyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpzdHlsZT1cInN0eWxlXCIgOmNsYXNzPVwiY2xhc3NzXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPSdjc3MnIHNjb3BlZD5cbiAgICAudi1sYXlvdXR7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGZsZXg6IGF1dG87XG4gICAgfVxuICAgIC52LWxheW91dC1oYXMtc2lkZXJ7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ3YtbGF5b3V0JztcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbmFtZTogcHJlZml4Q2xzLFxuICAgICAgICBkYXRhOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhhc1NpZGVyOiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgICB0b3A6e1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm90dG9tOntcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDp7XG4gICAgICAgICAgICBzdHlsZTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRvcCl7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnBhZGRpbmdUb3A9IHRoaXMudG9wKydweCdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvdHRvbSl7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnBhZGRpbmdCb3R0b209IHRoaXMuYm90dG9tKydweCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeENsc31gLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4Q2xzfS1oYXMtc2lkZXJgXTogdGhpcy5oYXNTaWRlclxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOntcbiAgICAgICAgICAgIGZpbmRTaWRlcjpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRjaGlsZHJlbi5zb21lKGNoaWxkPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZC4kb3B0aW9ucy5uYW1lID09PSAndi1zaWRlcic7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuaGFzU2lkZXIgPSB0aGlzLmZpbmRTaWRlcigpO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgOmNsYXNzPVwiY2xhc3NzXCIgOnN0eWxlPVwic3R5bGVzXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzcmM9Jy4vcm93LmNzcycgbGFuZz0nY3NzJyBzY29wZWQ+PC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBmaW5kQ29tcG9uZW50RG93bndhcmQsIGZpbmRCcm90aGVyc0NvbXBvbmVudHMsIG9uZU9mfSBmcm9tICcuLi91dGlsL2Fzc2lzdCc7XG4gICAgbGV0IHByZWZpeENscyA9ICd2LXJvdyc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IHByZWZpeENscyxcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgZ3V0dGVyOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjpmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25lT2YodmFsLFsnJywnZmxleCddKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBqdXN0aWZ5OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjpmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25lT2YodmFsLFsnJywnc3RhcnQnLCdlbmQnLCdjZW50ZXInLCdzcGFjZS1hcm91bmQnLCdzcGFjZS1iZXR3ZWVuJ10pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFsaWduOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjpmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25lT2YodmFsLFsnJywndG9wJywnbWlkZGxlJywnYm90dG9tJ10pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgY2xhc3NzOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeENsc31gXTogIXRoaXMudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeENsc30tYCt0aGlzLnR5cGVdOiAhIXRoaXMudHlwZSxcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeENsc30tZmxleC1gK3RoaXMuanVzdGlmeV06ICEhdGhpcy5qdXN0aWZ5LFxuICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4Q2xzfS1mbGV4LWArdGhpcy5hbGlnbl06ICEhdGhpcy5hbGlnblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHlsZXM6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmd1dHRlciAhPT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogdGhpcy5ndXR0ZXIgLyAtMiArJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiB0aGlzLmd1dHRlciAvIC0yICsncHgnLFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB1cGRhdGVHdXR0ZXI6IGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgY29uc3QgQ29sID0gZmluZENvbXBvbmVudERvd253YXJkKHRoaXMsICd2LWNvbCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IENvbHMgPSBmaW5kQnJvdGhlcnNDb21wb25lbnRzKENvbCwgJ3YtY29sJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGlmIChDb2xzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBDb2xzLmZvckVhY2goKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuZ3V0dGVyID0gdmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBndXR0ZXIgKHZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlR3V0dGVyKHZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRyXCIsIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yOWVmNzc4YyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yOWVmNzc4YyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29sLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtbGF5b3V0W2RhdGEtdi0xMjg3MjVmOF17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IGF1dG87XFxufVxcbi52LWxheW91dC1oYXMtc2lkZXJbZGF0YS12LTEyODcyNWY4XXtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2RkYWIyNTYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2RkYWIyNTYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9jb2wuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmNlZjllZjQmbGFuZz1zdHlsdXMmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zaWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjY3MDE2OTEmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9zaWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY3MDE2OTEmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjY3MDE2OTFcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI2NzAxNjkxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI2NzAxNjkxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zaWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjY3MDE2OTEmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNjcwMTY5MScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiPHRlbXBsYXRlPlxuICAgIDx0cj48c2xvdD48L3Nsb3Q+PC90cj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzcmM9Jy4vdGFibGUuY3NzJyBsYW5nPVwiY3NzXCIgc2NvcGVkPjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ3YtdGFibGUtdHInO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogcHJlZml4Q2xzXG4gICAgfVxuPC9zY3JpcHQ+Il0sInNvdXJjZVJvb3QiOiIifQ==