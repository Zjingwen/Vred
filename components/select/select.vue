<template>
  <div :class="classs"
    v-clickoutside="handleClose"
  >
    <t-select-options v-show="visible">
      <t-input
        slot='input'
        v-model="currentLabel"
        :size="size"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        @on-focus="toggleMenu"
      />
      <ul slot='options'>
        <slot/>
      </ul>
    </t-select-options>
  </div>
</template>
<style src='./select.less' lang="less"></style>
<script>
import SelectOptions from './select-options';
import Clickoutside from '@directives/clickoutside';
import {findComponentsDownward} from '@util/assist';
// import debounce from '@util/debounce';
const prefixCls = 't-select';

export default {
  name: prefixCls,
  mounted: function() {
    this.setSelectedOption();
  },
  components: {
    't-select-options': SelectOptions,
  },
  directives: {
    clickoutside: Clickoutside,
  },
  computed: {
    classs: function() {
      let classs = [
        `${prefixCls}`,
        this.visible ? 'open' : '',
      ];

      return classs;
    },
  },
  props: {
    value: {
      type: String,
      default: '',
    },
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
      currentValue: this.value,
      currentLabel: '',
      visible: false,
    };
  },
  watch: {
    value: function(val) {
      this.currentValue = val;
      this.setSelectedOption();
      this.$emit('on-change', val);
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
    handleOptionClick: function(val) {
      this.currentValue = val;
      this.visible = false;
      this.$emit('input', val);
    },
    setSelectedOption: function() {
      let el = {};
      const childrs = findComponentsDownward(this, 't-option');

      let option = childrs.some((element)=>{
        el = element;
        if (element.value === this.currentValue) {
          return true;
        }
        return false;
      });

      childrs.forEach((element)=>{
        if (element.value === this.currentValue) {
          element.isSelected = true;
        } else {
          element.isSelected = false;
        }
      });

      if (option) {
        this.currentLabel = el.label;
        this.$emit('input', el.value);
      }

      if (this.value === '') {
        this.currentLabel = '';
        this.$emit('input', '');
      }
    },
  },
};
</script>
