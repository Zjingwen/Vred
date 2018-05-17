import './index.css';
import template from './index.html';
import { findComponentUpward } from '../util/assist';
let prefixCls = 'v-col';

module.exports = Vue.extend({
    name: 'v-col',
    template: template,
    props:{
        span: {
            type: Number,
            default: 24
        }
    },
    data:function(){
        return {
            gutter: 0
        }
    },
    computed:{
        classs:function(){
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-${this.span}`]: this.span
                }
            ];
        },
        styles:function(){
            let style = {};
            if(this.gutter !==0){
                style = {
                    paddingLeft: this.gutter / 2 +'px',
                    paddingRight: this.gutter / 2 +'px',
                }
            }

            return style;
        }
    },
    methods:{
        updateGutter: function(){
            const Row = findComponentUpward(this, 'v-row');

            if (Row) {
                Row.updateGutter(Row.gutter);
            }
        }
    },
    mounted:function(){
        this.updateGutter();
    }
    
})