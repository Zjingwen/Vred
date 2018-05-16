
require('./tooltip.css');
var template = require('./tooltip.html');
var vuePopper = require("../util/vue-popper.js");

module.exports = Vue.extend({

    componentName: 'TTooltip',

    template: template,

    mixins: [vuePopper],

    props: {
        delay:{
            type: Number,
            default: 0
        },
        disabled: Boolean,
        content: String,
        effect: {
            type: String,
            default: 'dark'
        },
        width: {},
        popperClass: String,
        visibleArrow: {
            default: true
        }
    },

    methods: {

        handleShowPopper: function(){

            this.timeout = setTimeout(function(){
                // Set to true if you want to automatically remove the popper when you call the destroy method.
                this.removeOnDestroy = true;
                this.createPopper();
                this.showPopper = true;

            }.bind(this), this.delay)
        },

        handleHidePopper: function(){
            clearTimeout(this.timeout);
            this.destroyPopper();
            this.showPopper = false;
        }
    }

})