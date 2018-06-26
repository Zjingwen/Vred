import '@less/index';

import col from '@components/col/index';// 列

import row from '@components/row/index';// 行

import {header, content, footer, layout, sider} from '@components/layout/index';// 布局

import {table, thead, tbody, tr, th} from '@components/table/index';// 表单

import {menu, menuItem, menuGroup, menuSub} from '@components/menu/index';// 导航栏

import button from '@components/button/index';// 按钮

import tooltip from '@components/tooltip/index';// 气泡提示

import poptip from '@components/poptip/index';// 模块提示

import input from '@components/input/index';// 输入框

import {checkbox, checkboxGroup} from '@components/checkbox/index';// 多选框

import {radio, radioGroup} from '@components/radio/index';// 单选框

import message from '@components/message/index';// 消息提示

import notice from '@components/notice/index';// 通知提醒
/**
 * @TODO:jingwen exapmple组件体积太大
 */
// import exapmple from './exapmple/index';// 例子展示

// var Modal = require("./modal/modal.js");


// var Select = require("./select/select.js");
// var Option = require("./select/option.js");


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

let components = {
  col,
  row,
  header,
  content,
  footer,
  layout,
  sider,
  button,
  input,
  checkbox,
  checkboxGroup,
  radio,
  radioGroup,
  table,
  thead,
  tbody,
  tr,
  th,
  // exapmple,
  menu,
  menuItem,
  menuGroup,
  menuSub,
  tooltip,
  poptip,
};

function install(Vue) {
  Object.keys(components).forEach( (value)=>{
    Vue.component('t-'+value, components[value]);
  });
  // Vue.component('t-select', Select);
  // Vue.component('t-option', Option);

  // Vue.component('t-checkbox', Checkbox);
  // Vue.component('t-radio', Radio);
  // Vue.component('t-dropdown', Dropdown);
  // Vue.component('t-dropdown-menu', DropdownMenu);
  // Vue.component('t-dropdown-item', DropdownItem);

  // Vue.component('modal', Modal);
  // Vue.component('t-pagination', Pagination);

  Vue.prototype.$notice = notice;
  Vue.prototype.$message = message;

  // Vue.directive('InfiniteScroll', InfiniteScroll);
  // Vue.directive('lazy', Lazyload);
  // Vue.directive('popover', PopoverDirective);

  // Vue.component('t-clock-picker', Clock);
  // Vue.component('t-date-picker', Date);
  // Vue.component('swiper', VueAwesomeSwiper.swiper);
  // Vue.component('swiperSlide', VueAwesomeSwiper.swiperSlide);
};


if (window.Vue) {
  // window.infiniteScroll = InfiniteScroll;
  install(Vue);
}
