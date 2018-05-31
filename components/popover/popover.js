/**
 * demo:
 *      <t-popover placement="bottom-start" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
 *      <t-button slot="reference" class-type="text" size="tiny">哈哈哈</t-button>
 *      </t-popover>
 */
require('./popover.css');
let template = require('./popover.html');
let vuePopper = require('../util/vue-popper.js');
let $ = require('../util/dom.js');

module.exports = Vue.extend({

  componentName: 'TPopover',

  template: template,

  mixins: [vuePopper],

  props: {
    delay: {
      type: Number,
      default: 0,
    },
    trigger: {
      type: String,
      default: 'click',
      validator: function(value) {
        return ['click', 'focus', 'hover', 'manual'].indexOf(value) > -1;
      },
    },
    title: String,
    content: String,
    popperClass: String,
    width: {},
    reference: {},
    visibleArrow: {
      default: false,
    },
  },

  watch: {
    showPopper: function(newVal, oldVal) {
      newVal ? this.$emit('show') : this.$emit('hide');
    },
  },

  mounted: function() {
    let reference = this.reference || this.$refs.reference;
    let popper = this.popper || this.$refs.popper;

    if (!reference && this.$slots.reference && this.$slots.reference[0]) {
      reference = this.referenceEl = this.$slots.reference[0].elm;
    }
    if (this.trigger === 'click') {
      $.on(reference, 'click', function() {
        this.showPopper = !this.showPopper;
      }.bind(this));

      //
      $.on(document, 'click', function(e) {
        if (!this.$el || !reference ||
                    this.$el.contains(e.target) ||
                    reference.contains(e.target) ||
                    !popper || popper.contains(e.target) || e.target.nodeName == 'TD'
        ) return;
        this.showPopper = false;
      }.bind(this));
    } else if (this.trigger === 'hover') {
      $.on(reference, 'mouseenter', this.handleMouseEnter);
      $.on(popper, 'mouseenter', this.handleMouseEnter);
      $.on(reference, 'mouseleave', this.handleMouseLeave);
      $.on(popper, 'mouseleave', this.handleMouseLeave);
    } else if (this.trigger === 'focus') {
      let found = false;
      if ([].slice.call(reference.children).length) {
        let children = reference.childNodes;
        let len = children.length;
        for (let i = 0; i < len; i++) {
          if (children[i].nodeName === 'INPUT' ||
                        children[i].nodeName === 'TEXTAREA') {
            on(children[i], 'focus', function() {
              this.showPopper = true;
            }.bind(this));
            on(children[i], 'blur', function() {
              this.showPopper = false;
            }.bind(this));
            found = true;
            break;
          }
        }
      }
      if (found) return;
      if (reference.nodeName === 'INPUT' ||
                reference.nodeName === 'TEXTAREA') {
        $.on(reference, 'focus', function() {
          this.showPopper = true;
        }.bind(this));
        $.on(reference, 'blur', function() {
          this.showPopper = false;
        }.bind(this));
      } else {
        $.on(reference, 'mousedown', function() {
          this.showPopper = true;
        }.bind(this));
        $.on(reference, 'mouseup', function() {
          this.showPopper = false;
        }.bind(this));
      }
    }
  },

  methods: {

    handleMouseEnter: function() {
      this.timeout = setTimeout(function() {
        this.showPopper = true;
      }.bind(this), this.delay);
    },

    handleMouseLeave: function() {
      clearTimeout(this.timeout);
      this.showPopper = false;
      // this.destroyPopper();
    },

  },
  destroyed: function() {
    let reference = this.reference;
    $.off(reference, 'mouseup');
    $.off(reference, 'mousedown');
    $.off(reference, 'focus');
    $.off(reference, 'blur');
    $.off(reference, 'mouseleave');
    $.off(reference, 'mouseenter');
  },
});
