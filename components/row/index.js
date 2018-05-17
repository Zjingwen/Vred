import './index.css';
import template from './index.html'
import {findComponentDownward,findBrothersComponents} from '../util/assist';

module.exports = Vue.extend({
    name:'v-row',
    template: template,
    props:{
        gutter: {
            type: Number,
            default: 0
        },
        type: String,
        justify: String,
        align: String,
    },
    computed:{
        styles:function(){
            let style = {};
            if(this.gutter !== 0){
                style = {
                    marginLeft: this.gutter / -2 +'px',
                    marginRight: this.gutter / -2 +'px',
                }
            }

            return style;
        }
    },
    methods: {
        updateGutter: function(val){
            const Col = findComponentDownward(this, 'v-col');
            const Cols = findBrothersComponents(Col, 'v-col', false);
            if (Cols.length) {
                Cols.forEach((child) => {
                    if (val !== 0) {
                        child.gutter = val;
                    }
                });
            }
        }
    },
    watch: {
        gutter (val) {
            this.updateGutter(val);
        }
    }
})