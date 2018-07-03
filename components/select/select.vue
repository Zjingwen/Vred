<template>
  <div class="t-select"
    :class="{open: visible}"
    v-clickoutside="handleClose"
  >
    <t-select-options v-show="visible">
      <t-input
        slot='input'
        ref="referenceInput"
        v-model="selectedLabel"
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
      this.$emit('input', value);
      this.visible = false;
    },
    setSelectedOption: function() {
      let el = {};
      const option = findComponentsDownward(this, 't-option').some((element)=>{
        if (element.value === this.value) {
          el = element;
          return true;
        }
        return false;
      });

      if (option) {
        this.selectedLabel = el.label;
        this.$emit('input', el.value);
      }

      if (this.value === '') {
        this.selectedLabel = '';
        this.$emit('input', '');
      }
    },
  },
};
</script>
