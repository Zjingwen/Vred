<template>
  <div :class="classs">
    <span ref='referenceElement' style="display:inline-block;"><slot /></span>
    <div ref="onPopper" class='onPopper'>{{content}}</div>
  </div>
</template>

<style src='./tooltip.css' lang="css"></style>
<script>
const profixCls = 't-tooltip';

/**
* https://akryum.github.io/v-tooltip/
*/
// import {VTooltip, VPopover, VClosePopover} from 'v-tooltip';

import popper from './popper.js';
import {oneOf} from '../util/assist';

// Vue.component('t-popover', VPopover);
// Vue.directive('tooltip', VTooltip);
// Vue.directive('close-popover', VClosePopover);

export default {
  mixins:[popper],
  name: profixCls,
  props:{
    content:{
      type: [String, Number],
      default: '',
    },
    placement:{
      type: String,
      default: 'top',
      validator: function(val){
        const defalut = [
          'top',//上中
          'top-start',//上左
          'top-end',//上右
          'right',//右中
          'right-start',//右上
          'right-end',//右下
          'left',//左中
          'left-start',//左上
          'left-end',//左下
          'bottom',//下中
          'bottom-start',//下左
          'bottom-end',//下右
        ];
        return oneOf(val,defalut);
      },
    },
  },
  computed:{
    classs:function(){
      let classs=[
        `${profixCls}`,
      ];
      return classs
    },
  },
};
</script>
