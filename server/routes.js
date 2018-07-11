import index from '@pages/index';
import rowCol from '@pages/row-col';
import button from '@pages/button';
import layout from '@pages/layout';
import table from '@pages/table';
import input from '@pages/input';
import menu from '@pages/menu';
import tooltip from '@pages/tooltip';
import poptip from '@pages/poptip';
import checkbox from '@pages/checkbox';
import message from '@pages/message';
import notice from '@pages/notice';
import radio from '@pages/radio';
import Switch from '@pages/switch';
import modal from '@pages/modal';
import select from '@pages/select';
import pagination from '@pages/pagination';
import datePicker from '@pages/datePicker';
import iconfong from '@pages/iconfong';

export default [
  {
    path: '/',
    name: '首页',
    component: index,
  },
  {
    path: '/iconfong',
    name: '图标字体',
    component: iconfong,
  },
  {
    path: '/row-col',
    name: '栅栏',
    component: rowCol,
  },
  {
    path: '/button',
    name: '按钮',
    component: button,
  },
  {
    path: '/layout',
    name: '布局',
    component: layout,
  },
  {
    path: '/menu',
    name: '导航',
    component: menu,
  },
  {
    path: '/table',
    name: '表格',
    component: table,
  },
  {
    path: '/input',
    name: '输入框',
    component: input,
  },
  {
    path: '/checkbox',
    name: '勾选框',
    component: checkbox,
  },
  {
    path: '/switch',
    name: '开关',
    component: Switch,
  },
  {
    path: '/radio',
    name: '单选框',
    component: radio,
  },
  {
    path: '/tooltip',
    name: '气泡提示',
    component: tooltip,
  },
  {
    path: '/poptip',
    name: '模块提示',
    component: poptip,
  },
  {
    path: '/message',
    name: '消息提示',
    component: message,
  },
  {
    path: '/notice',
    name: '通知提醒',
    component: notice,
  },
  {
    path: '/modal',
    name: '弹出窗',
    component: modal,
  },
  {
    path: '/select',
    name: '下拉选择',
    component: select,
  },
  {
    path: '/pagination',
    name: '翻页',
    component: pagination,
  },
  {
    path: '/datePicker',
    name: '日期选择',
    component: datePicker,
  },
];
