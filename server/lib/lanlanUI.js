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

var _index6 = __webpack_require__(/*! ./button/index.js */ "HlVv");

var _index7 = _interopRequireDefault(_index6);

var _index8 = __webpack_require__(/*! ./table/index.js */ "vbul");

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

    button: _index7.default,
    input: input,

    table: _index8.table,
    thead: _index8.thead,
    tbody: _index8.tbody,
    tr: _index8.tr
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS10ci52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2wvY29sLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWU/ZjZkZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzP2NjOGMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcz9kNTA0Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlPzFkN2MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcz8zNWVlIiwid2VicGFjazovLy9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWJvZHkudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci52dWU/YmYwNSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLXRyLnZ1ZT9lNGYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9jb250ZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy90YWJsZS90YWJsZS1oZWFkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQudnVlPzA4MzciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS1ib2R5LnZ1ZT8wYzU5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzPzJkYWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2wvY29sLmNzcz80YTgyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci52dWU/OTUxMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24uY3NzPzA5Y2QiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/ZjkzYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQudnVlPzYzNWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/NTZiOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcz9lMmY3Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUudnVlPzg5ODMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2wvY29sLmNzcz84ZTUyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdXRpbC9hc3Npc3QuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuY3NzPzEyZDAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yb3cvcm93LmNzcz9lNmI1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L3Jvdy5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yb3cvcm93LnZ1ZT9iOWNlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQudnVlP2EyYWMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWU/MGNiYiIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9sYXlvdXQvZm9vdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcz85MmM1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci52dWU/YTBhYiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWJvZHkudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzPzUxOWYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLmNzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jvdy9yb3cudnVlPzBkZGQiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZT9iNjQ4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC52dWU/NmU1MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLWhlYWQudnVlPzU1ODYiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2wvY29sLnZ1ZT8xZmIyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQuaHRtbCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcz8zNzVhIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2NvbnRlbnQudnVlP2MzM2QiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS52dWU/NjQ3YiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZT82YTA1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyLnZ1ZT8xMTU5Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzP2U0ZWMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wuY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzPzRmMzkiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS1ib2R5LnZ1ZT9iODJkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGVyLnZ1ZT8xOGY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci52dWU/ZjczMyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zaWRlci52dWU/ODgwZCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zaWRlci52dWU/OTNmZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy9idXR0b24vYnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvY29sL2NvbC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZT8yOTczIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUudnVlIiwid2VicGFjazovLy9jb21wb25lbnRzL2xheW91dC9oZWFkZXIudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcm93L3Jvdy5jc3M/MzVlZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udnVlPzg1OTAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvc2lkZXIudnVlPzUwODciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/ZjFkZiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jvdy9yb3cuY3NzPzAyMWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvdGFibGUvdGFibGUudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC52dWU/YTIyNCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2lucHV0LmNzcz84OWY1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtaGVhZC52dWU/OWMwNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zaWRlci52dWU/NzI0YyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Jvdy9yb3cudnVlIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUtaGVhZC52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvY29udGVudC52dWU/ZjYxYyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL3RhYmxlLmNzcz8wYmM1Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUuY3NzPzk2ZGMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/YzBhNyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbi9idXR0b24udnVlP2ZmODEiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5jc3M/NDg5NiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zaWRlci52dWU/YTk1ZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9jb250ZW50LnZ1ZT9hM2NkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC52dWUiLCJ3ZWJwYWNrOi8vL2NvbXBvbmVudHMvcm93L3Jvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS10ci52dWU/ZGI3OCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbC9jb2wudnVlP2U3YTIiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZT81YWJiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb2wvY29sLmNzcz8wYzIyIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbGF5b3V0L3NpZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vY29tcG9uZW50cy90YWJsZS90YWJsZS10ci52dWUiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIlZ1ZSIsImV4dGVuZCIsInRlbXBsYXRlIiwiaHRtbCIsImRhdGEiLCJjdXJyZW50VmFsdWUiLCJ2YWx1ZSIsInByb3BzIiwidHlwZSIsIlN0cmluZyIsImRlZmF1bHQiLCJOdW1iZXIiLCJuYW1lIiwiY3VzdG9tQ2xhc3MiLCJwbGFjZWhvbGRlciIsImRpc2FibGVkIiwiQm9vbGVhbiIsInJlYWRvbmx5IiwiYXV0b2ZvY3VzIiwiYXV0b0NvbXBsZXRlIiwic2l6ZSIsImZvcm0iLCJpY29uIiwiaW1hZ2VJY29uIiwibWV0aG9kcyIsInVwZGF0ZVZhbHVlIiwidHJpbSIsImhhbmRsZUJsdXIiLCJldmVudCIsIiRlbWl0IiwiJHJlZnMiLCJpbnB1dCIsImhhbmRsZUZvY3VzIiwiaGFuZGxlSWNvbkNsaWNrIiwiaW5wdXRTZWxlY3QiLCJzZWxlY3QiLCJjcmVhdGVkIiwiJG9uIiwid2F0Y2giLCJuZXdWIiwicmVxdWlyZSIsImNvbXBvbmVudHMiLCJjb2wiLCJyb3ciLCJoZWFkZXIiLCJjb250ZW50IiwiZm9vdGVyIiwibGF5b3V0Iiwic2lkZXIiLCJidXR0b24iLCJ0YWJsZSIsInRoZWFkIiwidGJvZHkiLCJ0ciIsImluc3RhbGwiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsIndpbmRvdyIsIkNvbCIsIm9uZU9mIiwiZmluZENvbXBvbmVudFVwd2FyZCIsImZpbmRDb21wb25lbnREb3dud2FyZCIsImZpbmRCcm90aGVyc0NvbXBvbmVudHMiLCJ2YWx1ZUxpc3QiLCJpIiwibGVuZ3RoIiwiY29udGV4dCIsImNvbXBvbmVudE5hbWUiLCJjb21wb25lbnROYW1lcyIsInBhcmVudCIsIiRwYXJlbnQiLCIkb3B0aW9ucyIsImluZGV4T2YiLCJjaGlsZHJlbnMiLCIkY2hpbGRyZW4iLCJjaGlsZHJlbiIsImNoaWxkIiwiZXhjZXB0TWUiLCJyZXMiLCJmaWx0ZXIiLCJpdGVtIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJfdWlkIiwic3BsaWNlIiwiUm93Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFF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QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUMxRUE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQmtDO0FBQ2xDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSx1QkFpQkE7QUFDQTtBQUNBLGdGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7a0JBQ0E7QUFDQTtBQURBLEMiLCJmaWxlIjoibGFubGFuVUkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiOHlJYlwiKTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFibGUtdHIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdhNzQ4Y2Y5JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFibGUtdHIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlLXRyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdhNzQ4Y2Y5Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdhNzQ4Y2Y5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3YTc0OGNmOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3YTc0OGNmOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGFibGUtdHIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdhNzQ4Y2Y5JnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2E3NDhjZjknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvdGFibGUvdGFibGUtdHIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jb2wudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjZWY5ZWY0JnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29sLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJjZWY5ZWY0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyY2VmOWVmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyY2VmOWVmNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY29sLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yY2VmOWVmNCZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJjZWY5ZWY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2NvbC9jb2wudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgIDpjbGFzcz1cImNsYXNzc1wiIDpzdHlsZT1cInN0eWxlXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPSdjc3MnIHNjb3BlZD5cbiAgICAudi1jb250ZW50e1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGNvbnN0IHByZWZpeENscyA9ICd2LWNvbnRlbnQnO1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBuYW1lOiBwcmVmaXhDbHMsXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIHN0eWxlOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeENsc31gXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtY29udGVudFtkYXRhLXYtNTQ1OTI2OGZde1xcbiAgICBmbGV4OiBhdXRvO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2hlYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTgzZGVhZTcmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTgzZGVhZTcmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTgzZGVhZTdcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU4M2RlYWU3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU4M2RlYWU3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU4M2RlYWU3JnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTgzZGVhZTcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvbGF5b3V0L2hlYWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2E3NDhjZjkmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdhNzQ4Y2Y5Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdhNzQ4Y2Y5Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vYnV0dG9uLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUzNTBkNDA0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2J1dHRvbi5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01MzUwZDQwNCZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiaW1wb3J0ICcuL2lucHV0LmNzcyc7XG5pbXBvcnQgaHRtbCBmcm9tICcuL2lucHV0Lmh0bWwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZ1ZS5leHRlbmQoe1xuICAgIHRlbXBsYXRlOiBodG1sLFxuICAgIGRhdGE6IGZ1bmN0aW9uKCl7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgIGN1cnJlbnRWYWx1ZTogdGhpcy52YWx1ZVxuICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3RleHQnXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiBbU3RyaW5nLCBOdW1iZXJdLFxuICAgICAgICBuYW1lOiBTdHJpbmcsXG4gICAgICAgIGN1c3RvbUNsYXNzOiAnJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgICAgICBhdXRvZm9jdXM6IEJvb2xlYW4sXG4gICAgICAgIGF1dG9Db21wbGV0ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ29mZidcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ3NtYWxsJ1xuICAgICAgICB9LFxuICAgICAgICBmb3JtOiBTdHJpbmcsXG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgaW1hZ2VJY29uOiBCb29sZWFuXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG5cbiAgICAgICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gdmFsdWUudHJpbSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhhbmRsZUJsdXI6IGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2JsdXInLCBldmVudCk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiaW5wdXRcIiwgdGhpcy4kcmVmcy5pbnB1dC52YWx1ZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaGFuZGxlRm9jdXM6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdmb2N1cycsIGV2ZW50KTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVJY29uQ2xpY2s6IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KFwiaWNvbi1jbGlja1wiLCBldmVudCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5wdXRTZWxlY3Q6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5pbnB1dC5zZWxlY3QoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuJG9uKCdpbnB1dFNlbGVjdCcsIHRoaXMuaW5wdXRTZWxlY3QpO1xuICAgIH0sXG4gICAgd2F0Y2g6e1xuICAgICAgICBjdXJyZW50VmFsdWU6IGZ1bmN0aW9uKG5ld1Ype1xuICAgICAgICAgICAgdGhpcy4kZW1pdChcImlucHV0XCIsIG5ld1YpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgbmV3Vik7XG4gICAgICAgIH1cbiAgICB9XG59KTsiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2Zvb3Rlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzcwYjg2ZjVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mb290ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Zvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNzBiODZmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNzBiODZmNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZm9vdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNzBiODZmNVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM3MGI4NmY1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2xheW91dC9mb290ZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTgzZGVhZTcmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01ODNkZWFlNyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTgzZGVhZTcmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM1MGQ0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJiOWMzNmI5NFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM1MGQ0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM1MGQ0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjx0ZW1wbGF0ZT5cbiAgICA8dGJvZHkgOmNsYXNzPVwiY2xhc3NzXCI+PHNsb3Q+PC9zbG90PjwvdGJvZHk+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc3JjPScuL3RhYmxlLmNzcycgbGFuZz1cImNzc1wiIHNjb3BlZD48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGNvbnN0IHByZWZpeENscyA9ICd2LXRhYmxlLWJvZHknO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogcHJlZml4Q2xzLFxuICAgICAgICBjb21wdXRlZDp7XG4gICAgICAgICAgICBjbGFzc3M6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgY2xhc3NzID0gW1xuICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhDbHN9YFxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gY2xhc3NzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IGNsYXNzOiBfdm0uY2xhc3NzIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInYtaGVhZGVyLXdpZHRoXCIsIHN0eWxlOiBfdm0uc3R5bGVzIH0sXG4gICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUtdHIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUtdHIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29udGVudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTQ1OTI2OGYmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTQ1OTI2OGYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTQ1OTI2OGZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzU0NTkyNjhmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzU0NTkyNjhmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jb250ZW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NDU5MjY4ZiZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU0NTkyNjhmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2xheW91dC9jb250ZW50LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBjb2wgZnJvbSAnLi9jb2wvaW5kZXguanMnO1xuaW1wb3J0IHJvdyBmcm9tICcuL3Jvdy9pbmRleC5qcyc7XG5pbXBvcnQgeyBoZWFkZXIsY29udGVudCxmb290ZXIsbGF5b3V0LHNpZGVyIH0gZnJvbSAnLi9sYXlvdXQvaW5kZXguanMnO1xuXG5pbXBvcnQgYnV0dG9uIGZyb20gJy4vYnV0dG9uL2luZGV4LmpzJztcbmltcG9ydCB7IHRhYmxlLHRoZWFkLHRib2R5LHRyIH0gZnJvbSAnLi90YWJsZS9pbmRleC5qcyc7XG5cbnZhciBpbnB1dCA9IHJlcXVpcmUoXCIuL2lucHV0L2lucHV0LmpzXCIpO1xuXG5cbi8vIHZhciBNb2RhbCA9IHJlcXVpcmUoXCIuL21vZGFsL21vZGFsLmpzXCIpO1xuLy8gdmFyIE5vdGljZSA9IHJlcXVpcmUoXCIuL25vdGljZS9ub3RpZmljYXRpb24uanNcIik7XG4vLyB2YXIgTWVzc2FnZSA9IHJlcXVpcmUoXCIuL21lc3NhZ2UvaW5kZXguanNcIik7XG4vL1xuXG4vLyB2YXIgU2VsZWN0ID0gcmVxdWlyZShcIi4vc2VsZWN0L3NlbGVjdC5qc1wiKTtcbi8vIHZhciBPcHRpb24gPSByZXF1aXJlKFwiLi9zZWxlY3Qvb3B0aW9uLmpzXCIpO1xuXG5cbi8vIHZhciBUb29sdGlwID0gcmVxdWlyZShcIi4vdG9vbHRpcC90b29sdGlwLmpzXCIpO1xuLy8gdmFyIENoZWNrYm94ID0gcmVxdWlyZShcIi4vY2hlY2tib3gvY2hlY2tib3guanNcIik7XG4vLyB2YXIgUmFkaW8gPSByZXF1aXJlKFwiLi9yYWRpby9yYWRpby5qc1wiKTtcbi8vIHZhciBQb3BvdmVyID0gcmVxdWlyZShcIi4vcG9wb3Zlci9wb3BvdmVyLmpzXCIpO1xuLy8gdmFyIFBvcG92ZXJEaXJlY3RpdmUgPSByZXF1aXJlKFwiLi9wb3BvdmVyL2RpcmVjdGl2ZS5qc1wiKTtcbi8vIHZhciBEcm9wZG93biA9IHJlcXVpcmUoXCIuL2Ryb3Bkb3duL2Ryb3Bkb3duLmpzXCIpO1xuLy8gdmFyIERyb3Bkb3duTWVudSA9IHJlcXVpcmUoXCIuL2Ryb3Bkb3duL2Ryb3Bkb3duLW1lbnUuanNcIik7XG4vLyB2YXIgRHJvcGRvd25JdGVtID0gcmVxdWlyZShcIi4vZHJvcGRvd24vZHJvcGRvd24taXRlbS5qc1wiKTtcbi8vIC8vXG4vLyB2YXIgUGFnaW5hdGlvbiA9IHJlcXVpcmUoXCIuL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5qc1wiKTtcblxuLy8gdmFyIEluZmluaXRlU2Nyb2xsID0gcmVxdWlyZShcIi4vZGlyZWN0aXZlcy9pbmZpbml0ZS1zY3JvbGwuanNcIik7XG4vLyB2YXIgTGF6eWxvYWQgPSByZXF1aXJlKFwiLi9kaXJlY3RpdmVzL2ltZy1sYXp5bG9hZC5qc1wiKTtcblxuLy8gdmFyIENsb2NrID0gcmVxdWlyZShcIi4vZGF0ZXRpbWUvcGlja2VyL3RpbWUtcGlja2VyLmpzXCIpO1xuLy8gdmFyIERhdGUgPSByZXF1aXJlKFwiLi9kYXRldGltZS9waWNrZXIvZGF0ZS1waWNrZXIuanNcIik7XG5cbi8vIHZhciBWdWVBd2Vzb21lU3dpcGVyID0gcmVxdWlyZShcIi4vc3dpcHJlL3Z1ZS1hd2Vzb21lLXN3aXBlci5qc1wiKTtcblxubGV0IGNvbXBvbmVudHMgPSB7XG4gICAgY29sLFxuICAgIHJvdyxcbiAgICBcbiAgICBoZWFkZXIsXG4gICAgY29udGVudCxcbiAgICBmb290ZXIsXG4gICAgbGF5b3V0LFxuICAgIHNpZGVyLFxuXG4gICAgYnV0dG9uLFxuICAgIGlucHV0LFxuXG4gICAgdGFibGUsXG4gICAgdGhlYWQsXG4gICAgdGJvZHksXG4gICAgdHIsXG59XG5cblxuXG5mdW5jdGlvbiBpbnN0YWxsKFZ1ZSl7XG4gICAgT2JqZWN0LmtleXMoY29tcG9uZW50cykuZm9yRWFjaCh2YWx1ZT0+e1xuICAgICAgICBWdWUuY29tcG9uZW50KCd0LScrdmFsdWUsIGNvbXBvbmVudHNbdmFsdWVdKTtcbiAgICB9KTtcblxuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3Qtcm93JywgY29tcG9uZW50c1sncm93J10pO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3QtY29sJywgY29sKTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LWlucHV0JywgSW5wdXQpO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3Qtc2VsZWN0JywgU2VsZWN0KTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LW9wdGlvbicsIE9wdGlvbik7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1idXR0b24nLCBCdXR0b24pO1xuXG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC10b29sdGlwJywgVG9vbHRpcCk7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1jaGVja2JveCcsIENoZWNrYm94KTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LXJhZGlvJywgUmFkaW8pO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3QtcG9wb3ZlcicsIFBvcG92ZXIpO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3QtZHJvcGRvd24nLCBEcm9wZG93bik7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1kcm9wZG93bi1tZW51JywgRHJvcGRvd25NZW51KTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LWRyb3Bkb3duLWl0ZW0nLCBEcm9wZG93bkl0ZW0pO1xuXG4gICAgLy8gVnVlLmNvbXBvbmVudCgnbW9kYWwnLCBNb2RhbCk7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgnbm90aWNlJywgTm90aWNlKTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCdtZXNzYWdlJywgTWVzc2FnZSk7XG5cbiAgICAvLyBWdWUuY29tcG9uZW50KCd0LXBhZ2luYXRpb24nLCBQYWdpbmF0aW9uKTtcblxuICAgIC8vIFZ1ZS5wcm90b3R5cGUuJG5vdGlmeSA9IE5vdGljZTtcbiAgICAvLyBWdWUucHJvdG90eXBlLiRtZXNzYWdlID0gTWVzc2FnZTtcblxuICAgIC8vIFZ1ZS5kaXJlY3RpdmUoJ0luZmluaXRlU2Nyb2xsJywgSW5maW5pdGVTY3JvbGwpO1xuICAgIC8vIFZ1ZS5kaXJlY3RpdmUoJ2xhenknLCBMYXp5bG9hZCk7XG4gICAgLy8gVnVlLmRpcmVjdGl2ZSgncG9wb3ZlcicsIFBvcG92ZXJEaXJlY3RpdmUpO1xuXG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1jbG9jay1waWNrZXInLCBDbG9jayk7XG4gICAgLy8gVnVlLmNvbXBvbmVudCgndC1kYXRlLXBpY2tlcicsIERhdGUpO1xuICAgIC8vIFZ1ZS5jb21wb25lbnQoJ3N3aXBlcicsIFZ1ZUF3ZXNvbWVTd2lwZXIuc3dpcGVyKTtcbiAgICAvLyBWdWUuY29tcG9uZW50KCdzd2lwZXJTbGlkZScsIFZ1ZUF3ZXNvbWVTd2lwZXIuc3dpcGVyU2xpZGUpO1xufVxuXG5cbmlmKHdpbmRvdy5WdWUpe1xuICAgIC8vIHdpbmRvdy5pbmZpbml0ZVNjcm9sbCA9IEluZmluaXRlU2Nyb2xsO1xuICAgIGluc3RhbGwoVnVlKTtcbn1cblxuIiwiPHRlbXBsYXRlPlxuICAgIDx0aGVhZCA6Y2xhc3M9XCJjbGFzc3NcIj48c2xvdD48L3Nsb3Q+PC90aGVhZD5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzcmM9Jy4vdGFibGUuY3NzJyBsYW5nPVwiY3NzXCIgc2NvcGVkPjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ3YtdGFibGUtaGVhZCc7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBwcmVmaXhDbHMsXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc3MgPSBbXG4gICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeENsc31gXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJpbXBvcnQgQ29sIGZyb20gJy4vY29sLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IENvbDsiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTI4NzI1ZjgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI3MDY3NGY0M1wiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTI4NzI1ZjgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTI4NzI1ZjgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50LWlucHV0e1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5cXG4udC1pbnB1dCAudC1pbnB1dF9pY29ue1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAzNnB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDM0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi50LWlucHV0IC50LWlucHV0X2ljb24uaW1hZ2V7XFxuICAgIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFnQUFBQUVDQVFBQUFBWnhMWjdBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQ0JqU0ZKTkFBQjZKZ0FBZ0lRQUFQb0FBQUNBNkFBQWRUQUFBT3BnQUFBNm1BQUFGM0NjdWxFOEFBQUFBbUpMUjBRQS80ZVB6TDhBQUFBSGRFbE5SUWZoQVFRUk9BNU9EWVRiQUFBQUtrbEVRVlFJMTJPYzJjQlF6NEFBamN4YkR2Z3lNampBdU9rTnpBd01jS0hHOUFhNHlwa05NNkVjQUlUcEN5ZVdHMWFyQUFBQUpYUkZXSFJrWVhSbE9tTnlaV0YwWlFBeU1ERTNMVEF4TFRBMFZERTNPalUyT2pFMEt6QTRPakF3ZlJlYUdRQUFBQ1YwUlZoMFpHRjBaVHB0YjJScFpua0FNakF4Tnkwd01TMHdORlF4TnpvMU5qb3hOQ3N3T0Rvd01BeEtJcVVBQUFBQVNVVk9SSzVDWUlJPSkgbm8tcmVwZWF0IGNlbnRlcjtcXG59XFxuXFxuLnQtaW5wdXRfaWNvbiArIC50LWlucHV0X29yaXtcXG4gICAgcGFkZGluZy1yaWdodDogMzZweDtcXG59XFxuXFxuLnQtaW5wdXRfb3Jpe1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGNvbG9yOiAjNjY2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRjFFREVEO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi50LWlucHV0X29yaTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4NDkyQTY7XFxufVxcblxcbi50LWlucHV0X29yaTpmb2N1cyB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRjc0Mzg7XFxufVxcblxcbi50LWlucHV0LmRpc2FibGVkIC50LWlucHV0X29yaXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjQyLCAyNDcpO1xcbiAgICBjb2xvcjogcmdiKDE4NywgMTg3LCAxODcpO1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBib3JkZXItY29sb3I6IHJnYigyMTEsIDIyMCwgMjMwKTtcXG59XFxuXFxuXFxuLnQtaW5wdXRfbGFyZ2V7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnQtaW5wdXRfbGFyZ2UgLnQtaW5wdXRfb3Jpe1xcbiAgICBoZWlnaHQ6IDQycHg7XFxufVxcblxcbi50LWlucHV0X3NtYWxse1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi50LWlucHV0X3NtYWxsIC50LWlucHV0X29yaXtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4udC1pbnB1dF9zbWFsbCAudC1pbnB1dF9pY29ue1xcbiAgICB3aWR0aDogMzBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuLnQtaW5wdXRfc21hbGwgLnQtaW5wdXRfaWNvbiArIC50LWlucHV0X29yaXtcXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcXG59XFxuXFxuLnQtaW5wdXRfdGlueSAudC1pbnB1dF9vcml7XFxuICAgIGhlaWdodDogMjZweDtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4udC1pbnB1dF90aW55IC50LWlucHV0X2ljb257XFxuICAgIHdpZHRoOiAyNnB4O1xcbiAgICBoZWlnaHQ6IDI2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbn1cXG4udC1pbnB1dF90aW55IC50LWlucHV0X2ljb24gKyAudC1pbnB1dF9vcml7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0Ym9keVwiLCB7IGNsYXNzOiBfdm0uY2xhc3NzIH0sIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSwgMilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWJhYjQzYyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWJhYjQzYyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2NvbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yY2VmOWVmNCZsYW5nPXN0eWx1cyZzY29wZWQ9dHJ1ZVwiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtaGVhZGVyW2RhdGEtdi01ODNkZWFlN117XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG4udi1oZWFkZXItd2lkdGhbZGF0YS12LTU4M2RlYWU3XXtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vYnV0dG9uLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUzNTBkNDA0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM1MGQ0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vYnV0dG9uLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTUzNTBkNDA0JnNjb3BlZD10cnVlJmxhbmc9Y3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzcyZjllOWImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzcyZjllOWImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTdhNzQ4Y2Y5Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMWYwZjkxMzRcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2E3NDhjZjkmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YTc0OGNmOSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWJhYjQzYyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjViYWI0M2MmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjViYWI0M2MmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNGNlMGViYjBcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vY29sLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJjZWY5ZWY0Jmxhbmc9c3R5bHVzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgYnV0dG9uIGZyb20gJy4vYnV0dG9uLnZ1ZSc7XG5leHBvcnQgZGVmYXVsdCBidXR0b247IiwiLy8g5Yik5pat5Y+C5pWw5piv5ZCm5piv5YW25Lit5LmL5LiAXG5leHBvcnQgZnVuY3Rpb24gb25lT2YodmFsdWUsdmFsdWVMaXN0KXtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlTGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodmFsdWUgPT09IHZhbHVlTGlzdFtpXSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG4vLyDlr7vmib7niLbnuqfnu4Tku7ZcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ29tcG9uZW50VXB3YXJkKGNvbnRleHQsIGNvbXBvbmVudE5hbWUsIGNvbXBvbmVudE5hbWVzKXtcbiAgICBpZiAodHlwZW9mIGNvbXBvbmVudE5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbXBvbmVudE5hbWVzID0gW2NvbXBvbmVudE5hbWVdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudE5hbWVzID0gY29tcG9uZW50TmFtZTtcbiAgICB9XG5cbiAgICBsZXQgcGFyZW50ID0gY29udGV4dC4kcGFyZW50O1xuICAgIGxldCBuYW1lID0gcGFyZW50LiRvcHRpb25zLm5hbWU7XG4gICAgXG4gICAgd2hpbGUgKHBhcmVudCAmJiAoIW5hbWUgfHwgY29tcG9uZW50TmFtZXMuaW5kZXhPZihuYW1lKSA8IDApKSB7XG4gICAgICAgIHBhcmVudCA9IHBhcmVudC4kcGFyZW50O1xuICAgICAgICBpZiAocGFyZW50KSBuYW1lID0gcGFyZW50LiRvcHRpb25zLm5hbWU7XG4gICAgfVxuICAgIHJldHVybiBwYXJlbnQ7XG59XG5cbi8vIOWvu+aJvuWtkOe6p+e7hOS7tlxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDb21wb25lbnREb3dud2FyZCAoY29udGV4dCwgY29tcG9uZW50TmFtZSkge1xuICAgIGNvbnN0IGNoaWxkcmVucyA9IGNvbnRleHQuJGNoaWxkcmVuO1xuICAgIGxldCBjaGlsZHJlbiA9IG51bGw7XG5cbiAgICBpZiAoY2hpbGRyZW5zLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGNoaWxkcmVucykge1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGNoaWxkLiRvcHRpb25zLm5hbWU7XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gY29tcG9uZW50TmFtZSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gY2hpbGQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gZmluZENvbXBvbmVudERvd253YXJkKGNoaWxkLCBjb21wb25lbnROYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRyZW4pIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbn1cblxuLy8g5a+75om+5ZCM57qn57uE5Lu2XG5leHBvcnQgZnVuY3Rpb24gZmluZEJyb3RoZXJzQ29tcG9uZW50cyAoY29udGV4dCwgY29tcG9uZW50TmFtZSwgZXhjZXB0TWUgPSB0cnVlKSB7XG4gICAgbGV0IHJlcyA9IGNvbnRleHQuJHBhcmVudC4kY2hpbGRyZW4uZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICByZXR1cm4gaXRlbS4kb3B0aW9ucy5uYW1lID09PSBjb21wb25lbnROYW1lO1xuICAgIH0pO1xuICAgIGxldCBpbmRleCA9IHJlcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLl91aWQgPT09IGNvbnRleHQuX3VpZCk7XG4gICAgaWYgKGV4Y2VwdE1lKSByZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gcmVzO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMjg3MjVmOCZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xheW91dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMjg3MjVmOCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxMjg3MjVmOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTI4NzI1ZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTI4NzI1ZjgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xheW91dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTI4NzI1Zjgmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxMjg3MjVmOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpzdHlsZT1cInN0eWxlXCIgOmNsYXNzPVwiY2xhc3NzXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzdHlsZSBsYW5nPSdjc3MnIHNjb3BlZD5cbiAgICAudi1zaWRlcntcbiAgICAgICAgXG4gICAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ3Ytc2lkZXInO1xuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBuYW1lOiBwcmVmaXhDbHMsXG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgd2lkdGg6e1xuICAgICAgICAgICAgICAgdHlwZTogW051bWJlcixTdHJpbmddLFxuICAgICAgICAgICAgICAgZGVmYXVsdDogMjAwXG4gICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgY2xhc3NzOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4Q2xzfWBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3R5bGU6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogYCR7dGhpcy53aWR0aH1weGAsXG4gICAgICAgICAgICAgICAgICAgIG1pbldpZHRoOiBgJHt0aGlzLndpZHRofXB4YCxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6IGAke3RoaXMud2lkdGh9cHhgLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbnB1dC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5wdXQuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5wdXQuY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9yb3cuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWJmN2VhM2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Jvdy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYmY3ZWEzYSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9yb3cuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWJmN2VhM2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1yb3dbZGF0YS12LTFiZjdlYTNhXXtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW4tbGVmdDogMDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHpvb206IDE7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4udi1yb3dbZGF0YS12LTFiZjdlYTNhXTphZnRlciwgLnYtcm93W2RhdGEtdi0xYmY3ZWEzYV06YmVmb3Jle1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogdGFibGU7XFxufVxcbi52LXJvd1tkYXRhLXYtMWJmN2VhM2FdOmFmdGVyIHtcXG4gICAgY2xlYXI6IGJvdGg7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgZm9udC1zaXplOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxufVxcbi52LXJvdy1mbGV4W2RhdGEtdi0xYmY3ZWEzYV17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuLnYtcm93LWZsZXgtc3RhcnRbZGF0YS12LTFiZjdlYTNhXXtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4udi1yb3ctZmxleC1lbmRbZGF0YS12LTFiZjdlYTNhXXtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLnYtcm93LWZsZXgtY2VudGVyW2RhdGEtdi0xYmY3ZWEzYV17XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udi1yb3ctZmxleC1zcGFjZS1hcm91bmRbZGF0YS12LTFiZjdlYTNhXXtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi52LXJvdy1mbGV4LXNwYWNlLWJldHdlZW5bZGF0YS12LTFiZjdlYTNhXXtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4udi1yb3ctZmxleC10b3BbZGF0YS12LTFiZjdlYTNhXXtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi52LXJvdy1mbGV4LW1pZGRsZVtkYXRhLXYtMWJmN2VhM2Fde1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udi1yb3ctZmxleC1ib3R0b21bZGF0YS12LTFiZjdlYTNhXXtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzczogX3ZtLmNsYXNzcywgc3R5bGU6IF92bS5zdHlsZXMgfSxcbiAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NDU5MjY4ZiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0NTkyNjhmJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0NTkyNjhmJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2VmODI1YWVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29udGVudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NDU5MjY4ZiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTQ1OTI2OGYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz1cImNsYXNzc1wiIDpzdHlsZT1cInN0eWxlXCI+PHNsb3Q+PC9zbG90PjwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgb25lT2YgfSBmcm9tICcuLi91dGlsL2Fzc2lzdCc7XG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ3YtZm9vdGVyJztcblxuICAgIGV4cG9ydCBkZWZhdWx0e1xuICAgICAgICBuYW1lOiBwcmVmaXhDbHMsXG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIHR5cGU6e1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6IGZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbmVPZih2YWwsWycnLCdmaXhlZCddKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aDp7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluZGV4OntcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDp7XG4gICAgICAgICAgICBzdHlsZTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGggKyAnJScsXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy50eXBlKXtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUucG9zaXRpb24gPSB0aGlzLnR5cGU7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmJvdHRvbSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLnpJbmRleCA9IHRoaXMuaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgYCR7cHJlZml4Q2xzfWBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi10YWJsZVtkYXRhLXYtN2E3NDhjZjlde1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWFlYztcXG59XFxuLnYtdGFibGUtaGVhZFtkYXRhLXYtN2E3NDhjZjlde1xcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY5O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udi10YWJsZS1oZWFkIHRyW2RhdGEtdi03YTc0OGNmOV17XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1oZWFkIHRyIHRoW2RhdGEtdi03YTc0OGNmOV17XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuLnYtdGFibGUtYm9keVtkYXRhLXYtN2E3NDhjZjlde1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnYtdGFibGUtYm9keSB0cltkYXRhLXYtN2E3NDhjZjlde1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWFlYztcXG59XFxuLnYtdGFibGUtYm9keSB0ciB0ZFtkYXRhLXYtN2E3NDhjZjlde1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZm9vdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Zvb3Rlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFibGUtYm9keS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWYyZDU5NWQmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90YWJsZS1ib2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi90YWJsZS1ib2R5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmMmQ1OTVkJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjFmMmQ1OTVkXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxZjJkNTk1ZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxZjJkNTk1ZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGFibGUtYm9keS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWYyZDU5NWQmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxZjJkNTk1ZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy90YWJsZS90YWJsZS1ib2R5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmMmQ1OTVkJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2ZmMGFhMDJcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWYyZDU5NWQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZjJkNTk1ZCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnQtYnRuW2RhdGEtdi01MzUwZDQwNF17XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcbi50LWJ0bi5kaXNhYmxlZFtkYXRhLXYtNTM1MGQ0MDRdLCAudC1idG5bZGlzYWJsZWRdW2RhdGEtdi01MzUwZDQwNF0sLnQtYnRuLmRpc2FibGVkW2RhdGEtdi01MzUwZDQwNF06aG92ZXIsLnQtYnRuW2Rpc2FibGVkXVtkYXRhLXYtNTM1MGQ0MDRdOmhvdmVye1xcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbiAgICBjb2xvcjogI2JiYmVjNDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkZWUxO1xcbn1cXG4udC1idG4tc2l6ZS10aW55W2RhdGEtdi01MzUwZDQwNF17XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgcGFkZGluZzogNHB4IDE1cHg7XFxufVxcbi50LWJ0bi1zaXplLWRlZmF1bHRbZGF0YS12LTUzNTBkNDA0XXtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBwYWRkaW5nOiA2cHggMThweDtcXG59XFxuLnQtYnRuLXNpemUtbGFyZ2VbZGF0YS12LTUzNTBkNDA0XXtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBwYWRkaW5nOiA4cHggMjhweDtcXG59XFxuLnQtYnRuLXNpemUtbG9uZ1tkYXRhLXYtNTM1MGQ0MDRde1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIHBhZGRpbmc6IDZweCAxOHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuLnQtYnRuLXR5cGUtZGVmYXVsdFtkYXRhLXYtNTM1MGQ0MDRde1xcbiAgICBiYWNrZ3JvdW5kOiAjZjdmN2Y3O1xcbiAgICBjb2xvcjogIzQ5NTA2MDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZGVlMTtcXG59XFxuLnQtYnRuLXR5cGUtZGVmYXVsdFtkYXRhLXYtNTM1MGQ0MDRdOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgICBjb2xvcjogIzU3YTNmMztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzU3YTNmMztcXG59XFxuLnQtYnRuLXR5cGUtdGV4dFtkYXRhLXYtNTM1MGQ0MDRde1xcbiAgICBjb2xvcjogIzQ5NTA2MDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwKTtcXG59XFxuLnQtYnRuLXR5cGUtdGV4dFtkYXRhLXYtNTM1MGQ0MDRdOmhvdmVye1xcbiAgICBjb2xvcjogIzU3YTNmMztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwKTtcXG59XFxuLnQtYnRuLXR5cGUtd2FybmluZ1tkYXRhLXYtNTM1MGQ0MDRde1xcbiAgICBiYWNrZ3JvdW5kOiAjZmY5OTAwO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmOTkwMDtcXG59XFxuLnQtYnRuLXR5cGUtd2FybmluZ1tkYXRhLXYtNTM1MGQ0MDRdOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZhZDMzO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmYWQzMztcXG59XFxuLnQtYnRuLXR5cGUtZXJyb3JbZGF0YS12LTUzNTBkNDA0XXtcXG4gICAgYmFja2dyb3VuZDogI2VkM2YxNDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZDNmMTQ7XFxufVxcbi50LWJ0bi10eXBlLWVycm9yW2RhdGEtdi01MzUwZDQwNF06aG92ZXJ7XFxuICAgIGJhY2tncm91bmQ6ICNmMTY1NDM7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWQzZjE0O1xcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTgzZGVhZTcmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJiY2VmZjRjOFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTgzZGVhZTcmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTgzZGVhZTcmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xheW91dC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMjg3MjVmOCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTI4NzI1ZjgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUtaGVhZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YWJsZS1oZWFkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgY2xhc3M6IF92bS5jbGFzc3MsIHN0eWxlOiBfdm0uc3R5bGVzIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJ0LWlucHV0XFxcIiA6Y2xhc3M9XFxcIltzaXplPygndC1pbnB1dF8nK3NpemUpOicnLHtkaXNhYmxlZDpkaXNhYmxlZH1dXFxcIj5cXG5cXG4gICAgPGkgY2xhc3M9XFxcIm1hdGVyaWFsLWljb25zIHQtaW5wdXRfaWNvblxcXCIgdi1pZj1cXFwiaWNvblxcXCIgQGNsaWNrPVxcXCJoYW5kbGVJY29uQ2xpY2tcXFwiPnt7aWNvbn19PC9pPlxcbiAgICA8aSBjbGFzcz1cXFwidC1pbnB1dF9pY29uIGltYWdlXFxcIiB2LWlmPVxcXCJpbWFnZUljb25cXFwiIEBjbGljaz1cXFwiaGFuZGxlSWNvbkNsaWNrXFxcIj48L2k+XFxuXFxuICAgIDxpbnB1dFxcbiAgICAgICAgY2xhc3M9XFxcInQtaW5wdXRfb3JpXFxcIlxcbiAgICAgICAgOmNsYXNzPVxcXCJbY3VzdG9tQ2xhc3NdXFxcIlxcbiAgICAgICAgOnR5cGU9XFxcInR5cGVcXFwiXFxuICAgICAgICA6cGxhY2Vob2xkZXI9XFxcInBsYWNlaG9sZGVyXFxcIlxcbiAgICAgICAgOm5hbWU9XFxcIm5hbWVcXFwiXFxuICAgICAgICA6ZGlzYWJsZWQ9XFxcImRpc2FibGVkXFxcIlxcbiAgICAgICAgOnJlYWRvbmx5PVxcXCJyZWFkb25seVxcXCJcXG4gICAgICAgIDphdXRvY29tcGxldGU9XFxcImF1dG9Db21wbGV0ZVxcXCJcXG4gICAgICAgIDphdXRvZm9jdXM9XFxcImF1dG9mb2N1c1xcXCJcXG4gICAgICAgIDp2YWx1ZT1cXFwidmFsdWVcXFwiXFxuICAgICAgICA6Zm9ybT1cXFwiZm9ybVxcXCJcXG4gICAgICAgIHJlZj1cXFwiaW5wdXRcXFwiXFxuICAgICAgICBAaW5wdXQ9XFxcInVwZGF0ZVZhbHVlKCRldmVudC50YXJnZXQudmFsdWUpXFxcIlxcbiAgICAgICAgQGZvY3VzPVxcXCJoYW5kbGVGb2N1c1xcXCJcXG4gICAgICAgIEBibHVyPVxcXCJoYW5kbGVCbHVyXFxcIlxcbiAgICA+XFxuXFxuPC9kaXY+XCI7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZjJkNTk1ZCZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWYyZDU5NWQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWYyZDU5NWQmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzczogX3ZtLmNsYXNzcywgc3R5bGU6IF92bS5zdHlsZSB9LFxuICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidGFibGVcIixcbiAgICB7XG4gICAgICBjbGFzczogX3ZtLmNsYXNzcyxcbiAgICAgIGF0dHJzOiB7IGNlbGxzcGFjaW5nOiBcIjBcIiwgY2VsbHBhZGRpbmc6IFwiMFwiLCBib3JkZXI6IFwiMFwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImNvbGdyb3VwXCIsXG4gICAgICAgIF92bS5fbChfdm0ud2lkdGgsIGZ1bmN0aW9uKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwiY29sXCIsIHsga2V5OiBpbmRleCwgYXR0cnM6IHsgd2lkdGg6IGl0ZW0gfSB9KVxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4gIE1vZGlmaWVkIGJ5IEV2YW4gWW91IEB5eXg5OTA4MDNcbiovXG5cbmltcG9ydCBsaXN0VG9TdHlsZXMgZnJvbSAnLi9saXN0VG9TdHlsZXMnXG5cbnZhciBoYXNEb2N1bWVudCA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCdcblxuaWYgKHR5cGVvZiBERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgREVCVUcpIHtcbiAgaWYgKCFoYXNEb2N1bWVudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAndnVlLXN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50LiAnICtcbiAgICBcIlVzZSB7IHRhcmdldDogJ25vZGUnIH0gaW4geW91ciBXZWJwYWNrIGNvbmZpZyB0byBpbmRpY2F0ZSBhIHNlcnZlci1yZW5kZXJpbmcgZW52aXJvbm1lbnQuXCJcbiAgKSB9XG59XG5cbi8qXG50eXBlIFN0eWxlT2JqZWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICBwYXJ0czogQXJyYXk8U3R5bGVPYmplY3RQYXJ0PlxufVxuXG50eXBlIFN0eWxlT2JqZWN0UGFydCA9IHtcbiAgY3NzOiBzdHJpbmc7XG4gIG1lZGlhOiBzdHJpbmc7XG4gIHNvdXJjZU1hcDogP3N0cmluZ1xufVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0gey8qXG4gIFtpZDogbnVtYmVyXToge1xuICAgIGlkOiBudW1iZXIsXG4gICAgcmVmczogbnVtYmVyLFxuICAgIHBhcnRzOiBBcnJheTwob2JqPzogU3R5bGVPYmplY3RQYXJ0KSA9PiB2b2lkPlxuICB9XG4qL31cblxudmFyIGhlYWQgPSBoYXNEb2N1bWVudCAmJiAoZG9jdW1lbnQuaGVhZCB8fCBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdKVxudmFyIHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsXG52YXIgc2luZ2xldG9uQ291bnRlciA9IDBcbnZhciBpc1Byb2R1Y3Rpb24gPSBmYWxzZVxudmFyIG5vb3AgPSBmdW5jdGlvbiAoKSB7fVxudmFyIG9wdGlvbnMgPSBudWxsXG52YXIgc3NySWRLZXkgPSAnZGF0YS12dWUtc3NyLWlkJ1xuXG4vLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbi8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcbnZhciBpc09sZElFID0gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgL21zaWUgWzYtOV1cXGIvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRTdHlsZXNDbGllbnQgKHBhcmVudElkLCBsaXN0LCBfaXNQcm9kdWN0aW9uLCBfb3B0aW9ucykge1xuICBpc1Byb2R1Y3Rpb24gPSBfaXNQcm9kdWN0aW9uXG5cbiAgb3B0aW9ucyA9IF9vcHRpb25zIHx8IHt9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhwYXJlbnRJZCwgbGlzdClcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuXG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcbiAgICB2YXIgbWF5UmVtb3ZlID0gW11cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBzdHlsZXNbaV1cbiAgICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgICBkb21TdHlsZS5yZWZzLS1cbiAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKVxuICAgIH1cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgc3R5bGVzID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBuZXdMaXN0KVxuICAgICAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzKVxuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXMgPSBbXVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldXG4gICAgICBpZiAoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgZG9tU3R5bGUucGFydHNbal0oKVxuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcyAvKiBBcnJheTxTdHlsZU9iamVjdD4gKi8pIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHN0eWxlc1tpXVxuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdXG4gICAgaWYgKGRvbVN0eWxlKSB7XG4gICAgICBkb21TdHlsZS5yZWZzKytcbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSlcbiAgICAgIH1cbiAgICAgIGZvciAoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICBkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0pKVxuICAgICAgfVxuICAgICAgaWYgKGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA+IGl0ZW0ucGFydHMubGVuZ3RoKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzLmxlbmd0aCA9IGl0ZW0ucGFydHMubGVuZ3RoXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdKSlcbiAgICAgIH1cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0geyBpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50ICgpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJylcbiAgc3R5bGVFbGVtZW50LnR5cGUgPSAndGV4dC9jc3MnXG4gIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KVxuICByZXR1cm4gc3R5bGVFbGVtZW50XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gIHZhciB1cGRhdGUsIHJlbW92ZVxuICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc3R5bGVbJyArIHNzcklkS2V5ICsgJ349XCInICsgb2JqLmlkICsgJ1wiXScpXG5cbiAgaWYgKHN0eWxlRWxlbWVudCkge1xuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGFuZCBpbiBwcm9kdWN0aW9uIG1vZGUuXG4gICAgICAvLyBzaW1wbHkgZG8gbm90aGluZy5cbiAgICAgIHJldHVybiBub29wXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGhhcyBTU1Igc3R5bGVzIGJ1dCBpbiBkZXYgbW9kZS5cbiAgICAgIC8vIGZvciBzb21lIHJlYXNvbiBDaHJvbWUgY2FuJ3QgaGFuZGxlIHNvdXJjZSBtYXAgaW4gc2VydmVyLXJlbmRlcmVkXG4gICAgICAvLyBzdHlsZSB0YWdzIC0gc291cmNlIG1hcHMgaW4gPHN0eWxlPiBvbmx5IHdvcmtzIGlmIHRoZSBzdHlsZSB0YWcgaXNcbiAgICAgIC8vIGNyZWF0ZWQgYW5kIGluc2VydGVkIGR5bmFtaWNhbGx5LiBTbyB3ZSByZW1vdmUgdGhlIHNlcnZlciByZW5kZXJlZFxuICAgICAgLy8gc3R5bGVzIGFuZCBpbmplY3QgbmV3IG9uZXMuXG4gICAgICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpXG4gICAgfVxuICB9XG5cbiAgaWYgKGlzT2xkSUUpIHtcbiAgICAvLyB1c2Ugc2luZ2xldG9uIG1vZGUgZm9yIElFOS5cbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrK1xuICAgIHN0eWxlRWxlbWVudCA9IHNpbmdsZXRvbkVsZW1lbnQgfHwgKHNpbmdsZXRvbkVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKSlcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSlcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCB0cnVlKVxuICB9IGVsc2Uge1xuICAgIC8vIHVzZSBtdWx0aS1zdHlsZS10YWcgbW9kZSBpbiBhbGwgb3RoZXIgY2FzZXNcbiAgICBzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQoKVxuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZShvYmopXG5cbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmogLyogU3R5bGVPYmplY3RQYXJ0ICovKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcbiAgICAgICAgICBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuICAgICAgICAgIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKVxuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKVxuICAgIH1cbiAgfVxufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuICB2YXIgdGV4dFN0b3JlID0gW11cblxuICByZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudFxuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpXG4gIH1cbn0pKClcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLmNzc1xuXG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKVxuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKVxuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXNcbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSlcbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZUVsZW1lbnQsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzc1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWFcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXBcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKVxuICB9XG4gIGlmIChvcHRpb25zLnNzcklkKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShzc3JJZEtleSwgb2JqLmlkKVxuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmNocm9tZS5jb20vZGV2dG9vbHMvZG9jcy9qYXZhc2NyaXB0LWRlYnVnZ2luZ1xuICAgIC8vIHRoaXMgbWFrZXMgc291cmNlIG1hcHMgaW5zaWRlIHN0eWxlIHRhZ3Mgd29yayBwcm9wZXJseSBpbiBDaHJvbWVcbiAgICBjc3MgKz0gJ1xcbi8qIyBzb3VyY2VVUkw9JyArIHNvdXJjZU1hcC5zb3VyY2VzWzBdICsgJyAqLydcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuICAgIGNzcyArPSAnXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCwnICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArICcgKi8nXG4gIH1cblxuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzXG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKVxuICB9XG59XG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2J1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM1MGQ0MDQmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL2J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9idXR0b24uY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTM1MGQ0MDQmc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNTM1MGQ0MDRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUzNTBkNDA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUzNTBkNDA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzNTBkNDA0JnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTM1MGQ0MDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImNvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTgzZGVhZTcmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4M2RlYWU3Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNWJhYjQzYyZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjgzMTIxMTU2XCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI1YmFiNDNjJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjViYWI0M2MmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi1jb2wtMVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9ja1xcbn1cXG4udi1jb2wtMVtkYXRhLXYtMmNlZjllZjRdLC52LWNvbC0yW2RhdGEtdi0yY2VmOWVmNF0sLnYtY29sLTNbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtNFtkYXRhLXYtMmNlZjllZjRdLC52LWNvbC01W2RhdGEtdi0yY2VmOWVmNF0sLnYtY29sLTZbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtN1tkYXRhLXYtMmNlZjllZjRdLC52LWNvbC04W2RhdGEtdi0yY2VmOWVmNF0sLnYtY29sLTlbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTBbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTFbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTJbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTNbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTRbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTVbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTZbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTdbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMThbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMTlbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMjBbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMjFbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMjJbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMjNbZGF0YS12LTJjZWY5ZWY0XSwudi1jb2wtMjRbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGZsb2F0OiBsZWZ0O1xcbn1cXG4udi1jb2wtMjRbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMTAwJVxcbn1cXG4udi1jb2wtMjNbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTUuODMzMzMzMzMlO1xcbn1cXG4udi1jb2wtMjJbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogOTEuNjY2NjY2NjclO1xcbn1cXG4udi1jb2wtMjFbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogODcuNSVcXG59XFxuLnYtY29sLTIwW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDgzLjMzMzMzMzMzJTtcXG59XFxuLnYtY29sLTE5W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDc5LjE2NjY2NjY3JTtcXG59XFxuLnYtY29sLTE4W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDc1JVxcbn1cXG4udi1jb2wtMTdbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNzAuODMzMzMzMzMlO1xcbn1cXG4udi1jb2wtMTZbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNjYuNjY2NjY2NjclO1xcbn1cXG4udi1jb2wtMTVbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNjIuNSU7XFxufVxcbi52LWNvbC0xNFtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA1OC4zMzMzMzMzMyU7XFxufVxcbi52LWNvbC0xM1tkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA1NC4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC0xMltkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA1MCU7XFxufVxcbi52LWNvbC0xMVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0NS44MzMzMzMzMyVcXG59XFxuLnYtY29sLTEwW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQxLjY2NjY2NjY3JTtcXG59XFxuLnYtY29sLTlbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMzcuNSU7XFxufVxcbi52LWNvbC04W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDMzLjMzMzMzMzMzJVxcbn1cXG4udi1jb2wtN1tkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAyOS4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC02W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDI1JTtcXG59XFxuLnYtY29sLTVbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG4udi1jb2wtNFtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxNi42NjY2NjY2NyU7XFxufVxcbi52LWNvbC0zW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEyLjUlO1xcbn1cXG4udi1jb2wtMltkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA4LjMzMzMzMzMzJVxcbn1cXG4udi1jb2wtMVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0LjE2NjY2NjY3JTtcXG59XFxuLnYtY29sLTBbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIGRpc3BsYXk6IG5vbmVcXG59XFxuLnYtY29sLW9mZnNldC0xW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNC4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMltkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDguMzMzMzMzMzMlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTNbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcXG59XFxuLnYtY29sLW9mZnNldC00W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2NjclO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTVbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyMC44MzMzMzMzMyU7XFxufVxcbi52LWNvbC1vZmZzZXQtNltkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcXG59XFxuLnYtY29sLW9mZnNldC03W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogMjkuMTY2NjY2NjclO1xcbn1cXG4udi1jb2wtb2Zmc2V0LThbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMy4zMzMzMzMzMyU7XFxufVxcbi52LWNvbC1vZmZzZXQtOVtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDM3LjUlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTEwW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNDEuNjY2NjY2NjclO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTExW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNDUuODMzMzMzMzMlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTEyW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTEzW2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNTQuMTY2NjY2NjclO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTE0W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNTguMzMzMzMzMzMlO1xcbn1cXG4udi1jb2wtb2Zmc2V0LTE1W2RhdGEtdi0yY2VmOWVmNF0ge1xcbiAgICBtYXJnaW4tbGVmdDogNjIuNSU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTZbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA2Ni42NjY2NjY2NyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTdbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3MC44MzMzMzMzMyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMThbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3NSU7XFxufVxcbi52LWNvbC1vZmZzZXQtMTlbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA3OS4xNjY2NjY2NyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMjBbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4My4zMzMzMzMzMyU7XFxufVxcbi52LWNvbC1vZmZzZXQtMjFbZGF0YS12LTJjZWY5ZWY0XSB7XFxuICAgIG1hcmdpbi1sZWZ0OiA4Ny41JTtcXG59XFxuLnYtY29sLW9mZnNldC0yMltkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDkxLjY2NjY2NjY3JTtcXG59XFxuLnYtY29sLW9mZnNldC0yM1tkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDk1LjgzMzMzMzMzJTtcXG59XFxuLnYtY29sLW9mZnNldC0yNFtkYXRhLXYtMmNlZjllZjRdIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwMCU7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmMmQ1OTVkJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFmMmQ1OTVkJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RhYmxlLWJvZHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFibGUtYm9keS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImltcG9ydCBSb3cgZnJvbSAnLi9yb3cudnVlJztcblxuZXhwb3J0IGRlZmF1bHQgUm93OyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LXNpZGVyW2RhdGEtdi0yNjcwMTY5MV17XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzOiBfdm0uY2xhc3NzLCBzdHlsZTogX3ZtLnN0eWxlIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2NzAxNjkxJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2NzAxNjkxJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBjbGFzczogX3ZtLmNsYXNzcywgc3R5bGU6IF92bS5zdHlsZSB9LFxuICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCI8dGVtcGxhdGU+XG4gICAgPGJ1dHRvblxuICAgICAgICBjbGFzcz1cInQtYnRuXCJcbiAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICA6dHlwZT1cImh0bWxUeXBlXCJcbiAgICAgICAgOmNsYXNzPVwiY2xhc3NzXCJcbiAgICAgICAgOnN0eWxlPVwic3R5bGVcIlxuICAgICAgICBAY2xpY2s9XCJoYW5kbGVDbGlja1wiXG4gICAgPjxzcGFuPjxzbG90Pjwvc2xvdD48L3NwYW4+PC9idXR0b24+XG48L3RlbXBsYXRlPlxuPHN0eWxlIHNyYz0nLi9idXR0b24uY3NzJyBzY29wZWQgbGFuZz1cImNzc1wiPjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG9uZU9mIH0gZnJvbSAnLi4vdXRpbC9hc3Npc3QnO1xuXG4gICAgY29uc3QgcHJlZml4Q2xzID0gJ3QtYnRuJztcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogcHJlZml4Q2xzLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOmZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbmVPZih2YWwsWydkZWZhdWx0JywndGV4dCcsJ3dhcm5pbmcnLCdlcnJvciddKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aDp7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDEwMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhlaWdodDp7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDUwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOmZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbmVPZih2YWwsWydkZWZhdWx0JywndGlueScsJ2xhcmdlJywnbG9uZycsJ2F1dG8nXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaHRtbFR5cGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJ2J1dHRvbicsXG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yOmZ1bmN0aW9uKHZhbCl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvbmVPZih2YWwsWydidXR0b24nLCdzdWJtaXQnLCdyZXNldCddKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgY2xhc3NzOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzcyA9IFtdO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNsYXNzcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeENsc30tdHlwZS1gK3RoaXMudHlwZV1cbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5zaXplICE9ICdhdXRvJyl7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzcy5wdXNoKFtgJHtwcmVmaXhDbHN9LXNpemUtYCt0aGlzLnNpemVdKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc3MgO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN0eWxlOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge307XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnNpemUgPT0gJ2F1dG8nKXtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUud2lkdGggPSB0aGlzLndpZHRoKydweCc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmhlaWdodCA9IHRoaXMuaGVpZ2h0KydweCc7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlLmxpbmVIZWlnaHQgPSB0aGlzLmhlaWdodCsncHgnO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBoYW5kbGVDbGljazogZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJjbGlja1wiLGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIi8qKlxuICogVHJhbnNsYXRlcyB0aGUgbGlzdCBmb3JtYXQgcHJvZHVjZWQgYnkgY3NzLWxvYWRlciBpbnRvIHNvbWV0aGluZ1xuICogZWFzaWVyIHRvIG1hbmlwdWxhdGUuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAocGFyZW50SWQsIGxpc3QpIHtcbiAgdmFyIHN0eWxlcyA9IFtdXG4gIHZhciBuZXdTdHlsZXMgPSB7fVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV1cbiAgICB2YXIgaWQgPSBpdGVtWzBdXG4gICAgdmFyIGNzcyA9IGl0ZW1bMV1cbiAgICB2YXIgbWVkaWEgPSBpdGVtWzJdXG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM11cbiAgICB2YXIgcGFydCA9IHtcbiAgICAgIGlkOiBwYXJlbnRJZCArICc6JyArIGksXG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfVxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHsgaWQ6IGlkLCBwYXJ0czogW3BhcnRdIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KVxuICAgIH1cbiAgfVxuICByZXR1cm4gc3R5bGVzXG59XG4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiA6Y2xhc3M9XCJjbGFzc3NcIiA6c3R5bGU9XCJzdHlsZXNcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNyYz0nLi9jb2wuY3NzJyBsYW5nPSdzdHlsdXMnIHNjb3BlZD48L3N0eWxlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IGZpbmRDb21wb25lbnRVcHdhcmQgfSBmcm9tICcuLi91dGlsL2Fzc2lzdCc7XG4gICAgbGV0IHByZWZpeENscyA9ICd2LWNvbCc7XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6IHByZWZpeENscyxcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgc3Bhbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAyNFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9mZnNldDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ3V0dGVyOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeENsc31gLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBbYCR7cHJlZml4Q2xzfS0ke3RoaXMuc3Bhbn1gXTogdGhpcy5zcGFuLFxuICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeENsc30tb2Zmc2V0LSR7dGhpcy5vZmZzZXR9YF06IHRoaXMub2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdHlsZXM6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmd1dHRlciAhPT0wKXtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogdGhpcy5ndXR0ZXIgLyAyICsncHgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiB0aGlzLmd1dHRlciAvIDIgKydweCcsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICAgICAgdXBkYXRlR3V0dGVyOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGNvbnN0IFJvdyA9IGZpbmRDb21wb25lbnRVcHdhcmQodGhpcywgJ3Ytcm93Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoUm93KSB7XG4gICAgICAgICAgICAgICAgICAgIFJvdy51cGRhdGVHdXR0ZXIoUm93Lmd1dHRlcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUd1dHRlcigpO1xuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PiIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyODcyNWY4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXlvdXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTI4NzI1ZjgmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF5b3V0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEyODcyNWY4Jmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjViYWI0M2Mmc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi90YWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vdGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjViYWI0M2MmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMjViYWI0M2NcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI1YmFiNDNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI1YmFiNDNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90YWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjViYWI0M2Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNWJhYjQzYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiY29tcG9uZW50cy90YWJsZS90YWJsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiA6Y2xhc3M9XCJjbGFzc3NcIj5cbiAgICAgICAgPGRpdiBjbGFzcz0ndi1oZWFkZXItd2lkdGgnIDpzdHlsZT1cInN0eWxlc1wiPlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz0nY3NzJyBzY29wZWQ+XG4gICAgLnYtaGVhZGVye1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgLnYtaGVhZGVyLXdpZHRoe1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBvbmVPZiB9IGZyb20gJy4uL3V0aWwvYXNzaXN0JztcbiAgICBjb25zdCBwcmVmaXhDbHMgPSAndi1oZWFkZXInO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBwcmVmaXhDbHMsXG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIHdpZHRoOntcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMTAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTp7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRvcjogZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uZU9mKHZhbCxbJycsJ2ZpeGVkJ10pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGluZGV4OntcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb21wdXRlZDp7XG4gICAgICAgICAgICBzdHlsZXM6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIG1heFdpZHRoOiB0aGlzLndpZHRoICsgJ3B4J1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBpZih0aGlzLnR5cGUpe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5wb3NpdGlvbiA9IHRoaXMudHlwZTtcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUuekluZGV4ID0gdGhpcy5pbmRleDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gc3R5bGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc3M6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhDbHN9YFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Jvdy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYmY3ZWEzYSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9yb3cuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWJmN2VhM2EmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJidXR0b25cIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0LWJ0blwiLFxuICAgICAgY2xhc3M6IF92bS5jbGFzc3MsXG4gICAgICBzdHlsZTogX3ZtLnN0eWxlLFxuICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZCwgdHlwZTogX3ZtLmh0bWxUeXBlIH0sXG4gICAgICBvbjogeyBjbGljazogX3ZtLmhhbmRsZUNsaWNrIH1cbiAgICB9LFxuICAgIFtfYyhcInNwYW5cIiwgW192bS5fdChcImRlZmF1bHRcIildLCAyKV1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc3MmY5ZTliJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzJmOWU5YiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzJmOWU5YiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcblxuXHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXG5cdFx0dmFyIGxvY2FscyA9IChmdW5jdGlvbihhLCBiKSB7XG5cdFx0XHR2YXIga2V5LCBpZHggPSAwO1xuXG5cdFx0XHRmb3Ioa2V5IGluIGEpIHtcblx0XHRcdFx0aWYoIWIgfHwgYVtrZXldICE9PSBiW2tleV0pIHJldHVybiBmYWxzZTtcblx0XHRcdFx0aWR4Kys7XG5cdFx0XHR9XG5cblx0XHRcdGZvcihrZXkgaW4gYikgaWR4LS07XG5cblx0XHRcdHJldHVybiBpZHggPT09IDA7XG5cdFx0fShjb250ZW50LmxvY2FscywgbmV3Q29udGVudC5sb2NhbHMpKTtcblxuXHRcdGlmKCFsb2NhbHMpIHRocm93IG5ldyBFcnJvcignQWJvcnRpbmcgQ1NTIEhNUiBkdWUgdG8gY2hhbmdlZCBjc3MtbW9kdWxlcyBsb2NhbHMuJyk7XG5cblx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdH0pO1xuXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Jvdy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYmY3ZWEzYSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjYxYzkwZmRlXCIsIGNvbnRlbnQsIGZhbHNlLCB7fSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Jvdy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYmY3ZWEzYSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3Jvdy5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYmY3ZWEzYSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHRlbXBsYXRlPlxuICAgIDx0YWJsZSBjZWxsc3BhY2luZz1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBib3JkZXI9XCIwXCIgOmNsYXNzPVwiY2xhc3NzXCI+XG4gICAgICAgIDxjb2xncm91cD5cbiAgICAgICAgICAgIDxjb2wgdi1mb3I9JyhpdGVtLGluZGV4KSBpbiB3aWR0aCcgOmtleT0naW5kZXgnIDp3aWR0aD0naXRlbSc+PC9jb2w+XG4gICAgICAgIDwvY29sZ3JvdXA+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L3RhYmxlPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNyYz0nLi90YWJsZS5jc3MnIGxhbmc9XCJjc3NcIiBzY29wZWQ+PC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBmaW5kQ29tcG9uZW50RG93bndhcmQgfSBmcm9tICcuLi91dGlsL2Fzc2lzdC5qcyc7XG5cbiAgICBjb25zdCBwcmVmaXhDbHMgPSAndi10YWJsZSc7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBwcmVmaXhDbHMsXG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIHdpZHRoOntcbiAgICAgICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc3MgPSBbXG4gICAgICAgICAgICAgICAgICAgIGAke3ByZWZpeENsc31gXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZHM6e1xuICAgICAgICAgICAgd2lkdGhIYW5kbGU6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgY29tcG9uZW50Tm9kZSA9IGZpbmRDb21wb25lbnREb3dud2FyZCh0aGlzLCd2LXRhYmxlLXRyJyk7XG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aDtcbiAgICAgICAgICAgICAgICBsZXQgbGVuZ3RoID0gY29tcG9uZW50Tm9kZS4kZWwuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKGxlbmd0aCAmJiAhd2lkdGgubGVuZ3RoKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG51bSA9IDEwMCAvIGxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDtpIDwgbGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMud2lkdGgsaSxgJHtudW19YCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBpZighdGhpcy53aWR0aC5sZW5ndGgpIHRoaXMud2lkdGhIYW5kbGUoKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IGNsYXNzOiBfdm0uY2xhc3NzLCBzdHlsZTogX3ZtLnN0eWxlIH0sXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4vaW5wdXQuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMDQ2YTNhYWFcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9pbnB1dC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuL2lucHV0LmNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRoZWFkXCIsIHsgY2xhc3M6IF92bS5jbGFzc3MgfSwgW192bS5fdChcImRlZmF1bHRcIildLCAyKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY3MDE2OTEmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2NzAxNjkxJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2NzAxNjkxJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yb3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiZjdlYTNhJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcm93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9yb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcm93LmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFiZjdlYTNhJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjFiZjdlYTNhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3pqd2VuL3Z1ZS1jb21wb25lbnQvbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1ob3QtcmVsb2FkLWFwaS8yLjMuMC92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYmY3ZWEzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYmY3ZWEzYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcm93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYmY3ZWEzYSZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFiZjdlYTNhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3Jvdy9yb3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90YWJsZS1oZWFkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NzJmOWU5YiZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RhYmxlLWhlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmV4cG9ydCAqIGZyb20gXCIuL3RhYmxlLWhlYWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzcyZjllOWImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzcyZjllOWJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvemp3ZW4vdnVlLWNvbXBvbmVudC9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWhvdC1yZWxvYWQtYXBpLzIuMy4wL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc3MmY5ZTliJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc3MmY5ZTliJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi90YWJsZS1oZWFkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NzJmOWU5YiZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc3MmY5ZTliJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL3RhYmxlL3RhYmxlLWhlYWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJpbXBvcnQgaGVhZGVyIGZyb20gJy4vaGVhZGVyLnZ1ZSc7XG5pbXBvcnQgY29udGVudCBmcm9tICcuL2NvbnRlbnQudnVlJztcbmltcG9ydCBmb290ZXIgZnJvbSAnLi9mb290ZXIudnVlJztcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi9sYXlvdXQudnVlJztcbmltcG9ydCBzaWRlciBmcm9tICcuL3NpZGVyLnZ1ZSc7XG5cbmV4cG9ydCB7IGhlYWRlcixjb250ZW50LGZvb3RlcixsYXlvdXQsc2lkZXIgfSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LXRhYmxlW2RhdGEtdi0yNWJhYjQzY117XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1oZWFkW2RhdGEtdi0yNWJhYjQzY117XFxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi52LXRhYmxlLWhlYWQgdHJbZGF0YS12LTI1YmFiNDNjXXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVhZWM7XFxufVxcbi52LXRhYmxlLWhlYWQgdHIgdGhbZGF0YS12LTI1YmFiNDNjXXtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cXG4udi10YWJsZS1ib2R5W2RhdGEtdi0yNWJhYjQzY117XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udi10YWJsZS1ib2R5IHRyW2RhdGEtdi0yNWJhYjQzY117XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1ib2R5IHRyIHRkW2RhdGEtdi0yNWJhYjQzY117XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2E3NDhjZjkmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLXN0eWxlLWxvYWRlci80LjEuMC92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2E3NDhjZjkmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKGZhbHNlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52LXRhYmxlW2RhdGEtdi0xZjJkNTk1ZF17XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1oZWFkW2RhdGEtdi0xZjJkNTk1ZF17XFxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjk7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxufVxcbi52LXRhYmxlLWhlYWQgdHJbZGF0YS12LTFmMmQ1OTVkXXtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVhZWM7XFxufVxcbi52LXRhYmxlLWhlYWQgdHIgdGhbZGF0YS12LTFmMmQ1OTVkXXtcXG4gICAgcGFkZGluZzogMTVweCAwO1xcbn1cXG4udi10YWJsZS1ib2R5W2RhdGEtdi0xZjJkNTk1ZF17XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4udi10YWJsZS1ib2R5IHRyW2RhdGEtdi0xZjJkNTk1ZF17XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1ib2R5IHRyIHRkW2RhdGEtdi0xZjJkNTk1ZF17XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4vdGFibGUuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzcyZjllOWImbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1zdHlsZS1sb2FkZXIvNC4xLjAvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzN2I1NzJhMFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi90YWJsZS5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzJmOWU5YiZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL3RhYmxlLmNzcz92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTc3MmY5ZTliJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9iYWJlbC1sb2FkZXIvNy4xLjQvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idXR0b24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCIiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKShmYWxzZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udi10YWJsZVtkYXRhLXYtNzcyZjllOWJde1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWFlYztcXG59XFxuLnYtdGFibGUtaGVhZFtkYXRhLXYtNzcyZjllOWJde1xcbiAgICBiYWNrZ3JvdW5kOiAjZjhmOGY5O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udi10YWJsZS1oZWFkIHRyW2RhdGEtdi03NzJmOWU5Yl17XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllYWVjO1xcbn1cXG4udi10YWJsZS1oZWFkIHRyIHRoW2RhdGEtdi03NzJmOWU5Yl17XFxuICAgIHBhZGRpbmc6IDE1cHggMDtcXG59XFxuLnYtdGFibGUtYm9keVtkYXRhLXYtNzcyZjllOWJde1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnYtdGFibGUtYm9keSB0cltkYXRhLXYtNzcyZjllOWJde1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWFlYztcXG59XFxuLnYtdGFibGUtYm9keSB0ciB0ZFtkYXRhLXYtNzcyZjllOWJde1xcbiAgICBwYWRkaW5nOiAxNXB4IDA7XFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI2NzAxNjkxJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtc3R5bGUtbG9hZGVyLzQuMS4wL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTg0ZWYyMGVcIiwgY29udGVudCwgZmFsc2UsIHt9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvY3NzLWxvYWRlci8wLjI4LjExL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2lkZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjY3MDE2OTEmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3N0eWxlLWxvYWRlci8wLjIxLjAvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjcwMTY5MSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0NTkyNjhmJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvc3R5bGUtbG9hZGVyLzAuMjEuMC9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb250ZW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU0NTkyNjhmJmxhbmc9Y3NzJnNjb3BlZD10cnVlXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbnRlbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTQ1OTI2OGYmbGFuZz1jc3Mmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgdGFibGUgZnJvbSAnLi90YWJsZS52dWUnO1xuaW1wb3J0IHRoZWFkIGZyb20gJy4vdGFibGUtaGVhZC52dWUnO1xuaW1wb3J0IHRib2R5IGZyb20gJy4vdGFibGUtYm9keS52dWUnO1xuaW1wb3J0IHRyIGZyb20gJy4vdGFibGUtdHIudnVlJztcblxuZXhwb3J0IHsgdGFibGUsIHRoZWFkLCB0Ym9keSwgdHIgfTsiLCI8dGVtcGxhdGU+XG4gICAgPGRpdiA6c3R5bGU9XCJzdHlsZVwiIDpjbGFzcz1cImNsYXNzc1wiPjxzbG90Pjwvc2xvdD48L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGUgbGFuZz0nY3NzJyBzY29wZWQ+XG4gICAgLnYtbGF5b3V0e1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgIH1cbiAgICAudi1sYXlvdXQtaGFzLXNpZGVye1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIH1cbjwvc3R5bGU+XG48c2NyaXB0PlxuICAgIGNvbnN0IHByZWZpeENscyA9ICd2LWxheW91dCc7XG4gICAgZXhwb3J0IGRlZmF1bHR7XG4gICAgICAgIG5hbWU6IHByZWZpeENscyxcbiAgICAgICAgZGF0YTpmdW5jdGlvbigpe1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoYXNTaWRlcjogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgdG9wOntcbiAgICAgICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogMFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvdHRvbTp7XG4gICAgICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgY29tcHV0ZWQ6e1xuICAgICAgICAgICAgc3R5bGU6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBsZXQgc3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodGhpcy50b3Ape1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5wYWRkaW5nVG9wPSB0aGlzLnRvcCsncHgnXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ib3R0b20pe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZS5wYWRkaW5nQm90dG9tPSB0aGlzLmJvdHRvbSsncHgnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbGFzc3M6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBgJHtwcmVmaXhDbHN9YCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeENsc30taGFzLXNpZGVyYF06IHRoaXMuaGFzU2lkZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgICAgICBmaW5kU2lkZXI6ZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy4kY2hpbGRyZW4uc29tZShjaGlsZD0+e1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQuJG9wdGlvbnMubmFtZSA9PT0gJ3Ytc2lkZXInO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtb3VudGVkOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB0aGlzLmhhc1NpZGVyID0gdGhpcy5maW5kU2lkZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IDpjbGFzcz1cImNsYXNzc1wiIDpzdHlsZT1cInN0eWxlc1wiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc3JjPScuL3Jvdy5jc3MnIGxhbmc9J2Nzcycgc2NvcGVkPjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgZmluZENvbXBvbmVudERvd253YXJkLCBmaW5kQnJvdGhlcnNDb21wb25lbnRzLCBvbmVPZn0gZnJvbSAnLi4vdXRpbC9hc3Npc3QnO1xuICAgIGxldCBwcmVmaXhDbHMgPSAndi1yb3cnO1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBwcmVmaXhDbHMsXG4gICAgICAgIHByb3BzOntcbiAgICAgICAgICAgIGd1dHRlcjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6ZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uZU9mKHZhbCxbJycsJ2ZsZXgnXSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAganVzdGlmeToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6ZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uZU9mKHZhbCxbJycsJ3N0YXJ0JywnZW5kJywnY2VudGVyJywnc3BhY2UtYXJvdW5kJywnc3BhY2UtYmV0d2VlbiddKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbGlnbjoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3I6ZnVuY3Rpb24odmFsKXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uZU9mKHZhbCxbJycsJ3RvcCcsJ21pZGRsZScsJ2JvdHRvbSddKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXB1dGVkOntcbiAgICAgICAgICAgIGNsYXNzczpmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc3MgPSB7XG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXhDbHN9YF06ICF0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXhDbHN9LWArdGhpcy50eXBlXTogISF0aGlzLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgIFtgJHtwcmVmaXhDbHN9LWZsZXgtYCt0aGlzLmp1c3RpZnldOiAhIXRoaXMuanVzdGlmeSxcbiAgICAgICAgICAgICAgICAgICAgW2Ake3ByZWZpeENsc30tZmxleC1gK3RoaXMuYWxpZ25dOiAhIXRoaXMuYWxpZ25cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc3M7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3R5bGVzOmZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IHN0eWxlID0ge307XG4gICAgICAgICAgICAgICAgaWYodGhpcy5ndXR0ZXIgIT09IDApe1xuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IHRoaXMuZ3V0dGVyIC8gLTIgKydweCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5SaWdodDogdGhpcy5ndXR0ZXIgLyAtMiArJ3B4JyxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdXBkYXRlR3V0dGVyOiBmdW5jdGlvbih2YWwpe1xuICAgICAgICAgICAgICAgIGNvbnN0IENvbCA9IGZpbmRDb21wb25lbnREb3dud2FyZCh0aGlzLCAndi1jb2wnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBDb2xzID0gZmluZEJyb3RoZXJzQ29tcG9uZW50cyhDb2wsICd2LWNvbCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBpZiAoQ29scy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgQ29scy5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmd1dHRlciA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgZ3V0dGVyICh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUd1dHRlcih2YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0clwiLCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvYmFiZWwtbG9hZGVyLzcuMS40L2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL3Z1ZS1sb2FkZXIvMTUuMS4wL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb2wudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2JhYmVsLWxvYWRlci83LjEuNC9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29sLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnYtbGF5b3V0W2RhdGEtdi0xMjg3MjVmOF17XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXg6IGF1dG87XFxufVxcbi52LWxheW91dC1oYXMtc2lkZXJbZGF0YS12LTEyODcyNWY4XXtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9jb2wuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmNlZjllZjQmbGFuZz1zdHlsdXMmc2NvcGVkPXRydWVcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9zdHlsZS1sb2FkZXIvMC4yMS4wL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzLy5ucG1pbnN0YWxsL2Nzcy1sb2FkZXIvMC4yOC4xMS9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtbG9hZGVyLzE1LjEuMC92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuL2NvbC5jc3M/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yY2VmOWVmNCZsYW5nPXN0eWx1cyZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC9jc3MtbG9hZGVyLzAuMjguMTEvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi9jb2wuY3NzP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmNlZjllZjQmbGFuZz1zdHlsdXMmc2NvcGVkPXRydWVcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3NpZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNjcwMTY5MSZzY29wZWQ9dHJ1ZVwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3NpZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9zaWRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9zaWRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNjcwMTY5MSZsYW5nPWNzcyZzY29wZWQ9dHJ1ZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvLm5wbWluc3RhbGwvdnVlLWxvYWRlci8xNS4xLjAvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyNjcwMTY5MVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy96andlbi92dWUtY29tcG9uZW50L25vZGVfbW9kdWxlcy8ubnBtaW5zdGFsbC92dWUtaG90LXJlbG9hZC1hcGkvMi4zLjAvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjY3MDE2OTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjY3MDE2OTEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3NpZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNjcwMTY5MSZzY29wZWQ9dHJ1ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI2NzAxNjkxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJjb21wb25lbnRzL2xheW91dC9zaWRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCI8dGVtcGxhdGU+XG4gICAgPHRyPjxzbG90Pjwvc2xvdD48L3RyPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNyYz0nLi90YWJsZS5jc3MnIGxhbmc9XCJjc3NcIiBzY29wZWQ+PC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgICBjb25zdCBwcmVmaXhDbHMgPSAndi10YWJsZS10cic7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiBwcmVmaXhDbHNcbiAgICB9XG48L3NjcmlwdD4iXSwic291cmNlUm9vdCI6IiJ9