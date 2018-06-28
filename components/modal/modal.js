/**
 * 可复用组件 modal
 *
 * 使用
 */
require('./modal.css');
let template = require('./modal.html');

module.exports = Vue.extend({

  componentName: 'TModal',

  template: template,

  props:{
    value: Boolean,
    title: String,
    customClass: String,
    top: String,
    width: String,
    height: String,
    innerScroll: {
      type: Boolean,
      default: false,
    },
    lockScroll: {
      type: Boolean,
      default: true,
    },
    modal: {
      type: Boolean,
      default: true,
    },
    modalClose: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'small',
    }
  },

  data: function() {
    return {
      visible: false,
    };
  },

  mounted: function() {
    // document.body.appendChild(this.$el);
  },

  watch: {
    value: function(val) {
      this.visible = val;
    },
    visible: function(val) {
      this.$emit('input', val);

      if (val) {
        this.$emit('open');

        this.lockScroll?document.body.style.overflow = 'hidden':'';

        this.$nextTick(function() {
          this.$refs.modal.scrollTop = 0;
        }.bind(this));
      } else {
        this.$emit('close');
        this.lockScroll?document.body.style.overflow = '':'';
      }
    },
  },

  computed: {
    'sizeClass': function() {
      return 't-' + this.size;
    },
    'modalClass': function() {
      return this.modal?'t-mask':'';
    },
    'scrollClass': function() {
      return this.innerScroll?'t-scroll':'';
    },
    'style': function() {
      let style = {};
      if (this.width) {
        style['width'] = this.width;
      }
      if (this.height) {
        style['height'] = this.height;
      }
      if (this.top) {
        style['top'] = this.top;
      }
      return style;
    },
  },

  methods: {
    // ok: function(){
    //    this.visible = false;
    // },
    close: function() {
      this.visible = false;
    },
    modalClickClose: function() {
      if (this.modalClose) {
        this.visible = false;
      }
    },
  },
});
