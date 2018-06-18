<template>
  <div :class="classs">
    <input
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="value"
        @input="handleInput($event.target.value)"
    >
  </div>
</template>
<style src='./input.less' lang="less"></style>
<script>
import {oneOf} from '@util/assist';
const prefixCls = 't-input';

export default {
  name: prefixCls,
  props: {
    size: {
      type: String,
      default: 'default',
      validator: function(val) {
        return oneOf(val, ['default', 'tiny', 'large']);
      },
    },
    placeholder: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String | Number,
      default: '',
    },
  },
  data: function() {
    return {
      currentValue: this.value,
    };
  },
  computed: {
    classs: function() {
      let classs = [
        `${prefixCls}`,
        `${prefixCls}-size-${this.size}`,
      ];

      if (this.disabled) {
        classs.push(`${prefixCls}-disabled`);
      };

      return classs;
    },
  },
  methods: {
    handleInput: function(value) {
      this.currentValue = value.trim();
      this.$emit('input', value);
    },
  },
};
</script>
