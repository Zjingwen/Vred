
let vuePopper = require('../util/vue-popper.js');

module.exports = {

  componentName: 'TDropdownMenu',

  mixins: [vuePopper],

  created: function() {
    this.$on('visible', function(val) {
      this.showPopper = val;
    }.bind(this));
  },

  mounted: function() {
    this.$parent.popperElm = this.popperEl = this.$el;
    this.referenceEl = this.$parent.$el;
  },

  watch: {
    '$parent.align': {
      immediate: true,
      handler: function(val) {
        this.currentPlacement = 'bottom-' + val;
      },
    },
  },

  render: function(h) {
    return h('ul', {
      class: {
        't-dropdown_menu': true,
      },
      directives: [{
        name: 'show',
        value: this.showPopper,
      }],
    }, [this.$slots.default]);
  },
};
