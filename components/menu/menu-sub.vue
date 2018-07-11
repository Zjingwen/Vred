<template>
  <li :class='classs' :style='style' >
    <template v-if='mode === "horizontal"'>
      <t-poptip :placement="direction" :width="width" trigger='hover' :offset="offset">
        <li :class="[`${profixCls}-poptip`]" @click='itemHandleHorizontal'><slot name='title'/></li>
        <div slot="content"><slot/></div>
      </t-poptip>
    </template>
    <template v-if='mode === "vertical"'>
      <div :class='[`${profixCls}-title`]' @click="itemHandleVertical"><slot name='title'/></div>
      <slot/>
    </template>
  </li>
</template>
<style src='./index.less' lang="less"></style>
<script>
import {findComponentUpward, findComponentsDownward} from '@util/assist';
import poptip from '../poptip';
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
      width: 0,
      mode: '',
      direction: 'bottom',
      offset: [0, 2],
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

      if (this.height !== 0) {
        style.height = `${this.height}px`;
        style.lineHeight = `${this.height}px`;
      }

      return style;
    },
  },
  methods: {
    itemHandleHorizontal: function() {
      findComponentUpward(this, 'v-menu').activeHandle(this.name);
    },
    itemHandleVertical: function() {
      findComponentUpward(this, 'v-menu').activeHandle(this.name);
      findComponentsDownward(this, 'v-menu-item-group').forEach( (val)=>{
        val.show = !val.show;
      });
    },
    isParentMenu: function() {
      this.height = findComponentUpward(this, 'v-menu').height;

      this.$nextTick(()=>{
        this.width = this.$el.clientWidth;
      });
    },
  },
  mounted: function() {
    this.mode = findComponentUpward(this, 'v-menu').mode;

    if ( findComponentUpward(this, 'v-menu') && this.mode === 'horizontal') {
      this.isParentMenu();
    } else {
    }
  },
  components: {
    't-poptip': poptip,
  },
};
</script>
