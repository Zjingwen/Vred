<template>
    <div :class="classs" :style="styles">
        <slot></slot>
    </div>
</template>

<style src='./row.css' lang='css' scoped></style>

<script>
import {findComponentDownward, findBrothersComponents, oneOf} from '../util/assist';
let prefixCls = 'v-row';

export default {
  name: prefixCls,
  props: {
    gutter: {
      type: Number,
      default: 0,
    },
    type: {
      type: String,
      default: '',
      validator: function(val) {
        return oneOf(val, ['', 'flex']);
      },
    },
    justify: {
      type: String,
      default: '',
      validator: function(val) {
        return oneOf(val, ['', 'start', 'end', 'center', 'space-around', 'space-between']);
      },
    },
    align: {
      type: String,
      default: '',
      validator: function(val) {
        return oneOf(val, ['', 'top', 'middle', 'bottom']);
      },
    },
  },
  computed: {
    classs: function() {
      let classs = {
        [`${prefixCls}`]: !this.type,
        [`${prefixCls}-`+this.type]: !!this.type,
        [`${prefixCls}-flex-`+this.justify]: !!this.justify,
        [`${prefixCls}-flex-`+this.align]: !!this.align,
      };
      return classs;
    },
    styles: function() {
      let style = {};
      if (this.gutter !== 0) {
        style = {
          marginLeft: this.gutter / -2 +'px',
          marginRight: this.gutter / -2 +'px',
        };
      }

      return style;
    },
  },
  methods: {
    updateGutter: function(val) {
      const Col = findComponentDownward(this, 'v-col');
      const Cols = findBrothersComponents(Col, 'v-col', false);
      if (Cols.length) {
        Cols.forEach((child) => {
          if (val !== 0) {
            child.gutter = val;
          }
        });
      }
    },
  },
  watch: {
    gutter(val) {
      this.updateGutter(val);
    },
  },
};
</script>
