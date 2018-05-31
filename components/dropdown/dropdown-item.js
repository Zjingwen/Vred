
let emitter = require('../mixins/emitter.js');

module.exports = {

  componentName: 'TDropdownItem',

  mixins: [emitter],

  props: {
    command: String,
    disabled: Boolean,
    divided: Boolean,
  },

  methods: {
    handleClick: function() {
      this.dispatch('TDropdown', 'menu-item-click', [this.command, this]);
    },
  },

  render: function(h) {
    return h('li',
      {
        class: {'t-dropdown_item': true},
        on: {
          click: this.handleClick,
        },
      },
      [this.$slots.default]);
  },
};
