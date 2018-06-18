<template>
  <div :class="classs">
    <input
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :value="value"
        @input="updateValue($event.target.value)"
    >
  </div>
</template>
<style src='./input.less' lang="less"></style>
<script>
import {oneOf} from '@util/assist';
const prefixCls = 't-input';

export default {
  name: prefixCls,
  data: function() {
    return {
      currentValue: this.value,
    };
  },
  props: {
    size: {
      type: String,
      default: 'default',
      validator: function(val) {
        return oneOf(val, ['default', 'tiny', 'large']);
      },
    },
    placeholder: String,
    disabled: Boolean,
    type: {
      type: String,
      default: 'text',
    },
    value: [String, Number],
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
  watch: {
    currentValue: function(newV) {
      this.$emit('change', newV);
    },
  },
  methods: {
    updateValue: function(value) {
      this.currentValue = value.trim();
    },
  },
};
</script>
