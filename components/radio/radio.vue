<template>
  <label class="t-radio">
    <span class="t-radio-box" :class="{'isDisabled': disabled}">
        <input
          type="radio"
          class="t-radio-ori"
          :disabled='disabled'
          :checked="currentValue"
          @change='change'
        >
        <span class="t-radio-input"></span>
    </span>
    <span class="t-radio-label">
        <slot/>
    </span>
  </label>
</template>
<style src='./radio.less' lang="less"></style>
<script>
import {findComponentUpward} from '@util/assist';
const prefixCls = 't-radio';

export default {
  name: prefixCls,
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data: function() {
    return {
      currentValue: this.value,
    };
  },
  methods: {
    change: function(event) {
      if (this.disabled) {
        return false;
      }
      if (findComponentUpward(this, 't-radio-group')) {
        findComponentUpward(this, 't-radio-group').updateModel(this.label);
        return false;
      }

      const value = event.target.checked;
      this.currentValue = value;
      this.$emit('input', value);
    },
  },
};
</script>
