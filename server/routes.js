import index from './pages/index.vue';
import rowCol from './pages/row-col.vue';
import button from './pages/button.vue';
import layout from './pages/layout.vue';
import table from './pages/table.vue';
import input from './pages/input.vue';

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
        path: '/table',
        name: '表格',
        component: table 
    },
    { 
        path: '/input',
        name: '输入框',
        component: input
    }
];