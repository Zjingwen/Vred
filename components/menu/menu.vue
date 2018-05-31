<template>
    <ul :class='classs' :style='style'>
        <slot></slot>
    </ul>
</template>
<style lang="css" src='./index.css' scoped></style>
<script>
import {oneOf, findComponentUpward, findComponentsDownward} from '../util/assist';

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

      if (this.width !== 0) {
        style.width = this.width + 'px';
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
        if (val.name == name) {
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
