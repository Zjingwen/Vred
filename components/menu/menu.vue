<template>
    <ul :class='classs' :style='style'>
        <slot></slot>
    </ul>
</template>
<style src='./index.less' lang='less'></style>
<script>
import {oneOf, findComponentsDownward, findComponentUpward} from '@util/assist';

const profixCls = 'v-menu';

export default{
  name: profixCls,
  props: {
    activeName: {
      type: String || Number,
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

      style.textAlign = this.placement;

      if (this.width !== 0 && this.mode === 'vertical') {
        style.width = this.width + 'px';
      }

      if (this.height !== 0 && this.mode === 'horizontal') {
        style.height = this.height + 'px';
        style.lineHeight = this.lineHeight + 'px';
      }

      return style;
    },
  },
  mounted: function() {
    if (this.mode === 'vertical') {
      this.$nextTick(()=>{
        findComponentsDownward(this, 'v-menu-item-group').forEach( (val)=>{
          val.show = false;
        });
      });
    };

    this.activeHandle(this.activeName);
  },
  methods: {
    onClickHandle: function(val) {
      this.activeHandle(val);
      this.$emit('on-select', val);
    },
    activeHandle: function(name) {
      function addActive(val) {
        if (val.name === name) {
          val.active = true;
          const subEl = findComponentUpward(val, 'v-menu-item-sub');
          if (subEl) {
            findComponentsDownward(subEl, 'v-menu-item-group').forEach((group)=>{
              group.show = true;
            });
          };
          return;
        }

        val.active = false;
      }

      this.$nextTick(()=>{
        findComponentsDownward(this, 'v-menu-item-sub').forEach((val)=>addActive(val));
        findComponentsDownward(this, 'v-menu-item').forEach((val)=> addActive(val));
      });
    },
  },
};
</script>
