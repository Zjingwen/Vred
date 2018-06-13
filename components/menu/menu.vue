<template>
    <ul :class='classs' :style='style'>
        <slot></slot>
    </ul>
</template>
<style src='./index.css' lang='css'></style>
<script>
import {oneOf, findComponentsDownward} from '@util/assist';

const profixCls = 'v-menu';

export default{
  name: profixCls,
  props: {
    activeName: {
      type: [String, Number],
      default: '',
    },
    mode: {
      type: String,
      default: 'horizontal',
      validator: function(val) {
        return oneOf(val, ['horizontal', 'vertical']);// horizontal（水平） 和 vertical（垂直）
      },
    },
    placement: {
      type: String,
      default: 'left',
      validator: function(val) {
        return oneOf(val, ['left', 'center', 'right']);// left（左） center（中）right（右）
      },
    },
    width: {
      type: Number,
      default: 0,
    },
    height: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    classs: function() {
      let classs = [
        `${profixCls}`,
        `${profixCls}-${this.mode}`,
      ];

      return classs;
    },
    style: function() {
      let style = {};

      if (this.width !== 0 && this.mode === 'vertical') {
        style.width = this.width + 'px';
      }

      if (this.height !== 0 && this.mode === 'horizontal') {
        style.height = this.height + 'px';
        style.lineHeight = this.lineHeight + 'px';
      }

      if (this.placement === 'center') {
        style.textAlign = this.placement;
      }

      return style;
    },
  },
  methods: {
    $onClickHandle: function(val) {
      this.$activeHandle(val);
      this.$emit('on:select', val);
    },
    $activeHandle: function(name) {
      findComponentsDownward(this, 'v-menu-item-sub').forEach((val)=>{
        if (val.name === name) {
          val.active = true;

          return;
        }

        val.active = false;
      });
    },
  },
  mounted: function() {
    this.$activeHandle(this.activeName);
  },
};
</script>
