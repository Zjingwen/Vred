<template>
  <div class="t-select" :class="{open: visible}" v-clickoutside="handleClose">
    <t-input
      ref="referenceInput"
      v-model="selectedLabel"
      :size="size"
      :placeholder="placeholder"
      :disabled="disabled"
      @on-focus="toggleMenu"
      :readonly="readonly"
    >
    </t-input>
    <t-select-options v-show="visible">
      <ul>
        <slot/>
      </ul>
    </t-select-options>
  </div>
</template>
<style src='./select.less' lang="less"></style>
<script>
import SelectOptions from './select-options';
import emitter from '@mixins/emitter';
import Clickoutside from '@directives/clickoutside';
// import debounce from '@util/debounce';

export default {
  componentName: 'TSelect',
  mixins: [emitter],
  props: {
    value: {},
    disabled: Boolean,
    placeholder: {
      type: String,
      default: '请选择',
    },
    readonly: {
      type: Boolean,
      default: true,
    },
    size: {
      type: String,
      default: 'tiny',
    },
    filterable: Boolean,
    remote: Boolean,
    remoteMethod: Function,
  },
  data: function() {
    return {
      currentValue: '',
      options: [],
      selected: null, // 存储多选项
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

        if (this.selected) {
          this.selectedLabel = this.selected.label;
        }
      } else {
        this.resetInputWidth();
        this.broadcast('TSelectOptions', 'updatePopper');

        if (this.filterable) {
          this.broadcast('TInput', 'inputSelect');
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
    toggleMenu: function() {
      if (!this.disabled) {
        this.visible = !this.visible;
      }
    },

    handleClose: function() {
      this.visible = false;
    },

    handleOptionClick: function(option) {
      this.$emit('input', option.value); // 触发改变 v-model 的值
      this.visible = false;
    },

    getOptionObj: function(value) {
      let obj = this.options.filter(function(option) {
        return option.value === value;
      })[0];
      return obj;
    },

    setSelectedOption: function() {
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
    if (!Array.isArray(this.value)) {
      this.$emit('input', []);
    }
    if (!this.value || Array.isArray(this.value)) {
      this.$emit('input', '');
    }
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
};
</script>
