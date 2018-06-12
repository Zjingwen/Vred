<template>
    <li :class='classs' :style='style' @click='itemHandle'>
        <t-poptip placement="bottom">
          <div :class='[profixCls + "-title"]'><slot name='title'/></div>
          <div slot="content"><slot/></div>
        </t-poptip>
    </li>
</template>
<style src='./index.css' lang="css"></style>
<script>
import {findComponentUpward} from '../util/assist';
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
  components:{
    'tPoptip': poptip
  }
};
</script>
