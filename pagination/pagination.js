/**
 * 分页组件
 * 支持异步请求 remote
 * demo:
 * <t-pagination :paging="collect.pagination" align="right"></t-pagination>
 */
require('./pagination.css');
var template = require('./pagination.html');

module.exports = Vue.extend({

    componentName: 'TPagination',

    template: template,

    props: {
        paging: Object,
        align: String,
        remote: Boolean,
        remoteMethod: Function
    },

    data: function(){
        return {
            current: 1
        }
    },

    // watch:{
    //     current: function(){
    //         this.remote && this.remoteMethod(this.current);
    //     }
    // },

    methods: {

        up: function(){
            this.current -= 1;
        },
        down: function(){
            this.current += 1;
        },
        pageClick: function(page){

            this.current = page;

            this.remote && this.remoteMethod(this.current);
            
        }
    }
});