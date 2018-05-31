<template>
    <div :class="classs" :style="style"><slot></slot></div>
</template>
<script>
import {oneOf} from '../util/assist';
const prefixCls = 'v-footer';

export default{
  name: prefixCls,
  props: {
    type: {
      type: String,
      default: '',
      validator: function(val) {
        return oneOf(val, ['', 'fixed']);
      },
    },
    width: {
      type: Number,
      default: 100,
    },
    index: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    style: function() {
      let style = {
        width: this.width + '%',
        overflow: 'hidden',
      };

      if (this.type) {
        style.position = this.type;
        style.bottom = 0;
        style.zIndex = this.index;
      }

      return style;
    },
    classs: function() {
      return [
        `${prefixCls}`,
      ];
    },
  },
};
</script>
