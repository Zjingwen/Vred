<template>
  <div :class='classs'>
    <div ref="referenceElement"><slot /></div>
    <div ref="onPopper">
      <slot name='content' />
    </div>
  </div>  
</template>
<style src='./poptip.css' lang='css'></style>
<script>
  import {oneOf} from '@util/assist.js';
  import popper from '@mixins/popper.js';

  let profixCls = 't-poptip';

  export default {
    name: profixCls,
    mixins: [popper],
    props:{
      trigger:{
        type: String,
        default: 'hover',
        validator:function(val){
          return oneOf(val,['hover','click']);
        }
      },
      placement: {
        type: String,
        default: 'top',
        validator: function(val) {
          const defalut = [
            'top',
            'top-start',
            'top-end',
            'right',
            'right-start',
            'right-end',
            'left',
            'left-start',
            'left-end',
            'bottom',
            'bottom-start',
            'bottom-end',
          ];
          return oneOf(val, defalut);
      },
      width: {
        type: Number,
        defalut: 200,
      },
      minHeiht: {
        type: Number,
        defalut: 350,
      },
      transfer: {
        type: Boolean,
        defalut: true
      },
      isOpen: {
        type: Boolean,
        defalut: false,
      },
      alaways: {
        type: Boolean,
        defalut: false,
      },
      disabled: {
        type: Boolean,
        defalut: false,
      },
      transfer: {
        type: Boolean,
        defalut: true,
      }
    },
    },
    computed: {
      classs:function() {
        let classs = [
          `${profixCls}`,
        ];

        return classs;
      }
    },
    mounted:function() {
      console.log(this.$refs);
    },
  }
</script>




