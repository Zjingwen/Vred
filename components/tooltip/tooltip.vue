<template>
  <div :class="classs">tooltip</div>
</template>

<style src='./tooltip.css' lang="css"></style>
<script>
const profixCls = 't-tooltip';

/**
* https://akryum.github.io/v-tooltip/
*/
// import {VTooltip, VPopover, VClosePopover} from 'v-tooltip';

import popper from './popper.js';

// Vue.component('t-popover', VPopover);
// Vue.directive('tooltip', VTooltip);
// Vue.directive('close-popover', VClosePopover);

export default {
  mixins:[popper],
  name: profixCls,
  computed:{
    classs:function(){
      let classs=[
        `${profixCls}`,
      ];
      return classs
    },
  },
  // directives:{
  //   tooltip: VTooltip,
  // }
};
</script>
