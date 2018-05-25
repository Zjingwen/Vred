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
exports.push([module.i, "\n.v-menu[data-v-3ddab256]{\n    display: block;\n    height: 60px;\n    line-height: 60px;\n    position: relative;\n}\n.v-menu[data-v-3ddab256]::after{\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    z-index: 1;\n    background: #dddee1;\n}\n.v-menu-item-sub[data-v-3ddab256]{\n    float: left;\n    height: inherit;\n    line-height: inherit;\n    padding: 0 20px;\n    position: relative;\n    z-index: 3;\n    cursor: pointer;\n}\n.v-menu-item-sub.active[data-v-3ddab256]{\n    border-bottom: 2px solid #FF773D;\n    color: #FF773D;\n}", ""]);

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
    { class: _vm.classs, on: { click: _vm.itemHandle } },
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
exports.push([module.i, "\n.v-menu[data-v-9ea25552]{\n    display: block;\n    height: 60px;\n    line-height: 60px;\n    position: relative;\n}\n.v-menu[data-v-9ea25552]::after{\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    z-index: 1;\n    background: #dddee1;\n}\n.v-menu-item-sub[data-v-9ea25552]{\n    float: left;\n    height: inherit;\n    line-height: inherit;\n    padding: 0 20px;\n    position: relative;\n    z-index: 3;\n    cursor: pointer;\n}\n.v-menu-item-sub.active[data-v-9ea25552]{\n    border-bottom: 2px solid #FF773D;\n    color: #FF773D;\n}", ""]);

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
        }
    },
    computed: {
        classs: function classs() {
            var classs = ['' + profixCls];

            return classs;
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
  return _c("ul", { class: _vm.classs }, [_vm._t("default")], 2)
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
            active: false
        };
    },
    computed: {
        classs: function classs() {
            var classs = ['' + profixCls, _defineProperty({}, 'active', this.active)];

            return classs;
        }
    },
    methods: {
        itemHandle: function itemHandle() {
            (0, _assist.findComponentUpward)(this, 'v-menu').$onClickHandle(this.name);
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
exports.push([module.i, "\n.v-menu[data-v-a1444c38]{\n    display: block;\n    height: 60px;\n    line-height: 60px;\n    position: relative;\n}\n.v-menu[data-v-a1444c38]::after{\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    z-index: 1;\n    background: #dddee1;\n}\n.v-menu-item-sub[data-v-a1444c38]{\n    float: left;\n    height: inherit;\n    line-height: inherit;\n    padding: 0 20px;\n    position: relative;\n    z-index: 3;\n    cursor: pointer;\n}\n.v-menu-item-sub.active[data-v-a1444c38]{\n    border-bottom: 2px solid #FF773D;\n    color: #FF773D;\n}", ""]);

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
exports.push([module.i, "\n.v-menu[data-v-29ef778c]{\n    display: block;\n    height: 60px;\n    line-height: 60px;\n    position: relative;\n}\n.v-menu[data-v-29ef778c]::after{\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 1px;\n    z-index: 1;\n    background: #dddee1;\n}\n.v-menu-item-sub[data-v-29ef778c]{\n    float: left;\n    height: inherit;\n    line-height: inherit;\n    padding: 0 20px;\n    position: relative;\n    z-index: 3;\n    cursor: pointer;\n}\n.v-menu-item-sub.active[data-v-29ef778c]{\n    border-bottom: 2px solid #FF773D;\n    color: #FF773D;\n}", ""]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS10ci52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L2luZGV4LmNzcz83NzBkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQudnVlP2Y2ZGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcz9jYzhjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jc3M/ZDUwNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZT8xZDdjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5jc3M/OGU1MSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzPzM1ZWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvdGFibGUvdGFibGUtYm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZT9iZjA1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtdHIudnVlP2U0ZjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi91cmxzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5jc3M/YWRjOSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvaW5kZXguY3NzIiwid2VicGFjazovLy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWhlYWQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQudnVlPzA4MzciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUtc3ViLnZ1ZT85NDMxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtYm9keS52dWU/MGM1OSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcz8yZGFjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC5jc3M/NGE4MiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlPzk1MTMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcz8wOWNkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzP2Y5M2IiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZT82MzVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LWl0ZW0udnVlPzZkNjEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L2luZGV4LmNzcz84MDI3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5jc3M/NmY4OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcz81NmI4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzP2UyZjciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS52dWU/ODk4MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wuY3NzPzhlNTIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy91dGlsL2Fzc2lzdC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvbWVudS1zdWIudnVlPzI5NjMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L2luZGV4LmNzcz80OGIzIiwid2VicGFjazovLy9jb21wb25lbnRzL21lbnUvbWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9tZW51L21lbnUtZ3JvdXAudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2xheW91dC9zaWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUtaXRlbS52dWU/M2RiYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNzcz8xMmQwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LnZ1ZT8wZWU1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L3Jvdy5jc3M/ZTZiNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvbWVudS1ncm91cC52dWU/OWM5NSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jvdy9yb3cuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5jc3M/NmQ4OSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvbWVudS1ncm91cC52dWU/MDcwOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jvdy9yb3cudnVlP2I5Y2UiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWU/YTJhYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9jb250ZW50LnZ1ZT8wY2JiIiwid2VicGFjazovLy9jb21wb25lbnRzL2xheW91dC9mb290ZXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LXN1Yi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/OTJjNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9mb290ZXIudnVlP2EwYWIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUtZ3JvdXAudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9tZW51LWl0ZW0udnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtYm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/NTE5ZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L3Jvdy52dWU/MGRkZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlP2I2NDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZT82ZTUwIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtaGVhZC52dWU/NTU4NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wudnVlPzFmYjIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5odG1sIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzPzM3NWEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWU/YzMzZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLnZ1ZT82NDdiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5jc3M/MTgwMyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvbWVudS9tZW51LXN1Yi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L2luZGV4LmNzcz8zYWEzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbWVudS9pbmRleC5jc3M/MjQ1ZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlPzZhMDUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvaW5kZXguY3NzPzQ2MzEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZT8xMTU5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzP2U0ZWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzPzRmMzkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS1ib2R5LnZ1ZT9iODJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGVyLnZ1ZT8xOGY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci52dWU/ZjczMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvaW5kZXguY3NzP2ZlYjkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlPzg4MGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUudnVlP2EzYzIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlPzkzZmUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L21lbnUudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9jb2wvY29sLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQudnVlPzI5NzMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L2luZGV4LmNzcz8xMzJiIiwid2VicGFjazovLy9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L3Jvdy5jc3M/MzVlZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udnVlPzg1OTAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlPzUwODciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/ZjFkZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jvdy9yb3cuY3NzPzAyMWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvdGFibGUvdGFibGUudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC52dWU/YTIyNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNzcz84OWY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtaGVhZC52dWU/OWMwNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zaWRlci52dWU/NzI0YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jvdy9yb3cudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL21lbnUvbWVudS1pdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWhlYWQudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQudnVlP2Y2MWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/MGJjNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcz85NmRjIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzPzRiMjUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/YzBhNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udnVlP2ZmODEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlP2E5NWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWU/YTNjZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy9jb21wb25lbnRzL2xheW91dC9sYXlvdXQudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL3Jvdy9yb3cudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtdHIudnVlP2RiNzgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9tZW51L2luZGV4LmNzcz81Nzc2Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY29sL2NvbC52dWU/ZTdhMiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQudnVlPzVhYmIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lbnUvaW5kZXguY3NzPzhmMDEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2wvY29sLmNzcz8wYzIyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy90YWJsZS90YWJsZS10ci52dWUiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlZ1ZSIsImV4dGVuZCIsInRlbXBsYXRlIiwiaHRtbCIsImRhdGEiLCJjdXJyZW50VmFsdWUiLCJ2YWx1ZSIsInByb3BzIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJOdW1iZXIiLCJuYW1lIiwiY3VzdG9tQ2xhc3MiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwiQm9vbGVhbiIsInJlYWRvbmx5IiwiYXV0b2ZvY3VzIiwiYXV0b0NvbXBsZXRlIiwic2l6ZSIsImZvcm0iLCJpY29uIiwiaW1hZ2VJY29uIiwibWV0aG9kcyIsInVwZGF0ZVZhbHVlIiwidHJpbSIsImhhbmRsZUJsdXIiLCJldmVudCIsIiRlbWl0IiwiJHJlZnMiLCJpbnB1dCIsImhhbmRsZUZvY3VzIiwiaGFuZGxlSWNvbkNsaWNrIiwiaW5wdXRTZWxlY3QiLCJzZWxlY3QiLCJjcmVhdGVkIiwiJG9uIiwid2F0Y2giLCJuZXdWIiwicmVxdWlyZSIsImNvbXBvbmVudHMiLCJjb2wiLCJyb3ciLCJoZWFkZXIiLCJjb250ZW50IiwiZm9vdGVyIiwibGF5b3V0Iiwic2lkZXIiLCJidXR0b24iLCJ0YWJsZSIsInRoZWFkIiwidGJvZHkiLCJ0ciIsIm1lbnUiLCJtZW51SXRlbSIsIm1lbnVHcm91cCIsIm1lbnVTdWIiLCJpbnN0YWxsIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJ3aW5kb3ciLCJDb2wiLCJvbmVPZiIsImZpbmRDb21wb25lbnRVcHdhcmQiLCJmaW5kQ29tcG9uZW50RG93bndhcmQiLCJmaW5kQnJvdGhlcnNDb21wb25lbnRzIiwiZmluZENvbXBvbmVudHNEb3dud2FyZCIsInZhbHVlTGlzdCIsImkiLCJsZW5ndGgiLCJjb250ZXh0IiwiY29tcG9uZW50TmFtZSIsImNvbXBvbmVudE5hbWVzIiwicGFyZW50IiwiJHBhcmVudCIsIiRvcHRpb25zIiwiaW5kZXhPZiIsImNoaWxkcmVucyIsIiRjaGlsZHJlbiIsImNoaWxkcmVuIiwiY2hpbGQiLCJleGNlcHRNZSIsInJlcyIsImZpbHRlciIsIml0ZW0iLCJpbmRleCIsImZpbmRJbmRleCIsIl91aWQiLCJzcGxpY2UiLCJyZWR1Y2UiLCJwdXNoIiwiZm91bmRDaGlsZHMiLCJjb25jYXQiLCJSb3ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlE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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBLDZCQUE2QixtQkFBbUI7O0FBRWhEOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxWEE7O0FBRUE7O0FBRUE7QUFDQTs7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bmxhblVJLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIjh5SWJcIik7XG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RhYmxlLXRyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YTc0OGNmOSZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYmxlLXRyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS10ci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YTc0OGNmOSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3YTc0OGNmOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2E3NDhjZjknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2E3NDhjZjknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RhYmxlLXRyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YTc0OGNmOSZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdhNzQ4Y2Y5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3RhYmxlL3RhYmxlLXRyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNkZGFiMjU2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMGVhYzIxOGFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2RkYWIyNTYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZGRhYjI1NiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jb2wudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjZWY5ZWY0JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29sLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJjZWY5ZWY0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyY2VmOWVmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyY2VmOWVmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29sLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yY2VmOWVmNCZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJjZWY5ZWY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2NvbC9jb2wudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgIDpjbGFzcz1cImNsYXNzc1wiIDpzdHlsZT1cInN0eWxlXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPSdjc3MnIHNjb3BlZD5cbiAgICAudi1jb250ZW50e1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGNvbnN0IHByZWZpeENscyA9ICd2LWNvbnRlbnQnO1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBuYW1lOiBwcmVmaXhDbHMsXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIHN0eWxlOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeENsc31gXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtY29udGVudFtkYXRhLXYtNTQ1OTI2OGZde1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2hlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTgzZGVhZTcmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTgzZGVhZTcmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTgzZGVhZTdcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU4M2RlYWU3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU4M2RlYWU3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU4M2RlYWU3JnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTgzZGVhZTcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbGF5b3V0L2hlYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2E3NDhjZjkmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdhNzQ4Y2Y5Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdhNzQ4Y2Y5Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vYnV0dG9uLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUzNTBkNDA0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2J1dHRvbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MzUwZDQwNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiaW1wb3J0ICcuL2lucHV0LmNzcyc7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2lucHV0Lmh0bWwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZ1ZS5leHRlbmQoe1xuICAgIHRlbXBsYXRlOiBodG1sLFxuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgIGN1cnJlbnRWYWx1ZTogdGhpcy52YWx1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3RleHQnXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICBuYW1lOiBTdHJpbmcsXG4gICAgICAgIGN1c3RvbUNsYXNzOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgICAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgICAgIGF1dG9Db21wbGV0ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ29mZidcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3NtYWxsJ1xuICAgICAgICB9LFxuICAgICAgICBmb3JtOiBTdHJpbmcsXG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgaW1hZ2VJY29uOiBCb29sZWFuXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZUJsdXI6IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2JsdXInLCBldmVudCk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgdGhpcy4kcmVmcy5pbnB1dC52YWx1ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlRm9jdXM6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdmb2N1cycsIGV2ZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVJY29uQ2xpY2s6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiaWNvbi1jbGlja1wiLCBldmVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5wdXRTZWxlY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5pbnB1dC5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJG9uKCdpbnB1dFNlbGVjdCcsIHRoaXMuaW5wdXRTZWxlY3QpO1xuICAgIH0sXG4gICAgd2F0Y2g6e1xuICAgICAgICBjdXJyZW50VmFsdWU6IGZ1bmN0aW9uKG5ld1Ype1xuICAgICAgICAgICAgdGhpcy4kZW1pdChcImlucHV0XCIsIG5ld1YpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgbmV3Vik7XG4gICAgICAgIH1cbiAgICB9XG59KTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2Zvb3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzcwYjg2ZjVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Zvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNzBiODZmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNzBiODZmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZm9vdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzBiODZmNVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM3MGI4NmY1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2xheW91dC9mb290ZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTgzZGVhZTcmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODNkZWFlNyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTgzZGVhZTcmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNkZGFiMjU2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZGRhYjI1NiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZGRhYjI1NiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2J1dHRvbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MzUwZDQwNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImI5YzM2Yjk0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2J1dHRvbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MzUwZDQwNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2J1dHRvbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MzUwZDQwNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHRlbXBsYXRlPlxuICAgIDx0Ym9keSA6Y2xhc3M9XCJjbGFzc3NcIj48c2xvdD48L3Nsb3Q+PC90Ym9keT5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzcmM9Jy4vdGFibGUuY3NzJyBsYW5nPVwiY3NzXCIgc2NvcGVkPjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ3YtdGFibGUtYm9keSc7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBwcmVmaXhDbHMsXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc3MgPSBbXG4gICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeENsc31gXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgY2xhc3M6IF92bS5jbGFzc3MgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwidi1oZWFkZXItd2lkdGhcIiwgc3R5bGU6IF92bS5zdHlsZXMgfSxcbiAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS10ci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS10ci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jb250ZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDU5MjY4ZiZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NDU5MjY4ZiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1NDU5MjY4ZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTQ1OTI2OGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTQ1OTI2OGYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU0NTkyNjhmJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTQ1OTI2OGYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTE0NDRjMzgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTE0NDRjMzgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsImltcG9ydCBjb2wgZnJvbSAnLi9jb2wvaW5kZXguanMnO1xuaW1wb3J0IHJvdyBmcm9tICcuL3Jvdy9pbmRleC5qcyc7XG5pbXBvcnQgeyBoZWFkZXIsY29udGVudCxmb290ZXIsbGF5b3V0LHNpZGVyIH0gZnJvbSAnLi9sYXlvdXQvaW5kZXguanMnO1xuXG5pbXBvcnQgeyB0YWJsZSx0aGVhZCx0Ym9keSx0ciB9IGZyb20gJy4vdGFibGUvaW5kZXguanMnO1xuXG5pbXBvcnQgeyBtZW51LCBtZW51SXRlbSwgbWVudUdyb3VwLCBtZW51U3ViIH0gZnJvbSAnLi9tZW51L2luZGV4LmpzJztcblxuXG5pbXBvcnQgYnV0dG9uIGZyb20gJy4vYnV0dG9uL2luZGV4LmpzJztcbnZhciBpbnB1dCA9IHJlcXVpcmUoXCIuL2lucHV0L2lucHV0LmpzXCIpO1xuXG5cbi8vIHZhciBNb2RhbCA9IHJlcXVpcmUoXCIuL21vZGFsL21vZGFsLmpzXCIpO1xuLy8gdmFyIE5vdGljZSA9IHJlcXVpcmUoXCIuL25vdGljZS9ub3RpZmljYXRpb24uanNcIik7XG4vLyB2YXIgTWVzc2FnZSA9IHJlcXVpcmUoXCIuL21lc3NhZ2UvaW5kZXguanNcIik7XG4vL1xuXG4vLyB2YXIgU2VsZWN0ID0gcmVxdWlyZShcIi4vc2VsZWN0L3NlbGVjdC5qc1wiKTtcbi8vIHZhciBPcHRpb24gPSByZXF1aXJlKFwiLi9zZWxlY3Qvb3B0aW9uLmpzXCIpO1xuXG5cbi8vIHZhciBUb29sdGlwID0gcmVxdWlyZShcIi4vdG9vbHRpcC90b29sdGlwLmpzXCIpO1xuLy8gdmFyIENoZWNrYm94ID0gcmVxdWlyZShcIi4vY2hlY2tib3gvY2hlY2tib3guanNcIik7XG4vLyB2YXIgUmFkaW8gPSByZXF1aXJlKFwiLi9yYWRpby9yYWRpby5qc1wiKTtcbi8vIHZhciBQb3BvdmVyID0gcmVxdWlyZShcIi4vcG9wb3Zlci9wb3BvdmVyLmpzXCIpO1xuLy8gdmFyIFBvcG92ZXJEaXJlY3RpdmUgPSByZXF1aXJlKFwiLi9wb3BvdmVyL2RpcmVjdGl2ZS5qc1wiKTtcbi8vIHZhciBEcm9wZG93biA9IHJlcXVpcmUoXCIuL2Ryb3Bkb3duL2Ryb3Bkb3duLmpzXCIpO1xuLy8gdmFyIERyb3Bkb3duTWVudSA9IHJlcXVpcmUoXCIuL2Ryb3Bkb3duL2Ryb3Bkb3duLW1lbnUuanNcIik7XG4vLyB2YXIgRHJvcGRvd25JdGVtID0gcmVxdWlyZShcIi4vZHJvcGRvd24vZHJvcGRvd24taXRlbS5qc1wiKTtcbi8vIC8vXG4vLyB2YXIgUGFnaW5hdGlvbiA9IHJlcXVpcmUoXCIuL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5qc1wiKTtcblxuLy8gdmFyIEluZmluaXRlU2Nyb2xsID0gcmVxdWlyZShcIi4vZGlyZWN0aXZlcy9pbmZpbml0ZS1zY3JvbGwuanNcIik7XG4vLyB2YXIgTGF6eWxvYWQgPSByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL2ltZy1sYXp5bG9hZC5qc1wiKTtcblxuLy8gdmFyIENsb2NrID0gcmVxdWlyZShcIi4vZGF0ZXRpbWUvcGlja2VyL3RpbWUtcGlja2VyLmpzXCIpO1xuLy8gdmFyIERhdGUgPSByZXF1aXJlKFwiLi9kYXRldGltZS9waWNrZXIvZGF0ZS1waWNrZXIuanNcIik7XG5cbi8vIHZhciBWdWVBd2Vzb21lU3dpcGVyID0gcmVxdWlyZShcIi4vc3dpcHJlL3Z1ZS1hd2Vzb21lLXN3aXBlci5qc1wiKTtcblxubGV0IGNvbXBvbmVudHMgPSB7XG4gICAgY29sLFxuICAgIHJvdyxcbiAgICBcbiAgICBoZWFkZXIsXG4gICAgY29udGVudCxcbiAgICBmb290ZXIsXG4gICAgbGF5b3V0LFxuICAgIHNpZGVyLFxuXG4gICAgYnV0dG9uLFxuICAgIGlucHV0LFxuXG4gICAgdGFibGUsXG4gICAgdGhlYWQsXG4gICAgdGJvZHksXG4gICAgdHIsXG5cbiAgICBtZW51LFxuICAgIG1lbnVJdGVtLFxuICAgIG1lbnVHcm91cCxcbiAgICBtZW51U3ViXG59XG5cblxuXG5mdW5jdGlvbiBpbnN0YWxsKFZ1ZSl7XG4gICAgT2JqZWN0LmtleXMoY29tcG9uZW50cykuZm9yRWFjaCh2YWx1ZT0+e1xuICAgICAgICBWdWUuY29tcG9uZW50KCd0LScrdmFsdWUsIGNvbXBvbmVudHNbdmFsdWVdKTtcbiAgICB9KTtcblxuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3Qtcm93JywgY29tcG9uZW50c1sncm93J10pO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3QtY29sJywgY29sKTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LWlucHV0JywgSW5wdXQpO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3Qtc2VsZWN0JywgU2VsZWN0KTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LW9wdGlvbicsIE9wdGlvbik7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1idXR0b24nLCBCdXR0b24pO1xuXG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC10b29sdGlwJywgVG9vbHRpcCk7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1jaGVja2JveCcsIENoZWNrYm94KTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LXJhZGlvJywgUmFkaW8pO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3QtcG9wb3ZlcicsIFBvcG92ZXIpO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3QtZHJvcGRvd24nLCBEcm9wZG93bik7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1kcm9wZG93bi1tZW51JywgRHJvcGRvd25NZW51KTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LWRyb3Bkb3duLWl0ZW0nLCBEcm9wZG93bkl0ZW0pO1xuXG4gICAgLy8gVnVlLmNvbXBvbmVudCgnbW9kYWwnLCBNb2RhbCk7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgnbm90aWNlJywgTm90aWNlKTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCdtZXNzYWdlJywgTWVzc2FnZSk7XG5cbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LXBhZ2luYXRpb24nLCBQYWdpbmF0aW9uKTtcblxuICAgIC8vIFZ1ZS5wcm90b3R5cGUuJG5vdGlmeSA9IE5vdGljZTtcbiAgICAvLyBWdWUucHJvdG90eXBlLiRtZXNzYWdlID0gTWVzc2FnZTtcblxuICAgIC8vIFZ1ZS5kaXJlY3RpdmUoJ0luZmluaXRlU2Nyb2xsJywgSW5maW5pdGVTY3JvbGwpO1xuICAgIC8vIFZ1ZS5kaXJlY3RpdmUoJ2xhenknLCBMYXp5bG9hZCk7XG4gICAgLy8gVnVlLmRpcmVjdGl2ZSgncG9wb3ZlcicsIFBvcG92ZXJEaXJlY3RpdmUpO1xuXG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1jbG9jay1waWNrZXInLCBDbG9jayk7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1kYXRlLXBpY2tlcicsIERhdGUpO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3N3aXBlcicsIFZ1ZUF3ZXNvbWVTd2lwZXIuc3dpcGVyKTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCdzd2lwZXJTbGlkZScsIFZ1ZUF3ZXNvbWVTd2lwZXIuc3dpcGVyU2xpZGUpO1xufVxuXG5cbmlmKHdpbmRvdy5WdWUpe1xuICAgIC8vIHdpbmRvdy5pbmZpbml0ZVNjcm9sbCA9IEluZmluaXRlU2Nyb2xsO1xuICAgIGluc3RhbGwoVnVlKTtcbn1cblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtbWVudVtkYXRhLXYtM2RkYWIyNTZde1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udi1tZW51W2RhdGEtdi0zZGRhYjI1Nl06OmFmdGVye1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQ6ICNkZGRlZTE7XFxufVxcbi52LW1lbnUtaXRlbS1zdWJbZGF0YS12LTNkZGFiMjU2XXtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi52LW1lbnUtaXRlbS1zdWIuYWN0aXZlW2RhdGEtdi0zZGRhYjI1Nl17XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkY3NzNEO1xcbiAgICBjb2xvcjogI0ZGNzczRDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiPHRlbXBsYXRlPlxuICAgIDx0aGVhZCA6Y2xhc3M9XCJjbGFzc3NcIj48c2xvdD48L3Nsb3Q+PC90aGVhZD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzcmM9Jy4vdGFibGUuY3NzJyBsYW5nPVwiY3NzXCIgc2NvcGVkPjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ3YtdGFibGUtaGVhZCc7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBwcmVmaXhDbHMsXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc3MgPSBbXG4gICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeENsc31gXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgbWVudSBmcm9tICcuL21lbnUudnVlJztcbmltcG9ydCBtZW51SXRlbSBmcm9tICcuL21lbnUtaXRlbS52dWUnO1xuaW1wb3J0IG1lbnVTdWIgZnJvbSAnLi9tZW51LXN1Yi52dWUnO1xuaW1wb3J0IG1lbnVHcm91cCBmcm9tICcuL21lbnUtZ3JvdXAudnVlJztcblxuZXhwb3J0IHsgbWVudSwgbWVudUl0ZW0sIG1lbnVTdWIsIG1lbnVHcm91cCB9IiwiaW1wb3J0IENvbCBmcm9tICcuL2NvbC52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBDb2w7IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyODcyNWY4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNzA2NzRmNDNcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyODcyNWY4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyODcyNWY4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udC1pbnB1dHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBsaW5lLWhlaWdodDogMTtcXG59XFxuXFxuLnQtaW5wdXQgLnQtaW5wdXRfaWNvbntcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMzZweDtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4udC1pbnB1dCAudC1pbnB1dF9pY29uLmltYWdle1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBZ0FBQUFFQ0FRQUFBQVp4TFo3QUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUNCalNGSk5BQUI2SmdBQWdJUUFBUG9BQUFDQTZBQUFkVEFBQU9wZ0FBQTZtQUFBRjNDY3VsRThBQUFBQW1KTFIwUUEvNGVQekw4QUFBQUhkRWxOUlFmaEFRUVJPQTVPRFlUYkFBQUFLa2xFUVZRSTEyT2MyY0JRejRBQWpjeGJEdmd5TWpqQXVPa056QXdNY0tIRzlBYTR5cGtOTTZFY0FJVHBDeWVXRzFhckFBQUFKWFJGV0hSa1lYUmxPbU55WldGMFpRQXlNREUzTFRBeExUQTBWREUzT2pVMk9qRTBLekE0T2pBd2ZSZWFHUUFBQUNWMFJWaDBaR0YwWlRwdGIyUnBabmtBTWpBeE55MHdNUzB3TkZReE56bzFOam94TkNzd09Eb3dNQXhLSXFVQUFBQUFTVVZPUks1Q1lJST0pIG5vLXJlcGVhdCBjZW50ZXI7XFxufVxcblxcbi50LWlucHV0X2ljb24gKyAudC1pbnB1dF9vcml7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDM2cHg7XFxufVxcblxcbi50LWlucHV0X29yaXtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzZweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjogIzY2NjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0YxRURFRDtcXG4gICAgYm9yZGVyLXJhZGl1czogMDtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4udC1pbnB1dF9vcmk6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjODQ5MkE2O1xcbn1cXG5cXG4udC1pbnB1dF9vcmk6Zm9jdXMge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkY3NDM4O1xcbn1cXG5cXG4udC1pbnB1dC5kaXNhYmxlZCAudC1pbnB1dF9vcml7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDI0MiwgMjQ3KTtcXG4gICAgY29sb3I6IHJnYigxODcsIDE4NywgMTg3KTtcXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjExLCAyMjAsIDIzMCk7XFxufVxcblxcblxcbi50LWlucHV0X2xhcmdle1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbi50LWlucHV0X2xhcmdlIC50LWlucHV0X29yaXtcXG4gICAgaGVpZ2h0OiA0MnB4O1xcbn1cXG5cXG4udC1pbnB1dF9zbWFsbHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udC1pbnB1dF9zbWFsbCAudC1pbnB1dF9vcml7XFxuICAgIGhlaWdodDogMzBweDtcXG59XFxuLnQtaW5wdXRfc21hbGwgLnQtaW5wdXRfaWNvbntcXG4gICAgd2lkdGg6IDMwcHg7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XFxufVxcbi50LWlucHV0X3NtYWxsIC50LWlucHV0X2ljb24gKyAudC1pbnB1dF9vcml7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XFxufVxcblxcbi50LWlucHV0X3RpbnkgLnQtaW5wdXRfb3Jpe1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnQtaW5wdXRfdGlueSAudC1pbnB1dF9pY29ue1xcbiAgICB3aWR0aDogMjZweDtcXG4gICAgaGVpZ2h0OiAyNnB4O1xcbiAgICBsaW5lLWhlaWdodDogMjZweDtcXG59XFxuLnQtaW5wdXRfdGlueSAudC1pbnB1dF9pY29uICsgLnQtaW5wdXRfb3Jpe1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibGlcIixcbiAgICB7IGNsYXNzOiBfdm0uY2xhc3NzLCBvbjogeyBjbGljazogX3ZtLml0ZW1IYW5kbGUgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IFtfdm0ucHJvZml4Q2xzICsgXCItdGl0bGVcIl0gfSwgW192bS5fdChcInRpdGxlXCIpXSwgMiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFwiZGVmYXVsdFwiKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRib2R5XCIsIHsgY2xhc3M6IF92bS5jbGFzc3MgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1YmFiNDNjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1YmFiNDNjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9jb2wuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmNlZjllZjQmbGFuZz1zdHlsdXMmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1oZWFkZXJbZGF0YS12LTU4M2RlYWU3XXtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcbi52LWhlYWRlci13aWR0aFtkYXRhLXYtNTgzZGVhZTdde1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM1MGQ0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2J1dHRvbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MzUwZDQwNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM1MGQ0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzJmOWU5YiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzJmOWU5YiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGNsYXNzOiBfdm0uY2xhc3NzIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMTQ0NGMzOCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQwZGJiNDgwXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWExNDQ0YzM4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTE0NDRjMzgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LW1lbnVbZGF0YS12LTllYTI1NTUyXXtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnYtbWVudVtkYXRhLXYtOWVhMjU1NTJdOjphZnRlcntcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kOiAjZGRkZWUxO1xcbn1cXG4udi1tZW51LWl0ZW0tc3ViW2RhdGEtdi05ZWEyNTU1Ml17XFxuICAgIGZsb2F0OiBsZWZ0O1xcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XFxuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgei1pbmRleDogMztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4udi1tZW51LWl0ZW0tc3ViLmFjdGl2ZVtkYXRhLXYtOWVhMjU1NTJde1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI0ZGNzczRDtcXG4gICAgY29sb3I6ICNGRjc3M0Q7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdhNzQ4Y2Y5Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMWYwZjkxMzRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2E3NDhjZjkmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YTc0OGNmOSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWJhYjQzYyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjViYWI0M2MmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjViYWI0M2MmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNGNlMGViYjBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgYnV0dG9uIGZyb20gJy4vYnV0dG9uLnZ1ZSc7XG5leHBvcnQgZGVmYXVsdCBidXR0b247IiwiLy8g5Yik5pat5Y+C5pWw5piv5ZCm5piv5YW25Lit5LmL5LiAXG5leHBvcnQgZnVuY3Rpb24gb25lT2YodmFsdWUsdmFsdWVMaXN0KXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodmFsdWUgPT09IHZhbHVlTGlzdFtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyDlr7vmib7niLbnuqfnu4Tku7ZcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ29tcG9uZW50VXB3YXJkKGNvbnRleHQsIGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudE5hbWVzKXtcbiAgICBpZiAodHlwZW9mIGNvbXBvbmVudE5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbXBvbmVudE5hbWVzID0gW2NvbXBvbmVudE5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudE5hbWVzID0gY29tcG9uZW50TmFtZTtcbiAgICB9XG5cbiAgICBsZXQgcGFyZW50ID0gY29udGV4dC4kcGFyZW50O1xuICAgIGxldCBuYW1lID0gcGFyZW50LiRvcHRpb25zLm5hbWU7XG4gICAgXG4gICAgd2hpbGUgKHBhcmVudCAmJiAoIW5hbWUgfHwgY29tcG9uZW50TmFtZXMuaW5kZXhPZihuYW1lKSA8IDApKSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xuICAgICAgICBpZiAocGFyZW50KSBuYW1lID0gcGFyZW50LiRvcHRpb25zLm5hbWU7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQ7XG59XG5cbi8vIOWvu+aJvuWtkOe6p+e7hOS7tlxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb21wb25lbnREb3dud2FyZCAoY29udGV4dCwgY29tcG9uZW50TmFtZSkge1xuICAgIGNvbnN0IGNoaWxkcmVucyA9IGNvbnRleHQuJGNoaWxkcmVuO1xuICAgIGxldCBjaGlsZHJlbiA9IG51bGw7XG5cbiAgICBpZiAoY2hpbGRyZW5zLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVucykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNoaWxkLiRvcHRpb25zLm5hbWU7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gY29tcG9uZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gZmluZENvbXBvbmVudERvd253YXJkKGNoaWxkLCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW4pIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbn1cblxuLy8g5a+75om+5ZCM57qn57uE5Lu2XG5leHBvcnQgZnVuY3Rpb24gZmluZEJyb3RoZXJzQ29tcG9uZW50cyAoY29udGV4dCwgY29tcG9uZW50TmFtZSwgZXhjZXB0TWUgPSB0cnVlKSB7XG4gICAgbGV0IHJlcyA9IGNvbnRleHQuJHBhcmVudC4kY2hpbGRyZW4uZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS4kb3B0aW9ucy5uYW1lID09PSBjb21wb25lbnROYW1lO1xuICAgIH0pO1xuICAgIGxldCBpbmRleCA9IHJlcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLl91aWQgPT09IGNvbnRleHQuX3VpZCk7XG4gICAgaWYgKGV4Y2VwdE1lKSByZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gcmVzO1xufVxuXG4vLyBGaW5kIGNvbXBvbmVudHMgZG93bndhcmRcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ29tcG9uZW50c0Rvd253YXJkIChjb250ZXh0LCBjb21wb25lbnROYW1lKSB7XG4gICAgcmV0dXJuIGNvbnRleHQuJGNoaWxkcmVuLnJlZHVjZSgoY29tcG9uZW50cywgY2hpbGQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLiRvcHRpb25zLm5hbWUgPT09IGNvbXBvbmVudE5hbWUpIGNvbXBvbmVudHMucHVzaChjaGlsZCk7XG4gICAgICAgIGNvbnN0IGZvdW5kQ2hpbGRzID0gZmluZENvbXBvbmVudHNEb3dud2FyZChjaGlsZCwgY29tcG9uZW50TmFtZSk7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmNvbmNhdChmb3VuZENoaWxkcyk7XG4gICAgfSwgW10pO1xufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS1zdWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS1zdWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWExNDQ0YzM4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMTQ0NGMzOCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMTQ0NGMzOCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjx0ZW1wbGF0ZT5cbiAgICA8dWwgOmNsYXNzPSdjbGFzc3MnPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC91bD5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz1cImNzc1wiIHNyYz0nLi9pbmRleC5jc3MnIHNjb3BlZD48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBmaW5kQ29tcG9uZW50VXB3YXJkLCBmaW5kQ29tcG9uZW50c0Rvd253YXJkIH0gZnJvbSAnLi4vdXRpbC9hc3Npc3QnO1xuXG4gICAgY29uc3QgcHJvZml4Q2xzID0gJ3YtbWVudSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbmFtZTogcHJvZml4Q2xzLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgYWN0aXZlTmFtZTp7XG4gICAgICAgICAgICAgICAgdHlwZTogW1N0cmluZyxOdW1iZXJdLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc3MgPSBbXG4gICAgICAgICAgICAgICAgICAgIGAke3Byb2ZpeENsc31gXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICAgICAgJG9uQ2xpY2tIYW5kbGU6ZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLiRhY3RpdmVIYW5kbGUodmFsKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdvbjpzZWxlY3QnLHZhbCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgJGFjdGl2ZUhhbmRsZTpmdW5jdGlvbihuYW1lKXtcbiAgICAgICAgICAgICAgICBmaW5kQ29tcG9uZW50c0Rvd253YXJkKHRoaXMsJ3YtbWVudS1pdGVtLXN1YicpLmZvckVhY2goKHZhbCk9PntcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmKHZhbC5uYW1lID09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5hY3RpdmUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdmFsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuJGFjdGl2ZUhhbmRsZSh0aGlzLmFjdGl2ZU5hbWUpO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEyODcyNWY4JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyODcyNWY4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjEyODcyNWY4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxMjg3MjVmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxMjg3MjVmOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMjg3MjVmOCZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzEyODcyNWY4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2xheW91dC9sYXlvdXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgOmNsYXNzPSdjbGFzc3MnPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIiBzcmM9Jy4vaW5kZXguY3NzJyBzY29wZWQ+PC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgY29uc3QgcHJvZml4Q2xzID0gJ3YtbWVudS1pdGVtLWdyb3VwJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBuYW1lOiBwcm9maXhDbHMsXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc3MgPSBbXG4gICAgICAgICAgICAgICAgICAgIGAke3Byb2ZpeENsc31gXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiA6c3R5bGU9XCJzdHlsZVwiIDpjbGFzcz1cImNsYXNzc1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz0nY3NzJyBzY29wZWQ+XG4gICAgLnYtc2lkZXJ7XG4gICAgICAgIFxuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGNvbnN0IHByZWZpeENscyA9ICd2LXNpZGVyJztcbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbmFtZTogcHJlZml4Q2xzLFxuICAgICAgICBwcm9wczp7XG4gICAgICAgICAgIHdpZHRoOntcbiAgICAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsU3RyaW5nXSxcbiAgICAgICAgICAgICAgIGRlZmF1bHQ6IDIwMFxuICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeENsc31gXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0eWxlOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGAke3RoaXMud2lkdGh9cHhgLFxuICAgICAgICAgICAgICAgICAgICBtaW5XaWR0aDogYCR7dGhpcy53aWR0aH1weGAsXG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUtaXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5wdXQuY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuL2lucHV0LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuL2lucHV0LmNzc1wiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ1bFwiLCB7IGNsYXNzOiBfdm0uY2xhc3NzIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Jvdy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYmY3ZWEzYSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcm93LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiZjdlYTNhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Jvdy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYmY3ZWEzYSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBjbGFzczogX3ZtLmNsYXNzcyB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtcm93W2RhdGEtdi0xYmY3ZWEzYV17XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB6b29tOiAxO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuLnYtcm93W2RhdGEtdi0xYmY3ZWEzYV06YWZ0ZXIsIC52LXJvd1tkYXRhLXYtMWJmN2VhM2FdOmJlZm9yZXtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG4udi1yb3dbZGF0YS12LTFiZjdlYTNhXTphZnRlciB7XFxuICAgIGNsZWFyOiBib3RoO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIGZvbnQtc2l6ZTogMDtcXG4gICAgaGVpZ2h0OiAwO1xcbn1cXG4udi1yb3ctZmxleFtkYXRhLXYtMWJmN2VhM2Fde1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi52LXJvdy1mbGV4LXN0YXJ0W2RhdGEtdi0xYmY3ZWEzYV17XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuLnYtcm93LWZsZXgtZW5kW2RhdGEtdi0xYmY3ZWEzYV17XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi52LXJvdy1mbGV4LWNlbnRlcltkYXRhLXYtMWJmN2VhM2Fde1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnYtcm93LWZsZXgtc3BhY2UtYXJvdW5kW2RhdGEtdi0xYmY3ZWEzYV17XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4udi1yb3ctZmxleC1zcGFjZS1iZXR3ZWVuW2RhdGEtdi0xYmY3ZWEzYV17XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnYtcm93LWZsZXgtdG9wW2RhdGEtdi0xYmY3ZWEzYV17XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4udi1yb3ctZmxleC1taWRkbGVbZGF0YS12LTFiZjdlYTNhXXtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnYtcm93LWZsZXgtYm90dG9tW2RhdGEtdi0xYmY3ZWEzYV17XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjllZjc3OGMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIxODZhYTBlZlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yOWVmNzc4YyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI5ZWY3NzhjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lbnUtZ3JvdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS1ncm91cC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzOiBfdm0uY2xhc3NzLCBzdHlsZTogX3ZtLnN0eWxlcyB9LFxuICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0NTkyNjhmJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTQ1OTI2OGYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTQ1OTI2OGYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzZWY4MjVhZVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0NTkyNjhmJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NDU5MjY4ZiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgOmNsYXNzPVwiY2xhc3NzXCIgOnN0eWxlPVwic3R5bGVcIj48c2xvdD48L3Nsb3Q+PC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL3V0aWwvYXNzaXN0JztcbiAgICBjb25zdCBwcmVmaXhDbHMgPSAndi1mb290ZXInO1xuXG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIG5hbWU6IHByZWZpeENscyxcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgdHlwZTp7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uZU9mKHZhbCxbJycsJ2ZpeGVkJ10pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHdpZHRoOntcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5kZXg6e1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIHN0eWxlOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy53aWR0aCArICclJyxcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnR5cGUpe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5wb3NpdGlvbiA9IHRoaXMudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuYm90dG9tID0gMDtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuekluZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2xhc3NzOmZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhDbHN9YFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWVudS1zdWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTllYTI1NTUyJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVudS1zdWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL21lbnUtc3ViLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllYTI1NTUyJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjllYTI1NTUyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5ZWEyNTU1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5ZWEyNTU1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWVudS1zdWIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTllYTI1NTUyJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOWVhMjU1NTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbWVudS9tZW51LXN1Yi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi10YWJsZVtkYXRhLXYtN2E3NDhjZjlde1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWFlYztcXG59XFxuLnYtdGFibGUtaGVhZFtkYXRhLXYtN2E3NDhjZjlde1xcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY5O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udi10YWJsZS1oZWFkIHRyW2RhdGEtdi03YTc0OGNmOV17XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1oZWFkIHRyIHRoW2RhdGEtdi03YTc0OGNmOV17XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuLnYtdGFibGUtYm9keVtkYXRhLXYtN2E3NDhjZjlde1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnYtdGFibGUtYm9keSB0cltkYXRhLXYtN2E3NDhjZjlde1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWFlYztcXG59XFxuLnYtdGFibGUtYm9keSB0ciB0ZFtkYXRhLXYtN2E3NDhjZjlde1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9vdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWVudS1ncm91cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2RkYWIyNTYmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tZW51LWdyb3VwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9tZW51LWdyb3VwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNkZGFiMjU2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjNkZGFiMjU2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZGRhYjI1NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZGRhYjI1NicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWVudS1ncm91cC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2RkYWIyNTYmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZGRhYjI1NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9tZW51L21lbnUtZ3JvdXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tZW51LWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5ZWY3NzhjJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVudS1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9tZW51LWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjllZjc3OGMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjllZjc3OGNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI5ZWY3NzhjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI5ZWY3NzhjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tZW51LWl0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI5ZWY3NzhjJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjllZjc3OGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbWVudS9tZW51LWl0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90YWJsZS1ib2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZjJkNTk1ZCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYmxlLWJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlLWJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWYyZDU5NWQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWYyZDU5NWRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFmMmQ1OTVkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFmMmQ1OTVkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90YWJsZS1ib2R5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZjJkNTk1ZCZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFmMmQ1OTVkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3RhYmxlL3RhYmxlLWJvZHkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWYyZDU5NWQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzZmYwYWEwMlwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZjJkNTk1ZCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmMmQ1OTVkJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udC1idG5bZGF0YS12LTUzNTBkNDA0XXtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLnQtYnRuLmRpc2FibGVkW2RhdGEtdi01MzUwZDQwNF0sIC50LWJ0bltkaXNhYmxlZF1bZGF0YS12LTUzNTBkNDA0XSwudC1idG4uZGlzYWJsZWRbZGF0YS12LTUzNTBkNDA0XTpob3ZlciwudC1idG5bZGlzYWJsZWRdW2RhdGEtdi01MzUwZDQwNF06aG92ZXJ7XFxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxuICAgIGNvbG9yOiAjYmJiZWM0O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xcbiAgICBib3JkZXItY29sb3I6ICNkZGRlZTE7XFxufVxcbi50LWJ0bi1zaXplLXRpbnlbZGF0YS12LTUzNTBkNDA0XXtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBwYWRkaW5nOiA0cHggMTVweDtcXG59XFxuLnQtYnRuLXNpemUtZGVmYXVsdFtkYXRhLXYtNTM1MGQ0MDRde1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDZweCAxOHB4O1xcbn1cXG4udC1idG4tc2l6ZS1sYXJnZVtkYXRhLXYtNTM1MGQ0MDRde1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIHBhZGRpbmc6IDhweCAyOHB4O1xcbn1cXG4udC1idG4tc2l6ZS1sb25nW2RhdGEtdi01MzUwZDQwNF17XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgcGFkZGluZzogNnB4IDE4cHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4udC1idG4tdHlwZS1kZWZhdWx0W2RhdGEtdi01MzUwZDQwNF17XFxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxuICAgIGNvbG9yOiAjNDk1MDYwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkZWUxO1xcbn1cXG4udC1idG4tdHlwZS1kZWZhdWx0W2RhdGEtdi01MzUwZDQwNF06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICAgIGNvbG9yOiAjNTdhM2YzO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNTdhM2YzO1xcbn1cXG4udC1idG4tdHlwZS10ZXh0W2RhdGEtdi01MzUwZDQwNF17XFxuICAgIGNvbG9yOiAjNDk1MDYwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDApO1xcbn1cXG4udC1idG4tdHlwZS10ZXh0W2RhdGEtdi01MzUwZDQwNF06aG92ZXJ7XFxuICAgIGNvbG9yOiAjNTdhM2YzO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDApO1xcbn1cXG4udC1idG4tdHlwZS13YXJuaW5nW2RhdGEtdi01MzUwZDQwNF17XFxuICAgIGJhY2tncm91bmQ6ICNmZjk5MDA7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmY5OTAwO1xcbn1cXG4udC1idG4tdHlwZS13YXJuaW5nW2RhdGEtdi01MzUwZDQwNF06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6ICNmZmFkMzM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZhZDMzO1xcbn1cXG4udC1idG4tdHlwZS1lcnJvcltkYXRhLXYtNTM1MGQ0MDRde1xcbiAgICBiYWNrZ3JvdW5kOiAjZWQzZjE0O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VkM2YxNDtcXG59XFxuLnQtYnRuLXR5cGUtZXJyb3JbZGF0YS12LTUzNTBkNDA0XTpob3ZlcntcXG4gICAgYmFja2dyb3VuZDogI2YxNjU0MztcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZDNmMTQ7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODNkZWFlNyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImJjZWZmNGM4XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODNkZWFlNyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODNkZWFlNyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyODcyNWY4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMjg3MjVmOCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS1oZWFkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLWhlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzczogX3ZtLmNsYXNzcywgc3R5bGU6IF92bS5zdHlsZXMgfSxcbiAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInQtaW5wdXRcXFwiIDpjbGFzcz1cXFwiW3NpemU/KCd0LWlucHV0Xycrc2l6ZSk6Jycse2Rpc2FibGVkOmRpc2FibGVkfV1cXFwiPlxcblxcbiAgICA8aSBjbGFzcz1cXFwibWF0ZXJpYWwtaWNvbnMgdC1pbnB1dF9pY29uXFxcIiB2LWlmPVxcXCJpY29uXFxcIiBAY2xpY2s9XFxcImhhbmRsZUljb25DbGlja1xcXCI+e3tpY29ufX08L2k+XFxuICAgIDxpIGNsYXNzPVxcXCJ0LWlucHV0X2ljb24gaW1hZ2VcXFwiIHYtaWY9XFxcImltYWdlSWNvblxcXCIgQGNsaWNrPVxcXCJoYW5kbGVJY29uQ2xpY2tcXFwiPjwvaT5cXG5cXG4gICAgPGlucHV0XFxuICAgICAgICBjbGFzcz1cXFwidC1pbnB1dF9vcmlcXFwiXFxuICAgICAgICA6Y2xhc3M9XFxcIltjdXN0b21DbGFzc11cXFwiXFxuICAgICAgICA6dHlwZT1cXFwidHlwZVxcXCJcXG4gICAgICAgIDpwbGFjZWhvbGRlcj1cXFwicGxhY2Vob2xkZXJcXFwiXFxuICAgICAgICA6bmFtZT1cXFwibmFtZVxcXCJcXG4gICAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiXFxuICAgICAgICA6cmVhZG9ubHk9XFxcInJlYWRvbmx5XFxcIlxcbiAgICAgICAgOmF1dG9jb21wbGV0ZT1cXFwiYXV0b0NvbXBsZXRlXFxcIlxcbiAgICAgICAgOmF1dG9mb2N1cz1cXFwiYXV0b2ZvY3VzXFxcIlxcbiAgICAgICAgOnZhbHVlPVxcXCJ2YWx1ZVxcXCJcXG4gICAgICAgIDpmb3JtPVxcXCJmb3JtXFxcIlxcbiAgICAgICAgcmVmPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgIEBpbnB1dD1cXFwidXBkYXRlVmFsdWUoJGV2ZW50LnRhcmdldC52YWx1ZSlcXFwiXFxuICAgICAgICBAZm9jdXM9XFxcImhhbmRsZUZvY3VzXFxcIlxcbiAgICAgICAgQGJsdXI9XFxcImhhbmRsZUJsdXJcXFwiXFxuICAgID5cXG5cXG48L2Rpdj5cIjsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmMmQ1OTVkJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZjJkNTk1ZCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZjJkNTk1ZCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzOiBfdm0uY2xhc3NzLCBzdHlsZTogX3ZtLnN0eWxlIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0YWJsZVwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiBfdm0uY2xhc3NzLFxuICAgICAgYXR0cnM6IHsgY2VsbHNwYWNpbmc6IFwiMFwiLCBjZWxscGFkZGluZzogXCIwXCIsIGJvcmRlcjogXCIwXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiY29sZ3JvdXBcIixcbiAgICAgICAgX3ZtLl9sKF92bS53aWR0aCwgZnVuY3Rpb24oaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJjb2xcIiwgeyBrZXk6IGluZGV4LCBhdHRyczogeyB3aWR0aDogaXRlbSB9IH0pXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fdChcImRlZmF1bHRcIilcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWVhMjU1NTImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllYTI1NTUyJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllYTI1NTUyJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuICBNb2RpZmllZCBieSBFdmFuIFlvdSBAeXl4OTkwODAzXG4qL1xuXG5pbXBvcnQgbGlzdFRvU3R5bGVzIGZyb20gJy4vbGlzdFRvU3R5bGVzJ1xuXG52YXIgaGFzRG9jdW1lbnQgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnXG5cbmlmICh0eXBlb2YgREVCVUcgIT09ICd1bmRlZmluZWQnICYmIERFQlVHKSB7XG4gIGlmICghaGFzRG9jdW1lbnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3Z1ZS1zdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudC4gJyArXG4gICAgXCJVc2UgeyB0YXJnZXQ6ICdub2RlJyB9IGluIHlvdXIgV2VicGFjayBjb25maWcgdG8gaW5kaWNhdGUgYSBzZXJ2ZXItcmVuZGVyaW5nIGVudmlyb25tZW50LlwiXG4gICkgfVxufVxuXG4vKlxudHlwZSBTdHlsZU9iamVjdCA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcGFydHM6IEFycmF5PFN0eWxlT2JqZWN0UGFydD5cbn1cblxudHlwZSBTdHlsZU9iamVjdFBhcnQgPSB7XG4gIGNzczogc3RyaW5nO1xuICBtZWRpYTogc3RyaW5nO1xuICBzb3VyY2VNYXA6ID9zdHJpbmdcbn1cbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHsvKlxuICBbaWQ6IG51bWJlcl06IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIHJlZnM6IG51bWJlcixcbiAgICBwYXJ0czogQXJyYXk8KG9iaj86IFN0eWxlT2JqZWN0UGFydCkgPT4gdm9pZD5cbiAgfVxuKi99XG5cbnZhciBoZWFkID0gaGFzRG9jdW1lbnQgJiYgKGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXSlcbnZhciBzaW5nbGV0b25FbGVtZW50ID0gbnVsbFxudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwXG52YXIgaXNQcm9kdWN0aW9uID0gZmFsc2VcbnZhciBub29wID0gZnVuY3Rpb24gKCkge31cbnZhciBvcHRpb25zID0gbnVsbFxudmFyIHNzcklkS2V5ID0gJ2RhdGEtdnVlLXNzci1pZCdcblxuLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4vLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG52YXIgaXNPbGRJRSA9IHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmIC9tc2llIFs2LTldXFxiLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkU3R5bGVzQ2xpZW50IChwYXJlbnRJZCwgbGlzdCwgX2lzUHJvZHVjdGlvbiwgX29wdGlvbnMpIHtcbiAgaXNQcm9kdWN0aW9uID0gX2lzUHJvZHVjdGlvblxuXG4gIG9wdGlvbnMgPSBfb3B0aW9ucyB8fCB7fVxuXG4gIHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMocGFyZW50SWQsIGxpc3QpXG4gIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcblxuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldXG4gICAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgICAgZG9tU3R5bGUucmVmcy0tXG4gICAgICBtYXlSZW1vdmUucHVzaChkb21TdHlsZSlcbiAgICB9XG4gICAgaWYgKG5ld0xpc3QpIHtcbiAgICAgIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbmV3TGlzdClcbiAgICAgIGFkZFN0eWxlc1RvRG9tKHN0eWxlcylcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzID0gW11cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXVxuICAgICAgaWYgKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKClcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMgLyogQXJyYXk8U3R5bGVPYmplY3Q+ICovKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICB2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXVxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pXG4gICAgICB9XG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIGlmIChkb21TdHlsZS5wYXJ0cy5sZW5ndGggPiBpdGVtLnBhcnRzLmxlbmd0aCkge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5sZW5ndGggPSBpdGVtLnBhcnRzLmxlbmd0aFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgcGFydHMgPSBbXVxuICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSkpXG4gICAgICB9XG4gICAgICBzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHsgaWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0cyB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAoKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpXG4gIHN0eWxlRWxlbWVudC50eXBlID0gJ3RleHQvY3NzJ1xuICBoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudClcbiAgcmV0dXJuIHN0eWxlRWxlbWVudFxufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICB2YXIgdXBkYXRlLCByZW1vdmVcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3N0eWxlWycgKyBzc3JJZEtleSArICd+PVwiJyArIG9iai5pZCArICdcIl0nKVxuXG4gIGlmIChzdHlsZUVsZW1lbnQpIHtcbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBhbmQgaW4gcHJvZHVjdGlvbiBtb2RlLlxuICAgICAgLy8gc2ltcGx5IGRvIG5vdGhpbmcuXG4gICAgICByZXR1cm4gbm9vcFxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBoYXMgU1NSIHN0eWxlcyBidXQgaW4gZGV2IG1vZGUuXG4gICAgICAvLyBmb3Igc29tZSByZWFzb24gQ2hyb21lIGNhbid0IGhhbmRsZSBzb3VyY2UgbWFwIGluIHNlcnZlci1yZW5kZXJlZFxuICAgICAgLy8gc3R5bGUgdGFncyAtIHNvdXJjZSBtYXBzIGluIDxzdHlsZT4gb25seSB3b3JrcyBpZiB0aGUgc3R5bGUgdGFnIGlzXG4gICAgICAvLyBjcmVhdGVkIGFuZCBpbnNlcnRlZCBkeW5hbWljYWxseS4gU28gd2UgcmVtb3ZlIHRoZSBzZXJ2ZXIgcmVuZGVyZWRcbiAgICAgIC8vIHN0eWxlcyBhbmQgaW5qZWN0IG5ldyBvbmVzLlxuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIGlmIChpc09sZElFKSB7XG4gICAgLy8gdXNlIHNpbmdsZXRvbiBtb2RlIGZvciBJRTkuXG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKytcbiAgICBzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KCkpXG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpXG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSlcbiAgfSBlbHNlIHtcbiAgICAvLyB1c2UgbXVsdGktc3R5bGUtdGFnIG1vZGUgaW4gYWxsIG90aGVyIGNhc2VzXG4gICAgc3R5bGVFbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KClcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KVxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudClcbiAgICB9XG4gIH1cblxuICB1cGRhdGUob2JqKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqIC8qIFN0eWxlT2JqZWN0UGFydCAqLykge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG4gICAgICAgICAgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcbiAgICAgICAgICBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iailcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKClcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnRcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKVxuICB9XG59KSgpXG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3NcblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcylcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcylcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlRWxlbWVudC5jaGlsZE5vZGVzXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoY3NzTm9kZSlcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGVFbGVtZW50LCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3NcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwXG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSlcbiAgfVxuICBpZiAob3B0aW9ucy5zc3JJZCkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoc3NySWRLZXksIG9iai5pZClcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXApIHtcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL2RldnRvb2xzL2RvY3MvamF2YXNjcmlwdC1kZWJ1Z2dpbmdcbiAgICAvLyB0aGlzIG1ha2VzIHNvdXJjZSBtYXBzIGluc2lkZSBzdHlsZSB0YWdzIHdvcmsgcHJvcGVybHkgaW4gQ2hyb21lXG4gICAgY3NzICs9ICdcXG4vKiMgc291cmNlVVJMPScgKyBzb3VyY2VNYXAuc291cmNlc1swXSArICcgKi8nXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJyArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyAnICovJ1xuICB9XG5cbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzc1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKVxuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSlcbiAgfVxufVxuIiwiPHRlbXBsYXRlPlxuICAgIDxsaSA6Y2xhc3M9J2NsYXNzcycgQGNsaWNrPSdpdGVtSGFuZGxlJz5cbiAgICAgICAgPGRpdiA6Y2xhc3M9J1twcm9maXhDbHMgKyBcIi10aXRsZVwiXSc+PHNsb3QgbmFtZT0ndGl0bGUnPjwvc2xvdD48L2Rpdj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvbGk+XG48L3RlbXBsYXRlPlxuPHN0eWxlIGxhbmc9XCJjc3NcIiBzcmM9Jy4vaW5kZXguY3NzJyBzY29wZWQ+PC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZmluZENvbXBvbmVudFVwd2FyZCwgZmluZENvbXBvbmVudHNEb3dud2FyZCB9IGZyb20gJy4uL3V0aWwvYXNzaXN0JztcbiAgICBjb25zdCBwcm9maXhDbHMgPSAndi1tZW51LWl0ZW0tc3ViJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBuYW1lOiBwcm9maXhDbHMsXG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIG5hbWU6e1xuICAgICAgICAgICAgICAgIHR5cGU6W1N0cmluZyxOdW1iZXJdLFxuICAgICAgICAgICAgICAgIGRhZmV1bHQ6JydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwcm9maXhDbHM6IHByb2ZpeENscyxcbiAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc3MgPSBbXG4gICAgICAgICAgICAgICAgICAgIGAke3Byb2ZpeENsc31gLHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFtgYWN0aXZlYF06IHRoaXMuYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgICAgICBpdGVtSGFuZGxlOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgZmluZENvbXBvbmVudFVwd2FyZCh0aGlzLCd2LW1lbnUnKS4kb25DbGlja0hhbmRsZSh0aGlzLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllYTI1NTUyJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllYTI1NTUyJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1tZW51W2RhdGEtdi1hMTQ0NGMzOF17XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi52LW1lbnVbZGF0YS12LWExNDQ0YzM4XTo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDFweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgYmFja2dyb3VuZDogI2RkZGVlMTtcXG59XFxuLnYtbWVudS1pdGVtLXN1YltkYXRhLXYtYTE0NDRjMzhde1xcbiAgICBmbG9hdDogbGVmdDtcXG4gICAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLnYtbWVudS1pdGVtLXN1Yi5hY3RpdmVbZGF0YS12LWExNDQ0YzM4XXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNGRjc3M0Q7XFxuICAgIGNvbG9yOiAjRkY3NzNEO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM1MGQ0MDQmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM1MGQ0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTM1MGQ0MDRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUzNTBkNDA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUzNTBkNDA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNTBkNDA0JnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTM1MGQ0MDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD05ZWEyNTU1MiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImZiZDkwMzE0XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTllYTI1NTUyJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9OWVhMjU1NTImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODNkZWFlNyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTgzZGVhZTcmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1YmFiNDNjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiODMxMjExNTZcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjViYWI0M2MmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWJhYjQzYyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUgLyogdnVlLWNsaSBvbmx5ICovXG4pIHtcbiAgLy8gVnVlLmV4dGVuZCBjb25zdHJ1Y3RvciBleHBvcnQgaW50ZXJvcFxuICB2YXIgb3B0aW9ucyA9IHR5cGVvZiBzY3JpcHRFeHBvcnRzID09PSAnZnVuY3Rpb24nXG4gICAgPyBzY3JpcHRFeHBvcnRzLm9wdGlvbnNcbiAgICA6IHNjcmlwdEV4cG9ydHNcblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LWNvbC0xW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGJsb2NrXFxufVxcbi52LWNvbC0xW2RhdGEtdi0yY2VmOWVmNF0sLnYtY29sLTJbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtM1tkYXRhLXYtMmNlZjllZjRdLC52LWNvbC00W2RhdGEtdi0yY2VmOWVmNF0sLnYtY29sLTVbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtNltkYXRhLXYtMmNlZjllZjRdLC52LWNvbC03W2RhdGEtdi0yY2VmOWVmNF0sLnYtY29sLThbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtOVtkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0xMFtkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0xMVtkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0xMltkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0xM1tkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0xNFtkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0xNVtkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0xNltkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0xN1tkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0xOFtkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0xOVtkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0yMFtkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0yMVtkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0yMltkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0yM1tkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0yNFtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxufVxcbi52LWNvbC0yNFtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlXFxufVxcbi52LWNvbC0yM1tkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5NS44MzMzMzMzMyU7XFxufVxcbi52LWNvbC0yMltkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA5MS42NjY2NjY2NyU7XFxufVxcbi52LWNvbC0yMVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4Ny41JVxcbn1cXG4udi1jb2wtMjBbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogODMuMzMzMzMzMzMlO1xcbn1cXG4udi1jb2wtMTlbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNzkuMTY2NjY2NjclO1xcbn1cXG4udi1jb2wtMThbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNzUlXFxufVxcbi52LWNvbC0xN1tkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA3MC44MzMzMzMzMyU7XFxufVxcbi52LWNvbC0xNltkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA2Ni42NjY2NjY2NyU7XFxufVxcbi52LWNvbC0xNVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA2Mi41JTtcXG59XFxuLnYtY29sLTE0W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDU4LjMzMzMzMzMzJTtcXG59XFxuLnYtY29sLTEzW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDU0LjE2NjY2NjY3JTtcXG59XFxuLnYtY29sLTEyW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDUwJTtcXG59XFxuLnYtY29sLTExW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQ1LjgzMzMzMzMzJVxcbn1cXG4udi1jb2wtMTBbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNDEuNjY2NjY2NjclO1xcbn1cXG4udi1jb2wtOVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAzNy41JTtcXG59XFxuLnYtY29sLThbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMzMuMzMzMzMzMzMlXFxufVxcbi52LWNvbC03W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDI5LjE2NjY2NjY3JTtcXG59XFxuLnYtY29sLTZbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjUlO1xcbn1cXG4udi1jb2wtNVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyMCU7XFxufVxcbi52LWNvbC00W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDE2LjY2NjY2NjY3JTtcXG59XFxuLnYtY29sLTNbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTIuNSU7XFxufVxcbi52LWNvbC0yW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDguMzMzMzMzMzMlXFxufVxcbi52LWNvbC0xW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQuMTY2NjY2NjclO1xcbn1cXG4udi1jb2wtMFtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogbm9uZVxcbn1cXG4udi1jb2wtb2Zmc2V0LTFbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0LjE2NjY2NjY3JTtcXG59XFxuLnYtY29sLW9mZnNldC0yW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogOC4zMzMzMzMzMyU7XFxufVxcbi52LWNvbC1vZmZzZXQtM1tkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTRbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxNi42NjY2NjY2NyU7XFxufVxcbi52LWNvbC1vZmZzZXQtNVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDIwLjgzMzMzMzMzJTtcXG59XFxuLnYtY29sLW9mZnNldC02W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTdbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyOS4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC1vZmZzZXQtOFtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDMzLjMzMzMzMzMzJTtcXG59XFxuLnYtY29sLW9mZnNldC05W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogMzcuNSU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTBbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0MS42NjY2NjY2NyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTFbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA0NS44MzMzMzMzMyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTJbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTNbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1NC4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTRbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA1OC4zMzMzMzMzMyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTVbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Mi41JTtcXG59XFxuLnYtY29sLW9mZnNldC0xNltkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDY2LjY2NjY2NjY3JTtcXG59XFxuLnYtY29sLW9mZnNldC0xN1tkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDcwLjgzMzMzMzMzJTtcXG59XFxuLnYtY29sLW9mZnNldC0xOFtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcXG59XFxuLnYtY29sLW9mZnNldC0xOVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDc5LjE2NjY2NjY3JTtcXG59XFxuLnYtY29sLW9mZnNldC0yMFtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDgzLjMzMzMzMzMzJTtcXG59XFxuLnYtY29sLW9mZnNldC0yMVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDg3LjUlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTIyW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogOTEuNjY2NjY2NjclO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTIzW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogOTUuODMzMzMzMzMlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTI0W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogMTAwJTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWYyZDU5NWQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWYyZDU5NWQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUtYm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS1ib2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IFJvdyBmcm9tICcuL3Jvdy52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCBSb3c7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtc2lkZXJbZGF0YS12LTI2NzAxNjkxXXtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3M6IF92bS5jbGFzc3MsIHN0eWxlOiBfdm0uc3R5bGUgfSxcbiAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtbWVudVtkYXRhLXYtMjllZjc3OGNde1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBsaW5lLWhlaWdodDogNjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udi1tZW51W2RhdGEtdi0yOWVmNzc4Y106OmFmdGVye1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGJhY2tncm91bmQ6ICNkZGRlZTE7XFxufVxcbi52LW1lbnUtaXRlbS1zdWJbZGF0YS12LTI5ZWY3NzhjXXtcXG4gICAgZmxvYXQ6IGxlZnQ7XFxuICAgIGhlaWdodDogaW5oZXJpdDtcXG4gICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi52LW1lbnUtaXRlbS1zdWIuYWN0aXZlW2RhdGEtdi0yOWVmNzc4Y117XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRkY3NzNEO1xcbiAgICBjb2xvcjogI0ZGNzczRDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY3MDE2OTEmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY3MDE2OTEmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZW51LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3M6IF92bS5jbGFzc3MsIHN0eWxlOiBfdm0uc3R5bGUgfSxcbiAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiPHRlbXBsYXRlPlxuICAgIDxidXR0b25cbiAgICAgICAgY2xhc3M9XCJ0LWJ0blwiXG4gICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgOnR5cGU9XCJodG1sVHlwZVwiXG4gICAgICAgIDpjbGFzcz1cImNsYXNzc1wiXG4gICAgICAgIDpzdHlsZT1cInN0eWxlXCJcbiAgICAgICAgQGNsaWNrPVwiaGFuZGxlQ2xpY2tcIlxuICAgID48c3Bhbj48c2xvdD48L3Nsb3Q+PC9zcGFuPjwvYnV0dG9uPlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBzcmM9Jy4vYnV0dG9uLmNzcycgc2NvcGVkIGxhbmc9XCJjc3NcIj48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL3V0aWwvYXNzaXN0JztcblxuICAgIGNvbnN0IHByZWZpeENscyA9ICd0LWJ0bic7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IHByZWZpeENscyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjpmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25lT2YodmFsLFsnZGVmYXVsdCcsJ3RleHQnLCd3YXJuaW5nJywnZXJyb3InXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGg6e1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZWlnaHQ6e1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiA1MFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjpmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25lT2YodmFsLFsnZGVmYXVsdCcsJ3RpbnknLCdsYXJnZScsJ2xvbmcnLCdhdXRvJ10pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGh0bWxUeXBlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICdidXR0b24nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjpmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25lT2YodmFsLFsnYnV0dG9uJywnc3VibWl0JywncmVzZXQnXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc3MgPSBbXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjbGFzc3MgPSBbXG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXhDbHN9LXR5cGUtYCt0aGlzLnR5cGVdXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc2l6ZSAhPSAnYXV0bycpe1xuICAgICAgICAgICAgICAgICAgICBjbGFzc3MucHVzaChbYCR7cHJlZml4Q2xzfS1zaXplLWArdGhpcy5zaXplXSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3NzIDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHlsZTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IHt9O1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zaXplID09ICdhdXRvJyl7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLndpZHRoID0gdGhpcy53aWR0aCsncHgnO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCsncHgnO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5saW5lSGVpZ2h0ID0gdGhpcy5oZWlnaHQrJ3B4JztcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KFwiY2xpY2tcIixldmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWExNDQ0YzM4JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWVudS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMTQ0NGMzOCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJhMTQ0NGMzOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTE0NDRjMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTE0NDRjMzgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21lbnUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWExNDQ0YzM4JnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTE0NDRjMzgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbWVudS9tZW51LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiA6Y2xhc3M9XCJjbGFzc3NcIiA6c3R5bGU9XCJzdHlsZXNcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNyYz0nLi9jb2wuY3NzJyBsYW5nPSdzdHlsdXMnIHNjb3BlZD48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IGZpbmRDb21wb25lbnRVcHdhcmQgfSBmcm9tICcuLi91dGlsL2Fzc2lzdCc7XG4gICAgbGV0IHByZWZpeENscyA9ICd2LWNvbCc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IHByZWZpeENscyxcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgc3Bhbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAyNFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ3V0dGVyOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeENsc31gLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4Q2xzfS0ke3RoaXMuc3Bhbn1gXTogdGhpcy5zcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeENsc30tb2Zmc2V0LSR7dGhpcy5vZmZzZXR9YF06IHRoaXMub2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHlsZXM6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmd1dHRlciAhPT0wKXtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhpcy5ndXR0ZXIgLyAyICsncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiB0aGlzLmd1dHRlciAvIDIgKydweCcsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICAgICAgdXBkYXRlR3V0dGVyOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnN0IFJvdyA9IGZpbmRDb21wb25lbnRVcHdhcmQodGhpcywgJ3Ytcm93Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoUm93KSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdy51cGRhdGVHdXR0ZXIoUm93Lmd1dHRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUd1dHRlcigpO1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyODcyNWY4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTI4NzI1ZjgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyODcyNWY4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjViYWI0M2Mmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjViYWI0M2MmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjViYWI0M2NcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI1YmFiNDNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI1YmFiNDNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90YWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjViYWI0M2Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNWJhYjQzYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy90YWJsZS90YWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI5ZWY3NzhjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yOWVmNzc4YyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9pbmRleC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yOWVmNzc4YyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz1cImNsYXNzc1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPSd2LWhlYWRlci13aWR0aCcgOnN0eWxlPVwic3R5bGVzXCI+XG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPSdjc3MnIHNjb3BlZD5cbiAgICAudi1oZWFkZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICAudi1oZWFkZXItd2lkdGh7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vdXRpbC9hc3Npc3QnO1xuICAgIGNvbnN0IHByZWZpeENscyA9ICd2LWhlYWRlcic7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IHByZWZpeENscyxcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgd2lkdGg6e1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOntcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOiBmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb25lT2YodmFsLFsnJywnZml4ZWQnXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5kZXg6e1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIHN0eWxlczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IHRoaXMud2lkdGggKyAncHgnXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMudHlwZSl7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnBvc2l0aW9uID0gdGhpcy50eXBlO1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS56SW5kZXggPSB0aGlzLmluZGV4O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeENsc31gXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcm93LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiZjdlYTNhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Jvdy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYmY3ZWEzYSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImJ1dHRvblwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInQtYnRuXCIsXG4gICAgICBjbGFzczogX3ZtLmNsYXNzcyxcbiAgICAgIHN0eWxlOiBfdm0uc3R5bGUsXG4gICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLmRpc2FibGVkLCB0eXBlOiBfdm0uaHRtbFR5cGUgfSxcbiAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlQ2xpY2sgfVxuICAgIH0sXG4gICAgW19jKFwic3BhblwiLCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzcyZjllOWImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc3MmY5ZTliJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc3MmY5ZTliJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcm93LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiZjdlYTNhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjFjOTBmZGVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcm93LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiZjdlYTNhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vcm93LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiZjdlYTNhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8dGVtcGxhdGU+XG4gICAgPHRhYmxlIGNlbGxzcGFjaW5nPVwiMFwiIGNlbGxwYWRkaW5nPVwiMFwiIGJvcmRlcj1cIjBcIiA6Y2xhc3M9XCJjbGFzc3NcIj5cbiAgICAgICAgPGNvbGdyb3VwPlxuICAgICAgICAgICAgPGNvbCB2LWZvcj0nKGl0ZW0saW5kZXgpIGluIHdpZHRoJyA6a2V5PSdpbmRleCcgOndpZHRoPSdpdGVtJz48L2NvbD5cbiAgICAgICAgPC9jb2xncm91cD5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvdGFibGU+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc3JjPScuL3RhYmxlLmNzcycgbGFuZz1cImNzc1wiIHNjb3BlZD48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IGZpbmRDb21wb25lbnREb3dud2FyZCB9IGZyb20gJy4uL3V0aWwvYXNzaXN0LmpzJztcblxuICAgIGNvbnN0IHByZWZpeENscyA9ICd2LXRhYmxlJztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IHByZWZpeENscyxcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgd2lkdGg6e1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgY2xhc3NzOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4Q2xzfWBcbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgICAgICB3aWR0aEhhbmRsZTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjb21wb25lbnROb2RlID0gZmluZENvbXBvbmVudERvd253YXJkKHRoaXMsJ3YtdGFibGUtdHInKTtcbiAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoO1xuICAgICAgICAgICAgICAgIGxldCBsZW5ndGggPSBjb21wb25lbnROb2RlLiRlbC5jaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYobGVuZ3RoICYmICF3aWR0aC5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgbnVtID0gMTAwIC8gbGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSAwO2kgPCBsZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy53aWR0aCxpLGAke251bX1gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1vdW50ZWQ6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmKCF0aGlzLndpZHRoLmxlbmd0aCkgdGhpcy53aWR0aEhhbmRsZSgpO1xuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3M6IF92bS5jbGFzc3MsIHN0eWxlOiBfdm0uc3R5bGUgfSxcbiAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbnB1dC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwNDZhM2FhYVwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuL2lucHV0LmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5wdXQuY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidGhlYWRcIiwgeyBjbGFzczogX3ZtLmNsYXNzcyB9LCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjcwMTY5MSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY3MDE2OTEmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY3MDE2OTEmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Jvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWJmN2VhM2Emc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9yb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Jvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9yb3cuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWJmN2VhM2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWJmN2VhM2FcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFiZjdlYTNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFiZjdlYTNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9yb3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiZjdlYTNhJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWJmN2VhM2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvcm93L3Jvdy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiA6Y2xhc3M9J2NsYXNzcyc+PHNsb3Q+PC9zbG90PjwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPVwiY3NzXCIgc3JjPScuL2luZGV4LmNzcycgc2NvcGVkPjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGNvbnN0IHByb2ZpeENscyA9ICd2LW1lbnUtaXRlbSc7XG5cbiAgICBleHBvcnQgZGVmYXVsdHtcbiAgICAgICAgbmFtZTogcHJvZml4Q2xzLFxuICAgICAgICBjb21wdXRlZDp7XG4gICAgICAgICAgICBjbGFzc3M6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgY2xhc3NzID0gW1xuICAgICAgICAgICAgICAgICAgICBgJHtwcm9maXhDbHN9YFxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3NzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90YWJsZS1oZWFkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NzJmOWU5YiZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYmxlLWhlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlLWhlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzcyZjllOWImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzcyZjllOWJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc3MmY5ZTliJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc3MmY5ZTliJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90YWJsZS1oZWFkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NzJmOWU5YiZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc3MmY5ZTliJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3RhYmxlL3RhYmxlLWhlYWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyLnZ1ZSc7XG5pbXBvcnQgY29udGVudCBmcm9tICcuL2NvbnRlbnQudnVlJztcbmltcG9ydCBmb290ZXIgZnJvbSAnLi9mb290ZXIudnVlJztcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi9sYXlvdXQudnVlJztcbmltcG9ydCBzaWRlciBmcm9tICcuL3NpZGVyLnZ1ZSc7XG5cbmV4cG9ydCB7IGhlYWRlcixjb250ZW50LGZvb3RlcixsYXlvdXQsc2lkZXIgfSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LXRhYmxlW2RhdGEtdi0yNWJhYjQzY117XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1oZWFkW2RhdGEtdi0yNWJhYjQzY117XFxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi52LXRhYmxlLWhlYWQgdHJbZGF0YS12LTI1YmFiNDNjXXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVhZWM7XFxufVxcbi52LXRhYmxlLWhlYWQgdHIgdGhbZGF0YS12LTI1YmFiNDNjXXtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cXG4udi10YWJsZS1ib2R5W2RhdGEtdi0yNWJhYjQzY117XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udi10YWJsZS1ib2R5IHRyW2RhdGEtdi0yNWJhYjQzY117XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1ib2R5IHRyIHRkW2RhdGEtdi0yNWJhYjQzY117XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2E3NDhjZjkmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2E3NDhjZjkmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LXRhYmxlW2RhdGEtdi0xZjJkNTk1ZF17XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1oZWFkW2RhdGEtdi0xZjJkNTk1ZF17XFxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi52LXRhYmxlLWhlYWQgdHJbZGF0YS12LTFmMmQ1OTVkXXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVhZWM7XFxufVxcbi52LXRhYmxlLWhlYWQgdHIgdGhbZGF0YS12LTFmMmQ1OTVkXXtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cXG4udi10YWJsZS1ib2R5W2RhdGEtdi0xZjJkNTk1ZF17XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udi10YWJsZS1ib2R5IHRyW2RhdGEtdi0xZjJkNTk1ZF17XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1ib2R5IHRyIHRkW2RhdGEtdi0xZjJkNTk1ZF17XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzcyZjllOWImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzN2I1NzJhMFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzJmOWU5YiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc3MmY5ZTliJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi10YWJsZVtkYXRhLXYtNzcyZjllOWJde1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWFlYztcXG59XFxuLnYtdGFibGUtaGVhZFtkYXRhLXYtNzcyZjllOWJde1xcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY5O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udi10YWJsZS1oZWFkIHRyW2RhdGEtdi03NzJmOWU5Yl17XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1oZWFkIHRyIHRoW2RhdGEtdi03NzJmOWU5Yl17XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuLnYtdGFibGUtYm9keVtkYXRhLXYtNzcyZjllOWJde1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnYtdGFibGUtYm9keSB0cltkYXRhLXYtNzcyZjllOWJde1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWFlYztcXG59XFxuLnYtdGFibGUtYm9keSB0ciB0ZFtkYXRhLXYtNzcyZjllOWJde1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2NzAxNjkxJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTg0ZWYyMGVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY3MDE2OTEmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjcwMTY5MSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0NTkyNjhmJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0NTkyNjhmJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTQ1OTI2OGYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGFibGUgZnJvbSAnLi90YWJsZS52dWUnO1xuaW1wb3J0IHRoZWFkIGZyb20gJy4vdGFibGUtaGVhZC52dWUnO1xuaW1wb3J0IHRib2R5IGZyb20gJy4vdGFibGUtYm9keS52dWUnO1xuaW1wb3J0IHRyIGZyb20gJy4vdGFibGUtdHIudnVlJztcblxuZXhwb3J0IHsgdGFibGUsIHRoZWFkLCB0Ym9keSwgdHIgfTsiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiA6c3R5bGU9XCJzdHlsZVwiIDpjbGFzcz1cImNsYXNzc1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz0nY3NzJyBzY29wZWQ+XG4gICAgLnYtbGF5b3V0e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgIH1cbiAgICAudi1sYXlvdXQtaGFzLXNpZGVye1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGNvbnN0IHByZWZpeENscyA9ICd2LWxheW91dCc7XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIG5hbWU6IHByZWZpeENscyxcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoYXNTaWRlcjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgdG9wOntcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvdHRvbTp7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgc3R5bGU6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodGhpcy50b3Ape1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5wYWRkaW5nVG9wPSB0aGlzLnRvcCsncHgnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ib3R0b20pe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5wYWRkaW5nQm90dG9tPSB0aGlzLmJvdHRvbSsncHgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc3M6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhDbHN9YCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeENsc30taGFzLXNpZGVyYF06IHRoaXMuaGFzU2lkZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgICAgICBmaW5kU2lkZXI6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kY2hpbGRyZW4uc29tZShjaGlsZD0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQuJG9wdGlvbnMubmFtZSA9PT0gJ3Ytc2lkZXInO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLmhhc1NpZGVyID0gdGhpcy5maW5kU2lkZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz1cImNsYXNzc1wiIDpzdHlsZT1cInN0eWxlc1wiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc3JjPScuL3Jvdy5jc3MnIGxhbmc9J2Nzcycgc2NvcGVkPjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZmluZENvbXBvbmVudERvd253YXJkLCBmaW5kQnJvdGhlcnNDb21wb25lbnRzLCBvbmVPZn0gZnJvbSAnLi4vdXRpbC9hc3Npc3QnO1xuICAgIGxldCBwcmVmaXhDbHMgPSAndi1yb3cnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBwcmVmaXhDbHMsXG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIGd1dHRlcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6ZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uZU9mKHZhbCxbJycsJ2ZsZXgnXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAganVzdGlmeToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6ZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uZU9mKHZhbCxbJycsJ3N0YXJ0JywnZW5kJywnY2VudGVyJywnc3BhY2UtYXJvdW5kJywnc3BhY2UtYmV0d2VlbiddKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGlnbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6ZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uZU9mKHZhbCxbJycsJ3RvcCcsJ21pZGRsZScsJ2JvdHRvbSddKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXhDbHN9YF06ICF0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXhDbHN9LWArdGhpcy50eXBlXTogISF0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXhDbHN9LWZsZXgtYCt0aGlzLmp1c3RpZnldOiAhIXRoaXMuanVzdGlmeSxcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeENsc30tZmxleC1gK3RoaXMuYWxpZ25dOiAhIXRoaXMuYWxpZ25cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3R5bGVzOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge307XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ndXR0ZXIgIT09IDApe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMuZ3V0dGVyIC8gLTIgKydweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogdGhpcy5ndXR0ZXIgLyAtMiArJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdXBkYXRlR3V0dGVyOiBmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgIGNvbnN0IENvbCA9IGZpbmRDb21wb25lbnREb3dud2FyZCh0aGlzLCAndi1jb2wnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBDb2xzID0gZmluZEJyb3RoZXJzQ29tcG9uZW50cyhDb2wsICd2LWNvbCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoQ29scy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgQ29scy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmd1dHRlciA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgZ3V0dGVyICh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUd1dHRlcih2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0clwiLCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjllZjc3OGMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vaW5kZXguY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjllZjc3OGMmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29sLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LWxheW91dFtkYXRhLXYtMTI4NzI1Zjhde1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG4udi1sYXlvdXQtaGFzLXNpZGVyW2RhdGEtdi0xMjg3MjVmOF17XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNkZGFiMjU2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2luZGV4LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNkZGFiMjU2Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2NvbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yY2VmOWVmNCZsYW5nPXN0eWx1cyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2NvbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yY2VmOWVmNCZsYW5nPXN0eWx1cyZzY29wZWQ9dHJ1ZVwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2NzAxNjkxJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2NzAxNjkxJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI2NzAxNjkxXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNjcwMTY5MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNjcwMTY5MScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2NzAxNjkxJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjY3MDE2OTEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbGF5b3V0L3NpZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIjx0ZW1wbGF0ZT5cbiAgICA8dHI+PHNsb3Q+PC9zbG90PjwvdHI+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc3JjPScuL3RhYmxlLmNzcycgbGFuZz1cImNzc1wiIHNjb3BlZD48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGNvbnN0IHByZWZpeENscyA9ICd2LXRhYmxlLXRyJztcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IHByZWZpeENsc1xuICAgIH1cbjwvc2NyaXB0PiJdLCJzb3VyY2VSb290IjoiIn0=