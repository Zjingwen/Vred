
let vuePopper = require('../util/vue-popper.js');

module.exports = Vue.extend({

  componentName: 'TSelectOptions',

  template: '<div class="t-select_options" :style="{minWidth: width }"><slot></slot></div>',

  mixins: [vuePopper],

  props: {
    placement: {
      default: 'bottom',
    },
    boundariesPadding: {
      default: 0,
    },
  },

  data: function() {
    return {
      width: '',
    };
  },

  watch: {
    '$parent.inputWidth': function() {
      this.width = this.$parent.$el.getBoundingClientRect().width + 'px';
    },
  },

  mounted: function() {
    this.popperEl = this.$el;
    this.referenceEl = this.$parent.$refs.referenceInput.$el;

    this.$on('updatePopper', this.updatePopper);
    this.$on('destroyPopper', this.destroyPopper);
  },
});
