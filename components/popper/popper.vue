<template>
  <div :class="classs"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
    @click="handleClick"
    v-clickoutside="handleClose"
  >
    <div ref='referenceElement'><slot /></div>
    <div ref="onPopper" v-show='show'>{{content}}</div>
  </div>
</template>

<style src='./popper.css' lang="css"></style>
<script>
const profixCls = 't-popper';

import popper from './popper.js';
import {oneOf} from '../util/assist';
import clickoutside from '../util/clickoutside';

export default {
  mixins:[popper],
  directives:{
    clickoutside,
  },
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
    trigger:{
      type: String,
      default: 'hover',
      validator:function(val){
        return oneOf(val,['hover','click'])
      }
    },
    isOpen:{
      type: Boolean,
      default: false,
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
  data:function(){
    return{
      show: this.isOpen,
    }
  },
  methods:{
    handleClose:function(){
      if(this.trigger !== 'click'){
        return false;
      };
      this.show = false;
    },
    handleClick:function(){
      this.show = !this.show;
    },
    handleMouseenter:function(){
      if(this.trigger !=='hover') return false;

      this.show = true;
      // console.log('handleMouseenter');
    },
    handleMouseleave:function(){
      if(this.trigger !=='hover') return false;

      this.show = false;
      // console.log('handleMouseleave');
    },
  }
};
</script>
