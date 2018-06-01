import col from './col/index';// 列
import row from './row/index';//   行

import {header, content, footer, layout, sider} from './layout/index';// 布局

import {table, thead, tbody, tr, th} from './table/index';// 表单

import {menu, menuItem, menuGroup, menuSub} from './menu/index';// 导航栏

import button from './button/index';// 按钮

/**
 * 第三方库，自动全局安装
 */
import './tooltip/index';

import exapmple from './exapmple/index';// 例子展示, @TODO:jingwen 体积太大

let input = require('./input/input.js');// 输入框


// var Modal = require("./modal/modal.js");
// var Notice = require("./notice/notification.js");
// var Message = require("./message/index.js");
//

// var Select = require("./select/select.js");
// var Option = require("./select/option.js");


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
  table,
  thead,
  tbody,
  tr,
  th,
  exapmple,
  menu,
  menuItem,
  menuGroup,
  menuSub,
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
};


if (window.Vue) {
  // window.infiniteScroll = InfiniteScroll;
  install(Vue);
}
