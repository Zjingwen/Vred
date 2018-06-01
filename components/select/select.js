/**
 *
 */

require('./select.css');
let html = require('./select.html');
let SelectOptions = require('./select-options.js');
let emitter = require('../mixins/emitter.js');
let Clickoutside = require('../directives/clickoutside.js');
let debounce = require('../util/debounce.js');

module.exports = Vue.extend({

  componentName: 'TSelect',

  template: html,

  mixins: [emitter],

  props: {
    value: {}, // {}为支持多选,暂不支持
    disabled: Boolean,
    multiple: Boolean, // 多选
    placeholder: {
      type: String,
      default: '请选择',
    },
    size: {
      type: String,
      default: 'small',
    },
    filterable: Boolean,
    remote: Boolean,
    remoteMethod: Function,
  },

  data: function() {
    return {
      currentValue: '',
      options: [],
      selected: this.multiple ? [] : null, // 存储多选项
      visible: false,
      selectedLabel: '',
      query: '',
      hoverIndex: -1,
      inputWidth: 0,
      imageIcon: true,
    };
  },

  watch: {

    visible: function(newVal) {
      if (!newVal) {
        this.$refs.referenceInput.$el.querySelector('input').blur();

        this.broadcast('TSelectOptions', 'destroyPopper');
        // TODO @jingwen 当option消失时，触发this.query = '';导致model获取不到值
        // this.query = '';
        if (!this.multiple) {
          if (this.selected) {
            this.selectedLabel = this.selected.label;
          }
          // else{
          // }
        }
      } else {
        this.resetInputWidth();
        this.broadcast('TSelectOptions', 'updatePopper');

        if (this.filterable) {
          if (!this.multiple) {
            this.broadcast('TInput', 'inputSelect');
          }
        }
      }
    },

    value: function(newVal) {
      this.currentValue = newVal;
      this.setSelectedOption();
      this.$emit('change', newVal);
    },

    query: function(newVal) {
      let _op = this.getOptionObj(newVal);
      if (!_op) {
        this.selected = null;
        this.currentValue = '';
        this.$emit('input', '');
      }

      this.hoverIndex = -1;
      if (this.remote && typeof this.remoteMethod === 'function') {
        this.remoteMethod(newVal);
        this.broadcast('TOption', 'resetIndex');
      }
    },
  },

  methods: {
    handleIconClick: function(event) {
      this.toggleMenu();
    },

    handleMouseDown: function(event) {
      if (event.target.tagName !== 'INPUT') return;

      if (this.visible) {
        this.handleClose();
        event.preventDefault();
      }
    },

    toggleMenu: function() {
      if (!this.disabled) {
        this.visible = !this.visible;
      }
    },

    handleClose: function() {
      this.visible = false;
    },

    handleOptionClick: function(option) {
      if (!this.multiple) {
        this.$emit('input', option.value); // 触发改变 v-model 的值
        this.visible = false;
      }
    },

    getOptionObj: function(value) {
      let obj = this.options.filter(function(option) {
        return option.value === value;
      })[0];
      return obj;
    },

    setSelectedOption: function() {
      if (!this.multiple) {
        // TODO @jingwen 当option数值改变时触发
        let option = this.getOptionObj(this.value);
        if (option) {
          this.selected = option;
          this.selectedLabel = option.label;
          this.$emit('input', option.value);
        }
        if (this.value === '') {
          this.selected = '';
          this.selectedLabel = '';
          this.$emit('input', '');
        }
      }
    },

    navigateOptions: function(direction) {
      if (direction === 'next') {
        this.hoverIndex++;
        if (this.hoverIndex === this.options.length) {
          this.hoverIndex = 0;
        }
      }

      if (direction === 'prev') {
        this.hoverIndex--;
        if (this.hoverIndex < 0) {
          this.hoverIndex = this.options.length - 1;
        }
      }
    },

    selectOption: function() {
      if (this.options[this.hoverIndex]) {
        this.handleOptionClick(this.options[this.hoverIndex]);
      }
    },

    resetInputWidth: function() {
      this.inputWidth = this.$refs.referenceInput.$el.getBoundingClientRect().width;
    },

    onInputChange: function() {
      if (this.filterable) {
        this.query = this.selectedLabel;
      }
    },

    onOptionDestroy: function(option) {
      let index = this.options.indexOf(option);
      if (index > -1) {
        this.options.splice(index, 1);
      }
      this.broadcast('TOption', 'resetIndex');
    },
  },

  created: function() {
    if (this.multiple && !Array.isArray(this.value)) {
      this.$emit('input', []);
    }
    if (!this.multiple && (!this.value || Array.isArray(this.value))) {
      this.$emit('input', '');
    }

    this.debouncedOnInputChange = debounce(150, true, function() {
      this.onInputChange();
    }.bind(this));

    // 监听 option 点击事件
    this.$on('optionClick', this.handleOptionClick);
    this.$on('onOptionDestroy', this.onOptionDestroy);
  },

  mounted: function() {
    this.setSelectedOption();

    this.$nextTick(function() {
      if (this.$refs.referenceInput && this.$refs.referenceInput.$el) {
        this.inputWidth = this.$refs.referenceInput.$el.getBoundingClientRect().width;
      }
    });
  },

  components: {
    't-select-options': SelectOptions,
  },

  directives: {
    clickoutside: Clickoutside,
  },
});
