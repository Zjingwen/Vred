<template>
    <li :class='classs' :style='style' @click='itemHandle'>
      <template v-if='mode === "horizontal"'>
        <t-poptip :placement="direction" :width="width" trigger='hover' :offset="offset" :class='[`${profixCls}-poptip`]'>
          <div :class='[profixCls + "-title"]'><slot name='title'/></div>
          <template slot="content"><slot/></template>
        </t-poptip>
      </template>
      <template v-else>
        <div :class='[profixCls + "-title"]'><slot name='title'/></div>
        <slot/>
      </template>
    </li>
</template>
<style src='./index.css' lang="css"></style>
<script>
import {findComponentUpward} from '@util/assist';
import poptip from '../poptip/index';
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
      offset: [0, 0],
    };
  },
  computed: {
    classs: function() {
      let classs = [
        `${profixCls}`, {
          [`active`]: this.active,
        },
        `${profixCls}-poptip-${this.direction}`,
      ];

      return classs;
    },
    style: function() {
      let style = {};

      if (this.height !== 0) {
        style.height = `${this.height}px`;
        style.lineHeight = `${this.height}px`;
      }

      if (this.mode === 'horizontal') {
        switch (this.placement) {
        case 'left':
          style.float = this.placement;
          break;
        case 'right':
          style.float = this.placement;
          break;
        }
      }

      return style;
    },
  },
  methods: {
    itemHandle: function() {
      findComponentUpward(this, 'v-menu').$onClickHandle(this.name);
    },
    isChildrenItem: function() {
      this.direction = 'right-start';
      this.height = findComponentUpward(this, 'v-menu').height;
      this.mode = findComponentUpward(this, 'v-menu').mode;
      this.offset = [-10, 1];

      findComponentUpward(this, 'v-menu-item').style = {
        padding: 0,
      };

      this.$nextTick(()=>{
        this.width = findComponentUpward(this, 'v-menu-item-sub').width;
      });
    },
    isChildrenMenu: function() {
      this.height = findComponentUpward(this, 'v-menu').height;
      this.mode = findComponentUpward(this, 'v-menu').mode;

      this.$nextTick(()=>{
        this.width = this.$el.clientWidth;
      });
    },
  },
  mounted: function() {
    if ( findComponentUpward(this, 'v-menu') ) {
      this.isChildrenMenu();
    }

    if ( findComponentUpward(this, 'v-menu-item') ) {
      this.isChildrenItem();
    }
  },
  components: {
    'tPoptip': poptip,
  },
};
</script>
