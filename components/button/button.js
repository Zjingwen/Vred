/**
 * 按钮组件
 */

require('./button.css');

var html = require("./button.html");

module.exports = Vue.extend({

    template: html,

    props: {
        type: {
            type: String,
            default: 'button'
        },
        classType: {
            type: String,
            default: 'default'
        },
        customClass: String,
        icon: {
            type: String,
            default: ''
        },
        size: String,
        disabled: Boolean
    },

    methods: {

        handleClick: function(event){
            this.$emit("click",event);
        }
    }
});