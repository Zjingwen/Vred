
require('./dropdown.css');
let emitter = require('../mixins/emitter.js');
let Clickoutside = require('../directives/clickoutside.js');

module.exports = {

  componentName: 'TDropdown',

  mixins: [emitter],

  directives: {
    clickoutside: Clickoutside,
  },

  props: {
    trigger: {
      type: String,
      default: 'hover',
    },
    autoHide: {
      type: Boolean,
      default: true,
    },
    align: {
      type: String,
      default: 'start',
    },
  },

  mounted: function() {
    this.$on('menu-item-click', this.handleMenuItemClick);
    this.initEvent();
  },

  data: function() {
    return {
      visible: false,
      timeout: null,
    };
  },

  watch: {
    visible: function(val) {
      this.broadcast('TDropdownMenu', 'visible', val);
    },
  },

  methods: {
    show: function() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        this.visible = true;
      }.bind(this), 150);
    },
    hide: function() {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(function() {
        this.visible = false;
      }.bind(this), 100);
    },
    handleClick: function() {
      this.visible = !this.visible;
    },

    initEvent: function() {
      let triggerElm = this.$slots.default[0].elm;

      if (this.trigger === 'hover') {
        triggerElm.addEventListener('mouseenter', this.show);
        triggerElm.addEventListener('mouseleave', this.hide);

        let dropdownElm = this.$slots.dropdown[0].elm;
        dropdownElm.addEventListener('mouseenter', this.show);
        dropdownElm.addEventListener('mouseleave', this.hide);
      } else if (this.trigger === 'click') {
        triggerElm.addEventListener('click', this.handleClick);
      }
    },

    handleMenuItemClick: function(command, instance) {
      if (this.autoHide) {
        this.visible = false;
      }
      this.$emit('command', command, instance);
    },
  },

  render: function(h) {
    let triggerElm = this.$slots.default;

    return h('div', {
      'class': {
        't-dropdown': true,
      },
      'directives': [{
        name: 'clickoutside',
        value: this.hide,
      }],
    }, [triggerElm, this.$slots.dropdown]);
  },
};
