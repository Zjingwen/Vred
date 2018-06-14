<template>
    <div :class='classs'>
        <slot></slot>
    </div>
</template>
<style src='./index.css' lang="css"></style>
<script>
import {findComponentUpward} from '@util/assist';
const profixCls = 'v-menu-item-group';

export default{
  name: profixCls,
  computed: {
    classs: function() {
      let classs = [
        `${profixCls}`,
      ];

      return classs;
    },
  },
};
</script>
