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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__input__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["default"] = (Vue.extend({
    template: __WEBPACK_IMPORTED_MODULE_0__input__["default"],
    data: function(){
      return {
          currentValue: this.value
      }
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
        size: String,
        form: String,
        icon: String,
        imageIcon: Boolean
    },
    methods: {

        updateValue: function(value){
            this.currentValue = value.trim();
        },

        handleBlur: function(event){
            this.$emit('blur', event);
            this.$emit("input", this.$refs.input.value);
        },

        handleFocus: function(event) {
            this.$emit('focus', event);
        },

        handleIconClick: function(){
            this.$emit("icon-click", event);
        },

        inputSelect: function() {
            this.$refs.input.select();
        }
    },
    created: function() {
        this.$on('inputSelect', this.inputSelect);
    },
    watch:{
        currentValue: function(newV){
            this.$emit("input", newV);
            this.$emit('change', newV);
        }
    }
}));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * 组件安装
 */

// var Modal = require("./modal/modal.js");
// var Notice = require("./notice/notification.js");
// var Message = require("./message/index.js");
//
var Input = __webpack_require__(0);
// var Select = require("./select/select.js");
// var Option = require("./select/option.js");
// var Button = require("./button/button.js");
//
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

function install(Vue){

    Vue.component('t-input', Input);
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

if(window.Vue){
    // window.infiniteScroll = InfiniteScroll;
    install(window.Vue)
}

/***/ })
/******/ ]);