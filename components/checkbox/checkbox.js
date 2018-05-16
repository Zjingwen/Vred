/**
 * demo:
 * <t-checkbox v-model="checkbox1">checkbox1</t-checkbox>
 * <t-checkbox v-model="checkbox1" checked>checkbox1</t-checkbox>
 * <t-checkbox v-model="checkbox1" disabled>checkbox1</t-checkbox>
 * <t-checkbox v-model="checkbox1" @change='func'>checkbox1</t-checkbox>
 */
require("./checkbox.css");
var template = require("./checkbox.html");

module.exports = Vue.extend({

    componentName: 'TCheckbox',

    template: template,

    props: {
        name: String,
        label: '', // 只有在checkbox-group或者绑定对象类型为array时有效
        value: '',
        disabled: Boolean,
        checked: Boolean,
        trueLabel: [String, Number],
        falseLabel: [String, Number]
    },

    data: function(){
        return {
            localValue: false
        }
    },

    computed: {
        model: {
            get: function(){
                return this.value !== undefined ? this.value : this.localValue;
            },
            set: function(val){

                if(this.value !== undefined){
                    // v-model语法糖 v-bind:value="something" v-on:input="something = arguments[0]"
                    this.$emit("input", val);
                }else{
                    this.localValue = val;
                }
            }
        },

        isChecked: function(){

            if ({}.toString.call(this.model) === '[object Boolean]') {
                return this.model;

            }else if (this.model !== null && this.model !== undefined) {
                return this.model === this.trueLabel;
            }
        }
    },

    methods: {

        doChecked: function(){
            this.model =  this.trueLabel || true;
        }
    },

    created: function() {
        this.checked && this.doChecked();
    }

});