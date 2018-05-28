import index from './pages/index.vue';
import rowCol from './pages/row-col.vue';
import button from './pages/button.vue';
import layout from './pages/layout.vue';
import table from './pages/table.vue';
import input from './pages/input.vue';
import menu from './pages/menu.vue';
import tooltip from './pages/tooltip.vue';
import exapmple from './pages/exapmple.vue';

export default [
    { 
        path: '/',
        name: '首页',
        component: index 
    },
    { 
        path: '/row-col',
        name: '栅栏',
        component: rowCol 
    },
    { 
        path: '/button',
        name: '按钮',
        component: button 
    },
    { 
        path: '/layout',
        name: '布局',
        component: layout
    },
    { 
        path: '/menu',
        name: '导航',
        component: menu
    },
    { 
        path: '/table',
        name: '表格',
        component: table 
    },
    { 
        path: '/input',
        name: '输入框',
        component: input
    },
    {
        path: '/tooltip',
        name: '气泡提示',
        component: tooltip
    },
    {
        path: '/exapmple',
        name: '例子展示',
        component: exapmple
    }
];