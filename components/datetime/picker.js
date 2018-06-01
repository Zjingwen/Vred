
let template = require('./picker.html');

let vuePopper = require('../util/vue-popper.js');
let Clickoutside = require('../directives/clickoutside.js');

module.exports = {

  mixins: [vuePopper],

  template: template,

  directives: {
    clickoutside: Clickoutside,
  },

  props: {
    size: String,
    format: String,
    readonly: Boolean,
    placeholder: String,
    disabled: Boolean,
    value: {},
    autoClose: {
      type: Boolean,
      default: true,
    },
  },

  data: function() {
    return {
      pickerVisible: false,
      currentValue: '',
    };
  },

  watch: {
    pickerVisible: function(val) {
      // if (this.readonly || this.disabled) return;
      if (this.disabled) return;
      val ? this.showPicker() : this.hidePicker();
    },
    currentValue: function(val) {
      // if (val) return;
      this.$emit('input', val);
    },
    value: {
      immediate: true,
      handler: function(val) {
        // this.currentValue = util.isDate(val) ? new Date(val) : val;
        this.currentValue = val;
      },
    },
    displayValue: function(val) {
      this.$emit('change', val);
    },
  },

  computed: {
    displayValue: {
      get: function() {
        return this.currentValue;
      },
      set: function(value) {
        if (value.indexOf(':') > 0) {
          this.picker.value = value.split(':');
        } else {
          this.picker.value = value;
        }
      },
    },
    refInput: function() {
      if (this.$el) return this.$el.querySelector('input');
      return {};
    },
  },

  methods: {

    hidePicker: function() {
      if (this.picker) {
        this.picker.visible = false;
        this.destroyPopper();
      }
    },

    showPicker: function() {
      if (!this.picker) {
        // this.panel.defaultValue = this.currentValue;
        this.panel.autoClose = this.autoClose;
        this.picker = new Vue(this.panel).$mount(document.createElement('div'));

        this.popperEl = this.picker.$el;
        this.referenceEl = this.$refs.reference.$el;

        this.$el.appendChild(this.picker.$el);
        this.pickerVisible = this.picker.visible = true;

        this.picker.$on('dodestroy', this.handleClose);
        this.picker.$on('pick', function(date) {
          this.$emit('input', date);
        }.bind(this));
      } else {
        this.pickerVisible = this.picker.visible = true;
      }

      this.updatePopper();

      this.picker.value = this.currentValue;
    },


    handleKeydown: function(event) {
      let keyCode = event.keyCode;
      // tab
      if (keyCode === 9) {
        this.pickerVisible = false;
      }
    },

    handleFocus: function() {
      this.pickerVisible = true;
      this.$emit('focus', this);
    },

    handleBlur: function() {
      this.$emit('blur', this);
    },

    handleClose: function() {
      this.pickerVisible = false;
      this.refInput.blur();
    },
  },
};
