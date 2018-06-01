<template>
    <div :class="classs" :style="styles">
        <slot></slot>
    </div>
</template>

<style src='./col.css' lang='css'></style>

<script>
import {findComponentUpward} from '../util/assist';
let prefixCls = 'v-col';

export default {
  name: prefixCls,
  props: {
    span: {
      type: Number,
      default: 24,
    },
    offset: {
      type: Number,
      default: 0,
    },
  },
  data: function() {
    return {
      gutter: 0,
    };
  },
  computed: {
    classs: function() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-${this.span}`]: this.span,
          [`${prefixCls}-offset-${this.offset}`]: this.offset,
        },
      ];
    },
    styles: function() {
      let style = {};
      if (this.gutter !==0) {
        style = {
          paddingLeft: this.gutter / 2 +'px',
          paddingRight: this.gutter / 2 +'px',
        };
      }

      return style;
    },
  },
  methods: {
    updateGutter: function() {
      const Row = findComponentUpward(this, 'v-row');

      if (Row) {
        Row.updateGutter(Row.gutter);
      }
    },
  },
  mounted: function() {
    this.updateGutter();
  },
};
</script>
