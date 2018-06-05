<template>
  <div :class="classs"
    @mouseenter="handleMouseenter"
    @mouseleave="handleMouseleave"
  >
    <div ref='referenceElement'><slot /></div>
    <div 
      ref="onPopper" 
      class="t-popper-main"
      v-show='show'
      :data-transfer="transfer"
      v-transfer-dom>
      <div class="t-popper-arrow"></div>
      <div class="t-popper-inner">{{content}}</div>
    </div>
  </div>
</template>

<style src='./popper.css' lang="css"></style>
<script>
const profixCls = 't-popper';

import TransferDom from '../util/transfer-dom';
import popper from './popper.js';
import {oneOf} from '../util/assist';

export default {
  mixins:[popper],
  directives:{
    TransferDom
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
    isOpen:{
      type: Boolean,
      default: false,
    },
    always:{
      type: Boolean,
      defalut: false,
    },
    disabled:{
      type: Boolean,
      defalut: false,
    },
    transfer:{
      type: Boolean,
      defalut: true,
    }
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
  mounted:function(){
    
    this.handleVisible();
  },
  methods:{
    handleVisible:function(){
      if(this.disabled){
        this.show = false;

        return true;
      }

      if(this.always){
        this.show = true;
        
        return true;
      }


      return false;
    },
    handleMouseenter:function(){
      if(this.handleVisible()){
        return false;
      }

      this.show = true;
    },
    handleMouseleave:function(){
      if(this.handleVisible()){
        return false;
      }

      this.show = false;
    },
  }
};
</script>
