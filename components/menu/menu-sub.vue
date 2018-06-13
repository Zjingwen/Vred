<template>
    <li :class='classs' :style='style' @click='itemHandle'>
      
      <template v-if='mode === "horizontal"'>
        <t-poptip placement="bottom" :width="width" trigger='click' :class='[`${profixCls}-poptip`]'>
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
      placement: '',
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

      if(this.mode === 'horizontal'){
        console.log(this.placement);
        switch(this.placement){
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
  },
  mounted: function() {
    if ( findComponentUpward(this, 'v-menu')) {
      this.height = findComponentUpward(this, 'v-menu').height;
      this.mode = findComponentUpward(this, 'v-menu').mode;
      this.placement = findComponentUpward(this, 'v-menu').placement;

      this.$nextTick(()=>{
        this.width = this.$el.clientWidth;
      })
    }
  },
  components:{
    'tPoptip': poptip
  }
};
</script>
