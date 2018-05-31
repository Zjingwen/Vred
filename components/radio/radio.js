/**
 * <t-radio :disabled="false" v-model="radio" label="1">哈哈</t-radio>
 * <t-radio :disabled="false" v-model="radio" label="2">hello</t-radio>
 */
require('./radio.css');
let template = require('./radio.html');

module.exports = Vue.extend({

  componentName: 'TRadio',

  template: template,

  props: {
    label: '',
    value: '',
    name: String,
    disabled: Boolean,
  },

  data: function() {
    return {
      localValue: false,
    };
  },

  computed: {
    model: {
      get: function() {
        return this.value !== undefined ? this.value : this.localValue;
      },
      set: function(val) {
        if (this.value !== undefined) {
          // v-model语法糖 v-bind:value="something" v-on:input="something = arguments[0]"
          this.$emit('input', val);
        } else {
          this.localValue = val;
        }
      },
    },
  },
});
