
var emitter = require("../mixins/emitter.js");

module.exports = Vue.extend({

    componentName: 'TOption',

    template: '<li class="t-select_item" @mouseenter="hoverItem" @click="optionClick" :class="{selected:isSelected,hover:isHover}"><slot><span>{{currentLabel}}</span></slot></li>',

    mixins: [emitter],

    props: {
        value: {
            required: true
        },
        label: [String, String],
        disabled: {
            type: Boolean,
            default: false
        }
    },

    data: function(){
        return {
            index: -1,
            visible: true
        };
    },

    computed:{
        currentLabel: function(){
            return this.label || ((typeof this.value === 'string' || typeof this.value === 'number') ? this.value : '');
        },

        currentValue: function() {
            return this.value || this.label || '';
        },

        isSelected: function(){
            if(!this.parent().multiple){
                return this.parent().currentValue === this.value;
            }else{

            }
        },

        isHover: function(){
            return this.parent().hoverIndex === this.index;
        }
    },
    methods: {

        optionClick: function(){
            if(!this.disabled){
                this.dispatch('TSelect','optionClick',this);
            }
        },

        parent: function(){
            var _parent = this.$parent;
            while(_parent.$options.componentName !== 'TSelect'){
                _parent = _parent.$parent;
            }
            return _parent;
        },

        hoverItem: function() {
            if (!this.disabled) {
                this.parent().hoverIndex = this.parent().options.indexOf(this);
            }
        },

        resetIndex: function() {
            this.$nextTick(function(){
                this.index = this.parent.options.indexOf(this);
            }.bind(this));
        }

    },
    created: function(){
        this.parent().options.push(this);
        this.index = this.parent().options.indexOf(this);
    },
    beforeDestroy: function() {
        this.dispatch('TSelect', 'onOptionDestroy', this);
    }
});