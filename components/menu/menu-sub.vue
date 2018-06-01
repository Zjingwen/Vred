<template>
    <li :class='classs' :style='style' @click='itemHandle'>
        <div :class='[profixCls + "-title"]'><slot name='title'></slot></div>
        <slot></slot>
    </li>
</template>
<style lang="css" src='./index.css' scoped></style>
<script>
import {findComponentUpward} from '../util/assist';
const profixCls = 'v-menu-item-sub';

export default{
  name: profixCls,
  props: {
    name: {
      type: [String, Number],
      dafeult: '',
    },
  },
  data: function() {
    return {
      profixCls: profixCls,
      active: false,
      height: 0,
    };
  },
  computed: {
    classs: function() {
      let classs = [
        `${profixCls}`, {
          [`active`]: this.active,
        },
      ];

      return classs;
    },
    style: function() {
      let style = {};

      if (this.height) {
        style.height = this.height + 'px';
        style.lineHeight = this.height + 'px';
      }

      return style;
    },
  },
  methods: {
    itemHandle: function() {
      findComponentUpward(this, 'v-menu').$onClickHandle(this.name);
    },
  },
  mounted: function() {
    if ( findComponentUpward(this, 'v-menu') && findComponentUpward(this, 'v-menu').height) {
      this.height = findComponentUpward(this, 'v-menu').height;
    }
  },
};
</script>
