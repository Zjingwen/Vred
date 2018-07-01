<template>
  <div class="t-select"
    :class="{open: visible}"
    v-clickoutside="handleClose"
  >
    <t-input
      ref="referenceInput"
      v-model="selectedLabel"
      :size="size"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @on-focus="toggleMenu"
    />
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
import Clickoutside from '@directives/clickoutside';
import {findComponentDownward} from '@util/assist';
// import debounce from '@util/debounce';
const prefixCls = 't-select';

export default {
  name: prefixCls,
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
  },
  data: function() {
    return {
      currentValue: '',
      options: [],
      visible: false,
      selectedLabel: '',
      inputWidth: 0,
    };
  },
  watch: {
    visible: function(newVal) {
      if (!newVal) {
        this.$refs.referenceInput.$el.querySelector('input').blur();
        findComponentDownward(this, 't-select-options').destroyPopper();
      } else {
        this.resetInputWidth();
        findComponentDownward(this, 't-select-options').updatePopper();
      }
    },
    value: function(newVal) {
      this.currentValue = newVal;
      this.setSelectedOption();
      this.$emit('change', newVal);
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

    handleOptionClick: function(value) {
      this.$emit('input', value); // 触发改变 v-model 的值
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
        this.selectedLabel = option.label;
        this.$emit('input', option.value);
      }
      if (this.value === '') {
        this.selectedLabel = '';
        this.$emit('input', '');
      }
    },

    resetInputWidth: function() {
      this.inputWidth = this.$refs.referenceInput.$el.getBoundingClientRect().width;
    },

    onOptionDestroy: function(option) {
      let index = this.options.indexOf(option);
      if (index > -1) {
        this.options.splice(index, 1);
      }
      findComponentDownward(this, 't-option').resetIndex();
    },
  },
};
</script>
