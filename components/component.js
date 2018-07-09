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

import Switch from '@components/switch/index';// 开关

import modal from '@components/modal/index';// 弹窗

import {select, option} from '@components/select/index';// 下拉筛选

import pagination from '@components/pagination/index';// 翻页

let datePicker = require('./datetime/picker/date-picker.js'); // 日期选择控件
/**
 * @TODO:jingwen exapmple组件体积太大
 */
// import exapmple from './exapmple/index';// 例子展示

// var Dropdown = require("./dropdown/dropdown.js"); //独立下拉菜单集合
// var DropdownMenu = require("./dropdown/dropdown-menu.js"); //独立下拉菜单子集
// var DropdownItem = require("./dropdown/dropdown-item.js"); //独立下拉菜单子集

// var InfiniteScroll = require("./directives/infinite-scroll.js"); // 滚动到底部

// var Clock = require("./datetime/picker/time-picker.js"); //选择时间控件


// var VueAwesomeSwiper = require("./swipre/vue-awesome-swiper.js"); // 轮播

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
  Switch,
  checkbox,
  checkboxGroup,
  radio,
  radioGroup,
  table,
  thead,
  tbody,
  tr,
  th,
  menu,
  menuItem,
  menuGroup,
  menuSub,
  tooltip,
  poptip,
  modal,
  select,
  option,
  pagination,
  datePicker,
  // exapmple,
};

function install(Vue) {
  Object.keys(components).forEach( (value)=>{
    Vue.component('t-'+value, components[value]);
  });
  Vue.prototype.$notice = notice;
  Vue.prototype.$message = message;

  // Vue.component('t-dropdown', Dropdown);
  // Vue.component('t-dropdown-menu', DropdownMenu);
  // Vue.component('t-dropdown-item', DropdownItem);

  // Vue.component('t-pagination', Pagination);

  // Vue.directive('InfiniteScroll', InfiniteScroll);

  // Vue.component('t-clock-picker', Clock);
  // Vue.component('t-date-picker', Date);
  // Vue.component('swiper', VueAwesomeSwiper.swiper);
  // Vue.component('swiperSlide', VueAwesomeSwiper.swiperSlide);
};


if (window.Vue) {
  // window.infiniteScroll = InfiniteScroll;
  install(Vue);
}
