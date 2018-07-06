<template>
    <li :style='style' :class='classs' @click="handleClick"><slot></slot></li>
</template>
<style src='./index.less' lang='less'></style>
<script>
import {findComponentUpward} from '@util/assist';
const profixCls = 'v-menu-item';

export default{
  props: {
    name: {
      type: String || Number,
      default: '',
    },
  },
  name: profixCls,
  data: function() {
    return {
      style: {},
      active: false,
    };
  },
  computed: {
    classs: function() {
      let classs = [
        `${profixCls}`,
        this.active ? 'active' : '',
      ];

      return classs;
    },
  },
  methods: {
    handleClick: function() {
      let parend = findComponentUpward(this, 'v-menu');

      if (parend.mode === 'vertical') {
        let childers = findComponentUpward(this, 'v-menu-item-sub');
        console.log(childers);
        // childers.forEach((val)=>{
        //   val.show = !val.show;
        // });
      };

      parend.onClickHandle(this.name);
    },
  },
};
</script>
