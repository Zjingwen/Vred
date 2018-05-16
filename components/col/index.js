import './index.css';
import template from './index.html';

module.exports = Vue.extend({
    name: 'v-col',
    template: template,
    props:{
        span: {
            type: Number,
            default: 24
        }
    },
    computed:{
        col:function(){
            return 'v-col-'+this.span;
        }
    }
    
})