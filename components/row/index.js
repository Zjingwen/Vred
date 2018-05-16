import './index.css';
import template from './index.html'

module.exports = Vue.extend({
    name:'v-row',
    template: template,
    props:{
        gutter: Number,
        type: String,
        justify: String,
        align: String,
    },
})