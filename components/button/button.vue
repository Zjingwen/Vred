<template>
    <button
        class="t-btn"
        :disabled="disabled"
        :type="htmlType"
        :class="classs"
        :style="style"
        @click="handleClick"
    ><span><slot></slot></span></button>
</template>
<style src='./button.css' lang="css"></style>
<script>
import {oneOf} from '../util/assist';

const prefixCls = 't-btn';

export default {
  name: prefixCls,
  props: {
    type: {
      type: String,
      default: 'default',
      validator: function(val) {
        return oneOf(val, ['default', 'text', 'warning', 'error']);
      },
    },
    width: {
      type: Number,
      default: 100,
    },
    height: {
      type: Number,
      default: 50,
    },
    size: {
      type: String,
      default: 'default',
      validator: function(val) {
        return oneOf(val, ['default', 'tiny', 'large', 'auto']);
      },
    },
    long: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    htmlType: {
      type: String,
      default: 'button',
      validator: function(val) {
        return oneOf(val, ['button', 'submit', 'reset']);
      },
    },
  },
  computed: {
    classs: function() {
      let classs = [];

      classs = [
        [`${prefixCls}-type-`+this.type],
        this.size !== 'auto' ? [`${prefixCls}-size-`+this.size] : '',
        this.long ? [`${prefixCls}-size-long`] : '',
      ];

      return classs;
    },
    style: function() {
      let style = {
        width: this.size === 'auto' ? this.width+'px' : '',
        height: this.size === 'auto' ? this.height+'px' : '',
        lineHeight: this.size === 'auto' ? this.height+'px' : '',
      };

      return style;
    },
  },
  methods: {
    handleClick: function(event) {
      this.$emit('click', event);
    },
  },
};
</script>
